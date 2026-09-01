import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "Il flusso di lavoro mobile per i moduli PDF (dalla ricezione all’invio)",
  description:
    "Una routine ripetibile e pensata per il telefono: ricevi, apri nell’app giusta, compila, firma, appiattisci, invia. Il percorso completo senza bisogno di un computer.",
  updated: "2026-06-01",
  intro: [
    "I moduli sono uno dei compiti con i PDF davvero più adatti al telefono che esistano. Arrivano per email, li completi con il telefono in mano, e tornano indietro allo stesso modo — nessun computer richiesto in nessun passaggio. Il trucco non è un singolo strumento; è avere una routine ripetibile così che ogni modulo, interattivo o non interattivo, segua lo stesso percorso dalla posta in arrivo all’invio.",
    "Questa guida illustra quel flusso di lavoro dall’inizio alla fine. Sono di proposito le stesse cinque mosse ogni volta: portare il modulo in un’app adeguata, compilarlo, firmarlo, appiattirlo, inviarlo. Una volta che diventa automatico, un modulo che prima significava «aspetta finché non sono alla scrivania» diventa un lavoro da due minuti tra un’altra cosa e l’altra.",
    "Funziona per entrambi i tipi di modulo. Quelli interattivi li tocchi e ci scrivi; le scansioni non interattive ci scrivi sopra. Il flusso di lavoro non cambia — si adatta solo il passaggio di compilazione.",
  ],
  steps: [
    {
      title: "Ricevi e salva il modulo",
      body: "Quando un modulo arriva via email o come messaggio, salvalo in un posto che controlli — File o la memoria del telefono — invece di lavorare dentro un’anteprima che potrebbe ignorare i campi del modulo.",
    },
    {
      title: "Aprilo in un’app adatta ai moduli",
      body: "Apri il file salvato nell’app PDF Editor. Riconosce i campi interattivi se presenti e ti lascia aggiungere testo ai moduli non interattivi se non lo sono. Questo singolo passaggio evita la maggior parte dei vicoli ciechi del tipo «non riesco a scrivere».",
    },
    {
      title: "Compila in base al tipo di modulo",
      body: "Tocca e scrivi nei campi interattivi, oppure posiziona testo e segni di spunta su un modulo non interattivo. Ingrandisci per essere preciso, procedi dall’alto verso il basso e non saltare i campi obbligatori.",
    },
    {
      title: "Firma nella stessa sessione",
      body: "Aggiungi la tua firma salvata nell’area dedicata senza cambiare app. Farlo in un solo passaggio significa non dover esportare, riaprire e riposizionare tutto da capo.",
    },
    {
      title: "Appiattisci e invia",
      body: "Appiattisci il modulo completato così le risposte si bloccano, poi invialo dal menu di condivisione — email, portale o messaggio. Conserva l’originale vuoto per la prossima volta.",
    },
  ],
  tips: [
    "Il punto è tutto nella ripetibilità: gli stessi cinque passaggi per ogni modulo, così smette di essere una decisione e diventa un’abitudine.",
    "Salva i moduli fuori dalle anteprime email prima di compilarli — questa sola mossa previene la frustrazione più comune con i moduli da mobile.",
    "Compila e firma in un’unica sessione per evitare di dover reimportare e riposizionare le risposte.",
    "Appiattisci prima di inviare, così il destinatario vede le tue risposte esattamente come le hai inserite.",
    "Tieni una cartella «moduli» con i modelli vuoti, così ricompilare significa sempre partire da una copia nuova e pulita.",
  ],
  mobileNote:
    "L’app PDF Editor è costruita esattamente per questo ciclo: riconoscere i campi, compilare, firmare, appiattire, esportare — tutto sul dispositivo, senza inviare nulla altrove. Poiché ogni passaggio vive in un’unica app, l’intero flusso dalla ricezione all’invio avviene senza mai dover ricorrere a un computer portatile.",
  faq: [
    {
      q: "Posso davvero completare i moduli PDF interamente dal telefono?",
      a: "Sì. I moduli arrivano per email e tornano indietro allo stesso modo, e un’app PDF adeguata gestisce compilazione, firma, appiattimento ed esportazione — quindi l’intero flusso di lavoro non richiede alcun computer.",
    },
    {
      q: "Il flusso di lavoro cambia tra moduli non interattivi e interattivi?",
      a: "Solo il passaggio di compilazione. I moduli interattivi li tocchi e ci scrivi; su quelli non interattivi posizioni il testo sopra. Ricezione, firma, appiattimento e invio sono identici per entrambi.",
    },
    {
      q: "Perché aprire i moduli in un’app separata invece che nell’email?",
      a: "Le anteprime email e i lettori di base spesso ignorano i campi del modulo, quindi scrivere sembra impossibile. Aprire il file salvato in un’app PDF dedicata attiva i campi ed evita questo vicolo cieco.",
    },
    {
      q: "Perché appiattire prima di inviare?",
      a: "L’appiattimento unisce le tue risposte alla pagina, così non possono essere cancellate o alterate dal lettore del destinatario, e vengono mostrate in modo coerente ovunque.",
    },
    {
      q: "Il flusso di lavoro mobile per i moduli è sicuro dal punto di vista della privacy?",
      a: "Con l’app PDF Editor ogni passaggio avviene sul dispositivo, quindi i dati personali che inserisci non vengono inviati altrove. Usa il canale ufficiale del destinatario quando invii moduli sensibili.",
    },
  ],
  related: [
    {
      label: "Come compilare moduli PDF su iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Come compilare moduli PDF su Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Come inviare un modulo PDF compilato",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Come firmare un PDF dal telefono",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "PDF Editor — compila e firma", path: "/pdf-editor" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
