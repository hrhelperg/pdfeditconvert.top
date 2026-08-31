import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "PDF editable o PDF rellenable — ¿cuál es la diferencia?",
  description:
    "Editar un PDF es cambiar su contenido; rellenar un PDF es escribir respuestas en los campos de un formulario. Por qué son dos tareas distintas, y cuál necesitas de verdad.",
  updated: "2026-06-01",
  intro: [
    "«Editable» y «rellenable» suenan a lo mismo, y mucha gente los usa indistintamente, pero describen dos tareas distintas. Editar un PDF significa cambiar el propio documento: reformular una frase, sustituir un logotipo, mover un párrafo. Rellenar un PDF significa dejar el documento tal como lo pensó su autor y limitarte a escribir respuestas en los huecos reservados para ello. Un formulario está hecho para rellenarse, no para editarse.",
    "La distinción importa porque las herramientas y los permisos son diferentes. Un PDF editable te deja alterar el contenido de base. Un PDF rellenable te limita, a propósito, a sus campos de formulario, para que las preguntas y la maquetación se mantengan fijas mientras tú aportas las respuestas. Muchos formularios están deliberadamente bloqueados para edición: el autor quiere que la copia de todo el mundo plantee las mismas preguntas en el mismo sitio.",
    "Hay una tercera palabra que complica aún más las cosas — «plano» — que tiene que ver con si el texto de un PDF es real o solo una imagen. Esta guía se centra en editable frente a rellenable: qué significa cada cosa, cuándo necesitas cuál, y cómo saber qué permite un archivo concreto.",
  ],
  steps: [
    {
      title: "Define editar: cambiar el documento",
      body: "Editar altera el contenido que creó el autor — texto, imágenes, orden de las páginas. Editarías un PDF para corregir una errata en un contrato o actualizar un precio en un folleto. Cambia lo que dice el documento.",
    },
    {
      title: "Define rellenar: responder dentro de los campos",
      body: "Rellenar deja el documento intacto y solo añade tus respuestas en los campos o espacios designados. Rellenas una solicitud; no reescribes sus preguntas.",
    },
    {
      title: "Comprueba si un archivo es rellenable",
      body: "Toca donde debería ir una respuesta. Un cursor o una casilla resaltada indican que el formulario es rellenable mediante campos interactivos. Si no hay campos, aún puedes añadir texto por encima — un relleno manual en lugar de uno integrado.",
    },
    {
      title: "Comprueba si un archivo es editable",
      body: "Intenta seleccionar una línea del texto propio del documento. Si se selecciona y un editor de PDF te deja cambiarla, el contenido es editable. Las páginas escaneadas y los archivos bloqueados suelen resistirse a esto.",
    },
    {
      title: "Haz coincidir la herramienta con la tarea",
      body: "¿Necesitas cambiar lo que dice el documento? Usa un editor de PDF. ¿Necesitas completar un formulario que te han enviado? Usa el relleno de formularios — toca los campos o coloca texto donde van las respuestas, y luego exporta.",
    },
  ],
  tips: [
    "Un archivo puede ser rellenable pero no editable: puedes responder los campos, pero no cambiar las preguntas. Así está pensado en la mayoría de los formularios.",
    "Si un formulario hace una pregunta que no puedes responder en el espacio dado, no intentes editar el formulario — añade una nota aclaratoria donde se permita, o pregunta a quien lo envió.",
    "Editar más tarde las respuestas de un formulario terminado es posible si conservas una copia editable, pero las versiones aplanadas o escaneadas son mucho más difíciles de cambiar.",
    "Si eres el autor, decide de antemano: ¿quieres que la gente lo rellene (bloqueas el contenido, añades campos) o que colabore en él (lo mantienes editable)?",
    "Algunos PDF usan ajustes de seguridad que bloquean la edición mientras siguen permitiendo rellenar el formulario — una combinación deliberada, no un fallo.",
  ],
  mobileNote:
    "La app PDF Editor gestiona las dos tareas en el móvil: edita el texto y las imágenes de un documento cuando necesitas cambiar el contenido, o toca los campos de un formulario — y coloca texto en formularios no interactivos — cuando solo necesitas rellenarlo. Detecta los campos interactivos automáticamente y lo mantiene todo en el dispositivo.",
  faq: [
    {
      q: "¿Un PDF rellenable es lo mismo que un PDF editable?",
      a: "No. Rellenable significa que puedes introducir respuestas en los campos de un formulario sin cambiar el documento. Editable significa que puedes cambiar el contenido real del documento. Un formulario suele ser rellenable pero deliberadamente no editable.",
    },
    {
      q: "¿Puede un PDF ser editable y rellenable a la vez?",
      a: "Sí, si sus ajustes de seguridad lo permiten. Pero muchos formularios están bloqueados para que las preguntas y la maquetación no se puedan alterar, mientras que los campos siguen aceptando respuestas.",
    },
    {
      q: "No puedo editar las preguntas de un formulario — ¿está roto?",
      a: "Casi seguro que no. Los formularios suelen estar protegidos para que todas las copias pregunten lo mismo. Se supone que debes rellenar los campos, no reescribir el formulario.",
    },
    {
      q: "¿Cuál necesito para completar una solicitud que me han enviado?",
      a: "Rellenar, no editar. Introduce tus respuestas en los campos o coloca texto en la página si es no interactiva, y luego firma y exporta. No deberías necesitar cambiar el formulario en sí.",
    },
    {
      q: "¿En qué se diferencia esto de editable frente a plano?",
      a: "Editable frente a plano trata de si el texto de un PDF es real o una imagen. Editable frente a rellenable trata de si estás cambiando el documento o solo respondiéndolo. Están relacionadas, pero son preguntas distintas.",
    },
  ],
  related: [
    { label: "¿Qué es un formulario PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "PDF editable o PDF plano",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "¿Se puede editar un formulario PDF?",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor — editar y rellenar", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
