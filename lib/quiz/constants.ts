// lib/quiz/constants.ts

export const COLORS = {
  background: {
    primary: '#0a0e1a',
    secondary: '#151b2b',
    tertiary: '#1e293b',
  },
  brand: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
  },
  asterix: {
    yellow: '#fbbf24',
    red: '#ef4444',
    orange: '#f97316',
  },
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    muted: '#64748b',
  },
  border: {
    default: '#334155',
    active: '#3b82f6',
    hover: '#475569',
  },
  profils: {
    vercingetorix: '#ef4444',
    guerrier: '#f97316',
    asterix: '#fbbf24',
    panoramix: '#10b981',
  },
};

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  success: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
  warning: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  asterix: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
  vercingetorix: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  guerrier: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  panoramix: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
};

export const STORAGE_KEYS = {
  QUIZ_PROGRESS: 'nird_quiz_progress',
  QUIZ_RESULTS: 'nird_quiz_results',
  USER_STATS: 'nird_user_stats',
} as const;

export const DIFFICULTY_LABELS = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
} as const;

export const CATEGORY_LABELS = {
  diagnostic: 'Diagnostic',
  connaissance: 'Connaissance',
  action: 'Action',
} as const;

export const PROFIL_ICONS = {
  vercingetorix: '⛓️',
  guerrier: '⚔️',
  asterix: '🛡️',
  panoramix: '🧙‍♂️',
} as const;

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
} as const;