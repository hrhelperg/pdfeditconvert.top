import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Quand envoyer un PDF plutôt qu’un DOCX (check-list)",
  description:
    "Vous avez un document Word : faut-il l’envoyer en PDF ? Une check-list rapide des situations où le PDF s’impose, et comment convertir.",
  updated: "2026-05-23",
  intro: [
    "Vous venez de terminer un document dans Word, et une petite décision se pose : envoyer le .docx tel quel, ou d’abord le convertir en PDF ? Il est facile de se contenter de ce qui est sous la main, mais le mauvais choix a des conséquences — une mise en page qui casse sur l’écran de quelqu’un d’autre, un prix qu’un client modifie discrètement, un brouillon pris pour une version finale. Ce guide sert à repérer les moments où le PDF est clairement le meilleur envoi.",
    "Plutôt qu’une large comparaison de formats, voici une check-list de décision ciblée : une série de signaux qui signifient « convertir en PDF avant d’envoyer ». Quand aucun ne s’applique, votre DOCX convient tel quel. Quand un seul s’applique, l’outil gratuit Word vers PDF le convertit sur votre appareil en quelques secondes.",
    "Passez la check-list en revue quelques fois et elle devient un réflexe — vous saurez d’un coup d’œil si un document doit partir en Word ou en PDF.",
  ],
  steps: [
    {
      title: "Le document est-il final ?",
      body: "S’il est terminé et n’est pas censé être modifié — une lettre signée, un rapport achevé, un dossier de candidature — envoyez un PDF. Le DOCX invite à des changements que vous ne voulez pas une fois le document terminé.",
    },
    {
      title: "La mise en page doit-elle rester exactement telle que conçue ?",
      body: "Brochures, CV, tout ce où l’espacement et les polices comptent devrait partir en PDF. Le DOCX peut se remettre en page différemment sur une autre version de Word ou dans Google Docs, cassant votre mise en page soignée.",
    },
    {
      title: "Le destinataire pourrait-il le modifier à votre désavantage ?",
      body: "Devis, factures, contrats — partout où un chiffre ou une condition pourrait être altéré — appartiennent au PDF. Cela empêche les modifications occasionnelles et garde une trace fixe de ce que vous avez envoyé.",
    },
    {
      title: "Se pourrait-il qu’il n’ait pas Word ?",
      body: "Le PDF s’ouvre nativement sur n’importe quel téléphone, tablette et ordinateur. Si vous n’êtes pas sûr que le destinataire dispose d’une suite bureautique, le PDF garantit qu’il pourra le lire sans rien installer.",
    },
    {
      title: "Va-t-il dans une archive ?",
      body: "Pour un stockage à long terme, le PDF s’affiche de la même façon dans dix ans ; le DOCX peut dériver d’une version de Word à l’autre. Archivez en PDF, gardez le DOCX comme version maîtresse modifiable.",
    },
    {
      title: "Si une réponse est oui, convertissez-le",
      body: "Ouvrez l’outil Word vers PDF, ajoutez votre .docx, et téléchargez le PDF — sur votre appareil, sans rien envoyer sur un serveur. Gardez le fichier Word original pour de futures modifications.",
    },
  ],
  tips: [
    "Gardez le DOCX quand le document est encore en cours de travail, a besoin de commentaires ou de suivi des modifications, ou que le destinataire est censé le modifier. Le PDF est pour les documents finis et fixés.",
    "Gardez toujours le .docx modifiable. Le PDF est la copie d’envoi ; le fichier Word est votre version maîtresse pour la prochaine révision.",
    "Acceptez ou retirez les modifications suivies avant de convertir, sinon elles peuvent apparaître dans le PDF pour tout le monde.",
    "Convertir en PDF verrouille la mise en page mais ne chiffre pas le fichier. S’il a besoin d’une vraie protection, ajoutez un mot de passe comme étape séparée.",
    "Si un destinataire demande un « PDF modifiable », il veut généralement dire DOCX — vérifiez avant de supposer, puis envoyez le bon.",
  ],
  mobileNote:
    "La décision d’envoyer un PDF se prend souvent loin de votre bureau, quand un document terminé doit partir maintenant. L’application PDF Editor convertit et envoie depuis votre téléphone, pour verrouiller un document et l’envoyer par e-mail sans attendre de retrouver un ordinateur.",
  faq: [
    {
      q: "Quand dois-je envoyer un PDF plutôt qu’un fichier Word ?",
      a: "Quand le document est final, que la mise en page doit rester fixe, que le destinataire pourrait le modifier à votre désavantage, qu’il pourrait ne pas avoir Word, ou qu’il va dans une archive. Chacun de ces cas signifie : convertir en PDF.",
    },
    {
      q: "Quand vaut-il mieux garder le DOCX ?",
      a: "Quand le document est encore en cours de rédaction, a besoin de commentaires ou de suivi des modifications, ou que le destinataire est censé le modifier. Le DOCX est le format de travail ; le PDF est celui de la version finale.",
    },
    {
      q: "Convertir de Word vers PDF va-t-il changer ma mise en page ?",
      a: "Pour les documents avec des polices courantes, non — c’est justement l’intérêt du PDF. Surveillez seulement les polices inhabituelles, qui peuvent être remplacées. Ouvrez le PDF et vérifiez avant d’envoyer.",
    },
    {
      q: "Envoyer un PDF protège-t-il le document ?",
      a: "Cela empêche les modifications occasionnelles et fixe la mise en page, mais ce n’est pas du chiffrement. Pour une vraie protection contre l’ouverture ou la copie, ajoutez un mot de passe séparément.",
    },
    {
      q: "Où puis-je voir une comparaison plus complète entre PDF et DOCX ?",
      a: "Voir le guide et la comparaison PDF contre DOCX pour un aperçu plus large de comment les deux formats diffèrent en édition, fidélité et signature.",
    },
  ],
  related: [
    { label: "Word vers PDF — convertir dans votre navigateur", path: "/word-to-pdf" },
    { label: "PDF ou DOCX — quel format utiliser", path: "/guides/pdf-vs-docx" },
    { label: "Comment convertir Word en PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF ou DOCX — comparaison de fonctionnalités", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
