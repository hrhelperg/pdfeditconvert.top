import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Come evitare di caricare documenti sensibili (alternative pratiche)",
  description:
    "Quando un flusso di lavoro ti spinge a caricare un PDF sensibile, esiste quasi sempre un’alternativa del tutto locale. Le categorie di attività e lo strumento senza caricamento adatto a ciascuna.",
  updated: "2026-05-29",
  intro: [
    "Ogni attività sui PDF ha un momento in cui il primo link nei risultati di ricerca ti chiede di caricare il tuo file. Comprimere, unire, dividere, convertire, firmare — ognuna di queste operazioni ha centinaia di siti costruiti attorno al modello «carica e poi elabora». Per i file ordinari va bene. Per quelli sensibili (documenti finanziari, documenti d’identità, contratti, cartelle mediche) è un rischio che si può evitare.",
    "Evitare i caricamenti non significa rinunciare agli strumenti moderni. Significa scegliere strumenti che funzionano sul tuo dispositivo — nel tuo browser, in un’app mobile, sul tuo computer. Ogni attività PDF comune ha almeno un’opzione solo locale che fa il lavoro senza che il file tocchi mai il server di terzi.",
    "Questa guida è la sostituzione pratica: le categorie di attività, lo strumento solo locale per ciascuna, e il piccolo insieme di casi in cui l’elaborazione locale ancora non copre davvero il bisogno.",
  ],
  steps: [
    {
      title: "Per comprimere, usa un compressore basato sul browser",
      body: "Comprimi PDF nel set di strumenti di questo sito funziona in locale. Gestisce il tipico file pesante di scansioni o foto senza caricare nulla. Verifica con gli strumenti per sviluppatori — nessuna richiesta in uscita di grandi dimensioni quando aggiungi il file.",
    },
    {
      title: "Per unire, usa uno strumento di unione basato sul browser",
      body: "Unisci PDF combina i file in locale. Il file combinato viene riscritto nei tuoi download; nessuna copia vive su un server. Stessa architettura della compressione — locale per prima cosa.",
    },
    {
      title: "Per dividere ed estrarre, usa uno strumento basato sul browser",
      body: "Dividi PDF ed Estrai pagine PDF funzionano sul tuo dispositivo. Le operazioni a livello di pagina sono meccaniche e si adattano perfettamente all’elaborazione locale.",
    },
    {
      title: "Per convertire, usa un convertitore basato sul browser",
      body: "PDF in Word, Word in PDF, Immagine in PDF, PDF in immagini — tutti disponibili in versioni basate sul browser che non caricano nulla. La conversione avviene nella tua scheda del browser.",
    },
    {
      title: "Per firmare, usa un’app di firma locale",
      body: "Firma PDF nel browser o l’app PDF Editor sul telefono. Firma disegnata, nessuna piattaforma di firma nel cloud coinvolta. Il file firmato resta sul tuo dispositivo finché non scegli tu di condividerlo.",
    },
    {
      title: "Per le attività che richiedono davvero l’aiuto di un server, usa uno strumento a pagamento con garanzie esplicite",
      body: "Alcuni flussi di lavoro (OCR pesante su documenti lunghi, oscuramento avanzato) traggono ancora vantaggio dall’elaborazione lato server. Per quei casi, scegli uno strumento a pagamento con impegni espliciti sulla conservazione e sul trattamento dei dati — non uno strumento gratuito con un linguaggio vago.",
    },
  ],
  tips: [
    "I risultati di ricerca favoriscono gli strumenti che pagano per la posizione. Il primo risultato raramente è il più rispettoso della privacy; controlla cosa stai davvero ottenendo.",
    "Gli strumenti solo locali funzionano offline. Provare lo strumento offline è una verifica rapida che non gli serve accesso alla rete per il tuo file.",
    "Non cascarci con strumenti che «non conservano il tuo file» ma richiedono comunque un caricamento per elaborarlo. La breve finestra di conservazione resta comunque un’esposizione reale per materiale molto sensibile.",
    "Le app mobile che elaborano in locale di solito si riconoscono facilmente — funzionano senza internet dopo l’installazione. L’app PDF Editor rientra in questo schema.",
    "Costruisci l’abitudine. Una volta che scegli di default strumenti solo locali, il materiale sensibile resta più protetto senza che tu debba pensarci ogni volta.",
  ],
  mobileNote:
    "Sul telefono la tentazione è usare qualunque strumento PDF consigliato dall’App Store — molti dei quali caricano il file. L’app PDF Editor elabora tutto sul dispositivo, su iOS e Android, così un documento sensibile può passare dalla foto con la fotocamera al documento firmato consegnato senza mai toccare un server.",
  faq: [
    {
      q: "Posso davvero fare tutte le attività PDF comuni senza caricare nulla?",
      a: "Sì, per le attività quotidiane: comprimere, unire, dividere, convertire, firmare, applicare una filigrana, riordinare, estrarre. Gli strumenti di questo sito coprono tutto questo in locale. Alcune operazioni avanzate (OCR completo su documenti lunghi) a volte richiedono ancora l’aiuto di un server.",
    },
    {
      q: "Come verifico che uno strumento non carichi nulla?",
      a: "Strumenti per sviluppatori del browser, scheda rete, aggiungi un file. Se vedi una richiesta POST in uscita di grandi dimensioni, lo sta caricando. In caso contrario, è locale. La differenza è visibile.",
    },
    {
      q: "Gli strumenti locali sono più lenti?",
      a: "A volte. Il WebAssembly moderno rende l’elaborazione locale competitiva con quella lato server per la maggior parte delle attività. Le operazioni pesanti su file grandi possono richiedere più tempo in locale, ma per il materiale sensibile il compromesso sulla privacy di solito ne vale la pena.",
    },
    {
      q: "E l’OCR — può funzionare in locale?",
      a: "L’OCR leggero sì; l’OCR ad alta precisione su documenti lunghi spesso usa ancora l’elaborazione lato server. Se l’OCR ti serve davvero, scegli strumenti che dichiarano esplicitamente dove avviene l’elaborazione.",
    },
    {
      q: "Non è un po’ paranoico?",
      a: "Non per il materiale sensibile. Il modello «tutto si carica per default» funzionava quando i documenti erano meno sensibili e le violazioni più rare. Entrambe le cose sono cambiate. Restare in locale per prima cosa è ormai una base sensata.",
    },
  ],
  related: [
    { label: "App PDF o strumenti PDF online", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "PDF Security — proteggi e crittografa con una password", path: "/pdf-security" },
    { label: "Come proteggere i file PDF sensibili", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Come condividere un PDF in modo privato", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Flussi di lavoro documentali che mettono la privacy al primo posto", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Security — proteggi e crittografa con una password", path: "/pdf-security" },
};

export default content;
