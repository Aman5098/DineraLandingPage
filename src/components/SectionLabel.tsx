import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface SectionLabelProps {
  children: string;
  color?: 'cyan' | 'purple' | 'green' | 'pink';
  className?: string;
}

const colorMap = {
  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  green: 'bg-green-500/10 border-green-500/30 text-green-400',
  pink: 'bg-pink-500/10 border-pink-500/30 text-pink-400',
};

const dotMap = {
  cyan: 'bg-cyan-400',
  purple: 'bg-purple-400',
  green: 'bg-green-400',
  pink: 'bg-pink-400',
};

export default function SectionLabel({
  children,
  color = 'cyan',
  className,
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest',
        colorMap[color],
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotMap[color])} />
      {children}
    </motion.div>
  );
}
