import { unstable_setRequestLocale } from 'next-intl/server';
import { BlogList } from '@/components/blog/BlogList';

export const metadata = {
  title: 'Blog',
  description: 'Notes, ideas and lessons from building digital systems for Moroccan businesses.',
};

export default function BlogPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <BlogList />;
}
