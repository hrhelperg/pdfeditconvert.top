import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "Comment convertir un WebP en PDF — images du web vers un document",
  description:
    "Transformez les images WebP enregistrées depuis le web en un seul PDF dans votre navigateur. Pourquoi d’autres applications les refusent, et comment la conversion règle le problème.",
  updated: "2026-05-23",
  intro: [
    "Le WebP est le format d’image que vous obtenez en enregistrant une image depuis un site web moderne. Il est plus léger que le JPG ou le PNG à qualité équivalente, ce qui explique pourquoi les sites l’apprécient — mais c’est aussi le format que d’autres applications refusent discrètement. Envoyez un WebP vers un ancien portail, déposez-le dans certains éditeurs de documents, ou transmettez-le à un collègue sur un logiciel ancien, et vous obtiendrez souvent un simple « type de fichier non pris en charge ».",
    "Convertir le WebP en PDF contourne ce problème. Un PDF s’ouvre partout, donc envelopper vos images WebP dans un PDF les rend universellement partageables. Ce guide utilise l’outil gratuit Image vers PDF, qui accepte le WebP et fonctionne entièrement dans votre navigateur — rien n’est envoyé sur un serveur.",
    "C’est le bon réflexe quand vous avez rassemblé des images depuis le web — photos de produits, images de référence, infographies enregistrées — et que vous en avez besoin dans un format que tout destinataire et tout système accepteront réellement.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Image vers PDF",
      body: "Rendez-vous sur l’outil Image vers PDF dans votre navigateur. Il accepte le WebP en plus du JPG et du PNG, et traite tout sur votre appareil, sans envoi ni inscription.",
    },
    {
      title: "Ajoutez vos fichiers WebP",
      body: "Glissez les images WebP enregistrées sur la zone de dépôt ou cliquez pour les choisir. Chaque image devient une page du PDF final.",
    },
    {
      title: "Organisez l’ordre",
      body: "Utilisez les flèches haut et bas pour ordonner les images. S’il s’agit de photos de référence ou d’une série d’étapes, réglez l’ordre à cette étape.",
    },
    {
      title: "Créez le PDF",
      body: "Cliquez sur Créer le PDF. Vos images WebP sont placées sur des pages de PDF et combinées en un seul fichier, localement sur votre appareil.",
    },
    {
      title: "Téléchargez et partagez",
      body: "Le PDF se télécharge automatiquement. Il s’ouvrira désormais sur n’importe quel appareil ou portail qui bloquait les fichiers WebP bruts.",
    },
    {
      title: "Compressez si le fichier est lourd",
      body: "Le WebP est efficace, mais une pile d’images en haute résolution finit par peser lourd. Passez le résultat dans Compresser un PDF s’il doit tenir sous une limite de pièce jointe ou de dépôt.",
    },
  ],
  tips: [
    "Toute la raison de convertir un WebP en PDF, c’est la compatibilité — un PDF est accepté là où un WebP ne l’est pas, vous échangez donc un format capricieux contre un format universel.",
    "Si vous n’avez besoin que des images elles-mêmes dans un format plus courant (pas d’un document), un simple convertisseur d’image peut mieux convenir. Choisissez le PDF quand l’objectif est un fichier unique, partageable et imprimable.",
    "Le WebP peut être avec ou sans perte selon la façon dont il a été enregistré ; dans les deux cas, la conversion en PDF ne restitue pas le détail déjà supprimé par le site web.",
    "La transparence d’un WebP, comme celle d’un PNG, s’affiche sur fond blanc une fois transformée en page de PDF.",
    "Certains navigateurs très anciens ne savent pas du tout décoder le WebP. Si l’outil ne peut pas lire votre fichier, ouvrez-le dans un navigateur récent ou utilisez l’application PDF Editor.",
  ],
  mobileNote:
    "Enregistrer des images en naviguant sur votre téléphone laisse souvent des fichiers WebP que le reste de vos applications refuse. L’application PDF Editor les transforme en PDF partageable sur-le-champ, donc une image trouvée sur le web est prête à envoyer sans détour par l’ordinateur.",
  faq: [
    {
      q: "Pourquoi ai-je même besoin de convertir un WebP ?",
      a: "Beaucoup d’applications, de portails et de systèmes anciens n’acceptent pas le WebP. Convertir en PDF donne un fichier qui s’ouvre partout, ce qui est généralement la raison de vouloir cette conversion.",
    },
    {
      q: "La qualité de l’image se perd-elle pendant la conversion ?",
      a: "Convertir en PDF n’ajoute pas de perte, mais ne peut pas récupérer le détail déjà supprimé par le site web lors de l’enregistrement en WebP. Le PDF aura la même qualité que l’image source.",
    },
    {
      q: "Mes images sont-elles envoyées quelque part ?",
      a: "Non. La conversion se fait dans votre navigateur, sur votre propre appareil, donc vos images restent confidentielles.",
    },
    {
      q: "Puis-je combiner du WebP avec du JPG et du PNG ?",
      a: "Oui. L’outil accepte les trois formats ensemble, donc vous pouvez construire un seul PDF à partir de sources d’images mélangées.",
    },
    {
      q: "L’outil ne lit pas mon WebP — que faire ?",
      a: "Utilisez un navigateur à jour, car les anciens ne savent pas décoder le WebP. Vous pouvez aussi utiliser l’application mobile PDF Editor pour gérer la conversion.",
    },
  ],
  related: [
    { label: "Image vers PDF — combiner des fichiers WebP dans votre navigateur", path: "/image-to-pdf" },
    { label: "Compresser un PDF — alléger le résultat", path: "/compress-pdf" },
    { label: "Comment convertir un PNG en PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Comment convertir un JPG en PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
