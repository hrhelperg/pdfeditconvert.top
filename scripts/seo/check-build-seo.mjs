#!/usr/bin/env node
/**
 * Post-build indexation gate. Runs against the HTML `next build` actually
 * emitted, so it catches anything the unit gates cannot see: what the
 * canonical tag renders to, whether primary content survives without
 * JavaScript, whether a page is silently empty.
 *
 * Usage: npm run build && node scripts/seo/check-build-seo.mjs
 */
import { crawl } from "./crawl-build.mjs";
import { readFileSync } from "node:fs";

const routesSrc = readFileSync(new URL("../../src/lib/routes.ts", import.meta.url), "utf8");
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  routesSrc.match(/NEXT_PUBLIC_SITE_URL \?\? "(https:\/\/[^"]+)"/)[1];

// Tiers are the pages the recovery commits to; they get the strictest checks.
const tierSrc = readFileSync(new URL("../../src/lib/indexation.ts", import.meta.url), "utf8");
const tierPaths = (name) =>
  [...(tierSrc.match(new RegExp(`export const ${name}[\\s\\S]*?\\];`))?.[0] ?? "")
    .matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
const TIER_1 = tierPaths("TIER_1");
const TIER_2 = tierPaths("TIER_2");

/** Minimum rendered text for a page to be more than a shell. Deliberately low:
 *  this detects an empty or JS-only render, not "thin content", which word
 *  counts cannot measure. */
const MIN_RENDERED_CHARS = 600;

/**
 * Title width in Latin-character equivalents. Mirrors `titleWidth` in
 * src/lib/seo.ts — a plain character count over-flags Arabic and badly
 * under-flags Japanese, where every glyph is full-width.
 */
function titleWidth(title) {
  let units = 0;
  for (const ch of title) {
    const cp = ch.codePointAt(0);
    const isCJK =
      (cp >= 0x3000 && cp <= 0x30ff) ||
      (cp >= 0x3400 && cp <= 0x4dbf) ||
      (cp >= 0x4e00 && cp <= 0x9fff) ||
      (cp >= 0xac00 && cp <= 0xd7af) ||
      (cp >= 0xff00 && cp <= 0xff60);
    const isArabic = cp >= 0x0600 && cp <= 0x06ff;
    units += isCJK ? 2 : isArabic ? 0.5 : 1;
  }
  return units;
}

/** Where Google starts truncating the desktop title, in the same units. */
const TITLE_BUDGET = 60;

const pages = crawl();
const failures = [];
const fail = (msg) => failures.push(msg);

for (const [path, page] of pages) {
  if (path.startsWith("/_")) continue;
  const expected = `${SITE_URL}${path === "/" ? "" : path}`;

  if (page.canonical !== expected) fail(`${path}: canonical is "${page.canonical}", expected "${expected}"`);
  if (page.ogUrl && page.ogUrl !== expected) fail(`${path}: og:url is "${page.ogUrl}", expected "${expected}"`);
  if (!page.robotsMeta) fail(`${path}: no robots meta tag`);
  if (/noindex/i.test(page.robotsMeta)) fail(`${path}: robots meta is "${page.robotsMeta}"`);
  if (!page.title.trim()) fail(`${path}: empty <title>`);
  if (!page.description.trim()) fail(`${path}: empty meta description`);
  if (page.h1s.length !== 1) fail(`${path}: ${page.h1s.length} <h1> elements, expected exactly 1`);
  // The brand belongs in a title once. It used to be appended
  // unconditionally by the layout template, double-branding any title that
  // already opened with the product name.
  const brandHits = (page.title.match(/PDF Editor/g) ?? []).length;
  if (brandHits > 1) fail(`${path}: title names the brand ${brandHits} times — "${page.title}"`);
  if (page.textLength < MIN_RENDERED_CHARS)
    fail(`${path}: only ${page.textLength} chars of server-rendered text — possible soft 404 or JS-only render`);
  if (page.depth === Infinity) fail(`${path}: unreachable by following links from "/"`);
}

// Sitewide uniqueness.
for (const field of ["title", "description", "h1"]) {
  const seen = new Map();
  for (const [path, page] of pages) {
    if (path.startsWith("/_")) continue;
    const v = page[field];
    if (!v) continue;
    if (seen.has(v)) fail(`duplicate ${field}: ${path} and ${seen.get(v)} share "${v.slice(0, 60)}"`);
    else seen.set(v, path);
  }
}

// Tier commitments.
for (const [tier, paths, minInbound] of [["Tier 1", TIER_1, 3], ["Tier 2", TIER_2, 2]]) {
  for (const p of paths) {
    const page = pages.get(p);
    if (!page) { fail(`${tier} ${p}: not present in the build output`); continue; }
    if (p !== "/" && page.editorialIn < minInbound)
      fail(`${tier} ${p}: only ${page.editorialIn} in-content inbound link(s), minimum ${minInbound}`);
    if (page.depth > 2) fail(`${tier} ${p}: click depth ${page.depth} from "/", maximum 2`);
  }
}

// Title width. Reported rather than failed: the budget is a truncation
// threshold, not a correctness rule, and the copy work to bring every locale
// under it is content editing rather than a code change. Surfacing the count
// keeps it from drifting silently the way it did before.
const overBudget = [...pages.values()]
  .filter((p) => !p.path.startsWith("/_") && titleWidth(p.title) > TITLE_BUDGET)
  .sort((a, b) => titleWidth(b.title) - titleWidth(a.title));

const real = [...pages.values()].filter((p) => !p.path.startsWith("/_"));
console.log(`crawled ${real.length} prerendered pages`);
console.log(
  `titles over the ${TITLE_BUDGET}-unit SERP width budget: ${overBudget.length}/${real.length}` +
    (overBudget.length
      ? ` (widest: ${overBudget[0].path} at ${titleWidth(overBudget[0].title)})`
      : ""),
);
console.log(`click depth: ${JSON.stringify(real.reduce((a, p) => ({ ...a, [p.depth]: (a[p.depth] ?? 0) + 1 }), {}))}`);
console.log(`in-content orphans: ${real.filter((p) => p.editorialIn === 0 && p.path !== "/").map((p) => p.path).join(", ") || "none"}`);

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("\nAll build-output SEO checks passed.");
