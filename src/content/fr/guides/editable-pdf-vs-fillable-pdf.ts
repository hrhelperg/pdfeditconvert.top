import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "PDF modifiable ou PDF à remplir — quelle différence ?",
  description:
    "Modifier un PDF, c’est changer son contenu ; le remplir, c’est saisir des réponses dans des champs. Pourquoi ce sont deux opérations distinctes, et laquelle vous concerne vraiment.",
  updated: "2026-06-01",
  intro: [
    "« Modifiable » et « à remplir » semblent désigner la même chose, et beaucoup emploient ces mots l’un pour l’autre — pourtant ce sont deux opérations bien distinctes. Modifier un PDF, c’est changer le document lui-même : reformuler une phrase, remplacer un logo, déplacer un paragraphe. Remplir un PDF, c’est laisser le document tel que son auteur l’a conçu et se contenter de saisir des réponses dans les emplacements prévus à cet effet. Un formulaire est fait pour être rempli, pas modifié.",
    "Cette distinction compte parce que les outils et les autorisations diffèrent. Un PDF modifiable vous permet d’altérer le contenu sous-jacent. Un PDF à remplir vous limite volontairement à ses champs de formulaire, de sorte que les questions et la mise en page restent fixes pendant que vous fournissez les réponses. Beaucoup de formulaires ne sont délibérément pas modifiables — leur auteur veut que chaque exemplaire pose les mêmes questions, au même endroit.",
    "Un troisième mot brouille encore les choses — « non interactif » — qui porte sur le fait que le texte d’un PDF soit réel ou ne soit qu’une image. Ce guide se concentre sur la distinction entre modifiable et à remplir : ce que chacun signifie, quand vous avez besoin de l’un ou de l’autre, et comment savoir ce qu’un fichier donné autorise.",
  ],
  steps: [
    {
      title: "Définissez la modification : changer le document",
      body: "Modifier un document altère le contenu créé par son auteur — texte, images, ordre des pages. Vous modifieriez un PDF pour corriger une faute de frappe dans un contrat ou mettre à jour un prix dans une brochure. Cela change ce que dit le document.",
    },
    {
      title: "Définissez le remplissage : répondre dans les champs",
      body: "Remplir un document le laisse intact et se contente d’ajouter vos réponses dans les champs ou espaces prévus. Vous remplissez un formulaire de candidature ; vous n’en réécrivez pas les questions.",
    },
    {
      title: "Vérifiez si un fichier est à remplir",
      body: "Touchez l’endroit où une réponse doit figurer. Un curseur ou une case en surbrillance signifie que le formulaire se remplit grâce à des champs interactifs. S’il n’y a aucun champ, vous pouvez tout de même ajouter du texte par-dessus — un remplissage manuel plutôt qu’intégré.",
    },
    {
      title: "Vérifiez si un fichier est modifiable",
      body: "Essayez de sélectionner une ligne du texte propre au document. Si la sélection fonctionne et qu’un éditeur de PDF vous permet de la changer, le contenu est modifiable. Les pages numérisées et les fichiers verrouillés résistent souvent à cette opération.",
    },
    {
      title: "Choisissez l’outil adapté à la tâche",
      body: "Besoin de changer ce que dit le document ? Utilisez un éditeur de PDF. Besoin de compléter un formulaire que quelqu’un vous a envoyé ? Utilisez le remplissage de formulaire — touchez les champs ou placez du texte là où les réponses doivent figurer, puis exportez.",
    },
  ],
  tips: [
    "Un fichier peut être à remplir sans être modifiable : vous pouvez répondre aux champs, mais pas changer les questions. C’est voulu pour la plupart des formulaires.",
    "Si un formulaire pose une question à laquelle vous ne pouvez pas répondre dans l’espace prévu, n’essayez pas de le modifier — ajoutez une précision là où c’est permis, ou demandez à l’expéditeur.",
    "Modifier plus tard les réponses d’un formulaire terminé reste possible si vous conservez une copie modifiable, mais les versions aplaties ou numérisées sont bien plus difficiles à changer.",
    "Quand vous êtes l’auteur, décidez d’emblée : voulez-vous que les gens le remplissent (verrouiller le contenu, ajouter des champs) ou qu’ils collaborent dessus (le garder modifiable) ?",
    "Certains PDF utilisent des paramètres de sécurité qui bloquent la modification tout en autorisant le remplissage des champs — une combinaison voulue, pas un défaut.",
  ],
  mobileNote:
    "L’application PDF Editor gère les deux tâches sur téléphone : modifiez le texte et les images d’un document quand vous devez en changer le contenu, ou touchez les champs de formulaire — et placez du texte sur les formulaires non interactifs — quand vous avez simplement besoin d’en remplir un. Elle détecte automatiquement les champs interactifs et garde tout sur l’appareil.",
  faq: [
    {
      q: "Un PDF à remplir est-il la même chose qu’un PDF modifiable ?",
      a: "Non. « À remplir » signifie que vous pouvez saisir des réponses dans des champs sans changer le document. « Modifiable » signifie que vous pouvez changer le contenu réel du document. Un formulaire est en général à remplir mais volontairement non modifiable.",
    },
    {
      q: "Un PDF peut-il être à la fois modifiable et à remplir ?",
      a: "Oui, si ses paramètres de sécurité autorisent les deux. Mais beaucoup de formulaires sont verrouillés pour que les questions et la mise en page ne puissent pas être altérées, tandis que les champs continuent d’accepter des réponses.",
    },
    {
      q: "Je ne peux pas modifier les questions d’un formulaire — est-il défectueux ?",
      a: "Presque certainement pas. Les formulaires sont couramment protégés pour que chaque exemplaire pose les mêmes questions. Vous êtes censé remplir les champs, pas réécrire le formulaire.",
    },
    {
      q: "De quoi ai-je besoin pour compléter une candidature que quelqu’un m’a envoyée ?",
      a: "Du remplissage, pas de la modification. Saisissez vos réponses dans les champs ou placez du texte sur la page s’il s’agit d’un formulaire non interactif, puis signez et exportez. Vous ne devriez pas avoir besoin de changer le formulaire lui-même.",
    },
    {
      q: "En quoi est-ce différent de « modifiable ou non éditable » ?",
      a: "« Modifiable ou non éditable » porte sur le fait que le texte d’un PDF soit réel ou ne soit qu’une image. « Modifiable ou à remplir » porte sur le fait que vous changiez le document ou que vous vous contentiez d’y répondre. Ce sont des questions liées, mais distinctes.",
    },
  ],
  related: [
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "PDF modifiable ou PDF non éditable",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "Peut-on modifier un formulaire PDF ?",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor — modifier et remplir", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
