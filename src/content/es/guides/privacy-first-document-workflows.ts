import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Una organización documental sin subir nada (de principio a fin)",
  description:
    "Todo un flujo documental — captura, edición, firma, envío, archivo — que mantiene los archivos en tus dispositivos y fuera de servidores de terceros. La forma realista de conseguirlo, y con qué herramientas.",
  updated: "2026-05-29",
  intro: [
    "La mayoría de los flujos documentales tienen fugas. Escaneas un papel sensible con una app, lo envías a una web para comprimirlo, lo pasas por correo a través de una herramienta de «mejora» de un tercero, y acabas con tres o cuatro servidores guardando copias de algo que creías que seguía siendo tuyo. Cada paso es cómodo por separado; el coste de privacidad acumulado es grande e invisible.",
    "Una organización centrada en la privacidad no rechaza las herramientas modernas — elige las que no mueven tus archivos de sitio. La captura ocurre con tu cámara. La compresión y la edición ocurren en tu navegador. La firma ocurre en una app del móvil. La transferencia ocurre por un canal en el que confías. En ningún momento el documento vive en el servidor de un desconocido.",
    "Esta guía describe la forma completa, de principio a fin: las herramientas que encajan en cada paso, y dónde el procesamiento local de verdad todavía no llega (que es un conjunto más pequeño de lo que la mayoría cree). Es la organización realista centrada en la privacidad, no la versión absolutista.",
  ],
  steps: [
    {
      title: "Captura: escanea en local con el móvil",
      body: "Escanear a PDF en el móvil ejecuta la cámara y la detección de página en el propio dispositivo. Sin envío a ningún servidor, sin procesamiento en la nube. El PDF que produces nace y se queda en local hasta que decides compartirlo.",
    },
    {
      title: "Edita y limpia el documento en una pestaña del navegador",
      body: "Comprimir PDF, Reordenar páginas de PDF, Extraer páginas de PDF, Girar PDF, Añadir marca de agua a PDF: todas funcionan en el navegador. El archivo lo lee el JavaScript de tu propio equipo; el servidor nunca ve el contenido.",
    },
    {
      title: "Firma con una firma real, en local",
      body: "Firmar PDF o la app PDF Editor capturan una firma dibujada en tu dispositivo y la incrustan en el archivo. Ninguna plataforma de firma de terceros llega a ver el documento.",
    },
    {
      title: "Comparte por un canal de confianza",
      body: "AirDrop, Signal, correo cifrado, mensajería cifrada de extremo a extremo. El canal cifra la transferencia; el destinatario recibe el archivo sin que pase por un intermediario capaz de leerlo.",
    },
    {
      title: "Archiva en un soporte cifrado",
      body: "Disco local con cifrado completo, o copia de seguridad en la nube con cifrado de conocimiento cero. No guardes PDF sensibles en un almacenamiento en la nube sin cifrar — eso equivale a un servidor leyendo tus archivos.",
    },
    {
      title: "Revisa y borra con regularidad",
      body: "Revisa los PDF sensibles cada trimestre. Borra lo que ya no necesites. Cada archivo sensible que conservas es un pequeño riesgo continuo; reducir el inventario reduce la exposición.",
    },
  ],
  tips: [
    "La captura, la edición y la firma pueden suceder todas en un mismo dispositivo. Cuantos menos saltos entre dispositivos, menor es la superficie de fuga.",
    "Comprueba que una herramienta «basada en el navegador» funciona de verdad en local antes de confiar en ella. La pestaña de red de las herramientas de desarrollador es la forma más rápida de comprobarlo.",
    "Cifra los PDF sensibles con contraseña incluso cuando los compartas por canales cifrados. Es defensa en profundidad.",
    "Evita los servicios de «enviar un enlace» para material sensible. El enlace es una referencia guardada en un servidor; el archivo vive en el disco de otro.",
    "No imprimas PDF sensibles a menos que sea imprescindible. La cola de impresión y el papel son dos copias adicionales que tienes que controlar.",
  ],
  mobileNote:
    "Una organización centrada en la privacidad es más fácil en el móvil de lo que la gente cree. La app PDF Editor gestiona la captura, la edición, la firma y el envío en local en iOS y Android, así que un documento sensible puede pasar del papel al destinatario sin tocar nunca el servidor de un tercero.",
  faq: [
    {
      q: "¿Puede una organización real quedarse siempre en local?",
      a: "Para la mayoría de los pasos, sí. La captura, la compresión, la edición, la firma y el envío habitual pueden hacerse sin subir nada a ningún servidor. Algunas operaciones (OCR de alta calidad, tachado avanzado) a veces sí necesitan ayuda de un servidor; elige esas herramientas con cuidado si las necesitas.",
    },
    {
      q: "¿No es esto una exageración?",
      a: "No para material sensible. El modelo de subir todo a todas partes funcionaba cuando los documentos eran menos sensibles y las brechas de seguridad eran menos frecuentes. Las dos cosas han cambiado. Una organización centrada en la privacidad no lleva más tiempo una vez que se convierte en costumbre.",
    },
    {
      q: "¿Cómo sé si una herramienta del navegador es de verdad local?",
      a: "Abre las herramientas de desarrollador, la pestaña de red, y añade un archivo. Si no ves una solicitud saliente grande, se está procesando en local. Las herramientas de este sitio encajan en ese patrón.",
    },
    {
      q: "¿Y las copias de seguridad?",
      a: "Una copia de seguridad en la nube con cifrado de conocimiento cero (el proveedor no puede leer tus archivos) está bien. Una copia de seguridad en la nube sin cifrar de PDF sensibles no es privada — el proveedor puede leerlo todo.",
    },
    {
      q: "¿Dónde falla esta organización?",
      a: "En dos sitios: cuando un flujo de trabajo exige una plataforma de pago concreta (sectores regulados), y cuando el destinatario usa en su lado un flujo que sí sube los archivos. La privacidad depende de las dos partes.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Herramientas PDF centradas en la privacidad", path: "/guides/privacy-first-pdf-tools" },
    { label: "El procesamiento local de PDF en el navegador, explicado", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Las ventajas de procesar documentos en el navegador", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
