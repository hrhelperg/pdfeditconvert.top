/**
 * French tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors tests/i18n/ptToolRoutePages.test.tsx.
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
    path: "/fr/images-vers-pdf",
    load: () => import("@/app/(fr)/fr/images-vers-pdf/page"),
    actionButton: /^Convertir en PDF$/i,
  },
  {
    path: "/fr/fusionner-pdf",
    load: () => import("@/app/(fr)/fr/fusionner-pdf/page"),
    actionButton: /^Fusionner les PDF$/i,
  },
  {
    path: "/fr/diviser-pdf",
    load: () => import("@/app/(fr)/fr/diviser-pdf/page"),
    actionButton: /^Diviser le PDF$/i,
  },
  {
    path: "/fr/faire-pivoter-pdf",
    load: () => import("@/app/(fr)/fr/faire-pivoter-pdf/page"),
    actionButton: /^Faire pivoter le PDF$/i,
  },
  {
    path: "/fr/pdf-vers-images",
    load: () => import("@/app/(fr)/fr/pdf-vers-images/page"),
    actionButton: /^Convertir en images$/i,
  },
  {
    path: "/fr/ajouter-filigrane-pdf",
    load: () => import("@/app/(fr)/fr/ajouter-filigrane-pdf/page"),
    actionButton: /^Ajouter le filigrane$/i,
  },
  {
    path: "/fr/compresser-pdf",
    load: () => import("@/app/(fr)/fr/compresser-pdf/page"),
    actionButton: /^Compresser le PDF$/i,
  },
  {
    path: "/fr/pdf-vers-word",
    load: () => import("@/app/(fr)/fr/pdf-vers-word/page"),
    actionButton: /^Convertir en Word$/i,
  },
  {
    path: "/fr/word-vers-pdf",
    load: () => import("@/app/(fr)/fr/word-vers-pdf/page"),
    actionButton: /^Convertir en PDF$/i,
  },
  {
    path: "/fr/reorganiser-pages-pdf",
    load: () => import("@/app/(fr)/fr/reorganiser-pages-pdf/page"),
    actionButton: /^Réorganiser le PDF$/i,
  },
  {
    path: "/fr/extraire-pages-pdf",
    load: () => import("@/app/(fr)/fr/extraire-pages-pdf/page"),
    actionButton: /^Extraire les pages$/i,
  },
];

describe("every French tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its French action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the fr manifest publishes", () => {
    const manifestToolPaths = routesForLocale("fr")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("French tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const fr = getToolStrings("fr", key);
      const en = getToolStrings("en", key);
      expect(fr.title, key).not.toBe(en.title);
      expect(fr.subtitle, key).not.toBe(en.subtitle);
      expect(fr.actionIdle, key).not.toBe(en.actionIdle);
      expect(fr.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Ajouter", never the English "Upload" and
      // never "Envoyer"/"Téléverser", which would claim an upload the tool
      // does not perform.
      expect(fr.steps[0], key).toBe("Ajouter");
    }
  });

  it("resolves related-tool links to French URLs", () => {
    const compress = getToolStrings("fr", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/fr/fusionner-pdf",
      "/fr/diviser-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const fr = getToolStrings("fr", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(fr[code].message, code).not.toBe(en[code].message);
      expect(fr[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
