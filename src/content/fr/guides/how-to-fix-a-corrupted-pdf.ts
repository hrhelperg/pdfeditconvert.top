import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Comment réparer un PDF endommagé (ce qui marche vraiment)",
  description:
    "La plupart des PDF « corrompus » ne le sont pas : ce sont des téléchargements tronqués, des lecteurs inadaptés ou des écritures incomplètes. La liste honnête des correctifs qui récupèrent le fichier, et le cas où il est vraiment perdu.",
  updated: "2026-05-29",
  intro: [
    "Presque tous les PDF qu’on qualifie de « corrompus » sont quelque chose de moins dramatique : un téléchargement qui ne s’est pas terminé, un lecteur qui refuse de lire un fichier légèrement décalé, ou une écriture interrompue avant que le fichier ne soit scellé. La vraie corruption — où les octets à l’intérieur du fichier sont réellement endommagés — est plus rare qu’on ne le pense, et quand elle survient, la récupération est au mieux partielle.",
    "La raison pour laquelle cela compte, c’est que les correctifs pour ces quatre causes sont complètement différents. Retélécharger prend quelques secondes ; changer de lecteur prend quelques secondes ; un aller-retour de réexport prend une minute ; une vraie récupération au niveau des octets prend des heures de travail et est souvent impossible. Savoir dans quelle catégorie tombe votre fichier fait gagner un vrai temps.",
    "Ce guide parcourt les diagnostics dans l’ordre du moins coûteux au plus coûteux, puis explique quoi faire quand ce n’est pas récupérable. La plupart des fichiers reprennent vie dès la troisième étape.",
  ],
  steps: [
    {
      title: "Retéléchargez ou redemandez le fichier",
      body: "Un téléchargement tronqué ressemble en tout point à de la corruption du point de vue du lecteur. Récupérez le fichier à nouveau. Si la deuxième copie s’ouvre, la première était incomplète. Vérifiez la taille en octets par rapport à la source si elle est indiquée.",
    },
    {
      title: "Essayez au moins deux autres lecteurs",
      body: "Les navigateurs, Aperçu, les lecteurs mobiles et les applications de bureau gèrent tous le PDF différemment. Un fichier qu’Acrobat refuse s’ouvre parfois très bien dans Chrome. Si ne serait-ce qu’un lecteur le lit, le fichier n’est pas vraiment cassé.",
    },
    {
      title: "Ouvrez le fichier dans un lecteur qui fonctionne et réexportez",
      body: "L’impression en PDF (macOS, Windows, Linux) ou « Enregistrer en PDF » depuis le lecteur qui fonctionne reconstruit la structure du fichier. La nouvelle copie s’ouvre souvent dans des lecteurs qui rejetaient l’original.",
    },
    {
      title: "Extrayez les pages individuellement avec PDF vers images",
      body: "Si aucun lecteur n’affiche tout le fichier mais que certains montrent un contenu partiel, exportez chaque page en PNG via PDF vers images. Vous pouvez ensuite réassembler un PDF neuf à partir de ces PNG avec Image en PDF — en perdant la recherche et la modifiabilité, mais en sauvant le contenu.",
    },
    {
      title: "Vérifiez l’en-tête du fichier dans un éditeur de texte brut",
      body: "Ouvrez le fichier dans TextEdit, Bloc-notes ou VS Code. Un vrai PDF commence par %PDF- suivi d’un numéro de version. Si les premiers octets sont autre chose, le fichier n’est pas un PDF — il a été renommé, mal étiqueté ou remplacé.",
    },
    {
      title: "Demandez une copie fraîche à la source",
      body: "Si rien ne récupère le fichier, la source a toujours l’original. Réexportez depuis Word, Google Docs ou quoi que ce soit qui l’a produit. C’est la seule voie qui rend la pleine qualité.",
    },
  ],
  tips: [
    "Ne continuez pas à modifier ou fusionner un fichier qui se comporte bizarrement. Vous intégreriez la casse dans le nouveau fichier.",
    "Gardez l’original cassé en sécurité avant toute tentative de réparation. Les outils de réparation écrasent parfois le fichier, et le fichier cassé peut contenir du contenu partiel que vous perdriez.",
    "Les fichiers qui échouent juste après une interruption d’écriture (coupure de courant, fermeture forcée pendant l’enregistrement) sont souvent irrécupérables — l’index structurel à la fin du fichier n’a jamais été écrit.",
    "Évitez les sites de « réparation de PDF » qui promettent des miracles. La plupart font le même réexport par impression en PDF que vous pouvez faire vous-même, et ils envoient votre fichier sur leur serveur.",
    "Les PDF récupérés via des images perdent tout vrai texte et toute possibilité de recherche. N’utilisez cette voie que pour des fichiers où le contenu compte plus que la fidélité du fichier.",
  ],
  mobileNote:
    "Sur un téléphone, la cause habituelle d’un PDF « corrompu » est un téléchargement cellulaire capricieux. L’application PDF Editor stocke les fichiers localement et permet de retélécharger et de rouvrir, ce qui règle le problème de troncature sans passer par un aller-retour sur ordinateur.",
  faq: [
    {
      q: "Quelle est la cause la plus courante d’un PDF corrompu ?",
      a: "Un téléchargement qui ne s’est pas terminé. Le fichier est techniquement incomplet, pas corrompu, mais les lecteurs ne font pas la différence. Retélécharger corrige la plupart des cas.",
    },
    {
      q: "Existe-t-il de vrais outils de réparation de PDF ?",
      a: "Certains outils commerciaux prétendent réparer, mais l’essentiel de ce qu’ils font, c’est le même réexport par impression en PDF que vous pouvez faire gratuitement vous-même. La vraie réparation structurelle de PDF sévèrement endommagés est un travail de spécialiste.",
    },
    {
      q: "Compresser un PDF corrompu aidera-t-il ?",
      a: "Seulement si l’outil de compression peut le lire. Si votre lecteur ne peut pas l’ouvrir, aucun compresseur ne le peut non plus. La compression n’est pas une technique de réparation.",
    },
    {
      q: "Pourquoi mon fichier récupéré perd-il ses champs de formulaire ?",
      a: "L’impression en PDF aplatit les éléments interactifs en pixels statiques. Les champs de formulaire, les annotations et les signatures deviennent des images. Si vous en avez besoin, redemandez-les à la source.",
    },
    {
      q: "L’extraction d’images peut-elle toujours sauver le contenu ?",
      a: "Seulement si un lecteur, quel qu’il soit, peut afficher les pages. Si le fichier est illisible partout, même un outil d’extraction d’images échouera.",
    },
  ],
  related: [
    { label: "PDF vers images — extraire les pages récupérables", path: "/pdf-to-images" },
    { label: "Image en PDF — réassembler les pages après récupération", path: "/image-to-pdf" },
    { label: "Pourquoi mon PDF ne s’ouvre-t-il pas ?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Pourquoi mon PDF est-il vide ?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
