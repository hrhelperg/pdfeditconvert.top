import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF ou JPG — quand utiliser chaque format",
  description:
    "PDF ou JPG : quand numériser, quand photographier. Qualité, taille de fichier, OCR et adéquation aux documents, comparés.",
  intro: [
    "Le JPG est un format photo. Le PDF est un format document. Malgré cette distinction simple, on envoie régulièrement des JPG de contrats et des PDF d’une seule image — des choix qui fonctionnent, sans être idéaux.",
    "Cette confusion vient du fait que le téléphone enregistre tout en JPG par défaut, de la photo de famille au reçu photographié, tandis que l’ordinateur enregistre tout ce qui est imprimable en PDF par défaut. Sans y réfléchir, on se retrouve avec des JPG de reçus dans la galerie et des PDF remplis d’images qui encombrent le dossier Téléchargements.",
    "Cette comparaison aide à choisir le bon format pour les documents réellement envoyés : reçus, pièces d’identité, contrats, captures d’écran, photos de produits, et les cas intermédiaires où la bonne réponse n’est pas évidente.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Prise en charge multi-pages", left: "oui", right: "non" },
    { feature: "Texte consultable (avec OCR)", left: "oui", right: "non" },
    { feature: "Netteté à tout niveau de zoom", left: "oui", right: "non" },
    { feature: "Fichier léger pour les photos", left: "Limité", right: "oui" },
    { feature: "Lisible partout", left: "oui", right: "oui" },
    { feature: "Protection par mot de passe", left: "oui", right: "non" },
    { feature: "Modifiable ensuite", left: "oui", right: "Limité" },
    { feature: "Idéal pour les reçus et contrats", left: "oui", right: "non" },
    { feature: "Idéal pour les photos de produit", left: "non", right: "oui" },
  ],
  whenLeft: [
    "Le contenu est un document (reçu, contrat, pièce d’identité, formulaire)",
    "Le résultat peut nécessiter plusieurs pages",
    "Vous voulez un texte consultable par recherche (OCR)",
    "Le destinataire est un comptable ou un système d’entreprise",
    "Vous devrez peut-être ajouter une signature plus tard",
  ],
  whenRight: [
    "Le contenu est une photographie",
    "La taille du fichier compte plus que la fidélité",
    "Une seule image, sans besoin de plusieurs pages",
    "Le partage se fait sur des applications de messagerie qui préfèrent les images",
    "La publication se fait sur un réseau social",
  ],
  faq: [
    {
      q: "Puis-je convertir un JPG en PDF ?",
      a: "Oui. PDF Editor (comme la plupart des outils PDF) intègre les JPG dans des PDF tout en préservant la qualité de l’image.",
    },
    {
      q: "L’OCR fonctionne-t-il sur un JPG de document ?",
      a: "Il vaut mieux d’abord convertir en PDF, puis lancer l’OCR — le résultat est alors un texte consultable par recherche à l’intérieur d’un vrai format de document.",
    },
    {
      q: "Pourquoi les comptables préfèrent-ils les PDF ?",
      a: "Leurs outils comptables indexent les PDF et ignorent les JPG. Les reçus en PDF sont classés automatiquement ; les JPG restent immobiles dans un dossier.",
    },
  ],
  related: [
    { label: "Convertisseur PDF", path: "/pdf-converter" },
    { label: "Numériser en PDF", path: "/scan-to-pdf" },
    { label: "Éditeur PDF", path: "/pdf-editor" },
  ],
};

export default content;
