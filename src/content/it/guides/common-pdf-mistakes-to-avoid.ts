import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Errori comuni con i PDF da evitare",
  description:
    "Gli errori con i PDF che fanno perdere tempo o espongono informazioni — comprimere troppo, inviare foto, caricare file sensibili, dimenticare pagine — e come evitarli.",
  updated: "2026-05-23",
  intro: [
    "La maggior parte dei problemi con i PDF non è tecnica — sono abitudini evitabili. Il file rifiutato perché nessuno lo ha compresso, la foto inviata al posto di un documento, il contratto caricato su un server qualunque, la pagina che non doveva uscire e invece è uscita. Sono errori piccoli, comuni, e facili da evitare una volta che sai a cosa fare attenzione.",
    "Questa guida raccoglie gli errori più frequenti con i PDF, perché ognuno crea problemi, e la soluzione rapida. Molte soluzioni usano gli strumenti gratuiti di questo sito, che lavorano in locale; ma sono tutte prima di tutto abitudini, più che funzioni da imparare.",
    "Leggila una volta e la prossima volta ti fermerai prima dell’errore evitabile — un vantaggio che, per documenti destinati a clienti, colleghi ed enti, vale più di quanto sembri.",
  ],
  steps: [
    {
      title: "Inviare una foto al posto di un documento",
      body: "Un JPG di una pagina è storto, non ricercabile e scomodo da stampare o archiviare. Se è un documento, convertilo prima in PDF con lo strumento Immagine in PDF, oppure scansionalo come si deve — non far ricadere su chi lo riceve il problema di uno scatto al volo.",
    },
    {
      title: "Caricare file sensibili su strumenti sconosciuti",
      body: "Affidare un contratto o un documento d’identità al primo servizio «PDF online gratuito» significa caricarlo sul server di uno sconosciuto. Usa strumenti che lavorano in locale, nel browser, per tutto quello che non vorresti far leggere a estranei.",
    },
    {
      title: "Comprimere troppo per abitudine",
      body: "Portare la compressione al massimo su ogni file rovina documenti che non ne avevano bisogno. Usa il livello più leggero che raggiunge la dimensione che ti serve, e non comprimere i file già piccoli.",
    },
    {
      title: "Dimenticare di controllare le pagine prima di inviare",
      body: "Note interne, i dati del destinatario precedente, una pagina bianca dello scanner — finiscono nel file senza che nessuno se ne accorga. Controlla pagina per pagina, ed elimina ciò che non deve uscire con lo strumento Estrai pagine PDF.",
    },
    {
      title: "Inviare un file modificabile come fosse definitivo",
      body: "Un preventivo o un contratto concluso, inviato come documento Word, può essere modificato — per errore o no. Converti le versioni definitive in PDF, così l’impaginazione e i numeri restano fissi.",
    },
    {
      title: "Sovrascrivere l’unico originale che hai",
      body: "Compressione, conversione e modifica sono operazioni a senso unico per la copia che tieni. Salva sempre le versioni modificate con un nome nuovo, così l’originale intatto sopravvive a un errore.",
    },
  ],
  tips: [
    "Fai sempre questa domanda per prima: è un documento o un’immagine? I documenti vanno come PDF; solo le foto vere vanno come JPG.",
    "La privacy è un’abitudine, non un’impostazione. Usa di default gli strumenti che lavorano in locale per i file sensibili, così non devi ricordarti di stare attento ogni volta.",
    "Comprimi con un obiettivo preciso, non per riflesso — scegli il livello in base allo scopo e salta la compressione dei file già di dimensione ragionevole.",
    "Un controllo di dieci secondi, pagina per pagina, prima di inviare previene gli errori PDF più imbarazzanti che esistono.",
    "Conserva gli originali. Quasi ogni operazione sui PDF è reversibile solo se non hai sovrascritto il file di partenza.",
  ],
  mobileNote:
    "Molti di questi errori capitano nella fretta di inviare qualcosa dal telefono. L’app PDF Editor ti permette di eliminare una pagina di troppo, comprimere con criterio, convertire una foto e bloccare una versione definitiva — tutto in locale — così una condivisione fatta di corsa non diventa un errore di cui scusarti.",
  faq: [
    {
      q: "Qual è l’errore più comune con i PDF?",
      a: "Inviare una foto JPG quando il destinatario aveva bisogno di un documento. È storta, non ricercabile e difficile da stampare o archiviare. Convertire prima la foto in PDF risolve il problema.",
    },
    {
      q: "Perché caricare i PDF su strumenti gratuiti è rischioso?",
      a: "Molti strumenti «online» caricano il tuo file su un server, quindi un contratto o un documento d’identità finisce, anche solo per un momento, su un’infrastruttura che non controlli. Gli strumenti che lavorano in locale, nel browser, evitano del tutto il problema.",
    },
    {
      q: "Più compressione è sempre meglio?",
      a: "No. Comprimere troppo rovina documenti che non ne avevano bisogno e non serve a nulla sui file già piccoli. Usa il livello più leggero che raggiunge la dimensione che ti serve.",
    },
    {
      q: "Come evito di inviare le pagine sbagliate?",
      a: "Controlla il documento pagina per pagina prima di inviarlo e rimuovi tutto ciò che non deve uscire con lo strumento Estrai pagine PDF. Le note interne e le pagine di troppo sono i colpevoli più frequenti.",
    },
    {
      q: "Perché non dovrei sovrascrivere il file originale?",
      a: "Compressione, conversione e modifiche sono operazioni a senso unico per la copia che tieni. Salvare con un nome nuovo preserva l’originale, così un errore è facile da correggere.",
    },
  ],
  related: [
    { label: "Strumenti PDF gratuiti — la lista completa", path: "/pdf-tools" },
    { label: "Come preparare un PDF prima di condividerlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Strumenti PDF che rispettano la privacy", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF o JPG per i documenti", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Strumenti PDF gratuiti", path: "/pdf-tools" },
};

export default content;
