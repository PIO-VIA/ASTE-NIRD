// app/jeux/quiz/components/QuizCard.tsx
'use client';

import { QuizMetadata } from '@/lib/quiz/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, HelpCircle, Zap, Award, Target, Brain } from 'lucide-react';

interface QuizCardProps {
  quiz: QuizMetadata;
  userStats?: {
    completed: boolean;
    bestScore?: number;
    bestPercentage?: number;
    completedAt?: number;
  };
}

export default function QuizCard({ quiz, userStats }: QuizCardProps) {
  const router = useRouter();

  const difficultyColors = {
    debutant: 'success',
    intermediaire: 'warning',
    avance: 'error',
  } as const;

  const categoryColors = {
    diagnostic: 'info',
    connaissance: 'default',
    action: 'success',
  } as const;

  const categoryIcons = {
    diagnostic: <Target size={12} className="mr-1" />,
    connaissance: <Brain size={12} className="mr-1" />,
    action: <Zap size={12} className="mr-1" />,
  };

  return (
    <Card
      hover
      gradient
      onClick={() => router.push(`/jeux/quiz/${quiz.slug}`)}
      className="p-6 space-y-4 relative overflow-hidden group cursor-pointer bg-white/5 border-white/10"
    >
      {/* Badge de complétion */}
      {userStats?.completed && (
        <div className="absolute top-4 right-4">
          <Badge variant="success" size="sm">
            <CheckCircle size={12} className="mr-1" />
            Terminé
          </Badge>
        </div>
      )}

      {/* Icône */}
      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
        {quiz.icon}
      </div>

      {/* Titre et description */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white group-hover:text-nird-gold transition-colors font-carter">
          {quiz.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 font-outfit">{quiz.description}</p>
      </div>

      {/* Métadonnées */}
      <div className="flex flex-wrap gap-2">
        <Badge variant={categoryColors[quiz.category]} size="sm">
          {categoryIcons[quiz.category]}
          {quiz.category}
        </Badge>
        <Badge variant={difficultyColors[quiz.difficulty]} size="sm">
          <Award size={12} className="mr-1" />
          {quiz.difficulty}
        </Badge>
      </div>

      {/* Infos */}
      <div className="flex items-center gap-4 text-sm text-gray-400 font-outfit">
        <span className="flex items-center gap-1">
          <Clock size={14} />
          <span>{quiz.estimatedTime} min</span>
        </span>
        <span className="flex items-center gap-1">
          <HelpCircle size={14} />
          <span>{quiz.questionsCount} questions</span>
        </span>
      </div>

      {/* Meilleur score */}
      {userStats?.bestPercentage !== undefined && (
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400 font-outfit">Meilleur score</span>
            <span className="text-lg font-bold text-nird-gold font-carter">
              {userStats.bestPercentage}%
            </span>
          </div>
          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-nird-gold to-yellow-200"
              style={{ width: `${userStats.bestPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Effet de gradient au survol */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${quiz.color}20 0%, transparent 70%)`,
        }}
      />
    </Card>
  );
}