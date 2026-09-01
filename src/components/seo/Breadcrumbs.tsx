import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  // Defaults to English only so a caller that has no dictionary in hand still
  // renders a valid landmark; every in-app caller passes the localized name.
  ariaLabel = "Breadcrumb",
}: {
  items: Crumb[];
  ariaLabel?: string;
}) {
  return (
    <nav aria-label={ariaLabel} className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-[--color-muted]">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden />}
            {c.href ? (
              <Link href={c.href} className="hover:text-[--color-brand]">
                {c.label}
              </Link>
            ) : (
              <span className="text-[--color-ink] font-medium">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
