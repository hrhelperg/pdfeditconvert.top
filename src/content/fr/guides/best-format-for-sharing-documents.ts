import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Quel format choisir pour partager un document (PDF, DOCX, images comparés)",
  description:
    "Quand le PDF est le bon format à envoyer, quand il ne l’est pas, et ce que valent vraiment les alternatives (DOCX, images, HTML, Markdown) dans les situations du quotidien.",
  updated: "2026-05-29",
  intro: [
    "Il n’existe pas un meilleur format unique pour partager des documents — il existe un meilleur format pour chaque type de situation de partage. Le PDF est le bon choix la plupart du temps, mais pas toujours. Le DOCX convient aux documents destinés à être modifiés. Les images conviennent aux visuels uniques. Le HTML convient au web. Le Markdown convient au texte brut légèrement structuré. Chacun excelle dans un domaine et devient maladroit ailleurs.",
    "La bonne façon de trancher, c’est de penser à ce que le destinataire va faire du fichier. Lire et classer ? PDF. Modifier ? DOCX. Consulter sur le web ? HTML. Citer dans une discussion ? Markdown. Regarder une image unique ? PNG ou JPG. Faire passer chaque partage par le PDF est pratique, mais crée de la friction quand le destinataire voulait modifier le contenu.",
    "Ce guide détaille ce choix scénario par scénario. L’objectif est d’envoyer le format que le destinataire va réellement utiliser, pas celui que vous trouvez le plus simple à produire.",
  ],
  steps: [
    {
      title: "S’il va lire et archiver, envoyez du PDF",
      body: "Mise en page verrouillée, identique sur chaque appareil, signable, archivable. Le PDF est le choix par défaut pour les documents partagés, et le bon choix la plupart du temps.",
    },
    {
      title: "S’il va modifier, envoyez du DOCX ou du Google Docs",
      body: "La vraie édition se fait en DOCX ou dans Docs. Envoyer un PDF quand le destinataire va devoir modifier le contenu l’oblige à reconvertir — il obtiendra une version approximative de ce que vous aviez envoyé.",
    },
    {
      title: "S’il va consulter sur le web, envoyez un lien ou du HTML",
      body: "Les pages web s’affichent dans les navigateurs sans téléchargement nécessaire. Pour du contenu pensé pour le web, le HTML surpasse le PDF.",
    },
    {
      title: "S’il s’agit de texte brut légèrement structuré, envoyez du Markdown",
      body: "Notes, contenu technique, documentation légère. Le Markdown se lit comme du texte dans n’importe quel contexte et s’affiche joliment là où c’est pris en charge.",
    },
    {
      title: "S’il s’agit d’une image unique, envoyez du PNG ou du JPG",
      body: "Image unique, sans texte sous-jacent, sans pages à gérer. PNG pour du net ou de la transparence, JPG pour les photos. Emballer une image unique dans un PDF est superflu.",
    },
    {
      title: "En cas de doute, optez par défaut pour le PDF",
      body: "Quand vous ne pouvez pas prévoir ce que le destinataire fera du fichier, le PDF est la solution de repli la plus sûre. Tout le monde peut le lire, il ne change pas après l’envoi, et il se convertit vers d’autres formats si besoin.",
    },
  ],
  tips: [
    "Demandez au destinataire s’il aura besoin de modifier le document. La réponse change le bon format.",
    "N’envoyez pas à la fois le PDF et le DOCX sauf si on vous le demande. Cela laisse penser que vous hésitez.",
    "Du contenu multipage dans un format autre que le PDF est généralement une erreur.",
    "Les outils internes (messagerie, wiki, plateformes documentaires) ont souvent des formats natifs qui valent mieux que le PDF dans leur contexte. N’exportez pas en PDF par réflexe pour un partage interne.",
    "En cas de doute sur le format, livrez du PDF — les destinataires peuvent convertir s’ils en ont besoin.",
  ],
  mobileNote:
    "Le téléphone reçoit désormais la plupart des documents partagés, et le PDF fonctionne particulièrement bien sur petit écran parce que sa mise en page est verrouillée. L’application PDF Editor lit, signe et partage des PDF sur iOS et Android sans surprise sur l’apparence du fichier selon l’appareil.",
  faq: [
    {
      q: "Le PDF est-il vraiment le meilleur choix par défaut ?",
      a: "Pour partager des documents finalisés, oui. Pour des brouillons de travail, le DOCX est meilleur. Pour des images uniques, le PNG ou le JPG. Choisissez selon ce que le destinataire va faire du fichier.",
    },
    {
      q: "Quand le DOCX vaut-il mieux que le PDF ?",
      a: "Quand le destinataire va modifier le document. Le PDF est difficile à modifier ; le DOCX est facile. Ne l’obligez pas à convertir.",
    },
    {
      q: "Faut-il envoyer les deux ?",
      a: "Seulement si on vous le demande explicitement. Envoyer deux formats laisse penser que vous ne savez pas lequel le destinataire préfère, et il devra choisir lui-même.",
    },
    {
      q: "Qu’en est-il des liens vers des documents cloud ?",
      a: "Utiles pour des documents collaboratifs (Docs, Sheets). Pour un partage à sens unique de documents finalisés, un téléchargement est plus simple que la gestion des permissions d’un lien.",
    },
    {
      q: "L’appareil du destinataire compte-t-il ?",
      a: "Un peu — les appareils anciens peuvent ne pas ouvrir certaines fonctionnalités récentes du DOCX. Le PDF est le format le plus universellement compatible.",
    },
  ],
  related: [
    { label: "Outils PDF — liste complète des outils dans le navigateur", path: "/pdf-tools" },
    { label: "PDF ou DOCX — comparaison des fonctionnalités", path: "/guides/pdf-vs-docx" },
    { label: "PDF ou Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF ou image pour partager un document", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
