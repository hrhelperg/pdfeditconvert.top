import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Come scansionare documenti in PDF dal telefono",
  description:
    "Usa la fotocamera del telefono per scansionare documenti di più pagine in PDF nitidi. Flusso mobile con rilevamento dei bordi e OCR.",
  updated: "2026-05-11",
  intro: [
    "I telefoni diventano ottimi scanner di documenti nel momento in cui smetti di usare la fotocamera predefinita. L’app giusta si occupa di rilevamento dei bordi, correzione prospettica, regolazione del contrasto e OCR — trasformando una foto scattata a mano in un PDF pulito e ricercabile, che sembra scansionato e non fotografato al volo.",
    "Questa guida ripercorre il flusso di scansione documenti nell’app PDF Editor su iPhone o Android. Entrambe le piattaforme producono risultati equivalenti. Vedremo i casi di tutti i giorni: scontrini, moduli firmati, contratti di più pagine, documenti d’identità, e i momenti in cui scansionare col telefono batte l’andare fino a uno scanner piano.",
    "Alla fine avrai una routine di scansione ripetibile, che funziona anche con un’illuminazione non perfetta, produce file accettati senza problemi da commercialisti e uffici legali, e tiene tutto sul dispositivo.",
  ],
  steps: [
    {
      title: "Apri lo scanner",
      body: "Tocca il riquadro Scansiona nella schermata iniziale dell’app PDF Editor. Si apre il mirino della fotocamera con il rilevamento dei bordi attivo.",
    },
    {
      title: "Appoggia il documento su una superficie in contrasto",
      body: "Il rilevamento dei bordi funziona meglio quando c’è un contrasto netto tra la pagina e la superficie sottostante. Metti un foglio bianco su una superficie scura, o viceversa.",
    },
    {
      title: "Inquadra il telefono sopra la pagina",
      body: "Tieni il telefono più o meno sopra il documento. L’app disegna un contorno blu attorno ai bordi rilevati. Quando il contorno è stabile, scatta automaticamente.",
    },
    {
      title: "Acquisizione automatica o manuale",
      body: "La fotocamera pulsa e scatta quando l’inquadratura è corretta. Se l’acquisizione automatica non riconosce i bordi, tocca il pulsante di scatto manuale. Puoi comunque regolare gli angoli subito dopo.",
    },
    {
      title: "Regola gli angoli rilevati",
      body: "Trascina le maniglie negli angoli per rifinire i bordi, se serve. Dopo questo passaggio entra in gioco la correzione prospettica, che produce una pagina rettangolare a partire dallo scatto angolato.",
    },
    {
      title: "Applica un filtro",
      body: "Scegli Colore, Scala di grigi o Bianco e nero. Per scontrini e moduli, Bianco e nero riduce di molto la dimensione del file senza perdita di qualità. Per documenti con foto o elementi a colori, resta su Colore.",
    },
    {
      title: "Aggiungi altre pagine",
      body: "Tocca il contatore delle pagine in fondo allo schermo per acquisirne altre. Ogni nuova acquisizione si aggiunge al PDF corrente. Riordina le pagine dalla striscia delle miniature se serve.",
    },
    {
      title: "Salva il PDF",
      body: "Tocca Fine, dai al file un nome significativo e salva. L’OCR gira in background, rendendo il PDF risultante ricercabile. Puoi poi condividerlo, stamparlo o caricarlo su un cloud.",
    },
  ],
  tips: [
    "Una luce diffusa e uniforme batte una luce forte dall’alto — la luce diretta crea riflessi su carta lucida o moduli plastificati.",
    "Appoggia il documento ben disteso. Le pagine curve (come un libro aperto) causano distorsioni del testo che la correzione prospettica non può risolvere del tutto.",
    "Per gli scontrini, il filtro Bianco e nero riduce tipicamente la dimensione del file del 60-80% senza perdita di leggibilità.",
    "Se scansioni documenti d’identità o passaporti, salva il PDF risultante in una cartella protetta da password o applica una password al PDF prima di condividerlo.",
    "L’acquisizione automatica funziona in meno di un secondo quando l’inquadratura è buona. Se fatica, il problema è probabilmente l’illuminazione o il contrasto.",
  ],
  mobileNote:
    "Il flusso completo di scansione e salvataggio richiede meno di 30 secondi per un documento di più pagine. Rispetto ad andare fino a uno scanner piano, scaricare un software di scansione e gestire allegati via mail, il telefono vince nettamente per le esigenze quotidiane di lavoro. Il risultato è lo stesso PDF ricercabile standard accettato da ogni software di contabilità e sistema documentale.",
  faq: [
    {
      q: "La qualità della scansione è pari a quella di uno scanner piano?",
      a: "Per i documenti di tutti i giorni — scontrini, contratti, documenti d’identità, moduli — sì, con un’illuminazione adeguata e un documento disteso. Per la scansione fotografica d’archivio o la stampa fine su carta lucida, uno scanner piano dedicato resta superiore.",
    },
    {
      q: "Quali lingue supporta l’OCR?",
      a: "Tutte le principali lingue con alfabeto latino (inglese, spagnolo, francese, tedesco, italiano, portoghese, olandese, ceco, polacco, ecc.) più cirillico, greco, arabo, cinese, giapponese e coreano. La qualità del riconoscimento è massima su testo stampato pulito e più bassa sulla scrittura a mano.",
    },
    {
      q: "Posso scansionare un documento d’identità o un passaporto?",
      a: "Sì. L’app produce una scansione pulita e raddrizzata, pronta per il caricamento in procedure KYC o per qualsiasi invio di documenti. Applica una password al PDF risultante se lo invii via mail.",
    },
    {
      q: "La scansione funziona offline?",
      a: "Sì. Rilevamento dei bordi, correzione prospettica e filtri girano sul dispositivo. L’OCR funziona localmente per le lingue principali; le lingue meno comuni possono scaricare un modello di riconoscimento al primo utilizzo.",
    },
    {
      q: "Quanto sono grandi i PDF scansionati?",
      a: "Un documento tipico di 5 pagine in modalità bianco e nero si aggira sui 200-400 KB. La stessa scansione a colori è di solito 1-2 MB. La compressione può ridurli ulteriormente se devi inviarli via mail.",
    },
  ],
  related: [
    { label: "Scan to PDF — panoramica completa", path: "/scan-to-pdf" },
    {
      label: "Modifica il PDF scansionato in seguito",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF per le aziende", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Scan to PDF", path: "/scan-to-pdf" },
};

export default content;
