import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Comment réorganiser les pages d’un PDF (gratuit, dans le navigateur)",
  description:
    "Remettez les pages d’un PDF dans le bon ordre depuis votre navigateur. Rattrapez une numérisation à l’envers ou une fusion qui a mal tourné.",
  updated: "2026-05-23",
  intro: [
    "Les pages se retrouvent dans le mauvais ordre plus souvent qu’on ne le pense. Un bac d’alimentation de documents saisit une pile et la numérise à l’envers. Une fusion assemble deux fichiers mais dans le mauvais ordre. Une annexe censée être à la fin se retrouve au milieu. Quelle que soit la cause, la correction est la même : réorganiser les pages jusqu’à ce que le document se lise comme il devrait.",
    "Ce guide utilise l’outil gratuit Réorganiser les pages PDF, qui affiche chaque page en aperçu et permet de les déplacer avec des commandes simples, directement dans votre navigateur — rien n’est envoyé. Vous voyez les miniatures, vous les remettez en place, vous téléchargez le fichier corrigé.",
    "C’est une petite opération à l’effet démesuré : un document dans le bon ordre se lit comme intentionnel, alors qu’un document dans le mauvais ordre fait paraître l’ensemble négligé.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Réorganiser les pages PDF",
      body: "Rendez-vous sur l’outil Réorganiser les pages PDF dans votre navigateur. Il fonctionne sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. L’outil affiche une miniature de chaque page pour que vous voyiez l’ordre actuel d’un coup d’œil.",
    },
    {
      title: "Repérez ce qui est mal placé",
      body: "Parcourez les miniatures à la recherche de pages inversées, mal placées ou dupliquées. Connaître l’ordre voulu avant de commencer rend les déplacements rapides.",
    },
    {
      title: "Déplacez les pages dans le bon ordre",
      body: "Utilisez les commandes pour placer chaque page à la bonne position. Travaillez du début du document vers la fin pour que les positions restent prévisibles.",
    },
    {
      title: "Vérifiez le nouvel ordre",
      body: "Relisez les miniatures de haut en bas une nouvelle fois. La séquence affichée est celle que vous obtiendrez dans le fichier.",
    },
    {
      title: "Téléchargez le PDF corrigé",
      body: "Exportez le fichier réorganisé et enregistrez-le avec un nom clair. Gardez l’original jusqu’à avoir confirmé que le nouvel ordre est correct.",
    },
  ],
  tips: [
    "Si toute une numérisation est ressortie à l’envers, réorganiser corrige la séquence — mais une page de travers relève d’un problème de rotation, à traiter avec l’outil Faire pivoter un PDF.",
    "Réorganisez avant de compresser ou de convertir. Il est plus simple de d’abord obtenir la bonne structure, puis de lancer les opérations plus lourdes sur le document fini.",
    "Travaillez du début vers la fin en déplaçant les pages, pour qu’un déplacement ne bouscule pas les positions déjà réglées.",
    "Pour des documents combinant plusieurs sources, réorganisez juste après la fusion, pendant que la structure prévue est encore fraîche en tête.",
    "Gardez le fichier original. Si une réorganisation tourne mal, il est bien plus rapide de repartir de la source intacte.",
  ],
  mobileNote:
    "Réorganiser sur téléphone se fait en glissant des miniatures, et l’application PDF Editor rend l’opération tactile : appuyer, glisser, déposer, terminé — hors connexion et sans rien envoyer. Pratique juste après une numérisation, quand les pages ont souvent besoin d’un petit réarrangement.",
  faq: [
    {
      q: "Puis-je corriger une numérisation ressortie dans le mauvais ordre ?",
      a: "Oui. Réorganiser permet d’inverser la séquence pour que la page numérisée en dernier revienne au début. Si les pages sont aussi tournées, corrigez l’orientation avec l’outil Faire pivoter un PDF.",
    },
    {
      q: "Réorganiser change-t-il le contenu des pages ?",
      a: "Non. Seul l’ordre change — le contenu et l’orientation de chaque page restent exactement les mêmes.",
    },
    {
      q: "Mon PDF est-il envoyé quelque part ?",
      a: "Non. La réorganisation se fait dans votre navigateur, sur votre appareil, donc le fichier reste confidentiel.",
    },
    {
      q: "Puis-je supprimer des pages en même temps que je réorganise ?",
      a: "Réorganiser ne concerne que l’ordre. Pour retirer des pages, extrayez celles que vous voulez garder avec l’outil Extraire des pages PDF, qui laisse de côté les pages indésirables.",
    },
    {
      q: "Le fichier original sera-t-il affecté ?",
      a: "Non. L’outil produit un nouveau PDF réorganisé et laisse votre source intacte, donc vous pouvez recommencer depuis l’original si besoin.",
    },
  ],
  related: [
    { label: "Réorganiser les pages PDF — remettre en ordre dans votre navigateur", path: "/reorder-pdf-pages" },
    { label: "Faire pivoter un PDF — corriger les pages de travers", path: "/rotate-pdf" },
    { label: "Comment organiser ses fichiers PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Comment fusionner des fichiers PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Réorganiser les pages PDF", path: "/reorder-pdf-pages" },
};

export default content;
