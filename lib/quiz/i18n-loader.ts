// lib/quiz/i18n-loader.ts
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import quizDiagnosticFr from '@/app/locales/fr/quiz-diagnostic.json';
import quizDiagnosticEn from '@/app/locales/en/quiz-diagnostic.json';

/**
 * Hook pour charger les ressources de traduction des quiz
 */
export function useQuizTranslations() {
  const { i18n } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Charger les ressources de quiz dans i18next
    if (!i18n.hasResourceBundle('fr', 'translation')) {
      i18n.addResourceBundle('fr', 'translation', quizDiagnosticFr, true, true);
    }
    if (!i18n.hasResourceBundle('en', 'translation')) {
      i18n.addResourceBundle('en', 'translation', quizDiagnosticEn, true, true);
    }

    setLoaded(true);
  }, [i18n]);

  return loaded;
}
