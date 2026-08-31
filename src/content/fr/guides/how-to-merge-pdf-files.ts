import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Comment fusionner des fichiers PDF sur téléphone ou ordinateur",
  description:
    "Assemblez plusieurs PDF en un seul document. Marche à suivre depuis un mobile, étape par étape, avec l’application PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Fusionner des PDF est l’une des opérations documentaires les plus courantes pour une petite entreprise ou un étudiant. Qu’il s’agisse de reçus numérisés à envoyer à un comptable, d’articles de recherche à rassembler avant une échéance, ou d’un devis à assembler avec ses pièces justificatives, envoyer un seul fichier bien ordonné vaut mieux que jongler avec cinq pièces jointes.",
    "Ce guide montre comment fusionner des PDF sur votre téléphone avec l’application PDF Editor pour iPhone ou Android. Le déroulé est identique sur les deux plateformes : importez les fichiers, faites-les glisser dans l’ordre voulu, puis exportez un seul PDF combiné. L’opération complète prend en général moins d’une minute.",
    "Si vous préférez fusionner sur ordinateur, les principes restent valables pour la plupart des outils PDF récents. Ce guide se concentre sur le mobile car c’est là que se produisent la plupart des fusions réelles — entre deux réunions, chez un client, ou en déplacement.",
  ],
  steps: [
    {
      title: "Ouvrez l’application PDF Editor",
      body: "Lancez l’application et touchez la tuile Fusionner sur l’écran d’accueil. Aucun compte n’est requis pour commencer.",
    },
    {
      title: "Ajoutez les fichiers à combiner",
      body: "Touchez le bouton +. Importez chaque PDF depuis Fichiers, iCloud Drive, Google Drive, OneDrive, ou en le partageant depuis une autre application. Vous pouvez mélanger librement les sources.",
    },
    {
      title: "Réorganisez la file",
      body: "Faites un appui long sur un élément de la file et faites-le glisser jusqu’à la bonne position. L’ordre de la file détermine l’ordre du fichier final. Vérifiez bien la séquence avant de fusionner.",
    },
    {
      title: "Faites pivoter les pages en paysage",
      body: "Si certains fichiers sources ont été numérisés de travers, touchez l’icône de rotation à côté de chaque élément concerné pour que le document fusionné se lise correctement.",
    },
    {
      title: "(Facultatif) Ajoutez une page de garde",
      body: "Touchez Ajouter une page de garde pour insérer une simple page de titre avec la date et un intitulé sur une ligne. Utile quand le document fusionné part chez un client.",
    },
    {
      title: "Touchez Fusionner",
      body: "L’application combine tous les fichiers en un seul PDF et affiche le résultat pour vérification. La fusion se fait sur l’appareil, donc même les fichiers sources protégés par mot de passe restent confidentiels.",
    },
    {
      title: "Vérifiez le fichier fusionné",
      body: "Faites défiler pour vous assurer que les pages sont dans l’ordre et l’orientation correcte. Utilisez la vue en miniatures des pages pour vérifier rapidement.",
    },
    {
      title: "Enregistrez ou partagez",
      body: "Enregistrez dans Fichiers, synchronisez avec un espace cloud, ou partagez directement par e-mail, AirDrop ou toute application de messagerie. Choisissez un nom de fichier explicite — « Contrat-avec-annexe-2026-05.pdf » vaut mieux que « Document(3).pdf » quand le fichier arrive dans la boîte de réception de quelqu’un.",
    },
  ],
  tips: [
    "Ajoutez une page de garde quand le document fusionné part vers un destinataire externe — cela donne au dossier un aspect voulu plutôt qu’improvisé.",
    "Faites pivoter les pages numérisées de travers avant la fusion plutôt qu’après — corriger l’orientation ensuite oblige à réexporter tout le fichier.",
    "Si le PDF fusionné doit être envoyé par e-mail, enchaînez avec l’outil Compresser pour rester sous les limites habituelles de 25 Mo par pièce jointe.",
    "Repérez les sections fusionnées depuis la vue Pages pour que le destinataire puisse aller directement à la partie qui l’intéresse dans un document long.",
    "Gardez les fichiers sources d’origine jusqu’à avoir confirmé que la fusion est correcte — ne supprimez jamais les originaux pendant la même session.",
  ],
  mobileNote:
    "La fusion sur mobile est particulièrement pratique quand il faut combiner des documents numérisés et des PDF déjà numériques — l’application gère les deux dans une seule file, et vous pouvez capturer une nouvelle numérisation sur place pour l’ajouter à la fusion. C’est une opération malcommode sur ordinateur et un geste unique sur téléphone.",
  faq: [
    {
      q: "Y a-t-il un nombre maximum de fichiers à fusionner ?",
      a: "Il n’y a pas de limite stricte. Les très gros lots (50 fichiers et plus) prennent plus de temps sur les téléphones anciens, mais l’application gère les fusions réelles sans problème. En cas de ralentissement, découpez le travail en deux fusions et combinez ensuite les résultats.",
    },
    {
      q: "Puis-je fusionner un document Word avec un PDF ?",
      a: "Oui, indirectement. Convertissez d’abord le document Word en PDF via la tuile Convertir, puis ajoutez le résultat à la file de fusion avec vos autres PDF.",
    },
    {
      q: "Que se passe-t-il avec les fichiers sources protégés par mot de passe ?",
      a: "Saisissez le mot de passe quand il est demandé. L’application gère le déchiffrement localement ; le fichier fusionné peut rester non protégé ou être reprotégé avec le mot de passe de votre choix.",
    },
    {
      q: "La mise en page d’origine change-t-elle après la fusion ?",
      a: "Non. Chaque page source est conservée exactement telle quelle. Seul l’ordre des pages change, dans un PDF unique qui les enveloppe.",
    },
    {
      q: "Puis-je annuler une fusion ?",
      a: "Oui. La fonction Diviser un PDF permet de décomposer n’importe quel PDF — fusionné ou d’origine — en pages ou en plages individuelles. Les originaux ne sont jamais modifiés pendant une fusion.",
    },
  ],
  related: [
    { label: "Fusionner un PDF — gratuit, dans votre navigateur", path: "/merge-pdf" },
    { label: "Diviser un PDF — extraire des pages dans votre navigateur", path: "/split-pdf" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    {
      label: "Comment compresser un PDF après la fusion",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Fusionner un PDF", path: "/merge-pdf" },
};

export default content;
