/**
 * Indexation quality gates.
 *
 * These encode the invariants whose violation caused, or would repeat, the
 * Aug 2026 indexation incident. They are deliberately structural — parity,
 * uniqueness, resolvability, host coherence — and never assert arbitrary word
 * counts, which measure nothing about whether a page deserves indexing.
 */
import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { ROUTES, SITE_HOST, SITE_URL } from "@/lib/routes";
import { SITEMAP_GROUP_NAMES, routesInGroup, urlsetXml } from "@/lib/sitemap";
import { MIN_EDITORIAL_INBOUND, TIER_1, TIER_2 } from "@/lib/indexation";
import { GUIDES } from "@/content/guides";
import { COMPARE } from "@/content/compare";
import { USE_CASES } from "@/content/use-cases";
import { guidesForHub } from "@/lib/cluster";
import { SITE_EN } from "@/lib/i18n/dictionaries/site.en";
import { HOME_EN } from "@/content/pages/home.en";
import { TOOLS_INDEX_EN } from "@/content/pages/misc.en";

const root = path.resolve(__dirname, "..", "..");
const indexable = ROUTES.filter((r) => !r.hidden);
const registryPaths = new Set(ROUTES.map((r) => r.path));

/** Every internal link the content registries declare, with its source. */
function declaredLinks(): { from: string; to: string }[] {
  const out: { from: string; to: string }[] = [];
  for (const g of Object.values(GUIDES)) {
    for (const r of g.related) out.push({ from: `/guides/${g.slug}`, to: r.path });
    if (g.parentHub) out.push({ from: `/guides/${g.slug}`, to: g.parentHub.path });
  }
  for (const c of Object.values(COMPARE))
    for (const r of c.related) out.push({ from: `/compare/${c.slug}`, to: r.path });
  for (const u of Object.values(USE_CASES))
    for (const r of u.related) out.push({ from: `/use-cases/${u.slug}`, to: r.path });
  for (const dir of ["hubs", "tools"] as const) {
    for (const file of readdirSync(path.join(root, "src/content", dir))) {
      if (!file.endsWith(".ts") || file === "index.ts") continue;
      const src = readFileSync(path.join(root, "src/content", dir, file), "utf8");
      for (const m of src.matchAll(/path:\s*"(\/[^"]*)"/g))
        out.push({ from: `/${file.replace(/\.ts$/, "")}`, to: m[1] });
    }
  }
  /*
   * Navigation, footer and the link lists on the homepage and tool index.
   *
   * These used to be hardcoded `href="/guides"` strings in component
   * source, and this gate found them by scanning for that literal. They are
   * now declared as canonical route ids and resolved per locale, so the
   * literal no longer exists anywhere — and the gate would have quietly
   * reported /guides as an orphan while it was in fact linked from the
   * header, the footer and the homepage. Reading the structured
   * declarations is both accurate and immune to the next refactor.
   */
  const idLink = (from: string, id: string) => out.push({ from, to: `/${id}` });
  for (const n of SITE_EN.header.nav) idLink("Header", n.id);
  for (const group of [
    SITE_EN.footer.product,
    SITE_EN.footer.learn,
    SITE_EN.footer.company,
    SITE_EN.footer.tools,
  ])
    for (const n of group) idLink("Footer", n.id);
  for (const group of [HOME_EN.tools, HOME_EN.hubs, HOME_EN.featuredGuides])
    for (const n of group) idLink("HomePage", n.id);
  for (const n of TOOLS_INDEX_EN.hubs) idLink("ToolsIndexPage", n.id);
  // The homepage and tool index also link the guides index and tool index
  // from their CTAs, which are rendered from route ids too.
  idLink("HomePage", "guides");
  idLink("HomePage", "pdf-tools");
  idLink("ToolsIndexPage", "guides");

  // Links still hardcoded in page and component sources.
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(entry.name)) {
        const src = readFileSync(p, "utf8");
        for (const m of src.matchAll(/(?:href|moreHref):?=?\s*"(\/[^"{}]*)"/g))
          out.push({ from: path.relative(root, p), to: m[1] });
      }
    }
  };
  walk(path.join(root, "src/app"));
  walk(path.join(root, "src/components"));
  return out;
}

