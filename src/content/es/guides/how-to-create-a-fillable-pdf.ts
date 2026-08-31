import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Cómo crear un PDF rellenable — opciones honestas y sus límites",
  description:
    "Lo que hace falta de verdad para conseguir un PDF que otros puedan rellenar — campos interactivos de verdad frente a una plantilla simple no interactiva — y qué enfoque encaja con las herramientas que tienes.",
  updated: "2026-06-01",
  intro: [
    "Hay dos formas honestas de conseguir un PDF que la gente pueda rellenar, y son muy distintas en esfuerzo y resultado. La vía cuidada es un formulario interactivo de verdad: un PDF con campos reales — cuadros de texto, casillas de verificación, desplegables — que los destinatarios tocan y en los que escriben. La vía más sencilla es una plantilla no interactiva: un PDF limpio y bien espaciado, con líneas y etiquetas claras, que la gente completa añadiendo texto por encima.",
    "Merece la pena ser claro desde el principio: construir campos de formulario interactivos de verdad suele necesitar software dedicado al diseño de formularios, y el resultado puede seguir comportándose de forma distinta según el lector de PDF. Una plantilla no interactiva, en cambio, se puede crear con casi cualquier herramienta de documentos y funciona de forma fiable en todas partes, a costa de que los destinatarios tengan que trabajar un poco más para colocar sus respuestas.",
    "Esta guía cubre los dos enfoques, cuándo tiene sentido cada uno, y cómo diseñar cualquiera de los dos para que el formulario terminado sea fácil de completar. No pretende que una herramienta de navegador pueda conjurar campos interactivos complejos que no puede — en su lugar, te señala el método que encaja con lo que realmente tienes.",
  ],
  steps: [
    {
      title: "Parte de una maquetación limpia y bien espaciada",
      body: "Diseña primero el formulario en una herramienta de documentos: etiquetas claras, espacio generoso en blanco para las respuestas, casillas de verificación evidentes y una línea de firma. Un buen espaciado importa tanto en la versión interactiva como en la no interactiva.",
    },
    {
      title: "Decide: campos interactivos o plantilla no interactiva",
      body: "Si los destinatarios lo van a rellenar a menudo y quieres una experiencia cuidada de tocar y escribir, apunta a campos interactivos. Si necesitas algo rápido que funcione en cualquier lector, una plantilla no interactiva es la opción pragmática.",
    },
    {
      title: "Para una plantilla no interactiva, exporta a PDF",
      body: "Exporta tu documento maquetado directamente a PDF. Las líneas y las etiquetas se convierten en la página; los destinatarios añaden texto por encima con cualquier editor de PDF. Esto funciona desde casi cualquier herramienta que ya uses.",
    },
    {
      title: "Para campos interactivos, usa software de diseño de formularios",
      body: "Crear campos de texto, casillas de verificación y desplegables reales necesita software pensado para ello. Añade cada campo sobre la maquetación, dale un nombre claro y define su tipo. Cuenta con probar el resultado en más de un lector.",
    },
    {
      title: "Prueba el formulario antes de enviarlo",
      body: "Abre tu formulario tal como lo harán los destinatarios — en un móvil y en un ordenador. Rellénalo tú mismo de principio a fin. Corrige cualquier campo demasiado pequeño, mal etiquetado o que no coincida con su línea antes de distribuirlo.",
    },
  ],
  tips: [
    "Una plantilla no interactiva limpia que se rellena de forma fiable en todas partes suele ganar a un formulario interactivo vistoso que falla en algunos lectores.",
    "Deja más espacio de respuesta del que crees necesario — los campos apretados son la queja número uno sobre los formularios.",
    "Nombra los campos interactivos con sentido; ayuda tanto a completarlos como a cualquier procesamiento posterior de las respuestas.",
    "Evita las funciones dinámicas avanzadas a menos que sepas que el software de tus destinatarios las admite — algunos lectores de PDF no lo hacen.",
    "Sea cual sea el camino que elijas, rellena tú mismo el formulario primero; detectarás los detalles incómodos que ninguna revisión de diseño saca a la luz.",
  ],
  mobileNote:
    "Los destinatarios pueden completar tu formulario en el móvil con la app PDF Editor, sea interactivo o no interactivo — toca campos reales y deja colocar texto en plantillas no interactivas. Si estás construyendo una plantilla no interactiva, pruébala en la app en un móvil para confirmar que los espacios de respuesta son lo bastante grandes para escribir con el pulgar.",
  faq: [
    {
      q: "¿Puedo crear un PDF rellenable gratis?",
      a: "Puedes hacer una plantilla plana rellenable gratis desde casi cualquier herramienta de documentos exportando a PDF — los destinatarios añaden texto por encima. Construir campos interactivos de verdad suele necesitar software dedicado al diseño de formularios.",
    },
    {
      q: "¿Cuál es la diferencia entre un PDF rellenable interactivo y uno no interactivo?",
      a: "Un PDF interactivo tiene campos reales que la gente toca y en los que escribe. Una plantilla no interactiva es una página limpia donde la gente coloca su propio texto. El interactivo queda más cuidado; el no interactivo es más simple de crear y funciona en cualquier lector.",
    },
    {
      q: "¿Los formularios PDF interactivos funcionan en todas partes?",
      a: "No siempre. Los campos estándar tienen amplia compatibilidad, pero el aspecto de un formulario y sus funciones avanzadas pueden variar entre lectores de PDF, y los formularios dinámicos puede que no se abran en absoluto en algunas apps. Pruébalos antes de confiar en ellos.",
    },
    {
      q: "¿Qué enfoque debería elegir?",
      a: "Si el formulario se va a reutilizar mucho y quieres una experiencia cuidada, invierte en campos interactivos. Si necesitas tenerlo hecho de forma rápida y fiable, una plantilla no interactiva bien diseñada es la apuesta más segura.",
    },
    {
      q: "¿Cómo hago que una plantilla no interactiva sea fácil de rellenar?",
      a: "Usa etiquetas claras, espacio en blanco generoso, líneas o casillas visibles para cada respuesta, y una zona de firma evidente. Después rellénala tú mismo una vez para confirmar que todo tiene sitio.",
    },
  ],
  related: [
    { label: "¿Qué es un formulario PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Cómo funcionan los formularios PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Buenas prácticas para formularios PDF", path: "/guides/pdf-form-best-practices" },
    {
      label: "Cómo compartir un formulario PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
