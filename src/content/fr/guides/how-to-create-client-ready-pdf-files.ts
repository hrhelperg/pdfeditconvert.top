import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Comment créer un PDF prêt à envoyer au client (soigné, à vos couleurs)",
  description:
    "Ce qui sépare un PDF interne d’un PDF client : page de garde, pagination, identité visuelle, poids du fichier, nom du fichier. Les finitions rapides qui donnent l’impression d’un document abouti.",
  updated: "2026-05-29",
  intro: [
    "Il y a une différence entre un PDF de travail et un PDF prêt pour le client, et cette différence tient surtout à des petits détails. La version interne a une couverture provisoire, aucune numérotation de page, un poids de 14 Mo et un nom de fichier du genre « final-final-v2.pdf ». La version prête pour le client a une couverture nette, une typographie à vos couleurs, des pages numérotées, un poids de 2 Mo et un nom qui fait professionnel. Les deux contiennent la même information ; un seul donne l’impression d’être terminé.",
    "Produire la version prête pour le client ne demande pas de graphiste. C’est une courte séquence de gestes standards — ajuster la source, réexporter proprement, peaufiner le PDF, l’étiqueter correctement, le compresser avec discernement, le renommer avec soin. Fait dans l’ordre, ce peaufinage prend quelques minutes par document.",
    "Ce guide détaille cette séquence. Aucune de ces étapes n’exige d’outil coûteux ; la plupart se font dans un onglet de navigateur, sans rien envoyer sur un serveur.",
  ],
  steps: [
    {
      title: "Partez d’une source correctement mise en page",
      body: "Si le document source a l’air provisoire, le PDF le sera aussi. Corrigez les marges, les choix de police et la hiérarchie des titres dans Word, Pages ou Docs avant l’export. Le PDF ne peut pas ajouter de soin qui n’existe pas déjà dans la source.",
    },
    {
      title: "Ajoutez une page de garde qui nomme le livrable",
      body: "Nom du client, nom du projet, titre du document, date, nom de votre entreprise. Une seule page. Elle donne un contexte que le document n’a pas besoin de répéter dans chaque en-tête.",
    },
    {
      title: "Numérotez les pages à partir de la deuxième",
      body: "Le format X sur Y est sans ambiguïté et confirme que rien ne manque. Ne numérotez pas la couverture ; commencez à la page 2.",
    },
    {
      title: "Appliquez une identité visuelle cohérente (typographie, couleur, logo)",
      body: "Un petit logo et un système typographique constant signalent le soin apporté. L’identité visuelle doit rester discrète, pas envahissante. Si le client a une charte graphique, suivez-la.",
    },
    {
      title: "Réexportez avec les polices intégrées",
      body: "Les polices intégrées garantissent que le document a le même aspect chez le client que chez vous. Réexportez depuis la source en activant « intégrer toutes les polices ».",
    },
    {
      title: "Compressez, renommez et vérifiez avant l’envoi",
      body: "Compressez le PDF pour rester sous la limite habituelle des e-mails. Renommez-le NomClient_TypeDocument_AAAA-MM-JJ.pdf. Ouvrez le fichier final une fois et relisez la première et la dernière page avant l’envoi — les coquilles se repèrent à la relecture.",
    },
  ],
  tips: [
    "Évitez les fonds d’image tout faits et les pages de titre qui font capture d’écran. Une couverture épurée, portée par la typographie, vieillit mieux qu’une couverture trop travaillée.",
    "Ne mettez pas de filigrane « BROUILLON » sur la version finale. C’est justement l’absence de filigrane qui indique que le document est définitif.",
    "Les tableaux qui s’étalent sur plusieurs pages doivent répéter leur ligne d’en-tête. Dans Word, « répéter la ligne d’en-tête » est un clic qui évite des problèmes de lisibilité à l’impression.",
    "Les graphiques exportés en vectoriel (PDF) restent nets. Les graphiques collés comme image deviennent flous en zoomant — corrigez ce point à la source.",
    "Si vous réutilisez le même modèle d’un client à l’autre, rafraîchissez les métadonnées à chaque fois pour que le titre du document n’affiche pas « Proposition Acme » alors qu’il part chez Beta Co.",
  ],
  mobileNote:
    "Les clients ouvrent souvent le livrable sur téléphone en premier. L’application PDF Editor permet de prévisualiser le PDF final sur téléphone, exactement comme le client le verra, ce qui permet de repérer avant l’envoi une page de couverture qui a fière allure sur un écran de 27 pouces mais qui se retrouve à l’étroit sur un téléphone.",
  faq: [
    {
      q: "Quel est le signe le plus révélateur qu’un PDF n’est pas prêt pour le client ?",
      a: "Un nom de fichier non retravaillé. « final_v3_revise.pdf » dit au client que c’est l’une de plusieurs versions. Un nom de fichier précis et daté signale un livrable abouti.",
    },
    {
      q: "Faut-il un logo sur chaque page ?",
      a: "Non. Un logo en couverture et un pied de page discret suffisent. Un gros logo sur chaque page donne l’impression d’une présentation commerciale, pas d’un document.",
    },
    {
      q: "Faut-il inclure un sommaire ?",
      a: "Au-delà de dix pages, oui. C’est une petite attention qui donne l’impression d’un document fini et qui aide le lecteur à s’orienter.",
    },
    {
      q: "Quel format de numérotation est le meilleur ?",
      a: "X sur Y. Le Y confirme que rien ne manque. Un simple X convient pour les documents courts, mais perd ce signal d’intégrité.",
    },
    {
      q: "Vaut-il la peine de concevoir une couverture sur mesure ?",
      a: "Pour des livrables récurrents, oui — un modèle à vos couleurs se rentabilise sur de nombreux documents. Pour un document ponctuel, une couverture typographique épurée suffit.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
    { label: "Word vers PDF — exports propres pour la diffusion", path: "/word-to-pdf" },
    { label: "Comment partager un PDF avec ses clients", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Comment préparer un PDF pour un usage professionnel", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
};

export default content;
