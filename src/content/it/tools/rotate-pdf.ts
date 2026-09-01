import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Ruota PDF",
    h1: "Correggi le pagine PDF storte — nel browser.",
    highlight: "nel browser",
    lead: "Ruota tutte le pagine o solo quelle che scegli, poi scarica un PDF corretto — tutto nel tuo browser.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come ruotare un PDF",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un singolo PDF nella pagina, oppure fai clic per sceglierlo.",
      },
      {
        title: "Scegli un angolo",
        body: "Seleziona 90°, 180° o 270° (in senso orario).",
      },
      {
        title: "Scegli quali pagine",
        body: "Ruota tutte le pagine, oppure indica i numeri di pagina (ad es. 1,3-5).",
      },
      {
        title: "Ruota e scarica",
        body: "Fai clic su Ruota. Ricostruiamo il PDF in locale con il nuovo orientamento.",
      },
    ],
  },
  useCases: {
    heading: "Quando ruotare è la scelta giusta",
    items: [
      {
        title: "Scansioni da telefono arrivate storte",
        body: "Le scansioni fatte con la fotocamera spesso vengono salvate in orizzontale — correggile con un clic.",
      },
      {
        title: "Report con orientamenti misti",
        body: "Tabelle larghe su pagine orizzontali inserite in un report verticale? Correggile senza riscansionare.",
      },
      {
        title: "Passaporti e carte d’identità",
        body: "Assicurati che ogni pagina si legga nello stesso verso prima che un portale della pubblica amministrazione dia errore.",
      },
      {
        title: "Ricevute e fatture",
        body: "Rendi leggibile in un’unica direzione una serie di foto di ricevute prima di unirle.",
      },
    ],
  },
  limitations: {
    heading: "Limiti",
    items: [
      {
        title: "PDF protetti da password",
        body: "I file bloccati non possono essere ruotati nel browser. Sbloccali prima, oppure usa l’app PDF Editor.",
      },
      {
        title: "Angoli personalizzati per singola pagina",
        body: "Questo strumento applica un angolo alla volta. Per angoli diversi, eseguilo due volte con selezioni di pagine differenti.",
      },
      {
        title: "Annotazioni e campi dei moduli",
        body: "La rotazione può spostare visivamente gli elementi sovrapposti. L’app mobile gestisce le annotazioni in modo più preciso.",
      },
    ],
  },
  related: [
    { label: "Unisci file PDF", path: "/merge-pdf" },
    { label: "Dividi PDF", path: "/split-pdf" },
    { label: "Aggiungi una filigrana a un PDF", path: "/add-watermark-to-pdf" },
    { label: "Riordina le pagine di un PDF", path: "/reorder-pdf-pages" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Il mio file viene inviato a un server?",
      a: "No. La rotazione avviene interamente nel tuo browser; niente lascia il tuo dispositivo.",
    },
    {
      q: "Posso ruotare solo alcune pagine?",
      a: "Sì. Usa il campo di selezione delle pagine, ad esempio 1,3-5,9.",
    },
    {
      q: "La rotazione riduce la qualità?",
      a: "No. Le pagine restano identiche byte per byte; impostiamo solo i metadati di rotazione.",
    },
    {
      q: "Posso ruotare un PDF protetto da password?",
      a: "Non nel browser. Rimuovi prima la password, oppure usa l’app PDF Editor.",
    },
  ],
  appCta: {
    heading: "Ruota i PDF anche dal telefono.",
    sub: "PDF Editor per iPhone e Android modifica, ruota e firma PDF offline.",
  },
};

export default content;
