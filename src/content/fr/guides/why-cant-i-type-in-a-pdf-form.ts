import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Pourquoi je ne peux pas écrire dans ce formulaire PDF ? Causes et solutions",
  description:
    "Vous cliquez sur un champ et rien ne se passe. Les trois causes habituelles — un formulaire non interactif, le mauvais lecteur ou un fichier verrouillé — et quoi faire dans chaque cas.",
  updated: "2026-06-01",
  intro: [
    "Vous ouvrez un formulaire, cliquez à l’endroit où votre nom devrait aller, et… rien. Pas de curseur, pas de case, aucun moyen de saisir du texte. On a l’impression que le formulaire est cassé, mais ce n’est presque jamais le cas. L’impossibilité de saisir du texte se ramène à l’une de trois causes précises, chacune ayant une solution claire une fois qu’on peut la nommer.",
    "La première cause, et la plus fréquente, est que le formulaire est non interactif — il n’y a aucun champ interactif où saisir du texte, seulement l’image d’un formulaire. La deuxième est que vous l’ouvrez dans un lecteur incapable de gérer correctement les champs de formulaire. La troisième est que le formulaire est verrouillé ou en lecture seule, empêchant volontairement toute saisie. Les distinguer demande quelques vérifications rapides.",
    "Ce guide passe en revue les trois causes dans l’ordre, montre comment confirmer laquelle vous concerne, et donne pour chacune la solution pratique afin que vos réponses finissent bien sur la page.",
  ],
  steps: [
    {
      title: "Confirmez si le formulaire a réellement des champs",
      body: "Touchez plusieurs espaces vides différents. Si aucun ne produit de curseur ni de surbrillance nulle part sur la page, le formulaire est presque certainement non interactif — il n’a aucun champ où saisir du texte, que ce soit voulu ou parce qu’il a été numérisé.",
    },
    {
      title: "S’il est non interactif, ajoutez du texte par-dessus",
      body: "On ne peut pas saisir de texte dans un formulaire non interactif, mais vous pouvez placer votre propre texte et vos coches par-dessus la page avec l’outil texte d’un éditeur de PDF. C’est la façon prévue de compléter un formulaire numérisé ou sans champs.",
    },
    {
      title: "Écartez la piste du lecteur",
      body: "Certains navigateurs et aperçus légers affichent un formulaire mais ignorent ses champs. Ouvrez le même fichier dans une application PDF dédiée. Si les champs se mettent soudain à fonctionner, c’est le lecteur d’origine qui posait problème.",
    },
    {
      title: "Vérifiez si le formulaire est verrouillé ou en lecture seule",
      body: "Si des champs existent mais refusent la saisie partout, le formulaire est peut-être sécurisé ou marqué en lecture seule. Recherchez une icône de cadenas ou une mention « protégé ». Un formulaire en lecture seule bloque volontairement la saisie.",
    },
    {
      title: "Contournez un formulaire verrouillé",
      body: "Pour un formulaire en lecture seule, vous pouvez souvent encore placer du texte par-dessus comme s’il était non interactif, ou demander à l’expéditeur une version déverrouillée. N’essayez pas de contourner la sécurité d’un formulaire que vous n’êtes pas autorisé à modifier.",
    },
  ],
  tips: [
    "Le diagnostic le plus rapide : essayez le même fichier dans une vraie application PDF. Cela sépare immédiatement « formulaire non interactif » de « mauvais lecteur ».",
    "Ajouter du texte par-dessus fonctionne sur presque n’importe quel formulaire, non interactif ou verrouillé, et c’est souvent le chemin le plus rapide vers une page complétée.",
    "Un formulaire qui accepte bien la saisie sur ordinateur mais pas dans l’aperçu e-mail d’un téléphone est un problème de lecteur — ouvrez-le plutôt dans une vraie application PDF.",
    "Si seuls certains champs refusent la saisie, ces champs précis sont peut-être calculés ou verrouillés, tandis que les autres restent ouverts.",
    "L’apparence et le comportement d’un formulaire peuvent varier d’un lecteur PDF à l’autre, donc « ça ne marche pas ici » signifie rarement « c’est cassé partout ».",
  ],
  mobileNote:
    "Sur téléphone, l’application PDF Editor saisit du texte dans les champs interactifs là où ils existent et vous laisse placer du texte directement sur les formulaires non interactifs ou verrouillés là où ils n’existent pas — un formulaire qui refusait la saisie dans votre aperçu e-mail devient ainsi remplissable. Elle fonctionne sur l’appareil, sans rien envoyer sur un serveur.",
  faq: [
    {
      q: "Pourquoi ne puis-je pas saisir de texte dans mon formulaire PDF ?",
      a: "En général pour l’une de ces trois raisons : le formulaire est non interactif et n’a aucun champ, votre lecteur ne prend pas en charge les champs de formulaire, ou le formulaire est verrouillé/en lecture seule. Identifiez laquelle, puis ajoutez du texte par-dessus, changez de lecteur, ou demandez une copie déverrouillée.",
    },
    {
      q: "Comment saisir du texte dans un formulaire PDF non interactif ?",
      a: "Vous ne pouvez pas saisir dans des champs car il n’y en a aucun. Utilisez plutôt un éditeur de PDF pour placer du texte et des coches directement sur la page, à l’endroit où chaque réponse doit figurer, puis exportez le fichier.",
    },
    {
      q: "Pourquoi le formulaire fonctionne-t-il sur mon ordinateur mais pas sur mon téléphone ?",
      a: "Votre téléphone l’affiche probablement dans un aperçu qui ignore les champs de formulaire. Ouvrez le fichier dans une application PDF dédiée et les champs devraient devenir actifs.",
    },
    {
      q: "Que signifie un formulaire PDF en lecture seule ?",
      a: "C’est un formulaire que son auteur a sécurisé pour que les champs ne puissent être ni modifiés ni remplis. Vous pouvez souvent encore poser du texte par-dessus, ou demander à l’expéditeur une version qui autorise la saisie.",
    },
    {
      q: "Un formulaire peut-il n’être que partiellement remplissable ?",
      a: "Oui. Certains champs peuvent être verrouillés ou calculés automatiquement pendant que d’autres acceptent la saisie. Remplissez les champs ouverts et ajoutez du texte manuellement pour ceux que vous ne pouvez pas atteindre.",
    },
  ],
  related: [
    {
      label: "Comment remplir un formulaire PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Pourquoi mon formulaire PDF est-il en lecture seule ?",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "Les champs d’un formulaire PDF ont disparu ?",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
