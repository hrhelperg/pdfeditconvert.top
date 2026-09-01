import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Come condividere un PDF dal telefono",
  description:
    "Condividi un PDF da iPhone o Android nel modo giusto — mail, AirDrop, messaggi o link — e scopri come prepararlo perché arrivi davvero.",
  updated: "2026-05-23",
  intro: [
    "Condividere un PDF dal telefono è un’azione da un tocco solo, finché non lo è più — il file è troppo pesante per la mail, chi lo riceve non riesce ad aprire il link, oppure ti accorgi troppo tardi di aver inviato la versione con una pagina che non doveva uscire. Fare le cose per bene dipende meno dal pulsante di condivisione e più dalla scelta del canale giusto e dalla preparazione del file prima di toccarlo.",
    "Questa guida copre i modi principali per condividere da un iPhone o da un telefono Android — mail, AirDrop o Nearby Share, app di messaggistica e link cloud — e quando ciascuno è la scelta giusta. Copre anche la rapida preparazione che evita che una condivisione rimbalzi o ti metta in imbarazzo.",
    "Il punto di un telefono è proprio poter inviare le cose da dovunque ti trovi. Un po’ di attenzione trasforma quel tocco pieno di speranza in un documento che arriva puntualmente, della dimensione giusta, senza nulla di superfluo allegato.",
  ],
  steps: [
    {
      title: "Prepara il file prima di condividerlo",
      body: "Conferma che sia la versione giusta, elimina le pagine che non devono uscire, e controlla che la dimensione sia ragionevole. Trenta secondi qui evitano la maggior parte degli imprevisti di condivisione.",
    },
    {
      title: "Apri il menu di condivisione",
      body: "Tocca Condividi sul PDF — da File, dalla tua app di mail o dall’app PDF Editor. Sia iOS sia Android mostrano da qui tutte le destinazioni utili.",
    },
    {
      title: "Mail per i documenti formali",
      body: "Allegalo a una mail quando serve una traccia scritta da conservare — contratti, fatture, candidature. Attento al limite di circa 25 MB; comprimi prima se il file è pesante.",
    },
    {
      title: "AirDrop o Nearby Share per chi è vicino",
      body: "Devi inviarlo a un dispositivo nella stessa stanza? AirDrop (iPhone) o Nearby Share (Android) spostano il file direttamente, in modo rapido, senza limiti di dimensione e senza bisogno di internet.",
    },
    {
      title: "App di messaggistica per condivisioni rapide e informali",
      body: "WhatsApp, Messaggi e simili vanno bene per gli invii occasionali, ma alcune app ricomprimono o limitano i file. Per qualsiasi cosa debba arrivare intatta, preferisci la mail o un link.",
    },
    {
      title: "Un link cloud per file pesanti o molti destinatari",
      body: "Per un file grande o un pubblico ampio, condividi un link da uno spazio cloud che controlli tu. Aggira i limiti di dimensione e ti permette di revocare l’accesso in seguito.",
    },
  ],
  tips: [
    "Comprimi prima di condividere se il file è pieno di scansioni — una mail respinta è un esito peggiore di un file leggermente più piccolo.",
    "Controlla le pagine prima di toccare condividi. Il rimpianto più comune è inviare una versione con una nota interna o una pagina destinata a qualcun altro.",
    "AirDrop e Nearby Share sono gli eroi silenziosi della condivisione di persona: istantanei, senza limiti di dimensione, senza internet, senza inviare nulla a un server.",
    "Le app di messaggistica possono ricomprimere i documenti in silenzio. Per i file in cui contano qualità o fedeltà, usa piuttosto la mail o un link cloud.",
    "Per i documenti sensibili condivisi tramite link, usa un servizio di cui ti fidi e disattiva l’accesso non appena chi riceve ha il file.",
  ],
  mobileNote:
    "L’app PDF Editor condivide direttamente dal menu di condivisione dopo che hai preparato il file — comprimi, elimina una pagina, firma — così il documento che esce dal tuo telefono è quello che intendevi inviare, in una dimensione che arriva a destinazione. Tutto ciò che avviene prima della condivisione resta sul dispositivo.",
  faq: [
    {
      q: "Qual è il modo migliore per condividere un PDF dal telefono?",
      a: "Dipende da chi riceve: mail per i documenti formali, AirDrop o Nearby Share per chi è vicino, app di messaggistica per invii rapidi e informali, e un link cloud per i file grandi o per molti destinatari.",
    },
    {
      q: "Perché il mio PDF non parte via mail?",
      a: "Probabilmente supera il limite di circa 25 MB per gli allegati, di solito perché è pieno di scansioni. Comprimilo prima, oppure condividi un link cloud.",
    },
    {
      q: "Le app di messaggistica modificano il mio PDF?",
      a: "Alcune ricomprimono o limitano gli allegati, il che può intaccare la qualità. Per i documenti che devono arrivare esattamente come inviati, usa la mail o un link cloud invece di un’app di chat.",
    },
    {
      q: "AirDrop o Nearby Share sono privati?",
      a: "Sì — il file si trasferisce direttamente tra i dispositivi senza passare da un server o da internet, il che li rende una buona scelta per i documenti sensibili condivisi di persona.",
    },
    {
      q: "Come evito di condividere le pagine sbagliate?",
      a: "Rivedi il documento prima di toccare condividi, ed elimina le pagine che non devono uscire. Guarda la guida su come preparare un PDF prima di condividerlo per una checklist completa.",
    },
  ],
  related: [
    { label: "Editor PDF — prepara e condividi dal telefono", path: "/pdf-editor" },
    { label: "Come preparare un PDF prima di condividerlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Come inviare un PDF pesante", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Come ridurre la dimensione di un PDF su Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
