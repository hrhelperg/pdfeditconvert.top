import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Organisation des PDF quand on est consultant (propositions, rapports, factures)",
  description:
    "Le rythme PDF d’un consultant : des propositions qui aboutissent, des rapports lisibles sur un téléphone, des factures parties en quelques secondes. Les outils dans le navigateur qui gardent tout léger.",
  updated: "2026-05-29",
  intro: [
    "Le métier de consultant repose sur trois documents : la proposition qui décroche la mission, le rapport qui la livre, et la facture qui clôt le cycle. Tout le reste — présentations de lancement, notes d’entretien, points d’avancement — n’est qu’un brouillon de l’un des trois, ou un document de travail qui ne quitte jamais la mission.",
    "Chacun de ces trois documents a ses propres habitudes PDF. La proposition doit sembler solide sans être lourde ; le rapport doit se lire proprement sur un téléphone, là où la plupart des clients l’ouvrent en premier ; la facture doit partir le jour même où la mission se termine. Les outils pour bien faire les trois sont pour la plupart gratuits, et la méthode ne change pas d’une mission à l’autre.",
    "Ce guide décrit ce rythme — ce dont chaque document a besoin, ce que fait chaque outil, et où passe le temps. Affiner ce rythme sur une année de missions fait gagner de vraies heures.",
  ],
  steps: [
    {
      title: "Proposition : dense, à vos couleurs, rapide",
      body: "Construisez-la dans Word à partir de votre modèle. Limitez-vous à moins de 12 pages — les clients survolent, ils n’étudient pas. Word vers PDF pour l’export. Couverture, énoncé du problème, approche, livrables, calendrier, tarifs, conditions. Compressez sous 5 Mo. Envoyez le jour même.",
    },
    {
      title: "Lettre de mission : PDF signé, verrouillé",
      body: "Une fois la proposition approuvée, envoyez une lettre de mission signée avec Signer le PDF. Le client contre-signe et la retourne. Conservez les deux copies signées dans /Clients/[Nom]/contrats/.",
    },
    {
      title: "Points d’avancement : statut PDF hebdomadaire",
      body: "Un court PDF (une page) envoyé chaque semaine. Statut, blocages, décisions attendues. Considérez-le comme un exercice de clarté, pas comme un livrable en soi.",
    },
    {
      title: "Rapport final : structuré pour être survolé",
      body: "Résumé exécutif en première page. Méthodologie et détails en fin de document. Numérotez chaque page. Intégrez les polices. Des tailles de texte lisibles sur mobile. La plupart des clients lisent sur téléphone avant de lire sur ordinateur portable.",
    },
    {
      title: "Facture : le jour même de la clôture",
      body: "Facture modèle, numéro séquentiel, Word vers PDF, envoyée dans les 24 heures suivant la clôture de la mission. Une facture en retard entraîne un paiement en retard.",
    },
    {
      title: "Archivez la mission",
      body: "Déplacez tout le dossier client vers /Archivage/[Annee]/[Client]/ une fois le paiement reçu. Le dossier actif reste léger ; l’archive reste consultable pour vos futures études de cas et références.",
    },
  ],
  tips: [
    "Ne personnalisez pas le modèle à chaque proposition. Personnalisez le contenu, gardez la structure constante — les clients vous reconnaissent d’une mission à l’autre.",
    "Suivez chaque proposition envoyée dans un tableau avec date, client, montant, résultat. Le taux de conversion vous dit s’il faut affiner l’offre.",
    "Les rapports qui se lisent bien sur mobile utilisent une typographie plus grande et des paragraphes plus courts que ceux pensés pour l’impression. Optimisez pour l’appareil que le client utilise en premier.",
    "Mettez un filigrane BROUILLON pendant la mission, jamais sur la version finale. C’est justement son absence qui rend le document définitif.",
    "Gardez un dossier /etudes-de-cas/ avec des exemples anonymisés de missions passées. C’est la preuve la plus solide dans vos futures propositions.",
  ],
  mobileNote:
    "Les consultants vivent en déplacement. L’application PDF Editor permet de compresser une proposition à la dernière minute, de signer une lettre de mission et d’envoyer une facture depuis un téléphone — utile quand la mission se clôture dans le train et que la facture doit partir avant la fin de la journée.",
  faq: [
    {
      q: "Quelle longueur pour une proposition ?",
      a: "Moins de 12 pages pour la plupart des missions. Les clients survolent. Plus une proposition est courte, plus elle est lue.",
    },
    {
      q: "Faut-il une lettre de mission signée ?",
      a: "Oui. La proposition est un document commercial ; la lettre de mission est le contrat. Ne commencez jamais le travail sans elle.",
    },
    {
      q: "À quelle fréquence envoyer des points d’avancement ?",
      a: "Chaque semaine par défaut. Chaque jour pour les missions courtes et intenses. Chaque mois pour les missions longues et lentes. Le rythme compte plus que le format.",
    },
    {
      q: "Les rapports doivent-ils être soignés visuellement ?",
      a: "Assez soignés pour paraître professionnels, pas au point de vous ralentir. Un modèle typographique épuré vieillit mieux qu’un rapport trop travaillé.",
    },
    {
      q: "Quand envoyer la facture ?",
      a: "Le jour même où la mission se termine. Chaque jour de retard tend à repousser la date de paiement de plus d’un jour côté client.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
    { label: "Word vers PDF — exports pour propositions et rapports", path: "/word-to-pdf" },
    { label: "Le meilleur flux PDF pour les freelances", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Comment envoyer des contrats en PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
};

export default content;
