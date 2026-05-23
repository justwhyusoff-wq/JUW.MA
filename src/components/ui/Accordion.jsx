'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(null);

  return (
    <div className={cn('divide-y divide-line rounded-3xl bg-white shadow-card', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="px-6">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold text-textMain">
                {item.q}
              </span>
              <span className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors',
                isOpen ? 'bg-primary text-white' : 'bg-surface text-primary'
              )}>
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pe-12 text-textMuted leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
