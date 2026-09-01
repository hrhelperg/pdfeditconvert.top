import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Come ridurre un PDF prima di caricarlo su un portale",
  description:
    "I portali di caricamento rifiutano i file pesanti con più severità della mail. Come far stare un PDF sotto limiti molto stretti senza perdere la leggibilità che verificano.",
  updated: "2026-05-23",
  intro: [
    "I portali di caricamento sono più severi della mail. Un modulo della pubblica amministrazione, un sistema di candidatura, un portale fiscale o delle risorse umane spesso impongono un tetto di 2, 4 o 5 MB e rifiutano qualunque cosa sia più pesante con un errore secco, senza seconde possibilità. Per di più, si tratta quasi sempre di documenti scansionati — esattamente i file più a rischio di essere troppo pesanti.",
    "Questa guida spiega come superare quei limiti usando lo strumento gratuito Comprimi PDF, che funziona nel tuo browser senza inviare nulla a un server. La particolarità dei portali è che il documento deve restare leggibile — un caricamento respinto e uno illeggibile sono entrambi un fallimento — quindi è un equilibrio da trovare.",
    "Vedremo come centrare un obiettivo di dimensione preciso, cosa fare quando il limite di un portale è spietatamente basso, e come mantenere il documento abbastanza leggibile da superare qualsiasi controllo ci sia dall’altra parte.",
  ],
  steps: [
    {
      title: "Trova il limite esatto del portale",
      body: "Leggi le note scritte in piccolo vicino al campo di caricamento. I portali indicano un tetto rigido — spesso 2–5 MB — e rifiutano tutto ciò che lo supera. Quel numero è il tuo obiettivo.",
    },
    {
      title: "Apri lo strumento Comprimi PDF",
      body: "Vai allo strumento Comprimi PDF. Elabora il file sul tuo dispositivo, un dettaglio importante visto che i documenti destinati ai portali sono spesso personali o ufficiali.",
    },
    {
      title: "Comprimi in base al limite",
      body: "Parti dal livello Consigliato; se il tetto è stretto, passa a Forte. Lo strumento mostra la dimensione risultante, così vedi subito se hai superato il limite.",
    },
    {
      title: "Verifica che sia ancora leggibile",
      body: "Apri il file compresso. I portali respingono i file troppo pesanti e chi li esamina respinge quelli illeggibili — il documento deve soddisfare entrambi. Controlla che il testo sia comodamente leggibile.",
    },
    {
      title: "Se non riesci a rientrare nel limite, riduci le pagine",
      body: "Se la sola compressione non basta a rientrare in un limite molto basso, elimina le pagine non necessarie con lo strumento Estrai pagine PDF, oppure carica le singole sezioni richieste separatamente, se il portale lo consente.",
    },
    {
      title: "Carica il file della dimensione giusta",
      body: "Invia la versione compressa. Conserva l’originale a piena qualità nel caso il portale chieda in seguito una copia più nitida.",
    },
  ],
  tips: [
    "Trova il limite esatto prima di comprimere. Comprimere alla cieca è tempo perso; un limite dichiarato di 4 MB ti dice esattamente quanto spingere.",
    "I portali chiedono un doppio superamento: abbastanza piccolo da caricare e abbastanza nitido da leggere. Una compressione Forte che trasforma un modulo in una poltiglia illeggibile fallirà comunque il controllo, anche se il caricamento va a buon fine.",
    "I documenti scansionati per una candidatura si comprimono in modo drastico, quindi anche un tetto di 2 MB è di solito raggiungibile — sono quasi tutti dati immagine.",
    "Se il limite è impossibile da raggiungere per una scansione di molte pagine, eliminare prima le pagine vuote o non pertinenti riduce la dimensione senza toccare la qualità.",
    "Conserva l’originale. Chi esamina il documento e non riesce a leggere un dettaglio potrebbe chiederti una copia più nitida, e ti conviene avere già pronto il file a piena qualità.",
  ],
  mobileNote:
    "Molti caricamenti sui portali avvengono dal telefono — fotografi un documento e lo invii sul momento. L’app PDF Editor comprime offline e ti lascia controllare la leggibilità prima di caricare, così non invii un file troppo pesante o troppo sfocato per passare il controllo.",
  faq: [
    {
      q: "Perché i portali di caricamento rifiutano il mio PDF anche se la mail lo accetta?",
      a: "I portali impongono limiti molto più stretti — spesso 2–5 MB contro i circa 25 MB della mail — e li applicano rigidamente. Un file che passa tranquillamente via mail può facilmente essere troppo pesante per un portale.",
    },
    {
      q: "Come faccio a centrare un obiettivo di dimensione preciso?",
      a: "Comprimi e controlla la dimensione risultante, aumentando il livello finché non rientri nel limite. Lo strumento mostra i numeri prima e dopo, così puoi mirare con precisione.",
    },
    {
      q: "E se anche la compressione Forte non basta?",
      a: "Elimina le pagine non necessarie con lo strumento Estrai pagine PDF, oppure carica le sezioni richieste separatamente, se il portale lo consente. In questo modo riduci la dimensione senza degradare ulteriormente le pagine rimaste.",
    },
    {
      q: "Il mio documento viene caricato sui vostri server quando lo comprimo?",
      a: "No. Lo strumento Comprimi PDF funziona nel tuo browser, sul tuo dispositivo — un aspetto importante dato che i documenti destinati ai portali sono spesso personali o ufficiali.",
    },
    {
      q: "Una compressione pesante può far respingere il file dal portale perché illeggibile?",
      a: "Può succedere. I portali hanno bisogno di un file abbastanza piccolo da caricare e abbastanza nitido da leggere. Controlla la leggibilità dopo la compressione, e conserva l’originale per qualunque richiesta successiva.",
    },
  ],
  related: [
    { label: "Comprimi PDF — rientra nel limite del portale", path: "/compress-pdf" },
    { label: "Estrai pagine PDF — elimina pagine per risparmiare spazio", path: "/extract-pdf-pages" },
    { label: "Migliori impostazioni di compressione PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Comprimi PDF", path: "/compress-pdf" },
};

export default content;
