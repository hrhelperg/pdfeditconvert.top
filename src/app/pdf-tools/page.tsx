import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { getRoute, routesByCategory } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { AppCTA } from "@/components/sections/AppCTA";
import { PrivacyNote } from "@/components/tools/primitives/PrivacyNote";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";
import { ClusterGuides } from "@/components/sections/ClusterGuides";
import { clusterLinks, guidesForHub } from "@/lib/cluster";

const HUB_LINKS = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "PDF Converter", href: "/pdf-converter" },
  { label: "PDF Forms", href: "/pdf-forms" },
  { label: "Sign PDF", href: "/sign-pdf" },
  { label: "PDF Security", href: "/pdf-security" },
  { label: "Scan to PDF", href: "/scan-to-pdf" },
  { label: "PDF apps vs online PDF tools", href: "/compare/pdf-app-vs-online-pdf-tools" },
];

const route = getRoute("/pdf-tools");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  const tools = routesByCategory("tool").filter((r) => r.path !== "/pdf-tools");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "Free PDF tools", path: "/pdf-tools" },
          ]),
        ]}
      />
      <Container className="pt-4">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Free PDF tools" }]}
        />
      </Container>
      <Hero
        eyebrow="Free PDF tools"
        h1="Browser-based PDF tools — your files never leave your device."
        highlight="never leave"
        lead="Merge, split, rotate, watermark and convert PDFs without uploading anything. All processing runs locally in your browser, free, no signup."
      />
      <Section>
        <Container size="md">
          <PrivacyNote>
            Every tool on this page processes your files locally in your browser. Nothing is uploaded to our servers and nothing is stored.
          </PrivacyNote>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-2xl border border-[--color-border] bg-[--color-surface] p-5 shadow-[var(--shadow-card)] hover:border-[--color-brand]"
                >
                  <h3 className="font-bold text-[--color-ink] mb-1">{r.title.split("—")[0]?.trim() ?? r.title}</h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">{r.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      {/*
        /pdf-tools is a Tier-1 entry point but linked only the eleven tool
        pages, making it the thinnest hub on the site. The 22 guides that name
        it as their parentHub belong here, and so does a route up to the
        topical hubs.
      */}
      <ClusterGuides
        heading={`${guidesForHub("/pdf-tools").length} guides on browser-based PDF work`}
        items={clusterLinks("/pdf-tools")}
        moreHref="/guides"
        moreLabel="Browse every PDF guide"
      />

      <Section tone="muted">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
            Going further with PDFs
          </h2>
          <p className="text-[--color-muted] max-w-2xl mb-6">
            These tools cover one-off jobs in the browser. For the workflows
            behind them — editing, converting, signing, securing and scanning —
            start from the topic hubs.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {HUB_LINKS.map((h) => (
              <li key={h.href}>
                <Link
                  href={h.href}
                  className="block rounded-xl border border-[--color-border] bg-[--color-surface] px-4 py-3 font-medium text-[--color-ink] hover:border-[--color-brand]"
                >
                  {h.label} →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AppCTA variant="final" heading="Need PDF tools on mobile?" sub="Get the PDF Editor app for iPhone and Android — free." />
    </>
  );
}
