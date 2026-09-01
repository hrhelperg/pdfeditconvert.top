import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-government-pdf-forms-on-phone",
  h1: "Come compilare moduli PDF della pubblica amministrazione dal telefono",
  description:
    "I moduli della pubblica amministrazione sono spesso scansioni non interattive con un formato rigido. Come completarli dal telefono, gestire i campi scomodi e seguire le istruzioni dell’ente stesso.",
  updated: "2026-06-01",
  intro: [
    "I moduli PDF della pubblica amministrazione sono una categoria a sé di scomodità. Molti sono scansioni non interattive di originali cartacei senza campi interattivi, la formattazione è rigida, e le istruzioni su come inviarli non sono negoziabili. La buona notizia è che di solito puoi completarli interamente dal telefono — la cattiva notizia è che farlo in modo ordinato richiede un po’ più attenzione di un amichevole modulo interattivo.",
    "Un paio di avvertenze oneste prima di iniziare: questa guida spiega come compilare questi moduli, non se un particolare invio sia valido o accettato. I requisiti della pubblica amministrazione e degli enti variano molto, alcuni moduli usano funzioni avanzate che non tutte le app supportano, e le istruzioni dell’ente che emette il modulo prevalgono sempre su questi consigli generali. In caso di dubbio, segui quello che dice l’ente.",
    "Detto questo, ecco come completare un modulo della pubblica amministrazione dal telefono — non interattivo o interattivo —, posizionare le tue risposte in modo ordinato, e prepararlo per qualsiasi metodo di invio richiesto dall’ente.",
  ],
  steps: [
    {
      title: "Leggi prima le istruzioni dell’ente",
      body: "I moduli della pubblica amministrazione arrivano di solito con regole di invio — formato, requisiti di firma, dove mandarlo. Leggile prima di compilare, perché decidono se devi appiattire, stampare o caricare il file, e come farlo.",
    },
    {
      title: "Apri il modulo in un’app PDF adeguata",
      body: "Porta il modulo fuori da qualsiasi anteprima email e dentro l’app PDF Editor. Riconosce i campi interattivi se il modulo li ha, e ti lascia posizionare il testo sulla pagina se è una scansione non interattiva.",
    },
    {
      title: "Compila con attenzione e rispetta il formato",
      body: "I moduli della pubblica amministrazione sono esigenti sui formati — date, numeri di riferimento, una casella per ogni carattere. Ingrandisci, posiziona il testo con precisione su ogni riga e rispetta esattamente il formato richiesto dal modulo.",
    },
    {
      title: "Gestisci le firme come indicato",
      body: "Aggiungi una firma elettronica dove il modulo lo consente. Se l’ente richiede specificamente una copia cartacea firmata a mano, stampa, firma e riscansiona — segui la loro richiesta invece di dare per scontato che basti una firma digitata.",
    },
    {
      title: "Prepara l’invio nel modo richiesto",
      body: "Appiattisci il modulo completato così le risposte non possono spostarsi, poi invialo con il metodo dell’ente — portale sicuro, email, o stampa e spedizione postale. Conserva una tua copia ed eventuali conferme.",
    },
  ],
  tips: [
    "Lascia sempre che le istruzioni dell’ente prevalgano su questi consigli generali — le regole di invio dei moduli ufficiali variano e sono importanti.",
    "Molti moduli della pubblica amministrazione sono scansioni non interattive, quindi aspettati di dover posizionare il testo sulla pagina invece di scriverlo nei campi.",
    "Ingrandisci per i campi con caselle a carattere singolo (una lettera per casella), così ogni carattere cade nel suo riquadro.",
    "Conserva una copia salvata di tutto ciò che invii, insieme a ogni numero di riferimento o di conferma.",
    "Se un modulo usa funzioni dinamiche avanzate che non si aprono correttamente, prova un’altra app PDF o chiedi all’ente un formato alternativo — non forzarlo.",
  ],
  mobileNote:
    "L’app PDF Editor gestisce le scansioni non interattive che spesso sono i moduli della pubblica amministrazione: posiziona testo e segni di spunta esattamente dove vanno, aggiungi una firma dove consentito, poi appiattisci ed esporta per il caricamento o la stampa — tutto dal telefono, sul dispositivo, con i dati personali sensibili tenuti lontani dai server di terze parti.",
  faq: [
    {
      q: "Posso compilare un modulo PDF della pubblica amministrazione dal telefono?",
      a: "Di solito sì. La maggior parte si può completare dal telefono — quelli interattivi scrivendo nei campi, le scansioni non interattive posizionando il testo sulla pagina. Segui sempre le istruzioni di invio dell’ente che emette il modulo, che variano da un modulo all’altro.",
    },
    {
      q: "Perché un modulo della pubblica amministrazione non mi lascia scrivere?",
      a: "Molti moduli della pubblica amministrazione sono scansioni non interattive di documenti cartacei, senza campi interattivi. Posiziona invece le tue risposte sulla pagina con lo strumento testo di un editor di PDF. Alcuni potrebbero anche essere bloccati o usare funzioni che il tuo lettore non supporta.",
    },
    {
      q: "Una firma digitata è accettata sui moduli della pubblica amministrazione?",
      a: "Dipende interamente dall’ente e dal modulo — i requisiti variano. Alcuni accettano firme elettroniche; altri richiedono una copia firmata a mano. Segui il requisito indicato dal modulo invece di darlo per scontato.",
    },
    {
      q: "Devo appiattire un modulo della pubblica amministrazione prima di inviarlo?",
      a: "In generale sì, così le tue risposte non possono spostarsi o essere cancellate. Ma segui prima le istruzioni di invio dell’ente — alcuni portali vogliono un formato specifico.",
    },
    {
      q: "È sicuro compilare moduli ufficiali dal telefono?",
      a: "Compilare sul dispositivo con l’app PDF Editor tiene i dati personali del modulo lontani dai server di terze parti. Per l’invio, usa il canale sicuro ufficiale dell’ente invece di un sito pubblico.",
    },
  ],
  related: [
    {
      label: "Come compilare moduli PDF su iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Come compilare moduli PDF su Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    { label: "Il flusso di lavoro mobile per i moduli PDF", path: "/guides/mobile-pdf-form-workflow" },
    {
      label: "Come inviare un modulo PDF compilato",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
