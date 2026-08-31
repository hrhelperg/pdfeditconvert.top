import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "¿Las herramientas PDF online guardan tus archivos? Qué comprobar",
  description:
    "Algunas herramientas PDF online borran lo que subes al instante, otras lo conservan horas, otras indefinidamente. Cómo leer rápido una política de privacidad y qué buscar en ella.",
  updated: "2026-05-29",
  intro: [
    "Cuando una herramienta PDF gratuita te pide que subas tu archivo, una pregunta honesta es: ¿qué pasa con ese archivo después? La respuesta varía muchísimo. Algunas herramientas borran lo que has subido en cuanto termina la conversión. Otras lo conservan una hora «por comodidad». Otras lo retienen más tiempo con un lenguaje vago sobre «mejora del servicio». Otras lo usan para entrenar modelos de los que ni siquiera tienes noticia.",
    "La política de privacidad lo dice, pero la política de privacidad suele ser larga, a menudo vaga y a veces desactualizada. Una lectura dirigida lleva un minuto y te da lo que de verdad necesitas saber. Y para archivos lo bastante sensibles como para que la retención importe, lo más seguro es elegir directamente una herramienta que no envíe nada a ningún servidor.",
    "Esta guía recorre esa lectura rápida de la política de privacidad, explica los patrones que hay que buscar, y señala la alternativa más segura cuando el propio envío del archivo ya es el problema.",
  ],
  steps: [
    {
      title: "Localiza la política y ve directamente a la retención",
      body: "La política de privacidad suele estar enlazada en el pie de página. Busca en la página (Ctrl+F) «conservar», «eliminar», «almacenar», «almacenamiento». Esas palabras te llevan directamente al apartado de retención.",
    },
    {
      title: "Lee las cifras reales de retención",
      body: "«Los archivos se eliminan en el plazo de una hora» es concreto y tranquilizador. «Eliminamos los archivos cuando ya no son necesarios» es vago y puede significar cualquier cosa. Los compromisos con cifras importan; las intenciones no.",
    },
    {
      title: "Comprueba qué se guarda además del archivo en sí",
      body: "Los metadatos (nombre del archivo, tamaño, tipo, dirección IP) suelen conservarse más tiempo que el contenido del archivo. Para la mayoría de los usos, esa retención de metadatos es aceptable; para un trabajo muy sensible, incluso eso es una señal de alerta.",
    },
    {
      title: "Busca cláusulas sobre datos de entrenamiento",
      body: "Algunas herramientas gratuitas se reservan el derecho de usar los archivos subidos para mejorar el servicio o entrenar modelos. Busca «mejorar», «entrenar», «analítica». Si aparece, trátalo como una señal de alerta más fuerte para contenido sensible.",
    },
    {
      title: "Revisa el apartado de terceros",
      body: "Aunque la herramienta no conserve tu archivo, puede compartirlo con proveedores de alojamiento, subencargados o proveedores de analítica. Cada uno es una parte más con acceso al archivo. Busca «proveedores de servicios», «subencargados», «terceros».",
    },
    {
      title: "Elige por defecto el procesamiento local para cualquier cosa sensible",
      body: "Si la herramienta funciona en tu navegador sin enviar nada (compruébalo con las herramientas de desarrollador), la retención deja de ser una pregunta — no hay nada que retener. Usa esa vía cuando la conservación del archivo importe.",
    },
  ],
  tips: [
    "Gratis + retención vaga + terceros poco claros = evítala para archivos sensibles. Es la combinación de mayor riesgo.",
    "Ni siquiera una política de retención impecable es una garantía. Las brechas en servidores ocurren. La única opción de riesgo cero es no enviar el archivo.",
    "Trata cualquier archivo que hayas enviado a un servidor como comprometido para cualquier fin que no puedas auditar. Si no publicarías el archivo en público, piénsatelo dos veces antes de enviarlo.",
    "Si de verdad tienes que enviarlo, protege primero el archivo con contraseña. La herramienta solo ve un contenido cifrado; el cifrado protege lo de dentro.",
    "No te fíes de afirmaciones tipo «no guardamos nada» sin comprobarlo — el texto de la política de privacidad y el comportamiento real pueden no coincidir.",
  ],
  mobileNote:
    "Las apps del móvil suelen tener políticas de privacidad separadas en la tienda de aplicaciones o en los ajustes. La app PDF Editor procesa en local y no envía tus archivos a ningún sitio, así que la retención sencillamente no aplica. Para trabajar con material sensible desde el móvil, quedarse solo en local es la opción más limpia por defecto.",
  faq: [
    {
      q: "¿Cuánto tiempo conservan los archivos la mayoría de las herramientas PDF online?",
      a: "Varía mucho: desde minutos hasta indefinidamente. Las herramientas comerciales grandes suelen borrar en el plazo de una hora; las herramientas pequeñas y gratuitas son inconsistentes. Lee cada política de privacidad por separado.",
    },
    {
      q: "¿Es suficientemente segura una retención corta?",
      a: "Depende del archivo. Para documentos normales, una hora está bien. Para material realmente sensible, cualquier periodo de retención es una ventana de riesgo real.",
    },
    {
      q: "¿Los archivos borrados desaparecen de verdad?",
      a: "Normalmente sí del almacenamiento activo, pero las copias de seguridad y las réplicas pueden conservar copias durante más tiempo. Un borrado verdaderamente seguro es técnicamente más difícil de lo que parece.",
    },
    {
      q: "¿Las herramientas gratuitas siempre retienen más que las de pago?",
      a: "Es una tendencia, no una regla. Algunas herramientas gratuitas tienen una retención impecable; algunas de pago tienen cláusulas sorprendentes. Lee las dos.",
    },
    {
      q: "¿Cuál es el camino más seguro para un PDF sensible?",
      a: "Herramientas basadas en el navegador que procesan en local (sin enviar nada). Si de verdad tienes que enviarlo, protege primero el archivo con contraseña y elige una herramienta con compromisos explícitos de borrado.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "¿Son seguras las herramientas PDF online?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Herramientas PDF del navegador frente a herramientas que suben archivos", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Cómo evitar subir documentos sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
