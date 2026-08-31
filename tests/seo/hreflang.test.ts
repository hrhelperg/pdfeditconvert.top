import { describe, expect, it } from "vitest";
import { seo } from "@/lib/seo";
import { ROUTE_IDS } from "@/lib/i18n/routeIds";
import { publishedLocaleCodes } from "@/lib/i18n/locales";
import { absoluteUrl, requireRoute } from "@/lib/i18n/routeMap";

const PUBLISHED = publishedLocaleCodes();

function languagesFor(locale: (typeof PUBLISHED)[number], id: (typeof ROUTE_IDS)[number]) {
  const route = requireRoute(locale, id);
  const meta = seo({
    title: route.title,
    description: route.description,
    path: route.path,
    locale,
    routeId: id,
  });
  return meta.alternates?.languages as Record<string, string> | undefined;
}

describe("hreflang emission", () => {
  // Regression: the home route id is "", which a truthiness check treats as
  // absent. That silently stripped hreflang from the highest-value page in
  // both locales while every other route looked correct.
  it("emits hreflang on the home route, whose id is the empty string", () => {
    for (const locale of PUBLISHED) {
      const languages = languagesFor(locale, "");
      expect(languages, `home hreflang missing for ${locale}`).toBeDefined();
      for (const published of PUBLISHED) {
        expect(languages).toHaveProperty(published);
      }
      expect(languages).toHaveProperty("x-default");
    }
  });

  it("emits reciprocal hreflang for every route in every published locale", () => {
    for (const id of ROUTE_IDS) {
      for (const locale of PUBLISHED) {
        const languages = languagesFor(locale, id);
        expect(languages, `hreflang missing for ${locale} ${id || "(home)"}`).toBeDefined();
        for (const published of PUBLISHED) {
          expect(languages![published]).toBe(
            absoluteUrl(requireRoute(published, id).path),
          );
        }
      }
    }
  });

  it("self-canonicalizes every localized route", () => {
    for (const id of ROUTE_IDS) {
      for (const locale of PUBLISHED) {
        const route = requireRoute(locale, id);
        const meta = seo({
          title: route.title,
          description: route.description,
          path: route.path,
          locale,
          routeId: id,
        });
        expect(meta.alternates?.canonical).toBe(
          `https://www.pdfeditconvert.top${route.path}`,
        );
        // The canonical and the self-referential hreflang must name the same
        // URL, or the two signals disagree on the home page's trailing slash.
        const languages = meta.alternates?.languages as Record<string, string>;
        expect(new URL(languages[locale]).pathname.replace(/\/$/, "")).toBe(
          new URL(String(meta.alternates?.canonical)).pathname.replace(/\/$/, ""),
        );
      }
    }
  });
});
