import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Estrai pagine dal PDF",
    h1: "Estrai pagine da un PDF — nel browser.",
    highlight: "nel browser",
    lead: "Aggiungi un PDF, digita le pagine o gli intervalli che ti servono e scarica un nuovo PDF con solo quelle pagine. Tutto avviene sul tuo dispositivo.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come estrarre pagine da un PDF",
    steps: [
      {
        title: "Aggiungi il tuo PDF",
        body: "Trascina un PDF nella pagina, oppure fai clic per sceglierne uno. Ti mostreremo il numero totale di pagine.",
      },
      {
        title: "Inserisci le pagine",
        body: "Digita singole pagine e intervalli, ad es. 1-3,5,8-10. Il conteggio selezionato si aggiorna mentre scrivi.",
      },
      {
        title: "Estrai",
        body: "Fai clic su Estrai pagine. Un nuovo PDF con solo quelle pagine viene creato in locale.",
      },
      {
        title: "Scarica",
        body: "Il PDF estratto si scarica automaticamente.",
      },
    ],
  },
  useCases: {
    heading: "Quando estrarre aiuta",
    items: [
      {
        title: "Condividi solo ciò che serve",
        body: "Invia una singola sezione, un capitolo o una pagina firmata invece dell’intero documento.",
      },
      {
        title: "Estrai un modulo o una ricevuta",
        body: "Prendi la singola pagina richiesta da un portale senza mostrare il resto.",
      },
      {
        title: "Isola un capitolo",
        body: "Crea un PDF mirato da un report o un libro lungo per studio o revisione.",
      },
      {
        title: "Componi un fascicolo personalizzato",
        body: "Riordina una selezione elencando le pagine nell’ordine in cui le vuoi.",
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
        title: "Pagine fuori intervallo",
        body: "I numeri di pagina superiori alla lunghezza del documento vengono ignorati; se non viene selezionato nulla di valido, ricevi un messaggio di errore chiaro.",
      },
      {
        title: "PDF molto grandi",
        body: "Il browser esaurisce la memoria molto prima di un’app nativa. Per file enormi, usa l’app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Dividi un PDF", path: "/split-pdf" },
    { label: "Riordina le pagine di un PDF", path: "/reorder-pdf-pages" },
    { label: "Comprimi un PDF", path: "/compress-pdf" },
    { label: "Unisci PDF", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "I miei file vengono inviati a un server?",
      a: "No. L’estrazione avviene interamente nel tuo browser. Il tuo file non lascia mai il tuo dispositivo.",
    },
    {
      q: "Che formati di pagina posso inserire?",
      a: "Singole pagine e intervalli separati da virgole: 1-3, 2,4,6, oppure 1-2,5,8-10. Gli spazi vanno bene.",
    },
    {
      q: "Cosa succede con un intervallo non valido?",
      a: "I valori non validi vengono rifiutati con un messaggio chiaro; i numeri fuori intervallo vengono ignorati. Se non resta nulla di valido, ti viene spiegato il motivo.",
    },
    {
      q: "Posso ripetere o riordinare le pagine?",
      a: "Sì. Elenca le pagine nell’ordine che preferisci; ripetere una pagina la produce più di una volta.",
    },
    {
      q: "L’estrazione modifica la qualità?",
      a: "No. Le pagine selezionate vengono copiate esattamente come sono — il testo resta selezionabile e nulla viene ricompresso.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android estrae, divide e firma PDF direttamente dal tuo telefono.",
  },
};

export default content;
