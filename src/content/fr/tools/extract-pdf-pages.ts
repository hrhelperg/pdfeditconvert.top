import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Extraire des pages du PDF",
    h1: "Extrayez des pages d’un PDF — dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Choisissez un PDF, indiquez les pages ou les plages voulues, et téléchargez un nouveau PDF ne contenant qu’elles. Tout se passe sur votre appareil.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n’est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment extraire des pages d’un PDF",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un PDF ou cliquez pour en choisir un. Nous affichons le nombre total de pages du fichier.",
      },
      {
        title: "Indiquez les pages",
        body: "Saisissez des pages isolées et des plages, par exemple 1-3,5,8-10. Le décompte de la sélection se met à jour pendant la saisie.",
      },
      {
        title: "Extrayez",
        body: "Cliquez sur Extraire les pages. Un nouveau PDF ne contenant que ces pages est assemblé localement.",
      },
      { title: "Téléchargez", body: "Le PDF extrait se télécharge automatiquement." },
    ],
  },
  useCases: {
    heading: "Quand l’extraction aide",
    items: [
      {
        title: "Ne partager que le nécessaire",
        body: "Envoyez une section, un chapitre ou la page signée plutôt que tout le document.",
      },
      {
        title: "Isoler un formulaire ou un reçu",
        body: "Récupérez la seule page demandée par le portail sans exposer le reste.",
      },
      {
        title: "Séparer un chapitre",
        body: "Créez un PDF allégé à partir d’un long rapport ou d’un livre, pour étudier ou relire.",
      },
      {
        title: "Composer un support sur mesure",
        body: "Réordonnez la sélection en listant les pages dans l’ordre voulu.",
      },
    ],
  },
  limitations: {
    heading: "Limites assumées",
    items: [
      {
        title: "PDF protégés par mot de passe",
        body: "Les fichiers chiffrés ne peuvent pas être ouverts dans le navigateur. Déverrouillez-les avant, ou utilisez l’application PDF Editor.",
      },
      {
        title: "Pages hors plage",
        body: "Les numéros de page supérieurs au total du document sont ignorés ; si aucune page valide n’est sélectionnée, un message d’erreur clair s’affiche.",
      },
      {
        title: "PDF très volumineux",
        body: "Le navigateur manque de mémoire bien avant une application native. Pour des fichiers énormes, utilisez l’application PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Diviser un PDF", path: "/split-pdf" },
    { label: "Réorganiser les pages d’un PDF", path: "/reorder-pdf-pages" },
    { label: "Compresser un PDF", path: "/compress-pdf" },
    { label: "Fusionner des PDF", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. L’extraction fonctionne entièrement dans votre navigateur. Votre fichier ne quitte jamais votre appareil.",
    },
    {
      q: "Quels formats de page puis-je saisir ?",
      a: "Des pages isolées et des plages séparées par des virgules : 1-3, 2,4,6 ou 1-2,5,8-10. Les espaces ne posent pas de problème.",
    },
    {
      q: "Que se passe-t-il avec une plage invalide ?",
      a: "Une saisie invalide est refusée avec un message clair ; les numéros hors plage sont ignorés. S’il ne reste rien de valide, nous expliquons pourquoi.",
    },
    {
      q: "Peut-on répéter ou réordonner des pages ?",
      a: "Oui. Listez les pages dans l’ordre voulu ; répéter une page la fait apparaître plusieurs fois.",
    },
    {
      q: "L’extraction change-t-elle la qualité ?",
      a: "Non. Les pages choisies sont copiées exactement telles quelles — le texte reste sélectionnable et rien n’est recompressé.",
    },
  ],
  appCta: {
    heading: "Besoin d’outils PDF dans l’urgence ?",
    sub: "PDF Editor pour iPhone et Android extrait, divise et signe vos PDF directement depuis votre téléphone.",
  },
};

export default content;
