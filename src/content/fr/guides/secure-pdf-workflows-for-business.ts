import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "secure-pdf-workflows-for-business",
  h1: "Sécuriser ses PDF en entreprise (sans infrastructure lourde)",
  description:
    "Une petite entreprise n’a pas besoin d’un coffre-fort documentaire certifié pour travailler sereinement. Le socle réaliste — stockage chiffré, envois maîtrisés, traitement local — qui répond au risque réel.",
  updated: "2026-05-29",
  intro: [
    "Les infrastructures de sécurité PDF d’entreprise — coffres-forts audités, conservation automatisée, préparation à l’e-discovery — existent pour des entreprises surveillées par des régulateurs. Pour un cabinet de conseil de cinq personnes ou une agence de trente personnes, c’est disproportionné. Le risque réel est plus banal : un employé envoie un contrat client vers un outil gratuit de « compression » qui conserve le fichier, un disque partagé n’est pas chiffré, un PDF signé part par e-mail sans protection sur un wifi public.",
    "Un socle de sécurité adapté à une petite entreprise ordinaire traite ces risques réels sans acheter d’équipement d’entreprise. Stockage chiffré, envois signés, traitement local pour le contenu sensible, et quelques habitudes que l’équipe adopte ensemble. Rien de tout cela n’est coûteux ; il s’agit surtout de changer les outils par défaut.",
    "Ce guide décrit ce socle. Prenez ce qui convient à votre entreprise ; ignorez ce qui ne s’applique pas. L’objectif est une défense raisonnable, pas de la mise en scène.",
  ],
  steps: [
    {
      title: "Chiffrement intégral du disque sur chaque appareil professionnel",
      body: "FileVault sur macOS, BitLocker sur Windows, LUKS sur Linux. Indispensable sur les ordinateurs portables, utile sur les postes fixes. Un appareil perdu ou volé sans chiffrement est une violation de données immédiate ; avec le chiffrement, ce n’est qu’une perte matérielle.",
    },
    {
      title: "Traitez les PDF en local pour le contenu client sensible",
      body: "Compresser le PDF, Fusionner le PDF, Extraire des pages PDF et les autres outils de ce site fonctionnant dans le navigateur traitent le fichier en local — les données client ne passent par aucun tiers. Établissez cela comme réglage par défaut pour toute l’équipe.",
    },
    {
      title: "Signez les contrats avec un vrai outil de signature électronique",
      body: "Signer le PDF ou l’application PDF Editor pour les contrats ordinaires. Pour les transactions réglementées, utilisez une plateforme de signature commerciale vérifiée. Dans les deux cas, une signature dessinée tient mieux qu’un nom simplement tapé.",
    },
    {
      title: "Utilisez des canaux chiffrés pour les envois sensibles",
      body: "Signal ou un e-mail chiffré de bout en bout pour le contenu sensible. E-mail ordinaire pour les documents courants. Adaptez le canal au niveau de sensibilité.",
    },
    {
      title: "Définissez une politique de mots de passe pour les PDF sensibles",
      body: "Le contenu client confidentiel reçoit un mot de passe PDF. Partagez le mot de passe par un canal distinct de celui du fichier. Utilisez des mots de passe uniques par client quand c’est faisable.",
    },
    {
      title: "Passez en revue et supprimez régulièrement",
      body: "Révision trimestrielle de /Clients/Archivage/. Supprimez ce que les régulateurs n’exigent pas et dont les clients n’ont plus besoin. Chaque fichier sensible conservé représente un risque continu ; réduire l’inventaire réduit l’exposition.",
    },
  ],
  tips: [
    "Consignez le socle de sécurité par écrit. Une politique d’une page que tout le monde a lue tient mieux qu’une norme jamais formulée.",
    "Chiffrez les clés USB et les disques de sauvegarde externes. Ce sont les appareils les plus faciles à perdre.",
    "Ne payez pas un abonnement par poste pour un logiciel de sécurité quand des outils gratuits couvrent le socle. Réservez le budget pour les vraies lacunes.",
    "Formez l’équipe à l’hameçonnage — la plupart des violations dans les petites entreprises ne viennent pas d’une faiblesse d’outillage, mais d’un e-mail d’hameçonnage réussi.",
    "Ayez un plan en cas d’incident, même s’il tient en un paragraphe. « Si nous perdons un ordinateur portable contenant des fichiers clients, nous informons les clients concernés sous 48 heures » suffit pour commencer.",
  ],
  mobileNote:
    "Les petites entreprises effectuent désormais une part importante de leur travail documentaire depuis un téléphone. L’application PDF Editor gère la signature, la compression, la conversion et le partage en local sur iOS et Android, pour que le volet mobile du travail n’introduise pas un nouveau serveur tiers dans la chaîne.",
  faq: [
    {
      q: "Les petites entreprises ont-elles vraiment besoin d’un socle de sécurité ?",
      a: "Oui. La plupart des violations touchent des petites entreprises, pas des grands groupes. Le socle est court et peu coûteux ; ne pas l’avoir est le vrai risque.",
    },
    {
      q: "Le traitement dans le navigateur est-il assez sûr pour le travail client ?",
      a: "Pour un travail client ordinaire, oui. Le fichier ne quitte pas votre appareil ; c’est plus solide qu’un outil côté serveur avec une politique de conservation. Pour des transactions réglementées (financières, médicales), des exigences de conformité spécifiques peuvent s’appliquer.",
    },
    {
      q: "Faut-il une signature de niveau entreprise pour chaque contrat ?",
      a: "Non. Les contrats ordinaires peuvent utiliser Signer le PDF ou l’application PDF Editor. Réservez les plateformes de signature commerciales aux transactions à forte valeur ou réglementées.",
    },
    {
      q: "Comment gérer un incident de sécurité ?",
      a: "Planifiez à l’avance : processus de notification, liste des clients concernés, signalement réglementaire le cas échéant. N’improvisez pas.",
    },
    {
      q: "Quelle est la lacune de sécurité la plus courante en petite entreprise ?",
      a: "Un chiffrement inégal des appareils et un usage désinvolte d’outils PDF gratuits avec envoi sur serveur pour du contenu client sensible. Les deux se corrigent à peu de frais.",
    },
  ],
  related: [
    { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
    { label: "Comment protéger ses PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Comment partager un PDF en toute discrétion", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Organisation des PDF dans une petite entreprise", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
};

export default content;
