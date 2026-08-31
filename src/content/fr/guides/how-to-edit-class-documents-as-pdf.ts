import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Comment annoter et remplir ses documents de cours en PDF",
  description:
    "Polycopiés, séries d’exercices et autorisations arrivent souvent en PDF. Comment les annoter, les remplir et les renvoyer sans imprimer, depuis un téléphone ou un portable.",
  updated: "2026-05-29",
  intro: [
    "Les documents de cours arrivent aujourd’hui en PDF plus que sous n’importe quel autre format. Des polycopiés à annoter, des séries d’exercices à remplir, des autorisations à signer et à renvoyer, des programmes à consulter. La tentation, c’est de tout imprimer, de remplir à la main, puis de rescanner. Ça fonctionne, mais c’est lent et le résultat est moins soigné que de simplement éditer le PDF directement.",
    "L’édition moderne de PDF couvre bien les quatre cas : surlignage et annotation pour la lecture, remplissage de formulaire pour les exercices et les documents administratifs, signature pour les autorisations, et modifications structurelles quand il faut ajouter une page. La plupart de ces opérations se font dans un onglet de navigateur ou une application mobile, sans payer de logiciel.",
    "Ce guide détaille chaque cas — quel est le bon outil, ce qu’il fait et ne fait pas, et comment renvoyer une copie remplie et propre. Il part du principe que vous ne voulez rien imprimer si vous pouvez l’éviter.",
  ],
  steps: [
    {
      title: "Pour la lecture et l’annotation : surlignez et commentez",
      body: "La plupart des lecteurs PDF (et l’application PDF Editor) prennent en charge le surlignage, le soulignement et les commentaires en note collante. Utilisez-les pour une lecture active ; les annotations restent attachées au fichier et survivent au partage.",
    },
    {
      title: "Pour les vrais champs de formulaire : remplissez au clic",
      body: "Les PDF conçus comme formulaires ont de véritables champs interactifs. Cliquez dans chacun, tapez, passez au suivant. Le résultat est identique à un document imprimé puis tapé.",
    },
    {
      title: "Pour les PDF non interactifs (sans champs de formulaire) : ajoutez des zones de texte",
      body: "Un polycopié numérisé sans vrais champs demande de superposer des zones de texte sur les espaces vides. L’application PDF Editor le permet ; le résultat paraît plus soigné que des réponses manuscrites sur un imprimé.",
    },
    {
      title: "Pour les signatures : Signer le PDF",
      body: "Signer le PDF permet de dessiner ou de taper une signature directement sur le formulaire. Pour les autorisations et les décharges, une signature dessinée est le bon choix.",
    },
    {
      title: "Pour ajouter des pages : fusionnez",
      body: "Si votre réponse dépasse l’espace prévu par le polycopié, Fusionner le PDF permet d’ajouter des pages supplémentaires. Gardez-les dans le bon ordre ; les pages d’origine restent intactes.",
    },
    {
      title: "Enregistrez sous un nouveau fichier, pas par-dessus l’original",
      body: "Enregistrez la version remplie sous un nouveau nom (Polycopie3_Complete_NomDeFamille.pdf). L’original vierge reste intact au cas où vous devriez le refaire ou le partager avec un camarade de révision.",
    },
  ],
  tips: [
    "Testez d’abord le PDF pour voir s’il contient de vrais champs de formulaire. Si taper sur une ligne vide ouvre un curseur de saisie, c’est un vrai formulaire. Sinon, il vous faut une superposition de zones de texte.",
    "Utilisez une taille de texte cohérente pour les réponses saisies — proche de la taille du corps du texte du document si vous pouvez la déterminer.",
    "N’imprimez pas pour remplir sauf en cas de nécessité absolue. La version rescannée est toujours moins lisible que le remplissage numérique.",
    "Enregistrez avant de signer. Une signature aplatit souvent une partie du fichier ; la version d’avant signature est la copie encore modifiable.",
    "Vérifiez les formulaires remplis en exportant en PDF après coup — certains outils enregistrent l’état modifiable séparément, et le PDF exporté fige vos réponses.",
  ],
  mobileNote:
    "De nombreux documents de cours arrivent sur téléphone et doivent repartir de la même façon. L’application PDF Editor gère l’annotation, le remplissage de formulaire, la signature et la fusion sur iOS et Android, pour qu’un polycopié n’ait pas besoin d’attendre un accès à l’ordinateur pour revenir complété.",
  faq: [
    {
      q: "Peut-on éditer un PDF dans un navigateur ?",
      a: "Pour des cas limités, oui — le remplissage de formulaire et l’annotation fonctionnent dans de nombreux navigateurs. Pour les modifications de texte et les changements structurels, un vrai éditeur (dans le navigateur ou en application) fait plus.",
    },
    {
      q: "Pourquoi mon polycopié n’a-t-il pas de vrais champs de formulaire ?",
      a: "Soit l’enseignant l’a exporté sans les activer, soit le fichier est un scan. Utilisez une superposition de zones de texte sur les lignes vides.",
    },
    {
      q: "Les PDF signés sont-ils acceptés pour les documents de classe ?",
      a: "De plus en plus, oui. Certains documents à valeur légale (notamment certaines autorisations selon la juridiction) peuvent encore exiger une signature à l’encre — vérifiez les instructions du formulaire.",
    },
    {
      q: "Faut-il toujours enregistrer sous un nouveau fichier ?",
      a: "Oui pour le travail scolaire. Garder l’original vierge permet de réessayer ou de partager sans avoir à retélécharger le fichier.",
    },
    {
      q: "Comment ajouter une page à un PDF en cours de remplissage ?",
      a: "Rédigez votre contenu supplémentaire comme un PDF séparé, puis utilisez Fusionner le PDF pour le combiner. Placez la page ajoutée là où elle a logiquement sa place.",
    },
  ],
  related: [
    { label: "PDF Editor — modifier texte et images sur mobile", path: "/pdf-editor" },
    { label: "Signer le PDF — ajouter des signatures électroniques", path: "/sign-pdf" },
    { label: "Comment remplir un formulaire PDF depuis son téléphone", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Comment annoter un PDF sur mobile", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Editor — modifier texte, images et pages", path: "/pdf-editor" },
};

export default content;
