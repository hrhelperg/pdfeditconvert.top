import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Cómo funcionan los formularios PDF — campos, AcroForm y escaneos planos",
  description:
    "Por debajo, un formulario PDF es un conjunto de campos interactivos sobre la página, o una simple imagen sin ninguno. Cómo se construye cada uno y por qué eso importa a la hora de rellenarlo.",
  updated: "2026-06-01",
  intro: [
    "Ayuda entender qué pasa realmente dentro de un formulario PDF, porque eso explica casi todas las rarezas con las que te vas a topar. Una página PDF es una maquetación fija: texto, líneas e imágenes colocados en coordenadas exactas. Un formulario añade una capa aparte sobre esa maquetación: campos interactivos, cada uno una pequeña casilla que sabe que es un campo de texto, una casilla de verificación, un desplegable o una zona de firma.",
    "Cuando un formulario tiene esa capa de campos, tu lector de PDF dibuja casillas editables en los puntos donde su diseñador las colocó. Escribes, y el lector guarda tu entrada en el campo en lugar de grabarla en la página. Esa separación explica por qué las respuestas ya rellenadas a veces se borran, se modifican o no llegan a guardarse: viven en la capa de campos, no en la propia página, hasta que las aplanas.",
    "Los formularios no interactivos prescinden por completo de la capa de campos. Son solo la imagen de la página, así que no hay nada interactivo en lo que escribir; añades tus propios objetos de texto encima. Esta guía repasa cómo se construyen ambos tipos, qué hace el aplanado, y por qué el mismo formulario puede comportarse de forma distinta según la app.",
  ],
  steps: [
    {
      title: "La capa de página: fija y definitiva",
      body: "Todo PDF tiene una capa de página con el texto y los gráficos anclados a posiciones exactas. Eso es lo que hace que un PDF se vea igual en todas partes. En un formulario no interactivo, las líneas de las preguntas y las etiquetas viven enteramente aquí.",
    },
    {
      title: "La capa de campos: la interactividad por encima",
      body: "Los formularios interactivos añaden una capa de campos de formulario sobre la página — campos de texto, casillas de verificación, botones de opción, desplegables, campos de firma. Cada campo tiene un nombre y un tipo que el lector entiende.",
    },
    {
      title: "Rellenar: la entrada guardada en los campos",
      body: "Cuando escribes en un campo interactivo, tu respuesta se guarda en ese campo, no se fusiona con la página. Por eso puedes borrarla y volver a escribirla, y por eso un lector distinto puede mostrarla de forma ligeramente distinta.",
    },
    {
      title: "Guardar: conservar los valores de los campos",
      body: "Guardar un formulario relleno almacena los valores de los campos dentro del archivo. Algunos lectores básicos solo dejan imprimir, no guardar los datos — la razón clásica por la que las respuestas rellenadas desaparecen al reabrir el archivo.",
    },
    {
      title: "Aplanar: fusionar los campos en la página",
      body: "Aplanar hace que los valores de los campos pasen a la capa de página, donde se convierten en contenido permanente. Una vez aplanado el formulario, las respuestas ya no se pueden editar ni borrar — útil justo antes de devolver el formulario.",
    },
  ],
  tips: [
    "Imagina un formulario interactivo como una lámina transparente de casillas editables colocada sobre una página impresa. Aplanar pega esa lámina de forma definitiva.",
    "Como los valores de los campos están separados de la página, el mismo formulario puede verse ligeramente distinto entre lectores: las fuentes y el tamaño de los campos no siempre coinciden.",
    "Si las respuestas no dejan de desaparecer, la capa de campos no se está guardando. Usa una herramienta que escriba los valores de los campos en el archivo, o aplana antes de cerrar.",
    "Algunos formularios avanzados (a menudo llamados formularios XFA o dinámicos) usan una estructura más compleja que muchos lectores no admiten del todo — son los que más probabilidades tienen de comportarse mal.",
    "Los formularios no interactivos no tienen ninguna capa de campos, así que nunca pierden datos como pueden hacerlo los interactivos — el texto que añades simplemente queda sobre la página.",
  ],
  mobileNote:
    "La app PDF Editor lee la capa de campos de un formulario en cuanto lo abres, así que los campos interactivos se pueden tocar de inmediato. En los formularios no interactivos, sin capa de campos, te deja añadir texto y marcas directamente sobre la página y luego exportar — y puedes aplanar el resultado para dejar tus respuestas bloqueadas antes de enviarlo.",
  faq: [
    {
      q: "¿De qué están hechos los campos de un formulario PDF?",
      a: "Son una capa de objetos interactivos — cuadros de texto, casillas de verificación, botones de opción, desplegables y campos de firma — colocados sobre la maquetación fija de la página, cada uno con un nombre y un tipo que el lector reconoce.",
    },
    {
      q: "¿Por qué a veces desaparecen mis respuestas rellenadas?",
      a: "Los valores de los campos se guardan por separado de la página. Si tu lector solo imprime en lugar de guardar los datos, o no guardas correctamente, la capa de campos no se escribe en el archivo y las respuestas se pierden.",
    },
    {
      q: "¿Qué significa aplanar un formulario PDF?",
      a: "Aplanar fusiona los valores de los campos con la propia página, haciéndolos permanentes. El formulario deja de ser editable, pero las respuestas se muestran e imprimen de forma coherente en todas partes.",
    },
    {
      q: "¿Qué es un AcroForm?",
      a: "AcroForm es el tipo estándar y ampliamente compatible de formulario PDF interactivo. También existe un tipo dinámico más complejo (XFA) que muchos lectores gestionan mal, lo que explica por qué algunos formularios solo funcionan en un software concreto.",
    },
    {
      q: "¿Por qué el mismo formulario se ve distinto en dos apps?",
      a: "Porque cada lector dibuja la capa de campos por su cuenta. El aspecto de un formulario puede variar entre lectores de PDF, sobre todo la fuente y el tamaño de los campos. Aplanar antes de compartir evita sorpresas.",
    },
  ],
  related: [
    { label: "¿Qué es un formulario PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Cómo guardar un formulario PDF relleno",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Problemas de compatibilidad en formularios PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor — rellenar en el móvil", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
