import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "Editor de PDF",
    h1: "Editor de PDF — edita texto, imágenes y páginas en el móvil",
    highlight: "el móvil",
    lead: "Corrige texto, cambia imágenes, reordena páginas y firma documentos directamente en el iPhone o en Android. PDF Editor convierte el móvil en un editor de documentos de verdad, no solo en un visor.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué editar un PDF ha sido siempre un incordio",
    paragraphs: [
      "Los PDF se diseñaron para verse igual en cualquier sitio, y precisamente eso es lo que los hace tan difíciles de editar. La mayoría de las apps del móvil solo permiten verlos o anotarlos. En cuanto necesitas corregir una errata, cambiar un nombre o mover una página, te mandan a un ordenador o te piden subir tu archivo a una web cualquiera.",
      "Esas webs de «sube tu archivo y espera» son un problema de privacidad. Guardan tu archivo durante horas, suelen ir lentas, y no hay garantía de qué hacen con contratos, facturas o documentos de identidad sensibles. El resultado: la mayoría de la gente hace una captura de la parte que quiere corregir, la edita como si fuera una imagen y envía por correo una versión peor que el original.",
      "Un editor nativo para móvil resuelve esto sin compromisos. Las ediciones se hacen en el dispositivo. Se conserva la maquetación original. Puedes enviar el resultado por correo un minuto después de empezar, sin subir nada al servidor de un desconocido.",
    ],
  },
  features: {
    heading: "Lo que puedes hacer de verdad",
    items: [
      {
        icon: "Type",
        title: "Edita el texto donde está",
        body: "Corrige erratas, cambia nombres, actualiza fechas... sin romper la maquetación. Funciona en PDF con texto.",
      },
      {
        icon: "ImagePlus",
        title: "Inserta y sustituye imágenes",
        body: "Añade un logotipo o una foto nueva. Cambia el tamaño y la posición sin salir de la página.",
      },
      {
        icon: "Move",
        title: "Reordena páginas",
        body: "Arrastra las miniaturas para reordenarlas. Elimina páginas, duplícalas o inserta una página en blanco.",
      },
      {
        icon: "Pencil",
        title: "Firmas y rúbricas",
        body: "Añade una firma manuscrita de verdad o una firma escrita. Colócala donde quieras con un solo toque.",
      },
      {
        icon: "Highlighter",
        title: "Marcas y subrayados",
        body: "Resalta, subraya, tacha. Añade notas a mano alzada o comentarios.",
      },
      {
        icon: "FileText",
        title: "Rellena formularios",
        body: "Toca los campos para rellenarlos. Guarda el formulario completado como un PDF nuevo.",
      },
    ],
  },
  steps: {
    heading: "Cómo editar un PDF en el móvil",
    items: [
      {
        title: "Abre la app PDF Editor",
        body: "Ábrela desde la pantalla de inicio. No hace falta cuenta para empezar.",
      },
      {
        title: "Elige el PDF que quieres editar",
        body: "Impórtalo desde Archivos, iCloud Drive, Google Drive o el correo. También puedes tocar un PDF en cualquier sitio y elegir PDF Editor como la app para abrirlo.",
      },
      {
        title: "Toca la parte que quieres cambiar",
        body: "Toca un párrafo para editar el texto, una imagen para sustituirla o la miniatura de una página para reordenarla.",
      },
      {
        title: "Haz los cambios",
        body: "Los cambios se aplican en tiempo real sobre la página. Pellizca para hacer zoom y ganar precisión. Deshacer y rehacer funcionan como esperas.",
      },
      {
        title: "Guarda el resultado",
        body: "Guarda sobre el original, como copia nueva, o comparte directamente por Mail, AirDrop o cualquier app de mensajería.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Editar sobre la marcha",
    body: "La mayoría de las ediciones de PDF ocurren en el peor momento posible: cinco minutos antes de una reunión, en el tren, entre clase y clase. Un editor pensado para el móvil te deja corregir ese nombre mal escrito en un contrato mientras vas de camino a la oficina, o estampar tu firma en un presupuesto durante la pausa del café. Sin portátil, sin ordenador de sobremesa, sin esperar a llegar a casa.",
  },
  faq: [
    {
      q: "¿Es gratis la app PDF Editor?",
      a: "Sí. Las funciones básicas de edición (texto, imágenes, reordenar páginas, firmas y exportar) son gratis. Algunas funciones avanzadas se desbloquean con la versión Pro.",
    },
    {
      q: "¿Funciona sin conexión?",
      a: "Sí. La edición ocurre por completo en el dispositivo. Solo necesitas conexión si vas a traer archivos desde un almacenamiento en la nube o a compartirlos mediante servicios online.",
    },
    {
      q: "¿Puedo editar PDF escaneados?",
      a: "Un PDF escaneado es técnicamente una imagen. Aun así puedes anotarlo, firmarlo y reordenar sus páginas. Para editar el texto en sí hace falta pasar antes el OCR, que la app puede ejecutar en la mayoría de documentos.",
    },
    {
      q: "¿Hay límite de tamaño de archivo?",
      a: "No hay un límite artificial. Los PDF muy grandes (cientos de MB con gráficos complejos) pueden ir más lentos en móviles antiguos, pero la app está pensada para manejar documentos reales.",
    },
    {
      q: "¿Mis cambios van a romper la maquetación original?",
      a: "No. Las ediciones se hacen sobre el propio documento. Las fuentes, los márgenes y el formato existente se mantienen intactos en los PDF con texto.",
    },
    {
      q: "¿Puedo exportar a Word?",
      a: "Sí. Puedes convertir el PDF editado a Word o a otros formatos desde la misma app.",
    },
  ],
  related: [
    {
      label: "Cómo editar un PDF en iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Cómo editar un PDF en Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Firmar un PDF en el móvil", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Edita tus PDF en el móvil en segundos.",
    sub: "Gratis en iOS y Android. No hace falta cuenta para empezar.",
  },
};

export default content;
