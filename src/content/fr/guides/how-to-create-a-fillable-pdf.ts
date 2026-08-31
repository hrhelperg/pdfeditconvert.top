import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Comment créer un PDF à remplir — les options honnêtes et leurs limites",
  description:
    "Ce qu’il faut vraiment pour produire un PDF que d’autres pourront remplir : de vrais champs interactifs ou un simple modèle non interactif — et l’approche adaptée aux outils dont vous disposez.",
  updated: "2026-06-01",
  intro: [
    "Il existe deux façons honnêtes de créer un PDF que les gens pourront remplir, très différentes en effort comme en résultat. La voie soignée consiste à créer un vrai formulaire interactif : un PDF avec de véritables champs — zones de texte, cases à cocher, listes déroulantes — que les destinataires touchent et remplissent. La voie plus simple consiste à créer un modèle non interactif : un PDF propre et bien espacé, avec des lignes et des intitulés clairs, que les gens complètent en ajoutant du texte par-dessus.",
    "Autant le dire d’emblée : créer de vrais champs de formulaire interactifs demande en général un logiciel de conception de formulaires dédié, et le résultat peut malgré tout se comporter différemment selon les lecteurs PDF. Un modèle non interactif, à l’inverse, peut être créé avec presque n’importe quel outil de traitement de documents et fonctionne de façon fiable partout — au prix d’un peu plus de travail pour les destinataires, qui doivent positionner eux-mêmes leurs réponses.",
    "Ce guide couvre les deux approches, les situations où chacune est pertinente, et comment concevoir l’une comme l’autre pour que le formulaire final soit facile à compléter. Il ne prétendra pas qu’un outil de navigateur peut faire apparaître des champs interactifs complexes qu’il ne peut pas produire — il vous oriente plutôt vers la méthode adaptée à ce dont vous disposez réellement.",
  ],
  steps: [
    {
      title: "Partez d’une mise en page propre et bien espacée",
      body: "Concevez d’abord le formulaire dans un outil de traitement de documents : intitulés clairs, espace vide généreux pour les réponses, cases à cocher bien visibles et ligne de signature. Un bon espacement compte autant pour la version interactive que pour la version non interactive.",
    },
    {
      title: "Décidez : champs interactifs ou modèle non interactif",
      body: "Si les destinataires le rempliront souvent et que vous voulez une expérience soignée où l’on touche pour saisir, visez des champs interactifs. Si vous avez besoin de quelque chose de rapide qui fonctionne dans n’importe quel lecteur, un modèle non interactif est le choix pragmatique.",
    },
    {
      title: "Pour un modèle non interactif, exportez en PDF",
      body: "Exportez directement votre document mis en page au format PDF. Les lignes et les intitulés deviennent la page ; les destinataires ajoutent du texte par-dessus avec n’importe quel éditeur de PDF. Cela fonctionne avec presque n’importe quel outil que vous utilisez déjà.",
    },
    {
      title: "Pour des champs interactifs, utilisez un logiciel de conception de formulaires",
      body: "Créer de vrais champs de texte, cases à cocher et listes déroulantes demande un logiciel conçu pour cela. Ajoutez chaque champ par-dessus la mise en page, nommez-le clairement et définissez son type. Prévoyez de tester le résultat dans plusieurs lecteurs.",
    },
    {
      title: "Testez le formulaire avant de le diffuser",
      body: "Ouvrez votre formulaire comme le feront les destinataires — sur téléphone et sur ordinateur. Remplissez-le vous-même de bout en bout. Corrigez tout champ trop petit, mal étiqueté ou mal aligné avec sa ligne avant de le diffuser.",
    },
  ],
  tips: [
    "Un modèle non interactif propre qui se remplit de façon fiable partout bat souvent un formulaire interactif sophistiqué qui casse dans certains lecteurs.",
    "Laissez plus d’espace pour les réponses que vous ne le pensez nécessaire — les champs trop étroits sont la plainte numéro un à propos des formulaires.",
    "Donnez aux champs interactifs des noms explicites ; cela facilite à la fois le remplissage et le traitement ultérieur des réponses.",
    "Évitez les fonctions avancées des formulaires dynamiques, sauf si vous savez que le logiciel de vos destinataires les prend en charge — certains lecteurs PDF ne le font pas.",
    "Quelle que soit la voie choisie, remplissez d’abord le formulaire vous-même ; vous repérerez les points gênants qu’aucune relecture de conception ne révèle.",
  ],
  mobileNote:
    "Les destinataires peuvent compléter votre formulaire sur téléphone avec l’application PDF Editor, qu’il soit interactif ou non — elle exploite les vrais champs et laisse les gens placer du texte sur les modèles non interactifs. Si vous créez un modèle non interactif, testez-le dans l’application sur téléphone pour confirmer que les espaces de réponse sont assez grands pour les pouces.",
  faq: [
    {
      q: "Puis-je créer un PDF à remplir gratuitement ?",
      a: "Vous pouvez créer gratuitement un modèle non interactif à remplir avec presque n’importe quel outil de traitement de documents, en exportant en PDF — les destinataires ajoutent le texte par-dessus. Créer de vrais champs interactifs demande en général un logiciel de conception de formulaires dédié.",
    },
    {
      q: "Quelle est la différence entre un PDF à remplir interactif et un PDF à remplir non interactif ?",
      a: "Un PDF interactif a de vrais champs que l’on touche pour y saisir du texte. Un modèle non interactif est une page propre où l’on place son propre texte. L’interactif est plus soigné ; le non interactif est plus simple à créer et fonctionne dans tous les lecteurs.",
    },
    {
      q: "Les formulaires PDF interactifs fonctionnent-ils partout ?",
      a: "Pas toujours. Les champs standards sont largement pris en charge, mais l’apparence et les fonctions avancées peuvent varier d’un lecteur PDF à l’autre, et les formulaires dynamiques peuvent carrément ne pas s’ouvrir dans certaines applications. Testez avant de vous y fier.",
    },
    {
      q: "Quelle approche choisir ?",
      a: "Si le formulaire sera réutilisé intensivement et que vous voulez une expérience soignée, investissez dans des champs interactifs. Si vous avez besoin d’aller vite et de façon fiable, un modèle non interactif bien conçu est le pari le plus sûr.",
    },
    {
      q: "Comment rendre un modèle non interactif facile à remplir ?",
      a: "Utilisez des intitulés clairs, beaucoup d’espace vide, des lignes ou des cases visibles pour chaque réponse, et une zone de signature évidente. Remplissez-le ensuite vous-même une fois pour confirmer que tout a de la place.",
    },
  ],
  related: [
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
    { label: "Comment fonctionnent les formulaires PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Bonnes pratiques des formulaires PDF", path: "/guides/pdf-form-best-practices" },
    {
      label: "Comment diffuser un formulaire PDF à faire remplir",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
