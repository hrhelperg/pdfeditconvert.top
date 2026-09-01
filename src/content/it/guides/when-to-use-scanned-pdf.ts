import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Quando usare un PDF scansionato (e quando no)",
  description:
    "I PDF scansionati risolvono un problema specifico — portare la carta nel digitale. Sono anche più pesanti, meno ricercabili e più difficili da modificare. Quando vale la pena farlo.",
  updated: "2026-05-29",
  intro: [
    "I PDF scansionati risolvono un problema specifico: trasformare la carta in un file digitale che può essere condiviso, archiviato e visualizzato su qualsiasi dispositivo. Lo fanno bene. Ma sono anche più grandi dei PDF equivalenti scritti direttamente al computer, non ricercabili senza OCR, più difficili da modificare, e spesso a risoluzione più bassa della fonte. Scansionare un documento che esiste già in digitale è quasi sempre la mossa sbagliata.",
    "La regola giusta è breve. Scansiona la carta che non ha una fonte digitale. Non scansionare nulla che hai già come documento Word, screenshot o esportazione PDF. La tentazione di stampare-e-poi-scansionare per «bloccare» un documento è comprensibile ma di solito inutile — un’esportazione diretta in PDF fa la stessa cosa, meglio.",
    "Questa guida percorre il quando scansionare e il quando no. Gran parte è intuitiva una volta detta; il problema è che la tentazione di scansionare è spesso più forte del bisogno reale.",
  ],
  steps: [
    {
      title: "Usa il PDF scansionato quando l’unica fonte è la carta",
      body: "Vecchi contratti, appunti scritti a mano, scontrini di carta, documenti ricevuti per posta, moduli firmati a mano. Qualsiasi cosa esista fisicamente e debba diventare digitale. Scansiona in PDF con il telefono o con uno scanner piano produce un PDF pulito.",
    },
    {
      title: "Non scansionare documenti che hai già in digitale",
      body: "Se hai il documento Word, il PDF sorgente o l’esportazione, usa quelli. Stampare-e-poi-scansionare perde fedeltà, rende il file più grande, ed elimina la ricercabilità. Non c’è alcun vantaggio.",
    },
    {
      title: "Non scansionare per «bloccare» un documento",
      body: "Ri-esportare dalla fonte in PDF blocca già il contenuto. Scansionare non aggiunge sicurezza; toglie ricercabilità e qualità del testo senza rendere il file più difficile da alterare.",
    },
    {
      title: "Usa l’OCR se scansioni e ti serve la ricercabilità",
      body: "L’OCR converte le immagini scansionate del testo in un testo sottostante ricercabile. Senza, i PDF scansionati sono immagini di parole — leggibili ma non ricercabili.",
    },
    {
      title: "Comprimi le scansioni prima di condividere",
      body: "I PDF scansionati sono i PDF più pesanti che incontrerai di solito. Comprimi PDF nel tuo browser li riduce drasticamente senza una perdita di qualità evidente, specialmente sui documenti di solo testo.",
    },
    {
      title: "Scansiona alla risoluzione giusta",
      body: "200–300 DPI per i documenti che verranno letti a schermo. 300 DPI per qualsiasi cosa che potrebbe essere stampata. 600 DPI è qualità fotografica e spreca spazio sul testo.",
    },
  ],
  tips: [
    "La maggior parte dei momenti «devo scansionare questo» in realtà sono «ce l’ho già in digitale e me ne sono dimenticato». Cerca prima la fonte.",
    "Un’esportazione PDF diretta è più pulita di una stampa scansionata sotto ogni aspetto misurabile: più nitida, più leggera, ricercabile, modificabile.",
    "Le scansioni da telefono oggi eguagliano la qualità di uno scanner piano per i documenti ordinari, grazie al rilevamento dei bordi e alla regolazione del contrasto.",
    "Le scansioni con OCR sono ricercabili ma non perfette a livello di testo. Considera l’output dell’OCR come approssimativo, non autorevole.",
    "Non scansionare per far «sembrare ufficiale» un file appena creato. Il formato è lo stesso; a nessuno importa se è stato scansionato o esportato.",
  ],
  mobileNote:
    "Il telefono è lo strumento giusto per la scansione quotidiana — la fotocamera è sempre con te, il rilevamento dei bordi produce risultati puliti, e il PDF risultante è utilizzabile subito. Il flusso di scansione dell’app PDF Editor è costruito proprio per questo, con cattura su più pagine e ripulitura direttamente sul dispositivo.",
  faq: [
    {
      q: "Devo scansionare un documento che ho come file Word?",
      a: "No. Esportalo direttamente in PDF. Scansionare perde risoluzione, rende il file più grande, ed elimina la ricercabilità.",
    },
    {
      q: "Un PDF scansionato è più «ufficiale» di uno esportato?",
      a: "No. Sono entrambi PDF. L’ufficialità viene dalle firme e dal contenuto, non dall’origine della scansione.",
    },
    {
      q: "Quando la scansione aiuta davvero?",
      a: "Quando la fonte è la carta. Contratti ricevuti per posta, appunti scritti a mano, moduli cartacei con scrittura a mano. La scansione è l’unico modo per digitalizzarli.",
    },
    {
      q: "Devo applicare l’OCR a ogni scansione?",
      a: "Sì, se il tuo strumento lo supporta. Le scansioni ricercabili sono molto più utili nel lungo periodo, e l’OCR non cambia l’aspetto visibile.",
    },
    {
      q: "Quanto dovrebbe pesare un PDF scansionato?",
      a: "Da poche centinaia di KB a qualche MB per i documenti tipici. Scansioni molto più pesanti di così traggono vantaggio dalla compressione.",
    },
  ],
  related: [
    { label: "Scansiona in PDF — scansione con la fotocamera del telefono", path: "/scan-to-pdf" },
    { label: "Come scansionare documenti in PDF dal telefono", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Come correggere la qualità di un PDF scansionato", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "PDF modificabile o PDF piatto", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Scansiona in PDF — scansione con la fotocamera del telefono", path: "/scan-to-pdf" },
};

export default content;
