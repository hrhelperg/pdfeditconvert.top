import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Comment préparer un PDF avant de l’envoyer (check-list)",
  description:
    "La vérification à faire avant d’envoyer un PDF : retirer les pages parasites, corriger l’orientation, réduire le poids et signaler un brouillon. Un document propre et calibré.",
  updated: "2026-05-23",
  intro: [
    "La minute avant d’appuyer sur envoyer est le moment le moins coûteux pour repérer un problème dans un PDF. Une fois qu’il est dans la boîte de réception de quelqu’un, la page blanche, la numérisation de travers, les 40 Mo, ou la note interne que vous avez oublié de retirer deviennent aussi son problème — et le vôtre pour vous excuser. Une courte vérification délibérée avant l’envoi évite presque tout ça.",
    "Ce guide, c’est cette vérification : une check-list pratique qui prend quelques minutes et utilise des outils gratuits dans le navigateur, chacun fonctionnant sur votre appareil sans rien envoyer. Elle vise les documents qui partent vraiment vers d’autres personnes — devis, contrats, dossiers de candidature, rapports.",
    "Rien de tout cela n’est du polissage pour le plaisir. Il s’agit qu’un destinataire ouvre votre fichier et trouve exactement ce qu’il attendait, dans une taille qu’il peut réellement recevoir, sans rien de superflu attaché.",
  ],
  steps: [
    {
      title: "Confirmez que c’est la bonne version, finale",
      body: "Ouvrez le fichier et vérifiez que c’est le dernier brouillon, entièrement finalisé. Un PDF est un instantané — corriger une faute après l’envoi oblige à renvoyer.",
    },
    {
      title: "Retirez ce qui ne doit pas partir",
      body: "Éliminez les pages blanches, les pages de garde, les notes internes et les pages destinées à quelqu’un d’autre en ne gardant que ce qui doit rester, avec l’outil Extraire des pages PDF.",
    },
    {
      title: "Corrigez l’orientation et l’ordre",
      body: "Utilisez l’outil Faire pivoter un PDF sur les pages de travers et l’outil Réorganiser les pages PDF sur tout ce qui est dans le désordre, pour que le document se lise proprement du début à la fin.",
    },
    {
      title: "Ramenez la taille sous la limite",
      body: "Si le fichier est lourd — les numérisations et les photos en sont souvent la cause — passez-le dans l’outil Compresser un PDF pour tenir sous les limites habituelles de 10 à 25 Mo des e-mails et des portails.",
    },
    {
      title: "Signalez son statut s’il n’est pas final",
      body: "Si vous partagez un brouillon pour relecture, ajoutez un filigrane BROUILLON avec l’outil Ajouter un filigrane à un PDF pour que personne ne le confonde avec la version signée.",
    },
    {
      title: "Nommez-le clairement et envoyez-le",
      body: "Donnez-lui un nom de fichier explicite et daté pour qu’il soit évident dans la boîte de réception du destinataire et facile à retrouver plus tard, puis joignez-le ou déposez-le.",
    },
  ],
  tips: [
    "L’oubli le plus courant avant l’envoi, c’est une page qui n’a rien à faire là — une page blanche, un doublon, ou une page avec des détails destinés à quelqu’un d’autre. Vérifiez page par page.",
    "Calibrez la taille selon le canal : l’e-mail plafonne autour de 25 Mo, beaucoup de portails de dépôt bien plus bas. Compresser un fichier riche en numérisations résout en général le problème.",
    "Un filigrane BROUILLON ou CONFIDENTIEL fixe les attentes et évite qu’une version de travail ne soit prise pour la version finale — une assurance peu coûteuse pour tout ce qui n’est pas encore signé.",
    "Un nom de fichier clair fait partie de la préparation du document. C’est la première chose que voit le destinataire et ce que vous rechercherez plus tard.",
    "Pour tout ce qui est vraiment sensible, envisagez aussi un mot de passe — la préparation, ce n’est pas que du rangement, c’est aussi ne pas trop en partager.",
  ],
  mobileNote:
    "Envoyer des documents directement depuis votre téléphone est exactement le moment où une vérification rapide paie. L’application PDF Editor permet de retirer des pages, faire pivoter, compresser, filigraner et renommer au même endroit avant l’envoi — hors connexion, sans rien envoyer.",
  faq: [
    {
      q: "Que dois-je vérifier avant d’envoyer un PDF ?",
      a: "Que c’est la version finale, sans pages parasites ou sensibles, correctement orientée et ordonnée, assez légère pour le canal utilisé, signalée si c’est un brouillon, et clairement nommée. Une vérification de deux minutes couvre tout ça.",
    },
    {
      q: "Comment m’assurer de ne pas partager les mauvaises pages ?",
      a: "Ne gardez que les pages qui doivent rester avec l’outil Extraire des pages PDF, et relisez le résultat page par page. Des notes internes et les coordonnées d’autres destinataires se cachent souvent sur des pages dont vous n’avez pas besoin.",
    },
    {
      q: "Pourquoi la taille du fichier compte-t-elle autant ?",
      a: "Les services de messagerie refusent les pièces jointes au-delà d’environ 25 Mo, et beaucoup de portails de dépôt plafonnent bien plus bas. Un PDF riche en numérisations dépasse facilement ces limites, donc le compresser évite un rejet ou un dépôt refusé.",
    },
    {
      q: "Ces outils de préparation sont-ils confidentiels ?",
      a: "Oui. Les outils d’extraction, de rotation, de réorganisation, de compression et de filigrane fonctionnent tous dans votre navigateur, sur votre appareil — rien n’est envoyé.",
    },
    {
      q: "Chaque PDF partagé doit-il être protégé par mot de passe ?",
      a: "Non — seulement ceux qui sont vraiment sensibles. Un mot de passe ajoute de la friction pour le destinataire, réservez-le donc aux documents dont le contenu a vraiment besoin d’être protégé.",
    },
  ],
  related: [
    { label: "Compresser un PDF — alléger pour l’e-mail", path: "/compress-pdf" },
    { label: "Ajouter un filigrane à un PDF — signaler les brouillons", path: "/add-watermark-to-pdf" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Comment partager un PDF depuis son téléphone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
};

export default content;
