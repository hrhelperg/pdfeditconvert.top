import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "PDF Form Biçimlendirme Sorunları (Hizalama ve Taşma)",
  description:
    "Alanlar hizasız mı, cevaplar taşıyor mu, form başkasının ekranında farklı mı görünüyor? Görüntüleyiciye göre değişen form yerleşimi sorunları ve tutarlı bir sonuç elde etme yöntemi.",
  updated: "2026-06-01",
  intro: [
    "Bir form senin ekranında mükemmel görünüp başkasınınkinde yanlış gelebilir — alanlar satırlarından kaymış, cevaplar kutularından taşmış, onay kutuları hizasız, tüm yerleşim hafifçe kaymış. Form alanları sayfaya işlenmek yerine her görüntüleyici tarafından çizildiği için, kesin görünümleri değişebilir, ve çoğu form biçimlendirme şikayetinin kökü budur.",
    "Bunlar, genelde kaynak belgenin kenar boşluklarına ve boşluğuna dayanan genel PDF biçimlendirme sorunlarından ayrıdır. Form biçimlendirme sorunları alan katmanıyla ilgilidir: alanların sayfaya göre nasıl durduğu, cevapların içine nasıl sığdığı ve farklı uygulamalarda ne kadar tutarlı işlendiği. Çözümler de buna göre forma özgüdür.",
    "Bu kılavuz yaygın form yerleşimi sorunlarını, nedenlerini ve formun her yerde aynı görünmesini sağlayan tek en güvenilir çareyi — kilitlemeyi — anlatıyor.",
  ],
  steps: [
    {
      title: "Bunun bir görüntüleyici farkı olduğunu doğrula",
      body: "Formu iki farklı PDF uygulamasında aç. Yerleşim ikisi arasında kayıyorsa, sorun dosyada değil alan işlemededir — alanlar her görüntüleyici tarafından biraz farklı çiziliyor.",
    },
    {
      title: "Alanlarından taşan cevapları düzelt",
      body: "Metin bir alanın kenarından taşıyorsa, alan çok küçüktür ya da cevap çok uzundur. Kontrol ettiğin bir formda alanı büyüt; doldururken cevapları görünür alanın içinde tut ya da otomatik boyuta güven.",
    },
    {
      title: "Satırlarından kayan alanları yeniden hizala",
      body: "Etiketlerinin üstünde ya da altında sürüklenen alanlar genelde alan konumlarının altındaki sayfayla eşleşmediği anlamına gelir. Senin formunsa alanları yeniden konumlandır; değilse, hizasız alan yerine üzerine metin eklemek daha güvenilir olabilir.",
    },
    {
      title: "Tutarlı bir sonuç için kilitle",
      body: "Kilitleme, alanları sayfaya birleştirerek konumunu ve görünümünü sabitler. Kilitlendikten sonra form her görüntüleyicide birebir aynı görünür — değişen yerleşim için en güvenilir çare.",
    },
    {
      title: "Tutarlılık kritikse etkileşimsiz bir şablonu tercih et",
      body: "Bir form herkes için aynı görünmek zorundaysa, iyi tasarlanmış etkileşimsiz bir şablon (alan katmanı olmadan), görüntüleyiciden görüntüleyiciye işleme farklarını tamamen atlar.",
    },
  ],
  tips: [
    "Bir yerleşim sorununun hasarlı bir dosya değil görüntüleyici işleme olduğunu doğrulamak için formu iki uygulamada aç.",
    "Kilitleme en güvenilir çözümdür — alan konumlarını ve görünümü her görüntüleyici için sayfaya kilitler.",
    "Hizasız alanları olan bir form doldururken, üzerine metin yerleştirmek alanla boğuşmaktan daha hassas olabilir.",
    "Her yerde birebir aynı görünmesi gereken bir form kuruyorsan, etkileşimsiz bir şablon görüntüleyiciden görüntüleyiciye işleme farklarını baştan atlar.",
    "Form görünümü tasarım gereği PDF görüntüleyiciler arasında değişebilir, o yüzden “başkasının ekranında yanlış görünüyor” genelde bozulma değil işlemedir.",
  ],
  mobileNote:
    "PDF Editor uygulaması, göndermeden önce tamamlanmış bir formu kilitlemene izin verir, böylece yerleşimi sabitlenir ve alıcının ekranında kaymaz. Uygunsuz alanları olan formlar için, metni doğrudan sayfaya hassas şekilde yerleştirebilir ve kilitleyebilirsin — herhangi bir cihazda tutarlı bir sonuç.",
  faq: [
    {
      q: "PDF formum neden başkasının ekranında farklı görünüyor?",
      a: "Form alanları her görüntüleyici tarafından çizilir, o yüzden konumları ve görünümleri uygulamalar arasında değişebilir. Formu kilitlemek, alanları sayfaya birleştirir, böylece her yerde birebir aynı görünür.",
    },
    {
      q: "Cevaplarım neden alan kutularından taşıyor?",
      a: "Alan cevap için çok küçüktür ya da cevap çok uzundur. Kontrol ettiğin bir formda alanı büyüt, cevapları görünür alanın içinde tut ya da onları sığdırmak için otomatik boyuta güven.",
    },
    {
      q: "Satırlarından kayan alanları nasıl düzeltirim?",
      a: "Alan konumları altındaki sayfayla eşleşmiyordur. Senin formunsa alanları yeniden konumlandır; değilse, doğrudan sayfaya metin yerleştirmek hizasız alandan daha güvenilir olabilir.",
    },
    {
      q: "Bir formun yerleşimini tutarlı tutmanın en güvenilir yolu nedir?",
      a: "Onu kilitle. Kilitleme, alan görünümünü sayfaya sabitler, böylece herhangi bir görüntüleyicide aynı görüntülenir. Kurduğun formlar için, etkileşimsiz bir şablon sorunu baştan önler.",
    },
    {
      q: "Bu, genel PDF biçimlendirme sorunlarından nasıl farklı?",
      a: "Bu, alan katmanıyla ilgili — hizalama, taşma, görüntüleyici işlemesi. Genel PDF biçimlendirme sorunları genelde kaynak belgenin kenar boşluklarından ve boşluğundan kaynaklanır, form alanlarından değil.",
    },
  ],
  related: [
    {
      label: "PDF biçimlendirme sorunları nasıl çözülür",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "PDF form yazı tipi sorunları",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "PDF form uyumluluk sorunları",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF form en iyi uygulamaları", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
