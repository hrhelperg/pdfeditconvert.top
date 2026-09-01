/**
 * Arabic tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors
 * tests/i18n/esToolRoutePages.test.tsx, ptToolRoutePages.test.tsx,
 * frToolRoutePages.test.tsx, deToolRoutePages.test.tsx and
 * itToolRoutePages.test.tsx.
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
    path: "/ar/soura-ila-pdf",
    load: () => import("@/app/(ar)/ar/soura-ila-pdf/page"),
    actionButton: /^التحويل إلى PDF$/i,
  },
  {
    path: "/ar/damj-pdf",
    load: () => import("@/app/(ar)/ar/damj-pdf/page"),
    actionButton: /^دمج ملفات PDF$/i,
  },
  {
    path: "/ar/taqseem-pdf",
    load: () => import("@/app/(ar)/ar/taqseem-pdf/page"),
    actionButton: /^تقسيم PDF$/i,
  },
  {
    path: "/ar/tadweer-pdf",
    load: () => import("@/app/(ar)/ar/tadweer-pdf/page"),
    actionButton: /^تدوير PDF$/i,
  },
  {
    path: "/ar/pdf-ila-suwar",
    load: () => import("@/app/(ar)/ar/pdf-ila-suwar/page"),
    actionButton: /^التحويل إلى صور$/i,
  },
  {
    path: "/ar/alama-maiya-lipdf",
    load: () => import("@/app/(ar)/ar/alama-maiya-lipdf/page"),
    actionButton: /^إضافة العلامة المائية$/i,
  },
  {
    path: "/ar/daght-pdf",
    load: () => import("@/app/(ar)/ar/daght-pdf/page"),
    actionButton: /^ضغط PDF$/i,
  },
  {
    path: "/ar/pdf-ila-word",
    load: () => import("@/app/(ar)/ar/pdf-ila-word/page"),
    actionButton: /^التحويل إلى Word$/i,
  },
  {
    path: "/ar/word-ila-pdf",
    load: () => import("@/app/(ar)/ar/word-ila-pdf/page"),
    actionButton: /^التحويل إلى PDF$/i,
  },
  {
    path: "/ar/tarteeb-safahat-pdf",
    load: () => import("@/app/(ar)/ar/tarteeb-safahat-pdf/page"),
    actionButton: /^إعادة ترتيب PDF$/i,
  },
  {
    path: "/ar/istikhraj-safahat-pdf",
    load: () => import("@/app/(ar)/ar/istikhraj-safahat-pdf/page"),
    actionButton: /^استخراج الصفحات$/i,
  },
];

describe("every Arabic tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Arabic action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the ar manifest publishes", () => {
    const manifestToolPaths = routesForLocale("ar")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Arabic tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const ar = getToolStrings("ar", key);
      const en = getToolStrings("en", key);
      expect(ar.title, key).not.toBe(en.title);
      expect(ar.subtitle, key).not.toBe(en.subtitle);
      expect(ar.actionIdle, key).not.toBe(en.actionIdle);
      expect(ar.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "إضافة", never the English "Upload" and
      // never "رفع", which would claim an upload the tool does not
      // perform.
      expect(ar.steps[0], key).toBe("إضافة");
    }
  });

  it("resolves related-tool links to Arabic URLs", () => {
    const compress = getToolStrings("ar", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/ar/damj-pdf",
      "/ar/taqseem-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const ar = getToolStrings("ar", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(ar[code].message, code).not.toBe(en[code].message);
      expect(ar[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
