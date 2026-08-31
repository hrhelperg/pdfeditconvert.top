import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "Formulaire PDF qui ne fonctionne pas ? Diagnostic et solutions",
  description:
    "Un formulaire PDF récalcitrant a un petit nombre de causes habituelles. Un diagnostic rapide pour identifier la vôtre — champs absents, saisie impossible, enregistrement perdu, lecture seule — et où la corriger.",
  updated: "2026-06-01",
  intro: [
    "« Mon formulaire PDF ne fonctionne pas » recouvre beaucoup de problèmes différents, et la solution dépend entièrement de celui que vous rencontrez réellement. Le formulaire ne vous laisse pas saisir de texte, les champs ont disparu, vos réponses ne s’enregistrent pas, il s’ouvre en lecture seule, ou il se comporte simplement bizarrement. Chacun a une cause précise et une solution précise — l’astuce consiste à nommer le symptôme en premier.",
    "Cette page fait office de diagnostic rapide. Plutôt qu’une solution miracle unique, elle vous aide à identifier en quelques secondes le problème auquel vous êtes confronté, puis vous oriente vers le guide qui le traite. La plupart des problèmes de formulaire ne sont pas des défauts du fichier ; ce sont un décalage entre le formulaire et le lecteur dans lequel vous l’avez ouvert, ou un réglage volontaire comme une protection en lecture seule.",
    "Parcourez les vérifications rapides ci-dessous. Elles vous diront si vous avez affaire à un formulaire non interactif, un problème de lecteur, un problème d’enregistrement, un réglage de sécurité, ou un problème de compatibilité — et où aller ensuite.",
  ],
  steps: [
    {
      title: "Voyez-vous des champs, tout simplement ?",
      body: "Si les champs de formulaire sont absents ou que la page semble incomplète, c’est un problème de champs manquants — en général un lecteur qui n’affiche pas la couche de champs. Consultez le guide sur les champs manquants pour la solution.",
    },
    {
      title: "Les champs sont là mais vous ne pouvez pas saisir de texte ?",
      body: "Si vous touchez un champ et que rien ne se passe, le formulaire est peut-être non interactif, ouvert dans le mauvais lecteur, ou en lecture seule. Le guide « pourquoi je ne peux pas écrire » détaille comment les distinguer.",
    },
    {
      title: "Les réponses disparaissent après l’enregistrement ?",
      body: "Si vous remplissez le formulaire, l’enregistrez, le rouvrez, et qu’il est de nouveau vide, les valeurs des champs ne sont pas écrites dans le fichier. Le guide « ne s’enregistre pas » couvre l’enregistrement fiable des données de formulaire.",
    },
    {
      title: "Le formulaire s’ouvre en lecture seule ou verrouillé ?",
      body: "Si tout est grisé ou que vous voyez une mention de protection, le formulaire est sécurisé contre la modification. Le guide sur la lecture seule explique vos options sans contourner une sécurité que vous ne devriez pas franchir.",
    },
    {
      title: "Ça fonctionne dans une application mais pas dans une autre ?",
      body: "Si le formulaire se comporte bien dans un programme et casse dans un autre, c’est un problème de compatibilité — peut-être un type de formulaire avancé. Consultez le guide sur la compatibilité, ou essayez la check-list de correction consolidée.",
    },
  ],
  tips: [
    "Nommez le symptôme avant d’essayer des solutions — la bonne réponse dépend entièrement du problème que vous avez.",
    "Le test le plus rapide pour beaucoup de problèmes : ouvrez le même fichier dans une application PDF dédiée. Cela sépare immédiatement « formulaire cassé » de « mauvais lecteur ».",
    "Un formulaire récalcitrant est rarement vraiment cassé ; la plupart des causes sont des incompatibilités de lecteur ou des réglages volontaires.",
    "Si vous avez juste besoin d’en finir, placer du texte par-dessus la page fonctionne sur presque n’importe quel formulaire, quel que soit le problème sous-jacent.",
    "L’apparence et le comportement d’un formulaire peuvent varier d’un lecteur PDF à l’autre, donc « ça ne marche pas ici » signifie rarement « c’est cassé partout ».",
  ],
  mobileNote:
    "Beaucoup de signalements « le formulaire ne fonctionne pas » viennent simplement d’un aperçu e-mail ou d’un lecteur basique qui ignore les champs. Ouvrir le fichier dans l’application PDF Editor active les champs interactifs là où ils existent et vous laisse placer du texte sur les formulaires non interactifs ou verrouillés là où ils n’existent pas — sur l’appareil, sans rien envoyer sur un serveur.",
  faq: [
    {
      q: "Pourquoi mon formulaire PDF ne fonctionne-t-il pas ?",
      a: "C’est presque toujours l’une de ces situations : le formulaire est non interactif et sans champ, votre lecteur n’affiche pas les champs, les réponses ne s’enregistrent pas, le formulaire est en lecture seule, ou il utilise des fonctions que votre application ne prend pas en charge. Identifiez le symptôme, puis appliquez la solution correspondante.",
    },
    {
      q: "Que faut-il essayer en premier le plus rapidement ?",
      a: "Ouvrez le même fichier dans une application PDF dédiée plutôt que dans un aperçu e-mail ou un navigateur. Cette seule étape résout une grande part des problèmes de « formulaire qui ne fonctionne pas », qui sont en réalité des incompatibilités de lecteur.",
    },
    {
      q: "Comment savoir si le formulaire est cassé ou si c’est juste mon application ?",
      a: "Essayez-le dans une autre application PDF compétente. Si ça fonctionne là-bas, c’est votre lecteur d’origine qui posait problème. Si ça échoue partout, c’est peut-être un type de formulaire avancé ou un fichier réellement endommagé.",
    },
    {
      q: "J’ai juste besoin de le remplir — quelle est la solution universelle ?",
      a: "Placez votre propre texte et vos coches par-dessus la page avec un éditeur de PDF. Cela fonctionne aussi bien sur les formulaires non interactifs, verrouillés ou sans champ, quelle que soit la cause sous-jacente.",
    },
    {
      q: "Où aller pour mon problème spécifique ?",
      a: "Utilisez les vérifications ci-dessus pour faire correspondre votre symptôme — champs manquants, saisie impossible, enregistrement échoué, lecture seule, ou compatibilité — et suivez le guide lié à ce problème, ou la check-list de correction consolidée.",
    },
  ],
  related: [
    {
      label: "Les champs d’un formulaire PDF ont disparu ?",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Pourquoi je ne peux pas écrire dans ce formulaire PDF ?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Pourquoi mon formulaire PDF ne s’enregistre-t-il pas ?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Problèmes de compatibilité des formulaires PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Corriger les erreurs d’un formulaire PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
