// lib/quiz/data/index.ts

import diagnosticData from './diagnostic.json';
import connaissanceData from './connaissance.json';
import actionData from './action.json';
import { Quiz } from '../types';

// Export des quiz individuels
export const quizDiagnostic: Quiz = diagnosticData as Quiz;
export const quizConnaissance: Quiz = connaissanceData as Quiz;
export const quizAction: Quiz = actionData as Quiz;

// Export d'un tableau contenant tous les quiz
export const allQuizzes: Quiz[] = [
  quizDiagnostic,
  quizConnaissance,
  quizAction,
];

// Fonction pour récupérer un quiz par son slug
export function getQuizBySlug(slug: string): Quiz | undefined {
  return allQuizzes.find((quiz) => quiz.metadata.slug === slug);
}

// Fonction pour récupérer un quiz par son ID
export function getQuizById(id: string): Quiz | undefined {
  return allQuizzes.find((quiz) => quiz.metadata.id === id);
}

// Fonction pour récupérer tous les métadonnées des quiz
export function getAllQuizMetadata() {
  return allQuizzes.map((quiz) => quiz.metadata);
}

// Export par défaut de tous les quiz
export default allQuizzes;