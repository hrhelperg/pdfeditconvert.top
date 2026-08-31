import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Cómo enviar un contrato en PDF (firmar, bloquear, entregar)",
  description:
    "Un contrato exige un método más estricto: bloquear el contenido, aplicar la firma, marcar los borradores con marca de agua y conseguir un archivo final que la otra parte pueda contrafirmar sin idas y venidas.",
  updated: "2026-05-29",
  intro: [
    "Los contratos son el tipo de documento donde una mala gestión del PDF causa más daño. Una copia firmada que resulta ser una versión distinta del borrador sin firmar. Una contrafirma aplicada a un archivo que la primera persona en firmar creía bloqueado. Una marca de agua de borrador olvidada en la versión final. Nada de esto es raro; todo acaba en disputas de verdad.",
    "La solución es un método más estricto en torno a tres cosas: bloquear el contenido antes de la firma, aplicar las firmas en un orden claro, y entregar el resultado como un archivo final definitivo. Nada de esto requiere software de contratos caro; requiere un uso deliberado de las herramientas básicas de PDF y una secuencia honesta.",
    "Esta guía recorre el método tal como debería funcionar — desde el borrador final hasta las firmas de ambas partes, llegando a un PDF contrafirmado y limpio con el que el abogado esté contento. También cubre qué hacer cuando la otra parte quiere usar su propia plataforma de firma.",
  ],
  steps: [
    {
      title: "Cierra primero el contenido del contrato",
      body: "Toda la negociación vuelve al origen — Word, Pages, Docs. No hagas control de cambios en el PDF. Exporta a PDF solo cuando ambas partes hayan acordado que el texto está cerrado.",
    },
    {
      title: "Elimina los borradores y las marcas de agua",
      body: "Quita las marcas de agua de BORRADOR (Añadir marca de agua a PDF te deja evitar añadir una desde el principio en la versión final). El PDF final debería parecer definitivo.",
    },
    {
      title: "Añade tu firma primero",
      body: "Firmar PDF te deja añadir una firma escrita o dibujada en el lugar correcto. Firma primero si eres quien origina el contrato; la otra parte contrafirma el PDF que ya lleva tu firma.",
    },
    {
      title: "Bloquea el archivo antes de enviarlo",
      body: "Si tu herramienta lo admite, aplica restricciones de edición después de firmar. La otra parte puede leer y firmar pero no alterar el contenido. Es la única forma de congelar un contrato con confianza.",
    },
    {
      title: "Envía con instrucciones claras",
      body: "Una nota breve de presentación: «Adjunto: contrato firmado. Por favor, contrafirma en la página 8 y devuélvelo». Una frase ahorra una ronda entera de preguntas.",
    },
    {
      title: "Recibe el archivo contrafirmado y archiva ambos",
      body: "Cuando llegue el PDF contrafirmado, guárdalo como la versión canónica. Conserva el borrador sin firmar, tu copia con una sola firma, y la copia totalmente firmada en la misma carpeta. La cadena de versiones es el rastro de auditoría.",
    },
  ],
  tips: [
    "No uses el mismo PDF de firma para un segundo contrato. Empieza siempre una exportación nueva para cada contrato — metadatos limpios, firmas limpias.",
    "Si la otra parte quiere usar su plataforma de firma (DocuSign, Adobe Sign, otras), cede a la suya. No vale la pena una batalla sobre qué herramienta es más limpia.",
    "Asegúrate de que tu firma sea visualmente distintiva. Un nombre escrito en cursiva es una firma, pero se siente menos deliberado que una dibujada.",
    "Las portadas que listan el título del contrato, la fecha y las contrapartes hacen mucho más fácil la recuperación posterior que confiar solo en el nombre del archivo.",
    "Marca con agua los borradores (BORRADOR, NO FIRMAR) durante la negociación. La etiqueta visible evita una contrafirma accidental.",
  ],
  mobileNote:
    "Las contrafirmas a menudo ocurren en un móvil — un socio revisando en el tren, un cliente firmando entre reuniones. La app PDF Editor lo hace bien: revisa el contrato, firma con el dedo en la pantalla, devuélvelo sin pasar por un ordenador. El archivo firmado sale del móvil como un PDF limpio.",
  faq: [
    {
      q: "¿Es legalmente vinculante una firma escrita en un PDF?",
      a: "En la mayoría de las jurisdicciones, sí, para contratos ordinarios. Algunos casos específicos (escrituras notariales, ciertos instrumentos financieros) necesitan más — comprueba el tipo de contrato antes de dar nada por hecho.",
    },
    {
      q: "¿Debería protegerse el contrato con contraseña?",
      a: "Normalmente no. Las contraseñas añaden fricción sin mucho beneficio de seguridad. Reserva las contraseñas para anexos altamente confidenciales, no para el propio contrato.",
    },
    {
      q: "¿Cómo bloqueo un PDF después de firmarlo?",
      a: "Muchas herramientas de edición, incluida la app PDF Editor, te dejan aplicar restricciones de edición durante el proceso de firma. Bloquea después de la firma final, no durante la negociación.",
    },
    {
      q: "¿Qué pasa si la otra parte edita el PDF después de que yo firme?",
      a: "Bloquear el archivo antes de enviarlo hace que las alteraciones sean detectables. Incluso sin bloqueo, el PDF firmado es la versión de referencia; las ediciones posteriores invalidan la firma.",
    },
    {
      q: "¿Debería firmar yo siempre primero?",
      a: "Si eres quien origina el contrato, sí — transmite compromiso. Si estás contrafirmando, firma el archivo que envió la otra parte en vez de empezar de cero.",
    },
  ],
  related: [
    { label: "Firmar PDF — añade firmas electrónicas", path: "/sign-pdf" },
    { label: "Añadir marca de agua a PDF — etiqueta los borradores con claridad", path: "/add-watermark-to-pdf" },
    { label: "Cómo compartir PDF con tus clientes", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Método PDF para pequeñas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Firmar PDF — firmas electrónicas en el móvil", path: "/sign-pdf" },
};

export default content;
