import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "Les champs d’un formulaire PDF ont disparu ? Pourquoi et comment les retrouver",
  description:
    "Vous ouvrez un formulaire et les champs ne sont pas là ? Pourquoi les champs interactifs disparaissent dans certains lecteurs, comment les faire réapparaître, et quoi faire s’il n’y en a jamais eu.",
  updated: "2026-06-01",
  intro: [
    "Vous ouvrez un formulaire en vous attendant à des cases où saisir du texte, et il n’y a rien — juste une page qui semble non interactive, ou des champs qui apparaissent comme des contours vides sans interaction possible. Des champs de formulaire manquants sont alarmants mais généralement sans gravité : les champs sont toujours dans le fichier ; votre lecteur ne fait simplement pas l’effort de les afficher. Parfois, le formulaire n’a jamais eu de champ et était toujours censé être rempli à la main.",
    "Deux scénarios couvrent presque tous les cas. Dans le premier, le formulaire est interactif mais vous l’avez ouvert quelque part qui ignore la couche de champs — un aperçu de navigateur, un lecteur e-mail, un lecteur PDF basique de type image. Dans le second, le formulaire est réellement non interactif, il n’y a donc aucun champ à trouver, et vous le complétez en plaçant du texte par-dessus.",
    "Ce guide vous aide à distinguer les deux cas et à retrouver les champs quand ils existent — sans présumer que le fichier est endommagé, car ce n’est presque jamais le cas.",
  ],
  steps: [
    {
      title: "Écartez d’abord la piste du lecteur",
      body: "Ouvrez le même fichier dans une application PDF dédiée plutôt que dans un onglet de navigateur ou un aperçu e-mail. Si les champs réapparaissent, ils étaient toujours là — le lecteur précédent n’affichait tout simplement pas la couche de champs.",
    },
    {
      title: "Vérifiez si des champs ont réellement existé",
      body: "Si aucune application compétente ne montre de champ nulle part sur la page, le formulaire est non interactif — il a été numérisé ou exporté sans couche de champs. Rien ne manque ; il n’a simplement jamais été interactif.",
    },
    {
      title: "Mettez à jour ou changez d’application PDF",
      body: "Un lecteur obsolète ou minimal peut afficher la page mais ignorer les champs. Une application PDF récente et complète est le moyen le plus fiable d’afficher et d’utiliser les champs interactifs.",
    },
    {
      title: "Retéléchargez si le fichier semble incomplet",
      body: "Un téléchargement partiel ou interrompu peut faire perdre du contenu. Retéléchargez le formulaire depuis la source et rouvrez-le — un exemplaire neuf et complet restaure parfois des champs qui semblaient manquants.",
    },
    {
      title: "Remplissez un formulaire non interactif en ajoutant du texte",
      body: "Si le formulaire n’a réellement aucun champ, complétez-le à la façon non interactive : placez du texte et des coches sur la page avec un éditeur de PDF, puis exportez. Vous n’avez pas besoin de champs pour le terminer.",
    },
  ],
  tips: [
    "Avant de présumer un dommage, changez de lecteur — une autre application est le test le plus rapide pour savoir si les champs existent réellement.",
    "Les aperçus de navigateur et les lecteurs e-mail sont les coupables habituels des champs « disparus » ; une vraie application PDF résout la plupart des cas.",
    "Si les champs apparaissent comme des contours vides sur lesquels vous ne pouvez pas cliquer, c’est souvent un lecteur qui les dessine sans les activer — changez d’application.",
    "Un formulaire vraiment non interactif ne manque de rien — ajouter du texte par-dessus est la façon prévue de le remplir.",
    "Les formulaires dynamiques avancés ne révèlent parfois leurs champs que dans un logiciel précis ; le cas échéant, le formulaire peut nécessiter ce programme ou un format alternatif.",
  ],
  mobileNote:
    "Sur téléphone, les champs manquants viennent en général d’un aperçu qui ne les affiche pas. Ouvrez le formulaire dans l’application PDF Editor : elle active les champs interactifs là où ils existent et vous laisse placer du texte sur la page là où ils n’existent pas — un formulaire qui semblait sans champ dans un e-mail devient ainsi remplissable.",
  faq: [
    {
      q: "Pourquoi les champs de mon formulaire PDF sont-ils absents ?",
      a: "Le plus souvent parce que votre lecteur n’affiche pas la couche de champs — un cas courant avec les aperçus de navigateur et les lecteurs e-mail. Ouvrez le fichier dans une application PDF dédiée et les champs réapparaissent généralement. Si aucune application ne les montre, le formulaire est simplement non interactif.",
    },
    {
      q: "Ai-je perdu les champs, ou n’y en a-t-il jamais eu ?",
      a: "Ouvrez-le dans une application PDF compétente. Si des champs apparaissent, ils étaient toujours là et l’ancien lecteur les cachait. Si aucun n’apparaît nulle part, le formulaire est non interactif et n’a jamais eu de couche de champs.",
    },
    {
      q: "Un téléchargement endommagé peut-il causer des champs manquants ?",
      a: "Occasionnellement. Un téléchargement partiel peut faire perdre du contenu. Retéléchargez le formulaire depuis la source et rouvrez-le avant de conclure que les champs ont réellement disparu.",
    },
    {
      q: "Comment remplir un formulaire qui n’a aucun champ ?",
      a: "Placez votre propre texte et vos coches directement sur la page avec un éditeur de PDF, puis exportez. Les formulaires non interactifs se complètent de cette façon — aucun champ n’est requis.",
    },
    {
      q: "Pourquoi les champs apparaissent-ils comme des contours sur lesquels je ne peux pas cliquer ?",
      a: "Votre lecteur dessine les cases des champs sans les rendre interactives. Passez à une application PDF complète, qui à la fois affiche et active les champs.",
    },
  ],
  related: [
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
    {
      label: "Pourquoi je ne peux pas écrire dans ce formulaire PDF ?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Problèmes de compatibilité des formulaires PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
