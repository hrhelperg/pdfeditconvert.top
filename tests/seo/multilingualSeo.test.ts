/**
 * Gates for the multilingual SEO signals that are easy to break silently.
 *
 * Each block here corresponds to a defect that actually shipped, survived
 * lint/typecheck/build/test, and was only found by parsing built HTML. The
 * point of these tests is that the next locale merge cannot reintroduce any
 * of them.
 */
import { describe, it, expect } from "vitest";
import { brandedTitle } from "@/lib/seo";
import { isProceduralGuide } from "@/content/schema";
import {
  LOCALES,
  LOCALE_CODES,
  publishedLocaleCodes,
} from "@/lib/i18n/locales";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { ROUTE_IDS } from "@/lib/i18n/routeIds";
import { urlsetXml } from "@/lib/sitemap";
import { alternatesFor, xDefaultFor } from "@/lib/i18n/routeMap";

const PUBLISHED = publishedLocaleCodes();

describe("HowTo emission is locale-independent", () => {
  /**
   * The regression this exists for: `isProceduralGuide` used to test a
   * per-language title opener and fall back to the *English* regex for any
   * locale that had not supplied one. ja, id, pl, cs and tr were in neither
   * table, so all five emitted zero HowTo across ~380 pages — invisible to
   * every other gate in the suite.
   */
  const guideSlugs = ROUTE_IDS.filter((id) => id.startsWith("guides/"))
    .map((id) => id.replace(/^guides\//, ""))
    .filter((s) => s.length > 0);
  const proceduralSlugs = guideSlugs.filter(isProceduralGuide);

  it("marks every how-to-* guide as procedural", () => {
    const howToSlugs = guideSlugs.filter((s) => s.startsWith("how-to-"));
    expect(howToSlugs.length).toBeGreaterThan(70);
    for (const slug of howToSlugs) {
      expect(isProceduralGuide(slug), slug).toBe(true);
    }
  });

  it("does not mark explainers or comparisons as procedural", () => {
    // "How X works" and "PDF vs DOCX" have steps, but they explain rather
    // than instruct. A per-language `^cómo`/`^как` opener used to catch
    // these in es and ru while missing them in en, de and ar.
    for (const slug of ["pdf-vs-docx", "how-pdf-forms-work", "why-is-my-pdf-blurry"]) {
      expect(isProceduralGuide(slug), slug).toBe(false);
    }
  });

  it("answers identically for a guide regardless of locale", () => {
    // The signal is the English slug, which every localized guide stores
    // verbatim — so there is no per-locale branch left to diverge.
    expect(proceduralSlugs.length).toBeGreaterThan(70);
    for (const locale of PUBLISHED) {
      expect(guideSlugs.filter(isProceduralGuide), locale).toEqual(
        proceduralSlugs,
      );
    }
  });
});

describe("title branding", () => {
  it("never double-brands a title that already names the product", () => {
    const t = "PDF Editor — Edit, Convert, Sign and Scan PDFs on Mobile";
    expect(brandedTitle(t)).toBe(t);
    expect(brandedTitle(t).match(/PDF Editor/g)).toHaveLength(1);
  });

  it("appends the brand only when it fits the budget", () => {
    expect(brandedTitle("Merge PDF")).toBe("Merge PDF | PDF Editor");
    const long =
      "Extract Pages — Save Selected Pages as a Brand New Separate Document";
    expect(brandedTitle(long)).toBe(long);
  });

  it("measures CJK as full-width so ja titles are not under-counted", () => {
    // 40 CJK characters is ~80 Latin equivalents: over budget, so the
    // suffix must be withheld even though `.length` looks short.
    const ja = "PDFを圧縮する方法を初心者向けにわかりやすく解説します画質を落とさずに";
    expect(ja.length).toBeLessThan(60);
    expect(brandedTitle(ja)).toBe(ja);
  });
});

describe("locale configuration completeness", () => {
  it("gives every locale an Open Graph locale in language_TERRITORY form", () => {
    // og:locale is not BCP-47. An unrecognized value is discarded and the
    // share preview silently claims en_US.
    for (const code of LOCALE_CODES) {
      expect(LOCALES[code].ogLocale, code).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
    }
  });

  it("translates the hero availability caption and breadcrumb landmark", () => {
    // Both were hardcoded English in shared components; the availability
    // line shipped visibly untranslated on 108 non-English pages.
    const en = getSiteDictionary("en");
    for (const code of PUBLISHED) {
      const d = getSiteDictionary(code);
      expect(d.store.availability.length, code).toBeGreaterThan(0);
      expect(d.breadcrumbs.ariaLabel.length, code).toBeGreaterThan(0);
      if (code !== "en") {
        expect(d.store.availability, code).not.toBe(en.store.availability);
        expect(d.breadcrumbs.ariaLabel, code).not.toBe(en.breadcrumbs.ariaLabel);
      }
    }
  });
});

describe("sitemap hreflang annotations", () => {
  it("declares x-default, matching what the pages' own head declares", () => {
    const xml = urlsetXml("tools", "de");
    expect(xml).toContain('hreflang="x-default"');
    const xDefault = xDefaultFor("compress-pdf");
    expect(xDefault).toBeTruthy();
    expect(xml).toContain(`hreflang="x-default" href="${xDefault}"`);
  });

  it("emits exactly one more annotation than there are locale alternates", () => {
    const xml = urlsetXml("tools", "en");
    const expected = alternatesFor("compress-pdf").length + 1;
    const firstUrl = xml.slice(xml.indexOf("<url>"), xml.indexOf("</url>"));
    expect((firstUrl.match(/<xhtml:link/g) ?? []).length).toBe(expected);
  });
});
