'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';

interface Post {
  _id: string;
  title: string;
  slug: { current: string } | string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  estimatedReadTime?: number;
  image?: string;
  author?: string;
  authorRole?: string;
}

const CATEGORIES = ['All', 'Web Design', 'SEO', 'Branding', 'Marketing', 'E-Commerce'];

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === 'string' ? slug : slug.current;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function AuthorBadge({ name }: { name?: string }) {
  const initial = (name || '?').charAt(0).toUpperCase();
  return (
    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold border border-accent/20 shrink-0">
      {initial}
    </div>
  );
}

function CategoryBadge({ category }: { category?: string }) {
  return (
    <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-text shadow-sm backdrop-blur-sm">
      {category || 'General'}
    </span>
  );
}

function MetaLine({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <span>{formatDate(post.publishedAt)}</span>
      <span className="h-1 w-1 rounded-full bg-muted" />
      <span className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        {post.estimatedReadTime || 5} min read
      </span>
    </div>
  );
}

function FeaturedHeroCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${normalizeSlug(post.slug)}`}
      className="group flex flex-col md:flex-row rounded-2xl bg-white border border-border shadow-card overflow-hidden transition-all hover:shadow-lg"
    >
      {/* Left — image 50% */}
      <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto bg-gradient-to-br from-[#d4e4d4] to-[#b8d4b8] overflow-hidden shrink-0 min-h-[320px] md:min-h-[420px]">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-6xl font-bold text-white/40 font-display select-none">
              {post.title.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-text shadow-sm backdrop-blur-sm">
          {post.category || 'General'}
        </span>
      </div>

      {/* Right — content 50% */}
      <div className="flex flex-col flex-1 p-7 md:p-10 justify-center">
        <MetaLine post={post} />

        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text font-display leading-snug group-hover:text-accent transition-colors">
          {post.title}
        </h2>

        <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-4">
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AuthorBadge name={post.author} />
            <span className="text-sm font-medium text-text">{post.author || 'Optimax Team'}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:underline">
            Read more
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${normalizeSlug(post.slug)}`}
      className="group flex flex-col h-full rounded-2xl bg-white border border-border shadow-card overflow-hidden transition-all hover:shadow-lg"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#d4e4d4] to-[#b8d4b8] overflow-hidden shrink-0">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-bold text-white/40 font-display select-none">
              {post.title.charAt(0)}
            </span>
          </div>
        )}
        <CategoryBadge category={post.category} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <MetaLine post={post} />

        <h3 className="mt-2 text-base font-bold text-text font-display leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="mt-1.5 text-sm text-text-secondary leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Bottom bar */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
          <div className="flex items-center gap-2">
            <AuthorBadge name={post.author} />
            <span className="text-sm font-medium text-text">{post.author || 'Optimax Team'}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            Read
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory, posts]);

  const first = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Blog</span>
          <h2 className="text-2xl md:text-3xl font-bold text-text font-display mt-1">Insights &amp; Stories</h2>
        </div>
        <span className="inline-flex items-center self-start rounded-full border border-border bg-white px-4 py-2 text-sm text-muted">
          {filteredPosts.length} articles
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-accent text-white shadow-sm'
                : 'bg-white border border-border text-text-secondary hover:border-accent hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 text-muted">No articles found in this category.</div>
      ) : (
        <div className="space-y-6">
          {/* First card — full-width 50/50 hero */}
          {first && <FeaturedHeroCard post={first} />}

          {/* Rest — 3 cards per row */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <SmallCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
