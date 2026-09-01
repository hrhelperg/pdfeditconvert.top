import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Come creare un PDF compilabile — opzioni oneste e limiti",
  description:
    "Cosa serve davvero per creare un PDF che altri possano compilare — campi interattivi oppure un semplice modello non interattivo — e quale approccio si adatta agli strumenti che hai.",
  updated: "2026-06-01",
  intro: [
    "Esistono due modi onesti per creare un PDF che le persone possano compilare, e sono molto diversi per impegno e risultato. La via più curata è un vero modulo interattivo: un PDF con campi reali — caselle di testo, caselle di controllo, menu a tendina — che i destinatari toccano e in cui scrivono. La via più semplice è un modello non interattivo: un PDF pulito e ben spaziato, con righe ed etichette chiare, che le persone completano aggiungendo il testo sopra.",
    "Vale la pena essere onesti fin da subito: costruire dei veri campi interattivi richiede in genere un software dedicato alla progettazione di moduli, e il risultato può comunque comportarsi in modo diverso da un lettore di PDF all’altro. Un modello non interattivo, al contrario, si può creare con quasi qualsiasi strumento per documenti e funziona in modo affidabile ovunque — al prezzo di richiedere ai destinatari un po’ più di lavoro per posizionare le loro risposte.",
    "Questa guida copre entrambi gli approcci, quando ha senso usare l’uno o l’altro, e come progettarli in modo che il modulo finito sia facile da completare. Non fingerà che uno strumento via browser possa creare dal nulla campi interattivi complessi che non può creare — ti indicherà invece il metodo adatto a quello che hai davvero a disposizione.",
  ],
  steps: [
    {
      title: "Parti da un’impaginazione pulita e ben spaziata",
      body: "Progetta prima il modulo in uno strumento per documenti: etichette chiare, spazio generoso per le risposte, caselle di controllo ben visibili e una riga per la firma. Una buona spaziatura conta sia per la versione interattiva sia per quella non interattiva.",
    },
    {
      title: "Decidi: campi interattivi o modello non interattivo",
      body: "Se i destinatari lo compileranno spesso e vuoi un’esperienza ordinata, tocca-e-scrivi, punta sui campi interattivi. Se ti serve qualcosa di rapido che funzioni in qualsiasi lettore, un modello non interattivo è la scelta pragmatica.",
    },
    {
      title: "Per un modello non interattivo, esporta in PDF",
      body: "Esporta direttamente in PDF il documento che hai impaginato. Righe ed etichette diventano la pagina; i destinatari aggiungono il testo sopra con qualsiasi editor di PDF. Funziona con quasi tutti gli strumenti che già usi.",
    },
    {
      title: "Per i campi interattivi, usa un software di progettazione moduli",
      body: "Creare campi di testo, caselle di controllo e menu a tendina veri richiede un software pensato apposta. Aggiungi ogni campo sopra l’impaginazione, dagli un nome chiaro e imposta il tipo. Mettiti in conto di testare il risultato in più di un lettore.",
    },
    {
      title: "Testa il modulo prima di inviarlo",
      body: "Apri il tuo modulo come faranno i destinatari — su telefono e su computer. Compilalo tu stesso dall’inizio alla fine. Correggi ogni campo troppo piccolo, con l’etichetta sbagliata o fuori dalla sua riga, prima di distribuirlo.",
    },
  ],
  tips: [
    "Un modello non interattivo pulito che si compila in modo affidabile ovunque spesso batte un modulo interattivo elaborato che si rompe in alcuni lettori.",
    "Lascia più spazio per le risposte di quanto pensi ti serva — i campi troppo stretti sono la lamentela più comune sui moduli.",
    "Dai ai campi interattivi nomi significativi; aiuta sia la compilazione sia l’eventuale elaborazione delle risposte in seguito.",
    "Evita le funzioni avanzate dei moduli dinamici a meno che tu non sappia che il software dei destinatari le supporta — alcuni lettori di PDF non lo fanno.",
    "Qualunque via tu scelga, compila prima tu stesso il modulo; ti accorgerai dei punti scomodi che nessuna revisione grafica farebbe emergere.",
  ],
  mobileNote:
    "I destinatari possono completare il tuo modulo sul telefono con l’app PDF Editor, che sia interattivo o non interattivo — riconosce i campi veri e permette di posizionare il testo sui modelli non interattivi. Se stai creando un modello non interattivo, testalo nell’app su un telefono per confermare che gli spazi per le risposte siano abbastanza grandi per i pollici.",
  faq: [
    {
      q: "Posso creare un PDF compilabile gratis?",
      a: "Puoi creare gratis un modello non interattivo compilabile con quasi qualsiasi strumento per documenti, esportando in PDF — i destinatari aggiungono il testo sopra. Creare veri campi interattivi richiede di solito un software dedicato alla progettazione di moduli.",
    },
    {
      q: "Qual è la differenza tra un PDF compilabile interattivo e uno non interattivo?",
      a: "Un PDF interattivo ha campi veri che le persone toccano e in cui scrivono. Un modello non interattivo è una pagina pulita su cui le persone posizionano il proprio testo. L’interattivo è più ordinato; il non interattivo è più semplice da creare e funziona in ogni lettore.",
    },
    {
      q: "I moduli PDF interattivi funzionano ovunque?",
      a: "Non sempre. I campi standard sono ampiamente supportati, ma l’aspetto del modulo e le funzioni avanzate possono variare da un lettore all’altro, e i moduli dinamici potrebbero non aprirsi affatto in alcune app. Testali prima di farci affidamento.",
    },
    {
      q: "Quale approccio dovrei scegliere?",
      a: "Se il modulo verrà riutilizzato molto e vuoi un’esperienza curata, investi nei campi interattivi. Se ti serve qualcosa di rapido e affidabile, un modello non interattivo ben progettato è la scelta più sicura.",
    },
    {
      q: "Come rendo facile da compilare un modello non interattivo?",
      a: "Usa etichette chiare, molto spazio vuoto, righe o caselle visibili per ogni risposta e un’area per la firma ben evidente. Poi compilalo tu stesso una volta per confermare che tutto abbia lo spazio necessario.",
    },
  ],
  related: [
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Come funzionano i moduli PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Buone pratiche per i moduli PDF", path: "/guides/pdf-form-best-practices" },
    {
      label: "Come condividere un modulo PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
