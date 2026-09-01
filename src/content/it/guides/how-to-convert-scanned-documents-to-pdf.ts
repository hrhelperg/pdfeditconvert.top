import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Come convertire documenti scansionati in PDF",
  description:
    "Hai già immagini di scansione o foto della carta? Riuniscile in un PDF nel tuo browser, e scopri cosa fa l’OCR e perché le scansioni ne hanno bisogno per essere ricercabili.",
  updated: "2026-05-23",
  intro: [
    "C’è una differenza importante tra scansionare un documento e convertire uno che hai già scansionato. Se hai una pila fresca di carta, ti serve un flusso di scansione. Ma spesso le immagini ce le hai già — uno scanner piano ha riversato una cartella di JPEG, un collega ti ha inviato via mail le foto di un modulo firmato, oppure il rullino del telefono è pieno di foto di scartoffie. Il compito ora è raccogliere tutto in un unico PDF ordinato.",
    "Questa guida copre esattamente questo: combinare le immagini di scansione che hai già in un unico PDF usando lo strumento gratuito Image to PDF, che gira nel tuo browser senza caricare nulla. Spiega anche il punto in cui molti sbagliano — che una scansione convertita è un’immagine del testo, non testo ricercabile — e cosa fare se ti servono le parole vere e proprie.",
    "Se devi ancora catturare la carta, consulta la guida dedicata alla scansione; questa parte dal presupposto che le immagini esistano già.",
  ],
  steps: [
    {
      title: "Raccogli le tue immagini di scansione",
      body: "Raccogli i file JPG o PNG dal tuo scanner, dalla mail o dal rullino fotografico in un unico posto, così puoi aggiungerli tutti insieme.",
    },
    {
      title: "Apri lo strumento Image to PDF",
      body: "Vai allo strumento Image to PDF nel tuo browser. Accetta JPG, PNG e WebP ed elabora tutto sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi le immagini nell’ordine del documento",
      body: "Trascina le scansioni nella zona di rilascio. Usa le frecce per mettere le pagine nella sequenza giusta — la pagina uno del modulo prima della pagina due.",
    },
    {
      title: "Crea il PDF",
      body: "Fai clic su Crea PDF. Ogni scansione diventa una pagina, e lo strumento le combina in un unico documento in locale.",
    },
    {
      title: "Comprimi se è pesante",
      body: "Le scansioni sono ricche di immagini e il PDF può essere pesante. Passalo dallo strumento Compress PDF per rientrare nei limiti di mail e caricamento — i contenuti scansionati si riducono molto con poca perdita visibile.",
    },
    {
      title: "Aggiungi il testo ricercabile se ti serve",
      body: "Una scansione convertita è un’immagine, quindi il testo non può essere cercato. Per renderla ricercabile, esegui il riconoscimento del testo (OCR) con l’app PDF Editor, che aggiunge un livello di testo invisibile sopra la scansione.",
    },
  ],
  tips: [
    "Raddrizza e ritaglia ogni scansione prima di combinarle — una pagina storta resta storta una volta nel PDF.",
    "Una risoluzione coerente tra le pagine dà un documento più ordinato. Dimensioni molto diverse tra un’immagine e l’altra producono pagine che saltano di scala.",
    "Gli strumenti da browser possono combinare le scansioni ma non riescono a leggere il testo al loro interno. Se devi cercare o copiare le parole, è un lavoro di OCR, che l’app PDF Editor gestisce.",
    "Tieni le scansioni a colori per tutto ciò che ha timbri, evidenziazioni o firme; passa alla scala di grigi solo quando il colore non aggiunge nulla, perché riduce la dimensione del file.",
    "Nomina il file in base al contenuto e alla data. «Contratto-affitto-firmato-2026-05.pdf» è molto più facile da ritrovare in seguito rispetto a una sequenza di numeri dello scanner.",
  ],
  mobileNote:
    "Se le tue «scansioni» sono in realtà foto sul telefono, l’app PDF Editor è la scorciatoia: trasforma le immagini del rullino in un PDF, può catturare nuove pagine con rilevamento dei bordi, e può eseguire il riconoscimento del testo così il risultato è ricercabile — tutto senza caricare nulla.",
  faq: [
    {
      q: "Qual è la differenza tra questo e scansionare?",
      a: "Scansionare cattura la carta in immagini, dall’inizio. Questa guida presuppone che tu abbia già le immagini di scansione e debba solo combinarle in un unico PDF. Se devi ancora catturare la carta, usa un flusso di scansione.",
    },
    {
      q: "Il testo nel mio PDF scansionato sarà ricercabile?",
      a: "Non con la sola conversione — una scansione è un’immagine, quindi non c’è un livello di testo. Esegui l’OCR (riconoscimento del testo) con l’app PDF Editor per aggiungere un livello ricercabile sopra la scansione.",
    },
    {
      q: "Le mie scansioni vengono caricate?",
      a: "No. Lo strumento Image to PDF elabora i file nel tuo browser, sul tuo dispositivo, quindi i documenti sensibili restano privati.",
    },
    {
      q: "Perché il mio PDF scansionato è così pesante?",
      a: "Le scansioni sono essenzialmente foto, e diverse pagine ad alta risoluzione si sommano in fretta. Comprimi il PDF — i contenuti scansionati e ricchi di immagini tipicamente si riducono molto con poca perdita visibile di qualità.",
    },
    {
      q: "Posso correggere una pagina scansionata storta?",
      a: "Sì. Usa lo strumento Rotate PDF per raddrizzare le pagine interessate dopo averle combinate, oppure correggi l’orientamento dell’immagine sorgente prima di convertire.",
    },
  ],
  related: [
    { label: "Image to PDF — combina le scansioni nel tuo browser", path: "/image-to-pdf" },
    { label: "Scan to PDF — cattura la carta con la fotocamera", path: "/scan-to-pdf" },
    { label: "Come scansionare documenti in PDF dal telefono", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Come comprimere un PDF scansionato", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "Scan to PDF", path: "/scan-to-pdf" },
};

export default content;
