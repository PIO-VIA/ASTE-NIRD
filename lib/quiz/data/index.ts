// lib/quiz/data/index.ts

import { getDiagnosticQuiz } from './diagnostic';
import connaissanceData from './connaissance.json';
import actionData from './action.json';
import { Quiz } from '../types';

/**
 * Fonction pour obtenir tous les quiz avec i18n
 * @param t - Fonction de traduction de react-i18next
 */
export function getAllQuizzes(t: (key: string) => string): Quiz[] {
  return [
    getDiagnosticQuiz(t),
    connaissanceData as Quiz, // TODO: Migrer vers i18n
    actionData as Quiz, // TODO: Migrer vers i18n
  ];
}

/**
 * Fonction pour récupérer un quiz par son slug
 * @param slug - Le slug du quiz
 * @param t - Fonction de traduction de react-i18next
 */
export function getQuizBySlug(slug: string, t: (key: string) => string): Quiz | undefined {
  const allQuizzes = getAllQuizzes(t);
  return allQuizzes.find((quiz) => quiz.metadata.slug === slug);
}

/**
 * Fonction pour récupérer un quiz par son ID
 * @param id - L'ID du quiz
 * @param t - Fonction de traduction de react-i18next
 */
export function getQuizById(id: string, t: (key: string) => string): Quiz | undefined {
  const allQuizzes = getAllQuizzes(t);
  return allQuizzes.find((quiz) => quiz.metadata.id === id);
}

/**
 * Fonction pour récupérer tous les métadonnées des quiz
 * @param t - Fonction de traduction de react-i18next
 */
export function getAllQuizMetadata(t: (key: string) => string) {
  const allQuizzes = getAllQuizzes(t);
  return allQuizzes.map((quiz) => quiz.metadata);
}

// Export de compatibilité (utilise les JSON bruts pour l'instant)
// TODO: Supprimer après migration complète
export const quizDiagnostic = connaissanceData as Quiz;
export const quizConnaissance = connaissanceData as Quiz;
export const quizAction = actionData as Quiz;

export const allQuizzes = [
  quizDiagnostic,
  quizConnaissance,
  quizAction,
];

export default allQuizzes;