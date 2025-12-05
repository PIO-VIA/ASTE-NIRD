// app/jeux/quiz/components/ProgressBar.tsx
'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  variant?: 'default' | 'success' | 'warning';
}

export default function ProgressBar({
  current,
  total,
  variant = 'default',
}: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  
  const variants = {
    default: 'from-blue-500 to-purple-600',
    success: 'from-green-500 to-emerald-600',
    warning: 'from-yellow-500 to-orange-600',
  };
  
  return (
    <div className="w-full space-y-2">
      {/* Barre de progression */}
      <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${variants[variant]} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
      
      {/* Indicateurs de questions */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">
          Question {current} / {total}
        </span>
        <span className="text-sm font-medium text-blue-400">{percentage}%</span>
      </div>
      
      {/* Points de progression */}
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-1 rounded-full transition-all duration-300 ${
              index < current
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}