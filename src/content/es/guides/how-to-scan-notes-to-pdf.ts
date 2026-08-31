import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Cómo escanear apuntes a mano a PDF (limpio y con texto buscable)",
  description:
    "Convierte páginas de apuntes de clase escritos a mano en PDF de varias páginas limpios con la cámara del móvil. Los ajustes que dan un escaneo legible a la primera.",
  updated: "2026-05-29",
  intro: [
    "Los apuntes de clase escritos a mano siguen siendo la forma más rápida de capturar lo que se explica, y la mayoría de los estudiantes los dejan en papel en lugar de digitalizarlos, porque los escaneos suelen salir mal. Páginas torcidas, escaneos grises y descoloridos, archivos enormes, y el tiempo que cuesta repetir las fotos que salieron mal. Todo eso, sumado a lo largo de un semestre, es la razón de que los apuntes se queden en el cuaderno.",
    "Conseguir escaneos limpios con el móvil depende sobre todo de la técnica y los ajustes, no de la aplicación. Luz uniforme, encuadre cuadrado, contraste activado, escala de grises en lugar de color, y detección de bordes si tu herramienta la tiene. Una página bien capturada se parece más a un escaneo de mesa que a una foto cualquiera.",
    "Esta guía recorre la técnica de principio a fin: las condiciones de luz que dan buenos escaneos, el enfoque página a página, el flujo con varias páginas, y qué hacer con el PDF una vez creado. Da por hecho que tienes un móvil y quieres un PDF limpio y de varias páginas sin comprarte un escáner.",
  ],
  steps: [
    {
      title: "Coloca la página sobre un fondo que contraste",
      body: "Papel de rayas sobre una mesa oscura. Papel blanco liso sobre una tela oscura. Cualquier cosa que haga evidente el borde de la página para la cámara y el recorte automático. Evita los reflejos; una luz uniforme es mejor que una luz muy intensa.",
    },
    {
      title: "Sostén el móvil paralelo a la página",
      body: "La cámara debe quedar justo encima de la página, no inclinada. La inclinación produce una distorsión trapezoidal que la corrección automática puede arreglar, pero nunca tan bien como una foto tomada en escuadra.",
    },
    {
      title: "Usa una app de escaneo con detección de bordes",
      body: "Escanear a PDF o el flujo de escaneo de la app PDF Editor detectan el borde de la página y recortan automáticamente. Una foto normal del móvil no hace esto; una app de escaneo produce un resultado parecido al de un escáner de mesa.",
    },
    {
      title: "Cambia a modo escala de grises o blanco y negro",
      body: "Los escaneos en color de tinta negra sobre papel blanco pesan más, tienen más ruido y salen menos nítidos. La escala de grises da escaneos más nítidos, más pequeños y más legibles. El blanco y negro pesa todavía menos, aunque es menos flexible después.",
    },
    {
      title: "Captura cada página y luego fusiona",
      body: "Los flujos de escaneo de varias páginas capturan página a página y las combinan automáticamente en un solo PDF. Si las capturaste por separado, Fusionar PDF las combina en orden.",
    },
    {
      title: "Recorta, gira y reordena en la limpieza final",
      body: "Reordenar páginas de PDF si alguna página se capturó fuera de secuencia. Girar PDF para las fotos torcidas. Dedica un minuto a la limpieza; tu yo del futuro te lo agradecerá.",
    },
  ],
  tips: [
    "Haz todos los escaneos antes de empezar la limpieza — cambiar de modo constantemente rompe el ritmo.",
    "Si la luz es desigual, sostener una simple hoja de papel blanco sobre la página a modo de reflector mejora mucho el contraste.",
    "No recortes demasiado ajustado. Dejar un pequeño margen alrededor del borde de la página hace que el documento se vea menos casero.",
    "Comprime el PDF final antes de archivarlo. Los apuntes con muchos escaneos pesan bastante; las versiones comprimidas son más fáciles de compartir después.",
    "Añade una portada (escrita a máquina, con el nombre de la asignatura y la fecha) antes de fusionar. La colección se explica sola dentro de tu archivo.",
  ],
  mobileNote:
    "Escanear apuntes es una de las pocas cosas que el móvil hace genuinamente mejor que un escáner de mesa para un uso informal. El flujo de escaneo de la app PDF Editor funciona por completo en el móvil — captura, detección de bordes, contraste, fusión de varias páginas — y produce un PDF limpio sin que el archivo pase por ningún servidor.",
  faq: [
    {
      q: "¿Se puede buscar texto en apuntes manuscritos escaneados?",
      a: "Solo si la herramienta les aplica OCR — convertir la imagen de la letra manuscrita en texto buscable. El OCR sobre letra manuscrita es menos fiable que sobre texto impreso; la calidad depende de la letra y del escaneo.",
    },
    {
      q: "¿Cuál es el mejor ajuste de cámara del móvil para escanear apuntes?",
      a: "Usa el modo escala de grises o blanco y negro de la app de escaneo con contraste automático. No te fíes de la app de cámara estándar — sus fotos pesan más, tienen menos contraste y cuestan más de leer.",
    },
    {
      q: "¿Cuántas páginas por sesión de escaneo?",
      a: "Las que hayas escrito en una sola sentada. Escanear cada semana o después de cada clase es más fácil que dejar que se acumule un semestre entero.",
    },
    {
      q: "¿Debería escanear en color?",
      a: "Solo si tus apuntes usan color (subrayadores, diagramas). Si no, la escala de grises o el blanco y negro salen más nítidos y ocupan menos.",
    },
    {
      q: "¿Y si la página está arrugada o manchada?",
      a: "El contraste automático puede arreglar la mayor parte del deterioro del papel. Las arrugas fuertes suelen notarse igual; plantéate repetir la foto o aceptarlo tal cual para material de estudio personal.",
    },
  ],
  related: [
    { label: "Escanear a PDF — escaneo con la cámara del móvil y detección de bordes", path: "/scan-to-pdf" },
    { label: "Fusionar PDF — combina escaneos de varias páginas", path: "/merge-pdf" },
    { label: "Cómo escanear documentos a PDF con el móvil", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Método PDF para estudiantes universitarios", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Escanear a PDF — escaneo con la cámara del móvil", path: "/scan-to-pdf" },
};

export default content;
