import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Flussi di lavoro documentali che mettono la privacy al primo posto (senza caricamenti)",
  description:
    "Un intero flusso di lavoro sui documenti — acquisizione, modifica, firma, invio, archiviazione — che tiene i file sui tuoi dispositivi e fuori dai server di terzi. La forma realistica e gli strumenti giusti.",
  updated: "2026-05-29",
  intro: [
    "La maggior parte dei flussi di lavoro documentali perde qualcosa lungo il percorso. Scansioni una carta sensibile con un’app, la carichi su un sito per comprimerla, la mandi via mail attraverso uno strumento di terzi che promette di «migliorarla», e finisci con tre o quattro server che conservano copie di qualcosa che pensavi restasse solo tuo. Ogni passaggio è comodo; il costo cumulativo per la privacy è grande e invisibile.",
    "Un flusso di lavoro che mette la privacy al primo posto non rifiuta gli strumenti moderni — sceglie quelli che non spostano i tuoi file. L’acquisizione avviene con la tua fotocamera. La compressione e la modifica avvengono nel tuo browser. La firma avviene in un’app sul tuo telefono. Il trasferimento avviene attraverso un canale di cui ti fidi. In nessun momento il documento vive sul server di uno sconosciuto.",
    "Questa guida descrive la forma end-to-end, gli strumenti adatti a ogni passaggio, e dove l’elaborazione locale davvero non riesce ad arrivare (un insieme più piccolo di quanto la maggior parte delle persone pensi). È il flusso di lavoro realistico che mette la privacy al primo posto, non quello assolutista.",
  ],
  steps: [
    {
      title: "Acquisizione: scansiona in locale con il telefono",
      body: "Scansiona in PDF sul telefono fa girare la fotocamera e il rilevamento delle pagine direttamente sul dispositivo. Nessun caricamento, nessuna elaborazione nel cloud. Il PDF che produci nasce e resta locale finché non decidi tu di condividerlo.",
    },
    {
      title: "Modifica e ripulisci in una scheda del browser",
      body: "Comprimi PDF, Riordina le pagine del PDF, Estrai pagine PDF, Ruota PDF, Aggiungi filigrana a PDF — funzionano tutti nel browser. Il file viene letto da JavaScript sulla tua macchina; il server non vede mai il contenuto.",
    },
    {
      title: "Firma con una firma vera, in locale",
      body: "Firma PDF o l’app PDF Editor catturano una firma disegnata sul tuo dispositivo e la incorporano nel file. Nessuna piattaforma di firma di terzi vede il documento.",
    },
    {
      title: "Condividi attraverso un canale fidato",
      body: "AirDrop, Signal, mail crittografata, messaggistica crittografata end-to-end. Il canale crittografa il trasferimento; il destinatario riceve il file senza che passi attraverso un intermediario capace di leggerlo.",
    },
    {
      title: "Archivia su archiviazione crittografata",
      body: "Disco locale con crittografia completa, oppure backup cloud a conoscenza zero. Non conservare PDF sensibili su archiviazione cloud normale — significa avere un server che legge i tuoi file.",
    },
    {
      title: "Rivedi ed elimina secondo una scadenza fissa",
      body: "Ripassa i PDF sensibili ogni trimestre. Elimina ciò che non ti serve più. Ogni file sensibile conservato è un piccolo rischio continuo; ridurre l’inventario riduce l’esposizione.",
    },
  ],
  tips: [
    "Acquisizione, modifica e firma possono avvenire tutte sullo stesso dispositivo. Meno passaggi tra dispositivi, più piccola è la superficie di eventuali fughe.",
    "Verifica che uno strumento «basato sul browser» funzioni davvero in locale prima di fidarti. La scheda rete degli strumenti per sviluppatori è il controllo più rapido.",
    "Crittografa i PDF sensibili con una password anche quando li condividi attraverso canali già crittografati. È una difesa a più livelli.",
    "Evita i servizi di condivisione file con «invia link» per materiale sensibile. Il link è una chiave lato server; il file vive sul disco di qualcun altro.",
    "Non stampare PDF sensibili a meno che tu non debba farlo davvero. Sia la coda di stampa che la carta sono copie aggiuntive da tracciare.",
  ],
  mobileNote:
    "I flussi di lavoro che mettono la privacy al primo posto sono più facili dal telefono di quanto si pensi. L’app PDF Editor gestisce acquisizione, modifica, firma e condivisione in locale su iOS e Android, così un documento sensibile può passare dalla carta al destinatario senza mai toccare il server di terzi.",
  faq: [
    {
      q: "Un flusso di lavoro reale può davvero restare tutto locale?",
      a: "Per la maggior parte dei passaggi, sì. Acquisizione, compressione, modifica, firma e trasferimento ordinario possono avvenire tutti senza caricamenti. Alcune operazioni (OCR di alta qualità, oscuramento avanzato) a volte richiedono l’aiuto di un server; scegli con cura quegli strumenti se ti servono.",
    },
    {
      q: "Non è tutto un po’ paranoico?",
      a: "Non per il materiale sensibile. Il flusso di lavoro «carica ovunque» funzionava quando i documenti erano meno sensibili e le violazioni più rare. Entrambe le cose sono cambiate. Il flusso di lavoro che mette la privacy al primo posto richiede lo stesso tempo, una volta diventato abitudine.",
    },
    {
      q: "Come faccio a sapere se uno strumento del browser è davvero locale?",
      a: "Apri gli strumenti per sviluppatori, scheda rete, aggiungi un file. Se non vedi un grande caricamento in uscita, lo sta elaborando in locale. Gli strumenti di questo sito rientrano in questo schema.",
    },
    {
      q: "E i backup?",
      a: "Il backup cloud a conoscenza zero (il fornitore non può leggere i tuoi file) va bene. Il backup cloud normale di PDF sensibili non è privato — il fornitore può leggere tutto.",
    },
    {
      q: "Dove si rompe questo flusso di lavoro?",
      a: "In due punti: quando un flusso di lavoro richiede una piattaforma a pagamento specifica (settori regolamentati), e quando il destinatario usa dal suo lato un flusso di lavoro basato sui caricamenti. La privacy dipende da entrambe le parti.",
    },
  ],
  related: [
    { label: "Strumenti PDF — nel browser, senza caricamenti", path: "/pdf-tools" },
    { label: "Strumenti PDF che mettono la privacy al primo posto", path: "/guides/privacy-first-pdf-tools" },
    { label: "Elaborazione PDF locale nel browser, spiegata", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Vantaggi dell’elaborazione dei documenti nel browser", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
