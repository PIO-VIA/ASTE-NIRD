# Guide d'utilisation du système de Scrollytelling - Style DaisyUI

## 🎨 Design inspiré de DaisyUI

Ce système de scrollytelling reproduit le style moderne et fluide des animations de scroll, avec :
- **Images alternées** gauche/droite pour chaque étape
- **Animations bidirectionnelles** qui fonctionnent en scroll up ET scroll down
- **Effet typing** sur le texte mot par mot
- **Support multilingue** intégré avec i18next

## 📦 Composants créés

### 1. `components/StoryStep.tsx`

Le composant principal qui gère une étape de scrollytelling avec position alternée.

**Props :**
```typescript
interface StoryStepProps {
  text: string;             // Texte à afficher
  image: string;            // URL de l'image
  position: "left" | "right"; // Position de l'image
  index: number;            // Index de l'étape (0, 1, 2...)
}
```

**Comportement :**
- ✅ Image bascule depuis la gauche ou la droite selon `position`
- ✅ Animation fluide avec cubic-bezier
- ✅ Texte apparaît mot par mot avec effet typing
- ✅ Indicateur de scroll "Continuez pour révéler l'histoire"
- ✅ Animations réversibles (scroll up/down)
- ✅ Design en grille responsive (2 colonnes sur desktop, 1 sur mobile)

### 2. `components/ScrollytellingStorySection.tsx`

Le composant assemblé avec :
- Les 3 étapes de l'histoire
- Support multilingue (FR/EN)
- Header avec titre animé
- Call-to-action final avec statistiques

**Configuration des étapes :**
```typescript
const steps = [
  {
    id: 1,
    image: "/assets/story-empire.png",
    textKey: "story.case1",
    position: "left",  // Image à gauche
  },
  {
    id: 2,
    image: "/assets/hero-char.png",
    textKey: "story.case2",
    position: "right", // Image à droite
  },
  {
    id: 3,
    image: "/assets/story-druid.png",
    textKey: "story.case3",
    position: "left",  // Image à gauche
  },
];
```

## 🌍 Support multilingue

Les textes sont gérés via i18next. Les traductions sont dans :
- `app/locales/fr/translation.json`
- `app/locales/en/translation.json`

**Clés de traduction utilisées :**
```json
{
  "story": {
    "case1": "Dans l'Empire du Numérique...",
    "case2": "Mais un petit village résistait...",
    "case3": "Leur potion magique ? Le NIRD."
  }
}
```

Le composant utilise `useTranslation()` pour récupérer automatiquement le texte dans la langue active.

## 🎯 Comportement exact

### Scroll vers le bas :
```
Section entre dans viewport (40%)
    ↓
Image apparaît depuis la gauche/droite
Effet : opacity 0→1, x -100/100→0, scale 0.8→1
    ↓
Utilisateur continue à scroller
    ↓
Zone de texte entre dans viewport (60%)
    ↓
Texte s'écrit mot par mot
Effet : stagger 0.02s entre chaque mot
    ↓
Section suivante
```

### Scroll vers le haut :
Les animations se rejouent en sens inverse grâce à `once: false` dans `useInView`.

## 🎨 Personnalisation

### Modifier les couleurs du dégradé

Dans `StoryStep.tsx` :
```tsx
// Overlay sur l'image
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-600/20" />

// Badge "Étape X"
<span className="... bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300">
```

### Ajuster la vitesse d'animation

```tsx
// Animation de l'image
transition: {
  duration: 0.8, // Durée en secondes
  ease: [0.25, 0.46, 0.45, 0.94], // Courbe d'animation
}

// Animation du texte
transition: {
  staggerChildren: 0.02, // Délai entre chaque mot
  delayChildren: 0.3,    // Délai avant de commencer
}
```

### Changer la sensibilité du trigger

```tsx
// Pour l'image
const isInView = useInView(sectionRef, {
  amount: 0.4 // 0.4 = 40% de la section visible
});

// Pour le texte
const textInView = useInView(textRef, {
  amount: 0.6 // 0.6 = 60% de la zone texte visible
});
```

## 🖼️ Images

Placez vos images dans `public/assets/` :
```
public/
  └── assets/
      ├── story-empire.png
      ├── hero-char.png
      └── story-druid.png
```

## 🚀 Utilisation

### Dans votre page

