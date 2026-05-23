import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from '@/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { BlogCard } from '@/components/home/BlogPreview';
import { blogPosts, getPost } from '@/config/blog.config';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default function BlogPostPage({ params: { locale, slug } }) {
  unstable_setRequestLocale(locale);
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallback = related.length ? related : blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="relative bg-white pt-32">
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-primarySoft via-white to-white" />

        <div className="relative mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-textMuted hover:text-primary"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1 rtl-flip" />
            Back to blog
          </Link>

          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge tone="primary">{post.category}</Badge>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-textMuted">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-textMuted">
                <Clock size={12} /> {post.readTime} min read
              </span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-textMain md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl text-textMuted leading-relaxed">{post.excerpt}</p>
          </ScrollReveal>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[2/1] overflow-hidden rounded-3xl bg-gradient-to-br from-primarySoft via-white to-emerald-50 mb-16 relative shadow-card">
            <div className="absolute inset-0 bg-grid-fade opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-display text-[10rem] font-extrabold tracking-tighter text-primary/30">JWU</div>
            </div>
          </div>

          <div className="prose-content max-w-none">
            {post.body.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="mb-6 text-lg leading-relaxed text-textMain/90">{para}</p>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-white p-8 shadow-card">
            <div className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              About the author
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primarySoft font-display text-sm font-bold text-primary">
                JWU
              </div>
              <div>
                <div className="font-display text-lg font-bold text-textMain">justwhyus</div>
                <div className="text-sm text-textMuted">Digital systems for real businesses.</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 font-display text-3xl font-extrabold tracking-tight text-textMain md:text-4xl">
              Related articles
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {fallback.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
