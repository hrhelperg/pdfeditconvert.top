import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Firma PDF",
    h1: "Firma i PDF dal telefono in pochi secondi.",
    highlight: "secondi",
    lead: "Aggiungi una vera firma autografa, un nome scritto o le iniziali a qualsiasi PDF. Posizionala, ridimensionala ed esporta — senza stampare, scansionare o inviarti un file via email.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché stampare e scansionare è finalmente superato",
    paragraphs: [
      "La vecchia routine per firmare — stampa il PDF, firmalo, scansionalo, rimandalo via email — è sopravvissuta, chissà come, fino al 2026. La maggior parte delle aziende accetta le firme elettroniche, eppure molti contratti arrivano ancora con la dicitura «firma e restituisci», come se tutti avessero una stampante e uno scanner a portata di mano.",
      "I servizi pubblici di firma elettronica risolvono in parte il problema, ma introducono l’accesso con login, il caricamento del documento, la gestione dell’account e i piani a pagamento. Per una singola firma su un singolo documento è uno sforzo eccessivo, che aggiunge tempi morti di cui non hai bisogno.",
      "Un flusso di firma nativo sul telefono è esattamente della misura giusta per il compito: apri il PDF, disegna o scrivi la tua firma, posizionala, invia. L’intera sequenza richiede meno di un minuto e funziona senza account, in aereo o in un parcheggio.",
    ],
  },
  features: {
    heading: "Firma nel modo più adatto al documento",
    items: [
      {
        icon: "Pencil",
        title: "Firma autografa",
        body: "Disegna con il dito o con una penna digitale. Salvala una volta e riutilizzala su ogni documento futuro.",
      },
      {
        icon: "Type",
        title: "Firma scritta",
        body: "Scrivi il tuo nome e scegli un carattere in stile corsivo per firme pulite e leggibili.",
      },
      {
        icon: "User",
        title: "Timbro con le iniziali",
        body: "Salva le tue iniziali separatamente per i documenti che le richiedono su ogni pagina.",
      },
      {
        icon: "Calendar",
        title: "Timbro con la data",
        body: "Inserisci la data con un tocco accanto alla tua firma, quando il contratto lo richiede.",
      },
      {
        icon: "Users",
        title: "Flusso con più firmatari",
        body: "Passa un PDF da un firmatario all’altro tramite il menu di condivisione. Ogni firma resta al suo posto.",
      },
      {
        icon: "ShieldCheck",
        title: "Esporta con informazioni di verifica",
        body: "La copia firmata include una marca temporale e i metadati della firma, utili per la conservazione dei registri.",
      },
    ],
  },
  steps: {
    heading: "Come firmare un PDF dal telefono",
    items: [
      {
        title: "Apri il PDF",
        body: "Importa il documento nell’app PDF Editor da File, dalla posta o da qualsiasi app di condivisione.",
      },
      {
        title: "Tocca lo strumento Firma",
        body: "Si trova nella barra degli strumenti di modifica. Scegli tra autografa, scritta o iniziali.",
      },
      {
        title: "Disegna o scrivi la tua firma",
        body: "Solo la prima volta: la firma viene salvata per gli usi futuri. Puoi modificarla o sostituirla in qualsiasi momento dalle Impostazioni.",
      },
      {
        title: "Posiziona e ridimensiona",
        body: "Trascina la firma nel punto giusto. Ridimensionala con le maniglie agli angoli. Aggiungi un timbro con la data, se serve.",
      },
      {
        title: "Esporta la copia firmata",
        body: "Salva sopra l’originale o come nuova copia. Condividi direttamente via Mail o qualsiasi app di messaggistica.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Firmare senza interrompere la giornata",
    body: "Raramente è la firma il collo di bottiglia: è il tempo che serve per trovare una stampante. Firmare dal telefono significa che i contratti tornano dall’altra parte entro un’ora, non entro la giornata. Particolarmente utile per liberi professionisti, piccoli imprenditori e chiunque lavori lontano da una scrivania.",
  },
  faq: [
    {
      q: "Una firma elettronica ha valore legale?",
      a: "Nella maggior parte delle giurisdizioni sì, per la maggior parte dei documenti aziendali. Il regolamento eIDAS dell’UE e l’ESIGN Act statunitense riconoscono entrambi le firme elettroniche. Per documenti di grande valore o particolarmente delicati dal punto di vista legale, verifica le norme locali e valuta l’uso di firme elettroniche qualificate.",
    },
    {
      q: "La mia firma verrà salvata su un server?",
      a: "No. Le firme salvate restano sul tuo dispositivo. Vengono applicate ai documenti localmente e non vengono mai caricate sulla nostra infrastruttura.",
    },
    {
      q: "Più persone possono firmare lo stesso PDF?",
      a: "Sì. Passa il file tra i firmatari tramite il menu di condivisione, AirDrop, email o qualsiasi app di messaggistica. Ogni firma viene aggiunta e salvata al suo posto.",
    },
    {
      q: "E se il PDF ha già dei campi firma?",
      a: "L’app rileva i campi firma esistenti e ti permette di toccarli direttamente. La tua firma si adatta automaticamente alla dimensione e alla posizione corrette.",
    },
    {
      q: "Posso usarla con Apple Pencil o S Pen?",
      a: "Sì. Entrambi offrono tratti più fluidi rispetto alla firma col dito, il che fa una differenza reale sui contratti che passano attraverso una revisione visiva.",
    },
  ],
  related: [
    {
      label: "Guida passo passo: come firmare un PDF dal telefono",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Proteggi i PDF firmati con una password", path: "/pdf-security" },
    { label: "Metodi per liberi professionisti", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Firma i PDF da qualsiasi posto.",
    sub: "Gratis su iOS e Android. Non serve un account.",
  },
};

export default content;
