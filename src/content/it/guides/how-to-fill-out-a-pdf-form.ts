import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "Come compilare un modulo PDF (interattivo o non interattivo)",
  description:
    "Compila qualsiasi modulo PDF, che abbia campi veri o sia una scansione non interattiva su cui scrivere sopra. La guida completa per computer e telefono, firma e salvataggio inclusi.",
  updated: "2026-06-01",
  intro: [
    "Compilare un modulo PDF è semplice una volta che sai con quale dei due tipi hai a che fare. Un modulo interattivo ha campi che tocchi e in cui scrivi; un modulo non interattivo è l’immagine di una pagina su cui posizioni tu il testo. La maggior parte dei moduli è dell’uno o dell’altro tipo, a volte un mix, ed entrambi si possono completare in digitale senza mai toccare una stampante.",
    "Questa è la guida completa — il punto di riferimento sull’argomento, che copre sia il caso interattivo sia quello non interattivo, su computer e su telefono. La logica è sempre la stessa: portare le tue risposte sulla pagina, gestire caselle di controllo e date, firmare se richiesto, poi salvare una copia pulita e conservare l’originale vuoto.",
    "Se ti servono in particolare i passaggi per il telefono, le guide dedicate al mobile approfondiscono iPhone e Android. Qui l’obiettivo è il metodo universale che funziona su qualsiasi dispositivo, con note oneste su dove i moduli possono risultare scomodi.",
  ],
  steps: [
    {
      title: "Apri il modulo e fai il test del tocco",
      body: "Apri il PDF e clicca o tocca dove dovrebbe andare la prima risposta. Un cursore o una casella evidenziata indicano campi interattivi; se non succede nulla, il modulo è non interattivo e sarai tu ad aggiungere il testo.",
    },
    {
      title: "Compila i campi interattivi scrivendo",
      body: "Tocca un campo e scrivi. Usa Tab o scorri per passare da un campo all’altro, clicca sulle caselle di controllo per selezionarle e apri i menu a tendina per scegliere tra le opzioni previste. Procedi dall’alto verso il basso per non saltarne nessuno.",
    },
    {
      title: "Compila i moduli non interattivi con caselle di testo",
      body: "Per un modulo senza campi, usa lo strumento testo per posizionare la tua risposta su ogni riga. Ingrandisci prima la pagina, così il testo cade esattamente sulla riga invece di restare sopra o sotto.",
    },
    {
      title: "Gestisci caselle di controllo, date e selezioni",
      body: "Seleziona direttamente le caselle di controllo interattive; sui moduli non interattivi, posiziona un segno di spunta o una X. Aggiungi le date dove richiesto, rispettando il formato mostrato dal modulo (giorno-mese-anno o mese-giorno-anno).",
    },
    {
      title: "Firma se il modulo lo richiede",
      body: "Usa lo strumento firma per aggiungere una firma scritta al computer o a mano libera nell’area dedicata. Lo stesso passaggio funziona sia che il campo firma sia interattivo, sia che sia solo una riga stampata.",
    },
    {
      title: "Salva una copia completata e conserva l’originale",
      body: "Esporta la versione finita come nuovo file, appiattendola se vuoi bloccare le risposte. Conserva l’originale vuoto così potrai compilare una copia nuova la prossima volta.",
    },
  ],
  tips: [
    "Tieni sempre l’originale vuoto intatto — ricompilare una copia pulita è più ordinato che modificare le risposte della volta precedente.",
    "Sui moduli non interattivi, usa una dimensione del testo coerente così ogni risposta ha lo stesso aspetto invece di un’accozzaglia di caratteri diversi.",
    "Controlla i campi obbligatori prima di inviare; un modulo rimandato indietro per una sola casella mancante fa perdere più tempo di un’ultima verifica.",
    "Se un campo non accetta la scrittura, il modulo potrebbe essere non interattivo o bloccato — passa a posizionare il testo sopra la pagina, oppure consulta le guide di risoluzione dei problemi.",
    "Appiattisci il modulo prima di inviarlo se vuoi che le risposte vengano mostrate allo stesso modo per ogni destinatario.",
  ],
  mobileNote:
    "L’app PDF Editor compila sia moduli interattivi sia non interattivi su iPhone e Android: riconosce i campi veri dove esistono e ti lascia posizionare testo e segni di spunta ovunque quando non ci sono. Firma nella stessa sessione ed esporta una copia completata — tutto sul dispositivo, senza inviare nulla altrove.",
  faq: [
    {
      q: "Come compilo un modulo PDF senza campi?",
      a: "Usa lo strumento testo di un editor di PDF per posizionare le tue risposte direttamente sulla pagina, aggiungi i segni di spunta dove servono, poi esporta. Il modulo è non interattivo, quindi stai posizionando il testo sopra invece di scriverlo nei campi.",
    },
    {
      q: "Posso compilare un modulo PDF gratis?",
      a: "Sì. Strumenti gratuiti via browser e da mobile compilano sia i moduli interattivi sia quelli non interattivi. L’app PDF Editor gestisce compilazione e firma senza bisogno di un account.",
    },
    {
      q: "Devo stampare il modulo per compilarlo?",
      a: "Quasi mai. Entrambi i tipi di modulo si possono completare sullo schermo e rispedire in digitale. Stampa solo se un destinatario richiede espressamente una copia cartacea firmata a mano.",
    },
    {
      q: "Perché il modulo non mi lascia scrivere?",
      a: "Di solito è perché il modulo è non interattivo (senza campi), è aperto in un lettore che non supporta i campi, oppure è bloccato. Prova a posizionare il testo sopra, passa a uno strumento pensato per i moduli, oppure consulta le guide di risoluzione dei problemi.",
    },
    {
      q: "Come faccio a essere sicuro che le mie risposte non vengano cancellate?",
      a: "Salva con uno strumento che scriva i valori dei campi nel file, e appiattisci il modulo prima di inviarlo così le risposte si uniscono in modo permanente alla pagina.",
    },
  ],
  related: [
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Come compilare moduli PDF su iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Come compilare moduli PDF su Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Come salvare un modulo PDF compilato",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Buone pratiche per i moduli PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
