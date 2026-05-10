"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const posts = [
  {
    title: "How to Triple Your Website Conversions in 30 Days",
    excerpt:
      "Practical UI/UX tweaks and CRO strategies that deliver measurable results fast.",
    category: "Conversion",
    date: "May 5, 2026",
    readTime: "6 min read",
    href: "/blog/triple-website-conversions",
  },
  {
    title: "Why Every Real Estate Business Needs a CRM in 2026",
    excerpt:
      "The hidden costs of spreadsheets and how a CRM pays for itself in 90 days.",
    category: "CRM",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    href: "/blog/real-estate-crm-2026",
  },
  {
    title: "SEO vs Paid Ads: Where Should You Invest First?",
    excerpt:
      "A data-backed framework for allocating your marketing budget for maximum ROI.",
    category: "Marketing",
    date: "Apr 20, 2026",
    readTime: "7 min read",
    href: "/blog/seo-vs-paid-ads",
  },
];

export function BlogPreview() {
  return (
    <section className="relative py-20 lg:py-28 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Blog"
          title={<>Latest <em className="italic text-accent">Insights</em></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <Link
                href={post.href}
                className="group relative flex flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:border-accent/25 hover:bg-surface-alt hover:-translate-y-2 hover:shadow-card-hover h-full"
              >
                {/* top gradient bar */}
                <div className="h-1 bg-gradient-to-r from-accent via-accent-muted to-transparent" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/20">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-muted">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent/60 transition-all group-hover:text-accent">
                      Read
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
