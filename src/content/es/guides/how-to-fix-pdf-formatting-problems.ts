import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Cómo corregir problemas de formato en un PDF (saltos de línea, márgenes, espaciado)",
  description:
    "Cuando la maquetación de un PDF se ve rota — texto que se recoloca, márgenes descuadrados, espaciado incoherente — la solución suele estar en el documento de origen, no en el PDF. El método más limpio para conseguir una buena exportación.",
  updated: "2026-05-29",
  intro: [
    "Un mal formato en un PDF casi siempre se remonta al momento de la exportación. El propio PDF no recoloca nada — bloquea la página exactamente como estaba en el momento de guardarla. Así que si el espaciado está mal, los márgenes están descuadrados o una tabla se rompió entre páginas, el archivo de origen ya estaba produciendo ese resultado.",
    "La solución, casi siempre, es volver al origen — Word, Pages, Google Docs, una herramienta de diseño — ajustar la maquetación y volver a exportar. Es frustrante cuando el origen no es tuyo, pero es el camino más limpio. Las alternativas — convertir a Word, editar el PDF directamente, o «arreglarlo» con otro lector — pierden algo que tenía el original.",
    "Esta guía repasa los síntomas de formato habituales y la solución realista para cada uno, incluyendo los métodos que producen PDF limpios desde la primera vez.",
  ],
  steps: [
    {
      title: "Identifica si es un problema de contenido o de renderizado",
      body: "Abre el PDF en dos lectores distintos. Si ambos muestran la misma maquetación rota, el archivo es el origen del problema. Si uno lo renderiza bien, tienes un problema de lector, no de formato.",
    },
    {
      title: "Corrige la maquetación en el documento de origen, no en el PDF",
      body: "Abre el archivo de Word, Pages o Docs, corrige los márgenes, el espaciado o la tabla, y vuelve a exportar a PDF. El origen corregido produce directamente un PDF corregido. Editar un PDF para parchear la maquetación va contra el propio formato.",
    },
    {
      title: "Vuelve a exportar con el tamaño de papel explícito",
      body: "Los ajustes de autoajuste suelen dar sorpresas. Fija el tamaño de papel (Carta o A4), los márgenes (1 pulgada o 25 mm) y la orientación de forma explícita en la aplicación de origen antes de exportar.",
    },
    {
      title: "Convierte a Word solo para reescrituras extensas de texto",
      body: "PDF a Word en tu navegador extrae el texto para volver a editarlo. La conversión pierde algo de maquetación — acéptalo como el precio de recuperar la edición de texto. Después de limpiarlo, vuelve a exportar a PDF para compartirlo.",
    },
    {
      title: "Usa herramientas a nivel de página para arreglos estructurales",
      body: "Si solo algunas páginas están mal — un escaneo desordenado, una portada duplicada, una inserción de lado — Reordenar páginas PDF, Extraer páginas PDF y Girar PDF arreglan la estructura sin tocar el formato del texto.",
    },
    {
      title: "Vuelve a exportar a PDF antes de compartir",
      body: "Una vez corregida la maquetación en el origen, exporta de nuevo en vez de volver a guardar un PDF ya existente. La exportación más limpia sale directamente de la aplicación que creó el documento.",
    },
  ],
  tips: [
    "La vista previa de impresión en Word o Pages muestra el mismo comportamiento de salto de página que tendrá el PDF. Corrige los saltos mal colocados antes de exportar, no después.",
    "Las tablas que se dividen mal son un problema de formato de párrafo en el origen, no un problema de PDF. Usa «mantener con el siguiente» para vincular una fila de cabecera con su contenido.",
    "No abras un PDF en Word para editarlo — Word lo convierte, a menudo mal. Usa el origen original si lo tienes, o PDF a Word solo cuando no lo tengas.",
    "El contenido pegado desde la web suele traer formato de fondo. Elimínalo antes de exportar (pega como texto sin formato) para evitar bordes y colores sorpresa en el PDF.",
    "Si solo tienes el PDF y no puedes volver al origen, acepta que la limpieza de la maquetación será parcial. Prioriza los cambios que el lector notará primero.",
  ],
  mobileNote:
    "Los problemas de formato de PDF en el móvil suelen venir de documentos creados en el ordenador y exportados con el papel objetivo equivocado. La app PDF Editor te deja girar, reordenar y recortar páginas en el móvil — útil para limpiar problemas estructurales aunque no puedas corregir el origen.",
  faq: [
    {
      q: "¿Por qué mi PDF se ve distinto de la versión en Word?",
      a: "Normalmente por las fuentes, el tamaño de papel o los ajustes de área de impresión durante la exportación. Volver a exportar con el tamaño de papel explícito y las fuentes incrustadas produce un PDF que coincide con el origen.",
    },
    {
      q: "¿Puedo editar texto en un PDF para arreglar el espaciado?",
      a: "Puedes editar caracteres y palabras sueltas, pero recolocar párrafos es difícil porque los PDF tratan el texto como bloques posicionados. Corrígelo en el origen si es posible.",
    },
    {
      q: "¿Por qué mi PDF convertido a Word se ve roto?",
      a: "Los PDF codifican la maquetación, no el flujo. La conversión los devuelve a flujo pero se pierden las pistas estructurales. Espera tener que hacer una limpieza real en un archivo convertido.",
    },
    {
      q: "¿Por qué mis tablas se dividen de forma extraña entre páginas?",
      a: "Casi siempre un problema de formato de párrafo en el origen. Los ajustes «mantener con el siguiente» y «no dividir entre páginas» de Word arreglan la mayoría de las divisiones antes de exportar.",
    },
    {
      q: "¿Comprimir afecta al formato?",
      a: "No. La compresión afecta a las imágenes, no a la maquetación. Un PDF comprimido tiene el mismo formato que el original — solo con las imágenes incrustadas más pequeñas.",
    },
  ],
  related: [
    { label: "PDF a Word — convierte para correcciones amplias de texto", path: "/pdf-to-word" },
    { label: "Word a PDF — vuelve a exportar con limpieza", path: "/word-to-pdf" },
    { label: "Cómo corregir problemas de fuente en un PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Cómo solucionar problemas al imprimir un PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
