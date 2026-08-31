import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "¿Por qué no puedo escribir en este formulario PDF? Causas y soluciones",
  description:
    "Haces clic en un campo y no pasa nada. Las tres razones habituales — un formulario no interactivo, el lector equivocado o un archivo bloqueado — y qué hacer en cada caso.",
  updated: "2026-06-01",
  intro: [
    "Abres un formulario, haces clic donde debería ir tu nombre, y... nada. Ni cursor, ni casilla, ni forma de escribir. Da la sensación de que el formulario está roto, pero casi nunca lo está. La incapacidad de escribir se reduce a una de tres causas concretas, cada una con una solución clara en cuanto sabes ponerle nombre.",
    "La primera y más habitual es que el formulario sea no interactivo: no hay campos interactivos en los que escribir, solo la imagen de un formulario. La segunda es que lo estés abriendo en un lector que no gestiona bien los campos de formulario. La tercera es que el formulario esté bloqueado o sea de solo lectura, impidiendo la entrada a propósito. Distinguirlas lleva un par de comprobaciones rápidas.",
    "Esta guía repasa las tres causas por orden, muestra cómo confirmar cuál te está afectando, y da la solución práctica para cada una, para que puedas conseguir que tus respuestas lleguen a la página.",
  ],
  steps: [
    {
      title: "Confirma si el formulario tiene campos siquiera",
      body: "Toca varios espacios en blanco distintos. Si ninguno produce un cursor ni un resalte en ningún punto de la página, el formulario es casi con toda seguridad no interactivo — no hay campos en los que escribir, ya sea por diseño o porque se escaneó.",
    },
    {
      title: "Si es no interactivo, añade texto por encima",
      body: "En los formularios no interactivos no se puede escribir, pero puedes colocar tu propio texto y tus marcas de verificación sobre la página con la herramienta de texto de un editor de PDF. Esa es la forma prevista de completar un formulario escaneado o sin campos.",
    },
    {
      title: "Descarta el lector como causa",
      body: "Algunos navegadores y visores ligeros muestran un formulario pero ignoran sus campos. Abre el mismo archivo en una app de PDF dedicada. Si de repente los campos funcionan, el problema era el lector original.",
    },
    {
      title: "Comprueba si el formulario está bloqueado o es de solo lectura",
      body: "Si los campos existen pero rechazan la entrada en todas partes, el formulario puede estar protegido o marcado como de solo lectura. Busca un icono de candado o un aviso de «protegido». Un formulario de solo lectura bloquea la escritura a propósito.",
    },
    {
      title: "Sortea un formulario bloqueado",
      body: "En un formulario de solo lectura, a menudo puedes seguir colocando texto por encima como si fuera no interactivo, o pedir a quien lo envió una versión sin bloquear. No intentes vencer la seguridad de un formulario que no es tuyo para alterar.",
    },
  ],
  tips: [
    "El diagnóstico más rápido: prueba el mismo archivo en una app de PDF de verdad. Distingue de inmediato «formulario no interactivo» de «lector defectuoso».",
    "Añadir texto por encima funciona en casi cualquier formulario, no interactivo o bloqueado, y suele ser la vía más rápida hacia una página completada.",
    "Un formulario que escribe bien en un ordenador pero no en la vista previa de correo de un móvil es un problema del lector — ábrelo en una app de PDF real en su lugar.",
    "Si solo algunos campos rechazan la escritura, esos campos concretos pueden estar calculados o bloqueados mientras el resto sigue abierto.",
    "El aspecto y el comportamiento de un formulario pueden variar entre lectores de PDF, así que «aquí no funciona» rara vez significa «está roto en todas partes».",
  ],
  mobileNote:
    "En el móvil, la app PDF Editor escribe en los campos interactivos donde existen y te deja colocar texto directamente en los formularios no interactivos o bloqueados donde no — así que un formulario que no aceptaba escritura en la vista previa de tu correo se vuelve rellenable. Funciona en el dispositivo, sin subir nada.",
  faq: [
    {
      q: "¿Por qué no puedo escribir en mi formulario PDF?",
      a: "Normalmente por una de tres razones: el formulario es no interactivo y no tiene campos, tu lector no admite campos de formulario, o el formulario está bloqueado o es de solo lectura. Identifica cuál es, y luego añade texto por encima, cambia de lector, o pide una copia sin bloquear.",
    },
    {
      q: "¿Cómo escribo en un formulario PDF no interactivo?",
      a: "No puedes escribir en campos porque no hay ninguno. En su lugar, usa un editor de PDF para colocar texto y marcas de verificación directamente en la página donde va cada respuesta, y luego exporta el archivo.",
    },
    {
      q: "¿Por qué el formulario funciona en mi ordenador pero no en mi móvil?",
      a: "Es probable que tu móvil lo esté mostrando en una app que ignora los campos de formulario. Abre el archivo en una app de PDF dedicada y los campos deberían activarse.",
    },
    {
      q: "¿Qué significa que un formulario PDF sea de solo lectura?",
      a: "Es un formulario que su autor protegió para que los campos no se puedan editar ni recibir texto. A menudo puedes seguir colocando texto por encima, o pedir a quien lo envió una versión que permita la entrada.",
    },
    {
      q: "¿Puede un formulario aceptar texto solo en parte?",
      a: "Sí. Algunos campos pueden estar bloqueados o calculados automáticamente mientras otros aceptan entrada. Rellena los que estén abiertos y añade texto a mano en los que no puedas alcanzar.",
    },
  ],
  related: [
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "¿Por qué mi formulario PDF es de solo lectura?",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "¿Han desaparecido los campos de un formulario PDF?",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
