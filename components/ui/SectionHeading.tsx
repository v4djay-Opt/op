"use client";

import { ReactNode } from "react";
import { Badge } from "./Badge";

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
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <Badge>{label}</Badge>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
