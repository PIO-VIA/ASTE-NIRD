'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Home, BookOpen, Globe, Gamepad2 } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Animation de la navbar au scroll
    const navbarBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(15, 23, 42, 0.3)', 'rgba(15, 23, 42, 0.8)']
    );

    const navbarBlur = useTransform(
        scrollY,
        [0, 100],
        ['blur(8px)', 'blur(16px)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: t('navbar.home'), icon: <Home className="w-4 h-4" /> },
        { href: '/#story', label: t('navbar.story'), icon: <BookOpen className="w-4 h-4" /> },
        { href: '/jeux', label: t('navbar.quiz'), icon: <Gamepad2 className="w-4 h-4" /> },
    ];

    return (
        <motion.nav
            style={{
                backgroundColor: navbarBackground,
                backdropFilter: navbarBlur,
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/20' : ''
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo et nom de l'application */}
                    <Link href="/" passHref>
                        <motion.div
                            className="flex items-center gap-3 group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-nird-gold/20 blur-xl rounded-full group-hover:bg-nird-gold/30 transition-all duration-300" />
                                <div className="relative bg-gradient-to-br from-nird-gold to-nird-red p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                    <Shield className="w-6 h-6 text-nird-night" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white font-outfit tracking-tight">
                                    Aste-NIRD
                                </span>
                                <span className="text-xs text-nird-gold font-outfit">
                                    {t('navbar.tagline')}
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href} passHref>
                                <motion.div
                                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group cursor-pointer"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="group-hover:text-nird-gold transition-colors">
                                        {link.icon}
                                    </span>
                                    <span className="font-outfit font-medium">
                                        {link.label}
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Language Switcher avec icône */}
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Globe className="w-4 h-4 text-nird-gold" />
                            <LanguageSwitcher />
                        </motion.div>

                        {/* Mobile language switcher */}
                        <div className="sm:hidden">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ligne décorative en bas de la navbar */}
            <motion.div
                className="h-[1px] bg-gradient-to-r from-transparent via-nird-gold to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isScrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.nav>
    );
}
