import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Comment supprimer les pages inutiles d’un PDF",
  description:
    "Retirez les pages blanches, les pages de garde ou les sections hors sujet d’un PDF en ne gardant que les pages voulues. Un fichier propre, sans rien envoyer.",
  updated: "2026-05-23",
  intro: [
    "Beaucoup de PDF arrivent avec des pages dont vous ne voulez pas : une page de garde de fax, une page blanche que le scanner a ajoutée, une annexe de conditions générales que personne n’a demandée, ou des pages en double issues d’une fusion bâclée. Envoyer le document avec ce fouillis encore attaché fait négligé et, parfois, laisse fuiter une information que vous préféreriez ne pas partager.",
    "La façon la plus propre de retirer des pages dans le navigateur consiste à garder celles que vous voulez. Ce guide utilise l’outil gratuit Extraire des pages PDF : au lieu de supprimer les pages indésirables une à une, vous listez les pages à garder, et tout le reste est simplement exclu du nouveau fichier. Il fonctionne entièrement sur votre appareil — rien n’est envoyé.",
    "Le résultat est un PDF net, avec uniquement les pages qui ont leur place, et votre original reste intact au cas où vous vous seriez trompé de numéro de page.",
  ],
  steps: [
    {
      title: "Identifiez les pages à retirer",
      body: "Ouvrez le PDF et notez les pages indésirables — la page 2 blanche, la page de garde, le doublon à la fin. Déterminez ensuite les pages que vous voulez garder.",
    },
    {
      title: "Ouvrez l’outil Extraire des pages PDF",
      body: "Rendez-vous sur l’outil Extraire des pages PDF dans votre navigateur. Il fonctionne sur votre appareil, sans envoi ni compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. L’outil charge le nombre de pages pour que vous puissiez être précis.",
    },
    {
      title: "Listez les pages à garder",
      body: "Saisissez les pages et plages à conserver — par exemple 1, 3-7, 9. Les pages indésirables ne sont pas listées, donc elles n’apparaissent pas dans le résultat.",
    },
    {
      title: "Créez le PDF nettoyé",
      body: "Lancez l’extraction. L’outil construit un nouveau fichier contenant uniquement les pages conservées, dans l’ordre.",
    },
    {
      title: "Vérifiez et enregistrez",
      body: "Ouvrez le nouveau PDF, confirmez que les pages indésirables ont disparu et que rien d’important n’est parti avec elles, puis enregistrez-le sous un nom clair.",
    },
  ],
  tips: [
    "Retirer des pages en gardant les autres est la méthode fiable dans le navigateur — vous décrivez ce que vous voulez, pas ce qu’il faut supprimer, ce qui évite les erreurs de décalage d’une page.",
    "Surveillez les pages blanches issues des scanners. Un bac d’alimentation de documents insère souvent une page blanche entre des originaux recto verso ; ce sont les pages qu’on oublie le plus facilement de retirer.",
    "Retirer une page est aussi une mesure de confidentialité. Des notes internes, un tarif que vous ne vouliez pas partager, ou les coordonnées d’un précédent destinataire peuvent se cacher sur des pages dont vous n’avez pas besoin.",
    "Vérifiez les numéros de page par rapport au document lui-même. Une page de garde peut décaler le compte, si bien que « page 5 » dans votre tête devient la page 6 du fichier.",
    "Gardez l’original. Si vous retirez par erreur une page dont vous aviez besoin, la source intacte est là pour recommencer.",
  ],
  mobileNote:
    "Retirer une page parasite avant de transférer un document depuis votre téléphone tient en quelques gestes dans l’application PDF Editor, qui supprime les pages directement et fonctionne hors connexion — pour que la page de garde ou la page blanche ne se retrouve jamais dans la copie envoyée.",
  faq: [
    {
      q: "Comment supprimer des pages avec un outil dans le navigateur ?",
      a: "Gardez les pages voulues avec l’outil Extraire des pages PDF. En listant uniquement les pages à conserver, les pages indésirables sont exclues du nouveau fichier — une façon propre de retirer des pages sans étape de suppression.",
    },
    {
      q: "Mon fichier original va-t-il être modifié ?",
      a: "Non. L’outil crée un nouveau PDF et laisse la source intacte, donc une erreur se corrige facilement en recommençant.",
    },
    {
      q: "Le fichier est-il envoyé quelque part ?",
      a: "Non. Tout se passe dans votre navigateur, sur votre appareil, ce qui compte quand les pages retirées contiennent des informations sensibles.",
    },
    {
      q: "Puis-je retirer des pages non consécutives ?",
      a: "Oui. Gardez un mélange de pages individuelles et de plages, comme 1, 4, 8-10, et chaque page non listée est exclue.",
    },
    {
      q: "Et si je veux supprimer des pages directement plutôt que garder les autres ?",
      a: "L’application mobile PDF Editor permet de toucher et de supprimer des pages précises, ce que certains trouvent plus intuitif que l’approche « garder ce que vous voulez ».",
    },
  ],
  related: [
    { label: "Extraire des pages PDF — ne garder que ce que vous voulez", path: "/extract-pdf-pages" },
    { label: "Diviser un PDF — découper un fichier par plage", path: "/split-pdf" },
    { label: "Comment extraire des pages d’un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Comment organiser ses fichiers PDF", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Extraire des pages PDF", path: "/extract-pdf-pages" },
};

export default content;
