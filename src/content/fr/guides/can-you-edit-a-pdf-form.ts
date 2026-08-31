import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Peut-on modifier un formulaire PDF ? Ce qui se change et ce qui résiste",
  description:
    "Modifier les questions d’un formulaire PDF n’a rien à voir avec le fait de le remplir. Ce qui reste modifiable, ce qui est verrouillé, et comment intervenir quand on n’a que le PDF final.",
  updated: "2026-06-01",
  intro: [
    "« Peut-on modifier un formulaire PDF ? » cache en général deux questions différentes. La première : puis-je le remplir — saisir mes réponses dans les champs ? Presque toujours oui. La seconde : puis-je changer le formulaire lui-même — reformuler une question, ajouter un champ, corriger un intitulé ? Cela dépend entièrement de la façon dont le formulaire a été créé et de son éventuel verrouillage.",
    "Remplir un formulaire est le cas courant et pose rarement problème. Modifier sa structure est plus difficile, et la possibilité d’y parvenir tient à trois éléments : le fichier contient-il du vrai texte modifiable ou s’agit-il d’une numérisation non interactive, son auteur a-t-il appliqué une sécurité qui bloque les changements, et disposez-vous d’un outil capable de modifier les champs de formulaire plutôt que de simplement les remplir.",
    "Ce guide sépare clairement les deux questions, puis détaille ce qui est réalistement possible lorsque vous ne disposez que du PDF final — limites honnêtes comprises, car certains formulaires sont volontairement construits pour résister à la modification.",
  ],
  steps: [
    {
      title: "Déterminez de quel type de modification il s’agit",
      body: "Remplir des réponses est une chose ; changer le texte, la mise en page ou les champs du formulaire en est une autre. La première est facile et attendue ; la seconde est ce que l’on entend généralement par « modifier un formulaire », et elle est bien plus contrainte.",
    },
    {
      title: "Vérifiez s’il s’agit de texte modifiable ou d’une numérisation non interactive",
      body: "Essayez de sélectionner le texte propre au formulaire. S’il se sélectionne, le contenu est réel et potentiellement modifiable. Si rien ne se sélectionne, c’est une numérisation non interactive — l’image d’un formulaire — et le modifier suppose d’abord un OCR ou de reconstruire la mise en page.",
    },
    {
      title: "Vérifiez les restrictions de sécurité",
      body: "Certains formulaires portent des autorisations qui permettent le remplissage mais bloquent la modification, voire interdisent tout changement sans mot de passe. Si un éditeur de PDF grise ses outils de modification, le fichier est probablement restreint volontairement.",
    },
    {
      title: "Utilisez un éditeur capable de gérer les formulaires pour les vrais champs",
      body: "Les outils de remplissage ne permettent que de répondre aux champs. Pour en ajouter, en déplacer, en renommer, en supprimer, ou pour changer des questions, il faut un éditeur qui expose la structure du formulaire — ce n’est pas le cas de toutes les applications.",
    },
    {
      title: "Sachez quand demander le fichier source",
      body: "Pour des changements importants, la solution la plus propre consiste souvent à demander le document modifiable d’origine (un fichier Word ou la source du formulaire) à celui qui l’a créé, plutôt que de batailler avec un PDF verrouillé.",
    },
  ],
  tips: [
    "Si vous avez seulement besoin de le compléter, inutile de modifier le formulaire — remplissez simplement les champs ou ajoutez du texte sur une copie non interactive.",
    "Modifier un formulaire numérisé signifie travailler avec une image : soit vous appliquez un OCR pour récupérer du texte, soit vous posez de nouvelles zones de texte par-dessus les anciennes.",
    "Renommer ou réorganiser des champs de formulaire relève de la vraie modification de formulaire et demande un outil conçu pour cela — les lecteurs basiques en sont incapables.",
    "Respectez les formulaires verrouillés : un paramètre de sécurité qui bloque la modification est en général un choix délibéré de son auteur, pas un bug à contourner.",
    "Conservez une copie non aplatie si vous pensez devoir réviser vos réponses plus tard ; une fois le formulaire aplati, les réponses deviennent un contenu de page figé.",
  ],
  mobileNote:
    "Sur téléphone, l’application PDF Editor vous permet de remplir n’importe quel formulaire et de modifier le contenu du document là où le fichier l’autorise. Pour les formulaires non interactifs, vous ajoutez du texte directement sur la page plutôt que de modifier des champs. Le remplissage et les modifications légères se font sur l’appareil, l’original vierge restant intact pour être réutilisé.",
  faq: [
    {
      q: "Puis-je changer les questions d’un formulaire PDF ?",
      a: "Parfois. Si le formulaire contient du vrai texte modifiable et n’est pas verrouillé, un éditeur capable de gérer les formulaires peut changer le texte et les champs. S’il s’agit d’une numérisation non interactive ou d’un fichier restreint, modifier les questions est beaucoup plus difficile, voire bloqué.",
    },
    {
      q: "Pourquoi mon éditeur ne me laisse-t-il pas modifier un formulaire ?",
      a: "Soit le fichier est une image non interactive sans texte modifiable, soit il porte des autorisations qui permettent le remplissage mais pas la modification. Les deux cas sont fréquents et généralement volontaires.",
    },
    {
      q: "Puis-je modifier mes réponses après avoir rempli un formulaire ?",
      a: "Oui, tant que vous l’avez enregistré comme formulaire interactif sans l’aplatir. Une fois aplati, les réponses fusionnent dans la page et deviennent figées.",
    },
    {
      q: "Comment modifier un formulaire numérisé sans champs ?",
      a: "Traitez-le comme une image. Appliquez un OCR pour récupérer du texte modifiable, ou placez simplement votre propre texte et vos coches par-dessus — pour le remplir, la seconde méthode suffit en général.",
    },
    {
      q: "Vaut-il mieux modifier le PDF ou récupérer le fichier d’origine ?",
      a: "Pour des changements importants, demandez le document source à son auteur si possible. Modifier un PDF final, potentiellement verrouillé, reste toujours plus limité que de travailler à partir de l’original.",
    },
  ],
  related: [
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "PDF modifiable ou PDF à remplir",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "Comment créer un PDF à remplir",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    { label: "Pourquoi je ne peux pas modifier un PDF ?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
