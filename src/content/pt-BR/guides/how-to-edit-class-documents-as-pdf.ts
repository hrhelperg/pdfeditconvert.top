import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Como editar documentos de aula em PDF (anotar, grifar, assinar)",
  description:
    "Apostilas, listas de exercícios e autorizações chegam em PDF. Como marcar, preencher e devolver sem imprimir — pelo celular ou pelo notebook.",
  updated: "2026-05-29",
  intro: [
    "Documentos de aula chegam hoje em PDF mais do que em qualquer outro formato. Apostilas para anotar, listas de exercícios para preencher, autorizações para assinar e devolver, planos de ensino para conferir. A tentação é imprimir tudo, preencher à mão e digitalizar de volta. Funciona, mas é lento e gera um resultado pior do que simplesmente editar o PDF direto.",
    "A edição de PDF atual dá conta bem dos quatro casos: grifar e anotar para a leitura, preencher campos em listas e formulários, assinar autorizações e fazer edições estruturais quando é preciso acrescentar uma página. Quase tudo isso pode ser feito em uma aba do navegador ou em um app de celular, sem pagar por software.",
    "Este guia percorre cada caso — qual é a ferramenta certa, o que ela faz e o que não faz, e como devolver uma cópia preenchida e limpa. Ele presume que você não quer imprimir nada se não for obrigatório.",
  ],
  steps: [
    {
      title: "Para ler e anotar: grife e comente",
      body: "A maioria dos leitores de PDF (e o app PDF Editor) aceita grifos, sublinhados e comentários adesivos. Use isso para leitura ativa; as anotações ficam no arquivo e sobrevivem ao compartilhamento.",
    },
    {
      title: "Em campos de formulário de verdade: toque e digite",
      body: "PDFs feitos como formulário têm campos interativos reais. Toque em cada um, digite e siga para o próximo. O resultado fica igual a um trabalho impresso e datilografado.",
    },
    {
      title: "Em PDFs planos (sem campos): acrescente caixas de texto",
      body: "Uma apostila digitalizada, sem campos reais, exige que você sobreponha caixas de texto nas lacunas. O app PDF Editor faz isso; o resultado fica mais arrumado que respostas à mão em uma impressão.",
    },
    {
      title: "Para assinaturas: use a ferramenta Assinar PDF",
      body: "A ferramenta Assinar PDF permite desenhar ou digitar uma assinatura direto no formulário. Em autorizações e termos de consentimento, a assinatura desenhada é a escolha certa.",
    },
    {
      title: "Para acrescentar páginas: junte",
      body: "Se a sua resposta é mais longa que as lacunas da apostila, a ferramenta Juntar PDF permite acrescentar páginas extras. Mantenha a ordem certa; as páginas originais continuam intactas.",
    },
    {
      title: "Salve como arquivo novo, não por cima do original",
      body: "Salve a versão preenchida com um nome novo (Apostila3_Preenchida_Sobrenome.pdf). O original em branco fica limpo, caso você precise refazer ou compartilhar com um colega.",
    },
  ],
  tips: [
    "Teste o PDF antes para ver se ele tem campos de formulário de verdade. Se tocar em uma linha em branco abre um cursor, é formulário real. Se nada acontece, você vai precisar sobrepor caixas de texto.",
    "Use um tamanho de texto consistente nas respostas — de preferência igual ao corpo do documento, se der para identificar.",
    "Não imprima para preencher, a não ser que seja absolutamente necessário. A versão digitalizada de volta é sempre menos legível que o preenchimento digital.",
    "Salve antes de assinar. A assinatura costuma achatar partes do arquivo; a versão anterior a ela é a cópia editável.",
    "Confirme os formulários preenchidos exportando em PDF depois — algumas ferramentas guardam o estado do preenchimento à parte, e o PDF exportado é o que trava as suas respostas.",
  ],
  mobileNote:
    "Muitos documentos de aula chegam no celular e precisam voltar pelo mesmo caminho. O app PDF Editor cuida de anotação, preenchimento, assinatura e junção no iOS e no Android, então uma apostila não precisa esperar a hora do notebook para voltar preenchida.",
  faq: [
    {
      q: "Dá para editar um PDF no navegador?",
      a: "Em casos limitados, sim — preencher formulários e anotar funciona em muitos navegadores. Para edições de texto e mudanças estruturais, um editor de verdade (de navegador ou app) faz mais.",
    },
    {
      q: "Por que a minha apostila não tem campos de formulário reais?",
      a: "Ou o professor exportou sem ativá-los, ou o arquivo é uma digitalização. Use a sobreposição de caixas de texto sobre as linhas em branco.",
    },
    {
      q: "PDFs assinados são aceitos em formulários de aula?",
      a: "Cada vez mais, sim. Alguns documentos legais (autorizações específicas, em certos casos) ainda podem exigir tinta — confira as instruções do formulário.",
    },
    {
      q: "Devo sempre salvar como arquivo novo?",
      a: "Em trabalho de aula, sim. Manter o original em branco permite refazer ou compartilhar sem baixar de novo.",
    },
    {
      q: "Como acrescento uma página a um PDF que estou preenchendo?",
      a: "Escreva o conteúdo adicional como um PDF separado e use a ferramenta Juntar PDF para combinar. Coloque a página acrescentada onde ela faz sentido.",
    },
  ],
  related: [
    { label: "Editor de PDF — edite texto e imagens no celular", path: "/pdf-editor" },
    { label: "Assinar PDF — assinaturas eletrônicas", path: "/sign-pdf" },
    { label: "Como preencher formulários PDF pelo celular", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Como fazer anotações em um PDF pelo celular", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
