import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "Errores al enviar un formulario PDF (cuando falla el botón Enviar)",
  description:
    "¿El botón de envío del formulario falla o no hace nada? Por qué estos botones dependen del servidor de quien emite el formulario, qué significan los errores, y la forma manual fiable de enviarlo tú mismo.",
  updated: "2026-06-01",
  intro: [
    "Algunos formularios PDF llevan integrado un botón Enviar — lo pulsas y se supone que el formulario se envía solo a algún sitio. Cuando funciona, es cómodo; cuando no, es desconcertante, porque el botón simplemente falla, muestra un error críptico, o parece no hacer nada en absoluto. La razón es que un botón de envío no envía el formulario por sí solo: intenta entregar los datos a un destino que configuró quien emitió el formulario, y ese enlace es a menudo la parte que se rompe.",
    "Estos botones de envío suelen publicar los datos del formulario en una dirección web o de correo controlada por quien lo creó. Si ese servidor está caído, la dirección ha cambiado, o tu lector bloquea la acción por seguridad, el envío falla — y nada de eso es algo que puedas arreglar por tu parte. La buena noticia es que casi siempre existe una alternativa manual fiable.",
    "Esta guía explica qué hace de verdad el botón Enviar, qué significan los fallos habituales, y cómo hacer llegar tu formulario completado a su destino cuando el botón no coopera. Es distinto de los errores de subida en un portal web, que es un problema diferente.",
  ],
  steps: [
    {
      title: "Entiende qué hace Enviar",
      body: "El botón Enviar de un formulario envía los datos de los campos a un destino — una dirección web o de correo — que configuró quien lo emitió. No es autosuficiente; depende de que ese destino siga funcionando y de que tu lector permita la acción.",
    },
    {
      title: "Lee el error en busca de una pista",
      body: "Un mensaje sobre un servidor, la red, o una acción bloqueada apunta al destino o a una restricción de seguridad, no a tu archivo. «No ha pasado nada» suele significar que tu lector bloqueó el envío en silencio por seguridad.",
    },
    {
      title: "Prueba con una app de PDF completa",
      body: "Los lectores básicos y de navegador a menudo bloquean o ignoran las acciones de envío. Abrir el formulario completado en una app de PDF dedicada a veces permite que el botón funcione como estaba previsto.",
    },
    {
      title: "Recurre al envío manual",
      body: "Si el botón sigue fallando, guarda y aplana el formulario completado, y envíalo manualmente — por correo a la dirección indicada en el formulario, o subiéndolo al portal de quien lo emitió. Esto evita por completo el envío roto.",
    },
    {
      title: "Confirma y guarda una copia",
      body: "Cuando envíes de forma manual, conserva tu copia aplanada y fíjate en si llega una confirmación. Si el formulario debía llegar a una bandeja de entrada o un portal concreto, las instrucciones de quien lo emitió indican dónde.",
    },
  ],
  tips: [
    "Un botón Enviar que falla suele deberse al destino de quien lo emitió, no a tu archivo — el envío manual es la alternativa fiable.",
    "Guarda y aplana tus respuestas antes de enviar manualmente, para que el destinatario reciba una copia bloqueada y completa.",
    "«No ha pasado nada» al pulsar Enviar suele significar que tu lector bloqueó la acción por seguridad; una app dedicada puede permitirla.",
    "Los errores de envío son distintos de los errores de subida a un portal — si estás subiendo un archivo a una web, esa es una solución aparte.",
    "Revisa el formulario en busca de un correo de contacto o instrucciones; quien lo emite a menudo ofrece una vía manual precisamente para esta situación.",
  ],
  mobileNote:
    "Si el botón Enviar de un formulario falla en el móvil, la app PDF Editor te deja aplanar el formulario completado y enviarlo manualmente desde el menú para compartir — correo o subida a un portal — para que una acción de envío rota nunca atrape tus respuestas. Todo funciona en el dispositivo.",
  faq: [
    {
      q: "¿Por qué no funciona el botón Enviar de mi formulario PDF?",
      a: "El botón envía tus datos a un destino que configuró quien lo emitió — un servidor o un correo. Si eso está caído, ha cambiado, o tu lector bloquea la acción por seguridad, falla. Eso escapa a tu control; envía el formulario de forma manual en su lugar.",
    },
    {
      q: "¿Qué significa que Enviar no haga nada?",
      a: "Lo más probable es que tu lector haya bloqueado la acción de envío en silencio por seguridad. Prueba con una app de PDF completa, o sáltate el botón y envía el formulario completado de forma manual.",
    },
    {
      q: "¿Cómo envío el formulario si el botón está roto?",
      a: "Guarda y aplana el formulario completado, y luego envíalo de forma manual: por correo a la dirección del formulario o subiéndolo al portal de quien lo emitió. Esto evita por completo la acción de envío.",
    },
    {
      q: "¿Un error de envío es lo mismo que un error de subida?",
      a: "No. Un error de envío es el botón Enviar integrado del formulario que falla. Un error de subida es una web que rechaza un archivo que estás subiendo. Tienen causas y soluciones distintas.",
    },
    {
      q: "¿Podrían haberse enviado los datos del formulario aunque recibiera un error?",
      a: "Posiblemente no — si viste un error, asume que no llegó. Envía de forma manual y guarda tu propia copia, y busca una confirmación para saber que llegó al destino.",
    },
  ],
  related: [
    {
      label: "Cómo devolver un formulario PDF relleno",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Cómo solucionar errores al subir un PDF",
      path: "/guides/how-to-fix-pdf-upload-errors",
    },
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    {
      label: "Problemas de compatibilidad en formularios PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
