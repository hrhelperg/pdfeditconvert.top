#!/usr/bin/env node
/**
 * Verifies that the origin the build canonicalises to (SITE_URL in
 * src/lib/routes.ts) is the origin production actually serves with HTTP 200.
 *
 * This guards the failure that suppressed indexation sitewide in Aug 2026:
 * every canonical tag, sitemap entry and IndexNow payload named the apex,
 * while the apex answered 307 -> www. A canonical URL that redirects away
 * from the page declaring it is a canonical/redirect conflict, and Google
 * resolves it by indexing neither.
 *
 * Run after any deploy that touches hosting or SITE_URL:
 *   node scripts/seo/check-canonical-host.mjs
 *   node scripts/seo/check-canonical-host.mjs --paths /,/pdf-tools,/merge-pdf
 *
 * Exit code 0 = canonical host is coherent, 1 = it is not.
 */
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../../src/lib/routes.ts", import.meta.url), "utf8");
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  source.match(/NEXT_PUBLIC_SITE_URL \?\? "(https:\/\/[^"]+)"/)?.[1];

if (!SITE_URL) {
  console.error("Could not resolve SITE_URL from src/lib/routes.ts.");
  process.exit(1);
}

const argPaths = process.argv.find((a) => a.startsWith("--paths="))?.slice(8);
const PATHS = argPaths ? argPaths.split(",") : ["/", "/pdf-tools", "/guides", "/merge-pdf", "/compress-pdf"];

const failures = [];
const note = (ok, msg) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
  if (!ok) failures.push(msg);
};

for (const path of PATHS) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  let res;
  try {
    res = await fetch(url, { redirect: "manual" });
  } catch (err) {
    note(false, `${url} — request failed: ${err.message}`);
    continue;
  }
  note(
    res.status === 200,
    `${url} — HTTP ${res.status}${res.headers.get("location") ? ` -> ${res.headers.get("location")}` : ""} (canonical host must answer 200, never redirect)`,
  );
  if (res.status !== 200) continue;

  const html = await res.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  note(canonical === url, `${url} — canonical tag is ${canonical ?? "missing"} (must equal the requested URL)`);

  const xRobots = res.headers.get("x-robots-tag");
  note(!xRobots || !/noindex/i.test(xRobots), `${url} — X-Robots-Tag: ${xRobots ?? "(none)"}`);
  const robotsMeta = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  note(!!robotsMeta && !/noindex/i.test(robotsMeta), `${url} — robots meta: ${robotsMeta ?? "(none)"}`);
}

// robots.txt and the sitemap index must themselves be on the canonical host.
for (const file of ["/robots.txt", "/sitemap.xml"]) {
  const url = `${SITE_URL}${file}`;
  const res = await fetch(url, { redirect: "manual" }).catch((e) => ({ status: 0, err: e.message }));
  note(res.status === 200, `${url} — HTTP ${res.status}`);
  if (res.status !== 200) continue;
  const body = await res.text();
  const foreign = [...body.matchAll(/https:\/\/[^\s"<]+/g)]
    .map((m) => m[0])
    .filter((u) => !u.startsWith(SITE_URL) && u.includes("pdfeditconvert.top"));
  note(foreign.length === 0, `${url} — references ${foreign.length} URL(s) on a non-canonical host${foreign.length ? `: ${[...new Set(foreign)].slice(0, 3).join(", ")}` : ""}`);
}

console.log(`\n${failures.length ? `${failures.length} check(s) failed.` : "Canonical host is coherent."}`);
process.exit(failures.length ? 1 : 0);
