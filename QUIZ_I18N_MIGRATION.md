# Migration des Quiz vers i18n

## 📋 Vue d'ensemble

Le système de quiz a été migré pour supporter complètement l'internationalisation (i18n) avec React i18next. Cela permet de changer facilement de langue (FR/EN) pour tous les quiz.

## 🗂️ Structure des fichiers

### Fichiers de traduction

Les traductions sont séparées dans des fichiers JSON dédiés :

```
app/locales/
├── fr/
│   ├── translation.json          # Traductions générales FR
│   └── quiz-diagnostic.json      # Traductions quiz diagnostic FR
└── en/
    ├── translation.json          # Traductions générales EN
    └── quiz-diagnostic.json      # Traductions quiz diagnostic EN
```

### Fichiers de données

Les quiz sont maintenant générés dynamiquement avec TypeScript :

```
lib/quiz/data/
├── diagnostic.ts                 # Quiz diagnostic avec i18n ✅
├── connaissance.json             # À migrer vers .ts
├── action.json                   # À migrer vers .ts
└── index.ts                      # Point d'entrée avec nouvelles fonctions
```

## 🔧 Comment ça marche

### 1. Structure d'une traduction de quiz

**Fichier : `app/locales/fr/quiz-diagnostic.json`**

```json
{
  "quizData": {
    "diagnostic": {
      "metadata": {
        "title": "Es-tu prisonnier de l'Empire numérique ?",
        "description": "Évalue le niveau de dépendance..."
      },
      "questions": {
        "q1": {
          "question": "Combien ton établissement dépense...",
          "subtitle": "Windows, Office, antivirus...",
          "options": {
            "a": "Moins de 10 000€",
            "b": "Entre 10 000€ et 50 000€",
            "c": "Plus de 50 000€",
            "d": "Je ne sais pas du tout"
          },
          "explanation": "En moyenne, un lycée français..."
        }
      },
      "profiles": {
        "vercingetorix": {
          "name": "Vercingétorix - Chef de la Résistance",
          "description": "Tu es un véritable leader...",
          "recommendations": {
            "0": "Continue de partager...",
            "1": "Approfondir tes connaissances...",
            "2": "Devenir ambassadeur NIRD..."
          }
        }
      }
    }
  }
}
```

### 2. Génération du quiz avec TypeScript

**Fichier : `lib/quiz/data/diagnostic.ts`**

```typescript
import { Quiz } from '../types';

export const getDiagnosticQuiz = (t: (key: string) => string): Quiz => ({
  metadata: {
    id: "quiz-diagnostic",
    slug: "diagnostic",
    title: t('quizData.diagnostic.metadata.title'),
    description: t('quizData.diagnostic.metadata.description'),
    // ...
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
        // ...
      ],
      explanation: t('quizData.diagnostic.questions.q1.explanation'),
      // ...
    }
  ],
  profiles: [
    {
      id: "vercingetorix",
      name: t('quizData.diagnostic.profiles.vercingetorix.name'),
      description: t('quizData.diagnostic.profiles.vercingetorix.description'),
      recommendations: [
        t('quizData.diagnostic.profiles.vercingetorix.recommendations.0'),
        t('quizData.diagnostic.profiles.vercingetorix.recommendations.1'),
        t('quizData.diagnostic.profiles.vercingetorix.recommendations.2')
      ]
      // ...
    }
  ]
});
```

### 3. Utilisation dans les composants

**Méthode recommandée :**

```typescript
'use client';

import { useTranslation } from 'react-i18next';
import { getAllQuizzes, getQuizBySlug } from '@/lib/quiz/data';

export default function QuizPage() {
  const { t } = useTranslation();

  // Obtenir tous les quiz dans la langue active
  const quizzes = getAllQuizzes(t);

  // Obtenir un quiz spécifique
  const quiz = getQuizBySlug('diagnostic', t);

  return (
    <div>
      <h1>{quiz?.metadata.title}</h1>
      {/* Le titre sera automatiquement en FR ou EN selon la langue */}
    </div>
  );
}
```

## 🚀 Nouvelles fonctions API

### `getAllQuizzes(t)`

Retourne tous les quiz avec traductions dans la langue active.

```typescript
const quizzes = getAllQuizzes(t);
// Résultat : [Quiz diagnostic FR, Quiz connaissance, Quiz action]
```

### `getQuizBySlug(slug, t)`

Récupère un quiz par son slug avec traductions.

```typescript
const quiz = getQuizBySlug('diagnostic', t);
// Résultat : Quiz diagnostic en français ou anglais
```

### `getQuizById(id, t)`

Récupère un quiz par son ID avec traductions.

```typescript
const quiz = getQuizById('quiz-diagnostic', t);
```

### `getAllQuizMetadata(t)`

Récupère uniquement les métadonnées de tous les quiz.

```typescript
const metadata = getAllQuizMetadata(t);
// Résultat : [{ id, slug, title, description, ... }]
```

## 📝 Comment migrer un nouveau quiz

### Étape 1 : Créer les fichiers de traduction

**FR : `app/locales/fr/quiz-[nom].json`**

