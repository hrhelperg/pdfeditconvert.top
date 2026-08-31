import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Comment compresser un PDF pour un portail scolaire (limites strictes)",
  description:
    "Les portails de dépôt des écoles et des universités plafonnent les PDF plus sévèrement que la messagerie. Comment alléger un devoir sans détruire la lisibilité que le correcteur va justement examiner.",
  updated: "2026-05-29",
  intro: [
    "Les portails scolaires comptent parmi les plateformes de dépôt de PDF les plus strictes du quotidien. Là où la messagerie tolère parfois 25 Mo, un portail de classe plafonne souvent à 5 Mo — et certains systèmes du primaire ou du secondaire descendent jusqu’à 2 Mo. Ajoutez quelques pages manuscrites numérisées à un devoir tapé et vous dépassez soudain la limite, deux minutes avant l’heure limite.",
    "La compression est la bonne réponse, mais compresser trop fort rend le travail plus difficile à lire — ce qui est exactement ce qui coûte des points. L’astuce, c’est de compresser intelligemment : fort sur les parties riches en scans qui dominent le poids du fichier, doucement sur les parties tapées qui ne se compressent de toute façon pas beaucoup, et seulement autant que nécessaire pour passer sous le plafond du portail.",
    "Ce guide détaille le processus réaliste, y compris ce qu’il faut compresser, ce qu’il faut laisser tel quel, et que faire quand même une compression maximale ne suffit pas.",
  ],
  steps: [
    {
      title: "Vérifiez d’abord la limite indiquée par le portail",
      body: "La plupart des portails affichent le plafond ; beaucoup d’étudiants ne le regardent jamais. Connaître le chiffre change la stratégie : une limite de 2 Mo est serrée, une limite de 25 Mo est généreuse. Visez 80 % du plafond pour garder une marge.",
    },
    {
      title: "Identifiez ce qui alourdit le fichier",
      body: "Les pages manuscrites numérisées sont les coupables habituels. Chaque page scannée est une image en pleine résolution. Un devoir tapé de 20 pages est léger ; le même avec cinq pages numérisées peut tripler de poids.",
    },
    {
      title: "Compressez avec Compresser le PDF",
      body: "Compresser le PDF dans votre navigateur réduit le fichier sur votre appareil. Essayez d’abord une compression forte — les compresseurs modernes gardent le travail manuscrit lisible même à un réglage élevé.",
    },
    {
      title: "Vérifiez la lisibilité après compression",
      body: "Ouvrez le fichier compressé et zoomez sur l’endroit où le correcteur va lire. Si le texte ou les schémas paraissent trop flous, revenez à une compression moyenne et réessayez. La lisibilité prime sur la légèreté.",
    },
    {
      title: "Si le fichier dépasse encore la limite, supprimez les pages inutiles",
      body: "Extraire des pages PDF ne garde que les pages nécessaires. Un dos de page vide, une série d’exercices en double, un espace réservé — retirez-les et le poids du fichier baisse avec eux.",
    },
    {
      title: "Si ça dépasse encore, découpez en plusieurs envois",
      body: "Certains portails acceptent plusieurs fichiers. Diviser le PDF ou Extraire des pages PDF produit des parties sous la limite. Nommez-les clairement (Devoir3_Partie1.pdf, Devoir3_Partie2.pdf).",
    },
  ],
  tips: [
    "Scannez en niveaux de gris, pas en couleur, avant même de compresser. Ce choix en amont fait gagner plus que n’importe quelle compression a posteriori.",
    "Renuméroter à une résolution plus basse (200 au lieu de 600 DPI) réduit le fichier de 5 à 10 fois sans changer la lisibilité pour du travail manuscrit.",
    "Ne compressez pas deux fois. Une compression répétée cumule les pertes de qualité. Gardez un exemplaire non compressé, compressez pour l’envoi.",
    "Évitez de mettre un PDF dans une archive ZIP pour le « réduire ». La plupart des portails refusent purement et simplement les ZIP ; s’ils les acceptent, ils décompressent souvent avec la même limite effective.",
    "Si le portail rejette le fichier compressé comme invalide, réexportez-le d’abord via impression vers PDF — cela le ramène à un PDF de base que tous les portails acceptent.",
  ],
  mobileNote:
    "L’envoi depuis un téléphone vers les portails scolaires est désormais courant, et c’est souvent depuis le téléphone que proviennent les parties du devoir riches en scans. L’application PDF Editor compresse les scans directement sur l’appareil avant l’envoi, pour que le fichier soit prêt pour le portail avant même d’affronter une connexion mobile capricieuse.",
  faq: [
    {
      q: "Quelle taille la plupart des portails scolaires acceptent-ils ?",
      a: "Les limites courantes sont 2 Mo (certains portails du primaire et du secondaire), 5 Mo (beaucoup de portails de lycée et d’université), et 10 à 25 Mo (portails universitaires plus souples). Vérifiez les consignes de votre classe.",
    },
    {
      q: "Une compression forte rend-elle le texte illisible ?",
      a: "Parfois. Une compression forte sur des scans déjà en basse résolution peut pixeliser les caractères. Essayez d’abord une compression forte ; revenez à une compression moyenne si le texte devient flou.",
    },
    {
      q: "Faut-il supprimer les pages vides ?",
      a: "Oui. Extraire des pages PDF ou Diviser le PDF les retire. Les pages vides prennent de la place et ne font pas partie du travail.",
    },
    {
      q: "Puis-je rendre une archive ZIP à la place ?",
      a: "La plupart des portails scolaires n’acceptent pas les ZIP. Les rares qui les acceptent appliquent quand même des limites de taille et peuvent traiter le ZIP comme un seul fichier soumis au même plafond.",
    },
    {
      q: "Que faire si mon fichier compressé est encore trop lourd ?",
      a: "Supprimez les pages inutiles, renumérisez en niveaux de gris ou en noir et blanc à une résolution plus basse, ou divisez en plusieurs envois si le portail le permet. Certains devoirs devront peut-être être physiquement raccourcis.",
    },
  ],
  related: [
    { label: "Compresser le PDF — réduire dans votre navigateur", path: "/compress-pdf" },
    { label: "Diviser le PDF — découper en parties acceptées", path: "/split-pdf" },
    { label: "Comment rendre un devoir en PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Comment réduire la taille d’un PDF avant de l’envoyer", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Compresser le PDF — réduire la taille dans votre navigateur", path: "/compress-pdf" },
};

export default content;
