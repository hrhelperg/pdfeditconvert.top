import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Taranmış PDF Kalitesi Nasıl Düzeltilir? (Netleştirme, Eğiklik Giderme, Renk Düzeltme)",
  description:
    "Taranmış PDF'ler öngörülebilir şekillerde bozulur: eğiklik, soluk kontrast, benekli arka planlar, aşırı büyük dosyalar. Onları gerçekten düzelten tarama öncesi ayarlar ve tarama sonrası araçlar.",
  updated: "2026-05-29",
  intro: [
    "Kötü bir tarama, aksi takdirde basit olan bir belgeyi mahveder. Çizgiler eğri, kontrast solgun, toz benekleri görünüyor, dosya boyutu devasa — ve içindeki belge okunması zor ya da daha fazla sıkıştırılması imkansız hale geliyor. Can sıkıcı olan şu ki, bu sorunların çoğu PDF'in kendisinden değil kurulumdan gelir ve onları yakalama sırasında önlemek, sonradan düzeltmekten çok daha kolaydır.",
    "Düzeltmen gereken kötü bir tarama olduğunda, gerçekçi seçenekler şunlardır: eğri olanı düzelt, yanlış çerçevelenmiş olanı kırp, aşırı boyutlu olanı küçült ve yakalamada kaybedilen çözünürlüğün geri gelmeyeceğini kabul et. Bazı görüntü işleme araçları netleştirme iddia eder; pratikte şeyleri daha iyi değil, farklı gösterirler.",
    "Bu rehber önlemi (ilk seferinde doğru tara) kurtarmadan (elindeki dosyayla ne yapılacağı) ayırıyor. Önlem daha önemlidir.",
  ],
  steps: [
    {
      title: "Sayfaları düzgün besleyerek eğikliği önle",
      body: "Otomatik besleyicili tarayıcılar, sayfalar tepside kare değilken eğrilir. Telefon taramaları kamerayı eğdiğinde eğrilir. İkisi de önlenebilir: sayfayı kareleştir, telefonu kağıda paralel tut, tarama düz çıkar.",
    },
    {
      title: "Belgeler için tarama çözünürlüğünü 200-300 DPI'ya ayarla",
      body: "600 DPI fotoğraf kalitesindedir ve daktilo yazısı bir sayfada hiçbir fayda olmadan devasa dosyalar üretir. 150 DPI çok düşüktür — metin yumuşak çıkar. 200-300 aralığı, paylaşacağın, arşivleyeceğin ya da yazdıracağın belgeler için tatlı noktadır.",
    },
    {
      title: "Metin için renk yerine gri tonlama ya da siyah-beyaz seç",
      body: "Bir metin belgesinde renk modu, dosya boyutunu üçe katlar ve kötü sıkışan gürültü ekler. Gri tonlama ya da siyah-beyaz, fotoğraf ya da renkli grafik olmayan her şey için daha keskin, daha küçük, daha temiz taramalar üretir.",
    },
    {
      title: "Mevcut olduğunda otomatik kontrast ve otomatik kırpma kullan",
      body: "Çoğu tarama uygulaması otomatik kontrast ve kenar algılama içerir. İkisi de gerçek bir fark yaratır: kontrast gri pusu kaldırır, kenar algılama sayfaya göre kırpar, böylece kenar boşlukları temiz olur.",
    },
    {
      title: "Mevcut taramaları dikkatle sıkıştır",
      body: "Taranmış bir PDF zaten devasaysa, tarayıcındaki PDF Sıkıştır onu dramatik şekilde küçültebilir. Metinde aşırı ayara gitme — karakterleri pikselleştirebilir. Güçlü ama aşırı olmayan güvenli seçimdir.",
    },
    {
      title: "Eğri sayfaları PDF Döndür ile döndür",
      body: "Sadece birkaç sayfa yan yatmış ya da ters çevrilmişse, PDF Döndür onları yerinde düzeltir. Küçük açı eğikliğini düzeltemez, ama çoğu besleyici hatasının ürettiği 90/180/270 derece döndürmeleri halleder.",
    },
  ],
  tips: [
    "Telefon taramalarında parlak, eşit ışıklandırma kamera kalitesinden daha önemlidir. İyi aydınlatılmış bir telefon taraması, kötü aydınlatılmış bir ofis tarayıcısı çıktısını geride bırakır.",
    "Yüksek DPI renkli tarayıp sonra sert sıkıştırma. Baştan doğru ayarlarla tara; dosya daha küçük, daha keskin ve işlemesi daha hızlı olur.",
    "Arkadan sızan yazı (ince kağıdın ters yüzündeki metin), bir kağıt sorunudur, bir tarama sorunu değil. Sayfanın arkasına koyu bir kağıt yaprağı koy.",
    "Yeniden taramak neredeyse her zaman düzeltmekten daha hızlıdır. Kağıt elindeyse, görüntüyü işlemek yerine taramayı yakalamada düzelt.",
    "“İyileştirme” vaat eden telefon tarama uygulamaları genelde yakından bakıldığında daha kötü görünen sahte netleştirme ekler. Temiz bir taban tarama, işlenmiş kötü bir taramadan iyidir.",
  ],
  mobileNote:
    "Telefon taramaları öngörülebilir şekillerde bozulur — açı, ışık ve odak tamamen kullanıcının elindedir. PDF Editor uygulamasının tarama akışı gerçek zamanlı kenar algılama ve kontrast ayarı kullanır, böylece her yakalama ilk denemede masaüstü tarayıcı sonucuna daha yakın çıkar.",
  faq: [
    {
      q: "Taranmış PDF'im neden bu kadar soluk?",
      a: "Yakalamada kontrast çok düşük ayarlanmıştı. Otomatik kontrast açıkken ya da parlaklığı/kontrastı elle ayarlayarak yeniden tara. İşleme sonrası ancak sınırlı fayda sağlar.",
    },
    {
      q: "Bulanık bir taramayı netleştirebilir miyim?",
      a: "Sadece görünüşte. Yakalamada kaybedilen gerçek detay geri getirilemez. Netleştirme filtreleri kenarları değiştirir ama bilgi eklemez.",
    },
    {
      q: "Hangi tarama çözünürlüğünü kullanmalıyım?",
      a: "Belgeler için 200-300 DPI. Yazdırabileceksen 300. Daha yükseği metinde boşa gider ve sadece dosyayı şişirir.",
    },
    {
      q: "Renkli mi yoksa gri tonlamalı mı taramalıyım?",
      a: "Metin için gri tonlama ya da siyah-beyaz. Sadece fotoğraflar ve renkli grafikler için renkli. Gri tonlama daha keskin ve çok daha küçüktür.",
    },
    {
      q: "Taramalarım neden dosya boyutu olarak devasa?",
      a: "Genelde çok yüksek DPI artı renk modu. İkisini de yakalamada azalt ya da mevcut dosyayı sıkıştır. Taranmış PDF'ler sıkıştırmadan en çok fayda görenlerdir.",
    },
  ],
  related: [
    { label: "PDF Tarama — kenar algılamayla temiz yakalamalar", path: "/scan-to-pdf" },
    { label: "PDF Sıkıştır — ağır taramaları küçült", path: "/compress-pdf" },
    { label: "Taranmış Bir PDF Nasıl Sıkıştırılır? (Büyük Tasarruf)", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "PDF'im Neden Bulanık? Çözünürlük, Sıkıştırma ve Tarama Nedenleri", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "PDF Tarama", path: "/scan-to-pdf" },
};

export default content;
