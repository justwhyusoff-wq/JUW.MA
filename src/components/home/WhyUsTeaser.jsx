'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function WhyUsTeaser() {
  const t = useTranslations('home');

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -2 }}
            className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-card sm:p-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative">
              <Quote size={36} className="text-primary mb-6" />
              <p className="max-w-3xl font-display text-2xl font-semibold leading-snug text-textMain md:text-4xl">
                {t('whyUsTeaser')}
              </p>
              <Link
                href="/why-us"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glowSoft transition-all hover:bg-primaryHover hover:-translate-y-0.5"
              >
                {t('whyUsCta')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
              </Link>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
