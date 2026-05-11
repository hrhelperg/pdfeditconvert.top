import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FeatureItem } from "@/types/content";

function Icon({ name, variant = "outline" }: { name: string; variant?: "outline" | "solid" }) {
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  const Comp = iconMap[name] ?? iconMap.Sparkles ?? iconMap.Star;
  const color = variant === "solid" ? "text-white" : "text-[--color-brand]";
  return <Comp className={`h-6 w-6 ${color}`} aria-hidden />;
}

export function FeatureGrid({
  heading,
  sub,
  items,
  cols = 3,
}: {
  heading?: string;
  sub?: string;
  items: FeatureItem[];
  cols?: 2 | 3 | 4 | 5;
}) {
  const gridCols =
    cols === 5
      ? "md:grid-cols-3 lg:grid-cols-5"
      : cols === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : cols === 2
          ? "md:grid-cols-2"
          : "md:grid-cols-3";

  return (
    <Section>
      <Container>
        {heading ? (
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              {heading}
            </h2>
            {sub ? (
              <p className="mt-3 text-lg text-[--color-muted]">{sub}</p>
            ) : null}
          </div>
        ) : null}
        <ul className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {items.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl bg-[--color-surface] border border-[--color-border] p-6 shadow-[var(--shadow-card)] hover:border-[--color-brand]/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200"
            >
              <div
                className="flex items-center justify-center h-12 w-12 rounded-xl mb-5 text-white shadow-[var(--shadow-brand)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Icon name={f.icon} variant="solid" />
              </div>
              <h3 className="text-lg font-semibold text-[--color-ink]">
                {f.title}
              </h3>
              <p className="mt-2 text-[--color-muted] leading-relaxed">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
