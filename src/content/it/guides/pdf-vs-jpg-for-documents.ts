import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF o JPG per i documenti — smetti di inviare foto",
  description:
    "Perché una foto JPG di un documento è la cosa sbagliata da inviare, quando il PDF è la scelta giusta, e come trasformare una foto in un documento vero.",
  updated: "2026-05-23",
  intro: [
    "Qualcuno ti chiede un documento, e la cosa più rapida sembra fotografarlo e inviare il JPG. Sembra efficiente. Ma è anche il motivo per cui l’altra persona finisce per strizzare gli occhi su un’immagine storta e piena di riflessi, incapace di stamparla bene, di cercarla o di archiviarla insieme al resto. Per un vero documento, una foto JPG è quasi sempre il formato sbagliato — e un PDF è quasi sempre quello giusto.",
    "Questa guida spiega la differenza dove conta davvero: i documenti. Non è una tabella neutra di caratteristiche — è un argomento a favore della conversione di quella foto in un PDF prima di inviarla, e un modo rapido per farlo esattamente con lo strumento gratuito Immagine in PDF, che funziona sul tuo dispositivo senza inviare nulla a un server.",
    "Se hai mai ricevuto cinque JPG che avrebbero dovuto essere un unico PDF ordinato, questa è la guida da rimandare indietro.",
  ],
  steps: [
    {
      title: "Capisci cosa perde una foto JPG",
      body: "Un documento fotografato è una singola immagine: niente più pagine in un unico file, niente testo ricercabile, spesso storto e illuminato in modo disomogeneo. È l’immagine di un documento, non un documento.",
    },
    {
      title: "Scopri cosa dà il PDF a un documento",
      body: "Il PDF contiene molte pagine in un unico file, stampa a una dimensione prevedibile, si apre in modo identico ovunque e convive naturalmente con altri documenti. È il formato con cui il resto del mondo archivia e conserva.",
    },
    {
      title: "Decidi in base allo scopo",
      body: "Se chi riceve leggerà, stamperà, archivierà o combinerà il documento con altri, invia un PDF. Un JPG isolato va bene solo quando l’immagine in sé è il punto — una foto, non un documento burocratico.",
    },
    {
      title: "Converti la foto in un PDF",
      body: "Apri lo strumento Immagine in PDF, aggiungi i tuoi JPG, mettili in ordine e crea un unico PDF. Diverse pagine fotografate diventano un solo documento invece di una manciata sparsa di immagini.",
    },
    {
      title: "Falla sembrare un documento vero",
      body: "Ritaglia e raddrizza prima le foto, così le pagine risultano squadrate. Per qualsiasi cosa importante, una vera scansione con rilevamento dei bordi batte una foto grezza.",
    },
    {
      title: "Dai la dimensione giusta e invia",
      body: "Comprimi il PDF se le pagine fotografate lo hanno appesantito, poi invia un unico file pulito che chi riceve può usare davvero.",
    },
  ],
  tips: [
    "Il segnale che avresti dovuto inviare un PDF: chi riceve ti chiede di «mandarlo come un vero documento» o non riesce a stamparlo bene.",
    "Le pagine multiple sono il punto decisivo. Due JPG di un modulo di due pagine sono un pasticcio; un PDF è un documento.",
    "Un JPG di testo non è ricercabile. I PDF fatti di testo vero lo sono, e anche i PDF scansionati possono diventare ricercabili con il riconoscimento del testo.",
    "Il JPG è la scelta giusta quando l’immagine è il contenuto stesso — una foto di prodotto, uno screenshot che condividi come immagine. È sbagliato quando il contenuto è un documento.",
    "Convertire non sistema una foto fatta male. Raddrizza e illumina bene la pagina prima di convertire, oppure scansionala correttamente.",
  ],
  mobileNote:
    "Dato che il JPG incriminato nasce quasi sempre come foto scattata dal telefono, anche la soluzione appartiene al telefono. L’app PDF Editor trasforma le foto del rullino in un PDF, oppure scansiona la pagina correttamente con rilevamento dei bordi e riconoscimento del testo — così ciò che invii è un documento, non uno scatto al volo.",
  faq: [
    {
      q: "Perché non dovrei semplicemente inviare un JPG di un documento?",
      a: "Una foto JPG è un’unica immagine, spesso storta, senza testo ricercabile, senza supporto multipagina e con una dimensione di stampa imprevedibile. Per un documento, questo crea lavoro extra per chi lo riceve. Un PDF evita tutto questo.",
    },
    {
      q: "Quando il JPG è davvero la scelta giusta?",
      a: "Quando l’immagine in sé è il contenuto — una fotografia, uno screenshot che condividi come immagine. Il JPG è sbagliato in particolare quando il contenuto è un documento che qualcuno deve leggere, stampare o archiviare.",
    },
    {
      q: "Come trasformo una foto in un documento PDF?",
      a: "Usa lo strumento Immagine in PDF: aggiungi i tuoi JPG, mettili in ordine e crea un unico PDF. Per il miglior risultato, raddrizza prima le foto oppure scansiona la pagina correttamente.",
    },
    {
      q: "Il PDF convertito sarà ricercabile?",
      a: "Non se parte da una semplice foto — resta un’immagine. Per ottenere testo ricercabile, scansiona il documento con il riconoscimento del testo usando l’app PDF Editor invece di limitarti a fotografarlo.",
    },
    {
      q: "Esiste un confronto neutro delle caratteristiche tra i due formati?",
      a: "Sì. Per un confronto diretto tra PDF e JPG su qualità, dimensione e utilizzo, guarda la pagina di confronto PDF o JPG.",
    },
  ],
  related: [
    { label: "Immagine in PDF — trasforma le foto in un documento", path: "/image-to-pdf" },
    { label: "PDF o JPG — confronto delle caratteristiche", path: "/compare/pdf-vs-jpg" },
    { label: "Come convertire un JPG in PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Come creare un PDF con la fotocamera del telefono", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "Convertitore PDF", path: "/pdf-converter" },
};

export default content;
