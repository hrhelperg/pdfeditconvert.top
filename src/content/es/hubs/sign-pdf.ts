import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Firmar un PDF",
    h1: "Firmar un PDF — añade una firma electrónica desde el móvil",
    highlight: "desde el móvil",
    lead: "Añade una firma manuscrita de verdad, tu nombre escrito o tu rúbrica a cualquier PDF. Colócala, cambia su tamaño y expórtala, sin imprimir, sin escanear y sin enviarte un archivo por correo a ti mismo.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué imprimir y escanear ya es cosa del pasado",
    paragraphs: [
      "La vieja rutina para firmar (imprimir el PDF, firmarlo, escanearlo, devolverlo por correo) ha sobrevivido, sorprendentemente, hasta 2026. La mayoría de las empresas aceptan la firma electrónica, pero muchos contratos siguen llegando con un «fírmalo y devuélvelo», como si todo el mundo tuviera en casa una impresora y un escáner.",
      "Los servicios públicos de firma electrónica resuelven parte del problema, pero añaden fricción para iniciar sesión, subida del documento, gestión de una cuenta y planes de precio. Para una sola firma en un solo documento, es un exceso que añade una lentitud innecesaria.",
      "Un proceso de firma nativo en tu móvil tiene justo el tamaño adecuado para la tarea: abre el PDF, dibuja o escribe tu firma, colócala, envíala. Todo el proceso lleva menos de un minuto y funciona sin cuenta, en un avión o en un aparcamiento.",
    ],
  },
  features: {
    heading: "Firma según lo que pida el documento",
    items: [
      {
        icon: "Pencil",
        title: "Firma manuscrita",
        body: "Dibújala con el dedo o con un lápiz óptico. Guárdala una vez y reutilízala en todos los documentos futuros.",
      },
      {
        icon: "Type",
        title: "Firma escrita",
        body: "Escribe tu nombre y elige una tipografía de estilo manuscrito para una firma limpia y legible.",
      },
      {
        icon: "User",
        title: "Sello de rúbrica",
        body: "Guarda tu rúbrica por separado para los documentos que la necesiten en cada página.",
      },
      {
        icon: "Calendar",
        title: "Sello de fecha",
        body: "Inserta la fecha con un toque, junto a tu firma, cuando el contrato lo pida.",
      },
      {
        icon: "Users",
        title: "Flujo con varios firmantes",
        body: "Pasa un PDF entre los firmantes mediante el menú para compartir. Cada firma se queda en su sitio.",
      },
      {
        icon: "ShieldCheck",
        title: "Exporta con información de auditoría",
        body: "La copia firmada incluye una marca de tiempo y metadatos de la firma para tus registros.",
      },
    ],
  },
  steps: {
    heading: "Cómo firmar un PDF en el móvil",
    items: [
      {
        title: "Abre el PDF",
        body: "Importa el documento en la app PDF Editor desde Archivos, el correo o cualquier app para compartir.",
      },
      {
        title: "Toca la herramienta Firmar",
        body: "Está en la barra de herramientas de edición. Elige firma manuscrita, escrita o rúbrica.",
      },
      {
        title: "Dibuja o escribe tu firma",
        body: "Solo la primera vez: la firma se guarda para usos futuros. Puedes editarla o cambiarla cuando quieras en los ajustes.",
      },
      {
        title: "Colócala y ajusta el tamaño",
        body: "Arrastra la firma al sitio adecuado. Cambia el tamaño con los tiradores de las esquinas. Añade un sello de fecha si hace falta.",
      },
      {
        title: "Exporta la copia firmada",
        body: "Guárdala sobre el original o como copia nueva. Compártela directamente por Mail o por cualquier app de mensajería.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Firmar sin interrumpir el día",
    body: "La firma casi nunca es el cuello de botella; lo es el tiempo que se tarda en encontrar una impresora. Firmar desde el móvil hace que los contratos vuelvan a la otra parte en una hora, no en un día. Especialmente útil para autónomos, dueños de pequeños negocios y cualquiera que trabaje lejos de un escritorio.",
  },
  faq: [
    {
      q: "¿Tiene validez legal una firma electrónica?",
      a: "En la mayoría de las jurisdicciones, sí, para la mayoría de documentos de empresa. El Reglamento eIDAS de la Unión Europea y la ESIGN Act de Estados Unidos reconocen la firma electrónica. Para documentos de alto valor o con implicaciones legales delicadas, consulta la normativa local y valora una firma electrónica cualificada.",
    },
    {
      q: "¿Se guarda mi firma en un servidor?",
      a: "No. Las firmas guardadas viven en tu dispositivo. Se aplican a los documentos en local y nunca se suben a nuestra infraestructura.",
    },
    {
      q: "¿Pueden firmar el mismo PDF varias personas?",
      a: "Sí. Pasa el archivo entre los firmantes mediante el menú para compartir, AirDrop, correo o cualquier app de mensajería. Cada firma se añade y se guarda en su sitio.",
    },
    {
      q: "¿Qué pasa si el PDF ya tiene campos de firma?",
      a: "La app detecta los campos de firma existentes y te deja tocar directamente sobre ellos. Tu firma se ajusta sola al tamaño y la posición correctos.",
    },
    {
      q: "¿Puedo usarlo con el Apple Pencil o el S Pen?",
      a: "Sí. Los dos dan un trazo más suave que firmar con el dedo, lo que se nota de verdad en contratos que pasan por una revisión visual.",
    },
  ],
  related: [
    {
      label: "Paso a paso: cómo firmar un PDF en el móvil",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Protege los PDF firmados con contraseña", path: "/pdf-security" },
    { label: "Métodos para autónomos", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Firma tus PDF desde cualquier sitio.",
    sub: "Gratis en iOS y Android. No hace falta cuenta.",
  },
};

export default content;
