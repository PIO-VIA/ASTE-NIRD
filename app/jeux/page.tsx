// app/jeux/page.tsx
'use client';

import { useRouter } from 'next/navigation';
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
  Castle,
  Sparkles
} from 'lucide-react';

export default function JeuxHomePage() {
  const router = useRouter();

  const activities = [
    {
      id: 'quiz',
      title: 'Quiz',
      icon: <Brain className="text-blue-400" size={48} />,
      description: 'Teste tes connaissances sur le numérique libre et découvre ton profil de résistant',
      available: true,
      count: '3 quiz',
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: 'defis',
      title: 'Défis',
      icon: <Trophy className="text-yellow-400" size={48} />,
      description: 'Relève des défis progressifs pour devenir un expert de la transition numérique',
      available: false,
      count: 'Bientôt',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'enigmes',
      title: 'Énigmes',
      icon: <Search className="text-green-400" size={48} />,
      description: 'Résous des énigmes et découvre des secrets cachés dans le village numérique',
      available: false,
      count: 'Bientôt',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <Castle className="text-8xl text-blue-400 animate-bounce" size={96} />
          </div>
          
          <h1 className="text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Village des Jeux NIRD
            </span>
          </h1>
          
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bienvenue dans le village des irréductibles numériques !
            Rejoins la résistance contre l'Empire des Big Tech à travers des quiz,
            défis et énigmes passionnants.
          </p>
        </div>

        {/* Mission */}
        <Card className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
          <div className="flex items-start gap-6">
            <Shield className="text-6xl text-blue-400" size={64} />
            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold text-blue-400">
                Ta mission, si tu l'acceptes
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Apprends à maîtriser le numérique libre, découvre comment ton établissement
                peut gagner en autonomie, et deviens un acteur de la transition numérique
                responsable. Chaque activité te rapprochera du statut de{' '}
                <span className="text-yellow-400 font-bold flex items-center gap-1 inline-flex">
                  <Sparkles size={20} />
                  Druide du Libre
                  <Sparkles size={20} />
                </span> !
              </p>
            </div>
          </div>
        </Card>

        {/* Activités */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-100 text-center">
            Choisis ton activité
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                hover={activity.available}
                className={`p-8 text-center space-y-4 ${
                  !activity.available ? 'opacity-60' : ''
                }`}
              >
                <div
                  className={`transform transition-transform duration-300 flex justify-center ${
                    activity.available ? 'group-hover:scale-110' : ''
                  }`}
                >
                  {activity.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-100">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400">{activity.description}</p>
                </div>

                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${activity.color} text-white`}
                >
                  {activity.count}
                </div>

                <Button
                  variant={activity.available ? 'primary' : 'ghost'}
                  size="lg"
                  fullWidth
                  disabled={!activity.available}
                  onClick={() => activity.available && router.push(`/jeux/${activity.id}`)}
                >
                  {activity.available ? 'Commencer' : 'Bientôt disponible'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Pourquoi jouer */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-3xl text-blue-400" size={32} />
              <h3 className="text-xl font-bold text-gray-100">
                Apprends en t'amusant
              </h3>
            </div>
            <p className="text-gray-400">
              Découvre les enjeux du numérique libre à travers des activités ludiques
              et engageantes. Pas de cours magistral, que de la pratique !
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-3xl text-purple-400" size={32} />
              <h3 className="text-xl font-bold text-gray-100">
                Suis ta progression
              </h3>
            </div>
            <p className="text-gray-400">
              Gagne des points, débloque des badges, et monte en compétence.
              Ta progression est sauvegardée automatiquement.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Share2 className="text-3xl text-green-400" size={32} />
              <h3 className="text-xl font-bold text-gray-100">
                Partage tes résultats
              </h3>
            </div>
            <p className="text-gray-400">
              Partage tes résultats sur les réseaux sociaux et inspire d'autres
              à rejoindre la résistance numérique !
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="text-3xl text-yellow-400" size={32} />
              <h3 className="text-xl font-bold text-gray-100">
                Reçois des conseils
              </h3>
            </div>
            <p className="text-gray-400">
              Obtiens des recommandations personnalisées selon ton profil pour
              progresser vers l'autonomie numérique.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-12 text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/50">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 flex items-center justify-center gap-2">
            <Sword className="text-yellow-400" size={40} />
            Prêt à rejoindre la résistance ?
            <Sword className="text-yellow-400" size={40} />
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Commence par les quiz pour découvrir ton profil de résistant numérique !
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('/jeux/quiz')}
            className="text-xl px-8 py-4"
          >
            <Gamepad2 className="mr-3" size={24} />
            Commencer les quiz
          </Button>
        </Card>
      </div>
    </div>
  );
}