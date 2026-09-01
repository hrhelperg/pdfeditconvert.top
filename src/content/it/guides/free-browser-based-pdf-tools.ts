import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Strumenti PDF gratuiti nel browser (senza installazione, senza caricamento)",
  description:
    "Gli strumenti PDF che funzionano interamente nel tuo browser — senza installazione, senza account, senza caricare nulla. Cosa c’è disponibile, cosa copre, e come verificare che sia davvero locale.",
  updated: "2026-05-29",
  intro: [
    "Gli strumenti PDF basati sul browser hanno cambiato cosa significa «online». Il vecchio modello era: carica il tuo file, il server lo elabora, scarichi il risultato. Il nuovo modello è: visita una pagina, il tuo browser elabora il file in locale, scarichi il risultato. La differenza conta — velocità, privacy, e il fatto che lo strumento può restare davvero gratuito.",
    "Gli strumenti basati sul browser non sono un’affermazione di marketing; sono un’architettura. L’elaborazione avviene in JavaScript o WebAssembly sulla tua macchina, nella scheda del browser. Nessun server è coinvolto nella gestione del tuo file. La privacy e la gratuità derivano dall’architettura, non da una politica dichiarata.",
    "Questa guida copre cosa è disponibile oggi negli strumenti PDF basati sul browser, le attività che coprono bene, quelle che ancora non coprono, e come verificare che uno strumento sia davvero locale prima di fidartene.",
  ],
  steps: [
    {
      title: "Sappi cosa è disponibile in forma basata sul browser",
      body: "Compressione, unione, divisione, estrazione di pagine, riordino delle pagine, rotazione, filigrana, immagine-in-PDF, PDF-in-immagini, Word-in-PDF, PDF-in-Word, firma. Lo stack basato sul browser copre la maggior parte del lavoro PDF quotidiano.",
    },
    {
      title: "Verifica che lo strumento sia davvero locale",
      body: "Strumenti per sviluppatori del browser, scheda rete, aggiungi un file. Uno strumento genuinamente basato sul browser non mostra nessuna richiesta in uscita di grandi dimensioni quando aggiungi il file. Il controllo richiede pochi secondi.",
    },
    {
      title: "Usa Comprimi PDF per ridurre la dimensione",
      body: "Aggiungi un PDF, scegli un livello di compressione, scarica. L’intera operazione avviene nel tuo browser. I file pieni di scansioni si riducono drasticamente; i file di solo testo cambiano appena.",
    },
    {
      title: "Usa Unisci PDF per combinare i file",
      body: "Aggiungi più PDF, trascina per riordinare, scarica il file unito. L’unione avviene in locale; il file combinato viene generato nella memoria del tuo browser.",
    },
    {
      title: "Usa Immagine in PDF e PDF in immagini per le conversioni tra immagine e documento",
      body: "Immagine in PDF combina JPG, PNG e WebP in un unico PDF. PDF in immagini estrae ogni pagina come PNG o JPG. Entrambi funzionano in locale.",
    },
    {
      title: "Usa l’app PDF Editor per i flussi di lavoro pensati per il mobile",
      body: "Alcuni flussi di lavoro (firmare, scansionare, modificare dal telefono) funzionano meglio in un’app mobile dedicata che in un browser. L’app PDF Editor è il complemento iOS/Android dello stack basato sul browser — stessa impostazione di privacy, più adatta ai casi d’uso da telefono.",
    },
  ],
  tips: [
    "Gli strumenti basati sul browser funzionano offline una volta caricata la pagina. Una conferma utile che sono davvero locali.",
    "Le operazioni pesanti su file molto grandi possono occupare la CPU della scheda del browser per qualche secondo — è normale, non un blocco.",
    "Le operazioni su più pagine scorrono in streaming nei browser moderni — non devi aspettare che l’intero file si carichi perché non si sta caricando nulla.",
    "Salva l’URL dello strumento — gli strumenti basati sul browser funzionano senza account, quindi l’URL è il tuo equivalente di un segnalibro.",
    "Non fidarti dell’etichetta «basato sul browser» senza controllare gli strumenti per sviluppatori. Alcuni strumenti hanno un’interfaccia nel browser ma caricano comunque il file.",
  ],
  mobileNote:
    "Anche i browser mobile eseguono gli strumenti PDF basati sul browser. L’app PDF Editor usa la stessa architettura in un involucro nativo, con la stessa elaborazione sul dispositivo — chi usa iPhone e Android ottiene la stessa garanzia gratuita, senza caricamenti.",
  faq: [
    {
      q: "Quali attività PDF possono funzionare in un browser?",
      a: "Compressione, unione, divisione, estrazione di pagine, riordino, rotazione, filigrana, conversione immagine↔PDF, Word↔PDF, firma. Ci rientra la maggior parte del lavoro PDF quotidiano.",
    },
    {
      q: "Cosa non può ancora funzionare in un browser?",
      a: "L’OCR ad alta precisione su documenti lunghi, l’oscuramento avanzato e alcuni flussi di lavoro specializzati per la prestampa traggono ancora vantaggio dall’elaborazione lato server.",
    },
    {
      q: "Come capisco se uno strumento è davvero basato sul browser?",
      a: "Strumenti per sviluppatori del browser, scheda rete. Aggiungi un file. Se non vedi una richiesta in uscita di grandi dimensioni, sta elaborando in locale. Se vedi una richiesta POST di diversi megabyte, sta caricando.",
    },
    {
      q: "Basato sul browser è più lento di lato server?",
      a: "Paragonabile per la maggior parte delle attività. I browser moderni e WebAssembly sono veloci. I file molto grandi possono richiedere più tempo in locale, ma risparmi il tempo di caricamento e scaricamento.",
    },
    {
      q: "Perché gli strumenti basati sul browser sono di solito gratuiti?",
      a: "Perché il lavoro pesante avviene sul tuo dispositivo, non sui server dello strumento. I costi di hosting sono minimi; lo strumento può restare gratuito senza la pressione di un abbonamento.",
    },
  ],
  related: [
    { label: "Strumenti PDF — l’elenco completo degli strumenti nel browser", path: "/pdf-tools" },
    { label: "I migliori strumenti PDF gratuiti", path: "/guides/best-free-pdf-tools" },
    { label: "I migliori strumenti PDF senza caricamento", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Vantaggi dell’elaborazione dei documenti nel browser", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
