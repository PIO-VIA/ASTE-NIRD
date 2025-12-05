'use client';

import { useEffect, useState } from 'react';
import { Star, Trophy, TrendingUp } from 'lucide-react';

interface ScoreDisplayProps {
  currentScore: number;
  maxScore: number;
  variant?: 'minimal' | 'detailed';
  animated?: boolean;
}

export default function ScoreDisplay({
  currentScore,
  maxScore,
  variant = 'minimal',
  animated = true,
}: ScoreDisplayProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const percentage = Math.round((currentScore / maxScore) * 100);
  
  useEffect(() => {
    if (!animated) {
      setDisplayScore(currentScore);
      return;
    }
    
    const duration = 500;
    const steps = 20;
    const increment = currentScore / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= currentScore) {
        setDisplayScore(currentScore);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [currentScore, animated]);
  
  if (variant === 'minimal') {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
        <Star className="text-yellow-400" size={20} />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Score</span>
          <span className="text-lg font-bold text-blue-400">
            {displayScore} / {maxScore}
          </span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Score actuel</span>
        <Trophy className="text-yellow-400" size={24} />
      </div>
      
      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-400">{displayScore}</span>
          <span className="text-lg text-gray-500">/ {maxScore}</span>
        </div>
        
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="text-right text-sm text-gray-400">{percentage}%</div>
      </div>
      
      {percentage >= 80 && (
        <div className="text-xs text-green-400 flex items-center gap-1">
          <TrendingUp size={12} />
          <span>Excellent !</span>
        </div>
      )}
    </div>
  );
}