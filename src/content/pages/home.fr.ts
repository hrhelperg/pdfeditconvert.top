import type { HomeContent } from "@/types/content";

/**
 * French homepage copy. Terminology policy: docs/localization/fr-terminology.md.
 */
export const HOME_FR: HomeContent = {
  heroEyebrow: "Outils PDF gratuits dans le navigateur",
  heroH1Before: "Convertissez, fusionnez et modifiez vos PDF ",
  heroH1Highlight: "en quelques secondes",
  heroH1After: "",
  heroLead:
    "Des outils PDF gratuits qui tournent dans votre navigateur, avec un traitement local et confidentiel — rien n'est jamais envoyé à un serveur.",
  trust: [
    "Les fichiers sont traités localement, dans votre navigateur",
    "Aucun envoi sur un serveur, aucun compte, aucun filigrane",
    "Gratuit — sur téléphone comme sur ordinateur",
  ],
  browseAllToolsLabel: "Voir tous les outils PDF →",
  toolsEyebrow: "Gratuit, dans votre navigateur",
  toolsHeading: "Tous les outils PDF dont vous avez besoin — sans rien envoyer.",
  toolsLead:
    "Fusionnez, divisez, faites pivoter, marquez et convertissez vos PDF sans quitter la page. Chaque outil fonctionne localement dans votre navigateur.",
  toolBadge: "Outil gratuit",
  tools: [
    { id: "image-to-pdf", label: "Image en PDF", desc: "Réunissez des JPG, PNG et WebP en un seul PDF." },
    { id: "merge-pdf", label: "Fusionner un PDF", desc: "Combinez plusieurs PDF en un seul document." },
    { id: "split-pdf", label: "Diviser un PDF", desc: "Séparez les pages par plage." },
    { id: "rotate-pdf", label: "Faire pivoter un PDF", desc: "Redressez les pages couchées." },
    { id: "pdf-to-images", label: "PDF en images", desc: "Exportez les pages en PNG ou JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Filigrane",
      desc: "Apposez un texte sur toutes les pages.",
    },
    {
      id: "compress-pdf",
      label: "Compresser un PDF",
      desc: "Réduisez le poids pour l'e-mail et l'envoi.",
    },
    { id: "pdf-to-word", label: "PDF en Word", desc: "Extrayez le texte vers un .docx modifiable." },
    { id: "word-to-pdf", label: "Word en PDF", desc: "Transformez un .docx ou .txt en PDF net." },
    {
      id: "reorder-pdf-pages",
      label: "Réorganiser les pages",
      desc: "Prévisualisez, réordonnez et téléchargez.",
    },
    {
      id: "extract-pdf-pages",
      label: "Extraire des pages",
      desc: "Enregistrez les pages choisies dans un nouveau PDF.",
    },
  ],
  appBandEyebrow: "Aussi sur iPhone et Android · cinq outils du quotidien",
  featureBand: [
    { key: "edit", label: "Modifier", sub: "Texte, images, pages" },
    { key: "convert", label: "Convertir", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Protéger", sub: "Mot de passe sur le fichier" },
    { key: "scan", label: "Numériser", sub: "Du papier au PDF" },
    { key: "organize", label: "Organiser", sub: "Réordonner, diviser" },
  ],
  hubsHeading: "Tout ce qu'on fait avec un PDF — expliqué.",
  hubsLead:
    "Des guides pratiques et des méthodes concrètes pour ce que les gens font vraiment avec un PDF au quotidien.",
  hubs: [
    { id: "pdf-editor", label: "Éditeur PDF", desc: "Modifiez le texte, les images et les pages." },
    {
      id: "pdf-converter",
      label: "Convertisseur PDF",
      desc: "Convertissez vers Word, JPG, PNG et plus.",
    },
    {
      id: "compress-pdf",
      label: "Compresser un PDF",
      desc: "Réduisez le fichier sans perdre en qualité.",
    },
    { id: "sign-pdf", label: "Signer un PDF", desc: "Signez directement depuis votre téléphone." },
    { id: "scan-to-pdf", label: "Numériser en PDF", desc: "Transformez le papier en PDF nets." },
    {
      id: "pdf-security",
      label: "Sécurité des PDF",
      desc: "Protégez vos documents par mot de passe.",
    },
    {
      id: "pdf-for-business",
      label: "PDF en entreprise",
      desc: "Contrats et factures, où que vous soyez.",
    },
    {
      id: "pdf-for-students",
      label: "PDF pour étudiants",
      desc: "Notes, surlignage et synthèses.",
    },
    {
      id: "pdf-forms",
      label: "Formulaires PDF",
      desc: "Remplissez, signez et enregistrez vos PDF.",
    },
  ],
  guidesHeading: "Les guides les plus lus",
  guideBadge: "Guide",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Comment modifier un PDF sur iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Comment modifier un PDF sur Android" },
    { id: "guides/how-to-compress-pdf", label: "Comment compresser un PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Comment signer un PDF sur téléphone" },
  ],
  browseAllGuidesLabel: "Voir les {count} guides PDF →",
  finalCtaHeading: "Emportez PDF Editor avec vous.",
  finalCtaSub: "Gratuit sur iOS et Android. Pas besoin de compte pour commencer.",
  faq: [
    {
      q: "PDF Editor est-il gratuit ?",
      a: "Oui. Les fonctions essentielles de modification, de numérisation, de compression et de signature sont gratuites. Certaines fonctions avancées sont réservées à PDF Editor Pro.",
    },
    {
      q: "L'application fonctionne-t-elle sans connexion internet ?",
      a: "La modification, l'organisation des pages, la signature et la compression fonctionnent hors connexion. La synchronisation avec le cloud et l'OCR peuvent nécessiter une connexion.",
    },
    {
      q: "Quels appareils sont compatibles ?",
      a: "PDF Editor est disponible sur iPhone et iPad (iOS 16 ou supérieur) ainsi que sur téléphones et tablettes Android (Android 9 ou supérieur).",
    },
    {
      q: "Mes fichiers restent-ils confidentiels ?",
      a: "Oui. Vos fichiers restent sur votre appareil, sauf si vous choisissez de les partager. Nous n'envoyons pas vos documents vers nos serveurs.",
    },
    {
      q: "Puis-je m'en servir pour des documents juridiques ?",
      a: "Beaucoup de gens signent et transmettent des contrats avec PDF Editor. Nous ne donnons pas de conseil juridique : vérifiez les règles applicables à la signature électronique avant de vous y fier pour un document important.",
    },
  ],
};
