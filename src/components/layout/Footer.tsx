import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { BrandMark } from "@/components/primitives/BrandMark";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { fmt } from "@/lib/i18n/format";
import type { NavLink } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { SITE } from "@/content/site";

/**
 * Site footer.
 *
 * Link targets are route ids resolved through the locale's route map, so a
 * Portuguese page's footer links to Portuguese pages. Sending a reader from
 * a translated page back into English is the fastest way to make a locale
 * feel like a veneer over an English site — and it strands the localized
 * pages with no internal links pointing at them.
 *
 * The company address, the legal entity, the contact address and the two
 * store URLs are identical in every locale. They are facts, not copy.
 */
export function Footer({ locale }: { locale: Locale }) {
  const dictionary = getSiteDictionary(locale);
  const { footer } = dictionary;
  const year = new Date().getFullYear();

  const resolve = (items: readonly NavLink[]) =>
    items.map((item) => ({
      label: item.label,
      href: pathForWithFallback(locale, item.id),
    }));

  const company = [
    ...resolve(footer.company),
    { label: footer.sitemapLabel, href: footer.sitemapHref },
  ];

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
                {footer.appEyebrow}
              </p>
              <p className="mt-1 text-xl md:text-2xl font-extrabold tracking-tight">
                {footer.appHeading}
              </p>
              <p className="mt-1 text-sm text-white/80">{footer.appSub}</p>
            </div>
          </div>
          <div className="md:shrink-0">
            <StoreButtons
              size="lg"
              appStoreLabel={dictionary.store.appStoreAria}
              googlePlayLabel={dictionary.store.googlePlayAria}
            />
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Link
              href={pathForWithFallback(locale, "")}
              className="flex items-center gap-2.5"
            >
              <BrandMark size={32} className="h-8 w-8" />
              <span className="text-lg font-bold">
                <span className="text-[--color-brand]">PDF</span>{" "}
                <span className="text-white">Editor</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          <FooterCol title={footer.columnProduct} items={resolve(footer.product)} />
          <FooterCol title={footer.columnLearn} items={resolve(footer.learn)} />
          <FooterCol title={footer.columnCompany} items={company} />
          <FooterCol title={footer.columnTools} items={resolve(footer.tools)} />
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/60">
          <p>{fmt(footer.rights, { year })}</p>
          <p>
            {SITE.company.address.street}, {SITE.company.address.district},{" "}
            {SITE.company.address.postalCode} {SITE.company.address.city} ·{" "}
            <a href={`mailto:${SITE.contactEmail}`} className="hover:text-white">
              {SITE.contactEmail}
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
            <Link href={i.href} className="text-sm text-white/70 hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
