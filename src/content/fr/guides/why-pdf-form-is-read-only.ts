import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Pourquoi mon formulaire PDF est-il en lecture seule ? Et que faire",
  description:
    "Votre formulaire s’ouvre verrouillé, tout est grisé ? Pourquoi un formulaire est mis en lecture seule, comment distinguer une protection volontaire d’un caprice du lecteur, et les solutions honnêtes pour le compléter.",
  updated: "2026-06-01",
  intro: [
    "Un formulaire PDF en lecture seule s’ouvre normalement mais refuse toute tentative de remplissage — champs grisés, icône de cadenas, parfois une mention « protégé » ou « sécurisé » dans la barre de titre. Contrairement à un formulaire non interactif (qui n’a tout simplement aucun champ) ou à un problème d’enregistrement (où les réponses ne tiennent pas), un formulaire en lecture seule possède des champs qui existent mais sont volontairement désactivés. Quelque chose ou quelqu’un l’a verrouillé.",
    "Il y a quelques raisons honnêtes à cela, et elles comptent car elles changent ce que vous devriez faire. L’auteur du formulaire l’a peut-être sécurisé volontairement. Le formulaire est peut-être certifié ou déjà signé, si bien que le modifier casserait cela. Ou votre lecteur l’ouvre peut-être dans un mode lecture seule que vous pouvez désactiver. Distinguer une protection délibérée d’une bizarrerie du lecteur est la première étape essentielle.",
    "Ce guide explique les causes, comment identifier celle qui vous concerne, et les façons légitimes de compléter un formulaire en lecture seule — sans essayer de contourner une sécurité sur un document que vous n’êtes pas autorisé à modifier.",
  ],
  steps: [
    {
      title: "Vérifiez la présence d’une mention protégé ou sécurisé",
      body: "Regardez la barre de titre et les propriétés du document à la recherche de mots comme « sécurisé », « protégé », ou d’une icône de cadenas. Cela signale une sécurité délibérée appliquée par l’auteur — l’état de lecture seule est intentionnel.",
    },
    {
      title: "Écartez la piste d’un mode lecture seule du lecteur",
      body: "Certaines applications ouvrent les fichiers par défaut en lecture seule ou en « affichage protégé ». Cherchez une invite « activer la modification » ou un bouton de lecture seule, et essayez une application PDF dédiée, avant de présumer que le fichier lui-même est verrouillé.",
    },
    {
      title: "Envisagez qu’il soit certifié ou signé",
      body: "Si le formulaire est déjà signé numériquement ou certifié, le modifier invaliderait cette signature, c’est pourquoi les lecteurs le verrouillent. C’est un comportement correct — vous ne devriez généralement pas altérer un formulaire signé.",
    },
    {
      title: "Complétez-le en ajoutant du texte par-dessus",
      body: "Même quand les champs sont verrouillés, vous pouvez souvent placer votre propre texte et vos coches sur la page comme s’il s’agissait d’un formulaire non interactif, puis exporter — une façon légitime de remplir un formulaire en lecture seule.",
    },
    {
      title: "Demandez à l’expéditeur une version déverrouillée",
      body: "Si vous avez réellement besoin des champs interactifs, la solution la plus propre consiste à demander une version qui autorise la saisie à celui qui vous l’a envoyée. N’essayez pas de contourner la sécurité d’un document qui n’est pas le vôtre.",
    },
  ],
  tips: [
    "Décidez d’abord : sécurité délibérée ou bizarrerie du lecteur ? Cherchez une icône de cadenas ou une mention « sécurisé » plutôt qu’une invite « activer la modification ».",
    "Placer du texte par-dessus la page fonctionne sur la plupart des formulaires en lecture seule et c’est souvent la voie légitime la plus rapide pour le compléter.",
    "N’essayez pas de retirer la protection d’un formulaire qui n’est pas le vôtre — si vous avez besoin de champs déverrouillés, demandez à l’expéditeur.",
    "Un formulaire certifié ou signé est verrouillé pour une bonne raison ; l’altérer casserait la signature qu’il porte.",
    "L’« affichage protégé » de certains lecteurs n’est qu’un réglage par défaut — passer à une application PDF complète ou activer la modification peut suffire.",
  ],
  mobileNote:
    "Sur téléphone, un formulaire en lecture seule peut généralement encore être complété dans l’application PDF Editor en plaçant du texte et des coches sur la page, même quand ses champs sont verrouillés. Elle fonctionne sur l’appareil, si bien que vos informations restent confidentielles — et elle ne touche pas à la sécurité du formulaire, elle se contente de poser vos réponses par-dessus.",
  faq: [
    {
      q: "Pourquoi mon formulaire PDF est-il en lecture seule ?",
      a: "Soit son auteur l’a sécurisé volontairement, soit il est certifié ou déjà signé (et la modifier casserait cela), soit votre lecteur l’a ouvert en mode lecture seule. Cherchez une icône de cadenas ou une mention « sécurisé » pour distinguer une protection délibérée d’un simple réglage du lecteur.",
    },
    {
      q: "Comment remplir un formulaire PDF en lecture seule ?",
      a: "Vous pouvez souvent placer votre propre texte et vos coches sur la page comme s’il s’agissait d’un formulaire non interactif, puis exporter — même quand les champs sont verrouillés. Si vous avez besoin des champs interactifs, demandez à l’expéditeur une copie déverrouillée.",
    },
    {
      q: "La lecture seule est-elle la même chose que l’impossibilité de saisir du texte ?",
      a: "C’est l’une des causes de l’impossibilité de saisir du texte. Un formulaire peut aussi refuser la saisie parce qu’il est non interactif ou ouvert dans le mauvais lecteur. La lecture seule signifie spécifiquement que des champs existent mais sont volontairement désactivés.",
    },
    {
      q: "Puis-je retirer la protection en lecture seule ?",
      a: "Si le formulaire vous appartient et que vous avez défini la protection, vous pouvez la changer dans un éditeur compétent. S’il appartient à quelqu’un d’autre, n’essayez pas de contourner sa sécurité — demandez plutôt une version déverrouillée.",
    },
    {
      q: "Pourquoi la modification d’un formulaire signé est-elle bloquée ?",
      a: "La modifier invaliderait la signature numérique ou la certification que porte le formulaire, c’est pourquoi les lecteurs le verrouillent. C’est un comportement voulu pour garder les documents signés dignes de confiance.",
    },
  ],
  related: [
    {
      label: "Pourquoi je ne peux pas écrire dans ce formulaire PDF ?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
    {
      label: "Pourquoi mon formulaire PDF ne s’enregistre-t-il pas ?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Comment protéger un fichier PDF par mot de passe",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
