'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = 'JUST_WHY_US'.split('');

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const shown = sessionStorage.getItem('jwu-loader-shown');
    if (shown) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('jwu-loader-shown', '1');
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div className="relative flex items-center">
            {LETTERS.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className={`font-display text-3xl font-extrabold tracking-tight md:text-5xl ${
                  ch === '_' || i < 4 || i > 7 ? 'text-textMain' : 'text-primary'
                }`}
              >
                {ch}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="absolute bottom-1/2 mt-12 h-px translate-y-12 bg-primary/40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
