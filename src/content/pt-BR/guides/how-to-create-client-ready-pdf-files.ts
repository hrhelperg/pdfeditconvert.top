import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Como criar PDFs prontos para o cliente (caprichados e com a sua marca)",
  description:
    "O que separa um PDF interno de um pronto para o cliente: capa, numeração de páginas, identidade visual, tamanho do arquivo e nome do arquivo. O acabamento rápido que faz o documento parecer pronto.",
  updated: "2026-05-29",
  intro: [
    "Existe diferença entre um PDF de trabalho e um pronto para o cliente, e essa diferença está quase toda nos detalhes pequenos. A versão interna tem uma capa provisória, nenhum número de página, 14 MB de tamanho e um nome tipo “final-final-v2.pdf”. A versão pronta para o cliente tem capa limpa, tipografia com identidade, páginas numeradas, 2 MB de tamanho e um nome que se lê como profissional. As duas comunicam a mesma informação; só uma parece terminada.",
    "Produzir a versão pronta para o cliente não exige um designer. É uma sequência curta de movimentos padrão — ajustar a origem, exportar com limpeza, dar acabamento no PDF, rotular direito, comprimir com bom senso e renomear de propósito. Feita em ordem, ela leva poucos minutos por documento.",
    "Este guia percorre essa sequência. Nenhum passo exige ferramenta cara; a maioria roda em uma aba do navegador, sem enviar nada sensível.",
  ],
  steps: [
    {
      title: "Comece com uma origem bem desenhada",
      body: "Se o documento de origem parece provisório, o PDF vai parecer também. Ajuste margens, escolha de fontes e hierarquia de títulos no Word, no Pages ou no Docs antes de exportar. O PDF não acrescenta um acabamento que não existe na origem.",
    },
    {
      title: "Adicione uma capa que nomeie a entrega",
      body: "Nome do cliente, nome do projeto, título do documento, data e o nome da sua empresa. Uma página. Ela dá o contexto que o documento por dentro não precisa repetir em todo cabeçalho.",
    },
    {
      title: "Numere as páginas a partir da segunda",
      body: "O formato “X de Y” não deixa dúvida e confirma que está tudo ali — quem lê sabe que não falta nada. Pule a numeração na capa e comece na página 2.",
    },
    {
      title: "Aplique identidade visual consistente (tipografia, cor, logotipo)",
      body: "Um logotipo discreto e um sistema tipográfico consistente sinalizam cuidado. A identidade deve ser silenciosa, não barulhenta. Se o cliente tem manual de marca, espelhe-o.",
    },
    {
      title: "Reexporte com as fontes incorporadas",
      body: "Fontes incorporadas fazem o documento aparecer para o cliente exatamente como aparece para você. Reexporte da origem com “incorporar todas as fontes” ativado.",
    },
    {
      title: "Comprima, renomeie e confira antes de enviar",
      body: "Use a ferramenta Comprimir PDF pensando no limite típico de e-mail. Renomeie para NomeDoCliente_TipoDoDoc_AAAA-MM-DD.pdf. Abra a versão final uma vez e leia a primeira e a última página antes de enviar — erros de digitação aparecem nas releituras.",
    },
  ],
  tips: [
    "Evite fundos de banco de imagem e páginas de título com cara de print. Uma capa limpa, guiada pela tipografia, envelhece melhor que uma muito desenhada.",
    "Não coloque marca d'água de RASCUNHO na versão final. A ausência da marca é o indicador de que aquela é a final.",
    "Tabelas que atravessam páginas precisam repetir a linha de cabeçalho. No Word, “repetir linha de cabeçalho” é um clique que evita problemas de leitura na impressão.",
    "Gráficos exportados como vetor (PDF) continuam nítidos. Gráficos colados como imagem borram no zoom — resolva na origem.",
    "Se você reaproveita o mesmo modelo entre clientes, atualize os metadados a cada vez, para o título do documento não dizer “Proposta Acme” quando ele vai para a Beta.",
  ],
  mobileNote:
    "Clientes costumam abrir as entregas primeiro no celular. O app PDF Editor permite ver o PDF final no celular do mesmo jeito que o cliente verá, então uma capa que fica bonita em um monitor de 27 polegadas e apertada no celular é pega antes da entrega.",
  faq: [
    {
      q: "Qual é o maior sinal de que um PDF não está pronto para o cliente?",
      a: "Um nome de arquivo não editado. “final_v3_revisado.pdf” diz ao cliente que aquilo é um entre muitos. Um nome com cliente e data sinaliza um artefato terminado.",
    },
    {
      q: "Preciso de logotipo em todas as páginas?",
      a: "Não. Um logotipo na capa e um sinal discreto no rodapé bastam. Logotipos grandes em toda página parecem apresentação de vendas, não documento.",
    },
    {
      q: "Devo incluir um sumário?",
      a: "Em qualquer coisa acima de dez páginas, sim. É uma cortesia pequena que faz o documento parecer pronto e ajuda quem lê a navegar.",
    },
    {
      q: "Qual formato de numeração é melhor?",
      a: "“X de Y”. O Y confirma que está completo. Só o X funciona em documentos curtos, mas perde esse sinal de integridade.",
    },
    {
      q: "Vale desenhar uma capa personalizada?",
      a: "Em entregas recorrentes, sim — um modelo com a sua marca se paga ao longo de muitos documentos. Em casos pontuais, uma capa tipográfica limpa basta.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Word para PDF — exportações limpas para distribuir", path: "/word-to-pdf" },
    { label: "Como compartilhar PDFs com clientes", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Como preparar um PDF para uso profissional", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
