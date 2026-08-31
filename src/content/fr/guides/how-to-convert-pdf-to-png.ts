import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Comment convertir un PDF en PNG — des pages nettes et sans perte",
  description:
    "Exportez les pages d’un PDF en images PNG de haute qualité dans votre navigateur. Pourquoi le PNG garde textes et schémas nets, avec les points sur l’échelle et la transparence.",
  updated: "2026-05-23",
  intro: [
    "Quand vous avez besoin d’une page de PDF sous forme d’image et que cette page est pleine de texte, d’un tableau ou d’un schéma, le PNG est le format à privilégier. Il est sans perte, donc le texte reste net au lieu d’avoir des bords flous — la différence saute aux yeux dès que vous zoomez sur une facture convertie ou un schéma technique.",
    "Ce guide utilise l’outil gratuit PDF vers Images, qui restitue chaque page de PDF en image téléchargeable dans votre navigateur, sans rien envoyer. Le PNG est l’un de ses deux formats de sortie, et c’est celui à choisir chaque fois que la netteté compte plus que la taille du fichier.",
    "Voici comment obtenir le résultat le plus net sans faire exploser la taille du fichier, quand le PNG vaut mieux que le JPG, et ce qu’il faut garder en tête sur les images de page en général.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil PDF vers Images",
      body: "Rendez-vous sur l’outil PDF vers Images. Il restitue les pages localement dans votre navigateur — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le PDF sur la zone de dépôt ou cliquez pour le choisir. L’outil prépare chaque page pour l’export.",
    },
    {
      title: "Choisissez le format PNG",
      body: "Sélectionnez PNG. Il est sans perte et garde le texte, les tableaux et les tracés nets — le bon choix pour des documents, des schémas, et tout ce que vous zoomerez.",
    },
    {
      title: "Réglez l’échelle pour la netteté",
      body: "Choisissez une échelle : 2× est net sur la plupart des écrans, 3× est très net pour l’impression ou un grand affichage mais produit des fichiers volumineux. Adaptez l’échelle à l’usage réel de l’image.",
    },
    {
      title: "Exportez les pages",
      body: "Lancez la conversion. Chaque page se télécharge en tant que PNG individuel, prêt à intégrer dans un document, une présentation ou une page web.",
    },
    {
      title: "Utilisez la page dont vous avez besoin",
      body: "Gardez le PNG voulu et supprimez les autres. Pour un long PDF, le diviser d’abord laisse moins de fichiers à gérer.",
    },
  ],
  tips: [
    "Choisissez le PNG plutôt que le JPG dès que la page contient du texte, des tableaux ou des traits nets — la compression du JPG adoucit visiblement ces bords.",
    "Les fichiers PNG sont plus volumineux que des JPG. Si vous exportez de nombreuses pages et que la taille compte plus que la netteté, le JPG est le choix pragmatique.",
    "Une page de PDF n’a pas de transparence, donc le PNG exporté s’affiche sur un fond blanc uni, même si le PNG prend en charge la transparence.",
    "Une échelle plus élevée n’améliore pas une source de mauvaise qualité. Si le PDF lui-même contient une numérisation floue, un PNG en 3× ne fait que restituer ce flou à une résolution plus élevée.",
    "Les images de page ne sont pas consultables — il n’y a pas de couche de texte. Gardez le PDF original si vous devrez retrouver ou copier les mots plus tard.",
  ],
  mobileNote:
    "Récupérer une image nette de page depuis un PDF sur votre téléphone est pratique pour des diapositives, des références de design et des rapports de bug. L’application PDF Editor restitue les pages avec accélération matérielle et permet d’annoter l’image avant de la partager — plus rapide que de s’envoyer le fichier par e-mail pour s’en occuper plus tard.",
  faq: [
    {
      q: "Pourquoi choisir le PNG plutôt que le JPG ?",
      a: "Le PNG est sans perte, donc le texte, les tableaux et les schémas restent nets. Le JPG est plus léger mais adoucit les bords fins. Pour des pages de document que vous zoomerez, le PNG est le meilleur choix.",
    },
    {
      q: "Est-ce que j’obtiens un PNG par page ?",
      a: "Oui. Chaque page est restituée et téléchargée sous forme de fichier PNG séparé. Gardez celles dont vous avez besoin et supprimez les autres.",
    },
    {
      q: "Mon PDF est-il envoyé quelque part ?",
      a: "Non. La restitution se fait entièrement dans votre navigateur, donc le fichier reste sur votre appareil.",
    },
    {
      q: "Pourquoi mon PNG est-il si lourd ?",
      a: "Le PNG est sans perte et une échelle élevée multiplie le nombre de pixels. Réduisez l’échelle ou passez au JPG si la taille du fichier pose problème.",
    },
    {
      q: "Puis-je exporter un PDF protégé par mot de passe ?",
      a: "Pas dans le navigateur — les fichiers chiffrés ne peuvent pas être restitués. Retirez d’abord le mot de passe, ou utilisez l’application mobile PDF Editor.",
    },
  ],
  related: [
    { label: "PDF vers Images — exporter des pages dans votre navigateur", path: "/pdf-to-images" },
    { label: "Image vers PDF — l’opération inverse", path: "/image-to-pdf" },
    { label: "Comment convertir un PDF en JPG", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "Comment extraire des pages d’un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
