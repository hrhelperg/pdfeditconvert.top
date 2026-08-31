import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Comment faire pivoter les pages d’un PDF (gratuit, sans envoi)",
  description:
    "Faites pivoter toutes les pages d’un PDF ou seulement certaines, de 90, 180 ou 270 degrés, dans votre navigateur. Redressez une numérisation en paysage ou une page à l’envers.",
  updated: "2026-05-23",
  intro: [
    "Un PDF qui s’ouvre de travers est un désagrément petit mais tenace. Vous penchez la tête, ou vous n’arrêtez pas de faire pivoter votre téléphone et la page tourne avec lui. La correction consiste à faire pivoter la page elle-même pour qu’elle soit stockée à l’endroit — elle se lit alors correctement pour tout le monde, sur tous les appareils, sans que personne n’ait à tordre le cou.",
    "Ce guide utilise l’outil gratuit Faire pivoter un PDF, qui tourne toutes les pages ou seulement certaines de 90, 180 ou 270 degrés, directement dans votre navigateur, sans rien envoyer. C’est la bonne correction, qu’une seule page soit de travers ou que tout le document sorte du scanner en paysage.",
    "La rotation modifie durablement la façon dont la page est stockée, donc nous verrons comment ne l’appliquer qu’aux pages qui en ont besoin, et comment vérifier le résultat avant d’enregistrer.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Faire pivoter un PDF",
      body: "Rendez-vous sur l’outil Faire pivoter un PDF dans votre navigateur. Il fonctionne sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. L’outil affiche les pages pour que vous voyiez lesquelles sont mal orientées.",
    },
    {
      title: "Décidez quelles pages faire pivoter",
      body: "Faites pivoter toutes les pages, ou seulement celles qui posent problème — un seul tableau en paysage dans un rapport par ailleurs droit, par exemple. Notez quelles pages et dans quel sens.",
    },
    {
      title: "Choisissez l’angle de rotation",
      body: "Choisissez 90° pour une page couchée sur le côté, 180° pour une page à l’envers, ou 270° pour une page tournée dans l’autre sens. Appliquez-le aux pages choisies.",
    },
    {
      title: "Vérifiez que chaque page est droite",
      body: "Confirmez que les pages corrigées se lisent désormais normalement et que vous n’avez pas fait pivoter par erreur des pages déjà correctes.",
    },
    {
      title: "Téléchargez le PDF corrigé",
      body: "Exportez le fichier pivoté et enregistrez-le avec un nom clair. L’original reste intact au cas où vous devriez recommencer.",
    },
  ],
  tips: [
    "Ne faites pivoter que les pages qui posent problème. Appliquer une rotation générale à un document dont la plupart des pages sont correctes ne fait que créer de nouveaux problèmes.",
    "Les pages en paysage — larges tableaux, graphiques, feuilles de calcul exportées en PDF — sont souvent voulues en paysage. Ne faites pivoter que si le contenu est réellement de travers, pas s’il est correctement large.",
    "Si les pages sont à la fois dans le désordre et de travers, corrigez d’abord la rotation, puis réorganisez — il est plus facile de juger l’ordre quand chaque page est droite.",
    "Faire pivoter avant de fusionner garantit que le document combiné est correct dès le départ, sans surprise de travers cachée au milieu.",
    "Gardez l’original. Si vous faites pivoter dans le mauvais sens, il est plus rapide de recommencer depuis le fichier intact que d’alterner les rotations.",
  ],
  mobileNote:
    "Les numérisations de travers arrivent le plus souvent sur un téléphone, et c’est justement là qu’elles se corrigent le plus vite. L’application PDF Editor fait pivoter les pages en un geste et fonctionne hors connexion, donc vous pouvez redresser un document tout juste numérisé avant même qu’il ne quitte l’appareil.",
  faq: [
    {
      q: "Puis-je faire pivoter une seule page ?",
      a: "Oui. Sélectionnez uniquement les pages mal orientées et faites-les pivoter, en laissant le reste du document tel quel.",
    },
    {
      q: "Quelle rotation dois-je choisir ?",
      a: "90° pour une page couchée sur le côté, 180° pour une page à l’envers, et 270° pour une page tournée dans l’autre sens. Choisissez la valeur qui remet le contenu à l’endroit.",
    },
    {
      q: "La rotation est-elle permanente ?",
      a: "Elle est enregistrée dans le fichier exporté, donc la page se lit à l’endroit partout. Votre original reste intact, vous pouvez donc toujours recommencer si besoin.",
    },
    {
      q: "Mon PDF est-il envoyé quelque part ?",
      a: "Non. La rotation se fait dans votre navigateur, sur votre appareil, donc le fichier ne le quitte jamais.",
    },
    {
      q: "Ma numérisation est de travers et dans le désordre — que faire en premier ?",
      a: "Faites d’abord pivoter les pages à l’endroit, puis utilisez l’outil Réorganiser les pages PDF pour corriger la séquence. Juger de l’ordre est plus simple une fois que tout est dans le bon sens.",
    },
  ],
  related: [
    { label: "Faire pivoter un PDF — corriger l’orientation dans votre navigateur", path: "/rotate-pdf" },
    { label: "Réorganiser les pages PDF — corriger la séquence", path: "/reorder-pdf-pages" },
    { label: "Comment redresser un PDF dont les pages sont de travers", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "Comment réorganiser les pages d’un PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Faire pivoter un PDF", path: "/rotate-pdf" },
};

export default content;
