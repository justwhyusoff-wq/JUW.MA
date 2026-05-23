'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

export function Card({ children, className, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: '#E84E2B' } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-2xl border border-moss bg-moss/40 p-6 backdrop-blur-sm',
        hover && 'cursor-pointer hover:shadow-[0_0_40px_-10px_rgba(232,78,43,0.3)]',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
