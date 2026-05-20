"use client";

import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  Home,
  Paintbrush,
  ShoppingBag,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Industry {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: Home,
    label: "Real Estate",
    href: "/industries/real-estate",
    description: "Luxury property websites, lead generation & CRM integrations.",
  },
  {
    icon: GraduationCap,
    label: "Schools & Education",
    href: "/industries/schools-education",
    description: "School portals, admission systems & student management.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    href: "/industries/healthcare",
    description: "Modern healthcare websites with appointment and lead systems.",
  },
  {
    icon: Dumbbell,
    label: "Fitness & Gym",
    href: "/industries/fitness-gym",
    description: "Integrated management systems with automated renewals.",
  },
  {
    icon: Paintbrush,
    label: "Interior Design",
    href: "/industries/interior-design",
    description: "Elegant portfolio websites and premium branding experiences.",
  },
  {
    icon: ShoppingBag,
    label: "Retail & E-commerce",
    href: "/industries/ecommerce",
    description: "Conversion-focused online stores with marketing integrations.",
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

  return (
    <FadeIn delay={index * 0.06}>
      <Link
        href={item.href}
        className="group relative flex flex-col h-full rounded-2xl bg-white border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/20 overflow-hidden"
      >
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-alt text-muted mb-4 transition-all duration-300 group-hover:bg-accent-light group-hover:text-accent">
            <Icon className="h-5 w-5" />
          </div>

          <h3 className="text-base lg:text-lg font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors duration-300">
            {item.label}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed flex-1">
            {item.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent/0 group-hover:text-accent/70 transition-all duration-300">
            View Solutions
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}

export function Industries() {
  return (
    <section className="relative py-12 lg:py-20 px-4 overflow-hidden bg-background">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="INDUSTRIES"
          title="Industries We Serve"
          description="We craft digital experiences tailored for modern brands across high-growth industries."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((item, i) => (
            <IndustryCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
