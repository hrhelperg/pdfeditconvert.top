import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-pdf-tools-for-iphone",
  h1: "Strumenti PDF gratuiti per iPhone (browser e app)",
  description:
    "Strumenti PDF gratuiti per iPhone che funzionano davvero senza abbonamento — comprimere, firmare, scansionare, convertire. Le opzioni nel browser e l’app PDF Editor per lavorare anche offline.",
  updated: "2026-05-29",
  intro: [
    "L’iPhone ha un supporto PDF integrato discreto — Files li legge, Mail li allega, Markup può annotarli. Ma per il vero lavoro sui documenti di cui la maggior parte delle persone ha bisogno (comprimere prima di inviare, unire più allegati, firmare un contratto, convertire una foto in PDF), lo stack integrato si esaurisce in fretta. L’App Store colma il vuoto con centinaia di app PDF, la maggior parte delle quali blocca le funzioni di base dietro abbonamenti o limiti giornalieri.",
    "Gli strumenti PDF davvero gratuiti su iPhone si dividono in due categorie: strumenti basati sul browser che funzionano in Safari senza installare nulla, e app gratuite che gestiscono le loro funzioni principali sul dispositivo senza barriere a pagamento. Entrambe hanno un ruolo. Gli strumenti nel browser non richiedono installazione; le app native funzionano offline e si integrano con Files e il menu di condivisione.",
    "Questa guida copre entrambe le strade, scegliendo gli strumenti davvero gratuiti per le attività PDF quotidiane su iPhone. La preferenza va agli strumenti che rispettano la privacy funzionando in locale sul telefono.",
  ],
  steps: [
    {
      title: "Usa Safari per le attività occasionali nel browser",
      body: "Comprimi PDF, Unisci PDF, Immagine in PDF e il resto dello stack di questo sito funzionano in Safari senza installare nulla. L’elaborazione avviene nella scheda del browser sul telefono — nessun caricamento, nessun account.",
    },
    {
      title: "Installa l’app PDF Editor per i flussi di lavoro ripetuti",
      body: "Per le attività che fai spesso (firmare, scansionare, condividere) un’app nativa è più veloce delle visite al browser. L’app PDF Editor gestisce tutto questo offline e si integra con il menu di condivisione di iOS.",
    },
    {
      title: "Scansiona con l’app PDF Editor o con Files integrato",
      body: "Files ha una funzione base di scansione in PDF; l’app PDF Editor ha un rilevamento dei bordi più raffinato e una gestione migliore delle pagine multiple. Entrambe sono gratuite per il flusso di scansione.",
    },
    {
      title: "Firma con Markup per i casi veloci, con l’app PDF Editor per le firme vere",
      body: "Markup gestisce uno scarabocchio veloce su un modulo di una pagina. Per i contratti, il flusso di firma dell’app PDF Editor produce una firma più curata, che regge meglio nei contesti formali.",
    },
    {
      title: "Converti foto in PDF con Immagine in PDF su Safari",
      body: "Immagine in PDF nel browser dell’iPhone combina foto e screenshot in un unico PDF, gestendo anche l’HEIC. Per questa attività non serve installare nessuna app.",
    },
    {
      title: "Comprimi prima di inviare dal menu di condivisione",
      body: "Comprimi PDF su Safari o l’app PDF Editor riduce i file per i limiti di allegato di mail e portali. Le scansioni da iPhone diventano pesanti in fretta; comprimere prima di inviare evita il rifiuto.",
    },
  ],
  tips: [
    "Il menu di condivisione dell’iPhone è il punto di integrazione per gli strumenti PDF basati su app. Scegli strumenti che compaiono in «condividi con» per il flusso di lavoro più fluido.",
    "Le foto HEIC hanno bisogno di conversione prima di essere condivise con destinatari non Apple. L’app PDF Editor e gli strumenti nel browser gestiscono questo passaggio in modo trasparente.",
    "Non firmare nulla di importante in Markup se lo invii verso l’esterno — la firma sembra poco curata. Usa uno strumento di firma vero per i contratti.",
    "Gli strumenti nel browser funzionano in Safari ma anche in Chrome e Firefox su iPhone, se preferisci. L’architettura è la stessa.",
    "Sincronizza la cartella /File con iCloud se gestisci PDF su più dispositivi. L’app PDF Editor salva prima in locale; controlli tu se e quando sincronizzarli.",
  ],
  mobileNote:
    "L’app PDF Editor è l’accompagnamento consigliato agli strumenti nel browser su iPhone — copre i casi offline e integrati con il menu di condivisione che gli strumenti puramente da browser non coprono. Gratuita per i flussi di lavoro principali, senza bisogno di account.",
  faq: [
    {
      q: "Gli strumenti PDF integrati dell’iPhone bastano?",
      a: "Per leggere e annotare in modo semplice, sì. Per comprimere, unire, firmare davvero e convertire, ti servono strumenti aggiuntivi — basati sul browser o su un’app.",
    },
    {
      q: "Le app PDF gratuite per iPhone restano davvero gratuite?",
      a: "Alcune sì, altre no. L’app PDF Editor gestisce gratuitamente i suoi flussi di lavoro principali. Molte app PDF dell’App Store bloccano le funzioni di base dietro abbonamenti.",
    },
    {
      q: "Dovrei firmare contratti su iPhone?",
      a: "Sì, è sempre più normale. Le firme disegnate con il dito sono abbastanza leggibili da sembrare intenzionali. Usa uno strumento di firma vero, non Markup, per i contratti.",
    },
    {
      q: "Posso scansionare dall’iPhone invece di usare uno scanner piano?",
      a: "Per i documenti ordinari, sì. Il flusso di scansione con la fotocamera del telefono in PDF Editor o nell’app Files integrata produce risultati paragonabili a uno scanner piano per la qualità tipica di un documento.",
    },
    {
      q: "E l’HEIC?",
      a: "L’HEIC è il formato predefinito dell’iPhone e non è universalmente supportato altrove. Convertilo in JPG o PDF prima di condividere con destinatari non Apple.",
    },
  ],
  related: [
    { label: "Strumenti PDF — nel browser, senza caricamenti", path: "/pdf-tools" },
    { label: "I migliori strumenti PDF gratuiti", path: "/guides/best-free-pdf-tools" },
    { label: "Strumenti PDF gratuiti per Android", path: "/guides/free-pdf-tools-for-android" },
    { label: "Come rendere un PDF più piccolo su iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
