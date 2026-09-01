import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "Come aggiungere una filigrana a un PDF (gratis)",
  description:
    "Applica una scritta come BOZZA o RISERVATO su ogni pagina di un PDF nel tuo browser. Cosa protegge davvero una filigrana e cosa no, spiegato con onestà.",
  updated: "2026-05-23",
  intro: [
    "Una filigrana è un’etichetta scritta sulla pagina — BOZZA, RISERVATO, il nome di un’azienda, la mail di un destinatario. Si usa per segnalare uno stato («questo non è definitivo»), per marcare la proprietà, o per scoraggiare una diffusione superficiale timbrando a chi era destinata una copia.",
    "Questa guida usa lo strumento gratuito Add Watermark to PDF, che sovrappone una filigrana di testo su ogni pagina direttamente nel tuo browser — nulla viene caricato. È veloce e privato, utile esattamente per gli scopi di segnalazione descritti sopra.",
    "È altrettanto importante essere chiari su cosa una filigrana NON è: non è sicurezza. Vedremo dove le filigrane aiutano davvero e dove invece serve una protezione vera, così non ci farai affidamento per un compito che non può svolgere.",
  ],
  steps: [
    {
      title: "Apri lo strumento Add Watermark to PDF",
      body: "Vai allo strumento Add Watermark to PDF nel tuo browser. Funziona sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. La filigrana verrà applicata a ogni pagina del documento.",
    },
    {
      title: "Digita il testo della filigrana",
      body: "Inserisci l’etichetta che vuoi — BOZZA, RISERVATO, il nome della tua azienda, o un identificativo del destinatario. Tienila breve, così si legge bene su tutta la pagina.",
    },
    {
      title: "Applica la filigrana",
      body: "Avvia lo strumento. Il tuo testo viene timbrato su ogni pagina di una nuova copia del documento.",
    },
    {
      title: "Controlla la leggibilità in entrambi i sensi",
      body: "Verifica che la filigrana sia abbastanza visibile da svolgere il suo compito, ma abbastanza leggera da lasciare leggibile il testo sottostante. Una filigrana che oscura il contenuto va contro il suo stesso scopo.",
    },
    {
      title: "Scarica la copia con filigrana",
      body: "Salva il risultato come nuovo file, così conservi un originale pulito e senza segni per i tuoi archivi.",
    },
  ],
  tips: [
    "Una filigrana è un’etichetta visiva, non una protezione. Chiunque può fare uno screenshot, stampare o rielaborare la pagina — trattala come un segnale, non come un lucchetto.",
    "Usa una filigrana specifica per il destinatario (il suo nome o la sua mail) sulle copie che condividi per scoraggiare l’inoltro — le persone sono meno disinvolte con un documento visibilmente timbrato per loro.",
    "Tieni breve il testo della filigrana. Una frase lunga distesa sulla pagina compete con il contenuto e sembra confusione.",
    "Metti sempre la filigrana su una copia, mai sul tuo file principale. Il punto è proprio che l’originale resti pulito.",
    "Se ti serve davvero impedire apertura, copia o modifica, quello è un lavoro per password e crittografia — vedi la guida sulla protezione di un PDF, non la filigrana.",
  ],
  mobileNote:
    "Marcare un documento come BOZZA o RISERVATO prima di inviarlo dal telefono richiede pochi secondi nell’app PDF Editor, che applica le filigrane offline e ti lascia firmare o proteggere nella stessa sessione — utile quando una proposta esce prima di essere davvero definitiva.",
  faq: [
    {
      q: "Una filigrana protegge il mio documento?",
      a: "No. Una filigrana è un’etichetta visibile, non una misura di sicurezza. Segnala uno stato o una proprietà, ma non impedisce copia, stampa o modifica. Per quello, usa la protezione con password e la crittografia.",
    },
    {
      q: "La filigrana comparirà su ogni pagina?",
      a: "Sì. Lo strumento timbra il tuo testo su tutte le pagine del documento, così l’etichetta è coerente in tutto il file.",
    },
    {
      q: "La filigrana si può rimuovere?",
      a: "Una persona determinata può aggirare qualsiasi filigrana visibile, motivo per cui è un deterrente e non una protezione. Tieni separato il tuo originale senza segni.",
    },
    {
      q: "Il mio PDF viene caricato?",
      a: "No. La filigrana viene applicata nel tuo browser, sul tuo dispositivo, quindi il file resta privato.",
    },
    {
      q: "Posso aggiungere una filigrana con un’immagine o un logo?",
      a: "Lo strumento nel browser applica una filigrana di testo. Per una sovrapposizione con immagine o logo, l’app mobile PDF Editor offre più opzioni.",
    },
  ],
  related: [
    { label: "Add Watermark to PDF — nel tuo browser", path: "/add-watermark-to-pdf" },
    { label: "Come proteggere un file PDF con una password", path: "/guides/how-to-protect-pdf-file" },
    { label: "Come preparare un PDF prima di condividerlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "PDF Security — proteggi i documenti", path: "/pdf-security" },
  ],
  parentHub: { label: "Add Watermark to PDF", path: "/add-watermark-to-pdf" },
};

export default content;
