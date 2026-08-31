import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "¿Son seguras las herramientas PDF online? Una mirada honesta al riesgo",
  description:
    "La mayoría de las herramientas PDF «online» suben tu archivo a un servidor. Algunas no. Los riesgos reales, las familias de herramientas que tratan tus datos de forma distinta, y cómo distinguirlas.",
  updated: "2026-05-29",
  intro: [
    "«Herramienta PDF online» es una expresión que esconde una distinción importante. Algunas de estas herramientas envían tu archivo a su servidor, lo procesan allí y te devuelven el resultado. Otras funcionan enteramente en tu navegador — tu archivo nunca sale de tu dispositivo. A ambas se las suele llamar «online», y la diferencia importa bastante en cuanto el contenido es sensible.",
    "La respuesta honesta a «¿son seguras?» es: depende de qué tipo estés usando y de qué contenga el archivo. Un extracto bancario que pasa por una herramienta que lo envía a un servidor supone un riesgo real, aunque la política de retención esté bien especificada. Ese mismo extracto en una herramienta que procesa en local nunca toca la red de nadie, así que el perfil de riesgo es completamente distinto.",
    "Esta guía separa las categorías sin alarmismo. Explica dónde están los riesgos reales, cómo leer rápido una política de privacidad, y cómo saber si una herramienta que te planteas usar envía el archivo a un servidor o lo procesa en local — sin fiarte solo de lo que dice el texto de marketing.",
  ],
  steps: [
    {
      title: "Identifica en qué categoría está la herramienta",
      body: "Tres categorías: (1) envío completo — el archivo va al servidor y se procesa allí. (2) Basada en el navegador con sincronización opcional — funciona en local pero ofrece funciones en la nube. (3) Solo navegador — nunca envía nada. La categoría determina el riesgo real.",
    },
    {
      title: "Revisa la política de privacidad en busca de la retención de datos",
      body: "Busca palabras como «conservar», «almacenar», «eliminar después de». Una política que dice «los archivos se eliminan en el plazo de una hora» te indica que es la categoría (1). Una que dice «los archivos no salen de tu dispositivo» indica la (3). Las políticas vagas son una señal de alerta.",
    },
    {
      title: "Observa el tráfico de red para comprobarlo",
      body: "Abre las herramientas de desarrollador, la pestaña de red, y arrastra tu PDF. Si ves una solicitud saliente grande al añadir el archivo, se está enviando a un servidor. Si no ves nada así, se está procesando en local. Es la comprobación más directa que existe.",
    },
    {
      title: "Ajusta la herramienta a la sensibilidad del archivo",
      body: "Los archivos sin importancia (fotos de vacaciones convertidas a PDF) pueden pasar por cualquier categoría. Los archivos sensibles (financieros, legales, médicos, personales) solo deberían pasar por la categoría (3) o por una herramienta de pago con garantías explícitas sobre el trato de los datos.",
    },
    {
      title: "Piensa qué significa «seguro» en tu caso",
      body: "A veces el riesgo es corporativo (no filtrar datos de un cliente). A veces es regulatorio (RGPD y normativas equivalentes). A veces es personal (evitar un robo de identidad). La herramienta adecuada depende de la amenaza real a la que te enfrentas.",
    },
    {
      title: "Por defecto, elige herramientas basadas en el navegador si tienes dudas",
      body: "Las herramientas basadas en el navegador que no envían nada a ningún servidor son seguras por diseño — el archivo no puede filtrarse desde un servidor que nunca lo ha recibido. Las herramientas de este sitio están en esa categoría.",
    },
  ],
  tips: [
    "Gratis + envía el archivo a un servidor + sin política de privacidad clara = evítala para cualquier cosa sensible. Es la combinación de mayor riesgo.",
    "Incluso las herramientas que envían el archivo con políticas de privacidad sólidas tienen una superficie de ataque real: brechas en el servidor, fallos de retención, acceso de empleados. El procesamiento local elimina esa superficie.",
    "No te fíes de afirmaciones tipo «no guardamos nada» sin comprobarlo. Observar el tráfico de red es la única forma de saberlo con certeza.",
    "Las herramientas basadas en el navegador también tienen sus límites — las operaciones pesadas y el OCR a veces necesitan ayuda de un servidor. Conoce el límite; no des por hecho más de lo que ofrecen.",
    "Si un flujo de trabajo exige de verdad enviar el archivo a un servidor (algo poco frecuente), elige una herramienta con una política de retención clara y usa una copia recién protegida con contraseña.",
  ],
  mobileNote:
    "Las herramientas PDF del móvil también se dividen entre las que envían el archivo a un servidor y las que solo procesan en local. La app PDF Editor procesa todo en el propio dispositivo en iOS y Android — sin enviar nada, sin cuenta, sin sincronización a menos que tú la actives. Para documentos sensibles en el móvil, ese es el ajuste correcto por defecto.",
  faq: [
    {
      q: "¿Es arriesgado de verdad enviar mi PDF a una herramienta online?",
      a: "Depende del archivo. Para un itinerario de vacaciones, el riesgo es mínimo. Para registros financieros o contratos, el riesgo es real — las brechas en servidores y los fallos de retención ocurren de verdad. Ajusta la herramienta al archivo.",
    },
    {
      q: "¿Cómo sé si una herramienta envía el archivo a un servidor o lo procesa en local?",
      a: "Abre las herramientas de desarrollador del navegador, la pestaña de red, y suelta un archivo. Si se dispara una solicitud de red saliente grande al añadir el archivo, se está enviando a un servidor. Si no, se está procesando en local.",
    },
    {
      q: "¿Son las herramientas de pago más seguras que las gratuitas?",
      a: "A veces. Las herramientas de pago suelen tener compromisos explícitos de retención y trato de datos. Algunas herramientas gratuitas (las de este sitio) funcionan en local y no necesitan esos compromisos porque nunca reciben tu archivo.",
    },
    {
      q: "¿Y el cifrado de extremo a extremo?",
      a: "Es útil para compartir, pero no ayuda con el procesamiento. Si un servidor tiene que leer tu archivo para comprimirlo, que el cifrado proteja el tránsito no cambia el hecho de que el servidor ve el contenido.",
    },
    {
      q: "¿Debería cifrar mi PDF antes de enviarlo a un servidor?",
      a: "Si de verdad tienes que enviarlo, sí. Un PDF protegido con contraseña llega al servidor ya protegido. Pero lo mejor es evitar por completo ese envío cuando el contenido es sensible.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Herramientas PDF centradas en la privacidad", path: "/guides/privacy-first-pdf-tools" },
    { label: "Herramientas PDF del navegador frente a herramientas que suben archivos", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "¿Las herramientas PDF online guardan tus archivos?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
