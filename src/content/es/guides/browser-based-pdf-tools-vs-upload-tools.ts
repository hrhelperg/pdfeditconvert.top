import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Herramientas PDF en el navegador o con subida de archivos",
  description:
    "No todas las herramientas PDF «online» son iguales. La diferencia entre las que funcionan en tu navegador y las que suben tu archivo a un servidor — y cómo distinguirlas.",
  updated: "2026-05-23",
  intro: [
    "Dos herramientas PDF pueden parecer idénticas — la misma página web, el mismo cuadro para arrastrar y soltar, el mismo botón de descarga — y hacer algo completamente distinto con tu archivo. Una lo procesa directamente dentro de tu navegador, en tu propio dispositivo. La otra lo sube a un servidor, hace el trabajo allí y te devuelve el resultado. Desde fuera muchas veces no se nota, pero para cualquier cosa sensible la diferencia lo es todo.",
    "Esta guía explica esa distinción, por qué importa, y cómo saber con cuál estás trabajando. Las herramientas de este sitio son del primer tipo: funcionan en tu navegador y tu archivo nunca sale de tu dispositivo. Muchos servicios «PDF online» populares son del segundo tipo, aunque no lo dejen claro.",
    "No es que las herramientas con subida de archivos sean inútiles — es que deberías saber a quién le estás entregando tu documento, y elegir con conocimiento de causa.",
  ],
  steps: [
    {
      title: "Entiende qué significa realmente «en el navegador»",
      body: "Una herramienta de verdad basada en el navegador hace el procesamiento dentro de la propia página, usando el procesador de tu dispositivo. Tu archivo se lee en local y nunca se transmite — el trabajo ocurre donde el archivo ya está.",
    },
    {
      title: "Entiende qué hace una herramienta con subida de archivos",
      body: "Una herramienta de este tipo envía tu archivo a un servidor remoto, lo procesa allí y te devuelve el resultado. Tu documento vive brevemente en la infraestructura de otro, sujeto a sus políticas de retención y privacidad.",
    },
    {
      title: "Fíjate en las señales",
      body: "Una herramienta con subida de archivos suele mostrar una barra de progreso que depende de la velocidad de tu conexión, puede fallar sin internet, y a menudo menciona archivos que se «eliminan pasada una hora» — una frase que solo tiene sentido si primero tuvieron tu archivo.",
    },
    {
      title: "Pruébala sin conexión",
      body: "Carga la herramienta, desconecta tu internet e intenta usarla. Una herramienta genuinamente basada en el navegador sigue funcionando; una con subida de archivos no puede, porque no tiene dónde enviar el archivo.",
    },
    {
      title: "Ajusta la elección al documento",
      body: "Para archivos públicos y no sensibles, cualquiera de los dos tipos vale. Para contratos, documentos de identidad, extractos y trabajo de clientes, elige una herramienta basada en el navegador para que el documento nunca salga de tu dispositivo.",
    },
    {
      title: "Usa herramientas del dispositivo para las tareas sensibles",
      body: "Las herramientas de este sitio — unir, dividir, comprimir, convertir, girar y el resto — funcionan en tu navegador. Recurre a ellas cuando la privacidad de verdad importa.",
    },
  ],
  tips: [
    "«Online» no te dice si un archivo se sube. La pregunta real es dónde ocurre el procesamiento — tu dispositivo, o su servidor.",
    "La prueba sin conexión es la comprobación más fiable: una herramienta basada en el navegador sigue funcionando con tu conexión apagada, una con subida de archivos no.",
    "«Eliminamos tus archivos pasada una hora» solo tranquiliza si de entrada querías que se subieran. Una herramienta que nunca sube nada no tiene nada que eliminar.",
    "La velocidad es una pista: las herramientas basadas en el navegador no tienen espera de subida ni de descarga, así que los archivos grandes suelen ser más rápidos en local que yendo y viniendo de un servidor.",
    "Las herramientas con subida de archivos no son malvadas — para un folleto público está bien. Simplemente no les entregues un contrato o un documento de identidad sin pensarlo.",
  ],
  mobileNote:
    "En el móvil, una herramienta con subida de archivos también consume tus datos y se atasca con una conexión débil. La app PDF Editor procesa todo en el dispositivo y funciona por completo sin conexión — así puedes unir o comprimir un documento sensible en un tren sin cobertura y sin que nada salga de tu móvil.",
  faq: [
    {
      q: "¿Son todas las herramientas PDF online iguales?",
      a: "No. Algunas procesan tu archivo en el navegador, en tu dispositivo; otras lo suben a un servidor. Pueden parecer idénticas, así que la diferencia es fácil de pasar por alto — pero determina si tu documento sale de tu dispositivo.",
    },
    {
      q: "¿Cómo puedo saber si una herramienta sube mi archivo?",
      a: "Pruébala sin conexión. Una herramienta basada en el navegador sigue funcionando con tu conexión apagada; una con subida de archivos no puede, porque no tiene dónde enviarlo. Las herramientas con subida también suelen mostrar barras de progreso que dependen de la red.",
    },
    {
      q: "¿Son las herramientas de este sitio basadas en el navegador?",
      a: "Sí. Unir, dividir, comprimir, convertir, girar y las demás funcionan en tu navegador usando el procesador de tu dispositivo. Tus archivos nunca se suben.",
    },
    {
      q: "¿Está bien alguna vez usar una herramienta con subida de archivos?",
      a: "Para documentos públicos y no sensibles, sí. La precaución se aplica a contratos, documentos de identidad, extractos financieros y trabajo de clientes, donde una herramienta basada en el navegador mantiene el archivo en tu dispositivo.",
    },
    {
      q: "¿Por qué son a veces más rápidas las herramientas basadas en el navegador?",
      a: "No hay espera de subida ni de descarga. El archivo ya está en tu dispositivo, así que en documentos grandes el procesamiento local suele superar al viaje de ida y vuelta a un servidor.",
    },
  ],
  related: [
    { label: "Todas las herramientas PDF gratis — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Herramientas PDF que respetan tu privacidad", path: "/guides/privacy-first-pdf-tools" },
    { label: "App de PDF o herramientas PDF online", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Cómo comprimir un PDF online sin subirlo", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
};

export default content;
