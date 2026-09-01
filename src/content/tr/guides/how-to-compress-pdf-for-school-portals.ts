import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Okul Portalları İçin PDF Nasıl Sıkıştırılır? (Sıkı Limitler)",
  description:
    "Okul ve üniversite yükleme portalları PDF'leri e-postadan daha sert sınırlar. Not verenin kontrol ettiği okunabilirliği bozmadan ödevleri limitlere sığdıracak şekilde sıkıştırma yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Okul portalları, günlük kullanımdaki en sıkı PDF yükleyicilerden bazılarıdır. E-posta 25 MB'a tolerans gösterebilirken bir sınıf portalı genelde 5 MB'da sınırlanır — ve K-12 sistemleri bazen 2 MB'da. Yazılı bir ödeve birkaç taranmış el yazısı sayfa eklediğinde son teslimden iki dakika önce aniden sınırın üzerine çıkarsın.",
    "Sıkıştırma doğru çözümdür ama fazla agresif sıkıştırmak işi okumayı zorlaştırır — ki bu tam olarak puan kaybettiren şeydir. Numara akıllıca sıkıştırmak: dosya boyutuna hakim olan tarama ağırlıklı kısımlarda sert, zaten pek sıkışmayan yazılı kısımlarda hafif ve sadece portal sınırını geçmek için gereken kadar.",
    "Bu kılavuz gerçekçi süreci anlatıyor: neyi sıkıştırman gerektiği, neyi olduğu gibi bırakman gerektiği ve maksimum sıkıştırma bile sığmadığında ne yapman gerektiği.",
  ],
  steps: [
    {
      title: "Önce portalın belirttiği sınırı kontrol et",
      body: "Çoğu portal sınırı listeler; birçok öğrenci hiç bakmaz. Sayıyı bilmek stratejiyi değiştirir: 2 MB sınırı sıkıdır, 25 MB sınırı cömerttir. Tamponun olsun diye sınırın %80'ini hedefle.",
    },
    {
      title: "Dosyayı büyüten şeyi belirle",
      body: "Taranmış el yazısı sayfalar genelde suçludur. Her taranan sayfa tam çözünürlüklü bir görseldir. 20 sayfalık yazılı bir ödev küçüktür; beş taranmış sayfayla aynısı üç katına çıkabilir.",
    },
    {
      title: "PDF Sıkıştır ile sıkıştır",
      body: "Tarayıcındaki PDF Sıkıştır dosyayı cihazında küçültür. Önce güçlü sıkıştırmayı dene — modern sıkıştırıcılar güçlü ayarlarda bile el yazısı işi okunur bırakır.",
    },
    {
      title: "Sıkıştırdıktan sonra okunabilirliği kontrol et",
      body: "Sıkıştırılmış dosyayı aç ve not verenin okuyacağı yere yakınlaş. Metin ya da diyagramlar çok yumuşak görünüyorsa orta sıkıştırmaya geri dön ve tekrar dene. Okunabilirlik küçüklüğe karşı kazanır.",
    },
    {
      title: "Hâlâ sınırın üzerindeysen kullanılmayan sayfaları at",
      body: "PDF Sayfalarını Çıkar sadece ihtiyacın olan sayfaları tutar. Boş bir arka kapak, tekrarlanan bir problem seti, bir yer tutucu — bunları at, dosya boyutu onlarla birlikte düşer.",
    },
    {
      title: "Hâlâ üzerindeysen birden fazla yüklemeye böl",
      body: "Bazı portallar birden fazla dosyayı kabul eder. PDF Böl ya da PDF Sayfalarını Çıkar sınırın altında parçalar üretir. Bunları açıkça adlandır (Odev3_Bolum1.pdf, Odev3_Bolum2.pdf).",
    },
  ],
  tips: [
    "Hiç sıkıştırmadan önce renkli değil gri tonlamalı tara. Tarama öncesi seçim, sıkıştırma sonrasının kazandırabileceğinden fazlasını kazandırır.",
    "Daha düşük bir DPI'da (600 yerine 200) yeniden taramak, el yazısı iş için okunabilirliği değiştirmeden dosyayı 5–10 kat küçültür.",
    "İki kez sıkıştırma. Tekrarlanan sıkıştırma kalite kaybını katlar. Sıkıştırılmamış bir ana kopya tut, yükleme için sıkıştır.",
    "PDF'i “küçültmek” için ZIP'lemekten kaçın. Çoğu portal ZIP'i tamamen reddeder; kabul edenler bile çoğu zaman aynı etkin sınırla açar.",
    "Portal sıkıştırılmış dosyayı geçersiz diye reddederse önce yazdırdan PDF'e olarak yeniden dışa aktar — bu, her portalın kabul ettiği temel bir PDF'e düzleştirir.",
  ],
  mobileNote:
    "Okul portallarına telefondan yükleme artık yaygın ve ödevin tarama ağırlıklı kısımları genelde telefondan doğar. PDF Editor uygulaması taramaları cihaz üzerinde yüklemeden önce sıkıştırır; böylece dosya, dalgalı bir mobil bağlantıya çarpmadan önce portala hazır olur.",
  faq: [
    {
      q: "Çoğu okul portalı hangi boyutu kabul eder?",
      a: "Yaygın sınırlar 2 MB (bazı K-12), 5 MB (birçok lise ve üniversite portalı) ve 10–25 MB (daha esnek üniversite portalları). Sınıfa özel bilgiyi kontrol et.",
    },
    {
      q: "Agresif sıkıştırma metni okunmaz mı yapar?",
      a: "Bazen. Zaten düşük çözünürlüklü taramalarda ağır sıkıştırma karakterleri pikselleştirebilir. Önce güçlü dene; metin bulanıklaşırsa orta ayara geri dön.",
    },
    {
      q: "Boş sayfaları silmeli miyim?",
      a: "Evet. PDF Sayfalarını Çıkar ya da PDF Böl bunları kaldırır. Boş sayfalar gerçek yer kaplar ve işin parçası değildir.",
    },
    {
      q: "ZIP olarak gönderebilir miyim?",
      a: "Çoğu okul portalı ZIP kabul etmez. Kabul eden az sayıdaki portal bile boyut sınırlarını uygular ve ZIP'i aynı sınıra sahip tek bir dosya gibi ele alabilir.",
    },
    {
      q: "Sıkıştırılmış dosyam hâlâ çok büyükse ne yapmalıyım?",
      a: "Kullanılmayan sayfaları at, daha düşük DPI'da gri tonlama/siyah-beyaz olarak yeniden tara ya da portal izin veriyorsa birden fazla yüklemeye böl. Bazı ödevlerin fiziksel olarak daha küçük olması gerekebilir.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — tarayıcında küçült", path: "/compress-pdf" },
    { label: "PDF Böl — kabul edilen parçalara ayır", path: "/split-pdf" },
    { label: "Ödev PDF olarak nasıl teslim edilir", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Yüklemeden önce PDF boyutu nasıl küçültülür", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "PDF Sıkıştır — tarayıcında boyutu küçült", path: "/compress-pdf" },
};

export default content;
