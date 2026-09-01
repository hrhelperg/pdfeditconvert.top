import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Strumenti PDF nel browser o con caricamento dei file",
  description:
    "Non tutti gli strumenti PDF «online» sono uguali. La differenza tra quelli che funzionano nel tuo browser e quelli che caricano il tuo file su un server — e come distinguerli.",
  updated: "2026-05-23",
  intro: [
    "Due strumenti PDF possono sembrare identici — stessa pagina web, stesso riquadro per trascinare i file, stesso pulsante di download — e fare qualcosa di completamente diverso con il tuo file. Uno lo elabora direttamente dentro il tuo browser, sul tuo stesso dispositivo. L’altro lo carica su un server, fa il lavoro lì, e rimanda indietro il risultato. Dall’esterno spesso non si riesce a distinguerli, ma per qualsiasi cosa sensibile la differenza è tutto.",
    "Questa guida spiega quella distinzione, perché conta, e come capire quale stai usando. Gli strumenti di questo sito sono del primo tipo: funzionano nel tuo browser e il tuo file non lascia mai il tuo dispositivo. Molti servizi «PDF online» popolari sono del secondo tipo, anche quando non lo rendono affatto evidente.",
    "Non è che gli strumenti con caricamento siano inutili — è che dovresti sapere a quale tipo stai affidando il tuo documento, e scegliere consapevolmente.",
  ],
  steps: [
    {
      title: "Capisci cosa significa davvero «nel browser»",
      body: "Un vero strumento nel browser elabora tutto direttamente nella pagina, usando il processore del tuo dispositivo. Il tuo file viene letto localmente e non viene mai trasmesso — il lavoro avviene dove il file si trova già.",
    },
    {
      title: "Capisci cosa fa uno strumento con caricamento",
      body: "Uno strumento con caricamento invia il tuo file a un server remoto, lo elabora lì e restituisce il risultato. Il tuo documento vive per un momento sull’infrastruttura di qualcun altro, soggetto alle sue politiche di conservazione e privacy.",
    },
    {
      title: "Fai attenzione ai segnali rivelatori",
      body: "Uno strumento con caricamento di solito mostra una barra di avanzamento che dipende dalla velocità della tua connessione, può non funzionare offline, e spesso menziona file «eliminati dopo un’ora» — una frase che ha senso solo se avevano davvero il tuo file.",
    },
    {
      title: "Provalo offline",
      body: "Apri lo strumento, poi disattiva la connessione e prova a usarlo. Un vero strumento nel browser continua a funzionare; uno con caricamento no, perché non ha dove inviare il file.",
    },
    {
      title: "Scegli in base al documento",
      body: "Per i file pubblici e non sensibili, va bene qualsiasi tipo. Per contratti, documenti d’identità, estratti conto e lavoro con i clienti, scegli uno strumento nel browser così il documento non lascia mai il tuo dispositivo.",
    },
    {
      title: "Usa strumenti sul dispositivo per i lavori sensibili",
      body: "Gli strumenti di questo sito — unisci, dividi, comprimi, converti, ruota e gli altri — funzionano nel tuo browser. Scegli questi quando la privacy conta davvero.",
    },
  ],
  tips: [
    "«Online» non ti dice se un file viene caricato o no. La vera domanda è dove avviene l’elaborazione — sul tuo dispositivo, o sul loro server.",
    "Il test offline è la verifica più affidabile: uno strumento nel browser funziona ancora con la connessione spenta, uno con caricamento no.",
    "«Eliminiamo i tuoi file dopo un’ora» è rassicurante solo se volevi che venissero caricati fin dall’inizio. Uno strumento che non carica mai nulla non ha niente da eliminare.",
    "La velocità è un indizio: gli strumenti nel browser non hanno attese di caricamento o download, quindi i file grandi sono spesso più veloci in locale che facendo avanti e indietro con un server.",
    "Gli strumenti con caricamento non sono il male — per un volantino pubblico va benissimo. Solo non affidargli un contratto o un documento d’identità senza pensarci.",
  ],
  mobileNote:
    "Su mobile, uno strumento con caricamento consuma anche i tuoi dati e si blocca con una connessione debole. L’app PDF Editor elabora tutto sul dispositivo e funziona completamente offline — così puoi unire o comprimere un documento sensibile su un treno senza segnale, senza che nulla lasci il tuo telefono.",
  faq: [
    {
      q: "Tutti gli strumenti PDF online sono uguali?",
      a: "No. Alcuni elaborano il tuo file nel browser, sul tuo dispositivo; altri lo caricano su un server. Possono sembrare identici, quindi la differenza è facile da non notare — ma determina se il tuo documento lascia o no il tuo dispositivo.",
    },
    {
      q: "Come faccio a capire se uno strumento carica il mio file?",
      a: "Provalo offline. Uno strumento nel browser continua a funzionare con la connessione spenta; uno con caricamento no, dato che non ha dove inviare il file. Gli strumenti con caricamento tendono anche a mostrare barre di avanzamento che dipendono dalla rete.",
    },
    {
      q: "Gli strumenti di questo sito funzionano nel browser?",
      a: "Sì. Unisci, dividi, comprimi, converti, ruota e gli altri funzionano nel tuo browser usando il processore del tuo dispositivo. I tuoi file non vengono mai caricati su un server.",
    },
    {
      q: "È mai accettabile usare uno strumento con caricamento?",
      a: "Per i documenti pubblici e non sensibili, sì. La cautela vale per contratti, documenti d’identità, estratti conto e lavoro con i clienti, dove uno strumento nel browser tiene il file sul tuo dispositivo.",
    },
    {
      q: "Perché gli strumenti nel browser a volte sono più veloci?",
      a: "Non c’è attesa di caricamento o download. Il file è già sul tuo dispositivo, quindi per i documenti grandi l’elaborazione locale spesso batte l’andirivieni verso un server.",
    },
  ],
  related: [
    { label: "Tutti gli strumenti PDF gratuiti — nel browser, senza caricamento", path: "/pdf-tools" },
    { label: "Strumenti PDF che rispettano la tua privacy", path: "/guides/privacy-first-pdf-tools" },
    { label: "App PDF o strumenti PDF online", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Come comprimere un PDF online senza caricarlo su un server", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
};

export default content;
