import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Comment compresser un PDF numérisé (des gains spectaculaires)",
  description:
    "Les PDF numérisés sont les plus faciles à alléger et les plus encombrants. Comment les réduire fortement, et ce qu’il advient du texte consultable.",
  updated: "2026-05-23",
  intro: [
    "Les PDF numérisés sont les poids lourds du monde documentaire. Chaque page est une image en pleine résolution, donc un court contrat numérisé peut peser plus lourd qu’un rapport texte de cent pages. Le revers, c’est la bonne nouvelle : comme les numérisations sont presque entièrement des données d’image, elles se compressent bien plus fortement que tout autre type de PDF — souvent de 70 % ou plus.",
    "Ce guide se concentre spécifiquement sur la compression des numérisations avec l’outil gratuit Compresser un PDF, qui fonctionne dans votre navigateur sans rien envoyer. Les numérisations sont exactement le cas où la compression dans le navigateur excelle, et où les gains de taille valent le plus la peine.",
    "Nous verrons aussi le seul point à surveiller avec les documents numérisés — le texte consultable — pour que vous ne perdiez pas par inadvertance une couche de texte que vous aviez pris la peine de créer.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Compresser un PDF",
      body: "Rendez-vous sur l’outil Compresser un PDF dans votre navigateur. Il traite le fichier sur votre appareil, donc même un contrat numérisé reste confidentiel.",
    },
    {
      title: "Ajoutez votre PDF numérisé",
      body: "Glissez la numérisation sur la zone de dépôt ou cliquez pour la choisir. L’outil la lit localement — rien n’est envoyé.",
    },
    {
      title: "Choisissez un niveau — vous pouvez aller fort ici",
      body: "Les numérisations tolèrent bien une compression forte parce que ce sont des images, pas du texte vectoriel net. Recommandé suffit souvent ; Fort peut encore rester parfaitement lisible pour des documents courants.",
    },
    {
      title: "Compressez et vérifiez la lisibilité",
      body: "Lancez l’opération et ouvrez le résultat. Le test clé pour une numérisation, c’est la lisibilité — pouvez-vous lire le texte confortablement ? Si oui à un niveau fort, prenez le gain le plus important.",
    },
    {
      title: "Faites attention à la couche de texte consultable",
      body: "Si votre numérisation a été traitée par OCR pour être consultable, la compresser dans le navigateur redessine les pages sous forme d’images et supprime cette couche. Gardez l’original consultable si vous en avez besoin.",
    },
    {
      title: "Enregistrez la copie allégée",
      body: "Enregistrez sous un nouveau nom. Les fichiers numérisés passent régulièrement bien sous les limites d’e-mail et de dépôt en une seule passe.",
    },
  ],
  tips: [
    "Les numérisations se compressent mieux que tout autre PDF — si un document est énorme parce qu’il est numérisé, vous êtes bien placé côté taille.",
    "Comme les numérisations sont des images, vous pouvez en général pousser à un niveau plus fort que vous n’oseriez avec un document conçu, tout en le gardant lisible.",
    "Si votre numérisation avait une couche de texte consultable issue de l’OCR, la compression dans le navigateur la supprime. Relancez la reconnaissance de texte ensuite, ou gardez l’original consultable à part.",
    "Numériser à une résolution plus basse (200-300 DPI) à la source produit dès le départ des fichiers plus légers, réduisant l’effort de compression nécessaire ensuite.",
    "Les numérisations en couleur sont plus volumineuses qu’en niveaux de gris. Si la couleur n’apporte rien au document, numériser en niveaux de gris l’allège avant même que la compression ne commence.",
  ],
  mobileNote:
    "Les numérisations commencent en général sur un téléphone, et l’application PDF Editor garde toute la boucle sur l’appareil : numériser à une qualité raisonnable, compresser hors connexion, et — contrairement aux outils de navigateur — lancer la reconnaissance de texte pour que le fichier allégé reste consultable. Aucun envoi à aucune étape.",
  faq: [
    {
      q: "De combien un PDF numérisé peut-il rétrécir ?",
      a: "Souvent de 70 % ou plus. Les numérisations sont presque entièrement des données d’image, ce qui est exactement ce que cible la compression, donc elles rétrécissent bien plus que les PDF à base de texte.",
    },
    {
      q: "La numérisation restera-t-elle lisible après une compression forte ?",
      a: "En général oui pour des documents courants — les numérisations tolèrent une compression forte parce que ce sont des images plutôt que du texte vectoriel net. Ouvrez toujours le résultat et vérifiez la lisibilité.",
    },
    {
      q: "La compression supprime-t-elle le texte consultable d’une numérisation ?",
      a: "Si la numérisation a été traitée par OCR pour être consultable, la compression dans le navigateur redessine les pages sous forme d’images et supprime cette couche. Gardez l’original consultable, ou relancez la reconnaissance de texte ensuite.",
    },
    {
      q: "Mon document numérisé est-il envoyé quelque part ?",
      a: "Non. L’outil Compresser un PDF fonctionne dans votre navigateur, sur votre appareil, donc les numérisations sensibles comme des contrats et des relevés restent confidentielles.",
    },
    {
      q: "Puis-je compresser une numérisation protégée par mot de passe ?",
      a: "Pas dans le navigateur. Retirez d’abord le mot de passe, ou utilisez l’application mobile PDF Editor, qui compresse les fichiers protégés hors connexion.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire des numérisations dans votre navigateur", path: "/compress-pdf" },
    { label: "Comment convertir des documents numérisés en PDF", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "Pourquoi mon PDF est-il si lourd ?", path: "/guides/why-is-my-pdf-so-large" },
    { label: "Comment numériser un document en PDF avec son téléphone", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
