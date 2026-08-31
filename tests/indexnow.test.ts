// tests/indexnow.test.ts
//
// Guards the IndexNow integration: the verification key file must be served
// byte-exact at /<key>.txt, and scripts/submit-indexnow.mjs parses the route
// registry textually (it can't import TypeScript), so its output must stay
// identical to what src/app/sitemap.ts derives from ROUTES. If the registry's
// shape changes and the parser drifts, this fails before a bad submission.
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { ROUTES, SITE_HOST, SITE_URL } from "@/lib/routes";
import { allPublishedRoutes } from "@/lib/i18n/routeMap";
import { publishedLocaleCodes } from "@/lib/i18n/locales";
import {
  buildAllLocaleUrls,
  buildUrlList,
  parsePublishedLocales,
  parseRoutes,
  parseSiteUrl,
} from "../scripts/submit-indexnow.mjs";

const INDEXNOW_KEY = "ae968b1d0c1d49219ca34047b390a95a";
const root = path.resolve(__dirname, "..");
const routesSource = readFileSync(path.resolve(root, "src/lib/routes.ts"), "utf8");
const localesSource = readFileSync(
  path.resolve(root, "src/lib/i18n/locales.ts"),
  "utf8",
);

/** The manifest sources main() supplies, read the same way. */
function localeManifests() {
  const manifests: Record<string, string[]> = {};
  for (const code of publishedLocaleCodes()) {
    if (code === "en") continue;
    manifests[code] = ["routes.ts", "routes.guides.ts"].map((file) => {
      try {
        return readFileSync(path.resolve(root, `src/content/${code}/${file}`), "utf8");
      } catch {
        return "";
      }
    });
  }
  return manifests;
}

describe("IndexNow key file", () => {
  const keyFile = path.resolve(root, "public", `${INDEXNOW_KEY}.txt`);

  it("exists in public/ and contains exactly the key", () => {
    const raw = readFileSync(keyFile, "utf8");
    // Byte-exact except an optional single trailing newline.
    expect(raw === INDEXNOW_KEY || raw === `${INDEXNOW_KEY}\n`).toBe(true);
  });
});

describe("package.json wiring", () => {
  it("exposes indexnow:submit as a manual script", () => {
    const pkg = JSON.parse(readFileSync(path.resolve(root, "package.json"), "utf8"));
    expect(pkg.scripts["indexnow:submit"]).toBe("node scripts/submit-indexnow.mjs");
    // Never auto-run: no lifecycle or build hook may reference it.
    for (const [name, cmd] of Object.entries<string>(pkg.scripts)) {
      if (name === "indexnow:submit") continue;
      expect(cmd).not.toContain("submit-indexnow");
    }
  });
});

describe("submit-indexnow.mjs source", () => {
  const scriptSource = readFileSync(
    path.resolve(root, "scripts/submit-indexnow.mjs"),
    "utf8",
  );

  it("reads the key from the environment and never hardcodes it", () => {
    expect(scriptSource).toContain("process.env.INDEXNOW_KEY");
    expect(scriptSource).not.toContain(INDEXNOW_KEY);
  });

  it("derives the host from the registry rather than hardcoding one", () => {
    // Regression guard for the Aug 2026 indexation incident: the submitted
    // host must follow SITE_URL, so a canonical-host change can never leave
    // IndexNow pointing at an origin that redirects.
    expect(scriptSource).toContain("parseSiteUrl");
    expect(scriptSource).toContain("NEXT_PUBLIC_SITE_URL");
  });
});

describe("URL list generation", () => {
  it("parses SITE_URL identically to the registry export", () => {
    expect(parseSiteUrl(routesSource)).toBe(SITE_URL);
  });

  it("parses every registry entry", () => {
    expect(parseRoutes(routesSource)).toHaveLength(ROUTES.length);
  });

  it("matches the sitemap-visible URL set exactly", () => {
    const expected = ROUTES.filter((r) => !r.hidden).map(
      (r) => `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    );
    expect(buildUrlList(routesSource).sort()).toEqual([...expected].sort());
  });

  it("produces unique URLs on the canonical host only", () => {
    const urls = buildUrlList(routesSource);
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) {
      expect(new URL(url).host).toBe(SITE_HOST);
      expect(url.startsWith(SITE_URL)).toBe(true);
    }
  });
});

describe("locale coverage", () => {
  it("parses the same published locales the app config exposes", () => {
    expect(parsePublishedLocales(localesSource).map((l: { code: string }) => l.code).sort()).toEqual(
      [...publishedLocaleCodes()].sort(),
    );
  });

  it("never submits a locale that isn't published", () => {
    const codes = parsePublishedLocales(localesSource).map((l: { code: string }) => l.code);
    for (const unpublished of ["de", "ja", "id", "ar", "ru", "pl", "cs", "it", "tr"]) {
      expect(codes).not.toContain(unpublished);
    }
  });

  it("submits every URL of every published locale, and nothing else", () => {
    // The strongest available check: the script parses the manifests
    // textually, so its output must equal what the typed route map resolves.
    const expected = allPublishedRoutes().map(
      (r) => `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    );
    const actual = buildAllLocaleUrls(routesSource, localesSource, localeManifests());
    expect([...actual].sort()).toEqual([...expected].sort());
  });

  it("refuses to submit when a published locale has no manifest", () => {
    expect(() => buildAllLocaleUrls(routesSource, localesSource, {})).toThrow(
      /published but no route manifest/,
    );
  });
});
