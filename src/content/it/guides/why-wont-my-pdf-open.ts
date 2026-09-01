import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Perché il mio PDF non si apre? Cause e soluzioni pratiche",
  description:
    "Un PDF che si rifiuta di aprirsi è quasi sempre una di cinque cose. Come riconoscere un download interrotto, un blocco con password, un bug del lettore o un file datato — e cosa risolve ciascuno.",
  updated: "2026-05-29",
  intro: [
    "Fai doppio clic su un PDF e non succede nulla. Oppure il lettore mostra un errore, si blocca, o apre una finestra per la password che non ti aspettavi. I PDF dovrebbero semplicemente funzionare, e nella maggior parte dei casi è così — quindi quando uno non si apre, conviene conoscere la breve lista dei motivi possibili.",
    "Dietro un PDF che non ne vuole sapere di aprirsi ci sono davvero solo poche cause possibili: il download non si è completato, il file è protetto da password, il lettore non è compatibile con la versione del PDF, il file è stato generato da un’esportazione difettosa, oppure è un formato diverso che sembra solo un PDF. Ognuna ha una soluzione precisa e ripetibile.",
    "Questa guida passa in rassegna le diagnosi una per una, nell’ordine in cui conviene controllarle, con lo strumento giusto per ciascuna. La maggior parte delle soluzioni consiste nel capire quale problema hai, non nell’imparare qualche trucco avanzato.",
  ],
  steps: [
    {
      title: "Scarica di nuovo il file prima di ogni altra cosa",
      body: "Un download interrotto è di gran lunga il motivo più comune per cui un PDF non si apre. Scaricare di nuovo il file risolve il problema in pochi secondi. Se continua a fallire, ma la dimensione corrisponde a quella dell’origine e l’origine stessa lo apre ancora, hai escluso un download difettoso.",
    },
    {
      title: "Verifica se è protetto da password",
      body: "Alcuni lettori mostrano un errore generico invece della richiesta di password. Se il file arriva da una banca, un datore di lavoro o uno studio legale, dai per scontato che ci sia una password. La sa chi te lo ha inviato.",
    },
    {
      title: "Prova un lettore PDF diverso",
      body: "Browser, Anteprima su macOS, Adobe Acrobat e i lettori da telefono interpretano i PDF in modo leggermente diverso l’uno dall’altro. Un file che un lettore rifiuta spesso si apre senza problemi in un altro. Se funziona in una scheda del browser ma non in un’app desktop, il problema è una versione del lettore non compatibile, non un file danneggiato.",
    },
    {
      title: "Controlla il vero tipo di file",
      body: "I file che arrivano per mail o chat a volte hanno estensione .pdf ma in realtà sono .docx, .html, un’immagine o un archivio ZIP. Aprendoli con un editor di testo qualsiasi vedi i primi byte. Un vero PDF inizia con %PDF-. Qualsiasi altra cosa significa che va rinominato, oppure va richiesto di nuovo.",
    },
    {
      title: "Ripara con un’esportazione di andata e ritorno",
      body: "Se il file è tecnicamente valido ma danneggiato in modo sottile, aprirlo in un lettore che riesce ancora a mostrarlo e poi stamparlo in PDF, o esportarlo di nuovo, spesso produce una copia pulita. Alcuni oggetti malformati vengono riscritti e il nuovo file si apre ovunque.",
    },
    {
      title: "Riduci le dimensioni se il limite è la memoria",
      body: "Sui telefoni più datati, i PDF molto pesanti pieni di scansioni possono non aprirsi affatto. Comprimi PDF nel browser riduce il file sul momento; la copia compressa si apre dove l’originale non ci riusciva.",
    },
  ],
  tips: [
    "Confronta la dimensione del file scaricato con quella indicata da chi te lo ha inviato. Una differenza indica direttamente un download interrotto.",
    "Se il browser apre il PDF ma la tua app desktop no, per ora impostalo per aprirsi nel browser — non perdi nulla e vai avanti.",
    "Un file che si apre sul telefono ma non sul computer (o viceversa) è di solito un problema di versione del lettore, non un file danneggiato. Usa il lettore che funziona.",
    "Se i PDF allegati alla mail falliscono ripetutamente, prova a scaricarli dall’interfaccia webmail invece che dal client desktop — a volte il client tronca gli allegati pesanti.",
    "Conserva gli originali prima di provare queste riparazioni. Una nuova esportazione andata male può far perdere campi del modulo o annotazioni che l’originale conservava.",
  ],
  mobileNote:
    "Sul telefono, il colpevole più comune è un download parziale con una connessione dati instabile. L’app PDF Editor conserva i file in locale e ti permette di scaricare di nuovo e aprire PDF pesanti senza dipendere dalla cache del browser, che è spesso dove avviene l’interruzione.",
  faq: [
    {
      q: "Perché il mio PDF dice che è danneggiato se chi me lo ha inviato dice che va bene?",
      a: "Quasi sempre un download parziale. Scarica di nuovo il file e controlla che la dimensione corrisponda a quella indicata da chi te lo ha inviato. Se la nuova copia si apre, quella originale era incompleta.",
    },
    {
      q: "Il mio lettore chiede una password che non ho. E adesso?",
      a: "Solo chi te lo ha inviato può darti la password. Non esiste un modo sicuro per aggirare una vera password su un PDF dal lato di chi lo riceve, ed è meglio evitare gli strumenti che promettono di farlo.",
    },
    {
      q: "Perché si apre in Chrome ma non in Acrobat?",
      a: "I lettori desktop più datati potrebbero non supportare le funzioni PDF più recenti. Puoi continuare a usare il lettore che funziona, oppure esportare di nuovo il file passando per la stampa in PDF, per ottenere una copia compatibile.",
    },
    {
      q: "Esiste uno strumento che «ripara» semplicemente i PDF danneggiati?",
      a: "A volte — far passare il file per una nuova esportazione (aprire, stampare in PDF, salvare) sistema i problemi strutturali minori. Ma i PDF gravemente danneggiati di solito non sono recuperabili.",
    },
    {
      q: "Comprimere aiuta con i file che non si aprono?",
      a: "Solo se la causa è la memoria: i PDF enormi pieni di scansioni a volte falliscono sui telefoni più vecchi. Comprimi PDF li rende abbastanza piccoli da caricarsi. Non risolve un file danneggiato a livello strutturale.",
    },
  ],
  related: [
    { label: "Comprimi PDF — riduci i file troppo pesanti per aprirsi", path: "/compress-pdf" },
    { label: "Strumenti PDF — tutte le soluzioni nel browser", path: "/pdf-tools" },
    { label: "Come riparare un PDF danneggiato", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Come correggere i problemi di formattazione di un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Strumenti PDF gratuiti nel browser", path: "/pdf-tools" },
};

export default content;
