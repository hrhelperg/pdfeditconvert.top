import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "App de PDF o herramientas PDF online — ¿cuál elegir?",
  description:
    "App de PDF nativa o herramientas en el navegador: velocidad, privacidad y acceso sin conexión comparados.",
  intro: [
    "Hay dos formas de trabajar con PDF desde el móvil o el ordenador: instalar una app nativa o usar alguna de las muchas herramientas PDF que funcionan en el navegador. Las dos opciones funcionan, pero los compromisos son muy distintos, y pesan más cuanto más sensibles son los documentos.",
    "Las herramientas en el navegador ganan en comodidad: un clic y ya estás trabajando. Las apps nativas ganan en velocidad, privacidad y acceso sin conexión. Para una conversión puntual de un documento público, una herramienta de navegador funciona bien. Para el trabajo documental del día a día, sobre todo contratos, documentos de identidad y archivos de clientes, lo nativo es la mejor opción por defecto.",
    "Esta comparativa cubre la velocidad, la privacidad, el acceso sin conexión, el coste y el tipo de archivos con los que cada opción funciona mejor, para que elijas con criterio en lugar de quedarte con el primer resultado de Google.",
  ],
  leftLabel: "App PDF nativa",
  rightLabel: "Herramienta PDF online",
  rows: [
    { feature: "Funciona sin conexión", left: "sí", right: "no" },
    { feature: "Los archivos se quedan en tu dispositivo", left: "sí", right: "no" },
    { feature: "Velocidad (sin esperas de subida o descarga)", left: "sí", right: "no" },
    { feature: "Sin límites de tamaño de archivo", left: "sí", right: "Limitado" },
    { feature: "No requiere cuenta", left: "sí", right: "A veces" },
    { feature: "Funciona en redes corporativas restringidas", left: "sí", right: "Puede que sí" },
    { feature: "Comodidad para el uso diario", left: "sí", right: "Limitado" },
    { feature: "Requiere instalación la primera vez", left: "sí", right: "no" },
    { feature: "Enlaces de colaboración entre dispositivos", left: "Limitado", right: "sí" },
  ],
  whenLeft: [
    "Trabajas con documentos sensibles (contratos, documentos de identidad, nóminas)",
    "Trabajas en sitios con conexión irregular",
    "Editas PDF con la frecuencia suficiente para justificar una instalación",
    "Quieres que la misma herramienta funcione en modo avión",
    "La privacidad importa para los documentos que procesas",
  ],
  whenRight: [
    "Una conversión o unión puntual en un ordenador público",
    "No quieres instalar nada",
    "El documento no es sensible",
    "Necesitas un enlace de vista previa para compartir",
    "Estás en un dispositivo donde no puedes instalar apps",
  ],
  faq: [
    {
      q: "¿Son seguras las herramientas de PDF online?",
      a: "Algunas sí. La mayoría tienen políticas de privacidad que les permiten conservar tus archivos brevemente para procesarlos. Para documentos no sensibles no pasa nada; para contratos o documentos de identidad, lo nativo es más seguro.",
    },
    {
      q: "¿Por qué es más rápida la app nativa?",
      a: "No hay subida de archivo, ni cola en un servidor, ni descarga del resultado. Toda la operación ocurre en local.",
    },
    {
      q: "¿Puedo usar las dos cosas?",
      a: "Sí. Mucha gente usa por defecto la app nativa para el trabajo diario y recurre a una herramienta web en el caso puntual de que un compañero necesite un enlace de vista previa para compartir.",
    },
  ],
  related: [
    { label: "Editor de PDF — vista general", path: "/pdf-editor" },
    { label: "Seguridad de PDF", path: "/pdf-security" },
    { label: "PDF para empresas", path: "/pdf-for-business" },
  ],
};

export default content;
