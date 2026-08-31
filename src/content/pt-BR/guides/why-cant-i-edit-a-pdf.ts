import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Por que não consigo editar um PDF? Os motivos reais e o que ajuda",
  description:
    "O PDF foi feito para resistir à edição, mas alguns fatores específicos — digitalização, travas de segurança, limites do leitor — deixam certos arquivos ainda mais difíceis. O que trava o seu e o que realmente funciona.",
  updated: "2026-05-29",
  intro: [
    "O PDF foi projetado para aparecer igual em todo lugar, e é justamente por isso que editá-lo parece mais difícil que editar um documento do Word. O formato trata o texto mais como uma página impressa do que como uma sequência de caracteres — ótimo quando você quer compartilhar com fidelidade absoluta, frustrante quando você precisa mudar um nome em um contrato.",
    "Mas nem todo PDF é igualmente travado. Há quatro motivos comuns para você não conseguir editar um: ele é a imagem digitalizada de um documento, sem texto real por baixo; o arquivo tem uma trava de segurança que bloqueia edições; o seu leitor é somente leitura por natureza; ou o original foi exportado de um jeito que fragmentou o texto em formas. Cada caso tem um caminho diferente.",
    "Este guia percorre cada causa em linguagem simples, com a ferramenta certa para cada uma. Nenhuma exige software caro, e a maior parte das soluções funciona em uma aba do navegador.",
  ],
  steps: [
    {
      title: "Confirme se o PDF tem texto real ou imagens digitalizadas",
      body: "Tente selecionar o texto com o cursor ou o dedo. Se a seleção funcionar, o PDF tem texto real e a edição é possível. Se você não conseguir selecionar nada, é uma digitalização — imagens de texto, e não texto.",
    },
    {
      title: "Verifique se há trava de edição",
      body: "PDFs podem carregar permissões que liberam a leitura, mas bloqueiam edição, impressão ou cópia. A maioria dos leitores mostra um cadeado ou um aviso de “protegido” quando isso está ativo. O autor pode retirar a restrição; quem recebe não consegue contorná-la com segurança.",
    },
    {
      title: "Use um editor de PDF de verdade para editar de fato",
      body: "Navegadores e leitores simples não editam texto — eles só exibem. O app PDF Editor faz edições estruturais em texto, imagens e páginas sem sair do formato PDF, o que preserva o layout.",
    },
    {
      title: "Converta em Word quando precisar reescrever muito",
      body: "Se você precisa reescrever parágrafos, e não ajustar palavras, o PDF para Word leva o texto para um editor de verdade. Você perde o layout rígido, mas ganha edição de fluxo — melhor para documentos que serão republicados de qualquer forma.",
    },
    {
      title: "Em PDFs digitalizados, conte com os limites do OCR",
      body: "Editar uma digitalização significa converter imagens em texto antes (OCR). Algumas ferramentas fazem isso online, outras não, e a qualidade varia muito com a resolução da digitalização. Trate o resultado do OCR como ponto de partida, não como edição pronta.",
    },
    {
      title: "Mudanças de página não exigem “edição”",
      body: "Se você só precisa excluir, reorganizar, girar ou acrescentar páginas, não precisa de editor de texto — as ferramentas Extrair, Organizar e Girar PDF fazem alterações estruturais sem destravar a camada de texto.",
    },
  ],
  tips: [
    "Se você só precisa adicionar uma assinatura ou preencher um formulário, o arquivo provavelmente não precisa de “edição” — assinar e preencher deixam o texto original intacto.",
    "Alguns PDFs exportam cada caractere como uma forma minúscula em vez de texto. A seleção parece funcionar, mas copiar e colar produz lixo. É o pior cenário para edição; o documento de origem é o único caminho realista de volta.",
    "Não confie em sites quebra-senhas que prometem remover restrições de edição. Eles são ineficazes, maliciosos, ou os dois.",
    "Se você é o autor e quer liberar a edição de um arquivo que já enviou, o caminho mais limpo é reexportá-lo sem a restrição.",
    "Para edições repetidas no mesmo documento, edite a origem (Word, Pages, ferramenta de design) e exporte de novo, em vez de remendar o PDF toda vez.",
  ],
  mobileNote:
    "No celular, a maioria dos leitores nativos é somente leitura de propósito. O app PDF Editor edita texto, troca imagens e reorganiza páginas no iOS e no Android sem achatar o arquivo, então uma correção rápida não precisa esperar você voltar ao notebook.",
  faq: [
    {
      q: "Por que eu vejo o texto, mas não consigo clicar nele?",
      a: "Ou o PDF é uma digitalização (imagem de texto, sem caracteres por baixo), ou o seu leitor é somente leitura. Um editor de PDF de verdade — como o app PDF Editor — deixa você clicar em um texto editável.",
    },
    {
      q: "Existe algum jeito de remover restrições de edição?",
      a: "Só o autor original consegue retirar as restrições de permissão de forma limpa. Ferramentas que prometem removê-las ou não funcionam ou comprometem o arquivo. Peça a quem enviou uma cópia sem restrição.",
    },
    {
      q: "O que é OCR e quando eu preciso dele?",
      a: "OCR é o processo de transformar imagens de texto em texto de verdade — necessário para editar um PDF digitalizado. A qualidade depende da digitalização; capturas limpas e em alta resolução dão resultados muito melhores que fotos borradas de celular.",
    },
    {
      q: "Devo converter em Word para editar?",
      a: "Só se precisar de mudanças pesadas de texto. A conversão perde fidelidade de layout. Para ajustes pequenos, um editor de PDF de verdade preserva mais.",
    },
    {
      q: "Dá para editar páginas sem tocar no texto?",
      a: "Dá. Reordenar, girar, extrair e remover páginas são edições estruturais e não exigem editor de texto. As ferramentas deste site fazem isso sem enviar nada.",
    },
  ],
  related: [
    { label: "Editor de PDF — edite texto e imagens no celular", path: "/pdf-editor" },
    { label: "PDF para Word — converta para edição pesada", path: "/pdf-to-word" },
    { label: "Como editar um PDF no iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Como editar um PDF no Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
