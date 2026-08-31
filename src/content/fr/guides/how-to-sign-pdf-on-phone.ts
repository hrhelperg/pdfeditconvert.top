import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "Comment signer un PDF depuis son téléphone",
  description:
    "Ajoutez une signature électronique à un PDF depuis votre iPhone ou votre Android. Guide pratique avec l’application PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Imprimer un PDF juste pour le signer et le numériser à nouveau n’a plus lieu d’être. La plupart des juridictions acceptent la signature électronique pour les contrats commerciaux courants, les accords de confidentialité, les devis et les accusés de réception. Votre téléphone suffit largement à produire une signature propre et juridiquement utilisable en moins d’une minute.",
    "Ce guide couvre la signature d’un PDF sur iPhone ou Android avec l’application PDF Editor. La signature que vous enregistrez est réutilisable pour chaque futur document — vous la dessinez une seule fois. Ensuite, signer n’importe quel contrat tient en quatre gestes : ouvrir, toucher Signer, placer, exporter.",
    "Nous verrons aussi les cas où signer depuis un téléphone est *préférable* à un bureau : contrats qui doivent repartir vite, signature en déplacement, et circuits à plusieurs signataires qui passent de téléphone en téléphone. À la fin, vous aurez une signature enregistrée, prête pour chaque futur document.",
  ],
  steps: [
    {
      title: "Ouvrez le PDF",
      body: "Importez le document dans l’application PDF Editor via Fichiers, votre espace cloud, un e-mail ou toute application de partage. Le circuit de signature fonctionne quelle que soit l’origine du PDF.",
    },
    {
      title: "Touchez l’outil Signer",
      body: "Il se trouve dans la barre d’outils d’édition. Choisissez signature manuscrite, signature tapée, ou paraphe. L’outil détecte automatiquement les champs de signature existants si le PDF a été conçu pour être signé.",
    },
    {
      title: "Dessinez ou tapez votre signature",
      body: "Uniquement la première fois. Utilisez votre doigt, un Apple Pencil ou un S Pen. Le résultat est enregistré sur votre appareil. Vous pouvez le modifier ou le remplacer à tout moment depuis les Réglages.",
    },
    {
      title: "Placez la signature",
      body: "Faites-la glisser au bon endroit sur la page. Redimensionnez-la avec les poignées d’angle. La signature devient un objet PDF ordinaire, que vous pouvez déplacer après l’avoir posée.",
    },
    {
      title: "Ajoutez la date et le paraphe si nécessaire",
      body: "Beaucoup de contrats demandent une date à côté de la signature et un paraphe sur chaque page. Un horodatage en un geste et une variante de paraphe enregistrée couvrent les deux cas.",
    },
    {
      title: "Exportez la copie signée",
      body: "Enregistrez sous un nouveau nom (recommandé — pour garder l’original non signé) ou remplacez le fichier. Le PDF exporté inclut les métadonnées de signature à des fins d’archivage. Partagez-le par e-mail, AirDrop, Drive ou toute application de messagerie.",
    },
  ],
  tips: [
    "Utilisez un stylet plutôt que le doigt quand le document passe par une revue visuelle. Un trait plus net fait une vraie différence sur des contrats destinés à un client.",
    "Enregistrez votre signature une fois et réutilisez-la sur chaque futur document — l’application la stocke localement sur votre appareil, jamais envoyée ailleurs.",
    "Utilisez une signature tapée pour les accusés de réception internes courants et une signature manuscrite pour les contrats externes.",
    "Appliquez un mot de passe aux documents signés particulièrement sensibles avant de les partager — l’outil Protéger s’utilise après la signature.",
    "Gardez le PDF original non signé dans un dossier à côté de la version signée. Si une contrepartie demande une copie « vierge » ou si vous devez re-signer avec des corrections, vous l’aurez sous la main.",
  ],
  mobileNote:
    "Signer depuis un téléphone permet aux contrats de repartir de l’autre côté dans l’heure — parfois en quelques minutes. Cet avantage de rapidité compte particulièrement loin d’un bureau : chez un client, entre deux réunions, ou en déplacement. Tout le circuit, de la réception d’un contrat à son renvoi signé, tient facilement dans une pause café.",
  faq: [
    {
      q: "Une signature électronique est-elle valable juridiquement ?",
      a: "Dans la plupart des juridictions, oui, pour les contrats commerciaux ordinaires. Le règlement eIDAS de l’UE et l’ESIGN Act américain reconnaissent tous deux les signatures électroniques standard. Pour les documents de grande valeur ou soumis à une réglementation stricte, vérifiez la réglementation applicable — une signature électronique qualifiée peut être exigée, ce qui suit un processus différent, plus formel.",
    },
    {
      q: "Plusieurs personnes peuvent-elles signer le même PDF ?",
      a: "Oui. Faites circuler le fichier entre les signataires via le menu de partage, AirDrop, l’e-mail ou toute application de messagerie. Chaque signature s’ajoute à sa place et les signatures précédentes restent intactes. Le fichier final affiche la signature de chacun aux bons emplacements.",
    },
    {
      q: "La signature aura-t-elle un rendu net sur l’écran d’un téléphone ?",
      a: "Sur les téléphones récents, oui. Un stylet produit des traits nettement plus fluides qu’un doigt, ce qui compte pour les contrats soumis à une revue visuelle. Pour les accusés de réception courants, une signature au doigt est parfaitement acceptable.",
    },
    {
      q: "Ma signature est-elle stockée sur un serveur quelque part ?",
      a: "Non. Les signatures enregistrées vivent uniquement sur votre appareil. Elles sont appliquées aux documents localement et ne sont jamais envoyées vers notre infrastructure ni vers un tiers.",
    },
    {
      q: "Que se passe-t-il si le PDF a déjà des champs de signature ?",
      a: "L’application détecte les champs de signature existants de type formulaire et vous permet de toucher directement dedans. Votre signature se cale automatiquement à la bonne taille et à la bonne position — aucun redimensionnement manuel nécessaire.",
    },
  ],
  related: [
    { label: "Signer un PDF — présentation complète", path: "/sign-pdf" },
    {
      label: "Protéger les PDF signés par un mot de passe",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Comment modifier un PDF sur iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Signer un PDF", path: "/sign-pdf" },
};

export default content;
