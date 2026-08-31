import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Cuándo usar un PDF escaneado (y cuándo no)",
  description:
    "El PDF escaneado resuelve un problema concreto: pasar del papel a lo digital. También es más pesado, menos buscable y más difícil de editar. Cuándo merece la pena el cambio.",
  updated: "2026-05-29",
  intro: [
    "El PDF escaneado resuelve un único problema concreto: convertir papel en un archivo digital que se pueda compartir, archivar y ver en cualquier dispositivo. Eso lo hace bien. Pero también pesa más que un PDF equivalente escrito a máquina, no tiene texto buscable sin OCR, es más difícil de editar y a menudo tiene menos resolución que el original. Escanear un documento que ya existe en digital es casi siempre un error.",
    "La regla correcta es breve. Escanea el papel que no tiene origen digital. No escanees nada que ya tengas como documento de Word, captura de pantalla o exportación en PDF. La tentación de imprimir y luego escanear para «fijar» un documento es comprensible, pero casi nunca hace falta — una exportación directa a PDF consigue lo mismo y mejor.",
    "Esta guía recorre cuándo escanear y cuándo no. La mayor parte es intuitiva en cuanto se pone por escrito; el problema es que la tentación de escanear suele ser más fuerte que la necesidad real.",
  ],
  steps: [
    {
      title: "Usa un PDF escaneado cuando el único origen es el papel",
      body: "Contratos antiguos, apuntes manuscritos, tickets de papel, documentos recibidos por correo postal, formularios firmados a mano. Cualquier cosa que exista físicamente y necesite pasar a digital. Escanear a PDF desde el móvil o con un escáner de mesa produce un PDF limpio.",
    },
    {
      title: "No escanees documentos que ya tienes en digital",
      body: "Si tienes el documento de Word, el PDF de origen o la exportación, usa eso. Imprimir y luego escanear pierde fidelidad, hace el archivo más pesado y elimina el texto buscable. No hay ninguna ventaja.",
    },
    {
      title: "No escanees para «fijar» un documento",
      body: "Reexportar desde el origen a PDF ya fija el contenido. Escanear no añade seguridad; solo elimina el texto buscable y la calidad del texto sin hacer el archivo más difícil de alterar.",
    },
    {
      title: "Usa OCR si escaneas y necesitas texto buscable",
      body: "El OCR convierte las imágenes escaneadas de texto en texto buscable subyacente. Sin él, los PDF escaneados son fotografías de palabras — legibles pero no buscables.",
    },
    {
      title: "Comprime los escaneos antes de compartir",
      body: "Los PDF escaneados son de los más pesados que te vas a encontrar habitualmente. Comprimir PDF en tu navegador los reduce de forma drástica sin pérdida de calidad evidente, sobre todo en documentos solo de texto.",
    },
    {
      title: "Escanea a la resolución correcta",
      body: "Entre 200 y 300 ppp para documentos que se van a leer en pantalla. 300 ppp para cualquier cosa que pueda imprimirse. 600 ppp es calidad de foto y malgasta espacio en texto.",
    },
  ],
  tips: [
    "La mayoría de los momentos «tengo que escanear esto» resultan ser en realidad «lo tengo en digital y se me había olvidado». Busca primero el origen.",
    "Una exportación directa a PDF es más limpia que una impresión escaneada en todos los aspectos medibles: más nítida, más pequeña, buscable, editable.",
    "Los escaneos hechos con el móvil ya igualan hoy la calidad de un escáner de mesa para documentos normales, gracias a la detección de bordes y el ajuste de contraste.",
    "Los escaneos con OCR son buscables pero no perfectos en el texto. Trata el resultado del OCR como aproximado, no como definitivo.",
    "No escanees para que un archivo nuevo «parezca oficial». El formato es el mismo; a nadie le importa si se escaneó o se exportó.",
  ],
  mobileNote:
    "El móvil es la herramienta adecuada para escanear en el día a día — la cámara la llevas siempre encima, la detección de bordes da resultados limpios, y el PDF resultante se puede usar de inmediato. El flujo de escaneo de la app PDF Editor está pensado justo para esto, con captura de varias páginas y limpieza en el propio dispositivo.",
  faq: [
    {
      q: "¿Debería escanear un documento que tengo como archivo de Word?",
      a: "No. Expórtalo directamente a PDF. Escanearlo pierde resolución, hace el archivo más pesado y elimina el texto buscable.",
    },
    {
      q: "¿Es un PDF escaneado más «oficial» que uno exportado?",
      a: "No. Los dos son PDF. Lo oficial viene de las firmas y del contenido, no de si el archivo se escaneó o no.",
    },
    {
      q: "¿Cuándo ayuda de verdad escanear?",
      a: "Cuando el origen es papel. Contratos recibidos por correo, apuntes manuscritos, formularios en papel con letra a mano. Escanear es la única forma de digitalizarlos.",
    },
    {
      q: "¿Debería aplicar OCR a todos mis escaneos?",
      a: "Sí, si tu herramienta lo permite. Los escaneos con texto buscable son mucho más útiles a largo plazo, y el OCR no cambia el aspecto visible del documento.",
    },
    {
      q: "¿Cuánto debería pesar un PDF escaneado?",
      a: "Entre unos cientos de KB y unos pocos MB para documentos normales. Los escaneos que pesan mucho más que eso se benefician de la compresión.",
    },
  ],
  related: [
    { label: "Escanear a PDF — escaneo con la cámara del móvil", path: "/scan-to-pdf" },
    { label: "Cómo escanear documentos a PDF con el móvil", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cómo arreglar la calidad de un PDF escaneado", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "PDF editable o PDF plano", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Escanear a PDF — escaneo con la cámara del móvil", path: "/scan-to-pdf" },
};

export default content;
