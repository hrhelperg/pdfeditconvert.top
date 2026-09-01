import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Immagine a PDF",
    h1: "Trasforma immagini JPG, PNG e WebP in un unico PDF.",
    highlight: "unico PDF",
    lead: "Aggiungi immagini JPG, PNG o WebP e combinale in un unico PDF. Riordina le pagine, poi scarica — le tue immagini restano sul tuo dispositivo.",
  },
  privacyNote:
    "I tuoi file vengono elaborati in locale, nel tuo browser, e non vengono inviati ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come usare lo strumento Immagine a PDF",
    steps: [
      {
        title: "Aggiungi le tue immagini",
        body: "Trascina file JPG, PNG o WebP nella pagina, oppure fai clic per sceglierli dal tuo dispositivo.",
      },
      {
        title: "Riordina se necessario",
        body: "Usa le frecce su e giù su ogni riga per mettere le pagine nella sequenza giusta.",
      },
      {
        title: "Genera il PDF",
        body: "Fai clic su Crea PDF. Le tue immagini diventano le pagine di un unico documento, dimensionate in base a ciascuna immagine.",
      },
      {
        title: "Scarica",
        body: "Il PDF generato si scarica automaticamente. Puoi rinominarlo dopo averlo salvato.",
      },
    ],
  },
  useCases: {
    heading: "Quando questo strumento è utile",
    items: [
      {
        title: "Ricevute e spese fotografate",
        body: "Raggruppa un mese di ricevute in un unico PDF prima di inviarlo al commercialista.",
      },
      {
        title: "Scansioni di documenti d’identità e passaporti",
        body: "Combina fronte e retro in un unico documento accettato da un portale della pubblica amministrazione.",
      },
      {
        title: "Screenshot in un report",
        body: "Raccogli una serie di screenshot dell’interfaccia in un documento di revisione ordinato.",
      },
      {
        title: "Foto di una lavagna",
        body: "Trasforma una sequenza di foto scattate durante una riunione in un unico documento sfogliabile dal team.",
      },
    ],
  },
  limitations: {
    heading: "Limiti",
    items: [
      {
        title: "Solo JPG, PNG e WebP",
        body: "HEIC, AVIF, GIF e TIFF non sono supportati nel browser. Convertili prima oppure usa l’app mobile.",
      },
      {
        title: "Memoria del browser",
        body: "Lotti molto grandi (centinaia di foto ad alta risoluzione) possono rallentare i dispositivi meno recenti.",
      },
      {
        title: "Nessun OCR",
        body: "Il testo dentro le immagini non viene estratto. Per PDF ricercabili, scansiona con l’app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Unisci file PDF", path: "/merge-pdf" },
    { label: "PDF a immagini", path: "/pdf-to-images" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Le mie immagini vengono inviate da qualche parte?",
      a: "No. Tutto avviene nel tuo browser. Le tue immagini non lasciano mai il tuo dispositivo.",
    },
    {
      q: "C’è un limite di dimensione del file?",
      a: "Sì — ogni file è limitato a 100 MB perché il browser resti reattivo. L’app mobile PDF Editor gestisce lotti più grandi con accelerazione hardware.",
    },
    {
      q: "Posso cambiare il formato della pagina?",
      a: "Ogni pagina corrisponde alle dimensioni in pixel della sua immagine, così le proporzioni restano corrette. Per un output uniforme in A4, usa l’app PDF Editor.",
    },
    {
      q: "Funziona su iPhone e Android?",
      a: "Sì, in qualsiasi browser mobile moderno. Per un uso frequente, l’app PDF Editor è più veloce e supporta le foto HEIC direttamente dal rullino fotografico.",
    },
  ],
  appCta: {
    heading: "Ti serve questo strumento ogni settimana, dal telefono?",
    sub: "PDF Editor per iPhone e Android scansiona, organizza e firma PDF offline.",
  },
};

export default content;
