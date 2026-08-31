import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF ou DOCX en entreprise (contrats, rapports, diffusion)",
  description:
    "Pourquoi les documents professionnels circulent presque toujours en PDF mais vivent en DOCX. Le bon outil à chaque étape de la vie d’un contrat, d’un rapport ou d’une facture.",
  updated: "2026-05-29",
  intro: [
    "Les documents professionnels suivent un cycle de vie assez prévisible. Ils sont rédigés dans Word (DOCX), relus et modifiés dans Word, finalisés dans Word, puis exportés en PDF pour la livraison, la signature, l’archivage et la diffusion. Le même fichier existe sous deux formats à des étapes différentes, et utiliser le mauvais format au mauvais moment est justement la source de la plupart des frictions.",
    "Le DOCX est le format de travail parce qu’il est modifiable, adapté à la collaboration et gère bien le suivi des modifications. Le PDF est le format de livraison parce qu’il verrouille la mise en page, s’affiche à l’identique sur tous les appareils, prend en charge les signatures électroniques, et reste la norme universelle pour les documents professionnels archivés.",
    "Ce guide détaille le cycle de vie étape par étape — quand utiliser quel format, comment passer proprement de l’un à l’autre, et les erreurs courantes des entreprises qui envoient le mauvais format au mauvais moment.",
  ],
  steps: [
    {
      title: "Rédigez en DOCX là où se fait l’édition",
      body: "Microsoft Word, Google Docs (export DOCX), Pages → DOCX. Le format prend en charge la véritable édition, les commentaires, le suivi des modifications, le travail à plusieurs auteurs. Le PDF ne le fait pas, malgré certains outils qui le simulent.",
    },
    {
      title: "Négociez les contrats en DOCX avec suivi des modifications",
      body: "Les corrections de contrat appartiennent au DOCX. La partie destinataire voit ce que vous avez changé, commente chaque point, et produit une contre-proposition. Des outils de correction PDF existent mais sont plus lents et moins collaboratifs.",
    },
    {
      title: "Exportez en PDF quand la version est finale",
      body: "Word vers PDF dans votre navigateur produit un export propre avec polices intégrées et mise en page stable. C’est cette version qui part chez le client, se fait signer, et vit dans les archives.",
    },
    {
      title: "Signez et livrez en PDF",
      body: "Les signatures s’attachent au PDF, pas au DOCX. Signer le PDF ou l’application PDF Editor capture la signature sur le PDF verrouillé ; la source DOCX reste la trace modifiable.",
    },
    {
      title: "Archivez le PDF, conservez le DOCX",
      body: "Le PDF est la trace officielle de ce qui a été livré ou signé. Le DOCX est conservé au cas où vous devriez produire un document apparenté plus tard. Les deux ont leur place ; ne les confondez pas.",
    },
    {
      title: "Ne reconvertissez le PDF en DOCX qu’en dernier recours",
      body: "PDF vers Word récupère le texte d’un PDF quand vous n’avez pas la source. Le résultat est approximatif — attendez-vous à devoir nettoyer la mise en page. À traiter comme un filet de sécurité, pas comme une méthode de travail.",
    },
  ],
  tips: [
    "N’envoyez pas le DOCX à un client sauf s’il le demande explicitement. C’est la version PDF qui fait foi pour l’accord ; le DOCX est votre source de travail.",
    "Suivez les modifications uniquement dans le DOCX. Des outils d’annotation PDF existent mais ne remplacent pas un vrai suivi des modifications.",
    "Intégrez les polices lors de l’export PDF. Un PDF qui s’affiche différemment sur la machine du client paraît peu professionnel.",
    "Compressez le PDF pour l’e-mail ou l’envoi sur un portail. La source DOCX n’a pas besoin d’être compressée ; elle est déjà légère. Le PDF, souvent, en a besoin.",
    "Gardez les deux formats dans le dossier du projet. Le PDF dans /final/, le DOCX dans /brouillons/ ou /source/.",
  ],
  mobileNote:
    "Le téléphone gère souvent les moments de fin de chaîne des documents professionnels — signer un contrat, compresser un rapport, envoyer la version finale. L’application PDF Editor gère tout cela sur iOS et Android, en complément du travail DOCX fait plus tôt sur ordinateur.",
  faq: [
    {
      q: "Pourquoi ne pas simplement tout faire en PDF ?",
      a: "Le PDF ne prend pas en charge la véritable édition, le suivi des modifications ni la collaboration à plusieurs auteurs. Pour la rédaction, le DOCX est réellement meilleur.",
    },
    {
      q: "Pourquoi ne pas simplement livrer en DOCX aussi ?",
      a: "Le DOCX s’affiche différemment selon les versions et les appareils. Les clients voient des mises en page différentes de celle que vous vouliez. Le PDF verrouille l’apparence.",
    },
    {
      q: "Les contrats doivent-ils être envoyés en PDF ou en DOCX ?",
      a: "Contrats finaux : en PDF, signés. Brouillons de négociation : en DOCX avec suivi des modifications. Des outils différents à des phases différentes.",
    },
    {
      q: "Et pour les archives — DOCX ou PDF ?",
      a: "Le PDF, comme trace de ce qui a été livré ou signé. Gardez le DOCX aussi pour référence, mais le PDF est la copie d’archive officielle.",
    },
    {
      q: "Quand la conversion PDF vers Word a-t-elle un sens ?",
      a: "Quand vous devez modifier un PDF dont vous n’avez pas la source. Attendez-vous à devoir nettoyer la mise en page ; la conversion est approximative.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
    { label: "Word vers PDF — exports propres pour la diffusion", path: "/word-to-pdf" },
    { label: "PDF vers Word — récupérer un texte modifiable", path: "/pdf-to-word" },
    { label: "PDF ou DOCX — comparaison complète des fonctionnalités", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et méthodes de travail", path: "/pdf-for-business" },
};

export default content;
