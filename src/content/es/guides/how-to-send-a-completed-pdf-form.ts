import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Cómo devolver un formulario PDF relleno (aplanar y enviar)",
  description:
    "Ya has rellenado el formulario; ahora toca devolverlo bien. Cómo aplanarlo para que las respuestas no se puedan cambiar, adjuntarlo correctamente, y confirmar que llegó sin perder datos.",
  updated: "2026-06-01",
  intro: [
    "Rellenar un formulario es solo la mitad del trabajo; devolvérselo intacto a quien lo envió es la otra mitad. Este es el viaje de vuelta — has completado un formulario que alguien te envió y ahora necesitas entregarlo para que tus respuestas lleguen exactamente como las escribiste, no se puedan borrar por accidente, y aterricen en un formato que el destinatario pueda abrir de verdad.",
    "Las dos cosas que suelen salir mal aquí son las respuestas que se esfuman por el camino (porque los datos de los campos no se guardaron ni se aplanaron) y los archivos que llegan como fotos incómodas de una pantalla. Ambas se evitan con un par de pasos deliberados antes de darle a enviar. Un PDF aplanado adjunto casi siempre es la respuesta correcta.",
    "Esta guía cubre cómo preparar el formulario completado, cómo elegir la vía de envío, y las pequeñas confirmaciones que ahorran una tanda de correos de «el formulario ha vuelto en blanco».",
  ],
  steps: [
    {
      title: "Haz una última comprobación de cada respuesta",
      body: "Repasa todo el formulario una vez más buscando campos obligatorios en blanco, la fecha, y tu firma. Detectar ahora una casilla que falta es mucho más barato que descubrirlo después de que te lo devuelvan.",
    },
    {
      title: "Guarda la copia rellena correctamente",
      body: "Exporta o guarda de forma que los valores de los campos queden escritos en el archivo. Si tus respuestas no sobreviven a cerrar y volver a abrir el archivo, la herramienta solo imprimió — cambia a una que guarde los datos del formulario.",
    },
    {
      title: "Aplana para que las respuestas queden bloqueadas",
      body: "Aplana el formulario completado antes de enviarlo. Esto fusiona tus respuestas con la página para que el visor del destinatario no las pueda editar ni borrar, y se muestran igual en todas partes.",
    },
    {
      title: "Adjunta el PDF directamente",
      body: "Envía el PDF aplanado como un archivo adjunto de correo normal, o súbelo al portal que haya indicado quien lo envió. Evita enviar una captura de pantalla o una foto del formulario a menos que se pida explícitamente eso.",
    },
    {
      title: "Confirma y guarda una copia",
      body: "Anota que lo has enviado y guarda tu propia copia del archivo completado. Si va a un portal, fíjate en si aparece una confirmación en pantalla o por correo de que la subida se completó.",
    },
  ],
  tips: [
    "Aplanar es el mejor hábito único para devolver formularios — garantiza que tus respuestas aparezcan para el destinatario.",
    "Nombra el archivo de forma útil, como «solicitud-perez-completada.pdf», para que el destinatario lo pueda archivar sin renombrarlo.",
    "Si un portal rechaza el archivo por tamaño, comprímelo en lugar de volver a rellenar tus respuestas — el contenido se mantiene intacto.",
    "Guarda tu propia copia completada; si surge una disputa o un seguimiento, querrás tener exactamente la versión que enviaste.",
    "Los requisitos de las administraciones y las empresas varían, así que sigue las instrucciones concretas de envío que te haya dado quien lo pidió por encima de estos pasos generales.",
  ],
  mobileNote:
    "En el móvil, la app PDF Editor exporta una copia completada y aplanada que puedes enviar directamente desde el menú para compartir — correo, subida a un portal, o mensaje — con tus respuestas bloqueadas en la página. Funciona en el dispositivo, así que los datos personales del formulario se mantienen privados al enviarlo.",
  faq: [
    {
      q: "¿Cómo me aseguro de que mis respuestas no desaparezcan al enviar un formulario?",
      a: "Guarda de forma que los valores de los campos queden escritos en el archivo, y luego aplana el formulario antes de enviarlo. Aplanar fusiona tus respuestas con la página para que no se puedan borrar y se muestren igual en cualquier lector.",
    },
    {
      q: "¿Debo aplanar un formulario completado antes de enviarlo por correo?",
      a: "Sí, en casi todos los casos. Una vez que has terminado de editar, aplanar bloquea las respuestas e impide que el visor del destinatario las descarte o las altere.",
    },
    {
      q: "¿Está bien enviar una foto del formulario relleno?",
      a: "Solo si es específicamente lo que se pide. Un PDF aplanado es más limpio, más legible y más fácil de archivar. Las fotos de pantallas o de impresos suelen llegar torcidas o de baja calidad.",
    },
    {
      q: "¿Qué hago si el portal de subida rechaza mi formulario?",
      a: "Suele ser un límite de tamaño o de formato. Comprime el PDF o comprueba los formatos aceptados — no necesitas volver a rellenarlo. El contenido se mantiene igual después de comprimir.",
    },
    {
      q: "¿Debería guardar una copia de lo que envié?",
      a: "Sí. Guarda tu propia copia completada por si surgen preguntas de seguimiento o una petición de reenvío, para poder volver a enviar exactamente la versión que presentaste.",
    },
  ],
  related: [
    {
      label: "Cómo guardar un formulario PDF relleno",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Cómo compartir un formulario PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Errores al enviar un formulario PDF",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
