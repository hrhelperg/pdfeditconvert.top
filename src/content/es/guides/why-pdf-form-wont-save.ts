import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "¿Por qué no se guarda mi formulario PDF? Y cómo arreglarlo",
  description:
    "¿Rellenas un formulario y las respuestas desaparecen al reabrirlo? Por qué algunos lectores solo imprimen en vez de guardar los datos, y los métodos fiables para que todo se quede en su sitio.",
  updated: "2026-06-01",
  intro: [
    "Te pasas diez minutos rellenando un formulario, lo guardas, lo vuelves a abrir más tarde, y cada campo está en blanco otra vez. Es exasperante, y no es un error tuyo — es que los valores de los campos de un formulario viven en una capa separada de la página, y no todas las herramientas escriben de verdad esa capa de vuelta en el archivo al guardar. Algunas solo pueden imprimir el formulario, nunca almacenar tu entrada.",
    "Hay dos soluciones fiables: usar una herramienta que guarde de verdad los datos del formulario, o aplanar el formulario para que tus respuestas se conviertan en contenido permanente de la página que nada pueda descartar. Cuál elijas depende de si todavía necesitas editar las respuestas más tarde. En cualquier caso, el problema de las respuestas desaparecidas se puede resolver por completo.",
    "Esta guía explica por qué falla el guardado, cómo confirmar si el problema es tu herramienta, y las dos formas fiables de conseguir que las respuestas rellenadas se queden donde están.",
  ],
  steps: [
    {
      title: "Confirma que las respuestas de verdad no se guardan",
      body: "Rellena un campo, guarda, cierra el archivo por completo, y vuelve a abrirlo. Si la respuesta ha desaparecido, los valores de los campos no se están escribiendo — es un problema de guardado, no algo que hicieras mal.",
    },
    {
      title: "Usa Guardar o Exportar, nunca solo Imprimir",
      body: "Elige Guardar o Exportar para escribir los valores de los campos en el PDF. Una ruta de solo imprimir (habitual en los lectores básicos) produce una salida pero nunca guarda las respuestas editables — la causa clásica de los datos desaparecidos.",
    },
    {
      title: "Cambia a una herramienta capaz de gestionar formularios",
      body: "Si tu app actual solo imprime, lleva el formulario a una app de PDF dedicada o una herramienta de navegador que guarde de verdad los datos del formulario. Vuelve a abrir el archivo guardado para confirmar que las respuestas se mantuvieron.",
    },
    {
      title: "Aplana para hacer las respuestas permanentes",
      body: "Si has terminado de editar, aplana el formulario. Aplanar fusiona los valores con la página, así que no queda ninguna capa separada que se pueda perder y las respuestas sobreviven en todas partes.",
    },
    {
      title: "Guarda como copia nueva",
      body: "Exporta a un nombre de archivo nuevo para conservar tanto un original limpio como una versión guardada y rellena — y no sobrescribir nunca el máster por accidente con un formulario vacío.",
    },
  ],
  tips: [
    "Si las respuestas se esfuman, tu herramienta solo está imprimiendo, no guardando la capa de campos — cambia a una que escriba los datos del formulario.",
    "Aplanar es la solución más segura: una vez aplanado, no queda ninguna capa de campos que se pueda perder.",
    "Vuelve a abrir siempre un formulario guardado antes de confiar en él; la prueba de cerrar y reabrir detecta el problema de inmediato.",
    "Mantén el original en blanco por separado para que aplanar tu copia rellena nunca te cueste la plantilla reutilizable.",
    "En el móvil, un atajo de «imprimir a PDF» suele aplanar — está bien si ya has terminado, pero no mantiene el formulario editable.",
  ],
  mobileNote:
    "La app PDF Editor escribe las respuestas rellenadas dentro del archivo y puede exportar una copia aplanada cuando termines, así que nada desaparece al reabrir ni en el lado del destinatario. Guarda en el dispositivo, así que los datos que introdujiste se mantienen privados.",
  faq: [
    {
      q: "¿Por qué mi formulario PDF sigue guardándose en blanco?",
      a: "Porque tu lector está imprimiendo el formulario en lugar de guardar sus valores de campos. Las respuestas viven en una capa de campos separada; si no se escribe en el archivo, al reabrir vuelves a ver los espacios en blanco. Usa una herramienta que guarde los datos del formulario, o aplánalo.",
    },
    {
      q: "¿Cómo consigo que mis respuestas del formulario se queden fijas?",
      a: "Guarda o exporta con una herramienta capaz de gestionar formularios para que los valores de los campos se escriban en el archivo, y luego vuelve a abrirlo para confirmarlo. Para un resultado permanente, aplana el formulario para que las respuestas se fusionen con la página.",
    },
    {
      q: "¿Qué hace el aplanado para el guardado?",
      a: "Fusiona tus valores rellenados con la propia página, sin dejar ninguna capa de campos separada que se pueda perder. Después de aplanar, las respuestas se guardan y se muestran de forma fiable en cualquier lector.",
    },
    {
      q: "¿Debería sobrescribir el original o guardar una copia?",
      a: "Guarda una copia con un nombre nuevo. Así conservas un máster limpio en blanco y tu versión rellena por separado, para no perder nunca la plantilla reutilizable ni enviar un formulario vacío por error.",
    },
    {
      q: "¿Es lo mismo que un formulario de solo lectura?",
      a: "No. Un problema de «no se guarda» significa que tu herramienta no está almacenando los datos del campo. Un formulario de solo lectura bloquea activamente la edición. Si puedes escribir pero no conservar las respuestas, es un problema de guardado, no de seguridad.",
    },
  ],
  related: [
    {
      label: "Cómo guardar un formulario PDF relleno",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    {
      label: "¿Por qué mi formulario PDF es de solo lectura?",
      path: "/guides/why-pdf-form-is-read-only",
    },
    { label: "Cómo funcionan los formularios PDF", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
