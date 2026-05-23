'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1200;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function StatsBar() {
  const t = useTranslations('home');

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 divide-y divide-line rounded-3xl bg-white shadow-card md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <Stat label={t('statsIndustries')}>
            <Counter to={6} suffix="+" />
          </Stat>
          <Stat label={t('statsSystems')}>
            <span className="text-primary">∞</span>
            <span className="block text-xs text-textMuted font-medium normal-case tracking-normal mt-2">
              We're just starting
            </span>
          </Stat>
          <Stat label={t('statsCountries')}>
            <span>{t('statsCountriesValue')} 🇲🇦</span>
          </Stat>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, children }) {
  return (
    <div className="px-8 py-10 text-center">
      <div className="font-display text-5xl font-extrabold text-textMain md:text-6xl">{children}</div>
      <div className="mt-3 font-display text-[11px] uppercase tracking-[0.18em] text-textMuted font-semibold">
        {label}
      </div>
    </div>
  );
}
