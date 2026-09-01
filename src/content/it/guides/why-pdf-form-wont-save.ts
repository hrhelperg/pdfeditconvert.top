import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Perché il modulo PDF non si salva? E come risolverlo",
  description:
    "Compili un modulo e le risposte spariscono quando lo riapri? Perché alcuni programmi si limitano a stampare i dati del modulo invece di salvarli — e i modi affidabili per far restare le tue risposte.",
  updated: "2026-06-01",
  intro: [
    "Passi dieci minuti a compilare un modulo, lo salvi, lo riapri più tardi, e ogni campo è di nuovo vuoto. È esasperante, e non è colpa tua — è perché i valori dei campi del modulo vivono in un livello separato dalla pagina, e non tutti gli strumenti scrivono davvero quel livello nel file quando salvi. Alcuni possono solo stampare il modulo, mai memorizzare quello che hai inserito.",
    "Ci sono due soluzioni affidabili: usare uno strumento che salva davvero i dati del modulo, oppure appiattire il modulo così le tue risposte diventano contenuto permanente della pagina che nulla può far perdere. Quale scegliere dipende dal fatto che tu debba ancora modificare le risposte in seguito. In entrambi i casi, il problema delle risposte che spariscono si risolve completamente.",
    "Questa guida spiega perché il salvataggio fallisce, come confermare se il tuo strumento è il problema, e i due modi affidabili per far restare le risposte compilate.",
  ],
  steps: [
    {
      title: "Conferma che le risposte davvero non si salvano",
      body: "Compila un campo, salva, chiudi completamente il file e riaprilo. Se la risposta è sparita, i valori dei campi non vengono scritti — è un problema di salvataggio, non qualcosa che hai fatto male.",
    },
    {
      title: "Usa Salva o Esporta, mai solo Stampa",
      body: "Scegli Salva o Esporta per scrivere i valori dei campi nel PDF. Un percorso solo-Stampa (comune nei lettori di base) produce un risultato ma non memorizza mai le risposte modificabili — la causa classica dei dati che spariscono.",
    },
    {
      title: "Passa a uno strumento adatto ai moduli",
      body: "Se la tua app attuale si limita a stampare, sposta il modulo su un’app PDF dedicata o uno strumento via browser che salvi i dati del modulo. Riapri il file salvato per confermare che le risposte siano rimaste.",
    },
    {
      title: "Appiattisci per rendere le risposte permanenti",
      body: "Se hai finito di modificare, appiattisci il modulo. L’appiattimento unisce i valori alla pagina, così non resta più alcun livello separato da perdere e le risposte sopravvivono ovunque.",
    },
    {
      title: "Salva come nuova copia",
      body: "Esporta con un nuovo nome di file così mantieni sia un originale pulito sia una versione salvata e compilata — e non sovrascrivi mai per errore il modello con un modulo vuoto.",
    },
  ],
  tips: [
    "Se le risposte spariscono, il tuo strumento si limita a stampare, non a salvare il livello dei campi — passa a uno che scriva i dati del modulo.",
    "L’appiattimento è la soluzione più sicura: una volta appiattito, non resta più alcun livello di campi da perdere.",
    "Riapri sempre un modulo salvato prima di farci affidamento; il test chiudi-e-riapri individua subito il problema.",
    "Tieni separato l’originale vuoto così appiattire la tua copia compilata non ti costa mai il modello riutilizzabile.",
    "Sul telefono, una scorciatoia «stampa in PDF» di solito appiattisce — va bene se hai finito, ma non manterrà il modulo modificabile.",
  ],
  mobileNote:
    "L’app PDF Editor scrive le risposte compilate direttamente nel file e può esportare una copia appiattita quando hai finito, così nulla sparisce alla riapertura o dalla parte del destinatario. Salva sul dispositivo, così i dati che hai inserito restano privati.",
  faq: [
    {
      q: "Perché il mio modulo PDF continua a salvarsi vuoto?",
      a: "Perché il tuo lettore sta stampando il modulo invece di salvare i valori dei suoi campi. Le risposte vivono in un livello di campi separato; se non viene scritto nel file, riaprendolo vedrai gli spazi vuoti. Usa uno strumento che salvi i dati del modulo, oppure appiattisci il modulo.",
    },
    {
      q: "Come faccio a far restare le risposte del mio modulo?",
      a: "Salva o esporta con uno strumento adatto ai moduli così i valori dei campi vengono scritti nel file, poi riapri per confermare. Per un risultato permanente, appiattisci il modulo così le risposte si uniscono alla pagina.",
    },
    {
      q: "Cosa fa l’appiattimento per il salvataggio?",
      a: "Unisce i tuoi valori compilati direttamente alla pagina, senza lasciare alcun livello di campi separato da perdere. Dopo l’appiattimento, le risposte si salvano e vengono mostrate in modo affidabile in qualsiasi lettore.",
    },
    {
      q: "Devo sovrascrivere l’originale o salvare una copia?",
      a: "Salva una copia con un nuovo nome. Così mantieni separati un modello vuoto pulito e la tua versione compilata, e non perdi mai il modello riutilizzabile né invii un modulo vuoto per errore.",
    },
    {
      q: "È la stessa cosa di un modulo in sola lettura?",
      a: "No. Un problema di mancato salvataggio significa che il tuo strumento non sta memorizzando i dati dei campi. Un modulo in sola lettura blocca attivamente la modifica. Se riesci a scrivere ma non riesci a conservare le risposte, è un problema di salvataggio, non di sicurezza.",
    },
  ],
  related: [
    {
      label: "Come salvare un modulo PDF compilato",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
    {
      label: "Perché il modulo PDF è in sola lettura",
      path: "/guides/why-pdf-form-is-read-only",
    },
    { label: "Come funzionano i moduli PDF", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
