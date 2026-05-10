"use client";

import Link from "next/link";
import { ArrowRight, School, HeartPulse, Dumbbell, Home, Paintbrush } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const products = [
  {
    icon: School,
    name: "School Management System",
    tagline: "Automate admissions, fees, attendance & reports.",
    href: "/products/school-management-system",
  },
  {
    icon: HeartPulse,
    name: "Hospital Management System",
    tagline: "Patient records, appointments & billing in one place.",
    href: "/products/hospital-management-system",
  },
  {
    icon: Dumbbell,
    name: "Gym Management System",
    tagline: "Memberships, schedules, payments & analytics.",
    href: "/products/gym-management-system",
  },
  {
    icon: Home,
    name: "Real Estate CRM",
    tagline: "Track leads, properties & closings effortlessly.",
    href: "/products/real-estate-crm",
  },
  {
    icon: Paintbrush,
    name: "Interior Design CRM",
    tagline: "Manage projects, vendors & client approvals.",
    href: "/products/interior-design-crm",
  },
];

export function ProductsShowcase() {
  return (
    <section className="relative py-20 lg:py-28 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Products"
          title={<>Ready-to-Deploy <em className="italic text-accent">Solutions</em></>}
          description="Industry-specific software, customized and launched within days."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.1}>
              <Link
                href={product.href}
                className="group flex flex-col rounded-2xl bg-white border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <product.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text font-display mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {product.tagline}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5">
                  Request Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
