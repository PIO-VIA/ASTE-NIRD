"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import sphinx from "@/images/sphinx.jpeg"
export default function EnirdMe() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Résoudre l'e-nird-me pour lutter contre les BIGTECH
          </h2>

          {/* Game Box */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center  relative h-[300]">
              <Image
                src={sphinx}
                alt="Le Sphinx de Gizeh"
                width={700}  // largeur désirée
                height={300}
                
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 space-y-2">
            <p className="text-xl text-slate-200">
              Testez vos connaissances sur le numérique responsable et la souveraineté digitale.
            </p>
            <p className="text-xl text-slate-200">
              Résolvez les énigmes pour déjouer les pièges des géants du web !
            </p>
          </div>

          {/* CTA Button */}
          <Link href="./page2">
            <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xl px-12 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-teal-500/50">
              Jouer
            </button>
          </Link>

          {/* Game Started Message */}
          {gameStarted && (
            <div className="mt-8 p-6 bg-teal-900/30 border border-teal-500/50 rounded-lg">
              <p className="text-teal-200 text-lg">
                🎮 Le jeu commence bientôt... Préparez-vous à affronter le Sphinx !
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 px-6 py-4">
        <div className="container mx-auto text-center text-slate-400 text-sm">
          <p>E-nird-me - Un jeu pour la souveraineté digitale</p>
        </div>
      </footer>
    </div>
  );
}