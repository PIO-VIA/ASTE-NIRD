// app/jeux/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Castle,
  Brain,
  Trophy,
  Search,
  Clock,
  Target,
  Users,
  Lightbulb,
  Shield,
  Sparkles,
  Zap,
  ArrowRight,
  Lock,
} from 'lucide-react';

export default function JeuxHomePage() {
  const router = useRouter();

  const activities = [
    {
      id: 'quiz',
      title: 'Quiz',
      icon: <Brain className="w-20 h-20 text-blue-400" />,
      description: 'Teste tes connaissances sur le numérique libre et découvre ton profil de résistant',
      available: true,
      count: '3 quiz disponibles',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-900/20 to-purple-900/20',
      borderColor: 'border-blue-500/30',
      disabled: false,
    },
    {
      id: 'defis',
      title: 'Défis',
      icon: <Trophy className="w-20 h-20 text-yellow-400" />,
      description: 'Relève des défis progressifs pour devenir un expert de la transition numérique',
      available: false,
      count: '12 défis à venir',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500/30',
      disabled: true, // DÉSACTIVÉ
    },
    {
      id: 'enigmes',
      title: 'Énigmes',
      icon: <Search className="w-20 h-20 text-green-400" />,
      description: 'Résous des énigmes et découvre des secrets cachés dans le village numérique',
      available: false,
      count: '8 énigmes à venir',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500/30',
      disabled: false, // ACTIF (visible)
    },
  ];

  const handleActivityClick = (activity: typeof activities[0]) => {
    if (activity.disabled) {
      return; // Pas d'action si désactivé
    }
    
    if (activity.available) {
      router.push(`/jeux/${activity.id}`);
    } else {
      // Afficher une notification pour les activités non disponibles
      alert(`🚧 ${activity.title} - Bientôt disponible !\n\nCette fonctionnalité est en cours de développement. Restez à l'écoute ! 🚀`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <Castle className="w-24 h-24 text-blue-400 animate-pulse" />
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
        <Card className={`p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30`}>
          <div className="flex items-start gap-6">
            <Shield className="w-16 h-16 text-blue-400 flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold text-blue-400">
                Ta mission, si tu l'acceptes
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Apprends à maîtriser le numérique libre, découvre comment ton établissement
                peut gagner en autonomie, et deviens un acteur de la transition numérique
                responsable. Chaque activité te rapprochera du statut de{' '}
                <span className="text-yellow-400 font-bold inline-flex items-center gap-1">
                  <Sparkles className="w-5 h-5" />
                  Druide du Libre
                </span> !
              </p>
            </div>
          </div>
        </Card>

        {/* Activités */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-100 text-center flex items-center justify-center gap-2">
            <Target className="w-8 h-8 text-purple-400" />
            Choisis ton activité
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                hover={!activity.disabled}
                className={`p-8 text-center space-y-4 relative overflow-hidden bg-gradient-to-br ${activity.bgColor} border ${activity.borderColor} ${
                  activity.disabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'cursor-pointer group'
                }`}
                onClick={() => handleActivityClick(activity)}
              >
                {/* Badge "Bientôt" pour les activités non disponibles */}
                {!activity.available && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-xs font-semibold text-gray-300">
                      <Lock className="w-3 h-3" />
                      Bientôt
                    </div>
                  </div>
                )}

                {/* Badge "Désactivé" pour les défis */}
                {activity.disabled && (
                  <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="text-center space-y-2">
                      <Lock className="w-12 h-12 text-gray-500 mx-auto" />
                      <p className="text-gray-400 font-semibold">Non disponible</p>
                    </div>
                  </div>
                )}

                <div className={`transform transition-transform duration-300 ${!activity.disabled && 'group-hover:scale-110'}`}>
                  {activity.icon}
                </div>

                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold text-gray-100 transition-colors ${!activity.disabled && 'group-hover:text-blue-400'}`}>
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
                  variant={activity.available ? 'primary' : 'secondary'}
                  size="lg"
                  fullWidth
                  disabled={activity.disabled}
                  icon={activity.available ? <ArrowRight className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                >
                  {activity.disabled ? 'Verrouillé' : activity.available ? 'Commencer' : 'Prochainement'}
                </Button>

                {/* Effet de glow au survol (sauf si désactivé) */}
                {!activity.disabled && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${activity.color.split(' ')[1]}20 0%, transparent 70%)`,
                    }}
                  />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Section informative - Uniquement pour les Énigmes maintenant */}
        <Card className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
          <div className="flex items-start gap-6">
            <Search className="w-12 h-12 text-green-400 flex-shrink-0" />
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-green-400">
                Énigmes - Bientôt disponibles
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Prépare-toi à partir à la chasse au trésor dans le village numérique ! 
                  Résous des énigmes captivantes, découvre des easter eggs cachés et apprends 
                  en t'amusant.
                </p>
                <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
                  <li>Énigmes de déchiffrement de codes</li>
                  <li>Chasses aux logos de logiciels libres</li>
                  <li>Calculs d'économies interactifs</li>
                  <li>Devinettes sur les concepts NIRD</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Pourquoi jouer */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
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
              <Target className="w-8 h-8 text-blue-400" />
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
              <Users className="w-8 h-8 text-green-400" />
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
              <Sparkles className="w-8 h-8 text-purple-400" />
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
          <div className="flex justify-center mb-6">
            <Zap className="w-20 h-20 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold text-gray-100 mb-4 flex items-center justify-center gap-3">
            Prêt à rejoindre la résistance ?
            <Shield className="w-10 h-10 text-blue-400" />
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Commence par les quiz pour découvrir ton profil de résistant numérique !
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('/jeux/quiz')}
            className="text-xl px-8 py-4"
            icon={<Brain className="w-6 h-6" />}
          >
            Commencer les quiz
          </Button>
        </Card>
      </div>
    </div>
  );
}