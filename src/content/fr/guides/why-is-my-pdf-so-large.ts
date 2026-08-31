import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Pourquoi mon PDF est-il si lourd ? Causes et solutions",
  description:
    "Les vraies raisons du poids d’un PDF — numérisations, photos intégrées, polices et le reste — et la bonne correction pour chacune, avec des outils gratuits.",
  updated: "2026-05-23",
  intro: [
    "Un document de dix pages n’a aucune raison de peser 60 Mo, et pourtant les PDF gonflent tout le temps. Avant de vous jeter sur un compresseur, mieux vaut comprendre pourquoi le fichier est devenu si lourd — parce que la bonne correction dépend de la cause, et la mauvaise correction peut écraser un document qui n’avait pas besoin de l’être.",
    "Ce guide est un diagnostic court. Il passe en revue les coupables habituels d’un PDF trop lourd, comment repérer lequel vous concerne, et la réponse la plus efficace pour chacun. La plupart des corrections utilisent les outils gratuits dans le navigateur de ce site, qui fonctionnent tous sur votre appareil sans rien envoyer.",
    "À la fin, vous saurez si votre fichier a besoin de compression, de suppression de pages, ou simplement d’une réexportation depuis la source — et vous arrêterez de sur-compresser des documents par habitude.",
  ],
  steps: [
    {
      title: "Soupçonnez d’abord les pages numérisées",
      body: "Les numérisations sont la cause numéro un. Chaque page numérisée est une image en pleine résolution, donc quelques-unes suffisent à écraser un document texte. Si votre PDF vient d’un scanner ou d’un appareil photo de téléphone, c’est presque certainement la raison.",
    },
    {
      title: "Vérifiez les photos et graphiques intégrés",
      body: "Des photos en haute résolution, des captures d’écran et des graphiques placés dans un document portent toutes leurs données de pixels. Un rapport avec une dizaine de grandes images peut être énorme même si le texte est court.",
    },
    {
      title: "Considérez les polices intégrées et les éléments de design",
      body: "Les documents qui intègrent plusieurs familles de polices complètes, ou qui ont été exportés depuis un logiciel de design lourd, portent un poids supplémentaire en polices et en éléments vectoriels dont le contenu n’a visiblement pas besoin.",
    },
    {
      title: "Cherchez du contenu résiduel ou caché",
      body: "Des pages en double issues d’une fusion bâclée, des pages blanches insérées par un scanner, ou un historique de révisions peuvent alourdir un fichier. Retirer les pages inutiles est parfois le gain de taille le plus simple.",
    },
    {
      title: "Appliquez la correction adaptée",
      body: "Pour les numérisations et les photos, compressez avec l’outil Compresser un PDF. Pour le superflu, retirez des pages avec l’outil Extraire des pages PDF. Pour un document texte étrangement énorme, réexportez-le depuis l’application source.",
    },
    {
      title: "Revérifiez la taille",
      body: "Confirmez que le fichier a atteint la taille voulue. S’il reste lourd après avoir compressé un fichier riche en numérisations, un niveau plus fort ou une division du document est l’étape suivante.",
    },
  ],
  tips: [
    "Adaptez la correction à la cause : la compression aide les fichiers riches en images ; elle ne fait presque rien pour un PDF uniquement textuel qui est lourd pour une autre raison.",
    "Un document uniquement textuel étonnamment lourd contient souvent des polices intégrées ou des objets cachés — le réexporter depuis l’application source le réduit souvent plus proprement que la compression.",
    "Numériser à 600 DPI quand 200 à 300 suffiraient est une cause courante et évitable de fichiers énormes. Réduisez la résolution de numérisation à la source pour les documents que vous partagerez.",
    "Retirer les pages inutiles peut réduire la taille sans toucher du tout à la qualité — à vérifier avant de compresser.",
    "Ne compressez pas par réflexe. Si un fichier a déjà une taille raisonnable, le compresser ne fait que le dégrader sans réel gain.",
  ],
  mobileNote:
    "Les numérisations sur téléphone sont le coupable classique — des images en haute résolution enregistrées en PDF. L’application PDF Editor permet de numériser à une résolution raisonnable dès le départ et de compresser hors connexion, pour que les documents ne gonflent pas d’entrée de jeu et se réduisent facilement quand c’est le cas.",
  faq: [
    {
      q: "Qu’est-ce qui alourdit le plus souvent un PDF ?",
      a: "Les pages numérisées et les photos intégrées. Chacune est une image en pleine résolution, donc une poignée d’entre elles pèse largement plus qu’un long document texte.",
    },
    {
      q: "Pourquoi mon PDF uniquement textuel est-il encore lourd ?",
      a: "Probablement des polices intégrées, des objets cachés, ou du contenu resté d’anciennes modifications et fusions. Réexporter depuis l’application source, ou retirer les pages inutiles, aide souvent plus que la compression.",
    },
    {
      q: "La compression réduira-t-elle toujours mon fichier ?",
      a: "Non. La compression cible les données d’image, donc les PDF riches en numérisations ou en photos rétrécissent beaucoup tandis que les fichiers uniquement textuels ou vectoriels changent à peine. Si un fichier texte est énorme, la cause est ailleurs.",
    },
    {
      q: "Retirer des pages réduit-il la taille ?",
      a: "Oui, surtout si les pages retirées sont des numérisations ou des images. Éliminer le superflu avec l’outil Extraire des pages PDF peut réduire la taille sans affecter la qualité de ce qui reste.",
    },
    {
      q: "Comment éviter que mes numérisations soient si lourdes ?",
      a: "Numérisez à 200-300 DPI plutôt qu’à 600 pour les documents que vous partagerez, et les fichiers partent bien plus légers. L’application PDF Editor permet de contrôler la qualité de numérisation dès le départ.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire les fichiers riches en images", path: "/compress-pdf" },
    { label: "Extraire des pages PDF — retirer le superflu", path: "/extract-pdf-pages" },
    { label: "Comment compresser un PDF numérisé", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Meilleurs réglages de compression PDF", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
