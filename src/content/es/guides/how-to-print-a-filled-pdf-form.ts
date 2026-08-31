import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Cómo imprimir un formulario PDF relleno con todas las respuestas",
  description:
    "¿Imprimes tu formulario y los campos salen en blanco? Por qué a veces las respuestas no se imprimen, y cómo conseguir una copia en papel limpia con todo visible.",
  updated: "2026-06-01",
  intro: [
    "Rellenas un formulario en pantalla, lo envías a la impresora, y el papel sale con todas tus respuestas ausentes — solo el formulario en blanco. Es uno de los problemas de formularios más comunes y desconcertantes, y tiene una causa concreta: las respuestas viven en la capa de campos del formulario, y algunas rutas de impresión se saltan esa capa e imprimen solo la página que hay debajo.",
    "La solución suele ser una de dos cosas: activar el ajuste que imprime los valores de los campos del formulario, o aplanar el formulario primero para que las respuestas pasen a formar parte de la página y no se puedan omitir. En cualquier caso, conseguir una copia impresa limpia con todas las respuestas visibles es sencillo en cuanto sabes por qué ocurre.",
    "Esta guía cubre el problema de los campos en blanco, los ajustes de impresión que lo controlan, y las comprobaciones de impresión más generales (márgenes, escala) que mantienen bien un formulario relleno en papel.",
  ],
  steps: [
    {
      title: "Reproduce el problema con una vista previa de impresión",
      body: "Abre el cuadro de diálogo de impresión y mira la vista previa antes de enviar nada a la impresora. Si tus respuestas también faltan ahí, es un problema de impresión de campos, no un fallo de la impresora.",
    },
    {
      title: "Activa la impresión de los valores de los campos del formulario",
      body: "Busca una opción de impresión como «imprimir campos de formulario» o un ajuste de comentarios y formularios puesto en «documento y anotaciones». Activarla le indica a la ruta de impresión que incluya la capa de campos con tus respuestas.",
    },
    {
      title: "Si no está disponible, aplana el formulario primero",
      body: "Aplanar fusiona tus respuestas rellenadas con la propia página. Una vez aplanado, no queda ninguna capa de campos separada que omitir, así que cualquier ruta de impresión incluye las respuestas. Es la solución más fiable.",
    },
    {
      title: "Comprueba la escala y los márgenes",
      body: "Ajusta la escala a «ajustar» o al 100 % en lugar de un zoom personalizado para que el formulario no salga recortado ni encogido. Confirma que el tamaño del papel coincide con el del formulario para que nada se salga del borde.",
    },
    {
      title: "Imprime una página de prueba",
      body: "Imprime primero una sola página para confirmar que las respuestas, la maquetación y los márgenes se ven bien antes de lanzar el documento completo — sobre todo en formularios de varias páginas.",
    },
  ],
  tips: [
    "La solución universal más rápida es aplanar el formulario y luego imprimir — un formulario aplanado imprime sus respuestas en cualquier sitio, sin necesidad de ningún ajuste especial.",
    "Si la vista previa muestra tus respuestas pero el papel no, el problema está en los ajustes de impresión, no en el archivo — revisa de nuevo la opción de campos de formulario.",
    "Un formulario escaneado y no interactivo nunca tiene este problema: sus «campos» ya forman parte de la página, así que siempre se imprimen.",
    "En formularios oscuros o sombreados, comprueba que el texto de los campos se imprime en un color que siga siendo legible sobre el fondo.",
    "Los ajustes de impresión varían entre apps e impresoras, así que el nombre exacto de la opción cambia — busca cualquier cosa que mencione campos de formulario o anotaciones.",
  ],
  mobileNote:
    "Imprimir desde el móvil tiene la misma trampa — algunos atajos de impresión descartan los valores de los campos. En la app PDF Editor puedes aplanar el formulario relleno antes de imprimirlo o compartirlo a una impresora, así que las respuestas quedan integradas en la página y salen siempre.",
  faq: [
    {
      q: "¿Por qué mis respuestas del formulario salen en blanco al imprimir?",
      a: "Porque las respuestas se guardan en la capa de campos del formulario y tu ruta de impresión se la salta. Activa la opción de imprimir los valores de los campos del formulario, o aplana el formulario para que las respuestas pasen a formar parte de la página.",
    },
    {
      q: "¿Qué hace el aplanado para la impresión?",
      a: "Aplanar fusiona tus valores rellenados con la propia página. A partir de ahí, no queda ninguna capa de campos separada que se pueda omitir, así que las respuestas se imprimen de forma fiable desde cualquier app o impresora.",
    },
    {
      q: "Las respuestas se ven en pantalla pero no en papel — ¿por qué?",
      a: "Tu lector muestra la capa de campos, pero los ajustes de impresión la excluyen. Busca una opción de impresión sobre campos de formulario o «documento y anotaciones» y actívala, o aplana antes de imprimir.",
    },
    {
      q: "¿Por qué mi formulario impreso sale cortado por los bordes?",
      a: "Eso es un desajuste de escala o de tamaño de papel, distinto del problema de los campos en blanco. Ajusta la escala a «ajustar» o al 100 % y haz coincidir el tamaño del papel con el del formulario.",
    },
    {
      q: "¿Tienen este problema los formularios escaneados y planos?",
      a: "No. Las respuestas de un formulario no interactivo forman parte de la imagen de la página, así que siempre se imprimen. El problema de los campos en blanco solo afecta a los formularios interactivos con una capa de campos separada.",
    },
  ],
  related: [
    {
      label: "Cómo guardar un formulario PDF relleno",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Formulario PDF que se imprime mal",
      path: "/guides/pdf-form-not-printing-correctly",
    },
    {
      label: "Cómo solucionar problemas al imprimir un PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    {
      label: "Cómo devolver un formulario PDF relleno",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
