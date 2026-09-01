import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { formatDate } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";
import type { LegalContent } from "@/types/content";

export function LegalPage({
  content,
  locale,
}: {
  content: LegalContent;
  locale: Locale;
}) {
  const { sections, breadcrumbs } = getSiteDictionary(locale);
  return (
    <Container size="md" className="py-12">
      <Breadcrumbs
        ariaLabel={breadcrumbs.ariaLabel}
        items={[
          { label: breadcrumbs.home, href: pathForWithFallback(locale, "") },
          { label: content.h1 },
        ]}
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        {content.h1}
      </h1>
      <p className="mt-3 text-sm text-[--color-muted]">
        {sections.lastUpdated}{" "}
        <time dateTime={content.updated}>{formatDate(locale, content.updated)}</time>
      </p>
      <Prose className="mt-8">
        {content.sections.map((s) => (
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
