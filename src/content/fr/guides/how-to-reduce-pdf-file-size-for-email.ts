import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Comment réduire la taille d’un PDF pour l’envoyer par e-mail",
  description:
    "Passez sous les limites de pièce jointe de Gmail et d’Outlook. Les plafonds réels, pourquoi les documents numérisés les dépassent, et comment alléger un fichier pour qu’il parte.",
  updated: "2026-05-23",
  intro: [
    "Les limites de pièce jointe des e-mails n’ont guère bougé depuis des années, mais les documents qu’on y joint deviennent toujours plus lourds. Gmail vous arrête à 25 Mo. Outlook trace la ligne autour de 20 Mo. Le serveur du destinataire peut plafonner encore plus bas. Vous joignez donc un contrat numérisé ou un rapport plein de photos, vous appuyez sur envoyer, et ça rebondit — ou pire, ça échoue en silence.",
    "Ce guide traite d’un objectif précis : rendre un PDF assez léger pour qu’il parte vraiment. Il utilise l’outil gratuit Compresser un PDF, qui fonctionne dans votre navigateur sans rien envoyer, et couvre les décisions pratiques : quel niveau de compression, quand compresser plutôt que diviser, et que faire quand même la compression ne suffit pas.",
    "La bonne nouvelle, c’est que les fichiers les plus susceptibles de rebondir — numérisations et PDF riches en images — sont justement ceux qui se compressent le plus.",
  ],
  steps: [
    {
      title: "Vérifiez de combien vous dépassez la limite",
      body: "Notez la taille du fichier et votre objectif. Gmail plafonne à 25 Mo, Outlook autour de 20 Mo, et certains serveurs d’entreprise plus bas encore. Connaître l’écart indique jusqu’où aller.",
    },
    {
      title: "Ouvrez l’outil Compresser un PDF",
      body: "Rendez-vous sur l’outil Compresser un PDF dans votre navigateur. Il traite le fichier sur votre appareil — rien n’est envoyé, ce qui compte pour des documents destinés à un e-mail.",
    },
    {
      title: "Ajoutez le PDF et choisissez un niveau",
      body: "Commencez par Recommandé. Il équilibre taille et qualité et suffit pour la plupart des fichiers. Passez à Fort seulement si vous dépassez encore la limite.",
    },
    {
      title: "Compressez et lisez la nouvelle taille",
      body: "Lancez l’opération et vérifiez les chiffres avant et après. Les documents numérisés passent souvent bien sous 25 Mo dès la première tentative.",
    },
    {
      title: "S’il est encore trop lourd, divisez-le",
      body: "Quand un document seul ne peut pas devenir assez léger, utilisez l’outil Diviser un PDF pour l’envoyer en deux ou trois fichiers plus petits — souvent plus pratique que d’écraser encore la qualité.",
    },
    {
      title: "Joignez et envoyez",
      body: "Joignez le fichier compressé (ou divisé). Ouvrez-le d’abord une fois pour confirmer qu’il se lit toujours proprement au niveau choisi.",
    },
  ],
  tips: [
    "Le niveau Recommandé passe la plupart des limites d’e-mail avec de la marge sur la qualité. Réservez Fort aux fichiers encore trop lourds après un premier passage.",
    "Les numérisations et les PDF riches en photos rétrécissent le plus ; un document uniquement textuel est déjà léger, donc s’il est énorme, cherchez des images ou des polices intégrées comme cause.",
    "Si la compression seule ne suffit pas, diviser le document vaut mieux que le dégrader jusqu’à l’illisibilité — deux moitiés lisibles valent mieux qu’un tout médiocre.",
    "La compression transforme les pages en images, donc la copie envoyée n’aura pas de texte sélectionnable. Si le destinataire doit copier du texte, envoyez l’original autrement et un aperçu compressé par e-mail.",
    "Quand même un fichier compressé est trop lourd, un lien de partage cloud est la réponse honnête — voir le guide sur l’envoi de gros fichiers PDF.",
  ],
  mobileNote:
    "La plupart des pièces jointes rejetées surviennent quand vous envoyez un document depuis votre téléphone entre deux choses. L’application PDF Editor compresse hors connexion et partage directement vers votre application de messagerie, donc une numérisation trop lourde devient un fichier envoyable sans quitter votre boîte de réception.",
  faq: [
    {
      q: "Quelle est la vraie limite de pièce jointe pour un e-mail ?",
      a: "Gmail plafonne à 25 Mo, Outlook autour de 20 Mo, et certains serveurs de messagerie d’entreprise encore plus bas. Visez confortablement sous la limite du destinataire, pas seulement la vôtre.",
    },
    {
      q: "Pourquoi mon PDF est-il trop lourd pour un e-mail dès le départ ?",
      a: "Presque toujours à cause de pages numérisées ou de photos intégrées. Chaque page numérisée est essentiellement une image en haute résolution, et une poignée d’entre elles dépassent vite 25 Mo.",
    },
    {
      q: "Quel niveau de compression choisir pour un e-mail ?",
      a: "Commencez par Recommandé — il passe la plupart des limites tout en gardant le document lisible. Ne passez à Fort que si vous dépassez encore après le premier essai.",
    },
    {
      q: "Mon fichier est-il envoyé quelque part quand je le compresse ?",
      a: "Non. L’outil Compresser un PDF fonctionne dans votre navigateur, sur votre appareil, donc le document reste confidentiel même pendant que vous le préparez à envoyer.",
    },
    {
      q: "Et si la compression ne suffit toujours pas ?",
      a: "Divisez le PDF en fichiers plus petits, ou partagez un lien cloud plutôt qu’une pièce jointe. Les deux valent mieux que compresser un document jusqu’à le rendre illisible.",
    },
  ],
  related: [
    { label: "Compresser un PDF — alléger pour l’e-mail", path: "/compress-pdf" },
    { label: "Comment envoyer de gros fichiers PDF", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Comment compresser un PDF en ligne sans l’envoyer", path: "/guides/how-to-compress-pdf-online" },
    { label: "Comment diviser un PDF en plusieurs fichiers", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
