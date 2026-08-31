import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/content/schema";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { LOCALES, publishedLocales, type Locale } from "@/lib/i18n/locales";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { SITE } from "@/content/site";

/**
 * The site's HTML document, parameterized by locale.
 *
 * Each published locale has its own root layout (route groups `(en)` and
 * `(pt-br)`) and both render this. That is what makes `lang` and `dir`
 * correct in the *served* HTML: a nested layout cannot own the `<html>`
 * element, and setting the attribute from client JavaScript after hydration
 * would leave every crawler and every screen reader reading the first paint
 * as English. Route groups do not appear in URLs, so this costs no English
 * URL a single character.
 *
 * It also stays fully static. Nothing here reads headers, cookies or
 * geolocation, so every page remains prerendered and CDN-cacheable and the
 * same URL always renders the same language.
 */
export function SiteDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const config = LOCALES[locale];
  const dictionary = getSiteDictionary(locale);

  const nav = dictionary.header.nav.map((item) => ({
    label: item.label,
    href: pathForWithFallback(locale, item.id),
  }));

  return (
    <html
      lang={config.htmlLang}
      dir={config.direction}
      className={GeistSans.className}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:inset-inline-start-2 focus:z-50 bg-[--color-brand] text-white px-4 py-2 rounded-lg"
        >
          {dictionary.skipToContent}
        </a>
        <Header
          nav={nav}
          homeHref={pathForWithFallback(locale, "")}
          homeAriaLabel={dictionary.header.homeAriaLabel}
          ctaLabel={dictionary.header.ctaLabel}
          ctaAriaLabel={dictionary.header.ctaAriaLabel}
          ctaHref={SITE.app.appStore}
          openMenu={dictionary.header.openMenu}
          closeMenu={dictionary.header.closeMenu}
          switcher={{
            label: dictionary.switcher.label,
            ariaLabel: dictionary.switcher.ariaLabel,
            currentLabel: dictionary.switcher.currentLabel,
            options: publishedLocales().map((l) => ({
              code: l.code,
              nativeName: l.nativeName,
              href: pathForWithFallback(l.code, ""),
              current: l.code === locale,
            })),
          }}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />

        <JsonLd data={[organizationSchema(), websiteSchema(locale)]} />

        {/*
          WebmasterID loads once, from the shared document, so it tracks
          every locale under one site id rather than one tracker per
          language. The tracker only ever sees the URL — no filename and no
          document content leaves the browser.
        */}
        <Script
          id="webmasterid-tracker"
          src="https://webmasterid.com/tracker.iife.min.js"
          data-wmid="wm_b6f7wz6b9y2o5qzo"
          data-endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
