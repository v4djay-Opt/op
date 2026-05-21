export interface ApproachStep {
  title: string;
  description: string;
}

export interface ResultItem {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FallbackCaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  publishedAt: string;
  heroMetrics?: { value: string; label: string }[];
  challenge?: unknown[];
  approach?: unknown[];
  outcome?: unknown[];
  image?: string;
  ogImage?: string;
  approachSteps?: ApproachStep[];
  results?: ResultItem[];
  testimonial?: Testimonial;
}

export const fallbackCaseStudies: FallbackCaseStudy[] = [];

export function getFallbackCaseStudyBySlug(slug: string): FallbackCaseStudy | undefined {
  return fallbackCaseStudies.find((c) => c.slug.current === slug);
}

export function getAllFallbackCaseStudySlugs(): string[] {
  return fallbackCaseStudies.map((c) => c.slug.current);
}
