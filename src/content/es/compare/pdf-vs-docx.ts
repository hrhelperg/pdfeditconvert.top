import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF o DOCX — la comparativa punto por punto",
  description:
    "PDF y DOCX comparados en edición, fidelidad de maquetación, firma, seguridad y para compartir. Elige el formato adecuado para cada tarea.",
  intro: [
    "El PDF y el DOCX son los dos formatos en los que acaba la mayoría de los documentos. Cada uno tiene su función, y elegir el adecuado para cada tarea evita casi todos los quebraderos de cabeza de formato y de compartir archivos que suelen asociarse a los documentos en general.",
    "Esta comparativa es práctica, no académica. Cada fila refleja cómo se comportan los dos formatos en flujos de trabajo reales, no cómo los define un documento de estándares. Nos centramos en lo que vas a notar durante el primer mes de usar mucho cualquiera de los dos.",
    "En resumen: el PDF gana cuando el documento está terminado, tiene que verse igual para quien lo lee, o contiene una firma. El DOCX gana cuando el documento es todavía un borrador de trabajo, lo están revisando varias personas, o vas a querer reutilizar el contenido en otro sitio. La mayoría de los documentos pasan por los dos formatos en distintas fases de su vida.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Maquetación fiel al píxel", left: "sí", right: "no" },
    { feature: "Edición de texto sencilla", left: "Limitado", right: "sí" },
    { feature: "Lectura universal", left: "sí", right: "no" },
    { feature: "Seguimiento de cambios y comentarios", left: "Limitado", right: "sí" },
    { feature: "Protección con contraseña (AES-256)", left: "sí", right: "sí" },
    { feature: "Renderizado fiable 10 años después", left: "sí", right: "no" },
    { feature: "Visualización en el móvil sin apps extra", left: "sí", right: "no" },
    { feature: "Campos de formulario", left: "sí", right: "Limitado" },
    { feature: "Firma integrada", left: "sí", right: "Complemento" },
  ],
  whenLeft: [
    "El documento está terminado y no debería editarse",
    "Necesitas que se vea igual en todos los dispositivos",
    "Es posible que quien lo reciba no tenga Microsoft Word",
    "El documento se va a archivar durante años",
    "Necesitas un formato imprimible y listo para firmar",
  ],
  whenRight: [
    "El documento todavía se está redactando",
    "Varias personas lo están revisando o coescribiendo",
    "El seguimiento de cambios y los comentarios son importantes",
    "Necesitas reutilizar o cambiar el estilo del contenido",
    "El documento se convertirá en una plantilla",
  ],
  faq: [
    {
      q: "¿Puedo convertir entre PDF y DOCX?",
      a: "Sí. Las buenas herramientas de PDF convierten en los dos sentidos con alta fidelidad en documentos de texto.",
    },
    {
      q: "¿Qué formato es más seguro?",
      a: "Los dos admiten cifrado AES-256. La seguridad no la determina el formato en sí, sino la contraseña y cómo la compartas.",
    },
    {
      q: "¿Mis fuentes sobrevivirán a la conversión?",
      a: "En general sí. Si una fuente no está disponible en el dispositivo de destino, se sustituye por una parecida. Usa fuentes comunes (Calibri, Inter, Helvetica) para minimizar las sustituciones.",
    },
  ],
  related: [
    { label: "Guía: PDF o DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Convertidor de PDF", path: "/pdf-converter" },
    { label: "Editor de PDF", path: "/pdf-editor" },
  ],
};

export default content;
