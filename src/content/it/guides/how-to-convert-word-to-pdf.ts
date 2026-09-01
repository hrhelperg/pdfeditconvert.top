import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Come convertire un Word in PDF, gratis e senza caricare nulla",
  description:
    "Trasforma un file .docx o .txt in un PDF pulito e pronto da condividere nel tuo browser. Perché il PDF è il formato giusto da inviare, e cosa controllare prima di esportare.",
  updated: "2026-05-23",
  intro: [
    "Inviare un documento Word a qualcuno fuori dal tuo ambiente è una piccola scommessa. Potrebbe aprirlo in una versione diversa di Word, in Google Docs, o su un telefono senza alcuna app per ufficio — e l’impaginazione che hai curato con attenzione può spostarsi, riadattarsi, o semplicemente rifiutarsi di aprirsi. Convertire in PDF elimina questa scommessa. Un PDF appare uguale ovunque e non può essere modificato per sbaglio.",
    "Questa guida spiega come trasformare un file .docx o .txt in un PDF usando lo strumento gratuito Word to PDF, che gira nel tuo browser senza caricare nulla. È la mossa giusta ogni volta che un documento è finito ed è destinato a qualcun altro: un preventivo, una lettera di presentazione, una fattura, un modulo firmato, un report per un cliente.",
    "Vedremo anche le poche cose che vale la pena controllare prima di esportare, così il PDF che invii è proprio quello che intendevi inviare.",
  ],
  steps: [
    {
      title: "Finisci prima di modificare in Word",
      body: "Un PDF è una fotografia, non un documento di lavoro. Fai ogni modifica che intendi fare in Word, Google Docs o Pages prima di convertire — correggere un refuso dopo l’esportazione significa riconvertire da capo.",
    },
    {
      title: "Apri lo strumento Word to PDF",
      body: "Vai allo strumento Word to PDF nel tuo browser. Non c’è nulla da installare né da registrare; la conversione avviene sul tuo dispositivo.",
    },
    {
      title: "Aggiungi il tuo file .docx o .txt",
      body: "Trascina il file nella zona di rilascio o fai clic per selezionarlo. Anche i semplici file .txt si convertono — comodo per trasformare appunti o log in un documento ordinato.",
    },
    {
      title: "Converti e scarica",
      body: "Fai clic su Converti in PDF. Lo strumento genera il documento e il PDF si scarica automaticamente, pronto per essere allegato o caricato.",
    },
    {
      title: "Apri il PDF e rileggilo",
      body: "Apri sempre il risultato prima di inviarlo. Verifica che le interruzioni di pagina cadano in modo sensato, che i titoli siano dove ti aspetti, e che nulla sia stato tagliato a un margine.",
    },
    {
      title: "Rinominalo in modo descrittivo",
      body: "«Fattura-Acme-2026-05.pdf» dice al destinatario cosa sta guardando; «Documento1.pdf» no. Un nome file chiaro aiuta anche a ritrovarlo più tardi in una ricerca.",
    },
  ],
  tips: [
    "Attieniti a font comuni (Calibri, Arial, Times New Roman, Inter). I font esotici possono essere sostituiti durante la conversione e spostare l’impaginazione.",
    "Se il tuo documento dipende da un formato di pagina specifico, impostalo in Word prima di convertire, invece di aspettarti che lo strumento lo indovini.",
    "Convertire in PDF non crittografa né blocca il file contro la copia — impedisce solo modifiche casuali. Per una vera protezione, aggiungi una password separatamente.",
    "Funzioni Word complesse come commenti incorporati, revisioni tracciate e macro non fanno parte di un PDF. Accetta o rimuovi prima le revisioni tracciate, così non compaiono nel risultato.",
    "Per un documento che dovrai modificare di nuovo in seguito, conserva il .docx. Il PDF è la copia da inviare, non il tuo file principale.",
  ],
  mobileNote:
    "Devi inviare un documento finito dal telefono? L’app PDF Editor trasforma i documenti in PDF, li firma e li condivide direttamente dal menu di condivisione — utile quando un contratto deve tornare indietro prima che tu sia vicino a una scrivania.",
  faq: [
    {
      q: "La mia formattazione sopravviverà alla conversione?",
      a: "Per i documenti comuni con font diffusi, sì — è proprio lo scopo del PDF. L’unica cosa da controllare sono i font insoliti, che potrebbero essere sostituiti. Apri il PDF e verifica prima di inviarlo.",
    },
    {
      q: "Posso convertire anche un file .txt?",
      a: "Sì. I file di testo semplice si convertono in un PDF pulito e leggibile, un modo rapido per rendere presentabili appunti, log o dati esportati.",
    },
    {
      q: "Il mio documento viene caricato da qualche parte?",
      a: "No. La conversione avviene nel tuo browser, sul tuo stesso dispositivo, quindi il file non lo lascia mai. Questo conta per contratti, fatture e qualsiasi cosa con dati personali.",
    },
    {
      q: "Convertire in PDF protegge il documento?",
      a: "Impedisce modifiche casuali e mantiene fissa l’impaginazione, ma non è crittografia. Se devi impedire che il file venga aperto o copiato, aggiungi una password — la sola conversione non basta.",
    },
    {
      q: "Posso modificare il PDF in seguito?",
      a: "I PDF servono per correzioni e firme, non per riscritture pesanti. Se devi apportare grandi cambiamenti, modifica il .docx originale e riesporta, oppure riconverti il PDF in Word.",
    },
  ],
  related: [
    { label: "Word to PDF — converti nel tuo browser", path: "/word-to-pdf" },
    { label: "PDF to Word — la conversione inversa", path: "/pdf-to-word" },
    { label: "Come convertire PDF in Word", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "Quando usare il PDF invece del DOCX", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
