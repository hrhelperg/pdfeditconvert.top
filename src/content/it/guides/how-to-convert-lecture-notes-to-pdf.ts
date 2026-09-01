import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Come convertire appunti di lezione in PDF (Word, foto, slide)",
  description:
    "Gli appunti di lezione arrivano in ogni formato — documento Word, presentazione, screenshot, foto della lavagna. Come trasformare ciascuno in un unico PDF leggibile senza perdere la struttura.",
  updated: "2026-05-29",
  intro: [
    "Entro la fine di una settimana, gli appunti di una singola lezione possono trovarsi in cinque formati diversi: un documento Word scritto durante la lezione, una presentazione condivisa dal docente, una foto della lavagna, degli screenshot presi da una videoregistrazione, e un paio di pagine scritte a mano per quando la batteria del portatile si è scaricata.",
    "Tutto questo può — e dovrebbe — finire in un unico PDF per argomento o per settimana. I PDF gestiscono bene qualsiasi formato, si leggono su qualunque dispositivo e non si perdono come i file sparsi in giro. Il trucco è produrre il PDF senza perdere la struttura di ogni fonte.",
    "Questa guida percorre il metodo di conversione per ciascun formato e poi la strategia di unione che produce un unico file coerente. L’obiettivo è materiale di studio che userai davvero al momento dell’esame.",
  ],
  steps: [
    {
      title: "Converti gli appunti Word con Word a PDF",
      body: "Appunti battuti in un documento Word → Word a PDF nel tuo browser. Mantiene titoli, formattazione ed eventuali screenshot incorporati. Esporta alla dimensione originale del documento; comprimi in un secondo momento.",
    },
    {
      title: "Esporta le presentazioni come PDF",
      body: "PowerPoint e Keynote esportano direttamente in PDF. Usa il menu di esportazione, non gli screenshot. La versione PDF mantiene il testo selezionabile e resta nitida a qualsiasi livello di zoom.",
    },
    {
      title: "Converti foto e screenshot con Immagine in PDF",
      body: "Foto della lavagna, screenshot da registrazioni → Immagine in PDF le combina in un unico PDF. Stabilisci l’ordine prima di importarle; riordinarle dopo richiede più lavoro.",
    },
    {
      title: "Scansiona le pagine scritte a mano",
      body: "Scansiona in PDF dal telefono con scala di grigi e rilevamento dei bordi produce scansioni pulite su più pagine. Più nitide e leggere di foto scattate a caso.",
    },
    {
      title: "Unisci in un unico PDF per argomento",
      body: "Unisci PDF combina tutti i formati in un unico file ordinato. L’ordine conta: cronologia per giorno di lezione, oppure struttura logica (slide introduttive → appunti di lezione → foto della lavagna → riepilogo). Scegline uno e mantienilo.",
    },
    {
      title: "Aggiungi una copertina e un indice",
      body: "Una copertina battuta al computer (corso, settimana, argomento) rende il file comprensibile da solo anche sei mesi dopo. Per PDF compilati lunghi (oltre 30 pagine), aggiungi una pagina di indice.",
    },
  ],
  tips: [
    "Resisti alla tentazione di fotografare le slide con uno screenshot. Usa l’esportazione PDF della presentazione — più nitida, e il testo resta selezionabile per la ricerca.",
    "Fotografa la lavagna frontalmente, non di sbieco. La correzione automatica può sistemare un’inclinazione moderata, ma una foto dritta resta sempre più pulita.",
    "Se una registrazione ha dei momenti chiave, fai lo screenshot di quei fotogrammi specifici invece dell’intero video. Il PDF resta gestibile.",
    "Non unire tra settimane diverse. Un PDF a settimana mantiene i file consultabili; un PDF per l’intero semestre è illeggibile.",
    "Comprimi il PDF finale unito solo dopo la fine del semestre. Durante il semestre, tieni la copia leggibile per lo studio attivo.",
  ],
  mobileNote:
    "Metà della conversione degli appunti di lezione avviene dal telefono — fotografare la lavagna, scansionare una pagina scritta a mano, fare uno screenshot delle slide. L’app PDF Editor gestisce la catena di conversione e unione da mobile, producendo un PDF settimanale pulito prima ancora che il file lasci il telefono.",
  faq: [
    {
      q: "Devo tenere gli appunti nel formato originale o convertirli?",
      a: "Entrambi. Tieni gli originali modificabili per la revisione; produci una copia in PDF per argomento per lo studio. Il PDF non sostituisce la fonte — è un materiale di studio a sé.",
    },
    {
      q: "Qual è il modo migliore per unire i file?",
      a: "Unisci PDF nel tuo browser. Stabilisci l’ordine prima di unire; riordinare dopo è tecnicamente possibile ma più lento.",
    },
    {
      q: "Devo applicare l’OCR alle scansioni scritte a mano?",
      a: "Se il tuo strumento lo offre, sì — appunti scritti a mano ricercabili sono più utili al momento dell’esame. L’OCR sulla scrittura a mano è imperfetto; considera il testo ricercabile come approssimativo.",
    },
    {
      q: "Quanto dovrebbero pesare i PDF settimanali degli appunti?",
      a: "Quanto produce naturalmente la settimana. Comprimi a fine semestre per l’archivio; durante il semestre, dai priorità alla leggibilità rispetto alla dimensione.",
    },
    {
      q: "Posso fare tutto questo dal telefono?",
      a: "Sì. L’app PDF Editor gestisce ogni formato e li unisce direttamente sul dispositivo. Utile quando non vuoi che gli appunti aspettino di arrivare al portatile.",
    },
  ],
  related: [
    { label: "PDF Converter — conversioni Word, JPG, PNG", path: "/pdf-converter" },
    { label: "Immagine in PDF — foto della lavagna e screenshot", path: "/image-to-pdf" },
    { label: "Come scansionare appunti scritti a mano in PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Come organizzare il materiale di studio in PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG e viceversa", path: "/pdf-converter" },
};

export default content;
