import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Comment améliorer la qualité d’un PDF numérisé (netteté, redressement, contraste)",
  description:
    "Les documents numérisés ratent toujours de la même façon : de travers, contraste délavé, fond piqueté, fichier énorme. Les réglages avant numérisation et les outils après qui nettoient vraiment.",
  updated: "2026-05-29",
  intro: [
    "Une mauvaise numérisation ruine un document par ailleurs simple. Lignes de travers, contraste délavé, points de poussière qui transparaissent, taille de fichier énorme — et le document à l’intérieur devient difficile à lire ou impossible à compresser davantage. Le plus agaçant, c’est que la plupart de ces problèmes viennent du réglage, pas du PDF lui-même, et les éviter à la capture est bien plus facile que de les corriger après coup.",
    "Quand vous avez une mauvaise numérisation à corriger, les options réalistes sont : redresser ce qui est de travers, recadrer ce qui est mal cadré, sous-échantillonner ce qui est surdimensionné, et accepter que la résolution perdue à la capture ne revient pas. Certains outils de traitement d’image prétendent affiner la netteté ; en pratique, ils rendent les choses différentes, pas meilleures.",
    "Ce guide sépare la prévention (bien numériser dès la première fois) de la récupération (que faire du fichier que vous avez déjà). La prévention est plus importante.",
  ],
  steps: [
    {
      title: "Évitez le travers en alimentant correctement les pages",
      body: "Les scanners avec chargeur automatique produisent du travers quand les pages ne sont pas bien alignées dans le bac. Les numérisations au téléphone produisent du travers quand vous inclinez l’appareil. Les deux sont évitables : alignez la page, tenez le téléphone parallèle au papier, et la numérisation sort droite.",
    },
    {
      title: "Réglez la résolution de numérisation à 200-300 DPI pour les documents",
      body: "600 DPI est une qualité photo et produit des fichiers énormes sans aucun bénéfice sur une page tapée. 150 DPI est trop bas — le texte devient mou. La plage 200-300 est le point idéal pour les documents que vous partagerez, archiverez ou imprimerez.",
    },
    {
      title: "Préférez le niveau de gris ou le noir et blanc à la couleur pour le texte",
      body: "Le mode couleur sur un document texte triple la taille du fichier et introduit du bruit qui se compresse mal. Le niveau de gris ou le noir et blanc produit des numérisations plus nettes, plus légères et plus propres pour tout ce qui n’est pas une photo ou un graphique couleur.",
    },
    {
      title: "Utilisez le contraste automatique et le recadrage automatique quand disponibles",
      body: "La plupart des applications de numérisation incluent le contraste automatique et la détection des bords. Les deux font une vraie différence : le contraste retire le voile gris, la détection des bords recadre à la page pour des marges propres.",
    },
    {
      title: "Compressez avec soin les numérisations existantes",
      body: "Si un PDF numérisé est déjà énorme, Compresser un PDF dans votre navigateur peut le réduire drastiquement. N’allez pas au réglage extrême sur du texte — cela peut pixeliser les caractères. Fort mais pas extrême est le choix sûr.",
    },
    {
      title: "Faites pivoter les pages de travers avec Faire pivoter un PDF",
      body: "Si seulement quelques pages sont de travers ou retournées, Faire pivoter un PDF les redresse sur place. Cela ne peut pas corriger un petit angle de travers, mais gère les rotations de 90/180/270 degrés que produisent la plupart des erreurs de chargeur.",
    },
  ],
  tips: [
    "Un éclairage lumineux et régulier compte plus que la qualité de l’appareil photo sur les numérisations au téléphone. Une numérisation au téléphone bien éclairée bat le résultat d’un scanner de bureau mal éclairé.",
    "Ne numérisez pas en couleur haute résolution pour ensuite compresser fort. Numérisez avec les bons réglages dès le départ ; le fichier est plus petit, plus net et plus rapide à gérer.",
    "Un arrière-plan qui transparaît (texte au dos d’un papier fin) est un problème de papier, pas de numérisation. Utilisez une feuille de papier sombre derrière la page.",
    "Renumériser est presque toujours plus rapide que de corriger. Si vous avez le papier, corrigez la numérisation à la capture plutôt que de traiter l’image.",
    "Les applications de numérisation au téléphone qui promettent une « amélioration » ajoutent souvent une fausse netteté qui paraît pire de près. Une numérisation de base propre bat une mauvaise numérisation traitée.",
  ],
  mobileNote:
    "Les numérisations au téléphone échouent de façon prévisible — angle, lumière et mise au point sont entre les mains de l’utilisateur. Le parcours de numérisation de l’application PDF Editor utilise la détection des bords en temps réel et l’ajustement du contraste, pour que chaque capture s’approche d’un résultat de scanner à plat dès la première tentative.",
  faq: [
    {
      q: "Pourquoi mon PDF numérisé est-il si délavé ?",
      a: "Le contraste était réglé trop bas à la capture. Renumérisez avec le contraste automatique activé, ou avec la luminosité et le contraste ajustés manuellement. Le post-traitement aide marginalement.",
    },
    {
      q: "Puis-je rendre une numérisation floue plus nette ?",
      a: "Seulement en apparence. Le vrai détail perdu à la capture ne peut pas être récupéré. Les filtres de netteté modifient les bords mais n’ajoutent pas d’information.",
    },
    {
      q: "Quelle résolution de numérisation dois-je utiliser ?",
      a: "200-300 DPI pour les documents. 300 si vous pourriez imprimer. Tout ce qui est plus élevé est gaspillé sur du texte et gonfle simplement le fichier.",
    },
    {
      q: "Dois-je numériser en couleur ou en niveau de gris ?",
      a: "Niveau de gris ou noir et blanc pour le texte. Couleur seulement pour les photos et les graphiques couleur. Le niveau de gris est plus net et bien plus léger.",
    },
    {
      q: "Pourquoi mes numérisations sont-elles énormes en taille de fichier ?",
      a: "Généralement un DPI trop élevé plus le mode couleur. Réduisez les deux à la capture, ou compressez le fichier existant. Les PDF numérisés sont ceux qui bénéficient le plus de la compression.",
    },
  ],
  related: [
    { label: "Numériser en PDF — captures propres avec détection des bords", path: "/scan-to-pdf" },
    { label: "Compresser un PDF — réduire les numérisations lourdes", path: "/compress-pdf" },
    { label: "Comment compresser un PDF numérisé", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Pourquoi mon PDF est-il flou ?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Numériser en PDF — numérisation à l’appareil photo du téléphone", path: "/scan-to-pdf" },
};

export default content;
