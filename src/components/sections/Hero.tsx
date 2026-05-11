import { Container } from "@/components/primitives/Container";
import { StoreButtons } from "@/components/sections/StoreButtons";
import Link from "next/link";

export function Hero({
  eyebrow,
  h1,
  highlight,
  lead,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  h1: string;
  highlight?: string;
  lead: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const renderH1 = () => {
    if (!highlight || !h1.includes(highlight)) return h1;
    const idx = h1.indexOf(highlight);
    const before = h1.slice(0, idx);
    const after = h1.slice(idx + highlight.length);
    return (
      <>
        {before}
        <span className="text-[--color-brand]">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-16">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-[--color-brand] mb-4">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[--color-ink]">
            {renderH1()}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[--color-muted] leading-relaxed">
            {lead}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <StoreButtons size="lg" />
            {secondaryHref ? (
              <Link
                href={secondaryHref}
                className="text-sm font-semibold text-[--color-ink] hover:text-[--color-brand]"
              >
                {secondaryLabel ?? "Learn more"} →
              </Link>
            ) : null}
          </div>
          <p className="mt-6 text-sm text-[--color-muted]">
            Available on iOS and Android · Free to try
          </p>
        </div>
      </Container>
    </section>
  );
}
