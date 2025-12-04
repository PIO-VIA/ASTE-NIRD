"use client";

import LanguageSwitcher from '../components/LanguageSwitcher';
import HeroSection from '../components/ui/HeroSection';
import PresentationSection from '../components/ui/PresentationSection';
import StorySection from '../components/ui/StorySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-nird-night text-white font-outfit">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <HeroSection />
      <PresentationSection />
      <StorySection />

      <footer className="py-8 text-center text-white/40 text-sm">
        <p>&copy; 2025 Aste-NIRD. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