```tsx
import ScrollytellingStorySection from '@/components/ScrollytellingStorySection';

export default function Page() {
  return (
    <main>
      <ScrollytellingStorySection />
    </main>
  );
}
```

### Ajouter une nouvelle étape

Éditez `ScrollytellingStorySection.tsx` :

```tsx
const steps = [
  // ... étapes existantes
  {
    id: 4,
    image: "/assets/nouvelle-image.png",
    textKey: "story.case4", // Ajoutez la clé dans translation.json
    position: "right", // ou "left"
  },
];
```

Puis ajoutez la traduction dans `app/locales/fr/translation.json` :
```json
{
  "story": {
    "case4": "Votre nouveau texte..."
  }
}
```

## 🎭 Animations incluses

### Image
- **Fade-in** : opacity 0 → 1
- **Slide** : x -100/100 → 0 (depuis gauche ou droite)
- **Scale** : 0.8 → 1 (zoom léger)
- **Glow effect** : orbe lumineux décoratif

### Texte
- **Typing effect** : mot par mot
- **Fade + Slide** : opacity 0→1, y 10→0
- **Badge animé** : "Étape X" avec fond dégradé
- **Ligne décorative** : barre colorée sous le texte

### Indicateurs
- **Scroll hint** : icône animée bounce vertical
- **Connecteurs** : ligne verticale entre les sections
- **Background effects** : orbes lumineux et grilles

## 📱 Responsive

- **Mobile** : 1 colonne, image au-dessus du texte
- **Desktop** : 2 colonnes avec alternance gauche/droite
- **Texte** :
  - Mobile : 3xl (1.875rem)
  - Desktop : 5xl (3rem)

## ⚡ Performance

- `once: false` permet les animations réversibles
- Utilisation de `transform` pour les animations (GPU accelerated)
- Pas de re-render inutiles grâce aux refs
- Images optimisées avec Next.js Image (optionnel)

## 🔧 Dépannage

### Les animations ne se déclenchent pas
- Vérifiez que `amount` n'est pas trop élevé (essayez 0.3)
- Assurez-vous que la section a assez de hauteur (`min-h-screen`)

### Le texte apparaît immédiatement
- Vérifiez que `textInView` et `isInView` sont tous les deux true
- Ajustez le `amount` du `textRef`

### Les animations ne fonctionnent pas en scroll up
- Vérifiez que `once: false` est bien défini dans `useInView`

### Problème de traduction
- Vérifiez que les clés existent dans `translation.json`
- Assurez-vous que i18next est bien initialisé

## 📚 Technologies utilisées

- **Framer Motion** : Animations fluides et performantes
- **React i18next** : Support multilingue
- **Tailwind CSS** : Styling responsive et moderne
- **Next.js 16** : Framework React avec App Router
- **TypeScript** : Typage fort et IntelliSense

## 🎬 Exemple de résultat

```
┌─────────────────────────────────────┐
│     Notre Histoire                  │
│     ════════════                    │
└─────────────────────────────────────┘

┌───────────┐              ┌─────────┐
│   Image   │  <──left     │  Texte  │
│  Empire   │              │ Case 1  │
└───────────┘              └─────────┘
         ╎
         ╎
┌─────────┐              ┌───────────┐
│  Texte  │      right──>│   Image   │
│ Case 2  │              │  Village  │
└─────────┘              └───────────┘
         ╎
         ╎
┌───────────┐              ┌─────────┐
│   Image   │  <──left     │  Texte  │
│   NIRD    │              │ Case 3  │
└───────────┘              └─────────┘

┌─────────────────────────────────────┐
│   Rejoignez la Résistance           │
│   [CTA Buttons]                     │
└─────────────────────────────────────┘
```

## 🌟 Fonctionnalités avancées

- ✅ Scroll bidirectionnel (up/down)
- ✅ Images alternées gauche/droite
- ✅ Multilingue (FR/EN)
- ✅ Effet typing mot par mot
- ✅ Design moderne avec gradients
- ✅ Responsive mobile/desktop
- ✅ Indicateurs de scroll animés
- ✅ Background effects subtils
- ✅ Connecteurs entre sections

---

**Enjoy your DaisyUI-style scrollytelling! 🎨**

## Sources

Pour en savoir plus sur DaisyUI :
- [Tailwind Carousel Component – daisyUI](https://daisyui.com/components/carousel/)
- [Tailwind CSS Component Library – daisyUI](https://daisyui.com/)
