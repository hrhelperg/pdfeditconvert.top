import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-best-practices",
  h1: "Buenas prácticas para formularios PDF (diseña formularios que se terminan)",
  description:
    "Diseña formularios que la gente termina de verdad: etiquetas claras, espacio suficiente, campos con sentido, una zona de firma evidente y una pasada de aplanado. Reglas prácticas para quien los crea y quien los envía.",
  updated: "2026-06-01",
  intro: [
    "El trabajo de un formulario es completarse con precisión y volver sin fricción. La mayoría de los formularios que fallan lo hacen por razones aburridas y solucionables: campos apretados, etiquetas ambiguas, sin sitio para escribir, o una maquetación que se rompe en cuanto alguien lo abre en el móvil. Un buen diseño de formulario no consiste en parecer ingenioso — consiste en eliminar cada pequeño motivo por el que alguien podría rendirse o equivocarse.",
    "Estas buenas prácticas se aplican tanto si construyes formularios interactivos como plantillas no interactivas, y tanto si eres una empresa que recoge datos de clientes como si eres cualquiera que envía un formulario para que lo rellenen. También cubren el lado del envío: cómo distribuir un formulario para que siga siendo rellenable y vuelva utilizable. Nada de esto es complicado; es sobre todo disciplina.",
    "Trata esta página como la referencia a la que remiten las demás guías sobre formularios. Si solo adoptas un puñado de estas prácticas, elige etiquetas claras, espaciado generoso, y aplanado al devolverlo — esas tres evitan la mayoría de los problemas de formulario.",
  ],
  steps: [
    {
      title: "Etiqueta cada campo sin ambigüedad",
      body: "Cada campo debe dejar claro qué va en él, incluido el formato cuando importa (estilo de fecha, un carácter por casilla). Las etiquetas ambiguas producen respuestas erróneas que luego tienes que perseguir.",
    },
    {
      title: "Da a las respuestas espacio real",
      body: "Los campos demasiado pequeños son la queja número uno sobre los formularios. Deja más espacio del que crees necesario, sobre todo para nombres, direcciones y respuestas de texto libre, para que nada quede apretado ni cortado.",
    },
    {
      title: "Pide solo lo que necesitas",
      body: "Cada campo de más reduce la tasa de finalización y añade datos que luego tienes que gestionar. Elimina cualquier cosa que no sea genuinamente necesaria en esta etapa. Los formularios más cortos vuelven más rápido y más completos.",
    },
    {
      title: "Haz evidente la zona de firma",
      body: "Si hace falta una firma, dale una zona clara y bien colocada, con un campo de fecha al lado. La gente se olvida de la firma más que de cualquier otro campo; una zona evidente evita que el formulario rebote.",
    },
    {
      title: "Distribuye y recoge correctamente",
      body: "Envía los formularios en blanco sin aplanar para que los campos sobrevivan, recomienda una app de PDF fiable, y pide de vuelta copias aplanadas para que las respuestas queden bloqueadas y se muestren igual en todas partes.",
    },
  ],
  tips: [
    "Rellena tú mismo tu formulario una vez desde el móvil antes de enviarlo — detectarás al instante cada campo apretado y cada etiqueta poco clara.",
    "Etiquetas claras, espaciado generoso, y aplanado al devolverlo son los tres hábitos que evitan la mayoría de los problemas de formulario.",
    "No aplanes un formulario en blanco que estás distribuyendo; aplanarlo elimina los campos que necesitan los destinatarios.",
    "Haz coincidir el formato de los campos con lo que vas a hacer con los datos — formatos de fecha y número consistentes ahorran limpieza más tarde.",
    "Mantén expectativas honestas: el aspecto de un formulario puede variar entre lectores, así que una plantilla no interactiva o una devolución aplanada es lo más fiable en general.",
  ],
  mobileNote:
    "Como la mayoría de la gente rellena los formularios desde el móvil, prueba el tuyo en la app PDF Editor en un móvil antes de enviarlo: confirma que los campos se pueden tocar o que una plantilla no interactiva tiene espacio para texto escrito con el pulgar, que la zona de firma es accesible, y que una exportación aplanada tiene buen aspecto.",
  faq: [
    {
      q: "¿Qué hace que un formulario PDF sea fácil de rellenar?",
      a: "Etiquetas claras y sin ambigüedad; espacio generoso para cada respuesta; solo los campos que genuinamente necesitas; y una zona de firma evidente. Después pruébalo tú mismo desde el móvil, ya que es donde la mayoría de la gente lo completará.",
    },
    {
      q: "¿Debería enviar formularios interactivos o no interactivos?",
      a: "El interactivo queda más cuidado cuando puedes construirlo bien, pero una plantilla no interactiva limpia funciona en cualquier lector. Elijas lo que elijas, las etiquetas claras y el espaciado real importan más que el tipo de campo.",
    },
    {
      q: "¿Por qué no debería aplanar un formulario en blanco antes de enviarlo?",
      a: "Aplanar fusiona la capa de campos con la página, eliminando los campos interactivos. Los destinatarios no tendrían nada en lo que escribir. Aplana solo los formularios completados al devolverlos.",
    },
    {
      q: "¿Cómo evito que la gente se olvide de la firma?",
      a: "Dale a la firma una zona clara y bien colocada, con un campo de fecha al lado. Las firmas olvidadas son la causa más frecuente de que un formulario rebote, y una zona evidente resuelve la mayor parte del problema.",
    },
    {
      q: "¿Cuántos campos son demasiados?",
      a: "Cualquier campo que no sea necesario en esta etapa ya es de más — cada uno reduce la finalización. Pide el mínimo ahora y recoge el resto más tarde si de verdad lo necesitas.",
    },
  ],
  related: [
    {
      label: "Cómo crear un PDF rellenable",
      path: "/guides/how-to-create-a-fillable-pdf",
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
      label: "Problemas de formato en un formulario PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
