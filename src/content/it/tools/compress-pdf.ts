import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Comprimi PDF",
    h1: "Riduci le dimensioni dei tuoi PDF — nel browser.",
    highlight: "nel browser",
    lead: "Riduci le dimensioni di un PDF per rispettare i limiti di allegati email e di caricamento. Scegli il livello di compressione, guarda esattamente quanto hai risparmiato e scarica il file — il tuo PDF non lascia mai il tuo dispositivo.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come comprimere un PDF",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un PDF nella pagina oppure fai clic per sceglierne uno dal tuo dispositivo.",
      },
      {
        title: "Scegli un livello",
        body: "Basso conserva più dettagli; Consigliato bilancia dimensione e qualità; Forte dà il file più piccolo.",
      },
      {
        title: "Comprimi",
        body: "Fai clic su Comprimi PDF. Le pagine vengono rigenerate e ricodificate in locale, nel tuo browser.",
      },
      {
        title: "Scarica",
        body: "Confronta la dimensione prima e dopo, con la percentuale di riduzione, e scarica il file più leggero.",
      },
    ],
  },
  useCases: {
    heading: "Quando la compressione aiuta di più",
    items: [
      {
        title: "Limiti di dimensione delle email",
        body: "Fai rientrare un contratto scansionato o una brochure sotto il limite di 10 MB o 25 MB di un allegato.",
      },
      {
        title: "Moduli e portali di caricamento",
        body: "I portali della pubblica amministrazione e delle risorse umane spesso rifiutano file di pochi megabyte — questo risolve il problema.",
      },
      {
        title: "Documenti scansionati",
        body: "Le scansioni fatte con il telefono sono enormi. I PDF pieni di immagini si riducono drasticamente con la compressione forte.",
      },
      {
        title: "Archiviazione e condivisione",
        body: "Mantieni gli archivi leggeri e fai scaricare i link più velocemente a chi li riceve.",
      },
    ],
  },
  limitations: {
    heading: "Limiti onesti",
    items: [
      {
        title: "Il testo diventa un’immagine",
        body: "La compressione rigenera ogni pagina come immagine, quindi nel risultato il testo non è più selezionabile né ricercabile. Conserva l’originale se ti serve quella funzione.",
      },
      {
        title: "I PDF di solo testo si riducono poco",
        body: "Se un PDF è già quasi tutto testo o grafica vettoriale, c’è poco da comprimere — in questo caso manteniamo il tuo file originale invece di restituirtene uno più grande.",
      },
      {
        title: "PDF molto grandi o bloccati",
        body: "Il browser esaurisce la memoria molto prima di un’app nativa. I PDF protetti da password non possono essere elaborati nel browser — usa l’app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Unisci PDF", path: "/merge-pdf" },
    { label: "Dividi un PDF", path: "/split-pdf" },
    { label: "Estrai pagine da un PDF", path: "/extract-pdf-pages" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    { label: "Guida: come comprimere un PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Il mio file viene inviato a un server?",
      a: "No. La compressione funziona interamente nel tuo browser, usando il processore del tuo dispositivo. Il tuo file non lascia mai il tuo dispositivo.",
    },
    {
      q: "Di quanto si ridurrà il mio PDF?",
      a: "Dipende dal contenuto. I PDF scansionati e pieni di immagini spesso si riducono del 50-90%. I PDF di solo testo potrebbero non ridursi affatto — in quel caso manteniamo il tuo originale.",
    },
    {
      q: "La qualità peggiora?",
      a: "Sì, un po’ — è una compressione con perdita di dati. I livelli più bassi conservano più dettagli. Non promettiamo mai «nessuna perdita di qualità»; scegli il livello che ti sembra accettabile.",
    },
    {
      q: "Perché il testo non è più selezionabile dopo la compressione?",
      a: "Per ottenere un vero risparmio di spazio nel browser, ogni pagina viene trasformata in un’immagine. Se ti serve il testo selezionabile, conserva l’originale oppure usa un livello più leggero.",
    },
    {
      q: "Posso comprimere un PDF protetto da password?",
      a: "Non nel browser. Rimuovi prima la password oppure usa l’app PDF Editor, che supporta i file protetti.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android comprime, firma e condivide i tuoi PDF direttamente dal telefono.",
  },
};

export default content;
