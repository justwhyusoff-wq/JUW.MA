'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const CATEGORIES = [
  {
    name: 'General',
    items: [
      { q: 'What does justwhyus actually do?', a: 'We design and build custom websites and digital systems for businesses in specific industries — restaurants, car rentals, travel agencies, real estate and more. We focus on Morocco.' },
      { q: 'Are you an agency, a freelancer, or a studio?', a: 'A studio. Small, focused, and senior. You always work directly with the people building your project.' },
      { q: 'Where are you based?', a: 'Morocco. We work with clients across the country and with Moroccan-owned businesses abroad.' },
    ],
  },
  {
    name: 'Pricing',
    items: [
      { q: 'How much does a project cost?', a: 'It depends on scope. A focused website usually starts around 25,000 MAD. Custom systems are scoped individually after a discovery call. We quote in writing before any work starts.' },
      { q: 'Do you require a deposit?', a: 'Yes — 40% to start, 30% at design sign-off, 30% at launch.' },
      { q: 'Is hosting included?', a: 'Hosting, security and routine maintenance can be included in a monthly retainer. We make that optional, not mandatory.' },
    ],
  },
  {
    name: 'Process',
    items: [
      { q: 'How long does a project take?', a: 'A website typically takes 3–6 weeks. Larger custom systems take 6–12 weeks. We give you a clear timeline before kickoff and track against it weekly.' },
      { q: 'What does your process look like?', a: 'Discover → Design → Build → Launch. Discovery is where most of the value is created — we map your operation before we design anything.' },
      { q: 'Will I be involved during the build?', a: 'Yes. We meet weekly, share working previews, and never sit on questions. The best projects are co-built, not delivered as surprises.' },
    ],
  },
  {
    name: 'Industries',
    items: [
      { q: "What if my industry isn't in the list?", a: "Talk to us. We list the industries we know best, but we've worked across many others. If we're not the right fit, we'll tell you." },
      { q: 'Have you worked with my type of business before?', a: "Often, yes — but even when we haven't, our discovery process treats every business as unique. We don't reuse logic from one project to another without thinking." },
      { q: 'Can you integrate with software I already use?', a: 'Almost always. POS systems, accounting tools, Booking.com, WhatsApp, Stripe, CMI — these are common integrations for us.' },
    ],
  },
  {
    name: 'Technical',
    items: [
      { q: 'What technologies do you build with?', a: "Modern, stable, mainstream: Next.js, React, Node, PostgreSQL or MySQL, Tailwind, hosted on Vercel or our own infrastructure. We pick what fits, not what's trendy." },
      { q: 'Do you support Arabic and RTL?', a: "Yes — every site we build is RTL-ready from day one. We don't bolt it on at the end." },
      { q: 'What about SEO?', a: 'On-page SEO, structured data, semantic HTML, fast loads — all built in. Off-page strategy we leave to specialists.' },
      { q: 'Is the code mine?', a: 'Yes. Once final payment clears, the code, design files, and accounts are yours.' },
    ],
  },
];

export function FAQContent() {
  const t = useTranslations('faq');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
      ),
    })).filter((c) => c.items.length > 0);
  }, [query]);

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              FAQ
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight tracking-tight text-textMain md:text-6xl">
              {t('title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
                {t('title').split(' ').slice(-1)}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-textMuted leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="mx-auto mt-10 relative max-w-xl">
              <Search size={16} className="absolute start-4 top-1/2 -translate-y-1/2 text-textSubtle" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full rounded-full border border-line bg-white py-4 ps-12 pe-4 text-sm font-medium text-textMain placeholder:text-textSubtle shadow-softer focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-shadow"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {filtered.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center text-textMuted shadow-card">
              No questions match "{query}".
            </div>
          ) : (
            filtered.map((cat) => (
              <ScrollReveal key={cat.name}>
                <div>
                  <div className="mb-6 inline-flex rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {cat.name}
                  </div>
                  <Accordion items={cat.items} />
                </div>
              </ScrollReveal>
            ))
          )}
        </div>
      </section>
    </>
  );
}
