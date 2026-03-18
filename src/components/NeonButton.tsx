import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import type { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'cyan' | 'purple' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function NeonButton({
  children,
  variant = 'cyan',
  size = 'md',
  className,
  onClick,
  href,
}: NeonButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    cyan: 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300',
    purple: 'bg-purple-500/10 border border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-300',
    outline: 'bg-transparent border border-white/20 text-white/80 hover:bg-white/5 hover:border-white/40 hover:text-white',
    ghost: 'bg-transparent border-0 text-white/60 hover:text-white hover:bg-white/5',
  };

  const glowClasses = {
    cyan: 'hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]',
    purple: 'hover:shadow-[0_0_20px_rgba(191,0,255,0.3)]',
    outline: 'hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
    ghost: '',
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer select-none backdrop-blur-sm',
    sizeClasses[size],
    variantClasses[variant],
    glowClasses[variant],
    className
  );

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
