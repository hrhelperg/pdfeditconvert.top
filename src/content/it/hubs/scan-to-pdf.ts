import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Scansiona in PDF",
    h1: "Trasforma la carta in PDF puliti e ricercabili.",
    highlight: "puliti",
    lead: "Usa la fotocamera del telefono per scansionare ricevute, documenti d’identità, contratti e documenti a più pagine. Rilevamento automatico dei bordi, correzione della prospettiva e OCR: tutto in pochi secondi, sul dispositivo.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché le foto dei documenti scattate col telefono vengono male",
    paragraphs: [
      "Fotografare un contratto con la fotocamera predefinita produce un JPG sovraesposto dalle luci del soffitto, deformato dall’angolazione con cui tenevi il telefono e che mostra la superficie dietro il foglio. Ha la forma sbagliata, il contrasto sbagliato e non è ricercabile. Chiunque lo riceva deve strizzare gli occhi per leggerlo.",
      "Invia un JPG così a un commercialista e riceverai educatamente la richiesta di «un PDF vero e proprio». Il motivo è concreto: i JPG delle ricevute non possono essere indicizzati, non possono passare l’OCR del software di contabilità e spesso non superano i controlli di caricamento dei documenti.",
      "Un’app di scansione documenti ricostruisce la foto in ciò che dovrebbe essere: rettangolare, con il contrasto corretto, raddrizzata e salvata come PDF con un testo nascosto dietro. I documenti a più pagine diventano un unico file, non dodici JPG sparsi nel rullino.",
    ],
  },
  features: {
    heading: "Scansiona come con uno scanner vero",
    items: [
      {
        icon: "ScanLine",
        title: "Rilevamento automatico dei bordi",
        body: "L’app trova automaticamente i bordi del documento e scatta la scansione quando l’inquadratura è corretta.",
      },
      {
        icon: "Maximize",
        title: "Correzione della prospettiva",
        body: "Le angolazioni storte vengono raddrizzate. Il risultato sembra ripreso direttamente dall’alto.",
      },
      {
        icon: "Layers",
        title: "Scansioni a più pagine",
        body: "Cattura una pagina dopo l’altra in sequenza. L’app le unisce in un unico PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (testo ricercabile)",
        body: "Riconosce le parole all’interno delle pagine scansionate, così il PDF risultante è ricercabile e copiabile.",
      },
      {
        icon: "Sun",
        title: "Filtri intelligenti",
        body: "Filtri a colori, in bianco e nero o ottimizzati per i documenti, per gestire i problemi di illuminazione.",
      },
      {
        icon: "Tag",
        title: "Denominazione automatica",
        body: "L’app suggerisce i nomi dei file in base al contenuto del documento: ricevute, contratti, documenti d’identità.",
      },
    ],
  },
  steps: {
    heading: "Come scansionare un documento in PDF",
    items: [
      {
        title: "Apri lo scanner",
        body: "Tocca il riquadro Scansiona nella schermata home dell’app PDF Editor.",
      },
      {
        title: "Inquadra il documento",
        body: "Tieni il telefono più o meno sopra il foglio. L’app trova i bordi e lampeggia quando è pronta.",
      },
      {
        title: "Lascia che catturi automaticamente",
        body: "Oppure tocca manualmente. La cattura è istantanea.",
      },
      {
        title: "Regola gli angoli se serve",
        body: "Perfeziona i bordi rilevati prima che la prospettiva venga corretta.",
      },
      {
        title: "Aggiungi altre pagine",
        body: "Tocca il contatore delle pagine per continuare. L’app le unisce in ordine.",
      },
      {
        title: "Salva come PDF",
        body: "Scegli un nome (o accetta il suggerimento automatico) e salva. L’OCR viene eseguito in background.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Scansionare ovunque tu sia",
    body: "Le ricevute si scansionano al tavolo, i contratti in sala riunioni, i documenti d’identità al check-in in aeroporto. Il punto è proprio non dover portare uno scanner piano nella borsa. Uno scanner di documenti sul telefono è il sostituto più vicino e, per le esigenze quotidiane, è del tutto sufficiente.",
  },
  faq: [
    {
      q: "La qualità della scansione è buona quanto quella di uno scanner piano?",
      a: "Per i documenti aziendali di uso quotidiano — ricevute, contratti, documenti d’identità, moduli — sì. Per la scansione fotografica d’archivio o per i caratteri piccoli su carta lucida, uno scanner piano resta comunque migliore.",
    },
    {
      q: "Quanto è affidabile la scansione a più pagine?",
      a: "Molto affidabile. L’app continua a catturare finché non ti fermi, e puoi riordinare o eliminare le pagine prima di salvare.",
    },
    {
      q: "Quali lingue supporta l’OCR?",
      a: "Tutte le principali lingue con alfabeto latino, oltre a cirillico, greco, arabo, cinese, giapponese, coreano. La qualità del riconoscimento varia in base all’illuminazione e allo stato della pagina.",
    },
    {
      q: "Posso scansionare documenti d’identità e passaporti?",
      a: "Sì. L’app produce una scansione pulita e raddrizzata che puoi salvare o condividere. Per sicurezza, conserva le scansioni dei documenti d’identità in una cartella protetta o applica una password al PDF risultante.",
    },
    {
      q: "Funziona offline?",
      a: "La scansione e il rilevamento dei bordi funzionano sul dispositivo. L’OCR per alcune lingue meno comuni potrebbe richiedere una connessione al primo utilizzo per scaricare il modello.",
    },
  ],
  related: [
    {
      label: "Guida passo passo: come scansionare documenti in PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Modifica il PDF scansionato in seguito", path: "/pdf-editor" },
    {
      label: "PDF per le aziende",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Scansiona documenti direttamente dalla fotocamera.",
    sub: "Gratis su iOS e Android. Le scansioni restano sul tuo dispositivo.",
  },
};

export default content;
