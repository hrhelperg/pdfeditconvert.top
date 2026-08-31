import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Comment gérer ses factures en PDF (émettre, suivre, archiver)",
  description:
    "Une méthode de facturation en PDF qui ne demande aucun logiciel comptable : produire, numéroter, envoyer, suivre et archiver, avec des outils gratuits et un classement propre.",
  updated: "2026-05-29",
  intro: [
    "La plupart des petites entreprises n’ont pas vraiment besoin d’un logiciel comptable pour leurs factures. Elles ont besoin d’un moyen propre de générer un PDF, de le numéroter de façon cohérente, de l’envoyer, de suivre son paiement, et de l’archiver pour la période fiscale. Le travail est mécanique ; les outils sont simples ; le chaos vient de sauter la convention.",
    "Une méthode de facturation comporte quatre parties : l’émission (d’où vient le PDF), le suivi (où vous notez ce qui a été envoyé), le paiement (quand il est réglé), et l’archive (où vivent les copies payées). Chaque partie est courte, et aucune ne nécessite d’abonnement si vous n’en voulez pas.",
    "Ce guide parcourt la méthode telle qu’un freelance ou une petite équipe peut vraiment la faire tourner — avec une génération de PDF depuis un modèle Word, une numérotation que vous contrôlez, et une archive qui survit à un contrôle fiscal. Ce n’est pas la seule façon de faire ; c’est celle qui ne casse pas.",
  ],
  steps: [
    {
      title: "Construisez la facture dans Word ou Pages depuis un modèle",
      body: "Un modèle de facture dans Word vous donne une mise en page fiable avec des espaces réservés pour le client, la date, les lignes de détail, le total. Remplissez les variables, exportez en PDF avec Word vers PDF. Évitez de modifier le montant final ailleurs que dans la source.",
    },
    {
      title: "Utilisez un numéro de facture séquentiel",
      body: "FAC-2026-001, FAC-2026-002, et ainsi de suite. Réinitialisez chaque année. Les numéros doivent être uniques et sans trou — les autorités fiscales signalent les écarts. Gardez une liste courante dans un tableur ou un fichier texte.",
    },
    {
      title: "Enregistrez avec un nom de fichier prévisible",
      body: "NomClient_Facture_FAC-2026-001_2026-05-29.pdf. Le numéro de facture dans le nom du fichier correspond au numéro sur le document. Le dossier client rend la recherche par client facile.",
    },
    {
      title: "Envoyez et notez immédiatement",
      body: "Envoyez le PDF par e-mail avec une courte note d’accompagnement et notez l’envoi dans votre feuille de suivi. Date d’envoi, numéro de facture, montant, date d’échéance. La minute où vous ne notez pas est celle où vous oublierez.",
    },
    {
      title: "Filigranez PAYÉ une fois le paiement réglé",
      body: "Ajouter un filigrane à un PDF tamponne PAYÉ sur le fichier avec la date. La copie payée va dans /factures/payees/ ; l’impayée reste dans /factures/en-attente/. L’état visuel bat l’état du tableur.",
    },
    {
      title: "Archivez par année",
      body: "En fin d’année, déplacez /factures/payees/ vers /Archive/Factures/2026/. Gardez au moins sept ans (les juridictions varient). L’archive devrait être claire d’elle-même dans cinq ans, quand vous aurez oublié la logique de classement d’origine.",
    },
  ],
  tips: [
    "Ne modifiez jamais une facture envoyée. Si le montant est faux, émettez un avoir ou une nouvelle facture — la trace d’audit doit rester intacte.",
    "Faites correspondre le numéro de facture du fichier à celui du document et à la ligne de votre feuille de suivi. Trois endroits qui disent la même chose.",
    "Le PDF/A est le format d’archivage que certaines administrations fiscales préfèrent. Si vous déclarez dans une telle juridiction, réexportez l’ensemble de fin d’année en PDF/A.",
    "Compressez les factures pour l’archive — ce sont des textes simples, mais les archives s’accumulent. Des copies compressées économisent un vrai espace disque au fil des années.",
    "Ne protégez pas les factures par mot de passe sauf si le client l’exige. De la friction sans bénéfice sur un document qui n’est que des chiffres et des noms.",
  ],
  mobileNote:
    "Les factures naissent de plus en plus sur un téléphone — un envoi rapide depuis un café après une mission. L’application PDF Editor permet de remplir le modèle, de tamponner le numéro de facture, et d’envoyer le PDF par e-mail depuis mobile, avec une copie enregistrée localement pour vos archives.",
  faq: [
    {
      q: "Ai-je besoin d’un logiciel de facturation ?",
      a: "Pas pour un faible volume. Un modèle Word, une feuille de suivi et un système de dossiers gèrent proprement des dizaines de factures par mois. Un logiciel se justifie quand vous avez besoin de facturation récurrente, de multidevise ou de nombreux clients.",
    },
    {
      q: "Quel format de numéro de facture dois-je utiliser ?",
      a: "Séquentiel, sans trou, idéalement avec un préfixe d’année. FAC-2026-001 est lisible et adapté à un contrôle fiscal.",
    },
    {
      q: "Combien de temps dois-je garder mes factures ?",
      a: "Les juridictions varient ; sept ans est une valeur par défaut sûre. Vérifiez les règles réelles de votre pays.",
    },
    {
      q: "Dois-je envoyer les factures en Word ou en PDF ?",
      a: "Toujours en PDF. Les PDF verrouillent le format et le montant ; les fichiers Word invitent des clients bien intentionnés à « corriger » quelque chose.",
    },
    {
      q: "Qu’en est-il des factures avec TVA ou taxe de vente ?",
      a: "Certaines juridictions exigent une mise en page spécifique, une numérotation séquentielle et un archivage au format d’origine. Respectez les règles locales ; la méthode ci-dessus les accommode.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et flux de travail", path: "/pdf-for-business" },
    { label: "Word vers PDF — exports de factures propres", path: "/word-to-pdf" },
    { label: "Ajouter un filigrane à un PDF — tamponner PAYÉ sur les factures closes", path: "/add-watermark-to-pdf" },
    { label: "Flux de travail PDF pour les petites entreprises", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et flux de travail", path: "/pdf-for-business" },
};

export default content;
