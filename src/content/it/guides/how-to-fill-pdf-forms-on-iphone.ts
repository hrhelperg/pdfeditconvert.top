import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Come compilare moduli PDF su iPhone (File, Markup e app)",
  description:
    "Compila moduli PDF interattivi e non interattivi su iPhone — con File e Markup oppure con un’app PDF dedicata. I passaggi specifici di iOS, la via del menu di condivisione, e dove Markup non basta.",
  updated: "2026-06-01",
  intro: [
    "iPhone è davvero efficace con i moduli PDF, una volta che conosci le due vie di iOS. Quella integrata usa l’app File e Markup, che possono compilare moduli non interattivi e aggiungere una firma all’occorrenza. La via più completa è un’app PDF dedicata che riconosce i campi interattivi, ci scrive dentro correttamente ed esporta una copia completata pulita — la scelta migliore appena un modulo supera un paio di righe.",
    "Sono i dettagli specifici di iOS a mandare in confusione: un modulo aperto dall’anteprima di Mail spesso non mostra i suoi campi, il menu di condivisione è il modo per spostare un modulo tra le app, e Markup tratta tutto come una pagina non interattiva anche quando esistono campi veri. Conoscere queste particolarità trasforma la compilazione di un modulo su iPhone in un lavoro da 30 secondi.",
    "Questa guida copre entrambe le vie — l’approccio nativo con File e Markup, con i suoi limiti onesti, e l’app PDF Editor per i moduli interattivi — così puoi scegliere quella giusta per il modulo che hai davanti.",
  ],
  steps: [
    {
      title: "Porta il modulo fuori dall’anteprima di Mail",
      body: "Se il modulo è arrivato per email, tocca per salvarlo prima in File, oppure aprilo tramite il menu di condivisione in una vera app PDF. L’anteprima rapida di Mail spesso ignora i campi del modulo, ed è per questo che lì sembra impossibile scrivere.",
    },
    {
      title: "Prova File e Markup per i moduli non interattivi",
      body: "Apri il PDF in File e tocca la penna di Markup. Puoi aggiungere caselle di testo e una firma in qualsiasi punto della pagina — va bene per i moduli non interattivi e le compilazioni rapide, anche se Markup non riesce ad accedere ai campi interattivi veri.",
    },
    {
      title: "Usa un’app PDF per i campi interattivi",
      body: "Per i moduli con campi veri, apri il file nell’app PDF Editor. Riconosce i campi così puoi toccare e scrivere, selezionare le caselle di controllo e passare da un campo all’altro in modo ordinato.",
    },
    {
      title: "Gestisci i moduli non interattivi posizionando il testo",
      body: "Quando un modulo non ha campi, usa lo strumento testo dell’app per posizionare le risposte esattamente su ogni riga. Allarga con due dita per ingrandire, così il testo cade con precisione invece di restare sospeso sopra la riga.",
    },
    {
      title: "Firma ed esporta tramite il menu di condivisione",
      body: "Aggiungi la tua firma nell’area dedicata, poi esporta una copia completata e inviala direttamente dal menu di condivisione — a Mail, Messaggi, o a chi te lo ha inviato.",
    },
  ],
  tips: [
    "Se non riesci a scrivere in un modulo su iPhone, sei quasi sempre nell’anteprima di Mail — salvalo prima in File o aprilo in un’app PDF.",
    "Markup è ottimo per una firma rapida o un modulo non interattivo, ma non compila i campi interattivi veri come fa un’app dedicata.",
    "Ingrandisci prima di posizionare il testo su un modulo non interattivo; con le dita si è imprecisi, mentre con lo zoom il testo cade sulla riga.",
    "Tieni l’originale vuoto in File così puoi compilare una copia nuova la prossima volta invece di modificarne una vecchia.",
    "iOS gestisce bene HEIC e PDF, ma il comportamento dei moduli varia comunque da un’app all’altra — un’app PDF dedicata è la più coerente.",
  ],
  mobileNote:
    "L’app PDF Editor per iPhone riconosce i campi interattivi dove esistono e ti lascia posizionare testo e segni di spunta sui moduli non interattivi dove non esistono, poi firma ed esporta — tutto sul dispositivo, così i dati personali del modulo non vengono inviati altrove. È la via che evita i vicoli ciechi dell’anteprima di Mail.",
  faq: [
    {
      q: "Perché non riesco a scrivere in un modulo PDF sul mio iPhone?",
      a: "Molto probabilmente lo stai vedendo nell’anteprima di Mail, che ignora i campi del modulo. Salva il file in File o aprilo in un’app PDF dedicata, e i campi si attiveranno. Per i moduli non interattivi, invece, va posizionato il testo sopra.",
    },
    {
      q: "Posso compilare un modulo PDF con lo strumento Markup integrato?",
      a: "Sì, per i moduli non interattivi e le compilazioni rapide — Markup aggiunge testo e una firma in qualsiasi punto della pagina. Ma tratta il modulo come un’immagine non interattiva, quindi non riesce ad accedere ai campi interattivi veri. Per quelli usa un’app PDF.",
    },
    {
      q: "Come compilo un modulo scansionato su iPhone?",
      a: "Un modulo scansionato è non interattivo, quindi posiziona tu testo e segni di spunta sulla pagina con Markup o con l’app PDF Editor, poi esporta. Non ci sono campi in cui scrivere.",
    },
    {
      q: "Compilare un modulo su iPhone è sicuro dal punto di vista della privacy?",
      a: "Con l’app PDF Editor il modulo viene compilato sul dispositivo, quindi i dati che inserisci non vengono inviati da nessuna parte. Anche Markup è locale. Gli strumenti di compilazione via web potrebbero inviare il file a un server.",
    },
    {
      q: "Come rimando indietro il modulo completato?",
      a: "Esporta una copia completata e usa il menu di condivisione di iOS per inviarla con Mail, Messaggi o qualsiasi altra app. Appiattiscila prima se vuoi bloccare le risposte.",
    },
  ],
  related: [
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Come compilare moduli PDF su Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Come firmare un PDF su iPhone",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "Migliore app per moduli PDF su iPhone",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "Il flusso di lavoro mobile per i moduli PDF", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
