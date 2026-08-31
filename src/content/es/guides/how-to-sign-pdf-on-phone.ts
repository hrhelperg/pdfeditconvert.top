import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "Cómo firmar un PDF desde el móvil",
  description:
    "Añade una firma electrónica legal a un PDF desde el iPhone o Android. Guía práctica con la app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Imprimir un PDF solo para firmarlo y volver a escanearlo es un anacronismo. La mayoría de jurisdicciones aceptan firmas electrónicas para contratos comerciales ordinarios, acuerdos de confidencialidad, presupuestos y acuses de recibo. Tu móvil es más que capaz de producir una firma limpia y legalmente utilizable en menos de un minuto.",
    "Esta guía cubre cómo firmar un PDF en iPhone o Android con la app PDF Editor. La firma que guardas se reutiliza para cada documento futuro — la dibujas una vez. A partir de ahí, firmar cualquier contrato es una operación de cuatro toques: abrir, tocar Firmar, colocar, exportar.",
    "También veremos los casos en los que firmar desde el móvil es *mejor* que hacerlo en un escritorio: contratos que tienen que volver rápido, firmas mientras viajas, y flujos con varios firmantes que van pasando de móvil en móvil. Al final tendrás una firma guardada lista para cada documento futuro.",
  ],
  steps: [
    {
      title: "Abre el PDF",
      body: "Importa el documento a la app PDF Editor desde Archivos, tu nube, el correo o cualquier app para compartir. El flujo de firma funciona sin importar de dónde venga el PDF.",
    },
    {
      title: "Toca la herramienta Firmar",
      body: "Está en la barra de herramientas de edición. Elige firma manuscrita, firma tecleada o rúbrica. La herramienta detecta automáticamente los campos de firma existentes si el PDF se diseñó para firmarse.",
    },
    {
      title: "Dibuja o escribe tu firma",
      body: "Solo la primera vez. Usa el dedo, un Apple Pencil o un S Pen. El resultado se guarda en tu dispositivo. Puedes editarla o sustituirla en cualquier momento desde Ajustes.",
    },
    {
      title: "Coloca la firma",
      body: "Arrástrala hasta el lugar correcto de la página. Cambia el tamaño con los tiradores de las esquinas. La firma pasa a ser un objeto normal del PDF, así que puedes moverla después de colocarla.",
    },
    {
      title: "Añade fecha e iniciales si hace falta",
      body: "Muchos contratos piden la fecha junto a la firma e iniciales en cada página. Un sello de fecha de un toque y una variante de rúbrica guardada cubren ambos casos.",
    },
    {
      title: "Exporta la copia firmada",
      body: "Guarda como archivo nuevo (recomendado — conserva el original sin firmar) o sobrescribe. El PDF exportado incluye metadatos de la firma para el archivo. Comparte por correo, AirDrop, Drive o cualquier app de mensajería.",
    },
  ],
  tips: [
    "Usa un lápiz óptico en lugar del dedo cuando el documento vaya a pasar por una revisión visual. El trazo más limpio marca una diferencia real en contratos de cara al cliente.",
    "Guarda tu firma una vez y reutilízala en cada documento futuro — la app la guarda en local, en tu dispositivo, nunca se envía a ningún servidor.",
    "Usa una firma tecleada para acuses de recibo internos rutinarios y una manuscrita para contratos externos.",
    "Aplica una contraseña a los documentos firmados especialmente sensibles antes de compartirlos — la herramienta Proteger se ejecuta después de firmar.",
    "Guarda el PDF original sin firmar en una carpeta junto a la versión firmada. Si una contraparte pide una copia «limpia» o necesitas volver a firmar con correcciones, la tendrás disponible.",
  ],
  mobileNote:
    "Firmar desde el móvil significa que los contratos vuelven a la otra parte en menos de una hora — a veces en minutos. Esa ventaja de velocidad importa de forma desproporcionada cuando trabajas fuera de un escritorio: en la sede de un cliente, entre reuniones o de camino a algún sitio. Todo el flujo, desde recibir un contrato hasta devolverlo firmado, cabe cómodamente en una pausa para el café.",
  faq: [
    {
      q: "¿Es válida legalmente una firma electrónica?",
      a: "En la mayoría de jurisdicciones, sí, para contratos comerciales ordinarios. El reglamento eIDAS de la UE y la ley ESIGN de Estados Unidos reconocen ambos las firmas electrónicas estándar. Para documentos de alto valor o legalmente regulados, revisa la normativa aplicable — puede exigirse una firma electrónica cualificada, que es un proceso distinto (más formal).",
    },
    {
      q: "¿Pueden firmar el mismo PDF varias personas?",
      a: "Sí. Pasa el archivo entre los firmantes mediante el menú para compartir, AirDrop, correo o cualquier app de mensajería. Cada firma se añade en su sitio y las firmas anteriores se mantienen intactas. El archivo final muestra la firma de todos en las posiciones correctas.",
    },
    {
      q: "¿La firma se verá suave en la pantalla de un móvil?",
      a: "En móviles actuales, sí. Un lápiz óptico produce trazos notablemente más suaves que el dedo, lo cual importa en contratos que pasan por revisión visual. Para acuses de recibo rutinarios, firmar con el dedo es perfectamente aceptable.",
    },
    {
      q: "¿Mi firma se guarda en algún servidor?",
      a: "No. Las firmas guardadas viven únicamente en tu dispositivo. Se aplican a los documentos en local y nunca se envían a nuestra infraestructura ni a ningún tercero.",
    },
    {
      q: "¿Y si el PDF ya tiene campos de firma?",
      a: "La app detecta los campos de firma tipo formulario existentes y te deja tocar directamente sobre ellos. Tu firma se ajusta automáticamente al tamaño y la posición correctos — sin necesidad de redimensionar a mano.",
    },
  ],
  related: [
    { label: "Firmar PDF — resumen completo", path: "/sign-pdf" },
    {
      label: "Protege los PDF firmados con una contraseña",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Cómo editar un PDF en iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Firmar PDF", path: "/sign-pdf" },
};

export default content;
