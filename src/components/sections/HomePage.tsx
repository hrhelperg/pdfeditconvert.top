import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";
import { softwareAppSchema, faqSchema } from "@/content/schema";
import { getSiteDictionary, getToolStrings } from "@/lib/i18n/registry";
import { guidesFor } from "@/content/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { fmt, formatNumber } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";
import type { HomeContent } from "@/types/content";
import {
  Check,
  Image as ImageIcon,
  Combine,
  Scissors,
  RotateCw,
  Images,
  Stamp,
  Minimize2,
  FileText,
  FileOutput,
  ArrowUpDown,
  FileStack,
  Pencil,
  Files,
  ShieldCheck,
  ScanLine,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons live in code, keyed by route id and feature key; copy lives in the
 * locale's content record. A translator never touches an import, and a new
 * locale never has to restate which glyph goes with "Merge PDF".
 */
const TOOL_ICONS: Record<string, LucideIcon> = {
  "image-to-pdf": ImageIcon,
  "merge-pdf": Combine,
  "split-pdf": Scissors,
  "rotate-pdf": RotateCw,
  "pdf-to-images": Images,
  "add-watermark-to-pdf": Stamp,
  "compress-pdf": Minimize2,
  "pdf-to-word": FileText,
  "word-to-pdf": FileOutput,
  "reorder-pdf-pages": ArrowUpDown,
  "extract-pdf-pages": FileStack,
};

const FEATURE_ICONS: Record<string, LucideIcon> = {
  edit: Pencil,
  convert: Files,
  secure: ShieldCheck,
  scan: ScanLine,
  organize: LayoutGrid,
};

export function HomePage({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const { sections } = getSiteDictionary(locale);
  const href = (id: string) => pathForWithFallback(locale, id as RouteId);
  const guideCount = Object.keys(guidesFor(locale)).length;

  return (
    <>
      {/*
        Conversion-first hero band. A real working converter (Image to PDF)
        is the dominant element and is first in the DOM, so on mobile it
        appears on the first screen before any marketing prose; on desktop it
        takes the wide column with the H1 + value props in a slim rail. All
        SEO content (tool grid, hubs, guides, FAQ, schema) stays server-
        rendered below.
      */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-brand-soft)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(229,9,20,0.40), transparent)",
          }}
        />
        <Container className="py-8 md:py-12">
          <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(0,360px)] gap-8 lg:gap-12 lg:items-start">
            <div>
              <ImageToPdfTool
                strings={getToolStrings(locale, "image-to-pdf")}
                locale={locale}
              />
            </div>

            <div className="lg:pt-2">
              <p
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                {content.heroEyebrow}
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] text-[--color-ink]">
                {content.heroH1Before}
                <span className="text-[--color-brand]">
                  {content.heroH1Highlight}
                </span>
                {content.heroH1After}
              </h1>
              <p className="mt-3 text-sm md:text-base text-[--color-muted] leading-relaxed">
                {content.heroLead}
              </p>
              <ul className="mt-6 space-y-2.5">
                {content.trust.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2.5 text-sm font-medium text-[--color-ink]"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[--color-brand] text-white shrink-0 mt-0.5"
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={href("pdf-tools")}
                  className="text-sm font-semibold text-[--color-ink] hover:text-[--color-brand]"
                >
                  {content.browseAllToolsLabel}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Primary tool grid — the most important section, immediately below. */}
      <Section>
        <Container>
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[--color-brand] mb-3">
              {content.toolsEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              {content.toolsHeading}
            </h2>
            <p className="mt-3 text-lg text-[--color-muted]">{content.toolsLead}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.tools.map((t) => {
              const Icon = TOOL_ICONS[t.id] ?? FileText;
              return (
                <li key={t.id}>
                  <CardLink href={href(t.id)} className="relative overflow-hidden p-7">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                    <span
                      aria-hidden
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[var(--shadow-brand)] mb-4"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-[--color-brand] mb-1">
                      {content.toolBadge}
                    </span>
                    <span className="block text-lg font-bold text-[--color-ink] group-hover:text-[--color-brand]">
                      {t.label}
                    </span>
                    <span className="block mt-1.5 text-sm text-[--color-muted]">
                      {t.desc}
                    </span>
                  </CardLink>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Mobile-app surface (demoted below the working tools). */}
      <Section tone="muted">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[--color-brand] text-center mb-6">
            {content.appBandEyebrow}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
            {content.featureBand.map((f) => {
              const Icon = FEATURE_ICONS[f.key] ?? Pencil;
              return (
                <li
                  key={f.key}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-[--color-surface] border border-[--color-border] shadow-[var(--shadow-card)] p-4 sm:p-5 hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                >
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[var(--shadow-brand)]"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <span className="font-bold text-[--color-ink]">{f.label}</span>
                  <span className="text-xs text-[--color-muted] text-center -mt-1.5">
                    {f.sub}
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              {content.hubsHeading}
            </h2>
            <p className="mt-3 text-lg text-[--color-muted]">{content.hubsLead}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.hubs.map((h) => (
              <li key={h.id}>
                <CardLink href={href(h.id)}>
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white text-[9px] font-extrabold tracking-wider mb-3"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    PDF
                  </span>
                  <span className="block text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {h.label}
                  </span>
                  <span className="block mt-2 text-sm text-[--color-muted]">
                    {h.desc}
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
            {content.guidesHeading}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.featuredGuides.map((g) => (
              <li key={g.id}>
                <CardLink href={href(g.id)} className="relative overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <span className="text-xs font-bold uppercase tracking-wide text-[--color-brand]">
                    {content.guideBadge}
                  </span>
                  <span className="block mt-2 text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {g.label}
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link
              href={href("guides")}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              {fmt(content.browseAllGuidesLabel, {
                count: formatNumber(locale, guideCount),
              })}
            </Link>
          </p>
        </Container>
      </Section>

      <AppCTA
        variant="final"
        heading={content.finalCtaHeading}
        sub={content.finalCtaSub}
        locale={locale}
      />

      <FAQ heading={sections.faqHeading} items={content.faq} />

      <JsonLd data={[softwareAppSchema(locale), faqSchema(content.faq, locale)]} />
    </>
  );
}
