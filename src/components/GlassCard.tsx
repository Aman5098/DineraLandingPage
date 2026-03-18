import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'purple' | 'green' | 'pink' | 'none';
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = 'none',
  delay = 0,
}: GlassCardProps) {
  const glowMap = {
    cyan: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.15),inset_0_0_30px_rgba(0,245,255,0.03)]',
    purple: 'hover:shadow-[0_0_30px_rgba(191,0,255,0.15),inset_0_0_30px_rgba(191,0,255,0.03)]',
    green: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.15),inset_0_0_30px_rgba(0,255,136,0.03)]',
    pink: 'hover:shadow-[0_0_30px_rgba(255,0,128,0.15),inset_0_0_30px_rgba(255,0,128,0.03)]',
    none: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        'glass rounded-2xl transition-all duration-300',
        hover && 'cursor-pointer',
        glow !== 'none' && glowMap[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
