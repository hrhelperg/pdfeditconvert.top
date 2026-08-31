import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Cómo corregir páginas de un PDF torcidas o al revés",
  description:
    "Endereza de forma permanente las páginas de un PDF que se abren de lado o al revés, en tu navegador. Por qué girar la pantalla no ayuda y qué lo arregla de verdad.",
  updated: "2026-05-23",
  intro: [
    "Abres un PDF y una página está tumbada de lado. La giras en el visor, parece que queda bien — y entonces lo envías, y el destinatario vuelve a verla de lado. Esa es la trampa: girar en un visor a menudo solo cambia cómo la ves tú, no cómo está guardada la página. Para arreglarlo de verdad para todos, hay que girar la propia página y guardar el cambio.",
    "Esta guía hace exactamente eso con la herramienta gratuita Girar PDF, que gira las páginas 90, 180 o 270 grados y graba la corrección en un archivo nuevo, todo en tu navegador y sin subir nada. Tanto si una sola página está mal como si todo un escaneo salió en apaisado, esta es la solución permanente.",
    "También veremos por qué las páginas acaban de lado en primer lugar, para que puedas evitarlo desde el origen — normalmente un escáner o un móvil sostenido en la orientación equivocada.",
  ],
  steps: [
    {
      title: "Abre la herramienta Girar PDF",
      body: "Ve a la herramienta Girar PDF en tu navegador. Guarda la rotación en el propio archivo, así que la corrección se mantiene para cualquier visor — sin subida, sin cuenta.",
    },
    {
      title: "Añade el PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. La herramienta muestra las páginas para que veas cuáles están de lado o al revés.",
    },
    {
      title: "Localiza las páginas afectadas",
      body: "Anota qué páginas están mal y cuánto se desvían — un cuarto de vuelta, media vuelta. En un escaneo largo puede que sea cada página; en un informe, quizá solo una tabla ancha.",
    },
    {
      title: "Gira hasta ponerlas en vertical",
      body: "Aplica 90° a una página de lado, 180° a una página del revés, o 270° a una girada al otro lado, hasta que el contenido se lea con normalidad.",
    },
    {
      title: "Verifica y después descarga",
      body: "Confirma que cada página corregida está en vertical y que no has alterado ninguna que ya estaba bien, y luego exporta el PDF corregido.",
    },
    {
      title: "Corrígelo en el origen la próxima vez",
      body: "Las páginas de lado suelen venir de un escáner que alimenta las páginas en apaisado o de un móvil sostenido en la orientación equivocada. Ajustar la orientación del escaneo o cómo sostienes el móvil evita que el problema se repita.",
    },
  ],
  tips: [
    "Girar en un visor de PDF a menudo solo cambia tu vista, no el archivo guardado — por eso la página vuelve a verse de lado para el destinatario. Guardar una copia girada es lo que realmente lo arregla.",
    "Gira solo las páginas que están genuinamente mal. Una tabla apaisada correctamente ancha (una hoja de cálculo, un gráfico) está pensada para ser así; girarla empeora las cosas.",
    "Si todo el escaneo está en apaisado, una sola rotación de 90° aplicada a todas las páginas suele arreglarlo de una vez.",
    "Corrige la rotación antes de reordenar o unir — es mucho más fácil juzgar la secuencia y combinar documentos cuando todas las páginas están en vertical.",
    "Conserva el original. Girar de más es fácil que ocurra; rehacerlo desde el archivo intacto es más rápido que girar de un lado a otro.",
  ],
  mobileNote:
    "Las páginas de lado casi siempre se originan en un móvil, y ese es el lugar más rápido para arreglarlas. La app PDF Editor gira las páginas con un toque y guarda la corrección en el archivo, sin conexión — así un documento recién escaneado queda en vertical antes de que salga de tus manos.",
  faq: [
    {
      q: "¿Por qué la página se ve corregida para mí pero de lado para otros?",
      a: "Girar en un visor normalmente solo cambia tu vista en pantalla, no cómo está guardada la página. Para arreglarlo para todos, gira la página y guarda un archivo nuevo — que es justo lo que hace la herramienta Girar PDF.",
    },
    {
      q: "¿Cuánto debería girar?",
      a: "90° para una página de lado, 180° para una página del revés, 270° para una girada al otro lado. Elige el grado que ponga el contenido en vertical.",
    },
    {
      q: "¿Corregir la rotación reduce la calidad?",
      a: "No. Girar solo cambia la orientación; el contenido y la resolución de la página no se alteran.",
    },
    {
      q: "¿Se sube mi archivo?",
      a: "No. La rotación se ejecuta en tu navegador, en tu dispositivo, así que el archivo se mantiene privado.",
    },
    {
      q: "¿Cómo evito que las páginas se escaneen de lado?",
      a: "Configura tu escáner para detectar o respetar la orientación de la página, o sostén el móvil de forma que la página llene el encuadre en vertical. Corregirlo en el momento de la captura ahorra el paso de rotación después.",
    },
  ],
  related: [
    { label: "Girar PDF — endereza páginas en tu navegador", path: "/rotate-pdf" },
    { label: "Cómo girar las páginas de un PDF", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Cómo escanear un documento a PDF con el móvil", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cómo reordenar las páginas de un PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Girar PDF", path: "/rotate-pdf" },
};

export default content;
