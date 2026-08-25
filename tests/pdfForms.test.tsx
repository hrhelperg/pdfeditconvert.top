import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { GUIDES } from "@/content/guides";
import { ROUTES, getRoute, SITE_URL } from "@/lib/routes";
import { sitemapUrls } from "./helpers/sitemapUrls";
import { HubPage } from "@/components/sections/HubPage";
import formsHub from "@/content/hubs/pdf-forms";

// The Phase 3 — PDF Forms Authority Cluster. These are the slugs that
// should exist after Phase 3; the four intentionally-skipped slugs
// (sign-a-pdf-form-on-iphone/android, complete-without-a-computer,
// collecting-client-information) are NOT here by design.
const PHASE3_SLUGS = [
  // Group 1 — fundamentals
  "what-is-a-pdf-form",
  "editable-pdf-vs-fillable-pdf",
  "how-pdf-forms-work",
  "can-you-edit-a-pdf-form",
  "how-to-fill-out-a-pdf-form",
  "how-to-save-a-filled-pdf-form",
  "why-cant-i-type-in-a-pdf-form",
  "how-to-create-a-fillable-pdf",
  "how-to-share-a-pdf-form",
  "how-to-print-a-filled-pdf-form",
  // Group 2 — mobile
  "how-to-fill-pdf-forms-on-iphone",
  "how-to-fill-pdf-forms-on-android",
  "how-to-send-a-completed-pdf-form",
  "how-to-fill-government-pdf-forms-on-phone",
  "mobile-pdf-form-workflow",
  "best-pdf-form-app-for-iphone",
  "best-pdf-form-app-for-android",
  // Group 3 — business
  "pdf-forms-for-small-business",
  "how-to-send-client-intake-forms",
  "how-to-use-pdf-forms-for-contracts",
  "how-to-manage-pdf-application-forms",
  "pdf-forms-for-consultants",
  "pdf-forms-for-agencies",
  "pdf-forms-for-freelancers",
  "document-collection-workflows-with-pdf",
  "pdf-form-best-practices",
  // Group 4 — problems
  "pdf-form-not-working",
  "pdf-form-fields-missing",
  "why-pdf-form-wont-save",
  "why-pdf-form-is-read-only",
  "pdf-form-not-printing-correctly",
  "pdf-form-font-problems",
  "pdf-form-formatting-issues",
  "pdf-form-submission-errors",
  "pdf-form-compatibility-problems",
  "fix-pdf-form-errors",
] as const;

const HUB_PATH = "/pdf-forms";
const routePaths = new Set(ROUTES.map((r) => r.path));

describe("PDF Forms cluster — registration", () => {
  it("registers all 36 Phase 3 guides", () => {
    expect(PHASE3_SLUGS).toHaveLength(36);
    for (const slug of PHASE3_SLUGS) {
      expect(GUIDES[slug], `${slug} missing from GUIDES`).toBeTruthy();
      expect(GUIDES[slug].slug, `${slug} key/slug mismatch`).toBe(slug);
    }
  });

  it("has a PDF Forms hub route in the hub category", () => {
    const hub = getRoute(HUB_PATH);
    expect(hub.category).toBe("hub");
    expect(hub.title).toBeTruthy();
    expect(hub.description).toBeTruthy();
    expect(formsHub.slug).toBe("pdf-forms");
  });

  it("registers a route + sitemap entry for every form guide and the hub", () => {
    const urls = new Set(sitemapUrls());
    for (const slug of [...PHASE3_SLUGS]) {
      const route = getRoute(`/guides/${slug}`);
      expect(route.category, `${slug} category`).toBe("guide");
      expect(
        urls.has(`${SITE_URL}/guides/${slug}`),
        `${slug} missing from sitemap`,
      ).toBe(true);
    }
    expect(
      urls.has(`${SITE_URL}${HUB_PATH}`),
      "hub missing from sitemap",
    ).toBe(true);
  });
});

describe("PDF Forms cluster — internal linking", () => {
  it("every form guide hangs off the PDF Forms hub", () => {
    for (const slug of PHASE3_SLUGS) {
      expect(GUIDES[slug].parentHub.path, `${slug} parentHub`).toBe(HUB_PATH);
    }
  });

  it("every form guide links to at least one other PDF Forms page", () => {
    const formsPaths = new Set<string>([
      HUB_PATH,
      ...PHASE3_SLUGS.map((s) => `/guides/${s}`),
    ]);
    const missing: string[] = [];
    for (const slug of PHASE3_SLUGS) {
      const g = GUIDES[slug];
      // parentHub is always the hub; require at least one *related* forms link too
      const relatedFormsLinks = g.related.filter((r) => formsPaths.has(r.path));
      if (relatedFormsLinks.length === 0) missing.push(slug);
    }
    expect(missing, `no sibling forms link: ${missing.join(", ")}`).toEqual([]);
  });

  it("every related link resolves to a known route", () => {
    const broken: string[] = [];
    for (const slug of PHASE3_SLUGS) {
      const g = GUIDES[slug];
      for (const path of [g.parentHub.path, ...g.related.map((r) => r.path)]) {
        if (!routePaths.has(path)) broken.push(`${slug} -> ${path}`);
      }
    }
    expect(broken, `broken links: ${broken.join(", ")}`).toEqual([]);
  });

  it("the hub links to known routes only", () => {
    const broken = formsHub.related
      .map((r) => r.path)
      .filter((p) => !routePaths.has(p));
    expect(broken, `hub broken links: ${broken.join(", ")}`).toEqual([]);
  });
});

describe("PDF Forms cluster — content quality", () => {
  it("each form guide is dated, with steps, tips and FAQs", () => {
    for (const slug of PHASE3_SLUGS) {
      const g = GUIDES[slug];
      expect(g.updated, `${slug} updated`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.intro.length, `${slug} intro`).toBeGreaterThanOrEqual(2);
      expect(g.steps.length, `${slug} steps`).toBeGreaterThanOrEqual(4);
      expect(g.tips.length, `${slug} tips`).toBeGreaterThanOrEqual(3);
      expect(g.faq.length, `${slug} faq`).toBeGreaterThanOrEqual(4);
      expect(g.mobileNote, `${slug} mobileNote`).toBeTruthy();
    }
  });

  it("each form guide has a unique title and description in routes", () => {
    const titles = PHASE3_SLUGS.map((s) => getRoute(`/guides/${s}`).title);
    const descriptions = PHASE3_SLUGS.map(
      (s) => getRoute(`/guides/${s}`).description,
    );
    expect(new Set(titles).size, "duplicate form titles").toBe(titles.length);
    expect(new Set(descriptions).size, "duplicate form descriptions").toBe(
      descriptions.length,
    );
  });
});

describe("PDF Forms hub — rendering", () => {
  it("renders the hub H1 and both app store CTAs", () => {
    const { container } = render(<HubPage content={formsHub} />);
    const h1 = container.querySelector("h1");
    expect(h1?.textContent).toContain("PDF form");
    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs.some((h) => h?.includes("apps.apple.com"))).toBe(true);
    expect(
      hrefs.some((h) => h?.includes("com.helperg.editor.documents")),
    ).toBe(true);
  });

  it("emits JSON-LD structured data on the hub", () => {
    const { container } = render(<HubPage content={formsHub} />);
    const ld = container.querySelectorAll('script[type="application/ld+json"]');
    expect(ld.length).toBeGreaterThan(0);
  });
});
