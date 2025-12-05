// app/jeux/quiz/components/ProfilBadge.tsx
'use client';

import { QuizProfil } from '@/lib/quiz/types';
import { useEffect, useState } from 'react';
import { Award, Sparkles } from 'lucide-react';

interface ProfilBadgeProps {
  profil: QuizProfil;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export default function ProfilBadge({
  profil,
  size = 'lg',
  animated = true,
}: ProfilBadgeProps) {
  const [isVisible, setIsVisible] = useState(!animated);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [animated]);
  
  const sizes = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-4xl',
    lg: 'w-32 h-32 text-5xl',
    xl: 'w-48 h-48 text-7xl',
  };
  
  const iconSizes = {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 72,
  };
  
  return (
    <div
      className={`relative transform transition-all duration-700 ${
        isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-180 opacity-0'
      }`}
    >
      {/* Badge principal */}
      <div
        className={`${sizes[size]} rounded-full flex items-center justify-center relative overflow-hidden`}
        style={{
          background: profil.gradient,
          boxShadow: `0 0 40px ${profil.color}60`,
        }}
      >
        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
        
        {/* Icône */}
        <div className="relative z-10 drop-shadow-lg">
          <Award size={iconSizes[size]} strokeWidth={1.5} />
        </div>
        
        {/* Animation de pulsation */}
        {animated && isVisible && (
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: profil.gradient,
              opacity: 0.3,
            }}
          />
        )}
      </div>
      
      {/* Cercles décoratifs */}
      {size === 'xl' && (
        <>
          <div
            className="absolute inset-0 rounded-full border-4 border-dashed animate-spin-slow"
            style={{ borderColor: `${profil.color}40` }}
          />
          <div
            className="absolute -inset-2 rounded-full border-2"
            style={{ borderColor: `${profil.color}20` }}
          />
        </>
      )}
    </div>
  );
}