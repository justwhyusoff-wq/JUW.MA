import { unstable_setRequestLocale } from 'next-intl/server';
import { FAQContent } from '@/components/faq/FAQContent';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about working with justwhyus.',
};

export default function FAQPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <FAQContent />;
}
