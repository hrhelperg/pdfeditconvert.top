import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF o JPG — cuándo usar cada formato",
  description:
    "PDF o JPG: cuándo escanear, cuándo fotografiar. Calidad, tamaño de archivo, OCR y encaje en el flujo de trabajo, comparados.",
  intro: [
    "El JPG es un formato de foto. El PDF es un formato de documento. Pese a esta distinción tan simple, es habitual enviar JPG de contratos y PDF de una sola imagen: dos opciones que funcionan, pero que no son las ideales.",
    "Este uso incorrecto pasa porque el móvil guarda todo en JPG por defecto, desde una foto familiar hasta un recibo fotografiado, y el ordenador guarda en PDF por defecto cualquier cosa imprimible. Sin pensarlo, acabas con JPG de recibos en la galería y PDF llenos de imágenes amontonándose en Descargas.",
    "Esta comparativa te ayuda a elegir el formato adecuado para los documentos que envías de verdad: recibos, documentos de identidad, contratos, capturas de pantalla, fotos de producto, y los casos intermedios donde la respuesta correcta no es evidente.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Admite varias páginas", left: "sí", right: "no" },
    { feature: "Texto buscable (con OCR)", left: "sí", right: "no" },
    { feature: "Nítido a cualquier nivel de zoom", left: "sí", right: "no" },
    { feature: "Archivo ligero para fotos", left: "Limitado", right: "sí" },
    { feature: "Se puede ver en cualquier sitio", left: "sí", right: "sí" },
    { feature: "Protección con contraseña", left: "sí", right: "no" },
    { feature: "Se puede editar después", left: "sí", right: "Limitado" },
    { feature: "Lo mejor para recibos y contratos", left: "sí", right: "no" },
    { feature: "Lo mejor para fotos de producto", left: "no", right: "sí" },
  ],
  whenLeft: [
    "El contenido es un documento (recibo, contrato, DNI, formulario)",
    "El resultado puede necesitar varias páginas",
    "Quieres texto buscable (OCR)",
    "Quien lo recibe es un contable o un sistema de empresa",
    "Puede que necesites añadir una firma más adelante",
  ],
  whenRight: [
    "El contenido es una fotografía",
    "El tamaño del archivo importa más que la fidelidad",
    "Es una sola imagen, sin necesidad de varias páginas",
    "Vas a compartirlo por apps de mensajería que prefieren imágenes",
    "Vas a publicarlo en redes sociales",
  ],
  faq: [
    {
      q: "¿Puedo convertir un JPG a PDF?",
      a: "Sí. PDF Editor (como la mayoría de herramientas de PDF) envuelve los JPG en PDF conservando la calidad de la imagen.",
    },
    {
      q: "¿Funciona el OCR sobre un JPG de un documento?",
      a: "Es mejor convertirlo primero a PDF y luego pasar el OCR: el resultado es un texto buscable dentro de un formato de documento como es debido.",
    },
    {
      q: "¿Por qué prefieren los contables los PDF?",
      a: "Sus herramientas de contabilidad indexan los PDF e ignoran los JPG. Los recibos en PDF se clasifican solos; los JPG se quedan quietos en una carpeta.",
    },
  ],
  related: [
    { label: "Convertidor de PDF", path: "/pdf-converter" },
    { label: "Escanear a PDF", path: "/scan-to-pdf" },
    { label: "Editor de PDF", path: "/pdf-editor" },
  ],
};

export default content;
