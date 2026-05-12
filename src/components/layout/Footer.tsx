import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { StoreButtons } from "@/components/sections/StoreButtons";

const PRODUCT = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "PDF Converter", href: "/pdf-converter" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Sign PDF", href: "/sign-pdf" },
  { label: "Scan to PDF", href: "/scan-to-pdf" },
];

const LEARN = [
  { label: "All guides", href: "/guides" },
  { label: "Edit PDF on iPhone", href: "/guides/how-to-edit-pdf-on-iphone" },
  { label: "Edit PDF on Android", href: "/guides/how-to-edit-pdf-on-android" },
  { label: "Compress PDF", href: "/guides/how-to-compress-pdf" },
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
      <div aria-hidden className="h-[3px] w-full bg-[var(--gradient-brand)]" />
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[--color-brand] text-white text-[10px] font-bold leading-none"
              >
                PDF
              </span>
              <span className="text-lg font-bold">
                <span className="text-[--color-brand]">PDF</span>{" "}
                <span className="text-white">Editor</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              All-in-One PDF Solution for Work, Study &amp; Life. Edit, convert,
              sign and scan PDFs from your phone.
            </p>
            <div className="mt-6">
              <StoreButtons size="md" />
            </div>
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
