import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Cómo comprimir un PDF online sin subirlo a ningún servidor",
  description:
    "Reduce un PDF directamente en tu navegador, sin subir nada ni crear una cuenta. En qué se diferencia la compresión en el dispositivo de las herramientas online típicas, y qué se pierde en calidad.",
  updated: "2026-05-23",
  intro: [
    "«Comprimir PDF online» suele evocar una imagen conocida y ligeramente incómoda: enviar tu archivo al servidor de un desconocido, esperar, descargar el resultado, y confiar en que el documento que acabas de entregar no era nada que te importara. Hay una versión mejor de ese flujo — una que funciona en la propia pestaña del navegador, así que el archivo nunca sale de tu dispositivo.",
    "Esta guía usa la herramienta gratuita Comprimir PDF, que hace su trabajo en local usando el propio procesador de tu dispositivo. Es «online» en el sentido de que llegas a ella a través de una página web, pero tu PDF nunca se envía a ningún sitio. Esa distinción importa sobre todo para los documentos que la gente comprime de verdad: contratos escaneados, extractos, solicitudes.",
    "Recorreremos los pasos, explicaremos con honestidad el compromiso de calidad, y señalaremos el tipo de archivos donde la compresión en el navegador brilla o donde se topa con un límite.",
  ],
  steps: [
    {
      title: "Abre la herramienta Comprimir PDF",
      body: "Ve a la herramienta Comprimir PDF en tu navegador. Se carga en la página y procesa tu archivo en tu dispositivo — sin subida, sin registro.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. No se transmite nada; el archivo se lee en local.",
    },
    {
      title: "Elige un nivel de compresión",
      body: "Bajo conserva el máximo detalle, Recomendado equilibra tamaño y calidad, Fuerte es el más pequeño. Para correo y subidas, Recomendado suele ser el punto óptimo.",
    },
    {
      title: "Comprime",
      body: "Ejecútalo. La herramienta vuelve a renderizar y recodificar las páginas en local, y luego muestra el tamaño antes y después junto con el porcentaje ahorrado.",
    },
    {
      title: "Comprueba que el resultado se ve aceptable",
      body: "Abre el archivo comprimido y mira las páginas. Los escaneos deberían seguir siendo legibles; si un nivel se ve demasiado tosco, retrocede a uno más ligero.",
    },
    {
      title: "Descarga el archivo más pequeño",
      body: "Guárdalo como archivo nuevo para que tu original quede intacto. La copia comprimida está lista para adjuntar o subir.",
    },
  ],
  tips: [
    "«Online» aquí no significa «subido». El archivo se procesa en tu navegador, en tu dispositivo, que es la forma más segura de comprimir cualquier cosa sensible.",
    "La compresión tiene pérdida — ninguna herramienta honesta afirma lo contrario. Los niveles más bajos conservan más detalle; elige el que siga viéndose aceptable para tu uso.",
    "Para conseguir un ahorro real en el navegador, la herramienta vuelve a renderizar las páginas como imágenes, así que el texto del resultado deja de ser seleccionable o buscable. Conserva el original si necesitas eso.",
    "Los PDF de solo texto o vectoriales apenas se reducen porque hay poca información de imagen que comprimir — las mayores ganancias vienen de escaneos y archivos cargados de fotos.",
    "Los PDF protegidos con contraseña no se pueden procesar en el navegador. Quita la contraseña primero, o usa la app PDF Editor, que admite archivos protegidos.",
  ],
  mobileNote:
    "Comprimir un documento sensible sobre la marcha es exactamente donde el procesamiento en el dispositivo demuestra su valor. La app PDF Editor comprime por completo sin conexión — puedes reducir un contrato en modo avión sin que salga ni un byte de tu móvil — y también gestiona archivos protegidos con contraseña.",
  faq: [
    {
      q: "¿Se sube realmente mi PDF a un servidor?",
      a: "No. Aunque se accede a través de una página web, la herramienta Comprimir PDF se ejecuta en tu navegador y procesa el archivo en tu dispositivo. No se transmite nada, lo que la hace segura para documentos confidenciales.",
    },
    {
      q: "¿Cuánto se reducirá mi archivo?",
      a: "Depende del contenido. Los PDF escaneados o cargados de imágenes suelen reducirse entre un 50 % y un 90 %; los PDF de solo texto apenas cambian. La herramienta muestra el tamaño exacto antes y después.",
    },
    {
      q: "¿Se perderá calidad?",
      a: "Sí, algo — esto es compresión con pérdida y no fingimos lo contrario. Los niveles más bajos conservan más detalle. Elige el nivel que se vea aceptable para cómo se va a usar el documento.",
    },
    {
      q: "¿Por qué no puedo seleccionar el texto después de comprimir?",
      a: "Para lograr un ahorro de tamaño real en el navegador, cada página se convierte en una imagen (rasterización), lo que elimina la capa de texto seleccionable. Si necesitas texto buscable, conserva el original o usa un enfoque más ligero.",
    },
    {
      q: "¿Puedo comprimir así un PDF protegido?",
      a: "No en el navegador. Quita la contraseña primero, o usa la app móvil PDF Editor, que puede abrir y comprimir archivos protegidos.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce en tu navegador", path: "/compress-pdf" },
    { label: "Cómo comprimir un PDF sin perder calidad", path: "/guides/how-to-compress-pdf" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Herramientas de PDF que respetan tu privacidad", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
