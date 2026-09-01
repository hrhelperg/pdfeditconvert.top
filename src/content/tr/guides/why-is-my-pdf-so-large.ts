import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "PDF'im Neden Bu Kadar Büyük? Nedenleri ve Çözümleri",
  description:
    "Bir PDF'in şişmesinin gerçek nedenleri — taramalar, gömülü fotoğraflar, yazı tipleri ve daha fazlası — ve ücretsiz tarayıcı araçlarıyla her biri için doğru çözüm.",
  updated: "2026-05-23",
  intro: [
    "On sayfalık bir belgenin 60 MB olmasının hiçbir mantığı yok, yine de PDF'ler sürekli şişer. Bir sıkıştırıcıya başvurmadan önce, bir dosyanın neden bu kadar büyüdüğünü anlamakta fayda var — çünkü doğru çözüm nedene bağlıdır ve yanlış çözüm, ezilmeye ihtiyacı olmayan bir belgeyi ezebilir.",
    "Bu rehber kısa bir teşhistir. Şişkin bir PDF'in arkasındaki alışılmış suçluları, hangisiyle uğraştığını nasıl anlayacağını ve her birine en etkili yanıtı ele alır. Çoğu çözüm, bu sitedeki, hepsi cihazında çalışan ve hiçbir şey yüklemeyen ücretsiz, tarayıcı içi araçları kullanır.",
    "Sonunda dosyanın sıkıştırmaya, sayfa kaldırmaya ya da sadece kaynaktan yeniden dışa aktarmaya ihtiyaç duyup duymadığını bileceksin — ve alışkanlıktan belgeleri aşırı sıkıştırmayı bırakacaksın.",
  ],
  steps: [
    {
      title: "Önce taranmış sayfalardan şüphelen",
      body: "Taramalar bir numaralı nedendir. Her taranmış sayfa tam çözünürlüklü bir görseldir, bu yüzden birkaçı bir metin belgesini cüceleştirir. PDF'in bir tarayıcıdan ya da telefon kamerasından geldiyse, neredeyse kesinlikle nedeni budur.",
    },
    {
      title: "Gömülü fotoğrafları ve grafikleri kontrol et",
      body: "Bir belgeye yerleştirilen yüksek çözünürlüklü fotoğraflar, ekran görüntüleri ve grafikler tam piksel verilerini taşır. Metin kısa olsa bile bir düzine büyük görsel içeren bir rapor devasa olabilir.",
    },
    {
      title: "Gömülü yazı tiplerini ve tasarım varlıklarını göz önünde bulundur",
      body: "Birden fazla tam yazı tipi ailesini gömen ya da ağır tasarım yazılımından dışa aktarılan belgeler, içeriğin görünürde ihtiyaç duymadığı yazı tipleri ve vektör varlıklarında fazladan ağırlık taşır.",
    },
    {
      title: "Kalan ya da gizli içeriği ara",
      body: "Özensiz bir birleştirmeden kalan tekrarlanan sayfalar, boş tarayıcı eklemeleri ya da revizyon geçmişi bir dosyayı şişirebilir. İhtiyacın olmayan sayfaları kaldırmak bazen en basit boyut kazancıdır.",
    },
    {
      title: "Eşleşen çözümü uygula",
      body: "Taramalar ve fotoğraflar için PDF Sıkıştır aracıyla sıkıştır. Karmaşa için PDF Sayfalarını Çıkar aracıyla sayfaları at. Gizemli şekilde devasa bir metin belgesi için, onu kaynak uygulamadan yeniden dışa aktar.",
    },
    {
      title: "Boyutu yeniden kontrol et",
      body: "Dosyanın ihtiyacın olan yere ulaştığını doğrula. Tarama ağırlıklı bir dosyayı sıkıştırdıktan sonra hâlâ büyükse, sonraki adım daha güçlü bir düzey ya da belgeyi bölmektir.",
    },
  ],
  tips: [
    "Çözümü nedene eşleştir: sıkıştırma görsel ağırlıklı dosyalara yardımcı olur; başka bir nedenle büyük olan sadece metin içeren bir PDF için neredeyse hiçbir şey yapmaz.",
    "Şaşırtıcı derecede büyük olan sadece metin içeren bir belgenin genelde gömülü yazı tipleri ya da gizli nesneleri vardır — kaynak uygulamadan yeniden dışa aktarmak genelde sıkıştırmadan daha temiz küçültür.",
    "200-300 yeterli olacakken 600 DPI'de taramak, devasa dosyaların yaygın, önlenebilir bir nedenidir. Paylaşacağın belgeler için kaynakta tarama çözünürlüğünü düşür.",
    "İhtiyaç duyulmayan sayfaları kaldırmak kaliteye hiç dokunmadan boyutu düşürebilir — sıkıştırmadan önce kontrol etmeye değer.",
    "Refleks olarak sıkıştırma. Bir dosya zaten makul bir boyuttaysa, sıkıştırmak gerçek bir kazanç olmadan onu sadece bozar.",
  ],
  mobileNote:
    "Telefon taramaları klasik suçludur — bir PDF olarak kaydedilen yüksek çözünürlüklü görseller. PDF Editor uygulaması, en baştan makul bir çözünürlükte taramana ve çevrimdışı sıkıştırmana izin verir, böylece belgeler ilk etapta şişmez ve şişerse kolayca küçülür.",
  faq: [
    {
      q: "Bir PDF'i çoğu zaman büyük yapan nedir?",
      a: "Taranmış sayfalar ve gömülü fotoğraflar. Her biri tam çözünürlüklü bir görseldir, bu yüzden birkaçı uzun bir metin belgesinden defalarca daha ağır basar.",
    },
    {
      q: "Sadece metin içeren PDF'im neden hâlâ büyük?",
      a: "Muhtemelen gömülü yazı tipleri, gizli nesneler ya da düzenlemelerden ve birleştirmelerden kalan içerik. Kaynak uygulamadan yeniden dışa aktarmak ya da ihtiyaç duyulmayan sayfaları kaldırmak genelde sıkıştırmadan daha çok yardımcı olur.",
    },
    {
      q: "Sıkıştırma her zaman dosyamı küçültür mü?",
      a: "Hayır. Sıkıştırma görsel verisini hedef alır, bu yüzden tarama ve fotoğraf ağırlıklı PDF'ler çok küçülürken sadece metin ya da vektör içeren dosyalar neredeyse hiç değişmez. Bir metin dosyası devasaysa, neden başka yerdedir.",
    },
    {
      q: "Sayfaları kaldırmak boyutu azaltır mı?",
      a: "Evet, özellikle kaldırılan sayfalar taramalar ya da görsellerse. PDF Sayfalarını Çıkar aracıyla karmaşayı atmak, kalanın kalitesini etkilemeden boyutu düşürebilir.",
    },
    {
      q: "Taramaların bu kadar büyük olmasını nasıl durdururum?",
      a: "Paylaşacağın belgeler için 600 yerine 200-300 DPI'de tara, dosyalar çok daha küçük başlar. PDF Editor uygulaması, tarama kalitesini en baştan kontrol etmene izin verir.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — görsel ağırlıklı dosyaları küçült", path: "/compress-pdf" },
    { label: "PDF Sayfalarını Çıkar — karmaşayı kaldır", path: "/extract-pdf-pages" },
    { label: "Taranmış bir PDF nasıl sıkıştırılır", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "En iyi PDF sıkıştırma ayarları", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
