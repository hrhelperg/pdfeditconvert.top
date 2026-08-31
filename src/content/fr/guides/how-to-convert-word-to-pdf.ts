import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Comment convertir un Word en PDF, gratuitement et sans envoi",
  description:
    "Transformez un .docx ou un .txt en PDF propre et partageable dans votre navigateur. Pourquoi le PDF est le bon format à envoyer, et quoi vérifier avant l’export.",
  updated: "2026-05-23",
  intro: [
    "Envoyer un document Word à quelqu’un en dehors de votre propre environnement, c’est prendre un petit risque. La personne peut l’ouvrir dans une autre version de Word, dans Google Docs, ou sur un téléphone sans aucune application bureautique — et la mise en page que vous avez soigneusement construite peut se décaler, se réorganiser, ou tout simplement refuser de s’ouvrir. Convertir en PDF supprime ce risque. Un PDF a le même rendu partout et ne peut pas être modifié par accident.",
    "Ce guide explique comment transformer un fichier .docx ou .txt en PDF avec l’outil gratuit Word vers PDF, qui fonctionne dans votre navigateur sans rien envoyer. C’est le bon réflexe chaque fois qu’un document est terminé et part vers quelqu’un d’autre : un devis, une lettre de motivation, une facture, un formulaire signé, un rapport pour un client.",
    "Nous verrons aussi les quelques points à vérifier avant l’export, pour que le PDF envoyé soit bien celui que vous vouliez envoyer.",
  ],
  steps: [
    {
      title: "Terminez d’abord la modification dans Word",
      body: "Un PDF est un instantané, pas un document de travail. Effectuez toutes les modifications prévues dans Word, Google Docs ou Pages avant de convertir — corriger des fautes de frappe après l’export oblige à reconvertir.",
    },
    {
      title: "Ouvrez l’outil Word vers PDF",
      body: "Rendez-vous sur l’outil Word vers PDF dans votre navigateur. Rien à installer, aucune inscription ; la conversion se fait sur votre appareil.",
    },
    {
      title: "Ajoutez votre fichier .docx ou .txt",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le sélectionner. Les fichiers .txt bruts se convertissent aussi — pratique pour transformer des notes ou des journaux en document propre.",
    },
    {
      title: "Convertissez et téléchargez",
      body: "Cliquez sur Convertir en PDF. L’outil met en forme votre document et le PDF se télécharge automatiquement, prêt à joindre ou à envoyer.",
    },
    {
      title: "Ouvrez le PDF et relisez-le",
      body: "Ouvrez toujours le résultat avant de l’envoyer. Vérifiez que les sauts de page tombent au bon endroit, que les titres sont bien placés, et que rien n’a été coupé en marge.",
    },
    {
      title: "Renommez-le avec un nom explicite",
      body: "« Facture-Acme-2026-05.pdf » indique au destinataire de quoi il s’agit ; « Document1.pdf » non. Un nom de fichier clair aide aussi à le retrouver plus tard dans une recherche.",
    },
  ],
  tips: [
    "Restez sur des polices courantes (Calibri, Arial, Times New Roman, Inter). Les polices exotiques peuvent être remplacées pendant la conversion et décaler votre mise en page.",
    "Si votre document dépend d’un format de page précis, réglez-le dans Word avant de convertir plutôt que de compter sur l’outil pour le deviner.",
    "Convertir en PDF ne chiffre ni ne verrouille le fichier contre la copie — cela empêche juste une modification accidentelle. Pour une vraie protection, ajoutez un mot de passe séparément.",
    "Les fonctionnalités Word complexes comme les commentaires intégrés, le suivi des modifications et les macros ne font pas partie d’un PDF. Acceptez ou supprimez d’abord les modifications suivies pour qu’elles n’apparaissent pas dans le résultat.",
    "Pour un document que vous devrez encore modifier plus tard, gardez le .docx. Le PDF est la copie d’envoi, pas votre version maîtresse.",
  ],
  mobileNote:
    "Besoin d’envoyer un document terminé depuis votre téléphone ? L’application PDF Editor transforme des documents en PDF, les signe, et les partage directement depuis le menu de partage — utile quand un contrat doit repartir avant que vous ne soyez près d’un ordinateur.",
  faq: [
    {
      q: "Ma mise en forme survivra-t-elle à la conversion ?",
      a: "Pour un document ordinaire avec des polices courantes, oui — c’est tout l’intérêt du PDF. Le seul point à surveiller, ce sont les polices inhabituelles, qui peuvent être remplacées. Ouvrez le PDF et vérifiez avant d’envoyer.",
    },
    {
      q: "Puis-je aussi convertir un fichier .txt ?",
      a: "Oui. Les fichiers texte brut se convertissent en un PDF propre et lisible, une façon rapide de rendre présentables des notes, des journaux ou des données exportées.",
    },
    {
      q: "Mon document est-il envoyé quelque part ?",
      a: "Non. La conversion se fait dans votre navigateur, sur votre propre appareil, donc le fichier ne le quitte jamais. Cela compte pour les contrats, les factures et tout ce qui contient des données personnelles.",
    },
    {
      q: "Convertir en PDF protège-t-il le document ?",
      a: "Cela empêche une modification accidentelle et fige la mise en page, mais ce n’est pas du chiffrement. Pour empêcher l’ouverture ou la copie du fichier, ajoutez un mot de passe — la conversion seule n’y suffit pas.",
    },
    {
      q: "Puis-je modifier le PDF ensuite ?",
      a: "Les PDF sont faits pour des corrections et des signatures, pas pour une réécriture lourde. Pour des changements importants, modifiez le .docx original et réexportez, ou reconvertissez le PDF en Word.",
    },
  ],
  related: [
    { label: "Word vers PDF — convertir dans votre navigateur", path: "/word-to-pdf" },
    { label: "PDF vers Word — la conversion inverse", path: "/pdf-to-word" },
    { label: "Comment convertir un PDF en Word", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "Quand utiliser le PDF plutôt que le DOCX", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
