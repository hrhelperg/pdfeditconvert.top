import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Comment redresser un PDF dont les pages sont de travers ou à l’envers",
  description:
    "Redressez définitivement les pages d’un PDF qui s’ouvrent couchées ou à l’envers, dans votre navigateur. Pourquoi tourner l’écran ne change rien, et ce qui corrige vraiment le fichier.",
  updated: "2026-05-23",
  intro: [
    "Vous ouvrez un PDF et une page est couchée sur le côté. Vous la faites pivoter dans la visionneuse, elle a l’air bonne — puis vous l’envoyez, et le destinataire la revoit de travers. C’est le piège : faire pivoter dans une visionneuse ne change souvent que votre affichage, pas la façon dont la page est stockée. Pour que ce soit corrigé pour tout le monde, il faut faire pivoter la page elle-même et enregistrer la modification.",
    "Ce guide fait exactement cela avec l’outil gratuit Faire pivoter un PDF, qui tourne les pages de 90, 180 ou 270 degrés et grave la correction dans un nouveau fichier, le tout dans votre navigateur, sans rien envoyer. Qu’une seule page soit mal orientée ou qu’une numérisation entière soit sortie en paysage, c’est la correction définitive.",
    "Nous verrons aussi pourquoi les pages finissent de travers en premier lieu, pour empêcher le problème à la source — en général un scanner ou un téléphone tenu dans le mauvais sens.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Faire pivoter un PDF",
      body: "Rendez-vous sur l’outil Faire pivoter un PDF dans votre navigateur. Il enregistre la rotation directement dans le fichier, donc la correction tient pour toutes les visionneuses — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez le PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. L’outil affiche les pages pour que vous voyiez lesquelles sont de travers ou à l’envers.",
    },
    {
      title: "Repérez les pages concernées",
      body: "Notez quelles pages sont mal orientées et de combien — un quart de tour, un demi-tour. Dans une longue numérisation, ce peut être chaque page ; dans un rapport, peut-être un seul tableau large.",
    },
    {
      title: "Faites pivoter jusqu’à l’endroit",
      body: "Appliquez 90° à une page couchée sur le côté, 180° à une page à l’envers, ou 270° à une page tournée dans l’autre sens, jusqu’à ce que le contenu se lise normalement.",
    },
    {
      title: "Vérifiez, puis téléchargez",
      body: "Confirmez que chaque page corrigée est à l’endroit et que vous n’avez pas dérangé des pages déjà correctes, puis exportez le PDF corrigé.",
    },
    {
      title: "Corrigez-le à la source la prochaine fois",
      body: "Les pages de travers viennent en général d’un scanner qui alimente les pages en paysage ou d’un téléphone tenu dans le mauvais sens. Ajuster l’orientation de la numérisation ou la façon de tenir le téléphone évite que le problème ne se reproduise.",
    },
  ],
  tips: [
    "Faire pivoter dans une visionneuse PDF ne change souvent que votre affichage, pas le fichier enregistré — c’est pour ça que la page reparaît de travers chez le destinataire. Enregistrer une copie pivotée est ce qui corrige vraiment le problème.",
    "Ne faites pivoter que les pages vraiment mal orientées. Un tableau en paysage correctement large (une feuille de calcul, un graphique) est censé être ainsi ; le faire pivoter empire les choses.",
    "Si toute la numérisation est en paysage, une seule rotation de 90° appliquée à toutes les pages corrige en général tout en un geste.",
    "Corrigez la rotation avant de réorganiser ou de fusionner — il est bien plus facile de juger l’ordre et de combiner des documents quand chaque page est à l’endroit.",
    "Gardez l’original. Une rotation excessive arrive facilement ; recommencer depuis le fichier intact est plus rapide que d’alterner les rotations.",
  ],
  mobileNote:
    "Les pages de travers proviennent presque toujours d’un téléphone, et c’est justement là qu’elles se corrigent le plus vite. L’application PDF Editor fait pivoter les pages en un geste et enregistre la correction dans le fichier, hors connexion — pour qu’un document tout juste numérisé soit à l’endroit avant même de quitter vos mains.",
  faq: [
    {
      q: "Pourquoi la page paraît-elle corrigée pour moi mais de travers pour les autres ?",
      a: "Faire pivoter dans une visionneuse ne change en général que votre affichage à l’écran, pas la façon dont la page est stockée. Pour que ce soit corrigé pour tout le monde, faites pivoter la page et enregistrez un nouveau fichier — ce que fait l’outil Faire pivoter un PDF.",
    },
    {
      q: "De combien dois-je faire pivoter ?",
      a: "90° pour une page couchée sur le côté, 180° pour une page à l’envers, 270° pour une page tournée dans l’autre sens. Choisissez la valeur qui remet le contenu à l’endroit.",
    },
    {
      q: "Corriger la rotation réduit-il la qualité ?",
      a: "Non. La rotation ne change que l’orientation ; le contenu et la résolution de la page restent inchangés.",
    },
    {
      q: "Mon fichier est-il envoyé quelque part ?",
      a: "Non. La rotation se fait dans votre navigateur, sur votre appareil, donc le fichier reste confidentiel.",
    },
    {
      q: "Comment éviter que les pages ne se numérisent de travers ?",
      a: "Réglez votre scanner pour détecter ou respecter l’orientation de la page, ou tenez votre téléphone pour que la page remplisse le cadre à l’endroit. Corriger cela à la capture évite l’étape de rotation plus tard.",
    },
  ],
  related: [
    { label: "Faire pivoter un PDF — redresser des pages dans votre navigateur", path: "/rotate-pdf" },
    { label: "Comment faire pivoter les pages d’un PDF", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Comment numériser un document en PDF avec son téléphone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Comment réorganiser les pages d’un PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Faire pivoter un PDF", path: "/rotate-pdf" },
};

export default content;
