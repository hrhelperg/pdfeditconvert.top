import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Kaliteden Fazla Kaybetmeden PDF Nasıl Sıkıştırılır?",
  description:
    "Dosya boyutu ile kalite arasındaki dengeyi bul. Sıkıştırma düzeylerinin detayı boyut karşılığında nasıl feda ettiği ve hâlâ işe yarayan en hafif düzeyin nasıl seçileceği.",
  updated: "2026-05-23",
  intro: [
    "PDF sıkıştırmanın merkezinde dürüst bir gerilim var: daha küçük dosyalar daha az ayrıntı demektir. Sıfır kalite kaybıyla büyük tasarruf vaat eden herhangi bir araç sana bir şey satıyordur. Gerçekçi hedef \"hiç kayıp yok\" değil — \"bu amaç için fark etmeyeceğin bir kayıp\"tır. Ekranda okunmak üzere hazırlanan bir belge, bir baskı işinin kaybedemeyeceği ayrıntıyı kaybedebilir.",
    "Bu rehber, tarayıcında çalışan, hiçbir şey yüklemeyen ve her düzey için boyut kazancını gösteren ücretsiz PDF Sıkıştır aracıyla bu en uygun noktayı bulmakla ilgili. Refleks olarak maksimum sıkıştırmaya başvurmak yerine, hâlâ doğru görünen en hafif düzeyi seçmeyi öğreneceksin.",
    "Bu dengeyi doğru kurmak, şikayetsiz gönderilen ve yüklenen, birisi gerçekten açtığında da istediğin gibi görünen dosyalar demek.",
  ],
  steps: [
    {
      title: "Bu belge için \"yeterince iyi\"yi tanımla",
      body: "Dosyanın nasıl kullanılacağına karar ver. Ekranda okuma, baskıdan daha fazla sıkıştırmaya tolerans gösterir; bir portföy parçası bir masraf fişinden daha fazla ayrıntı gerektirir. Kullanım, kalite tabanını belirler.",
    },
    {
      title: "PDF Sıkıştır aracını aç",
      body: "PDF Sıkıştır aracına git. Dosyayı cihazında işler ve boyut kazancını raporlar, böylece ödünleşimi doğrudan değerlendirebilirsin.",
    },
    {
      title: "En hafif düzeyle başla",
      body: "Önce Güçlü'yü değil, Düşük ya da Önerilen'i dene. Sıkıştırmayı en üst düzeye çıkarma içgüdüsü genelde hedefi aşar — genelde artakalan ayrıntıyla boyut hedefine ulaşırsın.",
    },
    {
      title: "Kaliteyi ve boyutu karşılaştır",
      body: "Sonucu aç ve sayfalara, özellikle görsellere ve ince metne bak. Kazanılan boyutu not et. Kalite iyiyse ve sınırının altındaysan, işin bitti.",
    },
    {
      title: "Sadece gerekirse bir üst düzeye çık",
      body: "Hâlâ çok mu büyük? Bir düzey güçlüye geç ve yeniden kontrol et. Kademeli olarak yükselmek, boyut hedefini fazla bozmadan karşılayan en hafif ayarı bulur.",
    },
    {
      title: "Orijinali sakla",
      body: "Sıkıştırılmış kopyayı yeni bir adla kaydet. Sıkıştırma tek yönlüdür — kaldırdığı ayrıntı gitmiştir — bu yüzden dokunulmamış orijinal senin güvencendir.",
    },
  ],
  tips: [
    "Önce en hafif düzeye başvur ve sadece zorunluysan yükselt. Çoğu insan aşırı sıkıştırır ve dosyaları boyut hedefinin gerektirdiğinden daha fazla bozar.",
    "Kaliteyi amaca eşleştir: sadece ekran için belgeler, baskıya giden bir şeyi mahvedecek ağır sıkıştırmadan sağ çıkar.",
    "Sıkıştırma sayfaları görselleştirir, bu yüzden çıktı seçilebilir metnini kaybeder. Daha küçük bir dosyadan çok aranabilir metne ihtiyacın varsa, bu orijinali saklamak ya da daha az sıkıştırmak için bir nedendir.",
    "Metin ağırlıklı PDF'ler hangi düzey olursa olsun neredeyse hiç küçülmez, çünkü çok az görsel veri vardır — orada olmayan tasarrufları bekleyerek düzeyi yükseltme.",
    "Bir kez sıkıştır. Zaten sıkıştırılmış bir dosyayı sıkıştırmak, anlamlı boyut kazancı olmadan kaybı üst üste yığar.",
  ],
  mobileNote:
    "Boyut-kalite ödünleşimini değerlendirmek, PDF Editor uygulamasıyla telefonda kolaydır: çevrimdışı sıkıştır, sayfaları önizle ve paylaşmadan önce düzeyi yukarı ya da aşağı ayarla — yükleme yok, korumalı dosyalar da destekleniyor.",
  faq: [
    {
      q: "Bir PDF'i hiç kalite kaybı olmadan sıkıştırabilir miyim?",
      a: "Anlamlı bir şekilde hayır — faydalı sıkıştırma kayıplıdır. Gerçekçi amaç, belgenin amacı için fark etmeyeceğin bir kayıptır. Daha hafif düzeyler daha fazla ayrıntı korur; hâlâ doğru görüneni seç.",
    },
    {
      q: "Hangi düzey en fazla kaliteyi korur?",
      a: "Düşük en fazla ayrıntıyı korur, sonra Önerilen, Güçlü ise en küçük ve en kaba olanıdır. Hafif başla ve sadece hâlâ boyut hedefinin üzerindeysen yükselt.",
    },
    {
      q: "Sıkıştırdıktan sonra görsellerim neden yumuşak görünüyor?",
      a: "Görsel sıkıştırma, yer kazanmak için ince ayrıntıyı atar ve daha güçlü düzeyler daha fazlasını atar. Kullanımın için yumuşama fark edilirse daha hafif bir düzeye geri dön.",
    },
    {
      q: "Sıkıştırmak aranabilir metni kaldırır mı?",
      a: "Evet — sayfalar görsel olarak yeniden işlenir; bu, seçilebilir metin katmanını kaldırır. Aranabilir metin boyuttan daha önemliyse, orijinali sakla ya da daha az agresif sıkıştır.",
    },
    {
      q: "Bir dosyayı birden fazla kez sıkıştırmalı mıyım?",
      a: "Hayır. İkinci bir geçiş, az ek tasarruf için kalite kaybı ekler. Doğru düzeyde bir kez sıkıştır ve orijinali sakla.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — düzeyi kontrol et", path: "/compress-pdf" },
    { label: "En iyi PDF sıkıştırma ayarları", path: "/guides/best-pdf-compression-settings" },
    { label: "PDF nasıl sıkıştırılır kalite kaybetmeden", path: "/guides/how-to-compress-pdf" },
    { label: "PDF'im neden bu kadar büyük", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
