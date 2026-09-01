/**
 * Czech tool pages must render the same working converter as their
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
    path: "/cs/obrazek-do-pdf",
    load: () => import("@/app/(cs)/cs/obrazek-do-pdf/page"),
    actionButton: /^Převést do PDF$/i,
  },
  {
    path: "/cs/sloucit-pdf",
    load: () => import("@/app/(cs)/cs/sloucit-pdf/page"),
    actionButton: /^Sloučit PDF$/i,
  },
  {
    path: "/cs/rozdelit-pdf",
    load: () => import("@/app/(cs)/cs/rozdelit-pdf/page"),
    actionButton: /^Rozdělit PDF$/i,
  },
  {
    path: "/cs/zkomprimovat-pdf",
    load: () => import("@/app/(cs)/cs/zkomprimovat-pdf/page"),
    actionButton: /^Komprimovat PDF$/i,
  },
  {
    path: "/cs/otocit-pdf",
    load: () => import("@/app/(cs)/cs/otocit-pdf/page"),
    actionButton: /^Otočit PDF$/i,
  },
  {
    path: "/cs/pdf-do-obrazku",
    load: () => import("@/app/(cs)/cs/pdf-do-obrazku/page"),
    actionButton: /^Převést na obrázky$/i,
  },
  {
    path: "/cs/pridat-vodoznak-do-pdf",
    load: () => import("@/app/(cs)/cs/pridat-vodoznak-do-pdf/page"),
    actionButton: /^Přidat vodoznak$/i,
  },
  {
    path: "/cs/pdf-do-wordu",
    load: () => import("@/app/(cs)/cs/pdf-do-wordu/page"),
    actionButton: /^Převést do Wordu$/i,
  },
  {
    path: "/cs/word-do-pdf",
    load: () => import("@/app/(cs)/cs/word-do-pdf/page"),
    actionButton: /^Převést do PDF$/i,
  },
  {
    path: "/cs/zmenit-poradi-stranek-pdf",
    load: () => import("@/app/(cs)/cs/zmenit-poradi-stranek-pdf/page"),
    actionButton: /^Změnit pořadí PDF$/i,
  },
  {
    path: "/cs/extrahovat-stranky-pdf",
    load: () => import("@/app/(cs)/cs/extrahovat-stranky-pdf/page"),
    actionButton: /^Extrahovat stránky$/i,
  },
];

describe("every Czech tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Czech action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the cs manifest publishes", () => {
    const manifestToolPaths = routesForLocale("cs")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Czech tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const cs = getToolStrings("cs", key);
      const en = getToolStrings("en", key);
      expect(cs.title, key).not.toBe(en.title);
      expect(cs.subtitle, key).not.toBe(en.subtitle);
      expect(cs.actionIdle, key).not.toBe(en.actionIdle);
      expect(cs.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Přidat", never the English "Upload" and
      // never "Nahrát", which would claim an upload the tool does not
      // perform.
      expect(cs.steps[0], key).toBe("Přidat");
    }
  });

  it("resolves related-tool links to Czech URLs", () => {
    const compress = getToolStrings("cs", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/cs/sloucit-pdf",
      "/cs/rozdelit-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const cs = getToolStrings("cs", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(cs[code].message, code).not.toBe(en[code].message);
      expect(cs[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
