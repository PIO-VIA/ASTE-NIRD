// components/SolutionCard.tsx
'use client';

import { Alternative } from '@/lib/solutions';

interface SolutionCardProps {
  alternative: Alternative;
  lang: string;
}

export default function SolutionCard({ alternative, lang }: SolutionCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-700">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-5xl">{alternative.icon}</span>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          alternative.difficulty[lang as 'fr' | 'en'] === 'Facile' || alternative.difficulty[lang as 'fr' | 'en'] === 'Easy'
            ? 'bg-green-900 text-green-300'
            : alternative.difficulty[lang as 'fr' | 'en'] === 'Moyen' || alternative.difficulty[lang as 'fr' | 'en'] === 'Medium'
            ? 'bg-yellow-900 text-yellow-300'
            : 'bg-red-900 text-red-300'
        }`}>
          {alternative.difficulty[lang as 'fr' | 'en']}
        </span>
      </div>

      {/* Transition */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-red-400 line-through text-sm">{alternative.from}</span>
          <span className="text-2xl text-white">→</span>
          <span className="text-green-400 font-bold">{alternative.to}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4">
        {alternative.description[lang as 'fr' | 'en']}
      </p>

      {/* Métriques */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-green-950 rounded-lg p-3 border border-green-800">
          <div className="text-xs text-gray-400 mb-1">
            {lang === 'fr' ? 'Économie' : 'Savings'}
          </div>
          <div className="font-bold text-green-400">{alternative.economy[lang as 'fr' | 'en']}</div>
        </div>
        <div className="bg-blue-950 rounded-lg p-3 border border-blue-800">
          <div className="text-xs text-gray-400 mb-1">CO2</div>
          <div className="font-bold text-blue-400">{alternative.co2}</div>
        </div>
      </div>

      {/* Lien */}
      
        href={alternative.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
      >
        {lang === 'fr' ? 'En savoir plus' : 'Learn more'} →
      </a>
    </div>
  );
}