import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Método PDF para consultores (propuestas, informes, facturas)",
  description:
    "El ritmo PDF de un consultor: propuestas que cierran, informes que se leen bien en el móvil, facturas que salen en segundos. Las herramientas del navegador que lo mantienen todo ligero.",
  updated: "2026-05-29",
  intro: [
    "El trabajo de consultoría gira en torno a tres documentos: la propuesta que gana el proyecto, el informe que lo entrega y la factura que cierra el ciclo. Todo lo demás — presentaciones de arranque, notas de entrevistas, actualizaciones de estado — o es un borrador de uno de esos tres, o es un material de trabajo que no sale del proyecto.",
    "Cada uno de los tres tiene sus propios hábitos en PDF. Las propuestas necesitan sentirse sólidas sin resultar pesadas; los informes necesitan leerse bien en el móvil, que es donde la mayoría de los clientes los abren primero; las facturas necesitan salir el mismo día en que termina el trabajo. Las herramientas para hacer bien las tres son en su mayoría gratuitas, y el método no cambia entre un cliente y otro.",
    "Esta guía describe ese ritmo: qué necesita cada documento, qué hace cada herramienta y dónde se va el tiempo. Afinar el ritmo a lo largo de un año de proyectos ahorra horas de verdad.",
  ],
  steps: [
    {
      title: "Propuesta: ajustada, con tu marca, rápida",
      body: "Constrúyela en Word a partir de tu plantilla. Limítala a menos de 12 páginas — los clientes la hojean, no la estudian. Word a PDF para exportarla. Portada, planteamiento del problema, enfoque, entregables, calendario, precios, condiciones. Comprime por debajo de 5 MB. Envíala el mismo día.",
    },
    {
      title: "Carta de encargo: PDF firmado, bloqueado",
      body: "Una vez aprobada la propuesta, envía una carta de encargo firmada con Firmar PDF. El cliente la contrafirma y la devuelve. Guarda ambas copias firmadas en /Clientes/[Nombre]/contratos/.",
    },
    {
      title: "Actualizaciones intermedias: estado semanal en PDF",
      body: "Un PDF breve (una página) enviado cada semana. Estado, obstáculos, decisiones pendientes. Trátalo como un ejercicio que obliga a pensar con claridad, no como un entregable en sí mismo.",
    },
    {
      title: "Informe final: estructurado para leer por encima",
      body: "Resumen ejecutivo en la primera página. Metodología y detalle al final. Numera todas las páginas. Incrusta las fuentes. Tamaños de letra legibles en el móvil. La mayoría de los clientes lo leen primero en el móvil y después en el portátil.",
    },
    {
      title: "Factura: el mismo día del cierre",
      body: "Factura a partir de plantilla, numeración correlativa, Word a PDF, enviada dentro de las 24 horas siguientes al cierre del proyecto. Las facturas tardías se convierten en pagos tardíos.",
    },
    {
      title: "Archiva el proyecto",
      body: "Traslada toda la carpeta del cliente a /Histórico/[Año]/[Cliente]/ una vez cobrado. La carpeta activa se mantiene ligera; el histórico queda localizable para casos de estudio y referencias futuras.",
    },
  ],
  tips: [
    "No personalices la plantilla en cada propuesta. Personaliza el contenido, mantén la estructura: los clientes te reconocen de un proyecto a otro.",
    "Registra cada propuesta enviada en una hoja con fecha, cliente, importe y resultado. La tasa de conversión te dice si conviene afinar la oferta.",
    "Los informes que se leen bien en el móvil usan letra más grande y párrafos más cortos que los pensados para imprimir. Optimiza para el dispositivo que el cliente usa primero.",
    "Marca los borradores con «BORRADOR» durante el proyecto, nunca en la versión final. La final se percibe como definitiva precisamente porque no la lleva.",
    "Mantén una carpeta /casos-de-exito/ con ejemplos anonimizados de proyectos anteriores. Es la prueba más sólida en propuestas futuras.",
  ],
  mobileNote:
    "Los consultores viven en tránsito. La app PDF Editor gestiona compresiones de última hora en las propuestas, firmas de cartas de encargo y envíos de facturas desde el móvil — útil cuando el proyecto se cierra en el tren y la factura tiene que salir antes de acabar el día.",
  faq: [
    {
      q: "¿Cuánto debería durar una propuesta?",
      a: "Menos de 12 páginas para la mayoría de los proyectos. Los clientes la hojean. Cuanto más corta es la propuesta, más se llega a leer.",
    },
    {
      q: "¿Necesito una carta de encargo firmada?",
      a: "Sí. La propuesta es un documento comercial; la carta de encargo es el contrato. No empieces a trabajar sin ella.",
    },
    {
      q: "¿Con qué frecuencia debería enviar actualizaciones intermedias?",
      a: "Semanal por defecto. A diario en proyectos cortos e intensos. Mensual en proyectos largos y de ritmo lento. El ritmo importa más que el formato.",
    },
    {
      q: "¿Deberían los informes estar diseñados?",
      a: "Lo justo para parecer profesionales, no tanto como para frenarte. Una plantilla tipográfica limpia envejece mejor que una muy trabajada.",
    },
    {
      q: "¿Cuándo debería salir la factura?",
      a: "El mismo día en que se cierra el proyecto. Cada día de retraso suele empujar la fecha de pago más de un día al otro lado.",
    },
  ],
  related: [
    { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
    { label: "Word a PDF — exportar propuestas e informes", path: "/word-to-pdf" },
    { label: "El mejor método PDF para autónomos", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Cómo enviar contratos en PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
};

export default content;
