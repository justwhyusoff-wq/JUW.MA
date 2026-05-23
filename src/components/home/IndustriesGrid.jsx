'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/navigation';
import { industries } from '@/config/industries.config';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function IndustriesGrid() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Industries
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
              {t('industriesHeading')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-textMuted">
              Six industries we've gone deep on — each with its own systems, integrations, and quirks.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((ind) => {
            const Icon = Icons[ind.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={ind.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Link href={`/industries/${ind.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-card transition-shadow hover:shadow-cardHover"
                  >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primarySoft text-primary">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="mb-2 font-display text-xl font-bold text-textMain group-hover:text-primary transition-colors">
                      {ind.name[locale] || ind.name.en}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-textMuted">
                      {ind.tagline[locale] || ind.tagline.en}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                      Explore
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl-flip" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
