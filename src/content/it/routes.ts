import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { IT_GUIDE_ROUTES } from "@/content/it/routes.guides";

/**
 * Italian route manifest — the localization manifest for it.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Italian URL after the `/it` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/it-terminology.md):
 *
 * - ASCII-normalized, accents stripped: "come-comprimere-un-pdf". Prose
 *   keeps every accent; slugs do not.
 * - Imperative form for tool slugs to match the button label ("comprimi-pdf"
 *   for "Comprimi PDF"), infinitive/question form for guide slugs
 *   ("come-comprimere-un-pdf").
 * - Translated section prefixes: guide/, confronti/, casi-duso/.
 */
export const IT_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — modifica, converti, firma e scansiona i tuoi PDF",
    description:
      "La soluzione PDF completa per lavoro, studio e vita quotidiana. Modifica, converti, comprimi, unisci, firma e scansiona i tuoi PDF dal telefono con PDF Editor per iOS e Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "editor-pdf",
    title: "Editor PDF — modifica testo, immagini e pagine dal telefono",
    description:
      "Modifica i tuoi PDF su iPhone o Android: correggi il testo, aggiungi immagini, riordina le pagine e firma i documenti. Scopri come l’app PDF Editor rende semplice modificare da mobile.",
  },
  {
    id: "pdf-converter",
    slug: "convertitore-pdf",
    title: "Convertitore PDF — converti un PDF in Word, JPG, PNG e viceversa",
    description:
      "Converti i tuoi PDF in Word, Excel, JPG, PNG e ritorno. Il modo più pulito per farlo da mobile, con l’app PDF Editor su iOS e Android.",
  },
  {
    id: "sign-pdf",
    slug: "firma-pdf",
    title: "Firmare un PDF — aggiungi una firma elettronica dal telefono",
    description:
      "Firma i tuoi PDF dal telefono con una vera firma autografa o con il nome digitato. Accettata nella maggior parte delle pratiche. Prova l’app PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "scansiona-in-pdf",
    title: "Scansionare in PDF — trasforma la carta in un PDF nitido",
    description:
      "Usa la fotocamera del telefono per scansionare documenti, documenti d’identità e scontrini in PDF nitidi e con testo ricercabile. L’app PDF Editor rileva i bordi automaticamente.",
  },
  {
    id: "pdf-security",
    slug: "sicurezza-pdf",
    title: "Sicurezza dei PDF — proteggi e cifra un documento con password",
    description:
      "Proteggi i tuoi PDF sensibili con password e crittografia. Guida pratica per proteggere i documenti su iPhone e Android.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-per-le-aziende",
    title: "PDF per le aziende — contratti, fatture e flussi di lavoro",
    description:
      "Come i team piccoli usano il PDF per contratti, fatture e approvazioni. Metodi moderni, pensati per il mobile, con l’app PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-per-studenti",
    title: "PDF per studenti — appunti, evidenziazioni e riassunti",
    description:
      "Usa il PDF per i tuoi appunti di lezione, le evidenziazioni e i riassunti di studio. Metodi efficaci da mobile con PDF Editor su iOS e Android.",
  },
  {
    id: "pdf-forms",
    slug: "moduli-pdf",
    title: "Moduli PDF — compila, firma e gestisci un PDF compilabile",
    description:
      "Capisci come funzionano davvero i moduli PDF e come compilarli, firmarli, crearli e correggerli. Il punto di partenza per i moduli PDF interattivi e non interattivi, su computer e su mobile.",
  },

  // Guides index
  {
    id: "guides",
    slug: "guide",
    title: "Guide sui PDF — tutorial passo passo",
    description:
      "Tutorial pratici sui PDF, pensati per il mobile: modifica, converti, comprimi, unisci, firma e proteggi i tuoi documenti su iPhone e Android.",
  },

  // Tools
  {
    id: "pdf-tools",
    slug: "strumenti-pdf",
    title: "Strumenti PDF gratuiti — nel browser, senza caricare nulla",
    description:
      "Strumenti PDF gratuiti che funzionano interamente nel tuo browser. Unisci, dividi, ruota, aggiungi filigrane, converti immagini in PDF e PDF in immagini — i tuoi file non lasciano mai il tuo dispositivo.",
  },
  {
    id: "compress-pdf",
    slug: "comprimi-pdf",
    title: "Comprimere un PDF — riduci la dimensione di un file nel browser",
    description:
      "Riduci la dimensione di un PDF direttamente nel tuo browser, con diversi livelli di compressione. Gratis, senza registrazione e senza caricare nulla: il file non lascia il tuo dispositivo.",
  },
  {
    id: "merge-pdf",
    slug: "unisci-pdf",
    title: "Unire i PDF — combina più file nel browser",
    description:
      "Combina più PDF in un unico file direttamente nel tuo browser. Gratis, senza registrazione e senza caricare nulla: i tuoi file non lasciano il tuo dispositivo.",
  },
  {
    id: "split-pdf",
    slug: "dividi-pdf",
    title: "Dividere un PDF — estrai un intervallo di pagine nel browser",
    description:
      "Dividi un PDF per intervallo di pagine direttamente nel tuo browser. Gratis, senza registrazione e senza caricare nulla: i tuoi file restano sul tuo dispositivo.",
  },
  {
    id: "rotate-pdf",
    slug: "ruota-pdf",
    title: "Ruotare un PDF — correggi l’orientamento delle pagine",
    description:
      "Ruota tutte le pagine di un PDF o solo quelle che scegli, di 90°, 180° o 270°, direttamente nel tuo browser. Gratis e privato: il file non lascia mai il tuo dispositivo.",
  },
  {
    id: "image-to-pdf",
    slug: "immagine-in-pdf",
    title: "Immagine in PDF — converti JPG, PNG e WebP nel browser",
    description:
      "Riunisci immagini JPG, PNG e WebP in un unico PDF direttamente nel tuo browser. Gratis, senza caricare nulla né registrarti: i file restano sul tuo dispositivo.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-in-immagini",
    title: "PDF in immagini — esporta le pagine come PNG o JPG",
    description:
      "Trasforma qualsiasi PDF in immagini PNG o JPG, pagina per pagina, nel tuo browser. Gratis, senza caricare nulla né account: funziona interamente sul tuo dispositivo.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-in-word",
    title: "PDF in Word — converti un PDF in un DOCX modificabile",
    description:
      "Recupera il testo di un PDF in un documento Word (.docx) modificabile, direttamente nel tuo browser. Gratis e senza caricare nulla: una conversione del testo onesta, senza promesse false sull’impaginazione.",
  },
  {
    id: "word-to-pdf",
    slug: "word-in-pdf",
    title: "Word in PDF — converti un DOCX o un TXT nel browser",
    description:
      "Trasforma un file Word .docx o un .txt in un PDF pulito direttamente nel tuo browser. Gratis, senza registrazione e senza caricare nulla: il tuo documento non lascia il tuo dispositivo.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "filigrana-pdf",
    title: "Aggiungere una filigrana a un PDF — gratis, privato, nel browser",
    description:
      "Aggiungi una filigrana di testo a ogni pagina di un PDF direttamente nel tuo browser. Gratis, senza caricare nulla né registrarti: i file restano sul tuo dispositivo.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "riordina-pagine-pdf",
    title: "Riordinare le pagine di un PDF — cambia l’ordine nel browser",
    description:
      "Visualizza in anteprima ogni pagina e cambia l’ordine di un PDF con controlli semplici, poi scarica il file riordinato. Gratis, senza registrazione e senza caricare nulla.",
  },
  {
    id: "extract-pdf-pages",
    slug: "estrai-pagine-pdf",
    title: "Estrarre pagine da un PDF — salva una selezione in un nuovo file",
    description:
      "Scegli pagine o intervalli specifici e scarica un nuovo PDF solo con quelle pagine, direttamente nel tuo browser. Gratis, senza registrazione e senza caricare nulla.",
  },

  // Comparisons
  {
    id: "compare/pdf-vs-docx",
    slug: "confronti/pdf-o-docx",
    title: "PDF o DOCX — il confronto punto per punto",
    description:
      "PDF e DOCX a confronto su modificabilità, fedeltà, firma, sicurezza e condivisione. Scegli il formato giusto per ogni compito.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "confronti/pdf-o-jpg",
    title: "PDF o JPG — quando usare ciascun formato",
    description:
      "PDF o JPG: quando scansionare, quando fotografare. Qualità, dimensione del file, OCR e adattamento al flusso di lavoro a confronto.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "confronti/app-pdf-o-strumenti-online",
    title: "App PDF o strumenti PDF online — quale scegliere?",
    description:
      "App PDF native contro strumenti basati sul browser: velocità, privacy e accesso offline a confronto.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "casi-duso/liberi-professionisti",
    title: "PDF Editor per liberi professionisti — preventivi e documenti firmati",
    description:
      "I metodi che i liberi professionisti amano: proposte, accordi firmati e fatture, tutto dal telefono.",
  },
  {
    id: "use-cases/remote-work",
    slug: "casi-duso/lavoro-da-remoto",
    title: "PDF Editor per il lavoro da remoto — i tuoi documenti ovunque",
    description:
      "Lavora con i documenti ovunque tu sia: scansiona, firma e condividi un PDF da qualsiasi dispositivo.",
  },

  // Legal and meta
  {
    id: "privacy-policy",
    slug: "informativa-sulla-privacy",
    title: "Informativa sulla privacy",
    description:
      "Come pdfeditconvert.top e hrhelperg s.r.o. trattano i tuoi dati.",
  },
  {
    id: "terms",
    slug: "termini-di-utilizzo",
    title: "Termini di utilizzo",
    description: "Le condizioni che regolano l’uso di pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "contatti",
    title: "Contatti — PDF Editor di hrhelperg s.r.o.",
    description:
      "Scrivi al team dietro PDF Editor. E-mail: info@hrhelperg.com.",
  },

  ...IT_GUIDE_ROUTES,
];
