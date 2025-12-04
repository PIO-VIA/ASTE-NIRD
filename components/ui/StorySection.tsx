'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function StorySection() {
    const { t } = useTranslation();

    const stories = [
        {
            id: 1,
            image: '/assets/story-empire.png',
            text: t('story.case1'),
            alt: 'Digital Empire',
            reverse: false,
        },
        {
            id: 2,
            image: '/assets/story-village.png',
            text: t('story.case2'),
            alt: 'Resistance Village',
            reverse: true,
        },
        {
            id: 3,
            image: '/assets/story-druid.png',
            text: t('story.case3'),
            alt: 'Druid Potion',
            reverse: false,
        },
    ];

    return (
        <section className="py-20 bg-nird-night">
            <div className="container mx-auto px-4 space-y-32">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className={`flex flex-col ${story.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                    >
                        {/* Image */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group">
                                <Image
                                    src={story.image}
                                    alt={story.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
                                {/* Decorative quote mark */}
                                <span className="absolute -top-6 -left-4 text-6xl text-nird-gold font-carter opacity-50">"</span>
                                <p className="text-2xl md:text-3xl font-carter text-gray-100 leading-relaxed">
                                    {story.text}
                                </p>
                                <span className="absolute -bottom-12 -right-4 text-6xl text-nird-gold font-carter opacity-50 rotate-180">"</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
