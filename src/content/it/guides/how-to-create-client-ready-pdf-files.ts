import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Come creare PDF pronti per il cliente (curati, con la tua identità)",
  description:
    "Cosa distingue un PDF a uso interno da uno pronto per il cliente: copertina, numerazione delle pagine, branding, dimensione e nome del file. Il rifinimento rapido che fa sembrare un documento davvero finito.",
  updated: "2026-05-29",
  intro: [
    "C’è una differenza netta tra un PDF di lavoro e uno pronto per il cliente, e quasi sempre si gioca sui dettagli. La versione interna ha una copertina segnaposto, nessuna numerazione delle pagine, un peso di 14 MB e un nome tipo «final-final-v2.pdf». La versione pronta per il cliente ha una copertina pulita, una tipografia coerente con il brand, le pagine numerate, un peso di 2 MB e un nome che sembra professionale. Le informazioni sono le stesse: solo una delle due versioni sembra finita.",
    "Ottenere la versione pronta per il cliente non richiede un grafico. È una sequenza breve di passaggi standard — sistemare il file sorgente, esportare di nuovo in modo pulito, rifinire il PDF, etichettarlo correttamente, comprimerlo con criterio, rinominarlo con cura. Fatta in ordine, la rifinitura richiede solo pochi minuti per documento.",
    "Questa guida ripercorre la sequenza passo per passo. Nessuno di questi passaggi richiede strumenti costosi: quasi tutti si possono fare in una scheda del browser senza inviare nulla di sensibile a un server esterno.",
  ],
  steps: [
    {
      title: "Parti da un sorgente ben impaginato",
      body: "Se il documento sorgente ha un’aria da bozza, il PDF che ne esce avrà la stessa aria. Sistema margini, scelta dei caratteri e gerarchia dei titoli in Word, Pages o Docs prima di esportare. Il PDF non può aggiungere una cura che non è già nel sorgente.",
    },
    {
      title: "Aggiungi una copertina che identifichi il documento",
      body: "Nome del cliente, nome del progetto, titolo del documento, data, nome della tua attività. Una sola pagina. Dà il contesto che il documento non deve più ripetere in ogni intestazione.",
    },
    {
      title: "Numera le pagine a partire dalla seconda",
      body: "Il formato «X di Y» non lascia dubbi e conferma che il documento è completo: chi legge sa che non manca nulla. Salta la numerazione sulla copertina e parti dalla pagina 2.",
    },
    {
      title: "Applica un branding coerente (tipografia, colori, logo)",
      body: "Un logo piccolo e un sistema tipografico coerente comunicano cura. Il branding deve restare discreto, non appariscente. Se il cliente ha delle linee guida di brand, seguile.",
    },
    {
      title: "Esporta di nuovo con i font incorporati",
      body: "Con i font incorporati il documento appare identico per il cliente e per te. Esporta di nuovo dal sorgente attivando l’opzione «incorpora tutti i font».",
    },
    {
      title: "Comprimi, rinomina e controlla prima di inviare",
      body: "Usa Comprimi PDF per restare sotto il limite tipico degli allegati email. Rinomina il file come NomeCliente_TipoDocumento_AAAA-MM-GG.pdf. Apri il file finale una volta e rileggi prima e ultima pagina prima di inviarlo: i refusi si notano rileggendo.",
    },
  ],
  tips: [
    "Evita sfondi stock e copertine che sembrano screenshot. Una copertina pulita basata sulla tipografia invecchia meglio di una troppo elaborata.",
    "Non lasciare la filigrana «BOZZA» sulla versione finale. È proprio l’assenza della filigrana a segnalare che il documento è definitivo.",
    "Le tabelle che si estendono su più pagine devono ripetere la riga di intestazione. In Word, «ripeti riga di intestazione» è un clic che evita problemi di leggibilità in stampa.",
    "I grafici esportati come vettoriali (PDF) restano nitidi. Quelli incollati come immagine diventano sfocati con lo zoom: correggi il problema alla fonte.",
    "Se riusi lo stesso modello per più clienti, aggiorna i metadati ogni volta, così il titolo del documento non dice ancora «Proposta Acme» quando in realtà va a Beta Co.",
  ],
  mobileNote:
    "I clienti spesso aprono i documenti prima sul telefono. Con l’app PDF Editor puoi vedere l’anteprima del PDF finale proprio come la vedrà il cliente, così una copertina che sembra perfetta su un monitor da 27 pollici ma affollata su un telefono si nota prima della consegna.",
  faq: [
    {
      q: "Qual è il segnale più evidente che un PDF non è pronto per il cliente?",
      a: "Un nome file non rivisto. «final_v3_revised.pdf» dice al cliente che questa è solo una delle tante versioni. Un nome chiaro e datato segnala un documento finito.",
    },
    {
      q: "Serve il logo su ogni pagina?",
      a: "No. Basta il logo in copertina e un richiamo discreto a piè di pagina. Un logo grande su ogni pagina lo fa sembrare più una presentazione commerciale che un documento.",
    },
    {
      q: "Conviene inserire un sommario?",
      a: "Sopra le dieci pagine, sì. È un piccolo accorgimento che fa sembrare il documento più curato e aiuta chi legge a orientarsi.",
    },
    {
      q: "Qual è il formato migliore per la numerazione delle pagine?",
      a: "«X di Y». La Y conferma che il documento è completo. Il solo «X» va bene per documenti brevi, ma perde questo segnale di completezza.",
    },
    {
      q: "Vale la pena progettare una copertina personalizzata?",
      a: "Per documenti ricorrenti, sì: un modello con la tua identità visiva si ripaga su tanti documenti. Per un documento una tantum, basta una copertina tipografica pulita.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Word a PDF — esportazioni pulite per la distribuzione", path: "/word-to-pdf" },
    { label: "Come condividere i PDF con i clienti", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Come preparare un PDF per uso aziendale", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
