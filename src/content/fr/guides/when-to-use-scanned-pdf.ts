import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Quand utiliser un PDF numérisé (et quand s’en passer)",
  description:
    "Le PDF numérisé résout un problème précis : faire passer du papier au numérique. Il est aussi plus lourd, moins consultable et plus difficile à modifier. Quand le compromis en vaut la peine.",
  updated: "2026-05-29",
  intro: [
    "Les PDF numérisés résolvent un problème précis : convertir du papier en un fichier numérique qui peut être partagé, archivé et consulté sur n’importe quel appareil. Ils le font bien. Mais ils sont aussi plus volumineux que des PDF tapés équivalents, pas consultables par recherche sans OCR, plus difficiles à modifier, et souvent de résolution inférieure à la source. Numériser un document qui existe déjà numériquement est presque toujours une mauvaise idée.",
    "La règle est simple. Numérisez du papier qui n’a pas de source numérique. Ne numérisez rien que vous avez déjà sous forme de document Word, de capture d’écran ou d’export PDF. La tentation d’imprimer-puis-numériser pour « verrouiller » un document est compréhensible mais généralement inutile — un export PDF direct fait la même chose, en mieux.",
    "Ce guide détaille quand numériser et quand s’en abstenir. La plupart des cas sont intuitifs une fois énoncés ; le problème, c’est que la tentation de numériser est souvent plus forte que le besoin réel.",
  ],
  steps: [
    {
      title: "Utilisez un PDF numérisé quand la seule source est le papier",
      body: "Vieux contrats, notes manuscrites, reçus papier, documents reçus par courrier, formulaires signés à la main. Tout ce qui existe physiquement et doit devenir numérique. Numériser en PDF depuis votre téléphone ou un scanner à plat produit un PDF net.",
    },
    {
      title: "Ne numérisez pas des documents que vous avez déjà numériquement",
      body: "Si vous avez le document Word, le PDF source, ou l’export, utilisez-les. Imprimer puis numériser perd en fidélité, alourdit le fichier, et supprime la possibilité de recherche. Il n’y a aucun avantage.",
    },
    {
      title: "Ne numérisez pas pour « verrouiller » un document",
      body: "Réexporter depuis la source vers PDF verrouille déjà le contenu. Numériser n’ajoute aucune sécurité ; ça retire la possibilité de recherche et la qualité du texte sans rendre le fichier plus difficile à modifier.",
    },
    {
      title: "Utilisez l’OCR si vous numérisez et avez besoin de recherche",
      body: "L’OCR convertit les images numérisées de texte en texte réel consultable par recherche. Sans lui, les PDF numérisés sont des images de mots — lisibles, mais pas consultables par recherche.",
    },
    {
      title: "Compressez les scans avant de les partager",
      body: "Les PDF numérisés sont parmi les plus lourds que vous rencontrerez couramment. Compresser le PDF dans votre navigateur les réduit fortement sans perte de qualité visible, en particulier sur les documents purement textuels.",
    },
    {
      title: "Numérisez à la bonne résolution",
      body: "200 à 300 DPI pour des documents lus à l’écran. 300 DPI pour tout ce qui pourrait être imprimé. 600 DPI correspond à une qualité photo et gaspille de l’espace pour du texte.",
    },
  ],
  tips: [
    "La plupart des moments « je dois numériser ça » se révèlent être « je l’ai déjà numériquement et j’ai oublié ». Cherchez d’abord la source.",
    "Un export PDF direct est toujours plus propre qu’une impression numérisée, sur tous les critères mesurables : plus net, plus léger, consultable par recherche, modifiable.",
    "Les scans depuis un téléphone égalent désormais la qualité d’un scanner à plat pour des documents ordinaires, grâce à la détection des bords et à l’ajustement du contraste.",
    "Les scans passés à l’OCR sont consultables par recherche mais pas parfaits au niveau du texte. Traitez le résultat de l’OCR comme approximatif, pas comme faisant autorité.",
    "Ne numérisez pas pour donner un air « officiel » à un fichier neuf. Le format est le même ; personne ne se soucie de savoir s’il a été numérisé ou exporté.",
  ],
  mobileNote:
    "Le téléphone est le bon outil pour la numérisation du quotidien — l’appareil photo est toujours sur vous, la détection des bords produit des résultats nets, et le PDF obtenu est utilisable immédiatement. Le flux de numérisation de l’application PDF Editor est conçu pour cela, avec capture multipage et nettoyage directement sur l’appareil.",
  faq: [
    {
      q: "Dois-je numériser un document que j’ai en fichier Word ?",
      a: "Non. Exportez-le directement en PDF. Numériser fait perdre en résolution, alourdit le fichier, et supprime la possibilité de recherche.",
    },
    {
      q: "Un PDF numérisé est-il plus « officiel » qu’un PDF exporté ?",
      a: "Non. Ce sont tous les deux des PDF. Le caractère officiel vient des signatures et du contenu, pas de l’origine — numérisée ou exportée.",
    },
    {
      q: "Quand la numérisation aide-t-elle vraiment ?",
      a: "Quand la source est du papier. Contrats reçus par courrier, notes manuscrites, formulaires papier remplis à la main. La numérisation est le seul moyen de les rendre numériques.",
    },
    {
      q: "Faut-il appliquer l’OCR à chaque scan ?",
      a: "Oui si votre outil le permet. Les scans consultables par recherche sont bien plus utiles à long terme, et l’OCR ne change pas l’apparence visible du document.",
    },
    {
      q: "Quel poids devrait faire un PDF numérisé ?",
      a: "Quelques centaines de Ko à quelques Mo pour des documents typiques. Des scans nettement plus lourds gagnent à être compressés.",
    },
  ],
  related: [
    { label: "Numériser en PDF — numérisation par appareil photo", path: "/scan-to-pdf" },
    { label: "Comment numériser des documents en PDF avec son téléphone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Comment corriger la qualité d’un PDF numérisé", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "PDF modifiable ou PDF image", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Numériser en PDF — numérisation par appareil photo", path: "/scan-to-pdf" },
};

export default content;
