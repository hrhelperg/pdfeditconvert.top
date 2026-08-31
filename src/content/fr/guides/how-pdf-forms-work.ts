import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Comment fonctionnent les formulaires PDF — champs, AcroForm et numérisations",
  description:
    "Sous le capot, un formulaire PDF est soit un ensemble de champs interactifs posés sur la page, soit une simple image sans aucun champ. Comment chacun est construit et pourquoi cela change tout au remplissage.",
  updated: "2026-06-01",
  intro: [
    "Comprendre ce qui se passe réellement à l’intérieur d’un formulaire PDF aide à expliquer presque toutes les bizarreries que vous rencontrerez. Une page PDF est une mise en page fixe — texte, lignes et images placés à des coordonnées précises. Un formulaire ajoute une couche distincte par-dessus cette mise en page : des champs interactifs, chacun étant une petite zone qui sait qu’elle est un champ de texte, une case à cocher, une liste déroulante ou une zone de signature.",
    "Quand un formulaire possède cette couche de champs, votre lecteur PDF dessine des zones modifiables aux endroits où son concepteur les a placées. Vous saisissez du texte, et le lecteur stocke votre saisie dans le champ plutôt que de la graver dans la page. Cette séparation explique pourquoi des réponses déjà remplies peuvent parfois être effacées, modifiées ou ne pas s’enregistrer — elles vivent dans la couche de champs, pas dans la page elle-même, tant que vous ne les avez pas aplaties.",
    "Les formulaires non interactifs se passent entièrement de couche de champs. Ils ne sont que l’image de la page, donc il n’y a rien d’interactif où saisir du texte ; vous ajoutez vos propres objets de texte par-dessus. Ce guide détaille comment les deux types sont construits, ce que fait l’aplatissement, et pourquoi un même formulaire peut se comporter différemment selon l’application.",
  ],
  steps: [
    {
      title: "La couche de page : fixe et définitive",
      body: "Chaque PDF possède une couche de page où le texte et les éléments graphiques sont verrouillés à des positions précises. C’est ce qui fait qu’un PDF a le même aspect partout. Sur un formulaire non interactif, les lignes de questions et les intitulés vivent entièrement dans cette couche.",
    },
    {
      title: "La couche de champs : l’interactivité par-dessus",
      body: "Les formulaires interactifs ajoutent une couche de champs de formulaire au-dessus de la page — champs de texte, cases à cocher, boutons radio, listes déroulantes, champs de signature. Chaque champ a un nom et un type que le lecteur comprend.",
    },
    {
      title: "Le remplissage : la saisie stockée dans les champs",
      body: "Quand vous saisissez du texte dans un champ interactif, votre réponse est conservée dans ce champ, pas fusionnée dans la page. C’est pourquoi vous pouvez l’effacer et la ressaisir, et pourquoi un autre lecteur peut l’afficher légèrement différemment.",
    },
    {
      title: "L’enregistrement : conserver les valeurs des champs",
      body: "Enregistrer un formulaire rempli stocke les valeurs des champs à l’intérieur du fichier. Certains lecteurs basiques ne permettent que d’imprimer, pas d’enregistrer les données — c’est la raison classique pour laquelle les réponses saisies disparaissent à la réouverture du fichier.",
    },
    {
      title: "L’aplatissement : fusionner les champs dans la page",
      body: "Aplatir un formulaire fait descendre les valeurs des champs dans la couche de page, où elles deviennent un contenu permanent de la page. Une fois le formulaire aplati, les réponses ne peuvent plus être modifiées ni effacées — utile juste avant de renvoyer le formulaire.",
    },
  ],
  tips: [
    "Imaginez un formulaire interactif comme une feuille transparente de zones modifiables posée sur une page imprimée. Aplatir revient à coller définitivement cette feuille sur la page.",
    "Comme les valeurs des champs sont séparées de la page, un même formulaire peut avoir un aspect légèrement différent d’un lecteur à l’autre — les polices et la taille des champs ne sont pas toujours identiques.",
    "Si les réponses disparaissent sans cesse, c’est que la couche de champs n’est pas enregistrée. Utilisez un outil qui écrit les valeurs des champs dans le fichier, ou aplatissez avant de fermer.",
    "Certains formulaires avancés (souvent appelés formulaires XFA ou dynamiques) utilisent une structure plus complexe que beaucoup de lecteurs ne prennent pas entièrement en charge — ce sont ceux qui ont le plus de chances de mal se comporter.",
    "Les formulaires non interactifs n’ont aucune couche de champs, donc ils ne perdent jamais de données comme peuvent le faire les formulaires interactifs — le texte que vous ajoutez reste simplement posé sur la page.",
  ],
  mobileNote:
    "L’application PDF Editor lit la couche de champs d’un formulaire dès son ouverture, si bien que les champs interactifs sont immédiatement utilisables. Pour les formulaires non interactifs, sans couche de champs, elle vous permet d’ajouter du texte et des marques directement sur la page, puis d’exporter — et vous pouvez aplatir le résultat pour verrouiller vos réponses avant l’envoi.",
  faq: [
    {
      q: "De quoi sont faits les champs d’un formulaire PDF ?",
      a: "Ce sont une couche d’objets interactifs — zones de texte, cases à cocher, boutons radio, listes déroulantes et champs de signature — placés au-dessus de la mise en page fixe, chacun doté d’un nom et d’un type que le lecteur reconnaît.",
    },
    {
      q: "Pourquoi mes réponses saisies disparaissent-elles parfois ?",
      a: "Les valeurs des champs sont stockées séparément de la page. Si votre lecteur ne fait qu’imprimer au lieu d’enregistrer les données, ou si vous n’enregistrez pas correctement, la couche de champs n’est pas écrite dans le fichier et les réponses sont perdues.",
    },
    {
      q: "Que signifie aplatir un formulaire PDF ?",
      a: "Aplatir fusionne les valeurs des champs dans la page elle-même, ce qui les rend permanentes. Le formulaire n’est plus modifiable, mais les réponses s’affichent et s’impriment de façon cohérente partout.",
    },
    {
      q: "Qu’est-ce qu’un AcroForm ?",
      a: "AcroForm désigne le type standard de formulaire PDF interactif, largement pris en charge. Il existe aussi un type dynamique plus complexe (XFA) que beaucoup de lecteurs gèrent mal, ce qui explique pourquoi certains formulaires ne fonctionnent que dans un logiciel précis.",
    },
    {
      q: "Pourquoi un même formulaire a-t-il un aspect différent dans deux applications ?",
      a: "Parce que chaque lecteur affiche lui-même la couche de champs. L’apparence d’un formulaire peut varier d’un lecteur PDF à l’autre, notamment la police et la taille des champs. Aplatir avant de partager évite les mauvaises surprises.",
    },
  ],
  related: [
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Comment enregistrer un formulaire PDF rempli",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Problèmes de compatibilité des formulaires PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor — remplir sur mobile", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
