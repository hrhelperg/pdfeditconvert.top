import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Cómo entregar un trabajo en PDF sin dramas con el portal",
  description:
    "Los portales del colegio rechazan las tareas por razones previsibles — tamaño, número de páginas, formato. El camino más simple desde el trabajo terminado hasta el PDF aceptado.",
  updated: "2026-05-29",
  intro: [
    "Dos minutos antes de la hora límite es el peor momento para descubrir que el portal del colegio rechaza tu trabajo. El error suele ser genérico —«archivo no válido», «error al subir el archivo», «demasiado grande»— y la causa real suele ser una de cuatro cosas previsibles: el archivo supera el límite de tamaño, el formato no es exactamente el que espera el portal, el número de páginas sobrepasa un tope, o lo que capturaste con el móvil todavía no es realmente un PDF.",
    "La solución es breve en todos los casos, y se puede hacer desde el móvil o desde el ordenador en una pestaña del navegador sin enviar nada a terceros. El truco está en saber qué espera realmente el portal y producir exactamente ese archivo a la primera.",
    "Esta guía recorre el camino desde el trabajo terminado hasta el PDF aceptado, incluida la forma correcta de tratar los escaneos de trabajo manuscrito, los ejercicios y las entregas de formato mixto, como «un documento de Word más tres páginas escritas a mano».",
  ],
  steps: [
    {
      title: "Confirma los requisitos reales del portal",
      body: "La mayoría de los portales de clase indican el límite en algún sitio discreto — normalmente entre 5 y 25 MB, a veces un número máximo de páginas, en ocasiones específicamente PDF/A. Compruébalo antes de subir el archivo, no después del rechazo.",
    },
    {
      title: "Convierte primero todas las partes a PDF",
      body: "Un documento de Word → Word a PDF. Páginas manuscritas → Escanear a PDF desde el móvil. Capturas de pantalla o fotos de la pizarra → Imagen a PDF. Todo se convierte en PDF antes de cualquier otra cosa.",
    },
    {
      title: "Fusiona todo en un solo archivo en el orden de entrega",
      body: "Fusionar PDF combina el trabajo escrito a máquina, el trabajo escaneado y cualquier anotación en un único archivo ordenado. El profesor prefiere un solo archivo a tres sueltos.",
    },
    {
      title: "Comprueba la orientación y el orden",
      body: "Reordenar páginas de PDF si la fusión dejó algo fuera de secuencia. Girar PDF si un escaneo salió de lado. El profesor no debería tener que girar manualmente nada para leer tu trabajo.",
    },
    {
      title: "Comprime para ajustarte al límite del portal",
      body: "Comprimir PDF en tu navegador reduce el archivo. Los escaneos pesados bajan de tamaño de forma drástica; el contenido escrito a máquina apenas cambia. Apunta a quedarte por debajo del límite del portal con un pequeño margen.",
    },
    {
      title: "Nombra el archivo como espera la clase",
      body: "Muchas clases indican la convención de nombres: Apellido_Nombre_Tarea3.pdf. Síguela al pie de la letra. Un nombre equivocado cuesta puntos o provoca confusión al clasificar las entregas.",
    },
  ],
  tips: [
    "No entregues documentos de Word en un portal que acepta PDF. Word se ve distinto en el ordenador del profesor; el PDF fija cómo se ve.",
    "Los escaneos manuscritos deberían ser en blanco y negro o escala de grises, no en color. Salen más pequeños, más nítidos y se leen mejor.",
    "Comprime con fuerza los escaneos pesados, no el trabajo escrito a máquina. Las páginas escritas a máquina apenas comprimen; los escaneos comprimen mucho.",
    "Sube una versión de prueba con antelación para confirmar que el portal acepta tu archivo antes de la hora límite.",
    "Guarda también el archivo entregado en local. Las copias del portal no siempre se pueden recuperar después, y puede que necesites consultar lo que entregaste.",
  ],
  mobileNote:
    "Las entregas hechas solo desde el móvil son ya lo normal. La app PDF Editor gestiona toda la cadena desde el móvil — escanear páginas manuscritas, fusionarlas con el trabajo escrito a máquina, comprimir, nombrar el archivo y dejarlo listo para subir— sin tener que pasar por el ordenador.",
  faq: [
    {
      q: "¿Qué tamaño permiten la mayoría de los portales escolares?",
      a: "Lo habitual es entre 5 y 25 MB. Algunos portales de primaria y secundaria limitan a 2 MB. Los portales universitarios suelen ser más flexibles. Comprueba las especificaciones de tu clase concreta.",
    },
    {
      q: "¿Puedo entregar un Word en vez de un PDF?",
      a: "Solo si el portal lo acepta expresamente. La mayoría pide PDF específicamente para fijar el formato; entregar un Word puede costar puntos o provocar un rechazo automático.",
    },
    {
      q: "¿Tengo que fusionarlo todo en un solo archivo?",
      a: "Sí, salvo que el portal admita varias subidas. El profesor prefiere un solo archivo; además muchos portales solo aceptan uno de todos modos.",
    },
    {
      q: "¿Cuál es el motivo de rechazo más habitual?",
      a: "El tamaño del archivo. Los escaneos superan el límite del portal enseguida. Comprime antes de entregar y el rechazo casi siempre desaparece.",
    },
    {
      q: "¿Puedo subirlo desde el móvil?",
      a: "Sí. La mayoría de los portales escolares actuales funcionan en el navegador del móvil y aceptan PDF desde el menú para compartir. Las herramientas del móvil cubren toda la cadena.",
    },
  ],
  related: [
    { label: "PDF para estudiantes — apuntes y guías de estudio", path: "/pdf-for-students" },
    { label: "Escanear a PDF — captura páginas manuscritas", path: "/scan-to-pdf" },
    { label: "Cómo comprimir un PDF para un portal escolar", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Cómo escanear apuntes a mano a PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF para estudiantes — apuntes, subrayados, guías de estudio", path: "/pdf-for-students" },
};

export default content;
