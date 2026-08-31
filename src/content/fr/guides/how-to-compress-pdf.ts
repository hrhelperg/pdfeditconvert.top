import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Comment compresser un PDF sans perdre en qualité",
  description:
    "Réduisez la taille d’un PDF pour l’envoyer par e-mail ou le déposer sur un portail, sans sacrifier la lisibilité. Tutoriel pensé pour le mobile avec l’application PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Chaque service de messagerie impose encore une limite de taille pour les pièces jointes. Gmail plafonne à 25 Mo. Outlook bute autour de 20 Mo. Slack et la plupart des applications de messagerie refusent au-delà de 25 Mo également. Les PDF du quotidien — devis avec photos, contrats numérisés, rapports avec graphiques — dépassent facilement ces limites.",
    "Il existe deux façons de réduire un PDF. La mauvaise consiste à réimprimer en PDF avec un réglage de qualité plus bas, ce qui dégrade définitivement le texte et les signatures. La bonne consiste à recompresser les images et à réencoder les polices à l’intérieur du fichier, ce qui garde le texte net tout en réduisant la taille du fichier de 60 à 90 %.",
    "Ce guide détaille la bonne méthode avec l’application PDF Editor sur iPhone ou Android. Les étapes sont identiques sur les deux plateformes. Vous obtiendrez un fichier assez léger pour être envoyé, tout en restant visuellement identique à l’original, quel que soit le niveau de zoom.",
  ],
  steps: [
    {
      title: "Ouvrez l’application PDF Editor",
      body: "Lancez l’application depuis l’écran d’accueil. Touchez la tuile Compresser sur l’écran d’accueil.",
    },
    {
      title: "Importez le PDF",
      body: "Touchez Ajouter un fichier. Choisissez depuis Fichiers / iCloud (iPhone) ou via le sélecteur de fichiers (Android). Vous pouvez aussi partager un PDF depuis n’importe quelle application vers PDF Editor.",
    },
    {
      title: "Choisissez un niveau de qualité prédéfini",
      body: "Trois niveaux couvrent presque tous les cas. Équilibré convient à la plupart des fichiers. Choisissez Petit pour les fichiers destinés à un e-mail ou à un dépôt en ligne. Choisissez Élevé quand le résultat doit être prêt pour l’impression.",
    },
    {
      title: "Prévisualisez le résultat compressé",
      body: "Touchez Aperçu. L’application affiche la taille du fichier original et compressé côte à côte, ainsi que des miniatures des premières pages. Zoomez pour vérifier la netteté du texte.",
    },
    {
      title: "Comparez avec l’original",
      body: "Basculez entre les pages originales et compressées. Si quelque chose paraît dégradé (rare avec Équilibré), essayez un autre niveau.",
    },
    {
      title: "Enregistrez ou partagez",
      body: "Enregistrez le fichier compressé sous un nouveau nom (pour garder l’original intact) ou partagez-le directement par e-mail, Drive ou toute application de messagerie.",
    },
  ],
  tips: [
    "Si un fichier est dominé par des pages numérisées, le niveau Petit peut produire des réductions de plus de 90 % sans perte de qualité visible.",
    "Pour les PDF majoritairement composés de texte, les gains de compression sont plus faibles (10 à 30 %) — le fichier est déjà efficace.",
    "Diviser un gros PDF avant de le compresser accélère l’opération sur les téléphones anciens et donne plus de souplesse pour l’envoi.",
    "Gardez toujours l’original jusqu’à avoir confirmé que le fichier compressé est correct — une fois compressée, la qualité d’origine a disparu.",
    "Les PDF compressés conservent le texte consultable et les signatures. La compression cible les images et les tables de polices, pas la couche de contenu.",
  ],
  mobileNote:
    "La compression s’effectue entièrement sur l’appareil. Vous pouvez compresser un contrat sensible dans un avion, en mode avion, sans qu’un seul octet ne quitte votre téléphone.",
  faq: [
    {
      q: "De combien mon PDF va-t-il rétrécir ?",
      a: "Les PDF riches en images ou numérisés rétrécissent en général de 60 à 90 %. Les PDF surtout composés de texte rétrécissent moins, souvent de 10 à 30 %. L’application affiche la taille exacte avant et après.",
    },
    {
      q: "Les images vont-elles devenir floues ?",
      a: "Les niveaux Équilibré et Élevé gardent les images nettes à un zoom d’affichage normal. Le niveau Petit applique une compression d’image plus forte — parfait pour l’e-mail, mais un léger adoucissement se remarque en zoomant beaucoup.",
    },
    {
      q: "Puis-je compresser un PDF protégé par mot de passe ?",
      a: "Oui, une fois le mot de passe saisi. L’application gère le déchiffrement, compresse le contenu, et peut réappliquer la protection à l’enregistrement.",
    },
    {
      q: "Quelle est la différence entre compresser et mettre dans une archive ZIP ?",
      a: "Une archive ZIP enveloppe le PDF dans un autre conteneur mais le réduit rarement — les PDF utilisent déjà une compression interne. Une vraie compression de PDF réécrit les images et les polices internes du fichier, ce qui est la seule façon d’obtenir un vrai gain de place.",
    },
    {
      q: "Puis-je compresser plusieurs PDF à la fois ?",
      a: "Oui. Ajoutez plusieurs fichiers dans une même session ; l’application les traite l’un après l’autre en appliquant le même niveau à chacun.",
    },
  ],
  related: [
    { label: "Compresser un PDF — présentation complète", path: "/compress-pdf" },
    { label: "Convertisseur PDF", path: "/pdf-converter" },
    {
      label: "Comment fusionner des fichiers PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
