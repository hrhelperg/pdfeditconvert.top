/**
 * Japanese tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors
 * tests/i18n/esToolRoutePages.test.tsx, ptToolRoutePages.test.tsx,
 * frToolRoutePages.test.tsx, deToolRoutePages.test.tsx,
 * itToolRoutePages.test.tsx, arToolRoutePages.test.tsx,
 * ruToolRoutePages.test.tsx, plToolRoutePages.test.tsx and
 * csToolRoutePages.test.tsx.
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
    path: "/ja/gazo-kara-pdf",
    load: () => import("@/app/(ja)/ja/gazo-kara-pdf/page"),
    actionButton: /^PDFに変換$/i,
  },
  {
    path: "/ja/pdf-ketsugo",
    load: () => import("@/app/(ja)/ja/pdf-ketsugo/page"),
    actionButton: /^PDFを結合$/i,
  },
  {
    path: "/ja/pdf-bunkatsu",
    load: () => import("@/app/(ja)/ja/pdf-bunkatsu/page"),
    actionButton: /^PDFを分割$/i,
  },
  {
    path: "/ja/pdf-asshuku",
    load: () => import("@/app/(ja)/ja/pdf-asshuku/page"),
    actionButton: /^PDFを圧縮$/i,
  },
  {
    path: "/ja/pdf-kaiten",
    load: () => import("@/app/(ja)/ja/pdf-kaiten/page"),
    actionButton: /^PDFを回転$/i,
  },
  {
    path: "/ja/pdf-kara-gazo",
    load: () => import("@/app/(ja)/ja/pdf-kara-gazo/page"),
    actionButton: /^画像に変換$/i,
  },
  {
    path: "/ja/pdf-sukashi",
    load: () => import("@/app/(ja)/ja/pdf-sukashi/page"),
    actionButton: /^透かしを追加$/i,
  },
  {
    path: "/ja/pdf-kara-word",
    load: () => import("@/app/(ja)/ja/pdf-kara-word/page"),
    actionButton: /^Wordに変換$/i,
  },
  {
    path: "/ja/word-kara-pdf",
    load: () => import("@/app/(ja)/ja/word-kara-pdf/page"),
    actionButton: /^PDFに変換$/i,
  },
  {
    path: "/ja/pdf-page-narabekae",
    load: () => import("@/app/(ja)/ja/pdf-page-narabekae/page"),
    actionButton: /^PDFを並べ替え$/i,
  },
  {
    path: "/ja/pdf-page-chushutsu",
    load: () => import("@/app/(ja)/ja/pdf-page-chushutsu/page"),
    actionButton: /^ページを抽出$/i,
  },
];

describe("every Japanese tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Japanese action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the ja manifest publishes", () => {
    const manifestToolPaths = routesForLocale("ja")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Japanese tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const ja = getToolStrings("ja", key);
      const en = getToolStrings("en", key);
      expect(ja.title, key).not.toBe(en.title);
      expect(ja.subtitle, key).not.toBe(en.subtitle);
      expect(ja.actionIdle, key).not.toBe(en.actionIdle);
      expect(ja.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "追加", never the English "Upload" and
      // never "アップロード", which would claim an upload the tool does
      // not perform.
      expect(ja.steps[0], key).toBe("追加");
    }
  });

  it("resolves related-tool links to Japanese URLs", () => {
    const compress = getToolStrings("ja", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/ja/pdf-ketsugo",
      "/ja/pdf-bunkatsu",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const ja = getToolStrings("ja", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(ja[code].message, code).not.toBe(en[code].message);
      expect(ja[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
