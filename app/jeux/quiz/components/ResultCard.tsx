// app/jeux/quiz/components/ResultCard.tsx
'use client';

import { QuizResult } from '@/lib/quiz/types';
import { formatTime, formatDate } from '@/lib/quiz/utils';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProfilBadge from './ProfilBadge';
import ShareButton from './ShareButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  Award, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Home, 
  RefreshCw,
  Clock,
  CheckCircle,
  Lightbulb,
  Trophy,
  BookOpen
} from 'lucide-react';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const router = useRouter();
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const correctAnswers = result.answers.filter((a) => a.isCorrect).length;
  const totalQuestions = result.answers.length;
  
  useEffect(() => {
    // Animation du score
    const duration = 2000;
    const steps = 60;
    const increment = result.totalScore / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= result.totalScore) {
        setAnimatedScore(result.totalScore);
        clearInterval(timer);
        
        // Confetti si excellent score
        if (result.percentage >= 80) {
          setShowConfetti(true);
        }
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [result.totalScore, result.percentage]);
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {['🎉', '⭐', '✨', '🎊', '🏆'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}
      
      {/* Hero Section */}
      <Card className="p-8 text-center space-y-6">
        {/* Badge du profil */}
        <div className="flex justify-center">
          <ProfilBadge profil={result.profil} size="xl" animated />
        </div>
        
        {/* Titre et sous-titre du profil */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-100 flex items-center justify-center gap-2">
            <Award size={36} />
            {result.profil.title}
          </h1>
          <p className="text-xl text-gray-400">{result.profil.subtitle}</p>
        </div>
        
        {/* Score principal avec jauge circulaire */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            {/* Cercle de fond */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-gray-700"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${
                  2 * Math.PI * 88 * (1 - result.percentage / 100)
                }`}
                className="transition-all duration-2000 ease-out"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Score au centre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-blue-400">
                {result.percentage}%
              </span>
              <span className="text-sm text-gray-400 mt-1">
                {animatedScore} / {result.maxScore} pts
              </span>
            </div>
          </div>
        </div>
        
        {/* Description du profil */}
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {result.profil.description}
        </p>
      </Card>
      
      {/* Statistiques détaillées */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          <BarChart3 size={24} />
          Statistiques détaillées
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">
              {correctAnswers}
            </div>
            <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
              <CheckCircle size={14} />
              Bonnes réponses
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">
              {totalQuestions}
            </div>
            <div className="text-sm text-gray-400 mt-1">Questions</div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {formatTime(result.timeSpent)}
            </div>
            <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
              <Clock size={14} />
              Temps total
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">
              {Math.round(result.timeSpent / totalQuestions)}s
            </div>
            <div className="text-sm text-gray-400 mt-1">Par question</div>
          </div>
        </div>
        
        {/* Graphique de progression */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Précision</span>
            <span className="text-sm font-medium text-blue-400">
              {Math.round((correctAnswers / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-1000"
              style={{
                width: `${(correctAnswers / totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>
      </Card>
      
      {/* Recommandations */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          <Lightbulb size={24} />
          Recommandations pour progresser
        </h2>
        
        <ul className="space-y-3">
          {result.profil.recommendations.map((recommendation, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300 bg-gray-900 rounded-lg p-3"
            >
              <span className="text-blue-400 flex-shrink-0">→</span>
              <span>{recommendation}</span>
            </li>
          ))}
        </ul>
      </Card>
      
      {/* Prochaines étapes */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          <Target size={24} />
          Prochaines étapes
        </h2>
        
        <div className="grid gap-3">
          {result.profil.nextSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-300 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4"
            >
              <span className="text-2xl">{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </Card>
      
      {/* Partage sur les réseaux */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-100 mb-4 text-center">
          Partage ton résultat ! <Trophy className="inline ml-2" size={24} />
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          <ShareButton result={result} platform="twitter" />
          <ShareButton result={result} platform="linkedin" />
          <ShareButton result={result} platform="clipboard" />
        </div>
      </Card>
      
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onRestart}
          className="flex-1"
        >
          <RefreshCw size={20} className="mr-2" />
          Refaire ce quiz
        </Button>
        
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={() => router.push('/jeux/quiz')}
          className="flex-1"
        >
          <Home size={20} className="mr-2" />
          Autres quiz
        </Button>
      </div>
      
      {/* Date de complétion */}
      <div className="text-center text-sm text-gray-500">
        <BookOpen size={14} className="inline mr-1" />
        Quiz complété le {formatDate(result.completedAt)}
      </div>
    </div>
  );
}