/**
 * Indonesian tool pages must render the same working converter as their
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
 * csToolRoutePages.test.tsx and jaToolRoutePages.test.tsx.
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
    path: "/id/gambar-ke-pdf",
    load: () => import("@/app/(id)/id/gambar-ke-pdf/page"),
    actionButton: /^Konversi ke PDF$/i,
  },
  {
    path: "/id/gabung-pdf",
    load: () => import("@/app/(id)/id/gabung-pdf/page"),
    actionButton: /^Gabungkan PDF$/i,
  },
  {
    path: "/id/bagi-pdf",
    load: () => import("@/app/(id)/id/bagi-pdf/page"),
    actionButton: /^Bagi PDF$/i,
  },
  {
    path: "/id/kompres-pdf",
    load: () => import("@/app/(id)/id/kompres-pdf/page"),
    actionButton: /^Kompres PDF$/i,
  },
  {
    path: "/id/putar-pdf",
    load: () => import("@/app/(id)/id/putar-pdf/page"),
    actionButton: /^Putar PDF$/i,
  },
  {
    path: "/id/pdf-ke-gambar",
    load: () => import("@/app/(id)/id/pdf-ke-gambar/page"),
    actionButton: /^Konversi ke gambar$/i,
  },
  {
    path: "/id/tambah-watermark-pdf",
    load: () => import("@/app/(id)/id/tambah-watermark-pdf/page"),
    actionButton: /^Tambahkan watermark$/i,
  },
  {
    path: "/id/pdf-ke-word",
    load: () => import("@/app/(id)/id/pdf-ke-word/page"),
    actionButton: /^Konversi ke Word$/i,
  },
  {
    path: "/id/word-ke-pdf",
    load: () => import("@/app/(id)/id/word-ke-pdf/page"),
    actionButton: /^Konversi ke PDF$/i,
  },
  {
    path: "/id/urutkan-ulang-halaman-pdf",
    load: () => import("@/app/(id)/id/urutkan-ulang-halaman-pdf/page"),
    actionButton: /^Urutkan ulang PDF$/i,
  },
  {
    path: "/id/ekstrak-halaman-pdf",
    load: () => import("@/app/(id)/id/ekstrak-halaman-pdf/page"),
    actionButton: /^Ekstrak halaman$/i,
  },
];

describe("every Indonesian tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Indonesian action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the id manifest publishes", () => {
    const manifestToolPaths = routesForLocale("id")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Indonesian tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const id = getToolStrings("id", key);
      const en = getToolStrings("en", key);
      expect(id.title, key).not.toBe(en.title);
      expect(id.subtitle, key).not.toBe(en.subtitle);
      expect(id.actionIdle, key).not.toBe(en.actionIdle);
      expect(id.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Tambahkan", never the English "Upload" and
      // never "Unggah", which would claim an upload the tool does not
      // perform.
      expect(id.steps[0], key).toBe("Tambahkan");
    }
  });

  it("resolves related-tool links to Indonesian URLs", () => {
    const compress = getToolStrings("id", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/id/gabung-pdf",
      "/id/bagi-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const id = getToolStrings("id", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(id[code].message, code).not.toBe(en[code].message);
      expect(id[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
