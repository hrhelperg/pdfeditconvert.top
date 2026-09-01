/**
 * Russian tool pages must render the same working converter as their
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
    path: "/ru/izobrazhenie-v-pdf",
    load: () => import("@/app/(ru)/ru/izobrazhenie-v-pdf/page"),
    actionButton: /^Конвертировать в PDF$/i,
  },
  {
    path: "/ru/obedinit-pdf",
    load: () => import("@/app/(ru)/ru/obedinit-pdf/page"),
    actionButton: /^Объединить PDF$/i,
  },
  {
    path: "/ru/razdelit-pdf",
    load: () => import("@/app/(ru)/ru/razdelit-pdf/page"),
    actionButton: /^Разделить PDF$/i,
  },
  {
    path: "/ru/povernut-pdf",
    load: () => import("@/app/(ru)/ru/povernut-pdf/page"),
    actionButton: /^Повернуть PDF$/i,
  },
  {
    path: "/ru/pdf-v-izobrazheniya",
    load: () => import("@/app/(ru)/ru/pdf-v-izobrazheniya/page"),
    actionButton: /^Конвертировать в изображения$/i,
  },
  {
    path: "/ru/vodyanoi-znak-na-pdf",
    load: () => import("@/app/(ru)/ru/vodyanoi-znak-na-pdf/page"),
    actionButton: /^Добавить водяной знак$/i,
  },
  {
    path: "/ru/szhat-pdf",
    load: () => import("@/app/(ru)/ru/szhat-pdf/page"),
    actionButton: /^Сжать PDF$/i,
  },
  {
    path: "/ru/pdf-v-word",
    load: () => import("@/app/(ru)/ru/pdf-v-word/page"),
    actionButton: /^Конвертировать в Word$/i,
  },
  {
    path: "/ru/word-v-pdf",
    load: () => import("@/app/(ru)/ru/word-v-pdf/page"),
    actionButton: /^Конвертировать в PDF$/i,
  },
  {
    path: "/ru/izmenit-poryadok-stranits-pdf",
    load: () => import("@/app/(ru)/ru/izmenit-poryadok-stranits-pdf/page"),
    actionButton: /^Изменить порядок PDF$/i,
  },
  {
    path: "/ru/izvlech-stranitsy-pdf",
    load: () => import("@/app/(ru)/ru/izvlech-stranitsy-pdf/page"),
    actionButton: /^Извлечь страницы$/i,
  },
];

describe("every Russian tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Russian action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the ru manifest publishes", () => {
    const manifestToolPaths = routesForLocale("ru")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Russian tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const ru = getToolStrings("ru", key);
      const en = getToolStrings("en", key);
      expect(ru.title, key).not.toBe(en.title);
      expect(ru.subtitle, key).not.toBe(en.subtitle);
      expect(ru.actionIdle, key).not.toBe(en.actionIdle);
      expect(ru.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Добавить", never the English "Upload" and
      // never "Загрузить", which would claim an upload the tool does not
      // perform.
      expect(ru.steps[0], key).toBe("Добавить");
    }
  });

  it("resolves related-tool links to Russian URLs", () => {
    const compress = getToolStrings("ru", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/ru/obedinit-pdf",
      "/ru/razdelit-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const ru = getToolStrings("ru", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(ru[code].message, code).not.toBe(en[code].message);
      expect(ru[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
