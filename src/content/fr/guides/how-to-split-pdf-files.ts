import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Comment diviser un PDF en plusieurs fichiers (gratuit)",
  description:
    "Découpez un gros PDF en fichiers plus petits par plage de pages, dans votre navigateur. Quand diviser plutôt qu’extraire, et comment préserver l’original.",
  updated: "2026-05-23",
  intro: [
    "Diviser un PDF, c’est ce qu’on fait quand un seul fichier essaie d’être plusieurs documents à la fois : un lot numérisé qui est en réalité un contrat plus ses annexes, un rapport de 200 pages dont vous n’avez besoin que d’un chapitre, ou un lot fusionné qui doit repartir sous forme de fichiers individuels. Plutôt que d’envoyer le tout en demandant aux gens de retrouver leur partie, vous le divisez.",
    "Ce guide utilise l’outil gratuit Diviser un PDF, qui découpe un PDF par plage de pages directement dans votre navigateur — rien n’est envoyé. C’est une façon rapide et confidentielle de transformer un fichier unique en morceaux plus petits, exactement ceux dont vous avez besoin pour l’envoi ou le stockage.",
    "Nous éclaircirons aussi un point de confusion fréquent : la différence entre diviser un PDF et extraire des pages, car le bon outil dépend de ce que vous cherchez à obtenir au final.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Diviser un PDF",
      body: "Rendez-vous sur l’outil Diviser un PDF dans votre navigateur. Il fonctionne sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. L’outil lit le nombre de pages pour que vous puissiez diviser par plage.",
    },
    {
      title: "Déterminez où le document doit se couper",
      body: "Regardez les numéros de page et repérez les limites — par exemple, les pages 1 à 10 sont le contrat, 11 à 24 l’annexe. Planifiez les plages avant de diviser.",
    },
    {
      title: "Saisissez la plage de pages à extraire",
      body: "Indiquez la plage que vous voulez obtenir comme fichier à part. Répétez l’opération pour chaque section à isoler.",
    },
    {
      title: "Téléchargez chaque morceau",
      body: "L’outil produit un nouveau PDF pour la plage choisie. Enregistrez chacun avec un nom clair, propre à sa section.",
    },
    {
      title: "Gardez l’original intact",
      body: "Diviser ne modifie pas la source — votre PDF original reste entier sur votre appareil. Gardez-le jusqu’à avoir vérifié que chaque division est correcte.",
    },
  ],
  tips: [
    "Divisez quand vous voulez obtenir plusieurs documents séparés ; extrayez quand vous voulez rassembler quelques pages dans un seul nouveau fichier. Cela semble proche mais produit des résultats différents.",
    "Repérez les limites des sections avant de commencer. Diviser un long rapport va beaucoup plus vite quand vous savez déjà que la méthodologie commence à la page 31.",
    "Nommez chaque fichier divisé selon son contenu, pas sa plage — « Annexe-B.pdf » est plus utile pour un destinataire que « pages-25-40.pdf ».",
    "Diviser un gros PDF en amont accélère aussi les autres opérations : compresser ou convertir une section de 15 pages est plus simple que de manier le fichier complet de 300 pages.",
    "Les PDF protégés par mot de passe ne peuvent pas être traités dans le navigateur. Retirez d’abord le mot de passe, ou utilisez l’application PDF Editor, qui prend en charge les fichiers protégés.",
  ],
  mobileNote:
    "Sur téléphone, diviser sert souvent à envoyer le bon extrait à la bonne personne depuis n’importe où. L’application PDF Editor divise, extrait et partage en quelques gestes, et fonctionne hors connexion — utile quand vous êtes sur place et devez renvoyer seulement les pages signées.",
  faq: [
    {
      q: "Quelle est la différence entre diviser et extraire ?",
      a: "Diviser découpe un PDF en plusieurs fichiers séparés par plage. Extraire rassemble des pages choisies dans un seul nouveau fichier. Utilisez la division pour partager un document, l’extraction pour rassembler des pages précises.",
    },
    {
      q: "Diviser modifie-t-il mon fichier original ?",
      a: "Non. Le PDF source n’est pas touché — l’outil crée de nouveaux fichiers pour les plages choisies. Gardez l’original jusqu’à avoir vérifié les résultats.",
    },
    {
      q: "Mon PDF est-il envoyé quelque part ?",
      a: "Non. La division se fait dans votre navigateur, sur votre appareil, donc le fichier ne le quitte jamais — sûr pour des contrats et des rapports confidentiels.",
    },
    {
      q: "En combien de morceaux puis-je diviser un PDF ?",
      a: "Autant que nécessaire — répétez la sélection de plage pour chaque section. Les très gros PDF peuvent solliciter fortement la mémoire du navigateur ; dans ce cas, l’application PDF Editor est la meilleure option.",
    },
    {
      q: "Puis-je diviser un PDF protégé par mot de passe ?",
      a: "Pas dans le navigateur. Retirez d’abord le mot de passe, ou utilisez l’application mobile PDF Editor, qui peut ouvrir des fichiers protégés.",
    },
  ],
  related: [
    { label: "Diviser un PDF — découper un fichier dans votre navigateur", path: "/split-pdf" },
    { label: "Extraire des pages d’un PDF — récupérer des pages dans un nouveau fichier", path: "/extract-pdf-pages" },
    { label: "Comment extraire des pages d’un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Comment fusionner des fichiers PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Diviser un PDF", path: "/split-pdf" },
};

export default content;
