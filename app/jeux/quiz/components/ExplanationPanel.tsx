'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, BookOpen, Award } from 'lucide-react';

interface ExplanationPanelProps {
  explanation: string;
  isCorrect: boolean;
  source?: string;
  sourceUrl?: string;
  pointsEarned: number;
  maxPoints: number;
}

export default function ExplanationPanel({
  explanation,
  isCorrect,
  source,
  sourceUrl,
  pointsEarned,
  maxPoints,
}: ExplanationPanelProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const isPerfect = pointsEarned === maxPoints;
  
  return (
    <div
      className={`transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div
        className={`rounded-xl border-2 p-6 ${
          isCorrect
            ? 'bg-green-500/10 border-green-500/50'
            : 'bg-orange-500/10 border-orange-500/50'
        }`}
      >
        {/* En-tête */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">
              {isPerfect ? (
                <Award className="text-yellow-400" size={32} />
              ) : isCorrect ? (
                <CheckCircle className="text-green-400" size={32} />
              ) : (
                <Lightbulb className="text-orange-400" size={32} />
              )}
            </span>
            <div>
              <h3
                className={`text-lg font-bold ${
                  isCorrect ? 'text-green-400' : 'text-orange-400'
                }`}
              >
                {isPerfect
                  ? 'Parfait !'
                  : isCorrect
                  ? 'Bonne réponse !'
                  : 'Pas tout à fait...'}
              </h3>
              <p className="text-sm text-gray-400">
                +{pointsEarned} point{pointsEarned > 1 ? 's' : ''}{' '}
                {!isPerfect && `sur ${maxPoints}`}
              </p>
            </div>
          </div>
        </div>
        
        {/* Explication */}
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">{explanation}</p>
        </div>
        
        {/* Source */}
        {source && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <BookOpen size={14} />
              <span>Source :</span>
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  {source}
                </a>
              ) : (
                <span>{source}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}