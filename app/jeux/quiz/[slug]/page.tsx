// app/jeux/quiz/[slug]/page.tsx
import { notFound } from 'next/navigation';
import allQuizzes from '@/lib/quiz/data';

import QuizContainer from '../components/QuizContainer';

interface QuizPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génération statique des pages pour tous les quiz
export async function generateStaticParams() {
  return allQuizzes.map((quiz) => ({
    slug: quiz.metadata.slug,
  }));
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: QuizPageProps) {
  // Déballer la Promise avec await
  const { slug } = await params;
  const quiz = allQuizzes.find((q) => q.metadata.slug === slug);

  if (!quiz) {
    return {
      title: 'Quiz non trouvé - NIRD',
      description: 'Ce quiz n\'existe pas ou a été supprimé.',
    };
  }

  return {
    title: `${quiz.metadata.title} - Quiz NIRD`,
    description: quiz.metadata.description,
    // keywords: quiz.metadata.tags?.join(', '),
  };
}

export default async function QuizDynamicPage({ params }: QuizPageProps) {
  // Déballer la Promise avec await
  const { slug } = await params;
  const quiz = allQuizzes.find((q) => q.metadata.slug === slug);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <QuizContainer quiz={quiz} />
    </div>
  );
}