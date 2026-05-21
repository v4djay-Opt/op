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
    publishedAt: "2026-01-15T00:00:00Z",
    heroMetrics: [
      { value: "6 Months", label: "Timeline" },
      { value: "40%", label: "Cost Saved" },
    ],
    challenge: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "EduPro Academy was struggling with fragmented lead management across multiple channels. Leads came in through Facebook, WhatsApp, website forms, and walk-ins — but no single system captured or tracked them. Sales reps often missed follow-ups, and duplicate entries wasted hours every week." },
        ],
      },
    ],
    approachSteps: [
      { title: "Audit & Strategy", description: "Conducted a full funnel audit to identify drop-off points and map the ideal lead journey." },
      { title: "Custom CRM Build", description: "Built a tailored lead management system with automated follow-ups and unified source tracking." },
      { title: "Conversion Optimization", description: "Redesigned key landing pages, added progressive profiling, and implemented A/B testing." },
    ],
    results: [
      { value: "3x", label: "Lead Generation", description: "Tripled qualified leads within 6 months through optimized funnels." },
      { value: "40%", label: "Cost Per Lead", description: "Reduced acquisition costs through automated nurturing and retargeting." },
      { value: "85%", label: "Follow-Up Rate", description: "Automated sequences ensured no lead went cold after first contact." },
    ],
    testimonial: {
      quote: "Optimax transformed how we handle leads. The custom CRM alone paid for itself in 90 days. Our team now closes 3x more deals with the same headcount.",
      name: "Rajesh Kumar",
      role: "Operations Director",
      company: "EduPro Academy",
    },
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
    publishedAt: "2026-02-20T00:00:00Z",
    heroMetrics: [
      { value: "4 Months", label: "Timeline" },
      { value: "60%", label: "Churn Reduced" },
    ],
    challenge: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "FitLife Gym had high churn and manual renewal processes that were eating into profits. Members slipped through cracks at renewal time, and the front desk spent hours each day on spreadsheets instead of engaging with clients." },
        ],
      },
    ],
    approachSteps: [
      { title: "System Integration", description: "Connected membership, billing, and lead tracking into one unified platform." },
      { title: "Automation", description: "Built renewal workflows, churn prediction alerts, and payment retry sequences." },
      { title: "Growth Marketing", description: "Launched referral programs, retargeting campaigns, and upsell funnels." },
    ],
    results: [
      { value: "150%", label: "Membership Growth", description: "New member signups increased dramatically within the first quarter." },
      { value: "60%", label: "Churn Reduction", description: "Proactive alerts and renewal nudges helped retain at-risk members." },
      { value: "3x", label: "Referral Rate", description: "Integrated referral program drove organic word-of-mouth growth." },
    ],
    testimonial: {
      quote: "We went from managing everything in spreadsheets to a fully automated system. Our front desk now focuses on member experience, not paperwork.",
      name: "Priya Sharma",
      role: "Founder",
      company: "FitLife Gym",
    },
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
    publishedAt: "2026-03-10T00:00:00Z",
    heroMetrics: [
      { value: "3 Months", label: "Timeline" },
      { value: "30%", label: "Time Saved" },
    ],
    challenge: [
      {
        _type: "block",
        style: "normal",
        children: [
          { _type: "span", text: "Prime Realty had a slow, paper-based process that delayed every transaction. Agents juggled multiple apps, missed callbacks, and spent more time on admin than selling." },
        ],
      },
    ],
    approachSteps: [
      { title: "Pipeline Mapping", description: "Documented every step from inquiry to closing, identifying bottlenecks and handoff gaps." },
      { title: "CRM Customization", description: "Built property-specific workflows, document automation, and e-signature integration." },
      { title: "Team Training", description: "Onboarded all agents with dashboards, mobile access, and real-time notification setup." },
    ],
    results: [
      { value: "2.5x", label: "Faster Closings", description: "Average deal cycle reduced from 120 to 48 days after streamlining workflows." },
      { value: "30%", label: "Admin Time Saved", description: "Automated document handling freed up agent hours for client-facing work." },
      { value: "95%", label: "Lead Response", description: "Instant notifications and mobile access ensured same-day responses to every inquiry." },
    ],
    testimonial: {
      quote: "Our agents now close deals in half the time. The pipeline visibility alone is worth every rupee we invested.",
      name: "Vikram Desai",
      role: "Managing Partner",
      company: "Prime Realty",
    },
  },
];

export function getFallbackCaseStudyBySlug(slug: string): FallbackCaseStudy | undefined {
  return fallbackCaseStudies.find((c) => c.slug.current === slug);
}

export function getAllFallbackCaseStudySlugs(): string[] {
  return fallbackCaseStudies.map((c) => c.slug.current);
}
