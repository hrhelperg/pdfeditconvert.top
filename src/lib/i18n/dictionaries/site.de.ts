import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * German site chrome (de-DE).
 *
 * Navigation labels are the verb/noun a German reader would search for
 * ("Komprimieren", "Zusammenführen"), not a literal rendering of the
 * English list. The footer links point at the German route ids, so the
 * whole footer graph stays inside de. Terminology policy:
 * docs/localization/de-terminology.md.
 */
export const SITE_DE: SiteDictionary = {
  skipToContent: "Zum Inhalt springen",

  header: {
    homeAriaLabel: "Startseite von PDF Editor",
    nav: [
      { id: "pdf-editor", label: "PDF-Editor" },
      { id: "pdf-converter", label: "Konvertieren" },
      { id: "compress-pdf", label: "Komprimieren" },
      { id: "merge-pdf", label: "Zusammenführen" },
      { id: "sign-pdf", label: "Unterschreiben" },
      { id: "guides", label: "Anleitungen" },
    ],
    ctaLabel: "App herunterladen",
    ctaAriaLabel: "PDF Editor im App Store herunterladen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  switcher: {
    label: "Sprache",
    ariaLabel: "Sprache wechseln",
    currentLabel: "Aktuelle Sprache",
  },

  footer: {
    tagline:
      "Die komplette PDF-Lösung für Arbeit, Studium und Alltag. Bearbeite, konvertiere, unterschreibe und scanne deine PDFs vom Handy aus.",
    appEyebrow: "PDF Editor App",
    appHeading: "Nimm PDF Editor überallhin mit.",
    appSub: "Kostenlos für iPhone und Android. Ohne Konto.",
    columnProduct: "Produkt",
    columnLearn: "Wissen",
    columnCompany: "Unternehmen",
    columnTools: "Kostenlose Tools",
    product: [
      { id: "pdf-editor", label: "PDF-Editor" },
      { id: "pdf-converter", label: "PDF-Konverter" },
      { id: "compress-pdf", label: "PDF komprimieren" },
      { id: "sign-pdf", label: "PDF unterschreiben" },
      { id: "scan-to-pdf", label: "Scannen zu PDF" },
    ],
    learn: [
      { id: "guides", label: "Alle Anleitungen" },
      { id: "pdf-forms", label: "PDF-Formulare" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "PDF-Formular ausfüllen",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "PDF in Word umwandeln",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "PDF für die E-Mail verkleinern",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "PDF auf iPhone bearbeiten",
      },
      { id: "guides/how-to-merge-pdf-files", label: "PDF-Dateien zusammenführen" },
      { id: "compare/pdf-vs-docx", label: "PDF oder DOCX" },
    ],
    company: [
      { id: "contact", label: "Kontakt" },
      { id: "privacy-policy", label: "Datenschutz" },
      { id: "terms", label: "Nutzungsbedingungen" },
    ],
    tools: [
      { id: "pdf-tools", label: "Alle kostenlosen Tools" },
      { id: "image-to-pdf", label: "Bild zu PDF" },
      { id: "merge-pdf", label: "PDF zusammenführen" },
      { id: "split-pdf", label: "PDF teilen" },
      { id: "rotate-pdf", label: "PDF drehen" },
      { id: "pdf-to-images", label: "PDF zu Bildern" },
      { id: "add-watermark-to-pdf", label: "Wasserzeichen" },
    ],
    sitemapLabel: "Sitemap",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Alle Rechte vorbehalten.",
  },

  store: {
    appStoreAria: "PDF Editor im App Store herunterladen",
    googlePlayAria: "PDF Editor bei Google Play herunterladen",
    availability: "Verfügbar für iOS und Android · Kostenlos testen",
  },

  breadcrumbs: {
    home: "Start",
    guides: "Anleitungen",
    compare: "Vergleiche",
    useCases: "Anwendungsfälle",
    tools: "Tools",
    ariaLabel: "Navigationspfad",
  },

  sections: {
    faqHeading: "Häufig gestellte Fragen",
    relatedGuides: "Verwandte Anleitungen",
    readTheGuide: "Anleitung lesen →",
    seeAllGuides: "Alle Anleitungen ansehen",
    browseEveryGuide: "Alle PDF-Anleitungen durchsuchen",
    allFreeTools: "Alle kostenlosen PDF-Tools im Browser",
    relatedTools: "Verwandte PDF-Tools",
    stepByStep: "Schritt für Schritt",
    tips: "Tipps",
    lastUpdated: "Aktualisiert am",
    whenToPick: "Wann du {label} wählst",
    workflowsHeading: "Methoden, die sich lohnen",
    tryOnPhone: "Auf dem Handy ausprobieren",
    takeWithYou: "Nimm PDF Editor überallhin mit.",
    freeOnBoth: "Kostenlos für iOS und Android.",
    appEyebrow: "PDF Editor App",
    editOnPhoneHeading: "Bearbeite deine PDFs vom Handy aus.",
    trust: [
      "Dateien werden lokal in deinem Browser verarbeitet",
      "Kein Hochladen, kein Konto, kein Wasserzeichen",
      "Kostenlos: funktioniert auf Handy und Computer",
    ],
    clusterHeading: {
      one: "Die einzige Anleitung in dieser Gruppe",
      other: "Die {count} Anleitungen in dieser Gruppe",
    },
    toolGuidesHeading: {
      one: "Anleitung zu {label}",
      other: "Anleitungen zu {label}",
    },
    goToHub: "Weiter zu {label} →",
    guideTopicsNav: "Themen der Anleitungen",
  },
};
