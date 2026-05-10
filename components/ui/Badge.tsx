"use client";

import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
      {children}
    </span>
  );
}
