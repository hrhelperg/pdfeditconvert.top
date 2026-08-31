import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Les erreurs fréquentes à éviter avec les PDF",
  description:
    "Les erreurs qui font perdre du temps ou qui exposent des informations — trop compresser, envoyer des photos, transférer un fichier sensible, oublier des pages — et comment les éviter.",
  updated: "2026-05-23",
  intro: [
    "La plupart des problèmes de PDF ne sont pas techniques — ce sont des habitudes évitables. Le fichier qui a rebondi parce que personne ne l’a compressé, la photo envoyée à la place d’un document, le contrat déposé sur un serveur inconnu, la page qui n’aurait pas dû sortir mais qui est quand même sortie. Chacune est petite, chacune est courante, et chacune est facile à arrêter dès que vous savez la repérer.",
    "Ce guide rassemble les erreurs les plus fréquentes avec les PDF, pourquoi chacune fait mal, et la correction rapide. Plusieurs corrections utilisent les outils gratuits sur l’appareil de ce site ; toutes sont plus des habitudes que des fonctionnalités.",
    "Lisez-le une fois et vous vous rattraperez avant la prochaine mésaventure évitable — ce qui, avec des documents qui voyagent vers des clients, des collègues et des institutions, vaut plus que ça n’en a l’air.",
  ],
  steps: [
    {
      title: "Envoyer une photo au lieu d’un document",
      body: "Un JPG d’une page est de travers, non consultable et pénible à imprimer ou à classer. Si c’est un document, convertissez-le d’abord en PDF avec l’outil Image en PDF, ou numérisez-le correctement — ne faites pas subir un instantané au destinataire.",
    },
    {
      title: "Envoyer des fichiers sensibles vers des outils inconnus",
      body: "Déposer un contrat ou une pièce d’identité dans le premier service « PDF en ligne gratuit » l’envoie sur le serveur d’un inconnu. Utilisez des outils sur l’appareil, dans le navigateur, pour tout ce que vous n’aimeriez pas voir lu par quelqu’un d’autre.",
    },
    {
      title: "Trop compresser par habitude",
      body: "Pousser la compression au maximum sur chaque fichier dégrade des documents qui n’en avaient pas besoin. Utilisez le niveau le plus léger qui atteint votre objectif de taille, et ne compressez pas les fichiers déjà petits.",
    },
    {
      title: "Oublier de vérifier les pages avant l’envoi",
      body: "Des notes internes, les coordonnées d’un précédent destinataire, une page de scanner vierge — tout cela peut passer inaperçu. Relisez page par page, et retirez ce qui ne doit pas sortir avec l’outil Extraire des pages PDF.",
    },
    {
      title: "Envoyer un fichier modifiable comme « final »",
      body: "Un devis ou un contrat terminé envoyé comme document Word peut être modifié — par accident ou non. Convertissez les versions finales en PDF pour que la mise en page et les chiffres soient fixés.",
    },
    {
      title: "Écraser votre seul original",
      body: "La compression, la conversion et la modification sont à sens unique pour la copie que vous gardez. Enregistrez toujours les versions modifiées sous un nouveau nom pour que l’original intact survive à une erreur.",
    },
  ],
  tips: [
    "Traitez « est-ce un document ou une image ? » comme la première question. Les documents partent en PDF ; seules les vraies photos partent en JPG.",
    "La confidentialité est une habitude, pas un réglage. Passez par défaut aux outils sur l’appareil pour les fichiers sensibles, pour ne jamais avoir à penser à être prudent.",
    "Compressez avec intention, pas par réflexe — adaptez le niveau à l’usage et ne compressez pas les fichiers déjà de taille raisonnable.",
    "Une vérification de dix secondes, page par page, avant l’envoi évite les erreurs de PDF les plus embarrassantes qui soient.",
    "Gardez les originaux. Presque toute opération sur un PDF n’est réversible que si vous n’avez pas écrasé la source.",
  ],
  mobileNote:
    "Beaucoup de ces faux pas arrivent dans la précipitation d’envoyer quelque chose depuis un téléphone. L’application PDF Editor permet de retirer une page égarée, de compresser sensément, de convertir une photo et de verrouiller une version finale — tout sur l’appareil — pour qu’un partage précipité ne se transforme pas en erreur dont il faut s’excuser.",
  faq: [
    {
      q: "Quelle est l’erreur PDF la plus courante ?",
      a: "Envoyer une photo JPG alors que le destinataire avait besoin d’un document. C’est de travers, non consultable et difficile à imprimer ou à classer. Convertir d’abord la photo en PDF règle le problème.",
    },
    {
      q: "Pourquoi est-il risqué d’envoyer des PDF vers des outils gratuits ?",
      a: "Beaucoup d’outils « en ligne » envoient votre fichier sur un serveur, donc un contrat ou une pièce d’identité vit brièvement sur une infrastructure que vous ne contrôlez pas. Les outils sur l’appareil, dans le navigateur, évitent cela complètement.",
    },
    {
      q: "Plus de compression est-elle toujours mieux ?",
      a: "Non. Trop compresser dégrade des documents qui n’en avaient pas besoin et n’apporte rien pour des fichiers déjà petits. Utilisez le niveau le plus léger qui atteint votre objectif de taille.",
    },
    {
      q: "Comment éviter d’envoyer les mauvaises pages ?",
      a: "Relisez le document page par page avant l’envoi et retirez tout ce qui ne doit pas sortir avec l’outil Extraire des pages PDF. Les notes internes et les pages égarées sont les coupables habituels.",
    },
    {
      q: "Pourquoi ne pas écraser le fichier original ?",
      a: "La compression, la conversion et les modifications sont à sens unique pour la copie que vous gardez. Enregistrer sous un nouveau nom préserve l’original, pour qu’une erreur soit facile à annuler.",
    },
  ],
  related: [
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    { label: "Comment préparer un PDF avant de le partager", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Outils PDF respectueux de la confidentialité", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF ou JPG pour un document", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
};

export default content;
