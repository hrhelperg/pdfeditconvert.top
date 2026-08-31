import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Cómo escanear un documento a PDF con el móvil",
  description:
    "Usa la cámara del móvil para escanear un documento de varias páginas en un PDF nítido. Detección de bordes y OCR explicados.",
  updated: "2026-05-11",
  intro: [
    "Los móviles son excelentes escáneres de documentos en cuanto dejas de usar la cámara por defecto. La app adecuada gestiona la detección de bordes, la corrección de perspectiva, el ajuste de contraste y el OCR — convirtiendo una foto tomada con la mano en un PDF limpio y con texto buscable que parece escaneado, no fotografiado.",
    "Esta guía recorre el flujo de escaneo de documentos en la app PDF Editor, en iPhone o Android. Ambas plataformas producen resultados equivalentes. Veremos casos del día a día: recibos, formularios firmados, contratos de varias páginas, documentos de identidad, y los momentos en que escanear con el móvil gana a caminar hasta un escáner plano.",
    "Al final tendrás una rutina de escaneo repetible que funciona con una iluminación no del todo ideal, produce archivos que gestorías y equipos legales aceptan sin objeciones, y mantiene todo en el dispositivo.",
  ],
  steps: [
    {
      title: "Abre el escáner",
      body: "Toca la ficha Escanear en la pantalla de inicio de la app PDF Editor. Se abre el visor de la cámara con la detección de bordes activada.",
    },
    {
      title: "Coloca el documento sobre una superficie que contraste",
      body: "La detección de bordes funciona mejor cuando hay un contraste claro entre la página y la superficie que hay detrás. Pon papel blanco sobre una superficie oscura, o al revés.",
    },
    {
      title: "Apunta el móvil sobre la página",
      body: "Sostén el móvil aproximadamente por encima del documento. La app dibuja un contorno azul alrededor de los bordes detectados. Cuando el contorno se estabiliza, captura automáticamente.",
    },
    {
      title: "Captura automática o toque manual",
      body: "La cámara pulsa y dispara cuando el encuadre es correcto. Si la captura automática no detecta bien los bordes, toca el botón de captura manual. Siempre puedes ajustar las esquinas después.",
    },
    {
      title: "Ajusta las esquinas detectadas",
      body: "Arrastra los tiradores de las esquinas para afinar los bordes si hace falta. La corrección de perspectiva entra en juego después de este paso, produciendo una página rectangular a partir de la toma en ángulo.",
    },
    {
      title: "Aplica un filtro",
      body: "Elige Color, Escala de grises o Blanco y negro. Para recibos y formularios, Blanco y negro reduce el tamaño del archivo de forma notable sin pérdida de calidad. Para documentos con fotos o elementos en color, mantén Color.",
    },
    {
      title: "Añade más páginas",
      body: "Toca el contador de páginas en la parte inferior de la pantalla para capturar páginas adicionales. Cada captura nueva se añade al PDF actual. Reordena las páginas desde la tira de miniaturas si hace falta.",
    },
    {
      title: "Guarda el PDF",
      body: "Toca Listo, dale al archivo un nombre significativo y guarda. El OCR se ejecuta en segundo plano, haciendo que el PDF resultante sea buscable. Después puedes compartirlo, imprimirlo o subirlo a una nube.",
    },
  ],
  tips: [
    "Una luz difusa y uniforme gana a la iluminación directa desde arriba — la luz directa crea reflejos en papel satinado o formularios plastificados.",
    "Coloca el documento plano. Las páginas curvadas (como un libro abierto) provocan una distorsión del texto que la corrección de perspectiva no puede arreglar del todo.",
    "En recibos, el filtro Blanco y negro suele reducir el tamaño del archivo entre un 60 % y un 80 % sin pérdida de legibilidad.",
    "Si escaneas documentos de identidad o pasaportes, guarda el PDF resultante en una carpeta protegida con contraseña o aplica una contraseña al PDF antes de compartirlo.",
    "La captura automática funciona en menos de un segundo cuando el encuadre es bueno. Si le cuesta, probablemente el problema sea la iluminación o el contraste.",
  ],
  mobileNote:
    "El flujo completo de escanear y guardar dura menos de 30 segundos para un documento de varias páginas. Comparado con ir hasta un escáner plano, descargar software de escaneo y gestionar adjuntos de correo, el móvil gana con claridad para las necesidades del día a día. El resultado es el mismo PDF estándar con texto buscable que acepta cualquier herramienta de contabilidad o gestor documental.",
  faq: [
    {
      q: "¿La calidad del escaneo es tan buena como la de un escáner plano?",
      a: "Para documentos del día a día — recibos, contratos, documentos de identidad, formularios — sí, con buena iluminación y el documento plano. Para escaneo fotográfico de archivo o letra pequeña en papel satinado, un escáner plano dedicado sigue ganando.",
    },
    {
      q: "¿Qué idiomas admite el OCR?",
      a: "Todos los idiomas mayoritarios con alfabeto latino (español, inglés, francés, alemán, italiano, portugués, neerlandés, checo, polaco, etc.) además de cirílico, griego, árabe, chino, japonés y coreano. La calidad de reconocimiento es máxima con texto impreso limpio y menor con texto manuscrito.",
    },
    {
      q: "¿Puedo escanear un documento de identidad o un pasaporte?",
      a: "Sí. La app produce un escaneo limpio y sin distorsión, listo para envíos de verificación de identidad o cualquier presentación de documentos. Aplica una contraseña al PDF resultante si lo vas a enviar por correo.",
    },
    {
      q: "¿El escaneo funciona sin conexión?",
      a: "Sí. La detección de bordes, la corrección de perspectiva y los filtros se ejecutan en el dispositivo. El OCR funciona en local para los idiomas principales; los idiomas menos habituales pueden descargar un modelo de reconocimiento la primera vez que se usan.",
    },
    {
      q: "¿Cuánto pesan los PDF escaneados?",
      a: "Un documento típico de 5 páginas en modo blanco y negro se sitúa alrededor de 200-400 KB. El mismo escaneo a todo color suele pesar entre 1 y 2 MB. La compresión puede reducirlos más aún si necesitas enviarlos por correo.",
    },
  ],
  related: [
    { label: "Escanear a PDF — resumen completo", path: "/scan-to-pdf" },
    {
      label: "Edita después el PDF escaneado",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF para empresas", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Escanear a PDF", path: "/scan-to-pdf" },
};

export default content;
