import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Ferramentas de PDF online guardam seus arquivos? O que conferir",
  description:
    "Algumas ferramentas de PDF online apagam o envio na hora, outras guardam por horas e outras mantêm por tempo indeterminado. Como ler uma política de privacidade rápido e o que procurar.",
  updated: "2026-05-29",
  intro: [
    "Quando uma ferramenta gratuita de PDF pede que você suba o seu arquivo, uma pergunta honesta é: o que acontece com esse arquivo depois? A resposta varia muito. Algumas ferramentas apagam o envio assim que a conversão termina. Algumas o guardam por uma hora “para a sua comodidade”. Algumas retêm por mais tempo, com linguagem vaga sobre “melhoria do serviço”. Algumas o usam para treinar modelos dos quais você nem sabe.",
    "A política de privacidade responde, mas ela costuma ser longa, muitas vezes vaga e às vezes desatualizada. Uma leitura direcionada leva um minuto e diz o que você precisa saber. E, em arquivos sensíveis o bastante para que a guarda importe, a decisão mais segura é escolher uma ferramenta que simplesmente não faz upload.",
    "Este guia percorre essa leitura rápida da política, explica os padrões a procurar e aponta a alternativa mais segura quando o próprio upload é o problema.",
  ],
  steps: [
    {
      title: "Ache a política e pule direto para a retenção",
      body: "A política de privacidade costuma estar no rodapé. Busque na página (Ctrl-F) por “reter”, “apagar”, “armazenar” e “armazenamento”. Essas palavras levam direto à seção de retenção.",
    },
    {
      title: "Leia os números concretos de retenção",
      body: "“Os arquivos são apagados em até uma hora” é concreto e tranquilizador. “Apagamos os arquivos quando não são mais necessários” é vago e pode significar qualquer coisa. Compromissos com números importam; intenções não.",
    },
    {
      title: "Veja o que é guardado além do arquivo",
      body: "Metadados (nome do arquivo, tamanho, tipo, endereço IP) costumam ser retidos por mais tempo que o conteúdo. Na maioria dos casos, a retenção de metadados é aceitável; em trabalho altamente sensível, até ela é um alerta.",
    },
    {
      title: "Procure cláusulas de dados para treinamento",
      body: "Algumas ferramentas gratuitas se autorizam a usar os arquivos enviados para melhorar o serviço ou treinar modelos. Busque por “melhorar”, “treinar” e “análise”. Se encontrar, trate como alerta forte em conteúdo sensível.",
    },
    {
      title: "Confira a seção de compartilhamento com terceiros",
      body: "Mesmo que a ferramenta não guarde o seu arquivo, ela pode compartilhá-lo com provedores de hospedagem, suboperadores ou fornecedores de análise. Cada um é mais uma parte com acesso. Busque por “prestadores de serviço”, “suboperadores” e “terceiros”.",
    },
    {
      title: "Prefira processamento local em qualquer coisa sensível",
      body: "Se a ferramenta roda no seu navegador sem fazer upload (verifique pelas ferramentas de desenvolvedor), a retenção deixa de ser questão — não há o que reter. Use esse caminho quando a guarda do arquivo importa.",
    },
  ],
  tips: [
    "Gratuita + retenção vaga + terceiros indefinidos = evite em arquivos sensíveis. A combinação é a de maior risco.",
    "Mesmo uma política de retenção limpa não é garantia. Invasões de servidor acontecem. A única opção de risco zero é não subir.",
    "Trate arquivos enviados como comprometidos para qualquer finalidade que você não consiga auditar. Se você não publicaria o arquivo abertamente, pense duas vezes antes de subir.",
    "Se você precisar mesmo subir, proteja o arquivo com senha antes. A ferramenta vê um bloco criptografado; a criptografia protege o conteúdo.",
    "Não confie em promessas de “não armazenamos” sem verificar — a linguagem da política e o comportamento real podem divergir.",
  ],
  mobileNote:
    "Aplicativos de celular costumam ter políticas de privacidade separadas, na loja de apps ou nos ajustes. O app PDF Editor processa localmente e não sobe os seus arquivos, então a retenção nem se aplica. Para trabalho sensível no celular, só local é o padrão mais limpo.",
  faq: [
    {
      q: "Por quanto tempo a maioria das ferramentas online guarda os arquivos?",
      a: "Varia muito: de minutos a tempo indeterminado. As ferramentas comerciais grandes costumam apagar em uma hora; as menores e gratuitas são inconsistentes. Leia cada política individualmente.",
    },
    {
      q: "Retenção curta é segura o bastante?",
      a: "Depende do arquivo. Em documentos comuns, uma hora está de bom tamanho. Em material realmente sensível, qualquer retenção é uma janela de risco real.",
    },
    {
      q: "E os arquivos apagados — eles somem mesmo?",
      a: "Normalmente sim, do armazenamento ativo, mas backups e réplicas podem manter cópias por mais tempo. Exclusão realmente segura é tecnicamente mais difícil do que parece.",
    },
    {
      q: "Ferramentas gratuitas sempre retêm mais que as pagas?",
      a: "É tendência, não regra. Algumas gratuitas têm retenção limpa; algumas pagas têm cláusulas surpreendentes. Leia as duas.",
    },
    {
      q: "Qual é o caminho mais seguro para um PDF sensível?",
      a: "Ferramentas de navegador que processam localmente (sem upload). Se você precisar subir, proteja com senha antes e escolha uma ferramenta com compromisso explícito de exclusão.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Ferramentas de PDF online são seguras?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Ferramentas de PDF no navegador ou com upload", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Como evitar enviar documentos sigilosos", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
