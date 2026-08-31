import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word en PDF",
    h1: "Convertissez un Word en PDF — dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Transformez un fichier .docx ou .txt en un PDF net, prêt à envoyer. Fonctionne entièrement sur votre appareil — le document n’est jamais transféré.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n’est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment convertir un Word en PDF",
    steps: [
      {
        title: "Choisissez le document",
        body: "Glissez-déposez un fichier .docx ou .txt, ou cliquez pour en choisir un.",
      },
      {
        title: "Convertissez",
        body: "Cliquez sur Convertir en PDF. Le texte est lu et mis en page dans un PDF localement, dans votre navigateur.",
      },
      { title: "Téléchargez", body: "Un PDF A4 net se télécharge automatiquement." },
      {
        title: "Partagez",
        body: "Envoyez un format qui s’affiche pareil partout et ne peut pas être modifié par erreur.",
      },
    ],
  },
  useCases: {
    heading: "Quand cet outil est le bon choix",
    items: [
      {
        title: "Envoyer une copie non modifiable",
        body: "Partagez un brouillon en PDF pour que personne ne change le contenu par inadvertance.",
      },
      {
        title: "Envoyer une candidature",
        body: "De nombreux portails exigent un PDF, pas un .docx — convertissez avant l’envoi.",
      },
      {
        title: "Archiver des notes simples",
        body: "Transformez des notes ou des relevés en .txt en un PDF paginé et ordonné.",
      },
      {
        title: "Livraison prête à imprimer",
        body: "Générez un PDF A4 homogène à partir d’un document simple.",
      },
    ],
  },
  limitations: {
    heading: "Limites assumées",
    items: [
      {
        title: "Une conversion centrée sur le texte",
        body: "Nous extrayons et remettons en page le texte du document dans un PDF net. Les polices d’origine, les images, les tableaux et l’espacement exact du .docx ne sont pas reproduits.",
      },
      {
        title: "Pas d’ancien .doc",
        body: "Les anciens fichiers .doc binaires ne peuvent pas être lus dans le navigateur. Enregistrez-les d’abord en .docx.",
      },
      {
        title: "Caractères peu courants simplifiés",
        body: "La police intégrée au PDF couvre l’alphabet latin ; certains caractères spéciaux sont simplifiés pour que la conversion n’échoue jamais.",
      },
    ],
  },
  related: [
    { label: "PDF en Word — le chemin inverse", path: "/pdf-to-word" },
    { label: "Image en PDF", path: "/image-to-pdf" },
    { label: "Fusionner des PDF", path: "/merge-pdf" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    {
      label: "Comment convertir un Word en PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Mon fichier est-il envoyé sur un serveur ?",
      a: "Non. La conversion fonctionne entièrement dans votre navigateur. Votre document ne quitte jamais votre appareil.",
    },
    {
      q: "Le PDF sera-t-il identique à mon fichier Word ?",
      a: "Non — et nous ne prétendrons pas le contraire. C’est une conversion propre, centrée sur le texte : polices, images, tableaux et espacement exact du .docx ne sont pas reproduits.",
    },
    {
      q: "Quels fichiers sont acceptés ?",
      a: "Le .docx moderne de Word et le .txt brut. L’ancien .doc binaire n’est pas accepté — enregistrez-le d’abord en .docx.",
    },
    {
      q: "Y a-t-il une limite de taille ?",
      a: "Jusqu’à 100 Mo par fichier, car tout le traitement se fait dans la mémoire de votre navigateur.",
    },
    {
      q: "Peut-on reconvertir le PDF en Word ?",
      a: "Oui — utilisez PDF en Word pour récupérer le texte dans un .docx modifiable.",
    },
  ],
  appCta: {
    heading: "Besoin d’outils PDF dans l’urgence ?",
    sub: "PDF Editor pour iPhone et Android convertit, signe et partage vos documents directement depuis votre téléphone.",
  },
};

export default content;
