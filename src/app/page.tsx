import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";
import { softwareAppSchema, faqSchema } from "@/content/schema";
import { GUIDES } from "@/content/guides";
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

const route = getRoute("/");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

const TOOLS: { label: string; href: string; desc: string; icon: LucideIcon }[] =
  [
    {
      label: "Image to PDF",
      href: "/image-to-pdf",
      desc: "Combine JPG, PNG, WebP into one PDF.",
      icon: ImageIcon,
    },
    {
      label: "Merge PDF",
      href: "/merge-pdf",
      desc: "Combine PDFs into one document.",
      icon: Combine,
    },
    {
      label: "Split PDF",
      href: "/split-pdf",
      desc: "Extract pages by range.",
      icon: Scissors,
    },
    {
      label: "Rotate PDF",
      href: "/rotate-pdf",
      desc: "Fix sideways pages.",
      icon: RotateCw,
    },
    {
      label: "PDF to images",
      href: "/pdf-to-images",
      desc: "Export pages as PNG or JPG.",
      icon: Images,
    },
    {
      label: "Add watermark",
      href: "/add-watermark-to-pdf",
      desc: "Stamp text across every page.",
      icon: Stamp,
    },
    {
      label: "Compress PDF",
      href: "/compress-pdf",
      desc: "Shrink file size for email and upload.",
      icon: Minimize2,
    },
    {
      label: "PDF to Word",
      href: "/pdf-to-word",
      desc: "Extract text into an editable .docx.",
      icon: FileText,
    },
    {
      label: "Word to PDF",
      href: "/word-to-pdf",
      desc: "Turn a .docx or .txt into a clean PDF.",
      icon: FileOutput,
    },
    {
      label: "Reorder PDF pages",
      href: "/reorder-pdf-pages",
      desc: "Preview and rearrange pages, then download.",
      icon: ArrowUpDown,
    },
    {
      label: "Extract PDF pages",
      href: "/extract-pdf-pages",
      desc: "Save selected pages or ranges as a new PDF.",
      icon: FileStack,
    },
  ];

const TRUST = [
  "Files are processed locally in your browser",
  "No upload, no account, no watermark",
  "Free — works on mobile and desktop",
];

const HUBS = [
  { label: "PDF Editor", href: "/pdf-editor", desc: "Edit text, images and pages." },
  { label: "PDF Converter", href: "/pdf-converter", desc: "Convert to Word, JPG, PNG and more." },
  { label: "Compress PDF", href: "/compress-pdf", desc: "Shrink files without losing quality." },
  { label: "Sign PDF", href: "/sign-pdf", desc: "Add a signature from your phone." },
  { label: "Scan to PDF", href: "/scan-to-pdf", desc: "Turn paper into clean PDFs." },
  { label: "PDF Security", href: "/pdf-security", desc: "Protect documents with a password." },
  { label: "PDF for Business", href: "/pdf-for-business", desc: "Contracts and invoices on the go." },
  { label: "PDF for Students", href: "/pdf-for-students", desc: "Notes, highlights and study guides." },
  { label: "PDF Forms", href: "/pdf-forms", desc: "Fill, sign and save fillable PDFs." },
];

const FEATURE_BAND: { icon: LucideIcon; label: string; sub: string }[] = [
  { icon: Pencil, label: "Edit", sub: "Text, images, pages" },
  { icon: Files, label: "Convert", sub: "Word, JPG, PNG" },
  { icon: ShieldCheck, label: "Secure", sub: "Password protect" },
  { icon: ScanLine, label: "Scan", sub: "Paper to PDF" },
  { icon: LayoutGrid, label: "Organize", sub: "Reorder, split" },
];

const GUIDE_COUNT = Object.keys(GUIDES).length;

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
          style={{ background: "radial-gradient(closest-side, rgba(229,9,20,0.40), transparent)" }}
        />
        <Container className="py-8 md:py-12">
          <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(0,360px)] gap-8 lg:gap-12 lg:items-start">
            {/* The actual converter — dominant; first in DOM = first on mobile. */}
            <div>
              <ImageToPdfTool />
            </div>

            {/* Supporting rail: H1 (SEO) + concise value props. */}
            <div className="lg:pt-2">
              <p
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                Free browser PDF tools
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] text-[--color-ink]">
                Convert, Merge &amp; Edit PDFs{" "}
                <span className="text-[--color-brand]">in Seconds</span>
              </h1>
              <p className="mt-3 text-sm md:text-base text-[--color-muted] leading-relaxed">
                Free browser-based PDF tools with private, local processing —
                nothing is uploaded to a server.
              </p>
              <ul className="mt-6 space-y-2.5">
                {TRUST.map((t) => (
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
                  href="/pdf-tools"
                  className="text-sm font-semibold text-[--color-ink] hover:text-[--color-brand]"
                >
                  Browse all PDF tools →
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
              Free, in your browser
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              Every PDF tool you need — no upload required.
            </h2>
            <p className="mt-3 text-lg text-[--color-muted]">
              Merge, split, rotate, watermark and convert PDFs without leaving
              the page. Every tool runs locally in your browser.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.href}>
                  <CardLink href={t.href} className="relative overflow-hidden p-7">
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
                      Free tool
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
            Also on iPhone &amp; Android · five everyday tools
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
            {FEATURE_BAND.map(({ icon: Icon, label, sub }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-[--color-surface] border border-[--color-border] shadow-[var(--shadow-card)] p-4 sm:p-5 hover:shadow-[var(--shadow-card-hover)] transition-shadow"
              >
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[var(--shadow-brand)]"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <span className="font-bold text-[--color-ink]">{label}</span>
                <span className="text-xs text-[--color-muted] text-center -mt-1.5">
                  {sub}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
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
            Most-read guides
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_GUIDES.map((g) => (
              <li key={g.href}>
                <CardLink href={g.href} className="relative overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <span className="text-xs font-bold uppercase tracking-wide text-[--color-brand]">
                    Guide
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
              href="/guides"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              Browse all {GUIDE_COUNT} PDF guides →
            </Link>
          </p>
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
