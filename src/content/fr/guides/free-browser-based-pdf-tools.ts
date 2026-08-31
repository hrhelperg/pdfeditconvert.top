import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Outils PDF gratuits dans le navigateur (sans installation, sans transfert)",
  description:
    "Les outils PDF qui fonctionnent entièrement dans votre navigateur : rien à installer, aucun compte, aucun transfert. Ce qui existe, ce que cela couvre, et comment vérifier que tout se passe bien en local.",
  updated: "2026-05-29",
  intro: [
    "Les outils PDF dans le navigateur ont changé ce que signifie « en ligne ». L’ancien modèle était : envoyez votre fichier, le serveur le traite, vous téléchargez le résultat. Le nouveau modèle est : ouvrez une page, votre navigateur traite le fichier en local, vous téléchargez le résultat. La différence compte — vitesse, confidentialité, et le fait que l’outil puisse rester vraiment gratuit.",
    "Les outils dans le navigateur ne sont pas un argument marketing ; c’est une architecture. Le traitement se fait en JavaScript ou en WebAssembly sur votre machine, dans l’onglet du navigateur. Aucun serveur n’intervient dans la manipulation de votre fichier. La confidentialité et la gratuité découlent de l’architecture, pas d’une politique affichée.",
    "Ce guide couvre ce qui existe aujourd’hui dans les outils PDF pour navigateur, les tâches qu’ils couvrent bien, celles qu’ils ne couvrent pas encore, et comment vérifier qu’un outil est vraiment local avant de lui faire confiance.",
  ],
  steps: [
    {
      title: "Sachez ce qui existe sous forme d’outil dans le navigateur",
      body: "Compression, fusion, division, extraction de pages, réorganisation des pages, rotation, filigrane, image vers PDF, PDF vers images, Word vers PDF, PDF vers Word, signature. La chaîne d’outils dans le navigateur couvre l’essentiel du travail PDF quotidien.",
    },
    {
      title: "Vérifiez que l’outil est vraiment local",
      body: "Outils de développement du navigateur, onglet réseau, déposez un fichier. Un outil réellement dans le navigateur ne montre aucune grosse requête sortante quand vous ajoutez le fichier. La vérification prend quelques secondes.",
    },
    {
      title: "Utilisez Compresser le PDF pour réduire la taille",
      body: "Déposez un PDF, choisissez un niveau de compression, téléchargez. Toute l’opération se déroule dans votre navigateur. Les fichiers riches en scans rétrécissent nettement ; les fichiers purement textuels changent à peine.",
    },
    {
      title: "Utilisez Fusionner le PDF pour combiner des fichiers",
      body: "Déposez plusieurs PDF, glissez pour réorganiser, téléchargez le fichier fusionné. La fusion se fait en local ; le fichier combiné est généré dans la mémoire de votre navigateur.",
    },
    {
      title: "Utilisez Image vers PDF et PDF vers images pour les conversions image-document",
      body: "Image vers PDF combine JPG, PNG et WebP en un seul PDF. PDF vers images extrait chaque page en PNG ou JPG. Les deux fonctionnent en local.",
    },
    {
      title: "Utilisez l’application PDF Editor pour les usages pensés d’abord pour le mobile",
      body: "Certaines tâches (signer, numériser, éditer sur téléphone) fonctionnent mieux dans une application mobile dédiée que dans un navigateur. L’application PDF Editor est le complément iOS/Android de la chaîne dans le navigateur — même posture de confidentialité, mieux adaptée aux usages sur téléphone.",
    },
  ],
  tips: [
    "Les outils dans le navigateur fonctionnent hors connexion une fois la page chargée. Une confirmation utile qu’ils sont réellement locaux.",
    "Les opérations lourdes sur de très gros fichiers peuvent occuper le processeur de l’onglet pendant quelques secondes — c’est normal, pas un blocage.",
    "Les opérations multipages se traitent en flux dans les navigateurs modernes — vous n’avez pas à attendre l’envoi du fichier entier, puisque rien n’est envoyé.",
    "Enregistrez l’URL de l’outil — les outils dans le navigateur fonctionnent sans compte, donc l’URL est l’équivalent de votre marque-page.",
    "Ne faites pas confiance à l’étiquette « dans le navigateur » sans vérifier avec les outils de développement. Certains outils ont une interface dans le navigateur mais envoient quand même le fichier.",
  ],
  mobileNote:
    "Les navigateurs mobiles exécutent aussi les outils PDF dans le navigateur. L’application PDF Editor utilise la même architecture sous une forme native, avec le même traitement sur l’appareil — les utilisateurs d’iPhone et d’Android bénéficient de la même garantie de gratuité et d’absence de transfert.",
  faq: [
    {
      q: "Quelles tâches PDF peuvent tourner dans un navigateur ?",
      a: "Compression, fusion, division, extraction de pages, réorganisation, rotation, filigrane, conversion image↔PDF, Word↔PDF, signature. L’essentiel du travail PDF quotidien s’y prête.",
    },
    {
      q: "Que ne peut-on pas encore faire dans un navigateur ?",
      a: "L’OCR haute précision sur de longs documents, le caviardage avancé, et certains flux spécialisés de préparation à l’impression profitent encore d’un traitement côté serveur.",
    },
    {
      q: "Comment savoir si un outil est réellement dans le navigateur ?",
      a: "Outils de développement du navigateur, onglet réseau. Déposez un fichier. Si vous ne voyez aucune grosse requête sortante, le traitement est local. Si vous voyez une requête POST de plusieurs Mo, il y a transfert.",
    },
    {
      q: "Le traitement dans le navigateur est-il plus lent que côté serveur ?",
      a: "Comparable pour la plupart des tâches. Les navigateurs modernes et WebAssembly sont rapides. Les très gros fichiers peuvent prendre plus de temps en local, mais vous économisez le temps d’envoi et de téléchargement.",
    },
    {
      q: "Pourquoi les outils dans le navigateur sont-ils souvent gratuits ?",
      a: "Parce que le travail lourd se fait sur votre appareil, pas sur les serveurs de l’outil. Les coûts d’hébergement sont minimes ; l’outil peut rester gratuit sans pression d’abonnement.",
    },
  ],
  related: [
    { label: "Outils PDF — liste complète des outils dans le navigateur", path: "/pdf-tools" },
    { label: "Les meilleurs outils PDF gratuits", path: "/guides/best-free-pdf-tools" },
    { label: "Les meilleurs outils PDF sans transfert", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Les avantages du traitement documentaire dans le navigateur", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
