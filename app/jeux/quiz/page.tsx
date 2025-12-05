// app/jeux/quiz/page.tsx
'use client';

import { allQuizzes } from '@/lib/quiz/data';
import { getUserStats, getBestPercentage } from '@/lib/quiz/utils';
import QuizCard from './components/QuizCard';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [userStats, setUserStats] = useState<UserQuizStats | null>(null);

  useEffect(() => {
    setUserStats(getUserStats());
  }, []);

  return (
    <div className="min-h-screen bg-nird-night text-white py-12 px-4 font-outfit">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold font-carter bg-gradient-to-r from-nird-gold to-yellow-200 bg-clip-text text-transparent">
            {t('quiz.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-outfit">
            {t('quiz.subtitle')}
          </p>
        </div>

        {/* Statistiques utilisateur */}
        {userStats && userStats.totalQuizCompleted > 0 && (
          <Card className="p-6 bg-white/5 border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2 font-carter">
                <Trophy className="text-nird-gold" size={24} />
                <span>{t('quiz.stats.title')}</span>
              </h2>
              <Badge variant="info">
                {userStats.badges.length} badge{userStats.badges.length > 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                <div className="text-3xl font-bold text-nird-gold font-carter">
                  {userStats.totalQuizCompleted}
                </div>
                <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1 font-outfit">
                  <Gamepad2 size={14} />
                  {t('quiz.stats.completed')}
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                <div className="text-3xl font-bold text-nird-red font-carter">
                  {userStats.totalPoints}
                </div>
                <div className="text-sm text-gray-400 mt-1 font-outfit">{t('quiz.stats.points')}</div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                <div className="text-3xl font-bold text-nird-gold font-carter">
                  {Math.floor(userStats.totalTimeSpent / 60)}
                </div>
                <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1 font-outfit">
                  <Clock size={14} />
                  {t('quiz.stats.minutes')}
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                <div className="text-3xl font-bold text-nird-green font-carter">
                  {userStats.badges.length}
                </div>
                <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1 font-outfit">
                  <Award size={14} />
                  {t('quiz.stats.badges')}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Introduction */}
        <Card className="p-6 bg-white/5 backdrop-blur-sm border-nird-gold/20">
          <div className="flex items-start gap-4">
            <Gamepad2 className="text-4xl text-nird-gold" size={40} />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-nird-gold mb-2 font-carter">
                {t('quiz.howItWorks.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed font-outfit">
                {t('quiz.howItWorks.description')}
              </p>
            </div>
          </div>
        </Card>

        {/* Liste des quiz */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-carter">
            <BookOpen className="text-nird-gold" size={24} />
            <span>{t('quiz.available')}</span>
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
        <Card className="p-8 text-center bg-gradient-to-br from-nird-red/20 to-nird-gold/20 border-nird-gold/30">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2 font-carter">
            <Shield className="text-nird-gold" size={24} />
            {t('quiz.cta.title')}
            <Shield className="text-nird-gold" size={24} />
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-outfit">
            {t('quiz.cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="info" size="lg" className="flex items-center gap-1">
              <Clock size={14} />
              {t('quiz.cta.time')}
            </Badge>
            <Badge variant="success" size="lg" className="flex items-center gap-1">
              <TrendingUp size={14} />
              {t('quiz.cta.progress')}
            </Badge>
            <Badge variant="warning" size="lg" className="flex items-center gap-1">
              <Info size={14} />
              {t('quiz.cta.share')}
            </Badge>
          </div>
        </Card>


        {/* Footer */}
        <div className="text-center text-sm text-gray-500 space-y-2 font-outfit">
          <p className="flex items-center justify-center gap-1">
            <Brain size={14} />
            Une initiative du{' '}
            <a
              href="https://nird.forge.apps.education.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nird-gold hover:underline"
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