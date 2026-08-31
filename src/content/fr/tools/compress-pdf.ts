import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Compresser un PDF",
    h1: "Allégez vos PDF — directement dans le navigateur.",
    highlight: "directement dans le navigateur",
    lead: "Réduisez le poids d'un PDF pour respecter les limites d'e-mail et de dépôt. Choisissez le niveau de compression, voyez exactement ce que vous avez gagné, et téléchargez — le fichier ne quitte jamais votre appareil.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n'est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment compresser un PDF",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un PDF ou cliquez pour choisir un fichier sur votre appareil.",
      },
      {
        title: "Choisissez le niveau",
        body: "Léger préserve plus de détail ; Recommandé équilibre poids et qualité ; Fort produit le fichier le plus petit.",
      },
      {
        title: "Compressez",
        body: "Cliquez sur Compresser le PDF. Les pages sont redessinées et réencodées localement, dans votre navigateur.",
      },
      {
        title: "Téléchargez",
        body: "Comparez le poids avant et après, avec le pourcentage de réduction, et téléchargez le fichier allégé.",
      },
    ],
  },
  useCases: {
    heading: "Quand la compression aide le plus",
    items: [
      {
        title: "Limite de pièce jointe",
        body: "Faites passer un contrat numérisé ou un catalogue sous la limite de 10 ou 25 Mo d'une pièce jointe.",
      },
      {
        title: "Formulaires et portails de dépôt",
        body: "Les systèmes des administrations et des services RH refusent souvent les fichiers de quelques mégaoctets à peine — voilà la solution.",
      },
      {
        title: "Documents numérisés",
        body: "Les numérisations faites au téléphone sont énormes. Les PDF pleins d'images fondent avec la compression forte.",
      },
      {
        title: "Stockage et partage",
        body: "Gardez vos archives légères et faites télécharger les liens plus vite chez ceux qui les reçoivent.",
      },
    ],
  },
  limitations: {
    heading: "Limites assumées",
    items: [
      {
        title: "Le texte devient une image",
        body: "La compression transforme chaque page en image, le texte n'est donc plus sélectionnable ni consultable dans le résultat. Gardez l'original si vous en avez besoin.",
      },
      {
        title: "Les PDF tout texte se réduisent peu",
        body: "Si le PDF est déjà presque entièrement du texte ou du vectoriel, il y a peu à gagner — dans ce cas, nous vous rendons votre fichier d'origine plutôt qu'un fichier plus lourd.",
      },
      {
        title: "PDF très volumineux ou verrouillés",
        body: "Le navigateur manque de mémoire bien avant une application native. Un PDF protégé par mot de passe ne peut pas être traité dans le navigateur — utilisez l'application PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Fusionner des PDF", path: "/merge-pdf" },
    { label: "Diviser un PDF", path: "/split-pdf" },
    { label: "Extraire des pages d'un PDF", path: "/extract-pdf-pages" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    { label: "Guide : comment compresser un PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Mon fichier est-il envoyé sur un serveur ?",
      a: "Non. La compression fonctionne entièrement dans votre navigateur, avec le processeur de votre appareil. Le fichier ne quitte jamais votre appareil.",
    },
    {
      q: "De combien mon PDF va-t-il rétrécir ?",
      a: "Cela dépend du contenu. Un PDF numérisé ou plein d'images perd en général 50 à 90 % de son poids. Un PDF tout texte peut ne pas rétrécir du tout — dans ce cas, nous vous rendons l'original.",
    },
    {
      q: "La qualité baisse-t-elle ?",
      a: "Un peu, oui — c'est une compression avec perte. Les niveaux les plus légers préservent davantage de détail. Nous ne promettons jamais « sans perte de qualité » ; choisissez le niveau qui vous convient.",
    },
    {
      q: "Pourquoi le texte n'est-il plus sélectionnable après compression ?",
      a: "Pour obtenir un vrai gain de poids dans le navigateur, chaque page est transformée en image. Si vous avez besoin du texte sélectionnable, gardez l'original ou choisissez un niveau plus léger.",
    },
    {
      q: "Peut-on compresser un PDF protégé par mot de passe ?",
      a: "Pas dans le navigateur. Retirez le mot de passe avant, ou utilisez l'application PDF Editor, qui prend en charge les fichiers protégés.",
    },
  ],
  appCta: {
    heading: "Besoin d'outils PDF dans l'urgence ?",
    sub: "PDF Editor pour iPhone et Android compresse, signe et partage vos PDF directement depuis votre téléphone.",
  },
};

export default content;
