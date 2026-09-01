/**
 * Polish tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors
 * tests/i18n/esToolRoutePages.test.tsx, ptToolRoutePages.test.tsx,
 * frToolRoutePages.test.tsx, deToolRoutePages.test.tsx,
 * itToolRoutePages.test.tsx, arToolRoutePages.test.tsx and
 * ruToolRoutePages.test.tsx.
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
    path: "/pl/obraz-do-pdf",
    load: () => import("@/app/(pl)/pl/obraz-do-pdf/page"),
    actionButton: /^Przekonwertuj na PDF$/i,
  },
  {
    path: "/pl/polacz-pdf",
    load: () => import("@/app/(pl)/pl/polacz-pdf/page"),
    actionButton: /^Scal pliki PDF$/i,
  },
  {
    path: "/pl/podziel-pdf",
    load: () => import("@/app/(pl)/pl/podziel-pdf/page"),
    actionButton: /^Podziel PDF$/i,
  },
  {
    path: "/pl/kompresuj-pdf",
    load: () => import("@/app/(pl)/pl/kompresuj-pdf/page"),
    actionButton: /^Kompresuj PDF$/i,
  },
  {
    path: "/pl/obroc-pdf",
    load: () => import("@/app/(pl)/pl/obroc-pdf/page"),
    actionButton: /^Obróć PDF$/i,
  },
  {
    path: "/pl/pdf-do-obrazow",
    load: () => import("@/app/(pl)/pl/pdf-do-obrazow/page"),
    actionButton: /^Przekonwertuj na obrazy$/i,
  },
  {
    path: "/pl/dodaj-znak-wodny-do-pdf",
    load: () => import("@/app/(pl)/pl/dodaj-znak-wodny-do-pdf/page"),
    actionButton: /^Dodaj znak wodny$/i,
  },
  {
    path: "/pl/pdf-do-word",
    load: () => import("@/app/(pl)/pl/pdf-do-word/page"),
    actionButton: /^Przekonwertuj na Word$/i,
  },
  {
    path: "/pl/word-do-pdf",
    load: () => import("@/app/(pl)/pl/word-do-pdf/page"),
    actionButton: /^Przekonwertuj na PDF$/i,
  },
  {
    path: "/pl/zmien-kolejnosc-stron-pdf",
    load: () => import("@/app/(pl)/pl/zmien-kolejnosc-stron-pdf/page"),
    actionButton: /^Zmień kolejność stron$/i,
  },
  {
    path: "/pl/wyodrebnij-strony-pdf",
    load: () => import("@/app/(pl)/pl/wyodrebnij-strony-pdf/page"),
    actionButton: /^Wyodrębnij strony$/i,
  },
];

describe("every Polish tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Polish action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the pl manifest publishes", () => {
    const manifestToolPaths = routesForLocale("pl")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Polish tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const pl = getToolStrings("pl", key);
      const en = getToolStrings("en", key);
      expect(pl.title, key).not.toBe(en.title);
      expect(pl.subtitle, key).not.toBe(en.subtitle);
      expect(pl.actionIdle, key).not.toBe(en.actionIdle);
      expect(pl.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Dodaj", never the English "Upload" and
      // never "Prześlij"/"Wgraj", which would claim an upload the tool
      // does not perform.
      expect(pl.steps[0], key).toBe("Dodaj");
    }
  });

  it("resolves related-tool links to Polish URLs", () => {
    const compress = getToolStrings("pl", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/pl/polacz-pdf",
      "/pl/podziel-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const pl = getToolStrings("pl", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(pl[code].message, code).not.toBe(en[code].message);
      expect(pl[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
