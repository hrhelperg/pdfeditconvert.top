import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Come ridurre la dimensione di un PDF su Android",
  description:
    "Comprimi un PDF su qualsiasi telefono Android con uno strumento del browser che non richiede installazione, o con l’app PDF Editor. Porta le scansioni sotto i limiti di mail e caricamento.",
  updated: "2026-05-23",
  intro: [
    "Android gestisce i PDF in modo diverso a seconda del telefono — Samsung, Pixel e Xiaomi nascondono le impostazioni rilevanti in posti diversi — ma l’esigenza è universale: un PDF scansionato o ricco di foto è troppo pesante per essere inviato via mail o caricato, e lo vuoi più piccolo. Il rimedio più affidabile non dipende affatto dalla marca del tuo telefono.",
    "Questa guida usa lo strumento gratuito Compress PDF, che gira nel tuo browser su qualsiasi dispositivo Android ed elabora il file in locale — nulla viene caricato. Copre anche l’app PDF Editor per l’uso offline e per i file protetti da password che il browser non può toccare.",
    "Poiché il percorso da browser è identico su ogni telefono Android, è il metodo da ricordare se cambi dispositivo o aiuti qualcuno con una marca diversa.",
  ],
  steps: [
    {
      title: "Individua il PDF",
      body: "Trova il documento nella tua app File, nei Download, o dovunque sia stato salvato — una scansione, un allegato salvato, un set di foto convertite.",
    },
    {
      title: "Apri lo strumento Compress PDF",
      body: "Vai allo strumento Compress PDF in Chrome o nel tuo browser. Funziona allo stesso modo su ogni telefono Android ed elabora il file sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il PDF e scegli un livello",
      body: "Seleziona il file e scegli un livello: Consigliato per la maggior parte dei casi, Forte se ti serve più piccolo. Basso mantiene il massimo dettaglio.",
    },
    {
      title: "Comprimi e rivedi",
      body: "Avvialo e controlla la dimensione prima e dopo. I PDF ricchi di immagini e scansionati di solito calano drasticamente in un solo passaggio.",
    },
    {
      title: "Salva o condividi il risultato",
      body: "Salva il file più piccolo sul dispositivo o condividilo direttamente via mail o app di messaggistica. Tieni l’originale finché non hai confermato che la copia si legge bene.",
    },
    {
      title: "Usa l’app per i file protetti o molto grandi",
      body: "Il browser non può comprimere i PDF protetti da password e può faticare con quelli molto grandi. L’app PDF Editor gestisce entrambi i casi offline.",
    },
  ],
  tips: [
    "Il metodo da browser si comporta in modo identico su Samsung, Pixel, Xiaomi e gli altri, quindi è quello da ricordare tra un dispositivo e l’altro.",
    "Se un PDF è enorme, quasi certamente sono le pagine scansionate o fotografate. Sono esattamente quelle che si comprimono meglio.",
    "La compressione trasforma le pagine in immagini, quindi la copia più piccola perde il testo selezionabile. Tieni l’originale se ti serve cercare o copiare da esso.",
    "Alcune fotocamere Android salvano in HEIF in modalità alta efficienza; le scansioni in JPG standard sono più facili da comprimere e condividere ampiamente.",
    "Salva il PDF compresso con un nuovo nome, così l’originale nitido resta sul dispositivo.",
  ],
  mobileNote:
    "Comprimere sul telefono è ciò che gli utenti Android vogliono davvero, e l’app PDF Editor lo fa offline senza caricamento, supporta i file protetti da password, e condivide direttamente nelle tue app. Per i documenti che riduci spesso, batte il riaprire il browser ogni volta.",
  faq: [
    {
      q: "Il metodo da browser funziona su ogni telefono Android?",
      a: "Sì. Poiché lo strumento Compress PDF gira nel browser, si comporta allo stesso modo su Samsung, Pixel, Xiaomi e qualsiasi altro dispositivo Android — a differenza delle funzioni integrate, che variano per marca.",
    },
    {
      q: "Posso comprimere un PDF su Android senza installare nulla?",
      a: "Sì. Lo strumento Compress PDF gira nel tuo browser ed elabora il file sul dispositivo, quindi non serve alcuna installazione.",
    },
    {
      q: "Il mio file viene caricato?",
      a: "No. La compressione avviene in locale sul tuo telefono; nulla viene inviato a un server, il che conta per i documenti personali.",
    },
    {
      q: "Il testo resterà selezionabile?",
      a: "No. Le pagine vengono ri-renderizzate come immagini durante la compressione, eliminando il livello di testo selezionabile. Tieni l’originale se ti serve.",
    },
    {
      q: "Come comprimo un PDF protetto da password su Android?",
      a: "Il browser non può elaborare i file protetti. Usa l’app PDF Editor, che li apre e comprime offline.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci nel tuo browser", path: "/compress-pdf" },
    { label: "Come ridurre la dimensione di un PDF su iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Come modificare un PDF su Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
