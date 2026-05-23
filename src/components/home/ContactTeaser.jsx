'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const CHANNELS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sub: 'Fastest response',
    href: 'https://wa.me/212600000000',
    tone: 'emerald',
  },
  {
    icon: Mail,
    label: 'Email',
    sub: 'hello@justwhyus.ma',
    href: 'mailto:hello@justwhyus.ma',
    tone: 'blue',
  },
  {
    icon: Calendar,
    label: 'Book a Call',
    sub: '30-min intro',
    href: '/contact',
    tone: 'amber',
  },
];

const TONE = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)]' },
  blue: { bg: 'bg-primarySoft', text: 'text-primary', hover: 'hover:shadow-glow' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.25)]' },
};

export function ContactTeaser() {
  const t = useTranslations('home');

  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-hero-radial" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            Get in touch
          </span>
          <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-textMain md:text-7xl">
            {t('contactHeading')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-textMuted">
            {t('contactSubtitle')}
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          {CHANNELS.map((ch, i) => {
            const Icon = ch.icon;
            const tone = TONE[ch.tone];
            return (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`group flex flex-col items-start rounded-3xl bg-white p-8 text-start shadow-card transition-all ${tone.hover}`}
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${tone.bg} ${tone.text}`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="font-display text-2xl font-bold text-textMain">{ch.label}</div>
                <div className="mt-2 text-sm text-textMuted">{ch.sub}</div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                  Open
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl-flip" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
