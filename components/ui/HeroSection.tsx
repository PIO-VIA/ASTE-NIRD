'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nird-night/50 to-nird-night"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-6xl md:text-8xl font-carter text-nird-gold drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] animate-fade-in-up">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-3xl font-outfit text-white drop-shadow-md max-w-2xl">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Character Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
                        <Image
                            src="/assets/hero-char.png"
                            alt="Hero Character"
                            fill
                            className="object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 animate-bounce">
                <span className="text-sm font-outfit opacity-80">{t('hero.scroll')}</span>
                <ArrowDown className="w-6 h-6 text-nird-gold" />
            </div>
        </section>
    );
}
