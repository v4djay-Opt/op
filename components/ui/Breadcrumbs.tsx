import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
  className?: string;
}

export function Breadcrumbs({ items, light, className }: BreadcrumbsProps) {
  return (
    <nav className={`flex items-center gap-2 text-sm mb-8 ${light ? "text-white/60" : "text-muted"} ${className ?? ""}`}>
      <Link href="/" className={`transition-colors ${light ? "hover:text-white" : "hover:text-text"}`}>
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link href={item.href} className={`transition-colors ${light ? "hover:text-white" : "hover:text-text"}`}>
              {item.label}
            </Link>
          ) : (
            <span className={light ? "text-white" : "text-text"}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
