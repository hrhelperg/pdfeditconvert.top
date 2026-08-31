import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor para autónomos — presupuestos y documentos firmados",
  description:
    "Los métodos que adoran los autónomos: propuestas, contratos firmados y facturas, todo desde el móvil.",
  intro: [
    "Un autónomo gestiona la mayor parte de su actividad desde el móvil. No hay oficina, ni departamento de informática, ni impresora compartida. El mismo flujo de trabajo con PDF que en un equipo grande necesita tres apps y una suscripción de firma electrónica, aquí muchas veces tiene que caber en una sola app, rápido, entre horas facturables.",
    "Cada minuto perdido peleándote con una herramienta es un minuto que no facturas. Un editor de PDF que simplemente funciona (sin subir nada, sin crear una cuenta, sin cuota mensual por una herramienta que usas dos veces por semana) es una de esas inversiones discretas que se amortizan con los meses.",
    "Estas son las operaciones concretas que hacen viable el día a día de un autónomo desde el móvil: rápidas, privadas y sin el peso de una suscripción.",
  ],
  workflows: [
    {
      title: "Envía una propuesta cuidada en PDF",
      body: "Exporta tu propuesta desde Notion, Pages o Google Docs a PDF. Fírmala, adjúntala al correo, envíala. Quien la reciba ve exactamente lo que querías mostrar.",
    },
    {
      title: "Firma los contratos de tus clientes desde el móvil",
      body: "Dibuja tu firma una vez y reutilízala en todos los contratos futuros. Se acabó el «te contesto cuando esté delante del ordenador».",
    },
    {
      title: "Escanea los recibos de gastos según los generas",
      body: "Un café de trabajo, un trayecto en taxi, la compra de un equipo: escanéalo en el momento. Los PDF resultantes tienen texto buscable y son compatibles con el software de contabilidad.",
    },
    {
      title: "Factura en PDF, siempre",
      body: "Sea cual sea tu herramienta de facturación, exporta a PDF antes de enviar. Reduce el riesgo de que alguien la modifique y da una imagen más profesional que un DOCX.",
    },
    {
      title: "Junta los entregables al cerrar un proyecto",
      body: "Combina el briefing final, el acuerdo firmado y la documentación de apoyo en un único PDF de archivo al terminar un proyecto.",
    },
  ],
  appPitch:
    "PDF Editor es el caballo de batalla discreto del autónomo: no sustituye tus herramientas de diseño o facturación, solo hace que la capa documental no cueste ningún esfuerzo. Gratis, nativa, en el dispositivo. Disponible en iOS y Android.",
  related: [
    { label: "Firma un PDF en el móvil", path: "/sign-pdf" },
    { label: "Flujos de PDF para empresas", path: "/pdf-for-business" },
    { label: "Casos de uso: trabajo remoto", path: "/use-cases/remote-work" },
  ],
};

export default content;
