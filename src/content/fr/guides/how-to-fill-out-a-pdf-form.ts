import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "Comment remplir un formulaire PDF (interactif ou non)",
  description:
    "Remplissez n’importe quel formulaire PDF, qu’il ait de vrais champs ou qu’il s’agisse d’une numérisation sur laquelle on écrit. La marche à suivre complète sur ordinateur et sur téléphone, signature et enregistrement compris.",
  updated: "2026-06-01",
  intro: [
    "Remplir un formulaire PDF est simple une fois que vous savez auquel des deux types vous avez affaire. Un formulaire interactif a des champs que vous touchez et dans lesquels vous saisissez du texte ; un formulaire non interactif est l’image d’une page sur laquelle vous placez votre propre texte. La plupart des formulaires sont de l’un ou l’autre type, parfois un mélange des deux, et tous deux peuvent être complétés numériquement sans jamais toucher une imprimante.",
    "Voici la marche à suivre complète — le guide de référence du sujet, qui couvre à la fois le cas interactif et le cas non interactif, sur ordinateur comme sur téléphone. Le principe reste le même à chaque fois : faire apparaître vos réponses sur la page, gérer les cases à cocher et les dates, signer si nécessaire, puis enregistrer une copie propre en conservant l’original vierge.",
    "Si vous cherchez spécifiquement les étapes sur téléphone, les guides mobiles approfondissent le sujet pour iPhone et pour Android. Ici, l’objectif est la méthode universelle qui fonctionne quel que soit l’appareil, avec des remarques honnêtes sur les points où les formulaires peuvent se montrer pénibles.",
  ],
  steps: [
    {
      title: "Ouvrez le formulaire et faites le test du toucher",
      body: "Ouvrez le PDF et cliquez ou touchez l’endroit où la première réponse doit figurer. Un curseur ou une case en surbrillance signale des champs interactifs ; si rien ne se passe, le formulaire est non interactif et vous ajouterez le texte vous-même.",
    },
    {
      title: "Remplissez les champs interactifs en saisissant du texte",
      body: "Touchez un champ et saisissez votre réponse. Utilisez la touche Tab ou faites défiler pour passer d’un champ à l’autre, cliquez sur les cases à cocher pour les cocher, et ouvrez les listes déroulantes pour choisir parmi les options proposées. Travaillez de haut en bas pour n’en oublier aucun.",
    },
    {
      title: "Remplissez les formulaires non interactifs avec des zones de texte",
      body: "Pour un formulaire sans champs, utilisez l’outil texte pour poser votre réponse sur chaque ligne. Zoomez d’abord pour que le texte se pose précisément sur la ligne plutôt que de flotter au-dessus ou en dessous.",
    },
    {
      title: "Gérez les cases à cocher, les dates et les choix",
      body: "Cochez directement les cases interactives ; sur un formulaire non interactif, placez une coche ou une croix. Ajoutez les dates demandées, en respectant le format affiché par le formulaire (jour-mois-année ou mois-jour-année).",
    },
    {
      title: "Signez si le formulaire le demande",
      body: "Utilisez l’outil de signature pour ajouter une signature tapée ou manuscrite dans la zone de signature. La même étape fonctionne que le champ de signature soit interactif ou qu’il s’agisse simplement d’une ligne imprimée.",
    },
    {
      title: "Enregistrez une copie remplie et conservez l’original",
      body: "Exportez une version terminée sous forme de nouveau fichier, en l’aplatissant si vous le souhaitez pour verrouiller les réponses. Conservez l’original vierge afin de pouvoir remplir une copie neuve la prochaine fois.",
    },
  ],
  tips: [
    "Gardez toujours l’original vierge intact — remplir une copie propre est plus net que de modifier les réponses de la dernière fois.",
    "Sur les formulaires non interactifs, fixez une taille de texte homogène pour que chaque réponse ait un aspect uniforme plutôt qu’un patchwork de polices.",
    "Vérifiez les champs obligatoires avant d’envoyer ; un formulaire renvoyé pour une seule case manquante fait perdre plus de temps qu’une relecture finale.",
    "Si un champ n’accepte pas la saisie, le formulaire est peut-être non interactif ou verrouillé — passez au placement de texte par-dessus, ou consultez les guides de dépannage.",
    "Aplatissez le formulaire avant de l’envoyer si vous voulez que les réponses s’affichent de la même façon pour chaque destinataire.",
  ],
  mobileNote:
    "L’application PDF Editor remplit aussi bien les formulaires interactifs que non interactifs, sur iPhone comme sur Android : elle détecte les vrais champs là où ils existent et vous laisse placer du texte et des coches n’importe où là où ils n’existent pas. Signez au cours de la même session et exportez une copie remplie — tout se passe sur l’appareil, rien n’est envoyé sur un serveur.",
  faq: [
    {
      q: "Comment remplir un formulaire PDF qui n’a aucun champ ?",
      a: "Utilisez l’outil texte d’un éditeur de PDF pour placer vos réponses directement sur la page, ajoutez des coches là où c’est nécessaire, puis exportez. Le formulaire étant non interactif, vous posez du texte par-dessus plutôt que de saisir dans des champs.",
    },
    {
      q: "Puis-je remplir un formulaire PDF gratuitement ?",
      a: "Oui. Des outils gratuits, dans le navigateur ou sur mobile, remplissent aussi bien les formulaires interactifs que non interactifs. L’application PDF Editor gère le remplissage et la signature sans compte.",
    },
    {
      q: "Dois-je imprimer le formulaire pour le remplir ?",
      a: "Presque jamais. Les deux types de formulaire peuvent être complétés à l’écran et renvoyés numériquement. N’imprimez que si un destinataire exige spécifiquement une copie papier signée à la main.",
    },
    {
      q: "Pourquoi le formulaire ne me laisse-t-il pas saisir de texte ?",
      a: "En général parce qu’il est non interactif (sans champs), ouvert dans un lecteur qui ne prend pas en charge les champs, ou verrouillé. Essayez de placer du texte par-dessus, passez à un outil capable de gérer les formulaires, ou consultez les guides de dépannage.",
    },
    {
      q: "Comment m’assurer que mes réponses ne seront pas effacées ?",
      a: "Enregistrez avec un outil qui écrit les valeurs des champs dans le fichier, et aplatissez le formulaire avant l’envoi pour que les réponses fusionnent définitivement dans la page.",
    },
  ],
  related: [
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Comment remplir un formulaire PDF sur iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Comment remplir un formulaire PDF sur Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Comment enregistrer un formulaire PDF rempli",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Bonnes pratiques des formulaires PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
