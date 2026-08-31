import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "¿Han desaparecido los campos de un formulario PDF? Por qué y cómo recuperarlos",
  description:
    "Abres un formulario y los campos no están. Por qué los campos interactivos desaparecen en algunos lectores, cómo recuperarlos, y qué hacer si nunca los hubo.",
  updated: "2026-06-01",
  intro: [
    "Abres un formulario esperando encontrar casillas en las que escribir y no hay nada — solo una página de aspecto plano, o campos que se muestran como contornos vacíos con los que no puedes interactuar. Los campos de formulario ausentes son alarmantes pero casi siempre inofensivos: los campos siguen en el archivo; tu lector simplemente no los está dibujando. De vez en cuando el formulario nunca tuvo campos y siempre estuvo pensado para rellenarse a mano.",
    "Dos escenarios cubren casi todos los casos. En el primero, el formulario es interactivo pero lo has abierto en algún sitio que ignora la capa de campos — una vista previa de navegador, un visor de correo, un lector de PDF básico tipo imagen. En el segundo, el formulario es genuinamente no interactivo, así que no hay campos que encontrar y lo completas colocando texto por encima.",
    "Esta guía te ayuda a distinguir los dos casos y a recuperar los campos cuando existen — sin dar por hecho que el archivo está dañado, porque casi nunca lo está.",
  ],
  steps: [
    {
      title: "Descarta primero el lector",
      body: "Abre el mismo archivo en una app de PDF dedicada en lugar de una pestaña del navegador o una vista previa de correo. Si los campos reaparecen, siempre estuvieron ahí — el visor anterior simplemente no dibujaba la capa de campos.",
    },
    {
      title: "Comprueba si los campos llegaron a existir alguna vez",
      body: "Si ninguna app competente muestra campos en ningún punto de la página, el formulario es no interactivo — se escaneó o se exportó sin capa de campos. No falta nada; simplemente nunca fue interactivo.",
    },
    {
      title: "Actualiza o cambia tu app de PDF",
      body: "Un visor anticuado o minimalista puede dibujar la página pero saltarse los campos. Una app de PDF actual y completa es la forma más fiable de mostrar y usar campos interactivos.",
    },
    {
      title: "Vuelve a descargar si el archivo parece incompleto",
      body: "Una descarga parcial o interrumpida puede perder contenido. Descarga el formulario de nuevo desde el origen y vuelve a abrirlo — una copia fresca y completa a veces recupera campos que parecían ausentes.",
    },
    {
      title: "Rellena un formulario no interactivo añadiendo texto",
      body: "Si el formulario genuinamente no tiene campos, complétalo a la manera no interactiva: coloca texto y marcas de verificación en la página con un editor de PDF, y luego exporta. No necesitas campos para terminarlo.",
    },
  ],
  tips: [
    "Antes de asumir que hay daño, cambia de lector — probar otra app es la prueba más rápida para saber si los campos existen de verdad.",
    "Las vistas previas de navegador y de correo son los culpables habituales de los campos «desaparecidos»; una app de PDF de verdad resuelve la mayoría de los casos.",
    "Si los campos se muestran como contornos vacíos que no puedes tocar, suele ser un lector que los dibuja pero no los activa — cambia de app.",
    "Un formulario genuinamente no interactivo no le falta nada — añadir texto por encima es la forma prevista de rellenarlo.",
    "Algunos formularios dinámicos avanzados solo muestran sus campos en un software concreto; si es tu caso, el formulario puede necesitar ese programa o un formato alternativo.",
  ],
  mobileNote:
    "En el móvil, los campos ausentes suelen deberse a una vista previa que no los dibuja. Abre el formulario en la app PDF Editor: activa los campos interactivos donde existen y te deja colocar texto en la página donde no — así, un formulario que parecía no tener campos en el correo se vuelve rellenable.",
  faq: [
    {
      q: "¿Por qué faltan los campos de mi formulario PDF?",
      a: "Lo más habitual es que tu lector no esté dibujando la capa de campos — algo común en vistas previas de navegador y de correo. Abre el archivo en una app de PDF dedicada y los campos suelen reaparecer. Si ninguna app los muestra, el formulario es simplemente no interactivo.",
    },
    {
      q: "¿Perdí los campos, o nunca los hubo?",
      a: "Ábrelo en una app de PDF competente. Si aparecen campos, siempre estuvieron ahí y el lector antiguo los ocultaba. Si no aparece ninguno en ningún sitio, el formulario es no interactivo y nunca tuvo capa de campos.",
    },
    {
      q: "¿Puede una descarga dañada causar campos ausentes?",
      a: "En ocasiones. Una descarga parcial puede perder contenido. Vuelve a descargar el formulario desde el origen y ábrelo de nuevo antes de concluir que los campos han desaparecido de verdad.",
    },
    {
      q: "¿Cómo relleno un formulario que no tiene campos?",
      a: "Coloca tu propio texto y tus marcas de verificación directamente en la página con un editor de PDF, y luego exporta. Los formularios no interactivos se completan así — no hacen falta campos.",
    },
    {
      q: "¿Por qué los campos se muestran como contornos en los que no puedo hacer clic?",
      a: "Tu lector está dibujando las casillas de los campos pero no las está activando. Cambia a una app de PDF completa, que muestra y activa los campos a la vez.",
    },
  ],
  related: [
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    {
      label: "¿Por qué no puedo escribir en un formulario PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Problemas de compatibilidad en formularios PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "¿Qué es un formulario PDF?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
