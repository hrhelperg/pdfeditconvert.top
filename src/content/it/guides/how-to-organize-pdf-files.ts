import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "Come organizzare i tuoi file PDF — un metodo pratico",
  description:
    "Metti ordine in PDF disordinati: unisci i file collegati, riordina le pagine, elimina il superfluo e nomina tutto correttamente. Un metodo ripetibile con strumenti gratuiti del browser.",
  updated: "2026-05-23",
  intro: [
    "«Organizza i miei PDF» di solito significa una di due cose: mettere in ordine un singolo documento disordinato, oppure domare una cartella piena di file collegati fino a renderla coerente. Entrambe si riducono alle stesse poche mosse — combinare ciò che appartiene insieme, mettere le pagine nell’ordine giusto, rimuovere ciò che non c’entra, e nominare tutto in modo da poterlo ritrovare in seguito.",
    "Questa guida propone un metodo ripetibile costruito con strumenti gratuiti del browser, ognuno dei quali funziona sul tuo dispositivo senza caricare nulla. Nessuno dei singoli passaggi è complicato; il valore sta nel farli nell’ordine giusto, così non rifai lo stesso lavoro due volte.",
    "Pensala meno come uno strumento singolo e più come una routine da applicare a qualsiasi pila di documenti — una cartella delle tasse, la carta di un progetto, un mucchio di scansioni — per trasformare il caos in qualcosa che saresti contento di consegnare.",
  ],
  steps: [
    {
      title: "Fai il punto su cosa hai",
      body: "Elenca i file e cosa contiene ciascuno. Decidi come dovrebbe apparire il risultato finito — un documento unico combinato, o più file puliti — prima di toccare qualsiasi cosa.",
    },
    {
      title: "Combina i file che appartengono insieme",
      body: "Usa lo strumento Merge PDF per unire i documenti collegati in uno solo, nell’ordine che vuoi. Un contratto e i suoi allegati, un report e la sua appendice — un file ciascuno.",
    },
    {
      title: "Correggi l’ordine delle pagine",
      body: "Usa lo strumento Reorder PDF Pages su tutto ciò che è uscito fuori sequenza — scansioni invertite, sezioni fuori posto — finché ogni documento non si legge correttamente.",
    },
    {
      title: "Rimuovi l’ingombro",
      body: "Elimina pagine bianche, copertine e duplicati tenendo solo le pagine che vuoi con lo strumento Extract PDF Pages.",
    },
    {
      title: "Raddrizza le pagine storte",
      body: "Usa lo strumento Rotate PDF su qualsiasi pagina uscita in orizzontale o capovolta, così l’intero documento si legge dritto.",
    },
    {
      title: "Nomina e archivia in modo coerente",
      body: "Dai a ogni file un nome descrittivo e datato — «Fattura-Acme-2026-05.pdf» — e archivialo in una cartella sensata. Nomi coerenti sono ciò che rende una raccolta ricercabile mesi dopo.",
    },
  ],
  tips: [
    "Fallo in ordine: unisci, riordina, rimuovi, ruota, nomina. Nominare prima e poi unire significa rinominare di nuovo; riordinare prima di rimuovere spreca fatica su pagine che poi butterai.",
    "Adotta una convenzione di denominazione e mantienila. «Tipo-Chi-Data» (Fattura-Acme-2026-05) si ordina e si cerca molto meglio di nomi improvvisati.",
    "Tieni gli originali in una cartella separata finché le versioni organizzate non sono confermate come corrette. Riordinare è reversibile solo se non hai sovrascritto la fonte.",
    "Comprimi solo alla fine, se i file sono destinati a una mail o a un portale — non ha senso comprimere un documento che stai per ristrutturare.",
    "La memoria del browser ha dei limiti per i lavori molto grandi. Per centinaia di pagine o file, l’app PDF Editor gestisce il carico pesante più comodamente.",
  ],
  mobileNote:
    "Buona parte del disordine documentale nasce sul telefono — scansioni, screenshot, allegati ricevuti via mail. L’app PDF Editor ti lascia unire, riordinare, rifinire e rinominare in un unico posto, offline, così puoi mantenere l’ordine man mano che i file arrivano invece di affrontare una pila più tardi.",
  faq: [
    {
      q: "Qual è l’ordine giusto per organizzare un PDF disordinato?",
      a: "Prima unisci i file collegati, poi riordina le pagine, poi rimuovi l’ingombro, poi correggi la rotazione, e infine nomina e archivia. Lavorare in quest’ordine evita di rifare i passaggi.",
    },
    {
      q: "Questi strumenti sono privati?",
      a: "Sì. Gli strumenti di unione, riordino, estrazione e rotazione funzionano tutti nel tuo browser, sul tuo dispositivo — nulla viene caricato, il che conta per la carta personale o finanziaria.",
    },
    {
      q: "Come dovrei nominare i file PDF?",
      a: "Usa uno schema coerente e descrittivo con una data, come «Tipo-Chi-Data.pdf». La coerenza è ciò che rende una cartella ricercabile e ordinabile in seguito.",
    },
    {
      q: "Posso organizzare un grande lotto in una volta sola?",
      a: "Gli strumenti da browser gestiscono bene i volumi quotidiani, ma lotti molto grandi possono mettere sotto pressione la memoria. L’app PDF Editor è pensata per lavori più grandi e funziona offline.",
    },
    {
      q: "Dovrei comprimere mentre organizzo?",
      a: "Comprimi per ultimo, una volta che il documento è finalizzato, e solo se deve rientrare nei limiti di mail o caricamento. Comprimere a metà processo viene semplicemente vanificato dalle modifiche successive.",
    },
  ],
  related: [
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    { label: "Merge PDF — combina i file", path: "/merge-pdf" },
    { label: "Come riordinare le pagine di un PDF", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "Come rimuovere le pagine indesiderate da un PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
