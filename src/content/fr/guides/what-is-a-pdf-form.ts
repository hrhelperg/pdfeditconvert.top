import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "Qu’est-ce qu’un formulaire PDF ? Interactif ou non interactif",
  description:
    "Un formulaire PDF est un document conçu pour recueillir des réponses — parfois avec de vrais champs de saisie, parfois une simple page sur laquelle on écrit par-dessus. Ce que cela change et comment les distinguer.",
  updated: "2026-06-01",
  intro: [
    "Un formulaire PDF est n’importe quel PDF conçu pour recueillir des informations auprès de la personne qui l’ouvre : une candidature à un emploi, un document fiscal, une décharge de consentement, une fiche de réservation. Ce qui distingue un formulaire d’un PDF ordinaire, c’est l’intention — il attend que vous ajoutiez des réponses, pas seulement que vous le lisiez. Ce qui prête à confusion, c’est que deux formulaires peuvent sembler identiques à l’écran et se comporter de façon totalement différente au moment de les remplir.",
    "Tout dépend de la présence ou non de champs interactifs. Un formulaire interactif comporte des zones que son auteur a intégrées au fichier — touchez-en une et un curseur apparaît, prêt à recevoir votre saisie. Un formulaire non interactif n’en a aucune : c’est en réalité l’image d’un formulaire, souvent la numérisation d’un original papier, où les lignes et les intitulés font partie de l’image plutôt que d’être des zones actives. Les deux sont bien des formulaires, et les deux se remplissent, mais ils demandent un traitement différent.",
    "Savoir à quel type vous avez affaire prend environ deux secondes et évite bien des frustrations. Ce guide explique ce qu’est réellement un formulaire PDF, les deux types que vous rencontrerez, et comment les distinguer avant de commencer à remplir.",
  ],
  steps: [
    {
      title: "Comprenez qu’un formulaire est fait pour être rempli",
      body: "Contrairement à un rapport ou à un contrat que vous vous contentez de lire, un formulaire comporte des espaces vides qui attendent des réponses — lignes pour le nom, cases à cocher, zones de signature. C’est cette intention qui en fait un formulaire, quelle que soit la façon dont il a été produit.",
    },
    {
      title: "Repérez un formulaire interactif",
      body: "Ouvrez le PDF et touchez ou cliquez à l’endroit où une réponse doit figurer. Si un curseur de texte apparaît, si un champ se met en surbrillance ou si une case à cocher réagit, le formulaire comporte des champs interactifs que son auteur a ajoutés volontairement.",
    },
    {
      title: "Repérez un formulaire non interactif",
      body: "Si toucher un espace vide ne produit rien — ni curseur, ni surbrillance —, le formulaire est non interactif. Les lignes et les intitulés font partie de l’image de la page : il n’y a donc rien dans quoi saisir directement du texte.",
    },
    {
      title: "Regardez comment il a été créé",
      body: "Les formulaires exportés depuis un logiciel de conception de formulaires sont généralement interactifs. Ceux qui ont été imprimés, signés à la main puis renumérisés sont presque toujours non interactifs. Connaître l’origine du fichier permet souvent de deviner son type.",
    },
    {
      title: "Choisissez la bonne méthode de remplissage",
      body: "Formulaire interactif : touchez et saisissez. Formulaire non interactif : ajoutez vos propres zones de texte et vos coches par-dessus la page. Un éditeur de PDF compétent gère les deux cas dans le même fichier.",
    },
  ],
  tips: [
    "Le test le plus rapide consiste à toucher une ligne vide. Un curseur qui apparaît signale un formulaire interactif ; rien qui se passe signale un formulaire non interactif.",
    "Un formulaire peut être partiellement interactif : certains champs sont réels, d’autres manquent. Remplissez les champs réels, puis ajoutez du texte manuellement pour les espaces restants.",
    "Les formulaires interactifs se remplissent plus proprement, mais les formulaires non interactifs restent parfaitement utilisables — c’est juste à vous de positionner le texte.",
    "Si vous concevez un formulaire pour d’autres personnes, rendez-le interactif chaque fois que possible : cela facilite beaucoup le remplissage pour le destinataire.",
    "L’apparence d’un formulaire peut varier d’un lecteur PDF à l’autre : un champ qui a un certain aspect sur votre téléphone peut s’afficher légèrement différemment sur l’ordinateur de quelqu’un d’autre.",
  ],
  mobileNote:
    "Sur téléphone, l’application PDF Editor vérifie si le formulaire comporte des champs interactifs dès son ouverture : là où ils existent, vous touchez et saisissez ; là où ils n’existent pas, vous placez du texte et des coches n’importe où sur la page. Dans les deux cas, vous pouvez signer et exporter une copie remplie sans passer par l’impression.",
  faq: [
    {
      q: "Tout PDF est-il un formulaire ?",
      a: "Non. Un PDF ne compte comme formulaire que lorsqu’il est destiné à recueillir des réponses — champs, cases à cocher, lignes de signature. Un rapport ou un article est un PDF, mais pas un formulaire.",
    },
    {
      q: "Comment savoir si mon formulaire PDF est interactif ou non interactif ?",
      a: "Touchez ou cliquez sur un espace vide où une réponse doit figurer. Si un curseur apparaît et que vous pouvez saisir du texte, il est interactif. Si rien ne se passe, c’est un formulaire non interactif et vous ajoutez le texte par-dessus.",
    },
    {
      q: "Peut-on remplir un formulaire PDF non interactif ?",
      a: "Oui. Un formulaire non interactif n’a aucun champ, mais vous pouvez placer votre propre texte et vos coches n’importe où sur la page à l’aide d’un éditeur de PDF, puis exporter le fichier rempli.",
    },
    {
      q: "Pourquoi quelqu’un enverrait-il un formulaire non interactif plutôt qu’interactif ?",
      a: "En général parce qu’il a commencé sous forme papier et a été numérisé, ou parce que l’outil qui l’a produit n’ajoute pas de champs. Ce n’est pas un défaut — cela demande juste une méthode de remplissage légèrement différente.",
    },
    {
      q: "Un formulaire interactif est-il toujours préférable ?",
      a: "Il est plus facile à remplir et paraît plus soigné, mais il peut aussi reposer sur des fonctions que certains lecteurs ne prennent pas en charge. Un formulaire non interactif bien conçu reste fiable partout, même s’il demande un peu plus d’effort pour être rempli.",
    },
  ],
  related: [
    {
      label: "PDF modifiable ou PDF à remplir",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "Comment fonctionnent les formulaires PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Comment remplir un formulaire PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF modifiable ou PDF non éditable",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
