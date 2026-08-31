"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/cn";

export interface LanguageOption {
  /** BCP-47 locale code, matching the page's hreflang values. */
  code: string;
  /** Endonym, e.g. "Português (Brasil)". */
  nativeName: string;
  /**
   * Server-rendered destination: this locale's home page. Always a real,
   * indexable URL, which is why it is safe to ship in static HTML.
   */
  href: string;
  current: boolean;
}

export interface LanguageSwitcherProps {
  label: string;
  ariaLabel: string;
  currentLabel: string;
  options: LanguageOption[];
  className?: string;
}

/**
 * Language switcher.
 *
 * Only published locales appear, and every option is a real `<a href>`
 * present in the served HTML — a crawler can walk from any page into every
 * other language without running JavaScript, and no option can ever point
 * at a URL that does not exist.
 *
 * The static href is the target locale's home page. On hydration each href
 * upgrades to the *equivalent page* in that locale, read from the
 * `<link rel="alternate" hreflang>` tags this page already carries in its
 * head. Those tags are generated per page from the route map, so the
 * upgrade is exact — and it costs zero bytes, because the mapping is
 * already in the document. Shipping the whole 174-route translation table
 * to the browser to compute the same answer would cost every visitor of
 * every language a payload that grows with each locale added.
 *
 * A page with no translation simply has no alternate for that locale, so
 * its option stays on the home-page fallback rather than inventing a URL.
 *
 * The lookup runs when the menu is opened rather than on mount: it is a
 * read of an external system (the document head) whose answer is only
 * needed at the moment someone actually opens the switcher.
 */
export function LanguageSwitcher({
  label,
  ariaLabel,
  currentLabel,
  options,
  className,
}: LanguageSwitcherProps) {
  const [equivalents, setEquivalents] = useState<Record<string, string>>({});

  const readAlternates = () => {
    const found: Record<string, string> = {};
    for (const link of document.head.querySelectorAll<HTMLLinkElement>(
      'link[rel="alternate"][hreflang]',
    )) {
      const hreflang = link.getAttribute("hreflang");
      const href = link.getAttribute("href");
      if (!hreflang || !href || hreflang === "x-default") continue;
      try {
        found[hreflang] = new URL(href, window.location.origin).pathname;
      } catch {
        // A malformed alternate is not worth breaking the switcher over;
        // that option keeps its server-rendered home-page href.
      }
    }
    setEquivalents(found);
  };

  const current = options.find((o) => o.current);

  return (
    <details
      className={cn("relative", className)}
      onToggle={(e) => {
        if ((e.currentTarget as HTMLDetailsElement).open) readAlternates();
      }}
    >
      <summary
        aria-label={ariaLabel}
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg border border-[--color-border] px-3 py-2 text-sm font-medium text-[--color-ink] hover:border-[--color-brand] [&::-webkit-details-marker]:hidden"
      >
        <Globe className="h-4 w-4 text-[--color-muted]" aria-hidden />
        <span className="sr-only">{label}: </span>
        <span>{current ? current.nativeName : label}</span>
      </summary>
      <ul className="absolute inset-inline-end-0 z-50 mt-1 min-w-[13rem] rounded-xl border border-[--color-border] bg-[--color-surface] p-1 shadow-[var(--shadow-elevated)]">
        {options.map((option) => (
          <li key={option.code}>
            <a
              href={equivalents[option.code] ?? option.href}
              hrefLang={option.code}
              aria-current={option.current ? "true" : undefined}
              className={cn(
                "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-[--color-ink] hover:bg-[--color-bg]",
                option.current && "font-semibold",
              )}
            >
              <span lang={option.code}>{option.nativeName}</span>
              {option.current ? (
                <>
                  <Check className="h-4 w-4 text-[--color-brand]" aria-hidden />
                  <span className="sr-only">{currentLabel}</span>
                </>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
