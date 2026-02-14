// ═══════════════════════════════════════════════════════
// Framer Motion Animation Variants
// Reusable across all components
// ═══════════════════════════════════════════════════════

import type { Variants } from 'framer-motion';

const cubicEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: cubicEase }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: cubicEase }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: cubicEase }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const floatingAnimation = {
  y: [0, -18, 0],
  rotate: [0, 6, -4, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut' as const
  }
};

export const iconHover = {
  scale: 1.3,
  rotate: 12,
  transition: { duration: 0.3, ease: 'easeOut' as const }
};

export const serviceIconHover = {
  scale: 1.15,
  y: -8,
  transition: { duration: 0.3, ease: 'easeOut' as const }
};

export const glowPulse = {
  scale: [1, 1.05, 1],
  opacity: [0.3, 0.6, 0.3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const
  }
};
