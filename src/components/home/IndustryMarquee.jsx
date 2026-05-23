'use client';

import { useLocale } from 'next-intl';
import * as Icons from 'lucide-react';
import { industries } from '@/config/industries.config';

export function IndustryMarquee() {
  const locale = useLocale();
  // Duplicate so the marquee loops seamlessly.
  const items = [...industries, ...industries];

  return (
    <section className="relative overflow-hidden border-y border-line bg-surface py-10">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface to-transparent" />

      <div className="mb-6 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">
          Industries we speak the language of
        </span>
      </div>

      <div className="flex w-max animate-marquee gap-3">
        {items.map((ind, i) => {
          const Icon = Icons[ind.icon] || Icons.Sparkles;
          return (
            <div
              key={`${ind.slug}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 shadow-softer"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primarySoft text-primary">
                <Icon size={14} strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-textMain whitespace-nowrap">
                {ind.name[locale] || ind.name.en}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
