import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Globe, LayoutDashboard, CalendarCheck, CreditCard, Languages, Wrench, ArrowRight } from 'lucide-react';
import { Link } from '@/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Process } from '@/components/home/Process';
import { ContactTeaser } from '@/components/home/ContactTeaser';

export const metadata = {
  title: 'What We Do',
  description: 'Custom websites, business management systems, booking engines, POS integrations and more — built for Morocco.',
};

const SERVICES = [
  { icon: Globe, title: 'Custom Website Design', desc: 'Designed around your brand and your industry. No off-the-shelf themes.', tone: 'blue' },
  { icon: LayoutDashboard, title: 'Business Management Systems', desc: 'Dashboards your team will actually want to use, every day.', tone: 'emerald' },
  { icon: CalendarCheck, title: 'Booking & Reservation Systems', desc: 'Real-time availability, deposits, confirmations — all automated.', tone: 'amber' },
  { icon: CreditCard, title: 'POS & Payment Integrations', desc: 'Stripe, CMI, cash on delivery — plugged into your operation.', tone: 'blue' },
  { icon: Languages, title: 'Multilingual Platforms', desc: 'Arabic, French, English — designed in from day one.', tone: 'emerald' },
  { icon: Wrench, title: 'Ongoing Maintenance & Support', desc: "We don't disappear after launch. We stay, maintain, and grow with you.", tone: 'amber' },
];

const TONE = {
  blue: 'bg-primarySoft text-primary',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
};

const TECH = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PHP', 'Python',
  'PostgreSQL', 'MySQL', 'Shopify', 'WordPress', 'Stripe', 'WhatsApp API', 'Vercel',
];

export default function WhatWeDoPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <WhatWeDoContent />;
}

function WhatWeDoContent() {
  const t = useTranslations('whatWeDo');

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              What we do
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-textMain md:text-6xl lg:text-7xl">
              {t('title')}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-textMuted leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-primaryHover hover:scale-[1.03]"
              >
                Start a project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary border border-line">
                Services
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                {t('servicesHeading')}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.title} delay={i * 0.05}>
                  <div className="group h-full rounded-3xl bg-white p-8 shadow-card transition-all hover:shadow-cardHover hover:-translate-y-1">
                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${TONE[s.tone]}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold text-textMain group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-textMuted">{s.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Process />

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Stack
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                {t('techHeading')}
              </h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH.map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 0.02}>
                <div className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-textMain shadow-softer transition-colors hover:text-primary">
                  {tech}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactTeaser />
    </>
  );
}
