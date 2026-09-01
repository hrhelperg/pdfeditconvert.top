import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "Come convertire un PDF in Word, gratis e nel browser",
  description:
    "Estrai il testo da un PDF in un documento Word modificabile, senza caricare nulla. Cosa si converte bene, cosa richiede ritocchi, e quando una scansione non funziona.",
  updated: "2026-05-23",
  intro: [
    "Chi vuole «convertire un PDF in Word» in realtà vuole quasi sempre una cosa sola: riavere il testo, in un documento che può modificare. Magari il .docx originale è andato perso da tempo, magari un collega ti ha inviato solo il PDF, o magari devi riprendere qualche clausola da un contratto senza riscriverla da capo. È un lavoro di estrazione del testo, ed è più veloce di quanto sembri.",
    "Questa guida usa lo strumento gratuito PDF to Word, che gira interamente nel tuo browser — il tuo file non viene mai caricato. Legge il livello di testo di un PDF e ti restituisce un .docx che puoi aprire in Word, Google Docs, Pages o LibreOffice. Quello che non fa è ricostruire l’impaginazione originale pixel per pixel, ed è meglio saperlo in anticipo perché il risultato non ti sorprenda.",
    "Di seguito trovi il flusso pratico, i tipi di PDF che si convertono bene, e i casi onesti in cui dovrai sistemare qualcosa dopo, o rivolgerti a un approccio diverso.",
  ],
  steps: [
    {
      title: "Apri lo strumento PDF to Word",
      body: "Vai allo strumento PDF to Word. Niente da installare, nessun account — il convertitore si carica nel browser ed elabora il file sul tuo stesso dispositivo.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il PDF nella zona di rilascio o fai clic per sceglierlo. Usa un PDF basato su testo — uno in cui puoi selezionare e copiare il testo in qualsiasi visualizzatore. Se il testo non si evidenzia quando provi a selezionarlo, il file è una scansione e non si convertirà (vedi i limiti più sotto).",
    },
    {
      title: "Avvia la conversione",
      body: "Fai clic su Converti in Word. Lo strumento analizza il livello di testo del PDF e lo ricostruisce come un .docx a flusso continuo. Per un documento tipico di più pagine ci vogliono pochi secondi.",
    },
    {
      title: "Scarica il .docx",
      body: "Il file Word si scarica automaticamente. Aprilo nell’editor che preferisci — il testo arriva come paragrafi modificabili che puoi ristrutturare liberamente.",
    },
    {
      title: "Riapplica la formattazione",
      body: "Titoli, grassetto, colonne e spaziatura di solito richiedono un intervento manuale. Rimarca i tuoi titoli con gli stili del tuo editor, ripristina eventuali tabelle, e il documento torna a essere tuo.",
    },
    {
      title: "Reinserisci le immagini se ti servono",
      body: "L’estrazione del testo non trasporta le immagini. Se l’originale aveva un logo, un grafico o una foto che ti serve, reinseriscila dal PDF di partenza — esporta prima la pagina come immagine, se necessario.",
    },
  ],
  tips: [
    "Controlla prima la selezionabilità: se non riesci a evidenziare il testo nel PDF, è un’immagine scansionata e l’estrazione del testo non restituirà nulla di utilizzabile.",
    "I documenti semplici a colonna singola (lettere, memo, report semplici) si convertono nel modo più pulito. I PDF con un’impaginazione elaborata, più colonne e note a piè di pagina vengono estratti come un unico flusso leggibile che dovrai sistemare.",
    "Non aspettarti che le tabelle sopravvivano intatte — di solito arrivano come sequenze di testo. Ricostruisci le tabelle importanti nel tuo editor invece di lottare con la versione estratta.",
    "Tieni il PDF originale aperto accanto mentre riformatti. È molto più veloce dare un’occhiata alla fonte che indovinare la struttura prevista.",
    "Se ti servono solo poche frasi, copiale direttamente da un visualizzatore di PDF invece di convertire l’intero file — la conversione ha senso quando ti serve la maggior parte del documento.",
  ],
  mobileNote:
    "Lavori dal telefono? L’app PDF Editor converte e modifica documenti in mobilità e, a differenza di un browser, può eseguire il riconoscimento del testo sulle pagine scansionate — utile quando il PDF che hai ricevuto è in realtà la foto di una pagina stampata, non un documento digitale.",
  faq: [
    {
      q: "Il file Word sarà identico al PDF?",
      a: "No, e nessuno strumento onesto dovrebbe prometterlo. Questa è una conversione di testo: font, colonne, spaziatura esatta e immagini non vengono riprodotti. Riottieni le parole come paragrafi modificabili e riapplichi la formattazione nel tuo editor.",
    },
    {
      q: "Dice che non è stato trovato alcun testo — cosa è andato storto?",
      a: "Il tuo PDF è quasi certamente una scansione o un file solo immagine, senza livello di testo. Gli strumenti da browser non possono leggere testo da un’immagine. L’app mobile PDF Editor può eseguire il riconoscimento del testo sulle scansioni: è la strada da percorrere in quel caso.",
    },
    {
      q: "Il mio documento viene caricato su un server?",
      a: "No. L’estrazione avviene in locale nel tuo browser, quindi il PDF non lascia mai il tuo dispositivo. Questo lo rende sicuro da usare per contratti e altri file sensibili.",
    },
    {
      q: "In che formato ottengo il file?",
      a: "Un normale .docx che si apre in Microsoft Word, Google Docs, Apple Pages e LibreOffice. Puoi riesportarlo in PDF più avanti, se ti serve.",
    },
    {
      q: "Posso riconvertirlo in PDF quando ho finito di modificarlo?",
      a: "Sì — usa lo strumento Word to PDF per trasformare il tuo .docx finito di nuovo in un PDF pulito e pronto da condividere.",
    },
  ],
  related: [
    { label: "PDF to Word — converti nel tuo browser", path: "/pdf-to-word" },
    { label: "Word to PDF — la conversione inversa", path: "/word-to-pdf" },
    { label: "Come convertire Word in PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF o DOCX — quale formato usare", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
