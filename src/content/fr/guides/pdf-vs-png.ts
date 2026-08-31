import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF ou PNG — document de plusieurs pages ou image unique bien nette",
  description:
    "Le PDF gagne pour un document de plusieurs pages ; le PNG gagne pour une image unique, nette, à fond transparent. Les règles claires et la conversion dans les deux sens.",
  updated: "2026-05-29",
  intro: [
    "Le PDF et le PNG sont tous deux excellents dans leur domaine, mais leurs domaines sont différents. Le PDF contient des documents multipages avec du texte sélectionnable, des polices intégrées, des signatures et une structure. Le PNG contient une image bitmap unique avec compression sans perte et prise en charge de la transparence. Chacun est le mauvais outil pour la tâche de l’autre, et la confusion vient surtout de personnes qui utilisent le PNG pour envoyer ce qui est en réalité un document.",
    "Le PNG excelle quand vous avez besoin d’une image unique, nette et exacte — un logo à fond transparent, une capture d’écran, un schéma, un graphique. Les pixels sont la donnée elle-même ; il n’y a pas de texte sous-jacent. Le PDF excelle quand vous avez besoin de pages, de polices, de sélection de texte, ou de toute structure à plusieurs étapes.",
    "Ce guide donne des règles claires sur quand utiliser lequel, la conversion entre les deux dans les deux sens, et les cas où le choix est réellement affaire de jugement.",
  ],
  steps: [
    {
      title: "Utilisez le PDF pour tout ce qui compte plusieurs pages",
      body: "Tout document de deux pages ou plus devrait être un PDF, pas une suite de PNG. Le PDF maintient les pages ensemble, préserve l’ordre, et se présente comme un fichier unique que le destinataire peut lire séquentiellement.",
    },
    {
      title: "Utilisez le PNG pour une image unique et nette avec transparence",
      body: "Logos à fond transparent, schémas, captures d’écran — le PNG est le bon format. La compression sans perte garde le texte et les traits nets ; le canal alpha prend en charge la transparence.",
    },
    {
      title: "N’utilisez pas le PNG pour du contenu photographique",
      body: "Les photos sont volumineuses en PNG et ne profitent pas de la compression sans perte. Le JPG gère les photos avec une qualité visuelle comparable pour une fraction du poids.",
    },
    {
      title: "Convertissez le PDF en PNG pour extraire des pages en images",
      body: "PDF vers images exporte chaque page du PDF en PNG haute résolution. Utile quand vous avez besoin d’une page comme image unique pour une présentation, une page web ou un outil de design.",
    },
    {
      title: "Convertissez le PNG en PDF pour regrouper des captures d’écran en document",
      body: "PNG vers PDF ou Image vers PDF combine des captures d’écran PNG en un seul PDF. Utile quand vous avez pris de nombreuses captures et voulez les partager comme un seul fichier ordonné.",
    },
    {
      title: "Pour une page unique riche en texte, le PDF reste meilleur",
      body: "Même une seule page de contenu textuel bénéficie du PDF plutôt que du PNG — le texte reste sélectionnable, le poids du fichier est plus léger, et le destinataire peut copier depuis le fichier.",
    },
  ],
  tips: [
    "Un PNG d’une capture d’écran convient ; un PNG d’un document multipage est un mauvais choix. Le multipage appartient au PDF.",
    "Si votre PNG contient des photos, passez au JPG — même qualité visuelle, fichier bien plus léger.",
    "La conversion PNG → PDF préserve l’image à pleine résolution ; aucune perte de qualité.",
    "La conversion PDF → PNG permet de définir la résolution. Plus elle est élevée, plus l’image est nette mais lourde ; une échelle 2× est généralement le bon compromis.",
    "N’« exportez pas en PNG » un document que vous avez déjà en PDF, sauf besoin précis du format image. Le PDF reste plus utile.",
  ],
  mobileNote:
    "Le téléphone capture souvent du contenu en captures d’écran PNG qui devraient vraiment être un PDF. L’application PDF Editor combine des captures d’écran PNG en un seul PDF directement sur l’appareil, pratique pour partager plusieurs captures comme un fichier ordonné unique plutôt qu’un ensemble éparpillé.",
  faq: [
    {
      q: "Quand utiliser le PNG plutôt que le PDF ?",
      a: "Quand vous avez besoin d’une image unique et nette, en particulier avec transparence. Logos, schémas, captures d’écran, graphiques destinés à d’autres documents.",
    },
    {
      q: "Le PDF ou le PNG est-il plus léger pour une seule page ?",
      a: "Ça dépend du contenu. Une page riche en texte : le PDF l’emporte. Une page riche en images : poids similaire, ou PNG légèrement plus lourd du fait de sa compression sans perte.",
    },
    {
      q: "Peut-on modifier un PNG à l’intérieur d’un PDF ?",
      a: "Oui — le PDF contient le PNG et vous pouvez manipuler l’image avec des outils d’édition PDF. Utile pour ajouter des logos ou des captures d’écran dans un document.",
    },
    {
      q: "Pourquoi le PNG ne prend-il pas en charge plusieurs pages ?",
      a: "Le PNG est fondamentalement un format d’image. Les formats de documents multipages (PDF, TIFF) sont conçus pour cet usage. Le PNG ne l’est pas.",
    },
    {
      q: "Que faire si j’ai de nombreux PNG à partager ?",
      a: "Image vers PDF les combine en un seul PDF ordonné. Les destinataires reçoivent un fichier unique au lieu d’un dossier de pièces jointes.",
    },
  ],
  related: [
    { label: "PDF vers images — exporter les pages en PNG ou JPG", path: "/pdf-to-images" },
    { label: "Image vers PDF — combiner des PNG en un seul PDF", path: "/image-to-pdf" },
    { label: "Comment convertir un PNG en PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Comment convertir un PDF en PNG", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF vers images — exporter les pages en PNG ou JPG", path: "/pdf-to-images" },
};

export default content;
