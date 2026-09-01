import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "Elaborazione PDF locale nel browser, spiegata (come funziona davvero)",
  description:
    "Come uno strumento PDF può funzionare nel browser senza inviare il tuo file da nessuna parte. La tecnologia, i compromessi e come verificare che uno strumento sia davvero locale.",
  updated: "2026-05-29",
  intro: [
    "Sorprende scoprire che una scheda del browser può comprimere un PDF, unire due file o estrarre pagine da un documento di 200 pagine — tutto senza caricare nulla su un server. Il browser sembra una finestra sul mondo di internet, non un posto dove avviene un lavoro pesante. Ma i browser moderni possono eseguire moltissimo codice direttamente sulla tua macchina, e l’elaborazione dei PDF si rivela esattamente il tipo di lavoro adatto.",
    "La tecnologia dietro gli strumenti PDF locali nel browser è JavaScript e WebAssembly in esecuzione nel tuo browser, che lavorano direttamente sul file che fornisci. Il file viene letto da JavaScript, trasformato nella memoria del tuo browser, e riscritto in un nuovo file che puoi scaricare — tutto senza che nessuna chiamata di rete trasporti il contenuto del tuo file.",
    "Questa guida spiega come funziona davvero, perché è sicuro per definizione, quali sono i limiti (alcuni sono reali), e come verificare che uno strumento che stai valutando sia genuinamente locale. Niente di esotico; è una tecnologia matura.",
  ],
  steps: [
    {
      title: "Capisci il flusso di base",
      body: "Trascini un file sulla pagina. JavaScript lo legge nella memoria del browser. Codice JavaScript o WebAssembly lo trasforma (comprime, unisce, divide). Il risultato viene riscritto in un nuovo file che scarichi. Nessun caricamento, nessun contatto con un server per il file in sé.",
    },
    {
      title: "Capisci cosa rende tutto questo privato",
      body: "Il server fornisce il codice JavaScript (lo strumento in sé) ma non vede mai i dati che quel codice elabora. La stessa scheda del browser che scarica lo strumento lo esegue poi in locale sul tuo file. L’architettura separa la consegna del codice dalla gestione dei dati.",
    },
    {
      title: "Verifica con gli strumenti per sviluppatori del browser",
      body: "Apri gli strumenti per sviluppatori, scheda rete, trascina dentro il tuo file. Uno strumento davvero locale non mostra nessuna richiesta in uscita di grandi dimensioni quando aggiungi il file. Uno strumento che carica il file invia una richiesta POST da diversi megabyte. La differenza è visibile.",
    },
    {
      title: "Riconosci onestamente i limiti",
      body: "L’elaborazione locale è limitata dalla memoria e dalla CPU del tuo browser. File molto grandi (centinaia di pagine, gigabyte) possono mandarlo in crisi; le operazioni avanzate (OCR completo su documenti lunghi) a volte richiedono l’aiuto di un server. Gli strumenti basati sul browser danno il meglio sul lavoro ordinario.",
    },
    {
      title: "Controlla che nessuna telemetria faccia trapelare dati",
      body: "Alcuni strumenti registrano eventi di analisi con metadati (numero di pagine, dimensione del file). È una cosa diversa dal far trapelare il contenuto — e l’analisi è visibile nella stessa scheda rete. Distingui il contenuto dai metadati.",
    },
    {
      title: "Considera il browser come un confine di fiducia",
      body: "Una volta che il tuo file è nella scheda del browser, resta comunque sul tuo dispositivo. Gli strumenti di elaborazione di questo sito sfruttano proprio questa proprietà: fanno il loro lavoro nella scheda e non inviano mai il tuo file all’esterno, così la privacy arriva senza sforzo.",
    },
  ],
  tips: [
    "WebAssembly gestisce il lavoro pesante dell’elaborazione PDF nei browser moderni — è a una velocità quasi nativa, ed è per questo che gli strumenti PDF locali hanno raggiunto le app desktop in termini di prestazioni.",
    "Chiudere la scheda del browser cancella il file dalla memoria. Gli strumenti locali non lasciano copie in giro.",
    "Gli strumenti locali funzionano anche offline una volta caricata la pagina — una conferma utile del fatto che il file non viene inviato da nessuna parte.",
    "Le affermazioni sulla privacy dovrebbero essere verificabili. Gli strumenti per sviluppatori sono la verifica; non devi fidarti del testo del marketing sulla parola.",
    "«Basato sul browser» non è lo stesso di «senza server». Alcuni strumenti «basati sul browser» caricano comunque il tuo file — solo l’interfaccia sta nel browser. Controlla il traffico di rete.",
  ],
  mobileNote:
    "I browser mobile eseguono gli stessi strumenti locali in JavaScript e WebAssembly dei browser desktop. L’app PDF Editor usa un’architettura simile: tutta l’elaborazione avviene sul dispositivo, senza caricamenti, così chi usa iPhone e Android ottiene le stesse garanzie di privacy.",
  faq: [
    {
      q: "Come avviene l’elaborazione di un PDF nel browser?",
      a: "JavaScript e WebAssembly leggono il tuo file nella memoria della scheda del browser, lo trasformano e riscrivono il risultato in un file da scaricare. Il server fornisce il codice ma non vede mai il file.",
    },
    {
      q: "L’elaborazione locale nel browser è davvero privata?",
      a: "Sì, per architettura. Il file non lascia mai la scheda. L’unico modo in cui uno strumento locale potrebbe far trapelare qualcosa è avere un bug o un caricamento nascosto — e gli strumenti per sviluppatori lo mostrerebbero.",
    },
    {
      q: "Quanto può essere grande un file che riesce a gestire?",
      a: "I browser moderni gestiscono comodamente PDF fino a qualche centinaio di megabyte. Oltre quella soglia, potresti incontrare limiti di memoria a seconda del dispositivo.",
    },
    {
      q: "Funziona anche offline?",
      a: "Sì, una volta caricata la pagina. L’elaborazione avviene in locale; non serve rete. È un test utile per verificare che lo strumento sia davvero locale.",
    },
    {
      q: "Perché non tutti gli strumenti PDF funzionano così?",
      a: "Alcune operazioni (OCR reale su documenti lunghi, certe compressioni) sono ancora più veloci su un server. Molti strumenti dipendono anche da un modello di business lato server. Gli strumenti basati sul browser sono diventati un’alternativa valida per la maggior parte delle attività quotidiane.",
    },
  ],
  related: [
    { label: "Strumenti PDF — nel browser, senza caricamenti", path: "/pdf-tools" },
    { label: "Strumenti PDF nel browser contro strumenti che caricano i file", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Vantaggi dell’elaborazione dei documenti nel browser", path: "/guides/browser-based-document-processing-benefits" },
    { label: "Gli strumenti PDF online sono sicuri?", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
