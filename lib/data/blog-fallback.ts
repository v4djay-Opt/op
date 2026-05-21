export interface FallbackPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category?: string;
  publishedAt: string;
  estimatedReadTime?: number;
  image?: string;
  ogImage?: string;
  body?: unknown[];
  author?: string;
  authorRole?: string;
  authorBio?: string;
  authorLinkedIn?: string;
  authorTwitter?: string;
}

export const fallbackPosts: FallbackPost[] = [];

export function getFallbackPostBySlug(slug: string): FallbackPost | undefined {
  return fallbackPosts.find((p) => p.slug.current === slug);
}

export function getAllFallbackPostSlugs(): string[] {
  return fallbackPosts.map((p) => p.slug.current);
}
