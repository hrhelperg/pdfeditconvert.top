import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Come modificare un PDF su iPhone (guida 2026)",
  description:
    "Correggi il testo, aggiungi immagini e riordina le pagine di un PDF direttamente su iPhone. Procedura passo passo con l’app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Fino a poco tempo fa, modificare un PDF su iPhone significava inviarlo a un sito di cui ti fidavi solo a metà, accedere da un Mac, oppure fare uno screenshot della parte che ti serviva e reincollarlo come immagine. Nel 2026 non serve più nulla di tutto questo. Con l’app giusta puoi modificare il testo, sostituire le immagini, riordinare le pagine, compilare moduli e firmare documenti — tutto dal telefono, in meno di un minuto.",
    "Questa guida ripercorre esattamente i tocchi da dare usando l’app PDF Editor. Gli stessi schemi funzionano su iPad e nella maggior parte degli editor PDF moderni, quindi i passaggi ti torneranno utili anche se in futuro cambierai strumento. Ti servono iOS 16 o versioni successive e l’app PDF Editor installata dall’App Store.",
    "Vedremo come aprire un PDF da qualsiasi origine (File, Mail, iCloud Drive, Google Drive), modificarne il contenuto ed esportare il risultato. Ogni passaggio descrive cosa fare, non il perché — ma se un passaggio ti sembra poco chiaro sullo schermo, la sezione dei consigli in fondo offre soluzioni rapide.",
  ],
  steps: [
    {
      title: "Installa e apri PDF Editor",
      body: "Scaricala dall’App Store, poi apri l’app. Non serve alcun account per iniziare a modificare.",
    },
    {
      title: "Aggiungi il PDF all’app",
      body: "Tocca il pulsante + nella schermata iniziale. Scegli l’origine — File, iCloud Drive, il tuo rullino fotografico, oppure «Sfoglia» per trovare le cartelle di Google Drive o OneDrive. Puoi anche aprire qualsiasi PDF da Mail o Safari e scegliere «Apri in PDF Editor» dal menu di condivisione.",
    },
    {
      title: "Modifica il testo direttamente",
      body: "Tocca un paragrafo o una parola. Compare una selezione blu. Modifica direttamente nel riquadro di testo che si apre. L’app mantiene il carattere, la dimensione e il colore originali, così l’impaginazione resta intatta.",
    },
    {
      title: "Sostituisci o aggiungi un’immagine",
      body: "Tocca un’immagine esistente per sostituirla con un’altra dal tuo rullino. Oppure tocca lo strumento immagine e posizionane una nuova in qualsiasi punto della pagina. Trascina gli angoli per ridimensionarla.",
    },
    {
      title: "Riordina, elimina o duplica le pagine",
      body: "Tocca l’icona delle pagine per aprire la griglia delle miniature. Tieni premuta una pagina per spostarla. Tocca una miniatura per duplicarla o eliminarla.",
    },
    {
      title: "Firma il documento",
      body: "Tocca lo strumento Firma, disegna la tua firma (oppure usane una già salvata) e posizionala dove serve. La firma è un normale oggetto del PDF, quindi puoi spostarla o ridimensionarla dopo averla inserita.",
    },
    {
      title: "Compila i campi del modulo",
      body: "Se il PDF ha campi modulo, tocca ciascuno per compilarlo. L’app rileva automaticamente il tipo di campo — testo, casella di controllo, menu a tendina — e mostra la tastiera adatta.",
    },
    {
      title: "Salva e condividi",
      body: "Tocca Fine. Scegli «Salva» per sovrascrivere l’originale o «Salva come» per conservare entrambi. Il menu di condivisione ti permette di inviarlo via Mail, Messaggi, AirDrop o qualsiasi app installata.",
    },
  ],
  tips: [
    "Fai lo zoom con due dita prima di modificare un testo piccolo — la precisione migliora molto.",
    "Tocca due volte una parola per selezionare solo quella; tre tocchi selezionano l’intera riga.",
    "Usa la Apple Pencil su iPad per firme decisamente più fluide rispetto a disegnare col dito.",
    "Attiva l’integrazione con File in Impostazioni → PDF Editor, così l’app compare in tutti i menu di condivisione.",
    "Tieni premuta la freccia indietro nella schermata di modifica per tornare indietro di più modifiche insieme, se Annulla da solo non basta.",
  ],
  mobileNote:
    "L’integrazione con File su iOS conta: attivala in Impostazioni perché PDF Editor compaia in ogni menu di condivisione delle altre app. Da quel momento, modificare un PDF ricevuto via Mail o Slack è questione di un tocco.",
  faq: [
    {
      q: "Posso modificare un PDF scansionato su iPhone?",
      a: "Puoi annotarlo, firmarlo e riordinarne le pagine. Per modificare il testo vero e proprio di una pagina scansionata, esegui prima l’OCR — l’app lo fa in un paio di secondi.",
    },
    {
      q: "L’app è gratuita?",
      a: "Sì, per la modifica di tutti i giorni. Alcune funzioni avanzate si sbloccano con l’upgrade Pro.",
    },
    {
      q: "Funziona con la Apple Pencil?",
      a: "Sì. La Pencil funziona per firme, appunti a mano libera ed evidenziazioni, con una resa decisamente migliore rispetto al dito.",
    },
    {
      q: "Posso modificare un PDF protetto da password?",
      a: "Inserisci la password quando richiesta all’apertura. Una volta sbloccato, la modifica funziona normalmente. Puoi riapplicare la password al momento di salvare.",
    },
    {
      q: "Dove finisce il file modificato?",
      a: "Dove lo salvi tu: File, iCloud Drive, Google Drive, la libreria foto, oppure direttamente in una bozza di mail.",
    },
  ],
  related: [
    { label: "PDF Editor — panoramica completa", path: "/pdf-editor" },
    {
      label: "Come modificare un PDF su Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Come firmare un PDF dal telefono", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