describe("registry integrity", () => {
  it("has no duplicate paths", () => {
    const paths = ROUTES.map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("gives every indexable route a unique title", () => {
    const titles = indexable.map((r) => r.title);
    const dupes = titles.filter((t, i) => titles.indexOf(t) !== i);
    expect(dupes).toEqual([]);
  });

  it("gives every indexable route a unique description", () => {
    const descs = indexable.map((r) => r.description);
    const dupes = descs.filter((d, i) => descs.indexOf(d) !== i);
    expect(dupes).toEqual([]);
  });

  it("gives every route a non-empty title and description", () => {
    for (const r of ROUTES) {
      expect(r.title.trim().length, r.path).toBeGreaterThan(0);
      expect(r.description.trim().length, r.path).toBeGreaterThan(0);
    }
  });

  it("keeps every rendered page's H1 distinct", () => {
    const h1s = [
      ...Object.values(GUIDES).map((g) => g.h1),
      ...Object.values(COMPARE).map((c) => c.h1),
      ...Object.values(USE_CASES).map((u) => u.h1),
    ];
    const dupes = h1s.filter((h, i) => h1s.indexOf(h) !== i);
    expect(dupes).toEqual([]);
  });
});

describe("lastmod integrity", () => {
  it("gives every route a valid, non-future ISO date", () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const r of ROUTES) {
      expect(r.lastModified, r.path).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(r.lastModified)), r.path).toBe(false);
      expect(r.lastModified <= today, `${r.path} is dated in the future`).toBe(true);
    }
  });

  it("never stamps a single build-time date across the whole site", () => {
    // The regression this replaces: sitemap.ts used `new Date()`, so every
    // deploy claimed all 176 pages had just changed.
    expect(new Set(ROUTES.map((r) => r.lastModified)).size).toBeGreaterThan(1);
    const src = readFileSync(path.join(root, "src/lib/sitemap.ts"), "utf8");
    expect(src).not.toMatch(/new Date\(\)/);
  });
});

describe("canonical host coherence", () => {
  it("derives SITE_URL from one place, overridable by environment", () => {
    const src = readFileSync(path.join(root, "src/lib/routes.ts"), "utf8");
    expect(src).toContain("NEXT_PUBLIC_SITE_URL");
    expect(SITE_URL).toMatch(/^https:\/\//);
    expect(SITE_URL.endsWith("/")).toBe(false);
    expect(SITE_HOST).toBe(new URL(SITE_URL).host);
  });

  it("never hardcodes an absolute site URL outside the registry", () => {
    // A second hardcoded origin is how canonical, sitemap and OG URLs drift
    // apart. Brand mentions in prose are fine; absolute URLs are not.
    const offenders: string[] = [];
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (/\.tsx?$/.test(entry.name)) {
          if (p.endsWith(path.join("src", "lib", "routes.ts"))) continue;
          const src = readFileSync(p, "utf8");
          if (/https:\/\/(www\.)?pdfeditconvert\.top/.test(src)) offenders.push(p);
        }
      }
    };
    walk(path.join(root, "src"));
    expect(offenders).toEqual([]);
  });

  it("puts every sitemap URL on the canonical host", () => {
    for (const g of SITEMAP_GROUP_NAMES)
      for (const m of urlsetXml(g).matchAll(/<loc>([^<]+)<\/loc>/g))
        expect(new URL(m[1]).host, m[1]).toBe(SITE_HOST);
  });
});

describe("sitemap hygiene", () => {
  const redirects = readFileSync(path.join(root, "next.config.ts"), "utf8");
  const redirectSources = [...redirects.matchAll(/source:\s*"([^"]+)"/g)].map((m) => m[1]);
  const sitemapPaths = SITEMAP_GROUP_NAMES.flatMap((g) => routesInGroup(g)).map((r) => r.path);

  it("declares at least one redirect source to check against", () => {
    expect(redirectSources.length).toBeGreaterThan(0);
  });

  it("never lists a URL that redirects", () => {
    for (const s of redirectSources) expect(sitemapPaths, s).not.toContain(s);
  });

  it("never lists a hidden (intentionally non-indexed) route", () => {
    const hidden = ROUTES.filter((r) => r.hidden).map((r) => r.path);
    for (const h of hidden) expect(sitemapPaths, h).not.toContain(h);
  });

  it("never lists the same URL in two groups", () => {
    expect(new Set(sitemapPaths).size).toBe(sitemapPaths.length);
  });
});

