import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Cómo reducir un PDF antes de subirlo a un portal",
  description:
    "Los portales de subida rechazan los archivos pesados con más dureza que el correo. Cómo bajar de esos límites tan ajustados sin perder la legibilidad que revisan.",
  updated: "2026-05-23",
  intro: [
    "Los portales de subida son más estrictos que el correo. Un formulario de la administración, un sistema de solicitud de empleo, un portal de hacienda o de recursos humanos suele limitar un PDF a 2, 4 o 5 MB y rechaza cualquier cosa mayor con un error seco y sin segundas oportunidades. Y para colmo, casi siempre son documentos escaneados — exactamente los archivos con más probabilidades de ser demasiado pesados.",
    "Esta guía trata de superar esos límites con la herramienta gratuita Comprimir PDF, que funciona en tu navegador sin enviar nada a ningún servidor. La particularidad de los portales es que también exigen que el documento siga siendo legible — una subida rechazada y una ilegible fallan por igual — así que es un equilibrio.",
    "Veremos cómo alcanzar un tamaño concreto, qué hacer cuando el límite de un portal es brutalmente bajo, y cómo mantener el documento lo bastante legible como para pasar la revisión que le espera al otro lado.",
  ],
  steps: [
    {
      title: "Averigua el límite exacto del portal",
      body: "Lee la letra pequeña del campo de subida. Los portales indican un tope duro — a menudo 2–5 MB — y rechazan cualquier cosa por encima. Ese número es tu objetivo.",
    },
    {
      title: "Abre la herramienta Comprimir PDF",
      body: "Ve a la herramienta Comprimir PDF. Procesa el archivo en tu dispositivo, algo que importa porque los documentos de estos portales suelen ser personales u oficiales.",
    },
    {
      title: "Comprime hasta acercarte al límite",
      body: "Empieza con Recomendado; si el límite es ajustado, pasa a Fuerte. La herramienta muestra el tamaño resultante para que veas si has superado el límite.",
    },
    {
      title: "Confirma que sigue siendo legible",
      body: "Abre el archivo comprimido. Los portales rechazan los archivos demasiado pesados y los revisores rechazan los ilegibles — el documento tiene que cumplir ambas cosas. Comprueba que el texto se lee con comodidad.",
    },
    {
      title: "Si no llegas al límite, reduce páginas",
      body: "Si la compresión sola no te baja de un límite muy ajustado, elimina las páginas innecesarias con la herramienta Extraer páginas PDF, o sube las secciones necesarias por separado si el portal lo permite.",
    },
    {
      title: "Sube el archivo con el tamaño adecuado",
      body: "Envía la versión comprimida. Conserva tu original en calidad completa por si el portal pide después una copia más nítida.",
    },
  ],
  tips: [
    "Averigua el límite exacto antes de comprimir. Comprimir a ciegas desperdicia esfuerzo; un límite declarado de 4 MB te dice con precisión hasta dónde apretar.",
    "Los portales exigen una doble comprobación: lo bastante pequeño para subirlo y lo bastante nítido para leerlo. Una compresión Fuerte que convierta un formulario en un borrón fallará la revisión aunque se suba sin problemas.",
    "Los documentos escaneados de una solicitud se reducen muchísimo, así que hasta un límite de 2 MB suele ser alcanzable — son casi todo datos de imagen.",
    "Si un límite es imposiblemente bajo para un escaneo de varias páginas, eliminar antes las páginas en blanco o irrelevantes reduce el tamaño sin tocar la calidad.",
    "Conserva el original. Un revisor que no pueda leer un detalle puede pedirte una copia más nítida, y querrás tener el archivo en calidad completa listo.",
  ],
  mobileNote:
    "Muchas subidas a portales se hacen desde el móvil — se fotografía un documento y se envía en el momento. La app PDF Editor comprime sin conexión y te deja previsualizar la legibilidad antes de subirlo, así no envías un archivo demasiado pesado o demasiado borroso como para pasar.",
  faq: [
    {
      q: "¿Por qué los portales de subida rechazan mi PDF cuando el correo lo acepta?",
      a: "Los portales fijan límites mucho más ajustados — a menudo 2–5 MB frente a los ~25 MB del correo — y los aplican con rigor. Un archivo que se envía sin problema por correo puede ser fácilmente demasiado pesado para un portal.",
    },
    {
      q: "¿Cómo alcanzo un tamaño concreto?",
      a: "Comprime y consulta el tamaño resultante, subiendo de nivel hasta quedar por debajo del límite. La herramienta muestra las cifras antes y después para que apuntes con precisión.",
    },
    {
      q: "¿Y si ni siquiera la compresión Fuerte es suficiente?",
      a: "Elimina las páginas innecesarias con la herramienta Extraer páginas PDF, o sube las secciones necesarias por separado si el portal lo permite. Eso recorta el tamaño sin degradar más las páginas que quedan.",
    },
    {
      q: "¿Se envía mi documento a vuestros servidores al comprimirlo?",
      a: "No. La herramienta Comprimir PDF funciona en tu navegador, en tu dispositivo — algo relevante porque los documentos de portales suelen ser personales u oficiales.",
    },
    {
      q: "¿Una compresión fuerte puede hacer que el portal lo rechace por ilegible?",
      a: "Puede pasar. Los portales necesitan el archivo lo bastante pequeño para subirlo y lo bastante nítido para leerlo. Comprueba la legibilidad tras comprimir y conserva tu original por si te piden algo más adelante.",
    },
  ],
  related: [
    { label: "Comprimir PDF — alcanza el límite del portal", path: "/compress-pdf" },
    { label: "Extraer páginas PDF — quita páginas para ahorrar tamaño", path: "/extract-pdf-pages" },
    { label: "Mejores ajustes de compresión PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
