'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

const variants = {
  primary:
    'bg-ember text-void hover:bg-brick border border-ember hover:border-brick',
  outline:
    'border border-ember text-ember hover:bg-ember hover:text-void',
  ghost:
    'border border-transparent text-linen hover:border-sage/40 hover:text-ember',
  mint:
    'bg-mint text-void hover:bg-jungle border border-mint hover:border-jungle',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className, as: Comp = 'button', ...props },
  ref
) {
  const Motion = motion(Comp);
  return (
    <Motion
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 24 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 font-display uppercase text-xs',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Motion>
  );
});
