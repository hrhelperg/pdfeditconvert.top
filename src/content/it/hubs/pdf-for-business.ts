import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF per le aziende",
    h1: "Flussi di lavoro PDF per piccoli team.",
    highlight: "piccoli team",
    lead: "Contratti, fatture, preventivi, accordi firmati, ricevute scansionate — tutti i documenti su cui si basa una piccola impresa, gestiti dal telefono senza licenze per postazione né SaaS aziendale.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché i piccoli team continuano a lottare con i PDF",
    paragraphs: [
      "Le piccole imprese vivono di PDF. I preventivi escono come PDF, i contratti tornano firmati come PDF, le fatture sono PDF, le ricevute vengono scansionate in PDF, gli accordi di riservatezza sono PDF. Eppure gli strumenti che li gestiscono sono o a prezzo aziendale o basati sul web e fragili.",
      "I software PDF per aziende danno per scontato che tu abbia un reparto IT e un processo di approvvigionamento. Gli strumenti web gratuiti danno per scontato che tu sia disposto a caricare i contratti dei clienti su un server di terzi. Nessuno dei due modelli si adatta a un’agenzia di cinque persone, a un libero professionista o a una piccola attività online che deve elaborare documenti rapidamente e senza burocrazia.",
      "Un toolkit PDF nativo, pensato prima di tutto per il telefono, si adatta meglio ai piccoli team. Nessuna licenza da gestire, nessuna coda di caricamento da coordinare, nessun canone mensile per uno strumento usato poche volte a settimana. Ogni membro del team installa l’app sul telefono ed è operativo dal primo giorno.",
    ],
  },
  features: {
    heading: "Le operazioni che contano davvero per i piccoli team",
    items: [
      {
        icon: "FileSignature",
        title: "Preventivo → contratto → firma",
        body: "Invia un preventivo in PDF, ricevi l’accettazione firmata, conserva il risultato. L’intero ciclo sta in un telefono.",
      },
      {
        icon: "Receipt",
        title: "Scansione delle ricevute al banco",
        body: "Scansiona le ricevute cartacee nel momento in cui le ricevi. Denominazione automatica e OCR le rendono pronte per il software di contabilità.",
      },
      {
        icon: "ShieldCheck",
        title: "Proteggi i documenti sensibili",
        body: "Proteggi con password contratti, PDF con buste paga e copie di accordi di riservatezza prima di condividerli all’esterno. AES-256, sul dispositivo.",
      },
      {
        icon: "Combine",
        title: "Combina e dividi i deliverable",
        body: "Unisci un preventivo al relativo capitolato; dividi un export lungo per cliente. Entrambe le operazioni richiedono tre tocchi.",
      },
      {
        icon: "Wand",
        title: "Modifiche rapide, senza portatile",
        body: "Correggi un errore di battitura su un preventivo, aggiorna una data su una fattura, sostituisci un logo su una brochure — tutto dal telefono.",
      },
      {
        icon: "Globe",
        title: "Funziona con il cloud che usi già",
        body: "Drive, iCloud, OneDrive, Dropbox: l’app legge e scrive da qualsiasi posto in cui il tuo team già conserva i file.",
      },
    ],
  },
  steps: {
    heading: "Un tipico flusso di lavoro per una piccola impresa",
    items: [
      {
        title: "Ricevi una richiesta",
        body: "Un cliente chiede un preventivo. Lo prepari nel tuo strumento di fatturazione e lo esporti in PDF.",
      },
      {
        title: "Firma e data il documento",
        body: "Apri il PDF in PDF Editor, firma con la tua firma salvata, aggiungi un timbro con la data.",
      },
      {
        title: "Invia via email o messaggistica",
        body: "Condividi il preventivo firmato direttamente dall’app tramite il menu di condivisione email o lo strumento di messaggistica del tuo team.",
      },
      {
        title: "Ricevi la versione controfirmata",
        body: "Quando il cliente te la restituisce, apri il file, archivialo sul cloud e proteggilo con una password se contiene termini sensibili.",
      },
      {
        title: "Genera la fattura e uniscila al contratto",
        body: "Esporta la fattura dal tuo strumento di contabilità, poi usa Unisci per riunire fattura e contratto firmato in un unico archivio PDF ordinato.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Gestire un’attività dal telefono",
    body: "Buona parte del lavoro documentale delle piccole imprese avviene tra altre cose: dal cliente, in taxi, tra un’uscita a scuola e l’altra. Essere nativi per il telefono significa che il flusso di lavoro non dipende dallo stare a una scrivania. I contratti che prima aspettavano la sera al portatile ora partono nella stessa ora in cui sono stati richiesti.",
  },
  faq: [
    {
      q: "L’app è adatta a un team di 5-20 persone?",
      a: "Sì, per singoli utenti in un piccolo team: ognuno la installa sul proprio telefono. Non esiste una console di amministrazione centrale; è uno strumento per singolo dispositivo. Per organizzazioni più grandi, un sistema di gestione documentale aziendale potrebbe essere più adatto.",
    },
    {
      q: "Posso usarla per contratti legalmente vincolanti?",
      a: "La maggior parte delle giurisdizioni accetta i PDF firmati per i contratti aziendali standard. Il regolamento eIDAS dell’UE e l’ESIGN Act statunitense riconoscono entrambi le firme elettroniche. Per accordi di grande valore, regolamentati o transfrontalieri, verifica le norme locali e valuta l’uso di firme elettroniche qualificate.",
    },
    {
      q: "Si integra con gli strumenti di contabilità?",
      a: "PDF Editor produce PDF standard accettati da qualsiasi strumento di contabilità (Xero, QuickBooks, FreeAgent, Pleo, ecc.). Non serve alcuna integrazione particolare: basta salvare il PDF sul cloud e lo strumento di contabilità lo rileva.",
    },
    {
      q: "Come proteggo la riservatezza dei file dei clienti?",
      a: "Tutte le operazioni avvengono sul dispositivo. I file lasciano il telefono solo quando li condividi attivamente. Applica la protezione con password ai documenti particolarmente sensibili prima di condividerli all’esterno.",
    },
    {
      q: "E le tracce di controllo (audit trail)?",
      a: "I PDF firmati includono metadati della firma (marca temporale, nome del firmatario). Per settori regolamentati che richiedono tracce di controllo complete, affianca una piattaforma di firma elettronica dedicata: PDF Editor gestisce i contratti aziendali quotidiani, non i flussi di lavoro regolamentati.",
    },
  ],
  related: [
    { label: "Sicurezza e crittografia dei PDF", path: "/pdf-security" },
    {
      label: "Flussi di lavoro PDF sicuri per le aziende",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Firma un PDF dal telefono", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Gestisci le operazioni sui documenti dal telefono.",
    sub: "Gratis per l’uso aziendale quotidiano. Nessuna licenza per postazione.",
  },
};

export default content;
