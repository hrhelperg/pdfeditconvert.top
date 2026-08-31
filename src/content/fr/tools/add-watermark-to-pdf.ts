import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Filigrane",
    h1: "Posez un filigrane texte sur toutes les pages d’un PDF.",
    highlight: "toutes les pages",
    lead: "Ajoutez un filigrane texte simple avant de partager un PDF — choisissez la position, l’opacité, la taille de police et l’angle.",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n’est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment ajouter un filigrane",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un seul PDF ou cliquez pour choisir le fichier.",
      },
      {
        title: "Saisissez le texte",
        body: "Une quarantaine de caractères maximum fonctionne mieux. Exemples : CONFIDENTIEL, BROUILLON, Échantillon.",
      },
      {
        title: "Ajustez l’opacité et l’angle",
        body: "Une opacité faible rend le filigrane discret ; une opacité forte, bien visible. Un angle de 45° convient à la plupart des mises en page.",
      },
      {
        title: "Téléchargez",
        body: "Nous reconstruisons le PDF localement, avec le filigrane sur toutes les pages.",
      },
    ],
  },
  useCases: {
    heading: "Quand le filigrane est utile",
    items: [
      {
        title: "Brouillons en relecture",
        body: "Marquez les documents BROUILLON avant de les diffuser, pour éviter toute confusion.",
      },
      {
        title: "Documents sensibles",
        body: "Apposez CONFIDENTIEL avant de partager un contrat ou des données financières sensibles.",
      },
      {
        title: "Supports d’échantillon",
        body: "Marquez les échantillons de portfolio pour éviter qu’ils soient réutilisés sans autorisation.",
      },
      {
        title: "Documents à usage interne",
        body: "Signalez ce qui ne doit pas circuler en dehors de l’entreprise.",
      },
    ],
  },
  limitations: {
    heading: "Limites",
    items: [
      {
        title: "Filigrane texte uniquement",
        body: "Cet outil appose du texte. Pour un filigrane image ou logo, utilisez l’application PDF Editor.",
      },
      {
        title: "Seulement des polices standard",
        body: "Nous utilisons la police Helvetica intégrée pour que le résultat reste portable. Les polices personnalisées ne sont pas intégrées.",
      },
      {
        title: "Un filigrane peut être retiré",
        body: "Un filigrane n’est pas une protection juridique. Il décourage un usage abusif involontaire, pas une manipulation délibérée.",
      },
    ],
  },
  related: [
    { label: "Fusionner des fichiers PDF", path: "/merge-pdf" },
    { label: "Diviser un PDF", path: "/split-pdf" },
    { label: "Faire pivoter un PDF", path: "/rotate-pdf" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Mon fichier est-il envoyé sur un serveur ?",
      a: "Non. Le filigrane est appliqué entièrement dans votre navigateur ; rien ne quitte votre appareil.",
    },
    {
      q: "Peut-on utiliser une autre police ?",
      a: "Pas dans cet outil — nous utilisons Helvetica pour que le résultat reste portable. Pour des polices personnalisées, utilisez l’application PDF Editor.",
    },
    {
      q: "Le filigrane apparaît-il sur toutes les pages ?",
      a: "Oui. Le même texte est appliqué en diagonale, au centre de chaque page.",
    },
    {
      q: "Un filigrane peut-il être retiré ?",
      a: "Par quelqu’un disposant des bons outils, oui. Il décourage un usage abusif involontaire, mais ce n’est pas une fonction de sécurité.",
    },
  ],
  appCta: {
    heading: "Besoin d’un filigrane avec une image ou un logo ?",
    sub: "PDF Editor pour iPhone et Android accepte les polices personnalisées, les images et un positionnement par page.",
  },
};

export default content;
