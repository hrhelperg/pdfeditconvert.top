// scripts/submit-indexnow.mjs
//
// Submit every public indexable URL from the route registry
// (src/lib/routes.ts) to the IndexNow API. Manual-only: run via
// `npm run indexnow:submit` — never wired into build or deploy.
//
// Requires INDEXNOW_KEY in the environment (set in Vercel env vars; export
// it locally to run from a shell). The key file must be live at
// <SITE_URL>/<key>.txt for the submission to be accepted. IndexNow validates
// keyLocation by fetching it, so SITE_URL must be the origin that answers 200
// rather than one that redirects.
//
// Usage:
//   INDEXNOW_KEY=... node scripts/submit-indexnow.mjs            # submit
//   INDEXNOW_KEY=... node scripts/submit-indexnow.mjs --dry-run  # preview only
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

// Mirrors the default in src/lib/routes.ts. parseSiteUrl throws rather than
// silently falling back, so this is only a documented reference value.
const FALLBACK_SITE_URL = "https://www.pdfeditconvert.top";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
// IndexNow protocol cap per request.
const MAX_URLS_PER_REQUEST = 10_000;

// The registry is TypeScript, which a plain Node script can't import, so the
// exports are read textually. Both parsers throw if the shape they rely on
// disappears, rather than silently submitting an empty or partial list.
export function parseSiteUrl(source) {
  // Matches the env-overridable form in src/lib/routes.ts:
  //   export const SITE_URL = (
  //     process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pdfeditconvert.top"
  //   ).replace(/\/+$/, "");
  // The env var wins here too, so a submission always targets the same origin
  // the deployed build canonicalises to.
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  const match = source.match(
    /export const SITE_URL =[\s\S]*?NEXT_PUBLIC_SITE_URL \?\? "(https:\/\/[^"]+)"/,
  );
  if (!match) {
    throw new Error(
      `Could not parse SITE_URL from src/lib/routes.ts — update parseSiteUrl(). Expected default ${FALLBACK_SITE_URL}.`,
    );
  }
  return match[1].replace(/\/+$/, "");
}

export function parseRoutes(source) {
  const start = source.indexOf("export const ROUTES");
  const open = source.indexOf("[", start);
  const close = source.indexOf("\n];", open);
  if (start === -1 || open === -1 || close === -1) {
    throw new Error(
      "Could not locate the ROUTES array in src/lib/routes.ts — update parseRoutes().",
    );
  }
  // Route entries are flat object literals, so non-nested brace matching is safe.
  const blocks = source.slice(open + 1, close).match(/\{[^{}]*\}/g) ?? [];
  const routes = blocks
    .map((block) => ({
      path: block.match(/path:\s*"([^"]+)"/)?.[1],
      hidden: /hidden:\s*true/.test(block),
    }))
    .filter((route) => route.path);
  if (routes.length === 0) {
    throw new Error("Parsed zero routes from src/lib/routes.ts — refusing to continue.");
  }
  return routes;
}

export function buildUrlList(source) {
  const siteUrl = parseSiteUrl(source);
  const expectedHost = new URL(siteUrl).host;
  const urls = new Set();
  for (const { path, hidden } of parseRoutes(source)) {
    if (hidden) continue;
    // Same URL shape as src/app/sitemap.ts: homepage without trailing slash.
    urls.add(`${siteUrl}${path === "/" ? "" : path}`);
  }
  const urlList = [...urls];
  for (const url of urlList) {
    if (new URL(url).host !== expectedHost) {
      throw new Error(`Refusing to submit non-canonical URL: ${url}`);
    }
  }
  return urlList;
}

async function main() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.error(
      "[indexnow] INDEXNOW_KEY is not set. Export it in your shell " +
        "(the value lives in Vercel → Environment Variables) and re-run.",
    );
    process.exit(1);
  }

  const dryRun = process.argv.includes("--dry-run");
  const source = await readFile(resolve(root, "src/lib/routes.ts"), "utf8");
  const siteUrl = parseSiteUrl(source);
  const host = new URL(siteUrl).host;
  const urlList = buildUrlList(source);

  if (urlList.length > MAX_URLS_PER_REQUEST) {
    console.error(
      `[indexnow] ${urlList.length} URLs exceeds the IndexNow per-request cap of ${MAX_URLS_PER_REQUEST}. Aborting.`,
    );
    process.exit(1);
  }

  const payload = {
    host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  };

  console.log(`[indexnow] host: ${host}`);
  console.log(`[indexnow] keyLocation: ${payload.keyLocation}`);
  console.log(`[indexnow] URLs to submit: ${urlList.length}`);

  if (dryRun) {
    console.log("[indexnow] --dry-run: not submitting. First 5 URLs:");
    for (const url of urlList.slice(0, 5)) console.log(`  ${url}`);
    return;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log(`[indexnow] Submitted ${urlList.length} URLs — HTTP ${response.status}.`);
  } else {
    const body = await response.text().catch(() => "");
    console.error(`[indexnow] Submission failed — HTTP ${response.status}. ${body}`.trim());
    process.exit(1);
  }
}

const invokedDirectly =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  await main();
}
