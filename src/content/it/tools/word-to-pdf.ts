import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word a PDF",
    h1: "Converti Word in PDF — nel browser.",
    highlight: "nel browser",
    lead: "Trasforma un file .docx o .txt in un PDF pulito e pronto da condividere. Funziona interamente sul tuo dispositivo — il tuo documento non viene mai inviato a un server.",
  },
  privacyNote:
    "Il tuo file viene elaborato in locale, nel tuo browser, e non viene inviato ai nostri server. Niente lascia il tuo dispositivo.",
  howTo: {
    heading: "Come convertire Word in PDF",
    steps: [
      {
        title: "Aggiungi il tuo documento",
        body: "Trascina un file .docx o .txt nella pagina, oppure fai clic per sceglierne uno.",
      },
      {
        title: "Converti",
        body: "Fai clic su Converti in PDF. Il testo viene letto e impaginato in un PDF in locale, nel tuo browser.",
      },
      {
        title: "Scarica",
        body: "Un PDF A4 pulito si scarica automaticamente.",
      },
      {
        title: "Condividi",
        body: "Invia un formato che appare uguale ovunque e non può essere modificato per errore.",
      },
    ],
  },
  useCases: {
    heading: "Quando questo è lo strumento giusto",
    items: [
      {
        title: "Invia una copia non modificabile",
        body: "Condividi una bozza come PDF così chi la riceve non può cambiarla per sbaglio.",
      },
      {
        title: "Invia una candidatura",
        body: "Molti portali richiedono PDF, non .docx — converti prima di caricare il file.",
      },
      {
        title: "Archivia appunti semplici",
        body: "Trasforma log o appunti .txt in un PDF ordinato e paginato per l’archivio.",
      },
      {
        title: "Consegna pronta per la stampa",
        body: "Ottieni un PDF A4 coerente a partire da un documento semplice.",
      },
    ],
  },
  limitations: {
    heading: "Limiti onesti",
    items: [
      {
        title: "Conversione incentrata sul testo",
        body: "Estraiamo e reimpaginiamo il testo del documento in un PDF pulito. I caratteri originali, le immagini, le tabelle e la spaziatura esatta del .docx non vengono riprodotti.",
      },
      {
        title: "Nessun supporto per il vecchio .doc",
        body: "I vecchi file binari .doc non possono essere letti nel browser. Salvali prima come .docx.",
      },
      {
        title: "Caratteri insoliti semplificati",
        body: "Il carattere PDF integrato copre il testo latino; alcuni caratteri speciali vengono semplificati in modo che la conversione non fallisca mai.",
      },
    ],
  },
  related: [
    { label: "PDF a Word — il percorso inverso", path: "/pdf-to-word" },
    { label: "Immagine a PDF", path: "/image-to-pdf" },
    { label: "Unisci PDF", path: "/merge-pdf" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    {
      label: "Come convertire Word in PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Il mio file viene inviato a un server?",
      a: "No. La conversione avviene interamente nel tuo browser. Il tuo documento non lascia mai il tuo dispositivo.",
    },
    {
      q: "Il PDF sarà identico al mio file Word?",
      a: "No — e non affermiamo che lo sia. È una conversione pulita, incentrata sul testo: caratteri, immagini, tabelle e spaziatura esatta del .docx non vengono riprodotti.",
    },
    {
      q: "Quali file sono supportati?",
      a: "Word .docx moderno e testo semplice .txt. Il vecchio formato binario .doc non è supportato — salvalo prima come .docx.",
    },
    {
      q: "C’è un limite di dimensione?",
      a: "Fino a 100 MB per file, perché tutto viene elaborato nella memoria del tuo browser.",
    },
    {
      q: "Posso riconvertire il PDF in Word?",
      a: "Sì — usa PDF a Word per estrarre di nuovo il testo in un file .docx modificabile.",
    },
  ],
  appCta: {
    heading: "Ti servono strumenti PDF in mobilità?",
    sub: "PDF Editor per iPhone e Android converte, firma e condivide documenti direttamente dal telefono.",
  },
};

export default content;
