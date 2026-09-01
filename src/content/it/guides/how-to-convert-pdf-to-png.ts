import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Come convertire un PDF in PNG — pagine nitide e senza perdita di qualità",
  description:
    "Esporta le pagine di un PDF come immagini PNG di alta qualità nel tuo browser. Perché il PNG mantiene nitidi testo e diagrammi, con note su scala e trasparenza.",
  updated: "2026-05-23",
  intro: [
    "Quando ti serve una pagina di un PDF come immagine e la pagina è piena di testo, una tabella o un diagramma, il PNG è il formato a cui rivolgersi. È senza perdita, quindi le lettere restano nitide invece di sfumare ai bordi — la differenza è evidente non appena fai zoom su una fattura o uno schema convertiti.",
    "Questa guida usa lo strumento gratuito PDF to Images, che trasforma ogni pagina del PDF in un’immagine scaricabile nel tuo browser, senza caricare nulla. Il PNG è uno dei due formati di output, e quello da scegliere ogni volta che la chiarezza conta più della dimensione del file.",
    "Di seguito: come ottenere il risultato più nitido senza appesantire il file, quando conviene il PNG rispetto al JPG, e cosa tenere a mente sulle immagini di pagina in generale.",
  ],
  steps: [
    {
      title: "Apri lo strumento PDF to Images",
      body: "Vai allo strumento PDF to Images. Trasforma le pagine in locale nel tuo browser — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il PDF nella zona di rilascio o fai clic per sceglierlo. Lo strumento prepara ogni pagina per l’esportazione.",
    },
    {
      title: "Scegli PNG come formato",
      body: "Seleziona PNG. È senza perdita e mantiene nitidi testo, tabelle e disegni al tratto — la scelta giusta per documenti, diagrammi e qualsiasi cosa su cui farai zoom.",
    },
    {
      title: "Imposta la scala per la nitidezza",
      body: "Scegli una scala: 2× è nitida sulla maggior parte degli schermi, 3× è molto nitida per la stampa o i display grandi ma produce file pesanti. Fai corrispondere la scala al modo in cui l’immagine verrà effettivamente vista.",
    },
    {
      title: "Esporta le pagine",
      body: "Avvia la conversione. Ogni pagina si scarica come proprio file PNG, pronto da inserire in un documento, una presentazione o una pagina web.",
    },
    {
      title: "Usa la pagina che ti serve",
      body: "Tieni il PNG che ti interessa ed elimina gli altri. Per un PDF lungo, dividerlo prima lascia meno file da gestire.",
    },
  ],
  tips: [
    "Scegli PNG invece di JPG ogni volta che la pagina contiene testo, tabelle o linee nette — la compressione del JPG ammorbidisce visibilmente quei bordi.",
    "I file PNG sono più pesanti dei JPG. Se stai esportando molte pagine e la dimensione conta più della nitidezza, il JPG è la scelta pragmatica.",
    "Una pagina PDF non ha trasparenza, quindi il PNG esportato si appoggia su uno sfondo bianco pieno, anche se il PNG supporta la trasparenza.",
    "Una scala più alta non migliora una fonte di scarsa qualità. Se il PDF stesso contiene una scansione sfocata, un PNG a 3× renderizza semplicemente la sfocatura a risoluzione più alta.",
    "Le immagini di pagina non sono ricercabili — non c’è un livello di testo. Tieni il PDF originale se ti servirà trovare o copiare le parole in seguito.",
  ],
  mobileNote:
    "Estrarre un’immagine di pagina nitida da un PDF sul telefono è comodo per slide, riferimenti di design e segnalazioni di bug. L’app PDF Editor renderizza le pagine con accelerazione hardware e ti lascia annotare l’immagine prima di condividerla — più veloce che inviarti il file via mail per gestirlo dopo.",
  faq: [
    {
      q: "Perché scegliere PNG invece di JPG?",
      a: "Il PNG è senza perdita, quindi testo, tabelle e diagrammi restano nitidi. Il JPG è più leggero ma ammorbidisce i bordi fini. Per pagine di documenti su cui farai zoom, il PNG è la scelta migliore.",
    },
    {
      q: "Ottengo un PNG per ogni pagina?",
      a: "Sì. Ogni pagina viene renderizzata e scaricata come file PNG separato. Tieni quelli che ti servono ed elimina gli altri.",
    },
    {
      q: "Il mio PDF viene caricato da qualche parte?",
      a: "No. La renderizzazione avviene interamente nel tuo browser, quindi il file resta sul tuo dispositivo.",
    },
    {
      q: "Perché il mio PNG è così pesante?",
      a: "Il PNG è senza perdita e una scala alta moltiplica il numero di pixel. Riduci la scala o passa al JPG se la dimensione del file è un problema.",
    },
    {
      q: "Posso esportare un PDF protetto da password?",
      a: "Non nel browser — i file crittografati non possono essere renderizzati. Rimuovi prima la password, oppure usa l’app mobile PDF Editor.",
    },
  ],
  related: [
    { label: "PDF to Images — esporta le pagine nel tuo browser", path: "/pdf-to-images" },
    { label: "Image to PDF — l’operazione inversa", path: "/image-to-pdf" },
    { label: "Come convertire PDF in JPG", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "Come estrarre pagine da un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
