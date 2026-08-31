import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Comment envoyer un contrat en PDF (signer, verrouiller, transmettre)",
  description:
    "Un contrat demande une méthode plus stricte : verrouiller le contenu, apposer la signature, marquer les brouillons d’un filigrane et livrer un fichier que l’autre partie peut contresigner sans allers-retours.",
  updated: "2026-05-29",
  intro: [
    "Les contrats sont le type de document où une mauvaise manipulation de PDF cause le plus de dégâts. Une copie signée qui est une version différente du brouillon non signé. Une contresignature apposée sur un fichier que le premier signataire pensait verrouillé. Un filigrane de brouillon oublié sur la version finale. Rien de tout cela n’est exotique ; tout cela mène à de vrais litiges.",
    "Le remède est une méthode plus stricte autour de trois choses : verrouiller le contenu avant signature, apposer les signatures dans un ordre clair, et livrer le résultat comme un fichier final définitif. Rien de tout cela ne nécessite un logiciel de contrat coûteux ; cela demande un usage délibéré des outils PDF de base et un enchaînement honnête.",
    "Ce guide parcourt le flux de travail tel qu’il devrait se dérouler — du brouillon final aux signatures des deux parties jusqu’à un PDF contresigné propre dont l’avocat sera satisfait. Il couvre aussi quoi faire quand l’autre partie veut utiliser sa propre plateforme de signature.",
  ],
  steps: [
    {
      title: "Finalisez d’abord le contenu du contrat",
      body: "Toute négociation retourne à la source — Word, Pages, Docs. Ne faites pas de suivi de modifications dans le PDF. N’exportez en PDF que lorsque les deux parties ont convenu que le texte est verrouillé.",
    },
    {
      title: "Retirez les brouillons et le filigrane",
      body: "Retirez les filigranes BROUILLON (Ajouter un filigrane à un PDF permet d’éviter d’en ajouter un dès le départ sur la version finale). Le PDF final doit avoir l’air final.",
    },
    {
      title: "Ajoutez votre signature en premier",
      body: "Signer un PDF permet d’ajouter une signature tapée ou dessinée au bon endroit. Signez en premier si vous êtes à l’origine ; l’autre partie contresigne le PDF qui porte déjà votre signature.",
    },
    {
      title: "Verrouillez le fichier avant l’envoi",
      body: "Si votre outil le permet, appliquez des restrictions de modification après la signature. L’autre partie peut lire et signer mais ne peut pas altérer le contenu. C’est le seul moyen de figer un contrat en toute confiance.",
    },
    {
      title: "Envoyez avec des instructions claires",
      body: "Une note courte : « En pièce jointe : contrat signé. Merci de contresigner en page 8 et de renvoyer. » Une phrase évite un aller-retour de questions.",
    },
    {
      title: "Recevez le fichier contresigné et archivez les deux",
      body: "Quand le PDF contresigné arrive, enregistrez-le comme version canonique. Gardez le brouillon non signé, votre copie signée une fois, et la copie entièrement signée dans le même dossier. La chaîne de versions est la trace d’audit.",
    },
  ],
  tips: [
    "N’utilisez pas le même PDF de signature pour un deuxième contrat. Repartez toujours d’un export frais pour chaque nouveau contrat — métadonnées vierges, signatures vierges.",
    "Si l’autre partie veut utiliser sa plateforme de signature (DocuSign, Adobe Sign, autres), déférez à la leur. Ce n’est pas la peine de se battre sur quel outil est le plus propre.",
    "Assurez-vous que votre signature est visuellement distinctive. Un nom tapé en italique est une signature mais paraît moins délibéré qu’une signature dessinée.",
    "Des pages de couverture qui listent le titre du contrat, la date et les parties rendent la recherche future bien plus facile que de se fier au seul nom de fichier.",
    "Filigranez les brouillons (BROUILLON, PAS POUR SIGNATURE) pendant la négociation. L’étiquette visible évite une contresignature accidentelle.",
  ],
  mobileNote:
    "Les contresignatures se font souvent sur téléphone — un partenaire qui relit dans le train, un client qui signe entre deux rendez-vous. L’application PDF Editor gère bien cela : relire le contrat, signer au doigt à l’écran, renvoyer sans passer par un ordinateur. Le fichier signé quitte le téléphone comme un PDF propre.",
  faq: [
    {
      q: "Une signature tapée sur un PDF est-elle juridiquement contraignante ?",
      a: "Dans la plupart des juridictions, oui, pour des contrats ordinaires. Certains cas spécifiques (actes notariés, certains instruments financiers) demandent davantage — vérifiez le type de contrat avant de supposer.",
    },
    {
      q: "Le contrat doit-il être protégé par mot de passe ?",
      a: "Généralement non. Les mots de passe ajoutent de la friction sans grand bénéfice de sécurité. Gardez les mots de passe pour des annexes hautement confidentielles, pas pour le contrat lui-même.",
    },
    {
      q: "Comment verrouiller un PDF après signature ?",
      a: "De nombreux outils de modification, dont l’application PDF Editor, permettent d’appliquer des restrictions de modification pendant le processus de signature. Verrouillez après la signature finale, pas pendant la négociation.",
    },
    {
      q: "Que se passe-t-il si l’autre partie modifie le PDF après ma signature ?",
      a: "Verrouiller le fichier avant l’envoi rend les altérations détectables. Même sans verrouillage, le PDF signé est la version de référence ; des modifications ultérieures invalident la signature.",
    },
    {
      q: "Dois-je toujours signer en premier ?",
      a: "Si vous êtes à l’origine du contrat, oui — cela montre votre engagement. Si vous contresignez, signez le fichier envoyé par l’autre partie plutôt que de repartir de zéro.",
    },
  ],
  related: [
    { label: "Signer un PDF — ajouter des signatures électroniques", path: "/sign-pdf" },
    { label: "Ajouter un filigrane à un PDF — étiqueter clairement les brouillons", path: "/add-watermark-to-pdf" },
    { label: "Comment partager des PDF avec ses clients", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Flux de travail PDF pour les petites entreprises", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Signer un PDF", path: "/sign-pdf" },
};

export default content;
