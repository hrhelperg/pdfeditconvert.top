import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Come compilare moduli PDF su Android (qualsiasi telefono)",
  description:
    "Compila moduli PDF interattivi e non interattivi su Android. Perché il visualizzatore preinstallato spesso non ti fa scrivere, la via affidabile con un’app, e come le differenze tra i produttori influenzano i moduli.",
  updated: "2026-06-01",
  intro: [
    "Android non ha un unico strumento integrato per compilare i moduli PDF, ed è questa la radice della maggior parte della confusione. Il visualizzatore di PDF predefinito su molti telefoni — spesso all’interno di Google Drive o File — mostra bene il modulo ma non sempre ti lascia scrivere nei suoi campi. Così le persone pensano che il modulo sia rotto, quando in realtà serve solo un’app che gestisca correttamente i campi del modulo.",
    "La via affidabile su qualsiasi telefono Android è un’app PDF dedicata che riconosce i campi interattivi e ti lascia posizionare il testo sui moduli non interattivi. Poiché hardware e software Android variano molto da un produttore all’altro, le opzioni integrate esatte cambiano da telefono a telefono — ma una vera app PDF si comporta allo stesso modo ovunque, che è esattamente quello che serve per i moduli.",
    "Questa guida copre perché il visualizzatore predefinito non basta, il flusso di lavoro affidabile con un’app, e i dettagli specifici di Android — la condivisione tramite il menu di condivisione di sistema, il recupero dei moduli da Gmail e Drive — che rendono rapida la compilazione dei moduli.",
  ],
  steps: [
    {
      title: "Porta il modulo fuori dal visualizzatore di base",
      body: "Se un modulo aperto da Gmail o Drive non ti lascia scrivere, quel visualizzatore sta ignorando i suoi campi. Scarica invece il file e aprilo in un’app PDF dedicata — è lì che i campi si attivano davvero.",
    },
    {
      title: "Aprilo nell’app PDF Editor",
      body: "Importa il PDF da File, Drive o dal menu di condivisione. L’app controlla la presenza di campi interattivi e li rende toccabili così puoi scrivere, selezionare le caselle di controllo e usare i menu a tendina.",
    },
    {
      title: "Compila i moduli non interattivi aggiungendo il testo",
      body: "Se il modulo non ha campi, usa lo strumento testo per posizionare le risposte direttamente su ogni riga. Ingrandisci prima, così il testo cade con precisione — tastiere Android e campi piccoli richiedono un po’ di attenzione in più.",
    },
    {
      title: "Aggiungi segni di spunta, date e una firma",
      body: "Seleziona le caselle interattive o posiziona un segno di spunta su quelle non interattive, inserisci le date nel formato mostrato e aggiungi la tua firma nell’area dedicata con lo strumento firma.",
    },
    {
      title: "Esporta e rimanda indietro",
      body: "Salva una copia completata e inviala tramite il menu di condivisione di Android — Gmail, Drive, WhatsApp, quello che preferisci. Appiattiscila prima se vuoi bloccare le risposte così non possano essere cancellate.",
    },
  ],
  tips: [
    "Se non riesci a scrivere in un modulo su Android, di solito è colpa del visualizzatore di base — apri il file in una vera app PDF.",
    "Poiché ogni produttore Android distribuisce un software diverso, non dare per scontato che ci sia uno strumento integrato per compilare i moduli; un’app dedicata è la scelta coerente.",
    "Ingrandisci i moduli non interattivi prima di posizionare il testo, così i campi piccoli ricevono una risposta della dimensione giusta.",
    "Tieni il modulo vuoto in una cartella conosciuta così puoi ricompilare una copia pulita invece di modificarne una vecchia.",
    "Il comportamento di un modulo varia da un’app e da un dispositivo all’altro, quindi un’esportazione appiattita è il modo più sicuro per garantire che le risposte vengano mostrate al destinatario.",
  ],
  mobileNote:
    "L’app PDF Editor per Android riconosce i campi interattivi e ti lascia posizionare il testo sui moduli non interattivi, poi firma ed esporta — funzionando allo stesso modo indipendentemente dal produttore del telefono. Succede tutto sul dispositivo, quindi le informazioni che inserisci nel modulo non vengono inviate altrove.",
  faq: [
    {
      q: "Perché non riesco a scrivere in un modulo PDF su Android?",
      a: "Il visualizzatore predefinito — spesso quello di Google Drive o l’anteprima di File del telefono — ignora spesso i campi del modulo. Scarica il modulo e aprilo in un’app PDF dedicata, e i campi diventeranno scrivibili. I moduli non interattivi richiedono invece il testo posizionato sopra.",
    },
    {
      q: "Android ha uno strumento integrato per compilare i moduli PDF?",
      a: "Non uno universale. Quello che è disponibile dipende dal produttore e dal software del tuo telefono. Per risultati coerenti su qualsiasi dispositivo Android, usa un’app PDF dedicata.",
    },
    {
      q: "Come compilo un modulo scansionato su Android?",
      a: "Un modulo scansionato è non interattivo, quindi aggiungi tu testo e segni di spunta sulla pagina con un editor di PDF, poi esporta. Non ci sono campi da toccare.",
    },
    {
      q: "Compilare un modulo PDF su Android è sicuro dal punto di vista della privacy?",
      a: "Con l’app PDF Editor, la compilazione avviene sul dispositivo, quindi i tuoi dati non vengono inviati da nessuna parte. Gli strumenti via browser che caricano il tuo file lo elaborano invece su un server.",
    },
    {
      q: "Come rimando indietro il modulo compilato?",
      a: "Esporta una copia completata e usa il menu di condivisione di Android per inviarla per email, tramite Drive o un’app di messaggistica. Appiattiscila prima per bloccare le risposte.",
    },
  ],
  related: [
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Come compilare moduli PDF su iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Come firmare un PDF su Android",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "Migliore app per moduli PDF su Android",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "Il flusso di lavoro mobile per i moduli PDF", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
