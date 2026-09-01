import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Come ridurre la dimensione di un PDF su iPhone",
  description:
    "Riduci un PDF sul tuo iPhone con uno strumento del browser o con l’app PDF Editor. Perché le scansioni dell’iPhone diventano enormi e come portarle sotto i limiti di invio.",
  updated: "2026-05-23",
  intro: [
    "Gli iPhone producono file splendidi ed enormi. La stessa fotocamera e lo stesso scanner ad alta risoluzione che rendono i tuoi documenti nitidi rendono anche i PDF pesanti — poche pagine scansionate possono superare un limite di mail prima ancora che tu abbia aggiunto altro. Quindi «rendi questo PDF più piccolo sul mio iPhone» è un’esigenza molto comune e molto specifica.",
    "Questa guida copre due percorsi affidabili che funzionano entrambi su iPhone. Il primo è lo strumento gratuito Compress PDF in Safari, che gira sul tuo dispositivo senza caricare nulla. Il secondo è l’app PDF Editor, che comprime offline e gestisce i file protetti da password, cosa che il browser non può fare.",
    "In entrambi i casi, l’obiettivo è lo stesso: un file abbastanza piccolo da inviare via mail o caricare, che resti comunque leggibile — senza mandare il tuo documento sul server di qualcun altro per arrivarci.",
  ],
  steps: [
    {
      title: "Trova il PDF in File",
      body: "Individua il documento nell’app File o dovunque si trovi — una scansione che hai fatto, un allegato salvato, un pacchetto di foto convertite.",
    },
    {
      title: "Apri lo strumento Compress PDF in Safari",
      body: "Vai allo strumento Compress PDF. Gira nel browser sul tuo iPhone ed elabora il file sul dispositivo — nulla viene caricato.",
    },
    {
      title: "Aggiungi il PDF e scegli un livello",
      body: "Tocca per selezionare il file, poi scegli un livello. Consigliato va bene per la maggior parte dei casi; scegli Forte solo se ti serve ancora più piccolo.",
    },
    {
      title: "Comprimi e controlla la dimensione",
      body: "Avvialo e leggi la dimensione prima e dopo. Le scansioni fatte con l’iPhone di solito calano molto in un solo passaggio, perché sono ricche di immagini.",
    },
    {
      title: "Salvalo in File o condividilo",
      body: "Usa l’icona di condivisione per salvare il PDF più piccolo in File o inviarlo direttamente. Tieni l’originale finché non hai confermato che il risultato si legge bene.",
    },
    {
      title: "Per i file protetti, usa l’app",
      body: "Il browser non può comprimere i PDF protetti da password. L’app PDF Editor li gestisce offline, ed è più veloce per i file che comprimi spesso.",
    },
  ],
  tips: [
    "Le scansioni dell’iPhone sono pesanti perché sono immagini ad alta risoluzione. Ed è anche per questo che si comprimono così bene — i risparmi maggiori sono proprio su questi file.",
    "Scattare i documenti in formato «Più compatibile» (Impostazioni → Fotocamera → Formati) produce JPG più facili da comprimere e condividere rispetto all’HEIC.",
    "La compressione trasforma le pagine in immagini, quindi la copia più piccola non avrà testo selezionabile. Tieni l’originale se ti serve cercare o copiare da esso.",
    "La memoria del browser su un telefono è più limitata che su un portatile. Per i PDF molto grandi, l’app PDF Editor è il percorso più affidabile.",
    "Salva sempre il file compresso con un nuovo nome, così il tuo originale nitido resta intatto sul dispositivo.",
  ],
  mobileNote:
    "Questo è un compito pensato prima di tutto per il telefono, e l’app PDF Editor è costruita apposta: comprimi offline, senza caricamento, supporto per i file protetti, e un passaggio diretto a Mail, Messaggi o al menu di condivisione. Per i documenti che riduci regolarmente, è più veloce del browser ogni volta.",
  faq: [
    {
      q: "Perché i miei PDF sull’iPhone sono così pesanti?",
      a: "Le scansioni e le foto dell’iPhone sono immagini ad alta risoluzione, e un PDF fatto con diverse di esse è essenzialmente una pila di immagini pesanti. Ecco perché superano i limiti di mail — e perché si comprimono così efficacemente.",
    },
    {
      q: "Posso comprimere un PDF su iPhone senza un’app?",
      a: "Sì. Lo strumento Compress PDF gira in Safari ed elabora il file sul tuo dispositivo, così puoi ridurre un PDF senza installare nulla.",
    },
    {
      q: "Il mio documento viene caricato quando uso lo strumento del browser?",
      a: "No. Viene elaborato in locale sul tuo iPhone. Nulla viene inviato a un server, il che conta per documenti personali o finanziari.",
    },
    {
      q: "Il testo resterà selezionabile dopo?",
      a: "No. La compressione ri-renderizza le pagine come immagini, eliminando il livello di testo selezionabile. Tieni l’originale se ti serve testo ricercabile.",
    },
    {
      q: "E i PDF protetti da password?",
      a: "Il browser non può elaborarli. Usa l’app PDF Editor, che apre e comprime i file protetti offline.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci nel tuo browser", path: "/compress-pdf" },
    { label: "Come ridurre la dimensione di un PDF su Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Come modificare un PDF su iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
