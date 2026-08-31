/**
 * Spanish tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing. Mirrors
 * tests/i18n/ptToolRoutePages.test.tsx and frToolRoutePages.test.tsx.
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
    path: "/es/imagen-a-pdf",
    load: () => import("@/app/(es)/es/imagen-a-pdf/page"),
    actionButton: /^Convertir a PDF$/i,
  },
  {
    path: "/es/unir-pdf",
    load: () => import("@/app/(es)/es/unir-pdf/page"),
    actionButton: /^Unir los PDF$/i,
  },
  {
    path: "/es/dividir-pdf",
    load: () => import("@/app/(es)/es/dividir-pdf/page"),
    actionButton: /^Dividir el PDF$/i,
  },
  {
    path: "/es/girar-pdf",
    load: () => import("@/app/(es)/es/girar-pdf/page"),
    actionButton: /^Girar el PDF$/i,
  },
  {
    path: "/es/pdf-a-imagenes",
    load: () => import("@/app/(es)/es/pdf-a-imagenes/page"),
    actionButton: /^Convertir en imágenes$/i,
  },
  {
    path: "/es/marca-de-agua-pdf",
    load: () => import("@/app/(es)/es/marca-de-agua-pdf/page"),
    actionButton: /^Añadir la marca de agua$/i,
  },
  {
    path: "/es/comprimir-pdf",
    load: () => import("@/app/(es)/es/comprimir-pdf/page"),
    actionButton: /^Comprimir el PDF$/i,
  },
  {
    path: "/es/pdf-a-word",
    load: () => import("@/app/(es)/es/pdf-a-word/page"),
    actionButton: /^Convertir a Word$/i,
  },
  {
    path: "/es/word-a-pdf",
    load: () => import("@/app/(es)/es/word-a-pdf/page"),
    actionButton: /^Convertir a PDF$/i,
  },
  {
    path: "/es/reordenar-paginas-pdf",
    load: () => import("@/app/(es)/es/reordenar-paginas-pdf/page"),
    actionButton: /^Reordenar el PDF$/i,
  },
  {
    path: "/es/extraer-paginas-pdf",
    load: () => import("@/app/(es)/es/extraer-paginas-pdf/page"),
    actionButton: /^Extraer páginas$/i,
  },
];

describe("every Spanish tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Spanish action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the es manifest publishes", () => {
    const manifestToolPaths = routesForLocale("es")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Spanish tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const es = getToolStrings("es", key);
      const en = getToolStrings("en", key);
      expect(es.title, key).not.toBe(en.title);
      expect(es.subtitle, key).not.toBe(en.subtitle);
      expect(es.actionIdle, key).not.toBe(en.actionIdle);
      expect(es.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Añadir", never the English "Upload" and
      // never "Subir", which would claim an upload the tool does not
      // perform.
      expect(es.steps[0], key).toBe("Añadir");
    }
  });

  it("resolves related-tool links to Spanish URLs", () => {
    const compress = getToolStrings("es", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/es/unir-pdf",
      "/es/dividir-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const es = getToolStrings("es", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(es[code].message, code).not.toBe(en[code].message);
      expect(es[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
