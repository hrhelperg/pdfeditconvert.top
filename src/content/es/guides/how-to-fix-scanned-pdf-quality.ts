import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Cómo mejorar la calidad de un PDF escaneado (nitidez, enderezado, color)",
  description:
    "Los PDF escaneados fallan siempre de la misma forma: torcidos, con el contraste apagado, con manchas de fondo, con un tamaño enorme. Los ajustes antes de escanear y las herramientas después que de verdad los arreglan.",
  updated: "2026-05-29",
  intro: [
    "Un mal escaneo arruina un documento que por lo demás sería sencillo. Líneas torcidas, contraste apagado, manchas de polvo que se cuelan, un tamaño de archivo enorme — y el documento que hay dentro es difícil de leer o imposible de comprimir más. Lo molesto es que la mayoría de esos problemas vienen de la configuración, no del PDF en sí, y evitarlos en la captura es mucho más fácil que arreglarlos después.",
    "Cuando sí tienes un mal escaneo que arreglar, las opciones realistas son: enderezar lo que está torcido, recortar lo mal encuadrado, reducir lo que pesa demasiado, y aceptar que la resolución perdida en la captura no vuelve. Algunas herramientas de procesamiento de imagen prometen enfocar; en la práctica hacen que las cosas se vean distintas, no mejores.",
    "Esta guía separa la prevención (escanear bien a la primera) de la recuperación (qué hacer con el archivo que ya tienes). La prevención es lo más importante.",
  ],
  steps: [
    {
      title: "Evita el torcido colocando bien las páginas",
      body: "Los escáneres con alimentador automático tuercen la imagen cuando las páginas no están cuadradas en la bandeja. Los escaneos con el móvil se tuercen cuando inclinas la cámara. Ambos son evitables: cuadra la página, mantén el móvil paralelo al papel, y el escaneo sale recto.",
    },
    {
      title: "Fija la resolución de escaneo en 200–300 DPI para documentos",
      body: "600 DPI es calidad fotográfica y produce archivos enormes sin ningún beneficio en una página de texto. 150 DPI es demasiado bajo — el texto se suaviza. El rango de 200–300 es el punto óptimo para documentos que vas a compartir, archivar o imprimir.",
    },
    {
      title: "Elige escala de grises o blanco y negro en vez de color para texto",
      body: "El modo color en un documento de texto triplica el tamaño del archivo e introduce ruido que comprime mal. La escala de grises o el blanco y negro producen escaneos más nítidos, más pequeños y más limpios para cualquier cosa que no sea una foto o un gráfico en color.",
    },
    {
      title: "Usa contraste automático y recorte automático cuando estén disponibles",
      body: "La mayoría de las apps de escaneo incluyen contraste automático y detección de bordes. Ambos marcan una diferencia real: el contraste elimina la neblina gris, la detección de bordes recorta hasta la página para que los márgenes queden limpios.",
    },
    {
      title: "Comprime con cuidado los escaneos ya existentes",
      body: "Si un PDF escaneado ya es enorme, Comprimir PDF en tu navegador puede reducirlo de forma notable. No llegues al ajuste extremo en texto — puede pixelar los caracteres. Fuerte-pero-no-extremo es la opción segura.",
    },
    {
      title: "Gira las páginas torcidas con Girar PDF",
      body: "Si solo unas pocas páginas están de lado o volteadas, Girar PDF las endereza en el sitio. No puede corregir un ligero desvío angular, pero sí gestiona las rotaciones de 90/180/270 que producen la mayoría de los errores del alimentador.",
    },
  ],
  tips: [
    "Una luz brillante y uniforme importa más que la calidad de la cámara en los escaneos con el móvil. Un escaneo con el móvil bien iluminado supera al resultado de un escáner de oficina mal iluminado.",
    "No escanees a color y alto DPI para después comprimir con fuerza. Escanea con los ajustes correctos desde el principio; el archivo sale más pequeño, más nítido y más rápido de gestionar.",
    "Que el fondo se traspase (texto de la cara trasera en papel fino) es un problema del papel, no del escaneo. Usa una hoja de papel oscuro detrás de la página.",
    "Volver a escanear casi siempre es más rápido que arreglar. Si tienes el papel, corrige el escaneo en la captura en vez de procesar la imagen.",
    "Las apps de escaneo del móvil que prometen «mejorar» a menudo añaden un enfoque falso que se ve peor de cerca. Un escaneo limpio de base supera a uno procesado y malo.",
  ],
  mobileNote:
    "Los escaneos con el móvil fallan de forma predecible — el ángulo, la luz y el enfoque dependen todos de quien lo usa. El flujo de escaneo de la app PDF Editor usa detección de bordes en tiempo real y ajuste de contraste, así que cada captura se acerca a un resultado de escáner plano a la primera.",
  faq: [
    {
      q: "¿Por qué mi PDF escaneado sale tan apagado?",
      a: "El contraste se fijó demasiado bajo en la captura. Vuelve a escanear con el contraste automático activado, o con el brillo y el contraste ajustados a mano. El postprocesado ayuda solo un poco.",
    },
    {
      q: "¿Puedo enfocar un escaneo borroso?",
      a: "Solo en apariencia. El detalle real perdido en la captura no se puede recuperar. Los filtros de enfoque cambian los bordes pero no añaden información.",
    },
    {
      q: "¿Qué resolución de escaneo debería usar?",
      a: "200–300 DPI para documentos. 300 si es posible que lo imprimas. Cualquier valor más alto se desperdicia en texto y solo infla el archivo.",
    },
    {
      q: "¿Debería escanear en color o en escala de grises?",
      a: "Escala de grises o blanco y negro para texto. Color solo para fotos y gráficos en color. La escala de grises es más nítida y mucho más pequeña.",
    },
    {
      q: "¿Por qué mis escaneos son enormes en tamaño de archivo?",
      a: "Normalmente demasiado DPI más el modo color. Reduce ambos en la captura, o comprime el archivo existente. Los PDF escaneados son los que más se benefician de la compresión.",
    },
  ],
  related: [
    { label: "Escanear a PDF — capturas limpias con detección de bordes", path: "/scan-to-pdf" },
    { label: "Comprimir PDF — reduce escaneos pesados", path: "/compress-pdf" },
    { label: "Cómo comprimir un PDF escaneado", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "¿Por qué mi PDF está borroso?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Escanear a PDF — escaneo con la cámara del móvil", path: "/scan-to-pdf" },
};

export default content;
