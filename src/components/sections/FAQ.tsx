"use client";

import { useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { FaqItem } from "@/types/content";

export function FAQ({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
          {heading}
        </h2>
        <ul className="divide-y divide-[--color-border] rounded-2xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-card)] overflow-hidden">
          {items.map((it, idx) => {
            const isOpen = open === idx;
            return (
              <li key={it.q}>
                <button
                  type="button"
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full flex items-center justify-between gap-4 text-start px-6 py-5 font-semibold text-[--color-ink] hover:bg-[--color-bg]"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <span>{it.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-[--color-muted]",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  hidden={!isOpen}
                  className={cn(
                    "px-6 pb-5 text-[--color-muted] leading-relaxed",
                  )}
                >
                  {it.a}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
