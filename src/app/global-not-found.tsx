import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { NotFoundBody, NOT_FOUND_EN } from "@/components/sections/NotFoundBody";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/locales";
import "./globals.css";

/**
 * 404 for URLs that match no route at all.
 *
 * Splitting the site into one root layout per locale removed the single
 * layout Next.js used to compose a global 404 from, so an unmatched URL
 * fell back to the framework's unstyled default — a real regression from
 * the branded 404 this site had. `global-not-found` is the documented
 * answer for exactly this case (multiple root layouts). It bypasses normal
 * rendering, so it brings its own document, font and stylesheet.
 *
 * It answers in the default locale: a URL that matches nothing carries no
 * locale to honour, and guessing one from a header would make the response
 * vary per request — the one thing this architecture refuses to do.
 */
export const metadata: Metadata = {
  title: "404 — Page not found | PDF Editor",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  const config = LOCALES[DEFAULT_LOCALE];
  return (
    <html
      lang={config.htmlLang}
      dir={config.direction}
      className={GeistSans.className}
    >
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          <NotFoundBody copy={NOT_FOUND_EN} locale={DEFAULT_LOCALE} />
        </main>
      </body>
    </html>
  );
}
