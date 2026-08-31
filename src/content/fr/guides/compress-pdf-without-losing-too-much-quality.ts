import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Compresser un PDF sans trop perdre en qualité",
  description:
    "Trouvez le bon équilibre entre poids et qualité. Comment les niveaux de compression échangent du détail contre des mégaoctets, et lequel choisir.",
  updated: "2026-05-23",
  intro: [
    "Il y a une tension honnête au cœur de la compression de PDF : des fichiers plus légers veulent dire moins de détail. Tout outil qui promet de gros gains sans aucune perte de qualité vous vend quelque chose. L’objectif réaliste n’est pas « aucune perte » — c’est « aucune perte que vous remarquerez pour cet usage ». Un document destiné à une lecture à l’écran peut perdre du détail qu’un travail d’impression ne peut pas se permettre de perdre.",
    "Ce guide traite de trouver ce point d’équilibre avec l’outil gratuit Compresser un PDF, qui fonctionne dans votre navigateur sans rien envoyer et affiche le gain de taille pour chaque niveau. Plutôt que de vous jeter par réflexe sur la compression maximale, vous apprendrez à choisir le niveau le plus léger qui reste satisfaisant.",
    "Bien régler cet équilibre donne des fichiers qui s’envoient et se déposent sans problème, tout en gardant l’apparence voulue au moment où quelqu’un les ouvre vraiment.",
  ],
  steps: [
    {
      title: "Définissez ce qui est « suffisant » pour ce document",
      body: "Décidez comment le fichier sera utilisé. Une lecture à l’écran tolère plus de compression que l’impression ; une pièce de portfolio a besoin de plus de détail qu’un reçu de note de frais. L’usage fixe votre seuil de qualité.",
    },
    {
      title: "Ouvrez l’outil Compresser un PDF",
      body: "Rendez-vous sur l’outil Compresser un PDF. Il traite le fichier sur votre appareil et indique le gain de taille, pour que vous puissiez juger directement le compromis.",
    },
    {
      title: "Commencez par le niveau le plus léger",
      body: "Essayez d’abord Faible ou Recommandé, pas Fort. Le réflexe de maximiser la compression dépasse en général le besoin — vous atteignez souvent votre objectif de taille avec du détail en réserve.",
    },
    {
      title: "Comparez qualité et taille",
      body: "Ouvrez le résultat et regardez les pages, en particulier les images et le texte fin. Notez la taille gagnée. Si la qualité convient et que vous êtes sous votre limite, c’est terminé.",
    },
    {
      title: "Montez d’un cran seulement si besoin",
      body: "Toujours trop lourd ? Passez à un niveau plus fort et revérifiez. Monter progressivement permet de trouver le réglage le plus léger qui atteint votre objectif de taille sans surdégrader.",
    },
    {
      title: "Gardez l’original",
      body: "Enregistrez la copie compressée sous un nouveau nom. La compression est à sens unique — le détail qu’elle retire a disparu — donc l’original intact est votre filet de sécurité.",
    },
  ],
  tips: [
    "Optez d’abord pour le niveau le plus léger et ne montez que si nécessaire. La plupart des gens sur-compressent et dégradent leurs fichiers plus que ce que l’objectif de taille exigeait.",
    "Adaptez la qualité à l’usage : les documents destinés uniquement à l’écran supportent une compression forte qui abîmerait quelque chose destiné à l’impression.",
    "La compression transforme les pages en images, donc le résultat perd le texte sélectionnable. Si un texte consultable compte plus qu’un fichier plus léger, c’est une raison de garder l’original ou de compresser moins.",
    "Les PDF riches en texte rétrécissent à peine, quel que soit le niveau, car il y a peu de données d’image — n’augmentez pas le niveau en espérant des gains qui n’existent pas.",
    "Compressez une seule fois. Compresser un fichier déjà compressé accumule les pertes sans gain de taille significatif.",
  ],
  mobileNote:
    "Juger le compromis taille contre qualité est simple sur téléphone avec l’application PDF Editor : compressez hors connexion, prévisualisez les pages, et ajustez le niveau à la hausse ou à la baisse avant de partager — sans rien envoyer, et les fichiers protégés sont aussi pris en charge.",
  faq: [
    {
      q: "Puis-je compresser un PDF sans aucune perte de qualité ?",
      a: "Pas vraiment — une compression utile entraîne des pertes. L’objectif réaliste est de n’avoir aucune perte que vous remarquerez pour l’usage du document. Les niveaux plus légers gardent plus de détail ; choisissez le plus léger qui reste satisfaisant.",
    },
    {
      q: "Quel niveau garde le plus de qualité ?",
      a: "Faible garde le plus de détail, puis Recommandé, avec Fort le plus léger et le plus rugueux. Commencez léger et ne montez que si vous dépassez encore votre objectif de taille.",
    },
    {
      q: "Pourquoi mes images paraissent-elles floues après compression ?",
      a: "La compression d’image élimine du détail fin pour gagner de la place, et les niveaux plus forts en éliminent davantage. Revenez à un niveau plus léger si l’adoucissement est visible pour votre usage.",
    },
    {
      q: "La compression supprime-t-elle le texte consultable ?",
      a: "Oui — les pages sont redessinées sous forme d’images, ce qui supprime la couche de texte sélectionnable. Si un texte consultable compte plus que la taille, gardez l’original ou compressez moins fortement.",
    },
    {
      q: "Devrais-je compresser un fichier plus d’une fois ?",
      a: "Non. Une seconde passe ajoute des pertes de qualité pour peu de gain supplémentaire. Compressez une fois au bon niveau et gardez l’original.",
    },
  ],
  related: [
    { label: "Compresser un PDF — contrôler le niveau", path: "/compress-pdf" },
    { label: "Meilleurs réglages de compression PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Comment compresser un PDF sans perdre en qualité", path: "/guides/how-to-compress-pdf" },
    { label: "Pourquoi mon PDF est-il si lourd ?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
