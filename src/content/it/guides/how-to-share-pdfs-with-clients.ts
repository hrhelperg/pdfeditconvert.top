import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Come condividere PDF con i clienti (con professionalità e riservatezza)",
  description:
    "Una breve guida per inviare un PDF a un cliente — dimensione adatta alla mail, scelta della password, identità del marchio, conferma di ricezione — senza affidare nulla a terzi.",
  updated: "2026-05-29",
  intro: [
    "Il modo in cui mandi un PDF a un cliente dice più di quanto pensi sul tuo modo di lavorare. Un allegato da 40 MB che rimbalza, un nome file generico come «Documento (1).pdf», o un file che si apre con il nome del cliente scritto male nella barra del titolo — sono dettagli piccoli, ma restano impressi.",
    "Una consegna professionale al cliente si gioca su poche abitudini: dare al file la dimensione giusta, nominarlo come si nomina una consegna vera, curare l’identità del marchio con coerenza, proteggerlo con una password quando serve davvero, e confermare che sia arrivato. Nessuno di questi passaggi richiede tempo una volta che diventa un’abitudine; insieme, danno al file un’aria rifinita.",
    "Questa guida è proprio quel manuale breve: cosa fare prima di premere invia, e quali strumenti gratuiti coprono ogni passaggio senza inviare nulla di sensibile a un server di terzi.",
  ],
  steps: [
    {
      title: "Dai al file un nome pensato per il cliente, non per te",
      body: "NomeCliente_NomeProgetto_Proposta_2026-05-29.pdf non lascia dubbi. «finale_v3_modificato.pdf» è una confessione. Il destinatario deve poter riconoscere il file dalla propria cartella download anche un mese dopo.",
    },
    {
      title: "Allinea il titolo nei metadati del documento",
      body: "Il titolo mostrato nella scheda del PDF spesso è il nome file originale o un residuo di Word. Ri-esporta dall’app di origine impostando il titolo nei metadati, oppure usa un editor PDF per correggerlo. Un dettaglio piccolo, una rifinitura professionale.",
    },
    {
      title: "Comprimi in base alla casella di posta del cliente",
      body: "Alcuni portali per i clienti fissano un limite di 5 MB; la maggior parte dei sistemi di posta si ferma a 25 MB. Comprimi PDF nel browser porta una consegna tipica ben sotto entrambe le soglie. Fai di questo l’ultimo passaggio, non il primo.",
    },
    {
      title: "Proteggi con password solo quando conta davvero",
      body: "Riserva la password ai contenuti davvero sensibili — dati finanziari, dati personali, bozze di contratti. Non proteggere con password la proposta in sé: la scomodità pesa più del reale beneficio in termini di sicurezza.",
    },
    {
      title: "Accompagna l’invio con una nota che elenca il contenuto",
      body: "Una frase breve basta: «In allegato: proposta (12 pagine), termini (3 pagine), listino (1 pagina)». Il cliente sa cosa sta per aprire senza doverlo scoprire pagina per pagina.",
    },
    {
      title: "Verifica che il file sia arrivato",
      body: "Chiedi «fammi sapere se arriva tutto bene» direttamente nella nota di accompagnamento, oppure ricontrolla il giorno dopo. Capita che i file finiscano nello spam, specialmente gli allegati protetti da password.",
    },
  ],
  tips: [
    "Applica la filigrana alle bozze (BOZZA, USO INTERNO), mai al file finale. Il file finale non dovrebbe aver bisogno di un’etichetta.",
    "Se riesci a capire quale convenzione usa il cliente, allineati alla sua — molte aziende clienti hanno uno standard interno per i nomi dei documenti che puoi semplicemente rispecchiare.",
    "Evita di inviare più di tre allegati. Unisci ciò che appartiene allo stesso documento; il resto, se serve, mandalo in un secondo momento.",
    "Se ti serve una firma di ritorno, firma prima la tua parte e prepara già il campo firma per l’altra. È una piccola cortesia che si traduce in una risposta più rapida.",
    "Prova il file con un lettore diverso dal tuo prima di inviarlo — il tuo visualizzatore potrebbe mostrare un’impaginazione che altri non vedono allo stesso modo.",
  ],
  mobileNote:
    "Sempre più clienti leggono le consegne prima di tutto dal telefono. Con l’app PDF Editor puoi vedere l’anteprima, comprimere, firmare e condividere di nuovo un PDF dal telefono, così una revisione dell’ultimo minuto non deve aspettare che tu torni in ufficio.",
  faq: [
    {
      q: "Qual è l’errore più comune quando si invia un PDF a un cliente?",
      a: "Il nome del file. «Documento (1).pdf» dice al cliente che non ci hai messo attenzione. Un nome descrittivo con progetto e data rende il file facile da ritrovare in seguito.",
    },
    {
      q: "Devo proteggere con password tutto quello che invio?",
      a: "No. Riserva le password ai contenuti davvero sensibili. Le consegne di routine non ne hanno bisogno, e usarle troppo spesso abitua i clienti a ignorarle o a perderle.",
    },
    {
      q: "Quanto può essere grande il file?",
      a: "La mail si ferma a 25 MB; molti portali dei clienti a 5 MB. Comprimi tutto ciò che supera i 5 MB, a meno che tu non sappia già che il cliente accetta file più grandi. Più piccolo è sempre più sicuro.",
    },
    {
      q: "Meglio inviare più PDF separati o unirli in uno solo?",
      a: "Uniscili quando appartengono allo stesso pacchetto (proposta più termini più listino). Tienili separati quando sono davvero consegne diverse. Tre allegati è il limite pratico oltre il quale le cose iniziano a perdersi.",
    },
    {
      q: "Va bene usare strumenti PDF online per i documenti dei clienti?",
      a: "Solo se lavorano localmente nel tuo browser. Caricare un documento sensibile di un cliente su un server di terzi è un rischio concreto. Gli strumenti che lavorano nel browser, direttamente sul tuo dispositivo, evitano del tutto questo problema.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Comprimi PDF — riduci per i portali dei clienti", path: "/compress-pdf" },
    { label: "Come preparare un PDF per uso professionale", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Come creare PDF pronti per il cliente", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
