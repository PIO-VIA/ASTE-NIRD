# 🛡️ Aste-NIRD - La Résistance Numérique

> "Le village numérique qui résiste encore et toujours aux Big Tech."

Bienvenue sur le dépôt du projet **Aste-NIRD**, réalisé dans le cadre de la **Nuit de l'Info**. Ce projet est une application web interactive et éducative visant à sensibiliser aux enjeux du numérique responsable, éthique et durable (NIRD).

![Aste-NIRD Banner](https://via.placeholder.com/1200x400?text=Aste-NIRD+Project)

## 📋 À propos

Aste-NIRD est une plateforme immersive qui plonge l'utilisateur dans un univers métaphorique inspiré des célèbres Gaulois, où un petit village résiste à l'envahisseur "Empire Big Tech".

L'objectif est de promouvoir la démarche **NIRD** :
- **N**umérique
- **I**nclusif
- **R**esponsable
- **D**urable

À travers une narration interactive ("Scrollytelling"), des présentations ludiques et des mini-jeux (Quiz), les utilisateurs découvrent comment reprendre le contrôle de leur vie numérique.

## ✨ Fonctionnalités Clés

- **🎭 Narration Interactive (Scrollytelling)** : Une expérience immersive où l'histoire de la résistance numérique se dévoile au rythme du défilement de l'utilisateur.
- **🌍 Internationalisation (i18n)** : Une application pensée pour tous, entièrement traduite en Français et Anglais avec détection automatique.
- **🎮 Zone de Jeux & Quiz** : Un moteur de quiz complet avec sauvegarde de progression, calcul de score et attribution de profils ludiques (du "Spectateur" au "Druide du Libre").
- **📊 Présentation Interactive** : Une exploration des piliers NIRD via une interface de tuiles dynamiques et réactives.
- **🤖 Assistant NIRD** : Un chatbot intégré pour guider les utilisateurs, prêt à être connecté à une intelligence artificielle.
- **🎨 Design & UX** : Une identité visuelle unique "Dark & Gold", entièrement responsive et accessible.

## 🏆 Réalisations & Défis Techniques

Au-delà des fonctionnalités visibles, ce projet intègre plusieurs défis techniques relevés durant la nuit :

1.  **Moteur de Quiz Dynamique** : Développement d'un système flexible capable de gérer différents types de questions, le calcul de scores en temps réel et l'attribution de profils personnalisés.
2.  **Architecture i18n Complète** : Mise en place d'une stratégie de traduction robuste couvrant l'intégralité de l'application, y compris les contenus dynamiques.
3.  **Interface "Pixel Perfect"** : Intégration fidèle d'une direction artistique originale avec Tailwind CSS v4.
4.  **Composant Chatbot Isolé** : Conception d'un widget de chat autonome et facilement intégrable.
5.  **Performance & Optimisation** : Utilisation des Server Components de Next.js pour une rapidité optimale.

## 🛠️ Stack Technique

Ce projet utilise les dernières technologies web pour garantir performance et expérience utilisateur :

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **3D** : [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Internationalisation** : [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)

## 🚀 Installation et Démarrage

Suivez ces étapes pour lancer le projet localement :

### Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

### Étapes

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/PIO-VIA/ASTE-NIRD.git
    cd ASTE-NIRD
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Accéder à l'application**
    Ouvrez votre navigateur et allez sur `http://localhost:3000`.

## 📂 Structure du Projet

```
ASTE-NIRD/
├── app/                    # Dossier principal de l'application (App Router)
│   ├── jeux/               # Section Jeux (Quiz, etc.)
│   ├── locales/            # Fichiers de traduction (fr/en)
│   ├── presentation/       # Page de présentation interactive
│   ├── globals.css         # Styles globaux
│   ├── layout.tsx          # Layout racine
│   └── page.tsx            # Page d'accueil
├── components/             # Composants Réutilisables
│   ├── ui/                 # Composants d'interface (Boutons, Cards, Navbar...)
│   ├── Chatbot.tsx         # Composant Chatbot
│   └── ...
├── lib/                    # Utilitaires et Données
│   └── quiz/               # Logique et données des quiz
├── public/                 # Assets statiques (images, fonts)
└── ...
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer le village :

1.  Forkez le projet.
2.  Créez votre branche de fonctionnalité (`git checkout -b feature/MaNouvellePotion`).
3.  Commitez vos changements (`git commit -m 'Ajout de : MaNouvellePotion'`).
4.  Poussez vers la branche (`git push origin feature/MaNouvellePotion`).
5.  Ouvrez une Pull Request.

## 📜 Licence

Ce projet est distribué sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

---

*Fait avec ❤️ et du code libre pour la Nuit de l'Info.*
