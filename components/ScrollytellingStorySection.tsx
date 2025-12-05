"use client";

import { useTranslation } from "react-i18next";
import { Code, Recycle, Sparkles } from "lucide-react";
import StoryStep from "./StoryStep";
import Link from "next/link";
/**
 * ScrollytellingStorySection - Style DaisyUI
 *
 * - Images alternées gauche/droite
 * - Support multilingue (FR/EN)
 * - Animations bidirectionnelles (scroll up/down)
 */
export default function ScrollytellingStorySection() {
  const { t } = useTranslation();

  // Configuration des 3 étapes avec alternance gauche/droite
  const steps = [
    {
      id: 1,
      image: "/assets/story-empire.png",
      textKey: "story.case1",
      position: "left" as const,
    },
    {
      id: 2,
      image: "/assets/story-village.png",
      textKey: "story.case2",
      position: "right" as const,
    },
    {
      id: 3,
      image: "/assets/story-druid.png",
      textKey: "story.case3",
      position: "left" as const,
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header de la section */}
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="space-y-6">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez l'épopée du NIRD à travers une expérience interactive
          </p>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600" />
            <div className="w-2 h-2 rounded-full bg-pink-600" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-600" />
          </div>
        </div>
      </div>

      {/* Les étapes de scrollytelling */}
      {steps.map((step, index) => (
        <div key={step.id}>
          <StoryStep
            text={t(step.textKey)}
            image={step.image}
            position={step.position}
            index={index}
          />

          {/* Connecteur entre les étapes */}
          {index < steps.length - 1 && (
            <div className="relative h-24 flex items-center justify-center">
              <div className="w-px h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />
              <div className="absolute w-3 h-3 rounded-full bg-purple-500/50 animate-pulse" />
            </div>
          )}
        </div>
      ))}

      {/* Call to action final */}
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Rejoignez la Résistance
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Découvrez comment le <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">NIRD</span> peut transformer votre approche du numérique
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <Link href={"/presentation"}>  <span className="relative z-10">En savoir plus</span></Link>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 border-2 border-blue-500/50 rounded-full text-blue-300 font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 hover:border-blue-400">
              Explorer le village
            </button>
          </div>

          {/* Statistiques décoratives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              { label: "Logiciels Libres", icon: Code },
              { label: "Réemploi", icon: Recycle },
              { label: "Créativité", icon: Sparkles },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text stroke-blue-400" strokeWidth={1.5} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
