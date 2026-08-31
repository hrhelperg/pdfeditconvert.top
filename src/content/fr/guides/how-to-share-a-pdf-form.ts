import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Comment diffuser un formulaire PDF à faire remplir",
  description:
    "Envoyer un formulaire vierge à compléter n’a rien à voir avec l’envoi d’un document fini. Comment le diffuser pour que les destinataires puissent réellement le remplir, et comment récupérer les réponses.",
  updated: "2026-06-01",
  intro: [
    "Partager un formulaire PDF paraît trivial — le joindre, appuyer sur envoyer — mais il y a une différence entre diffuser un formulaire vierge à compléter et envoyer un document à lire. Quand vous partagez un formulaire, il faut que les destinataires puissent le remplir sur l’appareil dont ils disposent, et que leurs copies remplies vous reviennent dans un état réellement exploitable.",
    "Deux choses tournent mal le plus souvent. Le formulaire arrive d’une façon qui supprime ou masque ses champs, si bien que les destinataires ne peuvent pas saisir de texte. Ou bien les réponses reviennent de façon incohérente — certaines aplaties, d’autres modifiables, d’autres encore sous forme de photos d’un tirage papier. Un peu d’attention au moment de l’envoi évite les deux problèmes et rend la collecte des réponses bien moins pénible.",
    "Ce guide explique comment partager un formulaire vierge pour qu’il reste remplissable, comment donner des instructions claires aux destinataires, et comment traiter les copies remplies à mesure qu’elles reviennent — sans faire transiter quoi que ce soit par un service tiers d’envoi sur un serveur si le contenu est sensible.",
  ],
  steps: [
    {
      title: "Vérifiez que le formulaire vierge est remplissable avant de l’envoyer",
      body: "Ouvrez votre formulaire et vérifiez-le vous-même. S’il est interactif, assurez-vous que les champs sont actifs ; s’il est non interactif, assurez-vous qu’il y a un espace clair pour les réponses. N’aplatissez pas un formulaire vierge — cela supprime les champs dont les destinataires ont besoin.",
    },
    {
      title: "Envoyez le fichier, pas un lien vers un convertisseur",
      body: "Joignez le PDF directement à un e-mail ou à un message, ou partagez-le via un espace de stockage que le destinataire utilise déjà. Évitez de faire transiter un formulaire sensible par des outils publics d’envoi sur un serveur quand une simple pièce jointe suffit.",
    },
    {
      title: "Expliquez aux destinataires comment le remplir",
      body: "Une note d’une ligne aide beaucoup : « Touchez les champs pour saisir, ou ajoutez du texte par-dessus si votre lecteur n’affiche pas de champs, puis exportez une copie remplie. » Orientez les utilisateurs de téléphone vers une vraie application PDF plutôt que vers un aperçu e-mail.",
    },
    {
      title: "Demandez des copies remplies dans un format exploitable",
      body: "Demandez qu’on vous renvoie un PDF enregistré ou aplati plutôt qu’une photo d’un tirage papier. Les copies aplaties s’affichent de façon cohérente et sont plus faciles à classer et à lire.",
    },
    {
      title: "Collectez et organisez les réponses",
      body: "À mesure que les copies reviennent, renommez-les par répondant et par date pour qu’elles ne se mélangent pas. Gardez le modèle vierge à part pour toujours disposer d’un exemplaire propre à renvoyer.",
    },
  ],
  tips: [
    "N’aplatissez jamais le formulaire vierge que vous diffusez — l’aplatissement supprime les champs et ne laisse rien à remplir aux destinataires.",
    "Si les destinataires n’arrêtent pas d’envoyer des photos de tirages papier, vos instructions doivent être plus claires sur le remplissage à l’écran et l’export.",
    "Pour les formulaires sensibles, préférez les pièces jointes directes ou un espace de stockage privé aux sites publics « à remplir en ligne ».",
    "Donnez au fichier un nom clair, comme « fiche-client-vierge.pdf », pour que les destinataires distinguent le modèle de leur copie remplie.",
    "Le comportement d’un formulaire peut varier d’un lecteur à l’autre, donc suggérer une application fiable précise évite la plupart des réponses du type « je n’arrive pas à saisir de texte ».",
  ],
  mobileNote:
    "Les destinataires sur téléphone peuvent remplir votre formulaire dans l’application PDF Editor — elle active les champs interactifs et laisse les gens ajouter du texte sur les formulaires non interactifs — puis exporter une copie remplie à renvoyer directement. La suggérer dans votre message évite à ceux qui seraient sinon coincés dans un aperçu e-mail qui ignore les champs.",
  faq: [
    {
      q: "Comment partager un formulaire PDF pour que les gens puissent le remplir ?",
      a: "Envoyez le PDF à remplir en pièce jointe directe ou via un espace de stockage partagé, sans l’aplatir au préalable. Dites aux destinataires de l’ouvrir dans une vraie application PDF, de remplir les champs ou d’ajouter du texte, puis d’exporter une copie remplie.",
    },
    {
      q: "Pourquoi mes destinataires ne peuvent-ils pas saisir de texte dans le formulaire que j’ai envoyé ?",
      a: "Ils l’ouvrent souvent dans un aperçu e-mail ou un lecteur qui ignore les champs de formulaire, ou bien le formulaire est non interactif. Recommandez une application PDF dédiée, et précisez qu’ils peuvent ajouter du texte par-dessus si aucun champ n’apparaît.",
    },
    {
      q: "Dois-je partager un formulaire via un service de remplissage en ligne ?",
      a: "Pour des formulaires ordinaires, cela peut être pratique, mais pour tout contenu sensible, une pièce jointe directe ou un espace de stockage privé garde le contenu à l’écart des serveurs tiers. Adaptez le canal à la sensibilité du formulaire.",
    },
    {
      q: "Comment les formulaires remplis doivent-ils me revenir ?",
      a: "Demandez un PDF enregistré ou aplati plutôt qu’une photo d’un tirage papier. Les copies aplaties ont le même aspect partout et sont bien plus faciles à classer et à traiter.",
    },
    {
      q: "Comment garder les réponses organisées ?",
      a: "Renommez chaque fichier reçu par répondant et par date, stockez-les dans un seul dossier, et gardez le modèle vierge à part pour toujours pouvoir renvoyer un exemplaire propre.",
    },
  ],
  related: [
    {
      label: "Comment renvoyer un formulaire PDF rempli",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Comment envoyer une fiche client à remplir",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Collecter des documents en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Comment partager des PDF avec des clients",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
