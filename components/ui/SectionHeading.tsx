"use client";

import { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-accent">
        {label}
      </span>
      <h2 className="mt-3 text-[28px] lg:text-[40px] font-bold text-text font-display leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
