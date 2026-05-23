'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, ArrowRight } from 'lucide-react';
import { Link, usePathname, useRouter } from '@/navigation';
import { industries } from '@/config/industries.config';
import { cn } from '@/lib/cn';

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇲🇦' },
];

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const switchLocale = (next) => {
    router.replace(pathname, { locale: next });
    setLangOpen(false);
  };

  const links = [
    { href: '/', label: t('home') },
    { href: '/what-we-do', label: t('whatWeDo') },
    { href: '/why-us', label: t('whyUs') },
  ];

  const tailLinks = [
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-line bg-white/85 backdrop-blur-md shadow-softer'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center font-display font-extrabold tracking-tight text-textMain">
            <span>JUST</span>
            <span className="text-primary">_WHY_</span>
            <span>US</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} active={pathname === l.href}>
                {l.label}
              </NavLink>
            ))}

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-textMuted transition-colors hover:text-textMain">
                {t('industries')}
                <ChevronDown size={14} className={cn('transition-transform', industriesOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute start-0 top-full w-56 rounded-2xl border border-line bg-white p-2 shadow-card"
                  >
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="block rounded-xl px-3 py-2 text-sm font-medium text-textMain transition-colors hover:bg-surface hover:text-primary"
                      >
                        {ind.name[locale] || ind.name.en}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {tailLinks.map((l) => (
              <NavLink key={l.href} href={l.href} active={pathname === l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Lang switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-textMain transition-colors hover:border-primary hover:text-primary"
                aria-label="Switch language"
              >
                <Globe size={12} />
                {locale.toUpperCase()}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute end-0 top-full mt-2 w-32 rounded-2xl border border-line bg-white p-2 shadow-card"
                  >
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => switchLocale(l.code)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors',
                          locale === l.code ? 'bg-primarySoft text-primary font-semibold' : 'text-textMain hover:bg-surface'
                        )}
                      >
                        <span>{l.label}</span>
                        <span>{l.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-glowSoft transition-all hover:bg-primaryHover hover:-translate-y-0.5 md:inline-flex"
            >
              {t('cta')}
              <ArrowRight size={12} className="rtl-flip" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-textMain md:hidden"
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between px-4 border-b border-line">
                <Link href="/" className="font-display font-extrabold text-textMain">
                  <span>JUST</span>
                  <span className="text-primary">_WHY_</span>
                  <span>US</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-textMain"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 px-4 pt-6">
                {[...links, ...tailLinks].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="border-b border-line py-4 font-display text-2xl font-bold text-textMain transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="border-b border-line py-4">
                  <div className="mb-3 font-display text-2xl font-bold text-textMain">{t('industries')}</div>
                  <div className="flex flex-col gap-2 ps-2">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="text-textMuted transition-colors hover:text-primary"
                      >
                        {ind.name[locale] || ind.name.en}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
              <div className="p-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glowSoft"
                >
                  {t('cta')}
                  <ArrowRight size={14} className="rtl-flip" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium transition-colors',
        active ? 'text-primary' : 'text-textMuted hover:text-textMain'
      )}
    >
      {children}
    </Link>
  );
}
