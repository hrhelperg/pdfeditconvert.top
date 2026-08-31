import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Diviser un PDF",
    h1: "Extrayez des pages d'un PDF — en toute confidentialité, dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Choisissez un PDF et indiquez la plage de pages à exporter. Utilisez des plages comme 1-3,5,8-10 — le fichier reste sur votre appareil.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n'est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment diviser un PDF",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un seul PDF ou cliquez pour choisir le fichier.",
      },
      {
        title: "Indiquez les plages",
        body: "Saisissez des pages et des plages séparées par des virgules. Exemple : 1-3,5,8-10.",
      },
      {
        title: "Divisez",
        body: "Cliquez sur Diviser le PDF. Nous assemblons un nouveau PDF avec seulement ces pages, localement.",
      },
      {
        title: "Téléchargez",
        body: "Le nouveau PDF se télécharge automatiquement. Renommez-le après l'avoir enregistré.",
      },
    ],
  },
  useCases: {
    heading: "Quand diviser est le bon choix",
    items: [
      {
        title: "Envoyez seulement ce qui compte",
        body: "Partagez uniquement la clause du contrat concernée, pas le document entier.",
      },
      {
        title: "Séparez un lot numérisé",
        body: "Redécoupez la numérisation de plusieurs documents en fichiers individuels.",
      },
      {
        title: "Sortez une page d'un rapport",
        body: "Extrayez un graphique ou un tableau sans exposer le reste du fichier.",
      },
      {
        title: "Préparez une pièce jointe plus propre",
        body: "Retirez la page de garde, les pages blanches et les annexes avant l'envoi par e-mail.",
      },
    ],
  },
  limitations: {
    heading: "Limites",
    items: [
      {
        title: "PDF protégés par mot de passe",
        body: "Les fichiers verrouillés ne peuvent pas être divisés dans le navigateur. Déverrouillez-les avant, ou utilisez l'application PDF Editor.",
      },
      {
        title: "Fichiers très volumineux",
        body: "Le navigateur peut manquer de mémoire au-delà de quelques centaines de mégaoctets.",
      },
      {
        title: "Un fichier à la fois",
        body: "Cet outil exporte un seul PDF avec les pages choisies. Pour produire plusieurs fichiers, lancez-le plusieurs fois.",
      },
    ],
  },
  related: [
    { label: "Fusionner un PDF — le chemin inverse", path: "/merge-pdf" },
    { label: "Faire pivoter des pages d'un PDF", path: "/rotate-pdf" },
    { label: "PDF en images", path: "/pdf-to-images" },
    { label: "Compresser un PDF", path: "/compress-pdf" },
    { label: "Extraire des pages d'un PDF", path: "/extract-pdf-pages" },
    { label: "Réorganiser les pages d'un PDF", path: "/reorder-pdf-pages" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. La division fonctionne entièrement dans votre navigateur ; le fichier ne quitte jamais votre appareil.",
    },
    {
      q: "Quelle est la syntaxe pour la plage de pages ?",
      a: "Des pages et des plages séparées par des virgules. Par exemple, 1-3,5,8-10 conserve les pages 1, 2, 3, 5, 8, 9 et 10.",
    },
    {
      q: "Peut-on diviser un PDF protégé par mot de passe ?",
      a: "Pas dans le navigateur. Retirez le mot de passe avant, ou utilisez l'application PDF Editor.",
    },
    {
      q: "Le résultat conserve-t-il la qualité d'origine ?",
      a: "Oui — les pages sont copiées octet pour octet. Il n'y a ni nouveau rendu ni perte de qualité.",
    },
  ],
  appCta: {
    heading: "Vous divisez des PDF dans l'urgence ?",
    sub: "PDF Editor pour iPhone et Android divise et fusionne vos PDF directement depuis votre téléphone.",
  },
};

export default content;
