import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Flussi di lavoro PDF per piccole imprese (preventivi, contratti, archivio)",
  description:
    "Come una piccola impresa gestisce i suoi documenti con i PDF — preventivi in uscita, contratti firmati, archivio ordinato — senza comprare un pacchetto di abbonamenti apposta.",
  updated: "2026-05-29",
  intro: [
    "Una piccola impresa gestisce più PDF di quanto il titolare si aspetti. Escono preventivi, tornano contratti firmati, partono fatture, si archiviano estratti conto, si accumulano documenti fiscali. Ognuno di questi è un piccolo compito, e ognuno può mangiare tempo prezioso se il flusso di lavoro non è pensato con criterio.",
    "I pacchetti PDF costosi si ripagano quando hai un ufficio legale interno. Per un’impresa di cinque persone con qualche decina di documenti a settimana, gli strumenti gratuiti nel browser e una convenzione chiara fanno lo stesso lavoro senza aggiungere una voce di abbonamento in bilancio. Il trucco è scrivere il flusso di lavoro una volta sola e poi seguirlo sempre.",
    "Questa guida descrive il flusso di lavoro per i quattro tipi di documento che una piccola impresa gestisce più spesso in PDF: preventivi, contratti, fatture e archivio. Ogni sezione è breve, concreta, e non richiede nulla a pagamento.",
  ],
  steps: [
    {
      title: "Preventivi: modello Word → Word a PDF → invio con il tuo brand",
      body: "Crea il preventivo da un modello Word, inserisci i dati del cliente e le voci, poi esporta in PDF con Word a PDF. Personalizza la copertina con il tuo brand, rinomina il file come NomeCliente_Preventivo_AAAA-MM-GG.pdf e invialo.",
    },
    {
      title: "Contratti: PDF → Firma PDF → blocca → controfirma",
      body: "Definisci il testo nel sorgente, esporta in PDF, firma con Firma PDF, blocca il documento se il tuo strumento lo consente, poi invialo per la controfirma. Conserva sia la copia con una sola firma sia quella firmata da entrambe le parti.",
    },
    {
      title: "Fatture: numerazione progressiva, filigrana quando pagate",
      body: "FATT-2026-001, FATT-2026-002. Tienile tracciate in un foglio di calcolo. Quando il pagamento arriva, usa Aggiungi filigrana per timbrare PAGATA e sposta il file da /da-incassare/ a /pagate/.",
    },
    {
      title: "Archivio: ricevi, comprimi, archivia per anno",
      body: "Estratti conto, fatture dei fornitori, scontrini spese. Ricevili in PDF, comprimili per l’archiviazione e archiviali per anno in /Archivio/2026/. Conservali per almeno sette anni.",
    },
    {
      title: "Usa una struttura di cartelle condivisa",
      body: "Cartelle di primo livello per /Clienti/, /Archivio/, /Interno/, /Modelli/, /Storico/. Massimo due livelli di annidamento. Tutto il team usa la stessa struttura.",
    },
    {
      title: "Fai un riepilogo mensile",
      body: "Una volta al mese, controlla la cartella delle fatture /da-incassare/ e i progetti attivi in /clienti/. Oltre i 30 giorni, fai un sollecito. Oltre i 90, passa a un’azione più decisa. La cartella stessa è la tua lista delle cose da fare.",
    },
  ],
  tips: [
    "Non reinventare il modello ogni volta. Crea un modello per i preventivi, uno per i contratti e uno per le fatture, e riusali sempre.",
    "Firma con una firma autografa vera, non con il nome digitato. In caso di contestazioni, una firma disegnata regge meglio.",
    "Comprimi ogni documento nel momento in cui lo invii: i file in uscita devono sempre essere più leggeri degli originali interni.",
    "Evita di inviare ai clienti file Word modificabili. Una volta in PDF, la versione resta bloccata.",
    "Fai una pulizia dell’archivio ogni trimestre. I progetti chiusi vanno in /Storico/; le cartelle attive restano brevi e facili da scorrere.",
  ],
  mobileNote:
    "Chi gestisce una piccola impresa fa metà del lavoro sui PDF dal telefono — firma un contratto tra un appuntamento e l’altro, invia una fattura direttamente dal cantiere, archivia uno scontrino durante la giornata. L’app PDF Editor gestisce tutti e quattro i tipi di documento da mobile, anche offline, così il lavoro non aspetta di tornare alla scrivania.",
  faq: [
    {
      q: "Serve un software di contabilità per fatturare?",
      a: "Non con volumi bassi. Un modello Word, un foglio di tracciamento e una struttura di cartelle funzionano bene per qualche decina di fatture al mese. Un software si ripaga quando cresci di scala.",
    },
    {
      q: "Come tengo traccia dei contratti ancora in sospeso?",
      a: "Con una struttura di cartelle: /Clienti/Attivi/[Nome]/contratti/inviati/ e .../firmati/. Lo stato della cartella è già lo stato del contratto. Non serve un foglio a parte.",
    },
    {
      q: "E i backup?",
      a: "Sincronizza la cartella dei documenti su almeno un cloud (Dropbox, iCloud, Google Drive). Tieni anche un backup esterno periodico per gli anni con documenti fiscali.",
    },
    {
      q: "Conviene usare un solo modello per ogni tipo di documento?",
      a: "Sì. Modelli coerenti rendono i documenti riconoscibili e riducono il lavoro per ogni singolo file. Personalizza il contenuto, non la struttura.",
    },
    {
      q: "Quando conviene passare a un pacchetto PDF a pagamento?",
      a: "Quando ti serve instradamento automatico, firma elettronica in blocco o tracciabilità completa per un audit — di solito intorno ai 20 dipendenti o con flussi soggetti a normative specifiche.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Firma PDF — firma elettronica", path: "/sign-pdf" },
    { label: "Come gestire le fatture in PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "I migliori strumenti PDF gratuiti per le piccole imprese", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
