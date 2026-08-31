import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Comment réduire un PDF avant de le déposer sur un portail",
  description:
    "Les portails de dépôt sont plus stricts que la messagerie. Comment passer sous des plafonds serrés sans perdre la lisibilité qu’ils vérifient.",
  updated: "2026-05-23",
  intro: [
    "Les portails de dépôt sont plus stricts que la messagerie. Un formulaire administratif, un système de candidature, un portail fiscal ou RH plafonne souvent un PDF à 2, 4 ou 5 Mo et rejette tout ce qui dépasse avec une erreur sèche et sans seconde chance. Pire, ce sont souvent des documents numérisés — exactement les fichiers les plus susceptibles d’être trop volumineux.",
    "Ce guide explique comment passer ces plafonds avec l’outil gratuit Compresser un PDF, qui fonctionne dans votre navigateur sans rien envoyer sur un serveur. La particularité des portails, c’est qu’ils exigent aussi que le document reste lisible — un dépôt refusé et un document illisible échouent tous les deux — c’est donc un exercice d’équilibre.",
    "Nous verrons comment atteindre une taille cible précise, quoi faire quand la limite d’un portail est brutalement basse, et comment garder le document assez lisible pour passer la vérification qui l’attend de l’autre côté.",
  ],
  steps: [
    {
      title: "Trouvez la limite exacte du portail",
      body: "Lisez les petites lignes du champ de dépôt. Les portails annoncent un plafond strict — souvent 2 à 5 Mo — et rejettent tout ce qui le dépasse. Ce chiffre est votre objectif.",
    },
    {
      title: "Ouvrez l’outil Compresser un PDF",
      body: "Rendez-vous sur l’outil Compresser un PDF. Il traite le fichier sur votre appareil, ce qui compte puisque les dépôts sur portail concernent en général des documents personnels ou officiels.",
    },
    {
      title: "Compressez en visant le plafond",
      body: "Commencez par Recommandé ; pour un plafond serré, passez à Fort. L’outil affiche la taille obtenue pour que vous puissiez voir si vous êtes passé sous la limite.",
    },
    {
      title: "Vérifiez que c’est toujours lisible",
      body: "Ouvrez le fichier compressé. Les portails rejettent les fichiers trop volumineux et les relecteurs rejettent ceux qui sont illisibles — le document doit satisfaire les deux. Vérifiez que le texte reste confortablement lisible.",
    },
    {
      title: "Si vous n’atteignez pas le plafond, réduisez le nombre de pages",
      body: "Si la compression seule ne suffit pas à passer sous une limite très basse, retirez les pages inutiles avec l’outil Extraire des pages PDF, ou déposez les sections requises séparément si le portail le permet.",
    },
    {
      title: "Déposez le fichier à la bonne taille",
      body: "Soumettez la version compressée. Gardez votre original en pleine qualité au cas où le portail demanderait plus tard une copie plus nette.",
    },
  ],
  tips: [
    "Trouvez le plafond exact avant de compresser. Compresser à l’aveugle gaspille des efforts ; une limite annoncée de 4 Mo vous dit précisément jusqu’où pousser.",
    "Les portails exigent un double contrôle : assez petit pour se déposer et assez net pour se lire. Une compression Forte qui transforme un formulaire en bouillie échouera à la relecture même si le dépôt réussit.",
    "Les documents de candidature numérisés se compressent énormément, donc même un plafond de 2 Mo est généralement atteignable — ce sont presque uniquement des données image.",
    "Si un plafond est impossible à atteindre pour une numérisation multipage, retirer d’abord les pages vides ou non pertinentes réduit la taille sans toucher à la qualité.",
    "Gardez l’original. Un relecteur qui ne peut pas lire un détail peut demander une copie plus nette, et vous voudrez avoir le fichier en pleine qualité sous la main.",
  ],
  mobileNote:
    "Beaucoup de dépôts sur portail se font depuis un téléphone — on photographie un document et on le soumet sur place. L’application PDF Editor compresse hors ligne et permet de vérifier la lisibilité avant le dépôt, pour ne pas soumettre un fichier trop volumineux ou trop flou.",
  faq: [
    {
      q: "Pourquoi les portails de dépôt rejettent-ils mon PDF alors que l’e-mail l’accepte ?",
      a: "Les portails fixent des plafonds bien plus stricts — souvent 2 à 5 Mo contre environ 25 Mo pour l’e-mail — et les appliquent rigoureusement. Un fichier qui passe très bien par e-mail peut facilement être trop lourd pour un portail.",
    },
    {
      q: "Comment atteindre une taille cible précise ?",
      a: "Compressez et lisez la taille obtenue, en augmentant le niveau jusqu’à passer sous le plafond. L’outil affiche les chiffres avant et après pour viser précisément.",
    },
    {
      q: "Et si même la compression Forte ne suffit pas ?",
      a: "Retirez les pages inutiles avec l’outil Extraire des pages PDF, ou déposez les sections requises séparément si le portail le permet. Cela réduit la taille sans dégrader davantage les pages restantes.",
    },
    {
      q: "Mon document est-il envoyé sur vos serveurs quand je le compresse ?",
      a: "Non. L’outil Compresser un PDF fonctionne dans votre navigateur, sur votre appareil — ce qui compte puisque les documents de portail sont en général personnels ou officiels.",
    },
    {
      q: "Une compression forte peut-elle faire rejeter le fichier par le portail pour cause d’illisibilité ?",
      a: "Oui, c’est possible. Les portails ont besoin d’un fichier assez petit pour se déposer et assez net pour se lire. Vérifiez la lisibilité après compression, et gardez votre original pour toute demande de suivi.",
    },
  ],
  related: [
    { label: "Compresser un PDF — atteindre le plafond du portail", path: "/compress-pdf" },
    { label: "Extraire des pages PDF — retirer des pages pour réduire la taille", path: "/extract-pdf-pages" },
    { label: "Quel niveau de compression PDF choisir", path: "/guides/best-pdf-compression-settings" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
