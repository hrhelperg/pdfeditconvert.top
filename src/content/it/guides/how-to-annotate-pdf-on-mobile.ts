import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "Come annotare un PDF dal telefono",
  description:
    "Evidenzia, commenta e disegna sui tuoi PDF da telefono o tablet. Gli strumenti di annotazione che contano davvero, e come mantenere leggibili le tue note.",
  updated: "2026-05-23",
  intro: [
    "Annotare un PDF è il modo in cui trasformi un documento da qualcosa che leggi in qualcosa a cui rispondi — evidenziando la clausola che conta, lasciando un commento per un collega, cerchiando il dato sbagliato. Su telefono o tablet, con un dito o una penna, spesso è più naturale che alla scrivania, perché segni la pagina proprio come faresti sulla carta.",
    "Questa guida copre gli strumenti di annotazione utili da conoscere su mobile usando l’app PDF Editor: evidenziazioni, commenti, disegno a mano libera e forme. Funziona su iPhone e Android, lavora offline e tiene il documento sul tuo dispositivo.",
    "L’obiettivo non è coprire la pagina di inchiostro — è lasciare annotazioni che chi la leggerà dopo (spesso tu stesso, più avanti) possa davvero capire e usare.",
  ],
  steps: [
    {
      title: "Apri il PDF nell’app PDF Editor",
      body: "Importa il documento da File, Mail, Drive o qualsiasi menu di condivisione. Gli strumenti di annotazione si trovano nella barra degli strumenti di modifica.",
    },
    {
      title: "Evidenzia i passaggi chiave",
      body: "Seleziona l’evidenziatore, scegli un colore e trascina sul testo che vuoi segnare. Usa i colori con criterio — un colore per ogni tipo di nota si legge molto meglio di un arcobaleno.",
    },
    {
      title: "Aggiungi commenti per dare contesto",
      body: "Inserisci un commento adesivo dove un’evidenziazione ha bisogno di una spiegazione. I commenti tengono il tuo ragionamento ancorato al punto giusto senza affollare la pagina.",
    },
    {
      title: "Disegna e cerchia a mano libera",
      body: "Usa lo strumento penna per cerchiare un dato, sottolineare una riga o abbozzare una correzione. Una penna digitale dà un tratto più pulito del dito, se ne hai una.",
    },
    {
      title: "Aggiungi forme o frecce dove servono",
      body: "Una freccia che punta al problema o un riquadro intorno a una sezione comunica più in fretta delle parole. Usale con parsimonia, così risaltano davvero.",
    },
    {
      title: "Salva e condividi la copia annotata",
      body: "Esporta una copia con le tue annotazioni e rimandala indietro. Conserva l’originale pulito se in seguito ti servirà una versione senza segni.",
    },
  ],
  tips: [
    "Assegna un significato ai colori — ad esempio giallo per le domande, verde per le approvazioni — e le tue annotazioni diventano scorribili invece che puramente decorative.",
    "Una penna digitale (Apple Pencil o S Pen) trasforma l’annotazione a mano libera. Se ne hai una, il rifiuto del palmo e la sensibilità alla pressione la fanno sembrare carta vera.",
    "I commenti battono lo stipare note nel margine. Si espandono al tocco e mantengono la pagina leggibile.",
    "Non esagerare con le annotazioni. Una pagina sommersa di inchiostro è inutile quanto una senza alcun segno — evidenzia ciò che conta, non tutto.",
    "Conserva un originale senza segni. Le annotazioni sono ottime per la revisione, ma chi la farà dopo di te potrebbe volere una copia pulita da annotare a sua volta.",
  ],
  mobileNote:
    "L’annotazione è dove telefono e tablet battono davvero la scrivania: segni la pagina direttamente, come faresti sulla carta. L’app PDF Editor supporta evidenziazioni, commenti, disegno e forme con il supporto per la penna digitale, tutto offline e sul dispositivo — le tue annotazioni non lasciano mai le tue mani.",
  faq: [
    {
      q: "Con cosa posso annotare un PDF su mobile?",
      a: "Evidenziazioni, commenti adesivi, tratti a mano libera con la penna, e forme come frecce e riquadri. L’app PDF Editor offre tutto questo su iPhone e Android.",
    },
    {
      q: "Mi serve una penna digitale?",
      a: "No, il dito va bene per evidenziare e per i segni di base. Ma una penna digitale rende il disegno a mano libera molto più pulito, con rifiuto del palmo e sensibilità alla pressione sui tablet compatibili.",
    },
    {
      q: "Le mie annotazioni restano se invio il file?",
      a: "Sì. Le annotazioni esportate fanno parte del PDF e compaiono a chiunque lo apra. Conserva un originale pulito a parte se ti servirà una copia senza segni.",
    },
    {
      q: "Le mie annotazioni vengono caricate da qualche parte?",
      a: "No. L’app PDF Editor annota sul tuo dispositivo, quindi le tue note e il documento restano privati.",
    },
    {
      q: "Posso rimuovere le annotazioni in seguito?",
      a: "Sì, nell’app puoi modificare o eliminare le tue annotazioni prima di esportare. Conservare l’originale ti permette anche di ripartire da zero.",
    },
  ],
  related: [
    { label: "Editor PDF — annota dal telefono", path: "/pdf-editor" },
    { label: "Come compilare un modulo PDF dal telefono", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Come modificare un PDF su iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "I migliori strumenti PDF gratuiti per studenti", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
