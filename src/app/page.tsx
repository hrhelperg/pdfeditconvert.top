import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import { Hero } from "@/components/sections/Hero";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareAppSchema, faqSchema } from "@/content/schema";
import { SITE } from "@/content/site";
import {
  Pencil,
  Files,
  ShieldCheck,
  ScanLine,
  LayoutGrid,
} from "lucide-react";

const route = getRoute("/");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

const HUBS = [
  { label: "PDF Editor", href: "/pdf-editor", desc: "Edit text, images and pages." },
  { label: "PDF Converter", href: "/pdf-converter", desc: "Convert to Word, JPG, PNG and more." },
  { label: "Compress PDF", href: "/compress-pdf", desc: "Shrink files without losing quality." },
  { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into one." },
  { label: "Split PDF", href: "/split-pdf", desc: "Separate pages into new files." },
  { label: "Sign PDF", href: "/sign-pdf", desc: "Add a signature from your phone." },
  { label: "Scan to PDF", href: "/scan-to-pdf", desc: "Turn paper into clean PDFs." },
  { label: "PDF Security", href: "/pdf-security", desc: "Protect documents with a password." },
  { label: "PDF for Business", href: "/pdf-for-business", desc: "Contracts and invoices on the go." },
  { label: "PDF for Students", href: "/pdf-for-students", desc: "Notes, highlights and study guides." },
];

const FEATURED_GUIDES = [
  { label: "How to edit a PDF on iPhone", href: "/guides/how-to-edit-pdf-on-iphone" },
  { label: "How to edit a PDF on Android", href: "/guides/how-to-edit-pdf-on-android" },
  { label: "How to compress a PDF", href: "/guides/how-to-compress-pdf" },
  { label: "How to sign a PDF on your phone", href: "/guides/how-to-sign-pdf-on-phone" },
];

const FAQ_ITEMS = [
  {
    q: "Is PDF Editor free?",
    a: "Yes. The core editing, scanning, compressing and signing features are free. Some advanced features unlock with PDF Editor Pro.",
  },
  {
    q: "Does it work without an internet connection?",
    a: "Core editing, page management, signing and compression all work offline. Cloud sync and OCR may require a connection.",
  },
  {
    q: "Which devices are supported?",
    a: "PDF Editor is available on iPhone and iPad (iOS 16+) and Android phones and tablets (Android 9+).",
  },
  {
    q: "Are my files private?",
    a: "Yes. Files stay on your device unless you choose to share them. We do not upload your documents to our servers.",
  },
  {
    q: "Can I use this for legal documents?",
    a: "Many users sign and share contracts using PDF Editor. We don't provide legal advice — check local rules on electronic signatures before relying on one for critical documents.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={SITE.features.join(" · ")}
        h1="Edit PDFs anywhere. From your phone."
        highlight="phone"
        lead={`${SITE.tagline}. Scan paper, sign contracts, compress files and convert formats — all from a single app on iOS and Android.`}
        secondaryHref="/guides"
        secondaryLabel="Read the guides"
      />

      <Section>
        <Container>
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            {[
              { icon: Pencil, label: "Edit" },
              { icon: Files, label: "Convert" },
              { icon: ShieldCheck, label: "Secure" },
              { icon: ScanLine, label: "Scan" },
              { icon: LayoutGrid, label: "Organize" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2.5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[--color-brand-soft]">
                  <Icon className="h-6 w-6 text-[--color-brand]" aria-hidden />
                </span>
                <span className="font-semibold text-[--color-ink]">{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              Everything you do with PDFs — explained.
            </h2>
            <p className="mt-3 text-lg text-[--color-muted]">
              Practical guides and workflows for the things people actually do
              with PDFs every day.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HUBS.map((h) => (
              <li key={h.href}>
                <CardLink href={h.href}>
                  <span className="text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
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
            Most-read guides
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_GUIDES.map((g) => (
              <li key={g.href}>
                <CardLink href={g.href}>
                  <span className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
                    Guide
                  </span>
                  <span className="block mt-2 text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {g.label}
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AppCTA
        variant="final"
        heading="Take PDF Editor with you."
        sub="Free on iOS and Android. No account required to get started."
      />

      <FAQ items={FAQ_ITEMS} />

      <JsonLd data={[softwareAppSchema(), faqSchema(FAQ_ITEMS)]} />
    </>
  );
}
