"use client";

import Link from "next/link";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Dumbbell,
  Home,
  Paintbrush,
  ShoppingBag,
  Store,
  Rocket,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  { icon: Home, label: "Real Estate", href: "/industries/real-estate" },
  { icon: Paintbrush, label: "Interior Design", href: "/industries/interior-design" },
  { icon: GraduationCap, label: "Schools & Education", href: "/industries/schools-education" },
  { icon: HeartPulse, label: "Healthcare", href: "/industries/healthcare" },
  { icon: ShoppingBag, label: "Electronics & Retail", href: "/industries/retail-ecommerce" },
  { icon: Store, label: "E-commerce", href: "/industries/ecommerce" },
  { icon: Rocket, label: "Startups & SMEs", href: "/industries/startups-smes" },
];

export function Industries() {
  return (
    <section className="relative py-20 lg:py-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Industries"
          title={<>Industries We <em className="italic text-accent">Serve</em></>}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((industry, i) => (
            <FadeIn key={industry.label} delay={i * 0.06}>
              <Link
                href={industry.href}
                className="group flex flex-col items-center rounded-2xl bg-white border border-border p-5 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 hover:border-accent/30"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-alt text-muted transition-all group-hover:bg-accent-light group-hover:text-accent">
                  <industry.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                  {industry.label}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
