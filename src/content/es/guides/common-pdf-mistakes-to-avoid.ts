import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Errores habituales con PDF que debes evitar",
  description:
    "Los errores con PDF que hacen perder tiempo o filtran información — comprimir de más, enviar fotos, subir un archivo sensible, olvidar páginas — y cómo evitarlos.",
  updated: "2026-05-23",
  intro: [
    "La mayoría de los problemas con PDF no son técnicos — son costumbres evitables. El archivo que rebotó porque nadie lo comprimió, la foto enviada en vez de un documento, el contrato subido a un servidor cualquiera, la página que no debía salir pero salió. Cada uno es pequeño, cada uno es habitual, y cada uno es fácil de evitar en cuanto sabes qué buscar.",
    "Esta guía recopila los errores que la gente comete más a menudo con los PDF, por qué cada uno pasa factura, y la solución rápida. Varias de las soluciones usan las herramientas gratuitas de este sitio que trabajan en el dispositivo; todas son más costumbre que función.",
    "Léela una vez y te pillarás a ti mismo antes del próximo contratiempo evitable — que, con documentos que viajan a clientes, compañeros e instituciones, vale más de lo que parece.",
  ],
  steps: [
    {
      title: "Enviar una foto en vez de un documento",
      body: "Un JPG de una página sale torcido, no es buscable e incomoda al imprimir o archivar. Si es un documento, conviértelo antes a PDF con la herramienta Imagen a PDF, o escanéalo como es debido — no le dejes a quien lo recibe lidiar con una instantánea.",
    },
    {
      title: "Subir archivos sensibles a herramientas desconocidas",
      body: "Soltar un contrato o un documento de identidad en el primer servicio «PDF online gratis» lo sube al servidor de un desconocido. Usa herramientas basadas en el navegador que trabajan en el dispositivo para cualquier cosa que te importaría que se leyera.",
    },
    {
      title: "Comprimir de más por costumbre",
      body: "Poner la compresión al máximo en cada archivo degrada documentos que no lo necesitaban. Usa el nivel más suave que cumpla tu objetivo de tamaño, y no comprimas archivos que ya son pequeños.",
    },
    {
      title: "Olvidar revisar las páginas antes de enviar",
      body: "Notas internas, los datos de un destinatario anterior, una página en blanco del escáner — todo esto se cuela sin que nadie lo note. Revisa página por página, y elimina lo que no deba salir con la herramienta Extraer páginas PDF.",
    },
    {
      title: "Enviar un archivo editable como «definitivo»",
      body: "Un presupuesto o un contrato terminado enviado como documento de Word se puede editar — sin querer o queriendo. Convierte las versiones finales a PDF para que la maquetación y las cifras queden fijas.",
    },
    {
      title: "Sobrescribir tu único original",
      body: "Comprimir, convertir y editar no tienen vuelta atrás para la copia que conservas. Guarda siempre las versiones editadas con un nombre nuevo para que el original intacto sobreviva a un error.",
    },
  ],
  tips: [
    "Trata «¿esto es un documento o una imagen?» como la primera pregunta. Los documentos van como PDF; solo las imágenes de verdad van como JPG.",
    "La privacidad es una costumbre, no un ajuste. Recurre por defecto a herramientas del dispositivo para archivos sensibles y así nunca tienes que acordarte de tener cuidado.",
    "Comprime con intención, no por reflejo — ajusta el nivel al uso y evita comprimir archivos que ya tienen un tamaño razonable.",
    "Una revisión de diez segundos página por página antes de enviar evita los errores de PDF más bochornosos que existen.",
    "Conserva los originales. Casi cualquier operación con un PDF solo es reversible si no sobrescribiste la fuente.",
  ],
  mobileNote:
    "Muchos de estos descuidos ocurren con las prisas de enviar algo desde el móvil. La app PDF Editor te deja recortar una página suelta, comprimir con sensatez, convertir una foto y bloquear una versión final — todo en el dispositivo — para que un envío apresurado no se convierta en un error que tengas que disculpar.",
  faq: [
    {
      q: "¿Cuál es el error más habitual con PDF?",
      a: "Enviar una foto JPG cuando el destinatario necesitaba un documento. Sale torcida, no es buscable y es difícil de imprimir o archivar. Convertir antes la foto en un PDF lo resuelve.",
    },
    {
      q: "¿Por qué es arriesgado subir PDF a herramientas gratuitas?",
      a: "Muchas herramientas «online» suben tu archivo a un servidor, así que un contrato o un documento de identidad vive brevemente en una infraestructura que no controlas. Las herramientas basadas en el navegador que trabajan en el dispositivo evitan esto por completo.",
    },
    {
      q: "¿Más compresión es siempre mejor?",
      a: "No. Comprimir de más degrada documentos que no lo necesitaban y no hace nada por archivos que ya son pequeños. Usa el nivel más suave que alcance tu objetivo de tamaño.",
    },
    {
      q: "¿Cómo evito enviar las páginas equivocadas?",
      a: "Revisa el documento página por página antes de enviarlo y elimina cualquier cosa que no deba salir con la herramienta Extraer páginas PDF. Las notas internas y las páginas sueltas son los culpables habituales.",
    },
    {
      q: "¿Por qué no debería sobrescribir el archivo original?",
      a: "Comprimir, convertir y editar no tienen vuelta atrás para la copia que conservas. Guardar con un nombre nuevo preserva el original para que un error se pueda deshacer fácilmente.",
    },
  ],
  related: [
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    { label: "Cómo preparar un PDF antes de compartirlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Herramientas PDF que respetan tu privacidad", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF o JPG para documentos", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
};

export default content;
