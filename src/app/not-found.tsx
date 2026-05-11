import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";

const SUGGEST = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Merge PDF", href: "/merge-pdf" },
  { label: "Sign PDF", href: "/sign-pdf" },
];

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
        404
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-[--color-muted] max-w-xl">
        The page you’re looking for doesn’t exist or has moved. Try one of these
        instead:
      </p>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
        {SUGGEST.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-xl border border-[--color-border] bg-[--color-surface] p-4 hover:border-[--color-brand]"
            >
              <span className="font-semibold text-[--color-ink]">{s.label}</span>
              <span className="block text-sm text-[--color-muted]">
                Open guide →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <ButtonLink href="/" variant="primary" size="lg">
          Back to homepage
        </ButtonLink>
      </div>
    </Container>
  );
}
