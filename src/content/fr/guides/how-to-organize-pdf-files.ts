import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "Comment organiser ses fichiers PDF — une méthode qui tient",
  description:
    "Remettez de l’ordre dans des PDF en vrac : fusionner ce qui va ensemble, réordonner les pages, retirer le superflu et nommer correctement. Une routine avec des outils gratuits.",
  updated: "2026-05-23",
  intro: [
    "« Organiser mes PDF » veut en général dire l’une de deux choses : ranger un seul document en désordre, ou transformer un dossier plein de fichiers apparentés en quelque chose de cohérent. Les deux se résument aux mêmes gestes : combiner ce qui va ensemble, remettre les pages dans le bon ordre, retirer ce qui n’a rien à faire là, et tout nommer pour pouvoir le retrouver plus tard.",
    "Ce guide détaille une méthode reproductible construite à partir d’outils gratuits dans le navigateur, chacun fonctionnant sur votre appareil sans rien envoyer. Aucune des étapes n’est compliquée en soi ; l’intérêt est de les faire dans le bon ordre pour ne pas refaire du travail.",
    "Voyez-y moins un outil unique qu’une routine applicable à n’importe quel tas de documents — un dossier fiscal, la paperasse d’un projet, une pile de numérisations — pour transformer le chaos en quelque chose que vous seriez content de transmettre.",
  ],
  steps: [
    {
      title: "Faites le point sur ce que vous avez",
      body: "Listez les fichiers et ce que contient chacun. Décidez à quoi le résultat final doit ressembler — un seul document combiné, ou plusieurs fichiers propres — avant de toucher à quoi que ce soit.",
    },
    {
      title: "Combinez les fichiers qui vont ensemble",
      body: "Utilisez l’outil Fusionner un PDF pour réunir des documents apparentés en un seul, dans l’ordre voulu. Un contrat et ses annexes, un rapport et son appendice — un fichier pour chacun.",
    },
    {
      title: "Corrigez l’ordre des pages",
      body: "Passez l’outil Réorganiser les pages PDF sur tout ce qui est sorti dans le désordre — numérisations inversées, sections mal placées — jusqu’à ce que chaque document se lise correctement.",
    },
    {
      title: "Retirez le superflu",
      body: "Éliminez les pages blanches, les pages de garde et les doublons en ne gardant que les pages voulues avec l’outil Extraire des pages PDF.",
    },
    {
      title: "Redressez les pages de travers",
      body: "Utilisez l’outil Faire pivoter un PDF sur les pages numérisées en paysage ou à l’envers pour que tout le document se lise à l’endroit.",
    },
    {
      title: "Nommez et rangez de façon cohérente",
      body: "Donnez à chaque fichier un nom explicite et daté — « Facture-Acme-2026-05.pdf » — et classez-le dans un dossier logique. Des noms cohérents, c’est ce qui rend une collection consultable des mois plus tard.",
    },
  ],
  tips: [
    "Procédez dans l’ordre : fusionner, réorganiser, retirer, faire pivoter, nommer. Nommer d’abord puis fusionner oblige à renommer ensuite ; réorganiser avant de retirer gaspille de l’effort sur des pages que vous allez jeter.",
    "Adoptez une convention de nommage et tenez-vous-y. « Type-Qui-Date » (Facture-Acme-2026-05) se trie et se recherche bien mieux que des noms improvisés.",
    "Gardez les originaux dans un dossier séparé jusqu’à avoir confirmé que les versions organisées sont bonnes. Le rangement n’est réversible que si vous n’avez pas écrasé la source.",
    "Compressez tout à la fin si les fichiers partent par e-mail ou vers un portail — inutile de compresser un document que vous allez encore restructurer.",
    "La mémoire du navigateur limite les très gros travaux. Pour des centaines de pages ou de fichiers, l’application PDF Editor gère plus confortablement la charge.",
  ],
  mobileNote:
    "Une bonne partie du désordre documentaire commence sur le téléphone — numérisations, captures d’écran, pièces jointes reçues par e-mail. L’application PDF Editor permet de fusionner, réorganiser, retirer des pages et renommer au même endroit, hors connexion, pour garder les choses en ordre au fil de l’eau plutôt que d’affronter une pile plus tard.",
  faq: [
    {
      q: "Quel est le bon ordre pour organiser un PDF en désordre ?",
      a: "Fusionnez d’abord les fichiers apparentés, puis réorganisez les pages, puis retirez le superflu, puis corrigez la rotation, et enfin nommez et rangez. Travailler dans cet ordre évite de refaire des étapes.",
    },
    {
      q: "Ces outils sont-ils confidentiels ?",
      a: "Oui. Les outils de fusion, de réorganisation, d’extraction et de rotation fonctionnent tous dans votre navigateur, sur votre appareil — rien n’est envoyé, ce qui compte pour de la paperasse personnelle ou financière.",
    },
    {
      q: "Comment devrais-je nommer mes fichiers PDF ?",
      a: "Utilisez un schéma cohérent et explicite avec une date, comme « Type-Qui-Date.pdf ». C’est la cohérence qui rend un dossier consultable et triable plus tard.",
    },
    {
      q: "Puis-je organiser un gros lot d’un coup ?",
      a: "Les outils dans le navigateur gèrent bien les volumes courants, mais de très gros lots peuvent solliciter fortement la mémoire. L’application PDF Editor est conçue pour les travaux plus lourds et fonctionne hors connexion.",
    },
    {
      q: "Dois-je compresser en organisant ?",
      a: "Compressez en dernier, une fois le document finalisé, et seulement s’il doit tenir sous des limites d’e-mail ou de dépôt. Compresser en cours de route se voit annulé par les modifications suivantes.",
    },
  ],
  related: [
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    { label: "Fusionner un PDF — combiner des fichiers", path: "/merge-pdf" },
    { label: "Comment réorganiser les pages d’un PDF", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "Comment supprimer les pages inutiles d’un PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
};

export default content;
