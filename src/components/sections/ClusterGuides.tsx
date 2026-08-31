import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import type { RelatedLink } from "@/types/content";

/**
 * Compact, crawlable list of the guides that hang off a hub or tool page.
 * Rendered server-side as plain links so the whole cluster is reachable
 * without JavaScript — in every locale.
 */
export function ClusterGuides({
  heading,
  items,
  moreHref,
  moreLabel,
  seeAllLabel = "See all guides",
}: {
  heading: string;
  items: RelatedLink[];
  moreHref?: string;
  moreLabel?: string;
  seeAllLabel?: string;
}) {
  if (!items.length) return null;
  return (
    <Section>
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {items.map((r) => (
            <li key={r.path}>
              <Link
                href={r.path}
                className="block py-1.5 text-[--color-muted] hover:text-[--color-brand]"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
        {moreHref ? (
          <p className="mt-6">
            <Link
              href={moreHref}
              className="font-semibold text-[--color-brand] hover:underline"
            >
              {moreLabel ?? seeAllLabel} →
            </Link>
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
