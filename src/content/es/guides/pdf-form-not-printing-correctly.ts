import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Formulario PDF que se imprime mal — cómo corregir los campos en blanco",
  description:
    "¿El formulario sale con campos en blanco, texto descolocado o bordes cortados? Los problemas de impresión propios de los formularios — sobre todo los valores que faltan — y el ajuste que corrige cada uno.",
  updated: "2026-06-01",
  intro: [
    "Los formularios se imprimen mal de formas que un PDF corriente no sufre. El más común y desconcertante es que los campos rellenados salgan en blanco — completaste todo en pantalla, pero el papel muestra solo el formulario vacío. Le siguen de cerca el texto de los campos que se desplaza fuera de su línea, las casillas de verificación que no se imprimen, y los bordes que se cortan. Cada uno tiene una causa concreta y solucionable, arraigada en cómo los campos de formulario se imprimen de forma distinta al contenido de la página.",
    "El problema principal — campos en blanco en papel — ocurre porque las respuestas rellenadas viven en la capa de campos del formulario, y algunas rutas de impresión se saltan esa capa por completo. La solución es un ajuste de impresión que incluya los campos de formulario, o aplanar el formulario para que las respuestas pasen a formar parte de la página. Los otros problemas son de escala y de renderizado de campos, cada uno con su propio ajuste.",
    "Esta guía se centra en los problemas de impresión propios de los formularios. Para problemas generales de impresión de PDF, como tamaños de página incorrectos en cualquier documento, la guía de impresión más amplia profundiza más.",
  ],
  steps: [
    {
      title: "Corrige los campos en blanco: imprime los valores de los campos o aplana",
      body: "Si los campos rellenados salen en blanco al imprimir, activa la opción de imprimir campos de formulario (a veces «documento y anotaciones»), o aplana el formulario primero para que las respuestas se fusionen con la página y se impriman siempre.",
    },
    {
      title: "Corrige el texto de campo descolocado",
      body: "Si el texto de un campo se imprime fuera de sitio o con una fuente distinta, el lector está renderizando los campos de forma diferente para la impresión. Aplanar fija el aspecto que ves en pantalla para que se imprima de la misma forma.",
    },
    {
      title: "Corrige las casillas y marcas que faltan",
      body: "Las marcas de verificación que desaparecen en papel son el mismo problema de la capa de campos que el texto en blanco. El ajuste de imprimir campos de formulario o un paso de aplanado las recupera junto con el resto de tus respuestas.",
    },
    {
      title: "Corrige los bordes cortados",
      body: "Ajusta la escala a «ajustar» o al 100 % en lugar de un zoom personalizado, y haz coincidir el tamaño del papel con el del formulario. Es un problema de escala, distinto del problema de la capa de campos, pero habitual en formularios densos.",
    },
    {
      title: "Imprime una página para confirmar",
      body: "Después de cambiar los ajustes, imprime primero una sola página. Confirma que las respuestas, la alineación y los márgenes se ven bien antes de lanzar a papel todo el formulario de varias páginas.",
    },
  ],
  tips: [
    "Aplanar antes de imprimir es la solución universal para los campos en blanco o descolocados — un formulario aplanado imprime sus respuestas en cualquier sitio sin necesidad de ningún ajuste especial.",
    "Si las respuestas se muestran en pantalla pero no en papel, es un ajuste de impresión, no el archivo — busca la opción de campos de formulario.",
    "Los problemas de escala y tamaño de papel son distintos del problema de los campos en blanco; corrígelos con «ajustar»/100 % y el papel adecuado.",
    "Los formularios escaneados y no interactivos no sufren el problema de los campos en blanco porque sus respuestas ya forman parte de la página.",
    "Los nombres de las opciones de impresión varían según la app y la impresora, así que busca cualquier cosa que mencione campos de formulario, anotaciones o comentarios.",
  ],
  mobileNote:
    "Los atajos de impresión del móvil pueden descartar los valores de los campos igual que los del ordenador. En la app PDF Editor puedes aplanar el formulario completado antes de imprimirlo o compartirlo a una impresora, para que todas las respuestas queden integradas en la página y se impriman de forma fiable.",
  faq: [
    {
      q: "¿Por qué mi formulario se imprime con los campos en blanco?",
      a: "Las respuestas rellenadas están en la capa de campos del formulario, y tu ruta de impresión se la salta. Activa la opción de imprimir los valores de los campos del formulario, o aplana el formulario para que las respuestas pasen a formar parte de la página y se impriman siempre.",
    },
    {
      q: "¿Por qué el texto de campo se imprime en el sitio o con la fuente equivocados?",
      a: "El lector renderiza los campos de forma distinta para la impresión. Aplana el formulario primero — el aplanado fija el aspecto a lo que ves en pantalla, así que se imprime de forma idéntica.",
    },
    {
      q: "Mis marcas de verificación no se imprimen — ¿por qué?",
      a: "La misma causa que el texto en blanco: las casillas forman parte de la capa de campos. El ajuste de imprimir campos de formulario o un paso de aplanado las imprime junto con el resto de tus respuestas.",
    },
    {
      q: "¿Por qué mi formulario impreso sale cortado por los bordes?",
      a: "Es un desajuste de escala o de tamaño de papel, no un problema de campos. Ajusta la escala a «ajustar» o al 100 % y haz coincidir el tamaño del papel con el del formulario.",
    },
    {
      q: "¿En qué se diferencia esto de los problemas generales de impresión de PDF?",
      a: "Esto cubre problemas propios del formulario — sobre todo valores de campo en blanco. La guía general de impresión de PDF gestiona problemas de todo el documento, como tamaños incorrectos y recortes en cualquier PDF.",
    },
  ],
  related: [
    {
      label: "Cómo imprimir un formulario PDF relleno",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "Cómo solucionar problemas al imprimir un PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    { label: "Cómo corregir errores en un formulario PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
