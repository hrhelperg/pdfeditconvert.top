import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Cómo crear un PDF listo para el cliente (cuidado, con tu marca)",
  description:
    "Qué separa un PDF interno de uno listo para el cliente: portada, numeración de página, identidad de marca, tamaño y nombre del archivo. Los últimos retoques que hacen que el documento se vea terminado.",
  updated: "2026-05-29",
  intro: [
    "Hay una diferencia entre un PDF de trabajo y uno listo para el cliente, y esa diferencia está sobre todo en los pequeños detalles. La versión interna tiene una portada provisional, ninguna numeración de página, un tamaño de 14 MB y un nombre de archivo como «final-final-v2.pdf». La versión lista para el cliente tiene una portada limpia, tipografía de marca, páginas numeradas, un tamaño de 2 MB y un nombre que suena profesional. Ambas comunican la misma información; solo una se percibe como terminada.",
    "Producir la versión lista para el cliente no requiere un diseñador. Es una secuencia corta de pasos habituales: ajustar el origen, reexportar con cuidado, pulir el PDF, etiquetarlo bien, comprimir con sentido común y renombrar de forma deliberada. Hecho en orden, el pulido lleva unos minutos por documento.",
    "Esta guía recorre esa secuencia. Ninguno de estos pasos necesita herramientas caras; la mayoría se pueden hacer en una pestaña del navegador sin enviar nada sensible a ningún servidor.",
  ],
  steps: [
    {
      title: "Empieza con un documento de origen bien diseñado",
      body: "Si el documento de origen parece provisional, el PDF también lo parecerá. Corrige los márgenes, la elección de fuente y la jerarquía de títulos en Word, Pages o Docs antes de exportar. El PDF no puede añadir un cuidado que no está en el origen.",
    },
    {
      title: "Añade una portada que identifique el entregable",
      body: "Nombre del cliente, nombre del proyecto, título del documento, fecha, nombre de tu empresa. Una sola página. Aporta un contexto que el documento no tiene que repetir en cada encabezado.",
    },
    {
      title: "Incluye numeración de página a partir de la segunda",
      body: "El formato X de Y no deja lugar a dudas y confirma que no falta nada — el lector sabe que el documento está completo. Omite la numeración en la portada; empieza en la página 2.",
    },
    {
      title: "Aplica una identidad de marca coherente (tipografía, color, logotipo)",
      body: "Un logotipo pequeño y un sistema tipográfico coherente transmiten cuidado. La marca debe notarse discreta, no gritar. Si el cliente tiene un manual de marca, síguelo.",
    },
    {
      title: "Reexporta con las fuentes incrustadas",
      body: "Las fuentes incrustadas garantizan que el documento se vea igual para el cliente que para ti. Reexporta desde el origen con la opción «incrustar todas las fuentes» activada.",
    },
    {
      title: "Comprime, renombra y verifica antes de enviar",
      body: "Comprime el PDF para que quepa en el límite habitual del correo. Renombra a NombreCliente_TipoDocumento_AAAA-MM-DD.pdf. Abre el archivo final una vez y lee la primera y la última página antes de enviarlo: las erratas se detectan al releer.",
    },
  ],
  tips: [
    "Evita los fondos de banco de imágenes y las portadas con aire de captura de pantalla. Una portada limpia basada en tipografía envejece mejor que una muy diseñada.",
    "No pongas marcas de agua de «BORRADOR» en la versión final. Que no lleve marca de agua es precisamente la señal de que es la definitiva.",
    "Las tablas que ocupan varias páginas necesitan repetir la fila de encabezado. En Word, «repetir fila de título» es un solo clic que evita problemas de lectura al imprimir.",
    "Los gráficos exportados como vector (dentro del PDF) se mantienen nítidos. Los gráficos pegados como imagen se ven borrosos con mucho zoom: corrígelo en el origen.",
    "Si reutilizas la misma plantilla con varios clientes, actualiza los metadatos cada vez para que el título del documento no diga «Propuesta Acme» cuando va destinado a Beta Co.",
  ],
  mobileNote:
    "Los clientes suelen abrir primero los entregables en el móvil. La app PDF Editor te permite previsualizar el PDF final en el móvil tal como lo verá el cliente, así que una portada que se ve bien en un monitor de 27 pulgadas pero apretada en el móvil se detecta antes de la entrega.",
  faq: [
    {
      q: "¿Cuál es la señal más clara de que un PDF no está listo para el cliente?",
      a: "Un nombre de archivo sin editar. «final_v3_revisado.pdf» le dice al cliente que este es uno de tantos. Un nombre de archivo concreto y fechado transmite que se trata de un entregable terminado.",
    },
    {
      q: "¿Necesito un logotipo en cada página?",
      a: "No. Con un logotipo en la portada y una referencia discreta en el pie de página basta. Los logotipos grandes en cada página parecen una presentación comercial, no un documento.",
    },
    {
      q: "¿Debería incluir un índice?",
      a: "En cualquier documento de más de diez páginas, sí. Es un pequeño detalle de cortesía que hace que el documento se sienta terminado y ayuda al lector a orientarse.",
    },
    {
      q: "¿Qué formato de numeración de página es mejor?",
      a: "X de Y. La Y confirma que el documento está completo. Una X sola vale para documentos cortos, pero pierde esa señal de integridad.",
    },
    {
      q: "¿Merece la pena diseñar una portada personalizada?",
      a: "Para entregables recurrentes, sí: una plantilla de marca se amortiza a lo largo de muchos documentos. Para un caso puntual, una portada tipográfica limpia es suficiente.",
    },
  ],
  related: [
    { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
    { label: "Word a PDF — exportaciones limpias para distribuir", path: "/word-to-pdf" },
    { label: "Cómo compartir PDF con clientes", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Cómo preparar un PDF para uso profesional", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
};

export default content;
