import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "Problemi di compatibilità dei moduli PDF (XFA e moduli dinamici)",
  description:
    "Un modulo che si apre in un programma e si rompe in un altro di solito usa funzioni che non tutti i visualizzatori supportano. Come riconoscere i moduli dinamici, cosa causa l’incompatibilità, e quali opzioni hai.",
  updated: "2026-06-01",
  intro: [
    "A volte un modulo funziona perfettamente in un programma e si rompe in un altro — i campi non compaiono, un avviso dice «apri con un altro visualizzatore», oppure la pagina è vuota con solo un messaggio di errore. Questo è un problema di compatibilità, e quasi sempre significa che il modulo usa funzioni che non tutti i lettori di PDF supportano. Il modulo non è rotto; è solo più esigente su dove viene aperto rispetto a uno standard.",
    "La causa solita è un modulo avanzato o dinamico costruito con una tecnologia (spesso chiamata XFA o LiveCycle) che solo certi software disegnano correttamente. I moduli interattivi standard sono ampiamente supportati, ma questi dinamici possono richiedere un programma specifico, e molti lettori moderni — soprattutto su telefono e nei browser — non li aprono correttamente affatto.",
    "Questa guida ti aiuta a riconoscere un problema di compatibilità, a capire perché succede, e a valutare le tue opzioni realistiche — inclusa la realtà onesta che alcuni moduli richiedono semplicemente il software per cui sono stati progettati, oppure un formato diverso da parte di chi li ha creati.",
  ],
  steps: [
    {
      title: "Riconosci i segnali rivelatori",
      body: "Un messaggio «attendere» o «apri con un lettore compatibile», una pagina vuota dove dovrebbe esserci un modulo, oppure campi che compaiono in un programma e spariscono in un altro indicano tutti un modulo che usa funzioni non supportate.",
    },
    {
      title: "Individua un modulo dinamico (XFA)",
      body: "I moduli che mostrano un avviso sulla necessità di un software specifico sono di solito moduli dinamici XFA. Non sono moduli interattivi standard e molti lettori — in particolare quelli mobile e da browser — non riescono a disegnarli.",
    },
    {
      title: "Prova un lettore diverso e completo",
      body: "Apri il modulo in un paio di programmi PDF adeguati. Un modulo interattivo standard che si è rotto in un lettore di base spesso funziona in uno completo. Un modulo dinamico potrebbe comunque richiedere il suo software specifico.",
    },
    {
      title: "Chiedi a chi lo ha creato una versione compatibile",
      body: "Se un modulo davvero non si apre in nessun posto che puoi usare, chiedi a chi te lo ha inviato un PDF standard, una versione stampabile non interattiva, oppure istruzioni su quale software serve. Chi crea i moduli di solito ha un’alternativa.",
    },
    {
      title: "Ripiega su stampa-e-compila se necessario",
      body: "Come ultima risorsa per un modulo che non riesci ad aprire in modo interattivo, richiedi o genera una copia stampabile non interattiva e completala posizionando il testo sulla pagina o a mano. Non è elegante, ma funziona sempre.",
    },
  ],
  tips: [
    "Un avviso «lettore compatibile» è il segno classico di un modulo dinamico XFA che richiede un software specifico.",
    "I moduli interattivi standard sono ampiamente supportati; se uno si rompe solo in un lettore di base, un’app completa di solito lo risolve.",
    "Alcuni moduli richiedono semplicemente il programma per cui sono stati costruiti — è un limite reale, non qualcosa da forzare.",
    "Quando un modulo non si apre in nessun posto utilizzabile, chi lo ha creato può quasi sempre fornire un’alternativa standard o stampabile.",
    "Alcuni moduli PDF possono usare funzioni non supportate, quindi «qui non si apre» può essere la progettazione del modulo e non un difetto tuo.",
  ],
  mobileNote:
    "I telefoni sono il posto dove i problemi di compatibilità pesano di più — i moduli dinamici XFA spesso non si disegnano affatto nei lettori mobile. L’app PDF Editor apre e compila in modo affidabile i moduli interattivi standard e quelli non interattivi; per un modulo dinamico che richiede uno specifico software da computer, chiedi invece a chi lo ha creato una versione PDF standard.",
  faq: [
    {
      q: "Perché il mio modulo PDF funziona in un programma ma non in un altro?",
      a: "Probabilmente usa funzioni che non tutti i lettori supportano — spesso un modulo dinamico XFA. I moduli standard sono ampiamente compatibili; quelli dinamici possono richiedere un software specifico e non si disegnano in molti lettori, specialmente quelli mobile e da browser.",
    },
    {
      q: "Cos’è un modulo dinamico o XFA?",
      a: "È un tipo di modulo avanzato che si comporta come un piccolo programma invece che come una pagina statica. Solo certi software lo disegnano correttamente, ed è per questo che altrove può mostrare un avviso o una pagina vuota.",
    },
    {
      q: "Come apro un modulo che dice «usa un lettore compatibile»?",
      a: "Prova un programma PDF completo. Se è un modulo dinamico che continua a non aprirsi, chiedi a chi lo ha creato un PDF standard o una versione stampabile — molti lettori davvero non riescono a disegnare i moduli dinamici.",
    },
    {
      q: "Posso convertire da solo un modulo dinamico in uno standard?",
      a: "Non in modo affidabile dal file finito. La via sicura è chiedere a chi lo ha creato una versione standard o non interattiva. Forzare una conversione spesso fa perdere campi o dati.",
    },
    {
      q: "Un problema di compatibilità è la stessa cosa di campi mancanti?",
      a: "Si sovrappongono — un problema di compatibilità può far mancare i campi in un lettore non supportato. Ma i campi mancanti spesso sono solo un lettore di base che non disegna un modulo standard, cosa che un’app adeguata risolve.",
    },
  ],
  related: [
    {
      label: "Mancano i campi nel modulo PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
    { label: "Come funzionano i moduli PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Risolvere gli errori nei moduli PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
