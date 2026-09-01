import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Aggiungi filigrana",
    h1: "Aggiungi una filigrana di testo a ogni pagina di un PDF.",
    highlight: "ogni pagina",
    lead: "Aggiungi una semplice filigrana di testo prima di condividere il tuo PDF — scegli posizione, opacità, dimensione del carattere e rotazione.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come aggiungere una filigrana",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un singolo PDF nella pagina, oppure fai clic per sceglierlo.",
      },
      {
        title: "Digita la tua filigrana",
        body: "Fino a circa 40 caratteri funziona meglio. Esempi: RISERVATO, BOZZA, Campione.",
      },
      {
        title: "Regola opacità e angolo",
        body: "Opacità più bassa per un effetto discreto, più alta per uno evidente. 45° va bene per la maggior parte delle impaginazioni.",
      },
      {
        title: "Scarica",
        body: "Ricostruiamo il PDF in locale con la filigrana su ogni pagina.",
      },
    ],
  },
  useCases: {
    heading: "Quando le filigrane sono utili",
    items: [
      {
        title: "Bozze in revisione",
        body: "Segna i documenti come BOZZA prima di farli circolare, per evitare confusione.",
      },
      {
        title: "Documenti riservati",
        body: "Applica il timbro RISERVATO prima di condividere contratti o dati finanziari sensibili.",
      },
      {
        title: "Materiali campione",
        body: "Applica una filigrana ai campioni del tuo portfolio così non possono essere riutilizzati senza autorizzazione.",
      },
      {
        title: "Documenti solo interni",
        body: "Segna i documenti non destinati alla distribuzione esterna.",
      },
    ],
  },
  limitations: {
    heading: "Limiti",
    items: [
      {
        title: "Solo filigrane di testo",
        body: "Questo strumento applica del testo. Per filigrane con immagini o loghi, usa l’app PDF Editor.",
      },
      {
        title: "Solo caratteri standard",
        body: "Usiamo il carattere Helvetica integrato, così l’output resta portabile. I font personalizzati non vengono incorporati.",
      },
      {
        title: "Le filigrane possono essere rimosse",
        body: "Una filigrana non è una protezione legale. Scoraggia un uso improprio occasionale, non una modifica intenzionale.",
      },
    ],
  },
  related: [
    { label: "Unisci file PDF", path: "/merge-pdf" },
    { label: "Dividi PDF", path: "/split-pdf" },
    { label: "Ruota PDF", path: "/rotate-pdf" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Il mio file viene inviato a un server?",
      a: "No. L’applicazione della filigrana avviene interamente nel tuo browser; niente lascia il tuo dispositivo.",
    },
    {
      q: "Posso usare un carattere diverso?",
      a: "Non in questo strumento — usiamo Helvetica così l’output resta portabile. Per caratteri personalizzati, usa l’app PDF Editor.",
    },
    {
      q: "La filigrana viene applicata su ogni pagina?",
      a: "Sì. Lo stesso testo viene centrato in diagonale su ogni pagina.",
    },
    {
      q: "Una filigrana può essere rimossa?",
      a: "Da chi ha gli strumenti giusti, sì. Una filigrana scoraggia un uso improprio occasionale, ma non è una misura di sicurezza.",
    },
  ],
  appCta: {
    heading: "Ti servono filigrane con immagini o loghi?",
    sub: "PDF Editor per iPhone e Android supporta caratteri personalizzati, immagini e posizionamento per singola pagina.",
  },
};

export default content;
