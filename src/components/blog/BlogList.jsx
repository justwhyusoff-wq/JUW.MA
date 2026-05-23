'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BlogCard } from '@/components/home/BlogPreview';
import { blogPosts, categories } from '@/config/blog.config';

export function BlogList() {
  const t = useTranslations('blog');
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-primarySoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Blog
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-6xl font-extrabold leading-[1.05] tracking-tight text-textMain md:text-7xl">
              {t('title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 bg-clip-text text-transparent">
                {t('title').split(' ').slice(-1)}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-textMuted leading-relaxed">
              {t('subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    filter === c
                      ? 'bg-primary text-white shadow-glowSoft'
                      : 'bg-white text-textMain border border-line hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="rounded-3xl bg-white p-12 text-center text-textMuted shadow-card">
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
