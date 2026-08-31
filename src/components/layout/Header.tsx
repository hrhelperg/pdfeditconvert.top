"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";
import { BrandMark } from "@/components/primitives/BrandMark";
import {
  LanguageSwitcher,
  type LanguageSwitcherProps,
} from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/cn";

export interface HeaderNavItem {
  label: string;
  href: string;
}

/**
 * Site header.
 *
 * Every string and every href arrives as a prop from the locale's root
 * layout. Nothing is looked up here, which is deliberate: this is a Client
 * Component, so anything it imported would be shipped to the browser. Props
 * mean the bundle carries exactly the one locale the page is published in,
 * and adding a locale adds nothing to any other locale's payload.
 */
export function Header({
  nav,
  homeHref,
  homeAriaLabel,
  ctaLabel,
  ctaAriaLabel,
  ctaHref,
  openMenu,
  closeMenu,
  switcher,
}: {
  nav: HeaderNavItem[];
  homeHref: string;
  homeAriaLabel: string;
  ctaLabel: string;
  ctaAriaLabel: string;
  ctaHref: string;
  openMenu: string;
  closeMenu: string;
  switcher: LanguageSwitcherProps;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-[--color-surface]/90 backdrop-blur border-b border-[--color-border]">
      {/* Red brand accent stripe */}
      <div aria-hidden className="h-1 w-full bg-[var(--gradient-brand)]" />
      <Container className="flex items-center justify-between h-16">
        <Link href={homeHref} className="flex items-center gap-2.5" aria-label={homeAriaLabel}>
          <BrandMark size={36} className="h-9 w-9" />
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-[--color-brand]">PDF</span>
            <span className="text-[--color-ink]"> Editor</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[--color-ink] hover:text-[--color-brand]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher {...switcher} />
          <ButtonLink
            href={ctaHref}
            external
            variant="primary"
            size="md"
            ariaLabel={ctaAriaLabel}
          >
            {ctaLabel}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[--color-bg]"
          aria-label={open ? closeMenu : openMenu}
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn("md:hidden border-t border-[--color-border] bg-[--color-surface]")}
        hidden={!open}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-[--color-ink] hover:bg-[--color-bg]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <LanguageSwitcher {...switcher} className="w-full" />
            </li>
            <li className="mt-2">
              <ButtonLink
                href={ctaHref}
                external
                variant="primary"
                size="md"
                className="w-full"
                ariaLabel={ctaAriaLabel}
              >
                {ctaLabel}
              </ButtonLink>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
