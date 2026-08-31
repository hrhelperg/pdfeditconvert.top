import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Comment modifier un PDF sur iPhone (guide 2026)",
  description:
    "Corrigez le texte, ajoutez des images et réorganisez les pages d’un PDF directement sur iPhone. Marche à suivre complète avec l’application PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Modifier un PDF sur iPhone voulait dire, il n’y a pas si longtemps, envoyer le fichier sur un site auquel on ne faisait qu’à moitié confiance, se connecter à un Mac, ou capturer d’écran le passage à corriger pour le recoller sous forme d’image. En 2026, plus besoin de rien de tout ça. Avec la bonne application native, vous modifiez le texte, remplacez des images, réorganisez les pages, remplissez des formulaires et signez des documents — le tout sur votre téléphone, en moins d’une minute.",
    "Ce guide détaille les gestes exacts avec l’application PDF Editor. Les mêmes principes s’appliquent sur iPad et sur la plupart des éditeurs PDF récents, donc les étapes restent valables si vous changez d’outil un jour. Il vous faut iOS 16 ou une version ultérieure et l’application PDF Editor installée depuis l’App Store.",
    "Nous verrons comment ouvrir un PDF depuis n’importe quelle source (Fichiers, Mail, iCloud Drive, Google Drive), modifier le contenu, puis exporter le résultat. Chaque étape indique quoi faire, pas pourquoi — mais si un geste semble délicat à l’écran, la section des astuces en fin de guide donne les solutions rapides.",
  ],
  steps: [
    {
      title: "Installez et ouvrez PDF Editor",
      body: "Téléchargez-la depuis l’App Store, puis ouvrez l’application. Aucun compte n’est nécessaire pour commencer à modifier.",
    },
    {
      title: "Importez le PDF",
      body: "Touchez le bouton + sur l’écran d’accueil. Choisissez la source — Fichiers, iCloud Drive, votre pellicule photo, ou « Parcourir » pour retrouver des dossiers Google Drive / OneDrive. Vous pouvez aussi ouvrir n’importe quel PDF depuis Mail ou Safari en choisissant « Ouvrir dans PDF Editor » depuis le menu de partage.",
    },
    {
      title: "Modifiez le texte directement",
      body: "Touchez un paragraphe ou un mot. Une sélection bleue apparaît. Modifiez le texte dans la zone qui s’affiche. L’application conserve la police, la taille et la couleur d’origine, donc la mise en page reste intacte.",
    },
    {
      title: "Remplacez ou ajoutez une image",
      body: "Touchez une image existante pour la remplacer depuis votre pellicule. Ou touchez l’outil image pour placer une nouvelle image n’importe où sur la page. Faites glisser les coins pour la redimensionner.",
    },
    {
      title: "Réorganisez, supprimez ou dupliquez des pages",
      body: "Touchez l’icône des pages pour ouvrir la grille de miniatures. Un appui long sur une page permet de la déplacer. Touchez une miniature pour la dupliquer ou la supprimer.",
    },
    {
      title: "Signez le document",
      body: "Touchez l’outil Signer, dessinez votre signature (ou utilisez-en une déjà enregistrée), puis placez-la au bon endroit. La signature est un objet PDF ordinaire : vous pouvez la déplacer ou la redimensionner après l’avoir posée.",
    },
    {
      title: "Remplissez les champs de formulaire",
      body: "Si le PDF contient des champs de formulaire, touchez chacun pour le remplir. L’application détecte automatiquement le type de champ — texte, case à cocher, liste déroulante — et affiche le clavier adapté.",
    },
    {
      title: "Enregistrez et partagez",
      body: "Touchez Terminé. Choisissez « Enregistrer » pour remplacer l’original ou « Enregistrer sous » pour garder les deux versions. Le menu de partage vous permet ensuite d’envoyer le fichier par Mail, Messages, AirDrop ou toute application installée.",
    },
  ],
  tips: [
    "Zoomez avant de modifier un texte minuscule — cela améliore nettement la précision.",
    "Touchez deux fois un mot pour ne sélectionner que ce mot ; touchez trois fois pour sélectionner toute la ligne.",
    "Utilisez l’Apple Pencil sur iPad pour des signatures nettement plus fluides qu’au doigt.",
    "Activez l’intégration Fichiers dans Réglages → PDF Editor pour que l’application apparaisse dans tous les menus de partage.",
    "Un appui long sur la flèche de retour de l’écran d’édition permet de revenir sur vos dernières modifications quand l’annulation simple ne suffit pas.",
  ],
  mobileNote:
    "L’intégration à l’app Fichiers compte : activez-la dans Réglages pour que PDF Editor apparaisse dans le menu de partage de toutes les autres applications. À partir de là, modifier un PDF reçu par Mail ou Slack ne prend qu’un geste.",
  faq: [
    {
      q: "Puis-je modifier un PDF numérisé sur iPhone ?",
      a: "Vous pouvez annoter, signer et réorganiser les pages. Pour modifier le texte lui-même sur une page numérisée, lancez d’abord l’OCR — l’application le fait en quelques secondes.",
    },
    {
      q: "L’application est-elle gratuite ?",
      a: "Oui pour l’édition courante. Certaines fonctionnalités avancées se débloquent avec la version Pro.",
    },
    {
      q: "Fonctionne-t-elle avec l’Apple Pencil ?",
      a: "Oui. Le Pencil fonctionne pour les signatures, les annotations à main levée et le surlignage, avec un rendu nettement meilleur qu’au doigt.",
    },
    {
      q: "Puis-je modifier un PDF protégé par mot de passe ?",
      a: "Saisissez le mot de passe quand il vous est demandé à l’ouverture. Une fois le fichier déverrouillé, la modification fonctionne normalement. Vous pouvez réappliquer le mot de passe à l’enregistrement.",
    },
    {
      q: "Où se retrouve le fichier modifié ?",
      a: "Là où vous choisissez de l’enregistrer : Fichiers, iCloud Drive, Google Drive, votre photothèque, ou directement dans un brouillon d’e-mail.",
    },
  ],
  related: [
    { label: "PDF Editor — présentation complète", path: "/pdf-editor" },
    {
      label: "Comment modifier un PDF sur Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Comment signer un PDF depuis son téléphone", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
