import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "¿Se puede editar un formulario PDF? Qué se puede cambiar y qué no",
  description:
    "Editar las preguntas de un formulario PDF no tiene nada que ver con rellenarlo. Qué es editable, qué está bloqueado, y cómo cambiar un formulario del que solo tienes el PDF terminado.",
  updated: "2026-06-01",
  intro: [
    "«¿Se puede editar un formulario PDF?» suele esconder dos preguntas distintas. Una es: ¿puedo rellenarlo, escribir mis respuestas en los campos? Casi siempre sí. La otra es: ¿puedo cambiar el propio formulario — reformular una pregunta, añadir un campo, corregir una etiqueta? Eso depende por completo de cómo se hizo el formulario y de si se ha bloqueado.",
    "Rellenar un formulario es el caso habitual y casi nunca da problemas. Editar la estructura del formulario es el caso difícil, y que puedas hacerlo o no se reduce a tres cosas: si el archivo tiene texto realmente editable o es un escaneo plano, si el autor aplicó una seguridad que bloquea los cambios, y si dispones de una herramienta capaz de editar campos de formulario y no solo de rellenarlos.",
    "Esta guía separa con claridad las dos preguntas y repasa lo que es realmente posible cuando solo tienes el PDF terminado — con sus límites honestos incluidos, porque algunos formularios están construidos a propósito para resistirse a la edición.",
  ],
  steps: [
    {
      title: "Decide a qué tipo de edición te refieres",
      body: "Rellenar respuestas es una cosa; cambiar el texto, la maquetación o los campos del formulario es otra. Lo primero es fácil y esperable; lo segundo es lo que la gente suele querer decir con «editar un formulario», y está mucho más limitado.",
    },
    {
      title: "Comprueba si hay texto editable o un escaneo plano",
      body: "Intenta seleccionar el propio texto del formulario. Si se selecciona, el contenido es real y potencialmente editable. Si no se selecciona nada, es un escaneo plano — la imagen de un formulario — y editarlo significa pasar antes por el OCR o rehacer la maquetación.",
    },
    {
      title: "Comprueba si hay restricciones de seguridad",
      body: "Algunos formularios llevan permisos que permiten rellenar pero bloquean la edición, o incluso impiden cambios sin una contraseña. Si un editor de PDF muestra en gris las herramientas de edición, el archivo probablemente está restringido a propósito.",
    },
    {
      title: "Usa un editor capaz de gestionar campos reales",
      body: "Las herramientas de relleno solo te dejan responder los campos. Para añadir, mover, renombrar o eliminar campos, o cambiar las preguntas, necesitas un editor que exponga la estructura del formulario — no todas las apps lo hacen.",
    },
    {
      title: "Sabe cuándo pedir el archivo de origen",
      body: "Si necesitas cambios sustanciales, la vía más limpia suele ser pedir el documento editable original (un archivo de Word o la fuente del formulario) a quien lo creó, en lugar de pelearte con un PDF bloqueado.",
    },
  ],
  tips: [
    "Si solo necesitas completar el formulario, no necesitas editarlo en absoluto — basta con rellenar los campos o añadir texto a una copia no interactiva.",
    "Editar un formulario escaneado significa trabajar con una imagen: o le aplicas OCR para recuperar el texto, o colocas texto y casillas nuevas encima de las antiguas.",
    "Renombrar o reordenar campos de un formulario es edición de verdad y necesita una herramienta pensada para ello — los lectores básicos no pueden hacerlo.",
    "Respeta los formularios bloqueados: un ajuste de seguridad que impide editar suele ser una decisión deliberada del autor, no un fallo que sortear.",
    "Conserva una copia sin aplanar si crees que vas a revisar tus respuestas más tarde; una vez aplanado un formulario, las respuestas pasan a ser contenido fijo de la página.",
  ],
  mobileNote:
    "En el móvil, la app PDF Editor te deja rellenar cualquier formulario y editar el contenido del documento cuando el archivo lo permite. En los formularios no interactivos, añades texto directamente sobre la página en lugar de editar campos. El relleno y las ediciones ligeras ocurren en el dispositivo, y el original en blanco se mantiene intacto para reutilizarlo.",
  faq: [
    {
      q: "¿Puedo cambiar las preguntas de un formulario PDF?",
      a: "A veces. Si el formulario tiene texto realmente editable y no está bloqueado, un editor capaz de gestionar formularios puede cambiar el texto y los campos. Si es un escaneo plano o tiene restricciones de seguridad, editar las preguntas es mucho más difícil o está bloqueado.",
    },
    {
      q: "¿Por qué mi editor no me deja cambiar un formulario?",
      a: "O bien el archivo es una imagen plana sin texto editable, o lleva permisos que permiten rellenar pero no editar. Ambos casos son habituales y suelen ser intencionados.",
    },
    {
      q: "¿Puedo editar mis respuestas después de rellenar un formulario?",
      a: "Sí, siempre que lo hayas guardado como formulario interactivo y no lo hayas aplanado. Una vez aplanado, las respuestas se fusionan con la página y se vuelven fijas.",
    },
    {
      q: "¿Cómo edito un formulario escaneado sin campos?",
      a: "Trátalo como una imagen. Aplica OCR para recuperar texto editable, o simplemente coloca tu propio texto y tus marcas de verificación encima — para rellenarlo, el segundo método suele ser todo lo que necesitas.",
    },
    {
      q: "¿Es mejor editar el PDF o conseguir el archivo original?",
      a: "Para cambios grandes, pide a quien lo creó el documento de origen si puedes. Editar un PDF terminado, y posiblemente bloqueado, siempre está más limitado que trabajar desde el original.",
    },
  ],
  related: [
    { label: "¿Qué es un formulario PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "PDF editable o PDF rellenable",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "Cómo crear un PDF rellenable",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    { label: "¿Por qué no puedo editar un PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
