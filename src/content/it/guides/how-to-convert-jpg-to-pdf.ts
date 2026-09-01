import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Come convertire un JPG in PDF — da immagine a documento",
  description:
    "Riunisci una o più foto JPG in un unico PDF nel tuo browser. Ideale per scontrini, documenti d’identità e documenti fotografati, con note oneste su qualità e HEIC dell’iPhone.",
  updated: "2026-05-23",
  intro: [
    "Il JPG è il formato che ti restituiscono la fotocamera e la maggior parte dei siti web, il che lo rende il punto di partenza più comune per «trasforma questo in un PDF». Il motivo per convertire è quasi sempre lo stesso: un singolo JPG è scomodo da inviare come documento. Più JPG sono anche peggio — cinque foto di scontrini separate in una mail sono qualcosa che un commercialista sopporta a fatica. Un unico PDF, con le pagine in ordine, è ciò che le persone vogliono davvero ricevere.",
    "Questa guida usa lo strumento gratuito Image to PDF, che combina i file JPG in un unico PDF direttamente nel tuo browser — nulla viene caricato. È ideale per scontrini, foto di documenti d’identità, screenshot e immagini di documenti cartacei che devi raggruppare e inviare.",
    "Il JPG è un formato fotografico con perdita, quindi vale la pena sapere cosa si mantiene bene e cosa no, prima di affidarti a esso per qualcosa che deve restare leggibile.",
  ],
  steps: [
    {
      title: "Apri lo strumento Image to PDF",
      body: "Vai allo strumento Image to PDF nel tuo browser. Accetta JPG, PNG e WebP e funziona interamente sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi i tuoi file JPG",
      body: "Trascina le tue foto nella zona di rilascio o fai clic per sceglierle. Aggiungine quante ne servono; ogni immagine diventa una pagina del PDF.",
    },
    {
      title: "Mettile nell’ordine giusto",
      body: "Usa le frecce su e giù su ogni riga per sequenziare le pagine. Per un documento di più pagine, questo è il passaggio più importante — la pagina due di un contratto dietro la pagina uno.",
    },
    {
      title: "Crea il PDF",
      body: "Fai clic su Crea PDF. Ogni immagine viene posizionata sulla propria pagina, dimensionata in base alla foto, e il file combinato viene generato in locale.",
    },
    {
      title: "Scarica e rinomina",
      body: "Il PDF si scarica automaticamente. Dagli un nome descrittivo prima di inviarlo — «Scontrini-Marzo.pdf» è meglio di «IMG_4821.pdf» nella casella di qualcuno.",
    },
    {
      title: "Comprimilo se lo invii via mail",
      body: "I PDF basati su foto diventano grandi in fretta. Se il file supera il tipico limite di 25 MB per gli allegati, passalo prima dallo strumento Compress PDF.",
    },
  ],
  tips: [
    "Ritaglia e raddrizza ogni foto prima di convertire. Lo strumento dimensiona la pagina in base all’immagine, quindi una foto storta significa una pagina storta.",
    "Una luce buona e uniforme batte qualsiasi filtro per le foto di documenti. Evita le ombre della tua mano o del telefono sulla pagina.",
    "Il JPG comprime bene le foto ma sfoca il testo fine e i bordi netti. Per screenshot o qualsiasi cosa con lettere nitide, il PNG mantiene il testo più pulito — vedi la guida PNG in PDF.",
    "Le foto dell’iPhone sono spesso salvate come HEIC, non JPG. Lo strumento nel browser richiede JPG, PNG o WebP, quindi passa la fotocamera su «Più compatibile» nelle Impostazioni, oppure usa l’app PDF Editor, che legge direttamente l’HEIC.",
    "La foto di un documento non è una scansione ricercabile — non c’è un livello di testo, quindi non puoi cercare o copiare le parole. Usa un flusso di scansione se questo ti serve.",
  ],
  mobileNote:
    "La maggior parte dei JPG nasce su un telefono, ed è esattamente lì che l’app PDF Editor dà il meglio: prende le foto direttamente dal rullino (HEIC incluso), le trasforma in un PDF e può scansionare pagine nuove con rilevamento dei bordi — senza passare dal computer.",
  faq: [
    {
      q: "Posso combinare più JPG in un unico PDF?",
      a: "Sì — è l’uso principale. Aggiungi tutte le tue immagini, trascinale nell’ordine giusto, e diventano pagine consecutive di un unico PDF.",
    },
    {
      q: "Le mie foto vengono caricate da qualche parte?",
      a: "No. La conversione avviene nel tuo browser, sul tuo stesso dispositivo. Le tue immagini non lo lasciano mai, il che conta per documenti d’identità e file personali.",
    },
    {
      q: "Le mie foto dell’iPhone non si caricano — perché?",
      a: "Probabilmente sono file HEIC, che lo strumento nel browser non legge. Cambia il formato della fotocamera in «Più compatibile» in Impostazioni → Fotocamera → Formati, oppure usa l’app PDF Editor, che gestisce l’HEIC.",
    },
    {
      q: "Il PDF sarà ricercabile?",
      a: "No. Una foto convertita è un’immagine senza livello di testo, quindi le parole non si possono cercare né selezionare. Per un documento ricercabile, scansiona con il riconoscimento del testo usando l’app PDF Editor.",
    },
    {
      q: "Perché il mio PDF è così pesante?",
      a: "Le foto ad alta risoluzione del telefono sono pesanti, e diverse di esse si sommano in fretta. Passa il risultato dallo strumento Compress PDF per rientrare nei limiti di mail e caricamento.",
    },
  ],
  related: [
    { label: "Image to PDF — combina i JPG nel tuo browser", path: "/image-to-pdf" },
    { label: "Compress PDF — riduci il risultato per la mail", path: "/compress-pdf" },
    { label: "Come convertire PNG in PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Come convertire foto in PDF su iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
