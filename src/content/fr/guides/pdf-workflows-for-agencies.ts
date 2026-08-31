import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Organisation des PDF en agence (présentations, briefs, validations)",
  description:
    "La chaîne PDF d’une agence — recommandations, briefs créatifs, validations client, livrables — rendue rapide et prévisible avec des outils gratuits, confidentiels et dans le navigateur.",
  updated: "2026-05-29",
  intro: [
    "Les agences traitent plus de PDF qu’elles ne le pensent. Des présentations partent, des briefs reviennent, le travail créatif passe par des cycles de validation, les livrables s’envoient par lots, les bilans atterrissent dans des dossiers partagés. Chacune de ces tâches est petite en soi ; ensemble, elles forment l’artère sur laquelle l’agence fonctionne.",
    "La plupart des gestes PDF d’une agence se répètent : convertir une présentation en PDF envoyable, fusionner une version pour l’oral avec ses annexes, compresser pour les portails clients, apposer un filigrane sur les brouillons pendant la relecture, signer les validations, archiver à la clôture de la mission. Avec un rythme réfléchi et une petite boîte à outils adaptée, cela reste léger. Sans cela, ça dévore des heures.",
    "Ce guide décrit la méthode que nous avons observée fonctionner dans de petites agences. Rien de tout cela ne demande de logiciel PDF payant ; la plupart des étapes se font dans un onglet de navigateur, sans envoyer de contenu client sensible sur un serveur.",
  ],
  steps: [
    {
      title: "Présentation commerciale : export, compression, contrôle de l’identité visuelle",
      body: "Présentation → export PDF → compression pour l’e-mail du prospect. Vérifiez que les polices sont intégrées pour que les titres de diapositives ne soient pas remplacés chez le prospect. Couverture au nom du prospect ; titre des métadonnées défini ; fichier nommé NomProspect_Presentation_AAAA-MM-JJ.pdf.",
    },
    {
      title: "Brief créatif : fusion du dossier de cadrage avec les ressources",
      body: "Document de brief plus ressources client (logos, exemples, charte graphique) → Fusionner le PDF en un seul fichier de travail que l’équipe peut consulter. Conservez les originaux ; la version fusionnée sert de référence rapide.",
    },
    {
      title: "Validations : PDF signé, filigrane brouillon pendant la relecture",
      body: "Les brouillons circulent avec Ajouter un filigrane au PDF apposant BROUILLON. Quand le client valide, un PDF signé officialise l’accord, avec Signer le PDF pour enregistrer la validation. Les fichiers finaux perdent le filigrane.",
    },
    {
      title: "Livrables : PDF haute qualité, distinct des fichiers de travail",
      body: "Les livrables finaux sont exportés en meilleure qualité que les versions internes. Réorganiser les pages du PDF confirme l’ordre de lecture ; Extraire des pages PDF retire tout ce qui ne doit pas partir.",
    },
    {
      title: "Compressez pour les portails clients",
      body: "La plupart des portails clients d’entreprise plafonnent entre 10 et 25 Mo. Compresser le PDF ramène les livrables sous ce plafond sans perte de qualité visible. Le fichier livré est la copie compressée ; les archives de travail conservent la version non compressée.",
    },
    {
      title: "Archivez à la clôture de la mission",
      body: "Déplacez le dossier de mission vers /Archivage/[Annee]/[Client]/[NomMission]/. Le dossier actif reste léger ; l’archive devient la source d’études de cas pour la prochaine présentation commerciale.",
    },
  ],
  tips: [
    "Les présentations destinées à l’écran doivent être exportées avec moins de compression que celles destinées à l’impression — les artefacts visibles se remarquent moins à l’écran.",
    "Standardisez la couverture des présentations. Logo, nom du prospect, date, contact de l’agence. Des mises en page différentes d’une présentation à l’autre donnent une impression d’incohérence à l’échelle de l’agence.",
    "Mettez un filigrane sur tous les brouillons. Dès qu’un brouillon perd son filigrane dans la chaîne, la traçabilité se brouille.",
    "Les validations doivent se faire sur des PDF signés, pas dans des fils de discussion. Le vous de demain aura besoin d’une trace opposable.",
    "Préconstruisez un dossier /Modeles/ avec couverture de présentation, modèle de brief, formulaire de validation. Réutiliser vaut toujours mieux que recréer.",
  ],
  mobileNote:
    "La vie d’agence se joue sur téléphone, pendant les tournages, en déplacement, chez le client. L’application PDF Editor gère les brouillons, les signatures et les réexports rapides depuis le mobile, pour qu’une validation puisse aboutir depuis un téléphone plutôt que d’attendre le retour au bureau.",
  faq: [
    {
      q: "Quel poids doit faire un PDF de présentation commerciale ?",
      a: "Moins de 10 Mo dans l’idéal ; moins de 25 Mo dans tous les cas. Les présentations visuelles se compressent moins bien que les présentations textuelles ; surveillez le poids au fur et à mesure qu’elle s’étoffe.",
    },
    {
      q: "Faut-il un modèle unique pour chaque présentation ?",
      a: "Oui pour la structure, non pour le contenu créatif. Le lecteur doit reconnaître instantanément « ceci est une proposition d’agence » ; le contenu créatif distingue chaque présentation.",
    },
    {
      q: "Comment suivre l’état des validations ?",
      a: "L’état du dossier : /brouillons/, /valides/, /livres/. Le PDF de validation signé est la pièce qui confirme le passage d’un dossier à l’autre.",
    },
    {
      q: "Faut-il des PDF de travail et de livraison distincts ?",
      a: "Oui. Les fichiers de travail sont non compressés et comportent des annotations ; les livrables sont compressés, propres et définitifs. Ne livrez jamais le fichier de travail par erreur.",
    },
    {
      q: "Quelle est la plus grosse erreur PDF en agence ?",
      a: "Envoyer une présentation non finalisée. Mettez un filigrane sur les brouillons, nommez-les clairement, et seul le fichier de /valides/ part chez le client.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
    { label: "Fusionner le PDF — assembler briefs et livrables", path: "/merge-pdf" },
    { label: "Organisation des PDF quand on est consultant", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Le meilleur flux PDF pour une équipe", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
};

export default content;
