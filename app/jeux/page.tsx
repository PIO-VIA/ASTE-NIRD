'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Brain,
  Trophy,
  Search,
  Shield,
  GraduationCap,
  TrendingUp,
  Share2,
  Lightbulb,
  Sword,
  Gamepad2,
  Sparkles
} from 'lucide-react';

export default function JeuxHomePage() {
  const router = useRouter();
  const { t } = useTranslation();

  const activities = [
    {
      id: 'quiz',
      title: t('games.activities.quiz.title'),
      icon: <Brain className="text-nird-gold" size={48} />,
      description: t('games.activities.quiz.description'),
      available: true,
      count: t('games.activities.quiz.count'),
      color: 'from-blue-500 to-purple-600',
      startText: t('games.activities.quiz.start'),
    },
    {
      id: 'defis',
      title: t('games.activities.challenges.title'),
      icon: <Trophy className="text-nird-gold" size={48} />,
      description: t('games.activities.challenges.description'),
      available: false,
      count: t('games.activities.challenges.count'),
      color: 'from-yellow-500 to-orange-600',
      startText: t('games.activities.challenges.start'),
    },
    {
      id: 'enigmes',
      title: t('games.activities.enigmas.title'),
      icon: <Search className="text-nird-gold" size={48} />,
      description: t('games.activities.enigmas.description'),
      available: false,
      count: t('games.activities.enigmas.count'),
      color: 'from-green-500 to-emerald-600',
      startText: t('games.activities.enigmas.start'),
    },
  ];

  return (
    <div className="min-h-screen bg-nird-night py-12 px-4 font-outfit">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-8 relative">
          <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-nird-gold/20 border border-nird-gold/30">
            <Image
              src="/assets/jeux-hero.png"
              alt="Village des Jeux NIRD"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nird-night via-nird-night/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-6xl font-bold font-carter mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-nird-gold via-yellow-200 to-nird-gold bg-clip-text text-transparent">
                  {t('games.title')}
                </span>
              </h1>

              <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-outfit">
                {t('games.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <Card className="p-8 bg-white/5 backdrop-blur-sm border-nird-gold/20">
          <div className="flex items-start gap-6">
            <Shield className="text-6xl text-nird-gold" size={64} />
            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold text-nird-gold font-carter">
                {t('games.mission.title')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-outfit">
                {t('games.mission.description')}{' '}
                <span className="text-nird-gold font-bold flex items-center gap-1 inline-flex">
                  <Sparkles size={20} />
                  {t('games.mission.druid')}
                  <Sparkles size={20} />
                </span> !
              </p>
            </div>
          </div>
        </Card>

        {/* Activités */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white text-center font-carter">
            {t('games.activities.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                hover={activity.available}
                className={`p-8 text-center space-y-4 bg-white/5 border-white/10 ${!activity.available ? 'opacity-60' : ''}`}
              >
                <div
                  className={`transform transition-transform duration-300 flex justify-center ${activity.available ? 'group-hover:scale-110' : ''}`}
                >
                  {activity.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-nird-gold font-carter">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 font-outfit">{activity.description}</p>
                </div>

                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-nird-gold border border-nird-gold/30">
                  {activity.count}
                </div>

                <Button
                  variant={activity.available ? 'primary' : 'ghost'}
                  size="lg"
                  fullWidth
                  disabled={!activity.available}
                  onClick={() => activity.available && router.push(`/jeux/${activity.id}`)}
                  className={activity.available ? "bg-nird-gold text-nird-night hover:bg-yellow-400" : ""}
                >
                  {activity.startText}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Pourquoi jouer */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 bg-white/5 border-white/10">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-3xl text-nird-gold" size={32} />
              <h3 className="text-xl font-bold text-white font-carter">
                {t('games.benefits.fun.title')}
              </h3>
            </div>
            <p className="text-gray-400 font-outfit">
              {t('games.benefits.fun.description')}
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-white/5 border-white/10">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-3xl text-nird-gold" size={32} />
              <h3 className="text-xl font-bold text-white font-carter">
                {t('games.benefits.progress.title')}
              </h3>
            </div>
            <p className="text-gray-400 font-outfit">
              {t('games.benefits.progress.description')}
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-white/5 border-white/10">
            <div className="flex items-center gap-3">
              <Share2 className="text-3xl text-nird-gold" size={32} />
              <h3 className="text-xl font-bold text-white font-carter">
                {t('games.benefits.share.title')}
              </h3>
            </div>
            <p className="text-gray-400 font-outfit">
              {t('games.benefits.share.description')}
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-white/5 border-white/10">
            <div className="flex items-center gap-3">
              <Lightbulb className="text-3xl text-nird-gold" size={32} />
              <h3 className="text-xl font-bold text-white font-carter">
                {t('games.benefits.tips.title')}
              </h3>
            </div>
            <p className="text-gray-400 font-outfit">
              {t('games.benefits.tips.description')}
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-12 text-center bg-gradient-to-br from-nird-red/20 to-nird-gold/20 border-nird-gold/30">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2 font-carter">
            <Sword className="text-nird-gold" size={40} />
            {t('games.cta.title')}
            <Sword className="text-nird-gold" size={40} />
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-outfit">
            {t('games.cta.description')}
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('/jeux/quiz')}
            className="text-xl px-8 py-4 bg-nird-gold text-nird-night hover:bg-yellow-400 font-carter"
          >
            <Gamepad2 className="mr-3" size={24} />
            {t('games.cta.button')}
          </Button>
        </Card>
      </div>
    </div>
  );
}