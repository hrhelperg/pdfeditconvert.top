import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Problèmes de police dans un formulaire PDF (taille auto, texte coupé, substitution)",
  description:
    "Texte trop grand, trop petit, ou qui rétrécit à mesure que vous tapez ? Les particularités de police propres aux champs de formulaire — taille automatique, substitution, rognage — et comment obtenir des réponses nettes et lisibles.",
  updated: "2026-06-01",
  intro: [
    "Les champs de formulaire ont leur propre comportement de police, distinct du reste d’un PDF, et cela produit un ensemble précis de désagréments. Du texte qui rétrécit à mesure que vous en tapez davantage, des réponses qui paraissent énormes dans un champ et minuscules dans le suivant, des caractères rognés en haut ou en bas d’un champ, ou une police différente de celle des intitulés du formulaire. Ce sont des particularités de police propres aux champs de formulaire, pas des problèmes de police PDF généraux — et la plupart tiennent à la façon dont le champ a été configuré.",
    "Le principal coupable est la taille automatique. Beaucoup de champs sont configurés pour rétrécir le texte automatiquement afin que les réponses plus longues rentrent quand même, ce qui explique pourquoi votre texte devient plus petit à mesure que vous tapez. D’autres problèmes viennent d’une police de champ non intégrée, substituée dans certains lecteurs, ou d’un champ tout simplement trop court pour sa taille de police, rognant les caractères.",
    "Ce guide couvre les problèmes de police propres aux champs de formulaire, comment reconnaître chacun, et ce qu’il faut changer pour obtenir des réponses lisibles et cohérentes. Pour les problèmes de police sur un document entier plutôt que sur ses champs, le guide sur les polices PDF général va plus loin.",
  ],
  steps: [
    {
      title: "Reconnaissez le rétrécissement par taille automatique",
      body: "Si le texte du champ devient plus petit à mesure que vous ajoutez des caractères, le champ utilise la taille automatique pour tout faire tenir. C’est voulu, mais cela peut rendre les réponses longues minuscules. Gardez vos réponses concises ou, si vous contrôlez le formulaire, fixez une taille.",
    },
    {
      title: "Corrigez les tailles incohérentes entre les champs",
      body: "Des réponses qui paraissent grandes dans un champ et petites dans un autre signifient en général que chaque champ a une taille de police différente. Si c’est votre formulaire, standardisez la taille de police des champs pour que chaque réponse corresponde.",
    },
    {
      title: "Traitez les caractères rognés",
      body: "Si des lettres sont coupées en haut ou en bas, le champ est trop court pour sa taille de police. Agrandissez le champ ou réduisez la taille de police (sur un formulaire que vous contrôlez), ou acceptez une taille plus petite quand vous remplissez un formulaire qui n’est pas le vôtre.",
    },
    {
      title: "Gérez les polices substituées",
      body: "Si le texte des champs apparaît dans une police différente de celle attendue, la police prévue n’est pas intégrée et le lecteur en a substitué une. Intégrer la police des champs lors de la construction du formulaire la garde cohérente entre les lecteurs.",
    },
    {
      title: "Aplatissez pour verrouiller l’apparence",
      body: "Une fois que vos réponses ont bon aspect, aplatissez le formulaire. L’aplatissement fixe le texte des champs dans la page pour que sa taille et sa police s’affichent de la même façon partout, quel que soit le lecteur du destinataire.",
    },
  ],
  tips: [
    "La taille automatique est la raison habituelle pour laquelle le texte des champs rétrécit à mesure que vous tapez — des réponses concises restent lisibles, ou fixez une taille sur les formulaires que vous construisez.",
    "Si vous concevez le formulaire, standardisez les tailles de police des champs pour que les réponses ne forment pas un patchwork de grand et de petit.",
    "Des caractères rognés signifient que le champ est trop court pour sa police ; redimensionnez le champ ou la police sur un formulaire que vous contrôlez.",
    "Aplatissez avant d’envoyer pour que les polices et tailles de vos champs ne puissent pas bouger sur l’écran du destinataire.",
    "L’apparence des champs peut varier d’un lecteur à l’autre, donc un résultat fixe, avec police intégrée et aplati, est le plus cohérent.",
  ],
  mobileNote:
    "Sur téléphone, l’application PDF Editor vous laisse placer du texte sur les formulaires non interactifs à une taille que vous choisissez, contournant entièrement la taille automatique des champs, et aplatir le résultat pour verrouiller la police et la taille. Pour les champs interactifs, garder les réponses concises évite le rétrécissement automatique qui rend les saisies longues difficiles à lire.",
  faq: [
    {
      q: "Pourquoi le texte de mon formulaire rétrécit-il à mesure que je tape ?",
      a: "Le champ utilise la taille automatique, qui rétrécit le texte pour que les réponses plus longues rentrent quand même. C’est un comportement voulu. Gardez vos réponses concises pour rester lisible, ou fixez une taille de police si vous contrôlez le formulaire.",
    },
    {
      q: "Pourquoi mes réponses apparaissent-elles dans des tailles différentes ?",
      a: "Chaque champ a probablement sa propre taille de police définie. Sur un formulaire que vous avez construit, standardisez la taille de police des champs pour que chaque réponse corresponde. Sur un formulaire qui n’est pas le vôtre, les tailles sont intégrées aux champs.",
    },
    {
      q: "Pourquoi les caractères dans mes champs de formulaire sont-ils coupés ?",
      a: "Le champ est trop court pour sa taille de police, ce qui rogne les lettres. Agrandissez le champ ou réduisez la taille de police sur un formulaire que vous contrôlez, ou utilisez une taille plus petite en remplissant un formulaire qui n’est pas le vôtre.",
    },
    {
      q: "Pourquoi la police des champs a-t-elle un aspect différent de celle des intitulés ?",
      a: "La police prévue pour le champ n’est pas intégrée, donc votre lecteur en a substitué une. Intégrer la police du champ lors de la création du formulaire la garde cohérente d’un lecteur à l’autre.",
    },
    {
      q: "En quoi est-ce différent des problèmes de police PDF généraux ?",
      a: "Ce guide porte sur les polices à l’intérieur des champs de formulaire — taille automatique, taille au niveau du champ, rognage. Le guide sur les polices PDF général couvre les polices manquantes ou substituées sur un document entier.",
    },
  ],
  related: [
    {
      label: "Comment corriger les problèmes de police PDF",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "Problèmes de mise en page d’un formulaire PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "Bonnes pratiques des formulaires PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Corriger les erreurs d’un formulaire PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
