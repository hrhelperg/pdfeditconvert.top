import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "Il modulo PDF non funziona? Diagnosi e soluzioni",
  description:
    "Un modulo PDF che si comporta male ha di solito una delle poche cause consuete. Una diagnosi rapida per capire quale ti riguarda — campi mancanti, non riesci a scrivere, non si salva, sola lettura — e dove intervenire.",
  updated: "2026-06-01",
  intro: [
    "«Il mio modulo PDF non funziona» copre tantissimi problemi diversi, e la soluzione dipende interamente da quale hai effettivamente. Il modulo non ti lascia scrivere, i campi sono spariti, le tue risposte non si salvano, si apre in sola lettura, oppure si comporta semplicemente in modo strano. Ognuno ha una causa specifica e una soluzione specifica — il trucco è nominare per primo il sintomo.",
    "Questa pagina è un triage. Invece di un’unica soluzione universale, ti aiuta a individuare in pochi secondi quale problema stai affrontando, poi ti indirizza alla guida che lo risolve. La maggior parte dei problemi con i moduli non è affatto un difetto del file; sono un disallineamento tra il modulo e il lettore in cui lo hai aperto, oppure un’impostazione voluta come la protezione in sola lettura.",
    "Percorri i controlli rapidi qui sotto. Ti diranno se hai a che fare con un modulo non interattivo, un problema di lettore, un problema di salvataggio, un’impostazione di sicurezza, oppure un problema di compatibilità — e dove andare dopo.",
  ],
  steps: [
    {
      title: "Riesci a vedere i campi?",
      body: "Se i campi del modulo mancano o la pagina sembra incompleta, è un problema di campi mancanti — di solito un lettore che non disegna il livello dei campi. Consulta la guida sui campi mancanti per la soluzione.",
    },
    {
      title: "I campi ci sono ma non riesci a scrivere?",
      body: "Se tocchi un campo e non succede nulla, il modulo potrebbe essere non interattivo, aperto nel lettore sbagliato, o in sola lettura. La guida su «non riesco a scrivere» spiega come distinguerli.",
    },
    {
      title: "Le risposte spariscono dopo il salvataggio?",
      body: "Se compili il modulo, salvi, riapri e torna vuoto, i valori dei campi non vengono scritti nel file. La guida su «non si salva» copre come salvare i dati del modulo in modo affidabile.",
    },
    {
      title: "Il modulo si apre in sola lettura o bloccato?",
      body: "Se tutto è mostrato in grigio o vedi un avviso di protezione, il modulo è protetto contro la modifica. La guida sulla sola lettura spiega le tue opzioni senza forzare una protezione che non dovresti aggirare.",
    },
    {
      title: "Funziona in un’app ma non in un’altra?",
      body: "Se il modulo si comporta bene in un programma e si rompe in un altro, è un problema di compatibilità — forse un tipo di modulo avanzato. Consulta la guida sulla compatibilità, oppure prova la checklist di soluzioni consolidata.",
    },
  ],
  tips: [
    "Nomina il sintomo prima di provare le soluzioni — quella giusta dipende interamente dal problema che hai.",
    "Il test singolo più rapido per molti problemi: apri lo stesso file in un’app PDF dedicata. Distingue subito tra «modulo rotto» e «lettore inadatto».",
    "Un modulo che si comporta male raramente è davvero rotto; la maggior parte delle cause sono disallineamenti di lettore o impostazioni volute.",
    "Se ti serve solo finire, posizionare il testo sopra la pagina funziona su quasi ogni modulo, indipendentemente dal problema di fondo.",
    "L’aspetto e il comportamento di un modulo possono variare da un lettore di PDF all’altro, quindi «qui non funziona» raramente significa «è rotto ovunque».",
  ],
  mobileNote:
    "Molte segnalazioni di «modulo che non funziona» sono semplicemente un’anteprima email o un lettore di base che ignora i campi. Aprire il file nell’app PDF Editor attiva i campi interattivi dove esistono e ti lascia posizionare il testo sui moduli non interattivi o bloccati dove non esistono — sul dispositivo, senza inviare nulla altrove.",
  faq: [
    {
      q: "Perché il mio modulo PDF non funziona?",
      a: "È quasi sempre una di poche cose: il modulo è non interattivo e senza campi, il tuo lettore non disegna i campi, le risposte non si salvano, il modulo è in sola lettura, oppure usa funzioni che la tua app non supporta. Individua il sintomo, poi applica la soluzione corrispondente.",
    },
    {
      q: "Qual è la cosa più rapida da provare per prima?",
      a: "Apri lo stesso file in un’app PDF dedicata invece che in un’anteprima email o nel browser. Questo singolo passaggio risolve gran parte dei problemi di «modulo che non funziona», che sono in realtà disallineamenti di lettore.",
    },
    {
      q: "Come faccio a sapere se il modulo è rotto o è solo la mia app?",
      a: "Provalo in un’altra app PDF adeguata. Se funziona lì, il tuo lettore originale era il problema. Se fallisce ovunque, potrebbe essere un tipo di modulo avanzato o un file effettivamente danneggiato.",
    },
    {
      q: "Mi serve solo compilarlo — qual è la soluzione universale?",
      a: "Posiziona tu stesso testo e segni di spunta sopra la pagina con un editor di PDF. Funziona allo stesso modo su moduli non interattivi, bloccati e senza campi, indipendentemente dalla causa di fondo.",
    },
    {
      q: "Dove vado per il mio problema specifico?",
      a: "Usa i controlli qui sopra per far corrispondere il tuo sintomo — campi mancanti, non riesci a scrivere, non si salva, sola lettura, o compatibilità — e segui la guida collegata per quel problema, oppure la checklist di soluzioni consolidata.",
    },
  ],
  related: [
    {
      label: "Mancano i campi nel modulo PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Perché non riesco a scrivere in questo modulo PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Perché il modulo PDF non si salva",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Problemi di compatibilità dei moduli PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Risolvere gli errori nei moduli PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
