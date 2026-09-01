import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "Come salvare un modulo PDF compilato in modo che le risposte restino",
  description:
    "Compili un modulo e poi le tue risposte spariscono? Come salvare i dati di un modulo compilato in modo affidabile, perché alcuni programmi non lo fanno, e quando appiattire prima di inviarlo.",
  updated: "2026-06-01",
  intro: [
    "Pochi momenti con i PDF sono fastidiosi quanto compilare un modulo lungo, chiuderlo, riaprirlo e trovare ogni campo di nuovo vuoto. Il lavoro non è andato perso per colpa tua — è perché le risposte vivono nel livello dei campi del modulo, e non tutti gli strumenti scrivono davvero quel livello nel file quando salvi.",
    "Salvare un modulo compilato in modo affidabile dipende da due cose: usare uno strumento che memorizzi i valori dei campi (non uno che si limita a stamparli), e decidere se lasciare il modulo modificabile oppure appiattirlo così le risposte diventano permanenti. Se fai bene entrambe le cose, le tue risposte restano ogni volta, su qualsiasi dispositivo apra il file in seguito.",
    "Questa guida spiega esattamente come salvare le risposte compilate, perché alcuni lettori le perdono senza avvisare, e quando appiattire è la scelta giusta prima di rimandare indietro un modulo.",
  ],
  steps: [
    {
      title: "Prima compila il modulo per intero",
      body: "Inserisci tutte le risposte, seleziona le caselle di controllo e aggiungi l’eventuale firma prima di salvare. Salvare a metà lavoro va bene, ma un ultimo passaggio prima ti garantisce di salvare un file finito e non uno a metà.",
    },
    {
      title: "Usa Salva o Esporta, non solo Stampa",
      body: "Scegli Salva o Esporta per scrivere i valori dei campi nel PDF. Alcuni lettori di base offrono solo Stampa, che produce carta o una copia non interattiva ma non memorizza mai le risposte modificabili — la causa classica dei dati spariti.",
    },
    {
      title: "Salva come nuova copia",
      body: "Esporta con un nuovo nome di file, tipo «domanda-completata.pdf», invece di sovrascrivere quello vuoto. In questo modo mantieni un originale pulito e una versione compilata e salvata, entrambe a disposizione.",
    },
    {
      title: "Decidi se appiattire",
      body: "Se pensi ancora di dover cambiare le risposte, tienilo come modulo interattivo. Se lo stai inviando in via definitiva, appiattiscilo così i valori si uniscono alla pagina e non possono più essere cancellati o modificati.",
    },
    {
      title: "Riapri per confermare che tutto sia rimasto",
      body: "Chiudi e riapri il file salvato prima di inviarlo. Se le risposte ci sono ancora, i valori dei campi sono stati scritti correttamente. Se sono spariti, lo strumento si è limitato a stampare — passa a uno che salvi davvero i dati del modulo.",
    },
  ],
  tips: [
    "Se le risposte continuano a sparire, lo strumento non sta scrivendo il livello dei campi. Usa un editor pensato per i moduli che salvi davvero i valori dei campi.",
    "L’appiattimento è il modo più affidabile per garantire che le risposte si vedano ovunque — una volta appiattito, non resta più alcun livello di campi da perdere.",
    "Tieni l’originale vuoto separato; appiattire la tua copia compilata non deve costarti un modello riutilizzabile.",
    "Sul telefono, «condividi» o «esporta» di solito salva i dati; una scorciatoia di tipo stampa-in-PDF può appiattirlo, il che va bene se hai finito di modificarlo.",
    "Dai ai file nomi chiari — vuoto, bozza, finale — così non rischi mai di inviare per email il modulo vuoto per sbaglio.",
  ],
  mobileNote:
    "L’app PDF Editor salva le risposte compilate direttamente nel file e può esportare una copia appiattita quando sei pronto per inviarla, così non si cancella nulla dalla parte del destinatario. Succede tutto sul dispositivo, quindi i dati che inserisci non vengono inviati da nessuna parte.",
  faq: [
    {
      q: "Perché le risposte del mio modulo PDF spariscono dopo il salvataggio?",
      a: "Perché lo strumento ha stampato il modulo invece di salvare i valori dei campi. Le risposte dei campi vivono in un livello separato; se non viene riscritto nel file, riaprendolo vedrai di nuovo gli spazi vuoti. Usa uno strumento che salvi davvero i dati del modulo.",
    },
    {
      q: "Devo appiattire un modulo prima di inviarlo?",
      a: "Se hai finito di modificarlo, sì. L’appiattimento unisce le tue risposte alla pagina, così non possono essere cancellate e vengono mostrate allo stesso modo in ogni lettore. Conserva una copia non appiattita solo se pensi di doverlo rivedere.",
    },
    {
      q: "Come faccio a tenere il modulo modificabile ma salvare comunque le risposte?",
      a: "Salva o esporta come PDF interattivo senza appiattire. Uno strumento pensato per i moduli memorizza i valori dei campi così puoi riaprirlo e modificarli in seguito.",
    },
    {
      q: "Salvare un modulo compilato è sicuro dal punto di vista della privacy?",
      a: "Dipende dallo strumento. L’app PDF Editor e gli strumenti locali via browser salvano sul tuo dispositivo, quindi i dati personali che hai inserito non vengono inviati da nessuna parte. Gli strumenti che si basano sul caricamento su un server gestiscono invece il tuo file lì.",
    },
    {
      q: "Posso salvare un modulo non interattivo che ho compilato con testo sopra?",
      a: "Sì. Poiché i moduli non interattivi non hanno un livello di campi, il testo che aggiungi diventa parte della pagina una volta esportato, quindi si salva e viene mostrato sempre in modo affidabile.",
    },
  ],
  related: [
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    { label: "Come funzionano i moduli PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Perché il modulo PDF non si salva",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Come inviare un modulo PDF compilato",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
