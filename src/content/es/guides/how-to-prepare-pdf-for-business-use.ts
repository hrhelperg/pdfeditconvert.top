import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "Cómo preparar un PDF para uso profesional (checklist de repaso)",
  description:
    "Antes de que un PDF salga de la oficina: quita borradores, revisa la paginación, corrige la orientación, incrusta las fuentes y reduce el tamaño. Una checklist previa al envío para los documentos que representan tu negocio.",
  updated: "2026-05-29",
  intro: [
    "Un PDF que sale de tu empresa es un pequeño embajador. Lleva tu nombre, tu marca, tus decisiones tipográficas y — con demasiada frecuencia — el nombre de archivo original tipo «Documento sin título (4).pdf» de quien lo empezó la semana pasada. La diferencia entre un PDF amateur y uno profesional rara vez es dramática, pero casi siempre se nota de un vistazo.",
    "Preparar un PDF para uso profesional no es una única transformación; es una checklist breve. Quita borradores, fija bien la numeración de páginas, corrige la orientación, confirma que las fuentes se incrustan, etiqueta con limpieza, comprime con sensatez, pon un nombre de archivo útil. Cada paso lleva segundos, todo el proceso lleva un minuto, y el documento sale con aspecto de haberlo hecho a propósito.",
    "Esta guía repasa la checklist en el orden que atrapa antes la mayoría de los problemas — como la harías un martes cualquiera para un entregable de verdad.",
  ],
  steps: [
    {
      title: "Elimina las páginas sin usar o de borrador",
      body: "Extraer páginas PDF conserva solo las páginas que de verdad quieres enviar. Portadas que eran marcadores de posición, páginas de agradecimiento en blanco, anexos antiguos — todo eso debería quedar fuera de la versión final.",
    },
    {
      title: "Verifica el orden de páginas y la paginación",
      body: "Reordenar páginas PDF si algo acabó fuera de secuencia después de una fusión o una revisión. Comprueba que los números de página visibles coinciden con el orden — los lectores detectan enseguida una numeración desajustada.",
    },
    {
      title: "Corrige la orientación",
      body: "Las páginas anchas (hojas de cálculo, gráficos) van en horizontal; todo lo demás en vertical. Girar PDF endereza escaneos o importaciones que llegaron de lado. Un documento con orientación mixta se siente roto aunque no lo esté.",
    },
    {
      title: "Asegúrate de que las fuentes están incrustadas",
      body: "Las fuentes que no están incrustadas se sustituyen del lado del lector, a veces mal. Vuelve a exportar desde el origen con «incrustar todas las fuentes» activado, o imprime a PDF para aplanar el renderizado.",
    },
    {
      title: "Fija el título del archivo en los metadatos",
      body: "El texto que se muestra en las pestañas del navegador y en las barras de título del lector suele diferir del nombre de archivo. Fija ambos de forma deliberada — los clientes notan cuando una pestaña de «Propuesta» dice «Sin título.docx».",
    },
    {
      title: "Comprime y nombra para la entrega",
      body: "Comprimir PDF baja el archivo por debajo de los límites habituales de correo y portal. Renombra a NombreCliente_TipoDocumento_AAAA-MM-DD.pdf para que el destinatario pueda identificar el archivo desde su carpeta de descargas un año después.",
    },
  ],
  tips: [
    "Recorre el documento una vez al 100% de zoom antes de enviarlo. El ojo detecta sorpresas que el desplazamiento pasa por alto.",
    "Añade una marca de agua a los borradores, pero nunca a las versiones finales — la ausencia de marca de agua es la señal de que esta es la definitiva.",
    "Elimina los metadatos antiguos. Tanto la app PDF Editor como las reexportaciones te dejan sustituir el autor, la empresa y el historial de edición que puede filtrarse de los borradores.",
    "Si el documento tiene campos de formulario pensados para rellenarse, pruébalos en el dispositivo al que se lo vas a enviar. Muchos campos funcionan en Acrobat pero no en navegadores.",
    "Haz una última vista previa de impresión del documento. Si se imprime mal, el destinatario topará con el mismo problema.",
  ],
  mobileNote:
    "Los últimos retoques — corregir un escaneo de lado, quitar una página de borrador que se coló, volver a comprimir para un límite de correo — pasan en el móvil más a menudo de lo que la gente admite. La app PDF Editor gestiona todo esto sin conexión, así que el entregable sale limpio incluso desde el Wi-Fi de una cafetería.",
  faq: [
    {
      q: "¿Cuál es el paso que más se salta la gente?",
      a: "Fijar los metadatos. El nombre de archivo y el título del documento que se muestran en pestañas y cabeceras del lector suelen ser restos de la redacción. Corrige ambos antes de enviar.",
    },
    {
      q: "¿Cuánto importa la compresión?",
      a: "Mucho cuando el destinatario está en un portal estricto o con una conexión lenta. Menos para un envío interno informal. Comprime por defecto — casi nunca hace daño.",
    },
    {
      q: "¿Necesito incrustar las fuentes en todos los PDF?",
      a: "En todo lo que sea de cara al cliente, sí. En borradores internos donde todos tienen las mismas fuentes instaladas, menos crítico. El coste de incrustar es pequeño.",
    },
    {
      q: "¿Debería incluir siempre números de página?",
      a: "En entregables de varias páginas, sí. En documentos de una sola página, no. Los números de página ayudan al lector a navegar y a confirmar que está todo.",
    },
    {
      q: "¿Hay una herramienta que haga todo esto de una sola pasada?",
      a: "No, y es deliberado — cada paso es una decisión consciente, no una transformación automática. Las herramientas basadas en el navegador de este sitio te dejan hacer cada paso en segundos sin empaquetarlo todo en una caja negra.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos y métodos de trabajo", path: "/pdf-for-business" },
    { label: "Extraer páginas PDF — recorta los entregables finales", path: "/extract-pdf-pages" },
    { label: "Cómo compartir PDF con tus clientes", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Cómo preparar un PDF antes de compartirlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF para empresas — contratos y métodos de trabajo", path: "/pdf-for-business" },
};

export default content;
