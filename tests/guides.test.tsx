import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { GUIDES } from "@/content/guides";
import { ROUTES, getRoute } from "@/lib/routes";
import sitemap from "@/app/sitemap";
import { GuidePage } from "@/components/sections/GuidePage";

const entries = Object.entries(GUIDES);
const routePaths = new Set(ROUTES.map((r) => r.path));
const routeByPath = new Map(ROUTES.map((r) => [r.path, r]));

describe("guides registry integrity", () => {
  it("has the full cluster registered", () => {
    // Waves 1 & 2 (108) + Phase 3 PDF Forms cluster (36) = 144
    expect(entries.length).toBeGreaterThanOrEqual(144);
  });

  it("each map key matches its content slug", () => {
    for (const [key, guide] of entries) {
      expect(guide.slug).toBe(key);
    }
  });

  it("has no duplicate slugs", () => {
    const slugs = entries.map(([, g]) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every guide has the required content fields", () => {
    for (const [, g] of entries) {
      expect(g.h1, `${g.slug} h1`).toBeTruthy();
      expect(g.description, `${g.slug} description`).toBeTruthy();
      expect(g.updated, `${g.slug} updated`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(g.intro.length, `${g.slug} intro`).toBeGreaterThan(0);
      expect(g.steps.length, `${g.slug} steps`).toBeGreaterThanOrEqual(3);
      expect(g.faq.length, `${g.slug} faq`).toBeGreaterThanOrEqual(3);
      expect(g.mobileNote, `${g.slug} mobileNote`).toBeTruthy();
      expect(g.parentHub.path, `${g.slug} parentHub`).toBeTruthy();
      expect(g.related.length, `${g.slug} related`).toBeGreaterThan(0);
      for (const step of g.steps) {
        expect(step.title, `${g.slug} step title`).toBeTruthy();
        expect(step.body, `${g.slug} step body`).toBeTruthy();
      }
      for (const f of g.faq) {
        expect(f.q, `${g.slug} faq q`).toBeTruthy();
        expect(f.a, `${g.slug} faq a`).toBeTruthy();
      }
    }
  });
});

describe("guides routing & metadata", () => {
  it("every guide has a route with a title and description", () => {
    for (const [slug] of entries) {
      const route = getRoute(`/guides/${slug}`);
      expect(route.title, `${slug} meta title`).toBeTruthy();
      expect(route.description, `${slug} meta description`).toBeTruthy();
      expect(route.category).toBe("guide");
    }
  });

  it("has no duplicate meta titles across all routes", () => {
    const titles = ROUTES.map((r) => r.title);
    const dupes = titles.filter((t, i) => titles.indexOf(t) !== i);
    expect(dupes, `duplicate titles: ${dupes.join(" | ")}`).toEqual([]);
  });

  it("has no duplicate meta descriptions across all routes", () => {
    const descriptions = ROUTES.map((r) => r.description);
    const dupes = descriptions.filter((d, i) => descriptions.indexOf(d) !== i);
    expect(dupes, `duplicate descriptions: ${dupes.join(" | ")}`).toEqual([]);
  });

  it("includes every guide URL in the sitemap", () => {
    const urls = new Set(sitemap().map((e) => e.url));
    for (const [slug] of entries) {
      expect(
        urls.has(`https://pdfeditconvert.top/guides/${slug}`),
        `${slug} missing from sitemap`,
      ).toBe(true);
    }
  });
});

describe("guides internal linking", () => {
  it("every related and parentHub link points to a known route", () => {
    const broken: string[] = [];
    for (const [, g] of entries) {
      const links = [g.parentHub.path, ...g.related.map((r) => r.path)];
      for (const path of links) {
        if (!routePaths.has(path)) broken.push(`${g.slug} -> ${path}`);
      }
    }
    expect(broken, `broken internal links: ${broken.join(", ")}`).toEqual([]);
  });

  it("every guide links to at least one tool or hub page", () => {
    const missing: string[] = [];
    for (const [, g] of entries) {
      const links = [g.parentHub.path, ...g.related.map((r) => r.path)];
      const hasProduct = links.some((p) => {
        const cat = routeByPath.get(p)?.category;
        return cat === "tool" || cat === "hub";
      });
      if (!hasProduct) missing.push(g.slug);
    }
    expect(missing, `guides with no tool/hub link: ${missing.join(", ")}`).toEqual(
      [],
    );
  });

  it("links to 2–5 related guides/pages per article", () => {
    for (const [, g] of entries) {
      // parentHub + related together give the cross-link set
      expect(g.related.length, `${g.slug} related count`).toBeGreaterThanOrEqual(
        2,
      );
      expect(g.related.length, `${g.slug} related count`).toBeLessThanOrEqual(6);
    }
  });
});

describe("guide page rendering", () => {
  const sample = GUIDES["how-to-convert-pdf-to-word"];

  it("renders the H1 in server HTML", () => {
    const { container } = render(<GuidePage content={sample} />);
    const h1 = container.querySelector("h1");
    expect(h1?.textContent).toContain("Convert a PDF to");
  });

  it("renders both app store CTAs on every guide", () => {
    const { container } = render(<GuidePage content={sample} />);
    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs.some((h) => h?.includes("apps.apple.com"))).toBe(true);
    expect(
      hrefs.some((h) => h?.includes("com.helperg.editor.documents")),
    ).toBe(true);
  });

  it("emits JSON-LD structured data", () => {
    const { container } = render(<GuidePage content={sample} />);
    const ld = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    expect(ld.length).toBeGreaterThan(0);
  });
});