describe("internal link resolvability", () => {
  const links = declaredLinks();

  it("resolves every declared internal link to a registry route", () => {
    const broken = links.filter(
      (l) => l.to.startsWith("/") && !registryPaths.has(l.to) && !l.to.startsWith("/sitemap"),
    );
    expect(broken).toEqual([]);
  });

  it("never links to a URL that redirects", () => {
    const redirects = readFileSync(path.join(root, "next.config.ts"), "utf8");
    const sources = [...redirects.matchAll(/source:\s*"([^"]+)"/g)].map((m) => m[1]);
    const offending = links.filter((l) => sources.includes(l.to));
    expect(offending).toEqual([]);
  });

  it("never repeats the same target inside one related list", () => {
    const offenders: string[] = [];
    const check = (id: string, items: { path: string }[]) => {
      const paths = items.map((i) => i.path);
      if (new Set(paths).size !== paths.length) offenders.push(id);
    };
    for (const g of Object.values(GUIDES)) check(`/guides/${g.slug}`, g.related);
    for (const c of Object.values(COMPARE)) check(`/compare/${c.slug}`, c.related);
    for (const u of Object.values(USE_CASES)) check(`/use-cases/${u.slug}`, u.related);
    expect(offenders).toEqual([]);
  });

  it("never links a page to itself", () => {
    const self: string[] = [];
    for (const g of Object.values(GUIDES))
      if (g.related.some((r) => r.path === `/guides/${g.slug}`)) self.push(g.slug);
    expect(self).toEqual([]);
  });

  it("gives every guide a parentHub that is a real route", () => {
    for (const g of Object.values(GUIDES)) {
      expect(g.parentHub?.path, g.slug).toBeTruthy();
      expect(registryPaths.has(g.parentHub.path), `${g.slug} -> ${g.parentHub.path}`).toBe(true);
    }
  });
});

describe("priority tiers", () => {
  const inbound = new Map<string, number>();
  for (const { to } of declaredLinks()) inbound.set(to, (inbound.get(to) ?? 0) + 1);
  // Hub and tool pages additionally list their whole guide cluster.
  for (const hub of new Set(Object.values(GUIDES).map((g) => g.parentHub.path)))
    for (const l of guidesForHub(hub)) inbound.set(`/guides/${l.slug}`, (inbound.get(`/guides/${l.slug}`) ?? 0) + 1);

  it("keeps tiers disjoint and inside the registry", () => {
    expect(TIER_1.filter((p) => TIER_2.includes(p))).toEqual([]);
    for (const p of [...TIER_1, ...TIER_2]) expect(registryPaths.has(p), p).toBe(true);
  });

  it("keeps every tiered URL indexable and in a sitemap group", () => {
    const sitemapPaths = new Set(
      SITEMAP_GROUP_NAMES.flatMap((g) => routesInGroup(g)).map((r) => r.path),
    );
    for (const p of [...TIER_1, ...TIER_2]) {
      expect(ROUTES.find((r) => r.path === p)?.hidden, p).toBeFalsy();
      expect(sitemapPaths.has(p), `${p} missing from every sitemap group`).toBe(true);
    }
  });

  it("leaves no tiered URL orphaned or weakly linked", () => {
    const thin: string[] = [];
    for (const p of TIER_1)
      if (p !== "/" && (inbound.get(p) ?? 0) < MIN_EDITORIAL_INBOUND.tier1) thin.push(`${p} (${inbound.get(p) ?? 0})`);
    for (const p of TIER_2)
      if ((inbound.get(p) ?? 0) < MIN_EDITORIAL_INBOUND.tier2) thin.push(`${p} (${inbound.get(p) ?? 0})`);
    expect(thin).toEqual([]);
  });
});

describe("guide clusters", () => {
  it("assigns every guide to exactly one cluster, covering the whole library", () => {
    const clustered = new Set(
      Object.values(GUIDES).flatMap((g) => guidesForHub(g.parentHub.path).map((x) => x.slug)),
    );
    expect(clustered.size).toBe(Object.keys(GUIDES).length);
  });
});
