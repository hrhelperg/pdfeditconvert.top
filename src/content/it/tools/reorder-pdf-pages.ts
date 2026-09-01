import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Riordina le pagine del PDF",
    h1: "Riordina le pagine di un PDF — nel browser.",
    highlight: "nel browser",
    lead: "Aggiungi un PDF, guarda l’anteprima di ogni pagina, spostale nell’ordine che preferisci e scarica il file riorganizzato. Niente viene inviato a un server.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come riordinare le pagine di un PDF",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un PDF nella pagina, oppure fai clic per sceglierne uno dal tuo dispositivo.",
      },
      {
        title: "Controlla le anteprime",
        body: "Ogni pagina viene generata come miniatura, così vedi esattamente cosa stai spostando.",
      },
      {
        title: "Sposta le pagine",
        body: "Usa le frecce su/giù su ogni pagina per spostarla prima o dopo nel documento.",
      },
      {
        title: "Crea e scarica",
        body: "Fai clic su Riordina PDF. Il PDF riorganizzato viene creato in locale e si scarica automaticamente.",
      },
    ],
  },
  useCases: {
    heading: "Quando riordinare aiuta",
    items: [
      {
        title: "Correggi l’ordine di una scansione",
        body: "Le app di scansione di telefono e scanner catturano spesso le pagine fuori sequenza — mettile a posto prima di condividerle.",
      },
      {
        title: "Sposta una copertina o un’appendice",
        body: "Porta una copertina all’inizio o sposta il materiale di supporto in fondo.",
      },
      {
        title: "Ricomponi un file unito",
        body: "Dopo aver combinato più documenti, disponi le pagine esattamente nell’ordine di lettura che ti serve.",
      },
      {
        title: "Prepara per la stampa",
        body: "Disponi le pagine per opuscoli, dispense o stampa fronte-retro.",
      },
    ],
  },
  limitations: {
    heading: "Limiti onesti",
    items: [
      {
        title: "PDF protetti da password",
        body: "I file crittografati non possono essere aperti nel browser. Sbloccali prima, oppure usa l’app PDF Editor.",
      },
      {
        title: "PDF molto grandi",
        body: "Generare una miniatura per ogni pagina consuma memoria. Centinaia di pagine possono risultare lente o raggiungere i limiti del browser.",
      },
      {
        title: "Le miniature richiedono un momento",
        body: "Le anteprime vengono generate pagina per pagina sul tuo dispositivo, quindi i PDF grandi richiedono qualche secondo prima che tu possa riordinarli.",
      },
    ],
  },
  related: [
    { label: "Unisci PDF", path: "/merge-pdf" },
    { label: "Dividi un PDF", path: "/split-pdf" },
    { label: "Ruota le pagine di un PDF", path: "/rotate-pdf" },
    { label: "Estrai pagine da un PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "I miei file vengono inviati a un server?",
      a: "No. Il PDF viene generato e ricostruito interamente nel tuo browser. Il tuo file non lascia mai il tuo dispositivo.",
    },
    {
      q: "Posso trascinare le pagine per riordinarle?",
      a: "Il riordino usa chiari pulsanti su/giù su ogni pagina. Funziona in modo affidabile su mobile e desktop, senza piccole maniglie di trascinamento con cui lottare.",
    },
    {
      q: "Il contenuto o la qualità delle pagine cambiano?",
      a: "No. Le pagine vengono copiate esattamente come sono — cambia solo il loro ordine. Il testo resta selezionabile.",
    },
    {
      q: "Perché ci vuole un momento dopo aver aggiunto il file?",
      a: "Ogni pagina viene generata in un’anteprima in miniatura in locale, così vedi cosa stai spostando. I PDF più grandi richiedono un po’ più di tempo.",
    },
    {
      q: "Posso riordinare un PDF protetto da password?",
      a: "Non nel browser. Rimuovi prima la password, oppure usa l’app PDF Editor, che supporta i file protetti.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android riordina, unisce e firma PDF direttamente dal tuo telefono.",
  },
};

export default content;
