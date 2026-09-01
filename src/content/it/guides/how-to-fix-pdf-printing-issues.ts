import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Come risolvere i problemi di stampa di un PDF (pagine tagliate, formato sbagliato, testo mancante)",
  description:
    "Quando un PDF si stampa ritagliato, scalato male o senza parte del testo, la soluzione dipende dal sintomo. Una tabella breve che collega ogni problema all’impostazione giusta.",
  updated: "2026-05-29",
  intro: [
    "I PDF sono stati creati perché un documento avesse lo stesso aspetto ovunque — anche su carta. Quindi quando uno stampa male, quasi sempre è il lavoro di stampa il problema, non il file. La pagina è più grande del foglio, la stampante sta riducendo la scala, un font non è incorporato, un flag di sicurezza blocca la stampa, oppure il documento è stato impostato per un formato di carta diverso dal tuo.",
    "Ognuna di queste cause produce un sintomo diverso: bordi tagliati, testo minuscolo, pagine vuote, finestre di errore o font sostitutivi strani. Trattarle tutte come «la stampante è rotta» spreca un sacco di carta. Trattarle come problemi specifici con soluzioni specifiche fa risparmiare tempo.",
    "Questa guida è una breve tabella: cosa vedi rispetto alla causa più probabile e alla soluzione giusta. La maggior parte delle soluzioni sono impostazioni nella finestra di stampa o un rapido passaggio prima di stampare.",
  ],
  steps: [
    {
      title: "Se i bordi vengono tagliati, imposta «Adatta all’area stampabile»",
      body: "Molti PDF sono dimensionati al margine perso della carta; le stampanti non possono stampare fino al bordo. Nella finestra di stampa scegli «Adatta» o «Riduci all’area stampabile» invece di «Dimensione reale». La pagina si ridurrà leggermente e smetterà di perdere i bordi.",
    },
    {
      title: "Se il testo è minuscolo, controlla la corrispondenza del formato carta",
      body: "Un documento pensato per A3 stampato su Letter si ridurrà per adattarsi. Ri-esporta l’originale nel formato carta di destinazione, oppure dividi la doppia pagina in due con Estrai pagine PDF prima di ristampare.",
    },
    {
      title: "Per pagine che stampano vuote o con testo mancante, incorpora i font",
      body: "I documenti che usano font non presenti sulla tua stampante possono mostrare caratteri mancanti. Ri-esporta con «incorpora tutti i font» attivo nell’applicazione di origine, oppure usa prima la stampa in PDF per appiattire tutto in pixel rasterizzati.",
    },
    {
      title: "Per gli errori «documento protetto», controlla i permessi di modifica",
      body: "Alcuni PDF vengono esportati con flag che bloccano la stampa. Solo l’autore può rimuoverli. Se è un tuo file, ri-esportalo senza la restrizione di stampa. Se non lo è, richiedi una copia con la stampa consentita.",
    },
    {
      title: "Ruota le pagine prima di stampare se l’orientamento è sbagliato",
      body: "Se le pagine sono storte o capovolte, correggile prima di inviarle alla stampante con Ruota PDF. La rotazione lato stampante introduce spesso i suoi problemi di scala — correggere nel file è più pulito.",
    },
    {
      title: "Stampa una pagina di prova da un estratto di una sola pagina",
      body: "Non sprecare un documento di 50 pagine per scoprire un problema di stampa. Estrai pagine PDF può salvare una pagina come PDF a sé stante; stampa quella, conferma le impostazioni, poi avvia il lavoro completo.",
    },
  ],
  tips: [
    "Controlla sempre che il formato carta selezionato nella finestra di stampa corrisponda al formato pagina del PDF — le incongruenze tra Letter e A4 causano la maggior parte dei sintomi «troppo piccolo».",
    "Se il file si comporta male, prova prima la stampa in PDF. La copia appiattita spesso si stampa bene quando l’originale no.",
    "Le impostazioni per opuscoli e rilegatura a punto metallico causano più problemi di stampa di quanti ne risolvano — stampa prima le pagine dritte, poi riordinale fisicamente se serve.",
    "I profili colore dei software di design possono produrre stampe scure o sporche sulle stampanti domestiche. Ri-esportare in sRGB di solito risolve il problema.",
    "Se il driver della stampante è vecchio, una ri-esportazione con la stampa in PDF può nascondere funzioni che il driver non riesce a gestire.",
  ],
  mobileNote:
    "Stampare dal telefono di solito passa da AirPrint, Google Print o un’app del produttore, e ognuna gestisce il PDF in modo leggermente diverso. L’app PDF Editor ti permette di ridimensionare, ruotare e ritagliare le pagine prima di inviarle — correggere il PDF invece di lottare con la finestra di stampa funziona meglio su mobile.",
  faq: [
    {
      q: "Perché il mio PDF si stampa più piccolo di come appare a schermo?",
      a: "Quasi sempre perché la dimensione del documento non corrisponde al formato carta. La stampante riduce la scala per adattarsi. Ri-esporta nel formato carta di destinazione oppure usa «Dimensione reale» con la carta corrispondente.",
    },
    {
      q: "Perché mancano alcuni caratteri in stampa?",
      a: "I font non erano incorporati e la tua stampante non li possiede. Ri-esporta con i font incorporati, oppure usa prima la stampa in PDF per appiattire tutto.",
    },
    {
      q: "Perché la finestra di stampa dice che il mio PDF è protetto?",
      a: "Ha un flag di permessi che blocca la stampa. Solo l’autore può rimuoverlo. Non esiste un modo sicuro per aggirarlo lato destinatario.",
    },
    {
      q: "Dovrei ruotare le pagine nella stampante o nel file?",
      a: "Nel file. La rotazione della stampante può introdurre problemi di scala, mentre Ruota PDF incorpora l’orientamento direttamente nel documento.",
    },
    {
      q: "Come evito di sprecare carta per diagnosticare i problemi di stampa?",
      a: "Estrai prima una singola pagina, stampala, conferma le impostazioni, poi avvia il lavoro completo. Estrai pagine PDF lo fa direttamente nel tuo browser.",
    },
  ],
  related: [
    { label: "Ruota PDF — correggi l’orientamento prima di stampare", path: "/rotate-pdf" },
    { label: "Estrai pagine PDF — prova la stampa su una pagina", path: "/extract-pdf-pages" },
    { label: "Come correggere i problemi di formattazione di un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Come correggere i problemi di font in un PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Strumenti PDF gratuiti — nel browser", path: "/pdf-tools" },
};

export default content;
