import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Cómo convertir apuntes de clase a PDF (Word, fotos, diapositivas)",
  description:
    "Los apuntes de clase llegan en todos los formatos — documento de Word, presentación, captura de pantalla, foto de la pizarra. Cómo convertir cada uno en un solo PDF legible sin perder la estructura.",
  updated: "2026-05-29",
  intro: [
    "Al final de una semana, los apuntes de una sola asignatura pueden estar repartidos en cinco formatos distintos: un documento de Word que escribiste durante la clase, una presentación de PowerPoint que compartió el profesor, una foto de la pizarra, capturas de pantalla de un vídeo grabado, y un par de páginas manuscritas de cuando se te agotó la batería del portátil.",
    "Todo eso puede — y debería — acabar en un solo PDF por tema o por semana. El PDF gestiona razonablemente bien cualquier formato, se lee en cualquier dispositivo, y no se pierde como sí ocurre con archivos sueltos por todas partes. El truco está en producir el PDF sin perder la estructura de cada fuente original.",
    "Esta guía recorre el camino de conversión de cada formato y luego la estrategia de fusión que produce un único archivo coherente. El objetivo es un material de estudio que realmente puedas usar en época de exámenes.",
  ],
  steps: [
    {
      title: "Convierte los apuntes de Word con Word a PDF",
      body: "Apuntes escritos a máquina en un documento de Word → Word a PDF en tu navegador. Conserva títulos, formato y cualquier captura de pantalla incrustada. Exporta a tamaño completo; comprime más tarde.",
    },
    {
      title: "Exporta las presentaciones como PDF",
      body: "PowerPoint y Keynote exportan directamente a PDF. Usa el menú de exportación, no capturas de pantalla. La versión en PDF mantiene el texto seleccionable y se ve nítida en cualquier nivel de zoom.",
    },
    {
      title: "Convierte fotos y capturas con Imagen a PDF",
      body: "Fotos de la pizarra, capturas de pantalla de grabaciones → Imagen a PDF las combina en un solo PDF. Define el orden antes de importarlas; reordenarlas después cuesta más trabajo.",
    },
    {
      title: "Escanea las páginas manuscritas",
      body: "Escanear a PDF desde el móvil con escala de grises y detección de bordes produce escaneos limpios de varias páginas. Salen más nítidos y más pequeños que unas fotos cualquiera.",
    },
    {
      title: "Fusiona en un solo PDF por tema",
      body: "Fusionar PDF combina todos los formatos en un único archivo ordenado. El orden importa: cronología del día de clase, o estructura lógica (diapositivas de introducción → apuntes de clase → fotos de la pizarra → resumen). Elige uno y mantente fiel a él.",
    },
    {
      title: "Añade una portada y un índice",
      body: "Una portada escrita a máquina (asignatura, semana, tema) hace que el archivo se explique solo dentro de seis meses. Para PDF compilados largos (más de 30 páginas), incluye un índice de una sola página.",
    },
  ],
  tips: [
    "Resiste la tentación de hacer capturas de pantalla de las presentaciones. Usa la exportación a PDF de la propia presentación — sale más nítida y el texto se mantiene buscable.",
    "Fotografía la pizarra en escuadra, no en ángulo. La corrección automática puede arreglar una inclinación moderada, pero una foto tomada en escuadra siempre sale más limpia.",
    "Si una grabación tiene momentos clave, haz captura de esos fotogramas concretos en lugar del vídeo entero. El PDF se mantiene manejable.",
    "No fusiones entre semanas distintas. Un PDF por semana mantiene los archivos manejables; un PDF por semestre es ilegible.",
    "Comprime el PDF fusionado final solo cuando termine el semestre. Durante el curso, conserva la copia legible para el estudio activo.",
  ],
  mobileNote:
    "Buena parte de la conversión de apuntes de clase sucede en el móvil: fotografiar la pizarra, escanear una página manuscrita, hacer captura de las diapositivas. La app PDF Editor gestiona la conversión y la fusión desde el móvil, produciendo un PDF limpio por semana antes de que el archivo salga siquiera del teléfono.",
  faq: [
    {
      q: "¿Debería conservar los apuntes en su formato original o convertirlos?",
      a: "Las dos cosas. Conserva los originales editables para repasar; produce una copia en PDF por tema para estudiar. El PDF no sustituye a la fuente — es un material de estudio.",
    },
    {
      q: "¿Cuál es la mejor forma de fusionarlos?",
      a: "Fusionar PDF en tu navegador. Define el orden antes de fusionar; reordenar después es técnicamente posible pero más lento.",
    },
    {
      q: "¿Debería aplicar OCR a los escaneos manuscritos?",
      a: "Si tu herramienta lo ofrece, sí — unos apuntes manuscritos con texto buscable son más útiles en época de exámenes. El OCR sobre letra manuscrita no es perfecto; trata ese texto buscable como aproximado.",
    },
    {
      q: "¿Qué tamaño deberían tener los PDF de apuntes semanales?",
      a: "El que produzca la semana de forma natural. Comprime al final del semestre para archivar; durante el curso, prioriza la legibilidad sobre el tamaño.",
    },
    {
      q: "¿Puedo hacer todo esto desde el móvil?",
      a: "Sí. La app PDF Editor gestiona cada formato y los fusiona en el propio dispositivo. Útil cuando no quieres que los apuntes esperen a que tengas el portátil a mano.",
    },
  ],
  related: [
    { label: "Convertidor PDF — conversiones a Word, JPG, PNG", path: "/pdf-converter" },
    { label: "Imagen a PDF — fotos de pizarra y capturas de pantalla", path: "/image-to-pdf" },
    { label: "Cómo escanear apuntes a mano a PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Cómo organizar tu material de estudio en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "Convertidor PDF — Word, JPG, PNG y viceversa", path: "/pdf-converter" },
};

export default content;
