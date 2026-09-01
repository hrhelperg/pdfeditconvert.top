import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF o immagini per condividere documenti (JPG, PNG, HEIC)",
  description:
    "Quando un JPG, un PNG o un HEIC di un documento è la scelta sbagliata — e cosa rende il PDF il formato giusto per tutto ciò che va oltre un semplice screenshot.",
  updated: "2026-05-29",
  intro: [
    "Una quantità sorprendente di lavoro aziendale e scolastico viene inviata come file immagine — JPG di contratti, foto HEIC di dispense, screenshot PNG di ricevute. Sembra più veloce che produrre un PDF, il telefono lo rende facile, e il destinatario di solito riesce comunque a leggerlo. Ma le immagini di documenti sono il formato sbagliato per quasi ogni vero flusso di lavoro documentale.",
    "I PDF e le immagini di documenti servono a scopi diversi. I PDF sono su più pagine, ricercabili, stampabili, firmabili, archiviabili, e non si rovinano quando ruotati. Le immagini sono su una sola pagina, non ricercabili, spesso enormi come dimensione del file, e frequentemente escono sfocate, storte o con il colore sbagliato. Per qualsiasi cosa oltre una condivisione veloce, i PDF fanno il lavoro meglio.",
    "Questa guida spiega perché, quando l’approccio dell’immagine-di-documento funziona davvero (a volte capita), e il percorso di conversione semplice quando vuoi la versione PDF.",
  ],
  steps: [
    {
      title: "Riconosci quando un’immagine di un documento è sbagliata",
      body: "Documento su più pagine: formato sbagliato. Documento che deve essere stampato: formato sbagliato. Documento che deve essere ricercabile: formato sbagliato. Qualsiasi cosa formale che finirà in un archivio: formato sbagliato.",
    },
    {
      title: "Riconosci il piccolo insieme di casi in cui un’immagine va bene",
      body: "Una sola pagina, effimera, informale. Una foto veloce di uno scontrino a un amico, uno screenshot di una pagina di conferma, uno scatto di un appunto scritto a mano per te stesso. L’immagine è il formato giusto quando non è ancora davvero un documento.",
    },
    {
      title: "Converti con Immagine in PDF quando la condivisione diventa un documento",
      body: "Immagine in PDF combina JPG, PNG e WebP in un PDF nel tuo browser. L’immagine diventa ricercabile in seguito se applichi l’OCR; resta un unico file invece di tanti file separati.",
    },
    {
      title: "Usa lo strumento giusto per la fonte",
      body: "Foto → Immagine in PDF. Pagine scansionate → Scansiona in PDF. Documento Word/Pages → Word a PDF. Ogni formato di partenza ha il percorso di conversione più pulito.",
    },
    {
      title: "Gestisci specificamente l’HEIC dell’iPhone",
      body: "L’iPhone usa di default l’HEIC, che non tutti i destinatari riescono ad aprire. Converti HEIC → JPG → PDF, oppure usa uno strumento che gestisce direttamente l’HEIC. Il flusso di scansione dell’app PDF Editor gestisce l’HEIC in modo nativo.",
    },
    {
      title: "Comprimi con criterio",
      body: "Comprimi PDF se il file risultante è enorme. Le conversioni da foto a PDF ereditano la risoluzione della foto, che spesso è più di quanto serva per un documento.",
    },
  ],
  tips: [
    "Un JPG di un documento in verticale scattato con il telefono è il formato sbagliato. Ruota il telefono o usa un’app di scansione — il risultato è nettamente più leggibile.",
    "Gli screenshot PNG si convertono in PDF in modo pulito, ma le foto JPG di documenti cartacei di solito è meglio farle passare da un’app di scansione per il rilevamento dei bordi.",
    "Non inviare più JPG come se fossero un documento su più pagine. Combinali in un unico PDF; i destinatari perdono il filo con thread di allegati multipli.",
    "L’HEIC è il formato predefinito di iOS ma viene rifiutato da molti portali web e client di posta. Convertilo prima di condividere se non conosci la configurazione del destinatario.",
    "Le foto dello schermo di un portatile sono il caso peggiore — effetto moiré, riflessi, bassa risoluzione. Usa la funzione di esportazione in PDF invece di fotografare lo schermo.",
  ],
  mobileNote:
    "Il telefono è dove capitano più spesso gli errori di immagine-al-posto-di-documento. Il flusso di scansione dell’app PDF Editor rileva le pagine e produce PDF puliti fin dall’inizio, così una condivisione veloce diventa un documento vero senza un passaggio di conversione in più.",
  faq: [
    {
      q: "Perché una foto di un documento è peggiore di un PDF?",
      a: "Le foto sono su una sola pagina, spesso storte, non ricercabili, possono avere una dimensione enorme, e i problemi di rotazione o formato nascondono il contenuto. Il PDF risolve tutto questo.",
    },
    {
      q: "Il JPG è mai accettabile per un documento?",
      a: "Per condivisioni informali di una sola pagina, sì — uno scontrino veloce a un amico, uno screenshot a un collega. Per qualsiasi cosa formale o su più pagine, no.",
    },
    {
      q: "E l’HEIC?",
      a: "Il formato predefinito dell’iPhone, ma non universalmente supportato. Convertilo in JPG o PDF prima di condividere se il destinatario non usa dispositivi Apple.",
    },
    {
      q: "Come combino più foto in un unico PDF?",
      a: "Immagine in PDF combina JPG, PNG e WebP in un unico PDF nel tuo browser. Stabilisci l’ordine prima di aggiungerle; il PDF risultante lo mantiene.",
    },
    {
      q: "Il PDF renderà il file più grande?",
      a: "Dipende dalla fonte. Un JPG di un documento → PDF senza ricompressione ha più o meno la stessa dimensione. Comprimi PDF la riduce se serve.",
    },
  ],
  related: [
    { label: "Immagine in PDF — combina le foto in un unico file", path: "/image-to-pdf" },
    { label: "PDF o JPG per documenti", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Come convertire JPG in PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Come convertire foto in PDF su iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Immagine in PDF — combina le foto in un PDF", path: "/image-to-pdf" },
};

export default content;
