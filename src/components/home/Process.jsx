'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const STEPS = [
  { key: 'discover', n: '01', icon: Search },
  { key: 'design', n: '02', icon: Palette },
  { key: 'build', n: '03', icon: Code2 },
  { key: 'launch', n: '04', icon: Rocket },
];

export function Process() {
  const t = useTranslations('process');
  const tHome = useTranslations('home');

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              The JWU Way
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
              {tHome('processHeading')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <svg className="absolute left-0 right-0 top-12 hidden h-2 w-full md:block" preserveAspectRatio="none" viewBox="0 0 1200 8">
            <line x1="60" y1="4" x2="1140" y2="4" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
            <motion.line
              x1="60" y1="4" x2="1140" y2="4"
              stroke="#2DD4A8" strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            />
          </svg>

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-card">
                    <Icon size={24} className="text-primary" strokeWidth={1.8} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white shadow-glow">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-textMain">
                    {t(step.key)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-textMuted px-2">{t(`${step.key}Desc`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
