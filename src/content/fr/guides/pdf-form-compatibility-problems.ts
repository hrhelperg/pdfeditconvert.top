import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "Problèmes de compatibilité des formulaires PDF (XFA et formulaires dynamiques)",
  description:
    "Un formulaire qui s’ouvre dans un logiciel et casse dans un autre utilise en général des fonctions que tous les lecteurs ne prennent pas en charge. Comment repérer un formulaire dynamique, d’où vient le décalage, et quelles options vous restent.",
  updated: "2026-06-01",
  intro: [
    "Il arrive qu’un formulaire fonctionne parfaitement dans un programme et se disloque dans un autre — les champs n’apparaissent pas, un avertissement dit « veuillez ouvrir dans un autre lecteur », ou la page est vide avec seulement un message d’erreur. C’est un problème de compatibilité, et cela signifie presque toujours que le formulaire utilise des fonctions que tous les lecteurs PDF ne prennent pas en charge. Le formulaire n’est pas cassé ; il est simplement plus exigeant qu’un formulaire standard sur l’endroit où il s’ouvre.",
    "La cause habituelle est un formulaire avancé ou dynamique construit avec une technologie (souvent appelée XFA ou LiveCycle) que seuls certains logiciels affichent correctement. Les formulaires interactifs standards sont largement pris en charge, mais ces formulaires dynamiques peuvent exiger un programme précis, et beaucoup de lecteurs modernes — surtout sur téléphone et dans les navigateurs — ne les ouvrent pas correctement du tout.",
    "Ce guide vous aide à reconnaître un problème de compatibilité, à comprendre pourquoi il se produit, et à peser vos options réalistes — sans occulter le fait que certains formulaires nécessitent tout simplement le logiciel pour lequel ils ont été conçus, ou un format différent de la part de l’émetteur.",
  ],
  steps: [
    {
      title: "Reconnaissez les signes révélateurs",
      body: "Un message « veuillez patienter » ou « ouvrir dans un lecteur compatible », une page vide là où devrait se trouver un formulaire, ou des champs qui apparaissent dans un programme et disparaissent dans un autre : tout cela indique un formulaire qui utilise des fonctions non prises en charge.",
    },
    {
      title: "Identifiez un formulaire dynamique (XFA)",
      body: "Les formulaires qui affichent un avertissement sur la nécessité d’un logiciel précis sont généralement des formulaires XFA dynamiques. Ce ne sont pas des formulaires interactifs standards, et beaucoup de lecteurs — en particulier sur mobile et dans les navigateurs — ne peuvent pas les afficher.",
    },
    {
      title: "Essayez un autre lecteur complet",
      body: "Ouvrez le formulaire dans plusieurs programmes PDF compétents. Un formulaire interactif standard qui casse dans un lecteur basique fonctionnera souvent dans un lecteur complet. Un formulaire dynamique peut encore nécessiter son logiciel spécifique.",
    },
    {
      title: "Demandez à l’émetteur une version compatible",
      body: "Si un formulaire ne s’ouvre vraiment nulle part où vous pouvez le consulter, demandez à celui qui l’a envoyé un PDF standard, une version non interactive imprimable, ou des instructions sur le logiciel nécessaire. Les émetteurs ont généralement une alternative.",
    },
    {
      title: "Repliez-vous sur l’impression et le remplissage à la main si nécessaire",
      body: "En dernier recours pour un formulaire que vous ne pouvez pas ouvrir de façon interactive, demandez ou générez une copie non interactive imprimable et complétez-la en plaçant du texte sur la page ou à la main. Ce n’est pas élégant, mais ça fonctionne toujours.",
    },
  ],
  tips: [
    "Un avertissement « lecteur compatible » est le signe classique d’un formulaire XFA dynamique qui nécessite un logiciel précis.",
    "Les formulaires interactifs standards sont largement pris en charge ; si l’un d’eux ne casse que dans un lecteur basique, une application complète résout généralement le problème.",
    "Certains formulaires nécessitent tout simplement le programme pour lequel ils ont été conçus — c’est une vraie limite, pas quelque chose à contourner de force.",
    "Quand un formulaire ne s’ouvre nulle part d’exploitable, l’émetteur peut presque toujours fournir une alternative standard ou imprimable.",
    "Certains formulaires PDF peuvent utiliser des fonctions non prises en charge, donc « ça ne s’ouvre pas ici » peut relever de la conception du formulaire plutôt que d’un défaut de votre côté.",
  ],
  mobileNote:
    "C’est sur téléphone que les problèmes de compatibilité se font le plus sentir — les formulaires XFA dynamiques ne s’affichent souvent pas du tout dans les lecteurs mobiles. L’application PDF Editor ouvre et remplit de façon fiable les formulaires interactifs standards et les formulaires non interactifs ; pour un formulaire dynamique qui nécessite un logiciel de bureau spécifique, demandez plutôt à l’émetteur une version PDF standard.",
  faq: [
    {
      q: "Pourquoi mon formulaire PDF fonctionne-t-il dans un programme mais pas dans un autre ?",
      a: "Il utilise probablement des fonctions que tous les lecteurs ne prennent pas en charge — souvent un formulaire XFA dynamique. Les formulaires standards sont largement compatibles ; les dynamiques peuvent nécessiter un logiciel précis et ne s’affichent pas dans beaucoup de lecteurs, surtout sur mobile et dans les navigateurs.",
    },
    {
      q: "Qu’est-ce qu’un formulaire dynamique ou XFA ?",
      a: "C’est un type de formulaire avancé qui se comporte comme un petit programme plutôt qu’une page statique. Seuls certains logiciels l’affichent correctement, ce qui explique pourquoi il peut montrer un avertissement ou une page vide ailleurs.",
    },
    {
      q: "Comment ouvrir un formulaire qui indique « utilisez un lecteur compatible » ?",
      a: "Essayez un programme PDF complet. Si c’est un formulaire dynamique qui refuse toujours de s’ouvrir, demandez à l’émetteur un PDF standard ou une version imprimable — beaucoup de lecteurs sont réellement incapables d’afficher les formulaires dynamiques.",
    },
    {
      q: "Puis-je convertir moi-même un formulaire dynamique en formulaire standard ?",
      a: "Pas de façon fiable à partir du fichier final. La solution la plus sûre consiste à demander à l’émetteur une version standard ou non interactive. Forcer une conversion fait souvent perdre des champs ou des données.",
    },
    {
      q: "Un problème de compatibilité est-il la même chose que des champs manquants ?",
      a: "Ils se recoupent — un problème de compatibilité peut faire manquer des champs dans un lecteur non pris en charge. Mais des champs manquants viennent souvent simplement d’un lecteur basique qui n’affiche pas un formulaire standard, ce qu’une application compétente corrige.",
    },
  ],
  related: [
    {
      label: "Les champs d’un formulaire PDF ont disparu ?",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Formulaire PDF qui ne fonctionne pas ?", path: "/guides/pdf-form-not-working" },
    { label: "Comment fonctionnent les formulaires PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Corriger les erreurs d’un formulaire PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
