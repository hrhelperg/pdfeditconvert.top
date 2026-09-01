import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Dividi PDF",
    h1: "Estrai pagine da un PDF — in modo privato, nel browser.",
    highlight: "nel browser",
    lead: "Aggiungi un PDF e seleziona l’intervallo di pagine da esportare. Usa intervalli come 1-3,5,8-10 — il tuo file resta sul tuo dispositivo.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come dividere un PDF",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un singolo PDF nella pagina, oppure fai clic per sceglierlo.",
      },
      {
        title: "Inserisci gli intervalli di pagine",
        body: "Digita pagine e intervalli separati da virgole. Esempio: 1-3,5,8-10.",
      },
      {
        title: "Dividi",
        body: "Fai clic su Estrai pagine. Costruiamo un nuovo PDF con solo quelle pagine, in locale.",
      },
      {
        title: "Scarica",
        body: "Il nuovo PDF si scarica automaticamente. Rinominalo dopo averlo salvato.",
      },
    ],
  },
  useCases: {
    heading: "Quando dividere è la scelta giusta",
    items: [
      {
        title: "Invia solo le pagine rilevanti",
        body: "Condividi solo la clausola del contratto che conta, non l’intero documento.",
      },
      {
        title: "Separa un lotto scansionato",
        body: "Scomponi una scansione con più documenti nei singoli file originari.",
      },
      {
        title: "Estrai una singola pagina da un report",
        body: "Estrai un grafico o una tabella senza mostrare il resto del file.",
      },
      {
        title: "Crea un allegato più pulito",
        body: "Elimina copertine, pagine bianche o appendici prima di inviare via email.",
      },
    ],
  },
  limitations: {
    heading: "Limiti",
    items: [
      {
        title: "PDF protetti da password",
        body: "I file bloccati non possono essere divisi nel browser. Sbloccali prima oppure usa l’app PDF Editor.",
      },
      {
        title: "File molto grandi",
        body: "Il browser può esaurire la memoria con documenti oltre qualche centinaio di megabyte.",
      },
      {
        title: "Nessun output per intervallo separato",
        body: "Questo strumento esporta un unico PDF combinato con le pagine scelte. Per più file di output, eseguilo due volte.",
      },
    ],
  },
  related: [
    { label: "Unisci PDF — il percorso inverso", path: "/merge-pdf" },
    { label: "Ruota le pagine di un PDF", path: "/rotate-pdf" },
    { label: "PDF a immagini", path: "/pdf-to-images" },
    { label: "Comprimi un PDF", path: "/compress-pdf" },
    { label: "Estrai pagine da un PDF", path: "/extract-pdf-pages" },
    { label: "Riordina le pagine di un PDF", path: "/reorder-pdf-pages" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "I miei file vengono inviati a un server?",
      a: "No. La divisione avviene interamente nel tuo browser; il tuo file non lascia mai il tuo dispositivo.",
    },
    {
      q: "Qual è la sintassi per gli intervalli di pagine?",
      a: "Pagine e intervalli separati da virgole. Esempio: 1-3,5,8-10 mantiene le pagine 1, 2, 3, 5, 8, 9 e 10.",
    },
    {
      q: "Posso dividere un PDF protetto da password?",
      a: "Non nel browser. Rimuovi prima la password, oppure usa l’app PDF Editor.",
    },
    {
      q: "Il file risultante mantiene la qualità originale?",
      a: "Sì — le pagine vengono copiate byte per byte. Nessuna rigenerazione, nessuna perdita di qualità.",
    },
  ],
  appCta: {
    heading: "Devi dividere un PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android divide e unisce PDF direttamente dal tuo telefono.",
  },
};

export default content;
