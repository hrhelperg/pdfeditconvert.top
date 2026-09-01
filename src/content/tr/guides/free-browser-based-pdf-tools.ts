import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Ücretsiz Tarayıcı Tabanlı PDF Araçları (Kurulum Yok, Yükleme Yok)",
  description:
    "Tamamen tarayıcında çalışan PDF araçları — kurulum yok, hesap yok, yükleme yok. Nelerin mevcut olduğu, neleri kapsadığı ve gerçekten yerel çalıştıklarını doğrulama yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Tarayıcı tabanlı PDF araçları “online”ın anlamını değiştirdi. Eski model şuydu: dosyanı yükle, sunucu işlesin, sonucu indir. Yeni model şu: bir sayfayı ziyaret et, tarayıcın dosyayı yerel olarak işlesin, sonucu indir. Fark önemlidir — hız, gizlilik ve aracın gerçekten ücretsiz kalabilmesi.",
    "Tarayıcı tabanlı araçlar bir pazarlama iddiası değil; bir mimaridir. İşleme, makinende, tarayıcı sekmesinde JavaScript ya da WebAssembly'de gerçekleşir. Dosyanı ele almakla ilgili hiçbir sunucu devreye girmez. Gizlilik ve ücretsizlik beyan edilen bir politikadan değil, mimariden gelir.",
    "Bu kılavuz bugün tarayıcı tabanlı PDF araçlarında nelerin mevcut olduğunu, iyi kapsadıkları görevleri, henüz kapsamadıklarını ve bir araca güvenmeden önce gerçekten yerel olduğunu nasıl doğrulayacağını anlatıyor.",
  ],
  steps: [
    {
      title: "Tarayıcı tabanlı formda nelerin mevcut olduğunu bil",
      body: "Sıkıştırma, birleştirme, bölme, sayfa çıkarma, sayfa yeniden sıralama, döndürme, filigranlama, görselden PDF'e, PDF'ten görsele, Word'den PDF'e, PDF'ten Word'e, imzalama. Tarayıcı tabanlı yığın günlük PDF işinin çoğunu kapsıyor.",
    },
    {
      title: "Aracın gerçekten yerel olduğunu doğrula",
      body: "Tarayıcı geliştirici araçları, ağ sekmesi, bir dosya bırak. Gerçek bir tarayıcı tabanlı araç, dosyayı eklediğinde büyük bir giden istek göstermez. Kontrol saniyeler sürer.",
    },
    {
      title: "Boyut küçültme için PDF Sıkıştır kullan",
      body: "Bir PDF bırak, bir sıkıştırma düzeyi seç, indir. İşlemin tamamı tarayıcında çalışır. Ağır taramalı dosyalar belirgin şekilde küçülür; sadece metin içeren dosyalar neredeyse değişmez.",
    },
    {
      title: "Dosyaları birleştirmek için PDF Birleştir kullan",
      body: "Birden fazla PDF bırak, yeniden sıralamak için sürükle, birleşik dosyayı indir. Birleştirme yerel gerçekleşir; birleşik dosya tarayıcı belleğinde üretilir.",
    },
    {
      title: "Görsel-belge dönüşümleri için Görselden PDF'e ve PDF'ten Görsele kullan",
      body: "Görselden PDF'e, JPG, PNG ve WebP'yi tek bir PDF'te birleştirir. PDF'ten Görsele her sayfayı PNG ya da JPG olarak çıkarır. İkisi de yerel çalışır.",
    },
    {
      title: "Mobil öncelikli iş akışları için PDF Editor uygulamasını kullan",
      body: "Bazı iş akışları (imzalama, tarama, telefonda düzenleme) bir tarayıcıdan çok özel bir mobil uygulamada daha iyi çalışır. PDF Editor uygulaması, tarayıcı tabanlı yığının iOS/Android tamamlayıcısıdır — aynı gizlilik duruşu, telefon kullanım durumlarına daha iyi uyar.",
    },
  ],
  tips: [
    "Tarayıcı tabanlı araçlar sayfa yüklendikten sonra çevrimdışı çalışır. Gerçekten yerel olduklarının kullanışlı bir doğrulaması.",
    "Çok büyük dosyalarda ağır işlemler tarayıcı sekmesinin işlemcisini birkaç saniyeliğine sabitleyebilir — bu normaldir, donma değil.",
    "Çok sayfalı işlemler modern tarayıcılarda akış hâlinde işlenir — hiçbir şey yüklenmediği için tüm dosyanın yüklenmesini beklemen gerekmez.",
    "Aracın URL'sini kaydet — tarayıcı tabanlı araçlar hesap gerektirmeden çalışır, bu yüzden URL senin yer imi eşdeğerindir.",
    "Geliştirici araçlarını kontrol etmeden bir “tarayıcı tabanlı” etikete güvenme. Bazı araçların tarayıcı arayüzü var ama hâlâ dosyayı yüklüyor.",
  ],
  mobileNote:
    "Mobil tarayıcılar da tarayıcı tabanlı PDF araçlarını çalıştırır. PDF Editor uygulaması yerel bir kapta aynı mimariyi, aynı cihaz üzerinde işlemeyle kullanır — iPhone ve Android kullanıcıları aynı ücretsiz, yüklemesiz garantiyi alır.",
  faq: [
    {
      q: "Hangi PDF görevleri bir tarayıcıda çalışabilir?",
      a: "Sıkıştırma, birleştirme, bölme, sayfa çıkarma, yeniden sıralama, döndürme, filigranlama, görsel↔PDF dönüşümü, Word↔PDF, imzalama. Günlük PDF işinin çoğu buna uyar.",
    },
    {
      q: "Bir tarayıcıda henüz ne çalışamıyor?",
      a: "Uzun belgelerde yüksek doğruluklu OCR, gelişmiş karartma ve bazı özel baskı öncesi iş akışları hâlâ sunucu işlemeden fayda görüyor.",
    },
    {
      q: "Bir aracın gerçekten tarayıcı tabanlı olduğunu nasıl anlarım?",
      a: "Tarayıcı geliştirici araçları, ağ sekmesi. Bir dosya bırak. Büyük bir giden istek görmezsen yerel işliyordur. Birkaç MB'lık bir POST görürsen yüklüyordur.",
    },
    {
      q: "Tarayıcı tabanlı, sunucu tabanlıdan daha mı yavaş?",
      a: "Çoğu görev için benzer. Modern tarayıcılar ve WebAssembly hızlıdır. Çok büyük dosyalar yerel de daha uzun sürebilir ama yükleme-indirme süresinden kazanırsın.",
    },
    {
      q: "Tarayıcı tabanlı araçlar neden genelde ücretsiz?",
      a: "Çünkü ağır iş aracın sunucularında değil senin cihazında gerçekleşir. Barındırma maliyetleri çok küçüktür; araç abonelik baskısı olmadan ücretsiz kalabilir.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcı tabanlı tüm araçların tam listesi", path: "/pdf-tools" },
    { label: "En iyi ücretsiz PDF araçları", path: "/guides/best-free-pdf-tools" },
    { label: "Yüklemeden çalışan en iyi PDF araçları", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Tarayıcı tabanlı belge işlemenin avantajları", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
