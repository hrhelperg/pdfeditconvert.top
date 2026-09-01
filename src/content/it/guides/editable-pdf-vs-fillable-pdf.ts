import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "PDF modificabile o PDF compilabile — qual è la differenza?",
  description:
    "Modificare un PDF ne cambia il contenuto; compilare un PDF significa inserire risposte nei campi del modulo. Perché sono due compiti diversi, e di quale hai davvero bisogno.",
  updated: "2026-06-01",
  intro: [
    "«Modificabile» e «compilabile» sembrano la stessa cosa, e spesso si usano come sinonimi — ma descrivono due compiti diversi. Modificare un PDF significa cambiare il documento stesso: riformulare una frase, sostituire un logo, spostare un paragrafo. Compilare un PDF significa lasciare il documento così come lo ha pensato l’autore e inserire le risposte solo negli spazi previsti per questo. Un modulo è fatto per essere compilato, non modificato.",
    "La distinzione conta perché strumenti e permessi sono diversi. Un PDF modificabile ti permette di alterare il contenuto sottostante. Un PDF compilabile ti limita di proposito ai suoi campi del modulo, così le domande e l’impaginazione restano fisse mentre tu fornisci le risposte. Molti moduli non sono modificabili di proposito: l’autore vuole che ogni copia ponga le stesse domande, nello stesso punto.",
    "C’è una terza parola che complica ulteriormente le cose — «non interattivo» — che riguarda il fatto che il testo di un PDF sia reale oppure solo un’immagine. Questa guida si concentra su modificabile e compilabile: cosa significa ciascuno dei due, quando ti serve l’uno o l’altro, e come capire cosa permette un determinato file.",
  ],
  steps: [
    {
      title: "Cosa significa modificare: cambiare il documento",
      body: "Modificare significa alterare il contenuto creato dall’autore — testo, immagini, ordine delle pagine. Modifichi un PDF per correggere un refuso in un contratto o aggiornare un prezzo in una brochure. Cambia quello che il documento dice.",
    },
    {
      title: "Cosa significa compilare: rispondere nei campi",
      body: "Compilare lascia il documento intatto e aggiunge solo le tue risposte nei campi o negli spazi previsti. Compili un modulo di domanda; non ne riscrivi le domande.",
    },
    {
      title: "Verifica se un file è compilabile",
      body: "Tocca il punto in cui dovrebbe andare una risposta. Un cursore o una casella evidenziata indicano che il modulo è compilabile tramite campi interattivi. Se non ci sono campi, puoi comunque aggiungere testo sopra la pagina — una compilazione manuale invece che integrata.",
    },
    {
      title: "Verifica se un file è modificabile",
      body: "Prova a selezionare una riga del testo del documento. Se si seleziona e un editor di PDF ti permette di cambiarla, il contenuto è modificabile. Le pagine scansionate e i file bloccati spesso non lo consentono.",
    },
    {
      title: "Scegli lo strumento giusto per l’attività",
      body: "Devi cambiare quello che dice il documento? Usa un editor di PDF. Devi completare un modulo che ti hanno inviato? Usa la compilazione del modulo — tocca i campi o posiziona il testo dove vanno le risposte, poi esporta.",
    },
  ],
  tips: [
    "Un file può essere compilabile ma non modificabile: puoi rispondere nei campi, ma non puoi cambiare le domande. Per la maggior parte dei moduli è voluto.",
    "Se un modulo fa una domanda a cui non riesci a rispondere nello spazio previsto, non provare a modificare il modulo — aggiungi una nota di chiarimento dove è consentito, oppure chiedi a chi te lo ha inviato.",
    "Modificare in seguito le risposte di un modulo già compilato è possibile se conservi una copia modificabile, ma le versioni appiattite o scansionate sono molto più difficili da cambiare.",
    "Se sei tu l’autore, decidi in anticipo: vuoi che le persone lo compilino (blocca il contenuto, aggiungi i campi) o che ci collaborino (lascialo modificabile)?",
    "Alcuni PDF usano impostazioni di sicurezza che bloccano la modifica ma permettono comunque di compilare il modulo — una combinazione voluta, non un difetto.",
  ],
  mobileNote:
    "L’app PDF Editor gestisce entrambi i compiti sul telefono: modifica il testo e le immagini di un documento quando devi cambiarne il contenuto, oppure tocca i campi del modulo — e posiziona il testo sui moduli non interattivi — quando devi solo compilarlo. Riconosce automaticamente i campi interattivi e mantiene tutto sul dispositivo.",
  faq: [
    {
      q: "Un PDF compilabile è la stessa cosa di un PDF modificabile?",
      a: "No. Compilabile significa che puoi inserire risposte nei campi del modulo senza cambiare il documento. Modificabile significa che puoi cambiare il contenuto vero e proprio del documento. Un modulo è di solito compilabile ma volutamente non modificabile.",
    },
    {
      q: "Un PDF può essere sia modificabile che compilabile?",
      a: "Sì, se le sue impostazioni di sicurezza lo permettono. Ma molti moduli sono bloccati in modo che domande e impaginazione non possano essere alterate, mentre i campi continuano ad accettare risposte.",
    },
    {
      q: "Non riesco a modificare le domande di un modulo — è rotto?",
      a: "Quasi certamente no. I moduli sono spesso protetti in modo che ogni copia ponga le stesse domande. Il tuo compito è compilare i campi, non riscrivere il modulo.",
    },
    {
      q: "Di cosa ho bisogno per completare una domanda che qualcuno mi ha inviato?",
      a: "Devi compilare, non modificare. Inserisci le tue risposte nei campi oppure posiziona il testo sulla pagina se è non interattiva, poi firma ed esporta. Non dovrebbe servirti cambiare il modulo in sé.",
    },
    {
      q: "In cosa è diverso da modificabile e non interattivo?",
      a: "Modificabile e non interattivo riguarda il fatto che il testo di un PDF sia reale oppure un’immagine. Modificabile e compilabile riguarda invece il fatto che tu stia cambiando il documento oppure semplicemente rispondendo. Sono questioni collegate, ma distinte.",
    },
  ],
  related: [
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "PDF modificabile o PDF non modificabile",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "Si può modificare un modulo PDF?",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor — modifica e compila", path: "/pdf-editor" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
