import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Il modulo PDF non stampa correttamente? Correggi i campi vuoti",
  description:
    "Il modulo si stampa con campi vuoti, testo spostato o bordi tagliati? I problemi di stampa specifici dei moduli — soprattutto i valori dei campi mancanti — e le impostazioni che risolvono ciascuno.",
  updated: "2026-06-01",
  intro: [
    "I moduli stampano male in modi che i PDF ordinari non conoscono. Il più comune e sconcertante è vedere i campi compilati uscire vuoti — hai completato tutto a schermo, ma la carta mostra solo il modulo vuoto. Subito dopo ci sono il testo dei campi che si sposta fuori dalla riga, le caselle di controllo che non stampano, e i bordi che vengono tagliati. Ognuno ha una causa specifica e risolvibile, radicata nel modo in cui i campi del modulo stampano in modo diverso dal contenuto della pagina.",
    "Il problema principale — i campi vuoti sulla carta — succede perché le risposte compilate vivono nel livello dei campi del modulo, e alcuni percorsi di stampa saltano del tutto quel livello. La soluzione è o un’impostazione di stampa che include i campi del modulo, oppure appiattire il modulo così le risposte diventano parte della pagina. Gli altri problemi riguardano la scala e la resa dei campi, ciascuno con la propria impostazione.",
    "Questa guida si concentra sui problemi di stampa specifici dei moduli. Per i problemi generali di stampa dei PDF, come formati di pagina sbagliati su qualsiasi documento, la guida più ampia sulla stampa copre un terreno più vasto.",
  ],
  steps: [
    {
      title: "Correggi i campi vuoti: stampa i valori dei campi o appiattisci",
      body: "Se i campi compilati stampano vuoti, attiva l’opzione per stampare i campi del modulo (a volte «documento e annotazioni»), oppure appiattisci prima il modulo così le risposte si uniscono alla pagina e vengono sempre stampate.",
    },
    {
      title: "Correggi il testo dei campi spostato",
      body: "Se il testo dei campi stampa fuori posto o con il carattere sbagliato, il lettore sta disegnando i campi in modo diverso per la stampa. L’appiattimento blocca l’aspetto che vedi a schermo così viene stampato allo stesso modo.",
    },
    {
      title: "Correggi caselle di controllo e segni mancanti",
      body: "I segni di spunta che spariscono sulla carta sono lo stesso problema di livello dei campi del testo vuoto. L’impostazione per stampare i campi del modulo o un passaggio di appiattimento li riporta indietro insieme al resto delle tue risposte.",
    },
    {
      title: "Correggi i bordi tagliati",
      body: "Imposta la scala su «adatta» o 100% invece di uno zoom personalizzato, e fai corrispondere il formato della carta a quello del modulo. È un problema di scala, separato da quello del livello dei campi, ma comune sui moduli densi.",
    },
    {
      title: "Stampa una pagina per confermare",
      body: "Dopo aver cambiato le impostazioni, stampa prima una sola pagina. Conferma che risposte, allineamento e margini abbiano tutti un aspetto corretto prima di affidare l’intero modulo su più pagine alla carta.",
    },
  ],
  tips: [
    "Appiattire prima di stampare è la soluzione universale per i campi vuoti o spostati — un modulo appiattito stampa le sue risposte ovunque senza bisogno di impostazioni speciali.",
    "Se le risposte si vedono a schermo ma non sulla carta, è un’impostazione di stampa, non il file — cerca l’opzione per i campi del modulo.",
    "I problemi di scala e formato carta sono separati da quello dei campi vuoti; risolvili con «adatta»/100% e la carta corrispondente.",
    "I moduli scansionati non interattivi non soffrono del problema dei campi vuoti perché le loro risposte sono già parte della pagina.",
    "I nomi delle opzioni di stampa variano da un’app e da una stampante all’altra, quindi cerca qualsiasi voce che menzioni campi del modulo, annotazioni o commenti.",
  ],
  mobileNote:
    "Le scorciatoie di stampa del telefono possono perdere i valori dei campi proprio come quelle da computer. Nell’app PDF Editor, appiattisci il modulo completato prima di stamparlo o condividerlo con una stampante, così ogni risposta resta fissata nella pagina e stampa in modo affidabile.",
  faq: [
    {
      q: "Perché il mio modulo stampa con i campi vuoti?",
      a: "Le risposte compilate sono nel livello dei campi del modulo, e il tuo percorso di stampa lo sta saltando. Attiva l’opzione per stampare i campi del modulo, oppure appiattisci il modulo così le risposte diventano parte della pagina e vengono sempre stampate.",
    },
    {
      q: "Perché il testo dei campi stampa nel posto sbagliato o con il carattere sbagliato?",
      a: "Il lettore disegna i campi in modo diverso per la stampa. Appiattisci prima il modulo — l’appiattimento fissa l’aspetto a quello che vedi a schermo, così viene stampato in modo identico.",
    },
    {
      q: "I miei segni di spunta non stampano — perché?",
      a: "Stessa causa del testo vuoto: le caselle di controllo fanno parte del livello dei campi. L’impostazione per stampare i campi del modulo o un passaggio di appiattimento li stampa insieme alle tue altre risposte.",
    },
    {
      q: "Perché il mio modulo stampato è tagliato ai bordi?",
      a: "È un problema di scala o di formato carta non corrispondente, non un problema di campi. Imposta la scala su adatta o 100% e fai corrispondere il formato della carta a quello della pagina del modulo.",
    },
    {
      q: "In cosa è diverso dai problemi generali di stampa dei PDF?",
      a: "Questa guida copre i problemi specifici dei moduli — principalmente i valori dei campi vuoti. La guida generale sulla stampa dei PDF gestisce i problemi a livello di documento come formati sbagliati e ritagli su qualsiasi PDF.",
    },
  ],
  related: [
    {
      label: "Come stampare un modulo PDF compilato",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "Come risolvere i problemi di stampa dei PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
    { label: "Risolvere gli errori nei moduli PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
