import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact',
  description: "Let's build something real. WhatsApp, email, or book a call — we answer fast.",
};

export default function ContactPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations('contact');

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 md:grid-cols-2">
            <ScrollReveal>
              <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Contact
              </span>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-textMain md:text-6xl lg:text-7xl">
                {t('title').split(' ').slice(0, -1).join(' ')}{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
                  {t('title').split(' ').slice(-1)}
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-textMuted leading-relaxed">{t('subtitle')}</p>

              <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-textMain shadow-softer border border-line">
                <MapPin size={14} className="text-primary" />
                {t('based')} 🇲🇦
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <ChannelCard
                  icon={MessageCircle}
                  label={t('whatsapp')}
                  desc={t('whatsappDesc')}
                  href="https://wa.me/212600000000"
                  tone="emerald"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <ChannelCard
                  icon={Mail}
                  label={t('email')}
                  desc={t('emailDesc')}
                  href="mailto:hello@justwhyus.ma"
                  tone="blue"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <ChannelCard
                  icon={Calendar}
                  label={t('call')}
                  desc={t('callDesc')}
                  href="https://cal.com/justwhyus"
                  tone="amber"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Location
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                {t('based')} 🇲🇦
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative aspect-[2.4/1] overflow-hidden rounded-3xl bg-gradient-to-br from-primarySoft to-white shadow-card">
              <div className="absolute inset-0 bg-grid-fade opacity-50" />
              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 800 333" preserveAspectRatio="none">
                {Array.from({ length: 120 }).map((_, i) => {
                  const x = (i * 73) % 800;
                  const y = (i * 41) % 333;
                  return <circle key={i} cx={x} cy={y} r={1.5} fill="#6EE7B7" />;
                })}
              </svg>
              <div className="absolute left-[35%] top-[55%]">
                <div className="relative">
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-primary ring-4 ring-white" />
                </div>
                <div className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-textMain">
                  Morocco
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function ChannelCard({ icon: Icon, label, desc, href, tone }) {
  const palettes = {
    emerald: 'hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)]',
    blue: 'hover:shadow-glow',
    amber: 'hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.25)]',
  };
  const iconBg = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-primarySoft text-primary',
    amber: 'bg-amber-50 text-amber-600',
  };
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`group flex items-center gap-5 rounded-3xl bg-white p-6 transition-all shadow-card hover:-translate-y-1 ${palettes[tone]}`}
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg[tone]}`}>
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="flex-1">
        <div className="font-display text-lg font-bold text-textMain">{label}</div>
        <div className="text-sm text-textMuted">{desc}</div>
      </div>
      <span className="font-display text-2xl text-textMuted transition-colors group-hover:text-primary">→</span>
    </a>
  );
}
