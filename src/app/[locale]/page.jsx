import { unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { IndustryMarquee } from '@/components/home/IndustryMarquee';
import { ProblemSection } from '@/components/home/ProblemSection';
import { IndustriesGrid } from '@/components/home/IndustriesGrid';
import { WhatWeBuild } from '@/components/home/WhatWeBuild';
import { Process } from '@/components/home/Process';
import { WhyUsTeaser } from '@/components/home/WhyUsTeaser';
import { StatsBar } from '@/components/home/StatsBar';
import { GlobeMap } from '@/components/home/GlobeMap';
import { BlogPreview } from '@/components/home/BlogPreview';
import { ContactTeaser } from '@/components/home/ContactTeaser';

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <IndustryMarquee />
      <ProblemSection />
      <IndustriesGrid />
      <WhatWeBuild />
      <Process />
      <WhyUsTeaser />
      <StatsBar />
      <GlobeMap />
      <BlogPreview />
      <ContactTeaser />
    </>
  );
}
