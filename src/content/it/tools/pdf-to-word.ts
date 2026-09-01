import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF a Word",
    h1: "Converti un PDF in Word modificabile — nel browser.",
    highlight: "nel browser",
    lead: "Estrai il testo di un PDF in un file .docx modificabile che puoi rielaborare in Word, Google Docs o Pages. Una conversione del testo onesta — nessuna falsa promessa di «impaginazione perfetta».",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come convertire un PDF in Word",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un PDF con testo nella pagina, oppure fai clic per sceglierne uno.",
      },
      {
        title: "Converti",
        body: "Fai clic su Converti in Word. Il testo selezionabile viene estratto in locale, nel tuo browser.",
      },
      {
        title: "Scarica",
        body: "Un file .docx si scarica automaticamente — aprilo e modificalo ovunque.",
      },
      {
        title: "Sistema il documento",
        body: "Riapplica titoli e impaginazione nel tuo editor. Il testo è tuo, puoi ristrutturarlo come vuoi.",
      },
    ],
  },
  useCases: {
    heading: "Quando questo è lo strumento giusto",
    items: [
      {
        title: "Riutilizza il testo di un contratto",
        body: "Estrai clausole da un contratto in PDF in una bozza modificabile invece di ridigitarle.",
      },
      {
        title: "Riadatta un report",
        body: "Sposta il testo del corpo di un report PDF in un documento che puoi ristrutturare.",
      },
      {
        title: "Cita e riporta",
        body: "Estrai passaggi per appunti, riepiloghi o citazioni senza trascrizione manuale.",
      },
      {
        title: "Recupera un PDF di cui non hai più l’originale",
        body: "Recupera testo modificabile quando il file .docx originale è ormai perduto.",
      },
    ],
  },
  limitations: {
    heading: "Limiti onesti",
    items: [
      {
        title: "Nessuna conservazione dell’impaginazione",
        body: "Questo strumento estrae solo il testo. Colonne, tabelle, spaziatura esatta, caratteri e immagini non vengono riprodotti — riapplichi la formattazione nel tuo editor.",
      },
      {
        title: "I PDF scansionati non funzionano",
        body: "I PDF solo immagine o scansionati non hanno un livello di testo. L’OCR non è disponibile nel browser; per le scansioni usa l’app PDF Editor.",
      },
      {
        title: "I documenti complessi richiedono una sistemazione",
        body: "I PDF molto elaborati (multicolonna, note a piè di pagina) vengono estratti come un flusso di testo leggibile che vorrai rifinire.",
      },
    ],
  },
  related: [
    { label: "Word a PDF — il percorso inverso", path: "/word-to-pdf" },
    { label: "PDF a immagini", path: "/pdf-to-images" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    { label: "PDF o DOCX — quale usare", path: "/compare/pdf-vs-docx" },
    {
      label: "Come convertire un PDF in Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Il mio file viene inviato a un server?",
      a: "No. L’estrazione del testo avviene interamente nel tuo browser. Il tuo PDF non lascia mai il tuo dispositivo.",
    },
    {
      q: "Il file Word sarà identico al PDF?",
      a: "No — e non facciamo finta che lo sia. È una conversione di testo pratica. Impaginazione, caratteri, colonne e immagini non vengono conservati; riapplichi la formattazione nel tuo editor.",
    },
    {
      q: "Dice che non è stato trovato testo — perché?",
      a: "Il tuo PDF è probabilmente una scansione o un file solo immagine senza livello di testo. Gli strumenti nel browser non possono fare OCR; l’app PDF Editor sì.",
    },
    {
      q: "Che formato ottengo?",
      a: "Un normale file .docx che si apre in Microsoft Word, Google Docs, Pages e LibreOffice.",
    },
    {
      q: "Posso riconvertirlo?",
      a: "Sì — usa Word a PDF per trasformare il tuo .docx modificato di nuovo in PDF.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android converte, modifica e firma documenti direttamente dal telefono.",
  },
};

export default content;
