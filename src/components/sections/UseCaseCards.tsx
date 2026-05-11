import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface UseCaseCard {
  icon: string;
  title: string;
  body: string;
  href: string;
}

export function UseCaseCards({
  heading,
  items,
}: {
  heading: string;
  items: UseCaseCard[];
}) {
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  return (
    <Section>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((c) => {
            const Icon = iconMap[c.icon] ?? iconMap.Layers ?? iconMap.Star;
            return (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="block h-full rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                >
                  <Icon className="h-7 w-7 text-[--color-brand]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-[--color-ink]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-[--color-muted] leading-relaxed">
                    {c.body}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
