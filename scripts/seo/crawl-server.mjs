#!/usr/bin/env node
// Crawls a running server over HTTP: sitemap index -> child sitemaps
// -> every URL, plus the redirect sources. Verifies over real HTTP what the
// static gates cannot: response status, redirect status and target, robots.txt
// content, X-Robots-Tag headers, 404 handling, and that the App Store, Google
// Play and WebmasterID integrations survive on every page.
//
// Usage:
//   npm run build && npm run start &
//   node scripts/seo/crawl-server.mjs --base=http://localhost:3000
//   node scripts/seo/crawl-server.mjs --base=https://www.pdfeditconvert.top

import { readFileSync } from "node:fs";
const BASE = process.argv.find((a) => a.startsWith("--base="))?.slice(7) ?? "http://localhost:3000";
const CANON = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  readFileSync(new URL("../../src/lib/routes.ts", import.meta.url), "utf8").match(
    /NEXT_PUBLIC_SITE_URL \?\? "(https:\/\/[^"]+)"/,
  )[1];
const fails = [];
const fail = (m) => fails.push(m);

const idx = await fetch(`${BASE}/sitemap.xml`);
if (idx.status !== 200) fail(`sitemap index: HTTP ${idx.status}`);
const idxXml = await idx.text();
if (!idxXml.includes("<sitemapindex")) fail("sitemap.xml is not a sitemapindex");
const children = [...idxXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`sitemap index -> ${children.length} child sitemaps`);

const all = [];
for (const c of children) {
  const path = new URL(c).pathname;
  const r = await fetch(BASE + path);
  if (r.status !== 200) { fail(`${path}: HTTP ${r.status}`); continue; }
  const xml = await r.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const mods = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
  if (locs.length !== mods.length) fail(`${path}: ${locs.length} locs vs ${mods.length} lastmods`);
  console.log(`  ${path}: ${locs.length} URLs, ${new Set(mods).size} distinct lastmod`);
  all.push(...locs);
}
console.log(`total sitemap URLs: ${all.length}, unique: ${new Set(all).size}`);
if (all.length !== new Set(all).size) fail("duplicate URLs across sitemap groups");

// robots.txt
const rob = await fetch(`${BASE}/robots.txt`);
const robTxt = await rob.text();
if (!robTxt.includes(`${CANON}/sitemap.xml`)) fail(`robots.txt sitemap is not ${CANON}/sitemap.xml:\n${robTxt}`);
if (/Disallow:\s*\/\s*$/m.test(robTxt)) fail("robots.txt disallows everything");
console.log(`robots.txt ok`);

// Redirects must 308 and land on a 200.
for (const [from, to] of [["/use-cases/students", "/pdf-for-students"], ["/use-cases/business", "/pdf-for-business"]]) {
  const r = await fetch(BASE + from, { redirect: "manual" });
  if (r.status !== 308) fail(`${from}: HTTP ${r.status}, expected 308`);
  const loc = r.headers.get("location");
  if (loc !== to) fail(`${from}: redirects to ${loc}, expected ${to}`);
  const t = await fetch(BASE + to);
  if (t.status !== 200) fail(`${to}: redirect target returned ${t.status}`);
  if (all.some((u) => u.endsWith(from))) fail(`${from} is a redirect but appears in a sitemap`);
  console.log(`redirect ${from} -> ${to} (308, target 200) ok`);
}

// Every sitemap URL.
let n = 0;
const APP_STORE = "https://apps.apple.com/app/id6747341672";
const PLAY = "com.helperg.editor.documents";
for (const url of all) {
  const path = new URL(url).pathname;
  const r = await fetch(BASE + path, { redirect: "manual" });
  if (r.status !== 200) { fail(`${path}: HTTP ${r.status}`); continue; }
  const xr = r.headers.get("x-robots-tag");
  if (xr && /noindex/i.test(xr)) fail(`${path}: X-Robots-Tag ${xr}`);
  const html = await r.text();
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (canonical !== url) fail(`${path}: canonical ${canonical} != sitemap loc ${url}`);
  const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1];
  if (!robots || /noindex/i.test(robots)) fail(`${path}: robots meta "${robots}"`);
  if ((html.match(/<h1/g) || []).length !== 1) fail(`${path}: ${(html.match(/<h1/g) || []).length} h1`);
  if (!/<script type="application\/ld\+json">/.test(html)) fail(`${path}: no JSON-LD`);
  // Internal links must not point at a redirect source.
  for (const m of html.matchAll(/href="(\/use-cases\/(students|business))"/g)) fail(`${path}: links to redirect source ${m[1]}`);
  // App CTAs preserved.
  if (!html.includes(APP_STORE)) fail(`${path}: App Store link missing`);
  if (!html.includes(PLAY)) fail(`${path}: Google Play link missing`);
  // WebmasterID must survive.
  if (!html.includes("wm_b6f7wz6b9y2o5qzo")) fail(`${path}: WebmasterID site id missing`);
  if (!html.includes("webmasterid-ingest-api.vercel.app/api/events")) fail(`${path}: WebmasterID endpoint missing`);
  n++;
}
console.log(`crawled ${n} URLs at 200`);

// 404 behaviour
const nf = await fetch(`${BASE}/definitely-not-a-real-page-xyz`);
if (nf.status !== 404) fail(`unknown URL returned ${nf.status}, expected 404`);
console.log(`unknown URL -> 404 ok`);

console.log(fails.length ? `\n${fails.length} FAILURE(S):\n` + fails.map((f) => "  - " + f).join("\n") : "\nProduction crawl clean.");
process.exit(fails.length ? 1 : 0);
