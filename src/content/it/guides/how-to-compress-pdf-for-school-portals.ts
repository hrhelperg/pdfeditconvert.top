import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Come comprimere un PDF per i portali scolastici (limiti severi)",
  description:
    "I portali di scuole e università limitano i PDF in modo più severo della mail. Come comprimere una consegna per farla stare nel limite senza rovinare la leggibilità che il docente verifica.",
  updated: "2026-05-29",
  intro: [
    "I portali scolastici sono tra i sistemi di caricamento PDF più severi che incontri nella vita di tutti i giorni. Se la mail tollera anche 25 MB, un portale di classe si ferma spesso a 5 MB — e i sistemi delle scuole medie e superiori arrivano talvolta a 2 MB. Basta aggiungere qualche pagina scansionata di appunti scritti a mano a una consegna già battuta al computer, ed ecco che sei sopra il limite, due minuti prima della scadenza.",
    "Comprimere è la risposta giusta, ma comprimere in modo troppo aggressivo rende il lavoro più difficile da leggere — ed è esattamente questo a farti perdere punti. Il trucco è comprimere con intelligenza: in modo deciso sulle parti scansionate che pesano di più, con delicatezza sulle parti battute al computer che comunque non si comprimono granché, e solo quanto basta per rientrare nel limite del portale.",
    "Questa guida ti accompagna nel processo reale: cosa comprimere, cosa lasciare stare, e cosa fare quando anche la compressione massima non è sufficiente.",
  ],
  steps: [
    {
      title: "Controlla prima il limite dichiarato dal portale",
      body: "La maggior parte dei portali indica il limite massimo; molti studenti non lo guardano mai. Conoscere il numero cambia la strategia: un limite di 2 MB è stretto, uno di 25 MB è generoso. Punta all’80% del limite, così hai un margine di sicurezza.",
    },
    {
      title: "Individua cosa rende il file pesante",
      body: "Le pagine scansionate scritte a mano sono di solito le colpevoli. Ogni pagina scansionata è un’immagine a piena risoluzione. Una consegna di 20 pagine battute al computer è leggera; la stessa con cinque pagine scansionate può triplicare di peso.",
    },
    {
      title: "Comprimi con Comprimi PDF",
      body: "Comprimi PDF nel tuo browser riduce il file direttamente sul tuo dispositivo. Prova prima la compressione forte — i compressori moderni lasciano il lavoro scritto a mano leggibile anche con impostazioni elevate.",
    },
    {
      title: "Controlla la leggibilità dopo aver compresso",
      body: "Apri il file compresso e ingrandisci il punto che il docente leggerà davvero. Se il testo o i diagrammi sembrano troppo sfocati, torna a una compressione media e riprova. Meglio leggibile che piccolo.",
    },
    {
      title: "Se sei ancora sopra il limite, elimina le pagine inutili",
      body: "Estrai pagine PDF mantiene solo le pagine che ti servono davvero. Una copertina posteriore vuota, un esercizio duplicato, una pagina segnaposto — eliminale, e la dimensione del file scende con loro.",
    },
    {
      title: "Se resti sopra il limite, dividi in più caricamenti",
      body: "Alcuni portali accettano più file. Dividi PDF o Estrai pagine PDF producono parti sotto il limite. Dai loro un nome chiaro (Compito3_Parte1.pdf, Compito3_Parte2.pdf).",
    },
  ],
  tips: [
    "Scansiona in scala di grigi, non a colori, prima ancora di comprimere. Questa scelta fatta a monte fa risparmiare più di qualsiasi compressione successiva.",
    "Ri-scansionare a una risoluzione più bassa (200 DPI invece di 600) riduce il file di 5–10 volte senza cambiare la leggibilità del lavoro scritto a mano.",
    "Non comprimere due volte. Comprimere ripetutamente accumula perdita di qualità. Tieni un originale non compresso e comprimi solo la copia da caricare.",
    "Evita di zippare un PDF per farlo sembrare «più piccolo». La maggior parte dei portali rifiuta del tutto gli archivi ZIP; se li accetta, spesso li scompatta applicando comunque lo stesso limite.",
    "Se il portale rifiuta il file compresso perché non valido, ri-esportalo prima con la stampa in PDF — questo lo appiattisce in un PDF di base che qualsiasi portale accetta.",
  ],
  mobileNote:
    "Caricare dal telefono sui portali scolastici è ormai la norma, ed è proprio dal telefono che di solito arrivano le parti più pesanti della consegna, quelle scansionate. L’app PDF Editor comprime le scansioni direttamente sul dispositivo prima del caricamento, così il file è già pronto per il portale prima ancora di affidarlo a una connessione cellulare incerta.",
  faq: [
    {
      q: "Che dimensione accettano di solito i portali scolastici?",
      a: "I limiti più comuni sono 2 MB (alcune scuole medie), 5 MB (molti portali di scuole superiori e università) e 10–25 MB (portali universitari più permissivi). Verifica sempre quello del tuo corso.",
    },
    {
      q: "La compressione aggressiva rende il testo illeggibile?",
      a: "A volte. Una compressione pesante su scansioni già a bassa risoluzione può pixelare i caratteri. Prova prima con l’impostazione forte; se il testo diventa sfocato, torna a quella media.",
    },
    {
      q: "Devo eliminare le pagine vuote?",
      a: "Sì. Estrai pagine PDF o Dividi PDF le rimuovono. Le pagine vuote occupano spazio reale e non fanno parte del lavoro.",
    },
    {
      q: "Posso consegnare uno ZIP al posto del PDF?",
      a: "La maggior parte dei portali scolastici non accetta archivi ZIP. I pochi che lo fanno applicano comunque un limite di dimensione, e a volte trattano lo ZIP come un unico file soggetto allo stesso tetto.",
    },
    {
      q: "E se il file compresso è ancora troppo pesante?",
      a: "Elimina le pagine inutili, ri-scansiona in scala di grigi o bianco e nero a una risoluzione più bassa, oppure dividi in più caricamenti se il portale lo consente. Alcune consegne potrebbero dover essere fisicamente più corte.",
    },
  ],
  related: [
    { label: "Comprimi PDF — riduci la dimensione nel tuo browser", path: "/compress-pdf" },
    { label: "Dividi PDF — separa in parti accettate", path: "/split-pdf" },
    { label: "Come consegnare i compiti in PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Come ridurre la dimensione di un PDF prima di caricarlo", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Comprimi PDF — riduci la dimensione nel tuo browser", path: "/compress-pdf" },
};

export default content;
