import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Cómo solucionar problemas al imprimir un PDF (páginas cortadas, tamaño incorrecto, texto que falta)",
  description:
    "Cuando un PDF se imprime recortado, mal escalado o sin parte del texto, la solución depende del síntoma. Una tabla corta que relaciona cada problema con el ajuste correcto.",
  updated: "2026-05-29",
  intro: [
    "El PDF se creó para que un documento se viera igual en todas partes — incluido el papel. Así que cuando uno imprime mal, casi siempre es cosa del trabajo de impresión, no del archivo. La página es más grande que el papel, la impresora está reduciendo la escala, una fuente no está incrustada, una marca de seguridad bloquea la impresión, o el documento se dimensionó para una región distinta a la tuya.",
    "Cada una de esas causas produce un síntoma distinto: bordes cortados, texto diminuto, páginas en blanco, cuadros de error o fuentes sustitutas raras. Tratarlas todas como «la impresora está rota» desperdicia mucho papel. Tratarlas como problemas concretos con soluciones concretas ahorra tiempo.",
    "Esta guía es una tabla corta: lo que ves frente a la causa más probable y el ajuste correcto. La mayoría de las soluciones son configuraciones del cuadro de impresión o un paso rápido antes de imprimir.",
  ],
  steps: [
    {
      title: "Si se recortan los bordes, activa «Ajustar al área imprimible»",
      body: "Muchos PDF están dimensionados a sangre completa del papel; las impresoras no pueden imprimir hasta el borde. En el cuadro de diálogo de impresión, elige «Ajustar» o «Reducir al área imprimible» en vez de «Tamaño real». La página se reducirá muy ligeramente y dejará de perder bordes.",
    },
    {
      title: "Si el texto es diminuto, comprueba el desajuste de tamaño de papel",
      body: "Un documento pensado para imprimirse en A3 que sale en Carta se reducirá para encajar. Vuelve a exportar el origen al tamaño de papel objetivo, o divide el pliego en dos páginas con Extraer páginas PDF antes de reimprimir.",
    },
    {
      title: "Si las páginas salen en blanco o sin texto, incrusta las fuentes",
      body: "Los documentos que usan fuentes que tu impresora no tiene pueden mostrar caracteres que faltan. Vuelve a exportar con «incrustar todas las fuentes» activado en la aplicación de origen, o usa primero imprimir a PDF para aplanarlo todo en píxeles rasterizados.",
    },
    {
      title: "Para errores de «documento protegido», comprueba los permisos de edición",
      body: "Algunos PDF se exportan con marcas que bloquean la impresión. Solo el autor puede eliminarlas. Si es tu archivo, vuelve a exportarlo sin la restricción de impresión. Si no lo es, pide una copia con la impresión permitida.",
    },
    {
      title: "Gira las páginas antes de imprimir si la orientación está mal",
      body: "Si las páginas están de lado o boca abajo, corrígelas antes de enviarlas a la impresora con Girar PDF. La rotación desde la propia impresora suele introducir sus propios problemas de escala — arreglarlo en el archivo es más limpio.",
    },
    {
      title: "Imprime una página de prueba a partir de un extracto de una sola página",
      body: "No desperdicies un documento de 50 páginas descubriendo un problema de impresión. Extraer páginas PDF puede guardar una página como PDF independiente; imprime esa, confirma los ajustes y después lanza el trabajo completo.",
    },
  ],
  tips: [
    "Comprueba siempre que el tamaño de papel elegido en el cuadro de impresión coincide con el tamaño de página del PDF — los desajustes entre Carta y A4 causan la mayoría de los síntomas de «demasiado pequeño».",
    "Imprime a PDF primero si el archivo se comporta mal. La copia aplanada suele imprimir con limpieza cuando el original no lo hace.",
    "Los ajustes de folleto y de grapado central causan más problemas de impresión de los que resuelven — imprime primero páginas normales, y reorganízalas físicamente después si hace falta.",
    "Los perfiles de color del software de diseño pueden producir impresiones oscuras o turbias en impresoras domésticas. Volver a exportar en sRGB suele arreglarlo.",
    "Si el controlador de la impresora es antiguo, una reexportación con imprimir a PDF puede ocultar funciones que el controlador no sabe manejar.",
  ],
  mobileNote:
    "Imprimir desde un móvil suele pasar por AirPrint, Google Cloud Print o una app del fabricante, y cada una gestiona el PDF de forma un poco distinta. La app PDF Editor te deja ajustar el tamaño, girar y recortar páginas antes de enviarlas — corregir el PDF en vez de pelear con el cuadro de impresión suele funcionar mejor en el móvil.",
  faq: [
    {
      q: "¿Por qué mi PDF se imprime más pequeño que en pantalla?",
      a: "Casi siempre porque el tamaño del documento no coincide con el tamaño del papel. La impresora reduce la escala para que quepa. Vuelve a exportar al tamaño de papel objetivo o usa «Tamaño real» con el papel correspondiente.",
    },
    {
      q: "¿Por qué faltan algunos caracteres al imprimir?",
      a: "Las fuentes no estaban incrustadas y tu impresora no las tiene. Vuelve a exportar con las fuentes incrustadas, o usa primero imprimir a PDF para aplanarlo todo.",
    },
    {
      q: "¿Por qué el cuadro de impresión dice que mi PDF está protegido?",
      a: "Tiene una marca de permisos que bloquea la impresión. Solo el autor puede eliminarla. No existe un rodeo seguro desde el lado del destinatario.",
    },
    {
      q: "¿Debería girar las páginas en la impresora o en el archivo?",
      a: "En el archivo. La rotación desde la impresora puede introducir problemas de escala, mientras que Girar PDF fija la orientación directamente en el documento.",
    },
    {
      q: "¿Cómo evito desperdiciar papel diagnosticando problemas de impresión?",
      a: "Extrae primero una sola página, imprímela, confirma los ajustes y después lanza el trabajo completo. Extraer páginas PDF hace esto en tu navegador.",
    },
  ],
  related: [
    { label: "Girar PDF — corrige la orientación antes de imprimir", path: "/rotate-pdf" },
    { label: "Extraer páginas PDF — imprime una página de prueba primero", path: "/extract-pdf-pages" },
    { label: "Cómo corregir problemas de formato en un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Cómo corregir problemas de fuente en un PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
