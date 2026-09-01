import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "PDF Form Alanları Kayıp mı? Nedenleri ve Geri Getirme Yöntemi",
  description:
    "Bir form açtın ve alanlar orada değil mi? Etkileşimli alanların bazı görüntüleyicilerde neden kaybolduğu, onları geri getirme yöntemi ve baştan hiç alan yoksa ne yapılacağı.",
  updated: "2026-06-01",
  intro: [
    "Bir form açıyorsun, yazacak kutular bekliyorsun ve hiçbir şey yok — sadece etkileşimsiz görünen bir sayfa ya da etkileşim kuramadığın boş taslaklar olarak görünen alanlar. Kayıp form alanları endişe verici görünür ama genelde zararsızdır: alanlar hâlâ dosyadadır; görüntüleyicin onları sadece çizmiyordur. Bazen de form hiç alana sahip olmamıştır ve her zaman elle doldurulmak üzere tasarlanmıştır.",
    "Neredeyse her durumu iki senaryo kapsar. Birincisinde, form etkileşimlidir ama onu alan katmanını görmezden gelen bir yerde açmışsındır — bir tarayıcı önizlemesi, bir e-posta görüntüleyicisi, temel bir görüntü tarzı PDF okuyucusu. İkincisinde, form gerçekten etkileşimsizdir, yani bulunacak alan yoktur ve üzerine metin yerleştirerek tamamlarsın.",
    "Bu kılavuz ikisini ayırt etmene ve var olduklarında alanları geri getirmene yardım ediyor — dosyanın hasarlı olduğunu varsaymadan, çünkü neredeyse hiçbir zaman öyle değildir.",
  ],
  steps: [
    {
      title: "Önce görüntüleyiciyi elemine et",
      body: "Aynı dosyayı bir tarayıcı sekmesi ya da e-posta önizlemesi yerine özel bir PDF uygulamasında aç. Alanlar yeniden ortaya çıkarsa, her zaman oradaydılar — önceki görüntüleyici sadece alan katmanını çizmiyordu.",
    },
    {
      title: "Alanların hiç var olup olmadığını kontrol et",
      body: "Hiçbir yetenekli uygulama sayfada hiçbir yerde alan göstermiyorsa, form etkileşimsizdir — taranmış ya da alan katmanı olmadan dışa aktarılmıştır. Eksik bir şey yoktur; sadece hiçbir zaman etkileşimli olmamıştır.",
    },
    {
      title: "PDF uygulamanı güncelle ya da değiştir",
      body: "Eski ya da minimal bir görüntüleyici sayfayı gösterebilir ama alanları atlayabilir. Güncel, tam donanımlı bir PDF uygulaması, etkileşimli alanları görüntülemenin ve kullanmanın en güvenilir yoludur.",
    },
    {
      title: "Dosya eksik görünüyorsa yeniden indir",
      body: "Kısmi ya da yarıda kesilmiş bir indirme içerik düşürebilir. Formu kaynağından yeniden indir ve yeniden aç — taze, eksiksiz bir kopya bazen kayıp gibi görünen alanları geri getirir.",
    },
    {
      title: "Etkileşimsiz bir formu metin ekleyerek doldur",
      body: "Form gerçekten alansızsa, onu etkileşimsiz yolla tamamla: bir PDF düzenleyiciyle sayfaya metin ve işaret yerleştir, sonra dışa aktar. Onu bitirmek için alanlara ihtiyacın yok.",
    },
  ],
  tips: [
    "Hasar varsaymadan önce görüntüleyici değiştir — farklı bir uygulama, alanların gerçekten var olup olmadığını görmenin en hızlı testidir.",
    "Tarayıcı önizlemeleri ve e-posta görüntüleyicileri “kaybolan” alanların olağan suçlularıdır; gerçek bir PDF uygulaması çoğu durumu düzeltir.",
    "Alanlar tıklayamadığın boş taslaklar olarak görünüyorsa, bu genelde çizen ama etkinleştirmeyen bir görüntüleyicidir — uygulama değiştir.",
    "Gerçekten etkileşimsiz bir formda hiçbir şey eksik değildir — üzerine metin eklemek, onu doldurmanın amaçlanan yoludur.",
    "Bazı gelişmiş dinamik formlar alanları sadece belirli yazılımlarda gösterir; öyleyse form o programa ya da alternatif bir biçime ihtiyaç duyuyor olabilir.",
  ],
  mobileNote:
    "Telefonda kayıp alanlar genelde onları çizmeyen bir önizlemedir. Formu PDF Editor uygulamasında aç: var olan yerde etkileşimli alanları etkinleştirir ve olmayan yerde sayfaya metin yerleştirmene izin verir — böylece e-postada alansız görünen bir form doldurulabilir hale gelir.",
  faq: [
    {
      q: "PDF'imdeki form alanları neden kayıp?",
      a: "Çoğunlukla görüntüleyicin alan katmanını çizmiyordur — tarayıcı önizlemelerinde ve e-posta görüntüleyicilerinde yaygındır. Dosyayı özel bir PDF uygulamasında aç, alanlar genelde yeniden ortaya çıkar. Hiçbir uygulama göstermiyorsa, form sadece etkileşimsizdir.",
    },
    {
      q: "Alanları mı kaybettim, yoksa hiç mi yoktu?",
      a: "Yetenekli bir PDF uygulamasında aç. Alanlar görünürse, her zaman oradaydılar ve eski görüntüleyici onları gizliyordu. Hiçbir yerde görünmüyorsa, form etkileşimsizdir ve hiçbir zaman bir alan katmanı olmamıştır.",
    },
    {
      q: "Hasarlı bir indirme kayıp alanlara neden olabilir mi?",
      a: "Bazen. Kısmi bir indirme içerik düşürebilir. Alanların gerçekten kayıp olduğu sonucuna varmadan önce formu kaynağından yeniden indir ve yeniden aç.",
    },
    {
      q: "Alanı olmayan bir formu nasıl doldururum?",
      a: "Bir PDF düzenleyiciyle kendi metnini ve işaretlerini doğrudan sayfaya yerleştir, sonra dışa aktar. Etkileşimsiz formlar bu şekilde tamamlanır — alan gerekmez.",
    },
    {
      q: "Alanlar neden tıklayamadığım taslaklar olarak görünüyor?",
      a: "Görüntüleyicin alan kutularını çiziyor ama etkileşimli hale getirmiyor. Hem gösteren hem etkinleştiren tam donanımlı bir PDF uygulamasına geç.",
    },
  ],
  related: [
    { label: "PDF formu çalışmıyor mu", path: "/guides/pdf-form-not-working" },
    {
      label: "Bir PDF formuna neden yazamıyorum",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "PDF form uyumluluk sorunları",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF formu nedir", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
