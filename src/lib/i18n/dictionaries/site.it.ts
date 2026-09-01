import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Italian site chrome (it-IT).
 *
 * Navigation labels use the imperative form that matches the tool button
 * itself ("Comprimi", "Unisci"), not a literal rendering of the English
 * list. The footer links point at the Italian route ids, so the whole
 * footer graph stays inside it. Terminology policy:
 * docs/localization/it-terminology.md.
 */
export const SITE_IT: SiteDictionary = {
  skipToContent: "Vai al contenuto",

  header: {
    homeAriaLabel: "Home di PDF Editor",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Converti" },
      { id: "compress-pdf", label: "Comprimi" },
      { id: "merge-pdf", label: "Unisci" },
      { id: "sign-pdf", label: "Firma" },
      { id: "guides", label: "Guide" },
    ],
    ctaLabel: "Scarica l’app",
    ctaAriaLabel: "Scarica PDF Editor su App Store",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },

  switcher: {
    label: "Lingua",
    ariaLabel: "Cambia lingua",
    currentLabel: "Lingua attuale",
  },

  footer: {
    tagline:
      "La soluzione PDF completa per lavoro, studio e vita quotidiana. Modifica, converti, firma e scansiona i tuoi PDF dal telefono.",
    appEyebrow: "App PDF Editor",
    appHeading: "Porta PDF Editor sempre con te.",
    appSub: "Gratis su iPhone e Android. Senza account.",
    columnProduct: "Prodotto",
    columnLearn: "Risorse",
    columnCompany: "Azienda",
    columnTools: "Strumenti gratuiti",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Convertitore PDF" },
      { id: "compress-pdf", label: "Comprimi PDF" },
      { id: "sign-pdf", label: "Firma PDF" },
      { id: "scan-to-pdf", label: "Scansiona in PDF" },
    ],
    learn: [
      { id: "guides", label: "Tutte le guide" },
      { id: "pdf-forms", label: "Moduli PDF" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "Compilare un modulo PDF",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "Convertire un PDF in Word",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Ridurre un PDF per la mail",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "Modificare un PDF su iPhone",
      },
      { id: "guides/how-to-merge-pdf-files", label: "Unire file PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF o DOCX" },
    ],
    company: [
      { id: "contact", label: "Contatti" },
      { id: "privacy-policy", label: "Privacy" },
      { id: "terms", label: "Termini" },
    ],
    tools: [
      { id: "pdf-tools", label: "Tutti gli strumenti gratuiti" },
      { id: "image-to-pdf", label: "Immagine a PDF" },
      { id: "merge-pdf", label: "Unisci PDF" },
      { id: "split-pdf", label: "Dividi PDF" },
      { id: "rotate-pdf", label: "Ruota PDF" },
      { id: "pdf-to-images", label: "PDF a immagini" },
      { id: "add-watermark-to-pdf", label: "Filigrana" },
    ],
    sitemapLabel: "Mappa del sito",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Tutti i diritti riservati.",
  },

  store: {
    appStoreAria: "Scarica PDF Editor su App Store",
    googlePlayAria: "Scarica PDF Editor su Google Play",
    availability: "Disponibile su iOS e Android · Prova gratis",
  },

  breadcrumbs: {
    home: "Home",
    guides: "Guide",
    compare: "Confronti",
    useCases: "Casi d’uso",
    tools: "Strumenti",
    ariaLabel: "Percorso di navigazione",
  },

  sections: {
    faqHeading: "Domande frequenti",
    relatedGuides: "Guide correlate",
    readTheGuide: "Leggi la guida →",
    seeAllGuides: "Vedi tutte le guide",
    browseEveryGuide: "Sfoglia tutte le guide sui PDF",
    allFreeTools: "Tutti gli strumenti PDF gratuiti nel browser",
    relatedTools: "Strumenti PDF correlati",
    stepByStep: "Passo dopo passo",
    tips: "Consigli",
    lastUpdated: "Aggiornato il",
    whenToPick: "Quando scegliere {label}",
    workflowsHeading: "Metodi che vale la pena seguire",
    tryOnPhone: "Provalo dal telefono",
    takeWithYou: "Porta PDF Editor sempre con te.",
    freeOnBoth: "Gratis su iOS e Android.",
    appEyebrow: "App PDF Editor",
    editOnPhoneHeading: "Modifica i tuoi PDF dal telefono.",
    trust: [
      "I file vengono elaborati in locale, nel tuo browser",
      "Senza caricare nulla, senza account e senza filigrana",
      "Gratis: funziona su telefono e computer",
    ],
    clusterHeading: {
      one: "L’unica guida di questo gruppo",
      other: "Le {count} guide di questo gruppo",
    },
    toolGuidesHeading: {
      one: "Guida su {label}",
      other: "Guide su {label}",
    },
    goToHub: "Vai a {label} →",
    guideTopicsNav: "Argomenti delle guide",
  },
};
