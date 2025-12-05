'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Quiz, QuizAnswer, QuizProgress, QuizResult } from '@/lib/quiz/types';
import {
  saveProgress,
  loadProgress,
  saveResult,
  clearProgress,
} from '@/lib/quiz/utils';
import {
  calculateAnswerScore,
  isAnswerCorrect,
  calculateMaxScore,
  calculateProfil,  
} from '@/lib/quiz/scoring';
import ProgressBar from './ProgressBar';
import ScoreDisplay from './ScoreDisplay';
import Question from './Question';
import ExplanationPanel from './ExplanationPanel';
import ResultCard from './ResultCard';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { X, ArrowLeft, ArrowRight, Lightbulb, Trophy } from 'lucide-react';

interface QuizContainerProps {
  quiz: Quiz;
}

export default function QuizContainer({ quiz }: QuizContainerProps) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const maxScore = calculateMaxScore(quiz.questions);
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  // Charger la progression sauvegardée au montage
  useEffect(() => {
    const savedProgress = loadProgress(quiz.metadata.id);
    
    if (savedProgress) {
      const shouldResume = window.confirm(
        'Une progression sauvegardée a été trouvée. Voulez-vous reprendre où vous vous êtes arrêté ?'
      );
      
      if (shouldResume) {
        setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
        setAnswers(savedProgress.answers);
        setTotalScore(savedProgress.totalScore);
      } else {
        clearProgress(quiz.metadata.id);
      }
    }
  }, [quiz.metadata.id]);

  // Sauvegarder la progression automatiquement
  useEffect(() => {
    if (answers.length > 0 && !isCompleted) {
      const progress: QuizProgress = {
        quizId: quiz.metadata.id,
        currentQuestionIndex,
        answers,
        startTime,
        totalScore,
        maxScore,
      };
      saveProgress(quiz.metadata.id, progress);
    }
  }, [currentQuestionIndex, answers, totalScore, quiz.metadata.id, startTime, maxScore, isCompleted]);

  const handleAnswer = (optionId: string) => {
    if (isAnswered) return;

    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const pointsEarned = calculateAnswerScore(currentQuestion, optionId);
    const isCorrect = isAnswerCorrect(currentQuestion, optionId);

    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
      isCorrect,
      pointsEarned,
      timeSpent,
      timestamp: Date.now(),
    };

    setSelectedOptionId(optionId);
    setIsAnswered(true);
    setAnswers([...answers, answer]);
    setTotalScore(totalScore + pointsEarned);
    
    // Afficher l'explication après un petit délai
    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      
      // Charger la réponse précédente
      const previousAnswer = answers[currentQuestionIndex - 1];
      if (previousAnswer) {
        setSelectedOptionId(previousAnswer.selectedOptionId);
        setIsAnswered(true);
        setShowExplanation(true);
      }
    }
  };

  const completeQuiz = () => {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const percentage = Math.round((totalScore / maxScore) * 100);
    const profil = calculateProfil(totalScore, maxScore, quiz.profils);

    const quizResult: QuizResult = {
      quizId: quiz.metadata.id,
      quizTitle: quiz.metadata.title,
      answers,
      totalScore,
      maxScore,
      percentage,
      profil,
      completedAt: Date.now(),
      timeSpent: totalTime,
    };

    setResult(quizResult);
    setIsCompleted(true);
    saveResult(quizResult);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setTotalScore(0);
    setQuestionStartTime(Date.now());
    setIsCompleted(false);
    setResult(null);
    clearProgress(quiz.metadata.id);
  };

  const handleQuit = () => {
    const shouldQuit = window.confirm(
      'Êtes-vous sûr de vouloir quitter ? Votre progression sera sauvegardée.'
    );
    
    if (shouldQuit) {
      router.push('/jeux/quiz');
    }
  };

  // Afficher les résultats si terminé
  if (isCompleted && result) {
    return <ResultCard result={result} onRestart={handleRestart} />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* En-tête avec barre de progression et score */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-100">
            {quiz.metadata.title}
          </h1>
          <Button variant="ghost" size="sm" onClick={handleQuit}>
            <X size={16} className="mr-1" />
            Quitter
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 w-full">
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={quiz.questions.length}
              variant={totalScore / maxScore > 0.8 ? 'success' : 'default'}
            />
          </div>
          
          <ScoreDisplay
            currentScore={totalScore}
            maxScore={maxScore}
            variant="minimal"
            animated
          />
        </div>
      </Card>

      {/* Question */}
      <Card className="p-8">
        <Question
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quiz.questions.length}
          onAnswer={handleAnswer}
          selectedOptionId={selectedOptionId || undefined}
          isAnswered={isAnswered}
          showCorrect={isAnswered}
        />
      </Card>

      {/* Explication */}
      {showExplanation && isAnswered && selectedOptionId && (
        <ExplanationPanel
          explanation={currentQuestion.explanation}
          isCorrect={isAnswerCorrect(currentQuestion, selectedOptionId)}
          source={currentQuestion.source}
          sourceUrl={currentQuestion.sourceUrl}
          pointsEarned={calculateAnswerScore(currentQuestion, selectedOptionId)}
          maxPoints={Math.max(...currentQuestion.options.map((o) => o.points))}
        />
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        {currentQuestionIndex > 0 && (
          <Button
            variant="ghost"
            size="lg"
            onClick={handlePrevious}
            className="flex-1"
          >
            <ArrowLeft size={20} className="mr-2" />
            Précédent
          </Button>
        )}
        
        <Button
          variant="primary"
          size="lg"
          onClick={handleNext}
          disabled={!isAnswered}
          className="flex-1"
        >
          {isLastQuestion ? (
            <>
              Voir les résultats
              <Trophy size={20} className="ml-2" />
            </>
          ) : (
            <>
              Suivant
              <ArrowRight size={20} className="ml-2" />
            </>
          )}
        </Button>
      </div>

      {/* Aide */}
      {!isAnswered && (
        <div className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
          <Lightbulb size={14} />
          Sélectionne une réponse pour continuer
        </div>
      )}
    </div>
  );
}