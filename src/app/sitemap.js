import { industries } from '@/config/industries.config';
import { blogPosts } from '@/config/blog.config';
import { locales } from '@/i18n';

const baseUrl = 'https://justwhyus.ma';

export default function sitemap() {
  const staticPaths = ['', '/what-we-do', '/why-us', '/blog', '/faq', '/contact'];
  const industryPaths = industries.map((i) => `/industries/${i.slug}`);
  const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);

  const all = [...staticPaths, ...industryPaths, ...blogPaths];

  const entries = [];
  for (const path of all) {
    for (const locale of locales) {
      const url = locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1.0 : 0.7,
      });
    }
  }

  return entries;
}
