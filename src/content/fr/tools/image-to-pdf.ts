import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Image en PDF",
    h1: "Transformez vos images JPG, PNG et WebP en un seul PDF.",
    highlight: "un seul PDF",
    lead: "Choisissez des images JPG, PNG ou WebP et réunissez-les en un seul PDF. Réordonnez les pages et téléchargez — les images restent sur votre appareil.",
  },
  privacyNote:
    "Vos fichiers sont traités localement, dans votre navigateur, et ne sont jamais envoyés à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment utiliser l'outil Image en PDF",
    steps: [
      {
        title: "Choisissez les images",
        body: "Glissez-déposez des fichiers JPG, PNG ou WebP, ou cliquez pour les sélectionner sur votre appareil.",
      },
      {
        title: "Réordonnez si besoin",
        body: "Utilisez les flèches de chaque ligne pour placer les pages dans le bon ordre.",
      },
      {
        title: "Générez le PDF",
        body: "Cliquez sur Convertir en PDF. Vos images deviennent les pages d'un seul document, dimensionnées d'après chaque image.",
      },
      {
        title: "Téléchargez",
        body: "Le PDF généré se télécharge automatiquement. Vous pouvez le renommer après l'avoir enregistré.",
      },
    ],
  },
  useCases: {
    heading: "Quand cet outil est utile",
    items: [
      {
        title: "Photos de notes de frais",
        body: "Réunissez tout un mois de reçus en un seul PDF avant de l'envoyer à la comptabilité.",
      },
      {
        title: "Documents numérisés",
        body: "Combinez le recto et le verso d'un document en un seul fichier accepté par le portail de l'organisme.",
      },
      {
        title: "Captures d'écran dans un rapport",
        body: "Réunissez une série de captures d'écran dans un document de relecture organisé.",
      },
      {
        title: "Photos de tableau blanc",
        body: "Transformez une série de photos de réunion en un document que l'équipe peut feuilleter.",
      },
    ],
  },
  limitations: {
    heading: "Limites",
    items: [
      {
        title: "Uniquement JPG, PNG et WebP",
        body: "Le HEIC, l'AVIF, le GIF et le TIFF ne sont pas pris en charge dans le navigateur. Convertissez-les avant, ou utilisez l'application mobile.",
      },
      {
        title: "Mémoire du navigateur",
        body: "Un lot très volumineux (des centaines de photos en haute résolution) peut ralentir un appareil ancien.",
      },
      {
        title: "Pas d'OCR",
        body: "Le texte présent dans les images n'est pas extrait. Pour un PDF consultable, numérisez avec l'application PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Fusionner des fichiers PDF", path: "/merge-pdf" },
    { label: "PDF en images", path: "/pdf-to-images" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Mes images sont-elles envoyées quelque part ?",
      a: "Non. Tout fonctionne dans votre navigateur. Vos images ne quittent jamais votre appareil.",
    },
    {
      q: "Y a-t-il une limite de taille de fichier ?",
      a: "Oui — chaque fichier est limité à 100 Mo pour que le navigateur reste réactif. L'application PDF Editor gère des lots plus importants, avec accélération matérielle.",
    },
    {
      q: "Peut-on changer le format de la page ?",
      a: "Chaque page reprend les dimensions en pixels de votre image, pour garder les bonnes proportions. Pour un rendu uniforme en A4, utilisez l'application PDF Editor.",
    },
    {
      q: "Ça fonctionne sur iPhone et sur Android ?",
      a: "Oui, dans n'importe quel navigateur mobile récent. Pour un usage fréquent, l'application PDF Editor est plus rapide et accepte les photos HEIC directement depuis la pellicule.",
    },
  ],
  appCta: {
    heading: "Besoin de ça sur votre téléphone toutes les semaines ?",
    sub: "PDF Editor pour iPhone et Android numérise, organise et signe vos PDF sans connexion.",
  },
};

export default content;
