import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { PT_BR_GUIDE_ROUTES } from "@/content/pt-BR/routes.guides";

/**
 * Brazilian Portuguese route manifest — the localization manifest for pt-BR.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Portuguese URL after the `/pt-br`
 * prefix. Category, priority, change frequency and lastmod are inherited
 * from the English route — see buildLocaleRoutes.
 *
 * Slug conventions, decided once and applied throughout:
 *
 * - ASCII-normalized, no diacritics. "comprimir-pdf", not "compressão".
 *   Brazilian sites overwhelmingly publish ASCII slugs; it keeps URLs
 *   copy-pasteable, avoids percent-encoding in analytics and referrers, and
 *   costs nothing in ranking. (The route map accepts native characters, so
 *   a future locale is free to decide differently — ru, pl and cs each get
 *   to make that call on their own evidence.)
 * - The verb Brazilians actually search, not a literal translation of the
 *   English slug: "juntar-pdf" (juntar PDF far outranks mesclar PDF in BR
 *   search), "girar-pdf", "organizar-paginas-pdf".
 * - Section prefixes are translated too: guias/, comparacoes/, casos-de-uso/.
 *
 * Titles avoid repeating "PDF Editor": the root metadata template already
 * appends "| PDF Editor" to every page title.
 */
export const PT_BR_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "Ferramentas de PDF grátis, direto no navegador",
    description:
      "Comprima, junte, divida, gire e converta PDFs sem enviar nada para um servidor. Grátis, sem cadastro — e com o app PDF Editor para iPhone e Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "editor-de-pdf",
    title: "Editor de PDF — edite texto, imagens e páginas no celular",
    description:
      "Edite PDFs no iPhone ou no Android: altere o texto, insira imagens, reorganize páginas e assine documentos. Veja como o app PDF Editor simplifica a edição no celular.",
  },
  {
    id: "pdf-converter",
    slug: "conversor-de-pdf",
    title: "Conversor de PDF — converta PDF em Word, JPG, PNG e mais",
    description:
      "Converta PDFs para Word, Excel, JPG e PNG — e faça o caminho de volta. Aprenda o fluxo mais limpo pelo celular com o app PDF Editor no iOS e no Android.",
  },
  {
    id: "sign-pdf",
    slug: "assinar-pdf",
    title: "Assinar PDF — assinatura eletrônica pelo celular",
    description:
      "Assine PDFs pelo celular com uma assinatura de próprio punho ou com o nome digitado. Aceita na maioria dos fluxos de trabalho. Conheça o app PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "digitalizar-para-pdf",
    title: "Digitalizar para PDF — transforme papel em PDFs limpos",
    description:
      "Use a câmera do celular para digitalizar documentos, documentos de identidade e recibos em PDFs limpos e pesquisáveis. O app PDF Editor detecta as bordas sozinho.",
  },
  {
    id: "pdf-security",
    slug: "seguranca-de-pdf",
    title: "Segurança de PDF — proteja com senha e criptografia",
    description:
      "Proteja PDFs sigilosos com senha e criptografia. Guia prático para manter documentos seguros no iPhone e no Android.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-para-empresas",
    title: "PDF para empresas — contratos, cobranças e fluxos de trabalho",
    description:
      "Como equipes pequenas usam PDF em contratos, cobranças e aprovações. Fluxos de trabalho modernos, pensados para o celular, com o app PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-para-estudantes",
    title: "PDF para estudantes — anotações, grifos e resumos",
    description:
      "Use PDFs para anotações de aula, grifos e resumos de estudo. Fluxos de trabalho inteligentes no celular com o app PDF Editor para iOS e Android.",
  },
  {
    id: "pdf-forms",
    slug: "formularios-pdf",
    title: "Formulários PDF — preencha, assine e organize PDFs editáveis",
    description:
      "Entenda como funcionam os formulários PDF e como preencher, assinar, criar e consertar cada um. O centro de conteúdo sobre PDFs interativos e formulários planos.",
  },

  // Guides index
  {
    id: "guides",
    slug: "guias",
    title: "Guias de PDF — tutoriais e artigos práticos",
    description:
      "Tutoriais de PDF práticos e pensados para o celular: edite, converta, comprima, junte, assine e proteja documentos no iPhone e no Android.",
  },

  // Browser tools
  {
    id: "pdf-tools",
    slug: "ferramentas-pdf",
    title: "Ferramentas de PDF grátis — no navegador, sem upload",
    description:
      "Ferramentas de PDF grátis que rodam inteiramente no seu navegador. Junte, divida, gire, marque, converta imagens em PDF e PDFs em imagens — os arquivos nunca saem do seu dispositivo.",
  },
  {
    id: "compress-pdf",
    slug: "comprimir-pdf",
    title: "Comprimir PDF — reduza o tamanho do arquivo no navegador",
    description:
      "Diminua o tamanho de um PDF direto no navegador, com níveis de compressão ajustáveis. Grátis, sem cadastro e sem upload — o arquivo não sai do seu dispositivo.",
  },
  {
    id: "merge-pdf",
    slug: "juntar-pdf",
    title: "Juntar PDF — una vários arquivos em um só, no navegador",
    description:
      "Combine vários arquivos PDF em um único documento direto no navegador. Grátis, sem cadastro e sem upload — seus arquivos não saem do dispositivo.",
  },
  {
    id: "split-pdf",
    slug: "dividir-pdf",
    title: "Dividir PDF — separe páginas no navegador, sem upload",
    description:
      "Divida um PDF por intervalo de páginas direto no navegador. Grátis, sem cadastro e sem upload — os arquivos continuam no seu dispositivo.",
  },
  {
    id: "image-to-pdf",
    slug: "imagem-para-pdf",
    title: "Imagem para PDF — converta JPG, PNG e WebP no navegador",
    description:
      "Reúna imagens JPG, PNG e WebP em um único PDF direto no navegador. Grátis, sem upload e sem cadastro — os arquivos ficam no seu dispositivo.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-para-imagem",
    title: "PDF para imagem — exporte páginas em PNG ou JPG",
    description:
      "Transforme qualquer PDF em imagens PNG ou JPG, página por página, no seu navegador. Grátis, sem upload e sem conta — tudo roda no seu dispositivo.",
  },
  {
    id: "rotate-pdf",
    slug: "girar-pdf",
    title: "Girar PDF — corrija a orientação das páginas no navegador",
    description:
      "Gire todas as páginas de um PDF, ou só algumas, em 90°, 180° ou 270° direto no navegador. Grátis e privado — os arquivos nunca saem do seu dispositivo.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "adicionar-marca-dagua-pdf",
    title: "Marca d'água em PDF — grátis, privada e no navegador",
    description:
      "Coloque uma marca d'água de texto em todas as páginas de um PDF direto no navegador. Grátis, sem upload e sem cadastro — os arquivos ficam no seu dispositivo.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-para-word",
    title: "PDF para Word — converta em DOCX editável no navegador",
    description:
      "Extraia o texto de um PDF para um documento Word (.docx) editável direto no navegador. Grátis e sem upload — uma conversão de texto honesta, sem promessa falsa de layout.",
  },
  {
    id: "word-to-pdf",
    slug: "word-para-pdf",
    title: "Word para PDF — converta DOCX ou TXT no navegador",
    description:
      "Transforme um arquivo .docx ou .txt do Word em um PDF limpo direto no navegador. Grátis, sem cadastro e sem upload — o documento não sai do seu dispositivo.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "organizar-paginas-pdf",
    title: "Organizar páginas de PDF — reordene tudo no navegador",
    description:
      "Veja a prévia de cada página, reorganize o PDF com controles simples e baixe o arquivo na ordem certa. Grátis, sem cadastro e sem upload.",
  },
  {
    id: "extract-pdf-pages",
    slug: "extrair-paginas-pdf",
    title: "Extrair páginas de PDF — salve só as páginas escolhidas",
    description:
      "Escolha páginas ou intervalos específicos e baixe um novo PDF apenas com elas, direto no navegador. Grátis, sem cadastro e sem upload.",
  },

  // Comparisons
  {
    id: "compare/pdf-vs-docx",
    slug: "comparacoes/pdf-ou-docx",
    title: "PDF ou DOCX — comparação item por item",
    description:
      "Compare PDF e DOCX em edição, fidelidade visual, assinatura, segurança e compartilhamento. Escolha o formato certo para cada situação.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "comparacoes/pdf-ou-jpg",
    title: "PDF ou JPG — quando usar cada formato",
    description:
      "PDF ou JPG: quando digitalizar e quando fotografar. Compare qualidade, tamanho de arquivo, OCR e adequação ao fluxo de documentos.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "comparacoes/app-de-pdf-ou-ferramentas-online",
    title: "App de PDF ou ferramentas online — qual compensa mais?",
    description:
      "Apps de PDF nativos e ferramentas de navegador comparados em velocidade, privacidade e acesso sem internet.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "casos-de-uso/freelancers",
    title: "PDF Editor para freelancers — propostas e documentos assinados",
    description:
      "Fluxos de trabalho que freelancers adoram: propostas, contratos assinados e cobranças, tudo pelo celular.",
  },
  {
    id: "use-cases/remote-work",
    slug: "casos-de-uso/trabalho-remoto",
    title: "PDF Editor para trabalho remoto — documentos em qualquer lugar",
    description:
      "Trabalhe com documentos de onde estiver: digitalize, assine e compartilhe PDFs de qualquer dispositivo, em qualquer lugar.",
  },

  // Legal & meta
  // Guides — 144 entries, kept in their own file for reviewability.
  ...PT_BR_GUIDE_ROUTES,

  {
    id: "privacy-policy",
    slug: "politica-de-privacidade",
    title: "Política de Privacidade",
    description:
      "Como o pdfeditconvert.top e a hrhelperg s.r.o. tratam os seus dados.",
  },
  {
    id: "terms",
    slug: "termos-de-uso",
    title: "Termos de Uso",
    description: "Termos que regem o uso do pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "contato",
    title: "Contato — PDF Editor da hrhelperg s.r.o.",
    description:
      "Fale com o time por trás do PDF Editor. E-mail: info@hrhelperg.com.",
  },
];
