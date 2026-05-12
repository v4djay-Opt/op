"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: DropdownItem[];
  columns?: number;
  light?: boolean;
}

export function NavDropdown({ label, href, items, columns = 1, light }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const isMega = columns === 2;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className={`group flex items-center gap-1 text-sm font-medium transition-colors ${
          light ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${light ? "bg-white" : "bg-accent"}`} />
      </Link>

      {open && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 ${
            isMega ? "w-[560px]" : "w-64"
          }`}
        >
          <div
            className={`rounded-2xl border border-border shadow-xl ${
              isMega ? "bg-white p-4" : "bg-surface p-2"
            } ${isMega ? "grid grid-cols-2 gap-1" : ""}`}
          >
            {isMega && (
              <div className="col-span-2 mb-2 flex items-center justify-between border-b border-border pb-2">
                <span className="text-sm font-semibold text-text">{label}</span>
                <Link
                  href={href}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  View All
                </Link>
              </div>
            )}
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group rounded-xl transition-colors hover:bg-surface-alt ${
                    isMega
                      ? "flex items-start gap-3 px-3 py-3"
                      : "flex flex-col px-4 py-3"
                  }`}
                >
                  {isMega && Icon && (
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-text">
                      {item.label}
                    </span>
                    {item.description && (
                      <span
                        className={`text-muted ${
                          isMega
                            ? "mt-0.5 text-xs line-clamp-2"
                            : "mt-0.5 text-xs line-clamp-1"
                        }`}
                      >
                        {item.description}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
