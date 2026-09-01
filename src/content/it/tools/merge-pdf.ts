import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Unisci PDF",
    h1: "Combina più PDF in un unico documento — nel browser.",
    highlight: "nel browser",
    lead: "Aggiungi due o più file PDF e combinali in un unico documento. Riordina prima di unire — i tuoi file restano sul tuo dispositivo.",
  },
  privacyNote:
    "I tuoi file vengono elaborati in locale, nel tuo browser, e non vengono inviati ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come unire i PDF",
    steps: [
      {
        title: "Aggiungi i tuoi PDF",
        body: "Trascina due o più PDF nella pagina, oppure fai clic per sceglierli dal tuo dispositivo.",
      },
      {
        title: "Riordina se necessario",
        body: "Usa le frecce su ogni riga per mettere le pagine nella sequenza giusta prima di unire.",
      },
      {
        title: "Unisci",
        body: "Fai clic su Unisci PDF. I tuoi file vengono combinati in locale, nel tuo browser.",
      },
      {
        title: "Scarica",
        body: "Il PDF combinato si scarica automaticamente. Rinominalo dopo averlo salvato.",
      },
    ],
  },
  useCases: {
    heading: "Quando unire è la scelta giusta",
    items: [
      {
        title: "Invia un solo file, non cinque",
        body: "Clienti, commercialisti e avvocati preferiscono un unico documento a una serie di allegati.",
      },
      {
        title: "Raggruppa preventivo, contratto e fattura",
        body: "Crea un unico file facile da controllare partendo da documenti creati con strumenti diversi.",
      },
      {
        title: "Riunisci pagine scansionate",
        body: "Combina le scansioni pagina per pagina di un passaporto, una carta d’identità o un contratto in un unico documento accettato da un portale.",
      },
      {
        title: "Componi un report",
        body: "Unisci una copertina, un PDF di corpo e gli allegati di supporto in un unico documento finale.",
      },
    ],
  },
  limitations: {
    heading: "Limiti",
    items: [
      {
        title: "PDF protetti da password",
        body: "I file bloccati non possono essere uniti nel browser. Sbloccali prima con l’app di origine, oppure usa l’app PDF Editor.",
      },
      {
        title: "Pacchetti molto grandi",
        body: "Il browser esaurisce la memoria molto prima di un’app nativa. Per 50 o più file, o scansioni molto pesanti, usa l’app PDF Editor.",
      },
      {
        title: "Segnalibri e campi dei moduli",
        body: "Alcune strutture incorporate (campi dei moduli, annotazioni) possono appiattirsi durante l’unione. L’app mobile le conserva meglio.",
      },
    ],
  },
  related: [
    { label: "Dividi PDF — il percorso inverso", path: "/split-pdf" },
    { label: "Ruota le pagine di un PDF", path: "/rotate-pdf" },
    { label: "Comprimi un PDF", path: "/compress-pdf" },
    { label: "Riordina le pagine di un PDF", path: "/reorder-pdf-pages" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    { label: "Guida: come unire più PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "I miei file vengono inviati a un server?",
      a: "No. L’unione avviene interamente nel tuo browser. I tuoi file non lasciano mai il tuo dispositivo.",
    },
    {
      q: "C’è un limite al numero di PDF che posso unire?",
      a: "Non c’è un limite rigido, ma ti consigliamo di restare sotto i 30 file o circa 500 MB totali per singolo lotto, così il browser resta reattivo.",
    },
    {
      q: "Posso unire PDF protetti da password?",
      a: "Non nel browser. Rimuovi prima la password oppure usa l’app PDF Editor, che supporta i file protetti.",
    },
    {
      q: "La formattazione originale cambia?",
      a: "No. Ogni pagina di origine viene conservata esattamente. Cambiano solo l’ordine delle pagine e il documento che le contiene.",
    },
    {
      q: "Posso separarlo di nuovo in seguito?",
      a: "Sì. Usa lo strumento Dividi PDF per scomporre qualsiasi file unito in pagine o intervalli.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android unisce, firma e scansiona PDF direttamente dal tuo telefono.",
  },
};

export default content;
