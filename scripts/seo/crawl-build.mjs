#!/usr/bin/env node
/**
 * Crawls the prerendered HTML produced by `next build` and emits a machine-readable
 * SEO inventory: status, canonical, robots, title/description/H1, JSON-LD types,
 * internal-link graph, click depth from "/", and orphan detection.
 *
 * Usage: npm run build && node scripts/seo/crawl-build.mjs [--json out.json]
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function pathFromFile(file) {
  const rel = relative(APP_DIR, file).replace(/\.html$/, "");
  const p = "/" + rel.split(sep).join("/");
  return p === "/index" ? "/" : p;
}

const text = (s) => s.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();
const attr = (html, re) => (html.match(re) || [])[1] || "";

export function crawl() {
  const files = walk(APP_DIR);
  const pages = new Map();

  for (const file of files) {
    const path = pathFromFile(file);
    const html = readFileSync(file, "utf8");
    const body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [])[1] || html;
    // Editorial region = body minus the sitewide header/footer chrome and minus
    // inlined scripts. Sitewide boilerplate links are a far weaker relevance
    // signal than in-content links, so the two are counted separately.
    const main = body
      .replace(/<header[\s\S]*?<\/header>/g, "")
      .replace(/<footer[\s\S]*?<\/footer>/g, "")
      .replace(/<script[\s\S]*?<\/script>/g, "");
    const hrefs = (s) => [...s.matchAll(/href="(\/[^"#?]*)"/g)]
      .map((m) => m[1].replace(/\/$/, "") || "/")
      .filter((h) => !h.startsWith("/_next") && !/\.(svg|png|jpg|webp|ico|xml|txt|woff2?)$/.test(h));
    const links = hrefs(body);
    const editorialLinks = hrefs(main);
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => text(m[1]));
    const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
      .filter(Boolean);

    pages.set(path, {
      path,
      canonical: attr(html, /<link rel="canonical" href="([^"]+)"/),
      robotsMeta: attr(html, /<meta name="robots" content="([^"]+)"/),
      title: attr(html, /<title>([^<]*)<\/title>/),
      description: attr(html, /<meta name="description" content="([^"]*)"/),
      ogUrl: attr(html, /<meta property="og:url" content="([^"]*)"/),
      h1s,
      h1: h1s[0] || "",
      jsonLdTypes: jsonLd.flatMap((o) => (Array.isArray(o) ? o : [o])).map((o) => o["@type"]).filter(Boolean),
      jsonLd,
      textLength: text(main).length,
      outLinks: [...new Set(links)],
      editorialOut: [...new Set(editorialLinks)],
    });
  }

  // Inbound counts + click depth via BFS from "/"
  const inbound = new Map([...pages.keys()].map((p) => [p, new Set()]));
  const editorialIn = new Map([...pages.keys()].map((p) => [p, new Set()]));
  for (const [from, page] of pages) {
    for (const to of page.outLinks) if (pages.has(to) && to !== from) inbound.get(to).add(from);
    for (const to of page.editorialOut) if (pages.has(to) && to !== from) editorialIn.get(to).add(from);
  }

  const depth = new Map([["/", 0]]);
  let frontier = ["/"];
  while (frontier.length) {
    const next = [];
    for (const p of frontier) {
      for (const to of pages.get(p)?.outLinks ?? []) {
        if (pages.has(to) && !depth.has(to)) { depth.set(to, depth.get(p) + 1); next.push(to); }
      }
    }
    frontier = next;
  }

  for (const [p, page] of pages) {
    page.inboundCount = inbound.get(p).size;
    page.inboundFrom = [...inbound.get(p)];
    page.editorialIn = editorialIn.get(p).size;
    page.editorialInFrom = [...editorialIn.get(p)];
    page.editorialOutCount = page.editorialOut.filter((l) => pages.has(l) && l !== p).length;
    page.depth = depth.has(p) ? depth.get(p) : Infinity;
    page.internalOutLinks = page.outLinks.filter((l) => pages.has(l)).length;
  }

  return pages;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const pages = crawl();
  // Drop the parsed JSON-LD objects from the dump; the type list is enough.
  const out = [...pages.values()].map((p) => {
    const row = { ...p };
    delete row.jsonLd;
    return row;
  });
  const idx = process.argv.indexOf("--json");
  if (idx !== -1) writeFileSync(process.argv[idx + 1], JSON.stringify(out, null, 2));
  console.log(`pages: ${out.length}`);
  console.log(`orphans (no inbound): ${out.filter((p) => p.inboundCount === 0 && p.path !== "/").map((p) => p.path).join(", ") || "none"}`);
  console.log(`editorial orphans (no in-content inbound): ${out.filter((p) => p.editorialIn === 0 && p.path !== "/" && !p.path.startsWith("/_")).map((p) => p.path).join(", ") || "none"}`);
  const byDepth = {};
  for (const p of out) byDepth[p.depth] = (byDepth[p.depth] || 0) + 1;
  console.log("depth histogram:", byDepth);
}
