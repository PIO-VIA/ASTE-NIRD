'use client';

import { useTranslation } from 'react-i18next';
import { BookOpen, Gamepad2, ShieldCheck, Users } from 'lucide-react';

export default function PresentationSection() {
    const { t } = useTranslation();

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

    return (
        <section className="py-20 bg-nird-night relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <p className="text-lg font-outfit text-gray-200 group-hover:text-white transition-colors">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
