import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Comment convertir des photos en PDF sur Android",
  description:
    "Réunissez vos photos Android en un seul PDF avec un outil dans le navigateur ou l’impression en PDF intégrée. Et la méthode plus rapide dans l’application, avec numérisation.",
  updated: "2026-05-23",
  intro: [
    "Android offre plusieurs façons de transformer des photos en PDF, ce qui est à la fois une bonne chose et une source de confusion — les étapes diffèrent entre Samsung, Pixel, Xiaomi et les autres. La bonne nouvelle, c’est qu’il existe une voie qui fonctionne à l’identique sur tous les téléphones Android : un outil dans le navigateur qui tourne sur votre appareil et se moque du fabricant.",
    "Ce guide couvre cette voie universelle du navigateur avec l’outil gratuit Image vers PDF, l’astuce intégrée « Imprimer en PDF » cachée dans le menu de partage, et l’application PDF Editor pour quand vous voulez photos, numérisation et signature au même endroit.",
    "Les photos Android sont en général enregistrées en JPG, ce qui vous évite en général les casse-têtes de format que rencontrent les utilisateurs d’iPhone — mais nous signalerons l’exception à connaître.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Image vers PDF dans votre navigateur",
      body: "Rendez-vous sur l’outil Image vers PDF dans Chrome ou le navigateur de votre choix. Il fonctionne sur n’importe quel téléphone Android, quelle que soit la marque, et traite les images sur votre appareil — rien n’est envoyé.",
    },
    {
      title: "Ajoutez vos photos",
      body: "Touchez pour sélectionner des photos dans votre galerie ou vos fichiers. JPG et PNG fonctionnent tous les deux ; chaque image devient une page.",
    },
    {
      title: "Ordonnez les pages",
      body: "Utilisez les flèches pour agencer les photos. Pour un document de plusieurs pages, vérifiez bien la séquence avant de créer le fichier.",
    },
    {
      title: "Créez et enregistrez le PDF",
      body: "Touchez Créer le PDF. Le fichier se télécharge sur votre téléphone ; enregistrez-le dans Fichiers ou votre espace cloud préféré, ou partagez-le directement.",
    },
    {
      title: "Alternative : utilisez Imprimer en PDF",
      body: "Ouvrez des photos dans Google Photos ou votre galerie, touchez Partager → Imprimer, puis choisissez « Enregistrer en PDF » comme imprimante. Cela regroupe les images choisies en un PDF sans aucun outil, avec toutefois moins de contrôle sur l’ordre.",
    },
    {
      title: "Ou utilisez l’application PDF Editor",
      body: "L’application combine des photos de la galerie en un PDF, numérise de nouvelles pages avec détection automatique des bords, et permet de signer — le tout hors connexion, sur l’appareil.",
    },
  ],
  tips: [
    "La voie du navigateur se comporte à l’identique sur Samsung, Pixel, Xiaomi et les autres, c’est donc celle à retenir si vous changez de téléphone ou aidez quelqu’un sur une autre marque.",
    "L’astuce Imprimer en PDF est pratique en dépannage mais laisse peu de contrôle sur l’ordre des pages — utilisez l’outil Image vers PDF quand l’ordre compte.",
    "Recadrez d’abord les photos dans votre galerie. Les pages sont dimensionnées à la taille de l’image, donc rogner donne un document plus propre.",
    "La plupart des appareils photo Android enregistrent en JPG, mais certains enregistrent en HEIF/HEIC en mode haute efficacité. Si une photo ne se charge pas, vérifiez les réglages de l’appareil photo ou utilisez l’application PDF Editor.",
    "De grandes galeries de photos en haute résolution donnent de gros PDF. Compressez le résultat avant de l’envoyer par e-mail.",
  ],
  mobileNote:
    "Le travail documentaire sur Android se fait sur le téléphone, et l’application PDF Editor le garde là : combiner des photos de la galerie, numériser du papier avec détection des bords, signer et partager — hors connexion et sans rien envoyer. Pour des tâches répétées, elle est plus rapide que le navigateur à chaque fois.",
  faq: [
    {
      q: "La méthode par navigateur fonctionne-t-elle sur tous les téléphones Android ?",
      a: "Oui. Comme l’outil tourne dans le navigateur, il se comporte de la même façon sur Samsung, Pixel, Xiaomi et tout autre appareil Android — contrairement aux fonctions intégrées qui varient selon le fabricant.",
    },
    {
      q: "Quelle est la différence entre Imprimer en PDF et l’outil ?",
      a: "Imprimer en PDF est intégré au menu de partage d’Android et ne nécessite aucun outil, mais offre peu de contrôle sur l’ordre des pages. L’outil Image vers PDF permet d’ordonner précisément les pages, ce qui compte pour les documents de plusieurs pages.",
    },
    {
      q: "Mes photos sont-elles envoyées quelque part ?",
      a: "Non. L’outil Image vers PDF et l’application PDF Editor traitent tous deux les photos sur votre appareil. Vos images restent confidentielles.",
    },
    {
      q: "Mes photos ne se chargent pas dans l’outil — pourquoi ?",
      a: "Certains téléphones Android enregistrent en HEIF/HEIC en mode haute efficacité, que les outils de navigateur peuvent ne pas lire. Passez votre appareil photo en JPG standard, ou utilisez l’application PDF Editor.",
    },
    {
      q: "Puis-je rendre le PDF consultable ?",
      a: "Une simple photo n’a pas de couche de texte. Pour obtenir un texte consultable, numérisez le document avec la reconnaissance de texte de l’application PDF Editor plutôt que de simplement le photographier.",
    },
  ],
  related: [
    { label: "Image vers PDF — convertir des photos dans votre navigateur", path: "/image-to-pdf" },
    { label: "Numériser en PDF — capturer du papier avec l’appareil photo", path: "/scan-to-pdf" },
    { label: "Comment convertir des photos en PDF sur iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "Comment convertir un JPG en PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
