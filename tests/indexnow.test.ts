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
import { ROUTES, SITE_URL } from "@/lib/routes";
import {
  buildUrlList,
  parseRoutes,
  parseSiteUrl,
} from "../scripts/submit-indexnow.mjs";

const INDEXNOW_KEY = "ae968b1d0c1d49219ca34047b390a95a";
const root = path.resolve(__dirname, "..");
const routesSource = readFileSync(path.resolve(root, "src/lib/routes.ts"), "utf8");

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

  it("never references the non-canonical www host", () => {
    expect(scriptSource).not.toContain("www.pdfeditconvert.top");
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

  it("produces unique, canonical apex URLs only", () => {
    const urls = buildUrlList(routesSource);
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) {
      expect(new URL(url).host).toBe("pdfeditconvert.top");
      expect(url.startsWith("https://pdfeditconvert.top")).toBe(true);
    }
  });
});
