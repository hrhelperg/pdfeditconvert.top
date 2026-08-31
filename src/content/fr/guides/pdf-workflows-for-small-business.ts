import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Organisation des PDF dans une petite entreprise (devis, contrats, archives)",
  description:
    "Comment une petite entreprise fait circuler ses documents en PDF — devis envoyés, contrats retournés, archives classées — sans s’offrir une pile d’abonnements pour autant.",
  updated: "2026-05-29",
  intro: [
    "Une petite entreprise traite plus de PDF que ses dirigeants ne l’imaginent. Des devis partent, des contrats signés reviennent, des factures s’envoient, des relevés se classent, des documents fiscaux s’accumulent. Chacune de ces tâches est petite en soi, mais chacune peut grignoter du temps quand la méthode n’est pas pensée à l’avance.",
    "Les grandes suites PDF payantes se justifient quand on a un service juridique. Pour une entreprise de cinq personnes qui traite quelques dizaines de documents par semaine, des outils gratuits dans le navigateur et une convention claire suffisent, sans ligne d’abonnement supplémentaire. Le secret, c’est d’écrire la méthode une fois et de s’y tenir.",
    "Ce guide décrit la méthode pour les quatre types de documents que les petites entreprises traitent le plus en PDF : devis, contrats, factures et archives. Chaque section est courte, concrète, et ne demande rien qui se paie.",
  ],
  steps: [
    {
      title: "Devis : modèle Word → Word vers PDF → envoi à vos couleurs",
      body: "Construisez le devis à partir d’un modèle Word, renseignez les informations du client et les lignes de détail, exportez en PDF avec Word vers PDF. Habillez la couverture à vos couleurs, nommez le fichier NomClient_Devis_AAAA-MM-JJ.pdf, envoyez.",
    },
    {
      title: "Contrats : PDF → Signer le PDF → verrouillage → contre-signature",
      body: "Finalisez le texte dans la source, exportez en PDF, signez avec Signer le PDF, verrouillez si votre outil le permet, envoyez pour contre-signature. Conservez la copie à une signature et la copie entièrement signée.",
    },
    {
      title: "Factures : numérotation séquentielle, filigrane une fois payées",
      body: "FACT-2026-001, FACT-2026-002. Suivez-les dans un tableau. Une fois le paiement encaissé, Ajouter un filigrane au PDF appose PAYÉ et le fichier passe de /en-attente/ à /payees/.",
    },
    {
      title: "Archives : réception, compression, classement par année",
      body: "Relevés bancaires, factures fournisseurs, notes de frais. Recevez-les en PDF, compressez-les pour l’archivage, classez-les par année dans /Archives/2026/. Conservez-les au moins sept ans.",
    },
    {
      title: "Utilisez une arborescence de dossiers partagée",
      body: "Des dossiers de premier niveau /Clients/, /Archives/, /Interne/, /Modeles/, /Archivage/. Deux niveaux d’imbrication maximum. Toute l’équipe utilise la même organisation.",
    },
    {
      title: "Faites le point chaque mois",
      body: "Une fois par mois, parcourez le dossier /en-attente/ des factures et les projets actifs de /clients/. Au-delà de 30 jours, relancez. Au-delà de 90, escaladez. Le dossier fait office de liste de tâches.",
    },
  ],
  tips: [
    "Ne réinventez pas le modèle à chaque fois. Construisez un modèle de devis, de contrat et de facture, et réutilisez-les.",
    "Signez avec une vraie signature, pas un nom tapé au clavier. Les signatures manuscrites tiennent mieux en cas de litige.",
    "Compressez chaque document au moment de l’envoi — les fichiers sortants doivent toujours être plus légers que les originaux internes.",
    "Évitez d’envoyer des fichiers Word actifs aux clients. Une fois en PDF, la version est verrouillée.",
    "Faites un tri d’archivage chaque trimestre. Les projets clos partent dans /Archivage/ ; les dossiers actifs restent courts et faciles à parcourir.",
  ],
  mobileNote:
    "Les dirigeants de petites entreprises font la moitié de leur travail PDF depuis un téléphone — signer un contrat entre deux rendez-vous, envoyer une facture depuis un chantier, classer un reçu en pleine journée. L’application PDF Editor gère les quatre types de documents depuis le mobile, hors connexion, pour que le travail n’attende pas de retour au bureau.",
  faq: [
    {
      q: "Faut-il un logiciel de comptabilité pour la facturation ?",
      a: "Pas à faible volume. Un modèle Word, un tableau de suivi et un système de dossiers suffisent proprement pour des dizaines de factures par mois. Un logiciel se justifie quand le volume augmente.",
    },
    {
      q: "Comment suivre les contrats en attente ?",
      a: "Une arborescence de dossiers : /Clients/Actifs/[Nom]/contrats/envoyes/ et .../signes/. L’état du dossier fait office de statut. Aucun tableau n’est nécessaire.",
    },
    {
      q: "Et les sauvegardes ?",
      a: "Synchronisez le dossier de documents avec au moins un espace cloud (Dropbox, iCloud, Google Drive). Gardez une sauvegarde externe périodique pour les années sous obligation fiscale.",
    },
    {
      q: "Faut-il un modèle unique par type de document ?",
      a: "Oui. Des modèles cohérents rendent les documents reconnaissables et réduisent l’effort par document. Personnalisez le contenu, pas la structure.",
    },
    {
      q: "À partir de quand une suite PDF payante devient-elle utile ?",
      a: "Quand vous avez besoin d’un routage automatisé, de signature électronique en masse ou de pistes d’audit certifiées — généralement à partir d’une vingtaine de salariés ou dans des flux réglementés.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
    { label: "Signer le PDF — signatures électroniques", path: "/sign-pdf" },
    { label: "Comment gérer ses factures en PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Les meilleurs outils PDF gratuits pour petites entreprises", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
};

export default content;
