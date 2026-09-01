import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Si può modificare un modulo PDF? Cosa puoi cambiare e cosa no",
  description:
    "Modificare le domande di un modulo PDF è diverso dal compilarlo. Cosa è modificabile, cosa è bloccato, e come cambiare un modulo di cui hai solo la versione finita in PDF.",
  updated: "2026-06-01",
  intro: [
    "«Si può modificare un modulo PDF?» in realtà nasconde due domande diverse. Una è: posso compilarlo, cioè scrivere le mie risposte nei campi? Quasi sempre sì. L’altra è: posso cambiare il modulo stesso — riformulare una domanda, aggiungere un campo, correggere un’etichetta? Questo dipende del tutto da come è stato creato il modulo e se è stato bloccato.",
    "Compilare un modulo è il caso di tutti i giorni e raramente crea problemi. Modificarne la struttura è il caso più difficile, e se puoi farlo dipende da tre cose: se il file ha un testo reale e modificabile oppure è una scansione non interattiva, se l’autore ha applicato una protezione che blocca le modifiche, e se hai uno strumento capace di modificare i campi del modulo e non solo di compilarli.",
    "Questa guida distingue chiaramente le due domande, poi ripercorre cosa è realisticamente possibile quando hai a disposizione solo il PDF finito — inclusi i limiti reali, perché alcuni moduli sono costruiti apposta per resistere alle modifiche.",
  ],
  steps: [
    {
      title: "Stabilisci di quale tipo di modifica stai parlando",
      body: "Inserire le risposte è una cosa; cambiare il testo, l’impaginazione o i campi del modulo è un’altra. La prima è semplice e prevista; la seconda è ciò che di solito si intende per «modificare un modulo», ed è molto più limitata.",
    },
    {
      title: "Verifica se il testo è modificabile o è una scansione non interattiva",
      body: "Prova a selezionare il testo del modulo. Se si seleziona, il contenuto è reale e potenzialmente modificabile. Se non si seleziona nulla, è una scansione non interattiva — l’immagine di un modulo — e modificarla significa prima passare dall’OCR oppure ricostruire l’impaginazione.",
    },
    {
      title: "Controlla le restrizioni di sicurezza",
      body: "Alcuni moduli hanno permessi che consentono la compilazione ma bloccano la modifica, o addirittura vietano ogni cambiamento senza una password. Se un editor di PDF mostra in grigio gli strumenti di modifica, è probabile che il file sia protetto di proposito.",
    },
    {
      title: "Usa un editor pensato per i moduli, per lavorare sui campi veri",
      body: "Gli strumenti di compilazione ti permettono solo di rispondere nei campi. Per aggiungere, spostare, rinominare o eliminare campi, o cambiare le domande, ti serve un editor che dia accesso alla struttura del modulo — non tutte le app lo fanno.",
    },
    {
      title: "Sappi quando è meglio chiedere il file originale",
      body: "Se ti servono modifiche sostanziali, spesso la soluzione più pulita è chiedere a chi lo ha creato il documento originale modificabile (un file Word o la sorgente del modulo), invece di lottare con un PDF bloccato.",
    },
  ],
  tips: [
    "Se ti serve solo completare il modulo, non hai bisogno di modificarlo affatto — basta compilare i campi o aggiungere testo su una copia non interattiva.",
    "Modificare un modulo scansionato significa lavorare su un’immagine: o passi dall’OCR per recuperare il testo, oppure posizioni nuovo testo e nuove caselle sopra quelle vecchie.",
    "Rinominare o riorganizzare i campi del modulo è vera e propria modifica del modulo e richiede uno strumento pensato apposta — i lettori di base non possono farlo.",
    "Rispetta i moduli bloccati: un’impostazione di sicurezza che blocca la modifica è di solito una scelta voluta dall’autore, non un problema da aggirare.",
    "Conserva una copia non appiattita se pensi di dover rivedere le tue risposte in seguito; una volta appiattito il modulo, le risposte diventano contenuto fisso della pagina.",
  ],
  mobileNote:
    "Sul telefono, l’app PDF Editor ti permette di compilare qualsiasi modulo e di modificare il contenuto del documento dove il file lo consente. Sui moduli non interattivi aggiungi il testo direttamente sulla pagina invece di modificare i campi. Compilazione e piccole modifiche avvengono sul dispositivo, con l’originale vuoto conservato intatto per un uso successivo.",
  faq: [
    {
      q: "Posso cambiare le domande di un modulo PDF?",
      a: "A volte. Se il modulo ha un testo reale e modificabile e non è bloccato, un editor pensato per i moduli può cambiare il testo e i campi. Se è una scansione non interattiva o è protetto, modificare le domande è molto più difficile o del tutto impossibile.",
    },
    {
      q: "Perché il mio editor non mi lascia cambiare un modulo?",
      a: "O il file è un’immagine non interattiva senza testo modificabile, oppure ha permessi che consentono la compilazione ma non la modifica. Entrambi i casi sono comuni e di solito voluti.",
    },
    {
      q: "Posso modificare le mie risposte dopo aver compilato un modulo?",
      a: "Sì, purché tu l’abbia salvato come modulo interattivo e non lo abbia appiattito. Una volta appiattito, le risposte si uniscono alla pagina e diventano fisse.",
    },
    {
      q: "Come modifico un modulo scansionato senza campi?",
      a: "Trattalo come un’immagine. Esegui l’OCR per recuperare il testo modificabile, oppure posiziona semplicemente il tuo testo e i segni di spunta sopra — per compilarlo, di solito basta questa seconda soluzione.",
    },
    {
      q: "È meglio modificare il PDF o procurarsi il file originale?",
      a: "Per modifiche importanti, se puoi chiedi all’autore il documento sorgente. Modificare un PDF finito, magari bloccato, è sempre più limitato che lavorare partendo dall’originale.",
    },
  ],
  related: [
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "PDF modificabile o PDF compilabile",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "Come creare un PDF compilabile",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    { label: "Perché non riesco a modificare un PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
