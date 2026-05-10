export interface FallbackPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category?: string;
  publishedAt: string;
  estimatedReadTime?: number;
  image?: string;
  body?: unknown[];
}

export const fallbackPosts: FallbackPost[] = [
  {
    _id: "fallback-1",
    title: "How to Triple Your Website Conversions in 30 Days",
    slug: { current: "triple-website-conversions" },
    excerpt:
      "Practical UI/UX tweaks and CRO strategies that deliver measurable results fast.",
    category: "Conversion",
    publishedAt: "2026-05-05T00:00:00Z",
    estimatedReadTime: 6,
    image: undefined,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Conversion rate optimization is the single highest-ROI activity for any digital business. In this guide, we walk through proven techniques...",
          },
        ],
      },
    ],
  },
  {
    _id: "fallback-2",
    title: "Why Every Real Estate Business Needs a CRM in 2026",
    slug: { current: "real-estate-crm-2026" },
    excerpt:
      "The hidden costs of spreadsheets and how a CRM pays for itself in 90 days.",
    category: "CRM",
    publishedAt: "2026-04-28T00:00:00Z",
    estimatedReadTime: 5,
    image: undefined,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Real estate is a relationship business. But managing hundreds of leads in spreadsheets is a recipe for lost revenue...",
          },
        ],
      },
    ],
  },
  {
    _id: "fallback-3",
    title: "SEO vs Paid Ads: Where Should You Invest First?",
    slug: { current: "seo-vs-paid-ads" },
    excerpt:
      "A data-backed framework for allocating your marketing budget for maximum ROI.",
    category: "Marketing",
    publishedAt: "2026-04-20T00:00:00Z",
    estimatedReadTime: 7,
    image: undefined,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The eternal debate: should you invest in organic SEO or paid advertising? The answer depends on your timeline, budget, and goals...",
          },
        ],
      },
    ],
  },
];

export function getFallbackPostBySlug(slug: string): FallbackPost | undefined {
  return fallbackPosts.find((p) => p.slug.current === slug);
}

export function getAllFallbackPostSlugs(): string[] {
  return fallbackPosts.map((p) => p.slug.current);
}
