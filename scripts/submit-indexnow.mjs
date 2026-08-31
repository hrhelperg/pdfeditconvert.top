// scripts/submit-indexnow.mjs
//
// Submit every public indexable URL, in every published locale, to the
// IndexNow API. Manual-only: run via `npm run indexnow:submit` — never wired
// into build or deploy.
//
// The default locale's paths come from the route registry (src/lib/routes.ts);
// every other published locale's paths are its prefix plus the slugs in its
// route manifest (src/content/<locale>/routes*.ts). Locale set and prefixes
// come from src/lib/i18n/locales.ts, so publishing a locale needs no edit
// here — the same rule as the sitemap generator.
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
// Mirrors DEFAULT_LOCALE in src/lib/i18n/locales.ts: the locale served at root.
const DEFAULT_LOCALE = "en";
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

/**
 * Published locales, parsed from src/lib/i18n/locales.ts.
 *
 * Same regex as scripts/i18n/gen-sitemap-routes.mjs: this is a plain Node
 * script and the config is TypeScript. Unpublished locales are dropped here,
 * so a locale that has no pages can never be submitted.
 */
export function parsePublishedLocales(source) {
  const blocks = [
    ...source.matchAll(
      /code:\s*"([^"]+)",\s*prefix:\s*"([^"]*)"[\s\S]*?published:\s*(true|false),/g,
    ),
  ];
  const locales = blocks
    .map(([, code, prefix, published]) => ({ code, prefix, published: published === "true" }))
    .filter((locale) => locale.published);
  if (locales.length === 0) {
    throw new Error(
      "Parsed zero published locales from src/lib/i18n/locales.ts — update parsePublishedLocales().",
    );
  }
  return locales;
}

/**
 * Localized slugs for one locale, parsed from its route manifest sources.
 *
 * Entries are flat object literals keyed by the English route id, so
 * non-nested brace matching is safe — the same assumption parseRoutes() makes.
 */
export function parseLocaleSlugs(sources) {
  const slugs = [];
  for (const source of sources) {
    for (const block of source.match(/\{[^{}]*\}/g) ?? []) {
      const slug = block.match(/\n\s*slug:\s*"([^"]*)"/);
      if (slug && /\n\s*id:\s*"/.test(block)) slugs.push(slug[1]);
    }
  }
  if (slugs.length === 0) {
    throw new Error("Parsed zero slugs from a locale route manifest — refusing to continue.");
  }
  return slugs;
}

/** Default-locale URLs only. See buildAllLocaleUrls for the full submission. */
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

/**
 * Every URL to submit, across every published locale.
 *
 * `manifests` maps a locale code to its route-manifest sources. The default
 * locale is not expected there — its paths come from the registry.
 */
export function buildAllLocaleUrls(routesSource, localesSource, manifests) {
  const siteUrl = parseSiteUrl(routesSource);
  const expectedHost = new URL(siteUrl).host;
  const urls = new Set(buildUrlList(routesSource));

  for (const { code, prefix } of parsePublishedLocales(localesSource)) {
    if (code === DEFAULT_LOCALE) continue;
    const sources = manifests[code];
    if (!sources || sources.length === 0) {
      throw new Error(
        `Locale "${code}" is published but no route manifest was supplied — refusing to submit a partial URL set.`,
      );
    }
    for (const slug of parseLocaleSlugs(sources)) {
      // Same URL shape as src/lib/i18n/routeMap.ts: the locale home is the
      // bare prefix, with no trailing slash.
      urls.add(slug === "" ? `${siteUrl}/${prefix}` : `${siteUrl}/${prefix}/${slug}`);
    }
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
  const localesSource = await readFile(resolve(root, "src/lib/i18n/locales.ts"), "utf8");
  const siteUrl = parseSiteUrl(source);
  const host = new URL(siteUrl).host;

  // Manifest files follow one convention: src/content/<locale>/routes.ts, plus
  // routes.guides.ts where a locale splits its guide library out.
  const manifests = {};
  for (const { code } of parsePublishedLocales(localesSource)) {
    if (code === DEFAULT_LOCALE) continue;
    manifests[code] = await Promise.all(
      ["routes.ts", "routes.guides.ts"].map((file) =>
        readFile(resolve(root, `src/content/${code}/${file}`), "utf8").catch(() => ""),
      ),
    );
  }

  const urlList = buildAllLocaleUrls(source, localesSource, manifests);

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
