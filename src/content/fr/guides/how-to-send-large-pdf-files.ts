import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Comment envoyer un PDF trop lourd (5 méthodes fiables)",
  description:
    "Cinq façons fiables d’envoyer un PDF trop volumineux pour un e-mail — compresser, diviser, lien de partage et le reste — et comment choisir entre elles.",
  updated: "2026-05-23",
  intro: [
    "L’e-mail est l’endroit où les gros PDF finissent par rebondir. Les limites sont réelles et sans pitié — 25 Mo sur Gmail, environ 20 Mo sur Outlook, parfois moins côté destinataire — et un document riche en numérisations les dépasse facilement. La solution n’est pas une astuce unique ; c’est connaître la poignée d’options fiables et savoir laquelle convient à votre fichier et à votre destinataire.",
    "Ce guide présente les solutions concrètes, à peu près dans l’ordre où la plupart des gens devraient les essayer : réduire, diviser ou partager un lien. Deux d’entre elles utilisent des outils gratuits dans le navigateur qui fonctionnent sur votre appareil sans rien envoyer sur un serveur ; la troisième consiste à choisir une méthode de partage adaptée à la sensibilité du document.",
    "Le but est un fichier qui arrive intact et lisible, sans que vous abîmiez sa qualité ni le partagiez trop largement via un service auquel vous ne faites pas confiance.",
  ],
  steps: [
    {
      title: "Commencez par essayer de le compresser",
      body: "Passez le fichier dans l’outil Compresser un PDF. Les documents numérisés et riches en images passent souvent sous les limites d’e-mail en une seule fois, ce qui est la solution la plus simple possible.",
    },
    {
      title: "S’il est encore trop lourd, divisez-le",
      body: "Utilisez l’outil Diviser un PDF pour envoyer le document en deux ou trois fichiers plus légers. Deux moitiés lisibles valent mieux qu’un seul fichier compressé jusqu’à devenir illisible.",
    },
    {
      title: "Pour les fichiers très volumineux, partagez un lien cloud",
      body: "Envoyez le fichier vers un service cloud que vous contrôlez et partagez un lien. Cela contourne complètement les limites d’e-mail et vous permet de révoquer l’accès plus tard — mais choisissez un service de confiance pour les documents sensibles.",
    },
    {
      title: "Vérifiez la limite du destinataire, pas seulement la vôtre",
      body: "Votre fournisseur peut autoriser un envoi de 25 Mo alors que celui du destinataire refuse tout ce qui dépasse 10 Mo. Dans le doute, visez petit ou utilisez un lien.",
    },
    {
      title: "Confirmez que ce que vous envoyez est à la bonne taille et propre",
      body: "Quelle que soit la méthode choisie, ouvrez d’abord le fichier final — pages correctes, qualité lisible, rien qui n’aurait pas dû s’y trouver.",
    },
  ],
  tips: [
    "Procédez dans l’ordre : compresser, puis diviser, puis lien. Chaque étape demande plus d’effort que la précédente, alors arrêtez-vous dès que le fichier peut être envoyé.",
    "Un lien cloud est généralement la réponse honnête pour des fichiers vraiment énormes — mais pour les documents confidentiels, choisissez un service de confiance et révoquez l’accès quand il n’est plus nécessaire.",
    "La compression transforme les pages en images et supprime le texte sélectionnable. Si le destinataire doit pouvoir copier le texte, envoyez l’original via un lien plutôt qu’une pièce jointe fortement compressée.",
    "Diviser selon des frontières naturelles (chapitres, sections, signé ou non signé) est plus utile pour le destinataire que diviser à une page arbitraire.",
    "N’envoyez pas de documents sensibles vers un service tiers gratuit de « gros fichiers » que vous ne connaissez pas juste pour contourner une limite de taille — cela échange un petit désagrément contre un vrai risque pour la confidentialité.",
  ],
  mobileNote:
    "Quand le fichier trop volumineux est sur votre téléphone, l’application PDF Editor le compresse et le divise hors ligne, puis transmet directement le résultat à votre application de messagerie ou de mail — vous pouvez ainsi envoyer une grosse numérisation depuis n’importe où sans d’abord la transférer vers un service inconnu.",
  faq: [
    {
      q: "Quelle est la façon la plus simple d’envoyer un PDF trop volumineux ?",
      a: "Compressez-le d’abord. Les documents numérisés et riches en images passent souvent sous les limites d’e-mail en une seule fois, ce qui évite complètement de devoir diviser ou partager un lien.",
    },
    {
      q: "Quand dois-je diviser plutôt que compresser ?",
      a: "Quand la compression seule ne suffit pas à réduire le fichier sans ruiner la qualité. Deux ou trois fichiers lisibles valent mieux qu’un seul fichier dégradé.",
    },
    {
      q: "Les liens cloud sont-ils sûrs pour les documents sensibles ?",
      a: "Ils peuvent l’être, si vous utilisez un service de confiance et révoquez l’accès une fois terminé. Évitez les services gratuits inconnus de « gros fichiers » pour tout ce qui est confidentiel.",
    },
    {
      q: "Comment savoir si le destinataire pourra le recevoir ?",
      a: "Sa limite peut être inférieure à la vôtre. En cas de doute, compressez bien en dessous de 10 Mo ou envoyez un lien plutôt que de risquer un rejet silencieux.",
    },
    {
      q: "Compresser avant l’envoi va-t-il abîmer le document ?",
      a: "C’est une compression avec perte qui supprime le texte sélectionnable. Pour les documents où la qualité ou le texte consultable compte, partagez l’original via un lien plutôt que de l’écraser dans une pièce jointe.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire pour envoyer", path: "/compress-pdf" },
    { label: "Diviser un PDF — l’envoyer en plusieurs parties", path: "/split-pdf" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Comment partager un PDF depuis son téléphone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
