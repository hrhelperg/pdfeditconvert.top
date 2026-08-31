import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Numériser en PDF",
    h1: "Numériser en PDF — transformer un document papier en PDF net",
    highlight: "PDF net",
    lead: "Utilisez l’appareil photo de votre téléphone pour numériser reçus, pièces d’identité, contrats et documents de plusieurs pages. Détection automatique des bords, correction de perspective et OCR — en quelques secondes, sur l’appareil.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi les photos de documents prises au téléphone rendent mal",
    paragraphs: [
      "Photographier un contrat avec l’appareil photo par défaut produit un JPG cramé par l’éclairage du plafond, déformé par l’angle du téléphone, et qui montre la surface derrière la feuille. La forme est fausse, le contraste est faux, et rien n’est consultable par recherche. Quiconque le reçoit doit plisser les yeux pour le lire.",
      "Envoyez un JPG de ce genre à un comptable par e-mail, et vous recevrez une demande polie pour « un vrai PDF ». La raison est bien réelle : un JPG de reçu ne peut pas être indexé, ne passe pas par l’OCR du logiciel de comptabilité, et échoue souvent aux contrôles des systèmes d’envoi de documents.",
      "Une application de numérisation reconstruit la photo pour lui donner l’apparence qu’elle devrait avoir : rectangulaire, avec un contraste corrigé, redressée, et enregistrée en PDF avec un texte invisible en dessous. Un document de plusieurs pages devient un seul fichier, et non douze JPG éparpillés dans la pellicule.",
    ],
  },
  features: {
    heading: "Numérisez comme avec un vrai scanner",
    items: [
      {
        icon: "ScanLine",
        title: "Détection automatique des bords",
        body: "L’application repère seule les bords du document et capture dès que le cadrage est bon.",
      },
      {
        icon: "Maximize",
        title: "Correction de perspective",
        body: "Les angles déformés sont redressés. Le résultat semble avoir été photographié à la verticale, juste au-dessus.",
      },
      {
        icon: "Layers",
        title: "Numérisation multi-pages",
        body: "Capturez page après page, dans l’ordre. L’application les assemble en un seul PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (texte consultable)",
        body: "Reconnaissez les mots contenus dans les pages numérisées pour obtenir un PDF final consultable par recherche et copiable.",
      },
      {
        icon: "Sun",
        title: "Filtres intelligents",
        body: "Filtres couleur, noir et blanc ou optimisés pour les documents, pour compenser les problèmes d’éclairage.",
      },
      {
        icon: "Tag",
        title: "Nommage automatique",
        body: "L’application propose des noms de fichier selon le contenu du document — reçus, contrats, pièces d’identité.",
      },
    ],
  },
  steps: {
    heading: "Comment numériser un document en PDF",
    items: [
      {
        title: "Ouvrez le scanner",
        body: "Touchez la tuile Numériser sur l’écran d’accueil de l’application PDF Editor.",
      },
      {
        title: "Visez le document",
        body: "Tenez le téléphone à peu près au-dessus de la page. L’application repère les bords et clignote quand elle est prête.",
      },
      {
        title: "Laissez-la capturer automatiquement",
        body: "Ou touchez l’écran manuellement. La capture est instantanée.",
      },
      {
        title: "Ajustez les coins si besoin",
        body: "Affinez les bords détectés avant la correction de perspective.",
      },
      {
        title: "Ajoutez d’autres pages",
        body: "Touchez le compteur de pages pour continuer. L’application les assemble dans l’ordre.",
      },
      {
        title: "Enregistrez en PDF",
        body: "Choisissez un nom de fichier (ou acceptez la suggestion automatique) et enregistrez. L’OCR s’exécute en arrière-plan.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Numériser où que vous soyez",
    body: "Un reçu se numérise à table, un contrat en salle de réunion, une pièce d’identité au comptoir d’enregistrement de l’aéroport. L’intérêt, justement, c’est de ne pas trimballer un scanner à plat dans son sac. Un scanner de documents sur le téléphone est le substitut le plus proche et, pour les besoins courants, il est amplement suffisant.",
  },
  faq: [
    {
      q: "La qualité de numérisation vaut-elle celle d’un scanner à plat ?",
      a: "Pour les documents professionnels courants — reçus, contrats, pièces d’identité, formulaires — oui. Pour la numérisation d’archives photo ou de petits caractères sur papier glacé, un scanner à plat reste supérieur.",
    },
    {
      q: "La numérisation multi-pages est-elle fiable ?",
      a: "Très fiable. L’application continue de capturer jusqu’à ce que vous arrêtiez, et vous pouvez réorganiser ou supprimer des pages avant d’enregistrer.",
    },
    {
      q: "Quelles langues l’OCR prend-il en charge ?",
      a: "Toutes les principales langues en alphabet latin, ainsi que le cyrillique, le grec, l’arabe, le chinois, le japonais et le coréen. La qualité de la reconnaissance varie selon l’éclairage et l’état de la page.",
    },
    {
      q: "Puis-je numériser des pièces d’identité et des passeports ?",
      a: "Oui. L’application produit une numérisation nette et redressée, que vous pouvez enregistrer ou partager. Pour plus de sécurité, conservez les numérisations de pièces d’identité dans un dossier protégé ou appliquez un mot de passe au PDF obtenu.",
    },
    {
      q: "Fonctionne-t-elle hors connexion ?",
      a: "La numérisation et la détection des bords s’exécutent sur l’appareil. L’OCR pour certaines langues moins courantes peut nécessiter une connexion lors de la première utilisation, pour télécharger le modèle.",
    },
  ],
  related: [
    {
      label: "Étapes détaillées : comment numériser des documents en PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Modifier le PDF numérisé ensuite", path: "/pdf-editor" },
    {
      label: "PDF en entreprise",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Numérisez vos documents directement depuis l’appareil photo.",
    sub: "Gratuit sur iOS et Android. Les numérisations restent sur votre appareil.",
  },
};

export default content;
