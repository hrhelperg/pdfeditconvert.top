import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "document-collection-workflows-with-pdf",
  h1: "Flussi di lavoro per raccogliere documenti con PDF",
  description:
    "Raccogli file e moduli firmati dai clienti? Costruisci un flusso di lavoro ripetibile per la raccolta in PDF — una checklist, formati coerenti e un modo ordinato per tenere traccia di cosa manca ancora.",
  updated: "2026-06-01",
  intro: [
    "Raccogliere documenti da altre persone è un tipo di progetto a sé. Fare l’onboarding di un cliente, elaborare una candidatura, chiudere un affare — ognuna di queste attività spesso richiede un insieme di file e moduli firmati da qualcun altro, e il risultato solito è un thread email disperso in cui non riesci mai a ricordare bene cosa manca ancora. Un flusso di lavoro di raccolta PDF ripetibile sostituisce quel caos con una checklist e una cartella.",
    "Questo è diverso dal raccogliere le risposte su un singolo modulo. La raccolta di documenti riguarda il mettere insieme più elementi — un accordo firmato, un documento d’identità, una prova di qualcosa, un questionario completato — da una persona, e sapere a colpo d’occhio cosa è arrivato e cosa manca ancora. Il PDF è il formato comune naturale perché tutto può diventarlo.",
    "Questa guida illustra un flusso di lavoro che si adatta sia a un solo cliente sia a molti: definisci la richiesta con precisione, rendi facile restituire gli elementi, tieni traccia della completezza, e assembla quello che hai raccolto in qualcosa di ordinato.",
  ],
  steps: [
    {
      title: "Definisci la richiesta come una checklist",
      body: "Elenca esattamente cosa ti serve — ogni modulo, ogni file di supporto — con una descrizione di una riga. Invia la checklist insieme alla richiesta, così l’altra persona conosce subito l’insieme completo, non a piccole dosi.",
    },
    {
      title: "Standardizza il formato di restituzione",
      body: "Chiedi tutto come PDF: moduli appiattiti, scansioni dei documenti come PDF invece di foto sparse. Un formato coerente significa che tutto si archivia insieme e si legge allo stesso modo.",
    },
    {
      title: "Rendi la restituzione degli elementi davvero facile",
      body: "Indirizza le persone verso un’app PDF così possono compilare i moduli, scansionare i documenti in PDF e inviare un insieme ordinato dal telefono. Più facile è la restituzione, più veloce e completa torna indietro.",
    },
    {
      title: "Tieni traccia di cosa è arrivato e cosa manca",
      body: "Tieni una cartella per ogni persona e spunta la checklist man mano che gli elementi arrivano. Un’occhiata ti dice cosa manca ancora, così il tuo sollecito è specifico — «mi serve ancora l’accordo firmato» — non vago.",
    },
    {
      title: "Assembla l’insieme completato",
      body: "Una volta che tutto è arrivato, rinomina in modo coerente e, se vuoi, unisci l’insieme in un unico PDF per persona. Finisci con un pacchetto pulito e ordinato invece di una dozzina di file sparsi.",
    },
  ],
  tips: [
    "Invia la checklist completa fin dall’inizio; le richieste frammentate sono il motivo principale per cui la raccolta si trascina.",
    "Chiedere PDF (moduli appiattiti, documenti scansionati in PDF) mantiene l’insieme ricevuto coerente e facile da archiviare.",
    "Una cartella per ogni persona più una checklist spuntata rende i solleciti specifici invece di un generico «puoi mandarmi il resto?».",
    "Unire un insieme completato in un unico PDF ti dà un singolo pacchetto ordinato per persona.",
    "I documenti raccolti sono spesso sensibili — limitali a canali diretti o a uno spazio cloud privato, non a strumenti pubblici di caricamento.",
  ],
  mobileNote:
    "Le persone da cui raccogli i documenti possono fare tutta la loro parte dal telefono: scansionare i documenti in PDF, compilare e appiattire i moduli, e inviare l’insieme con l’app PDF Editor. Poiché funziona sul dispositivo, i file sensibili che restituiscono non vengono inviati a un server di terze parti lungo il tragitto verso di te.",
  faq: [
    {
      q: "Come raccolgo documenti e moduli dai clienti in modo efficiente?",
      a: "Definisci la richiesta completa come una checklist fin dall’inizio, chiedi tutto come PDF, rendi facile la restituzione tramite un’app PDF, tieni traccia degli arrivi rispetto alla checklist, e assembla l’insieme completato in un unico pacchetto ordinato.",
    },
    {
      q: "In cosa è diversa la raccolta di documenti dalla raccolta di un modulo?",
      a: "Un singolo modulo raccoglie le risposte in un unico file. La raccolta di documenti mette insieme più elementi — moduli più file di supporto — da una persona, quindi l’attenzione è sulla completezza e sul tenere traccia di cosa manca ancora.",
    },
    {
      q: "In che formato dovrebbero inviare i documenti le persone?",
      a: "PDF in tutto: moduli appiattiti, documenti cartacei scansionati in PDF invece di foto sparse. La coerenza significa che tutto si archivia insieme e si legge allo stesso modo.",
    },
    {
      q: "Come tengo traccia di cosa manca ancora?",
      a: "Tieni una cartella per ogni persona e una checklist, spuntando gli elementi man mano che arrivano. Un’occhiata mostra cosa manca, così i solleciti sono specifici invece che vaghi.",
    },
    {
      q: "Come mantengo privati i documenti raccolti?",
      a: "Usa canali diretti o uno spazio cloud privato invece di siti pubblici di caricamento. Le persone possono scansionare e compilare sul dispositivo con l’app PDF Editor, così i loro file non vengono inviati altrove quando li restituiscono.",
    },
  ],
  related: [
    {
      label: "Come inviare moduli di raccolta dati per un nuovo cliente",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Come gestire i moduli di candidatura in PDF",
      path: "/guides/how-to-manage-pdf-application-forms",
    },
    {
      label: "Come condividere un modulo PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Come scansionare documenti in PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
