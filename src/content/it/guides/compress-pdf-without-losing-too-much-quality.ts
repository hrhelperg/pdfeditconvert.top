import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Comprimere un PDF senza perdere troppa qualità",
  description:
    "Trova il punto giusto tra dimensione e qualità. Come i livelli di compressione scambiano dettaglio con dimensione, e come scegliere il più leggero che funzioni ancora.",
  updated: "2026-05-23",
  intro: [
    "C’è una tensione onesta al cuore della compressione PDF: file più piccoli significano meno dettaglio. Qualsiasi strumento che promette grandi risparmi con zero perdita di qualità ti sta vendendo qualcosa. L’obiettivo realistico non è «nessuna perdita» — è «nessuna perdita che noterai per questo scopo». Un documento destinato alla lettura a schermo può perdere dettaglio che un lavoro di stampa non può permettersi.",
    "Questa guida spiega come trovare quel punto giusto usando lo strumento gratuito Compress PDF, che gira nel tuo browser senza caricare nulla e mostra il risparmio di dimensione per ogni livello. Invece di puntare per riflesso alla compressione massima, imparerai a scegliere il livello più leggero che sembra ancora giusto.",
    "Trovare questo equilibrio significa file che si inviano e caricano senza problemi, e che continuano a sembrare come li volevi quando qualcuno li apre davvero.",
  ],
  steps: [
    {
      title: "Definisci cosa significa «abbastanza buono» per questo documento",
      body: "Decidi come verrà usato il file. La lettura a schermo tollera più compressione della stampa; un lavoro da portfolio richiede più dettaglio di uno scontrino spese. L’uso stabilisce il tuo livello minimo di qualità.",
    },
    {
      title: "Apri lo strumento Compress PDF",
      body: "Vai allo strumento Compress PDF. Elabora il file sul tuo dispositivo e ti mostra il risparmio di dimensione, così puoi giudicare direttamente il compromesso.",
    },
    {
      title: "Inizia dal livello più leggero",
      body: "Prova prima Basso o Consigliato, non Forte. L’istinto di massimizzare la compressione di solito esagera — spesso raggiungi il tuo obiettivo di dimensione con dettaglio da vendere.",
    },
    {
      title: "Confronta qualità e dimensione",
      body: "Apri il risultato e guarda le pagine, in particolare immagini e testo fine. Nota la dimensione risparmiata. Se la qualità va bene e sei sotto il tuo limite, hai finito.",
    },
    {
      title: "Sali di livello solo se serve",
      body: "Ancora troppo grande? Passa a un livello più forte e ricontrolla. Salire gradualmente trova l’impostazione più leggera che raggiunge il tuo obiettivo di dimensione senza degradare troppo.",
    },
    {
      title: "Tieni l’originale",
      body: "Salva la copia compressa con un nuovo nome. La compressione è a senso unico — il dettaglio che rimuove è perso — quindi l’originale intatto è la tua rete di sicurezza.",
    },
  ],
  tips: [
    "Punta prima al livello più leggero e sali solo se necessario. La maggior parte delle persone comprime troppo, degradando i file più di quanto l’obiettivo di dimensione richiedesse.",
    "Fai corrispondere la qualità allo scopo: i documenti solo per schermo sopravvivono a una compressione pesante che rovinerebbe qualcosa destinato alla stampa.",
    "La compressione trasforma le pagine in immagini, quindi il risultato perde il testo selezionabile. Se ti serve testo ricercabile più che un file piccolo, è un motivo per tenere l’originale o comprimere meno.",
    "I PDF ricchi di testo si riducono a malapena a qualsiasi livello, perché c’è poco dato immagine — non forzare il livello aspettandoti risparmi che non ci sono.",
    "Comprimi una sola volta. Comprimere un file già compresso accumula perdita senza un guadagno di dimensione significativo.",
  ],
  mobileNote:
    "Giudicare il compromesso tra dimensione e qualità è facile dal telefono con l’app PDF Editor: comprimi offline, guarda l’anteprima delle pagine, e regola il livello su o giù prima di condividere — senza caricamento, e con supporto anche per i file protetti.",
  faq: [
    {
      q: "Posso comprimere un PDF senza alcuna perdita di qualità?",
      a: "Non in modo significativo — una compressione utile comporta sempre una perdita. L’obiettivo realistico è nessuna perdita che noterai per lo scopo del documento. I livelli più leggeri mantengono più dettaglio; scegli il più leggero che sembra ancora giusto.",
    },
    {
      q: "Quale livello mantiene più qualità?",
      a: "Basso mantiene il massimo dettaglio, poi Consigliato, con Forte il più piccolo e il più ruvido. Parti leggero e sali solo se sei ancora sopra il tuo obiettivo di dimensione.",
    },
    {
      q: "Perché le mie immagini appaiono sfocate dopo la compressione?",
      a: "La compressione delle immagini scarta dettaglio fine per risparmiare spazio, e i livelli più forti ne scartano di più. Torna a un livello più leggero se la sfocatura è evidente per il tuo uso.",
    },
    {
      q: "Comprimere elimina il testo ricercabile?",
      a: "Sì — le pagine vengono ri-renderizzate come immagini, il che elimina il livello di testo selezionabile. Se il testo ricercabile conta più della dimensione, tieni l’originale o comprimi in modo meno aggressivo.",
    },
    {
      q: "Dovrei comprimere un file più di una volta?",
      a: "No. Un secondo passaggio aggiunge perdita di qualità per pochi risparmi extra. Comprimi una volta al livello giusto e tieni l’originale.",
    },
  ],
  related: [
    { label: "Compress PDF — controlla il livello", path: "/compress-pdf" },
    { label: "Le migliori impostazioni di compressione PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Come comprimere un PDF senza perdere qualità", path: "/guides/how-to-compress-pdf" },
    { label: "Perché il mio PDF è così pesante?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
