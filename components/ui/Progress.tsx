'use client';

interface ProgressProps {
  value: number;
  max: number;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Progress({
  value,
  max,
  showLabel = false,
  variant = 'default',
  size = 'md',
  className = '',
}: ProgressProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  const variants = {
    default: 'bg-gradient-to-r from-blue-500 to-purple-600',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-600',
    error: 'bg-gradient-to-r from-red-500 to-rose-600',
  };
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className={`bg-gray-700 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${variants[variant]} h-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-gray-400 text-right">
          {value} / {max} ({percentage}%)
        </div>
      )}
    </div>
  );
}