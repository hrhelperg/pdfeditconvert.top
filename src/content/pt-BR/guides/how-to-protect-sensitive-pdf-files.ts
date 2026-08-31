import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Como proteger arquivos PDF sigilosos (guarda, envio, descarte)",
  description:
    "PDFs sigilosos precisam de proteção em três momentos: quando guardados, quando enviados e depois que o destinatário terminou. Um fluxo prático que cobre os três.",
  updated: "2026-05-29",
  intro: [
    "PDFs sigilosos — contratos, registros financeiros, documentos de identidade, laudos médicos — precisam de proteção em três momentos distintos da vida: enquanto estão no seu aparelho ou drive (guarda), enquanto viajam entre você e quem recebe (envio) e depois que a outra pessoa já usou (descarte). A maioria foca só no envio e ignora os outros dois.",
    "Um fluxo sensato cuida dos três. Guarda significa discos criptografados ou arquivos com senha em locais não confiáveis. Envio significa escolher um canal que não vaze, e não simplesmente subir para o primeiro site que aparece na busca. Descarte significa pensar no que acontece com o arquivo depois — tanto na sua guarda quanto na de quem recebeu.",
    "Este guia percorre os três. Nada aqui é nível corporativo; é a base realista para uma pessoa ou equipe pequena que lida com material sensível de vez em quando e não quer montar uma estrutura certificada para isso.",
  ],
  steps: [
    {
      title: "Guarda: mantenha PDFs sigilosos em armazenamento criptografado",
      body: "FileVault no macOS, BitLocker no Windows, criptografia de disco completa no Linux e nos celulares. Isso cobre o seu drive local. Em drives externos, use formatos criptografados. Os backups também devem ser criptografados — sincronize com serviços que suportem criptografia de conhecimento zero, ou criptografe o arquivo antes.",
    },
    {
      title: "Coloque senha nos PDFs sigilosos individuais",
      body: "A senha do PDF acrescenta uma segunda camada. O arquivo continua protegido mesmo se a criptografia de disco falhar ou se alguém obtiver uma cópia em trânsito. Use senhas fortes e únicas; envie-as por um canal diferente do arquivo.",
    },
    {
      title: "Envio: escolha o canal pela sensibilidade",
      body: "E-mail comum resolve em arquivos de baixa sensibilidade. Mensageiro com criptografia de ponta a ponta (Signal, e-mail seguro) para a média. Para alta sensibilidade, serviços pagos com compromissos explícitos de tratamento de dados. Evite subir PDFs sigilosos para “ferramentas” gratuitas de terceiros.",
    },
    {
      title: "Prepare o arquivo localmente antes de enviar",
      body: "Se você precisa comprimir, ocultar trechos ou reorganizar um PDF sigiloso antes de mandar, use ferramentas de navegador que processam localmente — o arquivo não passa pelo servidor de ninguém. Comprimir PDF, Extrair páginas do PDF e Organizar páginas do PDF rodam todas no seu aparelho.",
    },
    {
      title: "Descarte: pense em guarda e exclusão",
      body: "Guarde os PDFs sigilosos só pelo tempo necessário. Quem recebe também deveria. Considere pedir à pessoa que confirme a exclusão depois de usar o arquivo, principalmente em documentos de identidade de uso único.",
    },
    {
      title: "Limpe os metadados antes de enviar",
      body: "PDFs costumam carregar nomes de autor, nomes de arquivo originais e histórico de edição. Reexportar de uma origem limpa remove boa parte disso. O app PDF Editor e outras ferramentas também permitem apagar metadados explicitamente.",
    },
  ],
  tips: [
    "Não mande a senha na mesma mensagem que o arquivo protegido. Mande o arquivo por um canal e a senha por outro.",
    "Trate cópias de documentos de identidade como uso único. Assim que a pessoa tiver o arquivo, peça que apague, a menos que exista obrigação legal de guarda.",
    "Não reutilize senhas entre PDFs sigilosos. Se uma vazar, as outras continuam protegidas.",
    "Evite wi-fi público para enviar arquivos sensíveis. Use o roteamento do celular ou espere uma rede confiável.",
    "Revise os seus PDFs sigilosos uma vez por ano. A maioria já não é necessária — apague com segurança e reduza a superfície.",
  ],
  mobileNote:
    "Os celulares hoje guardam e enviam muitos PDFs sigilosos (contratos assinados, cópias de documentos). O app PDF Editor os processa localmente no aparelho — compressão, assinatura, proteção por senha —, então o material sensível não precisa sair do celular para ser preparado.",
  faq: [
    {
      q: "A proteção por senha do PDF é forte de verdade?",
      a: "A criptografia AES moderna em PDFs é forte. O ponto fraco costuma ser a própria senha — uma senha fraca é a única entrada fácil. Use senhas longas e únicas.",
    },
    {
      q: "Devo sempre criptografar PDFs sigilosos?",
      a: "Sim, tanto guardados quanto em trânsito. A criptografia de disco protege na guarda; senhas de PDF ou canais criptografados protegem no trajeto.",
    },
    {
      q: "E armazenamento em nuvem para PDFs sigilosos?",
      a: "É aceitável com criptografia de conhecimento zero (o provedor não consegue ler os seus arquivos) ou com criptografia do lado do cliente (você criptografa antes de subir). Nuvem comum resolve para arquivos corriqueiros, não para os altamente sensíveis.",
    },
    {
      q: "Como oculto trechos sensíveis de um PDF?",
      a: "A ocultação de verdade renderiza o texto como imagem e o substitui. O app PDF Editor faz isso. Só cobrir com um retângulo preto não oculta — o texto por baixo continua extraível.",
    },
    {
      q: "Dá para apagar um PDF com segurança?",
      a: "Em SSDs, a exclusão segura é menos direta que em discos rígidos. Mova o arquivo para um armazenamento criptografado, apague e deixe o TRIM do disco limpar os setores. Em sensibilidade muito alta, a criptografia de disco desde o início é a abordagem certa.",
    },
  ],
  related: [
    { label: "Segurança de PDF — proteja com senha", path: "/pdf-security" },
    { label: "Como proteger um arquivo PDF com senha", path: "/guides/how-to-protect-pdf-file" },
    { label: "Como compartilhar arquivos PDF com privacidade", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Como evitar enviar documentos sigilosos", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Segurança de PDF", path: "/pdf-security" },
};

export default content;
