// app/jeux/quiz/page.tsx
'use client';

import { allQuizzes } from '@/lib/quiz/data';
import { getUserStats, getBestPercentage } from '@/lib/quiz/utils';
import QuizCard from './components/QuizCard';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useEffect, useState } from 'react';
import { UserQuizStats } from '@/lib/quiz/types';
import { 
  Trophy, 
  Gamepad2, 
  Clock, 
  Award, 
  Brain, 
  BookOpen,
  TrendingUp,
  Shield,
  Info
} from 'lucide-react';

export default function QuizPage() {
  const [userStats, setUserStats] = useState<UserQuizStats | null>(null);

  useEffect(() => {
    setUserStats(getUserStats());
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Village des Quiz NIRD
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Teste tes connaissances et découvre ton profil de résistant numérique !
          </p>
        </div>

        {/* Statistiques utilisateur */}
        {userStats && userStats.totalQuizCompleted > 0 && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Trophy className="text-yellow-400" size={24} />
                <span>Tes statistiques</span>
              </h2>
              <Badge variant="info">
                {userStats.badges.length} badge{userStats.badges.length > 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {userStats.totalQuizCompleted}
                </div>
                <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
                  <Gamepad2 size={14} />
                  Quiz terminés
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {userStats.totalPoints}
                </div>
                <div className="text-sm text-gray-400 mt-1">Points totaux</div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {Math.floor(userStats.totalTimeSpent / 60)}
                </div>
                <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
                  <Clock size={14} />
                  Minutes jouées
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">
                  {userStats.badges.length}
                </div>
                <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
                  <Award size={14} />
                  Badges obtenus
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Introduction */}
        <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
          <div className="flex items-start gap-4">
            <Gamepad2 className="text-4xl text-blue-400" size={40} />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-400 mb-2">
                Comment ça marche ?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Chaque quiz évalue un aspect différent de ton rapport au numérique libre.
                Réponds aux questions, découvre ton profil (Vercingétorix, Guerrier, Astérix ou Panoramix)
                et reçois des recommandations personnalisées pour progresser vers l'autonomie numérique !
              </p>
            </div>
          </div>
        </Card>

        {/* Liste des quiz */}
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <BookOpen className="text-blue-400" size={24} />
            <span>Quiz disponibles</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allQuizzes.map((quiz) => {
              const bestPercentage = getBestPercentage(quiz.metadata.id);
              const completed = bestPercentage !== null;

              return (
                <QuizCard
                  key={quiz.metadata.id}
                  quiz={quiz.metadata}
                  userStats={{
                    completed,
                    bestPercentage: bestPercentage || undefined,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <Card className="p-8 text-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
          <h2 className="text-2xl font-bold text-gray-100 mb-3 flex items-center justify-center gap-2">
            <Shield className="text-yellow-400" size={24} />
            Prêt à rejoindre la résistance ?
            <Shield className="text-yellow-400" size={24} />
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Commence par le quiz diagnostic pour évaluer ton niveau de dépendance
            aux Big Tech, puis explore les autres quiz pour approfondir tes connaissances !
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="info" size="lg" className="flex items-center gap-1">
              <Clock size={14} />
              15-20 minutes par quiz
            </Badge>
            <Badge variant="success" size="lg" className="flex items-center gap-1">
              <TrendingUp size={14} />
              Progression sauvegardée
            </Badge>
            <Badge variant="warning" size="lg" className="flex items-center gap-1">
              <Info size={14} />
              Résultats partageables
            </Badge>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p className="flex items-center justify-center gap-1">
            <Brain size={14} />
            Une initiative du{' '}
            <a
              href="https://nird.forge.apps.education.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Collectif NIRD
            </a>
          </p>
          <p>Pour un numérique éducatif libre, responsable et durable</p>
        </div>
      </div>
    </div>
  );
}