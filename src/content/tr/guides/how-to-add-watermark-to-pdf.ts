import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "PDF'e Filigran Nasıl Eklenir? (Ücretsiz)",
  description:
    "TASLAK ya da GİZLİ gibi bir metni PDF'in her sayfasına tarayıcında damgala. Bir filigranın gerçekte neyi koruyup neyi korumadığı dürüstçe açıklanıyor.",
  updated: "2026-05-23",
  intro: [
    "Filigran, sayfa boyunca yazılmış bir etikettir — TASLAK, GİZLİ, bir şirket adı, bir alıcının e-postası. İnsanlar buna durumu belirtmek için (\"bu son hali değil\"), sahipliği işaretlemek için ya da bir kopyanın kime ait olduğunu damgalayarak rastgele yeniden dağıtımı caydırmak için başvurur.",
    "Bu rehber, doğrudan tarayıcında her sayfanın üzerine bir metin filigranı yerleştiren ücretsiz PDF'e Filigran Ekle aracını kullanıyor — hiçbir şey yüklenmez. Hızlı ve gizlidir, tam olarak yukarıdaki belirtme işleri için kullanışlıdır.",
    "Bir filigranın ne olmadığı konusunda net olmak da aynı derecede önemli: bir güvenlik önlemi değildir. Filigranların gerçekten nerede yardımcı olduğunu ve bunun yerine gerçek korumaya nerede ihtiyacın olduğunu ele alacağız, böylece yapamayacağı bir iş için ona güvenmezsin.",
  ],
  steps: [
    {
      title: "PDF'e Filigran Ekle aracını aç",
      body: "Tarayıcında PDF'e Filigran Ekle aracına git. Cihazında çalışır — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Filigran, belgenin her sayfasına uygulanacak.",
    },
    {
      title: "Filigran metnini yaz",
      body: "İstediğin etiketi gir — TASLAK, GİZLİ, şirket adın ya da bir alıcı tanımlayıcısı. Sayfa boyunca temiz okunması için kısa tut.",
    },
    {
      title: "Filigranı uygula",
      body: "Aracı çalıştır. Metnin, belgenin yeni bir kopyasının her sayfasına damgalanır.",
    },
    {
      title: "Okunabilirliği iki yönden de kontrol et",
      body: "Filigranın işini yapacak kadar görünür ama altındaki metnin hâlâ okunabilir olacağı kadar hafif olduğunu doğrula. İçeriği gizleyen bir filigran, amacını boşa çıkarır.",
    },
    {
      title: "Filigranlı kopyayı indir",
      body: "Kendi kayıtların için temiz, işaretsiz bir orijinali koruman için sonucu yeni bir dosya olarak kaydet.",
    },
  ],
  tips: [
    "Filigran, görsel bir etikettir, koruma değildir. Herkes ekran görüntüsü alabilir, yazdırabilir ya da sayfayı yeniden işleyebilir — onu bir kilit değil, bir sinyal olarak düşün.",
    "İletilmeyi caydırmak için paylaştığın kopyalarda alıcıya özel bir filigran (adı ya da e-postası) kullan — insanlar kendileri için görünür şekilde damgalanmış bir belgeye karşı daha az gelişigüzel davranır.",
    "Filigran metnini kısa tut. Sayfa boyunca sarılan uzun bir ifade içerikle yarışır ve karmaşa gibi okunur.",
    "Her zaman bir kopyayı filigranla, asla ana dosyanı değil. Tüm amaç, orijinalin temiz kalmasıdır.",
    "Açılmayı, kopyalanmayı ya da düzenlenmeyi gerçekten durdurman gerekiyorsa, bu bir şifre ve şifreleme işidir — bir filigrana değil, bir PDF'i koruma rehberine bak.",
  ],
  mobileNote:
    "Bir belgeyi telefonundan göndermeden önce TASLAK ya da GİZLİ olarak işaretlemek, filigranları çevrimdışı uygulayan ve aynı oturumda imzalamana ya da korumana izin veren PDF Editor uygulamasında saniyeler sürer — bir teklif gerçekten son halinden önce gittiğinde işe yarar.",
  faq: [
    {
      q: "Bir filigran belgemi korur mu?",
      a: "Hayır. Filigran, görünür bir etikettir, güvenlik değildir. Durumu ya da sahipliği belirtir ama kopyalamayı, yazdırmayı ya da düzenlemeyi engellemez. Bunun için şifre koruması ve şifreleme kullan.",
    },
    {
      q: "Filigran her sayfada görünecek mi?",
      a: "Evet. Araç, metnini belgenin tüm sayfalarına damgalar, bu yüzden etiket baştan sona tutarlıdır.",
    },
    {
      q: "Filigran kaldırılabilir mi?",
      a: "Kararlı biri herhangi bir görünür filigranı aşabilir; bu yüzden bir koruma değil, bir caydırıcıdır. İşaretsiz orijinalini ayrı sakla.",
    },
    {
      q: "PDF'im yükleniyor mu?",
      a: "Hayır. Filigran, cihazındaki tarayıcında uygulanır, bu yüzden dosya gizli kalır.",
    },
    {
      q: "Bir görsel ya da logoyla filigran ekleyebilir miyim?",
      a: "Tarayıcı aracı bir metin filigranı uygular. Bir görsel ya da logo bindirmesi için PDF Editor mobil uygulaması daha fazla seçenek sunar.",
    },
  ],
  related: [
    { label: "PDF'e Filigran Ekle — tarayıcında", path: "/add-watermark-to-pdf" },
    { label: "PDF dosyası şifreyle nasıl korunur", path: "/guides/how-to-protect-pdf-file" },
    { label: "Paylaşmadan önce PDF nasıl hazırlanır", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "PDF Güvenliği — belgeleri koru", path: "/pdf-security" },
  ],
  parentHub: { label: "PDF'e Filigran Ekle", path: "/add-watermark-to-pdf" },
};

export default content;
