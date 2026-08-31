import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Cómo comprimir un PDF sin perder calidad",
  description:
    "Reduce el tamaño de un PDF para el correo o para subirlo a un portal, sin perder legibilidad. Tutorial pensado para el móvil con la app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Todos los servicios de correo siguen teniendo un límite de tamaño para los adjuntos. Gmail lo fija en 25 MB. Outlook toca techo alrededor de los 20 MB. Slack y la mayoría de apps de mensajería también dejan de aceptar archivos cerca de los 25 MB. Los PDF reales — presupuestos con fotos, contratos escaneados, informes con gráficos — superan esos límites con facilidad.",
    "Hay dos formas de reducir un PDF. La incorrecta es imprimir a PDF con una calidad más baja, lo que degrada el texto y las firmas de forma permanente. La correcta es recomprimir las imágenes y recodificar las fuentes dentro del archivo, dejando el texto nítido mientras se recorta entre un 60 % y un 90 % del tamaño.",
    "Esta guía recorre la forma correcta usando la app PDF Editor en iPhone o Android. Los pasos son los mismos en ambas plataformas. Acabarás con un archivo lo bastante pequeño para enviar y que sigue viéndose idéntico al original a cualquier nivel de zoom.",
  ],
  steps: [
    {
      title: "Abre la app PDF Editor",
      body: "Inicia la app desde la pantalla de inicio. Toca la ficha Comprimir en la pantalla principal.",
    },
    {
      title: "Importa el PDF",
      body: "Toca Añadir archivo. Elige desde Archivos / iCloud (iPhone) o mediante el selector de archivos (Android). También puedes compartir un PDF desde cualquier app hacia PDF Editor.",
    },
    {
      title: "Elige un ajuste de calidad",
      body: "Tres ajustes cubren casi todos los casos. Equilibrado funciona para la mayoría de archivos. Elige Bajo tamaño para archivos que enviarás por correo o subirás a un portal. Elige Alta calidad cuando el resultado tenga que estar listo para imprenta.",
    },
    {
      title: "Previsualiza el resultado comprimido",
      body: "Toca Vista previa. La app muestra lado a lado el tamaño del archivo original y el comprimido, además de miniaturas de las primeras páginas. Haz zoom para comprobar la nitidez del texto.",
    },
    {
      title: "Compara con el original",
      body: "Alterna entre las páginas originales y las comprimidas. Si algo se ve degradado (poco frecuente con Equilibrado), prueba otro ajuste.",
    },
    {
      title: "Guarda o comparte",
      body: "Guarda el archivo comprimido con un nombre nuevo (así el original queda intacto) o compártelo directamente por correo, Drive o cualquier app de mensajería.",
    },
  ],
  tips: [
    "Si un archivo está dominado por páginas escaneadas, el ajuste Bajo tamaño puede lograr reducciones del 90 % o más sin pérdida de calidad visible.",
    "En PDF con mucho texto, las ganancias de compresión son menores (10-30 %) — el archivo ya es eficiente de por sí.",
    "Dividir un PDF muy grande antes de comprimirlo hace la operación más rápida en móviles antiguos y te da más flexibilidad a la hora de enviarlo.",
    "Conserva siempre el original hasta confirmar que el archivo comprimido se ve bien — una vez comprimido, la calidad original se pierde.",
    "Los PDF comprimidos conservan el texto buscable y las firmas. La compresión afecta a las imágenes y a las tablas de fuentes, no a la capa de contenido.",
  ],
  mobileNote:
    "La compresión se ejecuta por completo en el dispositivo. Puedes comprimir un contrato sensible en un vuelo, con el modo avión activado, sin que salga un solo byte de tu móvil.",
  faq: [
    {
      q: "¿Cuánto se reducirá mi PDF?",
      a: "Los PDF con muchas imágenes o escaneados suelen encogerse entre un 60 % y un 90 %. Los que tienen mucho texto se reducen menos, a menudo entre un 10 % y un 30 %. La app muestra el tamaño exacto antes y después.",
    },
    {
      q: "¿Las imágenes se verán borrosas?",
      a: "Equilibrado y Alta calidad mantienen las imágenes nítidas al zoom de visualización normal. Bajo tamaño aplica una compresión de imagen más fuerte — bien para el correo, aunque notarás un ligero suavizado si haces mucho zoom.",
    },
    {
      q: "¿Puedo comprimir un PDF protegido con contraseña?",
      a: "Sí, en cuanto introduces la contraseña. La app se encarga del descifrado, comprime el contenido y puede volver a aplicar la protección al guardar.",
    },
    {
      q: "¿Cuál es la diferencia entre comprimir y meter en un ZIP?",
      a: "Meter en un ZIP envuelve el PDF en otro contenedor, pero rara vez lo reduce — los PDF ya usan compresión interna. La compresión de PDF adecuada reescribe las imágenes y fuentes internas del archivo, que es la única forma de conseguir un ahorro de tamaño real.",
    },
    {
      q: "¿Puedo comprimir varios PDF a la vez?",
      a: "Sí. Añade varios archivos en una misma sesión y la app los procesa uno tras otro, aplicando el mismo ajuste a cada uno.",
    },
  ],
  related: [
    { label: "Comprimir PDF — resumen completo", path: "/compress-pdf" },
    { label: "Convertidor de PDF", path: "/pdf-converter" },
    {
      label: "Cómo unir archivos PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
