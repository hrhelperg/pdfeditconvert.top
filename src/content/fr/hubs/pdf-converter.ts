import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Convertisseur PDF",
    h1: "Convertisseur PDF — convertir un PDF en Word, JPG, PNG et inversement",
    highlight: "et inversement",
    lead: "PDF vers Word pour modifier. PDF vers JPG pour les applications de messagerie. Word et images reconvertis en PDF pour archiver. Une seule application, des résultats rapides, aucun envoi vers un serveur inconnu.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "La confusion des conversions dans laquelle presque tout le monde tombe",
    paragraphs: [
      "Le PDF est parfait jusqu’à ce que quelqu’un vous demande le fichier en Word. Ou jusqu’à ce qu’une application de messagerie n’accepte que le JPG. Ou jusqu’à ce qu’il faille réunir des reçus (qui sont des images) et un devis (qui est un PDF) en un seul document prêt à envoyer.",
      "Les sites publics de conversion de PDF font le travail — et créent de nouveaux problèmes. Ils envoient votre fichier sur leurs serveurs, le conservent parfois pendant des heures, réservent souvent les conversions au-delà d’une certaine taille à une offre payante, et produisent rarement un DOCX propre. La mise en page se décale, les polices sont remplacées, les tableaux se cassent.",
      "Un convertisseur natif fait le travail directement sur votre appareil. Le même moteur qui met en page le PDF le reconstruit dans le format visé. Les tableaux restent alignés, les polices sont substituées intelligemment, et vous ne confiez jamais un contrat sensible à un site gratuit qui se finance par la publicité.",
    ],
  },
  features: {
    heading: "Convertissez dans les deux sens",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Des documents Word modifiables qui conservent la mise en page, les polices, les tableaux et les images.",
      },
      {
        icon: "Image",
        title: "PDF → JPG et PNG",
        body: "Exportez une seule page ou toutes les pages sous forme d’images séparées, prêtes pour la messagerie ou une présentation.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Extrayez les tableaux dans de vraies cellules XLSX plutôt que de coller des captures d’écran.",
      },
      {
        icon: "FilePlus",
        title: "Word et images → PDF",
        body: "Transformez un DOCX, la photo d’un reçu ou une capture d’écran en un PDF propre en quelques secondes.",
      },
      {
        icon: "ScanText",
        title: "OCR pour les PDF numérisés",
        body: "Lancez la reconnaissance de texte sur des documents numérisés pour obtenir un résultat consultable par recherche et sélectionnable.",
      },
      {
        icon: "Layers",
        title: "Conversion par lot",
        body: "Mettez plusieurs fichiers en file d’attente. L’application les traite localement, en arrière-plan.",
      },
    ],
  },
  steps: {
    heading: "Comment convertir un PDF depuis votre téléphone",
    items: [
      {
        title: "Ouvrez l’application PDF Editor",
        body: "Touchez la tuile Convertir sur l’écran d’accueil.",
      },
      {
        title: "Choisissez le fichier source",
        body: "Sélectionnez un PDF, un DOCX, une image ou tout autre document pris en charge par l’application.",
      },
      {
        title: "Choisissez le format de sortie",
        body: "Word, Excel, JPG, PNG, PowerPoint — selon ce dont le destinataire a besoin.",
      },
      {
        title: "Touchez Convertir",
        body: "La conversion se fait sur l’appareil. La plupart des fichiers sont prêts en quelques secondes.",
      },
      {
        title: "Enregistrez ou partagez",
        body: "Enregistrez dans Fichiers, synchronisez avec Drive ou iCloud, ou partagez directement par Mail ou par messagerie.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Convertir en déplacement",
    body: "La conversion telle qu’elle se produit vraiment, ce n’est pas « transformer ce rapport annuel en document Word ». C’est plutôt « transformer la photo de ce reçu d’hôtel en PDF à joindre à ma note de frais » ou « extraire ces trois tableaux d’un devis pour les coller dans un tableur ». Les deux se font depuis un téléphone, entre deux tâches, et doivent être faites tout de suite.",
  },
  faq: [
    {
      q: "Quels formats sont pris en charge ?",
      a: "Dans les deux sens : Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG et texte brut. Word, les images et quelques formats courants peuvent être transformés en PDF.",
    },
    {
      q: "Quelle est la précision de la conversion PDF vers Word ?",
      a: "Très bonne pour les PDF contenant du texte — tableaux, listes et titres se retrouvent fidèlement. Les mises en page complexes à plusieurs colonnes peuvent nécessiter un léger réajustement. Les PDF numérisés ont d’abord besoin d’un OCR.",
    },
    {
      q: "La conversion se fait-elle hors connexion ?",
      a: "Les conversions standard s’exécutent localement. Certaines fonctionnalités avancées (OCR haute qualité pour certaines langues) peuvent utiliser le cloud — l’application vous prévient avant tout envoi.",
    },
    {
      q: "Mes polices survivront-elles à la conversion ?",
      a: "L’application associe les polices intelligemment. Si une police n’est pas installée sur l’appareil de destination, la plus proche est utilisée pour que le document reste lisible correctement.",
    },
    {
      q: "Puis-je convertir des PDF protégés ?",
      a: "Si le PDF est protégé par mot de passe, vous devrez le saisir avant la conversion. Les PDF avec des restrictions de modification se convertissent généralement si le mot de passe d’ouverture est connu.",
    },
  ],
  related: [
    { label: "PDF ou DOCX — quel format choisir", path: "/guides/pdf-vs-docx" },
    { label: "Comparatif PDF et JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Modifier un PDF après conversion", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Convertissez vos PDF sans les envoyer sur un serveur.",
    sub: "Gratuit sur iOS et Android. Les conversions se font sur l’appareil.",
  },
};

export default content;
