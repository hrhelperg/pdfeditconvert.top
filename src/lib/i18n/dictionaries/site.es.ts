import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Spanish site chrome (Peninsular Spanish, es-ES).
 *
 * Navigation labels are the verb/noun a Spanish reader would search for
 * ("Comprimir", "Unir"), not a literal rendering of the English list. The
 * footer links point at the Spanish route ids, so the whole footer graph
 * stays inside es. Terminology policy: docs/localization/es-terminology.md.
 */
export const SITE_ES: SiteDictionary = {
  skipToContent: "Ir al contenido",

  header: {
    homeAriaLabel: "Inicio de PDF Editor",
    nav: [
      { id: "pdf-editor", label: "Editor de PDF" },
      { id: "pdf-converter", label: "Convertir" },
      { id: "compress-pdf", label: "Comprimir" },
      { id: "merge-pdf", label: "Unir" },
      { id: "sign-pdf", label: "Firmar" },
      { id: "guides", label: "Guías" },
    ],
    ctaLabel: "Descargar la app",
    ctaAriaLabel: "Descargar PDF Editor en la App Store",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
  },

  switcher: {
    label: "Idioma",
    ariaLabel: "Cambiar de idioma",
    currentLabel: "Idioma actual",
  },

  footer: {
    tagline:
      "La solución PDF completa para el trabajo, los estudios y el día a día. Edita, convierte, firma y escanea tus PDF desde el móvil.",
    appEyebrow: "App PDF Editor",
    appHeading: "Llévate PDF Editor contigo.",
    appSub: "Gratis en iPhone y Android. Sin crear una cuenta.",
    columnProduct: "Producto",
    columnLearn: "Aprender",
    columnCompany: "Empresa",
    columnTools: "Herramientas gratis",
    product: [
      { id: "pdf-editor", label: "Editor de PDF" },
      { id: "pdf-converter", label: "Convertidor de PDF" },
      { id: "compress-pdf", label: "Comprimir PDF" },
      { id: "sign-pdf", label: "Firmar PDF" },
      { id: "scan-to-pdf", label: "Escanear a PDF" },
    ],
    learn: [
      { id: "guides", label: "Todas las guías" },
      { id: "pdf-forms", label: "Formularios PDF" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "Rellenar un formulario PDF",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "Convertir un PDF a Word",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Reducir un PDF para el correo",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "Editar un PDF en iPhone",
      },
      { id: "guides/how-to-merge-pdf-files", label: "Unir archivos PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF o DOCX" },
    ],
    company: [
      { id: "contact", label: "Contacto" },
      { id: "privacy-policy", label: "Privacidad" },
      { id: "terms", label: "Términos" },
    ],
    tools: [
      { id: "pdf-tools", label: "Todas las herramientas gratis" },
      { id: "image-to-pdf", label: "Imagen a PDF" },
      { id: "merge-pdf", label: "Unir PDF" },
      { id: "split-pdf", label: "Dividir PDF" },
      { id: "rotate-pdf", label: "Girar PDF" },
      { id: "pdf-to-images", label: "PDF a imágenes" },
      { id: "add-watermark-to-pdf", label: "Marca de agua" },
    ],
    sitemapLabel: "Mapa del sitio",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Todos los derechos reservados.",
  },

  store: {
    appStoreAria: "Descargar PDF Editor en la App Store",
    googlePlayAria: "Descargar PDF Editor en Google Play",
    availability: "Disponible en iOS y Android · Prueba gratis",
  },

  breadcrumbs: {
    home: "Inicio",
    guides: "Guías",
    compare: "Comparativas",
    useCases: "Casos de uso",
    tools: "Herramientas",
    ariaLabel: "Ruta de navegación",
  },

  sections: {
    faqHeading: "Preguntas frecuentes",
    relatedGuides: "Guías relacionadas",
    readTheGuide: "Leer la guía →",
    seeAllGuides: "Ver todas las guías",
    browseEveryGuide: "Ver todas las guías de PDF",
    allFreeTools: "Todas las herramientas PDF gratis en el navegador",
    relatedTools: "Herramientas PDF relacionadas",
    stepByStep: "Paso a paso",
    tips: "Consejos",
    lastUpdated: "Actualizado el",
    whenToPick: "Cuándo elegir {label}",
    workflowsHeading: "Métodos que merecen la pena",
    tryOnPhone: "Pruébalo desde el móvil",
    takeWithYou: "Llévate PDF Editor contigo.",
    freeOnBoth: "Gratis en iOS y Android.",
    appEyebrow: "App PDF Editor",
    editOnPhoneHeading: "Edita tus PDF desde el móvil.",
    trust: [
      "Los archivos se procesan en local, en tu navegador",
      "Sin subir nada, sin cuenta y sin marca de agua",
      "Gratis: funciona en el móvil y en el ordenador",
    ],
    clusterHeading: {
      one: "La única guía de este grupo",
      other: "Las {count} guías de este grupo",
    },
    toolGuidesHeading: {
      one: "Guía sobre {label}",
      other: "Guías sobre {label}",
    },
    goToHub: "Ir a {label} →",
    guideTopicsNav: "Temas de las guías",
  },
};
