import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { SITE } from "@/content/site";
import type { Locale } from "@/lib/i18n/locales";
import type { ContactContent } from "@/types/content";

/**
 * Contact page.
 *
 * The email address, the legal entity and the registered office are the
 * same in every language and are rendered from SITE, not from the
 * translated content — an operator's identity is not copy.
 *
 * The legal sentence is one whole translatable string with {privacy} and
 * {terms} placeholders rather than three fragments joined around two
 * `<Link>`s, so a translator can move the links wherever their language
 * needs them.
 */
export function ContactPage({
  content,
  locale,
}: {
  content: ContactContent;
  locale: Locale;
}) {
  const { breadcrumbs, store } = getSiteDictionary(locale);
  const homeHref = pathForWithFallback(locale, "");

  const links: Record<string, { href: string; label: string }> = {
    privacy: {
      href: pathForWithFallback(locale, "privacy-policy"),
      label: content.privacyLinkLabel,
    },
    terms: {
      href: pathForWithFallback(locale, "terms"),
      label: content.termsLinkLabel,
    },
  };

  return (
    <Container size="md" className="py-12">
      <Breadcrumbs
        items={[
          { label: breadcrumbs.home, href: homeHref },
          { label: content.h1 },
        ]}
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        {content.h1}
      </h1>
      <p className="mt-4 text-lg text-[--color-muted] max-w-xl">{content.lead}</p>

      <ul className="mt-10 space-y-5 text-[--color-ink]">
        <li className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-brand-soft] text-[--color-brand]">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">{content.emailLabel}</p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="text-[--color-brand] hover:underline"
            >
              {SITE.contactEmail}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-brand-soft] text-[--color-brand]">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">{content.officeLabel}</p>
            <address className="not-italic text-[--color-muted]">
              {SITE.company.legalName}
              <br />
              {SITE.company.address.street}, {SITE.company.address.district}
              <br />
              {SITE.company.address.postalCode} {SITE.company.address.city},{" "}
              {SITE.company.address.country}
            </address>
          </div>
        </li>
      </ul>

      <div className="mt-12">
        {content.sections.map((s, i) => (
          <div key={s.heading} className={i === 0 ? "" : "mt-10"}>
            <h2 className="text-xl font-bold text-[--color-ink] mb-3">
              {s.heading}
            </h2>
            <p className="text-[--color-muted] max-w-2xl leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}

        <p className="mt-6 text-[--color-muted] max-w-2xl leading-relaxed">
          {renderWithLinks(content.legalSentence, links)}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-[--color-ink] mb-4">
          {content.tryAppHeading}
        </h2>
        <StoreButtons
          size="md"
          appStoreLabel={store.appStoreAria}
          googlePlayLabel={store.googlePlayAria}
        />
      </div>
    </Container>
  );
}

/** Splits a sentence on {name} placeholders and substitutes real links. */
function renderWithLinks(
  template: string,
  links: Record<string, { href: string; label: string }>,
) {
  return template.split(/(\{\w+\})/g).map((part, i) => {
    const match = /^\{(\w+)\}$/.exec(part);
    const link = match ? links[match[1]] : undefined;
    if (!link) return <span key={i}>{part}</span>;
    return (
      <Link key={i} href={link.href} className="text-[--color-brand] hover:underline">
        {link.label}
      </Link>
    );
  });
}
