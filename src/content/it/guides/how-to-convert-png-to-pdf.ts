import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Come convertire un PNG in PDF — screenshot e grafiche nitide",
  description:
    "Trasforma i tuoi screenshot, diagrammi e grafiche PNG in un unico PDF nel tuo browser. Perché il PNG mantiene il testo nitido, e cosa succede alla trasparenza.",
  updated: "2026-05-23",
  intro: [
    "Il PNG è il formato che ottieni quando fai uno screenshot, esporti un grafico o salvi un’immagine con bordi netti. A differenza del JPG, è senza perdita, quindi testo e linee fini restano nitidi invece di essere sfocati dalla compressione. Questo rende il PNG il punto di partenza giusto quando vuoi raggruppare screenshot o diagrammi in un PDF che resti leggibile.",
    "Questa guida usa lo strumento gratuito Image to PDF per combinare file PNG in un unico documento, direttamente nel tuo browser senza caricare nulla. Casi tipici: una sequenza di screenshot dell’interfaccia per una revisione, grafici esportati per un report, oppure un’immagine che a qualcuno serve come file stampabile e condivisibile, non come immagine isolata.",
    "C’è una particolarità tipica del PNG che vale la pena conoscere — la trasparenza — e vedremo cosa le succede quando un PNG diventa una pagina di un PDF.",
  ],
  steps: [
    {
      title: "Apri lo strumento Image to PDF",
      body: "Vai allo strumento Image to PDF nel tuo browser. Gestisce PNG, JPG e WebP, e funziona interamente sul tuo dispositivo, senza caricamento né account.",
    },
    {
      title: "Aggiungi i tuoi file PNG",
      body: "Trascina gli screenshot o le grafiche nella zona di rilascio, oppure fai clic per selezionarli. Ogni PNG diventa una pagina del PDF risultante.",
    },
    {
      title: "Ordina le pagine",
      body: "Usa le frecce su e giù per disporre gli screenshot nella sequenza che racconta la storia — il passaggio uno prima del passaggio due.",
    },
    {
      title: "Genera il PDF",
      body: "Fai clic su Crea PDF. Lo strumento posiziona ogni immagine sulla propria pagina, alle dimensioni dell’immagine, e costruisce il file combinato in locale.",
    },
    {
      title: "Scarica il documento",
      body: "Il PDF si scarica automaticamente. Rinominalo in base al contenuto, così è facile da trovare e chiaro per chiunque lo apra.",
    },
    {
      title: "Controlla che le pagine siano nitide",
      body: "Apri il PDF e fai zoom su un testo qualsiasi. Il PNG mantiene le lettere nitide, quindi gli screenshot di dashboard, codice o termini dovrebbero restare leggibili.",
    },
  ],
  tips: [
    "Il PNG è la scelta migliore rispetto al JPG ogni volta che l’immagine contiene testo, interfaccia o linee nette — la compressione del JPG ammorbidisce esattamente quei bordi.",
    "Le aree trasparenti di un PNG non restano trasparenti in una pagina PDF; vengono renderizzate su sfondo bianco. Se hai progettato un logo su sfondo trasparente, finirà su bianco, il che va bene nella maggior parte dei casi.",
    "Gli screenshot a pagina intera possono essere alti e stretti. Si convertono senza problemi, ma valuta di ritagliare la parte che conta, così la pagina non è per lo più vuota.",
    "I file PNG sono più pesanti dei JPG per la stessa immagine. Una lunga serie di screenshot ad alta risoluzione può produrre un PDF corposo — comprimilo se lo invii via mail.",
    "Per una dimensione di pagina uniforme (tutto adattato ad A4) invece di pagine dimensionate su ogni immagine, l’app PDF Editor ti dà quel controllo.",
  ],
  mobileNote:
    "Gli screenshot si accumulano sui telefoni. L’app PDF Editor trasforma un gruppo di screenshot in un unico PDF in pochi tocchi, e ti permette di annotare o evidenziare la parte importante prima di condividere — comodo per segnalazioni di bug e revisioni rapide in mobilità.",
  faq: [
    {
      q: "Perché scegliere PNG invece di JPG per un PDF?",
      a: "Il PNG è senza perdita, quindi testo, screenshot e diagrammi restano nitidi. Il JPG è con perdita e ammorbidisce i bordi fini. Se le tue immagini contengono lettere o interfaccia, il PNG produce un PDF più pulito.",
    },
    {
      q: "Cosa succede agli sfondi trasparenti?",
      a: "Una pagina PDF non è trasparente, quindi le aree trasparenti vengono renderizzate su bianco. Un logo o un’icona con sfondo trasparente finirà semplicemente su una pagina bianca.",
    },
    {
      q: "I miei file vengono caricati?",
      a: "No. Tutto avviene nel tuo browser, sul tuo dispositivo. I tuoi screenshot e le tue grafiche non lo lasciano mai.",
    },
    {
      q: "Posso mescolare PNG e JPG nello stesso PDF?",
      a: "Sì. Lo strumento accetta PNG, JPG e WebP insieme, quindi puoi combinare uno screenshot, una foto e un grafico esportato in un unico documento.",
    },
    {
      q: "Il PDF è venuto grande — cosa posso fare?",
      a: "Le pagine PNG sono pesanti. Passa il file dallo strumento Compress PDF per rientrare nei limiti di mail e caricamento, accettando un piccolo compromesso sulla qualità.",
    },
  ],
  related: [
    { label: "Image to PDF — combina i PNG nel tuo browser", path: "/image-to-pdf" },
    { label: "PDF in immagini — l’operazione inversa", path: "/pdf-to-images" },
    { label: "Come convertire JPG in PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Come convertire WebP in PDF", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
