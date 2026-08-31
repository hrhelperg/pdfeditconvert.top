import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Cómo unir archivos PDF desde el móvil o el ordenador",
  description:
    "Combina varios PDF en un solo documento. Método paso a paso desde el móvil con la app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Combinar PDF es una de las operaciones documentales más habituales para una pequeña empresa o un estudiante. Ya sean recibos escaneados que van a la gestoría, artículos de investigación reunidos para una entrega, o un presupuesto que hay que ensamblar junto con su documentación de apoyo, enviar un único archivo ordenado es mejor que hacer malabares con cinco adjuntos.",
    "Esta guía muestra cómo unir PDF desde el móvil con la app PDF Editor para iPhone o Android. El flujo es el mismo en ambas plataformas: importa los archivos, arrástralos hasta el orden que quieras y exporta un único PDF combinado. Toda la operación suele durar menos de un minuto.",
    "Si prefieres unirlos en un ordenador, los principios sirven para la mayoría de herramientas de PDF modernas. El flujo móvil es el centro de esta guía porque es donde ocurren la mayoría de las uniones reales — entre reuniones, en la sede de un cliente o de camino a algún sitio.",
  ],
  steps: [
    {
      title: "Abre la app PDF Editor",
      body: "Inicia la app y toca la ficha Unir en la pantalla de inicio. No hace falta ninguna cuenta para empezar.",
    },
    {
      title: "Añade los archivos que quieres combinar",
      body: "Toca el botón +. Importa cada PDF desde Archivos, iCloud Drive, Google Drive, OneDrive, o compartiéndolo desde cualquier otra app. Puedes mezclar orígenes libremente.",
    },
    {
      title: "Reordena la cola",
      body: "Mantén pulsado cualquier elemento de la cola y arrástralo a la posición correcta. El orden de la cola es el orden del archivo final. Repasa la secuencia antes de unir.",
    },
    {
      title: "Gira las páginas apaisadas",
      body: "Si algún archivo de origen se escaneó de lado, toca el icono de girar junto a cada elemento afectado para que el documento unido se lea correctamente.",
    },
    {
      title: "(Opcional) Añade una portada",
      body: "Toca Añadir portada para insertar una sencilla página de título con la fecha y un titular de una línea. Útil cuando el documento unido va destinado a un cliente.",
    },
    {
      title: "Toca Unir",
      body: "La app combina todos los archivos en un único PDF y muestra el resultado para revisarlo. La unión ocurre en el dispositivo, así que incluso los archivos de origen protegidos con contraseña siguen siendo privados.",
    },
    {
      title: "Revisa el archivo unido",
      body: "Desplázate para comprobar que las páginas están en orden y la orientación es correcta. Usa la vista de miniaturas de Páginas para verificarlo rápidamente.",
    },
    {
      title: "Guarda o comparte",
      body: "Guarda en Archivos, sincroniza con una nube o comparte directamente por correo, AirDrop o cualquier app de mensajería. Elige un nombre de archivo descriptivo — «Contrato-con-Anexo-2026-05.pdf» funciona mejor que «Documento(3).pdf» cuando el archivo aparezca en la bandeja de entrada de alguien.",
    },
  ],
  tips: [
    "Añade una portada cuando el documento unido vaya a un destinatario externo — hace que el paquete parezca intencionado en lugar de improvisado.",
    "Gira las páginas escaneadas de lado antes de unir, no después — corregir la orientación más tarde implica volver a exportar todo el archivo.",
    "Si el PDF unido se va a enviar por correo, sigue con la herramienta Comprimir para que el resultado quede por debajo de los típicos límites de 25 MB de adjunto.",
    "Marca las secciones unidas mediante la vista de Páginas para que el destinatario pueda ir directo a la parte relevante de un documento largo.",
    "Conserva los archivos de origen originales hasta confirmar que la unión ha salido bien — nunca elimines los originales en la misma sesión.",
  ],
  mobileNote:
    "La unión en el móvil funciona especialmente bien cuando hay que combinar escaneos y PDF digitales — la app gestiona ambos en la misma cola, y puedes capturar un escaneo nuevo al momento para añadirlo a la unión. Eso es una operación incómoda en el ordenador y de un solo toque en el móvil.",
  faq: [
    {
      q: "¿Hay un número máximo de archivos que puedo unir?",
      a: "No hay un límite estricto. Los lotes muy grandes (más de 50 archivos) tardan más en móviles antiguos, pero la app gestiona sin problemas las uniones reales. Si notas problemas de rendimiento, divide el trabajo en dos uniones y combina los resultados.",
    },
    {
      q: "¿Puedo unir un documento Word con un PDF?",
      a: "Sí, de forma indirecta. Convierte antes el documento Word a PDF con la ficha Convertir, y luego añade el resultado a la cola de unión junto con tus otros PDF.",
    },
    {
      q: "¿Qué pasa con los archivos de origen protegidos con contraseña?",
      a: "Introduce la contraseña cuando se te pida. La app gestiona el descifrado en local; el resultado unido puede quedar sin protección o volver a protegerse con la contraseña que elijas.",
    },
    {
      q: "¿Cambiará el formato original tras la unión?",
      a: "No. Cada página de origen se conserva exactamente igual. Solo cambia el orden de las páginas, y se construye un PDF envolvente alrededor de ellas.",
    },
    {
      q: "¿Puedo deshacer una unión?",
      a: "Sí. La función Dividir PDF descompone cualquier PDF — unido u original — de nuevo en páginas o rangos individuales. Los originales nunca se modifican durante una unión.",
    },
  ],
  related: [
    { label: "Unir PDF — gratis, en tu navegador", path: "/merge-pdf" },
    { label: "Dividir PDF — extrae páginas en tu navegador", path: "/split-pdf" },
    { label: "Todas las herramientas gratuitas de PDF", path: "/pdf-tools" },
    {
      label: "Cómo comprimir un PDF después de unirlo",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Unir PDF", path: "/merge-pdf" },
};

export default content;
