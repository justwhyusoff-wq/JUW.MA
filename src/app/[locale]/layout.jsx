import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { locales } from '@/i18n';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { LocaleDir } from '@/components/layout/LocaleDir';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function loadMessages(locale) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    return (await import(`../../../messages/en.json`)).default;
  }
}

export default async function LocaleLayout({ children, params }) {
  const locale = params?.locale;
  if (!locales.includes(locale)) notFound();

  unstable_setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <LocaleDir locale={locale} />
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
