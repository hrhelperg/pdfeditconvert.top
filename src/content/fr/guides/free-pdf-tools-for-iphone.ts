import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-pdf-tools-for-iphone",
  h1: "Outils PDF gratuits pour iPhone (navigateur et applications)",
  description:
    "Des outils PDF gratuits sur iPhone qui fonctionnent vraiment sans abonnement : compresser, signer, numériser, convertir. Les options dans le navigateur et l’application PDF Editor pour travailler hors connexion.",
  updated: "2026-05-29",
  intro: [
    "L’iPhone a un support PDF intégré correct — Fichiers les ouvre, Mail les joint, Markup peut annoter. Mais pour le vrai travail documentaire dont la plupart des gens ont besoin (compresser avant l’envoi, fusionner plusieurs pièces jointes, signer un contrat, convertir une photo en PDF), les fonctions intégrées atteignent vite leurs limites. L’App Store comble ce vide avec des centaines d’applications PDF, dont la plupart verrouillent les fonctions de base derrière des abonnements ou des limites quotidiennes.",
    "Les vrais outils PDF gratuits sur iPhone se répartissent en deux catégories : les outils dans le navigateur qui fonctionnent dans Safari sans rien installer, et les applications gratuites qui gèrent leurs fonctions essentielles sur l’appareil sans mur payant. Les deux ont leur place. Les outils du navigateur ne demandent aucune installation ; les applications natives fonctionnent hors connexion et s’intègrent à Fichiers et au menu de partage.",
    "Ce guide couvre les deux, en sélectionnant les outils vraiment gratuits pour les tâches PDF du quotidien sur iPhone. Le parti pris va vers les outils qui respectent la confidentialité en fonctionnant en local sur le téléphone.",
  ],
  steps: [
    {
      title: "Utilisez Safari pour les tâches ponctuelles dans le navigateur",
      body: "Compresser le PDF, Fusionner le PDF, Image vers PDF et le reste de la chaîne d’outils de ce site fonctionnent dans Safari sans rien installer. Le traitement se fait dans votre onglet de navigateur sur le téléphone — aucun transfert, aucun compte.",
    },
    {
      title: "Installez l’application PDF Editor pour les tâches récurrentes",
      body: "Pour les tâches que vous répétez souvent (signer, numériser, partager), une application native est plus rapide que des visites répétées dans le navigateur. L’application PDF Editor gère cela hors connexion et s’intègre au menu de partage iOS.",
    },
    {
      title: "Numérisez avec l’application PDF Editor ou l’application Fichiers intégrée",
      body: "Fichiers dispose d’une fonction basique de numérisation en PDF ; l’application PDF Editor propose une détection des bords plus poussée et une gestion multipage plus riche. Les deux sont gratuites pour la numérisation.",
    },
    {
      title: "Signez avec Markup pour les cas rapides, l’application PDF Editor pour de vraies signatures",
      body: "Markup convient pour un griffonnage rapide sur un formulaire d’une page. Pour des contrats, le flux de signature de l’application PDF Editor produit une signature plus soignée, plus adaptée aux contextes formels.",
    },
    {
      title: "Convertissez des photos en PDF avec Image vers PDF dans Safari",
      body: "Image vers PDF dans le navigateur de votre iPhone combine photos et captures d’écran en un seul PDF, y compris la gestion du HEIC. Aucune installation d’application n’est nécessaire pour cela.",
    },
    {
      title: "Compressez avant l’envoi depuis le menu de partage",
      body: "Compresser le PDF dans Safari ou l’application PDF Editor réduit les fichiers pour respecter les limites de pièces jointes des e-mails et des portails. Les scans depuis l’iPhone deviennent vite volumineux ; compresser avant l’envoi évite le rejet.",
    },
  ],
  tips: [
    "Le menu de partage de l’iPhone est le point d’intégration pour les outils PDF en application. Choisissez des outils qui apparaissent dans « Partager » pour le parcours le plus fluide.",
    "Les photos HEIC ont besoin d’être converties avant d’être partagées avec des destinataires non-Apple. L’application PDF Editor et les outils du navigateur gèrent cela de façon transparente.",
    "Ne signez rien d’important avec Markup si vous l’envoyez à l’extérieur — la signature paraît informelle. Utilisez un vrai outil de signature pour les contrats.",
    "Les outils du navigateur fonctionnent dans Safari mais aussi dans Chrome et Firefox sur iPhone si vous préférez. L’architecture est la même.",
    "Synchronisez le dossier /Fichiers/ avec iCloud si vous manipulez des PDF sur plusieurs appareils. L’application PDF Editor enregistre d’abord en local ; vous décidez si ces fichiers se synchronisent.",
  ],
  mobileNote:
    "L’application PDF Editor est le complément recommandé aux outils du navigateur sur iPhone — elle couvre les cas hors connexion et intégrés au menu de partage que les outils purement navigateur ne couvrent pas. Gratuite pour les tâches essentielles, sans compte requis.",
  faq: [
    {
      q: "Les outils PDF intégrés à l’iPhone suffisent-ils ?",
      a: "Pour la lecture et l’annotation basique, oui. Pour la compression, la fusion, la vraie signature et la conversion, il vous faudra des outils supplémentaires — dans le navigateur ou en application.",
    },
    {
      q: "Les applications PDF gratuites sur iPhone restent-elles vraiment gratuites ?",
      a: "Certaines oui, d’autres non. L’application PDF Editor gère ses fonctions essentielles gratuitement. Beaucoup d’applications PDF de l’App Store verrouillent les fonctions de base derrière des abonnements.",
    },
    {
      q: "Devrais-je signer des contrats sur iPhone ?",
      a: "Oui, c’est de plus en plus courant. Les signatures dessinées du doigt sont assez lisibles pour paraître soignées. Utilisez un vrai outil de signature, pas Markup, pour les contrats.",
    },
    {
      q: "Puis-je numériser depuis l’iPhone plutôt qu’avec un scanner à plat ?",
      a: "Pour des documents ordinaires, oui. Le flux de numérisation par appareil photo de PDF Editor ou de l’application Fichiers intégrée produit des résultats comparables à un scanner à plat pour la qualité de document habituelle.",
    },
    {
      q: "Et le HEIC ?",
      a: "Le HEIC est le format par défaut de l’iPhone et n’est pas universellement pris en charge ailleurs. Convertissez en JPG ou en PDF avant de partager avec des destinataires non-Apple.",
    },
  ],
  related: [
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Les meilleurs outils PDF gratuits", path: "/guides/best-free-pdf-tools" },
    { label: "Outils PDF gratuits pour Android", path: "/guides/free-pdf-tools-for-android" },
    { label: "Comment réduire un PDF sur iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
