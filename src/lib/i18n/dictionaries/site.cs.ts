import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Czech site chrome (cs-CZ). Terminology policy:
 * docs/localization/cs-terminology.md.
 *
 * UI step verbs and short link labels use the infinitive ("Komprimovat",
 * "Sloučit"), the formality-neutral convention in Czech software UI — see
 * §7 of the terminology doc. The footer links point at the Czech route ids,
 * so the whole footer graph stays inside cs.
 */
export const SITE_CS: SiteDictionary = {
  skipToContent: "Přeskočit na obsah",

  header: {
    homeAriaLabel: "Domovská stránka PDF Editor",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Převést" },
      { id: "compress-pdf", label: "Komprimovat" },
      { id: "merge-pdf", label: "Sloučit" },
      { id: "sign-pdf", label: "Podepsat" },
      { id: "guides", label: "Návody" },
    ],
    ctaLabel: "Stáhnout aplikaci",
    ctaAriaLabel: "Stáhnout PDF Editor z App Store",
    openMenu: "Otevřít nabídku",
    closeMenu: "Zavřít nabídku",
  },

  switcher: {
    label: "Jazyk",
    ariaLabel: "Změnit jazyk",
    currentLabel: "Aktuální jazyk",
  },

  footer: {
    tagline:
      "Komplexní řešení PDF pro práci, studium i běžný den. Uprav, převeď, podepiš a naskenuj PDF přímo v telefonu.",
    appEyebrow: "Aplikace PDF Editor",
    appHeading: "Vezmi si PDF Editor s sebou.",
    appSub: "Zdarma pro iPhone a Android. Účet není potřeba.",
    columnProduct: "Produkt",
    columnLearn: "Zdroje",
    columnCompany: "Společnost",
    columnTools: "Bezplatné nástroje",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "PDF konvertor" },
      { id: "compress-pdf", label: "Komprimovat PDF" },
      { id: "sign-pdf", label: "Podepsat PDF" },
      { id: "scan-to-pdf", label: "Skenovat do PDF" },
    ],
    learn: [
      { id: "guides", label: "Všechny návody" },
      { id: "pdf-forms", label: "PDF formuláře" },
      { id: "guides/how-to-fill-out-a-pdf-form", label: "Vyplnit PDF formulář" },
      { id: "guides/how-to-convert-pdf-to-word", label: "Převést PDF do Wordu" },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Zmenšit PDF pro e-mail",
      },
      { id: "guides/how-to-edit-pdf-on-iphone", label: "Upravit PDF na iPhonu" },
      { id: "guides/how-to-merge-pdf-files", label: "Sloučit PDF soubory" },
      { id: "compare/pdf-vs-docx", label: "PDF, nebo DOCX?" },
    ],
    company: [
      { id: "contact", label: "Kontakt" },
      { id: "privacy-policy", label: "Soukromí" },
      { id: "terms", label: "Podmínky" },
    ],
    tools: [
      { id: "pdf-tools", label: "Všechny bezplatné nástroje" },
      { id: "image-to-pdf", label: "Obrázek do PDF" },
      { id: "merge-pdf", label: "Sloučit PDF" },
      { id: "split-pdf", label: "Rozdělit PDF" },
      { id: "rotate-pdf", label: "Otočit PDF" },
      { id: "pdf-to-images", label: "PDF do obrázků" },
      { id: "add-watermark-to-pdf", label: "Přidat vodoznak" },
    ],
    sitemapLabel: "Mapa webu",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Všechna práva vyhrazena.",
  },

  store: {
    appStoreAria: "Stáhnout PDF Editor z App Store",
    googlePlayAria: "Stáhnout PDF Editor z Google Play",
    availability: "Dostupné pro iOS i Android · Vyzkoušej zdarma",
  },

  breadcrumbs: {
    home: "Domů",
    guides: "Návody",
    compare: "Srovnání",
    useCases: "Případy užití",
    tools: "Nástroje",
    ariaLabel: "Drobečková navigace",
  },

  sections: {
    faqHeading: "Často kladené otázky",
    relatedGuides: "Související návody",
    readTheGuide: "Přečíst návod →",
    seeAllGuides: "Zobrazit všechny návody",
    browseEveryGuide: "Projít všechny návody na PDF",
    allFreeTools: "Všechny bezplatné PDF nástroje v prohlížeči",
    relatedTools: "Související PDF nástroje",
    stepByStep: "Krok za krokem",
    tips: "Tipy",
    lastUpdated: "Naposledy aktualizováno",
    whenToPick: "Kdy zvolit {label}",
    workflowsHeading: "Pracovní postupy, které se vyplatí",
    tryOnPhone: "Vyzkoušej to v telefonu",
    takeWithYou: "Vezmi si PDF Editor s sebou.",
    freeOnBoth: "Zdarma pro iOS i Android.",
    appEyebrow: "Aplikace PDF Editor",
    editOnPhoneHeading: "Uprav PDF přímo v telefonu.",
    trust: [
      "Soubory se zpracovávají lokálně, přímo ve tvém prohlížeči",
      "Bez nahrávání na server, bez účtu, bez vodoznaku",
      "Zdarma – funguje na mobilu i počítači",
    ],
    clusterHeading: {
      one: "Jediný návod v tomto okruhu",
      other: "Všech {count} návodů v tomto okruhu",
    },
    toolGuidesHeading: {
      one: "Návod na {label}",
      other: "Návody na {label}",
    },
    goToHub: "Přejít na {label} →",
    guideTopicsNav: "Témata návodů",
  },
};
