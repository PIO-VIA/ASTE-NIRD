// app/solutions/page.tsx
'use client';

import { useState } from 'react';
import { solutions, levels } from '@/lib/solutions';
import VillageMap from '@/components/VillageMap';
import SolutionCard from '@/components/SolutionCard';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function SolutionsPage() {
  const [lang, setLang] = useState('fr');
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const handleZoneClick = (zoneId: string) => {
    setSelectedZone(zoneId);
    setTimeout(() => {
      document.getElementById('solutions-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const selectedZoneData = selectedZone ? solutions[selectedZone] : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Switcher de langue */}
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            {lang === 'fr' 
              ? 'Solutions NIRD' 
              : 'NIRD Solutions'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'fr'
              ? 'Découvre comment ton établissement peut résister aux Big Tech et devenir un village numérique libre !'
              : 'Discover how your institution can resist Big Tech and become a free digital village!'}
          </p>
        </div>

        {/* Carte du village */}
        <VillageMap 
          solutions={solutions} 
          lang={lang} 
          onZoneClick={handleZoneClick}
        />

        {/* Niveaux de progression */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {lang === 'fr' ? '🎯 Niveaux de Transition' : '🎯 Transition Levels'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {levels.map((level) => (
              <div 
                key={level.id}
                className={`p-6 rounded-xl shadow-lg border-4 transition-all hover:scale-105 ${
                  level.color === 'green' ? 'border-green-500 bg-green-950' :
                  level.color === 'yellow' ? 'border-yellow-500 bg-yellow-950' :
                  level.color === 'orange' ? 'border-orange-500 bg-orange-950' :
                  'border-red-500 bg-red-950'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">
                    {'⭐'.repeat(level.difficulty)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{level.name[lang as 'fr' | 'en']}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {lang === 'fr' ? 'Durée:' : 'Duration:'}
                    </span>
                    <span className="font-semibold text-white">{level.duration[lang as 'fr' | 'en']}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {lang === 'fr' ? 'Économie:' : 'Savings:'}
                    </span>
                    <span className="font-semibold text-green-400">{level.economy}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <div className="text-xs text-gray-300 mb-1">
                      {lang === 'fr' ? 'Actions:' : 'Actions:'}
                    </div>
                    <ul className="text-xs space-y-1 text-gray-200">
                      {level.actions[lang as 'fr' | 'en'].map((action, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span>✓</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section des solutions détaillées */}
        {selectedZoneData && (
          <div id="solutions-section" className="mt-16 scroll-mt-8">
            <div className="text-center mb-8">
              <span className="text-6xl inline-block">{selectedZoneData.icon}</span>
              <h2 className="text-4xl font-bold mt-4 text-white">
                {selectedZoneData.title[lang as 'fr' | 'en']}
              </h2>
              <p className="text-gray-300 mt-2 text-lg">
                {selectedZoneData.description[lang as 'fr' | 'en']}
              </p>
            </div>

            {/* Stats spéciales pour la zone Impact */}
            {selectedZone === 'impact' && selectedZoneData.stats && (
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {Object.values(selectedZoneData.stats).map((stat, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all hover:scale-105 border border-gray-700">
                    <div className="text-5xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-white mb-1">
                      {stat.label[lang as 'fr' | 'en']}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.description[lang as 'fr' | 'en']}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Grille des alternatives */}
            {selectedZoneData.alternatives && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedZoneData.alternatives.map((alternative, idx) => (
                  <SolutionCard 
                    key={idx}
                    alternative={alternative}
                    lang={lang}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to action si aucune zone sélectionnée */}
        {!selectedZone && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                {lang === 'fr' 
                  ? '🚀 Prêt à rejoindre la résistance ?'
                  : '🚀 Ready to join the resistance?'}
              </h3>
              <p className="text-xl mb-6 opacity-90">
                {lang === 'fr'
                  ? 'Clique sur une zone de la carte pour découvrir les solutions !'
                  : 'Click on a zone on the map to discover solutions!'}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  {lang === 'fr' ? '📚 Guide complet' : '📚 Complete guide'}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors">
                  {lang === 'fr' ? '💬 Rejoindre la communauté' : '💬 Join community'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}