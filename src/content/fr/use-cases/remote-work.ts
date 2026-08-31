import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor en télétravail — vos documents partout",
  description:
    "Travaillez vos documents où que vous soyez : numériser, signer et partager un PDF depuis n’importe quel appareil.",
  intro: [
    "Le télétravail dissocie le bureau de l’emploi. L’inconvénient, c’est que les opérations documentaires qui se faisaient autrefois à l’imprimante, au scanner ou sur un lecteur partagé doivent désormais se faire sur l’appareil du moment — souvent dans un train, un café ou chez un client. Un éditeur de PDF mobile natif comble cet écart.",
    "Le critère minimal pour tout outil de télétravail : fonctionner avec un wifi capricieux, fonctionner hors connexion quand il le faut, ne pas exiger l’envoi de documents sensibles à un tiers, et fonctionner sur l’appareil du moment. PDF Editor répond aux quatre exigences, car toutes les opérations lourdes s’exécutent directement sur l’appareil.",
    "Voici les méthodes précises qui transforment un téléphone en bureau documentaire portable — sans dépendre d’un bureau fixe, d’un pays ou d’une connexion en particulier.",
  ],
  workflows: [
    {
      title: "Signer des documents en déplacement",
      body: "Signez un contrat dans un avion ou dans un train. La signature est enregistrée sur l’appareil ; le fichier est chiffré à l’enregistrement.",
    },
    {
      title: "Numériser quand il n’y a pas de scanner",
      body: "Chambre d’hôtel, centre de congrès, bureaux d’un client — l’appareil photo du téléphone associé à la correction automatique suffit largement pour tout document professionnel.",
    },
    {
      title: "Assembler des fichiers pour un envoi à distance",
      body: "Fusionnez les documents dont votre collègue a besoin en un seul PDF, partagez-le via Drive ou Slack, et c’est fait.",
    },
    {
      title: "Compresser avant d’envoyer sur un réseau lent",
      body: "Le wifi d’hôtel rend les grosses pièces jointes pénibles. Compressez d’abord, envoyez ensuite, et gagnez une heure.",
    },
    {
      title: "Corriger de petits détails sans démarrer un ordinateur portable",
      body: "Une faute dans un brouillon, une date erronée sur un devis — corrigez-la depuis le téléphone en 60 secondes et passez à autre chose.",
    },
  ],
  appPitch:
    "PDF Editor s’intègre naturellement au reste d’un environnement de télétravail — Drive, iCloud, Notion, Slack, Linear, GitHub. C’est la couche qui gère les opérations documentaires sans exiger de bureau ni de connexion stable.",
  related: [
    { label: "PDF en entreprise", path: "/pdf-for-business" },
    { label: "Cas d’usage — freelances", path: "/use-cases/freelancers" },
    { label: "Numériser en PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
