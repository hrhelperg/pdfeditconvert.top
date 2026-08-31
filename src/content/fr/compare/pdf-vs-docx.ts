import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF ou DOCX — le comparatif point par point",
  description:
    "PDF et DOCX comparés sur la modification, la fidélité de mise en page, la signature, la sécurité et le partage. Choisissez le bon format selon l'usage.",
  intro: [
    "PDF et DOCX sont les deux formats dans lesquels finissent la plupart des documents. Chacun a un rôle précis à jouer — et choisir le bon pour chaque tâche évite l’essentiel des soucis de mise en forme et de partage que l’on associe généralement aux documents.",
    "Cette comparaison se veut pratique, pas théorique. Chaque ligne reflète le comportement réel des deux formats dans un usage quotidien, et non ce que prévoient les documents de normalisation. L’accent est mis sur ce que l’on remarque dès le premier mois d’utilisation intensive de l’un ou l’autre.",
    "En résumé : le PDF l’emporte quand le document est finalisé, doit s’afficher à l’identique pour le lecteur, ou contient une signature. Le DOCX l’emporte quand le document est encore un brouillon de travail, que plusieurs personnes le relisent, ou que le contenu sera réutilisé ailleurs. La plupart des documents passent par les deux formats à différentes étapes de leur vie.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Mise en page fidèle au pixel près", left: "oui", right: "non" },
    { feature: "Modification de texte facile", left: "Limité", right: "oui" },
    { feature: "Lecture universelle", left: "oui", right: "non" },
    { feature: "Suivi des modifications et commentaires", left: "Limité", right: "oui" },
    { feature: "Protection par mot de passe (AES-256)", left: "oui", right: "oui" },
    { feature: "Rendu fiable dans 10 ans", left: "oui", right: "non" },
    { feature: "Lecture mobile sans application supplémentaire", left: "oui", right: "non" },
    { feature: "Champs de formulaire", left: "oui", right: "Limité" },
    { feature: "Prise en charge native de la signature", left: "oui", right: "Extension" },
  ],
  whenLeft: [
    "Le document est finalisé et ne doit plus être modifié",
    "Il doit s’afficher à l’identique sur tous les appareils",
    "Le destinataire n’a peut-être pas Microsoft Word",
    "Le document sera archivé pendant des années",
    "Vous avez besoin d’un format imprimable, prêt à signer",
  ],
  whenRight: [
    "Le document est encore en cours de rédaction",
    "Plusieurs personnes le relisent ou coécrivent",
    "Le suivi des modifications et les commentaires sont importants",
    "Vous devez réutiliser ou remettre en forme le contenu",
    "Le document deviendra un modèle",
  ],
  faq: [
    {
      q: "Puis-je convertir entre PDF et DOCX ?",
      a: "Oui. Les bons outils PDF convertissent dans les deux sens avec une fidélité élevée pour les documents à base de texte.",
    },
    {
      q: "Quel format est le plus sûr ?",
      a: "Les deux prennent en charge le chiffrement AES-256. Ce n’est pas le format lui-même qui détermine la sécurité, mais le mot de passe et la façon dont vous le partagez.",
    },
    {
      q: "Mes polices survivront-elles à la conversion ?",
      a: "Dans la plupart des cas, oui. Si une police n’est pas disponible sur l’appareil de destination, une police proche est substituée. Privilégiez des polices courantes (Calibri, Inter, Helvetica) pour limiter les substitutions.",
    },
  ],
  related: [
    { label: "Guide : PDF ou DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Convertisseur PDF", path: "/pdf-converter" },
    { label: "Éditeur PDF", path: "/pdf-editor" },
  ],
};

export default content;
