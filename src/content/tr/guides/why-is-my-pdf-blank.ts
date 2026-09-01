import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "PDF'im Neden Boş Görünüyor? Gerçek Nedenler ve Kurtarma Yöntemi",
  description:
    "Bir PDF boş sayfalar halinde açıldığında içerik genelde hâlâ oradadır — sadece bir render hatası, eksik yazı tipi ya da tarama sorunu yüzünden gizlidir. Ne olduğunu anlama ve belgeyi geri getirme yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Bir PDF'i boş bir sayfada açmak huzursuz edicidir. Metin, grafikler, imzalı sözleşmeler beklersin — ve hiçbir şey elde etmezsin. İyi haber, içerik neredeyse her zaman hâlâ dosyanın içindedir. Kötü haber, nedenin birkaç şeyden biri olabilmesidir ve düzeltmeden önce hangisi olduğunu belirlemen gerekir.",
    "Boş PDF'ler genelde bir render hatasından (görüntüleyicin belirli bir şeyde tıkandı), bir yazı tipi hatasından (metin teknik olarak orada ama kimsenin çizemediği bir karaktere işaret ediyor), bir tarama ya da yakalama hatasından (kaynak boş sayfalar üretti) ya da katmanlı/gizli içerik sorunundan kaynaklanır. Nadir durumlarda dosya gerçekten boştur.",
    "Bu rehber, kontrol edilmesi ucuz olan sırayla teşhisleri ele alıyor, ardından seni doğru çözüme yönlendiriyor. Çoğu boş PDF, bir yeniden dışa aktarma ya da görüntüleyici değişikliğiyle yeniden okunabilir hale gelir.",
  ],
  steps: [
    {
      title: "Önce dosyayı farklı bir görüntüleyicide aç",
      body: "Chrome'un yerleşik görüntüleyicisini, macOS'taki Önizleme'yi ya da bir mobil okuyucuyu dene. Biri içeriği gösteriyorsa, sorunu orijinal görüntüleyicine kadar daralttın — ve dosya sorunsuz demektir.",
    },
    {
      title: "Dosya boyutunu beklentiyle karşılaştır",
      body: "Gerçekten boş bir PDF küçüktür — birkaç KB. Birkaç megabaytlık boş görünen bir PDF, neredeyse kesinlikle içinde sadece senin için render edilmeyen içerik barındırır.",
    },
    {
      title: "Güvenlik ya da izin bayraklarına bak",
      body: "Bazı PDF'ler bir “korumalı görünüm” ya da imzalama bayrağıyla dışa aktarılır, bu da bazı görüntüleyicilerin izin verilene kadar içeriği gizlemesine neden olur. İzin verici bir görüntüleyiciden korumasız bir kopya kaydetmek genelde bunu temizler.",
    },
    {
      title: "Dosyayı yazdır-PDF'e ile yeniden dışa aktar",
      body: "Dosyayı içeriği gösteren herhangi bir görüntüleyicide aç ve “Yazdır → PDF olarak kaydet” kullan (Windows'ta Microsoft Print to PDF). Bu, sayfa render etmeyi yeniden kurar ve çoğu yazı tipi kaynaklı boşluğu düzeltir.",
    },
    {
      title: "Bir taramaysa farklı bir ayarla yeniden tara",
      body: "Boş taranan sayfalar genelde çift sayfa çeken bir besleyiciden, çok açık bir kontrast ayarından ya da yanlış düzleme odaklanan bir telefon taramasından kaynaklanır. Kenar algılamalı PDF Tarama akışı bunun çoğunu önler.",
    },
    {
      title: "Doğrulamak için tek tek sayfaları görsel olarak çıkar",
      body: "PDF'ten Görsele, her sayfayı tarayıcında PNG olarak dışa aktarabilir. Dışa aktarılan PNG'ler içerik gösteriyorsa sorun görüntüleyicindir. Gerçekten boşlarsa, dosyadaki sayfa boştur.",
    },
  ],
  tips: [
    "Birkaç megabaytlık boş bir PDF'in bir yerde içeriği vardır — dosyanın kaybolduğunu varsaymadan önce görüntüleyicileri ve yeniden dışa aktarmaları denemeye devam et.",
    "Beyaz üzerine açık gri metin, doğrudan güneş ışığında telefon ekranlarında “boş” olarak render edilebilir. Sayfanın boş olduğunu varsaymadan önce parlaklığı artır ya da renkleri ters çevir.",
    "Erişilebilirliği kısıtlanmış uygulamalardan dışa aktarılan dosyalar bazen her şeyi daha yeni görüntüleyicilerin görmezden geldiği tek bir katmanda gömer. Yazdır-PDF'e onu düzleştirir.",
    "Boş imza sayfalarıyla geri gelen bir sözleşme aldıysan, imzalayan kişinin gerçek alanların üzerine boş işaretlemeler yazan bir imzalama aracı kullanmış olması muhtemeldir — farklı bir imzalayandan yeniden imzalı bir kopya iste.",
    "Nedenini bilene kadar boş render edilen bir dosyayı düzenlemeye ya da birleştirmeye devam etme. Bozuk bir render üzerine inşa etmek daha da bozuk bir dosya üretir.",
  ],
  mobileNote:
    "Telefon görüntüleyicileri bazen masaüstü olanlardan daha katıdır. PDF Editor uygulaması, diğer mobil görüntüleyiciler boş kaldığında bile içeriği göstermeye eğilimli, izin verici bir render motoru kullanır ve belgeyi daha temiz bir kopya olarak geri kaydetmeni sağlar.",
  faq: [
    {
      q: "Boş bir PDF sonsuza kadar kayıp mı?",
      a: "Nadiren. Dosya boyutu birkaç KB'den fazlaysa, içerik neredeyse kesinlikle hâlâ oradadır — doğrulamak için başka bir görüntüleyici, bir yazdır-PDF'e yeniden dışa aktarma ya da bir görsel çıkarma dene.",
    },
    {
      q: "Tarayıcım neden bazen boş PDF'ler üretiyor?",
      a: "En sık, besleyici birbirine yapışmış iki sayfayı aldı ve sadece ikincisini kaydetti, ya da kontrast çok düşük ayarlandı. Otomatik kontrastla yeniden taramak genelde bunu düzeltir.",
    },
    {
      q: "Bir yazı tipi sorunu olabilir mi?",
      a: "Evet. Bir PDF gömülü olmayan bir yazı tipine başvurduğunda ve görüntüleyicin onu değiştiremediğinde, metin hâlâ dosyada olsa bile kaybolur. Yeniden dışa aktarmak kullanılabilir bir yazı tipi gömer.",
    },
    {
      q: "Boş bir PDF'i sıkıştırmak ya da birleştirmek içeriği kaybettirir mi?",
      a: "Kaybettirebilir — her iki işlem de görüntüleyicinin görebildiği şey üzerinde çalışır. İçeriğin gerçekten orada olduğunu doğrulayana kadar boş render edilen bir dosyayı işleme.",
    },
    {
      q: "Neden Acrobat'ta boş görünüyor ama Chrome'da sorunsuz?",
      a: "Farklı ayrıştırma. Chrome'un görüntüleyicisi genelde en hoşgörülü olanıdır; eski Acrobat sürümleri daha katıdır. Dosya bozuk değil — görüntüleyicin öyle.",
    },
  ],
  related: [
    { label: "PDF'ten Görsele — sayfaların gerçekten boş olmadığını doğrula", path: "/pdf-to-images" },
    { label: "PDF Tarama — boşluksuz temiz yeniden taramalar", path: "/scan-to-pdf" },
    { label: "PDF'im Neden Açılmıyor? Nedenleri ve Pratik Çözümleri", path: "/guides/why-wont-my-pdf-open" },
    { label: "Bozuk Bir PDF Dosyası Nasıl Onarılır?", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
