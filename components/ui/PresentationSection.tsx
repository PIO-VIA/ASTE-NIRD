'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Gamepad2, ShieldCheck, Users } from 'lucide-react';

export default function PresentationSection() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLDivElement>(null);

    // Utiliser useScroll pour suivre la progression du scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"] // Animation commence quand la section entre dans la vue
    });

    const features = [
        {
            icon: <BookOpen className="w-10 h-10 text-nird-gold" />,
            text: t('presentation.story'),
        },
        {
            icon: <Gamepad2 className="w-10 h-10 text-nird-green" />,
            text: t('presentation.journey'),
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-nird-red" />,
            text: t('presentation.quiz'),
        },
        {
            icon: <Users className="w-10 h-10 text-white" />,
            text: t('presentation.immersion'),
        },
    ];

    // Fonction pour créer les transformations pour chaque carte
    const getCardTransforms = (index: number) => {
        // Décalage progressif pour chaque carte
        const delay = index * 0.15;
        const start = delay;
        const end = Math.min(start + 0.3, 1);

        // Position X: commence à gauche empilée, se déplace vers sa position finale
        const x = useTransform(
            scrollYProgress,
            [start, end],
            [-300, 0]
        );

        // Opacité: reste visible tout le temps
        const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [1, 1] // Toujours visible
        );

        // Scale: commence petite, grandit vers la taille normale
        const scale = useTransform(
            scrollYProgress,
            [start, end],
            [0.85, 1]
        );

        // Rotation: commence inclinée, se redresse
        const rotate = useTransform(
            scrollYProgress,
            [start, end],
            [-12, 0]
        );

        // Position Y: légère variation pour l'effet de deck empilé
        const y = useTransform(
            scrollYProgress,
            [start, end],
            [index * 15, 0] // Les cartes sont empilées verticalement au début
        );

        return { x, y, opacity, scale, rotate };
    };

    return (
        <section ref={sectionRef} className="py-20 bg-nird-night relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const { x, y, opacity, scale, rotate } = getCardTransforms(index);

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    x,
                                    y,
                                    opacity,
                                    scale,
                                    rotate,
                                }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors duration-300 group"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <p className="text-lg font-outfit text-gray-200 group-hover:text-white transition-colors">
                                    {feature.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
