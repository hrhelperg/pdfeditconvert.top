import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF a immagini",
    h1: "Esporta ogni pagina PDF come PNG o JPG.",
    highlight: "PNG o JPG",
    lead: "Trasforma le pagine di un PDF in file immagine PNG o JPEG scaricabili — generati in locale, nel tuo browser.",
  },
  privacyNote:
    "Il tuo file viene generato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come convertire un PDF in immagini",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un singolo PDF nella pagina, oppure fai clic per sceglierlo.",
      },
      {
        title: "Scegli il formato",
        body: "Scegli PNG per testo nitido e trasparenza, oppure JPG per file più piccoli.",
      },
      {
        title: "Scegli la scala",
        body: "Scala più alta = immagini più nitide, file più grandi. 2× è di solito la scelta giusta.",
      },
      {
        title: "Scarica",
        body: "Ogni pagina si scarica come immagine separata.",
      },
    ],
  },
  useCases: {
    heading: "Quando questo strumento è utile",
    items: [
      {
        title: "Condividi una pagina su Slack",
        body: "Le anteprime immagine si visualizzano in linea, dove i PDF non lo fanno.",
      },
      {
        title: "Riusa un grafico in una presentazione",
        body: "Estrai una singola pagina e incollala in una diapositiva.",
      },
      {
        title: "Crea miniature",
        body: "Costruisci un foglio di contatti delle pagine PDF per una revisione rapida.",
      },
      {
        title: "Anteprime per il web",
        body: "Usa le immagini generate come anteprime leggere su un sito web.",
      },
    ],
  },
  limitations: {
    heading: "Limiti",
    items: [
      {
        title: "Memoria del browser",
        body: "PDF molto grandi a scala elevata possono esaurire la memoria. Prova con una scala di 1,5× oppure dividi prima il PDF.",
      },
      {
        title: "PDF protetti da password",
        body: "I file crittografati non possono essere generati. Sbloccali prima, oppure usa l’app PDF Editor.",
      },
      {
        title: "Il contenuto vettoriale diventa raster",
        body: "Le immagini non conservano il testo ricercabile. Per quello, conserva il PDF originale.",
      },
    ],
  },
  related: [
    { label: "Immagine a PDF — il percorso inverso", path: "/image-to-pdf" },
    { label: "Dividi PDF", path: "/split-pdf" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Il mio file viene inviato a un server?",
      a: "No. La generazione avviene interamente nel tuo browser; niente lascia il tuo dispositivo.",
    },
    {
      q: "PNG o JPG — quale scegliere?",
      a: "Il PNG è più nitido per il testo e supporta la trasparenza. Il JPG è più leggero e va bene per foto e screenshot a pagina intera.",
    },
    {
      q: "Cosa significa scala?",
      a: "Quanti pixel immagine per punto PDF. 2× dà risultati nitidi sugli schermi retina. 3× è più pesante ma molto definito.",
    },
    {
      q: "Posso avere un unico archivio ZIP con tutte le pagine?",
      a: "Non ancora — le pagine si scaricano una alla volta. Per l’esportazione in blocco, l’app mobile PDF Editor è più veloce.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF anche offline?",
    sub: "PDF Editor per iPhone e Android genera le pagine all’istante con accelerazione hardware.",
  },
};

export default content;
