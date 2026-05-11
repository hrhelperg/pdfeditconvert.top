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
  showLockup = false,
}: {
  eyebrow?: string;
  h1: string;
  highlight?: string;
  lead: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showLockup?: boolean;
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
    <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden">
      {/* Decorative red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(229,9,20,0.35), transparent)" }}
      />
      <Container>
        <div className={showLockup ? "grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center" : ""}>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[--color-brand] mb-5">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-[--color-ink]">
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

          {showLockup ? (
            <div className="hidden md:flex justify-end items-center">
              <div className="relative">
                {/* Soft red shadow under lockup */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 translate-y-6 blur-2xl opacity-30"
                  style={{ background: "radial-gradient(closest-side, rgba(229,9,20,0.5), transparent)" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pdf-editor-lockup.svg"
                  alt="PDF Editor app icon"
                  width={360}
                  height={280}
                  className="w-[340px] lg:w-[400px] h-auto drop-shadow-xl"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
