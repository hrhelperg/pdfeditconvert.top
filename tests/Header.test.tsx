import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/Header";
import { getSiteDictionary } from "@/lib/i18n/registry";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import { publishedLocales } from "@/lib/i18n/locales";

/**
 * The header takes every string and href as a prop so a page's client
 * bundle carries one locale, not all of them. These props are built the
 * same way the root layout builds them.
 */
function headerProps(
  locale:
    | "en"
    | "pt-BR"
    | "fr"
    | "es"
    | "de"
    | "it"
    | "ar"
    | "ru"
    | "pl"
    | "cs"
    | "ja"
    | "tr" = "en",
) {
  const d = getSiteDictionary(locale);
  return {
    nav: d.header.nav.map((n) => ({
      label: n.label,
      href: pathForWithFallback(locale, n.id),
    })),
    homeHref: pathForWithFallback(locale, ""),
    homeAriaLabel: d.header.homeAriaLabel,
    ctaLabel: d.header.ctaLabel,
    ctaAriaLabel: d.header.ctaAriaLabel,
    ctaHref: "https://apps.apple.com/app/id6747341672",
    openMenu: d.header.openMenu,
    closeMenu: d.header.closeMenu,
    switcher: {
      label: d.switcher.label,
      ariaLabel: d.switcher.ariaLabel,
      currentLabel: d.switcher.currentLabel,
      options: publishedLocales().map((l) => ({
        code: l.code,
        nativeName: l.nativeName,
        href: pathForWithFallback(l.code, ""),
        current: l.code === locale,
      })),
    },
  };
}

describe("Header", () => {
  it("mobile menu is closed by default", () => {
    render(<Header {...headerProps()} />);
    const toggle = screen.getByLabelText(/Open menu/i);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("links every published locale from the switcher, in static markup", () => {
    render(<Header {...headerProps()} />);
    // Crawlable, real destinations: the switcher renders anchors to each
    // published locale's home page before any JavaScript upgrades them to
    // the page-equivalent URL.
    expect(screen.getByRole("link", { name: /English/ })).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("link", { name: /Português \(Brasil\)/ }),
    ).toHaveAttribute("href", "/pt-br");
    expect(screen.getByRole("link", { name: /Français/ })).toHaveAttribute(
      "href",
      "/fr",
    );
    expect(screen.getByRole("link", { name: /Español/ })).toHaveAttribute(
      "href",
      "/es",
    );
    expect(screen.getByRole("link", { name: /Deutsch/ })).toHaveAttribute(
      "href",
      "/de",
    );
    expect(screen.getByRole("link", { name: /Italiano/ })).toHaveAttribute(
      "href",
      "/it",
    );
    expect(screen.getByRole("link", { name: /العربية/ })).toHaveAttribute(
      "href",
      "/ar",
    );
    expect(screen.getByRole("link", { name: /Русский/ })).toHaveAttribute(
      "href",
      "/ru",
    );
    expect(screen.getByRole("link", { name: /Polski/ })).toHaveAttribute(
      "href",
      "/pl",
    );
    expect(screen.getByRole("link", { name: /Čeština/ })).toHaveAttribute(
      "href",
      "/cs",
    );
    expect(screen.getByRole("link", { name: /日本語/ })).toHaveAttribute(
      "href",
      "/ja",
    );
    expect(screen.getByRole("link", { name: /Türkçe/ })).toHaveAttribute(
      "href",
      "/tr",
    );
  });

  it("renders Portuguese navigation when given the pt-BR dictionary", () => {
    render(<Header {...headerProps("pt-BR")} />);
    expect(screen.getByRole("link", { name: "Comprimir" })).toHaveAttribute(
      "href",
      "/pt-br/comprimir-pdf",
    );
    expect(screen.getByLabelText(/Abrir o menu/i)).toBeInTheDocument();
  });

  it("renders French navigation when given the fr dictionary", () => {
    render(<Header {...headerProps("fr")} />);
    expect(screen.getByRole("link", { name: "Compresser" })).toHaveAttribute(
      "href",
      "/fr/compresser-pdf",
    );
    expect(screen.getByLabelText(/Ouvrir le menu/i)).toBeInTheDocument();
  });

  it("renders Spanish navigation when given the es dictionary", () => {
    render(<Header {...headerProps("es")} />);
    expect(screen.getByRole("link", { name: "Comprimir" })).toHaveAttribute(
      "href",
      "/es/comprimir-pdf",
    );
    expect(screen.getByLabelText(/Abrir el menú/i)).toBeInTheDocument();
  });

  it("renders German navigation when given the de dictionary", () => {
    render(<Header {...headerProps("de")} />);
    expect(screen.getByRole("link", { name: "Komprimieren" })).toHaveAttribute(
      "href",
      "/de/pdf-komprimieren",
    );
    expect(screen.getByLabelText(/Menü öffnen/i)).toBeInTheDocument();
  });

  it("renders Italian navigation when given the it dictionary", () => {
    render(<Header {...headerProps("it")} />);
    expect(screen.getByRole("link", { name: "Comprimi" })).toHaveAttribute(
      "href",
      "/it/comprimi-pdf",
    );
    expect(screen.getByLabelText(/Apri il menu/i)).toBeInTheDocument();
  });

  it("renders Arabic navigation when given the ar dictionary", () => {
    render(<Header {...headerProps("ar")} />);
    expect(screen.getByRole("link", { name: "الضغط" })).toHaveAttribute(
      "href",
      "/ar/daght-pdf",
    );
    expect(screen.getByLabelText(/فتح القائمة/i)).toBeInTheDocument();
  });

  it("renders Russian navigation when given the ru dictionary", () => {
    render(<Header {...headerProps("ru")} />);
    expect(screen.getByRole("link", { name: "Сжатие" })).toHaveAttribute(
      "href",
      "/ru/szhat-pdf",
    );
    expect(screen.getByLabelText(/Открыть меню/i)).toBeInTheDocument();
  });

  it("renders Polish navigation when given the pl dictionary", () => {
    render(<Header {...headerProps("pl")} />);
    expect(screen.getByRole("link", { name: "Kompresuj" })).toHaveAttribute(
      "href",
      "/pl/kompresuj-pdf",
    );
    expect(screen.getByLabelText(/Otwórz menu/i)).toBeInTheDocument();
  });

  it("renders Czech navigation when given the cs dictionary", () => {
    render(<Header {...headerProps("cs")} />);
    expect(screen.getByRole("link", { name: "Komprimovat" })).toHaveAttribute(
      "href",
      "/cs/zkomprimovat-pdf",
    );
    expect(screen.getByLabelText(/Otevřít nabídku/i)).toBeInTheDocument();
  });

  it("renders Japanese navigation when given the ja dictionary", () => {
    render(<Header {...headerProps("ja")} />);
    expect(screen.getByRole("link", { name: "圧縮" })).toHaveAttribute(
      "href",
      "/ja/pdf-asshuku",
    );
    expect(screen.getByLabelText(/メニューを開く/i)).toBeInTheDocument();
  });

  it("renders Turkish navigation when given the tr dictionary", () => {
    render(<Header {...headerProps("tr")} />);
    expect(screen.getByRole("link", { name: "Sıkıştır" })).toHaveAttribute(
      "href",
      "/tr/pdf-sikistir",
    );
    expect(screen.getByLabelText(/Menüyü aç/i)).toBeInTheDocument();
  });

  it("clicking the toggle opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header {...headerProps()} />);
    await user.click(screen.getByLabelText(/Open menu/i));
    expect(screen.getByLabelText(/Close menu/i)).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
