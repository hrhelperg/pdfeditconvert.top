import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Problemas de formato en un formulario PDF (alineación y desbordamiento)",
  description:
    "¿Campos descolocados, respuestas que se salen, el formulario distinto en la pantalla de otra persona? Los problemas de maquetación que varían según el lector, y cómo conseguir un resultado uniforme.",
  updated: "2026-06-01",
  intro: [
    "Un formulario puede verse perfecto en tu pantalla y llegar con un aspecto incorrecto a la de otra persona — campos desplazados de su línea, respuestas que se salen de su casilla, casillas de verificación desalineadas, toda la maquetación ligeramente desplazada. Como cada lector dibuja los campos de formulario en lugar de que estén fijados en la página, su aspecto exacto puede variar, y esa es la raíz de la mayoría de las quejas sobre el formato de los formularios.",
    "Esto es distinto de los problemas generales de formato en PDF, que normalmente se deben a los márgenes y el espaciado del documento de origen. Los problemas de formato de formulario tienen que ver con la capa de campos: cómo se colocan los campos respecto a la página, cómo encajan las respuestas dentro de ellos, y con qué consistencia se renderiza eso entre distintas apps. Las soluciones son correspondientemente específicas de los formularios.",
    "Esta guía cubre los problemas habituales de maquetación de formularios, por qué ocurren, y el remedio único más fiable — aplanar — que hace que un formulario se vea igual en todas partes.",
  ],
  steps: [
    {
      title: "Confirma que es una diferencia de lector",
      body: "Abre el formulario en dos apps de PDF distintas. Si la maquetación se desplaza entre ellas, el problema es el renderizado de los campos, no el archivo — cada lector está dibujando los campos de forma ligeramente distinta.",
    },
    {
      title: "Corrige las respuestas que desbordan sus campos",
      body: "Si el texto se sale del borde de un campo, el campo es demasiado pequeño o la respuesta demasiado larga. En un formulario que controles, amplía el campo; al rellenar, mantén las respuestas dentro del espacio visible o confía en el tamaño automático.",
    },
    {
      title: "Realinea los campos desplazados de su línea",
      body: "Los campos que se desplazan por encima o por debajo de sus etiquetas suelen significar que las posiciones de los campos no coinciden con la página que hay debajo. Si es tu formulario, reposiciona los campos; si no, añadir texto por encima puede ser más fiable que forcejear con el campo desalineado.",
    },
    {
      title: "Aplana para un resultado consistente",
      body: "Aplanar fusiona los campos con la página, fijando su posición y su aspecto. Después de aplanar, el formulario se ve idéntico en todos los lectores — el remedio más fiable para una maquetación que varía.",
    },
    {
      title: "Prefiere una plantilla no interactiva cuando la consistencia sea crítica",
      body: "Si un formulario debe verse igual para todo el mundo, una plantilla no interactiva bien diseñada (sin capa de campos interactiva) evita por completo las diferencias de renderizado entre lectores.",
    },
  ],
  tips: [
    "Abre el formulario en dos apps para confirmar que un problema de maquetación es renderizado del lector y no un archivo dañado.",
    "Aplanar es la solución más fiable — fija las posiciones y el aspecto de los campos en la página para todos los lectores.",
    "Al rellenar un formulario con campos desalineados, colocar texto por encima puede caer con más precisión que forcejear con el campo.",
    "Si estás construyendo un formulario que debe verse idéntico en todas partes, una plantilla no interactiva evita las diferencias de renderizado de campos.",
    "El aspecto de un formulario puede variar entre lectores de PDF por diseño, así que «se ve mal en su pantalla» suele ser renderizado, no corrupción.",
  ],
  mobileNote:
    "La app PDF Editor te deja aplanar un formulario completado para fijar su maquetación antes de enviarlo, así no se desplaza en la pantalla del destinatario. Para formularios con campos incómodos, también puedes colocar texto con precisión en la página y aplanar — un resultado consistente en cualquier dispositivo.",
  faq: [
    {
      q: "¿Por qué mi formulario PDF se ve distinto en la pantalla de otra persona?",
      a: "Cada lector dibuja los campos de formulario, así que su posición y aspecto pueden variar entre apps. Aplanar el formulario fusiona los campos con la página para que se vea idéntico en todas partes.",
    },
    {
      q: "¿Por qué mis respuestas desbordan las casillas del campo?",
      a: "El campo es demasiado pequeño para la respuesta, o la respuesta es demasiado larga. Amplía el campo en un formulario que controles, mantén las respuestas dentro del espacio visible, o confía en el tamaño automático para que encajen.",
    },
    {
      q: "¿Cómo corrijo campos que están desplazados de su línea?",
      a: "Las posiciones de los campos no coinciden con la página de debajo. Reposiciona los campos si es tu formulario; si no, colocar tu texto directamente en la página puede ser más fiable que el campo desalineado.",
    },
    {
      q: "¿Cuál es la forma más fiable de mantener consistente la maquetación de un formulario?",
      a: "Aplánalo. Aplanar fija el aspecto de los campos en la página para que se renderice igual en cualquier lector. En los formularios que construyas, una plantilla no interactiva evita el problema desde el principio.",
    },
    {
      q: "¿En qué se diferencia esto de los problemas generales de formato en PDF?",
      a: "Esto trata de la capa de campos — alineación, desbordamiento, renderizado del lector. Los problemas generales de formato en PDF suelen venir de los márgenes y el espaciado del documento de origen, no de sus campos de formulario.",
    },
  ],
  related: [
    {
      label: "Cómo corregir problemas de formato en un PDF",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "Problemas de fuente en un formulario PDF",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "Problemas de compatibilidad en formularios PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Buenas prácticas para formularios PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
