import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Come rimuovere le pagine indesiderate da un PDF",
  description:
    "Elimina pagine bianche, copertine o sezioni non pertinenti da un PDF nel tuo browser, tenendo solo le pagine che vuoi. File puliti, processo privato.",
  updated: "2026-05-23",
  intro: [
    "Molti PDF arrivano con pagine che non vuoi: una copertina da fax, una pagina bianca aggiunta dallo scanner, un allegato di termini e condizioni che nessuno ha chiesto, o pagine duplicate da un’unione fatta con poca cura. Inviare il documento con quell’ingombro ancora attaccato appare trascurato e, a volte, fa trapelare informazioni che preferiresti non condividere.",
    "Il modo più pulito per rimuovere pagine nel browser è tenere quelle che vuoi. Questa guida usa lo strumento gratuito Extract PDF Pages: invece di eliminare le pagine indesiderate una per una, elenchi quelle da mantenere, e tutto il resto viene semplicemente escluso dal nuovo file. Funziona interamente sul tuo dispositivo — nulla viene caricato.",
    "Il risultato è un PDF ordinato con solo le pagine giuste, e il tuo originale resta intatto nel caso avessi sbagliato un numero di pagina.",
  ],
  steps: [
    {
      title: "Individua le pagine da rimuovere",
      body: "Apri il PDF e prendi nota di quali pagine sono indesiderate — la pagina 2 bianca, la copertina, il duplicato in fondo. Poi stabilisci quali pagine vuoi tenere.",
    },
    {
      title: "Apri lo strumento Extract PDF Pages",
      body: "Vai allo strumento Extract PDF Pages nel tuo browser. Funziona sul tuo dispositivo, senza caricamento né account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. Lo strumento carica il numero di pagine così puoi essere preciso.",
    },
    {
      title: "Elenca le pagine da tenere",
      body: "Inserisci le pagine e gli intervalli da mantenere — per esempio 1, 3-7, 9. Le pagine indesiderate non vengono elencate, quindi non compaiono nel risultato.",
    },
    {
      title: "Crea il PDF ripulito",
      body: "Avvia l’estrazione. Lo strumento costruisce un nuovo file contenente solo le pagine mantenute, in ordine.",
    },
    {
      title: "Controlla e salva",
      body: "Apri il nuovo PDF, conferma che le pagine indesiderate siano sparite e che nulla di importante sia andato via con loro, poi salvalo con un nome chiaro.",
    },
  ],
  tips: [
    "Rimuovere pagine tenendo il resto è il metodo affidabile nel browser — descrivi cosa vuoi, non cosa eliminare, il che evita errori di uno-in-più o uno-in-meno.",
    "Attenzione alle pagine bianche degli scanner. Un alimentatore automatico spesso inserisce una pagina bianca tra originali stampati fronte-retro; sono le pagine più facili da dimenticare di togliere.",
    "Rimuovere una pagina è anche un gesto di privacy. Appunti interni, prezzi che non intendevi condividere, o i dati di un destinatario precedente possono nascondersi su pagine che non ti servono per l’invio.",
    "Verifica i numeri di pagina rispetto al documento stesso. Una copertina può sfalsare il conteggio, così che «pagina 5» nella tua testa è pagina 6 nel file.",
    "Tieni l’originale. Se elimini per sbaglio una pagina che ti serviva, la fonte intatta è lì pronta per ripartire.",
  ],
  mobileNote:
    "Tagliare via una pagina di troppo prima di inoltrare un documento dal telefono richiede pochi tocchi nell’app PDF Editor, che elimina le pagine direttamente e funziona offline — così la copertina o la pagina bianca non finisce mai nella copia che invii.",
  faq: [
    {
      q: "Come elimino pagine usando uno strumento da browser?",
      a: "Tieni le pagine che vuoi con lo strumento Extract PDF Pages. Elencando solo le pagine da mantenere, quelle indesiderate vengono escluse dal nuovo file — un modo pulito per rimuovere pagine senza un vero e proprio passaggio di eliminazione.",
    },
    {
      q: "Il mio file originale verrà modificato?",
      a: "No. Lo strumento crea un nuovo PDF e lascia intatta la fonte, così un errore è facile da annullare ripartendo da capo.",
    },
    {
      q: "Il file viene caricato da qualche parte?",
      a: "No. Tutto avviene nel tuo browser, sul tuo dispositivo, il che conta quando le pagine che stai rimuovendo contengono informazioni sensibili.",
    },
    {
      q: "Posso rimuovere pagine non consecutive?",
      a: "Sì. Tieni una combinazione di pagine singole e intervalli, come 1, 4, 8-10, e ogni pagina che non hai elencato viene esclusa.",
    },
    {
      q: "E se voglio eliminare le pagine direttamente invece?",
      a: "L’app mobile PDF Editor ti permette di toccare ed eliminare pagine specifiche, un approccio che alcuni trovano più intuitivo rispetto a tenere solo quello che vuoi.",
    },
  ],
  related: [
    { label: "Extract PDF Pages — tieni solo ciò che ti serve", path: "/extract-pdf-pages" },
    { label: "Split PDF — dividi un file per intervallo", path: "/split-pdf" },
    { label: "Come estrarre pagine da un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Come organizzare i tuoi file PDF", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Extract PDF Pages", path: "/extract-pdf-pages" },
};

export default content;
