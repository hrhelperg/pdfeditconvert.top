/**
 * Turkish tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors
 * tests/i18n/esToolRoutePages.test.tsx, ptToolRoutePages.test.tsx,
 * frToolRoutePages.test.tsx, deToolRoutePages.test.tsx,
 * itToolRoutePages.test.tsx, arToolRoutePages.test.tsx,
 * ruToolRoutePages.test.tsx, plToolRoutePages.test.tsx,
 * csToolRoutePages.test.tsx, jaToolRoutePages.test.tsx and
 * idToolRoutePages.test.tsx.
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
    path: "/tr/gorsel-pdf-donustur",
    load: () => import("@/app/(tr)/tr/gorsel-pdf-donustur/page"),
    actionButton: /^PDF'e dönüştür$/i,
  },
  {
    path: "/tr/pdf-birlestir",
    load: () => import("@/app/(tr)/tr/pdf-birlestir/page"),
    actionButton: /^PDF'leri birleştir$/i,
  },
  {
    path: "/tr/pdf-bol",
    load: () => import("@/app/(tr)/tr/pdf-bol/page"),
    actionButton: /^PDF'i böl$/i,
  },
  {
    path: "/tr/pdf-sikistir",
    load: () => import("@/app/(tr)/tr/pdf-sikistir/page"),
    actionButton: /^PDF'i sıkıştır$/i,
  },
  {
    path: "/tr/pdf-dondur",
    load: () => import("@/app/(tr)/tr/pdf-dondur/page"),
    actionButton: /^PDF'i döndür$/i,
  },
  {
    path: "/tr/pdf-gorsel-donustur",
    load: () => import("@/app/(tr)/tr/pdf-gorsel-donustur/page"),
    actionButton: /^Görsele dönüştür$/i,
  },
  {
    path: "/tr/pdf-filigran-ekle",
    load: () => import("@/app/(tr)/tr/pdf-filigran-ekle/page"),
    actionButton: /^Filigran ekle$/i,
  },
  {
    path: "/tr/pdf-word-donustur",
    load: () => import("@/app/(tr)/tr/pdf-word-donustur/page"),
    actionButton: /^Word'e dönüştür$/i,
  },
  {
    path: "/tr/word-pdf-donustur",
    load: () => import("@/app/(tr)/tr/word-pdf-donustur/page"),
    actionButton: /^PDF'e dönüştür$/i,
  },
  {
    path: "/tr/pdf-sayfa-sirala",
    load: () => import("@/app/(tr)/tr/pdf-sayfa-sirala/page"),
    actionButton: /^PDF'i yeniden sırala$/i,
  },
  {
    path: "/tr/pdf-sayfa-cikar",
    load: () => import("@/app/(tr)/tr/pdf-sayfa-cikar/page"),
    actionButton: /^Sayfaları çıkar$/i,
  },
];

describe("every Turkish tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Turkish action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the tr manifest publishes", () => {
    const manifestToolPaths = routesForLocale("tr")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Turkish tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const tr = getToolStrings("tr", key);
      const en = getToolStrings("en", key);
      expect(tr.title, key).not.toBe(en.title);
      expect(tr.subtitle, key).not.toBe(en.subtitle);
      expect(tr.actionIdle, key).not.toBe(en.actionIdle);
      expect(tr.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Ekle", never the English "Upload" and
      // never "Yükle", which would claim an upload the tool does not
      // perform.
      expect(tr.steps[0], key).toBe("Ekle");
    }
  });

  it("resolves related-tool links to Turkish URLs", () => {
    const compress = getToolStrings("tr", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/tr/pdf-birlestir",
      "/tr/pdf-bol",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const tr = getToolStrings("tr", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(tr[code].message, code).not.toBe(en[code].message);
      expect(tr[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
