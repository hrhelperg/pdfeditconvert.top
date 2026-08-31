import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { FR_GUIDE_ROUTES } from "@/content/fr/routes.guides";

/**
 * French route manifest — the localization manifest for fr.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent French URL after the `/fr` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/fr-terminology.md):
 *
 * - ASCII-normalized, no diacritics: "reorganiser-pages-pdf", not
 *   "réorganiser". Prose keeps every accent; slugs do not, so URLs stay
 *   copy-pasteable and never percent-encode in analytics or referrers.
 * - The verb French users actually search, not a literal rendering of the
 *   English slug. "compresser-pdf" (compresser PDF far outranks comprimer
 *   PDF), "fusionner-pdf", "faire-pivoter-pdf", "pdf-vers-word".
 * - "vers" rather than "en" or "à" for conversions: French queries are
 *   overwhelmingly "PDF vers Word", matching the tool-label convention.
 * - Articles dropped in tool slugs ("compresser-pdf"), kept in guide slugs
 *   phrased as real questions ("comment-compresser-un-pdf").
 * - Translated section prefixes: guides/, comparatifs/, cas-usage/.
 */
export const FR_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — modifier, convertir, signer et numériser vos PDF",
    description:
      "La solution PDF complète pour le travail, les études et le quotidien. Modifiez, convertissez, compressez, fusionnez, signez et numérisez vos PDF depuis votre téléphone avec PDF Editor sur iOS et Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "editeur-pdf",
    title: "Éditeur PDF — modifier le texte, les images et les pages sur mobile",
    description:
      "Modifiez vos PDF sur iPhone ou Android : corriger le texte, ajouter des images, réorganiser les pages et signer un document. Découvrez comment l'application PDF Editor rend la retouche mobile simple.",
  },
  {
    id: "pdf-converter",
    slug: "convertisseur-pdf",
    title: "Convertisseur PDF — convertir un PDF en Word, JPG, PNG et inversement",
    description:
      "Convertissez vos PDF en Word, Excel, JPG, PNG et dans l'autre sens. La méthode la plus propre depuis un mobile, avec l'application PDF Editor sur iOS et Android.",
  },
  {
    id: "sign-pdf",
    slug: "signer-pdf",
    title: "Signer un PDF — ajouter une signature électronique depuis son téléphone",
    description:
      "Signez vos PDF depuis votre téléphone avec une vraie signature manuscrite ou un nom saisi. Accepté dans la plupart des échanges professionnels. Essayez l'application PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "numeriser-en-pdf",
    title: "Numériser en PDF — transformer un document papier en PDF net",
    description:
      "Utilisez l'appareil photo de votre téléphone pour numériser documents, pièces d'identité et reçus en PDF nets et consultables. PDF Editor détecte les bords automatiquement.",
  },
  {
    id: "pdf-security",
    slug: "securite-pdf",
    title: "Sécurité des PDF — protéger et chiffrer un document par mot de passe",
    description:
      "Protégez vos PDF sensibles par mot de passe et chiffrement. Guide pratique pour sécuriser vos documents sur iPhone et Android.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-pour-entreprise",
    title: "PDF en entreprise — contrats, factures et circuits de validation",
    description:
      "Comment les petites équipes utilisent le PDF pour leurs contrats, factures et validations. Des méthodes modernes, pensées mobile, avec l'application PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-pour-etudiants",
    title: "PDF pour les étudiants — notes de cours, surlignage et fiches de révision",
    description:
      "Utilisez le PDF pour vos notes de cours, votre surlignage et vos fiches de révision. Des méthodes efficaces sur mobile avec PDF Editor sur iOS et Android.",
  },
  {
    id: "pdf-forms",
    slug: "formulaires-pdf",
    title: "Formulaires PDF — remplir, signer et gérer un PDF à compléter",
    description:
      "Comprenez comment fonctionnent les formulaires PDF, et comment les remplir, les signer, en créer et les réparer. Le point de départ pour les formulaires interactifs et non interactifs, sur ordinateur comme sur mobile.",
  },

  // Guides index
  {
    id: "guides",
    slug: "guides",
    title: "Guides PDF — tutoriels et modes d'emploi",
    description:
      "Des tutoriels PDF concrets, pensés pour le mobile : modifier, convertir, compresser, fusionner, signer et protéger vos documents sur iPhone et Android.",
  },

  // Tools
  {
    id: "pdf-tools",
    slug: "outils-pdf",
    title: "Outils PDF gratuits — dans le navigateur, sans rien envoyer",
    description:
      "Des outils PDF gratuits qui fonctionnent entièrement dans votre navigateur. Fusionner, diviser, faire pivoter, ajouter un filigrane, convertir des images en PDF et l'inverse — vos fichiers ne quittent jamais votre appareil.",
  },
  {
    id: "compress-pdf",
    slug: "compresser-pdf",
    title: "Compresser un PDF — réduire la taille d'un fichier dans le navigateur",
    description:
      "Réduisez la taille d'un PDF directement dans votre navigateur, avec plusieurs niveaux de compression. Gratuit, sans inscription et sans envoi : le fichier ne quitte pas votre appareil.",
  },
  {
    id: "merge-pdf",
    slug: "fusionner-pdf",
    title: "Fusionner des PDF — assembler plusieurs fichiers dans le navigateur",
    description:
      "Assemblez plusieurs PDF en un seul fichier directement dans votre navigateur. Gratuit, sans inscription et sans envoi : vos fichiers ne quittent pas votre appareil.",
  },
  {
    id: "split-pdf",
    slug: "diviser-pdf",
    title: "Diviser un PDF — extraire une plage de pages dans le navigateur",
    description:
      "Découpez un PDF par plage de pages directement dans votre navigateur. Gratuit, sans inscription et sans envoi : vos fichiers restent sur votre appareil.",
  },
  {
    id: "rotate-pdf",
    slug: "faire-pivoter-pdf",
    title: "Faire pivoter un PDF — corriger l'orientation des pages",
    description:
      "Faites pivoter toutes les pages d'un PDF ou seulement certaines, de 90°, 180° ou 270°, directement dans votre navigateur. Gratuit et confidentiel : rien n'est envoyé.",
  },
  {
    id: "image-to-pdf",
    slug: "images-vers-pdf",
    title: "Images en PDF — convertir JPG, PNG et WebP dans le navigateur",
    description:
      "Réunissez des images JPG, PNG et WebP en un seul PDF directement dans votre navigateur. Gratuit, sans envoi ni inscription : les fichiers restent sur votre appareil.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-vers-images",
    title: "PDF en images — exporter les pages d'un PDF en PNG ou JPG",
    description:
      "Transformez n'importe quel PDF en images PNG ou JPG, page par page, dans votre navigateur. Gratuit, sans envoi ni compte : tout se passe sur votre appareil.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-vers-word",
    title: "PDF en Word — convertir un PDF en DOCX modifiable",
    description:
      "Récupérez le texte d'un PDF dans un document Word (.docx) modifiable, directement dans votre navigateur. Gratuit et sans envoi : une conversion de texte honnête, sans promesse de mise en page parfaite.",
  },
  {
    id: "word-to-pdf",
    slug: "word-vers-pdf",
    title: "Word en PDF — convertir un DOCX ou un TXT dans le navigateur",
    description:
      "Transformez un fichier Word .docx ou un .txt en PDF net directement dans votre navigateur. Gratuit, sans inscription et sans envoi : votre document ne quitte pas votre appareil.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "ajouter-filigrane-pdf",
    title: "Ajouter un filigrane à un PDF — gratuit, confidentiel, dans le navigateur",
    description:
      "Ajoutez un filigrane texte sur chaque page d'un PDF directement dans votre navigateur. Gratuit, sans envoi ni inscription : les fichiers restent sur votre appareil.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "reorganiser-pages-pdf",
    title: "Réorganiser les pages d'un PDF — changer l'ordre dans le navigateur",
    description:
      "Prévisualisez chaque page et changez l'ordre d'un PDF avec des commandes simples, puis téléchargez le fichier réorganisé. Gratuit, sans inscription et sans envoi.",
  },
  {
    id: "extract-pdf-pages",
    slug: "extraire-pages-pdf",
    title: "Extraire des pages d'un PDF — enregistrer une sélection en nouveau fichier",
    description:
      "Choisissez des pages ou des plages précises et téléchargez un PDF ne contenant que celles-là, directement dans votre navigateur. Gratuit, sans inscription et sans envoi.",
  },

  // Comparisons
  {
    id: "compare/pdf-vs-docx",
    slug: "comparatifs/pdf-ou-docx",
    title: "PDF ou DOCX — le comparatif point par point",
    description:
      "PDF et DOCX comparés sur la modification, la fidélité de mise en page, la signature, la sécurité et le partage. Choisissez le bon format selon l'usage.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "comparatifs/pdf-ou-jpg",
    title: "PDF ou JPG — quand utiliser chaque format",
    description:
      "PDF ou JPG : quand numériser, quand photographier. Qualité, taille de fichier, OCR et adéquation aux documents, comparés.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "comparatifs/application-pdf-ou-outils-en-ligne",
    title: "Application PDF ou outils PDF en ligne — que choisir ?",
    description:
      "Application PDF native ou outils dans le navigateur : rapidité, confidentialité et usage hors connexion comparés.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "cas-usage/freelances",
    title: "PDF Editor pour les freelances — devis et documents signés",
    description:
      "Les méthodes que les freelances adoptent : propositions, contrats signés et factures, entièrement depuis un téléphone.",
  },
  {
    id: "use-cases/remote-work",
    slug: "cas-usage/teletravail",
    title: "PDF Editor en télétravail — vos documents partout",
    description:
      "Travaillez vos documents où que vous soyez : numériser, signer et partager un PDF depuis n'importe quel appareil.",
  },

  // Legal and meta
  {
    id: "privacy-policy",
    slug: "politique-de-confidentialite",
    title: "Politique de confidentialité",
    description:
      "Comment pdfeditconvert.top et hrhelperg s.r.o. traitent vos données.",
  },
  {
    id: "terms",
    slug: "conditions-utilisation",
    title: "Conditions d'utilisation",
    description: "Les conditions qui encadrent votre utilisation de pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "contact",
    title: "Contact — PDF Editor par hrhelperg s.r.o.",
    description:
      "Écrivez à l'équipe derrière PDF Editor. E-mail : info@hrhelperg.com.",
  },

  ...FR_GUIDE_ROUTES,
];
