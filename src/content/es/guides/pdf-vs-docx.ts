import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF o DOCX — ¿qué formato usar?",
  description:
    "Cuándo elegir el PDF en lugar del DOCX, y al revés. Comparación clara de edición, fidelidad, firma y para compartir.",
  updated: "2026-05-11",
  intro: [
    "PDF y DOCX resuelven problemas distintos. El PDF es un formato cerrado y pensado para imprimir que se ve idéntico en cualquier dispositivo. DOCX es un formato de trabajo editable que cualquiera con Word, Google Docs o cualquier suite ofimática puede reformar, restilizar y reformatear.",
    "Elegir el formato correcto para cada tarea evita la mayoría de los quebraderos de cabeza que la gente asocia con ambos. Enviar un contrato final como DOCX invita a ediciones accidentales. Enviar un borrador de trabajo como PDF hace incómoda la revisión. La elección no es estética — depende de para qué sirve el documento.",
    "Esta guía desglosa cuándo gana cada formato, con ejemplos concretos de contratos, borradores, facturas, informes y el tipo de documentos con los que las pequeñas empresas y los particulares lidian cada semana.",
  ],
  steps: [
    {
      title: "Usa PDF cuando el documento sea definitivo",
      body: "Contratos, acuerdos firmados, facturas, folletos, informes que van a clientes o interesados. Cualquier cosa donde el destinatario deba ver exactamente lo que tú viste, y no debería poder editarlo sin que se note.",
    },
    {
      title: "Usa DOCX cuando el documento se siga escribiendo",
      body: "Borradores, documentos colaborativos, cualquier cosa en revisión, plantillas que se reutilizarán y retocarán. Los comentarios y el control de cambios solo funcionan bien en DOCX — son la razón de ser del formato.",
    },
    {
      title: "Usa PDF para archivar",
      body: "Los PDF están diseñados para el almacenamiento a largo plazo. El formato se renderiza igual dentro de 10 años. Los archivos DOCX pueden romperse de forma sutil entre versiones de Word y sistemas operativos — bien para documentos de trabajo, arriesgado para archivos.",
    },
    {
      title: "Usa DOCX cuando el contenido haya que extraerlo",
      body: "Volcar texto en otra herramienta, reaprovechar una sección para una entrada de blog, reescribir en otro estilo — todo es más fácil desde DOCX, donde el contenido ya está estructurado y es editable.",
    },
    {
      title: "Convierte entre ambos según haga falta",
      body: "Las buenas herramientas de PDF convierten en ambas direcciones con alta fidelidad para documentos basados en texto. El flujo habitual: editar en DOCX, exportar a PDF al compartir fuera. Recibir un PDF, convertirlo a DOCX si necesitas reaprovechar el contenido.",
    },
    {
      title: "Usa PDF al recibir de alguien que no conoces",
      body: "Los archivos DOCX pueden contener macros y objetos incrustados que suponen riesgos de seguridad. Los PDF son más seguros de abrir desde fuentes no fiables, aunque conviene mantener siempre actualizado tu lector de PDF.",
    },
  ],
  tips: [
    "Nunca envíes un borrador de contrato como DOCX a una parte externa a menos que estés invitando a cambios — pueden editarlo sin que lo sepas, y solo notarás las diferencias si comparas con atención.",
    "Nunca envíes una factura final como DOCX — debería ser no editable. El PDF es la elección correcta siempre.",
    "Si un destinatario pide un «PDF editable», normalmente se refiere a DOCX. Pregunta antes de asumirlo, y luego convierte.",
    "Los PDF con firmas deberían seguir siendo PDF. Convertirlos de nuevo a DOCX elimina la firma.",
    "Para documentos con campos de formulario, el PDF suele ser la mejor opción — los campos de formulario en DOCX son toscos e inconsistentes entre editores.",
  ],
  mobileNote:
    "En el móvil, el DOCX necesita Word, Google Docs u otra app ofimática para verse correctamente. El PDF se abre de forma nativa en iOS y Android con visores integrados. Eso por sí solo convierte al PDF en la elección correcta para la mayoría de documentos que se comparten — tu destinatario no tendrá que instalar nada para leerlo.",
  faq: [
    {
      q: "¿Puedo editar un PDF directamente sin convertirlo?",
      a: "Sí, con un editor de PDF adecuado. La edición de PDF es más limitada que la de DOCX — está pensada para correcciones, firmas y cambios pequeños, no para reescrituras importantes. Para una edición sustancial, convertir primero a DOCX suele tener más sentido.",
    },
    {
      q: "¿Qué formato produce archivos más pequeños?",
      a: "Depende del contenido. El DOCX con mucho texto suele ser más pequeño que el PDF equivalente. Los PDF con muchas imágenes pueden ser más pequeños que el DOCX si están bien comprimidos, porque la compresión de imágenes del PDF es más flexible.",
    },
    {
      q: "¿Sobrevivirán mis fuentes a la conversión?",
      a: "En su mayoría. Si una fuente no está disponible en el dispositivo de destino, se sustituye automáticamente por una similar. Cíñete a fuentes comunes (Inter, Helvetica, Calibri, Arial) para minimizar sustituciones visibles.",
    },
    {
      q: "¿Es distinto el PDF/A del PDF normal?",
      a: "Sí. El PDF/A es un subconjunto estricto pensado para el archivo, que incrusta todas las fuentes y no permite dependencias externas. Lo exigen algunos archivos gubernamentales y legales. El PDF estándar funciona para casi todo lo demás.",
    },
    {
      q: "¿Puede un DOCX contener una firma?",
      a: "Puede contener la imagen de una firma, pero esa firma no tiene validez criptográfica. Los PDF admiten firmas digitales reales que vinculan la firma al documento. Para cualquier cosa que necesite firmarse legalmente, el PDF es el formato correcto.",
    },
  ],
  related: [
    { label: "PDF frente a DOCX — comparación completa", path: "/compare/pdf-vs-docx" },
    { label: "Convertidor de PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
