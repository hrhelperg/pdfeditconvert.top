import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Belge Paylaşmak İçin En İyi Format (PDF, DOCX, Görseller Karşılaştırması)",
  description:
    "PDF'in paylaşım için ne zaman doğru format olduğu, ne zaman olmadığı ve gerçekçi alternatiflerin (DOCX, görseller, HTML, Markdown) günlük senaryolarda nasıl karşılaştırıldığı.",
  updated: "2026-05-29",
  intro: [
    "Belge paylaşmak için tek bir en iyi format yoktur — her tür paylaşım durumu için en iyi bir format vardır. PDF çoğu zaman doğrudur ama her zaman değil. DOCX, düzenlenecek belgeler için doğrudur. Görseller tek görseller için doğrudur. HTML web için doğrudur. Markdown, hafif yapılı düz metin için doğrudur. Her biri bir şeyde üstündür ve başka yerde beceriksizdir.",
    "Karar vermenin doğru yolu alıcının dosyayla ne yapacağını düşünmektir. Okuyup arşivleyecek mi? PDF. Düzenleyecek mi? DOCX. Webde mi görüntüleyecek? HTML. Bir sohbette mi alıntılayacak? Markdown. Tek bir görsele mi bakacak? PNG ya da JPG. Her paylaşımı PDF'ten geçirmeye zorlamak kullanışlıdır ama alıcı düzenlemek istediğinde sürtünme üretir.",
    "Bu kılavuz seçimi senaryo senaryo anlatıyor. Amaç, senin üretmesi en kolay bulduğun formatı değil, alıcının kullanacağı formatı göndermek.",
  ],
  steps: [
    {
      title: "Okuyup arşivleyeceklerse PDF gönder",
      body: "Kilitli yerleşim, her cihazda aynı, imzalanabilir, arşivlenebilir. PDF, paylaşılan belgeler için varsayılandır ve çoğu zaman doğru seçimdir.",
    },
    {
      title: "Düzenleyeceklerse DOCX ya da Google Docs gönder",
      body: "Gerçek düzenleme DOCX'te ya da Docs'ta gerçekleşir. Alıcı düzenleyecekken PDF göndermek onu geri dönüştürmeye zorlar — gönderdiğine yaklaşık bir şey elde ederler.",
    },
    {
      title: "Webde görüntüleyecekse bir bağlantı ya da HTML gönder",
      body: "Web sayfaları indirmeye ihtiyaç duymadan tarayıcılarda görüntülenir. Web'e özgü olması amaçlanan içerik için HTML, PDF'i geçer.",
    },
    {
      title: "Hafif yapılı düz metinse Markdown gönder",
      body: "Notlar, teknik içerik, hafif belgeleme. Markdown her bağlamda metin olarak okunabilir ve desteklendiği yerde güzel görüntülenir.",
    },
    {
      title: "Tek bir görselse PNG ya da JPG gönder",
      body: "Tek görsel, altında metin yok, yönetilecek sayfa yok. Keskin/şeffaf için PNG, fotoğraflar için JPG. PDF tek görselleri gereksiz yere sarmalar.",
    },
    {
      title: "Doğru cevap belirsizse varsayılan olarak PDF",
      body: "Alıcının dosyayla ne yapacağını tahmin edemediğinde PDF en güvenli yedektir. Herkes tarafından okunabilir, gönderdikten sonra değişmez ve gerekirse başka formatlara dönüştürülebilir.",
    },
  ],
  tips: [
    "Alıcıya düzenlemesi gerekip gerekmediğini sor. Cevap doğru formatı değiştirir.",
    "İstenmedikçe hem PDF hem DOCX gönderme. Bu, kararsızlık işareti verir.",
    "PDF dışında herhangi bir formatta çok sayfalı içerik genelde yanlıştır.",
    "İç araçların (sohbet, wiki, belge platformları) bağlamda PDF'i geçen yerel formatları vardır. İç bir paylaşım için refleks olarak PDF'e dışa aktarma.",
    "Format konusunda şüphedeysen PDF gönder — alıcılar gerekirse dönüştürebilir.",
  ],
  mobileNote:
    "Telefonlar artık çoğu paylaşılan belgeyi alıyor ve PDF küçük ekranlarda en iyi çalışıyor çünkü yerleşim kilitli. PDF Editor uygulaması iOS ve Android'de PDF'leri okur, imzalar ve paylaşır; dosyanın her cihazda nasıl görüneceğine dair sürpriz olmadan.",
  faq: [
    {
      q: "PDF gerçekten en iyi varsayılan mı?",
      a: "Bitmiş belgeleri paylaşmak için evet. Çalışma taslakları için DOCX daha iyidir. Tek görseller için PNG ya da JPG. Alıcının ne yapacağına göre seç.",
    },
    {
      q: "DOCX ne zaman PDF'ten daha iyidir?",
      a: "Alıcı belgeyi düzenleyecekse. PDF düzenlemesi zordur; DOCX kolaydır. Onları dönüştürmeye zorlama.",
    },
    {
      q: "İkisini de göndermeli miyim?",
      a: "Sadece açıkça istendiğinde. İki format göndermek, alıcının hangisini istediğinden emin olmadığını gösterir ve seçmeleri gerekir.",
    },
    {
      q: "Peki bulut belge bağlantıları?",
      a: "Ortak çalışılan belgeler (Docs, Sheets) için kullanışlı. Bitmiş belgelerin tek yönlü paylaşımı için indirmeler, bağlantı izinlerinden daha basittir.",
    },
    {
      q: "Alıcının cihazı önemli mi?",
      a: "Biraz — eski cihazlar daha yeni DOCX özelliklerini açamayabilir. PDF en evrensel uyumlu formattır.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcıda çalışan tüm araçların listesi", path: "/pdf-tools" },
    { label: "PDF mi DOCX mü — özellik karşılaştırması", path: "/guides/pdf-vs-docx" },
    { label: "PDF mi Google Docs mu", path: "/guides/pdf-vs-google-docs" },
    { label: "Belge paylaşımında PDF mi görsel mi", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
