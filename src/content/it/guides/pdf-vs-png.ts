import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF o PNG — documenti su più pagine contro un’immagine singola e nitida",
  description:
    "Il PDF vince con i documenti su più pagine, il PNG con un’immagine singola, nitida e con sfondo trasparente. Le regole chiare e come convertire tra i due.",
  updated: "2026-05-29",
  intro: [
    "Il PDF e il PNG sono entrambi eccellenti per ciò a cui servono, e servono a cose diverse. Il PDF contiene documenti su più pagine con testo selezionabile, font incorporati, firme e struttura. Il PNG contiene singole immagini bitmap con compressione senza perdita e supporto per la trasparenza. Ognuno è lo strumento sbagliato per il lavoro dell’altro, e la confusione nasce per lo più da chi usa il PNG per inviare qualcosa che in realtà è un documento.",
    "Il PNG brilla quando ti serve un’immagine singola, nitida ed esatta — un logo con sfondo trasparente, uno screenshot, un diagramma, un grafico. I pixel sono il dato; non c’è testo sottostante. Il PDF brilla quando ti servono pagine, font, selezione del testo, o qualsiasi tipo di struttura articolata su più passaggi.",
    "Questa guida offre le regole chiare su quando usare l’uno o l’altro, la conversione tra i due in entrambe le direzioni, e i casi in cui la scelta è genuinamente una questione di giudizio.",
  ],
  steps: [
    {
      title: "Usa il PDF per qualsiasi cosa su più pagine",
      body: "Qualsiasi documento con due o più pagine dovrebbe essere un PDF, non una sequenza di PNG. Il PDF tiene insieme le pagine, ne preserva l’ordine, e si presenta come un unico file che il destinatario può leggere in sequenza.",
    },
    {
      title: "Usa il PNG per immagini singole e nitide con trasparenza",
      body: "Loghi su sfondo trasparente, diagrammi, screenshot — il PNG è il formato giusto. La compressione senza perdita mantiene testo e linee nitidi; il canale alfa supporta la trasparenza.",
    },
    {
      title: "Non usare il PNG per contenuti fotografici",
      body: "Le foto sono pesanti in PNG e non traggono vantaggio dalla compressione senza perdita. Il JPG gestisce le foto con una qualità visiva simile a una frazione della dimensione.",
    },
    {
      title: "Converti da PDF a PNG per estrarre le pagine come immagini",
      body: "PDF in immagini esporta ogni pagina del PDF come PNG ad alta risoluzione. Utile quando ti serve una pagina come immagine singola per slide, pagine web o strumenti di design.",
    },
    {
      title: "Converti da PNG a PDF per impacchettare screenshot in un documento",
      body: "PNG in PDF o Immagine in PDF combina gli screenshot PNG in un unico PDF. Utile quando hai fatto molti screenshot e vuoi condividerli come un unico file ordinato.",
    },
    {
      title: "Per pagine singole ricche di testo, il PDF resta comunque migliore",
      body: "Anche una sola pagina di contenuto testuale trae vantaggio dal PDF rispetto al PNG — il testo resta selezionabile, la dimensione del file è minore, e il destinatario può copiare dal file.",
    },
  ],
  tips: [
    "Un PNG di uno screenshot va bene; un PNG di un documento su più pagine è sbagliato. Il multi-pagina appartiene al PDF.",
    "Se il tuo PNG contiene foto, passa al JPG — stessa qualità visiva, file molto più piccolo.",
    "La conversione da PNG a PDF preserva l’immagine alla risoluzione completa; nessuna perdita di qualità.",
    "La conversione da PDF a PNG ti permette di impostare la risoluzione. Più alta è più nitida ma più pesante; una scala 2× di solito è l’equilibrio giusto.",
    "Non «esportare in PNG» un documento che hai già come PDF a meno che tu non abbia davvero bisogno del formato immagine. Il PDF è più utile.",
  ],
  mobileNote:
    "Il telefono spesso cattura contenuti come screenshot PNG che dovrebbero davvero essere un PDF. L’app PDF Editor combina gli screenshot PNG in un unico PDF direttamente sul dispositivo, utile per condividere più catture come un unico file ordinato invece che come un insieme sparso.",
  faq: [
    {
      q: "Quando dovrei usare il PNG invece del PDF?",
      a: "Quando ti serve un’immagine singola e nitida, specialmente con trasparenza. Loghi, diagrammi, screenshot, grafici che finiscono dentro altri documenti.",
    },
    {
      q: "Il PDF o il PNG è più leggero per una singola pagina?",
      a: "Dipende dal contenuto. Pagina singola ricca di testo: vince il PDF. Pagina singola ricca di immagini: simile, o il PNG leggermente più pesante perché senza perdita.",
    },
    {
      q: "Posso modificare un PNG dentro un PDF?",
      a: "Sì — il PDF contiene il PNG e puoi manipolare l’immagine con gli strumenti di modifica PDF. Utile per aggiungere loghi o screenshot dentro un documento.",
    },
    {
      q: "Perché il PNG non supporta più pagine?",
      a: "Il PNG è fondamentalmente un formato immagine. I formati per documenti su più pagine (PDF, TIFF) sono progettati per quello scopo. Il PNG no.",
    },
    {
      q: "E se ho tanti PNG da condividere?",
      a: "Immagine in PDF li combina in un unico PDF ordinato. I destinatari ricevono un solo file invece di una cartella piena di allegati.",
    },
  ],
  related: [
    { label: "PDF in immagini — esporta le pagine come PNG o JPG", path: "/pdf-to-images" },
    { label: "Immagine in PDF — combina i PNG in un unico PDF", path: "/image-to-pdf" },
    { label: "Come convertire PNG in PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Come convertire PDF in PNG", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF in immagini — esporta le pagine come PNG o JPG", path: "/pdf-to-images" },
};

export default content;
