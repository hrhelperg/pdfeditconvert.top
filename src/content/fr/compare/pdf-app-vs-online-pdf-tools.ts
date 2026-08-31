import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "Application PDF ou outils PDF en ligne — que choisir ?",
  description:
    "Application PDF native ou outils dans le navigateur : rapidité, confidentialité et usage hors connexion comparés.",
  intro: [
    "Il existe deux façons de travailler avec des PDF depuis un téléphone ou un ordinateur : installer une application native ou utiliser l’un des nombreux outils PDF fonctionnant dans le navigateur. Les deux fonctionnent — mais les compromis sont très différents, et ils pèsent particulièrement lourd pour les documents sensibles.",
    "Les outils dans le navigateur gagnent sur la commodité : un clic et le travail commence. Les applications natives gagnent sur la rapidité, la confidentialité et l’accès hors connexion. Pour une conversion ponctuelle d’un document public, un outil de navigateur convient très bien. Pour le travail documentaire quotidien — en particulier les contrats, les pièces d’identité et les dossiers clients —, l’application native reste le choix par défaut le plus sûr.",
    "Cette comparaison couvre la rapidité, la confidentialité, l’accès hors connexion, le coût et les types de fichiers que chaque option gère bien, pour choisir en connaissance de cause plutôt que de s’arrêter au premier résultat Google venu.",
  ],
  leftLabel: "Application PDF native",
  rightLabel: "Outil PDF en ligne",
  rows: [
    { feature: "Fonctionne hors connexion", left: "oui", right: "non" },
    { feature: "Les fichiers restent sur votre appareil", left: "oui", right: "non" },
    { feature: "Rapidité (aucune attente d’envoi ni de téléchargement)", left: "oui", right: "non" },
    { feature: "Aucune limite de taille de fichier", left: "oui", right: "Limité" },
    { feature: "Aucun compte requis", left: "oui", right: "Parfois" },
    { feature: "Fonctionne sur les réseaux d’entreprise verrouillés", left: "oui", right: "Peut-être" },
    { feature: "Confort au quotidien", left: "oui", right: "Limité" },
    { feature: "Installation nécessaire au départ", left: "oui", right: "non" },
    { feature: "Liens de collaboration entre appareils", left: "Limité", right: "oui" },
  ],
  whenLeft: [
    "Vous traitez des documents sensibles (contrats, pièces d’identité, paie)",
    "Vous travaillez dans des endroits où la connexion est instable",
    "Vous modifiez des PDF assez souvent pour justifier une installation",
    "Vous voulez le même outil disponible en mode avion",
    "La confidentialité compte pour les documents que vous traitez",
  ],
  whenRight: [
    "Conversion ou fusion ponctuelle sur un ordinateur public",
    "Vous ne voulez rien installer",
    "Le document n’est pas sensible",
    "Vous avez besoin d’un lien d’aperçu à partager",
    "Vous êtes sur un appareil où vous ne pouvez pas installer d’applications",
  ],
  faq: [
    {
      q: "Les outils PDF en ligne sont-ils sûrs ?",
      a: "Certains le sont. La plupart ont des politiques de confidentialité qui les autorisent à conserver brièvement vos fichiers pour les traiter. Pour des documents non sensibles, c’est acceptable ; pour des contrats ou des pièces d’identité, l’application native est plus sûre.",
    },
    {
      q: "Pourquoi l’application native est-elle plus rapide ?",
      a: "Aucun envoi de fichier, aucune file d’attente sur un serveur, aucun téléchargement du résultat. L’opération entière se déroule localement.",
    },
    {
      q: "Puis-je utiliser les deux ?",
      a: "Oui. Beaucoup d’utilisateurs privilégient l’application native pour le travail quotidien et se tournent vers un outil web dans le cas rare où un collègue a besoin d’un lien d’aperçu à partager.",
    },
  ],
  related: [
    { label: "Éditeur PDF — vue d’ensemble", path: "/pdf-editor" },
    { label: "Sécurité des PDF", path: "/pdf-security" },
    { label: "PDF en entreprise", path: "/pdf-for-business" },
  ],
};

export default content;
