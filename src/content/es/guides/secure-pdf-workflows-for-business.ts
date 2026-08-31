import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "secure-pdf-workflows-for-business",
  h1: "Cómo asegurar tus PDF en la empresa (sin infraestructura pesada)",
  description:
    "Una pequeña empresa no necesita una caja fuerte documental certificada para trabajar con tranquilidad. La base realista — almacenamiento cifrado, envíos controlados, procesamiento local — que responde al riesgo de verdad.",
  updated: "2026-05-29",
  intro: [
    "Las infraestructuras de seguridad PDF de nivel corporativo — cajas fuertes auditadas, retención automatizada, preparación para procesos de e-discovery — existen para empresas con reguladores mirando por encima del hombro. Para una consultora de cinco personas o una agencia de treinta, eso es desproporcionado. El riesgo real es más cotidiano: un empleado envía el contrato de un cliente a una herramienta gratuita de «compresión» que conserva el archivo, un disco compartido no tiene cifrado, un PDF firmado se manda por correo sin protección desde un wifi público.",
    "Una base de seguridad razonable para una pequeña empresa cubre esos riesgos reales sin comprar equipamiento de nivel corporativo. Almacenamiento cifrado, envíos firmados, procesamiento local para el contenido sensible, y unos pocos hábitos que el equipo adopta en conjunto. Nada de esto es caro; en su mayor parte, es simplemente cambiar las herramientas por defecto.",
    "Esta guía describe esa base. Toma lo que encaja con tu empresa; ignora lo que no aplique. El objetivo es una defensa razonable, no un simulacro para aparentar.",
  ],
  steps: [
    {
      title: "Cifrado completo del disco en cada dispositivo de la empresa",
      body: "FileVault en macOS, BitLocker en Windows, LUKS en Linux. Obligatorio en los portátiles, útil en los sobremesa. Un dispositivo perdido o robado sin cifrar es una brecha de datos inmediata; con cifrado, es solo la pérdida de un aparato.",
    },
    {
      title: "Procesa los PDF en local para el contenido sensible de los clientes",
      body: "Comprimir PDF, Fusionar PDF, Extraer páginas de PDF y las demás herramientas basadas en el navegador de este sitio procesan en local — los datos del cliente no pasan por ningún tercero. Establece esto como el hábito por defecto de todo el equipo.",
    },
    {
      title: "Firma los contratos con una herramienta de firma electrónica de verdad",
      body: "Firmar PDF o la app PDF Editor para los contratos habituales. Para transacciones reguladas, usa una plataforma de firma comercial contrastada. En ambos casos, una firma dibujada se sostiene mejor que un nombre simplemente escrito a máquina.",
    },
    {
      title: "Usa canales cifrados para los envíos sensibles",
      body: "Signal o correo cifrado de extremo a extremo para el contenido sensible. Correo normal para los documentos habituales. Ajusta el canal al nivel de sensibilidad.",
    },
    {
      title: "Define una política de contraseñas para los PDF sensibles",
      body: "El contenido confidencial de un cliente lleva una contraseña de PDF. Comparte la contraseña por un canal distinto al del archivo. Usa contraseñas únicas por cliente cuando sea posible.",
    },
    {
      title: "Revisa y elimina con regularidad",
      body: "Revisión trimestral de /Clientes/Archivo/. Elimina lo que los reguladores no exigen y los clientes ya no necesitan. Cada archivo sensible que conservas es un riesgo continuo; reducir el inventario reduce la exposición.",
    },
  ],
  tips: [
    "Deja la base de seguridad por escrito. Una política de una página que todo el mundo ha leído se sostiene mejor que una norma nunca formulada.",
    "Cifra las memorias USB y los discos de copia de seguridad externos. Son los dispositivos más fáciles de perder.",
    "No pagues una suscripción por puesto para software de seguridad cuando herramientas gratuitas ya cubren la base. Reserva el presupuesto para las carencias reales.",
    "Forma al equipo frente al phishing — la mayoría de las brechas en pequeñas empresas no vienen de una debilidad de herramientas, sino de un correo de phishing que ha funcionado.",
    "Ten un plan para incidentes, aunque sea de un solo párrafo. «Si perdemos un portátil con archivos de clientes, avisamos a los clientes afectados en 48 horas» ya es suficiente para empezar.",
  ],
  mobileNote:
    "Hoy las pequeñas empresas hacen buena parte de su trabajo documental desde el móvil. La app PDF Editor gestiona la firma, la compresión, la conversión y el envío en local en iOS y Android, así que la parte móvil del trabajo no mete un nuevo servidor de terceros en la cadena.",
  faq: [
    {
      q: "¿De verdad necesitan las pequeñas empresas una base de seguridad?",
      a: "Sí. La mayoría de las brechas afectan a pequeñas empresas, no a grandes corporaciones. La base es corta y barata; no tenerla es el verdadero riesgo.",
    },
    {
      q: "¿Es el procesamiento en el navegador suficientemente seguro para el trabajo con clientes?",
      a: "Para el trabajo habitual con clientes, sí. El archivo no sale de tu dispositivo; eso es más sólido que una herramienta del lado del servidor con una política de retención. Para transacciones reguladas (financieras, médicas), pueden aplicarse requisitos de cumplimiento específicos.",
    },
    {
      q: "¿Hace falta una firma de nivel corporativo para cada contrato?",
      a: "No. Los contratos habituales pueden usar Firmar PDF o la app PDF Editor. Reserva las plataformas de firma comerciales para transacciones de alto valor o reguladas.",
    },
    {
      q: "¿Cómo gestionamos un incidente de seguridad?",
      a: "Planifica con antelación: proceso de notificación, lista de clientes afectados, comunicación al regulador si corresponde. No improvises.",
    },
    {
      q: "¿Cuál es la carencia de seguridad más habitual en una pequeña empresa?",
      a: "Un cifrado desigual de los dispositivos y un uso poco cuidadoso de herramientas PDF gratuitas que envían el archivo a un servidor con contenido sensible de clientes. Las dos se corrigen con poco esfuerzo.",
    },
  ],
  related: [
    { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
    { label: "Cómo proteger tus PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Cómo compartir un PDF con privacidad", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Método PDF para pequeñas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
};

export default content;
