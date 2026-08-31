import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Outils PDF dans le navigateur ou avec envoi sur un serveur",
  description:
    "Tous les outils PDF « en ligne » ne se valent pas. La différence entre ceux qui travaillent dans votre navigateur et ceux qui transfèrent votre fichier — et comment les reconnaître.",
  updated: "2026-05-23",
  intro: [
    "Deux outils PDF peuvent sembler identiques — même page web, même zone de glisser-déposer, même bouton de téléchargement — et faire quelque chose de complètement différent avec votre fichier. L’un le traite directement dans votre navigateur, sur votre propre appareil. L’autre l’envoie vers un serveur, y effectue le travail, puis renvoie le résultat. De l’extérieur, on ne fait souvent pas la différence, mais pour tout ce qui est sensible, cette différence change tout.",
    "Ce guide explique cette distinction, pourquoi elle compte, et comment reconnaître le type d’outil que vous utilisez. Les outils de ce site sont du premier type : ils fonctionnent dans votre navigateur et votre fichier ne quitte jamais votre appareil. De nombreux services populaires de « PDF en ligne » sont du second type, même quand ce n’est pas évident.",
    "Ce n’est pas que les outils avec envoi sur un serveur soient inutiles — c’est que vous devriez savoir à qui vous confiez votre document, et choisir en connaissance de cause.",
  ],
  steps: [
    {
      title: "Sachez ce que « dans le navigateur » veut vraiment dire",
      body: "Un véritable outil dans le navigateur effectue le traitement dans la page elle-même, en utilisant le processeur de votre appareil. Votre fichier est lu localement et jamais transmis — le travail se fait là où le fichier se trouve déjà.",
    },
    {
      title: "Sachez ce que fait un outil avec envoi sur un serveur",
      body: "Un tel outil envoie votre fichier vers un serveur distant, le traite là-bas, et renvoie le résultat. Votre document vit brièvement sur l’infrastructure de quelqu’un d’autre, soumis à ses politiques de rétention et de confidentialité.",
    },
    {
      title: "Repérez les indices",
      body: "Un outil de ce type affiche généralement une barre de progression qui dépend de la vitesse de votre connexion internet, peut échouer hors ligne, et mentionne souvent des fichiers « supprimés après une heure » — une phrase qui n’a de sens que s’ils avaient d’abord votre fichier.",
    },
    {
      title: "Testez-le hors ligne",
      body: "Chargez l’outil, puis coupez votre connexion et essayez de l’utiliser. Un véritable outil dans le navigateur continue de fonctionner ; un outil qui envoie le fichier ne le peut pas, faute d’endroit où l’envoyer.",
    },
    {
      title: "Adaptez le choix au document",
      body: "Pour des fichiers publics, non sensibles, les deux types conviennent. Pour des contrats, des pièces d’identité, des relevés et du travail client, choisissez un outil dans le navigateur pour que le document ne quitte jamais votre appareil.",
    },
    {
      title: "Utilisez des outils sur l’appareil pour les tâches sensibles",
      body: "Les outils de ce site — fusionner, diviser, compresser, convertir, faire pivoter et le reste — fonctionnent dans votre navigateur. Utilisez-les quand la confidentialité compte vraiment.",
    },
  ],
  tips: [
    "« En ligne » ne dit pas si un fichier est envoyé sur un serveur. La vraie question est : où se fait le traitement — sur votre appareil, ou sur leur serveur ?",
    "Le test hors ligne est la vérification la plus fiable : un outil dans le navigateur continue de fonctionner sans connexion, un outil qui envoie le fichier ne le peut pas.",
    "« Nous supprimons vos fichiers après une heure » n’est rassurant que si vous vouliez qu’ils soient envoyés au départ. Un outil qui n’envoie jamais rien n’a rien à supprimer.",
    "La vitesse est un indice : les outils dans le navigateur n’ont pas d’attente d’envoi ni de téléchargement, donc les gros fichiers sont souvent plus rapides en local qu’en aller-retour vers un serveur.",
    "Les outils avec envoi sur un serveur ne sont pas malveillants — pour un flyer public, c’est très bien. Ne leur confiez simplement pas un contrat ou une pièce d’identité sans y réfléchir.",
  ],
  mobileNote:
    "Sur mobile, un outil qui envoie le fichier consomme aussi vos données et bloque sur une connexion faible. L’application PDF Editor traite tout sur l’appareil et fonctionne entièrement hors ligne — vous pouvez ainsi fusionner ou compresser un document sensible dans un train sans signal, sans que rien ne quitte votre téléphone.",
  faq: [
    {
      q: "Tous les outils PDF en ligne se valent-ils ?",
      a: "Non. Certains traitent votre fichier dans le navigateur, sur votre appareil ; d’autres l’envoient vers un serveur. Ils peuvent sembler identiques, la différence est donc facile à manquer — mais elle détermine si votre document quitte votre appareil.",
    },
    {
      q: "Comment savoir si un outil envoie mon fichier ?",
      a: "Essayez-le hors ligne. Un outil dans le navigateur continue de fonctionner sans connexion ; un outil qui envoie le fichier ne le peut pas, faute d’endroit où l’envoyer. Les outils avec envoi ont aussi tendance à afficher des barres de progression dépendantes du réseau.",
    },
    {
      q: "Les outils de ce site fonctionnent-ils dans le navigateur ?",
      a: "Oui. Fusionner, diviser, compresser, convertir, faire pivoter et les autres fonctionnent dans votre navigateur en utilisant le processeur de votre appareil. Vos fichiers ne sont jamais envoyés sur un serveur.",
    },
    {
      q: "Est-il parfois acceptable d’utiliser un outil qui envoie le fichier ?",
      a: "Pour des documents publics, non sensibles, oui. La prudence s’applique aux contrats, pièces d’identité, relevés financiers et travail client, où un outil dans le navigateur garde le fichier sur votre appareil.",
    },
    {
      q: "Pourquoi les outils dans le navigateur sont-ils parfois plus rapides ?",
      a: "Il n’y a pas d’attente d’envoi ni de téléchargement. Le fichier est déjà sur votre appareil, donc pour les gros documents, le traitement local bat souvent l’aller-retour vers un serveur.",
    },
  ],
  related: [
    { label: "Tous les outils PDF gratuits — dans le navigateur, sans envoi sur un serveur", path: "/pdf-tools" },
    { label: "Outils PDF respectueux de la confidentialité", path: "/guides/privacy-first-pdf-tools" },
    { label: "Applications PDF ou outils PDF en ligne", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Comment compresser un PDF en ligne sans l’envoyer sur un serveur", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
};

export default content;
