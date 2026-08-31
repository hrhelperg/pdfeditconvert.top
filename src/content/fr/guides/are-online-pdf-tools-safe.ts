import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Les outils PDF en ligne sont-ils sûrs ? Un regard honnête sur le risque",
  description:
    "La plupart des outils PDF « en ligne » transfèrent votre fichier sur un serveur. Certains non. Les risques réels, les familles d’outils qui traitent vos données différemment, et comment les distinguer.",
  updated: "2026-05-29",
  intro: [
    "« Outil PDF en ligne » est une expression qui cache une distinction importante. Certains de ces outils envoient votre fichier sur leur serveur, le traitent là-bas, puis vous renvoient le résultat. D’autres fonctionnent entièrement dans votre navigateur — votre fichier ne quitte jamais votre appareil. Les deux sont parfois qualifiés d’« en ligne », et la différence compte énormément pour tout contenu sensible.",
    "La réponse honnête à « sont-ils sûrs » est : ça dépend du type d’outil utilisé et de ce que contient le fichier. Un relevé bancaire qui passe par un outil qui envoie sur un serveur représente un vrai risque, même avec des politiques de conservation affichées. Le même relevé traité par un outil qui fonctionne en local ne touche jamais leur réseau, donc le profil de risque est fondamentalement différent.",
    "Ce guide sépare les catégories sans alarmisme. Il explique où se situent les risques réels, comment lire rapidement une politique de confidentialité, et comment savoir si un outil que vous envisagez envoie vos données sur un serveur ou fonctionne en local — sans se contenter du discours marketing.",
  ],
  steps: [
    {
      title: "Identifiez la catégorie de l’outil",
      body: "Trois catégories : (1) transfert complet — le fichier part sur un serveur et y est traité. (2) Dans le navigateur avec synchronisation optionnelle — fonctionne en local mais propose des fonctions cloud. (3) Navigateur uniquement — aucun transfert. La catégorie détermine le risque réel.",
    },
    {
      title: "Vérifiez la politique de confidentialité sur la conservation",
      body: "Cherchez des mots comme « conserver », « stocker », « supprimer après ». Une politique qui dit « les fichiers sont supprimés dans l’heure » indique la catégorie (1). Une politique qui dit « les fichiers ne quittent pas votre appareil » indique la (3). Une politique vague est un signal d’alerte.",
    },
    {
      title: "Observez le trafic réseau pour vérifier",
      body: "Ouvrez les outils de développement, l’onglet réseau, déposez votre PDF. Si vous voyez un envoi (une requête sortante volumineuse quand vous ajoutez le fichier), c’est un transfert sur serveur. Si vous n’en voyez pas, le traitement est local. C’est la vérification la plus directe.",
    },
    {
      title: "Adaptez l’outil à la sensibilité du fichier",
      body: "Les fichiers anodins (photos de vacances en PDF) peuvent passer par n’importe quelle catégorie. Les fichiers sensibles (financiers, juridiques, médicaux, personnels) relèvent de la catégorie (3) ou d’un outil payant avec des garanties explicites de traitement des données.",
    },
    {
      title: "Réfléchissez à ce que « sûr » signifie pour votre cas",
      body: "Parfois le risque est d’ordre professionnel (ne pas divulguer de données client). Parfois réglementaire (RGPD, obligations sectorielles). Parfois personnel (éviter l’usurpation d’identité). Le bon outil dépend de la menace à laquelle vous faites réellement face.",
    },
    {
      title: "Privilégiez par défaut les outils dans le navigateur en cas de doute",
      body: "Les outils dans le navigateur qui n’envoient rien sur un serveur sont sûrs par construction — le fichier ne peut pas fuiter d’un serveur qui ne l’a jamais reçu. Les outils de ce site appartiennent à cette catégorie.",
    },
  ],
  tips: [
    "Gratuit + transfert sur serveur + politique de confidentialité floue = à éviter pour tout contenu sensible. C’est la combinaison la plus risquée.",
    "Même les outils avec envoi sur serveur qui affichent une politique de confidentialité solide ont une vraie surface d’attaque — violations de serveur, échecs de purge, accès des employés. Le traitement local élimine cette surface.",
    "Ne faites pas confiance sans vérification aux affirmations « nous ne conservons rien ». Observer le trafic réseau est le seul moyen d’en avoir la certitude.",
    "Les outils dans le navigateur ont leurs propres limites — les opérations lourdes et l’OCR ont parfois besoin d’aide côté serveur. Connaissez la limite ; ne surpromettez pas.",
    "Si une tâche impose vraiment un envoi sur serveur (rare), choisissez un outil avec une politique de conservation clairement énoncée et utilisez un fichier fraîchement protégé par mot de passe.",
  ],
  mobileNote:
    "Les outils PDF mobiles se divisent aussi entre ceux qui envoient sur un serveur et ceux qui restent locaux. L’application PDF Editor traite tout sur l’appareil, sur iOS comme sur Android — aucun transfert, aucun compte, aucune synchronisation sauf si vous l’activez vous-même. Pour des documents sensibles sur téléphone, c’est le bon réglage par défaut.",
  faq: [
    {
      q: "Envoyer mon PDF sur un outil en ligne est-il vraiment risqué ?",
      a: "Ça dépend du fichier. Pour un itinéraire de vacances, le risque est très faible. Pour des documents financiers ou des contrats, le risque est réel — les violations de serveur et les échecs de purge arrivent bel et bien. Adaptez l’outil au fichier.",
    },
    {
      q: "Comment savoir si un outil envoie le fichier sur un serveur ou le traite en local ?",
      a: "Ouvrez les outils de développement de votre navigateur, l’onglet réseau, déposez un fichier. Si une grosse requête réseau sortante se déclenche quand vous ajoutez le fichier, c’est un transfert. Sinon, le traitement est local.",
    },
    {
      q: "Les outils payants sont-ils plus sûrs que les gratuits ?",
      a: "Parfois. Les outils payants ont souvent des engagements explicites sur la conservation et le traitement des données. Certains outils gratuits (comme ceux de ce site) fonctionnent en local et n’ont pas besoin de ces engagements puisqu’ils ne reçoivent jamais votre fichier.",
    },
    {
      q: "Et le chiffrement de bout en bout ?",
      a: "Utile pour le partage, mais n’aide pas pour le traitement. Si un serveur doit lire votre fichier pour le compresser, le chiffrement en transit ne change rien au fait que le serveur voit le contenu.",
    },
    {
      q: "Faut-il chiffrer son PDF avant de l’envoyer sur un serveur ?",
      a: "Si vous devez vraiment l’envoyer, oui. Un PDF protégé par mot de passe arrive déjà protégé sur le serveur. Mais mieux vaut éviter complètement le transfert pour du contenu sensible.",
    },
  ],
  related: [
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Outils PDF qui respectent la confidentialité", path: "/guides/privacy-first-pdf-tools" },
    { label: "Outils PDF dans le navigateur ou avec transfert", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Les outils PDF en ligne conservent-ils vos fichiers ?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
