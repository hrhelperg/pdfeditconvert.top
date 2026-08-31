import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { ES_GUIDE_ROUTES } from "@/content/es/routes.guides";

/**
 * Spanish route manifest — the localization manifest for es.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Spanish URL after the `/es` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/es-terminology.md):
 *
 * - ASCII-normalized, no diacritics: "como-comprimir-un-pdf", not
 *   "cómo-comprimir-un-pdf". Prose keeps every accent; slugs do not.
 * - The verb Spanish users actually search, not a literal rendering of the
 *   English slug: "comprimir-pdf", "fusionar-pdf", "girar-pdf",
 *   "pdf-a-word".
 * - "a" rather than "vers"/"to" for conversions: Spanish queries are
 *   overwhelmingly "PDF a Word", matching the tool-label convention.
 * - Articles dropped in tool slugs ("comprimir-pdf"), kept in guide slugs
 *   phrased as real questions ("como-comprimir-un-pdf").
 * - Translated section prefixes: guias/, comparativas/, casos-de-uso/.
 */
export const ES_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — edita, convierte, firma y escanea tus PDF",
    description:
      "La solución PDF completa para el trabajo, los estudios y el día a día. Edita, convierte, comprime, une, firma y escanea tus PDF desde el móvil con PDF Editor para iOS y Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "editor-de-pdf",
    title: "Editor de PDF — edita texto, imágenes y páginas en el móvil",
    description:
      "Edita tus PDF en el iPhone o en Android: corrige texto, añade imágenes, reordena páginas y firma documentos. Descubre cómo la app PDF Editor hace fácil editar desde el móvil.",
  },
  {
    id: "pdf-converter",
    slug: "convertidor-de-pdf",
    title: "Convertidor de PDF — convierte un PDF a Word, JPG, PNG y viceversa",
    description:
      "Convierte tus PDF a Word, Excel, JPG, PNG y de vuelta. La forma más limpia de hacerlo desde el móvil, con la app PDF Editor en iOS y Android.",
  },
  {
    id: "sign-pdf",
    slug: "firmar-pdf",
    title: "Firmar un PDF — añade una firma electrónica desde el móvil",
    description:
      "Firma tus PDF desde el móvil con una firma manuscrita de verdad o con tu nombre escrito. Aceptada en la mayoría de gestiones. Prueba la app PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "escanear-a-pdf",
    title: "Escanear a PDF — convierte papel en un PDF nítido",
    description:
      "Usa la cámara del móvil para escanear documentos, DNI y recibos en PDF nítidos y con texto buscable. PDF Editor detecta los bordes automáticamente.",
  },
  {
    id: "pdf-security",
    slug: "seguridad-de-pdf",
    title: "Seguridad de PDF — protege y cifra un documento con contraseña",
    description:
      "Protege tus PDF sensibles con contraseña y cifrado. Guía práctica para proteger tus documentos en iPhone y Android.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-para-empresas",
    title: "PDF para empresas — contratos, facturas y flujos de trabajo",
    description:
      "Cómo los equipos pequeños usan el PDF para contratos, facturas y aprobaciones. Métodos modernos, pensados para el móvil, con la app PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-para-estudiantes",
    title: "PDF para estudiantes — apuntes, subrayados y resúmenes",
    description:
      "Usa el PDF para tus apuntes de clase, subrayados y resúmenes de estudio. Métodos eficaces desde el móvil con PDF Editor en iOS y Android.",
  },
  {
    id: "pdf-forms",
    slug: "formularios-pdf",
    title: "Formularios PDF — rellena, firma y gestiona un PDF rellenable",
    description:
      "Entiende cómo funcionan los formularios PDF y cómo rellenarlos, firmarlos, crearlos y arreglarlos. El punto de partida para formularios interactivos y no interactivos, en el ordenador y en el móvil.",
  },

  // Guides index
  {
    id: "guides",
    slug: "guias",
    title: "Guías de PDF — tutoriales y trucos paso a paso",
    description:
      "Tutoriales de PDF prácticos, pensados para el móvil: edita, convierte, comprime, une, firma y protege tus documentos en iPhone y Android.",
  },

  // Tools
  {
    id: "pdf-tools",
    slug: "herramientas-pdf",
    title: "Herramientas PDF gratis — en el navegador, sin subir nada",
    description:
      "Herramientas PDF gratuitas que funcionan enteramente en tu navegador. Une, divide, gira, marca con agua y convierte imágenes a PDF y PDF a imágenes — tus archivos nunca salen de tu dispositivo.",
  },
  {
    id: "compress-pdf",
    slug: "comprimir-pdf",
    title: "Comprimir un PDF — reduce el tamaño de un archivo en el navegador",
    description:
      "Reduce el tamaño de un PDF directamente en tu navegador, con varios niveles de compresión. Gratis, sin registro y sin subir nada: el archivo no sale de tu dispositivo.",
  },
  {
    id: "merge-pdf",
    slug: "unir-pdf",
    title: "Unir PDF — combina varios archivos en el navegador",
    description:
      "Combina varios PDF en un solo archivo directamente en tu navegador. Gratis, sin registro y sin subir nada: tus archivos no salen de tu dispositivo.",
  },
  {
    id: "split-pdf",
    slug: "dividir-pdf",
    title: "Dividir un PDF — extrae un rango de páginas en el navegador",
    description:
      "Divide un PDF por rango de páginas directamente en tu navegador. Gratis, sin registro y sin subir nada: tus archivos se quedan en tu dispositivo.",
  },
  {
    id: "rotate-pdf",
    slug: "girar-pdf",
    title: "Girar un PDF — corrige la orientación de las páginas",
    description:
      "Gira todas las páginas de un PDF o solo algunas, 90°, 180° o 270°, directamente en tu navegador. Gratis y privado: nada se envía a ningún sitio.",
  },
  {
    id: "image-to-pdf",
    slug: "imagen-a-pdf",
    title: "Imagen a PDF — convierte JPG, PNG y WebP en el navegador",
    description:
      "Reúne imágenes JPG, PNG y WebP en un solo PDF directamente en tu navegador. Gratis, sin subir nada ni registrarte: los archivos se quedan en tu dispositivo.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-a-imagenes",
    title: "PDF a imágenes — exporta las páginas de un PDF en PNG o JPG",
    description:
      "Convierte cualquier PDF en imágenes PNG o JPG, página a página, en tu navegador. Gratis, sin subir nada ni cuenta: todo pasa en tu dispositivo.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-a-word",
    title: "PDF a Word — convierte un PDF en un DOCX editable",
    description:
      "Recupera el texto de un PDF en un documento Word (.docx) editable, directamente en tu navegador. Gratis y sin subir nada: una conversión de texto honesta, sin promesas falsas de maquetación perfecta.",
  },
  {
    id: "word-to-pdf",
    slug: "word-a-pdf",
    title: "Word a PDF — convierte un DOCX o un TXT en el navegador",
    description:
      "Convierte un archivo Word .docx o un .txt en un PDF limpio directamente en tu navegador. Gratis, sin registro y sin subir nada: tu documento no sale de tu dispositivo.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "marca-de-agua-pdf",
    title: "Añadir marca de agua a un PDF — gratis, privado, en el navegador",
    description:
      "Añade una marca de agua de texto en todas las páginas de un PDF directamente en tu navegador. Gratis, sin subir nada ni registrarte: los archivos se quedan en tu dispositivo.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "reordenar-paginas-pdf",
    title: "Reordenar páginas de un PDF — cambia el orden en el navegador",
    description:
      "Previsualiza cada página y cambia el orden de un PDF con controles sencillos, luego descarga el archivo reordenado. Gratis, sin registro y sin subir nada.",
  },
  {
    id: "extract-pdf-pages",
    slug: "extraer-paginas-pdf",
    title: "Extraer páginas de un PDF — guarda una selección en un archivo nuevo",
    description:
      "Elige páginas o rangos concretos y descarga un PDF nuevo solo con esas páginas, directamente en tu navegador. Gratis, sin registro y sin subir nada.",
  },

  // Comparisons
  {
    id: "compare/pdf-vs-docx",
    slug: "comparativas/pdf-o-docx",
    title: "PDF o DOCX — la comparativa punto por punto",
    description:
      "PDF y DOCX comparados en edición, fidelidad de maquetación, firma, seguridad y para compartir. Elige el formato adecuado para cada tarea.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "comparativas/pdf-o-jpg",
    title: "PDF o JPG — cuándo usar cada formato",
    description:
      "PDF o JPG: cuándo escanear, cuándo fotografiar. Calidad, tamaño de archivo, OCR y encaje en el flujo de trabajo, comparados.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "comparativas/app-de-pdf-o-herramientas-online",
    title: "App de PDF o herramientas PDF online — ¿cuál elegir?",
    description:
      "App de PDF nativa o herramientas en el navegador: velocidad, privacidad y acceso sin conexión comparados.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "casos-de-uso/autonomos",
    title: "PDF Editor para autónomos — presupuestos y documentos firmados",
    description:
      "Los métodos que adoran los autónomos: propuestas, contratos firmados y facturas, todo desde el móvil.",
  },
  {
    id: "use-cases/remote-work",
    slug: "casos-de-uso/trabajo-remoto",
    title: "PDF Editor para el trabajo remoto — tus documentos en cualquier sitio",
    description:
      "Trabaja con tus documentos estés donde estés: escanea, firma y comparte un PDF desde cualquier dispositivo.",
  },

  // Legal and meta
  {
    id: "privacy-policy",
    slug: "politica-de-privacidad",
    title: "Política de privacidad",
    description:
      "Cómo pdfeditconvert.top y hrhelperg s.r.o. tratan tus datos.",
  },
  {
    id: "terms",
    slug: "terminos-de-uso",
    title: "Términos de uso",
    description: "Las condiciones que rigen el uso de pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "contacto",
    title: "Contacto — PDF Editor por hrhelperg s.r.o.",
    description:
      "Escribe al equipo detrás de PDF Editor. Correo: info@hrhelperg.com.",
  },

  ...ES_GUIDE_ROUTES,
];
