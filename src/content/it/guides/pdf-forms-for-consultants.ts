import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-consultants",
  h1: "Moduli PDF per consulenti (questionari e definizione dell’incarico)",
  description:
    "Questionari conoscitivi, schede per definire l’incarico e moduli di feedback — il lato «moduli» della consulenza, gestito come PDF compilabili che i clienti possono completare su qualsiasi dispositivo.",
  updated: "2026-06-01",
  intro: [
    "La consulenza vive di domande. Prima di un incarico devi capire la situazione del cliente; durante l’incarico definisci cosa è incluso e cosa no; dopo vuoi un feedback onesto. Ognuna di queste fasi è un modulo — un questionario conoscitivo, una scheda di definizione dell’incarico, una richiesta di feedback — e gestirli come PDF compilabili mantiene il processo snello senza trascinare i clienti nell’ennesimo login.",
    "Questi moduli sono diversi dai risultati che un consulente consegna. Proposte, relazioni e fatture sono documenti che produci tu; questionari e schede di definizione dell’incarico sono moduli che i clienti completano. Questa guida riguarda in modo specifico il lato moduli: come progettarli perché i clienti rispondano in modo completo, e come raccogliere le risposte perché servano davvero a orientare il lavoro.",
    "Il vantaggio è un avvio più fluido e confini più chiari. Un buon questionario conoscitivo fa emergere il problema reale prima della prima chiamata; una scheda di definizione dell’incarico chiara previene la lenta espansione di lavoro non concordato. Entrambi sono facili da gestire come PDF.",
  ],
  steps: [
    {
      title: "Progetta un questionario conoscitivo che giustifichi la sua lunghezza",
      body: "Fai le domande che cambiano il modo in cui affronteresti l’incarico, non tutto ciò che ti viene in mente. Raggruppale, lascia spazio per risposte vere, e tieni un modello vuoto riutilizzabile per ogni servizio.",
    },
    {
      title: "Crea una scheda di definizione dell’incarico che stabilisca i confini",
      body: "Trasforma l’ambito dell’incarico in un modulo: risultati attesi, ciò che è esplicitamente escluso, tempistiche, presupposti. I campi che il cliente conferma rendono il confine condiviso, invece di qualcosa che affermi tu in seguito.",
    },
    {
      title: "Invia i moduli così i clienti possano completarli su qualsiasi dispositivo",
      body: "Allega direttamente il PDF compilabile e fai presente che i clienti possono compilarlo in un’app PDF — toccando i campi o aggiungendo testo a un modulo non interattivo, poi restituendo una copia completata. La maggior parte lo farà dal telefono.",
    },
    {
      title: "Raccogli un modulo di feedback alla fine",
      body: "Un modulo di feedback breve e ben spaziato ha più probabilità di essere compilato di uno lungo. Invialo quando l’incarico si chiude, mentre l’esperienza è ancora fresca, e chiedi indietro una copia appiattita.",
    },
    {
      title: "Archivia le risposte per ogni incarico",
      body: "Rinomina i moduli ricevuti per cliente e data e conservali insieme ai documenti di quell’incarico. Tieni separati i modelli vuoti così ogni nuovo cliente riceve un modulo pulito.",
    },
  ],
  tips: [
    "Un questionario conoscitivo mirato fa emergere il problema reale prima del primo incontro e ti risparmia una chiamata intera.",
    "Fai in modo che la scheda di definizione dell’incarico sia qualcosa che il cliente conferma nei campi, così «fuori ambito» è condiviso, non una discussione successiva.",
    "Tieni brevi i moduli di feedback; il tasso di completamento conta più del numero di domande.",
    "Le risposte dei clienti sono sensibili — invia e raccogli tramite allegati diretti o uno spazio cloud privato, non siti pubblici di compilazione.",
    "Questo è il lato moduli della consulenza; affiancalo al tuo flusso di lavoro per proposte, relazioni e fatture per il quadro completo.",
  ],
  mobileNote:
    "I clienti compilano i tuoi questionari e le tue schede di definizione dell’incarico dal telefono con l’app PDF Editor — toccando i campi o aggiungendo testo ai moduli non interattivi, poi esportando una copia appiattita. È sul dispositivo, così i dettagli che condividono sulla loro attività non passano da un server di terze parti.",
  faq: [
    {
      q: "Quali moduli PDF usano più spesso i consulenti?",
      a: "Questionari conoscitivi prima di un incarico, schede di definizione dell’incarico per stabilire i confini, e moduli di feedback alla fine. Gestiti come PDF compilabili, mantengono il processo chiaro senza aggiungere un’altra piattaforma in cui i clienti devono accedere.",
    },
    {
      q: "Come faccio a far completare ai clienti un questionario conoscitivo?",
      a: "Mantienilo focalizzato sulle domande che cambiano il tuo approccio, lascia spazio reale per le risposte, e invialo come PDF compilabile con una nota che possono completarlo in un’app PDF su qualsiasi dispositivo.",
    },
    {
      q: "In cosa è diverso dai flussi di lavoro PDF per la consulenza?",
      a: "Questa guida riguarda i moduli che i clienti compilano — questionari, definizione dell’incarico, feedback. La guida sui flussi di lavoro PDF per la consulenza copre i tuoi risultati: proposte, relazioni e fatture.",
    },
    {
      q: "Come mantengo private le risposte dei questionari dei clienti?",
      a: "Invia e ricevi tramite allegati diretti o uno spazio cloud privato invece che siti pubblici di compilazione. L’app PDF Editor compila sul dispositivo, quindi le risposte dei clienti non vengono inviate da nessuna parte.",
    },
    {
      q: "Una scheda di definizione dell’incarico dovrebbe essere un modulo o un documento?",
      a: "Fanne un modulo che il cliente conferma — campi per risultati attesi, esclusioni, tempistiche e presupposti. Un modulo confermato rende l’ambito condiviso in un modo che un documento a senso unico non può.",
    },
  ],
  related: [
    {
      label: "Flussi di lavoro PDF per consulenti",
      path: "/guides/pdf-workflows-for-consultants",
    },
    {
      label: "Come inviare moduli di raccolta dati per un nuovo cliente",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Moduli PDF per agenzie",
      path: "/guides/pdf-forms-for-agencies",
    },
    {
      label: "Flussi di lavoro per raccogliere documenti con PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
