/**
 * Italian tool pages must render the same working converter as their
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
    path: "/it/immagine-in-pdf",
    load: () => import("@/app/(it)/it/immagine-in-pdf/page"),
    actionButton: /^Converti in PDF$/i,
  },
  {
    path: "/it/unisci-pdf",
    load: () => import("@/app/(it)/it/unisci-pdf/page"),
    actionButton: /^Unisci i PDF$/i,
  },
  {
    path: "/it/dividi-pdf",
    load: () => import("@/app/(it)/it/dividi-pdf/page"),
    actionButton: /^Dividi il PDF$/i,
  },
  {
    path: "/it/ruota-pdf",
    load: () => import("@/app/(it)/it/ruota-pdf/page"),
    actionButton: /^Ruota il PDF$/i,
  },
  {
    path: "/it/pdf-in-immagini",
    load: () => import("@/app/(it)/it/pdf-in-immagini/page"),
    actionButton: /^Converti in immagini$/i,
  },
  {
    path: "/it/filigrana-pdf",
    load: () => import("@/app/(it)/it/filigrana-pdf/page"),
    actionButton: /^Aggiungi la filigrana$/i,
  },
  {
    path: "/it/comprimi-pdf",
    load: () => import("@/app/(it)/it/comprimi-pdf/page"),
    actionButton: /^Comprimi il PDF$/i,
  },
  {
    path: "/it/pdf-in-word",
    load: () => import("@/app/(it)/it/pdf-in-word/page"),
    actionButton: /^Converti in Word$/i,
  },
  {
    path: "/it/word-in-pdf",
    load: () => import("@/app/(it)/it/word-in-pdf/page"),
    actionButton: /^Converti in PDF$/i,
  },
  {
    path: "/it/riordina-pagine-pdf",
    load: () => import("@/app/(it)/it/riordina-pagine-pdf/page"),
    actionButton: /^Riordina il PDF$/i,
  },
  {
    path: "/it/estrai-pagine-pdf",
    load: () => import("@/app/(it)/it/estrai-pagine-pdf/page"),
    actionButton: /^Estrai pagine$/i,
  },
];

describe("every Italian tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Italian action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the it manifest publishes", () => {
    const manifestToolPaths = routesForLocale("it")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Italian tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const it = getToolStrings("it", key);
      const en = getToolStrings("en", key);
      expect(it.title, key).not.toBe(en.title);
      expect(it.subtitle, key).not.toBe(en.subtitle);
      expect(it.actionIdle, key).not.toBe(en.actionIdle);
      expect(it.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Aggiungi", never the English "Upload" and
      // never "Carica", which would claim an upload the tool does not
      // perform.
      expect(it.steps[0], key).toBe("Aggiungi");
    }
  });

  it("resolves related-tool links to Italian URLs", () => {
    const compress = getToolStrings("it", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/it/unisci-pdf",
      "/it/dividi-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const it = getToolStrings("it", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(it[code].message, code).not.toBe(en[code].message);
      expect(it[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
