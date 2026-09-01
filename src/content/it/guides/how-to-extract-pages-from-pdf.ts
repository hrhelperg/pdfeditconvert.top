import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Come estrarre pagine da un PDF (gratis, senza caricare nulla)",
  description:
    "Estrai pagine o intervalli specifici da un PDF in un nuovo file, nel tuo browser. Perfetto per inviare solo le pagine che servono a qualcuno.",
  updated: "2026-05-23",
  intro: [
    "Estrarre pagine è la risposta a un’esigenza molto precisa: a qualcuno serve una parte del documento, non tutto quanto. La banca ha bisogno di pagina 3, il modulo richiede la pagina della firma, la revisione della proposta riguarda solo la sezione dei prezzi. Inoltrare l’intero file di 40 pagine dicendo «guarda pagina 12» è pigro e, per qualsiasi cosa sensibile, negligente.",
    "Questa guida usa lo strumento gratuito Extract PDF Pages, che ti lascia scegliere le pagine che vuoi e salvarle come un nuovo PDF — tutto nel tuo browser, senza caricare nulla. L’originale resta intatto; ottieni solo un file pulito che contiene esclusivamente quello che hai scelto.",
    "È una delle operazioni PDF più utili proprio perché funge anche da strumento per la privacy: invii esattamente le pagine necessarie e nient’altro.",
  ],
  steps: [
    {
      title: "Apri lo strumento Extract PDF Pages",
      body: "Vai allo strumento Extract PDF Pages nel tuo browser. Funziona interamente sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per selezionarlo. Lo strumento carica il numero di pagine così puoi scegliere con precisione.",
    },
    {
      title: "Scegli le pagine che vuoi",
      body: "Inserisci pagine singole o intervalli — per esempio 3, poi 8-10. Solo le pagine che elenchi finiscono nel nuovo file.",
    },
    {
      title: "Crea il nuovo PDF",
      body: "Avvia l’estrazione. Lo strumento costruisce un PDF nuovo contenente solo le pagine selezionate, nell’ordine che hai scelto.",
    },
    {
      title: "Scarica e nominalo",
      body: "Salva il file estratto con un nome che dica cosa contiene — «Pagina-firma.pdf» o «Sezione-prezzi.pdf».",
    },
    {
      title: "Conferma prima di inviare",
      body: "Apri il nuovo PDF e verifica che contenga solo le pagine previste. Questo è il momento per accorgersi di un numero di pagina sbagliato di uno prima che raggiunga qualcuno.",
    },
  ],
  tips: [
    "Estrai quando vuoi raccogliere poche pagine in un unico nuovo file; dividi quando vuoi spezzare un documento in più file. Fai corrispondere lo strumento all’obiettivo.",
    "Estrarre è un piccolo vantaggio per la privacy: inviare solo le pagine pertinenti significa nessuna esposizione accidentale del resto del documento.",
    "Ricontrolla i numeri di pagina rispetto al documento, non all’indice del visualizzatore PDF — copertine e inserti possono spostare il conteggio di uno.",
    "L’originale non viene mai modificato, quindi puoi estrarre insiemi di pagine diversi dallo stesso file tutte le volte che ti serve.",
    "Per rimuovere delle pagine e tenere il resto, estrai le pagine che vuoi mantenere — è il modo più pulito per eliminare qualche pagina indesiderata.",
  ],
  mobileNote:
    "Devi rimandare solo la pagina firmata dal telefono? L’app PDF Editor estrae e condivide pagine specifiche in pochi tocchi, offline — così esce solo la pagina giusta, senza inoltrare l’intero file riservato.",
  faq: [
    {
      q: "In cosa estrarre è diverso da dividere?",
      a: "Estrarre raccoglie le pagine che scegli in un unico nuovo file. Dividere spezza un PDF in più file separati. Usa estrai per raccogliere pagine specifiche, dividi per suddividere un documento.",
    },
    {
      q: "Posso scegliere pagine non consecutive?",
      a: "Sì. Elenca pagine singole e intervalli insieme, come 1, 4, 9-12, e il nuovo PDF conterrà esattamente quelle pagine in quell’ordine.",
    },
    {
      q: "Estrarre modifica l’originale?",
      a: "No. Il PDF sorgente resta intatto; lo strumento crea un nuovo file. Puoi eseguire tutte le estrazioni che vuoi dallo stesso originale.",
    },
    {
      q: "Il mio file viene caricato?",
      a: "No. L’estrazione avviene nel tuo browser, sul tuo dispositivo, quindi i documenti riservati restano privati.",
    },
    {
      q: "Come rimuovo delle pagine invece di tenerle?",
      a: "Estrai le pagine che vuoi mantenere — quelle indesiderate semplicemente non vengono incluse. È il percorso più semplice per eliminare qualche pagina da un PDF.",
    },
  ],
  related: [
    { label: "Extract PDF Pages — estrai pagine nel tuo browser", path: "/extract-pdf-pages" },
    { label: "Split PDF — dividi un file per intervallo", path: "/split-pdf" },
    { label: "Come dividere un PDF in file separati", path: "/guides/how-to-split-pdf-files" },
    { label: "Come rimuovere le pagine indesiderate da un PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Extract PDF Pages", path: "/extract-pdf-pages" },
};

export default content;
