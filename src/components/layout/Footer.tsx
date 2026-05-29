import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { BrandMark } from "@/components/primitives/BrandMark";

const PRODUCT = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "PDF Converter", href: "/pdf-converter" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Sign PDF", href: "/sign-pdf" },
  { label: "Scan to PDF", href: "/scan-to-pdf" },
];

const LEARN = [
  { label: "All guides", href: "/guides" },
  { label: "Convert PDF to Word", href: "/guides/how-to-convert-pdf-to-word" },
  { label: "Convert JPG to PDF", href: "/guides/how-to-convert-jpg-to-pdf" },
  {
    label: "Reduce PDF size for email",
    href: "/guides/how-to-reduce-pdf-file-size-for-email",
  },
  { label: "Edit PDF on iPhone", href: "/guides/how-to-edit-pdf-on-iphone" },
  { label: "Merge PDFs", href: "/guides/how-to-merge-pdf-files" },
  { label: "PDF vs DOCX", href: "/compare/pdf-vs-docx" },
];

const COMPANY = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const TOOLS = [
  { label: "All free tools", href: "/pdf-tools" },
  { label: "Image to PDF", href: "/image-to-pdf" },
  { label: "Merge PDF", href: "/merge-pdf" },
  { label: "Split PDF", href: "/split-pdf" },
  { label: "Rotate PDF", href: "/rotate-pdf" },
  { label: "PDF to images", href: "/pdf-to-images" },
  { label: "Add watermark", href: "/add-watermark-to-pdf" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[--color-ink] text-white">
      <div aria-hidden className="h-1 w-full bg-[var(--gradient-brand)]" />

      {/* Get-the-app top panel */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-brand-deep)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <Container className="py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <BrandMark size={56} className="h-14 w-14" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">
                PDF Editor app
              </p>
              <p className="mt-1 text-xl md:text-2xl font-extrabold tracking-tight">
                Take PDF Editor with you.
              </p>
              <p className="mt-1 text-sm text-white/80">
                Free on iPhone and Android. No account required.
              </p>
            </div>
          </div>
          <div className="md:shrink-0">
            <StoreButtons size="lg" />
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <BrandMark size={32} className="h-8 w-8" />
              <span className="text-lg font-bold">
                <span className="text-[--color-brand]">PDF</span>{" "}
                <span className="text-white">Editor</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              All-in-One PDF Solution for Work, Study &amp; Life. Edit, convert,
              sign and scan PDFs from your phone.
            </p>
          </div>

          <FooterCol title="Product" items={PRODUCT} />
          <FooterCol title="Learn" items={LEARN} />
          <FooterCol title="Company" items={COMPANY} />
          <FooterCol title="Free tools" items={TOOLS} />
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/60">
          <p>© {year} hrhelperg s.r.o. All rights reserved.</p>
          <p>
            Husitská 502/36, Žižkov, 130 00 Praha 3 ·{" "}
            <a
              href="mailto:info@hrhelperg.com"
              className="hover:text-white"
            >
              info@hrhelperg.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
