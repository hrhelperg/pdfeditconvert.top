import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdf-application-forms",
  h1: "Come gestire i moduli di candidatura in PDF (raccogliere e valutare)",
  description:
    "Ricevi candidature come PDF? Come raccoglierle, valutarle, confrontarle e archiviarle senza perdere il filo — un sistema semplice per gestire una pila di moduli compilati.",
  updated: "2026-06-01",
  intro: [
    "Inviare un modulo è la parte facile; gestire il flusso di quelli completati è dove le cose si complicano. Se raccogli candidature come PDF — candidati per un lavoro, fornitori, iscritti a un programma, soci — finisci presto con una cartella piena di file chiamati «modulo (3).pdf» e nessun modo chiaro di rivederli o confrontarli. La soluzione è un sistema leggero applicato con costanza, non un database.",
    "Una buona gestione dei moduli di candidatura riguarda tre cose: ricevere ogni invio in un formato utilizzabile e coerente; poterli rivedere e confrontare senza aprire venti file contemporaneamente; e archiviarli così puoi ritrovarne uno in seguito. Niente di tutto questo richiede un software speciale — solo una convenzione di denominazione, una struttura di cartelle e un paio di abitudini con i PDF.",
    "Questa guida illustra quel sistema dal lato di chi riceve i moduli, la controparte dell’invio di moduli di raccolta dati o di candidatura. Presuppone un flusso costante ma limitato o un lotto periodico, il volume realistico che la maggior parte delle piccole attività gestisce davvero.",
  ],
  steps: [
    {
      title: "Richiedi un formato di restituzione coerente",
      body: "Chiedi ai candidati di inviare PDF appiattiti, non foto o file modificabili. Un formato coerente significa che ogni invio si legge allo stesso modo e nulla arriva compilato a metà o alterabile.",
    },
    {
      title: "Rinomina all’arrivo",
      body: "Rinomina ogni file appena arriva — nome del candidato, data, magari un riferimento. «cognome-nome-2026-06.pdf» batte sempre «scansione_finale.pdf» e rende la cartella scorribile a colpo d’occhio.",
    },
    {
      title: "Raggruppa in lotti di revisione",
      body: "Metti le candidature di ogni turno in un’unica cartella. Per il confronto, puoi unire un lotto in un unico PDF e sfogliarle, oppure tenerle separate e scorrerle rapidamente dal nome del file.",
    },
    {
      title: "Tieni traccia dello stato in modo semplice",
      body: "Una struttura di sottocartelle — ricevute, selezionate, respinte — oppure una breve nota nel nome di ogni file tiene visibile lo stato senza bisogno di uno strumento. Sposta i file man mano che il loro stato cambia.",
    },
    {
      title: "Archivia i turni completati",
      body: "Quando un turno si chiude, sposta la sua cartella in un archivio e tieni separato il modello di candidatura vuoto. Mantieni così un registro pulito e un modello riutilizzabile per la prossima volta.",
    },
  ],
  tips: [
    "Rinominare all’arrivo è l’abitudine con il valore più alto — previene il caos del «modulo (3).pdf» prima ancora che inizi.",
    "Unire un lotto di candidature in un unico PDF rende la revisione affiancata molto più rapida che destreggiarsi tra tanti file.",
    "Chiedi invii appiattiti così le risposte non possono spostarsi e ogni file si legge in modo coerente.",
    "Una semplice struttura di cartelle ricevute/selezionate/respinte tiene traccia dello stato senza alcun software aggiuntivo.",
    "Tieni i dati dei candidati lontani dagli strumenti pubblici e segui le regole di conservazione dei dati che ti riguardano.",
  ],
  mobileNote:
    "I candidati possono completare e restituire il tuo modulo dal telefono usando l’app PDF Editor, inviando una copia appiattita coerente da archiviare. Dal tuo lato, puoi rivedere gli invii e unire un lotto per il confronto anche dal telefono — utile quando le candidature arrivano mentre sei lontano dalla scrivania.",
  faq: [
    {
      q: "Come tengo organizzati i moduli di candidatura completati?",
      a: "Rinomina ogni file all’arrivo con nome del candidato e data, raggruppa ogni turno in un’unica cartella, tieni traccia dello stato con le sottocartelle, e archivia i turni chiusi. Una convenzione di denominazione più delle cartelle bastano — non serve un database.",
    },
    {
      q: "Come confronto rapidamente molte candidature?",
      a: "Unisci i PDF di un turno in un unico file e sfoglialo, oppure tienili separati e scorrili rapidamente grazie a nomi di file coerenti. Entrambi i metodi battono l’apertura individuale di venti file.",
    },
    {
      q: "In che formato dovrebbero inviare i moduli i candidati?",
      a: "PDF appiattiti. Si leggono in modo coerente, non possono essere alterati o cancellati, e si archiviano in modo pulito. Scoraggia foto di stampe e file modificabili che arrivano in modo incoerente.",
    },
    {
      q: "Mi serve un software speciale per gestire i moduli di candidatura?",
      a: "No. Una convenzione di denominazione coerente, una struttura di cartelle sensata e strumenti PDF di base per unire e rivedere coprono il volume realistico che la maggior parte delle piccole attività gestisce.",
    },
    {
      q: "Per quanto tempo dovrei conservare i moduli completati?",
      a: "Dipende dalle tue esigenze di conservazione dei documenti e dalle regole che ti riguardano — i requisiti variano. Archivia i turni chiusi in un posto da cui puoi recuperarli, e smaltisci i dati personali secondo la tua politica.",
    },
  ],
  related: [
    {
      label: "Come inviare moduli di raccolta dati per un nuovo cliente",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Flussi di lavoro per raccogliere documenti con PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Moduli PDF per piccole imprese",
      path: "/guides/pdf-forms-for-small-business",
    },
    { label: "Come unire file PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
