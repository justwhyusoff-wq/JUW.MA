import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ArrowRight, Layers, Languages, Sparkles, HeartHandshake, Check } from 'lucide-react';
import { Link } from '@/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Accordion } from '@/components/ui/Accordion';
import { ContactTeaser } from '@/components/home/ContactTeaser';

export const metadata = {
  title: 'Why Us',
  description: "We don't just build — we understand. Industry depth, Moroccan-built, no templates, long-term partnership.",
};

const DIFFERENTIATORS = [
  {
    icon: Layers,
    label: '01 — Industry Depth',
    title: "We've studied them from the inside.",
    body: "Restaurants, car rentals, travel, real estate — we don't approach them as outsiders. We've spent time mapping how each operates: which problems are universal, which are specific. That depth is the difference between a generic site and a system that fits.",
    bullets: ['Maps your full operation before design', 'Tailored to your workflow', 'No assumptions, no shortcuts'],
    tone: 'blue',
  },
  {
    icon: Languages,
    label: '02 — Built for Morocco',
    title: 'Trilingual from day one.',
    body: 'Arabic, French, English — designed in, not retrofitted. Layouts that flow properly in RTL. Currency, hours, holidays, calendars — all set up for the Moroccan market and the people who live and visit here.',
    bullets: ['Arabic RTL designed in from day one', 'Locale-aware calendars & currency', 'Local payment & delivery providers'],
    tone: 'emerald',
  },
  {
    icon: Sparkles,
    label: '03 — No templates',
    title: 'Every project, built from scratch.',
    body: "Templates are fast. They're also a ceiling. Your business is unique — your digital system should be too. We design and build each project from the ground up, so it fits your operation exactly.",
    bullets: ['Custom design from blank canvas', 'Bespoke data model per business', 'Performance budgets enforced'],
    tone: 'amber',
  },
  {
    icon: HeartHandshake,
    label: '04 — We stay with you',
    title: 'Launch is the start, not the finish.',
    body: "After we ship, we don't disappear. We maintain, update, and grow your system with you — because the digital side of your business will evolve as fast as the business itself.",
    bullets: ['Monthly maintenance retainer', 'Direct line to your build team', 'Roadmap reviewed with you'],
    tone: 'blue',
  },
];

const TONE = {
  blue: { iconBg: 'bg-primarySoft', iconText: 'text-primary', accent: 'text-primary' },
  emerald: { iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', accent: 'text-emerald-600' },
  amber: { iconBg: 'bg-amber-50', iconText: 'text-amber-600', accent: 'text-amber-600' },
};

const FAQ_PREVIEW = [
  { q: 'How long does a typical project take?', a: 'Most websites ship in 3–6 weeks. Custom systems take longer — usually 6–12 weeks depending on complexity. We give you a clear timeline before we start.' },
  { q: 'Do you work with businesses outside Morocco?', a: 'Our focus is Morocco, but we work with Moroccan-owned businesses abroad and with international clients who want to serve the Moroccan market.' },
  { q: 'Can you redesign an existing site?', a: "Yes — most of our projects involve replacing or rebuilding something that exists. We start by understanding what works and what doesn't before we touch it." },
  { q: 'What about hosting and maintenance?', a: 'We handle hosting, security updates, and ongoing maintenance. You get a clear monthly cost and someone who actually picks up the phone.' },
  { q: 'Do you offer a free consultation?', a: "Yes. The first 30 minutes are free — to understand your operation and see if we're a fit. No pitch deck. No pressure." },
];

export default function WhyUsPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <WhyUsContent />;
}

function WhyUsContent() {
  const t = useTranslations('whyUs');

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Why us
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-6xl font-extrabold leading-[1.05] tracking-tight text-textMain md:text-7xl lg:text-8xl">
              {t('title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
                {t('title').split(' ').slice(-1)}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-textMuted leading-relaxed">
              {t('subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {DIFFERENTIATORS.map((d, i) => {
        const Icon = d.icon;
        const reversed = i % 2 === 1;
        const tone = TONE[d.tone];
        return (
          <section key={d.label} className={`${i % 2 === 0 ? 'bg-surface' : 'bg-white'} py-24`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`grid items-center gap-12 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <ScrollReveal>
                  <div className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl ${tone.iconBg} ${tone.iconText} shadow-softer`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className={`mt-8 font-display text-xs uppercase tracking-[0.18em] font-semibold ${tone.accent}`}>{d.label}</div>
                  <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-textMain md:text-5xl">
                    {d.title}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-lg leading-relaxed text-textMuted">{d.body}</p>
                  <ul className="mt-6 space-y-3">
                    {d.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm font-medium text-textMain">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full ${tone.iconBg} ${tone.iconText}`}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  FAQ
                </span>
                <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                  Common questions
                </h2>
              </div>
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                See all FAQs
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion items={FAQ_PREVIEW} />
          </ScrollReveal>
        </div>
      </section>

      <ContactTeaser />
    </>
  );
}
