import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Problèmes de mise en page d’un formulaire PDF (alignement et débordement)",
  description:
    "Champs décalés, réponses qui débordent, formulaire différent sur l’écran d’en face ? Les défauts de mise en page qui varient d’un lecteur à l’autre, et comment obtenir un rendu stable.",
  updated: "2026-06-01",
  intro: [
    "Un formulaire peut sembler parfait sur votre écran et arriver avec un aspect erroné sur celui de quelqu’un d’autre — champs décalés de leurs lignes, réponses qui débordent de leurs cases, cases à cocher mal alignées, toute la mise en page subtilement déplacée. Comme les champs de formulaire sont dessinés par chaque lecteur plutôt que fixés dans la page, leur apparence exacte peut varier, et c’est la racine de la plupart des plaintes sur la mise en page des formulaires.",
    "Ces problèmes sont distincts des problèmes de mise en page PDF généraux, qui remontent généralement aux marges et à l’espacement du document source. Les problèmes de mise en page des formulaires concernent la couche de champs : comment les champs se positionnent par rapport à la page, comment les réponses s’y intègrent, et à quel point cela s’affiche de façon cohérente d’une application à l’autre. Les solutions sont donc spécifiques aux formulaires.",
    "Ce guide couvre les problèmes courants de mise en page des formulaires, pourquoi ils se produisent, et le remède le plus fiable — l’aplatissement — qui rend un formulaire identique partout.",
  ],
  steps: [
    {
      title: "Confirmez qu’il s’agit d’une différence de lecteur",
      body: "Ouvrez le formulaire dans deux applications PDF différentes. Si la mise en page change entre les deux, c’est le rendu des champs qui pose problème, pas le fichier — chaque lecteur dessine les champs légèrement différemment.",
    },
    {
      title: "Corrigez les réponses qui débordent de leurs champs",
      body: "Si le texte dépasse le bord d’un champ, celui-ci est trop petit ou la réponse trop longue. Sur un formulaire que vous contrôlez, agrandissez le champ ; en remplissant, gardez les réponses dans l’espace visible ou utilisez la taille automatique.",
    },
    {
      title: "Réalignez les champs décalés de leurs lignes",
      body: "Des champs qui dérivent au-dessus ou en dessous de leurs intitulés signifient en général que la position des champs ne correspond pas à la page en dessous. Si c’est votre formulaire, repositionnez les champs ; sinon, ajouter du texte par-dessus peut être plus fiable que de composer avec le champ mal aligné.",
    },
    {
      title: "Aplatissez pour un résultat cohérent",
      body: "L’aplatissement fusionne les champs dans la page, fixant leur position et leur apparence. Une fois aplati, le formulaire a un aspect identique dans tous les lecteurs — le remède le plus fiable contre une mise en page qui varie.",
    },
    {
      title: "Préférez un modèle non interactif quand la cohérence est essentielle",
      body: "Si un formulaire doit avoir le même aspect pour tout le monde, un modèle non interactif bien conçu (sans couche de champs interactifs) évite entièrement les différences de rendu d’un lecteur à l’autre.",
    },
  ],
  tips: [
    "Ouvrez le formulaire dans deux applications pour confirmer qu’un problème de mise en page vient du rendu du lecteur plutôt que d’un fichier endommagé.",
    "L’aplatissement est la solution la plus fiable — il verrouille la position et l’apparence des champs dans la page pour chaque lecteur.",
    "En remplissant un formulaire avec des champs mal alignés, placer du texte par-dessus peut être plus précis que de lutter avec le champ.",
    "Si vous construisez un formulaire qui doit avoir un aspect identique partout, un modèle non interactif contourne les différences de rendu des champs.",
    "L’apparence d’un formulaire peut varier d’un lecteur PDF à l’autre par conception, donc « ça a mauvais aspect sur son écran » relève en général du rendu, pas d’une corruption.",
  ],
  mobileNote:
    "L’application PDF Editor vous permet d’aplatir un formulaire complété pour que sa mise en page soit fixée avant l’envoi, pour qu’elle ne bouge pas sur l’écran du destinataire. Pour les formulaires aux champs peu pratiques, vous pouvez aussi placer du texte avec précision sur la page et aplatir — un résultat cohérent sur n’importe quel appareil.",
  faq: [
    {
      q: "Pourquoi mon formulaire PDF a-t-il un aspect différent sur l’écran de quelqu’un d’autre ?",
      a: "Les champs de formulaire sont dessinés par chaque lecteur, donc leur position et leur apparence peuvent varier d’une application à l’autre. Aplatir le formulaire fusionne les champs dans la page pour qu’il ait un aspect identique partout.",
    },
    {
      q: "Pourquoi mes réponses débordent-elles des cases des champs ?",
      a: "Le champ est trop petit pour la réponse, ou la réponse est trop longue. Agrandissez le champ sur un formulaire que vous contrôlez, gardez les réponses dans l’espace visible, ou comptez sur la taille automatique pour les faire tenir.",
    },
    {
      q: "Comment corriger des champs décalés de leurs lignes ?",
      a: "La position des champs ne correspond pas à la page en dessous. Repositionnez les champs si c’est votre formulaire ; sinon, placer votre texte directement sur la page peut être plus fiable que le champ mal aligné.",
    },
    {
      q: "Quel est le moyen le plus fiable de garder une mise en page de formulaire cohérente ?",
      a: "Aplatissez-le. L’aplatissement fixe l’apparence des champs dans la page pour qu’elle s’affiche de la même façon dans n’importe quel lecteur. Pour les formulaires que vous construisez, un modèle non interactif évite le problème dès le départ.",
    },
    {
      q: "En quoi est-ce différent des problèmes de mise en page PDF généraux ?",
      a: "Ce guide porte sur la couche de champs — alignement, débordement, rendu du lecteur. Les problèmes de mise en page PDF généraux viennent en général des marges et de l’espacement du document source, pas de ses champs de formulaire.",
    },
  ],
  related: [
    {
      label: "Comment corriger les problèmes de mise en page PDF",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "Problèmes de police dans un formulaire PDF",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "Problèmes de compatibilité des formulaires PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Bonnes pratiques des formulaires PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
