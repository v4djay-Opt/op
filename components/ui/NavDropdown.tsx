"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: DropdownItem[];
}

export function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="group flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-text"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
      </Link>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
          <div className="w-64 rounded-2xl border border-border bg-surface shadow-xl p-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-xl px-4 py-3 transition-colors hover:bg-surface-alt"
              >
                <span className="text-sm font-medium text-text">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-0.5 text-xs text-muted line-clamp-1">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
