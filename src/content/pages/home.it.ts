import type { HomeContent } from "@/types/content";

/**
 * Italian homepage copy. Terminology policy: docs/localization/it-terminology.md.
 */
export const HOME_IT: HomeContent = {
  heroEyebrow: "Strumenti PDF gratuiti nel browser",
  heroH1Before: "Converti, unisci e modifica i tuoi PDF ",
  heroH1Highlight: "in pochi secondi",
  heroH1After: "",
  heroLead:
    "Strumenti PDF gratuiti che funzionano nel tuo browser, con elaborazione locale e privata — niente viene mai inviato a un server.",
  trust: [
    "I file vengono elaborati in locale, nel tuo browser",
    "Senza caricare nulla, senza account e senza filigrana",
    "Gratis: funziona su telefono e computer",
  ],
  browseAllToolsLabel: "Vedi tutti gli strumenti PDF →",
  toolsEyebrow: "Gratis, nel tuo browser",
  toolsHeading: "Tutti gli strumenti PDF di cui hai bisogno — senza caricare nulla.",
  toolsLead:
    "Unisci, dividi, ruota, marca e converti i tuoi PDF senza uscire dalla pagina. Ogni strumento funziona in locale, nel tuo browser.",
  toolBadge: "Strumento gratuito",
  tools: [
    { id: "image-to-pdf", label: "Immagine a PDF", desc: "Riunisci JPG, PNG e WebP in un unico PDF." },
    { id: "merge-pdf", label: "Unisci PDF", desc: "Combina più PDF in un unico documento." },
    { id: "split-pdf", label: "Dividi PDF", desc: "Separa le pagine per intervallo." },
    { id: "rotate-pdf", label: "Ruota PDF", desc: "Raddrizza le pagine storte." },
    { id: "pdf-to-images", label: "PDF a immagini", desc: "Esporta le pagine in PNG o JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Filigrana",
      desc: "Applica un testo su tutte le pagine.",
    },
    {
      id: "compress-pdf",
      label: "Comprimi PDF",
      desc: "Riduci la dimensione per mail e invio.",
    },
    { id: "pdf-to-word", label: "PDF a Word", desc: "Estrai il testo in un .docx modificabile." },
    { id: "word-to-pdf", label: "Word a PDF", desc: "Converti un .docx o .txt in un PDF pulito." },
    {
      id: "reorder-pdf-pages",
      label: "Riordina pagine",
      desc: "Visualizza l’anteprima, riordina e scarica.",
    },
    {
      id: "extract-pdf-pages",
      label: "Estrai pagine",
      desc: "Salva le pagine scelte in un nuovo PDF.",
    },
  ],
  appBandEyebrow: "Anche su iPhone e Android · cinque strumenti per ogni giorno",
  featureBand: [
    { key: "edit", label: "Modifica", sub: "Testo, immagini, pagine" },
    { key: "convert", label: "Converti", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Proteggi", sub: "Password sul file" },
    { key: "scan", label: "Scansiona", sub: "Da carta a PDF" },
    { key: "organize", label: "Organizza", sub: "Riordina, dividi" },
  ],
  hubsHeading: "Tutto quello che si fa con un PDF — spiegato.",
  hubsLead:
    "Guide pratiche e metodi concreti per quello che le persone fanno davvero ogni giorno con un PDF.",
  hubs: [
    { id: "pdf-editor", label: "Editor di PDF", desc: "Modifica testo, immagini e pagine." },
    {
      id: "pdf-converter",
      label: "Convertitore di PDF",
      desc: "Converti in Word, JPG, PNG e altro.",
    },
    {
      id: "compress-pdf",
      label: "Comprimi PDF",
      desc: "Riduci il file senza perdere qualità.",
    },
    { id: "sign-pdf", label: "Firma PDF", desc: "Firma direttamente dal telefono." },
    { id: "scan-to-pdf", label: "Scansiona in PDF", desc: "Trasforma la carta in PDF nitidi." },
    {
      id: "pdf-security",
      label: "Sicurezza dei PDF",
      desc: "Proteggi i documenti con una password.",
    },
    {
      id: "pdf-for-business",
      label: "PDF per le aziende",
      desc: "Contratti e fatture da qualsiasi posto.",
    },
    {
      id: "pdf-for-students",
      label: "PDF per studenti",
      desc: "Appunti, evidenziazioni e riassunti.",
    },
    {
      id: "pdf-forms",
      label: "Moduli PDF",
      desc: "Compila, firma e salva i tuoi PDF.",
    },
  ],
  guidesHeading: "Le guide più lette",
  guideBadge: "Guida",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Come modificare un PDF su iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Come modificare un PDF su Android" },
    { id: "guides/how-to-compress-pdf", label: "Come comprimere un PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Come firmare un PDF dal telefono" },
  ],
  browseAllGuidesLabel: "Vedi le {count} guide sui PDF →",
  finalCtaHeading: "Porta PDF Editor sempre con te.",
  finalCtaSub: "Gratis su iOS e Android. Non serve un account per iniziare.",
  faq: [
    {
      q: "PDF Editor è gratis?",
      a: "Sì. Le funzioni principali di modifica, scansione, compressione e firma sono gratuite. Alcune funzioni avanzate sono disponibili in PDF Editor Pro.",
    },
    {
      q: "Funziona senza connessione a internet?",
      a: "Modifica, organizzazione delle pagine, firma e compressione funzionano offline. La sincronizzazione con il cloud e l’OCR potrebbero richiedere una connessione.",
    },
    {
      q: "Con quali dispositivi è compatibile?",
      a: "PDF Editor è disponibile per iPhone e iPad (iOS 16 o successivo) e per telefoni e tablet Android (Android 9 o successivo).",
    },
    {
      q: "I miei file sono privati?",
      a: "Sì. I tuoi file restano sul tuo dispositivo, a meno che tu non scelga di condividerli. Non inviamo i tuoi documenti ai nostri server.",
    },
    {
      q: "Posso usarlo per documenti legali?",
      a: "Molte persone firmano e inviano contratti con PDF Editor. Non forniamo consulenza legale — verifica la normativa locale sulla firma elettronica prima di affidarti a essa per un documento importante.",
    },
  ],
};
