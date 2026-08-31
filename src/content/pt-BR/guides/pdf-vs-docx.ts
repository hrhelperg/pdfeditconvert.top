import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF ou DOCX — qual formato usar?",
  description:
    "Quando escolher PDF em vez de DOCX e vice-versa. Comparação clara de edição, fidelidade visual, assinatura e compartilhamento.",
  updated: "2026-05-11",
  intro: [
    "PDF e DOCX resolvem problemas diferentes. O PDF é um formato trancado e pronto para impressão, que aparece igual em qualquer aparelho. O DOCX é um formato de trabalho editável, que qualquer pessoa com Word, Google Docs ou outro pacote de escritório pode remodelar, reestilizar e reformatar.",
    "Escolher o formato certo para cada tarefa evita a maior parte das dores de cabeça que as pessoas associam aos dois. Mandar um contrato final em DOCX é convite para edição acidental. Mandar um rascunho em PDF torna a revisão desconfortável. A escolha não é estética — é sobre para que serve o documento.",
    "Este guia destrincha quando cada formato ganha, com exemplos concretos de contratos, rascunhos, cobranças, relatórios e os tipos de documento com que pequenos negócios e pessoas lidam toda semana.",
  ],
  steps: [
    {
      title: "Use PDF quando o documento está finalizado",
      body: "Contratos, acordos assinados, cobranças, materiais e relatórios que vão para clientes ou sócios. Tudo em que quem recebe deve ver exatamente o que você viu e não deveria conseguir editar sem que ninguém perceba.",
    },
    {
      title: "Use DOCX enquanto o documento está sendo escrito",
      body: "Rascunhos, documentos colaborativos, qualquer coisa em revisão, modelos que serão reaproveitados e ajustados. Comentários e controle de alterações só funcionam direito em DOCX — é a razão de ser do formato.",
    },
    {
      title: "Use PDF para arquivar",
      body: "O PDF foi projetado para guarda de longo prazo. O formato renderiza igual daqui a 10 anos. Arquivos DOCX podem quebrar sutilmente entre versões do Word e sistemas operacionais — tudo bem em documentos de trabalho, arriscado em arquivo morto.",
    },
    {
      title: "Use DOCX quando o conteúdo precisa ser extraído",
      body: "Levar o texto para outra ferramenta, reaproveitar um trecho em um post, reescrever em outro estilo — tudo mais fácil a partir do DOCX, em que o conteúdo já está estruturado e editável.",
    },
    {
      title: "Converta de um para o outro conforme a necessidade",
      body: "Boas ferramentas de PDF convertem nos dois sentidos com alta fidelidade em documentos de texto. O fluxo comum: edite em DOCX e exporte em PDF na hora de compartilhar; receba PDF e converta para DOCX se precisar reaproveitar o conteúdo.",
    },
    {
      title: "Use PDF ao receber de alguém que você não conhece",
      body: "Arquivos DOCX podem conter macros e objetos embutidos que representam risco de segurança. PDFs são mais seguros de abrir a partir de fontes desconhecidas, embora você ainda deva manter o seu leitor atualizado.",
    },
  ],
  tips: [
    "Nunca mande um rascunho de contrato em DOCX para alguém de fora, a menos que você esteja convidando alterações — a pessoa pode editar sem você saber, e você só percebe se comparar com atenção.",
    "Nunca mande uma cobrança final em DOCX — ela deve ser não editável. O PDF é a escolha certa, sempre.",
    "Se alguém pedir um “PDF editável”, quase sempre quer dizer DOCX. Pergunte antes de supor e depois converta.",
    "PDFs com assinatura devem continuar PDF. Converter de volta para DOCX apaga a assinatura.",
    "Para documentos com campos de formulário, o PDF costuma ser a melhor escolha — os campos de formulário do DOCX são desajeitados e inconsistentes entre editores.",
  ],
  mobileNote:
    "No celular, o DOCX exige Word, Google Docs ou outro app de escritório para ser visto direito. O PDF abre de forma nativa no iOS e no Android, com os visualizadores embutidos. Só isso já faz do PDF a escolha certa para a maioria dos documentos compartilhados — quem recebe não precisa instalar nada para ler.",
  faq: [
    {
      q: "Dá para editar um PDF direto, sem converter?",
      a: "Dá, com um editor de PDF de verdade. A edição em PDF é mais limitada que em DOCX — ela foi pensada para correções, assinaturas e pequenas mudanças, não para reescritas grandes. Para edição pesada, converter para DOCX antes costuma fazer mais sentido.",
    },
    {
      q: "Qual formato gera arquivos menores?",
      a: "Depende do conteúdo. Um DOCX cheio de texto costuma ser menor que o PDF equivalente. PDFs cheios de imagem podem ficar menores que o DOCX se bem comprimidos, porque a compressão de imagem do PDF é mais flexível.",
    },
    {
      q: "As minhas fontes sobrevivem à conversão?",
      a: "Na maior parte, sim. Se uma fonte não estiver disponível no aparelho de destino, uma parecida é usada automaticamente. Prefira fontes comuns (Inter, Helvetica, Calibri, Arial) para reduzir a substituição visível.",
    },
    {
      q: "PDF/A é diferente do PDF comum?",
      a: "É. O PDF/A é um subconjunto rígido, voltado a arquivamento, que incorpora todas as fontes e não permite dependências externas. É exigido por alguns arquivos públicos e jurídicos. O PDF padrão resolve quase todo o resto.",
    },
    {
      q: "Um DOCX pode conter assinatura?",
      a: "Ele pode conter a imagem de uma assinatura, mas ela não tem validade criptográfica. O PDF aceita assinaturas digitais de verdade, que vinculam a assinatura ao documento. Para qualquer coisa que precise ser assinada com valor jurídico, o formato certo é o PDF.",
    },
  ],
  related: [
    { label: "PDF ou DOCX — comparação completa", path: "/compare/pdf-vs-docx" },
    { label: "Conversor de PDF", path: "/pdf-converter" },
    { label: "Editor de PDF", path: "/pdf-editor" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
