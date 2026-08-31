import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "document-collection-workflows-with-pdf",
  h1: "Collecter des documents en PDF — une méthode qui tient",
  description:
    "Vous devez récupérer des fichiers et des formulaires signés auprès de vos clients ? Construisez une collecte reproductible : une liste, des formats homogènes et un suivi clair de ce qui manque encore.",
  updated: "2026-06-01",
  intro: [
    "Collecter des documents auprès d’autres personnes est un projet à part entière. Accueillir un client, traiter une candidature, conclure une affaire — chacune de ces étapes demande souvent un ensemble de fichiers et de formulaires signés en retour de quelqu’un d’autre, et le résultat habituel est un fil d’e-mails éparpillé où l’on ne sait jamais vraiment ce qui manque encore. Une méthode de collecte PDF reproductible remplace ce chaos par une liste et un dossier.",
    "C’est différent de la collecte des réponses d’un seul formulaire. La collecte de documents consiste à rassembler plusieurs éléments — un accord signé, une pièce d’identité, un justificatif, un questionnaire complété — auprès d’une personne, et à savoir d’un coup d’œil ce qui est arrivé et ce qui manque encore. Le PDF est le format commun naturel car tout peut en devenir un.",
    "Ce guide détaille une méthode qui s’adapte d’un seul client à plusieurs : définir la demande précisément, faciliter le retour des éléments, suivre l’exhaustivité, et assembler ce que vous avez collecté en quelque chose de bien tenu.",
  ],
  steps: [
    {
      title: "Définissez la demande sous forme de liste",
      body: "Listez exactement ce dont vous avez besoin — chaque formulaire, chaque pièce justificative — avec une description d’une ligne. Envoyez la liste avec la demande pour que l’autre personne connaisse l’ensemble dès le départ, pas au compte-gouttes.",
    },
    {
      title: "Standardisez le format de retour",
      body: "Demandez tout en PDF : formulaires aplatis, numérisations de documents en PDF plutôt que photos éparses. Un format cohérent signifie que tout se classe ensemble et se lit de la même façon.",
    },
    {
      title: "Rendez le retour des éléments réellement facile",
      body: "Orientez les gens vers une application PDF pour qu’ils puissent remplir des formulaires, numériser des documents en PDF, et envoyer un ensemble bien tenu depuis un téléphone. Plus le retour est facile, plus vite et plus complètement il revient.",
    },
    {
      title: "Suivez ce qui est arrivé et ce qui manque",
      body: "Gardez un dossier par personne et cochez la liste à mesure que les éléments arrivent. Un coup d’œil vous dit ce qui manque encore, pour que votre relance soit précise — « il manque encore l’accord signé » — pas vague.",
    },
    {
      title: "Assemblez l’ensemble complet",
      body: "Une fois que tout est arrivé, renommez de façon cohérente et fusionnez éventuellement l’ensemble en un seul PDF par personne. Vous terminez avec un dossier unique, propre et ordonné, plutôt qu’une dizaine de fichiers épars.",
    },
  ],
  tips: [
    "Envoyez la liste complète dès le départ ; les demandes fragmentées sont la principale raison pour laquelle une collecte s’éternise.",
    "Demander des PDF (formulaires aplatis, documents numérisés en PDF) garde l’ensemble reçu cohérent et facile à classer.",
    "Un dossier par personne plus une liste cochée rend les relances précises au lieu de « pouvez-vous envoyer le reste ? »",
    "Fusionner un ensemble complet en un seul PDF vous donne un dossier unique et bien tenu par personne.",
    "Les documents collectés sont souvent sensibles — réservez-les à des canaux directs ou à un espace de stockage privé, pas des outils publics d’envoi sur un serveur.",
  ],
  mobileNote:
    "Les personnes auprès de qui vous collectez peuvent faire toute leur part sur téléphone : numériser des documents en PDF, remplir et aplatir des formulaires, et envoyer l’ensemble avec l’application PDF Editor. Comme elle fonctionne sur l’appareil, les fichiers sensibles qu’elles renvoient ne transitent par aucun serveur tiers en chemin vers vous.",
  faq: [
    {
      q: "Comment collecter efficacement des documents et des formulaires auprès de clients ?",
      a: "Définissez la demande complète sous forme de liste dès le départ, demandez tout en PDF, facilitez le retour via une application PDF, suivez les arrivées par rapport à la liste, et assemblez l’ensemble complet en un seul dossier bien tenu.",
    },
    {
      q: "En quoi la collecte de documents diffère-t-elle de la collecte d’un formulaire ?",
      a: "Un seul formulaire rassemble des réponses dans un fichier. La collecte de documents rassemble plusieurs éléments — formulaires plus pièces justificatives — auprès d’une personne, l’accent est donc mis sur l’exhaustivité et le suivi de ce qui manque encore.",
    },
    {
      q: "Dans quel format les gens doivent-ils envoyer les documents ?",
      a: "En PDF de bout en bout : formulaires aplatis, documents papier numérisés en PDF plutôt que photos éparses. Cette cohérence permet à tout de se classer ensemble et de se lire de la même façon.",
    },
    {
      q: "Comment suivre ce qui manque encore ?",
      a: "Gardez un dossier par personne et une liste, en cochant les éléments à mesure qu’ils arrivent. Un coup d’œil montre ce qui manque, pour des relances précises plutôt que vagues.",
    },
    {
      q: "Comment garder confidentiels les documents collectés ?",
      a: "Utilisez des canaux directs ou un espace de stockage privé plutôt que des sites publics d’envoi sur un serveur. Les gens peuvent numériser et remplir sur l’appareil avec l’application PDF Editor pour que leurs fichiers ne soient envoyés nulle part au moment de vous les retourner.",
    },
  ],
  related: [
    {
      label: "Comment envoyer une fiche client à remplir",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Comment gérer des formulaires de candidature en PDF",
      path: "/guides/how-to-manage-pdf-application-forms",
    },
    {
      label: "Comment diffuser un formulaire PDF à faire remplir",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Comment numériser des documents en PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
