import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Comment numériser un document en PDF avec son téléphone",
  description:
    "Utilisez l’appareil photo de votre téléphone pour numériser un document de plusieurs pages en un PDF net. Détection des bords et OCR expliqués.",
  updated: "2026-05-11",
  intro: [
    "Un téléphone fait un excellent scanner de documents dès qu’on arrête d’utiliser l’appareil photo par défaut. La bonne application gère la détection des bords, la correction de perspective, l’ajustement du contraste et l’OCR — transformant une photo prise à la main en un PDF net et consultable, qui a l’air numérisé plutôt que simplement pris en photo.",
    "Ce guide détaille le circuit de numérisation de documents dans l’application PDF Editor sur iPhone ou Android. Les deux plateformes produisent des résultats équivalents. Nous verrons des cas du quotidien : reçus, formulaires signés, contrats de plusieurs pages, pièces d’identité, et les situations où numériser avec le téléphone vaut mieux que se déplacer jusqu’à un scanner à plat.",
    "À la fin, vous aurez une routine de numérisation reproductible qui fonctionne même en éclairage médiocre, qui produit des fichiers acceptés sans discussion par les comptables et les équipes juridiques, et qui garde tout sur l’appareil.",
  ],
  steps: [
    {
      title: "Ouvrez le scanner",
      body: "Touchez la tuile Numériser sur l’écran d’accueil de l’application PDF Editor. Le viseur de l’appareil photo s’ouvre avec la détection des bords activée.",
    },
    {
      title: "Posez le document sur une surface contrastée",
      body: "La détection des bords fonctionne mieux quand il y a un contraste net entre la page et la surface derrière elle. Posez le papier blanc sur une surface sombre, ou l’inverse.",
    },
    {
      title: "Visez la page avec le téléphone",
      body: "Tenez le téléphone à peu près à la verticale au-dessus du document. L’application dessine un contour bleu autour des bords détectés. Quand le contour est stable, la capture se fait automatiquement.",
    },
    {
      title: "Capture automatique ou manuelle",
      body: "L’appareil photo pulse et capture quand le cadrage est bon. Si la capture automatique manque les bords, touchez le bouton de capture manuelle. Vous pourrez toujours ajuster les coins ensuite.",
    },
    {
      title: "Ajustez les coins détectés",
      body: "Faites glisser les poignées d’angle pour affiner les bords si besoin. La correction de perspective s’applique après cette étape, produisant une page rectangulaire à partir d’une prise en angle.",
    },
    {
      title: "Appliquez un filtre",
      body: "Choisissez Couleur, Niveaux de gris, ou Noir et blanc. Pour les reçus et les formulaires, Noir et blanc réduit nettement la taille du fichier sans perte de qualité. Pour les documents avec photos ou éléments en couleur, gardez Couleur.",
    },
    {
      title: "Ajoutez d’autres pages",
      body: "Touchez le compteur de pages en bas de l’écran pour capturer des pages supplémentaires. Chaque nouvelle capture s’ajoute au PDF en cours. Réorganisez les pages depuis le bandeau de miniatures si besoin.",
    },
    {
      title: "Enregistrez le PDF",
      body: "Touchez Terminé, donnez un nom explicite au fichier, et enregistrez. L’OCR s’exécute en arrière-plan, rendant le PDF résultant consultable. Vous pouvez ensuite le partager, l’imprimer ou l’envoyer vers un espace cloud.",
    },
  ],
  tips: [
    "Un éclairage diffus et homogène vaut mieux qu’une lumière directe au-dessus — la lumière directe crée des reflets sur le papier glacé ou les formulaires plastifiés.",
    "Posez le document bien à plat. Les pages courbées (comme un livre ouvert) provoquent une distorsion du texte que la correction de perspective ne corrige pas totalement.",
    "Pour les reçus, le filtre Noir et blanc réduit en général la taille du fichier de 60 à 80 % sans perte de lisibilité.",
    "Si vous numérisez des pièces d’identité ou des passeports, enregistrez le PDF résultant dans un dossier protégé par mot de passe ou appliquez un mot de passe au PDF avant de le partager.",
    "La capture automatique fonctionne en moins d’une seconde quand le cadrage est bon. Si elle peine, l’éclairage ou le contraste est probablement en cause.",
  ],
  mobileNote:
    "Le circuit complet de numérisation et d’enregistrement prend moins de 30 secondes pour un document de plusieurs pages. Comparé à se déplacer jusqu’à un scanner à plat, télécharger un logiciel de numérisation et gérer des pièces jointes par e-mail, le téléphone l’emporte nettement pour les besoins courants d’une entreprise. Le résultat est le même PDF consultable standard, accepté par tous les outils comptables et systèmes documentaires.",
  faq: [
    {
      q: "La qualité de numérisation vaut-elle celle d’un scanner à plat ?",
      a: "Pour les documents du quotidien — reçus, contrats, pièces d’identité, formulaires — oui, avec un bon éclairage et un document bien à plat. Pour la numérisation d’archives photo ou les impressions fines sur papier glacé, un scanner à plat dédié garde l’avantage.",
    },
    {
      q: "Quelles langues l’OCR prend-il en charge ?",
      a: "Toutes les principales langues en alphabet latin (français, anglais, espagnol, allemand, italien, portugais, néerlandais, tchèque, polonais, etc.), plus le cyrillique, le grec, l’arabe, le chinois, le japonais et le coréen. La qualité de reconnaissance est la meilleure sur du texte imprimé net, et plus faible sur l’écriture manuscrite.",
    },
    {
      q: "Puis-je numériser une pièce d’identité ou un passeport ?",
      a: "Oui. L’application produit une numérisation propre et redressée, prête pour un envoi KYC ou tout dépôt de document. Appliquez un mot de passe au PDF résultant si vous l’envoyez par e-mail.",
    },
    {
      q: "La numérisation fonctionne-t-elle hors connexion ?",
      a: "Oui. La détection des bords, la correction de perspective et le filtrage s’exécutent sur l’appareil. L’OCR fonctionne localement pour les langues principales ; les langues moins courantes peuvent télécharger un modèle de reconnaissance à la première utilisation.",
    },
    {
      q: "Quelle est la taille d’un PDF numérisé ?",
      a: "Un document type de 5 pages en mode noir et blanc pèse autour de 200 à 400 Ko. La même numérisation en couleur pèse en général 1 à 2 Mo. La compression peut réduire encore ces tailles si vous devez les envoyer par e-mail.",
    },
  ],
  related: [
    { label: "Numériser en PDF — présentation complète", path: "/scan-to-pdf" },
    {
      label: "Modifier le PDF numérisé ensuite",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF pour entreprise", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Numériser en PDF", path: "/scan-to-pdf" },
};

export default content;
