import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Comment convertir un PNG en PDF — captures et graphiques nets",
  description:
    "Transformez vos captures d’écran, schémas et graphiques PNG en un seul PDF dans votre navigateur. Pourquoi le PNG garde le texte net, et ce que devient la transparence.",
  updated: "2026-05-23",
  intro: [
    "Le PNG est le format que vous obtenez en prenant une capture d’écran, en exportant un graphique, ou en enregistrant une image aux contours nets. Contrairement au JPG, il est sans perte, donc le texte et les traits fins restent nets au lieu d’être brouillés par la compression. Cela fait du PNG le bon point de départ pour rassembler des captures d’écran ou des schémas dans un PDF qui reste lisible.",
    "Ce guide utilise l’outil gratuit Image vers PDF pour combiner des fichiers PNG en un seul document, directement dans votre navigateur, sans rien envoyer. Cas typiques : une série de captures d’interface pour une relecture, des graphiques exportés pour un rapport, ou une image dont quelqu’un a besoin sous forme de fichier imprimable et partageable plutôt qu’une image isolée.",
    "Il y a une particularité propre au PNG à connaître — la transparence — et nous verrons ce qu’elle devient quand un PNG devient une page de PDF.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Image vers PDF",
      body: "Rendez-vous sur l’outil Image vers PDF dans votre navigateur. Il gère le PNG, le JPG et le WebP, et fonctionne entièrement sur votre appareil, sans envoi ni compte.",
    },
    {
      title: "Ajoutez vos fichiers PNG",
      body: "Glissez les captures d’écran ou les graphiques sur la zone de dépôt, ou cliquez pour les sélectionner. Chaque PNG devient une page du PDF résultant.",
    },
    {
      title: "Ordonnez les pages",
      body: "Utilisez les flèches haut et bas pour agencer les captures d’écran dans l’ordre qui raconte l’histoire — l’étape un avant l’étape deux.",
    },
    {
      title: "Générez le PDF",
      body: "Cliquez sur Créer le PDF. L’outil place chaque image sur sa propre page, aux dimensions de l’image, et construit le fichier combiné localement.",
    },
    {
      title: "Téléchargez le document",
      body: "Le PDF se télécharge automatiquement. Renommez-le en fonction de son contenu pour qu’il soit facile à retrouver et évident pour quiconque l’ouvre.",
    },
    {
      title: "Vérifiez la netteté des pages",
      body: "Ouvrez le PDF et zoomez sur un passage de texte. Le PNG garde le texte net, donc les captures de tableaux de bord, de code ou de conditions doivent rester lisibles.",
    },
  ],
  tips: [
    "Le PNG est un meilleur choix que le JPG dès que l’image contient du texte, une interface, ou des traits nets — la compression du JPG adoucit précisément ces bords.",
    "Les zones transparentes d’un PNG ne restent pas transparentes sur une page de PDF ; elles s’affichent sur fond blanc. Si vous avez conçu un logo sur fond transparent, il se retrouvera sur fond blanc, ce qui convient généralement.",
    "Les captures d’écran pleine page peuvent être hautes et étroites. Elles se convertissent sans problème, mais pensez à recadrer sur la partie utile pour que la page ne soit pas surtout vide.",
    "Les fichiers PNG sont plus volumineux que des JPG pour une même image. Une longue série de captures en haute résolution peut donner un PDF assez lourd — compressez-le si vous devez l’envoyer par e-mail.",
    "Pour un format de page uniforme (tout ajusté au format A4) plutôt que des pages dimensionnées à chaque image, l’application PDF Editor vous donne ce contrôle.",
  ],
  mobileNote:
    "Les captures d’écran s’accumulent sur les téléphones. L’application PDF Editor en transforme un lot en un seul PDF en quelques gestes, et permet d’annoter ou de surligner la partie importante avant de partager — pratique pour les rapports de bug et les relectures rapides en déplacement.",
  faq: [
    {
      q: "Pourquoi choisir le PNG plutôt que le JPG pour un PDF ?",
      a: "Le PNG est sans perte, donc le texte, les captures d’écran et les schémas restent nets. Le JPG a des pertes et adoucit les bords fins. Si vos images contiennent du texte ou une interface, le PNG produit un PDF plus propre.",
    },
    {
      q: "Que deviennent les fonds transparents ?",
      a: "Une page de PDF n’est pas transparente, donc les zones transparentes s’affichent sur fond blanc. Un logo ou une icône à fond transparent se retrouvera simplement sur une page blanche.",
    },
    {
      q: "Mes fichiers sont-ils envoyés quelque part ?",
      a: "Non. Tout se passe dans votre navigateur, sur votre appareil. Vos captures d’écran et graphiques ne le quittent jamais.",
    },
    {
      q: "Puis-je mélanger PNG et JPG dans le même PDF ?",
      a: "Oui. L’outil accepte le PNG, le JPG et le WebP ensemble, donc vous pouvez combiner une capture d’écran, une photo et un graphique exporté en un seul document.",
    },
    {
      q: "Le PDF obtenu est volumineux — que faire ?",
      a: "Les pages en PNG sont lourdes. Passez le fichier dans l’outil Compresser un PDF pour repasser sous les limites d’e-mail et de dépôt, en acceptant une petite perte de qualité.",
    },
  ],
  related: [
    { label: "Image vers PDF — combiner des PNG dans votre navigateur", path: "/image-to-pdf" },
    { label: "PDF vers images — l’opération inverse", path: "/pdf-to-images" },
    { label: "Comment convertir un JPG en PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Comment convertir un WebP en PDF", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
