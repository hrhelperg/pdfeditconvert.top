import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "Come firmare un PDF su iPhone (guida 2026)",
  description:
    "Firma un PDF su iPhone con Markup o con l’app PDF Editor. I limiti della via nativa, e quando un’app dedicata firma meglio.",
  updated: "2026-05-23",
  intro: [
    "Firmare un PDF su iPhone è uno di quei compiti che iOS gestisce quasi da solo. Lo strumento Markup integrato può aggiungere una firma al volo, ed è perfettamente adeguato per una firma occasionale. Ma nel momento in cui firmi con regolarità — contratti, moduli, accordi che tornano settimana dopo settimana — i suoi limiti iniziano a farsi sentire, e uno strumento dedicato fa risparmiare tempo vero.",
    "Questa guida copre entrambe le strade. Prima l’approccio nativo con Markup usando l’app File, con uno sguardo onesto su dove non basta. Poi l’app PDF Editor, che salva una firma riutilizzabile, rileva i campi firma e tiene tutto sul dispositivo.",
    "La firma elettronica è accettata per i documenti aziendali ordinari nella maggior parte dei casi, quindi firmare sul tuo iPhone è raramente solo una comodità — spesso è già perfettamente sufficiente da sola.",
  ],
  steps: [
    {
      title: "Strada rapida: apri il PDF nell’app File",
      body: "Tocca il PDF nell’app File per aprirlo, poi tocca l’icona Markup (la punta della penna). È l’editor integrato di iOS — comodo per una firma occasionale senza installare nulla.",
    },
    {
      title: "Aggiungi una firma con Markup",
      body: "Tocca il pulsante più, scegli Firma, e disegnane una con il dito o salvane una nuova. Posizionala sulla pagina e ridimensionala. Sufficiente per un documento occasionale.",
    },
    {
      title: "Sappi dove Markup si ferma",
      body: "Markup non riesce a rilevare i campi firma di un modulo, gestisce male date e sigle, e ridisegnare o ritrovare la tua firma ogni volta diventa presto stancante. Se firmi spesso, passa a uno strumento dedicato.",
    },
    {
      title: "Strada migliore: aprilo nell’app PDF Editor",
      body: "Importa il PDF nell’app da File, Mail o qualsiasi menu di condivisione. Lo strumento Firma offre le opzioni firma a mano, firma digitata e sigla.",
    },
    {
      title: "Disegna la firma una volta, riusala per sempre",
      body: "Crea la tua firma la prima volta — con il dito o con l’Apple Pencil — e resta salvata sul tuo dispositivo per ogni documento futuro. Da quel momento firmare diventa aprire, toccare, posizionare, esportare.",
    },
    {
      title: "Posiziona, data ed esporta",
      body: "Colloca la firma dove serve, aggiungi la data o la sigla se il documento le richiede, ed esporta una copia firmata. Salvala come nuovo file, così l’originale senza firma resta intatto.",
    },
  ],
  tips: [
    "Usa l’Apple Pencil se ne hai una — il tratto è nettamente più pulito di quello del dito, un dettaglio che conta per i contratti destinati ai clienti.",
    "Markup è lo strumento giusto per una firma davvero una tantum. Se firmi più di una volta al mese, una firma salvata e riutilizzabile si ripaga in fretta.",
    "Conserva l’originale senza firma insieme alla copia firmata. Se una controparte vuole una versione pulita o devi firmare di nuovo dopo una correzione, l’avrai già pronta.",
    "Per un documento firmato particolarmente delicato, aggiungi una password prima di condividerlo — firmare e proteggere sono due passaggi distinti.",
    "Una firma elettronica va bene per i documenti aziendali ordinari, ma gli accordi di alto valore o regolamentati possono richiedere una firma qualificata più formale — verifica le regole che si applicano al tuo caso.",
  ],
  mobileNote:
    "Firmare su iPhone significa che un contratto torna indietro entro l’ora, spesso entro pochi minuti. L’app PDF Editor tiene la tua firma salvata sul dispositivo, rileva i campi firma esistenti e non invia mai il documento a un server — così anche gli accordi delicati restano privati mentre firmi in movimento.",
  faq: [
    {
      q: "Posso firmare un PDF su iPhone senza un’app?",
      a: "Sì — aprilo nell’app File e usa Markup per aggiungere una firma. È l’ideale per una firma occasionale. Per firmare con regolarità, uno strumento dedicato con una firma salvata e riutilizzabile è molto più rapido.",
    },
    {
      q: "Cosa non riesce a fare lo strumento Markup integrato?",
      a: "Non riesce a rilevare i campi firma di un modulo, gestisce male date e sigle, e ti costringe a riposizionare la firma ogni volta. Sono proprio questi limiti a spingere chi firma spesso verso un’app dedicata.",
    },
    {
      q: "Una firma elettronica sul mio iPhone è legalmente valida?",
      a: "Per i contratti aziendali ordinari, nella maggior parte dei casi sì. I documenti di alto valore o regolamentati possono richiedere una firma qualificata più formale — verifica le regole che si applicano al tuo caso.",
    },
    {
      q: "Il mio documento firmato viene caricato da qualche parte?",
      a: "Con l’app PDF Editor no — la tua firma salvata e il documento restano sul tuo dispositivo. Niente viene inviato a un server.",
    },
    {
      q: "Come firmo invece su Android?",
      a: "Il procedimento è simile, ma gli strumenti nativi cambiano. Guarda la guida dedicata alla firma di un PDF su Android.",
    },
  ],
  related: [
    { label: "Firma PDF — firma elettronica dal telefono", path: "/sign-pdf" },
    { label: "Come firmare un PDF su Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Come firmare un PDF dal telefono", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Come modificare un PDF su iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Firma PDF", path: "/sign-pdf" },
};

export default content;
