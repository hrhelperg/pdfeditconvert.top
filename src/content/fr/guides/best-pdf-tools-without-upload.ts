import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-without-upload",
  h1: "Les meilleurs outils PDF sans transfert (vos fichiers restent chez vous)",
  description:
    "Quand vous ne voulez pas qu’un PDF quitte votre appareil, voici les outils qui font le travail en local. Compression, fusion, conversion — sans que le fichier bouge de votre machine.",
  updated: "2026-05-29",
  intro: [
    "Il y a ce moment où vous vous apprêtez à compresser, fusionner ou convertir un PDF et où vous hésitez. Le fichier est sensible — un contrat, un relevé bancaire, une pièce d’identité numérisée — et les trois premiers résultats de recherche veulent tous que vous l’envoyiez sur leurs serveurs. Le risque paraît petit à chaque fois, mais il s’accumule sur une année de manipulation occasionnelle de documents.",
    "Les outils PDF sans transfert écartent ce risque par leur architecture même. Le traitement se fait sur votre appareil — dans votre onglet de navigateur ou dans une application mobile — et le fichier n’atteint jamais le serveur d’un tiers. La propriété de confidentialité est automatique plutôt que de dépendre d’une politique de conservation affichée.",
    "Ce guide liste la sélection sans transfert pour les tâches PDF courantes. Le parti pris va vers les outils dans le navigateur parce qu’ils fonctionnent sans rien installer ; les applications mobiles complètent quand le téléphone est le meilleur appareil pour la tâche.",
  ],
  steps: [
    {
      title: "Compresser sans transfert : Compresser le PDF dans le navigateur",
      body: "Ouvrez la page, déposez votre PDF, choisissez un niveau de compression, téléchargez. L’algorithme de compression tourne dans votre navigateur ; le fichier est lu en local, traité en mémoire, puis réécrit sous forme de nouveau téléchargement.",
    },
    {
      title: "Fusionner sans transfert : Fusionner le PDF dans le navigateur",
      body: "Déposez plusieurs PDF, glissez pour ordonner, téléchargez le fichier combiné. La fusion se fait en local — vos fichiers sont réunis dans la mémoire du navigateur, jamais envoyés à un serveur.",
    },
    {
      title: "Diviser et extraire sans transfert",
      body: "Diviser le PDF et Extraire des pages PDF gèrent les opérations au niveau des pages dans votre navigateur. Indiquez les pages, téléchargez le résultat. Utile quand vous devez n’envoyer que certaines pages précises d’un document sensible.",
    },
    {
      title: "Convertir sans transfert",
      body: "PDF vers Word, Word vers PDF, Image vers PDF, PDF vers images fonctionnent tous dans le navigateur. La conversion se fait en local ; le fichier converti est réécrit dans vos téléchargements.",
    },
    {
      title: "Signer sans transfert",
      body: "Signer le PDF ou l’application PDF Editor capture une signature sur votre appareil. Le fichier signé reste local jusqu’à ce que vous choisissiez de le partager. Aucune plateforme de signature impliquée.",
    },
    {
      title: "Vérifiez l’absence de transfert avec les outils de développement",
      body: "Ouvrez les outils de développement, l’onglet réseau, déposez un fichier. Un outil réellement sans transfert ne montre aucune grosse requête POST sortante. Si vous en voyez une, l’outil envoie le fichier malgré son étiquette.",
    },
  ],
  tips: [
    "Les outils sans transfert fonctionnent hors connexion une fois la page chargée. Testez-le — essayez l’outil wifi coupé après le chargement de la page. Un vrai outil local fonctionne quand même.",
    "Les fichiers sensibles (financiers, juridiques, médicaux) devraient par défaut passer par des outils sans transfert. La réduction du risque est réelle, même si chaque cas isolé paraît anodin.",
    "Ne faites pas confiance sans vérification aux affirmations « nous ne stockons pas votre fichier » venant d’outils qui envoient sur un serveur. L’architecture vaut mieux qu’une politique.",
    "Les applications mobiles qui traitent en local sont en général le bon choix sans transfert sur téléphone. L’application PDF Editor correspond à ce schéma sur iOS et Android.",
    "Les outils dans le navigateur sans transfert se vérifient d’eux-mêmes puisque leur traitement est visible dans les outils de développement. Utilisez ce réflexe pour évaluer de nouveaux outils.",
  ],
  mobileNote:
    "L’application PDF Editor est l’équivalent iOS/Android du modèle sans transfert dans le navigateur — tout le traitement se fait sur l’appareil, sans transfert, sans compte. Utile quand le téléphone est l’appareil naturel pour la tâche (signature, numérisation, retouches rapides).",
  faq: [
    {
      q: "Pourquoi l’absence de transfert compte-t-elle ?",
      a: "Parce que les envois créent des copies de votre fichier sur des serveurs que vous ne contrôlez pas. Même avec des politiques solides, les violations de serveur arrivent. Les outils sans transfert éliminent ce risque par construction.",
    },
    {
      q: "Les outils sans transfert peuvent-ils vraiment compresser de gros PDF ?",
      a: "Oui. Les navigateurs modernes gèrent confortablement des centaines de mégaoctets. Le traitement est assuré par WebAssembly à une vitesse proche du natif.",
    },
    {
      q: "Comment confirmer qu’un outil n’envoie rien ?",
      a: "Outils de développement du navigateur, onglet réseau, déposez un fichier. Aucune grosse requête sortante = aucun transfert. La vérification est directe et visible.",
    },
    {
      q: "Les outils sans transfert sont-ils gratuits ?",
      a: "En général, oui. L’économie des outils sans transfert diffère de celle des outils côté serveur — coût d’hébergement minime — ils peuvent donc rester gratuits sans monétiser vos données.",
    },
    {
      q: "Et si une tâche exige vraiment un envoi ?",
      a: "Certaines tâches spécialisées (OCR haute précision sur de longs fichiers) ont encore besoin d’un traitement côté serveur. Pour celles-ci, choisissez des outils payants avec des engagements explicites de conservation, et protégez d’abord le fichier par mot de passe.",
    },
  ],
  related: [
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Les meilleurs outils PDF gratuits", path: "/guides/best-free-pdf-tools" },
    { label: "Outils PDF gratuits dans le navigateur", path: "/guides/free-browser-based-pdf-tools" },
    { label: "Comment éviter de transférer des documents sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
