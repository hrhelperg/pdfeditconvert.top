import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF ou DOCX — quel format utiliser ?",
  description:
    "Quand choisir le PDF plutôt que le DOCX, et l’inverse. Comparaison claire sur la modification, la fidélité, la signature et le partage.",
  updated: "2026-05-11",
  intro: [
    "PDF et DOCX répondent à des besoins différents. Le PDF est un format verrouillé, pensé pour l’impression, identique sur tous les appareils. Le DOCX est un format de travail modifiable, que n’importe qui peut remanier, restyliser et remettre en forme avec Word, Google Docs ou toute suite bureautique.",
    "Choisir le bon format pour chaque usage évite la plupart des tracas associés aux deux. Envoyer un contrat final en DOCX invite à des modifications accidentelles. Envoyer un brouillon de travail en PDF rend la relecture malcommode. Le choix n’est pas esthétique — il dépend de la fonction du document.",
    "Ce guide détaille quand chaque format s’impose, avec des exemples concrets tirés de contrats, brouillons, factures, rapports, et des types de documents que petites entreprises et particuliers manipulent chaque semaine.",
  ],
  steps: [
    {
      title: "Utilisez le PDF quand le document est final",
      body: "Contrats, accords signés, factures, brochures, rapports destinés à des clients ou des parties prenantes. Tout ce dont le destinataire doit voir exactement ce que vous avez vu, sans pouvoir le modifier sans que ce soit visible.",
    },
    {
      title: "Utilisez le DOCX quand le document est encore en cours de rédaction",
      body: "Brouillons, documents collaboratifs, tout ce qui est en relecture, modèles destinés à être réutilisés et ajustés. Les commentaires et le suivi des modifications ne fonctionnent correctement qu’en DOCX — c’est même la raison d’être du format.",
    },
    {
      title: "Utilisez le PDF pour l’archivage",
      body: "Les PDF sont conçus pour la conservation à long terme. Le format s’affiche de la même façon dans 10 ans. Les fichiers DOCX peuvent se casser subtilement entre versions de Word et systèmes d’exploitation — acceptable pour un document de travail, risqué pour une archive.",
    },
    {
      title: "Utilisez le DOCX quand le contenu doit être extrait",
      body: "Récupérer du texte dans un autre outil, réutiliser une section pour un article de blog, réécrire dans un autre style — tout cela est plus simple depuis un DOCX, où le contenu est déjà structuré et modifiable.",
    },
    {
      title: "Convertissez d’un format à l’autre selon le besoin",
      body: "Les bons outils PDF convertissent dans les deux sens avec une haute fidélité pour les documents à dominante texte. Le flux habituel : modifier en DOCX, exporter en PDF pour un partage externe. Recevoir un PDF, le convertir en DOCX si le contenu doit être réutilisé.",
    },
    {
      title: "Utilisez le PDF en réception d’un inconnu",
      body: "Les fichiers DOCX peuvent contenir des macros et des objets intégrés qui présentent des risques de sécurité. Les PDF sont plus sûrs à ouvrir depuis une source non fiable, même s’il reste recommandé de garder son lecteur PDF à jour.",
    },
  ],
  tips: [
    "N’envoyez jamais un projet de contrat en DOCX à une partie externe, sauf si vous l’invitez explicitement à le modifier — elle peut le changer sans que vous le sachiez, et vous ne repérerez les différences qu’en comparant attentivement.",
    "N’envoyez jamais une facture finale en DOCX — elle doit être non modifiable. Le PDF est le bon choix, à chaque fois.",
    "Si un destinataire demande un « PDF modifiable », il veut en général un DOCX. Vérifiez avant de supposer, puis convertissez.",
    "Les PDF signés doivent rester en PDF. Les reconvertir en DOCX efface la signature.",
    "Pour les documents avec des champs de formulaire, le PDF est en général le meilleur choix — les champs de formulaire en DOCX sont peu pratiques et se comportent différemment d’un éditeur à l’autre.",
  ],
  mobileNote:
    "Sur mobile, le DOCX nécessite Word, Google Docs ou une autre application bureautique pour s’afficher correctement. Le PDF s’ouvre nativement sur iOS et Android avec les visionneuses intégrées. Cela seul fait du PDF le bon choix pour la plupart des documents partagés — votre destinataire n’aura rien à installer pour le lire.",
  faq: [
    {
      q: "Puis-je modifier un PDF directement sans le convertir ?",
      a: "Oui, avec un éditeur PDF adapté. La modification d’un PDF est plus contrainte que celle d’un DOCX — elle est pensée pour des corrections, des signatures et de petits ajustements, pas pour une réécriture importante. Pour des modifications substantielles, convertir d’abord en DOCX est en général plus judicieux.",
    },
    {
      q: "Quel format produit les fichiers les plus légers ?",
      a: "Cela dépend du contenu. Un DOCX riche en texte est en général plus léger que le PDF équivalent. Un PDF riche en images peut être plus léger qu’un DOCX s’il est bien compressé, car la compression d’image du PDF est plus flexible.",
    },
    {
      q: "Mes polices survivront-elles à la conversion ?",
      a: "Dans l’ensemble, oui. Si une police n’est pas disponible sur l’appareil de destination, une police proche la remplace automatiquement. Restez sur des polices courantes (Inter, Helvetica, Calibri, Arial) pour limiter les substitutions visibles.",
    },
    {
      q: "Le PDF/A est-il différent d’un PDF classique ?",
      a: "Oui. Le PDF/A est un sous-ensemble strict pensé pour l’archivage, qui intègre toutes les polices et interdit les dépendances externes. Il est exigé par certaines archives gouvernementales et juridiques. Le PDF standard convient à presque tout le reste.",
    },
    {
      q: "Un DOCX peut-il contenir une signature ?",
      a: "Il peut contenir une image de signature, mais celle-ci n’a aucune valeur cryptographique. Les PDF prennent en charge de vraies signatures numériques qui lient la signature au document. Pour tout ce qui doit être signé légalement, le PDF est le bon format.",
    },
  ],
  related: [
    { label: "PDF ou DOCX — comparaison complète", path: "/compare/pdf-vs-docx" },
    { label: "Convertisseur PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
