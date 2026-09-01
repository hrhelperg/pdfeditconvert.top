/**
 * German tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors
 * tests/i18n/esToolRoutePages.test.tsx, ptToolRoutePages.test.tsx and
 * frToolRoutePages.test.tsx.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import { routesForLocale } from "@/lib/i18n/routeMap";
import { getToolStrings } from "@/lib/i18n/registry";
import { TOOL_KEYS } from "@/lib/i18n/toolStrings";

type RouteCase = {
  path: string;
  load: () => Promise<{ default: ComponentType }>;
  /**
   * Anchored: several FAQ questions on the same page contain the action
   * verb, and FAQ items are buttons too. Matching loosely would find those
   * instead.
   */
  actionButton: RegExp;
};

const CASES: RouteCase[] = [
  {
    path: "/de/bild-zu-pdf",
    load: () => import("@/app/(de)/de/bild-zu-pdf/page"),
    actionButton: /^In PDF umwandeln$/i,
  },
  {
    path: "/de/pdf-zusammenfuehren",
    load: () => import("@/app/(de)/de/pdf-zusammenfuehren/page"),
    actionButton: /^PDFs zusammenführen$/i,
  },
  {
    path: "/de/pdf-teilen",
    load: () => import("@/app/(de)/de/pdf-teilen/page"),
    actionButton: /^PDF teilen$/i,
  },
  {
    path: "/de/pdf-drehen",
    load: () => import("@/app/(de)/de/pdf-drehen/page"),
    actionButton: /^PDF drehen$/i,
  },
  {
    path: "/de/pdf-zu-bildern",
    load: () => import("@/app/(de)/de/pdf-zu-bildern/page"),
    actionButton: /^In Bilder umwandeln$/i,
  },
  {
    path: "/de/wasserzeichen-zu-pdf",
    load: () => import("@/app/(de)/de/wasserzeichen-zu-pdf/page"),
    actionButton: /^Wasserzeichen hinzufügen$/i,
  },
  {
    path: "/de/pdf-komprimieren",
    load: () => import("@/app/(de)/de/pdf-komprimieren/page"),
    actionButton: /^PDF komprimieren$/i,
  },
  {
    path: "/de/pdf-zu-word",
    load: () => import("@/app/(de)/de/pdf-zu-word/page"),
    actionButton: /^In Word umwandeln$/i,
  },
  {
    path: "/de/word-zu-pdf",
    load: () => import("@/app/(de)/de/word-zu-pdf/page"),
    actionButton: /^In PDF umwandeln$/i,
  },
  {
    path: "/de/pdf-seiten-neu-anordnen",
    load: () => import("@/app/(de)/de/pdf-seiten-neu-anordnen/page"),
    actionButton: /^PDF neu anordnen$/i,
  },
  {
    path: "/de/pdf-seiten-extrahieren",
    load: () => import("@/app/(de)/de/pdf-seiten-extrahieren/page"),
    actionButton: /^Seiten extrahieren$/i,
  },
];

describe("every German tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its German action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the de manifest publishes", () => {
    const manifestToolPaths = routesForLocale("de")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("German tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const de = getToolStrings("de", key);
      const en = getToolStrings("en", key);
      expect(de.title, key).not.toBe(en.title);
      expect(de.subtitle, key).not.toBe(en.subtitle);
      expect(de.actionIdle, key).not.toBe(en.actionIdle);
      expect(de.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Hinzufügen", never the English "Upload"
      // and never "Hochladen", which would claim an upload the tool does
      // not perform.
      expect(de.steps[0], key).toBe("Hinzufügen");
    }
  });

  it("resolves related-tool links to German URLs", () => {
    const compress = getToolStrings("de", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/de/pdf-zusammenfuehren",
      "/de/pdf-teilen",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const de = getToolStrings("de", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(de[code].message, code).not.toBe(en[code].message);
      expect(de[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
