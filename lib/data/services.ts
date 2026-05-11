export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  whatWeDo: string[];
  process: { step: number; title: string; description: string }[];
  stats: { value: string; label: string };
  relatedCaseStudy?: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    tagline: "Websites That Convert Visitors Into Customers",
    icon: "Globe",
    description:
      "Custom, high-performance websites built with modern frameworks. From landing pages to full-scale web applications, we design experiences that drive revenue.",
    whatWeDo: [
      "Custom UI/UX design tailored to your brand and audience",
      "Responsive development for all devices and screen sizes",
      "Performance optimization for Core Web Vitals and SEO",
      "CMS integration (Sanity, WordPress, or custom)",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We analyze your business, competitors, and target audience.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Wireframes and high-fidelity mockups with your feedback.",
      },
      {
        step: 3,
        title: "Develop",
        description:
          "Clean, scalable code with best practices.",
      },
      {
        step: 4,
        title: "Launch & Optimize",
        description:
          "Deploy, monitor, and continuously improve performance.",
      },
    ],
    stats: { value: "3x", label: "Average Conversion Lift" },
    relatedCaseStudy: "EduPro Academy",
    faqs: [
      {
        question: "How long does a typical website project take?",
        answer:
          "Most projects are delivered within 4-8 weeks depending on complexity and scope.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes, we offer monthly retainer packages that include updates, security patches, and performance monitoring.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Absolutely. We specialize in redesigns that improve UX, performance, and conversion rates while preserving SEO value.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Data-Driven Campaigns That Maximize ROI",
    icon: "TrendingUp",
    description:
      "Strategic digital marketing across search, social, and display networks. We target the right audience at the right time with the right message.",
    whatWeDo: [
      "PPC campaign management (Google Ads, Meta Ads)",
      "Conversion rate optimization and A/B testing",
      "Email marketing automation and drip sequences",
      "Analytics setup, reporting, and actionable insights",
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description:
          "Deep dive into your current marketing funnel and data.",
      },
      {
        step: 2,
        title: "Strategy",
        description:
          "Build a channel mix and budget allocation plan.",
      },
      {
        step: 3,
        title: "Execute",
        description:
          "Launch campaigns with precise targeting and creatives.",
      },
      {
        step: 4,
        title: "Scale",
        description:
          "Optimize based on real data and scale what works.",
      },
    ],
    stats: { value: "150%", label: "Average ROAS Improvement" },
    faqs: [
      {
        question: "What is your minimum ad spend?",
        answer:
          "We recommend starting with at least Rs. 50,000/month to gather meaningful data.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "PPC campaigns show results within days. SEO and organic strategies typically take 2-3 months to show significant impact.",
      },
      {
        question: "Do you handle creative design for ads?",
        answer:
          "Yes, our in-house team creates ad creatives, landing pages, and email templates.",
      },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    tagline: "Build a Brand People Love and Remember",
    icon: "Share2",
    description:
      "End-to-end social media management from content creation to community engagement. We grow your following and turn fans into customers.",
    whatWeDo: [
      "Content calendar planning and creation",
      "Reels, graphics, and copywriting",
      "Community management and response handling",
      "Influencer outreach and collaboration",
    ],
    process: [
      {
        step: 1,
        title: "Brand Voice",
        description:
          "Define tone, style, and content pillars for your brand.",
      },
      {
        step: 2,
        title: "Create",
        description:
          "Produce scroll-stopping content consistently.",
      },
      {
        step: 3,
        title: "Publish",
        description:
          "Schedule and post at optimal times for your audience.",
      },
      {
        step: 4,
        title: "Engage",
        description:
          "Respond to comments, DMs, and build community loyalty.",
      },
    ],
    stats: { value: "200%", label: "Average Engagement Growth" },
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Instagram, Facebook, LinkedIn, X (Twitter), and YouTube Shorts.",
      },
      {
        question: "How many posts per week?",
        answer:
          "We typically create 12-20 pieces of content per week depending on your package.",
      },
      {
        question: "Will I approve content before it goes live?",
        answer:
          "Yes, every piece of content is shared for approval before publishing.",
      },
    ],
  },
  {
    slug: "crm-custom-portals",
    name: "CRM & Custom Portals",
    tagline: "Software That Works Exactly How Your Business Does",
    icon: "Database",
    description:
      "Tailored CRMs and business portals that automate workflows, track leads, and give you real-time visibility into operations.",
    whatWeDo: [
      "Custom CRM development with your exact workflow",
      "Lead tracking, pipeline management, and automation",
      "Employee and vendor portal development",
      "Integration with existing tools (WhatsApp, Email, Payment)",
    ],
    process: [
      {
        step: 1,
        title: "Map",
        description:
          "Document your current workflow and pain points.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Build wireframes for the CRM/portal user flows.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Develop with scalable architecture and security.",
      },
      {
        step: 4,
        title: "Train & Deploy",
        description:
          "Onboard your team and go live with support.",
      },
    ],
    stats: { value: "40%", label: "Admin Time Saved" },
    relatedCaseStudy: "Prime Realty",
    faqs: [
      {
        question: "Can the CRM integrate with WhatsApp?",
        answer:
          "Yes, we offer full WhatsApp Business API integration for lead capture and follow-ups.",
      },
      {
        question: "Is the data secure?",
        answer:
          "Absolutely. We implement role-based access control, encrypted storage, and regular backups.",
      },
      {
        question: "How long does CRM development take?",
        answer:
          "Typical CRM projects take 6-12 weeks depending on features and integrations.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    tagline: "Rank Higher, Get Found, Drive Organic Revenue",
    icon: "Search",
    description:
      "Technical SEO, content strategy, and link building that puts your business on page one. Sustainable organic growth without ad spend.",
    whatWeDo: [
      "Technical SEO audits and site health fixes",
      "Keyword research and content strategy",
      "On-page optimization and schema markup",
      "Backlink building and authority development",
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description:
          "Comprehensive technical and content SEO audit.",
      },
      {
        step: 2,
        title: "Fix",
        description:
          "Resolve technical issues, improve site speed, and structure.",
      },
      {
        step: 3,
        title: "Create",
        description:
          "Publish optimized content targeting high-intent keywords.",
      },
      {
        step: 4,
        title: "Authority",
        description:
          "Build quality backlinks and monitor rankings.",
      },
    ],
    stats: { value: "3.5x", label: "Average Organic Traffic Growth" },
    faqs: [
      {
        question: "How long until I see SEO results?",
        answer:
          "Most clients see measurable improvements in 2-3 months, with significant gains by month 6.",
      },
      {
        question: "Do you guarantee page one rankings?",
        answer:
          "No ethical agency can guarantee rankings. We guarantee transparent reporting and best-practice execution.",
      },
      {
        question: "Do you handle local SEO?",
        answer:
          "Yes, we optimize Google Business Profiles, local citations, and location-based content.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
