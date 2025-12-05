"use client";

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" bg-nird-night grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="absolute top-4 right-4">
        <LanguageSwitcher />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">{t('welcome')}</h1>
        <p className="text-lg">{t('description')}</p>
      </main>
    </div>
  );
}
