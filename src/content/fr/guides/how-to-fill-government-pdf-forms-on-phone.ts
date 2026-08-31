import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-government-pdf-forms-on-phone",
  h1: "Comment remplir un formulaire administratif en PDF depuis son téléphone",
  description:
    "Les formulaires administratifs sont souvent de simples numérisations au format strict. Comment les compléter sur un téléphone, gérer les champs pénibles, et suivre les consignes de l’organisme émetteur.",
  updated: "2026-06-01",
  intro: [
    "Les formulaires administratifs en PDF forment leur propre catégorie de casse-tête. Beaucoup sont de simples numérisations d’originaux papier sans champ interactif, le formatage est strict, et les instructions de dépôt ne se négocient pas. La bonne nouvelle, c’est que vous pouvez généralement les compléter entièrement sur téléphone — la mauvaise, c’est que le faire proprement demande un peu plus de soin qu’un formulaire interactif accueillant.",
    "Quelques réserves honnêtes d’emblée : ce guide explique comment remplir ces formulaires, pas si un dépôt donné est valide ou accepté. Les exigences des administrations et organismes varient beaucoup, certains formulaires utilisent des fonctions avancées que toutes les applications ne prennent pas en charge, et les instructions propres à l’organisme émetteur priment toujours sur les conseils généraux. En cas de doute, suivez ce que dit l’organisme.",
    "Ceci posé, voici comment compléter un formulaire administratif sur téléphone — interactif ou non — placer vos réponses proprement, et le préparer pour la méthode de dépôt exigée par l’organisme.",
  ],
  steps: [
    {
      title: "Lisez d’abord les instructions de l’organisme",
      body: "Les formulaires administratifs viennent en général avec des règles de dépôt — format, exigences de signature, destination. Lisez-les avant de remplir, car elles déterminent si vous devez aplatir, imprimer, ou envoyer sur un serveur, et comment.",
    },
    {
      title: "Ouvrez le formulaire dans une application PDF compétente",
      body: "Sortez le formulaire de tout aperçu e-mail et ouvrez-le dans l’application PDF Editor. Elle détecte les champs interactifs si le formulaire en a, et vous laisse placer du texte sur la page s’il s’agit d’une numérisation non interactive.",
    },
    {
      title: "Remplissez avec soin en respectant le format",
      body: "Les formulaires administratifs sont pointilleux sur les formats — dates, numéros de référence, une case par caractère. Zoomez, placez le texte précisément sur chaque ligne, et respectez exactement le format demandé par le formulaire.",
    },
    {
      title: "Gérez les signatures selon les instructions",
      body: "Ajoutez une signature électronique là où le formulaire l’autorise. Si l’organisme exige spécifiquement une copie papier signée à la main, imprimez, signez et renumérisez — suivez son exigence plutôt que de supposer qu’une signature tapée suffit.",
    },
    {
      title: "Préparez le dépôt demandé",
      body: "Aplatissez le formulaire rempli pour que les réponses ne puissent plus bouger, puis déposez-le selon la méthode de l’organisme — portail sécurisé, e-mail, ou impression et envoi postal. Gardez votre propre copie ainsi que toute confirmation.",
    },
  ],
  tips: [
    "Laissez toujours les instructions de l’organisme l’emporter sur les conseils généraux — les règles de dépôt des formulaires officiels varient et comptent vraiment.",
    "Beaucoup de formulaires administratifs sont de simples numérisations, donc attendez-vous à placer du texte sur la page plutôt qu’à saisir dans des champs.",
    "Zoomez pour les champs à cases par caractère (une lettre par case) afin que chaque caractère se pose bien dans sa case.",
    "Conservez une copie enregistrée de tout ce que vous déposez, ainsi que tout numéro de référence ou de confirmation.",
    "Si un formulaire utilise des fonctions dynamiques avancées qui ne s’ouvrent pas correctement, essayez une autre application PDF ou demandez à l’organisme un format alternatif — ne forcez pas les choses.",
  ],
  mobileNote:
    "L’application PDF Editor gère bien les numérisations non interactives que sont souvent les formulaires administratifs : placez le texte et les coches exactement là où ils doivent aller, ajoutez une signature là où c’est permis, puis aplatissez et exportez pour le dépôt ou l’impression — tout cela sur téléphone, sur l’appareil, sans que les informations personnelles sensibles ne quittent votre appareil vers des serveurs tiers.",
  faq: [
    {
      q: "Puis-je remplir un formulaire administratif en PDF sur mon téléphone ?",
      a: "En général oui. La plupart peuvent être complétés sur téléphone — les interactifs en saisissant dans les champs, les numérisations non interactives en plaçant du texte sur la page. Suivez toujours les instructions de dépôt de l’organisme émetteur, qui varient selon le formulaire.",
    },
    {
      q: "Pourquoi un formulaire administratif ne me laisse-t-il pas saisir de texte ?",
      a: "Beaucoup de formulaires administratifs sont de simples numérisations papier sans champ interactif. Placez plutôt vos réponses sur la page avec l’outil texte d’un éditeur de PDF. Certains peuvent aussi être verrouillés ou utiliser des fonctions que votre lecteur ne prend pas en charge.",
    },
    {
      q: "Une signature tapée est-elle acceptée sur les formulaires administratifs ?",
      a: "Cela dépend entièrement de l’organisme et du formulaire — les exigences varient. Certains acceptent les signatures électroniques ; d’autres exigent une copie signée à la main. Suivez l’exigence indiquée par le formulaire plutôt que de supposer.",
    },
    {
      q: "Dois-je aplatir un formulaire administratif avant de le déposer ?",
      a: "En général oui, pour que vos réponses ne puissent ni bouger ni être effacées. Mais suivez d’abord les instructions de dépôt de l’organisme — certains portails veulent un format précis.",
    },
    {
      q: "Est-il prudent de remplir des formulaires officiels sur téléphone ?",
      a: "Remplir sur l’appareil avec l’application PDF Editor garde les informations personnelles du formulaire à l’écart des serveurs tiers. Pour le dépôt, utilisez le canal sécurisé officiel de l’organisme plutôt qu’un site public.",
    },
  ],
  related: [
    {
      label: "Comment remplir un formulaire PDF sur iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Comment remplir un formulaire PDF sur Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    { label: "La méthode mobile pour les formulaires PDF", path: "/guides/mobile-pdf-form-workflow" },
    {
      label: "Comment renvoyer un formulaire PDF rempli",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
