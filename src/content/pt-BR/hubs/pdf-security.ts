import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Segurança de PDF",
    h1: "Proteja PDFs sigilosos do jeito certo.",
    highlight: "do jeito certo",
    lead: "Senhas, criptografia AES-256, tarjas de ocultação e restrições de uso — em contratos, folhas de pagamento e cópias de documentos. O nível de proteção que documentos sensíveis realmente merecem.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que a maioria dos PDFs “protegidos” não está protegida",
    paragraphs: [
      "É surpreendentemente comum as pessoas compartilharem cópias de passaporte, contratos assinados e holerites como PDFs abertos — por e-mail, por app de mensagem ou como anexo de formulário. Se a conta de e-mail ou o histórico de conversas for comprometido, todos esses documentos ficam expostos.",
      "Muita gente adiciona uma “proteção” que é só uma senha de abertura colocada por um site grátis. É melhor que nada, mas a senha costuma ser fraca, a criptografia às vezes é a antiga de 40 bits, e o site guarda o seu arquivo tempo suficiente para virar um risco por conta própria.",
      "Segurança real em PDF significa criptografia forte (AES-256), senhas fortes e, quando faz sentido, separar as permissões de edição e impressão do acesso de leitura. E também significa fazer isso no próprio aparelho: no instante em que você sobe um documento sigiloso para um site, a batalha da privacidade já está perdida.",
    ],
  },
  features: {
    heading: "Ferramentas de segurança à altura do risco",
    items: [
      {
        icon: "Lock",
        title: "Proteção por senha",
        body: "Defina uma senha para abrir o documento. Sem ela, o PDF não pode ser visualizado.",
      },
      {
        icon: "ShieldCheck",
        title: "Criptografia AES-256",
        body: "Criptografia moderna e forte, o padrão usado por sistemas corporativos.",
      },
      {
        icon: "Printer",
        title: "Restringir cópia e impressão",
        body: "Permita a leitura, mas bloqueie a cópia do texto, a impressão ou a extração de páginas.",
      },
      {
        icon: "EyeOff",
        title: "Ocultação permanente",
        body: "Apague de vez nomes, números de conta ou assinaturas antes de compartilhar.",
      },
      {
        icon: "Stamp",
        title: "Marcas d'água",
        body: "Coloque uma marca de “confidencial” ou com o nome do destinatário para desestimular o repasse.",
      },
      {
        icon: "Link",
        title: "Como enviar a senha",
        body: "Orientação embutida sobre enviar a senha por um canal diferente do documento.",
      },
    ],
  },
  steps: {
    heading: "Como proteger um PDF",
    items: [
      {
        title: "Abra o PDF",
        body: "Importe o documento para o PDF Editor pelo app Arquivos ou por qualquer serviço de nuvem.",
      },
      {
        title: "Toque em Proteger",
        body: "A opção fica no menu de ferramentas do documento. Escolha o nível de proteção que você precisa.",
      },
      {
        title: "Defina a senha",
        body: "Use uma senha forte — no mínimo 12 caracteres, misturando letras, números e símbolos.",
      },
      {
        title: "(Opcional) Escolha as restrições",
        body: "Libere ou bloqueie impressão, cópia e edição. Útil para documentos compartilhados apenas para leitura.",
      },
      {
        title: "Salve a cópia protegida",
        body: "Salve como um arquivo novo, para o original continuar acessível caso você esqueça a senha.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Protegendo documentos sensíveis na correria",
    body: "A maioria dos erros de segurança acontece na pressa. Proteger pelo celular permite trancar um contrato antes de enviá-lo do aeroporto, ou proteger um PDF de folha de pagamento antes de compartilhá-lo com um prestador — sem precisar achar um computador.",
  },
  faq: [
    {
      q: "Qual criptografia o app usa?",
      a: "AES-256, o padrão moderno. Evite as criptografias antigas de 40 bits e RC4 de 128 bits — elas são quebradas com facilidade.",
    },
    {
      q: "E se eu esquecer a senha?",
      a: "Não existe porta dos fundos. Criptografia forte significa que o documento não pode ser recuperado sem a senha. Guarde-a em um gerenciador de senhas.",
    },
    {
      q: "Como enviar a senha com segurança?",
      a: "Use um canal diferente do documento — mande a senha por mensagem se o PDF foi por e-mail, ou use o compartilhamento seguro de um gerenciador de senhas.",
    },
    {
      q: "A ocultação é permanente?",
      a: "É. Uma ocultação bem-feita remove o texto por baixo, não apenas o cobre visualmente. Nem copiar e colar do PDF revela o conteúdo original.",
    },
    {
      q: "Dá para colocar marca d'água e senha ao mesmo tempo?",
      a: "Dá. São recursos independentes e podem ser aplicados juntos.",
    },
  ],
  related: [
    {
      label: "Passo a passo: como proteger um PDF com senha",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Assinar PDFs antes de trancá-los", path: "/sign-pdf" },
    {
      label: "Fluxos de PDF para equipes",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Tranque PDFs sigilosos em segundos.",
    sub: "Grátis no iOS e no Android. A proteção roda no próprio aparelho.",
  },
};

export default content;
