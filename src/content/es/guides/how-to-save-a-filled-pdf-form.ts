import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "Cómo guardar un formulario PDF relleno sin perder las respuestas",
  description:
    "¿Rellenas un formulario y luego ves cómo desaparecen tus respuestas? Cómo guardar los datos de forma fiable, por qué algunos lectores no lo hacen, y cuándo aplanar antes de enviarlo.",
  updated: "2026-06-01",
  intro: [
    "Pocos momentos con un PDF son tan molestos como rellenar un formulario largo, cerrarlo, volver a abrirlo y encontrar cada campo en blanco otra vez. El trabajo no ha desaparecido porque hicieras algo mal — es que las respuestas viven en la capa de campos del formulario, y no todas las herramientas escriben de verdad esa capa en el archivo al guardar.",
    "Guardar un formulario relleno de forma fiable se reduce a dos cosas: usar una herramienta que almacene los valores de los campos (no solo una que los imprima), y decidir si mantener el formulario editable o aplanarlo para que las respuestas se vuelvan permanentes. Acierta en esas dos y tus respuestas se quedan siempre, en cualquier dispositivo que abra el archivo después.",
    "Esta guía explica exactamente cómo guardar las respuestas rellenadas, por qué algunos lectores las descartan sin avisar, y cuándo aplanar es la decisión correcta antes de devolver un formulario.",
  ],
  steps: [
    {
      title: "Rellena el formulario por completo primero",
      body: "Introduce todas las respuestas, marca las casillas y añade cualquier firma antes de guardar. Guardar a medias está bien, pero una última pasada primero significa que guardas un archivo terminado y no uno a medio hacer.",
    },
    {
      title: "Usa Guardar o Exportar, no solo Imprimir",
      body: "Elige Guardar o Exportar para escribir los valores de los campos en el PDF. Algunos lectores básicos solo ofrecen Imprimir, lo que produce papel o una copia plana pero nunca guarda las respuestas editables — la causa clásica de los datos desaparecidos.",
    },
    {
      title: "Guarda como copia nueva",
      body: "Exporta a un nombre de archivo nuevo, como «solicitud-completada.pdf», en lugar de sobrescribir el original en blanco. Así conservas un original limpio y una versión guardada y rellena, uno al lado del otro.",
    },
    {
      title: "Decide si aplanar",
      body: "Si todavía necesitas cambiar respuestas, mantenlo como formulario interactivo. Si lo vas a enviar definitivamente, aplánalo para que los valores se fusionen con la página y no se puedan borrar ni editar.",
    },
    {
      title: "Vuelve a abrirlo para confirmar que se ha quedado",
      body: "Cierra y vuelve a abrir el archivo guardado antes de enviarlo. Si tus respuestas siguen ahí, los valores de los campos se escribieron correctamente. Si han desaparecido, la herramienta solo imprimió — cambia a una que guarde los datos del formulario.",
    },
  ],
  tips: [
    "Si las respuestas no dejan de desaparecer, la herramienta no está escribiendo la capa de campos. Usa un editor capaz de gestionar formularios que guarde de verdad los valores de los campos.",
    "Aplanar es la forma más fiable de garantizar que las respuestas se muestren en todas partes — una vez aplanado, no queda ninguna capa de campos que se pueda perder.",
    "Conserva el original en blanco por separado; aplanar tu copia rellena no debería costarte una plantilla reutilizable.",
    "En el móvil, «compartir» o «exportar» suele guardar los datos; un atajo de imprimir a PDF puede aplanarlo, lo cual está bien si ya has terminado de editar.",
    "Nombra los archivos con claridad — en blanco, borrador y final — para no enviar por correo el formulario vacío por error.",
  ],
  mobileNote:
    "La app PDF Editor guarda las respuestas rellenadas dentro del archivo y puede exportar una copia aplanada cuando estés listo para enviarla, así que nada se borra en el lado del destinatario. Todo ocurre en el dispositivo, así que los detalles que introduces no se suben a ningún sitio.",
  faq: [
    {
      q: "¿Por qué desaparecen mis respuestas de un formulario PDF después de guardar?",
      a: "Porque la herramienta imprimió el formulario en lugar de guardar los valores de los campos. Las respuestas viven en una capa separada; si no se escribe de vuelta en el archivo, al reabrirlo vuelven a verse los espacios en blanco. Usa una herramienta que guarde los datos del formulario.",
    },
    {
      q: "¿Debo aplanar un formulario antes de enviarlo?",
      a: "Si has terminado de editar, sí. Aplanar fusiona tus respuestas con la página para que no se puedan borrar y se muestren igual en todos los lectores. Conserva una copia sin aplanar solo si crees que la vas a revisar.",
    },
    {
      q: "¿Cómo mantengo el formulario editable pero sigo guardando mis respuestas?",
      a: "Guarda o exporta como PDF interactivo sin aplanar. Una herramienta capaz de gestionar formularios almacena los valores de los campos para que puedas reabrirlo y cambiarlos más tarde.",
    },
    {
      q: "¿Es privado guardar un formulario relleno?",
      a: "Depende de la herramienta. La app PDF Editor y las herramientas locales del navegador guardan en tu dispositivo, así que los datos personales que introdujiste no se envían a ningún sitio. Las herramientas basadas en subir el archivo lo procesan en un servidor.",
    },
    {
      q: "¿Puedo guardar un formulario no interactivo que rellené con texto por encima?",
      a: "Sí. Como los formularios no interactivos no tienen capa de campos, el texto que añades forma parte de la página una vez exportado, así que siempre se guarda y se muestra de forma fiable.",
    },
  ],
  related: [
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    { label: "Cómo funcionan los formularios PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "¿Por qué no se guarda mi formulario PDF?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Cómo devolver un formulario PDF relleno",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
