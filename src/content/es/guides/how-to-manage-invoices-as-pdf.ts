import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Cómo gestionar tus facturas en PDF (emitir, seguir, archivar)",
  description:
    "Un método de facturación en PDF que no necesita software de contabilidad: generar, numerar, enviar, seguir y archivar — solo con herramientas gratuitas del navegador y un sistema de carpetas ordenado.",
  updated: "2026-05-29",
  intro: [
    "La mayoría de las pequeñas empresas en realidad no necesitan software de contabilidad para las facturas. Necesitan una forma limpia de generar un PDF, numerarlo con coherencia, enviarlo, seguir cuándo se cobra, y archivarlo para la declaración de la renta. El trabajo es mecánico; las herramientas son sencillas; el caos viene de saltarse la convención.",
    "Un método de facturación tiene cuatro partes: emisión (de dónde sale el PDF), seguimiento (dónde registras lo enviado), cobro (cuándo se hace efectivo) y archivo (dónde viven las copias cobradas). Cada parte es breve, y ninguna necesita una suscripción si no la quieres.",
    "Esta guía recorre el método tal como puede seguirlo de verdad un autónomo o un equipo pequeño — con generación del PDF desde una plantilla de Word, una numeración que controlas tú, y un archivo que aguanta una inspección fiscal. No es la única forma; es la que no se rompe.",
  ],
  steps: [
    {
      title: "Construye la factura en Word o Pages a partir de una plantilla",
      body: "Una plantilla de factura en Word te da una maquetación probada con marcadores de posición para cliente, fecha, líneas de detalle, total. Rellena las variables, exporta a PDF con Word a PDF. Evita editar la cifra final en cualquier sitio que no sea el origen.",
    },
    {
      title: "Usa una numeración de factura secuencial",
      body: "FRA-2026-001, FRA-2026-002, y así sucesivamente. Reinicia cada año. Los números deben ser únicos y sin huecos — hacienda marca los saltos. Mantén una lista al día en una hoja de cálculo o un archivo de texto.",
    },
    {
      title: "Guarda con un nombre de archivo previsible",
      body: "NombreCliente_Factura_FRA-2026-001_2026-05-29.pdf. El número de factura del nombre de archivo coincide con el número del documento. La carpeta por cliente facilita la búsqueda por cliente.",
    },
    {
      title: "Envía y registra de inmediato",
      body: "Envía el PDF por correo con una nota breve de presentación y registra el envío en tu hoja de seguimiento. Fecha de envío, número de factura, importe, fecha de vencimiento. El minuto en que no lo registras es el minuto en que se te olvida.",
    },
    {
      title: "Marca con agua PAGADA en cuanto se cobre",
      body: "Añadir marca de agua a PDF estampa PAGADA en el archivo junto con la fecha. La copia cobrada va a /facturas/pagadas/; la pendiente vive en /facturas/pendientes/. El estado visual supera al estado en una hoja de cálculo.",
    },
    {
      title: "Archiva por año",
      body: "A final de año, mueve /facturas/pagadas/ a /Archivo/Facturas/2026/. Conserva al menos siete años (varía según la jurisdicción). El archivo debería explicarse solo dentro de cinco años, cuando hayas olvidado la lógica original de clasificación.",
    },
  ],
  tips: [
    "Nunca edites una factura ya enviada. Si el importe está mal, emite una factura rectificativa o una nueva — el rastro de auditoría tiene que quedar intacto.",
    "Haz coincidir el número de factura del archivo con el del documento y con la línea de tu hoja de seguimiento. Tres sitios que dicen lo mismo.",
    "El PDF/A es el formato de archivo histórico que algunas administraciones fiscales prefieren. Si presentas en una jurisdicción así, vuelve a exportar el conjunto de fin de año a PDF/A.",
    "Comprime las facturas para el archivo — son texto sencillo, pero los archivos se acumulan. Las copias comprimidas ahorran espacio en disco de verdad a lo largo de los años.",
    "No protejas con contraseña las facturas salvo que el cliente lo exija. Fricción sin beneficio en un documento que solo son cifras y nombres.",
  ],
  mobileNote:
    "Las facturas cada vez más se originan en un móvil — un envío rápido desde una cafetería después de un trabajo. La app PDF Editor te deja rellenar la plantilla, estampar el número de factura y enviar el PDF por correo desde el móvil, con una copia guardada en local para tus registros.",
  faq: [
    {
      q: "¿Necesito software de facturación?",
      a: "No para poco volumen. Una plantilla de Word, una hoja de seguimiento y un sistema de carpetas gestionan con limpieza decenas de facturas al mes. El software compensa cuando necesitas facturación recurrente, multidivisa o muchos clientes.",
    },
    {
      q: "¿Qué formato de número de factura debería usar?",
      a: "Secuencial, sin huecos, idealmente con un prefijo del año. FRA-2026-001 es legible y cómodo para una inspección fiscal.",
    },
    {
      q: "¿Cuánto tiempo debería conservar las facturas?",
      a: "Varía según la jurisdicción; siete años es un valor por defecto seguro. Comprueba la normativa de tu país para el requisito exacto.",
    },
    {
      q: "¿Debería enviar las facturas como Word o como PDF?",
      a: "Siempre PDF. Los PDF fijan el formato y el importe; los documentos de Word invitan a clientes bien intencionados a «arreglar» algo.",
    },
    {
      q: "¿Qué pasa con las facturas de IVA?",
      a: "Algunas jurisdicciones exigen una maquetación concreta, numeración secuencial y archivo en formato original. Cumple la normativa local aplicable; el método anterior se adapta a esos requisitos.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos y métodos de trabajo", path: "/pdf-for-business" },
    { label: "Word a PDF — exportaciones limpias de facturas", path: "/word-to-pdf" },
    { label: "Añadir marca de agua a PDF — estampa PAGADA en facturas cerradas", path: "/add-watermark-to-pdf" },
    { label: "Método PDF para pequeñas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF para empresas — contratos y métodos de trabajo", path: "/pdf-for-business" },
};

export default content;
