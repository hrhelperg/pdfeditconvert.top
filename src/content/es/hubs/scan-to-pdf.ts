import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Escanear a PDF",
    h1: "Escanear a PDF — convierte papel en un PDF nítido",
    highlight: "nítido",
    lead: "Usa la cámara del móvil para escanear recibos, documentos de identidad, contratos y documentos de varias páginas. Detección automática de bordes, corrección de perspectiva y OCR, en segundos y en el dispositivo.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué las fotos de documentos con el móvil quedan tan mal",
    paragraphs: [
      "Fotografiar un contrato con la cámara normal genera un JPG quemado por los fluorescentes del techo, torcido por el ángulo con el que sujetaste el móvil, y que muestra la superficie que hay detrás de la hoja. La forma no es la correcta, el contraste tampoco, y no tiene texto buscable. Quien lo reciba tiene que entrecerrar los ojos para leerlo.",
      "Envía un JPG así a un gestor por correo y recibirás la petición educada de «un PDF como es debido». El motivo es real: los JPG de recibos no se pueden indexar, el software de contabilidad no les puede pasar el OCR y muchas veces no superan los validadores de subida de documentos.",
      "Una app de escaneo reconstruye la foto para que tenga el aspecto que debería tener: rectangular, con el contraste corregido, enderezada y guardada como PDF con texto oculto detrás. Un documento de varias páginas se convierte en un único archivo, no en doce JPG sueltos en el carrete.",
    ],
  },
  features: {
    heading: "Escanea como con un escáner de verdad",
    items: [
      {
        icon: "ScanLine",
        title: "Detección automática de bordes",
        body: "La app encuentra los bordes del documento sola y captura la imagen en cuanto el encuadre es correcto.",
      },
      {
        icon: "Maximize",
        title: "Corrección de perspectiva",
        body: "Los ángulos torcidos se enderezan. El resultado parece hecho justo desde arriba.",
      },
      {
        icon: "Layers",
        title: "Escaneos de varias páginas",
        body: "Captura página tras página, en orden. La app las une en un solo PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (texto buscable)",
        body: "Reconoce las palabras dentro de las páginas escaneadas para que el PDF resultante tenga texto buscable y se pueda copiar.",
      },
      {
        icon: "Sun",
        title: "Filtros inteligentes",
        body: "Filtros en color, blanco y negro u optimizados para documentos, para compensar problemas de iluminación.",
      },
      {
        icon: "Tag",
        title: "Nombrado automático",
        body: "La app sugiere nombres de archivo según el contenido del documento: recibos, contratos, documentos de identidad.",
      },
    ],
  },
  steps: {
    heading: "Cómo escanear un documento a PDF",
    items: [
      {
        title: "Abre el escáner",
        body: "Toca la casilla Escanear en la pantalla de inicio de la app PDF Editor.",
      },
      {
        title: "Apunta al documento",
        body: "Sujeta el móvil más o menos por encima de la página. La app encuentra los bordes y parpadea cuando está lista.",
      },
      {
        title: "Deja que capture sola",
        body: "O toca la pantalla manualmente. La captura es instantánea.",
      },
      {
        title: "Ajusta las esquinas si hace falta",
        body: "Afina los bordes detectados antes de corregir la perspectiva.",
      },
      {
        title: "Añade más páginas",
        body: "Toca el contador de páginas para seguir. La app las une en orden.",
      },
      {
        title: "Guarda como PDF",
        body: "Elige un nombre de archivo (o acepta la sugerencia automática) y guarda. El OCR se ejecuta en segundo plano.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Escanear donde estés",
    body: "Un recibo se escanea en la mesa, un contrato en la sala de reuniones, un documento de identidad en el mostrador de facturación del aeropuerto. La gracia es precisamente no tener que cargar con un escáner de sobremesa en la bolsa. Un escáner de documentos en el móvil es el sustituto más cercano y, para el día a día, más que suficiente.",
  },
  faq: [
    {
      q: "¿La calidad del escaneo es tan buena como la de un escáner de sobremesa?",
      a: "Para los documentos habituales de empresa (recibos, contratos, documentos de identidad, formularios), sí. Para escaneo de fotos de archivo o letra pequeña en papel satinado, un escáner de sobremesa sigue siendo mejor.",
    },
    {
      q: "¿Qué fiabilidad tiene el escaneo de varias páginas?",
      a: "Mucha. La app sigue capturando hasta que tú paras, y puedes reordenar o borrar páginas antes de guardar.",
    },
    {
      q: "¿Qué idiomas admite el OCR?",
      a: "Todos los idiomas principales en alfabeto latino, además de cirílico, griego, árabe, chino, japonés y coreano. La calidad del reconocimiento varía según la iluminación y el estado de la página.",
    },
    {
      q: "¿Puedo escanear DNI y pasaportes?",
      a: "Sí. La app genera un escaneo limpio y enderezado que puedes guardar o compartir. Por seguridad, guarda los escaneos de documentos de identidad en una carpeta protegida o pon una contraseña al PDF resultante.",
    },
    {
      q: "¿Funciona sin conexión?",
      a: "El escaneo y la detección de bordes se ejecutan en el dispositivo. El OCR de algunos idiomas menos comunes puede necesitar conexión la primera vez, para descargar el modelo.",
    },
  ],
  related: [
    {
      label: "Paso a paso: cómo escanear documentos a PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Edita después el PDF escaneado", path: "/pdf-editor" },
    {
      label: "PDF para empresas",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Escanea documentos directamente con la cámara.",
    sub: "Gratis en iOS y Android. Los escaneos se quedan en tu dispositivo.",
  },
};

export default content;
