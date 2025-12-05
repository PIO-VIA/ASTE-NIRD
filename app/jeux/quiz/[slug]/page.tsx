// app/jeux/quiz/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getQuizBySlug, getAllQuizMetadata } from '@/lib/quiz/data';
import QuizContainer from '../components/QuizContainer';

interface QuizPageProps {
  params: {
    slug: string;
  };
}

// Génération statique des pages pour tous les quiz
export async function generateStaticParams() {
  const quizzes = getAllQuizMetadata();
  
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: QuizPageProps) {
  const quiz = getQuizBySlug(params.slug);
  
  if (!quiz) {
    return {
      title: 'Quiz non trouvé',
    };
  }
  
  return {
    title: `${quiz.metadata.title} - Quiz NIRD`,
    description: quiz.metadata.description,
  };
}

export default function QuizDynamicPage({ params }: QuizPageProps) {
  const quiz = getQuizBySlug(params.slug);
  
  if (!quiz) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <QuizContainer quiz={quiz} />
    </div>
  );
}