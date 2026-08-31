import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "PDF modifiable ou PDF image — la vraie différence",
  description:
    "Certains PDF contiennent du vrai texte sélectionnable et une structure modifiable ; d’autres ne sont que des images de pages sans texte dessous. Comment savoir lequel vous avez, et quand chacun convient.",
  updated: "2026-05-29",
  intro: [
    "Deux fichiers peuvent être tous les deux des PDF et se comporter de façon totalement différente. L’un vous permet de sélectionner du texte, de copier des citations, de rechercher des mots, et de modifier le contenu. L’autre a l’air identique à l’écran mais n’est essentiellement qu’une image du document — le texte fait partie de l’image, il n’en est pas distinct. Le premier est un PDF modifiable ; le second est un PDF non interactif (parfois appelé PDF numérisé ou PDF image).",
    "Savoir lequel vous avez entre les mains compte, car les outils adaptés à chacun sont différents. Les PDF modifiables réagissent bien aux éditeurs PDF, aux outils de conversion et à la recherche. Les PDF non interactifs ont besoin d’un OCR pour devenir consultables par recherche, et les modifier signifie soit passer par un OCR avant d’éditer, soit remplacer entièrement l’image. Essayer d’utiliser des outils pensés pour les PDF modifiables sur un PDF non interactif ne fait le plus souvent que générer de la frustration.",
    "Ce guide explique la différence, détaille le test qui vous renseigne en deux secondes, et montre quand chaque type est le bon choix. Parfois le non interactif est volontaire — parfois c’est un simple accident dans la façon dont le fichier a été produit.",
  ],
  steps: [
    {
      title: "Le test de deux secondes : essayez de sélectionner du texte",
      body: "Ouvrez le PDF, cliquez et faites glisser sur du texte. Si le texte se sélectionne (surligné, copiable), c’est un PDF modifiable. Si votre curseur ne fait que tracer un cadre sans surligner de texte, c’est un PDF non interactif — le « texte » est une donnée image.",
    },
    {
      title: "PDF modifiable : texte sélectionnable, consultable par recherche, copiable",
      body: "Les exports directs depuis Word, Pages, Docs ou des outils de conception produisent des PDF modifiables. Le texte est une donnée structurée à l’intérieur du fichier ; la recherche et le copier-coller fonctionnent ; les éditeurs PDF peuvent le modifier.",
    },
    {
      title: "PDF non interactif : image d’une page, sans texte sous-jacent",
      body: "Les documents numérisés sont les PDF non interactifs les plus courants. Le texte n’existe que sous forme de pixels ; il n’y a pas de données de caractères sous-jacentes. La recherche ne renvoie rien ; le copier-coller non plus.",
    },
    {
      title: "L’OCR rend le non interactif consultable (mais pas parfaitement modifiable)",
      body: "L’OCR analyse l’image de la page et ajoute une couche de texte sous les pixels. La recherche se met à fonctionner ; le copier-coller renvoie un texte approximatif. La modification exige toujours de remplacer manuellement des éléments de l’image.",
    },
    {
      title: "Quand le non interactif est volontaire : verrouillage, fidélité parfaite de l’image",
      body: "Certaines méthodes aplatissent délibérément un PDF — le fichier ne peut pas être facilement modifié, les signatures et cachets ne perturbent pas de texte sous-jacent. PDF vers images puis Image vers PDF permet de refaire cet aller-retour vers une copie non interactive.",
    },
    {
      title: "Quand le modifiable est le bon choix : dans presque tous les autres cas",
      body: "Pour le partage, la signature, la modification, l’archivage, la réutilisation — le PDF modifiable est le bon choix. N’aplatissez que si vous en avez précisément besoin.",
    },
  ],
  tips: [
    "Si vous ne pouvez pas sélectionner de texte dans un PDF que vous avez produit, les réglages d’export ont supprimé la couche de texte. Réexportez avec « conserver le texte » activé.",
    "Les PDF numérisés avec d’anciens scanners sont généralement non interactifs. Passez-les à l’OCR au moment du scan, ou avec un outil ensuite, pour les rendre utiles à long terme.",
    "Les PDF non interactifs sont plus lourds que des PDF modifiables équivalents — les données image prennent plus de place que les données de caractères.",
    "N’aplatissez pas un PDF pour le « verrouiller » — des restrictions d’édition appropriées fonctionnent mieux et préservent la possibilité de recherche.",
    "Certains PDF soi-disant « modifiables » exportent chaque caractère comme une petite forme plutôt que comme du texte. La sélection a l’air normale mais le copier-coller donne un résultat incompréhensible. C’est le pire cas pour la modification.",
  ],
  mobileNote:
    "Sur mobile, les PDF non interactifs et modifiables se ressemblent dans une visionneuse. L’application PDF Editor signale la différence en mode édition — vous pouvez voir quels fichiers ont du vrai texte et lesquels ne sont que des images, et les orienter vers l’OCR ou l’édition directe en conséquence.",
  faq: [
    {
      q: "Comment savoir en un coup d’œil quel type j’ai ?",
      a: "Essayez de sélectionner du texte. Si la sélection fonctionne et que le copier-coller donne du texte propre, c’est modifiable. Sinon, c’est non interactif.",
    },
    {
      q: "Les PDF numérisés sont-ils toujours non interactifs ?",
      a: "À la sortie du scanner, oui. Beaucoup d’applications de numérisation appliquent désormais l’OCR automatiquement et produisent un PDF non interactif mais consultable par recherche — le texte reste rendu comme une image, mais une couche consultable est ajoutée en dessous.",
    },
    {
      q: "Puis-je modifier un PDF non interactif ?",
      a: "Seulement en manipulant l’image (rotation, recadrage, ajout de texte en superposition). La vraie modification de texte exige d’abord un OCR, et même alors le résultat reste approximatif.",
    },
    {
      q: "Pourquoi voudrais-je un PDF non interactif ?",
      a: "Pour empêcher les modifications de texte, pour verrouiller des signatures et des cachets afin qu’ils ne puissent pas être déplacés, ou pour livrer un rendu fidèle à l’image près. Des cas d’usage rares mais réels.",
    },
    {
      q: "Le format du fichier détermine-t-il le type que j’obtiens ?",
      a: "Oui — les exports directs depuis un traitement de texte produisent des PDF modifiables ; les fichiers numérisés puis enregistrés produisent des PDF non interactifs. La source détermine le type.",
    },
  ],
  related: [
    { label: "PDF Editor — modifier texte et images sur mobile", path: "/pdf-editor" },
    { label: "Pourquoi je ne peux pas modifier un PDF ?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF vers Word — récupérer un texte modifiable", path: "/pdf-to-word" },
    { label: "Quand utiliser un PDF numérisé", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Editor — modifier texte, images et pages", path: "/pdf-editor" },
};

export default content;
