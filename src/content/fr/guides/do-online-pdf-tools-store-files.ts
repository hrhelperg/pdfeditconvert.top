import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Les outils PDF en ligne conservent-ils vos fichiers ? Ce qu’il faut vérifier",
  description:
    "Certains outils PDF en ligne suppriment les fichiers immédiatement, d’autres les gardent quelques heures, d’autres indéfiniment. Comment lire vite une politique de confidentialité et quoi y chercher.",
  updated: "2026-05-29",
  intro: [
    "Quand un outil PDF gratuit vous demande d’envoyer votre fichier, une question honnête se pose : que devient ce fichier ensuite ? La réponse varie énormément. Certains outils suppriment le fichier dès que la conversion est terminée. Certains le conservent une heure « pour votre confort ». Certains le gardent plus longtemps avec un langage vague sur l’« amélioration du service ». Certains l’utilisent pour entraîner des modèles sans que vous le sachiez.",
    "La politique de confidentialité l’indique, mais elle est en général longue, souvent vague, et parfois obsolète. Une lecture ciblée prend une minute et vous dit ce que vous avez réellement besoin de savoir. Et pour les fichiers suffisamment sensibles pour que la conservation compte vraiment, la solution la plus sûre est de choisir un outil qui n’envoie rien du tout sur un serveur.",
    "Ce guide détaille cette lecture rapide de politique de confidentialité, explique les formulations à repérer, et indique l’alternative plus sûre quand l’envoi lui-même pose problème.",
  ],
  steps: [
    {
      title: "Trouvez la politique et allez droit à la conservation",
      body: "La politique de confidentialité est en général en lien dans le pied de page. Recherchez sur la page (Ctrl-F) les mots « conserv », « supprim », « stock ». Ces mots vous mènent directement à la section sur la conservation.",
    },
    {
      title: "Lisez les vrais chiffres de conservation",
      body: "« Les fichiers sont supprimés dans l’heure » est concret et rassurant. « Nous supprimons les fichiers quand ils ne sont plus nécessaires » est vague et peut vouloir dire n’importe quoi. Les engagements chiffrés comptent ; les intentions non.",
    },
    {
      title: "Vérifiez ce qui est conservé au-delà du fichier lui-même",
      body: "Les métadonnées (nom de fichier, taille, type, adresse IP) sont en général conservées plus longtemps que le contenu du fichier. Pour la plupart des usages, cette conservation de métadonnées est acceptable ; pour un travail très sensible, même cela est un signal d’alerte.",
    },
    {
      title: "Cherchez les clauses sur les données d’entraînement",
      body: "Certains outils gratuits s’autorisent à utiliser les fichiers envoyés pour l’amélioration du service ou l’entraînement de modèles. Recherchez « améliorer », « entraîner », « analytique ». Si vous trouvez ces termes, considérez-le comme un signal d’alerte renforcé pour du contenu sensible.",
    },
    {
      title: "Vérifiez la section sur le partage avec des tiers",
      body: "Même si l’outil ne garde pas votre fichier, il peut le partager avec des hébergeurs, des sous-traitants ou des fournisseurs d’analytique. Chacun est un accès supplémentaire. Cherchez « prestataires de services », « sous-traitants », « tiers ».",
    },
    {
      title: "Privilégiez par défaut le traitement local pour tout ce qui est sensible",
      body: "Si l’outil fonctionne dans votre navigateur sans envoi sur un serveur (à vérifier via les outils de développement), la conservation ne se pose plus — il n’y a rien à conserver. Utilisez cette voie dès que la conservation du fichier compte.",
    },
  ],
  tips: [
    "Gratuit + conservation vague + tiers flous = à éviter pour des fichiers sensibles. C’est la combinaison la plus risquée.",
    "Même une politique de conservation claire n’est pas une garantie. Les violations de serveur arrivent. La seule option à risque nul est de ne rien envoyer.",
    "Traitez tout fichier envoyé comme compromis pour tout usage que vous ne pouvez pas auditer. Si vous n’accepteriez pas de le publier publiquement, réfléchissez à deux fois avant de l’envoyer.",
    "Si vous devez vraiment envoyer un fichier, protégez-le d’abord par mot de passe. L’outil voit alors un bloc chiffré ; le chiffrement protège le contenu.",
    "Ne faites pas confiance sans vérification aux affirmations « nous ne conservons rien » — le texte de la politique de confidentialité et le comportement réel peuvent diverger.",
  ],
  mobileNote:
    "Les applications mobiles ont souvent des politiques de confidentialité distinctes dans l’App Store ou les réglages. L’application PDF Editor traite tout en local et n’envoie jamais vos fichiers, donc la question de la conservation ne se pose même pas. Pour un travail mobile sur du contenu sensible, le tout-local est le réglage par défaut le plus net.",
  faq: [
    {
      q: "Combien de temps la plupart des outils PDF en ligne gardent-ils les fichiers ?",
      a: "Ça varie énormément : de quelques minutes à indéfiniment. Les grands outils commerciaux suppriment en général dans l’heure ; les outils plus petits et gratuits sont inconstants. Lisez chaque politique de confidentialité individuellement.",
    },
    {
      q: "Une conservation courte est-elle suffisamment sûre ?",
      a: "Ça dépend du fichier. Pour des documents ordinaires, une heure convient. Pour du contenu réellement sensible, toute conservation représente une véritable fenêtre de risque.",
    },
    {
      q: "Et les fichiers supprimés — sont-ils vraiment partis ?",
      a: "En général oui de l’espace de stockage actif, mais les sauvegardes et les répliques peuvent conserver des copies plus longtemps. Une suppression réellement sûre est techniquement plus difficile qu’il n’y paraît.",
    },
    {
      q: "Les outils gratuits conservent-ils toujours plus longtemps que les payants ?",
      a: "C’est une tendance, pas une règle. Certains outils gratuits ont une conservation propre ; certains outils payants ont des clauses surprenantes. Lisez les deux.",
    },
    {
      q: "Quelle est la voie la plus sûre pour un PDF sensible ?",
      a: "Les outils dans le navigateur qui traitent le fichier en local (sans envoi sur serveur). Si vous devez vraiment l’envoyer, protégez-le d’abord par mot de passe et choisissez un outil avec des engagements explicites de suppression.",
    },
  ],
  related: [
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Les outils PDF en ligne sont-ils sûrs ?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Outils PDF dans le navigateur ou avec transfert", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Comment éviter de transférer des documents sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
