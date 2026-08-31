import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-government-pdf-forms-on-phone",
  h1: "Cómo rellenar un formulario de la administración en PDF desde el móvil",
  description:
    "Los formularios de la administración suelen ser escaneos planos con un formato muy estricto. Cómo completarlos desde el móvil, lidiar con los campos incómodos y seguir las instrucciones del propio organismo.",
  updated: "2026-06-01",
  intro: [
    "Los formularios PDF de la administración son su propia categoría de incómodos. Muchos son escaneos planos de originales en papel sin campos interactivos, el formato es estricto, y las instrucciones sobre cómo presentarlos no son negociables. La buena noticia es que casi siempre puedes completarlos enteramente desde el móvil — la mala noticia es que hacerlo con pulcritud requiere un poco más de cuidado que un formulario interactivo amigable.",
    "Un par de advertencias honestas por delante: esta guía explica cómo rellenar estos formularios, no si una presentación concreta es válida o se acepta. Los requisitos de cada administración y organismo varían mucho, algunos formularios usan funciones avanzadas que no todas las apps admiten, y las instrucciones del propio organismo emisor siempre tienen prioridad sobre cualquier consejo general. En caso de duda, sigue lo que diga la administración.",
    "Con ese contexto claro, así se completa un formulario de la administración desde el móvil — plano o interactivo —, se colocan las respuestas con limpieza, y se prepara para el método de presentación que exija el organismo.",
  ],
  steps: [
    {
      title: "Lee primero las instrucciones del organismo",
      body: "Los formularios de la administración suelen venir con normas de presentación — formato, requisitos de firma, dónde enviarlo. Léelas antes de rellenar, porque determinan si aplanas, imprimes o subes el archivo, y cómo.",
    },
    {
      title: "Abre el formulario en una app de PDF competente",
      body: "Saca el formulario de cualquier vista previa de correo y llévalo a la app PDF Editor. Detecta los campos interactivos si el formulario los tiene, y te deja colocar texto en la página si es un escaneo plano.",
    },
    {
      title: "Rellena con cuidado y respeta el formato",
      body: "Los formularios de la administración son quisquillosos con los formatos — fechas, números de referencia, casillas por carácter. Haz zoom, coloca el texto con precisión en cada línea, y respeta exactamente el formato que pide el formulario.",
    },
    {
      title: "Gestiona las firmas según se indique",
      body: "Añade una firma electrónica donde el formulario lo permita. Si el organismo exige específicamente una copia firmada a mano en papel, imprime, firma y vuelve a escanear — sigue su requisito en lugar de dar por hecho que basta con una firma escrita.",
    },
    {
      title: "Prepara la presentación que te hayan pedido",
      body: "Aplana el formulario completado para que las respuestas no se puedan desplazar, y presenta por el método del organismo — portal seguro, correo, o impresión y envío postal. Guarda tu propia copia y cualquier confirmación.",
    },
  ],
  tips: [
    "Deja siempre que las instrucciones del organismo prevalezcan sobre los consejos generales — las normas de presentación de los formularios oficiales varían e importan.",
    "Muchos formularios de la administración son escaneos planos, así que espera colocar texto en la página en lugar de escribir en campos.",
    "Haz zoom en los campos con casillas por carácter (una letra por casilla) para que cada carácter caiga en su recuadro.",
    "Guarda una copia de todo lo que presentes, además de cualquier número de referencia o confirmación.",
    "Si un formulario usa funciones dinámicas avanzadas que no se abren bien, prueba con otra app de PDF o pide al organismo un formato alternativo — no fuerces la situación.",
  ],
  mobileNote:
    "La app PDF Editor gestiona los escaneos planos que suelen ser los formularios de la administración: coloca texto y marcas exactamente donde corresponde, añade una firma donde esté permitido, y luego aplana y exporta para subirlo o imprimirlo — todo desde el móvil, en el dispositivo, con los datos personales sensibles fuera de servidores de terceros.",
  faq: [
    {
      q: "¿Puedo rellenar un formulario PDF de la administración desde mi móvil?",
      a: "Normalmente sí. La mayoría se pueden completar desde el móvil — los interactivos escribiendo en los campos, los escaneos planos colocando texto en la página. Sigue siempre las instrucciones de presentación del organismo emisor, que varían según el formulario.",
    },
    {
      q: "¿Por qué un formulario de la administración no me deja escribir en él?",
      a: "Muchos formularios de la administración son escaneos planos de papel sin campos interactivos. Coloca tus respuestas en la página con la herramienta de texto de un editor de PDF en su lugar. Algunos también pueden estar bloqueados o usar funciones que tu lector no admite.",
    },
    {
      q: "¿Se acepta una firma escrita en los formularios de la administración?",
      a: "Depende por completo del organismo y del formulario — los requisitos varían. Algunos aceptan firmas electrónicas; otros exigen una copia firmada a mano. Sigue el requisito que indique el formulario en lugar de darlo por hecho.",
    },
    {
      q: "¿Debo aplanar un formulario de la administración antes de presentarlo?",
      a: "Por lo general sí, para que tus respuestas no se puedan desplazar ni borrar. Pero sigue primero las instrucciones de presentación del organismo — algunos portales quieren un formato específico.",
    },
    {
      q: "¿Es seguro rellenar formularios oficiales desde el móvil?",
      a: "Rellenar en el dispositivo con la app PDF Editor mantiene los datos personales del formulario fuera de servidores de terceros. Para la presentación, usa el canal seguro oficial del organismo en lugar de una web pública.",
    },
  ],
  related: [
    {
      label: "Cómo rellenar un formulario PDF en iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Cómo rellenar un formulario PDF en Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    { label: "El método móvil para formularios PDF", path: "/guides/mobile-pdf-form-workflow" },
    {
      label: "Cómo devolver un formulario PDF relleno",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
