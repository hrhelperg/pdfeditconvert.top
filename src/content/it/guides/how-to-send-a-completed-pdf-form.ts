import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Come inviare un modulo PDF compilato (appiattire e consegnare)",
  description:
    "Hai compilato il modulo — ora restituiscilo in modo pulito. Come appiattirlo perché le risposte non si possano più cambiare, allegarlo nel modo giusto, e verificare che arrivi senza perdere i dati.",
  updated: "2026-06-01",
  intro: [
    "Compilare un modulo è solo metà del lavoro; farlo tornare intatto a chi te lo ha inviato è l’altra metà. Questo è il viaggio di ritorno — hai completato un modulo che qualcuno ti ha inviato e ora devi consegnarlo in modo che le tue risposte arrivino esattamente come le hai inserite, non possano essere cancellate per errore, e atterrino in un formato che il destinatario possa davvero aprire.",
    "Le due cose che possono andare storte qui sono le risposte che spariscono lungo il tragitto (perché i dati dei campi non sono stati salvati o appiattiti) e i file che arrivano come scomode foto di uno schermo. Entrambe si evitano con un paio di passaggi mirati prima di premere invia. Un allegato PDF appiattito è quasi sempre la risposta giusta.",
    "Questa guida copre la preparazione del modulo completato, come scegliere il modo di inviarlo, e le piccole conferme che ti risparmiano un giro di email del tipo «il modulo è tornato vuoto».",
  ],
  steps: [
    {
      title: "Fai un controllo finale di ogni risposta",
      body: "Scorri di nuovo tutto il modulo alla ricerca di campi obbligatori vuoti, della data e della tua firma. Accorgersi ora di una casella mancante costa molto meno che scoprirlo dopo che ti viene rimandato indietro.",
    },
    {
      title: "Salva correttamente la copia compilata",
      body: "Esporta o salva in modo che i valori dei campi vengano scritti nel file. Se le tue risposte non sopravvivono a una chiusura e riapertura, lo strumento si è limitato a stampare — passa a uno che salvi davvero i dati del modulo.",
    },
    {
      title: "Appiattisci per bloccare le risposte",
      body: "Appiattisci il modulo completato prima di inviarlo. Questo unisce le tue risposte alla pagina, così non possono essere modificate o cancellate dal lettore del destinatario, e vengono mostrate allo stesso modo ovunque.",
    },
    {
      title: "Allega direttamente il PDF",
      body: "Invia il PDF appiattito come normale allegato email, oppure caricalo sul portale indicato da chi te lo ha mandato. Evita di inviare uno screenshot o una foto del modulo, a meno che non sia esplicitamente ciò che viene richiesto.",
    },
    {
      title: "Conferma e conserva una copia",
      body: "Prendi nota di averlo inviato e conserva una tua copia del file completato. Se lo stai caricando su un portale, controlla che compaia una conferma a schermo o via email dell’avvenuto caricamento.",
    },
  ],
  tips: [
    "L’appiattimento è la singola abitudine migliore quando rispedisci un modulo — garantisce che le tue risposte arrivino al destinatario.",
    "Dai al file un nome utile, tipo «rossi-domanda-completata.pdf», così il destinatario può archiviarlo senza doverlo rinominare.",
    "Se un portale rifiuta il file per la dimensione, comprimilo invece di rifare le tue risposte — il contenuto resta intatto.",
    "Conserva la tua copia completata; se dovesse sorgere una contestazione o servire un seguito, ti servirà esattamente la versione che hai inviato.",
    "I requisiti della pubblica amministrazione e delle aziende variano, quindi segui le istruzioni specifiche di invio fornite da chi te lo ha mandato, anche se in contrasto con questi passaggi generali.",
  ],
  mobileNote:
    "Sul telefono, l’app PDF Editor esporta una copia completata e appiattita che puoi inviare direttamente dal menu di condivisione — email, caricamento su portale o messaggio — con le tue risposte bloccate nella pagina. Funziona sul dispositivo, così i dati personali del modulo restano privati mentre lo invii.",
  faq: [
    {
      q: "Come faccio a essere sicuro che le mie risposte non spariscano quando invio un modulo?",
      a: "Salva in modo che i valori dei campi vengano scritti nel file, poi appiattisci il modulo prima di inviarlo. L’appiattimento unisce le tue risposte alla pagina, così non possono essere cancellate e vengono mostrate allo stesso modo in qualsiasi lettore.",
    },
    {
      q: "Devo appiattire un modulo completato prima di inviarlo via email?",
      a: "Sì, in quasi tutti i casi. Una volta finito di modificarlo, l’appiattimento blocca le risposte e impedisce al lettore del destinatario di perderle o alterarle.",
    },
    {
      q: "Va bene inviare una foto del modulo compilato?",
      a: "Solo se è esplicitamente ciò che viene richiesto. Un PDF appiattito è più pulito, più leggibile e più facile da archiviare. Le foto di schermi o stampe spesso arrivano storte o di bassa qualità.",
    },
    {
      q: "Cosa succede se il portale di caricamento rifiuta il mio modulo?",
      a: "Di solito è un limite di dimensione o di formato. Comprimi il PDF o controlla i formati accettati — non serve ricompilarlo. Il contenuto resta uguale dopo la compressione.",
    },
    {
      q: "Devo conservare una copia di ciò che ho inviato?",
      a: "Sì. Conserva una tua copia completata nel caso emergano domande successive o venga richiesto un nuovo invio, così puoi rimandare esattamente la versione che hai presentato.",
    },
  ],
  related: [
    {
      label: "Come salvare un modulo PDF compilato",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Come condividere un modulo PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Errori di invio dei moduli PDF",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
