import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "Cómo firmar un PDF en iPhone (guía 2026)",
  description:
    "Firma un PDF en el iPhone con Marcado o con la app PDF Editor. Los límites de la vía nativa y cuándo una app dedicada firma mejor.",
  updated: "2026-05-23",
  intro: [
    "Firmar un PDF en un iPhone es una de esas tareas que iOS casi resuelve por ti. La herramienta nativa Marcado puede añadir una firma en un apuro, y para una firma rápida y puntual funciona perfectamente bien. Pero en cuanto firmas con regularidad — contratos, formularios, acuerdos que vuelven semana tras semana — sus límites empiezan a notarse, y una herramienta dedicada ahorra tiempo de verdad.",
    "Esta guía cubre ambas vías. Primero el enfoque nativo con Marcado desde la app Archivos, con una mirada honesta a dónde se queda corto. Después la app PDF Editor, que guarda una firma reutilizable, detecta los campos de firma y mantiene todo en el dispositivo.",
    "Las firmas electrónicas se aceptan para documentos empresariales corrientes en la mayoría de los sitios, así que firmar en tu iPhone rara vez es solo una comodidad — con frecuencia es perfectamente suficiente por sí sola.",
  ],
  steps: [
    {
      title: "Vía rápida: abre el PDF en Archivos",
      body: "Toca el PDF en la app Archivos para abrirlo y después toca el icono de Marcado (la punta de bolígrafo). Es el editor nativo de iOS — práctico para una firma puntual sin instalar nada.",
    },
    {
      title: "Añade una firma con Marcado",
      body: "Toca el botón más, elige Firma y dibújala con el dedo o guarda una nueva. Colócala en la página y ajusta su tamaño. Suficiente para un documento ocasional.",
    },
    {
      title: "Conoce dónde se queda corto Marcado",
      body: "Marcado no detecta los campos de firma de un formulario, no gestiona bien las fechas ni las rúbricas, y volver a dibujar o buscar tu firma cada vez se hace tedioso. Para firmar con frecuencia, pasa a una herramienta dedicada.",
    },
    {
      title: "Mejor vía: ábrelo en la app PDF Editor",
      body: "Importa el PDF desde Archivos, Mail o cualquier menú para compartir. La herramienta Firmar ofrece firma manuscrita, escrita e iniciales.",
    },
    {
      title: "Dibuja tu firma una vez, reutilízala siempre",
      body: "Crea tu firma la primera vez — con el dedo o con el Apple Pencil — y queda guardada en tu dispositivo para todos los documentos futuros. Firmar se convierte entonces en abrir, tocar, colocar, exportar.",
    },
    {
      title: "Coloca, fecha y exporta",
      body: "Deja caer la firma donde corresponda, añade una fecha o unas iniciales si el documento las necesita, y exporta una copia firmada. Guárdala como archivo nuevo para que el original sin firmar quede intacto.",
    },
  ],
  tips: [
    "Usa un Apple Pencil si tienes uno — el trazo es notablemente más limpio que con la yema del dedo, algo que importa en contratos de cara al cliente.",
    "Marcado es la herramienta adecuada para un caso realmente puntual. Si firmas más de una vez al mes, una firma guardada y reutilizable se amortiza rápido.",
    "Conserva el original sin firmar junto a la copia firmada. Si la otra parte quiere una versión limpia o necesitas volver a firmar con una corrección, la tendrás.",
    "Para un documento firmado sensible, añade una contraseña antes de compartirlo — firmar y proteger son pasos distintos.",
    "Una firma electrónica sirve para documentos empresariales corrientes, pero los acuerdos de alto valor o regulados pueden exigir una firma cualificada más formal — comprueba la normativa aplicable en esos casos.",
  ],
  mobileNote:
    "Firmar en un iPhone significa que un contrato vuelve en menos de una hora, a menudo en minutos. La app PDF Editor mantiene tu firma guardada en el dispositivo, detecta los campos de firma existentes y nunca envía el documento a ningún servidor — así hasta los acuerdos sensibles siguen siendo privados mientras firmas sobre la marcha.",
  faq: [
    {
      q: "¿Puedo firmar un PDF en iPhone sin ninguna app?",
      a: "Sí — ábrelo en la app Archivos y usa Marcado para añadir una firma. Es ideal para algo puntual. Para firmar con regularidad, una herramienta dedicada con una firma guardada y reutilizable es mucho más rápida.",
    },
    {
      q: "¿Qué no puede hacer la herramienta nativa Marcado?",
      a: "No detecta los campos de firma de un formulario, gestiona con torpeza las fechas y las iniciales, y te obliga a volver a colocar tu firma cada vez. Esas carencias son la razón por la que quien firma con frecuencia pasa a una app dedicada.",
    },
    {
      q: "¿Es legalmente válida una firma electrónica en mi iPhone?",
      a: "Para contratos empresariales corrientes en la mayoría de las jurisdicciones, sí. Los documentos de alto valor o regulados pueden exigir una firma cualificada más formal — comprueba la normativa que se aplique a tu caso.",
    },
    {
      q: "¿Se sube mi documento firmado a algún sitio?",
      a: "Con la app PDF Editor, no — tu firma guardada y el documento se quedan en tu dispositivo. Nada se envía a ningún servidor.",
    },
    {
      q: "¿Cómo firmo en Android en su lugar?",
      a: "El proceso es parecido, pero las herramientas nativas son distintas. Consulta la guía dedicada a firmar un PDF en Android.",
    },
  ],
  related: [
    { label: "Firmar PDF — firmas electrónicas en el móvil", path: "/sign-pdf" },
    { label: "Cómo firmar un PDF en Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "Cómo firmar un PDF desde el móvil", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Cómo editar un PDF en iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Firmar PDF", path: "/sign-pdf" },
};

export default content;
