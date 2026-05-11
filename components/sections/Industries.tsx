"use client";

import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  Home,
  Paintbrush,
  ShoppingBag,
  Briefcase,
  Rocket,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Industry {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  description: string;
  featured?: boolean;
}

const industries: Industry[] = [
  {
    icon: Home,
    label: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Luxury property websites, lead generation systems & CRM integrations.",
    featured: true,
  },
  {
    icon: Briefcase,
    label: "Service Businesses",
    href: "/industries/service-businesses",
    description:
      "Professional websites, automation workflows & local growth systems.",
  },
  {
    icon: Rocket,
    label: "Startups & SaaS",
    href: "/industries/startups-saas",
    description:
      "Scalable digital products, branding & growth-focused platforms.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare & Clinics",
    href: "/industries/healthcare",
    description:
      "Modern healthcare websites with appointment and lead systems.",
  },
  {
    icon: GraduationCap,
    label: "Education & Institutes",
    href: "/industries/schools-education",
    description:
      "School portals, admission systems & student management platforms.",
  },
  {
    icon: ShoppingBag,
    label: "E-commerce Brands",
    href: "/industries/ecommerce",
    description:
      "Conversion-focused online stores with automation & marketing integrations.",
  },
  {
    icon: Paintbrush,
    label: "Interior & Architecture",
    href: "/industries/interior-design",
    description:
      "Elegant portfolio websites and premium branding experiences.",
  },
  {
    icon: Building2,
    label: "SMEs & Enterprises",
    href: "/industries/startups-smes",
    description:
      "Custom business systems, dashboards & scalable digital infrastructure.",
  },
];

function IndustryCard({
  item,
  index,
}: {
  item: Industry;
  index: number;
}) {
  const Icon = item.icon;

  if (item.featured) {
    return (
      <FadeIn delay={index * 0.06}>
        <Link
          href={item.href}
          className="group relative flex flex-col h-full rounded-3xl bg-white border border-border/80 p-7 lg:p-9 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-accent/25 overflow-hidden"
        >
          {/* Subtle green tint overlay on hover */}
          <div className="absolute inset-0 bg-surface-alt/0 group-hover:bg-surface-alt/40 transition-colors duration-500 pointer-events-none" />

          {/* Gradient accent line at top */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent/0 group-hover:via-accent/60 to-transparent transition-all duration-500" />

          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-muted transition-all duration-500 group-hover:bg-accent-light group-hover:text-accent group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-medium text-muted/60 font-display tracking-wider">
                01 / 08
              </span>
            </div>

            <h3 className="text-xl lg:text-2xl font-semibold text-text font-display mb-3 group-hover:text-accent transition-colors duration-300">
              {item.label}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              {item.description}
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent/60 group-hover:text-accent transition-all duration-300">
              View Solutions
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 0.06}>
      <Link
        href={item.href}
        className="group relative flex flex-col h-full rounded-3xl bg-white border border-border/80 p-6 lg:p-7 transition-all duration-500 hover:shadow-lg hover:-translate-y-1.5 hover:border-accent/20 overflow-hidden"
      >
        {/* Subtle green tint overlay on hover */}
        <div className="absolute inset-0 bg-surface-alt/0 group-hover:bg-surface-alt/30 transition-colors duration-500 pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-alt text-muted mb-5 transition-all duration-500 group-hover:bg-accent-light group-hover:text-accent group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5" />
          </div>

          <h3 className="text-base lg:text-lg font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors duration-300">
            {item.label}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
            {item.description}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent/0 group-hover:text-accent/60 transition-all duration-300">
            View Solutions
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}

export function Industries() {
  const featured = industries.find((i) => i.featured)!;
  const standard = industries.filter((i) => !i.featured);

  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-surface-alt" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="INDUSTRIES"
          title="Industries We Serve"
          description="We craft digital experiences tailored for modern brands across high-growth industries."
        />

        {/* Desktop / Tablet: Asymmetric bento grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured card — spans 2 columns on lg+ */}
          <div className="lg:col-span-2">
            <IndustryCard item={featured} index={0} />
          </div>

          {/* First 2 standard cards */}
          <IndustryCard item={standard[0]} index={1} />
          <IndustryCard item={standard[1]} index={2} />

          {/* Next 3 standard cards */}
          <IndustryCard item={standard[2]} index={3} />
          <IndustryCard item={standard[3]} index={4} />
          <IndustryCard item={standard[4]} index={5} />

          {/* Last 2 standard cards */}
          <IndustryCard item={standard[5]} index={6} />
          <IndustryCard item={standard[6]} index={7} />
        </div>

        {/* Mobile: vertical stack */}
        <div className="sm:hidden space-y-5">
          {industries.map((item, i) => (
            <IndustryCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
