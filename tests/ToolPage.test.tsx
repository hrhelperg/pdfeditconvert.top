import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolPage } from "@/components/sections/ToolPage";
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: { eyebrow: "Demo", h1: "Run this thing", lead: "It does stuff." },
  privacyNote: "Your files stay on your device.",
  howTo: {
    heading: "How to use",
    steps: [{ title: "Open", body: "Click upload." }],
  },
  useCases: { heading: "When to use", items: [{ title: "Case", body: "Body" }] },
  limitations: { heading: "Limits", items: [{ title: "Limit", body: "Body" }] },
  related: [{ label: "Related", path: "/merge-pdf" }],
  faq: [{ q: "Q?", a: "A." }],
  appCta: { heading: "Get the app", sub: "Free on iOS and Android." },
};

describe("ToolPage", () => {
  it("renders H1 and privacy note in initial HTML (server)", () => {
    render(
      <ToolPage content={content} locale="en" toolSlot={<div data-testid="slot">tool</div>} />,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Run this thing");
    expect(screen.getByText(/files stay on your device/i)).toBeInTheDocument();
    expect(screen.getByTestId("slot")).toBeInTheDocument();
  });

  it("renders FAQ items", () => {
    render(<ToolPage content={content} locale="en" toolSlot={<div />} />);
    expect(screen.getByText("Q?")).toBeInTheDocument();
  });

  it("renders related links", () => {
    render(<ToolPage content={content} locale="en" toolSlot={<div />} />);
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/merge-pdf",
    );
  });

  it("localizes chrome and internal links for pt-BR", () => {
    render(<ToolPage content={content} locale="pt-BR" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/pt-br/juntar-pdf",
    );
    expect(screen.getByText("Perguntas frequentes")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Início/ }),
    ).toHaveAttribute("href", "/pt-br");
  });

  it("localizes chrome and internal links for fr", () => {
    render(<ToolPage content={content} locale="fr" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/fr/fusionner-pdf",
    );
    expect(screen.getByText("Questions fréquentes")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Accueil/ }),
    ).toHaveAttribute("href", "/fr");
  });

  it("localizes chrome and internal links for es", () => {
    render(<ToolPage content={content} locale="es" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/es/unir-pdf",
    );
    expect(screen.getByText("Preguntas frecuentes")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Inicio/ }),
    ).toHaveAttribute("href", "/es");
  });

  it("localizes chrome and internal links for de", () => {
    render(<ToolPage content={content} locale="de" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/de/pdf-zusammenfuehren",
    );
    expect(screen.getByText("Häufig gestellte Fragen")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Start/ }),
    ).toHaveAttribute("href", "/de");
  });

  it("localizes chrome and internal links for it", () => {
    render(<ToolPage content={content} locale="it" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/it/unisci-pdf",
    );
    expect(screen.getByText("Domande frequenti")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Home/ }),
    ).toHaveAttribute("href", "/it");
  });

  it("localizes chrome and internal links for ar", () => {
    render(<ToolPage content={content} locale="ar" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/ar/damj-pdf",
    );
    expect(screen.getByText("الأسئلة الشائعة")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /الرئيسية/ }),
    ).toHaveAttribute("href", "/ar");
  });

  it("localizes chrome and internal links for ru", () => {
    render(<ToolPage content={content} locale="ru" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/ru/obedinit-pdf",
    );
    expect(screen.getByText("Часто задаваемые вопросы")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Главная/ }),
    ).toHaveAttribute("href", "/ru");
  });

  it("localizes chrome and internal links for pl", () => {
    render(<ToolPage content={content} locale="pl" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/pl/polacz-pdf",
    );
    expect(screen.getByText("Najczęściej zadawane pytania")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Strona główna/ }),
    ).toHaveAttribute("href", "/pl");
  });

  it("localizes chrome and internal links for cs", () => {
    render(<ToolPage content={content} locale="cs" toolSlot={<div />} />);
    // The content record still carries the English link path; the renderer
    // translates it, so a translator never types a URL.
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute(
      "href",
      "/cs/sloucit-pdf",
    );
    expect(screen.getByText("Často kladené otázky")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Domů/ }),
    ).toHaveAttribute("href", "/cs");
  });
});
