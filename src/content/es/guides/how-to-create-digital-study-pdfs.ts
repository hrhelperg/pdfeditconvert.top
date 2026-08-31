import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Cómo crear tus propios PDF de estudio (fichas, resúmenes, dosieres)",
  description:
    "Construye tus propios PDF de estudio a partir de apuntes, diapositivas y subrayados: con texto buscable, portátiles, listos para anotar en la tablet. La estructura que los hace útiles de verdad en época de exámenes.",
  updated: "2026-05-29",
  intro: [
    "Un PDF de estudio hecho por ti mismo es una de las mejores herramientas que puedes tener para un examen. Es más pequeño que el conjunto completo de apuntes semanales, más estructurado que un hilo de chat lleno de consejos de repaso, y más portátil que unas fichas de papel. Lo abres en la tablet durante un descanso de estudio, en una cafetería, en el portátil de la biblioteca — mismo archivo, mismas anotaciones, mismo texto buscable en todos los sitios.",
    "Pero un PDF de estudio solo compensa el esfuerzo si está bien estructurado. Volcar todas las clases en un solo archivo lo hace inutilizable; un dosier de resumen bien construido es el documento que de verdad abres tres veces por semana antes del examen final. La diferencia está en cómo lo construyes.",
    "Esta guía recorre la estructura que funciona: qué incluir, qué dejar fuera, cómo organizarlo para una lectura rápida frente a una lectura a fondo, y cómo mantener el tamaño del archivo manejable en la tablet. Da por hecho que partes de apuntes semanales, diapositivas y subrayados ya existentes, no de cero.",
  ],
  steps: [
    {
      title: "Decide el alcance antes de construirlo",
      body: "Un PDF de estudio por asignatura, uno por examen importante (parcial, final), o uno por tema: elige la granularidad que encaje con tu forma real de estudiar. Varios PDF pequeños y centrados ganan a un único dosier gigante.",
    },
    {
      title: "Construye una portada clara y un índice",
      body: "Código de la asignatura, nombre del examen, fecha, temas tratados. Un índice de una sola página al principio. Ambos son breves — cinco minutos de trabajo que triplican lo fácil que es navegar por el documento.",
    },
    {
      title: "Extrae las diapositivas y los apuntes clave",
      body: "Extraer páginas de PDF saca solo las diapositivas y las páginas de apuntes que de verdad necesitas de los paquetes semanales más grandes. No incluyas el semestre entero — solo las partes que importan para este examen.",
    },
    {
      title: "Fusiona en un orden coherente",
      body: "Fusionar PDF combina los extractos en el orden de estudio: cronológico, conceptual, o según el peso que tenga cada tema en el examen. Usa el orden en el que vas a repasar.",
    },
    {
      title: "Anota con antelación",
      body: "Subraya de antemano los términos clave, las fórmulas y los conceptos. La anotación funciona mejor durante el repaso cuando no tienes que ir subrayando a la vez en tiempo real.",
    },
    {
      title: "Comprime para que sea portátil en la tablet",
      body: "Comprimir PDF deja el dosier de estudio en un tamaño cómodo para la tablet — normalmente por debajo de 20 MB. Los archivos más pequeños cargan rápido, se desplazan con suavidad y no agotan la batería en sesiones largas de estudio.",
    },
  ],
  tips: [
    "No busques la exhaustividad. El PDF de estudio complementa los apuntes completos; no los sustituye. Deja el detalle en los paquetes semanales.",
    "Incluye al final una o dos páginas de chuleta con fórmulas, fechas, nombres — todo lo que necesites recordar de memoria el día del examen.",
    "Refleja la estructura del examen. Si el examen es de respuesta corta más redacción, estructura el dosier igual, para que el repaso se corresponda con el formato de la prueba.",
    "No comprimas en exceso. Algunos artefactos de texto con compresión fuerte dificultan la lectura en sesiones largas de estudio. La compresión media suele ser el equilibrio correcto.",
    "Reexporta después de una sesión de anotación importante, para que las marcas queden como contenido legible y no solo como una capa superpuesta.",
  ],
  mobileNote:
    "La tablet y el móvil son donde de verdad se usan los PDF de estudio. La app PDF Editor permite anotar, subrayar y buscar en el archivo que has construido, convirtiendo el dosier de estudio en una herramienta de repaso interactiva estés donde estés.",
  faq: [
    {
      q: "¿Cuánto debería medir un PDF de estudio?",
      a: "Lo que puedas releer de verdad en dos o tres sesiones. Para la mayoría de las asignaturas son entre 30 y 80 páginas. Más de 100 y acabarás saltándote la mitad.",
    },
    {
      q: "¿Debería incluir todas las diapositivas o solo las clave?",
      a: "Las clave. Incluirlo todo diluye el valor del dosier. Elige las diapositivas que explican los conceptos que peor dominas.",
    },
    {
      q: "¿Las fichas digitales son mejores que las de papel?",
      a: "Para la mayoría de estudiantes, sí. Tienen texto buscable, son portátiles y aguantan una caída o un derrame sin problema. Las apps de repetición espaciada añaden una capa más.",
    },
    {
      q: "¿Debería compartir mi PDF de estudio con el grupo?",
      a: "Es opcional. Algunas personas estudian mejor con su propio dosier; otras se benefician de uno compartido. Prueba las dos formas y comprueba cuál te da mejor retención.",
    },
    {
      q: "¿Con cuánta antelación debería construirlo?",
      a: "Entre dos y tres semanas antes del examen. Antes de eso falta contenido; después no te da tiempo a estudiarlo.",
    },
  ],
  related: [
    { label: "PDF para estudiantes — apuntes y guías de estudio", path: "/pdf-for-students" },
    { label: "Fusionar PDF — arma dosieres de estudio", path: "/merge-pdf" },
    { label: "Cómo organizar tu material de estudio en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Método PDF para estudiantes universitarios", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF para estudiantes — apuntes, subrayados, guías de estudio", path: "/pdf-for-students" },
};

export default content;
