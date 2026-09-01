import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Come consegnare i compiti in PDF (senza drammi con il portale)",
  description:
    "I portali scolastici rifiutano i compiti per motivi prevedibili — dimensione del file, numero di pagine, formato. Il percorso più semplice dal compito finito al PDF accettato dal portale.",
  updated: "2026-05-29",
  intro: [
    "Scoprire che il portale della scuola rifiuta il tuo compito due minuti prima della scadenza è il momento peggiore per farlo. L’errore mostrato è di solito generico — «file non valido», «caricamento non riuscito», «file troppo grande» — e la causa vera è quasi sempre una di queste quattro: il file supera il limite di dimensione, il formato non è esattamente quello richiesto dal portale, il numero di pagine è oltre il limite, oppure la foto scattata con il telefono non è ancora davvero un PDF.",
    "La soluzione è rapida in ogni caso, e si può fare dal telefono o dal computer in una scheda del browser, senza inviare nulla a terzi. Il trucco è sapere davvero cosa si aspetta il portale e produrre esattamente quel file già al primo tentativo.",
    "Questa guida ripercorre il percorso dal compito finito al PDF accettato — compreso il modo giusto di gestire le scansioni di lavori scritti a mano, gli esercizi e le consegne in formato misto come «un documento Word più tre pagine scritte a mano».",
  ],
  steps: [
    {
      title: "Verifica i requisiti reali del portale",
      body: "Quasi tutti i portali scolastici indicano il limite da qualche parte — di solito 5–25 MB, a volte un numero massimo di pagine, occasionalmente il formato PDF/A specifico. Controllalo prima di caricare il file, non dopo il rifiuto.",
    },
    {
      title: "Converti prima ogni parte in PDF",
      body: "Un documento Word → Word a PDF. Pagine scritte a mano → Scansiona in PDF dal telefono. Screenshot o foto della lavagna → Immagine a PDF. Tutto diventa un PDF prima di qualsiasi altro passaggio.",
    },
    {
      title: "Unisci tutto in un unico file, nell’ordine di consegna",
      body: "Unisci PDF combina il lavoro scritto al computer, quello scansionato e le eventuali annotazioni in un unico file ordinato. Chi corregge preferisce un file solo, non tre separati.",
    },
    {
      title: "Controlla orientamento e ordine",
      body: "Usa Riordina le pagine del PDF se l’unione ha messo qualcosa fuori sequenza. Usa Ruota PDF se una scansione è venuta storta. Chi corregge non deve dover ruotare manualmente lo schermo per leggere il tuo lavoro.",
    },
    {
      title: "Comprimi per rientrare nel limite del portale",
      body: "Comprimi PDF nel browser riduce il peso del file. Le scansioni pesanti calano molto; il contenuto scritto al computer cambia appena. Punta a restare sotto il limite del portale con un piccolo margine.",
    },
    {
      title: "Rinomina il file come richiesto dalla classe",
      body: "Molte classi indicano una convenzione precisa per il nome: Cognome_Nome_Compito3.pdf. Seguila alla lettera. Un nome sbagliato può costare punti o creare confusione nell’ordinamento.",
    },
  ],
  tips: [
    "Non consegnare documenti Word a un portale che accetta PDF. Word viene visualizzato in modo diverso sul computer di chi corregge; un PDF blocca l’aspetto del documento.",
    "Le scansioni di pagine scritte a mano dovrebbero essere in bianco e nero o in scala di grigi, non a colori. Sono più leggere, più nitide e si leggono meglio.",
    "Comprimi con decisione le scansioni pesanti, non il lavoro scritto al computer. Le pagine digitate si comprimono poco; le scansioni molto di più.",
    "Carica una versione di prova prima della scadenza, per verificare che il portale accetti il file.",
    "Conserva anche una copia locale del file consegnato. Le copie sul portale non sono sempre recuperabili in seguito, e potresti aver bisogno di rivedere cosa hai consegnato.",
  ],
  mobileNote:
    "Consegnare tutto dal telefono ormai è normale. L’app PDF Editor gestisce l’intera catena dal telefono — scansiona le pagine scritte a mano, unisci al lavoro scritto al computer, comprimi, rinomina, pronto da caricare — senza dover passare dal computer.",
  faq: [
    {
      q: "Che dimensione accettano di solito i portali scolastici?",
      a: "Comunemente tra 5 e 25 MB. Alcuni portali della scuola primaria e secondaria si fermano a 2 MB. I portali universitari sono più permissivi. Controlla sempre le indicazioni specifiche della classe.",
    },
    {
      q: "Posso consegnare un file Word invece del PDF?",
      a: "Solo se il portale lo accetta esplicitamente. La maggior parte chiede il PDF proprio per bloccare la formattazione; consegnare un Word può costare punti o essere rifiutato automaticamente.",
    },
    {
      q: "Devo per forza unire tutto in un solo file?",
      a: "Sì, a meno che il portale non permetta più caricamenti. Chi corregge preferisce un file unico; molti portali comunque ne accettano solo uno.",
    },
    {
      q: "Qual è il motivo di rifiuto più comune?",
      a: "La dimensione del file. Le scansioni fanno superare rapidamente il limite del portale. Comprimi prima di consegnare e il rifiuto quasi sempre sparisce.",
    },
    {
      q: "Posso caricare il compito dal telefono?",
      a: "Sì. La maggior parte dei portali scolastici moderni funziona nei browser mobile e accetta PDF direttamente dal menu di condivisione. Gli strumenti da telefono coprono l’intera procedura.",
    },
  ],
  related: [
    { label: "PDF per studenti — appunti e guide di studio", path: "/pdf-for-students" },
    { label: "Scansionare in PDF — cattura le pagine scritte a mano", path: "/scan-to-pdf" },
    { label: "Come comprimere un PDF per i portali scolastici", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Come scansionare appunti scritti a mano in PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF per studenti — appunti, evidenziazioni e guide di studio", path: "/pdf-for-students" },
};

export default content;
