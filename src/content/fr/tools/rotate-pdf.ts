import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Faire pivoter un PDF",
    h1: "Redressez les pages couchées d'un PDF — dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Faites pivoter toutes les pages, ou seulement celles que vous choisissez, et téléchargez le PDF corrigé — tout se passe dans votre navigateur.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n'est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment faire pivoter un PDF",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un seul PDF ou cliquez pour choisir le fichier.",
      },
      { title: "Choisissez l'angle", body: "Sélectionnez 90°, 180° ou 270° (dans le sens horaire)." },
      {
        title: "Choisissez les pages",
        body: "Faites pivoter toutes les pages ou indiquez des numéros (par exemple, 1,3-5).",
      },
      {
        title: "Faites pivoter et téléchargez",
        body: "Cliquez sur Faire pivoter le PDF. Nous reconstruisons le fichier localement avec la nouvelle orientation.",
      },
    ],
  },
  useCases: {
    heading: "Quand la rotation est le bon choix",
    items: [
      {
        title: "Numérisations du téléphone couchées",
        body: "Les photos de documents se retrouvent souvent enregistrées à l'horizontale — redressez-les en un clic.",
      },
      {
        title: "Rapports à l'orientation mélangée",
        body: "Un tableau large sur une page couchée au milieu d'un rapport en portrait ? Corrigez sans tout numériser à nouveau.",
      },
      {
        title: "Pièces d'identité",
        body: "Assurez-vous que toutes les pages sont dans le même sens avant que le portail de l'organisme ne le refuse.",
      },
      {
        title: "Reçus et notes",
        body: "Rendez une pile de photos de reçus lisible dans le même sens avant de tout fusionner.",
      },
    ],
  },
  limitations: {
    heading: "Limites",
    items: [
      {
        title: "PDF protégés par mot de passe",
        body: "Les fichiers verrouillés ne peuvent pas pivoter dans le navigateur. Déverrouillez-les avant, ou utilisez l'application PDF Editor.",
      },
      {
        title: "Angles différents par page",
        body: "L'outil applique un seul angle à la fois. Pour des angles différents, relancez-le deux fois avec des sélections de pages distinctes.",
      },
      {
        title: "Annotations et champs de formulaire",
        body: "La rotation peut décaler visuellement les couches superposées. L'application mobile gère mieux les annotations.",
      },
    ],
  },
  related: [
    { label: "Fusionner des fichiers PDF", path: "/merge-pdf" },
    { label: "Diviser un PDF", path: "/split-pdf" },
    { label: "Filigrane sur un PDF", path: "/add-watermark-to-pdf" },
    { label: "Réorganiser les pages d'un PDF", path: "/reorder-pdf-pages" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Mon fichier est-il envoyé sur un serveur ?",
      a: "Non. La rotation fonctionne entièrement dans votre navigateur ; rien ne quitte votre appareil.",
    },
    {
      q: "Peut-on ne faire pivoter que certaines pages ?",
      a: "Oui. Utilisez le champ de sélection de pages, par exemple 1,3-5,9.",
    },
    {
      q: "La rotation réduit-elle la qualité ?",
      a: "Non. Les pages sont conservées octet pour octet ; seule l'information de rotation du fichier est ajustée.",
    },
    {
      q: "Peut-on faire pivoter un PDF protégé par mot de passe ?",
      a: "Pas dans le navigateur. Retirez le mot de passe avant, ou utilisez l'application PDF Editor.",
    },
  ],
  appCta: {
    heading: "Faites pivoter vos pages depuis votre téléphone aussi.",
    sub: "PDF Editor pour iPhone et Android modifie, fait pivoter et signe vos PDF sans connexion.",
  },
};

export default content;
