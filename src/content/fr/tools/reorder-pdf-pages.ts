import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Réorganiser les pages du PDF",
    h1: "Réorganisez les pages d'un PDF — dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Choisissez un PDF, prévisualisez chaque page, remettez tout dans l'ordre voulu et téléchargez le fichier réorganisé. Rien n'est envoyé sur un serveur.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n'est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment réorganiser les pages d'un PDF",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un PDF ou cliquez pour choisir un fichier sur votre appareil.",
      },
      {
        title: "Regardez les aperçus",
        body: "Chaque page devient une vignette, pour que vous voyiez exactement ce que vous déplacez.",
      },
      {
        title: "Déplacez les pages",
        body: "Utilisez les flèches de chaque page pour l'avancer ou la reculer dans le document.",
      },
      {
        title: "Générez et téléchargez",
        body: "Cliquez sur Réorganiser le PDF. Le fichier réorganisé est assemblé localement et téléchargé automatiquement.",
      },
    ],
  },
  useCases: {
    heading: "Quand la réorganisation aide",
    items: [
      {
        title: "Corriger l'ordre d'une numérisation",
        body: "Les applications de numérisation capturent souvent les pages dans le désordre — remettez tout en ordre avant de partager.",
      },
      {
        title: "Déplacer une page de garde ou une annexe",
        body: "Ramenez la page de garde au début, ou renvoyez les pièces jointes à la fin.",
      },
      {
        title: "Reconstituer un fichier fusionné",
        body: "Après avoir fusionné des documents, remettez les pages dans l'ordre de lecture dont vous avez besoin.",
      },
      {
        title: "Préparer l'impression",
        body: "Organisez les pages pour un livret, un fascicule ou une impression recto-verso.",
      },
    ],
  },
  limitations: {
    heading: "Limites assumées",
    items: [
      {
        title: "PDF protégés par mot de passe",
        body: "Les fichiers chiffrés ne peuvent pas être ouverts dans le navigateur. Déverrouillez-les avant, ou utilisez l'application PDF Editor.",
      },
      {
        title: "PDF très volumineux",
        body: "Générer une vignette pour chaque page consomme de la mémoire. Plusieurs centaines de pages peuvent ralentir l'outil ou atteindre les limites du navigateur.",
      },
      {
        title: "Les aperçus prennent un instant",
        body: "Les vignettes sont générées page par page sur votre appareil, un gros PDF a donc besoin de quelques secondes avant que vous puissiez réorganiser.",
      },
    ],
  },
  related: [
    { label: "Fusionner des PDF", path: "/merge-pdf" },
    { label: "Diviser un PDF", path: "/split-pdf" },
    { label: "Faire pivoter des pages d'un PDF", path: "/rotate-pdf" },
    { label: "Extraire des pages d'un PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. Le PDF est généré et réassemblé entièrement dans votre navigateur. Votre fichier ne quitte jamais votre appareil.",
    },
    {
      q: "Peut-on glisser les pages pour les réordonner ?",
      a: "La réorganisation se fait avec des boutons clairs de montée et de descente sur chaque page. Cela fonctionne de manière fiable sur mobile comme sur ordinateur, sans poignées de glisser minuscules à viser.",
    },
    {
      q: "Le contenu ou la qualité des pages change-t-il ?",
      a: "Non. Les pages sont copiées exactement telles quelles — seul l'ordre change. Le texte reste sélectionnable.",
    },
    {
      q: "Pourquoi ça prend un instant après avoir choisi le fichier ?",
      a: "Chaque page est transformée en vignette localement, pour que vous voyiez ce que vous déplacez. Un PDF plus gros prend un peu plus de temps.",
    },
    {
      q: "Peut-on réorganiser un PDF protégé par mot de passe ?",
      a: "Pas dans le navigateur. Retirez le mot de passe avant, ou utilisez l'application PDF Editor, qui prend en charge les fichiers protégés.",
    },
  ],
  appCta: {
    heading: "Besoin d'outils PDF dans l'urgence ?",
    sub: "PDF Editor pour iPhone et Android réorganise, fusionne et signe vos PDF directement depuis votre téléphone.",
  },
};

export default content;
