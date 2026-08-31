import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "Como preparar um PDF para uso profissional (checklist de revisão)",
  description:
    "Antes de o PDF sair da empresa: corte rascunhos, confira a paginação, corrija a orientação, embuta as fontes e reduza o tamanho. Um checklist para documentos que representam o seu negócio.",
  updated: "2026-05-29",
  intro: [
    "Um PDF que sai da sua empresa é um pequeno embaixador. Ele carrega o seu nome, a sua identidade visual, as suas escolhas tipográficas e — muito mais vezes do que deveria — o nome de arquivo original, tipo “Documento sem título (4).pdf”, de quem começou o trabalho semana passada. A diferença entre um PDF amador e um profissional raramente é dramática, mas quase sempre é visível de bate-pronto.",
    "Preparar um PDF para uso profissional não é uma transformação única; é um checklist curto. Corte rascunhos, acerte a numeração de páginas, corrija a orientação, confirme que as fontes foram incorporadas, rotule direito, comprima com bom senso e escolha um nome de arquivo útil. Cada passo leva segundos, o conjunto leva um minuto, e o documento chega com cara de quem fez de propósito.",
    "Este guia percorre o checklist na ordem que pega mais problemas primeiro — do jeito que você faria em uma entrega real, numa terça-feira à tarde.",
  ],
  steps: [
    {
      title: "Descarte páginas de rascunho ou não usadas",
      body: "A ferramenta Extrair páginas do PDF mantém só as páginas que você realmente quer enviar. Capas que eram provisórias, páginas de agradecimento em branco, anexos antigos — nada disso deveria estar na versão final.",
    },
    {
      title: "Confira a ordem e a numeração",
      body: "Use a ferramenta Organizar páginas do PDF se algo saiu de sequência depois de uma junção ou revisão. Verifique se os números visíveis batem com a ordem — leitores percebem numeração descasada rapidinho.",
    },
    {
      title: "Corrija a orientação",
      body: "Páginas largas (planilhas, gráficos) devem ficar deitadas; o resto, em pé. A ferramenta Girar PDF endireita digitalizações ou importações que vieram de lado. Um documento com orientação misturada parece quebrado mesmo quando não está.",
    },
    {
      title: "Garanta que as fontes foram incorporadas",
      body: "Fontes não incorporadas são substituídas do lado de quem lê, às vezes mal. Reexporte da origem com “incorporar todas as fontes” ativado, ou imprima em PDF para achatar a renderização.",
    },
    {
      title: "Defina o título do arquivo nos metadados",
      body: "O texto exibido nas abas do navegador e na barra de título dos leitores muitas vezes é diferente do nome do arquivo. Defina os dois de propósito — clientes notam quando a aba de uma “Proposta” diz “Sem título.docx”.",
    },
    {
      title: "Comprima e nomeie para a entrega",
      body: "A ferramenta Comprimir PDF leva o arquivo abaixo dos limites típicos de e-mail e de portal. Renomeie para NomeDoCliente_TipoDoDoc_AAAA-MM-DD.pdf, para quem recebe identificar o arquivo na pasta de downloads um ano depois.",
    },
  ],
  tips: [
    "Passe o olho pelo documento inteiro em 100% de zoom antes de enviar. O olho pega surpresas que a rolagem rápida deixa passar.",
    "Coloque marca d'água nos rascunhos, mas nunca nas versões finais — a ausência da marca é o sinal de que aquela é a final.",
    "Limpe os metadados antigos. Tanto o PDF Editor quanto uma reexportação permitem substituir autor, empresa e histórico de edição que podem vazar dos rascunhos.",
    "Se o documento tem campos de formulário para preencher, teste-os no tipo de aparelho para o qual você vai enviar. Muitos campos funcionam no Acrobat e não no navegador.",
    "Faça uma visualização de impressão por último. Se ele imprime errado, quem recebe vai bater no mesmo problema.",
  ],
  mobileNote:
    "O acabamento de última hora — endireitar uma digitalização deitada, tirar uma página de rascunho perdida, recomprimir por causa de um limite de e-mail — acontece no celular com mais frequência do que as pessoas admitem. O app PDF Editor cuida de tudo isso offline, então a entrega sai limpa até no wi-fi de uma cafeteria.",
  faq: [
    {
      q: "Qual é a etapa mais pulada?",
      a: "Definir os metadados. O nome de arquivo e o título do documento que aparecem nas abas e nos cabeçalhos dos leitores costumam ser sobras da fase de rascunho. Ajuste os dois antes de enviar.",
    },
    {
      q: "O quanto a compressão importa?",
      a: "Muito quando quem recebe está em um portal rígido ou em uma conexão lenta. Menos em um compartilhamento interno casual. Comprima por padrão — quase nunca atrapalha.",
    },
    {
      q: "Preciso incorporar fontes em todo PDF?",
      a: "Em tudo que vai para cliente, sim. Em rascunhos internos, em que todo mundo tem as mesmas fontes instaladas, é menos crítico. O custo de incorporar é pequeno.",
    },
    {
      q: "Devo sempre numerar as páginas?",
      a: "Em entregas de várias páginas, sim. Em documentos de uma página, não. A numeração ajuda quem lê a navegar e a confirmar que recebeu tudo.",
    },
    {
      q: "Existe uma ferramenta que faz tudo isso de uma vez?",
      a: "Não, e isso é proposital — cada etapa é uma decisão consciente, não uma transformação automática. As ferramentas de navegador deste site permitem fazer cada passo em segundos, sem empacotá-los em uma caixa-preta.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Extrair páginas do PDF — apare a entrega final", path: "/extract-pdf-pages" },
    { label: "Como compartilhar PDFs com clientes", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Como preparar um PDF antes de compartilhar", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
