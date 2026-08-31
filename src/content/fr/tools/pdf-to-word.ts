import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF en Word",
    h1: "Convertissez un PDF en Word modifiable — dans votre navigateur.",
    highlight: "dans votre navigateur",
    lead: "Extrayez le texte d’un PDF vers un .docx modifiable que vous retravaillez dans Word, Google Docs ou Pages. Une conversion de texte honnête — sans fausse promesse de « mise en page parfaite ».",
  },
  privacyNote:
    "Votre fichier est traité localement, dans votre navigateur, et n’est jamais envoyé à nos serveurs. Rien ne quitte votre appareil.",
  howTo: {
    heading: "Comment convertir un PDF en Word",
    steps: [
      {
        title: "Choisissez le PDF",
        body: "Glissez-déposez un PDF contenant du texte, ou cliquez pour choisir un fichier.",
      },
      {
        title: "Convertissez",
        body: "Cliquez sur Convertir en Word. Le texte sélectionnable est extrait localement, dans votre navigateur.",
      },
      {
        title: "Téléchargez",
        body: "Un fichier .docx se télécharge automatiquement — ouvrez-le et modifiez-le où vous voulez.",
      },
      {
        title: "Ajustez",
        body: "Réappliquez les titres et la mise en forme dans votre éditeur. Le texte est prêt à être réorganisé.",
      },
    ],
  },
  useCases: {
    heading: "Quand cet outil est le bon choix",
    items: [
      {
        title: "Réutiliser des clauses de contrat",
        body: "Récupérez des passages d’un contrat en PDF vers une version modifiable, plutôt que de tout retaper.",
      },
      {
        title: "Réutiliser un rapport",
        body: "Reprenez le corps de texte d’un rapport en PDF dans un document que vous pouvez restructurer.",
      },
      {
        title: "Citer et résumer",
        body: "Extrayez des passages pour vos notes, un résumé ou une citation, sans transcrire à la main.",
      },
      {
        title: "Récupérer un PDF sans fichier source",
        body: "Retrouvez du texte modifiable quand le .docx d’origine a disparu depuis longtemps.",
      },
    ],
  },
  limitations: {
    heading: "Limites assumées",
    items: [
      {
        title: "La mise en page n’est pas conservée",
        body: "L’outil n’extrait que le texte. Colonnes, tableaux, espacement exact, polices et images ne sont pas reproduits — vous réappliquez la mise en forme dans votre éditeur.",
      },
      {
        title: "Les PDF numérisés ne fonctionnent pas",
        body: "Un PDF composé uniquement d’images n’a pas de couche de texte. L’OCR n’est pas disponible dans le navigateur ; utilisez l’application PDF Editor pour les numérisations.",
      },
      {
        title: "Les documents complexes demandent une reprise",
        body: "Un PDF très mis en page (plusieurs colonnes, notes de bas de page) est extrait comme un flux de texte lisible que vous devrez réorganiser.",
      },
    ],
  },
  related: [
    { label: "Word en PDF — le chemin inverse", path: "/word-to-pdf" },
    { label: "PDF en images", path: "/pdf-to-images" },
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    { label: "PDF ou DOCX — que choisir", path: "/compare/pdf-vs-docx" },
    {
      label: "Comment convertir un PDF en Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Mon fichier est-il envoyé sur un serveur ?",
      a: "Non. L’extraction du texte fonctionne entièrement dans votre navigateur. Votre PDF ne quitte jamais votre appareil.",
    },
    {
      q: "Le fichier Word sera-t-il identique au PDF ?",
      a: "Non — et nous ne prétendrons pas le contraire. C’est une conversion de texte pratique. La mise en page, les polices, les colonnes et les images ne sont pas conservées ; vous réappliquez la mise en forme dans votre éditeur.",
    },
    {
      q: "« Aucun texte trouvé » s’affiche — pourquoi ?",
      a: "Votre PDF est probablement une numérisation ou un fichier composé uniquement d’images, sans couche de texte. Les outils de navigateur ne font pas d’OCR ; l’application PDF Editor, si.",
    },
    {
      q: "Quel format vais-je recevoir ?",
      a: "Un fichier .docx standard, qui s’ouvre dans Microsoft Word, Google Docs, Pages et LibreOffice.",
    },
    {
      q: "Peut-on reconvertir dans l’autre sens ?",
      a: "Oui — utilisez l’outil Word en PDF pour retransformer le .docx modifié en PDF.",
    },
  ],
  appCta: {
    heading: "Besoin d’outils PDF dans l’urgence ?",
    sub: "PDF Editor pour iPhone et Android convertit, modifie et signe vos documents directement depuis votre téléphone.",
  },
};

export default content;
