import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Convertitore PDF",
    h1: "Converti i PDF nel formato di cui hai davvero bisogno.",
    highlight: "davvero",
    lead: "Da PDF a Word per modificare. Da PDF a JPG per le app di messaggistica. Da Word e immagini a PDF per archiviare. Un’unica app, risultati rapidi, senza caricare nulla su server sconosciuti.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Il caos delle conversioni in cui finiscono quasi tutti",
    paragraphs: [
      "I PDF vanno benissimo finché qualcuno non chiede il file in Word. O finché un’app di messaggistica non accetta altro che JPG. O finché non devi unire delle ricevute (che sono immagini) con un preventivo (che è un PDF) in un unico documento pronto da inviare.",
      "I siti pubblici per convertire PDF fanno il lavoro, ma creano nuovi problemi. Caricano il tuo file, a volte lo conservano per ore, spesso mettono a pagamento le conversioni oltre una certa dimensione e raramente producono un DOCX pulito. L’impaginazione si sposta, i font vengono sostituiti, le tabelle si rompono.",
      "Un convertitore nativo fa il lavoro sul tuo dispositivo. Lo stesso motore che impagina il PDF lo ricostruisce nel formato scelto. Le tabelle restano allineate, i font vengono mappati in modo intelligente, e non consegni mai un contratto sensibile a un sito gratuito che si finanzia con la pubblicità.",
    ],
  },
  features: {
    heading: "Converti in entrambe le direzioni",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Documenti Word modificabili che mantengono intatti impaginazione, font, tabelle e immagini.",
      },
      {
        icon: "Image",
        title: "PDF → JPG e PNG",
        body: "Esporta singole pagine o tutte le pagine come immagini separate, pronte per la messaggistica o le presentazioni.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Estrai le tabelle in vere celle XLSX invece di incollare screenshot.",
      },
      {
        icon: "FilePlus",
        title: "Word e immagini → PDF",
        body: "Trasforma un DOCX, la foto di una ricevuta o uno screenshot in un PDF pulito in pochi secondi.",
      },
      {
        icon: "ScanText",
        title: "OCR per PDF scansionati",
        body: "Esegui il riconoscimento del testo sui documenti scansionati, così il risultato è selezionabile e ricercabile.",
      },
      {
        icon: "Layers",
        title: "Conversione in batch",
        body: "Metti in coda più file contemporaneamente. L’app li elabora localmente in background.",
      },
    ],
  },
  steps: {
    heading: "Come convertire un PDF dal telefono",
    items: [
      {
        title: "Apri l’app PDF Editor",
        body: "Tocca il riquadro Converti nella schermata home.",
      },
      {
        title: "Scegli il file di partenza",
        body: "Seleziona un PDF, un DOCX, un’immagine o qualsiasi documento supportato dall’app.",
      },
      {
        title: "Scegli il formato di destinazione",
        body: "Word, Excel, JPG, PNG, PowerPoint: qualsiasi cosa serva a chi riceve il file.",
      },
      {
        title: "Tocca Converti",
        body: "La conversione avviene sul dispositivo. La maggior parte dei file viene elaborata in pochi secondi.",
      },
      {
        title: "Salva o condividi",
        body: "Salva in File, sincronizza su Drive o iCloud, oppure condividi direttamente via Mail o messaggistica.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Convertire mentre sei in movimento",
    body: "Il compito di conversione più realistico non è «trasformare questo bilancio annuale in un documento Word». È «trasformare la foto di questa ricevuta d’albergo in un PDF da allegare a una nota spese» o «estrarre queste tre tabelle da un preventivo per incollarle in un foglio di calcolo». Entrambi succedono sul telefono, tra un’attività e l’altra, e vanno fatti subito.",
  },
  faq: [
    {
      q: "Quali formati sono supportati?",
      a: "In entrambe le direzioni: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG e testo semplice. Word, immagini e alcuni formati comuni possono essere trasformati in PDF.",
    },
    {
      q: "Quanto è accurata la conversione da PDF a Word?",
      a: "Molto accurata per i PDF con testo: tabelle, elenchi e titoli vengono mantenuti. Le impaginazioni complesse a più colonne potrebbero richiedere qualche piccolo ritocco. I PDF scansionati richiedono prima l’OCR.",
    },
    {
      q: "La conversione avviene offline?",
      a: "Le conversioni standard vengono eseguite localmente. Alcune funzioni avanzate (OCR di alta qualità per alcune lingue) potrebbero usare il cloud: l’app te lo comunica prima di inviare qualsiasi cosa.",
    },
    {
      q: "I miei font sopravviveranno alla conversione?",
      a: "L’app mappa i font in modo intelligente. Se un font non è installato sul dispositivo di destinazione, viene usata la corrispondenza più vicina, così il documento resta leggibile correttamente.",
    },
    {
      q: "Posso convertire PDF protetti?",
      a: "Se il PDF è protetto da password, dovrai inserirla prima della conversione. I PDF con restrizioni di modifica in genere si convertono comunque, se conosci la password di apertura.",
    },
  ],
  related: [
    { label: "PDF o DOCX: quale scegliere", path: "/guides/pdf-vs-docx" },
    { label: "Confronto PDF e JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Modifica i PDF dopo la conversione", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Converti i PDF senza caricarli da nessuna parte.",
    sub: "Gratis su iOS e Android. Le conversioni avvengono sul dispositivo.",
  },
};

export default content;
