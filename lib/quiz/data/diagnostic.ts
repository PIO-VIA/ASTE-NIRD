import { Quiz } from '../types';

export const getDiagnosticQuiz = (t: (key: string) => string): Quiz => ({
  metadata: {
    id: "quiz-diagnostic",
    slug: "diagnostic",
    title: t('quizData.diagnostic.metadata.title'),
    description: t('quizData.diagnostic.metadata.description'),
    category: "diagnostic",
    difficulty: "debutant",
    estimatedTime: 5,
    questionsCount: 15,
    icon: "🔍",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    keywords: ["diagnostic", "dépendance", "big tech", "windows", "autonomie"]
  },
  questions: [
    {
      id: "q1",
      question: t('quizData.diagnostic.questions.q1.question'),
      subtitle: t('quizData.diagnostic.questions.q1.subtitle'),
      options: [
        {
          id: "q1-a",
          text: t('quizData.diagnostic.questions.q1.options.a'),
          points: 3
        },
        {
          id: "q1-b",
          text: t('quizData.diagnostic.questions.q1.options.b'),
          points: 2
        },
        {
          id: "q1-c",
          text: t('quizData.diagnostic.questions.q1.options.c'),
          points: 1
        },
        {
          id: "q1-d",
          text: t('quizData.diagnostic.questions.q1.options.d'),
          points: 0
        }
      ],
      explanation: t('quizData.diagnostic.questions.q1.explanation'),
      source: "Collectif NIRD",
      sourceUrl: "https://nird.forge.apps.education.fr/",
      difficulty: "debutant",
      tags: ["coûts", "licences", "budget"]
    },
    {
      id: "q2",
      question: t('quizData.diagnostic.questions.q2.question'),
      options: [
        {
          id: "q2-a",
          text: t('quizData.diagnostic.questions.q2.options.a'),
          points: 0
        },
        {
          id: "q2-b",
          text: t('quizData.diagnostic.questions.q2.options.b'),
          points: 3
        },
        {
          id: "q2-c",
          text: t('quizData.diagnostic.questions.q2.options.c'),
          points: 1
        },
        {
          id: "q2-d",
          text: t('quizData.diagnostic.questions.q2.options.d'),
          points: 0
        }
      ],
      explanation: t('quizData.diagnostic.questions.q2.explanation'),
      source: "France Info",
      sourceUrl: "https://www.youtube.com/watch?v=76T8oubek-c",
      difficulty: "debutant",
      tags: ["windows", "obsolescence", "linux"]
    }
    // ... les autres questions suivront le même pattern
  ],
  profiles: [
    {
      id: "vercingetorix",
      name: t('quizData.diagnostic.profiles.vercingetorix.name'),
      description: t('quizData.diagnostic.profiles.vercingetorix.description'),
      scoreRange: [80, 100],
      color: "#10b981",
      icon: "👑",
      recommendations: [
        t('quizData.diagnostic.profiles.vercingetorix.recommendations.0'),
        t('quizData.diagnostic.profiles.vercingetorix.recommendations.1'),
        t('quizData.diagnostic.profiles.vercingetorix.recommendations.2')
      ]
    },
    {
      id: "guerrier",
      name: t('quizData.diagnostic.profiles.guerrier.name'),
      description: t('quizData.diagnostic.profiles.guerrier.description'),
      scoreRange: [60, 79],
      color: "#f59e0b",
      icon: "⚔️",
      recommendations: [
        t('quizData.diagnostic.profiles.guerrier.recommendations.0'),
        t('quizData.diagnostic.profiles.guerrier.recommendations.1'),
        t('quizData.diagnostic.profiles.guerrier.recommendations.2')
      ]
    },
    {
      id: "asterix",
      name: t('quizData.diagnostic.profiles.asterix.name'),
      description: t('quizData.diagnostic.profiles.asterix.description'),
      scoreRange: [40, 59],
      color: "#3b82f6",
      icon: "🛡️",
      recommendations: [
        t('quizData.diagnostic.profiles.asterix.recommendations.0'),
        t('quizData.diagnostic.profiles.asterix.recommendations.1'),
        t('quizData.diagnostic.profiles.asterix.recommendations.2')
      ]
    },
    {
      id: "panoramix",
      name: t('quizData.diagnostic.profiles.panoramix.name'),
      description: t('quizData.diagnostic.profiles.panoramix.description'),
      scoreRange: [0, 39],
      color: "#ef4444",
      icon: "🧪",
      recommendations: [
        t('quizData.diagnostic.profiles.panoramix.recommendations.0'),
        t('quizData.diagnostic.profiles.panoramix.recommendations.1'),
        t('quizData.diagnostic.profiles.panoramix.recommendations.2')
      ]
    }
  ]
});
