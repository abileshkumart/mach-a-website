import { motion } from 'framer-motion';

interface GradientOrbProps {
  className?: string;
  delay?: number;
}

export default function GradientOrb({ className, delay = 0 }: GradientOrbProps) {
  return (
    <motion.div
      className={`gradient-orb ${className || ''}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      aria-hidden="true"
    />
  );
}
