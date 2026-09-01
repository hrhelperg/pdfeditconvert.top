import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Come proteggere un file PDF con una password",
  description:
    "Aggiungi protezione con password e crittografia a un PDF da mobile o computer. Guida pratica con l’app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Molti documenti non dovrebbero circolare come semplici PDF: buste paga, contratti firmati, scansioni di documenti d’identità, copie di NDA, cartelle cliniche, estratti conto. Una password e una crittografia adeguata trasformano il file in qualcosa che solo il destinatario previsto può aprire — anche se la mail viene inoltrata, intercettata, o resta per sempre in una casella aziendale.",
    "Questa guida spiega come aggiungere la protezione con password a un PDF usando l’app PDF Editor su iPhone o Android. Copre anche cosa evitare: password deboli, cifrari di crittografia obsoleti, e l’errore comune di condividere la password nello stesso canale del documento.",
    "Alla fine avrai un flusso di protezione ripetibile da applicare ai documenti sensibili in meno di un minuto, con una solida crittografia AES-256 accettata dalle policy di sicurezza aziendali.",
  ],
  steps: [
    {
      title: "Apri il PDF che vuoi proteggere",
      body: "Aggiungi il documento a PDF Editor da File, iCloud Drive, Google Drive o qualsiasi app di condivisione. L’intero flusso avviene in locale — il tuo file non lascia mai il dispositivo.",
    },
    {
      title: "Tocca Proteggi nel menu degli strumenti",
      body: "Lo trovi tra gli strumenti per il documento. Scegli «Proteggi con password» per richiedere una password all’apertura del file, oppure «Limita permessi» per un accesso di sola visualizzazione.",
    },
    {
      title: "Scegli una password forte",
      body: "Almeno 12 caratteri, mescolando lettere, numeri e simboli. Evita parole comuni e dettagli personali (compleanni, nomi). Generane una nel tuo password manager, se ne hai uno — è la scelta giusta.",
    },
    {
      title: "Conferma la password",
      body: "Reinseriscila per evitare errori di battitura. Una volta che il file è crittografato, non c’è modo di recuperarlo se hai sbagliato a digitarla.",
    },
    {
      title: "Scegli le restrizioni (facoltativo)",
      body: "Consenti la visualizzazione ma blocca la stampa, la copia del testo o l’estrazione delle pagine. Utile quando il destinatario deve leggere il documento ma non vuoi che ne ridistribuisca dei pezzi.",
    },
    {
      title: "Salva come nuovo file",
      body: "Conserva la versione originale non protetta in un posto sicuro — se dovessi mai dimenticare la password, l’avrai comunque a disposizione. Salva la copia protetta con un nome chiaramente diverso.",
    },
    {
      title: "Condividi la password tramite un canale separato",
      body: "Invia il PDF crittografato via mail; comunica la password via messaggio o telefonata. Non mettere mai entrambi nella stessa mail — se l’account di posta viene compromesso, entrambi trapelano. Una piccola abitudine che previene la maggior parte degli incidenti reali.",
    },
  ],
  tips: [
    "L’AES-256 è la crittografia giusta — l’app la usa di default. Se uno strumento offre crittografia «compatibile» o «legacy», è di solito violabile; evitala.",
    "Non riutilizzare la stessa password su più documenti. Se una trapela, non vuoi un effetto domino.",
    "Se il destinatario non è esperto di tecnologia, dagli istruzioni semplici: «Ti serve questa password per aprire il file: XYZ» è sufficiente.",
    "Usa un password manager per condividere le password in modo sicuro quando possibile — la maggior parte ha una funzione «condividi» che non richiede un account a entrambe le parti.",
    "Per i file davvero sensibili (legali, medici, finanziari), valuta i link di condivisione sicura di 1Password o Bitwarden invece di mandare la password via messaggio.",
  ],
  mobileNote:
    "Proteggere un PDF avviene interamente sul dispositivo. Anche in modalità aereo, puoi blindare un contratto prima di inviarlo, nel momento stesso in cui torni online. Questo conta per chi viaggia e gestisce documenti sensibili dalla hall di un hotel o dall’aeroporto — la protezione avviene in locale, e ti serve una connessione solo per l’invio vero e proprio.",
  faq: [
    {
      q: "Cosa succede se dimentico la password?",
      a: "Non esiste una scorciatoia. Una crittografia forte significa che nessun recupero è possibile senza la password. Conserva sempre le password in un password manager, non a memoria.",
    },
    {
      q: "La password rallenterà l’apertura del file?",
      a: "Nessun ritardo percepibile. La decrittazione avviene una volta sola all’apertura e richiede millisecondi anche su dispositivi datati.",
    },
    {
      q: "Posso rimuovere la password in seguito?",
      a: "Sì, se conosci la password. Apri il PDF protetto, inserisci la password, poi usa «Rimuovi protezione» nel menu Proteggi.",
    },
    {
      q: "La password è davvero sicura, o è solo scenografia?",
      a: "Sicurezza reale. L’AES-256 con una password forte è la stessa crittografia usata da sistemi aziendali, password manager e molte app bancarie. L’anello debole è sempre la password stessa — sceglila forte.",
    },
    {
      q: "E la redazione (oscuramento del contenuto)?",
      a: "La redazione è diversa dalla protezione con password. La redazione rimuove permanentemente un contenuto (come oscurare un nome); la protezione con password conserva il contenuto ma richiede autenticazione per visualizzarlo. Per i documenti sensibili, potresti volere entrambe: oscura ciò che non deve stare nel file, proteggi con password ciò che resta.",
    },
  ],
  related: [
    { label: "Sicurezza PDF — panoramica completa", path: "/pdf-security" },
    { label: "Firma i PDF prima di bloccarli", path: "/sign-pdf" },
    { label: "Flussi PDF per le aziende", path: "/pdf-for-business" },
  ],
  parentHub: { label: "PDF Security", path: "/pdf-security" },
};

export default content;
