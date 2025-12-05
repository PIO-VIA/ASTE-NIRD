// app/jeux/layout.tsx
import { ReactNode } from 'react';
import { Castle, Brain, Trophy, Search, ExternalLink, BookOpen, Shield } from 'lucide-react';

export const metadata = {
  title: 'Jeux NIRD - Village Numérique Résistant',
  description: 'Quiz, défis et énigmes pour apprendre le numérique libre de façon ludique',
};

export default function JeuxLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/jeux" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Castle className="text-3xl text-blue-400" size={32} />
              <div>
                <h1 className="text-xl font-bold text-gray-100">
                  Village des Jeux NIRD
                </h1>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Gamepad2 className="w-3 h-3" />
                  Apprends en t'amusant
                </p>
              </div>
            </a>
            
            <nav className="flex items-center gap-4">
              
              <a
                href="/jeux/quiz"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-1"
              >
                <Brain size={16} />
                Quiz
              </a>
              
              <a
                href="/jeux/defis"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium opacity-50 cursor-not-allowed flex items-center gap-1"
                title="Bientôt disponible"
              >
                <Trophy size={16} />
                Défis
              </a>
              
              <a
                href="/jeux/enigmes"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium opacity-50 cursor-not-allowed flex items-center gap-1"
                title="Bientôt disponible"
              >
                <Search size={16} />
                Énigmes
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Contenu */}
      <main>{children}</main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex justify-center gap-6 text-sm">
              
              <a
                href="https://nird.forge.apps.education.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <BookOpen size={14} />
                Site NIRD
                <ExternalLink size={12} />
              </a>
              
              <a
                href="https://forge.apps.education.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Brain size={14} />
                La Forge
                <ExternalLink size={12} />
              </a>
              
              <a
                href="https://www.cafepedagogique.net/2025/04/27/bruay-labuissiere-voyage-au-centre-du-libre-educatif/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Info size={14} />
                À propos
                <ExternalLink size={12} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <Shield size={14} />
              © 2025 Collectif NIRD - Pour un numérique éducatif libre, responsable et durable
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Import manquant pour le composant Gamepad2
import { Gamepad2, Info } from 'lucide-react';