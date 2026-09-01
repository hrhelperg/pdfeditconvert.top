import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Polish site chrome (pl-PL).
 *
 * Terminology policy: docs/localization/pl-terminology.md. The step verb for
 * this site's own local tools is always "Dodaj", never "prześlij"/"wgraj" —
 * those claim a network transfer the browser tools do not perform. Where the
 * copy states a negative ("no upload"), it paraphrases or negates the noun
 * ("bez przesyłania") rather than using the restricted step verb.
 */
export const SITE_PL: SiteDictionary = {
  skipToContent: "Przejdź do treści",

  header: {
    homeAriaLabel: "Strona główna PDF Editor",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Konwertuj" },
      { id: "compress-pdf", label: "Kompresuj" },
      { id: "merge-pdf", label: "Scal" },
      { id: "sign-pdf", label: "Podpisz" },
      { id: "guides", label: "Poradniki" },
    ],
    ctaLabel: "Pobierz aplikację",
    ctaAriaLabel: "Pobierz PDF Editor z App Store",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
  },

  switcher: {
    label: "Język",
    ariaLabel: "Zmień język",
    currentLabel: "Bieżący język",
  },

  footer: {
    tagline:
      "Kompleksowe rozwiązanie PDF do pracy, nauki i życia codziennego. Edytuj, konwertuj, podpisuj i skanuj pliki PDF prosto z telefonu.",
    appEyebrow: "Aplikacja PDF Editor",
    appHeading: "Zabierz PDF Editor ze sobą.",
    appSub: "Za darmo na iPhone i Android. Bez konta.",
    columnProduct: "Produkt",
    columnLearn: "Poradniki",
    columnCompany: "Firma",
    columnTools: "Darmowe narzędzia",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Konwerter PDF" },
      { id: "compress-pdf", label: "Kompresuj PDF" },
      { id: "sign-pdf", label: "Podpisz PDF" },
      { id: "scan-to-pdf", label: "Skanuj do PDF" },
    ],
    learn: [
      { id: "guides", label: "Wszystkie poradniki" },
      { id: "pdf-forms", label: "Formularze PDF" },
      { id: "guides/how-to-fill-out-a-pdf-form", label: "Wypełnij formularz PDF" },
      { id: "guides/how-to-convert-pdf-to-word", label: "Przekonwertuj PDF na Word" },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Zmniejsz rozmiar PDF do e-maila",
      },
      { id: "guides/how-to-edit-pdf-on-iphone", label: "Edytuj PDF na iPhone" },
      { id: "guides/how-to-merge-pdf-files", label: "Scal pliki PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF czy DOCX" },
    ],
    company: [
      { id: "contact", label: "Kontakt" },
      { id: "privacy-policy", label: "Prywatność" },
      { id: "terms", label: "Regulamin" },
    ],
    tools: [
      { id: "pdf-tools", label: "Wszystkie darmowe narzędzia" },
      { id: "image-to-pdf", label: "Obraz na PDF" },
      { id: "merge-pdf", label: "Scal PDF" },
      { id: "split-pdf", label: "Podziel PDF" },
      { id: "rotate-pdf", label: "Obróć PDF" },
      { id: "pdf-to-images", label: "PDF na obrazy" },
      { id: "add-watermark-to-pdf", label: "Dodaj znak wodny" },
    ],
    sitemapLabel: "Mapa strony",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Wszelkie prawa zastrzeżone.",
  },

  store: {
    appStoreAria: "Pobierz PDF Editor z App Store",
    googlePlayAria: "Pobierz PDF Editor z Google Play",
  },

  breadcrumbs: {
    home: "Strona główna",
    guides: "Poradniki",
    compare: "Porównania",
    useCases: "Przypadki użycia",
    tools: "Narzędzia",
  },

  sections: {
    faqHeading: "Najczęściej zadawane pytania",
    relatedGuides: "Powiązane poradniki",
    readTheGuide: "Przeczytaj poradnik →",
    seeAllGuides: "Zobacz wszystkie poradniki",
    browseEveryGuide: "Przeglądaj wszystkie poradniki PDF",
    allFreeTools: "Wszystkie darmowe narzędzia PDF w przeglądarce",
    relatedTools: "Powiązane narzędzia PDF",
    stepByStep: "Krok po kroku",
    tips: "Wskazówki",
    lastUpdated: "Ostatnia aktualizacja",
    whenToPick: "Kiedy wybrać {label}",
    workflowsHeading: "Sposoby pracy, które się opłacają",
    tryOnPhone: "Wypróbuj na telefonie",
    takeWithYou: "Zabierz PDF Editor ze sobą.",
    freeOnBoth: "Za darmo na iOS i Android.",
    appEyebrow: "Aplikacja PDF Editor",
    editOnPhoneHeading: "Edytuj pliki PDF na telefonie.",
    trust: [
      "Pliki są przetwarzane lokalnie w Twojej przeglądarce",
      "Bez przesyłania, bez konta, bez znaku wodnego",
      "Za darmo – działa na telefonie i komputerze",
    ],
    clusterHeading: {
      one: "Jedyny poradnik w tej grupie",
      other: "Wszystkie {count} poradników w tej grupie",
    },
    toolGuidesHeading: {
      one: "Poradnik o {label}",
      other: "Poradniki o {label}",
    },
    goToHub: "Przejdź do {label} →",
    guideTopicsNav: "Tematy poradników",
  },
};
