import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { TERMS_SECTIONS, TERMS_UPDATED } from "@/content/legal/terms";

const route = getRoute("/terms");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function TermsPage() {
  return (
    <Container size="md" className="py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-[--color-muted]">
        Last updated{" "}
        <time dateTime={TERMS_UPDATED}>
          {new Date(TERMS_UPDATED).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>
      <Prose className="mt-8">
        {TERMS_SECTIONS.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </Prose>
    </Container>
  );
}
