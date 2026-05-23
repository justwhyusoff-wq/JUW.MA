'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { MessageCircle, ArrowRight, X, Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Link } from '@/navigation';

const TONE = {
  blue: { iconBg: 'bg-primarySoft', iconText: 'text-primary', accent: 'text-primary', solid: 'bg-primary text-white' },
  emerald: { iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', accent: 'text-emerald-600', solid: 'bg-emerald-500 text-white' },
};

export function IndustryPageTemplate({ industry }) {
  const locale = useLocale();
  const Icon = Icons[industry.icon] || Icons.Sparkles;
  // Map legacy accents to new palette
  const tone = industry.accent === 'mint' ? TONE.emerald : TONE.blue;

  const name = industry.name[locale] || industry.name.en;
  const tagline = industry.tagline[locale] || industry.tagline.en;
  const headline = industry.headline[locale] || industry.headline.en;
  const painPoints = industry.painPoints[locale] || industry.painPoints.en;
  const solutions = industry.solutions[locale] || industry.solutions.en;
  const services = industry.services[locale] || industry.services.en;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-6 flex items-center justify-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tone.iconBg} ${tone.iconText}`}>
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <Badge tone={industry.accent === 'mint' ? 'emerald' : 'primary'}>{name}</Badge>
            </div>
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-textMain md:text-6xl lg:text-7xl">
              {headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-textMuted leading-relaxed">{tagline}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primaryHover hover:scale-[1.03]"
              >
                Start your {name.toLowerCase()} project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
              </Link>
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-textMain shadow-softer transition-all hover:border-primary/30 hover:text-primary"
              >
                <MessageCircle size={14} />
                WhatsApp us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points + Solutions */}
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <Badge tone="amber">Pain points</Badge>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-textMain md:text-4xl">
              What most {name.toLowerCase()} get wrong online.
            </h2>
            <ul className="mt-8 space-y-3">
              {painPoints.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-softer"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-textMain font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Badge tone={industry.accent === 'mint' ? 'emerald' : 'primary'}>How we fix it</Badge>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-textMain md:text-4xl">
              How we fix it.
            </h2>
            <ul className="mt-8 space-y-3">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card"
                >
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${tone.iconBg} ${tone.iconText}`}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-textMain font-medium">{s}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <Badge tone="primary">What's included</Badge>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                Built into every {name.toLowerCase()} project.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl bg-white p-6 shadow-card transition-all hover:shadow-cardHover hover:-translate-y-1">
                  <div className={`mb-4 font-display text-xs font-semibold uppercase tracking-widest ${tone.accent}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-textMain">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-textMuted">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mock example */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <Badge tone={industry.accent === 'mint' ? 'emerald' : 'primary'}>Example system</Badge>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                What a {name.toLowerCase()} system looks like.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mock-frame overflow-hidden">
              <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ms-2 h-6 flex-1 rounded-md bg-white border border-line max-w-md" />
              </div>
              <div className="grid grid-cols-12 gap-4 p-6">
                <div className="col-span-12 lg:col-span-4 space-y-3">
                  <div className={`h-3 w-1/3 rounded-full ${tone.solid}`} />
                  <div className="h-7 w-2/3 rounded-md bg-textMain" />
                  <div className="h-3 w-full rounded-full bg-line" />
                  <div className="h-3 w-5/6 rounded-full bg-line/70" />
                  <div className={`mt-4 h-9 w-36 rounded-full ${tone.solid}`} />
                </div>
                <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-line bg-white p-3 shadow-softer">
                      <div className="aspect-video rounded-md bg-surface2" />
                      <div className="mt-2 h-2 w-3/4 rounded-full bg-line" />
                      <div className="mt-1.5 h-2 w-1/2 rounded-full bg-line/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-textMain md:text-5xl">
              Ready to build your{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
                {name.toLowerCase()} system?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-textMuted">
              30-minute intro call. No pitch deck. Just a conversation about your operation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-textMain shadow-softer transition-all hover:border-primary/30 hover:text-primary"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primaryHover hover:scale-[1.03]"
              >
                Get in touch
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
