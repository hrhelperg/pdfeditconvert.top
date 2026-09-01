import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Come organizzare i documenti di lavoro in PDF (cartelle, nomi, versioni)",
  description:
    "Una convenzione pratica di nomi e cartelle per i PDF di lavoro — preventivi, brief, consegne, archivi — che evita il caos delle versioni e permette a chiunque di trovare tutto in fretta.",
  updated: "2026-05-29",
  intro: [
    "Il problema con i PDF di lavoro di solito non è il PDF in sé. È la scia che si lascia dietro: trenta file con nomi simili in una cartella download, versioni che non tornano, file «finali» che finali non sono, bozze indistinguibili dalle consegne vere. Il formato va benissimo; è la convenzione attorno al formato a sgretolarsi.",
    "Una convenzione che funziona è breve: una struttura di cartelle, uno schema per i nomi, e l’abitudine di sapere dove finiscono i file definitivi. Una volta in atto, trovare «il contratto che abbiamo mandato a marzo» richiede dieci secondi invece di dieci minuti, e i conflitti tra versioni smettono quasi del tutto di capitare.",
    "Questa guida descrive la convenzione che abbiamo visto adottare — e mantenere nel tempo — dai piccoli team. Non è l’unica convenzione che funziona; è una abbastanza solida da reggere un trimestre intenso senza sgretolarsi.",
  ],
  steps: [
    {
      title: "Scegli una volta per tutte la struttura delle cartelle principali",
      body: "Clienti/NomeContratto/, Interno/, Modelli/, Archivio/. Quattro cartelle bastano per quasi tutto. All’inizio non annidare più di due livelli — troppa profondità fa perdere l’orientamento.",
    },
    {
      title: "Standardizza lo schema dei nomi file",
      body: "NomeCliente_TipoDocumento_vN_AAAA-MM-GG.pdf si legge bene in qualsiasi gestore di file. La data alla fine fa ordinare i file cronologicamente; la versione nel nome permette di individuare l’ultima a colpo d’occhio.",
    },
    {
      title: "Separa /bozze e /definitivo dentro ogni progetto",
      body: "Le bozze vanno nella sottocartella /bozze del progetto; i file definitivi vengono rinominati in FINALE e spostati in /definitivo o /consegne. La cartella /definitivo dovrebbe contenere solo le versioni effettivamente consegnate.",
    },
    {
      title: "Usa Unisci PDF per consolidare al momento della consegna",
      body: "Quando una consegna è in realtà composta da tre PDF (proposta più termini più listino), uniscili in uno solo per l’invio e tieni i file sorgente nella cartella del progetto. Il destinatario riceve un unico file pulito.",
    },
    {
      title: "Comprimi e rinomina solo al momento della consegna",
      body: "Comprimi PDF per la copia in uscita; conserva il sorgente non compresso. Il file consegnato va in /definitivo/, il sorgente resta in /bozze/. Sono due oggetti diversi.",
    },
    {
      title: "Archivia i progetti conclusi a scadenze regolari",
      body: "Sposta trimestralmente i progetti chiusi in /Archivio/. Le cartelle attive restano leggibili a colpo d’occhio; l’archivio resta consultabile quando in seguito serve ritrovare qualcosa.",
    },
  ],
  tips: [
    "Evita gli spazi nei nomi dei file quando puoi — trattini bassi o trattini normali sono più semplici da gestire in URL, inoltri di mail e righe di comando.",
    "Il formato data AAAA-MM-GG si ordina cronologicamente in qualsiasi strumento. 29/5/26 no.",
    "Non mettere numeri di versione nel nome del file FINALE. FINALE è FINALE. Se qualcosa cambia dopo, diventa FINALE-2 — ed è già un segnale che il processo si è inceppato da qualche parte.",
    "Non avere paura di rinominare. Un nome file chiaro vale un minuto di lavoro, soprattutto prima di inviarlo.",
    "Nei progetti grandi, tieni un file indice di poche righe (LEGGIMI.txt) che elenca cosa contiene ogni sottocartella. Aiuta te stesso tra sei mesi, quando tornerai a cercare qualcosa e avrai dimenticato tutto.",
  ],
  mobileNote:
    "Dal telefono organizzare è più scomodo, perché rinominare i file è macchinoso. L’app PDF Editor ti permette di rinominare, etichettare e archiviare i PDF direttamente dal telefono, così i file che arrivano non si accumulano senza nome nella cartella Download.",
  faq: [
    {
      q: "Qual è il formato di nome file migliore?",
      a: "NomeCliente_TipoDocumento_vN_AAAA-MM-GG.pdf. La data alla fine permette l’ordine cronologico; la versione nel nome distingue le bozze; cliente e tipo di documento rendono il file autoesplicativo.",
    },
    {
      q: "Meglio usare cartelle o etichette?",
      a: "Cartelle. I sistemi a etichette esistono, ma si frammentano tra dispositivi e app diverse. Le cartelle funzionano ovunque.",
    },
    {
      q: "Cosa faccio con le vecchie bozze?",
      a: "Tienile in /bozze/ dentro la cartella del progetto finché il progetto non si chiude, poi archivia tutto insieme. Non cancellarle — potresti aver bisogno di recuperare un dato da una bozza precedente.",
    },
    {
      q: "Il file FINALE ha bisogno di un numero di versione?",
      a: "No. Una volta che un file è FINALE, è la versione di riferimento. Se qualcosa cambia dopo, sei già in una trattativa nuova, che avrà il proprio FINALE.",
    },
    {
      q: "Come gestisco i file dei clienti con nomi poco coerenti?",
      a: "Rinominali appena li ricevi, seguendo la tua convenzione. Il minuto speso a rinominare ti fa risparmiare il tempo che perderesti a cercarli in seguito.",
    },
  ],
  related: [
    { label: "Strumenti PDF — l’elenco completo, nel browser", path: "/pdf-tools" },
    { label: "Unisci PDF — combina le consegne al momento dell’invio", path: "/merge-pdf" },
    { label: "Come organizzare i file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Flussi di lavoro PDF per piccole imprese", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Strumenti PDF — gratis, nel browser", path: "/pdf-tools" },
};

export default content;
