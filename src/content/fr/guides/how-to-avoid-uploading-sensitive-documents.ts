import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Comment éviter de transférer des documents sensibles (les alternatives concrètes)",
  description:
    "Quand une tâche vous pousse à envoyer un PDF sensible sur un serveur, il existe presque toujours une solution locale. Les familles de tâches et l’outil sans transfert correspondant.",
  updated: "2026-05-29",
  intro: [
    "Chaque tâche PDF comporte un moment où le premier lien des résultats de recherche vous demande d’envoyer votre fichier. Compresser, fusionner, diviser, convertir, signer — chacune de ces actions s’accompagne de centaines de sites construits autour du modèle envoi-puis-traitement. Pour des fichiers ordinaires, ce n’est pas grave. Pour des fichiers sensibles (documents financiers, pièces d’identité, contrats, dossiers médicaux), c’est un risque évitable.",
    "Éviter les transferts ne veut pas dire renoncer aux outils modernes. Cela veut dire choisir des outils qui fonctionnent sur votre appareil — dans votre navigateur, dans une application mobile, sur votre ordinateur. Chaque tâche PDF courante dispose d’au moins une option entièrement locale qui fait le travail sans que le fichier ne touche jamais le serveur d’un tiers.",
    "Ce guide est le remplacement concret : les familles de tâches, l’outil local correspondant, et le petit nombre de cas où le traitement local ne couvre pas encore vraiment le besoin.",
  ],
  steps: [
    {
      title: "Pour la compression, utilisez un compresseur dans le navigateur",
      body: "Compresser le PDF, dans la boîte à outils de ce site, fonctionne en local. Il gère les fichiers riches en scans ou en photos typiques sans envoi sur serveur. Vérifiez avec les outils de développement — aucune grosse requête sortante quand vous ajoutez le fichier.",
    },
    {
      title: "Pour la fusion, utilisez un outil de fusion dans le navigateur",
      body: "Fusionner le PDF combine les fichiers en local. Le fichier combiné est réécrit vers vos téléchargements ; aucune copie ne vit sur un serveur. Même architecture que la compression — local par conception.",
    },
    {
      title: "Pour diviser et extraire, utilisez un outil de division dans le navigateur",
      body: "Diviser le PDF et Extraire des pages PDF fonctionnent sur votre appareil. Les opérations au niveau des pages sont mécaniques et se prêtent parfaitement au traitement local.",
    },
    {
      title: "Pour la conversion, utilisez un convertisseur dans le navigateur",
      body: "PDF vers Word, Word vers PDF, Image vers PDF, PDF vers images — toutes ces conversions existent en version navigateur sans envoi sur serveur. La conversion se fait dans votre onglet.",
    },
    {
      title: "Pour signer, utilisez une application de signature locale",
      body: "Signer le PDF dans le navigateur ou l’application PDF Editor sur téléphone. Signature dessinée, aucune plateforme de signature dans le cloud impliquée. Le fichier signé reste sur votre appareil jusqu’à ce que vous choisissiez de le partager.",
    },
    {
      title: "Pour les tâches qui ont vraiment besoin d’aide côté serveur, utilisez un outil payant avec des garanties explicites",
      body: "Certaines tâches (OCR lourd sur de longs documents, caviardage avancé) tirent encore parti d’un traitement côté serveur. Pour celles-ci, choisissez un outil payant avec des engagements explicites de conservation et de traitement des données — pas un outil gratuit au discours vague.",
    },
  ],
  tips: [
    "Les résultats de recherche favorisent les outils qui paient pour leur placement. Le premier résultat est rarement le plus respectueux de la confidentialité ; vérifiez ce que vous obtenez réellement.",
    "Les outils entièrement locaux fonctionnent hors connexion. Essayer l’outil hors connexion est une vérification rapide qu’il n’a pas besoin d’accès réseau pour votre fichier.",
    "Ne vous laissez pas séduire par des outils qui « ne stockent pas votre fichier » mais exigent quand même un envoi pour le traiter. La brève fenêtre de conservation reste une vraie exposition pour du contenu très sensible.",
    "Les applications mobiles qui traitent en local sont en général reconnaissables — elles fonctionnent sans Internet après l’installation. L’application PDF Editor correspond à ce schéma.",
    "Prenez l’habitude. Une fois que vous privilégiez par défaut les outils entièrement locaux, le contenu sensible reste plus sûr sans que vous ayez à y penser à chaque fois.",
  ],
  mobileNote:
    "Sur téléphone, la tentation est d’utiliser le premier outil PDF recommandé par l’App Store — dont beaucoup envoient le fichier sur un serveur. L’application PDF Editor traite tout sur l’appareil, sur iOS comme sur Android, pour qu’un document sensible puisse passer de la capture photo au livrable signé sans jamais toucher un serveur.",
  faq: [
    {
      q: "Peut-on vraiment faire toutes les tâches PDF courantes sans envoi sur serveur ?",
      a: "Oui, pour les tâches quotidiennes : compresser, fusionner, diviser, convertir, signer, mettre un filigrane, réorganiser, extraire. Les outils de ce site couvrent tout cela en local. Certaines opérations avancées (OCR complet sur de longs documents) ont parfois encore besoin d’aide côté serveur.",
    },
    {
      q: "Comment vérifier qu’un outil n’envoie rien sur un serveur ?",
      a: "Outils de développement du navigateur, onglet réseau, déposez un fichier. Si vous voyez une grosse requête POST sortante, il y a transfert. Sinon, c’est local. La différence est visible.",
    },
    {
      q: "Les outils locaux sont-ils plus lents ?",
      a: "Parfois. WebAssembly moderne rend le traitement local compétitif face au traitement serveur pour la plupart des tâches. Les opérations lourdes sur de gros fichiers peuvent prendre plus de temps en local, mais le compromis en faveur de la confidentialité en vaut généralement la peine pour du contenu sensible.",
    },
    {
      q: "Et l’OCR — peut-il tourner en local ?",
      a: "L’OCR léger, oui ; l’OCR très précis sur de longs documents utilise encore souvent un traitement côté serveur. Si l’OCR compte pour vous, choisissez des outils qui précisent explicitement où le traitement se déroule.",
    },
    {
      q: "Est-ce exagérément prudent ?",
      a: "Pas pour du contenu sensible. Le modèle par défaut où tout part sur un serveur fonctionnait quand les documents étaient moins sensibles et les violations plus rares. Les deux ont changé. Le local par défaut est aujourd’hui un socle raisonnable.",
    },
  ],
  related: [
    {
      label: "Application PDF ou outils PDF en ligne",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
    { label: "Comment protéger ses PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Comment partager un PDF en toute discrétion", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Une organisation documentaire sans aucun transfert", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
};

export default content;
