import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Come ruotare le pagine di un PDF (gratis, senza caricare nulla)",
  description:
    "Ruota tutte le pagine di un PDF o solo alcune, di 90, 180 o 270 gradi, nel tuo browser. Correggi scansioni orizzontali e pagine capovolte perché il documento si legga bene.",
  updated: "2026-05-23",
  intro: [
    "Un PDF che si apre di lato è un piccolo fastidio, ma persistente. Inclini la testa, oppure continui a ruotare il telefono e la pagina ruota con te. La soluzione è ruotare la pagina stessa, così viene salvata dritta — a quel punto si legge correttamente per chiunque, su ogni dispositivo, senza che nessuno debba storcere il collo.",
    "Questa guida usa lo strumento gratuito Rotate PDF, che ruota tutte le pagine, o solo quelle scelte, di 90, 180 o 270 gradi, direttamente nel tuo browser senza caricare nulla. È il rimedio giusto sia se una sola pagina è sbagliata, sia se l’intero documento è uscito dallo scanner in orizzontale.",
    "Ruotare è un cambiamento permanente nel modo in cui la pagina viene salvata, quindi vedremo come applicarlo solo alle pagine che ne hanno bisogno e come confermare il risultato prima di salvare.",
  ],
  steps: [
    {
      title: "Apri lo strumento Rotate PDF",
      body: "Vai allo strumento Rotate PDF nel tuo browser. Funziona sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. Lo strumento mostra le pagine così puoi vedere quali sono sbagliate.",
    },
    {
      title: "Decidi quali pagine ruotare",
      body: "Ruota ogni pagina, oppure solo quelle storte — una singola tabella in orizzontale in un report altrimenti dritto, per esempio. Prendi nota di quali pagine e in che direzione.",
    },
    {
      title: "Scegli l’entità della rotazione",
      body: "Scegli 90° per una pagina sdraiata su un lato, 180° per una pagina capovolta, oppure 270° per una ruotata nell’altra direzione. Applicala alle pagine scelte.",
    },
    {
      title: "Controlla che ogni pagina sia dritta",
      body: "Conferma che le pagine corrette ora si leggano normalmente e che tu non abbia ruotato per sbaglio quelle già giuste.",
    },
    {
      title: "Scarica il PDF corretto",
      body: "Esporta il file ruotato e salvalo con un nome chiaro. L’originale resta intatto nel caso tu debba ricominciare.",
    },
  ],
  tips: [
    "Ruota solo le pagine sbagliate. Applicare una rotazione generale a un documento in cui quasi tutte le pagine sono già dritte crea solo nuovi problemi.",
    "Le pagine orizzontali — tabelle larghe, grafici, fogli di calcolo esportati in PDF — sono spesso pensate per essere così. Ruota solo se il contenuto è davvero storto, non se è correttamente largo.",
    "Se le pagine sono sia fuori ordine sia ruotate, correggi prima la rotazione, poi riordina — è più facile giudicare la sequenza quando ogni pagina è dritta.",
    "Ruotare prima di unire fa sì che il documento combinato sia corretto fin dall’inizio, senza sorprese storte sepolte nel mezzo.",
    "Tieni l’originale. Se ruoti nella direzione sbagliata, è più veloce ripartire dal file intatto che ruotare avanti e indietro.",
  ],
  mobileNote:
    "Le scansioni storte succedono soprattutto sul telefono, ed è lì che si correggono più in fretta. L’app PDF Editor ruota le pagine con un tocco e funziona offline, così puoi raddrizzare un documento appena scansionato prima che lasci mai il dispositivo.",
  faq: [
    {
      q: "Posso ruotare una sola pagina?",
      a: "Sì. Seleziona solo le pagine sbagliate e ruota quelle, lasciando il resto del documento com’è.",
    },
    {
      q: "Che rotazione dovrei scegliere?",
      a: "90° per una pagina sdraiata su un lato, 180° per una capovolta, e 270° per una girata nella direzione opposta. Scegli l’entità che raddrizza il contenuto.",
    },
    {
      q: "La rotazione è permanente?",
      a: "Viene salvata nel file esportato, così la pagina si legge dritta ovunque. Il tuo originale resta intatto, quindi puoi sempre rifarla se serve.",
    },
    {
      q: "Il mio PDF viene caricato?",
      a: "No. La rotazione avviene nel tuo browser, sul tuo dispositivo, quindi il file non lo lascia mai.",
    },
    {
      q: "La mia scansione è storta e fuori ordine — cosa prima?",
      a: "Prima ruota le pagine per raddrizzarle, poi usa lo strumento Reorder PDF Pages per correggere la sequenza. Giudicare l’ordine è più facile quando tutto è già dritto.",
    },
  ],
  related: [
    { label: "Rotate PDF — correggi l’orientamento nel tuo browser", path: "/rotate-pdf" },
    { label: "Reorder PDF Pages — correggi la sequenza", path: "/reorder-pdf-pages" },
    { label: "Come correggere le pagine di un PDF storte", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "Come riordinare le pagine di un PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Rotate PDF", path: "/rotate-pdf" },
};

export default content;
