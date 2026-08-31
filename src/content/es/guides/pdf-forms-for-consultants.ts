import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-consultants",
  h1: "Los formularios PDF del consultor (cuestionarios y alcance)",
  description:
    "Cuestionarios de descubrimiento, fichas de alcance de proyecto y formularios de opinión — el lado formularios de la consultoría, resuelto en PDF rellenables que el cliente completa desde cualquier dispositivo.",
  updated: "2026-06-01",
  intro: [
    "La consultoría funciona a base de preguntas. Antes de un proyecto necesitas entender la situación del cliente; durante él, delimitas qué entra y qué queda fuera; después, quieres una opinión honesta. Cada una de esas cosas es un formulario — un cuestionario de descubrimiento, una ficha de alcance, una petición de opinión — y gestionarlas como PDF rellenables mantiene el proceso ágil sin arrastrar a los clientes a otro inicio de sesión más.",
    "Estos formularios son distintos de los entregables de un consultor. Las propuestas, los informes y las facturas son documentos que produces; los cuestionarios y las fichas de alcance son formularios que los clientes completan. Esta guía trata específicamente del lado de los formularios: diseñarlos para que los clientes respondan por completo, y recoger las respuestas para que realmente informen el trabajo.",
    "La recompensa es un inicio más fluido y unos límites más claros. Un buen cuestionario de descubrimiento saca a la luz el problema real antes de la primera llamada; una ficha de alcance clara evita el avance silencioso de trabajo no acordado. Las dos son fáciles de gestionar en PDF.",
  ],
  steps: [
    {
      title: "Diseña un cuestionario de descubrimiento que justifique su extensión",
      body: "Haz las preguntas que cambiarían tu forma de abordar el proyecto, no todo lo imaginable. Agrúpalas, deja espacio para respuestas de verdad, y mantén un máster en blanco reutilizable por servicio.",
    },
    {
      title: "Construye una ficha de alcance que marque límites",
      body: "Convierte el alcance en un formulario: entregables, lo que queda explícitamente fuera, plazos, hipótesis de partida. Que el cliente confirme los campos hace que el límite sea mutuo en lugar de algo que afirmes tú solo más tarde.",
    },
    {
      title: "Envía los formularios para que los clientes los completen en cualquier dispositivo",
      body: "Adjunta el PDF rellenable directamente y avisa de que los clientes pueden rellenarlo en una app de PDF — tocando campos o añadiendo texto a una ficha no interactiva — y luego devolver una copia completada. La mayoría lo hará desde el móvil.",
    },
    {
      title: "Recoge un formulario de opinión al final",
      body: "Un formulario de opinión corto y bien espaciado tiene más probabilidades de rellenarse que uno largo. Envíalo cuando se cierra el proyecto, mientras la experiencia está fresca, y pide de vuelta una copia aplanada.",
    },
    {
      title: "Archiva las respuestas junto a cada proyecto",
      body: "Renombra los formularios devueltos por cliente y fecha y guárdalos con los registros de ese proyecto. Mantén los másteres en blanco por separado para que cada cliente nuevo reciba un formulario limpio.",
    },
  ],
  tips: [
    "Un cuestionario de descubrimiento certero saca a la luz el problema real antes de la primera reunión y ahorra el tiempo de una llamada.",
    "Haz que la ficha de alcance sea algo que el cliente confirma en campos, para que «fuera de alcance» sea mutuo, no una discusión posterior.",
    "Mantén cortos los formularios de opinión; la tasa de finalización importa más que el número de preguntas.",
    "Las respuestas de los clientes son sensibles — envíalas y recógelas mediante archivos adjuntos directos o un disco privado, no webs públicas de relleno.",
    "Este es el lado de los formularios de la consultoría; combínalo con tu método de propuestas, informes y facturas para tener el cuadro completo.",
  ],
  mobileNote:
    "Los clientes rellenan tus cuestionarios y fichas de alcance en el móvil con la app PDF Editor — tocando campos o añadiendo texto a formularios no interactivos, y luego exportando una copia aplanada. Es en el dispositivo, así que los detalles que comparten sobre su negocio no pasan por un servidor de terceros.",
  faq: [
    {
      q: "¿Qué formularios PDF usan más los consultores?",
      a: "Cuestionarios de descubrimiento antes de un proyecto, fichas de alcance para marcar límites, y formularios de opinión al final. Gestionados como PDF rellenables, mantienen el proceso claro sin añadir otra plataforma más en la que el cliente tenga que iniciar sesión.",
    },
    {
      q: "¿Cómo consigo que los clientes completen un cuestionario de descubrimiento?",
      a: "Mantenlo centrado en preguntas que cambien tu enfoque, deja espacio real para las respuestas, y envíalo como PDF rellenable con una nota de que pueden completarlo en una app de PDF desde cualquier dispositivo.",
    },
    {
      q: "¿En qué se diferencia esto de un método PDF para consultores?",
      a: "Esto trata de los formularios que rellenan los clientes — cuestionarios, alcance, opinión. La guía del método PDF para consultores cubre tus propios entregables: propuestas, informes y facturas.",
    },
    {
      q: "¿Cómo mantengo privadas las respuestas del cuestionario del cliente?",
      a: "Envía y recibe mediante archivos adjuntos directos o un disco privado en lugar de webs públicas de relleno. La app PDF Editor rellena en el dispositivo, así que las respuestas del cliente no se suben a ningún sitio.",
    },
    {
      q: "¿Una ficha de alcance debería ser un formulario o un documento?",
      a: "Conviértela en un formulario que el cliente confirma — campos para entregables, exclusiones, plazos e hipótesis. Un formulario confirmado hace que el alcance sea mutuo de una forma que un documento unidireccional no logra.",
    },
  ],
  related: [
    {
      label: "Método PDF para consultores",
      path: "/guides/pdf-workflows-for-consultants",
    },
    {
      label: "Cómo enviar una ficha de cliente para rellenar",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Los formularios PDF en una agencia",
      path: "/guides/pdf-forms-for-agencies",
    },
    {
      label: "Cómo recopilar documentos en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
