"use client";

import { useTranslation } from 'react-i18next';
import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/ui/HeroSection';
import PresentationSection from '../components/ui/PresentationSection';
import ScrollytellingStorySection from '../components/ScrollytellingStorySection';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-nird-night text-white font-outfit">
      <Navbar />

      <HeroSection />
      <PresentationSection />
      <ScrollytellingStorySection />

      <footer className="py-8 text-center text-white/40 text-sm">
        <p>{t('footer.copyright')}</p>
      </footer>
    </main>
  );
}
