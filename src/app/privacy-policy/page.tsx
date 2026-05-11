import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from "@/content/legal/privacy";

const route = getRoute("/privacy-policy");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function PrivacyPage() {
  return (
    <Container size="md" className="py-12">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-[--color-muted]">
        Last updated{" "}
        <time dateTime={PRIVACY_UPDATED}>
          {new Date(PRIVACY_UPDATED).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>
      <Prose className="mt-8">
        {PRIVACY_SECTIONS.map((s) => (
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
