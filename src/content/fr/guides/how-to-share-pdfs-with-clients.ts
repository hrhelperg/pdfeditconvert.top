import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Comment partager des PDF avec ses clients (avec sérieux et discrétion)",
  description:
    "Un mode d’emploi court pour envoyer un PDF à un client — poids adapté à l’e-mail, choix du mot de passe, identité visuelle, accusé de réception — sans rien confier à un tiers.",
  updated: "2026-05-29",
  intro: [
    "La façon dont vous envoyez un PDF à un client en dit étonnamment long sur votre façon de travailler. Une pièce jointe de 40 Mo qui rebondit, un nom de fichier générique comme « Document (1).pdf », ou un fichier qui s’ouvre avec le nom du client mal orthographié dans la barre de titre — ce sont de petits détails, et ils marquent tous les esprits.",
    "Un envoi client professionnel tient surtout à une poignée d’habitudes : ajuster la taille du fichier, le nommer comme un livrable, garder une identité visuelle cohérente, protéger par mot de passe quand c’est justifié, et confirmer la réception. Aucune ne prend longtemps une fois qu’elles sont devenues des réflexes ; ensemble, elles donnent au fichier un air fini.",
    "Ce guide est ce mode d’emploi court — ce qu’il faut faire avant d’appuyer sur envoyer, et quels outils gratuits gèrent chaque étape sans rien envoyer sur un serveur tiers.",
  ],
  steps: [
    {
      title: "Nommez le fichier pour le client, pas pour vous",
      body: "NomClient_NomProjet_Proposition_2026-05-29.pdf est sans ambiguïté. « final_v3_modifie.pdf » est un aveu. Le destinataire devrait pouvoir identifier le fichier depuis son dossier de téléchargements un mois plus tard.",
    },
    {
      title: "Faites correspondre le titre du document dans les métadonnées",
      body: "Les onglets de PDF affichent souvent le nom de fichier original ou un reliquat de Word. Réexportez depuis l’application source avec le titre de métadonnées défini, ou utilisez un éditeur de PDF pour le définir. Petit détail, finition professionnelle.",
    },
    {
      title: "Compressez pour la boîte de réception du client",
      body: "Certains portails clients plafonnent à 5 Mo ; la plupart des systèmes d’e-mail à 25. Compresser un PDF dans votre navigateur fait passer un livrable typique confortablement sous les deux. Faites-en la dernière étape, pas la première.",
    },
    {
      title: "Protégez par mot de passe seulement quand c’est justifié",
      body: "Utilisez des mots de passe pour du matériel vraiment sensible — détails financiers, informations personnelles identifiables, contrats en brouillon. Ne protégez pas la proposition elle-même par mot de passe ; la friction dépasse le bénéfice de sécurité.",
    },
    {
      title: "Envoyez une note d’accompagnement qui liste le contenu",
      body: "Une phrase courte : « En pièce jointe : proposition (12 pages), conditions (3 pages), tarification (1 page). » Le client sait ce qu’il ouvre sans devoir d’abord parcourir le fichier.",
    },
    {
      title: "Confirmez la réception par un suivi",
      body: "Soit vous demandez « prévenez-moi si tout arrive lisible » dans la note, soit vous vérifiez un jour plus tard. Les fichiers finissent parfois dans les spams, surtout les pièces jointes avec mot de passe.",
    },
  ],
  tips: [
    "Filigranez les brouillons (BROUILLON, INTERNE) mais jamais la version finale. La finale ne devrait pas avoir besoin d’étiquette.",
    "Alignez votre convention de nommage sur celle du client si vous pouvez la deviner — beaucoup de clients d’entreprise ont un standard de nommage de documents que vous pouvez reproduire.",
    "Évitez d’envoyer plus de trois pièces jointes. Fusionnez ce qui va ensemble ; envoyez le reste en suivi si nécessaire.",
    "Si vous avez besoin d’une signature en retour, signez votre partie en premier et pré-remplissez le champ de signature pour la leur. C’est une petite attention qui revient plus vite.",
    "Testez votre fichier sur un lecteur neuf avant de l’envoyer — votre propre lecteur peut afficher des mises en page que d’autres n’affichent pas.",
  ],
  mobileNote:
    "Les clients lisent de plus en plus les livrables d’abord sur téléphone. L’application PDF Editor permet de prévisualiser, compresser, signer et repartager des PDF depuis mobile, pour qu’une révision client de dernière minute n’attende pas votre retour au bureau.",
  faq: [
    {
      q: "Quelle est l’erreur la plus courante en envoyant des PDF à des clients ?",
      a: "Le nom de fichier. « Document (1).pdf » signale au client que vous ne faites pas attention. Un nom descriptif avec le projet et la date rend le fichier retrouvable plus tard.",
    },
    {
      q: "Dois-je protéger par mot de passe tout ce que j’envoie ?",
      a: "Non. Réservez les mots de passe au contenu vraiment sensible. Les livrables courants n’en ont pas besoin, et trop de mots de passe apprend aux clients à les ignorer ou à les perdre.",
    },
    {
      q: "Quelle taille le fichier peut-il avoir ?",
      a: "L’e-mail plafonne à 25 Mo ; beaucoup de portails clients à 5. Compressez tout ce qui dépasse 5 Mo, sauf si vous savez que le client accepte plus grand. Plus petit est toujours plus sûr.",
    },
    {
      q: "Dois-je envoyer plusieurs PDF ou les fusionner ?",
      a: "Fusionnez quand ils vont ensemble (proposition + conditions + tarification). Gardez-les séparés quand ce sont des livrables vraiment différents. Trois pièces jointes est la limite pratique avant que les choses se perdent.",
    },
    {
      q: "Est-il acceptable d’utiliser des outils PDF en ligne pour le travail client ?",
      a: "Seulement s’ils fonctionnent localement dans votre navigateur. Envoyer un document client sensible sur un serveur tiers est un vrai risque. Les outils dans le navigateur qui traitent sur votre appareil l’évitent complètement.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et flux de travail", path: "/pdf-for-business" },
    { label: "Compresser un PDF — réduire pour les portails clients", path: "/compress-pdf" },
    { label: "Comment préparer un PDF pour un usage professionnel", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Comment créer des fichiers PDF prêts pour les clients", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et flux de travail", path: "/pdf-for-business" },
};

export default content;
