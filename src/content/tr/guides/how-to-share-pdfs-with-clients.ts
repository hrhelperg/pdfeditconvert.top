import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "PDF'ler Müşterilerle Nasıl Profesyonelce Paylaşılır?",
  description:
    "PDF'leri müşterilere gönderme kısa rehberi — e-posta için boyutlandırma, şifre seçimleri, dosyayı markalama, teslim alındığını doğrulama — üçüncü taraflara hiçbir şey yüklemeden.",
  updated: "2026-05-29",
  intro: [
    "Bir PDF'i bir müşteriye nasıl gönderdiğin, nasıl çalıştığın hakkında şaşırtıcı derecede çok şey söyler. Geri tepen 40 MB'lık bir ek, “Belge (1).pdf” gibi genel bir dosya adı ya da başlık çubuğunda müşterinin adının yanlış yazıldığı bir dosya — bunlar küçük detaylar ve hepsi akılda kalır.",
    "Profesyonel bir müşteri devir teslimi çoğunlukla birkaç alışkanlıkla ilgilidir: dosyayı uygun boyutlandır, bir teslim edilebilir gibi adlandır, tutarlı şekilde markala, gerektiğinde şifreyle koru ve teslim alındığını doğrula. Bunların hiçbiri rutin hale geldiğinde uzun sürmez; bir arada dosyayı bitmiş hissettirirler.",
    "Bu rehber tam olarak o kısa rehber — göndere basmadan önce ne yapman gerektiği ve hangi ücretsiz araçların hassas hiçbir şeyi bir üçüncü taraf sunucusuna yüklemeden her adımı halledeceği.",
  ],
  steps: [
    {
      title: "Dosyayı senin için değil müşteri için adlandır",
      body: "MusteriAdi_ProjeAdi_Teklif_2026-05-29.pdf şaşmazdır. “final_v3_duzenlendi.pdf” bir itiraftır. Alıcı, bir ay sonra indirilenler klasöründen dosyayı tanıyabilmelidir.",
    },
    {
      title: "Belge başlığı meta verisini eşleştir",
      body: "PDF sekme başlıkları genelde orijinal dosya adını ya da Word'den kalan bir kalıntıyı gösterir. Meta veri başlığı ayarlanmış olarak kaynak uygulamadan yeniden dışa aktar ya da onu ayarlamak için bir PDF düzenleyici kullan. Küçük detay, profesyonel dokunuş.",
    },
    {
      title: "Müşterinin gelen kutusu için sıkıştır",
      body: "Bazı müşteri portalları 5 MB ile sınırlıdır; çoğu e-posta sistemi 25 ile. Tarayıcındaki PDF Sıkıştır, tipik bir teslim edilebiliri ikisinin de rahatça altına indirir. Bunu ilk adım değil son adım yap.",
    },
    {
      title: "Sadece önemli olduğunda şifreyle koru",
      body: "Şifreleri gerçekten hassas materyal için kullan — mali detaylar, kişisel tanımlayıcı bilgiler, sözleşme taslakları. Teklifin kendisini şifreyle koruma; sürtünme, güvenlik faydasından ağır basar.",
    },
    {
      title: "İçinde ne olduğunu listeleyen bir kapak notu gönder",
      body: "Kısa bir cümle: “Ekte: teklif (12 sayfa), koşullar (3 sayfa), fiyatlandırma (1 sayfa).” Müşteri, önce dosyayı taramadan ne açtığını bilir.",
    },
    {
      title: "Teslim alındığını doğrulayarak takip et",
      body: "Kapak notunda “net şekilde ulaştı mı bana bildir” diye sor ya da bir gün sonra kontrol et. Dosyalar özellikle şifreli eklerde spam filtresine takılabilir.",
    },
  ],
  tips: [
    "Taslakları filigranla (TASLAK, DAHİLİ) ama finali asla filigranlama. Finalin bir etikete ihtiyacı olmamalı.",
    "Anlayabiliyorsan dosya adlandırma kuralını müşterinin kullandığına uydur — pek çok kurumsal müşterinin yansıtabileceğin bir belge adlandırma standardı vardır.",
    "Üçten fazla ek göndermekten kaçın. Birbirine ait olanları birleştir; gerekirse geri kalanını bir takip olarak gönder.",
    "Geri bir imza gerekiyorsa, önce kendi kısmını imzala ve onların imza alanını önceden doldur. Bu, daha hızlı geri dönen küçük bir naziklik.",
    "Göndermeden önce dosyanı taze bir görüntüleyicide test et — kendi görüntüleyicin başkalarının göstermediği yerleşimler gösterebilir.",
  ],
  mobileNote:
    "Müşteriler artık teslim edilebilirleri giderek önce telefonda okuyor. PDF Editor uygulaması, PDF'leri mobilden önizlemeni, sıkıştırmanı, imzalamanı ve yeniden paylaşmanı sağlar, böylece son dakika bir müşteri revizyonu ofise dönmeni beklemez.",
  faq: [
    {
      q: "Müşterilere PDF gönderirken en yaygın hata nedir?",
      a: "Dosya adı. “Belge (1).pdf”, müşteriye umursamadığını söyler. Proje ve tarih içeren açıklayıcı bir ad, dosyayı sonradan bulunabilir yapar.",
    },
    {
      q: "Gönderdiğim her şeyi şifreyle mi korumalıyım?",
      a: "Hayır. Şifreleri gerçekten hassas içerik için ayır. Rutin teslim edilebilirlerin buna ihtiyacı yok, şifreleri aşırı kullanmak müşterileri onları görmezden gelmeye ya da kaybetmeye alıştırır.",
    },
    {
      q: "Dosya ne kadar büyük olabilir?",
      a: "E-posta 25 MB ile sınırlıdır; pek çok müşteri portalı 5 MB ile. Müşterinin daha büyüğünü kabul ettiğini bilmiyorsan 5 MB'ı aşan her şeyi sıkıştır. Daha küçük her zaman daha güvenlidir.",
    },
    {
      q: "Birden fazla PDF mi göndermeliyim yoksa birleştirmeli miyim?",
      a: "Birbirlerine ait olduklarında birleştir (teklif + koşullar + fiyatlandırma). Gerçekten farklı teslim edilebilirler olduklarında ayrı tut. Üç ek, işlerin kaybolmaya başlamadan önceki pratik sınırdır.",
    },
    {
      q: "Müşteri işi için online PDF araçları kullanmak uygun mu?",
      a: "Sadece tarayıcında yerel olarak çalışıyorlarsa. Hassas bir müşteri belgesini bir üçüncü taraf sunucusuna yüklemek gerçek bir risktir. Cihazında işleyen tarayıcı tabanlı araçlar bundan tamamen kaçınır.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "PDF Sıkıştır — müşteri portalları için küçült", path: "/compress-pdf" },
    { label: "İş Kullanımı İçin PDF Nasıl Hazırlanır? (Temizlik Kontrol Listesi)", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Müşteriye Hazır PDF Dosyaları Nasıl Oluşturulur?", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "İşletmeler için PDF", path: "/pdf-for-business" },
};

export default content;
