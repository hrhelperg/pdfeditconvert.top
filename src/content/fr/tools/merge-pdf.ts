import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Fusionner un PDF",
    h1: "Réunissez plusieurs PDF en un seul document — dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Choisissez deux fichiers PDF ou plus et regroupez-les en un seul document. Réordonnez avant de fusionner — les fichiers restent sur votre appareil.",
  },
  privacyNote:
    "Vos fichiers sont traités localement, dans votre navigateur, et ne sont jamais envoyés à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment fusionner des PDF",
    steps: [
      {
        title: "Choisissez les PDF",
        body: "Glissez-déposez deux PDF ou plus, ou cliquez pour les choisir sur votre appareil.",
      },
      {
        title: "Réordonnez si besoin",
        body: "Utilisez les flèches de chaque ligne pour mettre les fichiers dans le bon ordre avant de fusionner.",
      },
      {
        title: "Fusionnez",
        body: "Cliquez sur Fusionner les PDF. Les fichiers sont assemblés localement, dans votre navigateur.",
      },
      {
        title: "Téléchargez",
        body: "Le PDF assemblé se télécharge automatiquement. Vous pouvez le renommer après l’avoir enregistré.",
      },
    ],
  },
  useCases: {
    heading: "Quand fusionner est le bon choix",
    items: [
      {
        title: "Envoyez un fichier, pas cinq",
        body: "Clients, comptables et avocats préfèrent un document unique à une série de pièces jointes.",
      },
      {
        title: "Devis + contrat + facture",
        body: "Montez un fichier unique, facile à vérifier, à partir de documents créés dans des outils différents.",
      },
      {
        title: "Réunir des pages numérisées",
        body: "Combinez des numérisations page à page d’une pièce d’identité ou d’un contrat dans un fichier accepté par le portail.",
      },
      {
        title: "Assembler un rapport",
        body: "Réunissez page de garde, corps du texte et annexes en une seule livraison.",
      },
    ],
  },
  limitations: {
    heading: "Limites",
    items: [
      {
        title: "PDF protégés par mot de passe",
        body: "Les fichiers verrouillés ne peuvent pas être fusionnés dans le navigateur. Déverrouillez-les d’abord dans l’application d’origine, ou utilisez l’application PDF Editor.",
      },
      {
        title: "Lots très volumineux",
        body: "Le navigateur manque de mémoire bien avant une application native. Au-delà de 50 fichiers ou pour des numérisations énormes, utilisez l’application PDF Editor.",
      },
      {
        title: "Signets et champs de formulaire",
        body: "Certaines structures intégrées (champs de formulaire, annotations) peuvent être aplaties lors de la fusion. L’application mobile les préserve mieux.",
      },
    ],
  },
  related: [
    { label: "Diviser un PDF — le chemin inverse", path: "/split-pdf" },
    { label: "Faire pivoter des pages", path: "/rotate-pdf" },
    { label: "Compresser un PDF", path: "/compress-pdf" },
    { label: "Réorganiser les pages d’un PDF", path: "/reorder-pdf-pages" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    { label: "Guide : comment fusionner des PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. La fusion fonctionne entièrement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil.",
    },
    {
      q: "Y a-t-il une limite au nombre de PDF fusionnables ?",
      a: "Il n’y a pas de plafond strict, mais nous recommandons de rester sous 30 fichiers ou environ 500 Mo au total pour que le navigateur reste réactif.",
    },
    {
      q: "Peut-on fusionner des PDF protégés par mot de passe ?",
      a: "Pas dans le navigateur. Retirez le mot de passe avant, ou utilisez l’application PDF Editor, qui prend en charge les fichiers protégés.",
    },
    {
      q: "La mise en forme d’origine change-t-elle ?",
      a: "Non. Chaque page source est préservée telle quelle. Seuls l’ordre des pages et le document qui les enveloppe changent.",
    },
    {
      q: "Peut-on les reséparer plus tard ?",
      a: "Oui. Utilisez l’outil Diviser un PDF pour redécouper n’importe quel fichier fusionné en pages ou en plages.",
    },
  ],
  appCta: {
    heading: "Besoin d’outils PDF dans l’urgence ?",
    sub: "PDF Editor pour iPhone et Android fusionne, signe et numérise vos PDF directement depuis votre téléphone.",
  },
};

export default content;
