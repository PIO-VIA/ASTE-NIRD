// lib/quiz/types.ts

export type DifficultyLevel = 'debutant' | 'intermediaire' | 'avance';

export type QuizCategory = 'diagnostic' | 'connaissance' | 'action';

export interface QuizOption {
  id: string;
  text: string;
  points: number;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
  explanation: string;
  source?: string;
  sourceUrl?: string;
  imageUrl?: string;
  difficulty: DifficultyLevel;
  tags?: string[];
}

export interface QuizMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: QuizCategory;
  difficulty: DifficultyLevel;
  estimatedTime: number;
  questionsCount: number;
  icon: string;
  color: string;
  gradient: string;
  keywords: string[];
}

export interface QuizProfil {
  id: string;
  name: string;
  minScore: number;
  maxScore: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  recommendations: string[];
  nextSteps: string[];
  shareMessage: string;
}

export interface Quiz {
  metadata: QuizMetadata;
  questions: QuizQuestion[];
  profils: QuizProfil[];
}

export interface QuizAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  pointsEarned: number;
  timeSpent: number;
  timestamp: number;
}

export interface QuizProgress {
  quizId: string;
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  startTime: number;
  totalScore: number;
  maxScore: number;
}

export interface QuizResult {
  quizId: string;
  quizTitle: string;
  userId?: string;
  answers: QuizAnswer[];
  totalScore: number;
  maxScore: number;
  percentage: number;
  profil: QuizProfil;
  completedAt: number;
  timeSpent: number;
}

export interface UserQuizStats {
  totalQuizCompleted: number;
  totalPoints: number;
  badges: string[];
  bestScores: Record<string, number>;
  completionDates: Record<string, number>;
  totalTimeSpent: number;
}