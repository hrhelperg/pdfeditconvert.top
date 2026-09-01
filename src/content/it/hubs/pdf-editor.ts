import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "Editor di PDF",
    h1: "Modifica i PDF ovunque, da qualsiasi telefono.",
    highlight: "PDF",
    lead: "Correggi testo, sostituisci immagini, riordina le pagine e firma i documenti — direttamente su iPhone o Android. PDF Editor trasforma il telefono in un vero editor di documenti, non in un semplice visualizzatore.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché modificare un PDF è sempre stato complicato",
    paragraphs: [
      "I PDF sono stati pensati per apparire identici ovunque, ed è proprio questo che li rende difficili da modificare. La maggior parte delle app sul telefono permette solo di visualizzarli o di aggiungere annotazioni. Nel momento in cui devi correggere un errore di battitura, cambiare un nome o spostare una pagina, ti ritrovi rimandato a un computer oppure ti viene chiesto di caricare il file su un sito web qualsiasi.",
      "Quei siti «carica e spera» sono un problema di privacy. Conservano il tuo file per ore, spesso sono lenti, e non hai alcuna garanzia su cosa facciano con contratti, fatture o documenti d’identità sensibili. Il risultato: la maggior parte delle persone fa uno screenshot della parte da correggere, la modifica come se fosse un’immagine e invia via email una versione peggiore dell’originale.",
      "Un editor nativo per il telefono risolve tutto questo senza compromessi. Le modifiche avvengono sul dispositivo. L’impaginazione originale viene conservata. Puoi inviare il risultato via email un minuto dopo aver iniziato, senza caricare nulla sul server di uno sconosciuto.",
    ],
  },
  features: {
    heading: "Cosa puoi fare davvero",
    items: [
      {
        icon: "Type",
        title: "Modifica il testo dove si trova",
        body: "Correggi errori di battitura, cambia nomi, aggiorna le date... senza alterare l’impaginazione. Funziona sui PDF con testo.",
      },
      {
        icon: "ImagePlus",
        title: "Inserisci e sostituisci immagini",
        body: "Aggiungi un nuovo logo o una foto. Ridimensiona e riposiziona senza uscire dalla pagina.",
      },
      {
        icon: "Move",
        title: "Riordina le pagine",
        body: "Trascina le miniature per riordinarle. Elimina pagine, duplicale o inserisci una nuova pagina vuota.",
      },
      {
        icon: "Pencil",
        title: "Firme e sigle",
        body: "Aggiungi una vera firma autografa o una firma scritta. Posizionala dove vuoi con un solo tocco.",
      },
      {
        icon: "Highlighter",
        title: "Annotazioni ed evidenziazioni",
        body: "Evidenzia, sottolinea, barra. Aggiungi note a mano libera o commenti.",
      },
      {
        icon: "FileText",
        title: "Compila moduli",
        body: "Tocca i campi per compilarli. Salva il modulo completato come nuovo PDF.",
      },
    ],
  },
  steps: {
    heading: "Come modificare un PDF dal telefono",
    items: [
      {
        title: "Apri l’app PDF Editor",
        body: "Avviala dalla schermata home. Non serve un account per iniziare.",
      },
      {
        title: "Scegli il PDF da modificare",
        body: "Importalo da File, iCloud Drive, Google Drive o dalla tua email. Oppure tocca un PDF ovunque si trovi e scegli PDF Editor come app per aprirlo.",
      },
      {
        title: "Tocca la parte che vuoi cambiare",
        body: "Tocca un paragrafo per modificare il testo, un’immagine per sostituirla o la miniatura di una pagina per riordinarla.",
      },
      {
        title: "Applica le modifiche",
        body: "Le modifiche avvengono in tempo reale sulla pagina. Usa lo zoom con due dita per maggiore precisione. Annulla e ripristina funzionano come ti aspetti.",
      },
      {
        title: "Salva il risultato",
        body: "Salva sopra l’originale, come nuova copia, oppure condividi direttamente tramite Mail, AirDrop o qualsiasi app di messaggistica.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Modificare in movimento",
    body: "La maggior parte delle modifiche ai PDF avviene nel momento peggiore possibile: cinque minuti prima di una riunione, in treno, tra una lezione e l’altra. Un editor pensato per il telefono ti permette di correggere quel nome scritto male in un contratto mentre vai in ufficio, o di apporre la tua firma su un preventivo durante la pausa caffè. Senza portatile, senza computer fisso, senza aspettare di tornare a casa.",
  },
  faq: [
    {
      q: "L’app PDF Editor è gratuita?",
      a: "Sì. Le funzioni di modifica principali — testo, immagini, riordino delle pagine, firme ed esportazione — sono gratuite. Alcune funzioni avanzate si sbloccano con l’upgrade a Pro.",
    },
    {
      q: "Funziona offline?",
      a: "Sì. La modifica avviene interamente sul dispositivo. Serve una connessione solo se importi file da un cloud o li condividi tramite servizi online.",
    },
    {
      q: "Posso modificare PDF scansionati?",
      a: "Un PDF scansionato è tecnicamente un’immagine. Puoi comunque annotarlo, firmarlo e riordinarne le pagine. Per modificare il testo vero e proprio serve prima l’OCR, che l’app può eseguire sulla maggior parte dei documenti.",
    },
    {
      q: "Ci sono limiti alla dimensione dei file?",
      a: "Non esiste un limite artificiale. I PDF molto grandi (centinaia di MB con grafica complessa) possono risultare più lenti sui telefoni meno recenti, ma l’app è pensata per gestire documenti reali.",
    },
    {
      q: "Le mie modifiche rovineranno l’impaginazione originale?",
      a: "No. Le modifiche vengono applicate direttamente sul documento. Font, margini e formattazione esistente restano intatti nei PDF con testo.",
    },
    {
      q: "Posso esportare in Word?",
      a: "Sì. Puoi convertire il PDF modificato in Word o in altri formati dalla stessa app.",
    },
  ],
  related: [
    {
      label: "Come modificare un PDF su iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Come modificare un PDF su Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Firma un PDF dal telefono", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Modifica i tuoi PDF dal telefono in pochi secondi.",
    sub: "Gratis su iOS e Android. Non serve un account per iniziare.",
  },
};

export default content;
