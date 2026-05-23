'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Database, GitBranch, Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const TABS = [
  {
    key: 'websites',
    label: 'Websites',
    icon: Monitor,
    title: 'Custom Websites',
    desc: 'Designed for your brand and tuned for your industry. No drag-and-drop themes — every pixel intentional.',
    features: ['Performance-first', 'SEO-optimized', 'Multilingual', 'Brand-led design'],
    mock: 'website',
  },
  {
    key: 'systems',
    label: 'Systems',
    icon: Database,
    title: 'Business Management Systems',
    desc: 'The dashboards your team actually wants to use. Built around your workflow — not the other way around.',
    features: ['Real-time data', 'Custom workflows', 'Role-based access', 'Reports & analytics'],
    mock: 'dashboard',
  },
  {
    key: 'integrations',
    label: 'Integrations',
    icon: GitBranch,
    title: 'Integrations',
    desc: 'Plug into your existing tools — WhatsApp, payment gateways, accounting software, delivery partners.',
    features: ['Payment gateways', 'WhatsApp Business', 'Accounting sync', 'Delivery APIs'],
    mock: 'integrations',
  },
];

export function WhatWeBuild() {
  const [active, setActive] = useState('websites');
  const t = useTranslations('home');
  const tab = TABS.find((x) => x.key === active);

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              What we build
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
              {t('whatWeBuildHeading')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tabItem) => {
            const Icon = tabItem.icon;
            const isActive = active === tabItem.key;
            return (
              <button
                key={tabItem.key}
                onClick={() => setActive(tabItem.key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-glowSoft'
                    : 'bg-white text-textMain border border-line hover:border-primary/30 hover:text-primary'
                }`}
              >
                <Icon size={14} />
                {tabItem.label}
              </button>
            );
          })}
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold text-textMain">{tab.title}</h3>
              <p className="mb-8 text-base leading-relaxed text-textMuted">{tab.desc}</p>
              <ul className="space-y-3">
                {tab.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium text-textMain">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primarySoft text-primary">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active + '-mock'}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="mock-frame relative overflow-hidden"
            >
              <BrowserChrome />
              <div className="p-6">
                {tab.mock === 'website' && <WebsiteMock />}
                {tab.mock === 'dashboard' && <DashboardMock />}
                {tab.mock === 'integrations' && <IntegrationsMock />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <div className="ms-2 h-6 flex-1 rounded-md bg-white border border-line" />
    </div>
  );
}

function WebsiteMock() {
  return (
    <div className="space-y-3">
      <div className="h-3 w-1/3 rounded-full bg-primary" />
      <div className="h-7 w-2/3 rounded-md bg-textMain" />
      <div className="h-3 w-1/2 rounded-full bg-line" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-square rounded-lg bg-surface2" />
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <div className="h-9 w-28 rounded-full bg-primary" />
        <div className="h-9 w-20 rounded-full border border-line" />
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 rounded-md bg-textMain" />
        <div className="h-6 w-20 rounded-full bg-emerald-100" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { v: '142', tone: 'text-primary', bar: 'bg-primary' },
          { v: '88%', tone: 'text-emerald-600', bar: 'bg-emerald-500' },
          { v: '24', tone: 'text-amber-600', bar: 'bg-amber-500' },
        ].map((s, i) => (
          <div key={i} className="rounded-lg border border-line bg-white p-3">
            <div className="h-2 w-10 rounded-full bg-line" />
            <div className={`mt-2 font-display text-xl font-bold ${s.tone}`}>{s.v}</div>
            <div className="mt-2 h-1 w-full rounded-full bg-surface">
              <div className={`h-full w-3/4 rounded-full ${s.bar}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-line bg-white p-3">
        <div className="mb-2 h-2 w-16 rounded-full bg-line" />
        <div className="flex h-16 items-end gap-1">
          {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IntegrationsMock() {
  const nodes = [
    { name: 'Stripe', tone: 'text-violet-600 bg-violet-50' },
    { name: 'WhatsApp', tone: 'text-emerald-600 bg-emerald-50' },
    { name: 'Booking', tone: 'text-primary bg-primarySoft' },
    { name: 'Sage', tone: 'text-amber-600 bg-amber-50' },
  ];
  return (
    <div className="relative h-48">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/brand/logo-3d-plate.png"
          alt="JWU"
          width={120}
          height={120}
          className="h-20 w-20 object-contain drop-shadow-[0_0_24px_rgba(45,212,168,0.5)]"
        />
      </div>
      <svg className="absolute inset-0 h-full w-full">
        {nodes.map((_, i) => {
          const angle = (i * 360) / nodes.length;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + (Math.cos(rad) * 35);
          const y = 50 + (Math.sin(rad) * 32);
          return (
            <line
              key={i}
              x1="50%" y1="50%"
              x2={`${x}%`} y2={`${y}%`}
              stroke="#2DD4A8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
            />
          );
        })}
      </svg>
      {nodes.map((n, i) => {
        const angle = (i * 360) / nodes.length;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 110;
        const y = Math.sin(rad) * 70;
        return (
          <div
            key={n.name}
            style={{ transform: `translate(${x}px, ${y}px)` }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${n.tone} px-3 py-1 text-[11px] font-semibold shadow-softer`}
          >
            {n.name}
          </div>
        );
      })}
    </div>
  );
}
