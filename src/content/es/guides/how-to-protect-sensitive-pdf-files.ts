import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Cómo proteger tus PDF sensibles (almacenamiento, envío, final de vida)",
  description:
    "Un PDF sensible necesita protección en tres momentos: mientras está guardado, mientras se comparte y una vez que el destinatario ya no lo necesita. Un método práctico que cubre los tres.",
  updated: "2026-05-29",
  intro: [
    "Los PDF sensibles — contratos, registros financieros, documentos de identidad, historiales médicos — necesitan protección en tres momentos distintos de su vida: mientras están guardados en tu dispositivo o disco (almacenamiento), mientras se mueven entre tú y el destinatario (envío), y después de que el destinatario los haya usado (final de vida). La mayoría de la gente se centra solo en el envío e ignora los otros dos.",
    "Un método sensato cubre los tres. El almacenamiento significa discos cifrados o archivos protegidos con contraseña en ubicaciones que no controlas del todo. El envío significa elegir un canal que no filtre datos, no enviarlo sin más a lo primero que aparece en una búsqueda. El final de vida significa pensar en qué pasa con el archivo después — tanto tu retención como la del destinatario.",
    "Esta guía recorre los tres puntos. Nada de esto es de nivel corporativo; es la base realista para una persona o un equipo pequeño que trata material sensible de vez en cuando y no quiere montar toda una infraestructura de cumplimiento para hacerlo.",
  ],
  steps: [
    {
      title: "Almacenamiento: guarda los PDF sensibles en un soporte cifrado",
      body: "FileVault en macOS, BitLocker en Windows, cifrado completo del disco en los móviles Linux. Esto cubre tu disco local. Para discos externos, usa formatos cifrados. Las copias de seguridad también deberían estar cifradas — sincroniza con servicios en la nube que admitan cifrado de conocimiento cero, o cifra el archivo antes de subirlo.",
    },
    {
      title: "Protege con contraseña cada PDF sensible por separado",
      body: "La protección con contraseña de un PDF añade una segunda capa. El archivo sigue protegido aunque falle el cifrado del disco o alguien consiga una copia del archivo en tránsito. Usa contraseñas largas y únicas; comparte la contraseña por un canal distinto al del archivo.",
    },
    {
      title: "Envío: elige el canal según la sensibilidad",
      body: "El correo normal vale para archivos poco sensibles. La mensajería cifrada de extremo a extremo (Signal, correo seguro) para sensibilidad media. Para alta sensibilidad, servicios de pago con compromisos explícitos sobre el trato de los datos. Evita enviar PDF sensibles a «herramientas» gratuitas de terceros.",
    },
    {
      title: "Procesa en local antes de enviar",
      body: "Si necesitas comprimir, tachar o reordenar un PDF sensible antes de enviarlo, usa herramientas basadas en el navegador que procesan en local — tu archivo no pasa por el servidor de nadie. Comprimir PDF, Extraer páginas de PDF y Reordenar páginas de PDF funcionan en tu propio dispositivo.",
    },
    {
      title: "Final de vida: piensa en la retención y el borrado",
      body: "Conserva los PDF sensibles solo el tiempo que los necesites. El destinatario también debería hacerlo. Considera pedirle que confirme el borrado una vez usado el archivo, sobre todo con documentos de identidad de un solo uso.",
    },
    {
      title: "Elimina los metadatos antes de enviar",
      body: "Los PDF suelen llevar nombres de autor, nombres de archivo originales, historial de edición. Reexportar desde un origen limpio elimina la mayor parte. La app PDF Editor y otras herramientas también te permiten borrar los metadatos de forma explícita.",
    },
  ],
  tips: [
    "No mandes la contraseña en el mismo correo que el archivo protegido con contraseña. Envía el archivo por un canal y la contraseña por otro.",
    "Trata los escaneos de documentos de identidad como de un solo uso. En cuanto el destinatario los tenga, pídele que los borre a menos que tenga una razón regulatoria para conservarlos.",
    "No reutilices contraseñas entre distintos PDF sensibles. Si una se filtra, las demás siguen protegidas.",
    "Evita el wifi público para enviar archivos sensibles. Usa un punto de acceso propio o espera a una red de confianza.",
    "Revisa tus PDF sensibles una vez al año. La mayoría ya no hacen falta — elimínalos de forma segura y reduce la superficie expuesta.",
  ],
  mobileNote:
    "Hoy los móviles guardan y envían muchos PDF sensibles (contratos firmados, escaneos de DNI). La app PDF Editor los procesa en el propio dispositivo — compresión, firma, protección con contraseña — así que el material sensible nunca tiene que salir del teléfono para prepararse antes de enviarlo.",
  faq: [
    {
      q: "¿Es realmente fuerte la protección con contraseña de un PDF?",
      a: "El cifrado AES moderno en los PDF es fuerte. El punto débil suele ser la propia contraseña — una contraseña débil es la única vía de entrada sencilla. Usa contraseñas largas y únicas.",
    },
    {
      q: "¿Debería cifrar siempre los PDF sensibles?",
      a: "Sí, tanto guardados como en tránsito. El cifrado del disco protege el archivo guardado; las contraseñas de PDF o los canales cifrados protegen el archivo en tránsito.",
    },
    {
      q: "¿Y el almacenamiento en la nube para PDF sensibles?",
      a: "Aceptable con cifrado de conocimiento cero (el proveedor no puede leer tus archivos) o con cifrado del lado del cliente (cifras antes de subirlo). El almacenamiento en la nube sin cifrar vale para archivos normales, no para los muy sensibles.",
    },
    {
      q: "¿Cómo tacho partes sensibles de un PDF?",
      a: "El tachado real consiste en convertir el texto en imagen y sustituirlo. La app PDF Editor lo permite. Poner solo una caja negra encima no tacha nada de verdad — el texto de debajo se puede seguir extrayendo.",
    },
    {
      q: "¿Puedo borrar un PDF de forma segura?",
      a: "En discos SSD, el borrado seguro es menos directo que en discos mecánicos. Mueve el archivo a un soporte cifrado, bórralo después y deja que el TRIM del disco limpie los sectores. Para una sensibilidad muy alta, lo correcto es partir de un cifrado completo del disco desde el principio.",
    },
  ],
  related: [
    { label: "Seguridad PDF — protege tus PDF con contraseña", path: "/pdf-security" },
    { label: "Cómo proteger un archivo PDF con contraseña", path: "/guides/how-to-protect-pdf-file" },
    { label: "Cómo compartir un PDF con privacidad", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Cómo evitar subir documentos sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
};

export default content;
