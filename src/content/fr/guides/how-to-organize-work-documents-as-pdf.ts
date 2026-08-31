import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Comment organiser ses documents professionnels en PDF (dossiers, noms, versions)",
  description:
    "Une convention de nommage et de classement pour les PDF de travail — devis, briefs, livrables, archives — qui évite le chaos des versions et permet à chacun de retrouver n’importe quoi.",
  updated: "2026-05-29",
  intro: [
    "Le problème avec les PDF professionnels, ce n’est généralement pas les PDF eux-mêmes. C’est la trace : trente fichiers aux noms proches dans un dossier de téléchargements, des versions qui ne correspondent plus, des versions « finales » qui ne le sont pas, des brouillons identiques aux livrables. Le format va bien ; c’est la convention autour du format qui s’effondre.",
    "Une convention qui fonctionne est courte — une structure de dossiers, un modèle de nommage, et une habitude sur l’endroit où vont les versions finales. Une fois en place, retrouver « le contrat qu’on a envoyé en mars » prend dix secondes plutôt que dix minutes, et les conflits de version cessent en grande partie.",
    "Ce guide décrit la convention que nous avons vu de petites équipes adopter et garder. Ce n’est pas la seule convention qui fonctionne ; c’est une convention assez robuste pour survivre à un trimestre chargé sans s’effondrer.",
  ],
  steps: [
    {
      title: "Choisissez une organisation de dossiers de premier niveau, une fois pour toutes",
      body: "Clients/NomContrat/, Interne/, Modèles/, Archive/. Quatre dossiers couvrent l’essentiel. Ne descendez pas au-delà de deux niveaux au départ — la profondeur fait perdre le fil.",
    },
    {
      title: "Standardisez le modèle de nom de fichier",
      body: "NomClient_TypeDoc_vN_AAAA-MM-JJ.pdf se lit proprement dans n’importe quel explorateur de fichiers. La date en dernier pour que les fichiers se trient chronologiquement ; le numéro de version en ligne pour repérer la dernière version d’un coup d’œil.",
    },
    {
      title: "Séparez /brouillons et /final dans chaque projet",
      body: "Les brouillons vont dans le sous-dossier /brouillons du projet ; les versions finales sont renommées FINAL et déplacées vers /final ou /livrables. Le dossier /final ne devrait contenir que des versions livrées.",
    },
    {
      title: "Utilisez Fusionner un PDF pour consolider à la livraison",
      body: "Quand un livrable est en réalité trois PDF (proposition + conditions + tarification), fusionnez-les en un seul pour la livraison et gardez les fichiers source dans le dossier du projet. Le destinataire obtient un fichier propre.",
    },
    {
      title: "Compressez et renommez seulement à la livraison",
      body: "Compresser un PDF pour la copie sortante ; gardez la source non compressée. Le fichier livré va dans /final/, la source reste dans /brouillons/. Ce sont des objets différents.",
    },
    {
      title: "Archivez les projets terminés selon un calendrier",
      body: "Déplacez les projets clôturés vers /Archive/ chaque trimestre. Les dossiers actifs restent facilement parcourables ; l’archive est consultable quand vous devez retrouver quelque chose plus tard.",
    },
  ],
  tips: [
    "Évitez les espaces dans les noms de fichiers si possible — les tirets bas ou les traits d’union sont plus faciles dans les URL, les transferts d’e-mail et les commandes en ligne de commande.",
    "Le format de date AAAA-MM-JJ se trie chronologiquement dans n’importe quel outil. 29/05/26 ne le fait pas.",
    "Ne mettez pas de numéro de version dans le nom de fichier FINAL. FINAL est FINAL. Si quelque chose change après, c’est FINAL-2 — et c’est un signal que le processus a dérapé.",
    "Ne craignez pas de renommer. Un nom de fichier clair vaut une minute de travail, surtout avant l’envoi.",
    "Gardez un fichier index d’une ligne (README.txt) dans les gros projets, listant le contenu de chaque sous-dossier. Cela aide le vous du futur qui revient six mois plus tard.",
  ],
  mobileNote:
    "Sur un téléphone, l’organisation devient plus difficile parce que modifier un nom de fichier est fastidieux. L’application PDF Editor permet de renommer, étiqueter et classer des PDF depuis mobile, pour que les fichiers arrivant sur le téléphone ne s’entassent pas sans nom dans le dossier Téléchargements.",
  faq: [
    {
      q: "Quel est le meilleur format de nom de fichier ?",
      a: "NomClient_TypeDoc_vN_AAAA-MM-JJ.pdf. La date en dernier trie chronologiquement ; le numéro de version en ligne distingue les brouillons ; le client et le type de document rendent le fichier auto-descriptif.",
    },
    {
      q: "Dois-je utiliser des dossiers ou des étiquettes ?",
      a: "Des dossiers. Les systèmes d’étiquettes existent mais se fragmentent entre appareils et applications. Les dossiers sont universels.",
    },
    {
      q: "Que faire des vieux brouillons ?",
      a: "Gardez-les dans /brouillons/ à l’intérieur du dossier du projet jusqu’à la clôture du projet, puis archivez le tout. Ne supprimez pas — vous pourriez avoir besoin de récupérer un chiffre d’un ancien brouillon.",
    },
    {
      q: "Le fichier FINAL a-t-il besoin d’un numéro de version ?",
      a: "Non. Une fois qu’un fichier est FINAL, c’est la version canonique. Si quelque chose change après, vous entrez dans une nouvelle conversation qui obtient son propre FINAL.",
    },
    {
      q: "Comment gérer des fichiers de clients au nommage incohérent ?",
      a: "Renommez à la réception pour correspondre à votre convention. La minute passée à renommer économise le temps que vous perdriez à chercher plus tard.",
    },
  ],
  related: [
    { label: "Outils PDF — liste complète des outils dans le navigateur", path: "/pdf-tools" },
    { label: "Fusionner un PDF — combiner les livrables à la livraison", path: "/merge-pdf" },
    { label: "Comment organiser ses fichiers PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Flux de travail PDF pour les petites entreprises", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
