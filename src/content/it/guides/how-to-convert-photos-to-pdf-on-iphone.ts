import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Come convertire foto in PDF su iPhone (risolvi il problema HEIC)",
  description:
    "Trasforma le foto dell’iPhone in un unico PDF, incluso il problema del formato HEIC che manda in confusione tanti. La via del browser e quella più rapida dall’app.",
  updated: "2026-05-23",
  intro: [
    "Trasformare delle foto in un PDF su iPhone è qualcosa a cui si ricorre di continuo — un contratto fotografato, una pila di scontrini per una nota spese, i due lati di un documento d’identità per un modulo. Il compito è semplice, ma c’è un dettaglio specifico dell’iPhone che causa la maggior parte della frustrazione: di default il tuo iPhone salva le foto come HEIC, non JPG, e molti strumenti non leggono l’HEIC.",
    "Questa guida copre due percorsi affidabili. Il primo usa lo strumento gratuito Image to PDF in Safari, che funziona una volta che le tue foto sono in un formato supportato. Il secondo usa l’app PDF Editor, che legge l’HEIC direttamente dal rullino fotografico e salta del tutto il balletto dei formati.",
    "Scegli quello più adatto al momento — ma conosci prima il dettaglio dell’HEIC, perché è quello che trasforma un compito di 30 secondi in uno confuso.",
  ],
  steps: [
    {
      title: "Decidi il formato delle tue foto",
      body: "Apri Impostazioni → Fotocamera → Formati. «Alta efficienza» salva in HEIC; «Più compatibile» salva in JPG. Passare a Più compatibile fa sì che le nuove foto funzionino ovunque, inclusi gli strumenti da browser.",
    },
    {
      title: "Converti le foto HEIC già scattate, se serve",
      body: "Hai già scattato in HEIC? Puoi riesportarle come JPG (aprile in Foto, condividi, scegli un’opzione che produce JPG) oppure passare direttamente al percorso con l’app descritto sotto, che legge l’HEIC direttamente.",
    },
    {
      title: "Apri lo strumento Image to PDF in Safari",
      body: "Vai allo strumento Image to PDF. Accetta JPG, PNG e WebP e funziona interamente sul tuo dispositivo — nulla viene caricato.",
    },
    {
      title: "Aggiungi le tue foto e ordinale",
      body: "Tocca per scegliere le foto dalla tua libreria, poi usa le frecce per sequenziarle. L’ordine delle pagine conta per i documenti di più pagine, come un contratto in due pagine.",
    },
    {
      title: "Crea e salva il PDF",
      body: "Tocca Crea PDF. Quando si scarica, usa l’icona di condivisione per salvarlo nell’app File o inviarlo direttamente.",
    },
    {
      title: "Oppure usa l’app PDF Editor per HEIC e scansione",
      body: "L’app legge le foto HEIC dal rullino, le trasforma in un PDF, e può anche catturare pagine nuove con rilevamento dei bordi — senza alcuna conversione di formato.",
    },
  ],
  tips: [
    "La causa numero uno di «le mie foto non si convertono» su iPhone è l’HEIC. Passa a Più compatibile, oppure usa l’app, e il problema sparisce.",
    "Ritaglia ogni foto nell’app Foto prima di convertire — la pagina viene dimensionata sull’immagine, quindi rifinire lo sfondo dà un documento più ordinato.",
    "Per scontrini e documenti d’identità, scatta su una superficie scura e piatta con luce uniforme. Riflessi e ombre sono più difficili da correggere che da evitare.",
    "Una foto trasformata in PDF non è una scansione ricercabile. Se ti serve cercare il testo, usa la funzione di scansione dell’app, che può riconoscere il testo.",
    "Se il PDF finito è troppo grande da inviare via mail, passalo dallo strumento Compress PDF — le foto del telefono producono pagine pesanti.",
  ],
  mobileNote:
    "Tutto questo flusso vive sul tuo telefono, ed è esattamente ciò per cui è pensata l’app PDF Editor: HEIC direttamente dal rullino, conversione sul dispositivo senza nulla caricato, più scansione e firma nello stesso posto. Per tutto ciò che fai più di una volta, è la strada più veloce.",
  faq: [
    {
      q: "Perché le mie foto dell’iPhone non si caricano nel convertitore?",
      a: "Sono salvate come HEIC, che la maggior parte degli strumenti da browser non legge. Passa a «Più compatibile» in Impostazioni → Fotocamera → Formati per le nuove foto, oppure usa l’app PDF Editor, che legge l’HEIC direttamente.",
    },
    {
      q: "Posso combinare più foto in un unico PDF?",
      a: "Sì. Aggiungile tutte, trascinale nell’ordine giusto, e ogni foto diventa una pagina di un unico PDF.",
    },
    {
      q: "Le mie foto vengono caricate su un server?",
      a: "No. Lo strumento da browser elabora tutto sul tuo dispositivo, e lo fa anche l’app. Le tue foto restano private — importante per documenti d’identità e file personali.",
    },
    {
      q: "Il PDF sarà ricercabile?",
      a: "Non a partire da una semplice foto — non c’è un livello di testo. Usa la funzione di scansione nell’app PDF Editor per produrre un documento con testo riconosciuto e ricercabile.",
    },
    {
      q: "Il PDF è troppo grande da inviare via mail — cosa faccio?",
      a: "Le foto ad alta risoluzione dell’iPhone producono pagine pesanti. Passa il file dallo strumento Compress PDF per rientrare nel limite degli allegati.",
    },
  ],
  related: [
    { label: "Image to PDF — converti le foto nel tuo browser", path: "/image-to-pdf" },
    { label: "Scan to PDF — cattura la carta con la fotocamera", path: "/scan-to-pdf" },
    { label: "Come convertire foto in PDF su Android", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "Come convertire JPG in PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
