import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF o JPG — quando usare l’uno o l’altro",
  description:
    "PDF o JPG: quando scansionare, quando fotografare. Confronto su qualità, dimensione del file, OCR e adattabilità al flusso di lavoro documentale.",
  intro: [
    "JPG è un formato per foto. PDF è un formato per documenti. Nonostante questa distinzione sia semplice, capita spesso di inviare JPG di contratti e PDF di una singola immagine — entrambe scelte che funzionano, ma non sono ideali.",
    "L’uso scorretto nasce dal fatto che i telefoni impostano il JPG come predefinito per tutto, dalle foto di famiglia alle ricevute scansionate, mentre i computer impostano il PDF come predefinito per qualsiasi documento stampabile. Senza pensarci troppo, ci si ritrova con JPG di ricevute nella galleria e PDF pieni di immagini ad affollare i download.",
    "Questo confronto ti aiuta a scegliere il formato giusto per i documenti che invii davvero: ricevute, documenti d’identità, contratti, screenshot, foto di prodotti e i casi intermedi in cui la risposta giusta non è ovvia.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Supporto multipagina", left: "sì", right: "no" },
    { feature: "Testo ricercabile (con OCR)", left: "sì", right: "no" },
    { feature: "Nitido a qualsiasi livello di zoom", left: "sì", right: "no" },
    { feature: "Dimensione ridotta per le foto", left: "Limitato", right: "sì" },
    { feature: "Visualizzabile ovunque", left: "sì", right: "sì" },
    { feature: "Protezione con password", left: "sì", right: "no" },
    { feature: "Modificabile in seguito", left: "sì", right: "Limitato" },
    { feature: "Ideale per ricevute e contratti", left: "sì", right: "no" },
    { feature: "Ideale per foto di prodotti", left: "no", right: "sì" },
  ],
  whenLeft: [
    "Il contenuto è un documento (ricevuta, contratto, documento d’identità, modulo)",
    "Il risultato potrebbe richiedere più pagine",
    "Vuoi un testo ricercabile (OCR)",
    "Chi lo riceve è un commercialista o un sistema aziendale",
    "Potresti dover aggiungere una firma in seguito",
  ],
  whenRight: [
    "Il contenuto è una fotografia",
    "La dimensione del file conta più della fedeltà",
    "Immagine singola, nessun bisogno di più pagine",
    "Condivisione su app di messaggistica che preferiscono le immagini",
    "Pubblicazione sui social media",
  ],
  faq: [
    {
      q: "Posso convertire un JPG in PDF?",
      a: "Sì. PDF Editor (e la maggior parte degli strumenti PDF) racchiude i JPG in PDF mantenendo la qualità dell’immagine.",
    },
    {
      q: "L’OCR funziona su un JPG di un documento?",
      a: "Meglio convertire prima in PDF e poi eseguire l’OCR: il risultato è un testo ricercabile all’interno di un vero formato documentale.",
    },
    {
      q: "Perché i commercialisti preferiscono i PDF?",
      a: "I loro strumenti di contabilità indicizzano i PDF e ignorano i JPG. Le ricevute in PDF vengono categorizzate automaticamente; i JPG restano fermi in una cartella.",
    },
  ],
  related: [
    { label: "Convertitore PDF", path: "/pdf-converter" },
    { label: "Scansiona in PDF", path: "/scan-to-pdf" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
