import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Formulaire PDF qui s’imprime mal ? Corriger les champs vides",
  description:
    "Le formulaire sort avec des champs vides, du texte décalé ou des bords coupés ? Les problèmes d’impression propres aux formulaires — surtout les réponses manquantes — et le réglage qui corrige chacun.",
  updated: "2026-06-01",
  intro: [
    "Les formulaires s’impriment mal de façons que les PDF ordinaires ne connaissent pas. La plus fréquente et la plus déroutante : les champs remplis ressortent vides — vous avez tout complété à l’écran, mais le papier ne montre que le formulaire vide. Viennent ensuite le texte des champs qui se décale de sa ligne, les cases à cocher qui ne s’impriment pas, et les bords coupés. Chacun a une cause précise et corrigible, enracinée dans la façon dont les champs de formulaire s’impriment différemment du contenu de la page.",
    "Le problème principal — des champs vides sur papier — se produit parce que les réponses saisies vivent dans la couche de champs du formulaire, et certains chemins d’impression ignorent entièrement cette couche. La solution est soit un réglage d’impression qui inclut les champs de formulaire, soit l’aplatissement du formulaire pour que les réponses fassent partie de la page. Les autres problèmes concernent la mise à l’échelle et le rendu des champs, chacun avec son propre réglage.",
    "Ce guide se concentre sur les problèmes d’impression propres aux formulaires. Pour les problèmes d’impression PDF généraux, comme des tailles de page incorrectes sur n’importe quel document, le guide d’impression plus large va plus loin.",
  ],
  steps: [
    {
      title: "Corrigez les champs vides : imprimez les valeurs des champs ou aplatissez",
      body: "Si les champs remplis s’impriment vides, activez l’option d’impression des champs de formulaire (parfois « document et annotations »), ou aplatissez d’abord le formulaire pour que les réponses fusionnent dans la page et s’impriment toujours.",
    },
    {
      title: "Corrigez le texte des champs décalé",
      body: "Si le texte des champs s’imprime mal placé ou dans la mauvaise police, c’est que le lecteur affiche les champs différemment pour l’impression. L’aplatissement verrouille l’apparence que vous voyez à l’écran pour qu’elle s’imprime de la même façon.",
    },
    {
      title: "Corrigez les cases à cocher et marques manquantes",
      body: "Les coches qui disparaissent sur le papier relèvent du même problème de couche de champs que le texte vide. Le réglage d’impression des champs de formulaire ou une étape d’aplatissement les ramène avec le reste de vos réponses.",
    },
    {
      title: "Corrigez les bords coupés",
      body: "Réglez la mise à l’échelle sur « ajuster » ou 100 % plutôt qu’un zoom personnalisé, et faites correspondre le format de papier à celui du formulaire. C’est un problème de mise à l’échelle, distinct du problème de couche de champs, mais fréquent sur les formulaires denses.",
    },
    {
      title: "Imprimez une page pour confirmer",
      body: "Après avoir changé les réglages, imprimez d’abord une seule page. Confirmez que les réponses, l’alignement et les marges ont bon aspect avant de lancer l’impression complète d’un formulaire de plusieurs pages.",
    },
  ],
  tips: [
    "Aplatir avant d’imprimer est la solution universelle pour les champs vides ou décalés — un formulaire aplati imprime ses réponses partout sans réglage particulier.",
    "Si les réponses s’affichent à l’écran mais pas sur papier, c’est un réglage d’impression, pas le fichier — recherchez l’option des champs de formulaire.",
    "Les problèmes de mise à l’échelle et de format de papier sont distincts du problème des champs vides ; corrigez-les avec « ajuster »/100 % et un papier correspondant.",
    "Les formulaires numérisés non interactifs ne connaissent pas le problème des champs vides, car leurs réponses font déjà partie de la page.",
    "Les noms des options d’impression varient selon l’application et l’imprimante, recherchez donc tout ce qui mentionne les champs de formulaire, les annotations ou les commentaires.",
  ],
  mobileNote:
    "Les raccourcis d’impression sur téléphone peuvent perdre les valeurs des champs tout comme sur ordinateur. Dans l’application PDF Editor, aplatissez le formulaire complété avant de l’imprimer ou de le partager vers une imprimante pour que chaque réponse soit intégrée à la page et s’imprime de façon fiable.",
  faq: [
    {
      q: "Pourquoi mon formulaire s’imprime-t-il avec des champs vides ?",
      a: "Les réponses saisies sont dans la couche de champs du formulaire, et votre chemin d’impression l’ignore. Activez l’option d’impression des champs de formulaire, ou aplatissez le formulaire pour que les réponses fassent partie de la page et s’impriment toujours.",
    },
    {
      q: "Pourquoi le texte des champs s’imprime-t-il au mauvais endroit ou dans la mauvaise police ?",
      a: "Le lecteur affiche les champs différemment pour l’impression. Aplatissez d’abord le formulaire — l’aplatissement fixe l’apparence à ce que vous voyez à l’écran, pour qu’elle s’imprime à l’identique.",
    },
    {
      q: "Mes coches ne s’impriment pas — pourquoi ?",
      a: "Même cause que le texte vide : les cases à cocher font partie de la couche de champs. Le réglage d’impression des champs de formulaire ou une étape d’aplatissement les imprime avec vos autres réponses.",
    },
    {
      q: "Pourquoi mon formulaire imprimé est-il coupé sur les bords ?",
      a: "C’est un problème de mise à l’échelle ou de format de papier, pas un problème de champ. Réglez la mise à l’échelle sur ajuster ou 100 % et faites correspondre le format de papier à celui de la page du formulaire.",
    },
    {
      q: "En quoi est-ce différent des problèmes d’impression PDF généraux ?",
      a: "Ce guide couvre les problèmes propres aux formulaires — surtout les valeurs de champs vides. Le guide d’impression PDF général traite des problèmes à l’échelle du document, comme les tailles incorrectes et le rognage, sur n’importe quel PDF.",
    },
  ],
  related: [
    {
      label: "Comment imprimer un formulaire PDF rempli",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "Comment corriger les problèmes d’impression PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
    { label: "Corriger les erreurs d’un formulaire PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
