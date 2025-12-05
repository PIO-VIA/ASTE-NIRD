"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

interface StoryStepProps {
  text: string;
  image: string;
  position: "left" | "right"; // Position de l'image
  index: number;
}

/**
 * Composant StoryStep - Style DaisyUI Scrollytelling
 *
 * Comportement :
 * - L'image bascule à gauche ou à droite selon la position
 * - Animation fluide en scroll up ET scroll down
 * - Le texte apparaît après l'image avec un effet typing
 * - Design alterné pour chaque étape
 */
export default function StoryStep({ text, image, position, index }: StoryStepProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [textVisible, setTextVisible] = useState(false);

  // Détection de la section dans le viewport
  const isInView = useInView(sectionRef, {
    once: false, // Animation aussi en remontant
    amount: 0.4 // Déclenche quand 40% est visible
  });

  // Détection du texte dans le viewport
  const textInView = useInView(textRef, {
    once: false,
    amount: 0.6
  });

  // Gestion de l'apparition du texte
  useEffect(() => {
    if (textInView && isInView) {
      setTextVisible(true);
    } else {
      setTextVisible(false);
    }
  }, [textInView, isInView]);

  // Animation de l'image selon la position
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: position === "left" ? -100 : 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // Cubic bezier fluide
      },
    },
  };

  // Animation du texte (typing effect)
  const textContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Split du texte en mots (plus fluide que par lettre)
  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            position === "right" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className={`relative ${position === "right" ? "lg:col-start-2" : ""}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={`Story step ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-600/20" />
            </div>

            {/* Decoration */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`absolute -z-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 blur-3xl ${
                position === "left" ? "-right-16 -bottom-16" : "-left-16 -bottom-16"
              }`}
            />
          </motion.div>

          {/* Texte */}
          <div
            ref={textRef}
            className={`${position === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <motion.div
              initial="hidden"
              animate={textVisible ? "visible" : "hidden"}
              variants={textContainerVariants}
              className="space-y-6"
            >
              {/* Numéro de step */}
              <motion.div variants={letterVariants}>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold">
                  {t('story.step', { number: index + 1 })}
                </span>
              </motion.div>

              {/* Texte principal avec effet typing par mot */}
              <div className="text-3xl md:text-5xl font-bold leading-tight">
                {words.map((word, wordIndex) => (
                  <motion.span
                    key={`word-${wordIndex}`}
                    variants={letterVariants}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Ligne décorative */}
              <motion.div
                variants={letterVariants}
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </motion.div>

            {/* Scroll indicator (visible seulement si texte pas encore affiché) */}
            {isInView && !textVisible && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <ChevronDown className="w-5 h-5" />
                  <span>{t('story.scrollPrompt')}</span>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Background pattern subtil */}
      <div className="absolute inset-0 -z-20 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  );
}
