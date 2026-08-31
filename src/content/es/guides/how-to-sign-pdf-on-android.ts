import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-android",
  h1: "Cómo firmar un PDF en Android (guía 2026)",
  description:
    "Firma un PDF en Android, donde no existe una firma nativa universal. La vía fiable por app, las distintas opciones según el fabricante y lo básico sobre validez legal.",
  updated: "2026-05-23",
  intro: [
    "Android no tiene una forma única y universal de firmar un PDF como iOS tiene Marcado. Lo que consigues depende de tu móvil y de las apps que tengas instaladas — algunos visores de fabricante y la vista previa de Google Drive permiten garabatear sobre una página, otros no, y la experiencia cambia entre Samsung, Pixel y el resto. Esa falta de coherencia es exactamente el motivo por el que una herramienta de firma dedicada tiene sentido en Android.",
    "Esta guía se centra en la vía que funciona igual en cualquier móvil Android: la app PDF Editor, que guarda una firma reutilizable, detecta los campos de firma y mantiene el documento en tu dispositivo. También apunta las opciones nativas más irregulares para que sepas qué esperar de ellas.",
    "Las firmas electrónicas se aceptan para documentos empresariales corrientes en la mayoría de las jurisdicciones, así que firmar en tu móvil Android suele ser todo lo que necesitas para devolver un contrato debidamente firmado en cuestión de minutos.",
  ],
  steps: [
    {
      title: "Entiende primero tus opciones nativas",
      body: "Algunos visores de Android y el marcado de Google Drive pueden añadir una marca a mano alzada, pero la disponibilidad y la calidad varían según el móvil, y la mayoría no gestionan campos de firma, fechas ni una firma reutilizable.",
    },
    {
      title: "Abre el PDF en la app PDF Editor",
      body: "Importa el documento desde tu gestor de archivos, Gmail, Drive o cualquier menú para compartir. La app se comporta igual sin importar en qué móvil Android estés.",
    },
    {
      title: "Elige tu tipo de firma",
      body: "Elige manuscrita, escrita o iniciales. La app detecta automáticamente los campos de firma existentes si el PDF se construyó para firmarse.",
    },
    {
      title: "Crea tu firma una sola vez",
      body: "Dibújala con el dedo o con un S Pen la primera vez; queda guardada en tu dispositivo para todos los documentos futuros. A partir de ahí, firmar son unos pocos toques.",
    },
    {
      title: "Colócala y añade una fecha si hace falta",
      body: "Arrastra la firma al lugar correcto y ajusta su tamaño. Añade una fecha o unas iniciales donde el documento las pida.",
    },
    {
      title: "Exporta la copia firmada",
      body: "Guarda como archivo nuevo para conservar el original sin firmar, y después compártelo por Gmail, Drive, WhatsApp o cualquier app. El PDF firmado está listo para enviarse.",
    },
  ],
  tips: [
    "Un S Pen (en los modelos Samsung Note y Ultra) produce una firma notablemente más limpia que la yema del dedo — merece la pena para contratos de cara al cliente.",
    "Como las opciones nativas de Android varían tanto según la marca, una app dedicada es la opción fiable si firmas documentos con regularidad o cambias de móvil.",
    "Conserva el original sin firmar junto a la copia firmada por si la otra parte pide una versión limpia o necesitas volver a firmar.",
    "Añade una contraseña a los documentos firmados especialmente sensibles antes de compartirlos — proteger es un paso distinto de firmar.",
    "Las firmas electrónicas cubren los documentos empresariales corrientes en la mayoría de los sitios; los acuerdos de alto valor o regulados pueden necesitar una firma cualificada más formal.",
  ],
  mobileNote:
    "En Android, la app PDF Editor te da la experiencia de firma coherente que la propia plataforma no ofrece: una firma guardada, detección de campos y un documento que nunca sale de tu dispositivo. Un contrato puede llegar, firmarse y volver a salir sin tocar ningún servidor.",
  faq: [
    {
      q: "¿Tiene Android un firmador de PDF nativo?",
      a: "No uno universal. Algunos visores de fabricante y Google Drive pueden añadir una marca a mano alzada, pero varía según el móvil y la mayoría no gestiona campos de firma ni una firma reutilizable. Una app dedicada ofrece una experiencia coherente.",
    },
    {
      q: "¿Puedo reutilizar mi firma entre documentos?",
      a: "Sí, con la app PDF Editor. La dibujas una vez, queda guardada en tu dispositivo, y cada documento posterior se firma en unos pocos toques.",
    },
    {
      q: "¿Es legalmente válido firmar en Android?",
      a: "Para contratos empresariales corrientes en la mayoría de las jurisdicciones, sí. Los documentos de alto valor o regulados pueden exigir una firma cualificada más formal — comprueba la normativa de tu caso.",
    },
    {
      q: "¿Se sube mi documento al firmarlo?",
      a: "Con la app PDF Editor, no. Tu firma y el documento se quedan en tu dispositivo, algo que importa para acuerdos confidenciales.",
    },
    {
      q: "¿En qué se diferencia esto en iPhone?",
      a: "El iPhone tiene la herramienta nativa Marcado para firmas puntuales. Consulta la guía dedicada a firmar un PDF en iPhone para esa vía.",
    },
  ],
  related: [
    { label: "Firmar PDF — firmas electrónicas en el móvil", path: "/sign-pdf" },
    { label: "Cómo firmar un PDF en iPhone", path: "/guides/how-to-sign-pdf-on-iphone" },
    { label: "Cómo firmar un PDF desde el móvil", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Cómo editar un PDF en Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Firmar PDF", path: "/sign-pdf" },
};

export default content;
