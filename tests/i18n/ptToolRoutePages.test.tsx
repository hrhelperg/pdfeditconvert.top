/**
 * Portuguese tool pages must render the same working converter as their
 * English counterparts — not a translated brochure.
 *
 * The failure this guards against is specific: a localized route that
 * renders content but drops its `toolSlot`, or a tool that mounts with a
 * missing `strings` prop and renders blank labels. Either produces a page
 * that looks finished and does nothing.
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
   * verb ("Dá para juntar PDFs protegidos por senha?"), and FAQ items are
   * buttons too. Matching loosely would find those instead.
   */
  actionButton: RegExp;
};

const CASES: RouteCase[] = [
  {
    path: "/pt-br/imagem-para-pdf",
    load: () => import("@/app/(pt-br)/pt-br/imagem-para-pdf/page"),
    actionButton: /^Converter para PDF$/i,
  },
  {
    path: "/pt-br/juntar-pdf",
    load: () => import("@/app/(pt-br)/pt-br/juntar-pdf/page"),
    actionButton: /^Juntar PDFs$/i,
  },
  {
    path: "/pt-br/dividir-pdf",
    load: () => import("@/app/(pt-br)/pt-br/dividir-pdf/page"),
    actionButton: /^Dividir PDF$/i,
  },
  {
    path: "/pt-br/girar-pdf",
    load: () => import("@/app/(pt-br)/pt-br/girar-pdf/page"),
    actionButton: /^Girar PDF$/i,
  },
  {
    path: "/pt-br/pdf-para-imagem",
    load: () => import("@/app/(pt-br)/pt-br/pdf-para-imagem/page"),
    actionButton: /^Converter em imagens$/i,
  },
  {
    path: "/pt-br/adicionar-marca-dagua-pdf",
    load: () => import("@/app/(pt-br)/pt-br/adicionar-marca-dagua-pdf/page"),
    actionButton: /^Adicionar marca d'água$/i,
  },
  {
    path: "/pt-br/comprimir-pdf",
    load: () => import("@/app/(pt-br)/pt-br/comprimir-pdf/page"),
    actionButton: /^Comprimir PDF$/i,
  },
  {
    path: "/pt-br/pdf-para-word",
    load: () => import("@/app/(pt-br)/pt-br/pdf-para-word/page"),
    actionButton: /^Converter para Word$/i,
  },
  {
    path: "/pt-br/word-para-pdf",
    load: () => import("@/app/(pt-br)/pt-br/word-para-pdf/page"),
    actionButton: /^Converter para PDF$/i,
  },
  {
    path: "/pt-br/organizar-paginas-pdf",
    load: () => import("@/app/(pt-br)/pt-br/organizar-paginas-pdf/page"),
    actionButton: /^Reorganizar PDF$/i,
  },
  {
    path: "/pt-br/extrair-paginas-pdf",
    load: () => import("@/app/(pt-br)/pt-br/extrair-paginas-pdf/page"),
    actionButton: /^Extrair páginas$/i,
  },
];

describe("every Portuguese tool route renders its interactive tool", () => {
  for (const c of CASES) {
    it(`${c.path} shows an upload zone and its Portuguese action button`, async () => {
      const { default: Page } = await c.load();
      const { container } = render(<Page />);
      expect(screen.getByRole("button", { name: c.actionButton })).toBeInTheDocument();
      expect(container.querySelector('input[type="file"]')).not.toBeNull();
    });
  }

  it("covers every tool route the pt-BR manifest publishes", () => {
    const manifestToolPaths = routesForLocale("pt-BR")
      .filter((r) => r.category === "tool" && r.routeId !== "pdf-tools")
      .map((r) => r.path)
      .sort();
    expect(CASES.map((c) => c.path).sort()).toEqual(manifestToolPaths);
  });
});

describe("Portuguese tool copy", () => {
  it("translates every tool's shell, actions and errors", () => {
    for (const key of TOOL_KEYS) {
      const pt = getToolStrings("pt-BR", key);
      const en = getToolStrings("en", key);
      expect(pt.title, key).not.toBe(en.title);
      expect(pt.subtitle, key).not.toBe(en.subtitle);
      expect(pt.actionIdle, key).not.toBe(en.actionIdle);
      expect(pt.successTitle, key).not.toBe(en.successTitle);
      // The step indicator says "Adicionar", never the English "Upload" —
      // and never a literal "Enviar", which would claim an upload the tool
      // does not perform.
      expect(pt.steps[0], key).toBe("Adicionar");
    }
  });

  it("resolves related-tool links to Portuguese URLs", () => {
    const compress = getToolStrings("pt-BR", "compress-pdf");
    expect(compress.related.map((r) => r.path)).toEqual([
      "/pt-br/juntar-pdf",
      "/pt-br/dividir-pdf",
    ]);
  });

  it("translates every structured error code", () => {
    const en = getToolStrings("en", "compress-pdf").common.errors;
    const pt = getToolStrings("pt-BR", "compress-pdf").common.errors;
    for (const code of Object.keys(en) as (keyof typeof en)[]) {
      expect(pt[code].message, code).not.toBe(en[code].message);
      expect(pt[code].message.length, code).toBeGreaterThan(0);
    }
  });
});
