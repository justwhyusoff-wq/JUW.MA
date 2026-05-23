'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingDown, AlertTriangle, Smartphone } from 'lucide-react';

export function ProblemSection() {
  const t = useTranslations('home');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);
  const target = 97;

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <section ref={ref} className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="font-display text-[9rem] font-extrabold leading-none text-primary tracking-tight sm:text-[11rem] md:text-[13rem]">
              {count}%
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 w-full origin-left bg-primary rounded-full"
            />
            <div className="mt-4 text-sm uppercase tracking-[0.18em] text-textMuted font-semibold">
              — Industry observation, 2024
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-display text-2xl font-semibold leading-snug text-textMain md:text-3xl">
              {t('problemText')}
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: Smartphone, text: 'Mobile experiences that frustrate' },
                { icon: AlertTriangle, text: 'Inquiries lost between WhatsApp and email' },
                { icon: TrendingDown, text: 'No way to convert browsers to buyers' },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.text} className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary shadow-softer">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm font-medium text-textMain">{p.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
