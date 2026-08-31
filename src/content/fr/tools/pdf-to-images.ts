import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF en images",
    h1: "Exportez chaque page d'un PDF en PNG ou en JPG.",
    highlight: "PNG ou JPG",
    lead: "Transformez les pages d'un PDF en fichiers image PNG ou JPEG à télécharger — générées localement, dans votre navigateur.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n'est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment convertir un PDF en images",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un seul PDF ou cliquez pour choisir le fichier.",
      },
      {
        title: "Choisissez le format",
        body: "PNG pour un texte net et la transparence ; JPG pour des fichiers plus légers.",
      },
      {
        title: "Choisissez l'échelle",
        body: "Une échelle plus élevée donne une image plus nette et un fichier plus lourd. 2× est en général le bon compromis.",
      },
      { title: "Téléchargez", body: "Chaque page se télécharge dans un fichier image séparé." },
    ],
  },
  useCases: {
    heading: "Quand cet outil est utile",
    items: [
      {
        title: "Coller une page dans une messagerie",
        body: "L'aperçu de l'image s'affiche directement dans la conversation, ce que le PDF ne fait pas.",
      },
      {
        title: "Réutiliser un graphique dans une présentation",
        body: "Sortez une page du PDF et collez-la dans une diapositive.",
      },
      {
        title: "Créer des vignettes",
        body: "Constituez une planche contact des pages du PDF pour une relecture rapide.",
      },
      {
        title: "Aperçus sur le web",
        body: "Utilisez les images générées comme aperçus légers sur un site.",
      },
    ],
  },
  limitations: {
    heading: "Limites",
    items: [
      {
        title: "Mémoire du navigateur",
        body: "Un très gros PDF exporté à haute échelle peut épuiser la mémoire. Essayez l'échelle 1,5×, ou divisez le PDF avant.",
      },
      {
        title: "PDF protégés par mot de passe",
        body: "Les fichiers chiffrés ne peuvent pas être générés. Déverrouillez-les avant, ou utilisez l'application PDF Editor.",
      },
      {
        title: "Le contenu vectoriel devient une image",
        body: "Les images ne conservent pas de texte consultable. Gardez le PDF d'origine si vous en avez besoin.",
      },
    ],
  },
  related: [
    { label: "Image en PDF — le chemin inverse", path: "/image-to-pdf" },
    { label: "Diviser un PDF", path: "/split-pdf" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Mon fichier est-il envoyé sur un serveur ?",
      a: "Non. La génération fonctionne entièrement dans votre navigateur ; rien ne quitte votre appareil.",
    },
    {
      q: "PNG ou JPG — lequel choisir ?",
      a: "Le PNG est plus net pour le texte et accepte la transparence. Le JPG est plus léger et convient bien aux photos et aux pages entières capturées.",
    },
    {
      q: "Que signifie l'échelle ?",
      a: "Le nombre de pixels d'image pour chaque point du PDF. 2× donne un résultat net sur les écrans haute résolution. 3× produit des fichiers volumineux mais très nets.",
    },
    {
      q: "Peut-on tout télécharger dans une archive ZIP ?",
      a: "Pas encore — les pages se téléchargent une à une. Pour un export en lot, l'application PDF Editor est plus rapide.",
    },
  ],
  appCta: {
    heading: "Besoin d'outils PDF sans connexion ?",
    sub: "PDF Editor pour iPhone et Android affiche les pages instantanément, avec accélération matérielle.",
  },
};

export default content;
