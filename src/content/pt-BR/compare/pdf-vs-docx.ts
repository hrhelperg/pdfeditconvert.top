import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF ou DOCX — comparação item por item",
  description:
    "Compare PDF e DOCX em edição, fidelidade visual, assinatura, segurança e compartilhamento. Escolha o formato certo para cada situação.",
  intro: [
    "PDF e DOCX são os dois formatos em que a maioria dos documentos acaba parando. Cada um tem uma função — e escolher o certo para cada tarefa evita boa parte das dores de cabeça com formatação e compartilhamento que as pessoas associam a documentos em geral.",
    "Esta comparação é prática, não acadêmica. Cada linha reflete como os dois formatos se comportam no dia a dia, e não como estão especificados em documentos de padronização. O foco está no que você percebe já no primeiro mês usando qualquer um dos dois com frequência.",
    "Resumo: o PDF ganha quando o documento está pronto, precisa ficar idêntico para quem lê ou traz uma assinatura. O DOCX ganha quando o documento ainda é um rascunho, várias pessoas estão revisando ou você vai reaproveitar o conteúdo em outro lugar. A maior parte dos documentos passa pelos dois formatos em momentos diferentes da vida.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Layout idêntico em qualquer tela", left: "sim", right: "não" },
    { feature: "Edição de texto fácil", left: "Limitada", right: "sim" },
    { feature: "Visualização universal", left: "sim", right: "não" },
    { feature: "Controle de alterações e comentários", left: "Limitado", right: "sim" },
    { feature: "Proteção por senha (AES-256)", left: "sim", right: "sim" },
    { feature: "Abre igual daqui a 10 anos", left: "sim", right: "não" },
    { feature: "Leitura no celular sem app extra", left: "sim", right: "não" },
    { feature: "Campos de formulário", left: "sim", right: "Limitado" },
    { feature: "Suporte nativo a assinatura", left: "sim", right: "Complemento" },
  ],
  whenLeft: [
    "O documento está finalizado e não deve ser editado",
    "Ele precisa aparecer igual em todos os aparelhos",
    "Quem recebe pode não ter o Microsoft Word",
    "O documento vai ficar arquivado por anos",
    "Você precisa de um formato pronto para imprimir e assinar",
  ],
  whenRight: [
    "O documento ainda está sendo escrito",
    "Várias pessoas estão revisando ou escrevendo juntas",
    "Controle de alterações e comentários são importantes",
    "Você vai reaproveitar ou reestilizar o conteúdo",
    "O documento vai virar um modelo",
  ],
  faq: [
    {
      q: "Dá para converter entre PDF e DOCX?",
      a: "Dá. Boas ferramentas de PDF convertem nos dois sentidos com alta fidelidade em documentos baseados em texto.",
    },
    {
      q: "Qual formato é mais seguro?",
      a: "Os dois aceitam criptografia AES-256. O formato em si não determina a segurança — quem determina é a senha e a forma como você a compartilha.",
    },
    {
      q: "As minhas fontes sobrevivem à conversão?",
      a: "Na maior parte, sim. Se uma fonte não estiver disponível no aparelho de destino, uma parecida é usada no lugar. Prefira fontes comuns (Calibri, Inter, Helvetica) para reduzir as substituições.",
    },
  ],
  related: [
    { label: "Guia: PDF ou DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Conversor de PDF", path: "/pdf-converter" },
    { label: "Editor de PDF", path: "/pdf-editor" },
  ],
};

export default content;
