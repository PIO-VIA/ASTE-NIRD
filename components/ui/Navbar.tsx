// Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Home, BookOpen, Globe, Gamepad2, Menu, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // Fermer le menu mobile et gérer le scroll
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: '/', label: t('navbar.home'), icon: <Home className="w-5 h-5" /> },
        { href: '/presentation', label: t('Classroom'), icon: <BookOpen className="w-5 h-5" /> },
        { href: '/jeux', label: t('navbar.quiz'), icon: <Gamepad2 className="w-5 h-5" /> },
    ];

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                style={{
                    backgroundColor: navbarBackground,
                    backdropFilter: navbarBlur,
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'shadow-lg shadow-black/20' : ''
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo et nom de l'application */}
                        <Link href="/" passHref onClick={closeMobileMenu}>
                            <motion.div
                                className="flex items-center gap-2 md:gap-3 group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-nird-gold/20 blur-xl rounded-full group-hover:bg-nird-gold/30 transition-all duration-300" />
                                    <div className="relative bg-gradient-to-br from-nird-gold to-nird-red p-2 md:p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                        <Shield className="w-5 h-5 md:w-6 md:h-6 text-nird-night" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg md:text-xl font-bold text-white font-outfit tracking-tight">
                                        Aste-NIRD
                                    </span>
                                    <span className="text-[10px] md:text-xs text-nird-gold font-outfit">
                                        {t('navbar.tagline')}
                                    </span>
                                </div>
                            </motion.div>
                        </Link>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden lg:flex items-center gap-6">
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

                        {/* Right side - Language + Menu */}
                        <div className="flex items-center gap-3 md:gap-4">
                            {/* Language Switcher - Desktop */}
                            <motion.div
                                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Globe className="w-4 h-4 text-nird-gold" />
                                <LanguageSwitcher />
                            </motion.div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </motion.button>
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

            {/* Mobile Menu Overlay - CORRECTION ICI */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                        />

                        {/* Mobile Menu Panel - Positionné au-dessus de tout */}
                        <motion.div
                            className="fixed inset-x-0 top-16 md:top-20 bottom-0 bg-gradient-to-b from-slate-900/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl z-[70] lg:hidden overflow-y-auto"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="container mx-auto px-6 py-8 h-full">
                                {/* Mobile Navigation Links */}
                                <div className="space-y-3">
                                    {navLinks.map((link, index) => (
                                        <Link key={index} href={link.href} passHref onClick={closeMobileMenu}>
                                            <motion.div
                                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-nird-gold/50 transition-all cursor-pointer group"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ 
                                                    delay: index * 0.1,
                                                    type: 'spring',
                                                    damping: 20,
                                                    stiffness: 200
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-nird-gold/20 to-nird-red/20 border border-nird-gold/30 group-hover:scale-110 transition-transform">
                                                    <span className="text-nird-gold">
                                                        {link.icon}
                                                    </span>
                                                </div>
                                                <span className="text-white font-outfit font-semibold text-lg flex-1">
                                                    {link.label}
                                                </span>
                                                <motion.span
                                                    className="text-nird-gold text-xl"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ 
                                                        repeat: Infinity, 
                                                        duration: 1.5,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    →
                                                </motion.span>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile Language Switcher */}
                                <motion.div
                                    className="mt-8 p-5 rounded-2xl bg-white/10 border border-white/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-nird-gold/20 to-nird-red/20 border border-nird-gold/30">
                                                <Globe className="w-5 h-5 text-nird-gold" />
                                            </div>
                                            <span className="text-white font-outfit font-semibold">
                                                {t('Language') || 'Language'}
                                            </span>
                                        </div>
                                        <LanguageSwitcher />
                                    </div>
                                </motion.div>

                                {/* Mobile Footer Info */}
                                <motion.div
                                    className="mt-auto pt-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-nird-gold to-nird-red shadow-lg shadow-nird-gold/20">
                                            <Shield className="w-8 h-8 text-nird-night" />
                                        </div>
                                        <p className="text-sm text-gray-400 font-outfit max-w-xs mx-auto">
                                            {t('navbar.tagline')}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}