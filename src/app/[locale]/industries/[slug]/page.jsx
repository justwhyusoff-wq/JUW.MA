import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { industries, getIndustry } from '@/config/industries.config';
import { IndustryPageTemplate } from '@/components/industry/IndustryPageTemplate';

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params: { slug, locale } }) {
  const industry = getIndustry(slug);
  if (!industry) return {};
  const name = industry.name[locale] || industry.name.en;
  const tagline = industry.tagline[locale] || industry.tagline.en;
  return {
    title: name,
    description: tagline,
  };
}

export default function IndustryPage({ params: { locale, slug } }) {
  unstable_setRequestLocale(locale);
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return <IndustryPageTemplate industry={industry} />;
}
