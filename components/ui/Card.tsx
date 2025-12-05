'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hover = false,
  gradient = false,
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-xl border border-gray-700 transition-all duration-300';
  const backgroundStyles = gradient
    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
    : 'bg-gray-800';
  const hoverStyles = hover
    ? 'hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] cursor-pointer'
    : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${backgroundStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}