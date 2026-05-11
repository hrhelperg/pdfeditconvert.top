"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "Convert", href: "/pdf-converter" },
  { label: "Compress", href: "/compress-pdf" },
  { label: "Merge", href: "/merge-pdf" },
  { label: "Sign", href: "/sign-pdf" },
  { label: "Guides", href: "/guides" },
];

const APP_STORE = "https://apps.apple.com/app/id6747341672";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-[--color-surface]/85 backdrop-blur border-b border-[--color-border]">
      <Container className="flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="PDF Editor home"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[--color-brand] text-white text-[10px] font-bold leading-none tracking-tight"
          >
            PDF
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[--color-brand]">PDF</span>
            <span className="text-[--color-ink]"> Editor</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[--color-ink] hover:text-[--color-brand]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={APP_STORE}
            external
            variant="primary"
            size="md"
            ariaLabel="Download PDF Editor on the App Store"
          >
            Get the app
          </ButtonLink>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[--color-bg]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "md:hidden border-t border-[--color-border] bg-[--color-surface]",
        )}
        hidden={!open}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
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
              <ButtonLink
                href={APP_STORE}
                external
                variant="primary"
                size="md"
                className="w-full"
                ariaLabel="Download PDF Editor on the App Store"
              >
                Get the app
              </ButtonLink>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
