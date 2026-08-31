import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Comment corriger les problèmes de police d’un PDF (manquante, remplacée, illisible)",
  description:
    "Quand un PDF affiche la mauvaise police, des carrés à la place des caractères ou un texte de substitution, c’est presque toujours une police non intégrée. Comment fonctionne l’intégration et quoi changer à l’export.",
  updated: "2026-05-29",
  intro: [
    "Quand un PDF affiche des carrés à la place des caractères, ou la mauvaise police partout, ou un espacement étrange qui n’était pas dans l’original, c’est un problème de police. Les PDF référencent les polices par leur nom ; le lecteur doit soit trouver cette police sur le système, soit avoir la police intégrée dans le fichier. Si aucun des deux n’est vrai, vous voyez une substitution — au mieux une approximation proche, au pire des carrés.",
    "La bonne correction consiste presque toujours à réexporter avec les polices intégrées. Une fois une police intégrée, le fichier transporte les données de glyphes avec lui et s’affiche correctement partout. Le compromis est un fichier légèrement plus volumineux, mais pour la plupart des polices, la différence est négligeable comparée au document.",
    "Ce guide explique comment fonctionne réellement l’intégration de polices, parcourt les symptômes les plus courants, et montre les corrections — y compris quand le réexport n’est pas possible et qu’il faut aplatir le fichier en images.",
  ],
  steps: [
    {
      title: "Confirmez que le fichier affiche des polices de substitution",
      body: "Ouvrez le fichier dans deux lecteurs différents. Si les deux montrent la même mauvaise police, les polices ne sont pas intégrées. Si un lecteur est correct et l’autre non, c’est le mauvais lecteur qui manque la police et fait une substitution.",
    },
    {
      title: "Réexportez avec toutes les polices intégrées",
      body: "Dans Word, Pages, Docs et la plupart des outils de design, les réglages d’export PDF incluent « intégrer toutes les polices ». L’activer ajoute les données de police au fichier et le fait s’afficher de façon cohérente partout.",
    },
    {
      title: "Utilisez l’impression en PDF comme solution de repli",
      body: "Si vous ne pouvez pas activer l’intégration de police dans l’application source, ouvrez le document dans n’importe quel lecteur qui l’affiche correctement et imprimez-le en PDF. La nouvelle copie fige les glyphes rendus en mode matriciel — plus lourde et non consultable, mais fiable.",
    },
    {
      title: "Vérifiez les polices sous licence qui ne peuvent pas s’intégrer",
      body: "Certaines polices commerciales ont des restrictions d’intégration. L’application source vous avertira. La correction réaliste est de passer à une police similaire qui autorise l’intégration, ou de matricer le texte concerné en images.",
    },
    {
      title: "Convertissez en Word, corrigez le texte, réexportez",
      body: "Si la substitution a déjà abîmé le texte et que vous n’avez que le PDF, PDF vers Word extrait ce qui est récupérable. Nettoyez-le, définissez des polices que vous possédez, réexportez en un PDF neuf.",
    },
    {
      title: "Aplatissez en images quand rien d’autre ne fonctionne",
      body: "PDF vers images exporte chaque page en PNG haute résolution. Si vous réassemblez avec Image en PDF, le résultat n’a pas de texte vivant — juste des images — mais le rendu des polices est figé pour chaque lecteur.",
    },
  ],
  tips: [
    "N’utilisez pas de polices non intégrables sur des documents importants — le fichier restera toujours vulnérable à la substitution.",
    "Les polices web et les polices d’affichage téléchargées sont les coupables les plus fréquents pour l’intégration. Les polices système (Arial, Times, Helvetica, Calibri) s’intègrent proprement.",
    "Intégrer des polices en « sous-ensemble » (seulement les caractères utilisés) garde le fichier léger. La plupart des outils d’export choisissent le sous-ensemble par défaut, et c’est le bon choix.",
    "Si un seul caractère est faux (comme une fraction ou un symbole spécial), la police manque ce glyphe. Remplacez le caractère source par un équivalent Unicode.",
    "Après un aplatissement en images, attendez-vous à perdre le copier-coller et l’OCR. N’utilisez cette voie que quand la fidélité visuelle compte plus que la possibilité de recherche.",
  ],
  mobileNote:
    "Les lecteurs sur téléphone ont souvent moins de polices installées que les ordinateurs de bureau, donc les fichiers sans polices intégrées paraissent au pire sur mobile. L’application PDF Editor affiche des avertissements de police substituée et permet de réexporter des documents avec les polices intégrées, ce qui les garde visuellement cohérents entre iOS, Android et les lecteurs de bureau.",
  faq: [
    {
      q: "Que fait vraiment « intégrer les polices » ?",
      a: "Cela regroupe les données de glyphes de la police à l’intérieur du PDF lui-même, pour que n’importe quel lecteur puisse afficher le texte correctement sans avoir besoin de la police installée localement.",
    },
    {
      q: "Pourquoi vois-je des carrés à la place de lettres ?",
      a: "La police n’est pas installée sur le système et n’a pas été intégrée. Le lecteur ne peut pas la remplacer parce qu’il ne sait pas quels glyphes dessiner, donc il affiche le carré du caractère manquant.",
    },
    {
      q: "Puis-je ajouter une police à un PDF après l’export ?",
      a: "Pas proprement. Réexporter depuis la source est la bonne voie. Il existe des outils qui prétendent intégrer après coup, mais la plupart produisent des fichiers bogués.",
    },
    {
      q: "Pourquoi mon PDF exporté est-il plus lourd quand j’intègre les polices ?",
      a: "Parce que les données de police sont maintenant dans le fichier. L’augmentation est généralement faible sauf si vous intégrez de nombreuses familles de polices. Le sous-ensemble (n’incluant que les caractères utilisés) garde la taille basse.",
    },
    {
      q: "La compression va-t-elle retirer les polices intégrées ?",
      a: "Non. La compression PDF cible les images, pas le texte ni les polices. Compresser un PDF avec des polices intégrées ne le casse pas.",
    },
  ],
  related: [
    { label: "PDF vers Word — récupérer du texte depuis des polices substituées", path: "/pdf-to-word" },
    { label: "PDF vers images — aplatir en dernier recours", path: "/pdf-to-images" },
    { label: "Comment corriger la mise en page d’un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Comment résoudre les problèmes d’impression d’un PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
