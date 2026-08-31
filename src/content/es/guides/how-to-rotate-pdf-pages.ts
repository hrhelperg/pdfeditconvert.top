import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Cómo girar las páginas de un PDF (gratis, sin subir nada)",
  description:
    "Gira todas las páginas de un PDF o solo algunas, 90, 180 o 270 grados, en tu navegador. Arregla escaneos apaisados y páginas del revés para que el documento se lea bien.",
  updated: "2026-05-23",
  intro: [
    "Un PDF que se abre de lado es una molestia pequeña pero constante. Ladeas la cabeza, o giras el móvil una y otra vez mientras la página gira con él. La solución es girar la propia página para que quede guardada en vertical — así se lee bien para todos, en cualquier dispositivo, sin que nadie tenga que torcer el cuello.",
    "Esta guía usa la herramienta gratuita Girar PDF, que gira todas o algunas páginas 90, 180 o 270 grados, directamente en tu navegador y sin subir nada. Es la solución correcta tanto si una sola página está mal como si el documento entero salió del escáner en apaisado.",
    "Girar es un cambio permanente en cómo se guarda la página, así que veremos cómo aplicarlo solo a las páginas que lo necesitan y cómo confirmar el resultado antes de guardar.",
  ],
  steps: [
    {
      title: "Abre la herramienta Girar PDF",
      body: "Ve a la herramienta Girar PDF en tu navegador. Funciona en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. La herramienta muestra las páginas para que veas cuáles están mal.",
    },
    {
      title: "Decide qué páginas girar",
      body: "Gira todas las páginas, o solo las que están mal — una única tabla apaisada en un informe por lo demás en vertical, por ejemplo. Anota qué páginas y en qué dirección.",
    },
    {
      title: "Elige el grado de rotación",
      body: "Elige 90° para una página tumbada de lado, 180° para una página del revés, o 270° para una girada al otro lado. Aplícalo a las páginas elegidas.",
    },
    {
      title: "Comprueba que todas las páginas quedan en vertical",
      body: "Confirma que las páginas corregidas ahora se leen con normalidad y que no has girado por accidente ninguna que ya estaba bien.",
    },
    {
      title: "Descarga el PDF corregido",
      body: "Exporta el archivo girado y guárdalo con un nombre claro. El original se mantiene intacto por si necesitas empezar de nuevo.",
    },
  ],
  tips: [
    "Gira solo las páginas que están mal. Aplicar una rotación general a un documento donde la mayoría de páginas está bien solo crea problemas nuevos.",
    "Las páginas apaisadas — tablas anchas, gráficos, hojas de cálculo exportadas a PDF — a menudo están pensadas para ser apaisadas. Gira solo si el contenido está realmente de lado, no si es correctamente ancho.",
    "Si las páginas están desordenadas y giradas a la vez, corrige primero la rotación y luego reordena — es más fácil juzgar la secuencia cuando todas las páginas están en vertical.",
    "Girar antes de unir hace que el documento combinado esté correcto desde el principio, sin sorpresas de páginas de lado escondidas en medio.",
    "Conserva el original. Si giras en la dirección equivocada, es más rápido rehacerlo desde el archivo intacto que girar de un lado a otro.",
  ],
  mobileNote:
    "Es más probable que los escaneos de lado ocurran en el móvil, y ahí es también donde se corrigen más rápido. La app PDF Editor gira las páginas con un toque y funciona sin conexión, así que puedes enderezar un documento recién escaneado antes de que salga del dispositivo.",
  faq: [
    {
      q: "¿Puedo girar solo una página?",
      a: "Sí. Selecciona solo las páginas que están mal y gira esas, dejando el resto del documento como está.",
    },
    {
      q: "¿Qué rotación debería elegir?",
      a: "90° para una página tumbada de lado, 180° para una página del revés, y 270° para una girada al otro lado. Elige el grado que ponga el contenido en vertical.",
    },
    {
      q: "¿Es permanente la rotación?",
      a: "Se guarda en el archivo exportado, así que la página se lee en vertical en todas partes. Tu original se mantiene intacto, así que siempre puedes rehacerlo si hace falta.",
    },
    {
      q: "¿Se sube mi PDF?",
      a: "No. La rotación se ejecuta en tu navegador, en tu dispositivo, así que el archivo nunca sale de él.",
    },
    {
      q: "Mi escaneo está de lado y desordenado — ¿qué hago primero?",
      a: "Gira primero las páginas a vertical, y después usa la herramienta Reordenar páginas de PDF para corregir la secuencia. Juzgar el orden es más fácil una vez todo está en la orientación correcta.",
    },
  ],
  related: [
    { label: "Girar PDF — corrige la orientación en tu navegador", path: "/rotate-pdf" },
    { label: "Reordenar páginas de PDF — corrige la secuencia", path: "/reorder-pdf-pages" },
    { label: "Cómo corregir páginas de un PDF torcidas", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "Cómo reordenar las páginas de un PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Girar PDF", path: "/rotate-pdf" },
};

export default content;
