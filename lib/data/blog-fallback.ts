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
  author?: string;
  authorRole?: string;
  authorBio?: string;
  authorLinkedIn?: string;
  authorTwitter?: string;
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
    author: "Aiden Clarke",
    authorRole: "Content Manager",
    authorBio: "Aiden is a conversion specialist who has helped 40+ brands optimize their digital funnels for maximum ROI.",
    authorLinkedIn: "https://linkedin.com/in/aiden-clarke",
    authorTwitter: "https://twitter.com/aidenclarke",
    image: undefined,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Conversion rate optimization is the single highest-ROI activity for any digital business. In this guide, we walk through proven techniques that have helped our clients triple their conversion rates in under 30 days." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Why Conversions Matter More Than Traffic" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Most businesses obsess over traffic — more visitors, more clicks, more impressions. But traffic without conversions is just expensive noise. A 1% improvement in conversion rate can double your revenue without spending a single extra rupee on ads." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The 5 Quick Wins That Move the Needle" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Here are the five highest-impact changes you can make this week: simplify your navigation, add social proof above the fold, rewrite your CTA buttons with action verbs, reduce form fields, and add a one-click checkout option. Each of these takes under two hours to implement." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Real Results From a Real Client" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "We applied these exact techniques to an e-commerce client in the education space. Within 30 days, their conversion rate jumped from 1.8% to 5.4% — a 3x improvement — and their average order value increased by 22%. The best part? Zero additional ad spend." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "How to Measure Your Progress" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Track your baseline conversion rate for 7 days, then implement one change at a time. Wait 3-5 days between changes so you can isolate what actually moved the needle. Use Google Analytics 4 events and Hotjar recordings to understand user behavior." },
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
    author: "Sarah Patel",
    authorRole: "Marketing Lead",
    authorBio: "Sarah leads growth marketing at Optimax Studio and specializes in CRM strategy for service-based businesses.",
    authorLinkedIn: "https://linkedin.com/in/sarah-patel",
    authorTwitter: "https://twitter.com/sarahpatel",
    image: undefined,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Real estate is a relationship business. But managing hundreds of leads in spreadsheets is a recipe for lost revenue. In this guide, we show you why every real estate business needs a CRM in 2026 and how to choose the right one." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Hidden Cost of Spreadsheets" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Spreadsheets seem free, but they cost you in lost deals, manual data entry, duplicate entries, and zero visibility into your pipeline. A typical real estate agent loses 15-20% of potential deals simply because follow-ups fall through the cracks." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "What a Real Estate CRM Should Do" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Your CRM should capture leads from every source — website, Facebook, referrals, walk-ins — and automatically assign them to the right agent. It should track every interaction, send follow-up reminders, and give you a real-time view of every deal in your pipeline." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "ROI: When the CRM Pays for Itself" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "A well-implemented CRM typically pays for itself in 60-90 days. For a team of 5 agents closing 3 deals per month at an average commission of Rs. 50,000, just one extra deal per month covers the entire annual CRM cost." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Choosing the Right CRM for Your Business" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Look for a CRM that integrates with your existing tools, offers mobile access for agents on the go, and has custom workflows for property types and deal stages. Avoid generic CRMs that force you to adapt your business to their structure." },
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
    author: "Marcus Chen",
    authorRole: "SEO Strategist",
    authorBio: "Marcus is an SEO strategist with 8 years of experience growing organic traffic for B2B and SaaS companies.",
    authorLinkedIn: "https://linkedin.com/in/marcus-chen",
    authorTwitter: "https://twitter.com/marcuschen",
    image: undefined,
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "The eternal debate: should you invest in organic SEO or paid advertising? The answer depends on your timeline, budget, and goals. In this guide, we break down a data-backed framework for making the right choice for your business." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "SEO: The Long Game That Keeps Paying" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "SEO is compounding. The content you publish today can drive traffic for years. But it takes 3-6 months to see meaningful results. If you have the patience and the budget for quality content, SEO delivers the lowest customer acquisition cost over time." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Paid Ads: Speed at a Price" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Paid ads give you instant traffic. Turn them on today, get leads tomorrow. But the moment you stop paying, the traffic stops. For new businesses or time-sensitive campaigns, paid ads are essential. For long-term growth, they should be paired with SEO." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Hybrid Approach That Works" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "The smartest businesses run both simultaneously. Use paid ads for immediate revenue while building SEO assets that reduce your ad dependency over time. As your organic traffic grows, you can gradually reallocate budget from ads to content." },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Budget Allocation Framework" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "For businesses under 1 year old: 70% ads, 30% SEO. For businesses 1-3 years old: 50% ads, 50% SEO. For established businesses: 30% ads, 70% SEO. Adjust based on your industry, competition, and cash flow." },
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
