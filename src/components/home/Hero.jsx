'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  UtensilsCrossed,
  Car,
  Plane,
  Building2,
  ShoppingBag,
  Briefcase,
  Calendar,
  Users,
  CreditCard,
  TrendingUp,
  MessageCircle,
  FileText,
  Star,
} from 'lucide-react';
import { Link } from '@/navigation';
import { HeroBackground } from './HeroBackground';

// Three rows on each side. Mirror counts so motion lines up.
const MESSY_ROWS = [
  ['pdf', 'whatsapp', 'sticky', 'notebook', 'email', 'excel'],
  ['notebook', 'email', 'whatsapp', 'pdf', 'sticky', 'excel'],
  ['whatsapp', 'sticky', 'excel', 'email', 'notebook', 'pdf'],
];

const POLISHED_ROWS = [
  [
    { icon: UtensilsCrossed, title: 'Atlas Bistro', sub: 'Reservations · today', metric: '+128', tone: 'blue' },
    { icon: Car, title: 'Sahara Rental', sub: 'Fleet utilisation', metric: '94%', tone: 'emerald' },
    { icon: Building2, title: 'Casa Properties', sub: 'New qualified leads', metric: '7', tone: 'blue' },
    { icon: Plane, title: 'Marrakech Tours', sub: 'Trips quoted', metric: '38', tone: 'amber' },
  ],
  [
    { icon: ShoppingBag, title: 'Argan Co.', sub: 'COD orders', metric: '€2,340', tone: 'emerald' },
    { icon: Briefcase, title: 'Casablanca Clinic', sub: 'Appointments', metric: '92%', tone: 'blue' },
    { icon: Calendar, title: 'Riad Booking', sub: 'Nights booked', metric: '178', tone: 'amber' },
    { icon: Users, title: 'Loyalty', sub: 'Active members', metric: '1,204', tone: 'emerald' },
  ],
  [
    { icon: CreditCard, title: 'Payments', sub: 'Stripe + CMI', metric: 'Live', tone: 'emerald' },
    { icon: TrendingUp, title: 'Revenue', sub: 'This month', metric: '+24%', tone: 'blue' },
    { icon: MessageCircle, title: 'WhatsApp', sub: 'Inbox merged', metric: '0 unread', tone: 'amber' },
    { icon: FileText, title: 'Quotes', sub: 'PDFs sent', metric: '52', tone: 'blue' },
  ],
];

const TONE = {
  blue: 'bg-primarySoft text-primary',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
};

export function Hero() {
  const t = useTranslations('home');

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-24">
      <HeroBackground />

      {/* Hero copy */}
      <div className="relative z-30 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 shadow-softer"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primarySoft">
            <Sparkles size={11} className="text-primary" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-textMain">
            Built for Morocco
          </span>
          <span className="text-textSubtle">·</span>
          <span className="text-[11px] text-textMuted">{t('label')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-textMain sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {t('title1')}
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
            {t('title2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-lg text-textMuted leading-relaxed md:text-xl"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/why-us"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primaryHover hover:scale-[1.03]"
          >
            {t('ctaPrimary')}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-textMain shadow-softer transition-all hover:border-primary/30 hover:text-primary"
          >
            {t('ctaSecondary')}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-textMuted"
        >
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={13} fill="#F59E0B" className="text-amber-500" />
            ))}
            <span className="ms-1 font-semibold text-textMain">4.9</span>
            <span>· 30+ founders trust us</span>
          </div>
          <div className="hidden h-4 w-px bg-line sm:block" />
          <div className="text-textMuted">No templates · Built per-industry</div>
        </motion.div>
      </div>

      {/* Transformation beam */}
      <TransformationBeam />
    </section>
  );
}

function TransformationBeam() {
  return (
    <div className="relative mx-auto mt-20 h-[520px] w-full max-w-7xl">
      {/* Localized glow under the beam */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="h-[480px] w-[800px] translate-y-10 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Section labels */}
      <div className="absolute left-6 top-2 z-30 hidden md:block">
        <div className="rounded-full border border-line bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-textMuted backdrop-blur">
          Before · the chaos
        </div>
      </div>
      <div className="absolute right-6 top-2 z-30 hidden md:block">
        <div className="rounded-full border border-primary/30 bg-primarySoft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
          After · the system
        </div>
      </div>

      {/* Central beam */}
      <div className="absolute left-1/2 top-0 bottom-0 z-20 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Outer glow ring */}
          <div className="absolute inset-0 -m-6 rounded-3xl bg-primary/40 blur-3xl" />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-32 w-32 will-change-transform"
          >
            <Image
              src="/brand/logo-3d-plate.png"
              alt="JWU"
              width={256}
              height={256}
              priority
              className="h-full w-full object-contain drop-shadow-[0_0_16px_rgba(45,212,168,0.4)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Left half: messy / before */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex w-1/2 flex-col justify-center gap-4 overflow-hidden will-change-transform">
        {MESSY_ROWS.map((row, i) => (
          <ScrollRow key={i} reverse={i % 2 === 1} duration={50 + i * 5}>
            {row.map((kind, j) => (
              <MessyCard key={`${i}-${j}`} kind={kind} />
            ))}
          </ScrollRow>
        ))}
      </div>

      {/* Right half: polished / after */}
      <div className="absolute right-0 top-0 bottom-0 z-10 flex w-1/2 flex-col justify-center gap-4 overflow-hidden will-change-transform">
        {POLISHED_ROWS.map((row, i) => (
          <ScrollRow key={i} reverse={i % 2 === 1} duration={50 + i * 5}>
            {row.map((item, j) => (
              <PolishedCard key={`${i}-${j}`} item={item} />
            ))}
          </ScrollRow>
        ))}
      </div>
    </div>
  );
}

function ScrollRow({ children, reverse = false, duration = 40 }) {
  // Duplicate content so the marquee loops seamlessly.
  const items = Array.isArray(children) ? children : [children];
  return (
    <motion.div
      className="flex w-max gap-4 will-change-transform"
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      <div className="flex gap-4">{items}</div>
      <div className="flex gap-4" aria-hidden="true">
        {items}
      </div>
    </motion.div>
  );
}

function MessyCard({ kind }) {
  return (
    <div className="flex h-20 w-64 shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-3 opacity-70">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-200 text-slate-400">
        <MessyIcon kind={kind} />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-3 w-3/4 rounded bg-slate-200" />
        <div className="h-2.5 w-1/2 rounded bg-slate-200" />
      </div>
    </div>
  );
}

function MessyIcon({ kind }) {
  const map = {
    pdf: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20 12c0 4.4-3.6 8-8 8-1.4 0-2.7-.4-3.9-1L4 20l1-3.9C4.4 14.7 4 13.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
      </svg>
    ),
    sticky: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9l7-7V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    notebook: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h6v8l-3-2-3 2V4z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    excel: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H5v-4h5v4zm0-6H5V7h5v4zm9 6h-7v-4h7v4zm0-6h-7V7h7v4z" />
      </svg>
    ),
  };
  return map[kind] || map.notebook;
}

function PolishedCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex h-20 w-72 shrink-0 items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 shadow-soft">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${TONE[item.tone]}`}>
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="truncate text-sm font-bold text-textMain">{item.title}</div>
        <div className="mt-0.5 flex items-center justify-between gap-2">
          <span className="truncate text-[11px] text-textMuted">{item.sub}</span>
          <span
            className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
              item.tone === 'blue'
                ? 'bg-primarySoft text-primary'
                : item.tone === 'emerald'
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-amber-50 text-amber-600'
            }`}
          >
            {item.metric}
          </span>
        </div>
      </div>
    </div>
  );
}
