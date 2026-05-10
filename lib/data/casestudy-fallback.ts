export interface FallbackCaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  challenge?: unknown[];
  approach?: unknown[];
  outcome?: unknown[];
  image?: string;
}

export const fallbackCaseStudies: FallbackCaseStudy[] = [
  {
    _id: "fallback-cs-1",
    title: "EduPro Academy: Tripling Lead Generation",
    slug: { current: "edupro-academy" },
    client: "EduPro Academy",
    industry: "Education",
    result: "3x",
    metric: "Lead Generation",
    description:
      "Redesigned their digital presence and implemented a custom CRM that tripled qualified leads in 6 months.",
    challenge: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "EduPro Academy was struggling with fragmented lead management across multiple channels." },
        ],
      },
    ],
  },
  {
    _id: "fallback-cs-2",
    title: "FitLife Gym: 150% Membership Growth",
    slug: { current: "fitlife-gym" },
    client: "FitLife Gym",
    industry: "Fitness",
    result: "150%",
    metric: "Membership Growth",
    description:
      "Built an integrated management system with automated renewals and lead tracking.",
    challenge: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "FitLife Gym had high churn and manual renewal processes that were eating into profits." },
        ],
      },
    ],
  },
  {
    _id: "fallback-cs-3",
    title: "Prime Realty: 2.5x Faster Closings",
    slug: { current: "prime-realty" },
    client: "Prime Realty",
    industry: "Real Estate",
    result: "2.5x",
    metric: "Faster Closings",
    description:
      "Deployed a custom real estate CRM that streamlined the entire sales pipeline.",
    challenge: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Prime Realty had a slow, paper-based process that delayed every transaction." },
        ],
      },
    ],
  },
];

export function getFallbackCaseStudyBySlug(slug: string): FallbackCaseStudy | undefined {
  return fallbackCaseStudies.find((c) => c.slug.current === slug);
}

export function getAllFallbackCaseStudySlugs(): string[] {
  return fallbackCaseStudies.map((c) => c.slug.current);
}
