'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string } | string;
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  image?: string;
}

const INDUSTRIES = ['All', 'E-Commerce', 'Real Estate', 'Healthcare', 'SaaS', 'Education', 'Retail'];

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === 'string' ? slug : slug.current;
}

function IndustryBadge({ label, absolute = true }: { label: string; absolute?: boolean }) {
  if (absolute) {
    return (
      <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-text shadow-sm backdrop-blur-sm">
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      {label}
    </span>
  );
}

function FeaturedHeroCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${normalizeSlug(cs.slug)}`}
      className="group flex flex-col md:flex-row rounded-2xl bg-white border border-border shadow-card overflow-hidden transition-all hover:shadow-lg"
    >
      {/* Left — image 50% */}
      <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto bg-gradient-to-br from-[#d4e4d4] to-[#b8d4b8] overflow-hidden shrink-0 min-h-[320px] md:min-h-[420px]">
        {cs.image ? (
          <Image
            src={cs.image}
            alt={cs.client}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-7xl font-bold text-white/40 font-display select-none">
              {cs.client.charAt(0)}
            </span>
          </div>
        )}
        <IndustryBadge label={cs.industry} />
      </div>

      {/* Right — content 50% */}
      <div className="flex flex-col flex-1 p-7 md:p-10 justify-center">
        <div className="mb-4">
          <div className="text-4xl md:text-5xl font-bold text-accent font-display leading-none">
            {cs.result}
          </div>
          <div className="text-sm text-muted mt-1">{cs.metric}</div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-text font-display leading-snug group-hover:text-accent transition-colors">
          {cs.client}
        </h2>

        <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-4">
          {cs.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <IndustryBadge label={cs.industry} absolute={false} />
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:underline">
            Read Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${normalizeSlug(cs.slug)}`}
      className="group flex flex-col h-full rounded-2xl bg-white border border-border shadow-card overflow-hidden transition-all hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#d4e4d4] to-[#b8d4b8] overflow-hidden shrink-0">
        {cs.image ? (
          <Image
            src={cs.image}
            alt={cs.client}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-bold text-white/40 font-display select-none">
              {cs.client.charAt(0)}
            </span>
          </div>
        )}
        <IndustryBadge label={cs.industry} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2">
          <div className="text-2xl font-bold text-accent font-display leading-none">{cs.result}</div>
          <div className="text-xs text-muted mt-0.5">{cs.metric}</div>
        </div>

        <h3 className="text-base font-bold text-text font-display leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-1.5">
          {cs.client}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 flex-1">
          {cs.description}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
          <span className="text-xs text-muted">{cs.industry}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            Read
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudyGrid({ cases }: { cases: CaseStudy[] }) {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filtered = useMemo(() => {
    if (activeIndustry === 'All') return cases;
    return cases.filter((c) => c.industry === activeIndustry);
  }, [activeIndustry, cases]);

  const first = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Case Studies</span>
          <h2 className="text-2xl md:text-3xl font-bold text-text font-display mt-1">Results That Speak</h2>
        </div>
        <span className="inline-flex items-center self-start rounded-full border border-border bg-white px-4 py-2 text-sm text-muted">
          {filtered.length} case studies
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {INDUSTRIES.map((ind) => (
          <button
            key={ind}
            onClick={() => setActiveIndustry(ind)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeIndustry === ind
                ? 'bg-accent text-white shadow-sm'
                : 'bg-white border border-border text-text-secondary hover:border-accent hover:text-accent'
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Content */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">No case studies found in this category.</div>
      ) : (
        <div className="space-y-6">
          {/* First — full-width 50/50 hero */}
          {first && <FeaturedHeroCard cs={first} />}

          {/* Rest — 3 equal columns */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((cs) => (
                <SmallCard key={cs._id} cs={cs} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
