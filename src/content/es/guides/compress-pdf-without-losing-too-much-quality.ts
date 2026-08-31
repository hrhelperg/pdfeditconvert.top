import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Comprimir un PDF sin perder demasiada calidad",
  description:
    "Encuentra el punto justo entre tamaño y calidad. Cómo los niveles de compresión cambian detalle por tamaño, y cuál elegir para que siga funcionando bien.",
  updated: "2026-05-23",
  intro: [
    "Hay una tensión honesta en el corazón de la compresión de PDF: los archivos más pequeños significan menos detalle. Cualquier herramienta que prometa grandes ahorros sin ninguna pérdida de calidad te está vendiendo algo. El objetivo realista no es «sin pérdida» — es «sin pérdida que notes para este uso». Un documento destinado a leerse en pantalla puede perder detalle que un trabajo de imprenta no puede permitirse.",
    "Esta guía trata de encontrar ese punto justo con la herramienta gratuita Comprimir PDF, que funciona en tu navegador sin subir nada y muestra el ahorro de tamaño de cada nivel. En lugar de ir por reflejo a la compresión máxima, aprenderás a elegir el nivel más ligero que siga viéndose bien.",
    "Acertar con este equilibrio significa archivos que se envían y se suben sin quejas, y que además se siguen viendo como querías cuando alguien los abre de verdad.",
  ],
  steps: [
    {
      title: "Define «suficientemente bueno» para este documento",
      body: "Decide cómo se va a usar el archivo. La lectura en pantalla tolera más compresión que la impresión; una pieza de portafolio necesita más detalle que un recibo de gastos. El uso marca tu suelo de calidad.",
    },
    {
      title: "Abre la herramienta Comprimir PDF",
      body: "Ve a la herramienta Comprimir PDF. Procesa el archivo en tu dispositivo y muestra el ahorro de tamaño, así puedes juzgar el compromiso directamente.",
    },
    {
      title: "Empieza con el nivel más ligero",
      body: "Prueba primero Bajo o Recomendado, no Fuerte. El instinto de maximizar la compresión suele pasarse — a menudo alcanzas tu objetivo de tamaño con detalle de sobra.",
    },
    {
      title: "Compara calidad y tamaño",
      body: "Abre el resultado y mira las páginas, especialmente las imágenes y el texto fino. Anota el tamaño ahorrado. Si la calidad está bien y estás por debajo de tu límite, has terminado.",
    },
    {
      title: "Sube de nivel solo si hace falta",
      body: "¿Sigue siendo demasiado grande? Sube un nivel y vuelve a comprobar. Subir de forma gradual encuentra el ajuste más ligero que cumple tu objetivo de tamaño sin degradar de más.",
    },
    {
      title: "Conserva el original",
      body: "Guarda la copia comprimida con un nombre nuevo. La compresión es de un solo sentido — el detalle que elimina desaparece —, así que el original intacto es tu red de seguridad.",
    },
  ],
  tips: [
    "Recurre primero al nivel más ligero y sube solo si es imprescindible. La mayoría de gente comprime de más y degrada los archivos más de lo que exigía el objetivo de tamaño.",
    "Ajusta la calidad al propósito: los documentos de solo pantalla sobreviven a una compresión fuerte que arruinaría algo destinado a imprenta.",
    "La compresión rasteriza las páginas, así que el resultado pierde el texto seleccionable. Si necesitas texto buscable más que un archivo más pequeño, esa es una razón para conservar el original o comprimir menos.",
    "Los PDF con mucho texto apenas se reducen sea cual sea el nivel, porque hay poca información de imagen — no subas el nivel esperando ahorros que no están ahí.",
    "Comprime una sola vez. Comprimir un archivo ya comprimido acumula pérdida sin una ganancia de tamaño relevante.",
  ],
  mobileNote:
    "Juzgar el compromiso entre tamaño y calidad es fácil en el móvil con la app PDF Editor: comprime sin conexión, previsualiza las páginas, y ajusta el nivel hacia arriba o hacia abajo antes de compartir — sin subir nada, y también admite archivos protegidos.",
  faq: [
    {
      q: "¿Puedo comprimir un PDF sin ninguna pérdida de calidad?",
      a: "No de forma relevante — la compresión útil tiene pérdida. El objetivo realista es que no notes pérdida para el propósito del documento. Los niveles más ligeros conservan más detalle; elige el más ligero que siga viéndose bien.",
    },
    {
      q: "¿Qué nivel conserva más calidad?",
      a: "Bajo conserva el máximo detalle, después Recomendado, y Fuerte es el más pequeño y tosco. Empieza ligero y sube de nivel solo si sigues por encima de tu objetivo de tamaño.",
    },
    {
      q: "¿Por qué mis imágenes se ven suaves después de comprimir?",
      a: "La compresión de imagen descarta detalle fino para ahorrar espacio, y los niveles más fuertes descartan más. Retrocede a un nivel más ligero si el suavizado es notable para tu uso.",
    },
    {
      q: "¿Comprimir elimina el texto buscable?",
      a: "Sí — las páginas se vuelven a renderizar como imágenes, lo que elimina la capa de texto seleccionable. Si el texto buscable importa más que el tamaño, conserva el original o comprime con menos fuerza.",
    },
    {
      q: "¿Debería comprimir un archivo más de una vez?",
      a: "No. Una segunda pasada añade pérdida de calidad por poco ahorro adicional. Comprime una vez al nivel correcto y conserva el original.",
    },
  ],
  related: [
    { label: "Comprimir PDF — controla el nivel", path: "/compress-pdf" },
    { label: "Mejores ajustes de compresión de PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Cómo comprimir un PDF sin perder calidad", path: "/guides/how-to-compress-pdf" },
    { label: "¿Por qué mi PDF pesa tanto?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
