import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Comment extraire des pages d’un PDF (gratuit, sans envoi)",
  description:
    "Sortez des pages ou des plages précises d’un PDF dans un nouveau fichier, depuis votre navigateur. Parfait pour n’envoyer que les pages attendues.",
  updated: "2026-05-23",
  intro: [
    "Extraire des pages répond à un besoin très précis : quelqu’un veut une partie d’un document, pas le tout. La banque a besoin de la page 3, le formulaire ne réclame que la page de signature, la relecture d’une proposition ne concerne que la section tarifaire. Transférer tout le fichier de 40 pages en disant « voir page 12 » relève de la paresse et, pour tout ce qui est sensible, de la négligence.",
    "Ce guide utilise l’outil gratuit Extraire des pages PDF, qui permet de choisir les pages voulues et de les enregistrer comme tout nouveau PDF — le tout dans votre navigateur, sans rien envoyer. L’original reste intact ; vous obtenez juste un fichier propre ne contenant que ce que vous avez choisi.",
    "C’est l’une des opérations PDF les plus utiles, précisément parce qu’elle sert aussi d’outil de confidentialité : vous envoyez exactement les pages requises, et rien d’autre.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Extraire des pages PDF",
      body: "Rendez-vous sur l’outil Extraire des pages PDF dans votre navigateur. Il fonctionne entièrement sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le sélectionner. L’outil charge le nombre de pages pour que vous puissiez choisir précisément.",
    },
    {
      title: "Choisissez les pages voulues",
      body: "Saisissez des pages individuelles ou des plages — par exemple 3, puis 8-10. Seules les pages listées se retrouvent dans le nouveau fichier.",
    },
    {
      title: "Créez le nouveau PDF",
      body: "Lancez l’extraction. L’outil construit un PDF neuf contenant uniquement les pages sélectionnées, dans l’ordre choisi.",
    },
    {
      title: "Téléchargez et nommez-le",
      body: "Enregistrez le fichier extrait avec un nom qui dit ce qu’il contient — « Page-de-signature.pdf » ou « Section-tarifaire.pdf ».",
    },
    {
      title: "Vérifiez avant d’envoyer",
      body: "Ouvrez le nouveau PDF et vérifiez qu’il ne contient que les pages prévues. C’est le moment de repérer un décalage d’une page avant qu’il n’arrive chez quelqu’un.",
    },
  ],
  tips: [
    "Extrayez quand vous voulez rassembler quelques pages dans un nouveau fichier ; divisez quand vous voulez découper un document en plusieurs fichiers. Adaptez l’outil à l’objectif.",
    "Extraire est un gain discret pour la confidentialité : n’envoyer que les pages pertinentes évite toute exposition accidentelle du reste du document.",
    "Vérifiez les numéros de page par rapport au document lui-même, pas à l’index de la visionneuse PDF — les pages de garde et les insertions peuvent décaler le compte d’une unité.",
    "L’original n’est jamais modifié, vous pouvez donc extraire différents jeux de pages du même fichier autant de fois que nécessaire.",
    "Pour retirer des pages et garder le reste, extrayez les pages que vous voulez conserver — c’est la façon la plus propre de se débarrasser de quelques pages indésirables.",
  ],
  mobileNote:
    "Besoin de renvoyer juste la page signée depuis votre téléphone ? L’application PDF Editor extrait et partage des pages précises en quelques gestes, hors connexion — pour que la bonne page parte sans transférer tout le fichier confidentiel.",
  faq: [
    {
      q: "En quoi extraire diffère-t-il de diviser ?",
      a: "Extraire rassemble les pages choisies dans un seul nouveau fichier. Diviser découpe un PDF en plusieurs fichiers séparés. Utilisez l’extraction pour rassembler des pages précises, la division pour partager un document.",
    },
    {
      q: "Puis-je choisir des pages non consécutives ?",
      a: "Oui. Listez des pages individuelles et des plages ensemble, comme 1, 4, 9-12, et le nouveau PDF contient exactement ces pages, dans cet ordre.",
    },
    {
      q: "Extraire modifie-t-il l’original ?",
      a: "Non. Le PDF source reste intact ; l’outil crée un nouveau fichier. Vous pouvez lancer autant d’extractions que vous voulez à partir du même original.",
    },
    {
      q: "Mon fichier est-il envoyé quelque part ?",
      a: "Non. L’extraction se fait dans votre navigateur, sur votre appareil, donc les documents confidentiels restent privés.",
    },
    {
      q: "Comment retirer des pages plutôt que les garder ?",
      a: "Extrayez les pages que vous voulez conserver — les pages indésirables sont simplement exclues. C’est la voie la plus simple pour se débarrasser de quelques pages d’un PDF.",
    },
  ],
  related: [
    { label: "Extraire des pages PDF — récupérer des pages dans votre navigateur", path: "/extract-pdf-pages" },
    { label: "Diviser un PDF — découper un fichier par plage", path: "/split-pdf" },
    { label: "Comment diviser un PDF en plusieurs fichiers", path: "/guides/how-to-split-pdf-files" },
    { label: "Comment supprimer les pages inutiles d’un PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Extraire des pages PDF", path: "/extract-pdf-pages" },
};

export default content;
