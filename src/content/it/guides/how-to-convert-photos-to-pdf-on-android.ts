import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Come convertire foto in PDF su Android",
  description:
    "Trasforma le foto Android in un unico PDF con uno strumento del browser o con la funzione integrata di stampa in PDF. Più il metodo più rapido dall’app, con la scansione.",
  updated: "2026-05-23",
  intro: [
    "Android ti offre più di un modo per trasformare delle foto in un PDF, il che è insieme un pregio e una fonte di confusione — i passaggi cambiano tra Samsung, Pixel, Xiaomi e gli altri. La buona notizia è che c’è un percorso che funziona allo stesso modo su ogni telefono Android: uno strumento da browser che gira sul tuo dispositivo e non gli importa chi ha prodotto il telefono.",
    "Questa guida copre quel percorso universale da browser usando lo strumento gratuito Image to PDF, il trucco integrato «Stampa in PDF» che si nasconde nel menu di condivisione, e l’app PDF Editor per quando vuoi foto, scansione e firma nello stesso posto.",
    "Le foto Android sono di solito salvate come JPG, quindi in genere eviti i grattacapi di formato che colpiscono chi usa iPhone — ma segnaleremo comunque l’unica eccezione da conoscere.",
  ],
  steps: [
    {
      title: "Apri lo strumento Image to PDF nel tuo browser",
      body: "Vai allo strumento Image to PDF in Chrome o nel browser che preferisci. Funziona su qualsiasi telefono Android, indipendentemente dalla marca, ed elabora le immagini sul tuo dispositivo — nulla viene caricato.",
    },
    {
      title: "Aggiungi le tue foto",
      body: "Tocca per selezionare le foto dalla galleria o dai file. Funzionano sia JPG sia PNG; ogni immagine diventa una pagina.",
    },
    {
      title: "Ordina le pagine",
      body: "Usa le frecce per disporre le foto. Per un documento di più pagine, ricontrolla la sequenza prima di creare il file.",
    },
    {
      title: "Crea e salva il PDF",
      body: "Tocca Crea PDF. Il file si scarica sul telefono; salvalo in File o nel tuo cloud preferito, oppure condividilo subito.",
    },
    {
      title: "Alternativa: usa Stampa in PDF",
      body: "Apri le foto in Google Foto o nella tua galleria, tocca Condividi → Stampa, poi scegli «Salva come PDF» come stampante. Questo raggruppa le immagini selezionate in un PDF senza alcuno strumento, anche se hai meno controllo sull’ordine.",
    },
    {
      title: "Oppure usa l’app PDF Editor",
      body: "L’app combina le foto della galleria in un PDF, scansiona pagine nuove con rilevamento automatico dei bordi, e ti lascia firmare — tutto offline, tutto sul dispositivo.",
    },
  ],
  tips: [
    "Il percorso da browser si comporta in modo identico su Samsung, Pixel, Xiaomi e altri, quindi è quello da ricordare se cambi telefono o aiuti qualcuno con una marca diversa.",
    "Il trucco Stampa in PDF è ottimo in caso di emergenza, ma dà poco controllo sull’ordine delle pagine — usa lo strumento Image to PDF quando la sequenza conta.",
    "Ritaglia le foto nella galleria prima. Le pagine vengono dimensionate sull’immagine, quindi rifinire dà un documento più pulito.",
    "La maggior parte delle fotocamere Android salva in JPG, ma alcune salvano in HEIF/HEIC in modalità alta efficienza. Se una foto non si carica, controlla le impostazioni della fotocamera o usa l’app PDF Editor.",
    "Grandi gallerie di foto ad alta risoluzione producono PDF pesanti. Comprimi il risultato prima di inviarlo via mail.",
  ],
  mobileNote:
    "Il lavoro sui documenti Android avviene sul telefono, e l’app PDF Editor lo mantiene lì: combina le foto della galleria, scansiona la carta con rilevamento dei bordi, firma e condividi — offline e senza caricare nulla. Per i compiti ripetuti è più rapida del browser ogni volta.",
  faq: [
    {
      q: "Il metodo da browser funziona su ogni telefono Android?",
      a: "Sì. Poiché lo strumento gira nel browser, si comporta allo stesso modo su Samsung, Pixel, Xiaomi e qualsiasi altro dispositivo Android — a differenza delle funzioni integrate, che variano per marca.",
    },
    {
      q: "Qual è la differenza tra Stampa in PDF e lo strumento?",
      a: "Stampa in PDF è integrato nel menu di condivisione di Android e non serve alcuno strumento, ma offre poco controllo sull’ordine delle pagine. Lo strumento Image to PDF ti permette di sequenziare le pagine con precisione, il che conta per i documenti di più pagine.",
    },
    {
      q: "Le mie foto vengono caricate da qualche parte?",
      a: "No. Sia lo strumento Image to PDF sia l’app PDF Editor elaborano le foto sul tuo dispositivo. Le tue immagini restano private.",
    },
    {
      q: "Le mie foto non si caricano nello strumento — perché?",
      a: "Alcuni telefoni Android salvano in HEIF/HEIC in modalità alta efficienza, che gli strumenti da browser potrebbero non leggere. Passa la fotocamera al JPG standard, oppure usa l’app PDF Editor.",
    },
    {
      q: "Posso rendere il PDF ricercabile?",
      a: "Una foto semplice non ha un livello di testo. Per ottenere un testo ricercabile, scansiona il documento con il riconoscimento del testo dell’app PDF Editor invece di limitarti a fotografarlo.",
    },
  ],
  related: [
    { label: "Image to PDF — converti le foto nel tuo browser", path: "/image-to-pdf" },
    { label: "Scan to PDF — cattura la carta con la fotocamera", path: "/scan-to-pdf" },
    { label: "Come convertire foto in PDF su iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "Come convertire JPG in PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
