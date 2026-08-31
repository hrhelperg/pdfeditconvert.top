import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Comment convertir un PDF en JPG — exporter les pages en images",
  description:
    "Exportez les pages d’un PDF en images JPG dans votre navigateur. Quand le JPG vaut mieux que le PNG, l’effet de l’échelle sur la qualité, et quand une image bat un PDF.",
  updated: "2026-05-23",
  intro: [
    "Parfois, un PDF n’est pas le bon contenant. Vous voulez déposer une seule page dans un message Slack où elle s’affichera en aperçu, coller un graphique dans une diapositive, ou publier une page quelque part qui n’accepte que des images. Pour tout cela, il vous faut les pages en JPG, pas un PDF.",
    "Ce guide utilise l’outil gratuit PDF vers Images, qui restitue chaque page d’un PDF sous forme d’image téléchargeable, entièrement dans votre navigateur, sans rien envoyer. Le JPG est l’un des deux formats proposés, et c’est le bon choix quand la taille du fichier compte plus qu’un texte parfaitement net.",
    "Nous verrons comment choisir l’échelle (qui contrôle la netteté), quand le JPG bat le PNG, et la limite à garder en tête : un JPG de page est une image plate, pas un document.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil PDF vers Images",
      body: "Rendez-vous sur l’outil PDF vers Images dans votre navigateur. Il restitue les pages localement sur votre appareil — pas d’envoi, pas de compte nécessaire.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez un seul PDF sur la zone de dépôt ou cliquez pour le choisir. L’outil lit toutes les pages pour pouvoir les exporter en images.",
    },
    {
      title: "Choisissez le format JPG",
      body: "Sélectionnez JPG. Il produit des fichiers plus légers que le PNG et c’est le bon choix pour les photos, les captures pleine page, et partout où la taille du fichier compte plus qu’un texte parfaitement net.",
    },
    {
      title: "Réglez l’échelle",
      body: "L’échelle contrôle le nombre de pixels utilisés pour chaque page. 2× est net sur la plupart des écrans ; passez à 1,5× pour des fichiers plus légers, ou à 3× quand vous avez besoin d’un résultat très net et que la taille importe peu.",
    },
    {
      title: "Exportez les pages",
      body: "Lancez la conversion. Chaque page se télécharge en tant que fichier JPG individuel, prêt à déposer dans un message, une présentation ou un formulaire de dépôt.",
    },
    {
      title: "Récupérez la page dont vous avez besoin",
      body: "Si vous ne vouliez qu’une page, gardez ce JPG et supprimez les autres. Pour un long PDF, le diviser d’abord réduit le nombre d’images à trier.",
    },
  ],
  tips: [
    "Choisissez le JPG quand la page contient surtout des photos ou que vous optimisez pour la taille ; choisissez le PNG quand la page est surtout composée de texte ou de traits qui doivent rester nets.",
    "Une échelle plus élevée donne des images plus nettes et des fichiers plus lourds. Le 3× n’apporte rien si l’image ne sera jamais consultée qu’en petit format.",
    "Un JPG de page n’a pas de couche de texte — les mots ne peuvent être ni recherchés, ni sélectionnés, ni copiés. Gardez le PDF original si vous aurez besoin du texte plus tard.",
    "Les très gros PDF à haute échelle peuvent saturer la mémoire du navigateur. Si l’outil peine, passez à une échelle de 1,5× ou divisez d’abord le PDF.",
    "Les PDF protégés par mot de passe ne peuvent pas être restitués dans le navigateur. Retirez d’abord le mot de passe, ou utilisez l’application PDF Editor.",
  ],
  mobileNote:
    "Sur téléphone, exporter une page en image sert souvent au partage : les aperçus d’image s’affichent en ligne dans les discussions, là où une pièce jointe PDF reste une simple icône. L’application PDF Editor restitue et exporte les pages instantanément grâce à l’accélération matérielle, puis les transmet directement au menu de partage.",
  faq: [
    {
      q: "JPG ou PNG — lequel exporter ?",
      a: "Le JPG pour des fichiers plus légers et des pages riches en photos ; le PNG quand la page est surtout composée de texte ou de schémas qui doivent rester nets. La compression du JPG adoucit les bords fins, ce qui se remarque sur le texte.",
    },
    {
      q: "Vais-je obtenir une image par page ?",
      a: "Oui. Chaque page du PDF est restituée et téléchargée sous forme de JPG séparé. Si vous n’avez besoin que d’une page, gardez ce fichier et supprimez les autres.",
    },
    {
      q: "Mon PDF est-il envoyé sur un serveur ?",
      a: "Non. La restitution se fait entièrement dans votre navigateur, donc le fichier ne quitte jamais votre appareil.",
    },
    {
      q: "Puis-je rechercher le texte dans le JPG ensuite ?",
      a: "Non. Une page convertie est une image plate sans couche de texte. Pour garder un texte consultable, conservez le PDF original.",
    },
    {
      q: "À quoi sert le réglage d’échelle ?",
      a: "Il définit le nombre de pixels d’image restitués par point du PDF. Le 2× paraît net sur la plupart des écrans ; le 3× est très net mais produit des fichiers volumineux.",
    },
  ],
  related: [
    { label: "PDF vers Images — exporter des pages dans votre navigateur", path: "/pdf-to-images" },
    { label: "Image vers PDF — l’opération inverse", path: "/image-to-pdf" },
    { label: "Comment convertir un PDF en PNG", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "Comment diviser un PDF en fichiers séparés", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
