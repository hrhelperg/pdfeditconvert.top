import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * French site chrome.
 *
 * Navigation labels are the noun/verb a French reader would search for
 * ("Compresser", "Fusionner"), not a literal rendering of the English list.
 * The footer links point at the French route ids, so the whole footer
 * graph stays inside fr. Terminology policy: docs/localization/fr-terminology.md.
 */
export const SITE_FR: SiteDictionary = {
  skipToContent: "Aller au contenu",

  header: {
    homeAriaLabel: "Accueil de PDF Editor",
    nav: [
      { id: "pdf-editor", label: "Éditeur PDF" },
      { id: "pdf-converter", label: "Convertir" },
      { id: "compress-pdf", label: "Compresser" },
      { id: "merge-pdf", label: "Fusionner" },
      { id: "sign-pdf", label: "Signer" },
      { id: "guides", label: "Guides" },
    ],
    ctaLabel: "Télécharger l’app",
    ctaAriaLabel: "Télécharger PDF Editor sur l’App Store",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  switcher: {
    label: "Langue",
    ariaLabel: "Changer de langue",
    currentLabel: "Langue actuelle",
  },

  footer: {
    tagline:
      "La solution PDF complète pour le travail, les études et le quotidien. Modifiez, convertissez, signez et numérisez vos PDF depuis votre téléphone.",
    appEyebrow: "App PDF Editor",
    appHeading: "Emportez PDF Editor avec vous.",
    appSub: "Gratuit sur iPhone et Android. Sans créer de compte.",
    columnProduct: "Produit",
    columnLearn: "Apprendre",
    columnCompany: "Entreprise",
    columnTools: "Outils gratuits",
    product: [
      { id: "pdf-editor", label: "Éditeur PDF" },
      { id: "pdf-converter", label: "Convertisseur PDF" },
      { id: "compress-pdf", label: "Compresser un PDF" },
      { id: "sign-pdf", label: "Signer un PDF" },
      { id: "scan-to-pdf", label: "Numériser en PDF" },
    ],
    learn: [
      { id: "guides", label: "Tous les guides" },
      { id: "pdf-forms", label: "Formulaires PDF" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "Remplir un formulaire PDF",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "Convertir un PDF en Word",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Réduire un PDF pour l’e-mail",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "Modifier un PDF sur iPhone",
      },
      { id: "guides/how-to-merge-pdf-files", label: "Fusionner des PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF ou DOCX" },
    ],
    company: [
      { id: "contact", label: "Contact" },
      { id: "privacy-policy", label: "Confidentialité" },
      { id: "terms", label: "Conditions" },
    ],
    tools: [
      { id: "pdf-tools", label: "Tous les outils gratuits" },
      { id: "image-to-pdf", label: "Image en PDF" },
      { id: "merge-pdf", label: "Fusionner un PDF" },
      { id: "split-pdf", label: "Diviser un PDF" },
      { id: "rotate-pdf", label: "Faire pivoter un PDF" },
      { id: "pdf-to-images", label: "PDF en images" },
      { id: "add-watermark-to-pdf", label: "Filigrane" },
    ],
    sitemapLabel: "Plan du site",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Tous droits réservés.",
  },

  store: {
    appStoreAria: "Télécharger PDF Editor sur l’App Store",
    googlePlayAria: "Télécharger PDF Editor sur Google Play",
    availability: "Disponible sur iOS et Android · Essai gratuit",
  },

  breadcrumbs: {
    home: "Accueil",
    guides: "Guides",
    compare: "Comparatifs",
    useCases: "Cas d’usage",
    tools: "Outils",
    ariaLabel: "Fil d’Ariane",
  },

  sections: {
    faqHeading: "Questions fréquentes",
    relatedGuides: "Guides associés",
    readTheGuide: "Lire le guide →",
    seeAllGuides: "Voir tous les guides",
    browseEveryGuide: "Parcourir tous les guides PDF",
    allFreeTools: "Tous les outils PDF gratuits, dans le navigateur",
    relatedTools: "Outils PDF associés",
    stepByStep: "Étapes",
    tips: "Astuces",
    lastUpdated: "Mis à jour le",
    whenToPick: "Quand choisir {label}",
    workflowsHeading: "Des méthodes qui valent le détour",
    tryOnPhone: "Essayez depuis votre téléphone",
    takeWithYou: "Emportez PDF Editor avec vous.",
    freeOnBoth: "Gratuit sur iOS et Android.",
    appEyebrow: "App PDF Editor",
    editOnPhoneHeading: "Modifiez vos PDF depuis votre téléphone.",
    trust: [
      "Les fichiers sont traités localement, dans votre navigateur",
      "Aucun envoi sur un serveur, aucun compte, aucun filigrane",
      "Gratuit — sur téléphone comme sur ordinateur",
    ],
    clusterHeading: {
      one: "L’unique guide de ce groupe",
      other: "Les {count} guides de ce groupe",
    },
    toolGuidesHeading: {
      one: "Guide sur {label}",
      other: "Guides sur {label}",
    },
    goToHub: "Aller à {label} →",
    guideTopicsNav: "Thèmes des guides",
  },
};
