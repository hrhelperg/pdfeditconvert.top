import { Container } from "@/components/primitives/Container";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { formatDate } from "@/lib/i18n/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";

export function ArticleLayout({
  crumbs,
  h1,
  updated,
  updatedLabel = "Last updated",
  locale = DEFAULT_LOCALE,
  children,
}: {
  crumbs: Crumb[];
  h1: string;
  updated?: string;
  updatedLabel?: string;
  locale?: Locale;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-10 pb-4">
      <Container size="md">
        <Breadcrumbs items={crumbs} />
        <div className="brand-stripe mt-6" aria-hidden />
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[--color-ink]">
          {h1}
        </h1>
        {updated ? (
          <p className="mt-3 text-sm text-[--color-muted]">
            {updatedLabel}{" "}
            <time dateTime={updated}>{formatDate(locale, updated)}</time>
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </Container>
    </article>
  );
}
