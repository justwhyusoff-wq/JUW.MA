'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/navigation';
import { industries } from '@/config/industries.config';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary to-primaryHover text-white">
      {/* Huge watermark logo */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 select-none">
        <div className="font-display text-[16rem] font-extrabold leading-none text-white/5 tracking-tighter">
          JWU
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
          Ready to begin?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-emerald-50 md:text-lg">
          Tell us about your business. We'll show you what a real system looks like.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:bg-emerald-50 hover:-translate-y-0.5"
          >
            Start the conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
          </Link>
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            <MessageCircle size={16} />
            WhatsApp us
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 border-t border-white/15 pt-12 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center font-display text-xl font-extrabold tracking-tight text-white">
              <span>JUST</span>
              <span className="text-emerald-100">_WHY_</span>
              <span>US</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-emerald-50">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 flex gap-2">
              <Social href="https://instagram.com" label="Instagram">
                <Instagram size={16} />
              </Social>
              <Social href="https://linkedin.com" label="LinkedIn">
                <Linkedin size={16} />
              </Social>
              <Social href="https://wa.me/212600000000" label="WhatsApp">
                <MessageCircle size={16} />
              </Social>
            </div>
          </div>

          <FooterCol title={t('footer.pages')}>
            <FooterLink href="/">{t('nav.home')}</FooterLink>
            <FooterLink href="/what-we-do">{t('nav.whatWeDo')}</FooterLink>
            <FooterLink href="/why-us">{t('nav.whyUs')}</FooterLink>
            <FooterLink href="/blog">{t('nav.blog')}</FooterLink>
            <FooterLink href="/faq">{t('nav.faq')}</FooterLink>
            <FooterLink href="/contact">{t('nav.contact')}</FooterLink>
          </FooterCol>

          <FooterCol title={t('footer.industries')}>
            {industries.map((ind) => (
              <FooterLink key={ind.slug} href={`/industries/${ind.slug}`}>
                {ind.name[locale] || ind.name.en}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t('footer.contact')}>
            <a
              href="mailto:hello@justwhyus.ma"
              className="flex items-center gap-2 text-sm text-emerald-50 transition-colors hover:text-white"
            >
              <Mail size={13} /> hello@justwhyus.ma
            </a>
            <a
              href="https://wa.me/212600000000"
              className="flex items-center gap-2 text-sm text-emerald-50 transition-colors hover:text-white"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
            <div className="flex items-center gap-2 text-sm text-emerald-50">
              <MapPin size={13} /> {t('footer.location')}
            </div>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-emerald-50 md:flex-row">
          <div>© {new Date().getFullYear()} justwhyus · {t('footer.rights')}</div>
          <div className="font-display tracking-[0.18em] uppercase font-semibold">Made in Morocco 🇲🇦</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-[11px] uppercase tracking-[0.18em] text-emerald-100 font-semibold">
        {title}
      </h4>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-emerald-50 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white hover:text-primary"
    >
      {children}
    </a>
  );
}
