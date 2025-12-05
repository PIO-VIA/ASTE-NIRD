// lib/quiz/utils.ts

import { QuizProgress, QuizResult, QuizProfil, UserQuizStats } from './types';
import { STORAGE_KEYS } from './constants';

/**
 * Sauvegarde la progression d'un quiz dans le localStorage
 */
export function saveProgress(quizId: string, progress: QuizProgress): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
    const allProgress = stored ? JSON.parse(stored) : {};
    allProgress[quizId] = progress;
    localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la progression:', error);
  }
}

/**
 * Récupère la progression d'un quiz depuis le localStorage
 */
export function loadProgress(quizId: string): QuizProgress | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
    if (!stored) return null;
    
    const allProgress = JSON.parse(stored);
    return allProgress[quizId] || null;
  } catch (error) {
    console.error('Erreur lors du chargement de la progression:', error);
    return null;
  }
}

/**
 * Supprime la progression d'un quiz
 */
export function clearProgress(quizId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
    if (!stored) return;
    
    const allProgress = JSON.parse(stored);
    delete allProgress[quizId];
    localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Erreur lors de la suppression de la progression:', error);
  }
}

/**
 * Sauvegarde un résultat de quiz
 */
export function saveResult(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
    const results: QuizResult[] = stored ? JSON.parse(stored) : [];
    results.push(result);
    localStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(results));
    
    // Mettre à jour les stats utilisateur
    updateUserStats(result);
    
    // Supprimer la progression en cours
    clearProgress(result.quizId);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du résultat:', error);
  }
}

/**
 * Récupère l'historique complet des résultats
 */
export function getResultHistory(): QuizResult[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erreur lors du chargement de l\'historique:', error);
    return [];
  }
}

/**
 * Récupère les résultats pour un quiz spécifique
 */
export function getQuizResults(quizId: string): QuizResult[] {
  return getResultHistory().filter((result) => result.quizId === quizId);
}

/**
 * Récupère le meilleur score pour un quiz
 */
export function getBestScore(quizId: string): number | null {
  const results = getQuizResults(quizId);
  if (results.length === 0) return null;
  
  return Math.max(...results.map((r) => r.totalScore));
}

/**
 * Récupère le meilleur pourcentage pour un quiz
 */
export function getBestPercentage(quizId: string): number | null {
  const results = getQuizResults(quizId);
  if (results.length === 0) return null;
  
  return Math.max(...results.map((r) => r.percentage));
}

/**
 * Calcule le profil selon le score obtenu
 */
export function calculateProfil(
  score: number,
  maxScore: number,
  profils: QuizProfil[]
): QuizProfil {
  const percentage = (score / maxScore) * 100;
  
  const matchingProfil = profils.find(
    (profil) => percentage >= profil.minScore && percentage <= profil.maxScore
  );
  
  return matchingProfil || profils[0];
}

/**
 * Calcule le pourcentage de réussite
 */
export function calculatePercentage(score: number, maxScore: number): number {
  if (maxScore === 0) return 0;
  return Math.round((score / maxScore) * 100);
}

/**
 * Formate un temps en secondes vers un format lisible
 */
export function formatTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (remainingSeconds === 0) {
    return `${minutes}min`;
  }
  
  return `${minutes}min ${remainingSeconds}s`;
}

/**
 * Formate une date en format français
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Met à jour les statistiques utilisateur
 */
function updateUserStats(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_STATS);
    const stats: UserQuizStats = stored
      ? JSON.parse(stored)
      : {
          totalQuizCompleted: 0,
          totalPoints: 0,
          badges: [],
          bestScores: {},
          completionDates: {},
          totalTimeSpent: 0,
        };
    
    // Mise à jour des stats
    stats.totalQuizCompleted += 1;
    stats.totalPoints += result.totalScore;
    stats.totalTimeSpent += result.timeSpent;
    stats.completionDates[result.quizId] = result.completedAt;
    
    // Mise à jour du meilleur score
    const currentBest = stats.bestScores[result.quizId] || 0;
    if (result.totalScore > currentBest) {
      stats.bestScores[result.quizId] = result.totalScore;
    }
    
    // Ajout du badge si nouveau
    const badgeId = `${result.quizId}-${result.profil.id}`;
    if (!stats.badges.includes(badgeId)) {
      stats.badges.push(badgeId);
    }
    
    localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
  } catch (error) {
    console.error('Erreur lors de la mise à jour des stats:', error);
  }
}

/**
 * Récupère les statistiques utilisateur
 */
export function getUserStats(): UserQuizStats {
  if (typeof window === 'undefined') {
    return {
      totalQuizCompleted: 0,
      totalPoints: 0,
      badges: [],
      bestScores: {},
      completionDates: {},
      totalTimeSpent: 0,
    };
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_STATS);
    return stored
      ? JSON.parse(stored)
      : {
          totalQuizCompleted: 0,
          totalPoints: 0,
          badges: [],
          bestScores: {},
          completionDates: {},
          totalTimeSpent: 0,
        };
  } catch (error) {
    console.error('Erreur lors du chargement des stats:', error);
    return {
      totalQuizCompleted: 0,
      totalPoints: 0,
      badges: [],
      bestScores: {},
      completionDates: {},
      totalTimeSpent: 0,
    };
  }
}

/**
 * Génère un message de partage personnalisé
 */
export function generateShareMessage(result: QuizResult): string {
  return result.profil.shareMessage;
}

/**
 * Génère une URL de partage Twitter
 */
export function generateTwitterShareUrl(result: QuizResult): string {
  const message = encodeURIComponent(generateShareMessage(result));
  const url = encodeURIComponent(window.location.href);
  return `https://twitter.com/intent/tweet?text=${message}&url=${url}`;
}

/**
 * Génère une URL de partage LinkedIn
 */
export function generateLinkedInShareUrl(): string {
  const url = encodeURIComponent(window.location.href);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

/**
 * Copie le message de partage dans le presse-papier
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Erreur lors de la copie:', error);
    return false;
  }
}