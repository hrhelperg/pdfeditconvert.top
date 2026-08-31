import type { HomeContent } from "@/types/content";

/**
 * Spanish homepage copy. Terminology policy: docs/localization/es-terminology.md.
 */
export const HOME_ES: HomeContent = {
  heroEyebrow: "Herramientas PDF gratis en el navegador",
  heroH1Before: "Convierte, une y edita tus PDF ",
  heroH1Highlight: "en segundos",
  heroH1After: "",
  heroLead:
    "Herramientas PDF gratuitas que funcionan en tu navegador, con procesamiento local y privado — nada se envía nunca a un servidor.",
  trust: [
    "Los archivos se procesan en local, en tu navegador",
    "Sin subir nada, sin cuenta y sin marca de agua",
    "Gratis: funciona en el móvil y en el ordenador",
  ],
  browseAllToolsLabel: "Ver todas las herramientas PDF →",
  toolsEyebrow: "Gratis, en tu navegador",
  toolsHeading: "Todas las herramientas PDF que necesitas — sin subir nada.",
  toolsLead:
    "Une, divide, gira, marca y convierte tus PDF sin salir de la página. Cada herramienta funciona en local, en tu navegador.",
  toolBadge: "Herramienta gratis",
  tools: [
    { id: "image-to-pdf", label: "Imagen a PDF", desc: "Reúne JPG, PNG y WebP en un solo PDF." },
    { id: "merge-pdf", label: "Unir PDF", desc: "Combina varios PDF en un solo documento." },
    { id: "split-pdf", label: "Dividir PDF", desc: "Separa páginas por rango." },
    { id: "rotate-pdf", label: "Girar PDF", desc: "Endereza páginas tumbadas." },
    { id: "pdf-to-images", label: "PDF a imágenes", desc: "Exporta páginas en PNG o JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Marca de agua",
      desc: "Sella un texto en todas las páginas.",
    },
    {
      id: "compress-pdf",
      label: "Comprimir PDF",
      desc: "Reduce el tamaño para el correo y el envío.",
    },
    { id: "pdf-to-word", label: "PDF a Word", desc: "Extrae el texto a un .docx editable." },
    { id: "word-to-pdf", label: "Word a PDF", desc: "Convierte un .docx o .txt en un PDF limpio." },
    {
      id: "reorder-pdf-pages",
      label: "Reordenar páginas",
      desc: "Previsualiza, reordena y descarga.",
    },
    {
      id: "extract-pdf-pages",
      label: "Extraer páginas",
      desc: "Guarda las páginas elegidas en un PDF nuevo.",
    },
  ],
  appBandEyebrow: "También en iPhone y Android · cinco herramientas del día a día",
  featureBand: [
    { key: "edit", label: "Editar", sub: "Texto, imágenes, páginas" },
    { key: "convert", label: "Convertir", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Proteger", sub: "Contraseña en el archivo" },
    { key: "scan", label: "Escanear", sub: "De papel a PDF" },
    { key: "organize", label: "Organizar", sub: "Reordenar, dividir" },
  ],
  hubsHeading: "Todo lo que se hace con un PDF — explicado.",
  hubsLead:
    "Guías prácticas y métodos concretos para lo que la gente hace de verdad con un PDF cada día.",
  hubs: [
    { id: "pdf-editor", label: "Editor de PDF", desc: "Edita texto, imágenes y páginas." },
    {
      id: "pdf-converter",
      label: "Convertidor de PDF",
      desc: "Convierte a Word, JPG, PNG y más.",
    },
    {
      id: "compress-pdf",
      label: "Comprimir PDF",
      desc: "Reduce el archivo sin perder calidad.",
    },
    { id: "sign-pdf", label: "Firmar PDF", desc: "Firma directamente desde el móvil." },
    { id: "scan-to-pdf", label: "Escanear a PDF", desc: "Convierte papel en PDF nítidos." },
    {
      id: "pdf-security",
      label: "Seguridad de PDF",
      desc: "Protege documentos con contraseña.",
    },
    {
      id: "pdf-for-business",
      label: "PDF para empresas",
      desc: "Contratos y facturas desde cualquier sitio.",
    },
    {
      id: "pdf-for-students",
      label: "PDF para estudiantes",
      desc: "Apuntes, subrayados y resúmenes.",
    },
    {
      id: "pdf-forms",
      label: "Formularios PDF",
      desc: "Rellena, firma y guarda tus PDF.",
    },
  ],
  guidesHeading: "Las guías más leídas",
  guideBadge: "Guía",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Cómo editar un PDF en iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Cómo editar un PDF en Android" },
    { id: "guides/how-to-compress-pdf", label: "Cómo comprimir un PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Cómo firmar un PDF desde el móvil" },
  ],
  browseAllGuidesLabel: "Ver las {count} guías de PDF →",
  finalCtaHeading: "Llévate PDF Editor contigo.",
  finalCtaSub: "Gratis en iOS y Android. No necesitas una cuenta para empezar.",
  faq: [
    {
      q: "¿PDF Editor es gratis?",
      a: "Sí. Las funciones principales de edición, escaneo, compresión y firma son gratuitas. Algunas funciones avanzadas están en PDF Editor Pro.",
    },
    {
      q: "¿Funciona sin conexión a internet?",
      a: "La edición, la organización de páginas, la firma y la compresión funcionan sin conexión. La sincronización con la nube y el OCR pueden necesitar conexión.",
    },
    {
      q: "¿Con qué dispositivos es compatible?",
      a: "PDF Editor está disponible para iPhone y iPad (iOS 16 o superior) y para móviles y tablets Android (Android 9 o superior).",
    },
    {
      q: "¿Mis archivos son privados?",
      a: "Sí. Tus archivos se quedan en tu dispositivo, salvo que elijas compartirlos. No enviamos tus documentos a nuestros servidores.",
    },
    {
      q: "¿Puedo usarlo para documentos legales?",
      a: "Mucha gente firma y envía contratos con PDF Editor. No damos asesoramiento legal — comprueba la normativa local sobre firma electrónica antes de confiar en ella para un documento crítico.",
    },
  ],
};
