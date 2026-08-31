import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Comment partager ses notes de cours en PDF (groupe, messagerie, cloud)",
  description:
    "Partagez vos notes avec un groupe de révision sans perdre la mise en forme ni le suivi des versions. Les habitudes PDF qui évitent le chaos des captures d’écran.",
  updated: "2026-05-29",
  intro: [
    "Partager des notes avec un groupe de révision devrait être simple, mais en pratique ça finit souvent en fil de discussion avec trente captures d’écran et trois versions différentes du même cours. La veille de l’examen, plus personne ne retrouve la version avec l’exemple travaillé que tout le monde continue de citer, et quelqu’un a envoyé une photo de ses notes manuscrites en marge que personne n’arrive à lire.",
    "Les PDF résolvent la majeure partie de ce problème. Ils figent la mise en forme, fonctionnent sur n’importe quel appareil, passent par le menu de partage de toutes les plateformes, et ne dépendent pas d’un seul compte cloud. Quelques habitudes de partage — nommer le fichier de façon cohérente, versionner délibérément, choisir le bon canal — gardent la révision collaborative cohérente sans que personne n’ait à la gérer comme un projet.",
    "Ce guide décrit ces habitudes. Ce ne sont pas des outils ; ce sont des conventions que vous et votre groupe adoptez une bonne fois pour toutes. Après ça, tout fonctionne tout seul.",
  ],
  steps: [
    {
      title: "Mettez-vous d’accord sur le canal de partage en premier",
      body: "Choisissez un seul endroit — messagerie de groupe, dossier cloud partagé, Discord dédié — et n’en changez plus. Des notes éparpillées sur deux canaux deviennent introuvables. Le canal compte moins que la constance.",
    },
    {
      title: "Partagez toujours en PDF, jamais en photo du document",
      body: "Une capture d’écran d’un PDF est pire que le PDF lui-même. Envoyez le fichier directement. Les téléphones rendent ça facile — menu de partage → fichier, pas capture d’écran.",
    },
    {
      title: "Nommez le fichier pour le groupe, pas pour vous",
      body: "CodeCours_Semaine3_Notes_VotreNom.pdf. Le groupe voit qui a partagé quoi et pour quelle semaine. « Notes.pdf » ne sert à rien dans un fil avec quinze pièces jointes du même nom.",
    },
    {
      title: "Mettez un filigrane sur les notes provisoires",
      body: "Si vos notes sont une première version susceptible d’être révisée, Ajouter un filigrane au PDF appose BROUILLON ou EN COURS sur chaque page. Le groupe sait qu’une révision est à venir.",
    },
    {
      title: "Compressez avant de partager",
      body: "Compresser le PDF réduit la taille du fichier pour les plateformes de messagerie avec des limites de pièce jointe. Ça économise du temps d’envoi en connexion mobile et évite le refus « fichier trop volumineux ».",
    },
    {
      title: "Suivez les versions dans le nom de fichier, pas dans la discussion",
      body: "Semaine3_Notes_v2.pdf est sans ambiguïté. « J’ai révisé les notes, voir pièce jointe » dans un fil de discussion ne l’est pas. Le nom du fichier est le journal des versions.",
    },
  ],
  tips: [
    "Ne partagez pas de documents Word avec un groupe. Ils s’affichent différemment sur chaque appareil, se verrouillent à un seul éditeur à la fois, et se dédoublent en versions immédiatement. Le PDF fige tout.",
    "Utilisez si possible des PDF de notes manuscrites passés à l’OCR — un texte consultable aide le groupe à retrouver rapidement un thème précis.",
    "Ne publiez pas de photos d’écran d’ordinateur. Les artefacts (moiré, reflets, basse résolution) rendent les notes plus difficiles à lire, pas plus faciles.",
    "Si votre groupe partage régulièrement, préconstruisez un modèle commun pour les PDF de notes. Des couvertures cohérentes aident à identifier qui a partagé quoi.",
    "Évitez l’e-mail pour les notes de groupe. Les fils de discussion permettent de suivre qui a vu quoi ; l’e-mail disperse la même conversation dans plusieurs boîtes de réception.",
  ],
  mobileNote:
    "Le téléphone gère l’essentiel du partage en groupe — capture photo rapide, partage immédiat vers la discussion, accusé de réception instantané. L’application PDF Editor gère la chaîne numérisation-fusion-compression-renommage sur mobile, pour que le fichier arrivant dans la discussion de groupe soit propre plutôt qu’un vrac de pellicule brute.",
  faq: [
    {
      q: "Quelle est la pire façon de partager des notes de révision ?",
      a: "Les captures d’écran du document ou les notes uniquement dans la discussion. Les deux ne sont pas consultables par recherche et ne survivent pas à la conversation qui avance.",
    },
    {
      q: "Chacun doit-il partager ses notes ou une seule personne suffit ?",
      a: "Que chacun partage avec méthode : semaines réparties d’avance entre membres, ou « je fais cette semaine, tu fais la suivante ». La rotation réduit l’effort par personne et produit des notes à plusieurs points de vue.",
    },
    {
      q: "Où doivent vivre les notes de référence ?",
      a: "Un dossier cloud partagé convient le mieux pour un stockage durable. La discussion de groupe est bonne pour une diffusion rapide ; le dossier fait office d’archive.",
    },
    {
      q: "Comment versionner les notes ?",
      a: "Par le nom de fichier uniquement. v1, v2, v3. Quand le groupe se met d’accord sur une version FINALE, renommez et déplacez vers /final/. Ne suivez pas les versions dans la discussion.",
    },
    {
      q: "Et si les notes sont manuscrites ?",
      a: "Numérisez d’abord en PDF. Les scans en noir et blanc de notes manuscrites sont plus nets et plus légers que des photos. Ajoutez l’OCR si votre outil le propose.",
    },
  ],
  related: [
    { label: "PDF pour étudiants — notes et fiches de révision", path: "/pdf-for-students" },
    { label: "Compresser le PDF — réduire pour les limites de pièce jointe", path: "/compress-pdf" },
    { label: "Comment organiser ses supports de révision en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Comment partager un PDF depuis son téléphone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF pour étudiants — notes, surlignages, fiches de révision", path: "/pdf-for-students" },
};

export default content;
