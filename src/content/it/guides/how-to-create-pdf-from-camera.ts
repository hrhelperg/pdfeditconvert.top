import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "Come creare un PDF con la fotocamera del telefono",
  description:
    "Trasforma uno scatto in un PDF, e scopri perché una scansione vera batte una foto al volo. Cattura rapida per scontrini e lavagne, scansione per i documenti.",
  updated: "2026-05-23",
  intro: [
    "Puntare la fotocamera su qualcosa e ottenere un PDF è il modo più rapido per catturare il mondo fisico come documento — uno scontrino, una lavagna dopo una riunione, una pagina di un libro, un avviso attaccato al muro. Ma c’è una differenza reale tra una foto grezza incapsulata in un PDF e una vera scansione, e sapere di quale hai bisogno ti risparmia un risultato storto e pieno di riflessi.",
    "Questa guida copre entrambe le strade: la cattura rapida, dove una foto scattata con la fotocamera diventa una pagina PDF usando lo strumento gratuito Immagine in PDF, e la scansione vera, dove l’app PDF Editor rileva i bordi del documento, corregge la prospettiva e può riconoscere il testo. Entrambe funzionano sul tuo dispositivo senza inviare nulla a un server.",
    "Per uno scatto che ti serve solo archiviato, la cattura rapida basta. Per qualunque cosa debba avere l’aspetto di un vero documento — piatto, squadrato, leggibile — la scansione vale il minuto in più.",
  ],
  steps: [
    {
      title: "Decidi: cattura rapida o scansione vera",
      body: "Uno scontrino per i tuoi archivi può essere una foto veloce. Un documento che invierai o che devi leggere con chiarezza merita una scansione vera, con rilevamento dei bordi e correzione della prospettiva.",
    },
    {
      title: "Cattura rapida: fotografa bene",
      body: "Scatta dall’alto in verticale, con luce uniforme, riempiendo l’inquadratura con la pagina ed evitando le ombre di mano o telefono. Una buona foto fa una buona pagina PDF.",
    },
    {
      title: "Trasforma la foto in un PDF",
      body: "Apri lo strumento Immagine in PDF, aggiungi la foto (o più foto), mettile nell’ordine giusto e crea il PDF. Ogni scatto diventa una pagina.",
    },
    {
      title: "Scansione vera: usa lo scanner dell’app",
      body: "Nell’app PDF Editor, usa la funzione di scansione. Trova automaticamente i bordi del documento, raddrizza la prospettiva e ripulisce la pagina, così sembra una vera scansione e non uno scatto al volo.",
    },
    {
      title: "Cattura più pagine in sequenza",
      body: "Per un documento di più pagine, lo scanner ti permette di scattare pagina dopo pagina in un unico PDF, mantenendo l’ordine man mano che procedi.",
    },
    {
      title: "Rendilo ricercabile, se ti serve",
      body: "Una foto grezza non ha alcun livello di testo. L’app può eseguire il riconoscimento del testo così le pagine catturate diventano ricercabili — utile per qualunque cosa dovrai poi ritrovare in base al suo contenuto.",
    },
  ],
  tips: [
    "Una foto grezza è l’immagine di un documento; una scansione è una versione corretta, appiattita e leggibile. Adatta lo sforzo a come userai il risultato.",
    "Una luce uniforme e un’angolazione dall’alto fanno più per una pagina catturata di qualsiasi filtro. Riflessi e ombre sono più facili da evitare che da correggere.",
    "Uno sfondo scuro e uniforme dietro la pagina aiuta il rilevamento dei bordi a trovare il documento con precisione.",
    "Sia le foto catturate sia le scansioni possono essere pesanti — comprimi il PDF se è destinato a una mail o a un portale di caricamento.",
    "La cattura rapida non ha testo ricercabile. Se dovrai cercare nel documento in seguito, scansionalo con il riconoscimento del testo invece di limitarti a fotografarlo.",
  ],
  mobileNote:
    "La fotocamera è già tra le tue mani, ed è per questo che catturare documenti è un compito nato per il telefono. L’app PDF Editor scansiona con rilevamento automatico dei bordi, cattura multi-pagina e riconoscimento del testo — tutto offline — trasformando sul momento qualunque cosa hai davanti in un PDF pulito e pronto da condividere.",
  faq: [
    {
      q: "Che differenza c’è tra fotografare e scansionare un documento?",
      a: "Una foto è un’immagine grezza incapsulata in un PDF — va bene per archivi veloci. Una scansione rileva i bordi della pagina, corregge la prospettiva e la appiattisce, così sembra un vero documento. Scansiona tutto ciò che invierai o che devi leggere con chiarezza.",
    },
    {
      q: "Posso creare un PDF da una singola foto scattata con la fotocamera?",
      a: "Sì. Scatta la foto, poi usa lo strumento Immagine in PDF per trasformarla (o trasformarne diverse) in un PDF, una pagina per ogni scatto.",
    },
    {
      q: "Un PDF creato con la fotocamera sarà ricercabile?",
      a: "Non se parti da una foto grezza — non c’è alcun livello di testo. L’app PDF Editor può eseguire il riconoscimento del testo durante la scansione, così il risultato è ricercabile.",
    },
    {
      q: "I miei documenti catturati vengono caricati da qualche parte?",
      a: "No. Sia lo strumento Immagine in PDF sia lo scanner dell’app funzionano sul tuo dispositivo, quindi i documenti catturati restano privati.",
    },
    {
      q: "Come catturo più pagine in un unico PDF?",
      a: "Usa lo scanner dell’app, che ti permette di scattare pagina dopo pagina in un unico documento mantenendo l’ordine. Anche lo strumento Immagine in PDF combina più foto in un solo file.",
    },
  ],
  related: [
    { label: "Scansiona in PDF — cattura la carta con la fotocamera", path: "/scan-to-pdf" },
    { label: "Immagine in PDF — trasforma le foto in un PDF", path: "/image-to-pdf" },
    { label: "Come scansionare documenti in PDF dal telefono", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Come convertire foto in PDF su iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Scansiona in PDF", path: "/scan-to-pdf" },
};

export default content;