```json
{
  "quizData": {
    "[nom]": {
      "metadata": {
        "title": "Titre du quiz",
        "description": "Description"
      },
      "questions": {
        "q1": {
          "question": "Question 1 ?",
          "options": {
            "a": "Option A",
            "b": "Option B"
          },
          "explanation": "Explication"
        }
      },
      "profiles": {
        "profil1": {
          "name": "Nom du profil",
          "description": "Description",
          "recommendations": {
            "0": "Conseil 1",
            "1": "Conseil 2"
          }
        }
      }
    }
  }
}
```

**EN : `app/locales/en/quiz-[nom].json`**

Créer la même structure en anglais.

### Étape 2 : Créer le fichier TypeScript

**`lib/quiz/data/[nom].ts`**

```typescript
import { Quiz } from '../types';

export const get[Nom]Quiz = (t: (key: string) => string): Quiz => ({
  metadata: {
    id: "quiz-[nom]",
    slug: "[nom]",
    title: t('quizData.[nom].metadata.title'),
    description: t('quizData.[nom].metadata.description'),
    // ... autres champs fixes
  },
  questions: [
    {
      id: "q1",
      question: t('quizData.[nom].questions.q1.question'),
      options: [
        {
          id: "q1-a",
          text: t('quizData.[nom].questions.q1.options.a'),
          points: 3
        }
      ],
      explanation: t('quizData.[nom].questions.q1.explanation'),
      // ... autres champs fixes
    }
  ],
  profiles: [
    {
      id: "profil1",
      name: t('quizData.[nom].profiles.profil1.name'),
      description: t('quizData.[nom].profiles.profil1.description'),
      recommendations: [
        t('quizData.[nom].profiles.profil1.recommendations.0'),
        t('quizData.[nom].profiles.profil1.recommendations.1')
      ]
      // ... autres champs fixes
    }
  ]
});
```

### Étape 3 : Mettre à jour `data/index.ts`

```typescript
import { get[Nom]Quiz } from './[nom]';

export function getAllQuizzes(t: (key: string) => string): Quiz[] {
  return [
    getDiagnosticQuiz(t),
    get[Nom]Quiz(t),  // ← Ajouter ici
    // ...
  ];
}
```

### Étape 4 : Charger les traductions (optionnel)

Si les traductions ne se chargent pas automatiquement, mettre à jour `lib/quiz/i18n-loader.ts` :

```typescript
import quiz[Nom]Fr from '@/app/locales/fr/quiz-[nom].json';
import quiz[Nom]En from '@/app/locales/en/quiz-[nom].json';

export function useQuizTranslations() {
  // ...
  i18n.addResourceBundle('fr', 'translation', quiz[Nom]Fr, true, true);
  i18n.addResourceBundle('en', 'translation', quiz[Nom]En, true, true);
  // ...
}
```

## ✅ Avantages du nouveau système

### 1. Changement de langue instantané

```typescript
// L'utilisateur clique sur EN
i18n.changeLanguage('en');
// Tous les quiz passent automatiquement en anglais
```

### 2. Maintenabilité

- Traductions séparées dans des fichiers JSON dédiés
- Structure claire et organisée
- Facile à modifier/traduire

### 3. Type-safety

- TypeScript garantit la structure des quiz
- Autocomplétion dans l'IDE
- Erreurs détectées à la compilation

### 4. Performance

- Traductions chargées une seule fois
- Pas de re-render inutiles
- Optimisé pour React 19

## 🔄 Rétrocompatibilité

Pour la compatibilité pendant la migration, les anciennes exports sont conservées :

```typescript
// Ancienne méthode (utilise encore les JSON)
import { allQuizzes } from '@/lib/quiz/data';

// Nouvelle méthode (avec i18n)
import { getAllQuizzes } from '@/lib/quiz/data';
const quizzes = getAllQuizzes(t);
```

## 📚 Prochaines étapes

### À faire :

- [ ] Migrer `connaissance.json` vers `connaissance.ts`
- [ ] Migrer `action.json` vers `action.ts`
- [ ] Supprimer les exports de compatibilité
- [ ] Supprimer les anciens fichiers JSON
- [ ] Mettre à jour tous les composants pour utiliser les nouvelles fonctions

### Quiz migrés :

- [x] Quiz Diagnostic (FR/EN)
- [ ] Quiz Connaissance
- [ ] Quiz Action

## 💡 Conseils

1. **Toujours tester** le changement de langue après modification
2. **Vérifier les clés** de traduction (faute de frappe = texte manquant)
3. **Garder la même structure** FR/EN pour faciliter la maintenance
4. **Utiliser des clés descriptives** : `quizData.diagnostic.questions.q1.question`
5. **Ne pas oublier** les pluriels et les variables `{{number}}` si nécessaire

## 🆘 Dépannage

### Problème : Texte non traduit

```typescript
// ❌ Mauvais
t('wrong.key')  // Affiche "wrong.key"

// ✅ Bon
t('quizData.diagnostic.metadata.title')  // Affiche le titre traduit
```

### Problème : Traductions ne se chargent pas

Vérifier que les fichiers JSON sont bien importés dans `i18n-loader.ts`.

### Problème : TypeScript erreur

Vérifier que la structure du Quiz correspond bien au type `Quiz` dans `lib/quiz/types.ts`.

---

**Enjoy multilingual quizzes! 🌍**
