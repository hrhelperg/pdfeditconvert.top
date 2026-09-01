import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Come modificare un PDF su Android (guida 2026)",
  description:
    "Modifica i tuoi PDF su Android: cambia il testo, inserisci pagine e firma i documenti. Istruzioni chiare, passo dopo passo, con l’app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Android gestisce i PDF discretamente bene di serie — ma solo per la visualizzazione. Nel momento in cui devi correggere un refuso, sostituire un’immagine o riordinare le pagine, il visualizzatore integrato mostra i suoi limiti e la soluzione più comune è caricare il file su un sito web. C’è un’opzione più veloce: un editor nativo che gira direttamente sul telefono.",
    "Questa guida usa l’app PDF Editor su Android. Lo stesso flusso funziona su tablet e Chromebook con runtime Android. Ti serve Android 9 o versioni successive. Quasi tutti i passaggi sono identici a quelli su iPhone, ma lo Storage Access Framework di Android cambia il modo in cui importi e salvi i file.",
    "Ogni passaggio indica dove toccare, incluse le piccole differenze tra telefoni e tablet. Dove Android si differenzia da iOS — selettore dei file, integrazione con Drive, tasto indietro — te lo segnaliamo.",
  ],
  steps: [
    {
      title: "Installa PDF Editor da Google Play",
      body: "Cerca «PDF Editor» e scegli quello pubblicato da hrhelperg. Installa e apri. Non serve alcun account.",
    },
    {
      title: "Apri un PDF",
      body: "Tocca il pulsante + nella schermata iniziale. Compare la finestra dello Storage Access Framework di Android — scegli il PDF da File, Google Drive, OneDrive, Dropbox o qualsiasi altro provider cloud collegato. Puoi anche toccare un PDF dentro Gmail o un’altra app e scegliere PDF Editor come app per aprirlo.",
    },
    {
      title: "Modifica il testo",
      body: "Tocca un paragrafo. Compare un riquadro di modifica blu. Digita per sostituire o inserire testo. L’app mantiene il carattere e il colore esistenti, così l’impaginazione non si rompe.",
    },
    {
      title: "Sostituisci un’immagine",
      body: "Tocca un’immagine per selezionarla. Tocca l’icona di scambio e scegli una sostituta dalla galleria o dai file. Trascina gli angoli per ridimensionarla senza distorcere le proporzioni.",
    },
    {
      title: "Inserisci una nuova pagina",
      body: "Tocca l’icona delle pagine per vedere le miniature. Usa il pulsante + tra le miniature per inserire una pagina vuota o importare un’immagine come nuova pagina.",
    },
    {
      title: "Compila i campi del modulo",
      body: "I PDF con campi interattivi si evidenziano automaticamente. Tocca un campo, digita e tocca Fine. La tastiera si adatta al tipo di campo (testo, numero, data).",
    },
    {
      title: "Firma il documento",
      body: "Tocca lo strumento Firma, disegna con il dito o con lo stilo e posiziona la firma. Salvala per usarla in futuro — non dovrai più ridisegnarla.",
    },
    {
      title: "Salva come nuovo file",
      body: "Tocca Fine, poi «Salva come» per conservare sia l’originale sia la copia modificata. Il selettore file di Android ti permette di salvare in File, Drive o qualsiasi provider cloud collegato.",
    },
  ],
  tips: [
    "Sui tablet grandi, attiva lo split screen e affianca due PDF per confrontarli velocemente.",
    "Se hai una S Pen, passa alla modalità «Solo penna» in fase di modifica — il rifiuto del palmo funziona molto meglio.",
    "Usa nomi file descrittivi prima di salvare — «Contratto-Firmato-2026-05-11.pdf» è molto più utile di «Documento(1).pdf» quando lo cerchi in seguito.",
    "Fissa PDF Editor in cima al menu di condivisione tenendolo premuto dopo il primo utilizzo — comparirà per primo la volta successiva.",
    "Se la modifica risulta lenta su un dispositivo datato, chiudi le altre app in background; la resa dei PDF beneficia della RAM libera.",
  ],
  mobileNote:
    "Lo Storage Access Framework di Android è il modo corretto per aprire i file — concede un accesso persistente senza copiare il file nell’archiviazione dell’app. Questo significa che le modifiche si salvano direttamente su Drive o OneDrive, non su un duplicato.",
  faq: [
    {
      q: "Funziona sulle versioni più vecchie di Android?",
      a: "Ufficialmente da Android 9 in poi. I dispositivi più vecchi possono installare l’app ma non ottengono le funzioni più recenti (OCR migliorato, filtri di scansione).",
    },
    {
      q: "Posso aprire PDF protetti da password?",
      a: "Sì. Inserisci la password quando richiesta. L’app mantiene il documento crittografato durante la modifica e, se vuoi, lo ricrittografa al salvataggio.",
    },
    {
      q: "E l’integrazione con Google Drive?",
      a: "Apri e salva direttamente da Drive tramite il selettore file di sistema. Le modifiche salvate su Drive sovrascrivono l’originale (oppure puoi salvare come nuovo file, a tua scelta).",
    },
    {
      q: "Le modifiche si sincronizzano con il computer?",
      a: "Se hai salvato su un provider cloud (Drive, OneDrive, Dropbox), il file modificato si sincronizza automaticamente sugli altri dispositivi. I salvataggi solo locali restano sul telefono.",
    },
    {
      q: "Funziona offline?",
      a: "Sì. La modifica avviene interamente sul dispositivo. La sincronizzazione cloud entra in gioco solo quando salvi su un percorso cloud.",
    },
  ],
  related: [
    { label: "PDF Editor — panoramica completa", path: "/pdf-editor" },
    {
      label: "Come modificare un PDF su iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Come comprimere un PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
