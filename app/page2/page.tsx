"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';

// Page d'accueil
export function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <header className="bg-slate-900 border-b border-slate-700 px-6 py-4">
        <h1 className="text-2xl font-bold text-white">E-nird-me</h1>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Résoudre l'e-nird-me pour lutter contre les BIGTECH
          </h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
              <p className="text-2xl text-slate-300 font-semibold">
                Le Sphinx de Gizeh
              </p>
            </div>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-xl text-slate-200">
              Testez vos connaissances sur le numérique responsable et la souveraineté digitale.
            </p>
            <p className="text-xl text-slate-200">
              Résolvez les énigmes pour déjouer les pièges des géants du web !
            </p>
          </div>

          <button
            onClick={() => router.push('/page2')}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xl px-12 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-teal-500/50"
          >
            Jouer
          </button>
        </div>
      </main>
    </div>
  );
}

// Page 2 - Jeu d'énigmes
export default function GamePage() {
  const enigmes = [
    {
      question: "Je protège les savoirs des grandes tours de contrôle, mais je ne suis pas un mur. Qui suis-je ?",
      reponses: ["La communauté NIRD", "communauté NIRD", "communaute NIRD"]
    },
    {
      question: "Sans moi, les données sont vulnérables ; je permets qu'elles circulent en toute confiance. Qui suis-je ?",
      reponses: ["La cryptographie", "cryptographie"]
    },
    {
      question: "Je suis invisible, mais mes traces prouvent que tu as respecté les règles. Qui suis-je ?",
      reponses: ["La preuve numérique", "preuve numérique", "Proof", "Blockchain"]
    },
    {
      question: "Je ne dors jamais, je relie tous les nœuds, mais je ne suis pas un réseau classique. Qui suis-je ?",
      reponses: ["Le réseau décentralisé", "réseau décentralisé", "reseau decentralise"]
    },
    {
      question: "Plus je suis fragmenté, plus je deviens résistant aux attaques. Qui suis-je ?",
      reponses: ["Le système distribué", "système distribué", "systeme distribue"]
    },
    {
      question: "Je peux être codé, décodé, mais jamais entièrement prévisible. Qui suis-je ?",
      reponses: ["L'algorithme", "algorithme"]
    },
    {
      question: "Les géants veulent me posséder, mais je suis fait pour être libre. Qui suis-je ?",
      reponses: ["Le logiciel libre", "logiciel libre"]
    },
    {
      question: "Sans moi, les énigmes NIRD ne seraient que bruit et confusion. Qui suis-je ?",
      reponses: ["Le concept NIRD", "concept NIRD"]
    },
    {
      question: "On me construit en couches, et chaque couche renforce la précédente. Qui suis-je ?",
      reponses: ["La muraille de confiance", "muraille de confiance", "architecture sécurisée", "layers of trust"]
    },
    {
      question: "Je suis une clé qui n'ouvre pas de porte physique, mais je protège l'esprit. Qui suis-je ?",
      reponses: ["La clé cryptographique", "clé cryptographique", "cle cryptographique"]
    },
    {
      question: "Mon nom évoque le contrôle, mais je favorise l'autonomie. Qui suis-je ?",
      reponses: ["Le protocole open-source", "protocole open-source"]
    },
    {
      question: "On me partage mais jamais totalement ; je suis la base de la confiance. Qui suis-je ?",
      reponses: ["La clé publique", "clé publique", "secret partagé"]
    },
    {
      question: "Les grandes firmes m'ignorent, mais je définis l'avenir des idées. Qui suis-je ?",
      reponses: ["L'innovation décentralisée", "innovation décentralisée", "innovation decentralisee"]
    },
    {
      question: "Je permets de vérifier sans jamais regarder, et de prouver sans révéler. Qui suis-je ?",
      reponses: ["La preuve à divulgation nulle de connaissance", "preuve à divulgation nulle", "zero-knowledge proof"]
    },
    {
      question: "Je suis un labyrinthe que seuls les initiés savent parcourir. Qui suis-je ?",
      reponses: ["La structure NIRD", "structure NIRD"]
    },
    {
      question: "Mes fragments sont dispersés, mais ensemble ils racontent une histoire complète. Qui suis-je ?",
      reponses: ["Le stockage fragmenté", "stockage fragmenté", "sharding"]
    },
    {
      question: "On me cherche dans les lignes de code, mais je suis bien plus qu'une simple fonction. Qui suis-je ?",
      reponses: ["La fonction de validation", "fonction de validation"]
    },
    {
      question: "Je suis l'allié des résistants numériques et le cauchemar des monopolistes. Qui suis-je ?",
      reponses: ["Le réseau libre", "réseau libre", "réseau résistant"]
    },
    {
      question: "Je n'ai pas de chef, mais mes règles font l'ordre. Qui suis-je ?",
      reponses: ["La gouvernance décentralisée", "gouvernance décentralisée", "gouvernance decentralisee"]
    },
    {
      question: "On me construit avec patience, et je protège l'héritage des futurs NIRD. Qui suis-je ?",
      reponses: ["La base de connaissance NIRD", "base de connaissance NIRD"]
    }
  ];

  const [currentEnigme, setCurrentEnigme] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showRetry, setShowRetry] = useState(false);

  const normalizeString = (str) => {
    return str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  const handleValidate = () => {
    const currentQuestion = enigmes[currentEnigme];
    const normalizedAnswer = normalizeString(userAnswer);
    
    const isCorrect = currentQuestion.reponses.some(
      reponse => normalizeString(reponse) === normalizedAnswer
    );

    if (isCorrect) {
      setScore(score + 10);
      setFeedback('✅ Bravo ! Bonne réponse !');
      setShowRetry(false);
      
      setTimeout(() => {
        if (currentEnigme < enigmes.length - 1) {
          setCurrentEnigme(currentEnigme + 1);
          setUserAnswer('');
          setFeedback('');
        } else {
          setFeedback(`🎉 Félicitations ! Vous avez terminé le jeu avec ${score + 10} points !`);
        }
      }, 2000);
    } else {
      setFeedback('❌ Mauvaise réponse. Réessayez !');
      setShowRetry(true);
    }
  };

  const handleRetry = () => {
    setUserAnswer('');
    setFeedback('');
    setShowRetry(false);
  };

  const progress = ((currentEnigme + 1) / enigmes.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">E-nird-me</h1>
        <div className="text-teal-400 text-xl font-bold">
          Score : {score} pts
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress */}
        <div className="mb-6">
          <p className="text-center text-slate-300 mb-2">
            Énigme {currentEnigme + 1} sur {enigmes.length}
          </p>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-teal-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-2xl">
          <div className="mb-6">
            <p className="text-white text-lg leading-relaxed mb-4">
              {enigmes[currentEnigme].question}
            </p>
            <p className="text-teal-400 text-sm font-semibold">
              Valeur : 10 points
            </p>
          </div>

          {/* Input */}
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleValidate()}
            placeholder="Votre réponse..."
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 mb-4"
            disabled={showRetry && feedback.includes('✅')}
          />

          {/* Feedback */}
          {feedback && (
            <div className={`mb-4 p-4 rounded-lg ${
              feedback.includes('✅') || feedback.includes('🎉')
                ? 'bg-green-900/30 border border-green-500/50 text-green-300'
                : 'bg-red-900/30 border border-red-500/50 text-red-300'
            }`}>
              <p className="font-semibold">{feedback}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            {!showRetry ? (
              <button
                onClick={handleValidate}
                disabled={!userAnswer.trim() || (feedback.includes('✅'))}
                className="flex-1 bg-teal-600 hover:bg-teal-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all duration-200"
              >
                Valider
              </button>
            ) : (
              <button
                onClick={handleRetry}
                className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition-all duration-200"
              >
                Réessayer
              </button>
            )}
          </div>
        </div>

        {/* Game completed */}
        {currentEnigme === enigmes.length - 1 && feedback.includes('🎉') && (
          <div className="mt-8 text-center">
            <button
              onClick={() => window.location.reload()}
              className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Rejouer
            </button>
          </div>
        )}
      </main>
    </div>
  );
}