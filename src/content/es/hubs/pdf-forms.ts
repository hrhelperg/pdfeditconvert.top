import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Formularios PDF",
    h1: "Formularios PDF — rellena, firma y gestiona un PDF rellenable",
    highlight: "Formularios PDF",
    lead: "Declaraciones de la renta, solicitudes, fichas de admisión, formularios de consentimiento: la mayoría llegan en PDF. Descubre cómo funcionan de verdad los formularios PDF, cómo rellenar tanto los interactivos como los no interactivos, y cómo resolver los problemas más habituales, sin imprimir ni una sola página.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué los formularios PDF desconciertan tanto",
    paragraphs: [
      "Un formulario PDF parece una sola cosa, pero en realidad hay dos tipos. Algunos son interactivos: quien los diseñó añadió campos de verdad en los que puedes tocar y escribir. Otros son no interactivos: un formulario escaneado, o impreso y luego guardado, sin ningún campo, donde tienes que colocar tu propio texto encima. Los dos se comportan de forma completamente distinta, y la mayor parte de la frustración con los formularios viene de no saber con cuál te has encontrado.",
      "Además, los formularios fallan de formas que un PDF normal no falla. Los campos desaparecen en el visor equivocado, las respuestas escritas se niegan a guardarse, el formulario se abre en modo solo lectura, o los valores que rellenaste no aparecen al imprimir. Nada de esto significa que el formulario esté roto: son problemas previsibles, con soluciones previsibles, en cuanto entiendes qué está pasando por debajo.",
      "Este hub reúne todo en un solo sitio: los fundamentos de cómo funcionan los formularios, el paso a paso para rellenarlos en el ordenador o en el móvil, los métodos de empresa para recoger información de clientes y un conjunto de soluciones para cuando un formulario no coopera. El aspecto y el comportamiento de un formulario pueden variar entre visores de PDF, así que las guías son honestas sobre lo que funciona en todas partes y lo que depende de la herramienta con la que abras el archivo.",
    ],
  },
  features: {
    heading: "Lo que puedes hacer con los formularios PDF",
    items: [
      {
        icon: "FileText",
        title: "Rellena campos interactivos",
        body: "Toca un campo de verdad y escribe. Muévete entre campos, marca casillas y elige en listas desplegables donde quien lo diseñó las haya incluido.",
      },
      {
        icon: "TextCursorInput",
        title: "Completa formularios no interactivos",
        body: "¿Sin campos? Coloca tu propio texto y tus marcas donde haga falta en la página, justo donde debe ir cada respuesta en un formulario escaneado o impreso.",
      },
      {
        icon: "PenLine",
        title: "Firma donde se necesite",
        body: "Añade una firma escrita o manuscrita en la zona de firma, tanto si el campo es interactivo como si es solo una línea en un formulario no interactivo.",
      },
      {
        icon: "Save",
        title: "Guarda una copia completada",
        body: "Exporta una versión terminada que puedas devolver directamente, y conserva el original en blanco para la próxima vez.",
      },
      {
        icon: "Lock",
        title: "Aplana antes de enviar",
        body: "Bloquea tus respuestas en la página para que no se puedan cambiar ni borrar por error en el visor de quien lo reciba.",
      },
      {
        icon: "Smartphone",
        title: "Hazlo todo desde el móvil",
        body: "El formulario llega por correo y vuelve por el mismo camino: rellenarlo y firmarlo desde el móvil es una de las tareas de PDF más genuinamente móviles que existen.",
      },
    ],
  },
  steps: {
    heading: "Rellenar un formulario PDF, de principio a fin",
    items: [
      {
        title: "Abre el formulario y comprueba el tipo",
        body: "Abre el PDF y toca donde debería ir una respuesta. Si aparece un cursor, tiene campos interactivos. Si no pasa nada, es un formulario no interactivo y añadirás el texto encima.",
      },
      {
        title: "Rellena los campos",
        body: "En los formularios interactivos, toca y escribe, pasando de un campo a otro. En los no interactivos, usa la herramienta de texto para colocar las respuestas con precisión en cada línea.",
      },
      {
        title: "Resuelve casillas, fechas y firmas",
        body: "Marca las casillas o coloca una marca, añade la fecha donde se pida, y usa la herramienta de firma en cualquier zona de firma.",
      },
      {
        title: "Revisa todos los campos obligatorios",
        body: "Repasa el formulario en busca de huecos en blanco. Un formulario rechazado por una sola fecha que falta cuesta más tiempo del que habría costado revisarlo.",
      },
      {
        title: "Guarda, aplana y envía",
        body: "Exporta una copia completada, aplánala para bloquear las respuestas y devuélvela por correo o subiéndola. Conserva el original en blanco.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Los formularios en el móvil",
    body: "Un formulario llega a tu bandeja de entrada mientras estás lejos de tu escritorio. Con el móvil puedes abrirlo, rellenar los campos o añadir texto sobre un escaneo no interactivo, firmarlo y devolverlo antes de haber encontrado una silla: sin impresora, sin escáner, sin esperar a llegar a casa. La app PDF Editor detecta los campos interactivos cuando existen, te deja colocar texto y marcas donde haga falta cuando no los hay, y mantiene los datos personales del formulario en tu dispositivo.",
  },
  faq: [
    {
      q: "¿Cuál es la diferencia entre un formulario PDF interactivo y uno no interactivo?",
      a: "Un formulario interactivo tiene campos que incluyó quien lo diseñó: tócalo y aparece un cursor para escribir. Un formulario no interactivo es básicamente la imagen de un formulario, sin ningún campo, así que añades tu propio texto encima. Los dos se pueden rellenar; solo necesitan un manejo ligeramente distinto.",
    },
    {
      q: "¿Tengo que imprimir un formulario PDF para rellenarlo?",
      a: "Casi nunca. Tanto los formularios interactivos como los no interactivos se pueden completar en digital: escribe en los campos o coloca el texto sobre la página, y luego firma y exporta. Imprimir solo compensa si quien lo recibe exige expresamente una firma manuscrita sobre papel.",
    },
    {
      q: "¿Por qué no puedo escribir en algunos formularios PDF?",
      a: "Suele ser una de estas tres razones: el formulario es no interactivo (no hay campos donde escribir), tu visor no admite campos de formulario, o el archivo está en modo solo lectura o protegido. Las guías de solución de problemas de este hub repasan cada causa.",
    },
    {
      q: "¿El formulario que rellene se verá igual para quien lo reciba?",
      a: "La mayoría de las veces sí, pero no siempre: el aspecto de un formulario puede variar entre visores de PDF. Aplanar el formulario completado antes de enviarlo bloquea las respuestas en la página para que se muestren igual dondequiera que se abra.",
    },
    {
      q: "¿Es privado rellenar un formulario online?",
      a: "Depende de la herramienta. La app PDF Editor rellena los formularios en tu dispositivo, así que la información personal que introduces no se sube a ningún sitio. Las herramientas basadas en el navegador que se ejecutan en local también mantienen el archivo en tu equipo.",
    },
  ],
  related: [
    { label: "Qué es un formulario PDF", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Cómo crear un PDF rellenable",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "El formulario PDF no funciona: empieza aquí",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor: rellenar y firmar en el móvil", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Rellena y firma tus formularios PDF desde el móvil.",
    sub: "Gratis en iOS y Android. Nada que subir a ningún servidor.",
  },
};

export default content;
