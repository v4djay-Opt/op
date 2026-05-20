"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState, useEffect, useCallback } from "react";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  estimatedReadTime?: number;
  image?: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(0, posts.length - cardsPerView);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (!posts.length) return null;

  return (
    <section className="relative py-12 lg:py-20 px-4 bg-surface-alt overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="BLOG"
          title={<>Latest <em className="italic text-accent">Insights</em></>}
        />

        {/* Slider container */}
        <div className="relative">
          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group relative flex flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:border-accent/25 hover:bg-surface-alt hover:-translate-y-2 hover:shadow-card-hover h-full min-h-[420px]"
                  >
                    {/* Featured image */}
                    <div className="relative aspect-[16/10] bg-surface-alt overflow-hidden">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10">
                          <span className="text-4xl font-bold text-accent/20 font-display">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/20">
                          {post.category || "Blog"}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <Clock className="h-3 w-3" />
                          {post.estimatedReadTime || 5} min read
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs text-muted">
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent/60 transition-all group-hover:text-accent">
                          Read
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {posts.length > cardsPerView && (
            <>
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                aria-label="Previous posts"
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border shadow-sm text-text transition-all hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next posts"
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border shadow-sm text-text transition-all hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {posts.length > cardsPerView && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-accent"
                    : "w-2 bg-accent/20 hover:bg-accent/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
