import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { getRoute, routesByCategory } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { AppCTA } from "@/components/sections/AppCTA";
import { PrivacyNote } from "@/components/tools/primitives/PrivacyNote";

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
      <AppCTA variant="final" heading="Need PDF tools on mobile?" sub="Get the PDF Editor app for iPhone and Android — free." />
    </>
  );
}
