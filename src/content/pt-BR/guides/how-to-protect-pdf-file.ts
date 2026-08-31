import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Como proteger um arquivo PDF com senha",
  description:
    "Adicione senha e criptografia a um PDF no celular ou no computador. Guia prático com o app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Muitos documentos não deveriam circular como PDFs abertos: holerites, contratos assinados, cópias de documentos pessoais, acordos de confidencialidade, exames médicos, extratos financeiros. Uma senha com criptografia adequada transforma o arquivo em algo que só o destinatário pretendido consegue abrir — mesmo que o e-mail seja repassado, interceptado ou fique para sempre em uma caixa corporativa.",
    "Este guia mostra como colocar senha em um PDF com o app PDF Editor no iPhone ou no Android. Ele também cobre o que evitar: senhas fracas, criptografias antigas e o erro comum de mandar a senha pelo mesmo canal do documento.",
    "No final, você terá um fluxo de proteção repetível, aplicável a documentos sensíveis em menos de um minuto, com criptografia AES-256 forte, aceita por políticas de segurança corporativas.",
  ],
  steps: [
    {
      title: "Abra o PDF que quer proteger",
      body: "Importe o documento para o PDF Editor pelo app Arquivos, iCloud Drive, Google Drive ou qualquer app de compartilhamento. O fluxo inteiro roda localmente — o arquivo nunca sai do aparelho.",
    },
    {
      title: "Toque em Proteger no menu de ferramentas",
      body: "A opção fica nas ferramentas do documento. Escolha “Proteger com senha” para exigir senha na abertura, ou “Restringir permissões” para acesso somente de leitura.",
    },
    {
      title: "Escolha uma senha forte",
      body: "No mínimo 12 caracteres, misturando letras, números e símbolos. Evite palavras comuns e dados pessoais (aniversários, nomes). Gere uma no seu gerenciador de senhas, se você usa um — é a atitude certa.",
    },
    {
      title: "Confirme a senha",
      body: "Digite de novo para evitar erros. Depois que o arquivo é criptografado, não há recuperação se você tiver digitado errado.",
    },
    {
      title: "Escolha as restrições (opcional)",
      body: "Permita a leitura, mas bloqueie a impressão, a cópia de texto ou a extração de páginas. Útil quando a pessoa precisa ler o documento, mas você não quer que ela redistribua trechos dele.",
    },
    {
      title: "Salve como um arquivo novo",
      body: "Guarde a versão original sem proteção em um lugar seguro — se um dia você esquecer a senha, ainda terá acesso. Salve a cópia protegida com um nome claramente diferente.",
    },
    {
      title: "Envie a senha por outro canal",
      body: "Mande o PDF criptografado por e-mail; mande a senha por mensagem ou ligue. Nunca coloque os dois no mesmo e-mail — se a conta for comprometida, os dois vazam juntos. É um hábito pequeno que evita a maioria dos incidentes reais.",
    },
  ],
  tips: [
    "AES-256 é a criptografia certa — o app a usa por padrão. Se uma ferramenta oferecer criptografia “compatível” ou “legada”, essas costumam ser quebradas; evite.",
    "Não reutilize a mesma senha em vários documentos. Se uma vazar, você não quer um efeito dominó.",
    "Se quem recebe não é técnico, dê instruções simples: “Você vai precisar desta senha para abrir o arquivo: XYZ” já basta.",
    "Use um gerenciador de senhas para enviar a senha com segurança sempre que possível — a maioria tem um recurso de compartilhamento que não exige conta dos dois lados.",
    "Para arquivos muito sensíveis (jurídicos, médicos, financeiros), prefira os links de compartilhamento seguro de um gerenciador de senhas a mandar a senha por mensagem.",
  ],
  mobileNote:
    "Proteger um PDF roda inteiramente no aparelho. Mesmo em modo avião, dá para trancar um contrato antes de enviá-lo assim que você se reconectar. Isso conta para quem viaja e lida com documentos sensíveis do saguão de um hotel ou do aeroporto — a proteção acontece localmente e a conexão só é necessária no envio.",
  faq: [
    {
      q: "E se eu esquecer a senha?",
      a: "Não existe porta dos fundos. Criptografia forte significa que não há recuperação sem a senha. Guarde sempre as senhas em um gerenciador, não na memória.",
    },
    {
      q: "A senha deixa a abertura do arquivo mais lenta?",
      a: "Não há atraso perceptível. A descriptografia acontece uma vez, na abertura, e leva milissegundos mesmo em aparelhos antigos.",
    },
    {
      q: "Dá para remover a senha depois?",
      a: "Dá, se você tiver a senha. Abra o PDF protegido, digite a senha e use “Remover proteção” no menu Proteger.",
    },
    {
      q: "A senha protege de verdade ou é só teatro de segurança?",
      a: "Protege de verdade. AES-256 com uma senha forte é a mesma criptografia usada por sistemas corporativos, gerenciadores de senha e muitos aplicativos de banco. O elo fraco é sempre a senha em si — escolha uma forte.",
    },
    {
      q: "E a ocultação de trechos?",
      a: "Ocultar é diferente de proteger com senha. A ocultação remove o conteúdo de forma permanente (como apagar um nome); a senha mantém o conteúdo, mas exige autenticação para vê-lo. Em documentos sensíveis, você pode querer os dois — oculte o que não deveria estar no arquivo e proteja com senha o que sobrar.",
    },
  ],
  related: [
    { label: "Segurança de PDF — visão geral", path: "/pdf-security" },
    { label: "Assinar PDFs antes de trancá-los", path: "/sign-pdf" },
    { label: "Fluxos de PDF para empresas", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Segurança de PDF", path: "/pdf-security" },
};

export default content;
