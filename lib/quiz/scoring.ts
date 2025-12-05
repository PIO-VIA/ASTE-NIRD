// lib/quiz/scoring.ts

import { QuizAnswer, QuizQuestion } from './types';

/**
 * Calcule le score pour une réponse donnée
 */
export function calculateAnswerScore(
  question: QuizQuestion,
  selectedOptionId: string
): number {
  const selectedOption = question.options.find((opt) => opt.id === selectedOptionId);
  return selectedOption?.points || 0;
}

/**
 * Calcule le score total d'un quiz
 */
export function calculateTotalScore(answers: QuizAnswer[]): number {
  return answers.reduce((total, answer) => total + answer.pointsEarned, 0);
}

/**
 * Calcule le score maximum possible d'un quiz
 */
export function calculateMaxScore(questions: QuizQuestion[]): number {
  return questions.reduce((total, question) => {
    const maxPoints = Math.max(...question.options.map((opt) => opt.points));
    return total + maxPoints;
  }, 0);
}

/**
 * Vérifie si une réponse est correcte
 */
export function isAnswerCorrect(
  question: QuizQuestion,
  selectedOptionId: string
): boolean {
  const maxPoints = Math.max(...question.options.map((opt) => opt.points));
  const selectedOption = question.options.find((opt) => opt.id === selectedOptionId);
  
  return selectedOption ? selectedOption.points === maxPoints : false;
}

/**
 * Calcule le nombre de bonnes réponses
 */
export function countCorrectAnswers(answers: QuizAnswer[]): number {
  return answers.filter((answer) => answer.isCorrect).length;
}

/**
 * Calcule le pourcentage de bonnes réponses
 */
export function calculateCorrectPercentage(
  correctCount: number,
  totalCount: number
): number {
  if (totalCount === 0) return 0;
  return Math.round((correctCount / totalCount) * 100);
}

/**
 * Génère des statistiques détaillées pour un quiz
 */
export function generateQuizStatistics(
  answers: QuizAnswer[],
  questions: QuizQuestion[]
) {
  const totalScore = calculateTotalScore(answers);
  const maxScore = calculateMaxScore(questions);
  const percentage = (totalScore / maxScore) * 100;
  const correctCount = countCorrectAnswers(answers);
  const correctPercentage = calculateCorrectPercentage(correctCount, questions.length);
  const totalTime = answers.reduce((sum, answer) => sum + answer.timeSpent, 0);
  const averageTimePerQuestion = totalTime / answers.length;
  
  return {
    totalScore,
    maxScore,
    percentage: Math.round(percentage),
    correctCount,
    totalQuestions: questions.length,
    correctPercentage,
    totalTime,
    averageTimePerQuestion: Math.round(averageTimePerQuestion),
  };
}

export function calculateProfil(
  totalScore: number,
  maxScore: number,
  profils: import('./types').QuizProfil[]
): import('./types').QuizProfil {
  const scorePercentage = (totalScore / maxScore) * 100;

  // Trouver le profil correspondant au score
  const matchingProfil = profils.find(
    (profil) => scorePercentage >= profil.minScore && scorePercentage <= profil.maxScore
  );

  // Fallback au premier profil si aucun match trouvé
  return matchingProfil || profils[0];
}