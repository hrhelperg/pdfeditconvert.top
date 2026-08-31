import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Comment modifier un PDF sur Android (guide 2026)",
  description:
    "Modifiez vos PDF sur Android : changer le texte, insérer des pages et signer un document. Instructions claires, étape par étape, avec l’application PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Android gère plutôt bien les PDF dès l’installation — mais seulement pour la lecture. Dès qu’il faut corriger une faute, remplacer une image ou réorganiser des pages, la visionneuse intégrée montre ses limites, et la solution habituelle consiste à envoyer le fichier sur un site. Il existe une option plus rapide : un éditeur natif qui tourne directement sur votre téléphone.",
    "Ce guide utilise l’application PDF Editor sur Android. Le même déroulé fonctionne sur tablette et sur les Chromebooks qui font tourner l’environnement Android. Il vous faut Android 9 ou une version ultérieure. La plupart des étapes sont identiques à celles de l’iPhone, mais le cadre d’accès au stockage (Storage Access Framework) d’Android change la façon d’importer et d’enregistrer les fichiers.",
    "Chaque étape précise où toucher l’écran, y compris les petites différences entre téléphones et tablettes. Là où Android diffère d’iOS — sélecteur de fichiers, intégration Drive, bouton retour — nous le signalons.",
  ],
  steps: [
    {
      title: "Installez PDF Editor depuis Google Play",
      body: "Recherchez « PDF Editor » et choisissez l’application publiée par hrhelperg. Installez-la, puis ouvrez-la. Aucun compte n’est requis.",
    },
    {
      title: "Ouvrez un PDF",
      body: "Touchez le bouton + sur l’écran d’accueil. La boîte de dialogue du cadre d’accès au stockage d’Android s’affiche — choisissez le PDF dans Fichiers, Google Drive, OneDrive, Dropbox ou tout autre fournisseur de cloud connecté. Vous pouvez aussi toucher un PDF dans Gmail ou une autre application et choisir PDF Editor comme application d’ouverture.",
    },
    {
      title: "Modifiez le texte",
      body: "Touchez un paragraphe. Une zone d’édition bleue apparaît. Tapez pour remplacer ou insérer du texte. L’application conserve la police et la couleur existantes, donc la mise en page ne se casse pas.",
    },
    {
      title: "Remplacez une image",
      body: "Touchez une image pour la sélectionner. Touchez l’icône d’échange et choisissez une image de remplacement dans votre galerie ou vos fichiers. Faites glisser les coins pour la redimensionner sans déformer les proportions.",
    },
    {
      title: "Insérez une nouvelle page",
      body: "Touchez l’icône des pages pour afficher les miniatures. Utilisez le bouton + entre deux miniatures pour insérer une page vierge ou importer une image comme nouvelle page.",
    },
    {
      title: "Remplissez les champs de formulaire",
      body: "Les PDF avec des champs interactifs sont mis en évidence automatiquement. Touchez un champ, tapez le texte, puis touchez Terminé. Le clavier s’adapte au type de champ (texte, nombre, date).",
    },
    {
      title: "Signez le document",
      body: "Touchez l’outil Signer, dessinez avec le doigt ou un stylet, puis placez la signature. Enregistrez-la pour une utilisation future — vous n’aurez pas à la redessiner.",
    },
    {
      title: "Enregistrez un nouveau fichier",
      body: "Touchez Terminé, puis « Enregistrer sous » pour garder à la fois l’original et la copie modifiée. Le sélecteur de fichiers d’Android permet d’enregistrer dans Fichiers, Drive ou tout autre fournisseur de cloud connecté.",
    },
  ],
  tips: [
    "Sur les grandes tablettes, activez l’écran partagé et affichez deux PDF côte à côte pour comparer rapidement.",
    "Si vous avez un S Pen, passez en mode « Stylet uniquement » dans l’édition — le rejet de la paume fonctionne bien mieux ainsi.",
    "Donnez des noms de fichiers explicites avant d’enregistrer — « Contrat-signe-2026-05-11.pdf » est bien plus utile que « Document(1).pdf » quand vous cherchez le fichier plus tard.",
    "Épinglez PDF Editor à votre menu de partage en effectuant un appui long dessus après une première utilisation — il apparaîtra en tête de liste la fois suivante.",
    "Si l’édition rame sur un appareil ancien, fermez les autres applications en arrière-plan ; le rendu des PDF profite de la mémoire vive disponible.",
  ],
  mobileNote:
    "Le cadre d’accès au stockage d’Android est la bonne façon d’ouvrir les fichiers — il accorde un accès persistant sans copier le fichier dans le stockage propre de l’application. Résultat : les modifications s’enregistrent directement dans Drive ou OneDrive, pas dans un doublon.",
  faq: [
    {
      q: "Fonctionne-t-elle sur les anciennes versions d’Android ?",
      a: "Officiellement à partir d’Android 9. Les appareils plus anciens peuvent installer l’application mais n’auront pas accès aux dernières fonctionnalités (OCR amélioré, filtres de numérisation).",
    },
    {
      q: "Puis-je ouvrir des PDF protégés par mot de passe ?",
      a: "Oui. Saisissez le mot de passe quand il est demandé. L’application garde le document chiffré pendant la modification et le rechiffre à l’enregistrement si vous le souhaitez.",
    },
    {
      q: "Qu’en est-il de l’intégration avec Google Drive ?",
      a: "Ouvrez et enregistrez directement depuis Drive via le sélecteur de fichiers du système. Les modifications enregistrées dans Drive remplacent l’original (ou créent un nouveau fichier, selon votre choix).",
    },
    {
      q: "Les modifications se synchronisent-elles avec mon ordinateur ?",
      a: "Si vous avez enregistré vers un fournisseur de cloud (Drive, OneDrive, Dropbox), le fichier modifié se synchronise automatiquement sur vos autres appareils. Les enregistrements purement locaux restent sur le téléphone.",
    },
    {
      q: "Fonctionne-t-elle hors connexion ?",
      a: "Oui. La modification se fait entièrement sur l’appareil. La synchronisation cloud n’intervient que si vous enregistrez vers un emplacement cloud.",
    },
  ],
  related: [
    { label: "PDF Editor — présentation complète", path: "/pdf-editor" },
    {
      label: "Comment modifier un PDF sur iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Comment compresser un PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
