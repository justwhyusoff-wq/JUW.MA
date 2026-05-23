'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { blogPosts } from '@/config/blog.config';

export function BlogPreview() {
  const t = useTranslations('home');
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Blog
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-textMain md:text-5xl">
                {t('blogHeading')}
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t('blogCta')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl-flip" />
            </Link>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.div
              key={p.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <BlogCard post={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-cardHover"
      >
        <CoverArt cover={post.cover} tone={post.tone} />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-primarySoft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-textMuted">
              <Clock size={11} /> {post.readTime} min
            </span>
          </div>
          <h3 className="mb-3 font-display text-xl font-bold leading-snug text-textMain transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-textMuted">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-[11px] text-textMuted">
            <Calendar size={11} />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function CoverArt({ cover }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primarySoft via-white to-emerald-50">
      <div className="absolute inset-0 bg-grid-fade opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <CoverIcon name={cover} />
      </div>
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
    </div>
  );
}

function CoverIcon({ name }) {
  const map = {
    restaurant: '🍽',
    cars: '🚗',
    realestate: '🏛',
    multilingual: '🌐',
    whatsapp: '💬',
    travel: '✈',
  };
  return <div className="font-display text-7xl opacity-80">{map[name] || '◆'}</div>;
}
