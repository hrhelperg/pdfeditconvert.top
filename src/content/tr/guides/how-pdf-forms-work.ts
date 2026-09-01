import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "PDF Formları Nasıl Çalışır? Alanlar, AcroForm ve Etkileşimsiz Taramalar",
  description:
    "Perde arkasında bir PDF formu ya sayfanın üzerine yerleştirilmiş etkileşimli alanlar bütünüdür ya da hiçbirinin olmadığı etkileşimsiz bir görüntüdür. Her birinin nasıl oluşturulduğu ve doldurma açısından neden önemli olduğu.",
  updated: "2026-06-01",
  intro: [
    "Bir PDF formunun içinde gerçekte ne olup bittiğini anlamak işine yarar, çünkü karşılaşacağın hemen her tuhaflığı açıklar. Bir PDF sayfası sabit bir yerleşimdir — metin, çizgiler ve görseller tam koordinatlara yerleştirilmiştir. Bir form bu yerleşimin üzerine ayrı bir katman ekler: her biri kendisinin bir metin alanı, bir onay kutusu, bir açılır menü ya da bir imza alanı olduğunu bilen küçük kutular, yani etkileşimli alanlar.",
    "Bir formda bu alan katmanı olduğunda, PDF görüntüleyicin tasarımcının koyduğu yerlere düzenlenebilir kutular çizer. Sen yazarsın, görüntüleyici de girdini sayfanın içine gömmek yerine alanda saklar. Doldurulmuş cevapların bazen temizlenebilmesinin, düzenlenebilmesinin ya da kaydedilememesinin nedeni tam olarak bu ayrımdır — onları kilitleyene kadar, sayfanın kendisinde değil, alan katmanında yaşarlar.",
    "Etkileşimsiz formlar alan katmanını tamamen atlar. Sadece sayfa görüntüsüdürler, yani yazacak etkileşimli bir şey yoktur; kendi metin nesnelerini üstüne sen eklersin. Bu kılavuz her iki türün nasıl oluşturulduğunu, kilitlemenin ne yaptığını ve aynı formun farklı uygulamalarda neden farklı davranabileceğini anlatıyor.",
  ],
  steps: [
    {
      title: "Sayfa katmanı: sabit ve kesin",
      body: "Her PDF'in, metin ve grafiklerin tam konumlara kilitlendiği bir sayfa katmanı vardır. PDF'i her yerde aynı gösteren şey budur. Etkileşimsiz bir formda soru satırları ve etiketler tamamen burada yaşar.",
    },
    {
      title: "Alan katmanı: üzerindeki etkileşimli kısım",
      body: "Etkileşimli formlar sayfanın üzerine bir form alanları katmanı ekler — metin girişleri, onay kutuları, seçim düğmeleri, açılır menüler, imza alanları. Her alanın görüntüleyicinin anladığı bir adı ve türü vardır.",
    },
    {
      title: "Doldurma: girdi alanlarda saklanır",
      body: "Etkileşimli bir alana yazdığında cevabın o alanda tutulur, sayfaya karışmaz. Bu yüzden onu silip yeniden yazabilirsin ve farklı bir görüntüleyici onu biraz farklı gösterebilir.",
    },
    {
      title: "Kaydetme: alan değerlerini korumak",
      body: "Doldurulmuş bir formu kaydetmek, alan değerlerini dosyanın içine yazar. Bazı basit görüntüleyiciler sadece yazdırmana izin verir, verileri kaydetmene değil — doldurulmuş cevapların dosyayı yeniden açtığında kaybolmasının klasik nedeni budur.",
    },
    {
      title: "Kilitleme: alanları sayfaya işlemek",
      body: "Kilitleme, alan değerlerini sayfa katmanına iter ve onları kalıcı sayfa içeriğine dönüştürür. Kilitledikten sonra cevaplar düzenlenemez ya da temizlenemez — formu geri göndermeden hemen önce işe yarar.",
    },
  ],
  tips: [
    "Etkileşimli bir formu, yazdırılmış bir sayfanın üzerine serilmiş şeffaf, düzenlenebilir kutulardan oluşan bir tabaka gibi düşün. Kilitleme bu tabakayı kalıcı olarak yapıştırır.",
    "Alan değerleri sayfadan ayrı olduğu için, aynı form farklı görüntüleyicilerde biraz farklı görünebilir — yazı tipleri ve alan boyutlandırması her zaman birebir aynı olmaz.",
    "Cevaplar sürekli kayboluyorsa, alan katmanı kaydedilmiyordur. Alan değerlerini dosyaya yazan bir araç kullan ya da kapatmadan önce kilitle.",
    "Bazı gelişmiş formlar (genelde XFA ya da dinamik form olarak adlandırılır) birçok görüntüleyicinin tam desteklemediği daha karmaşık bir yapı kullanır — sorun çıkarma ihtimali en yüksek olanlar bunlardır.",
    "Etkileşimsiz formların hiç alan katmanı yoktur, bu yüzden etkileşimli formlar gibi asla veri kaybetmezler — eklediğin metin sadece sayfada durur.",
  ],
  mobileNote:
    "PDF Editor uygulaması açtığında formun alan katmanını okur, yani etkileşimli alanlar hemen dokunulabilir hale gelir. Alan katmanı olmayan etkileşimsiz formlarda ise doğrudan sayfaya metin ve işaret eklemene izin verir, sonra dışa aktarırsın — göndermeden önce sonucu kilitleyerek cevaplarını sabitleyebilirsin.",
  faq: [
    {
      q: "PDF form alanları neyden oluşur?",
      a: "Sabit sayfa yerleşiminin üzerine yerleştirilmiş etkileşimli nesnelerden oluşan bir katmandır — metin kutuları, onay kutuları, seçim düğmeleri, açılır menüler ve imza alanları — her birinin görüntüleyicinin tanıdığı bir adı ve türü vardır.",
    },
    {
      q: "Doldurduğum cevaplar bazen neden kayboluyor?",
      a: "Alan değerleri sayfadan ayrı saklanır. Görüntüleyicin verileri kaydetmek yerine sadece yazdırıyorsa ya da düzgün kaydetmiyorsan, alan katmanı dosyaya yazılmaz ve cevaplar kaybolur.",
    },
    {
      q: "Bir PDF formunu kilitlemek ne anlama gelir?",
      a: "Kilitleme, alan değerlerini sayfanın kendisine işleyerek kalıcı hale getirir. Form artık düzenlenemez, ama cevaplar her yerde tutarlı şekilde görüntülenir ve yazdırılır.",
    },
    {
      q: "AcroForm nedir?",
      a: "AcroForm, geniş destek gören standart etkileşimli PDF form türüdür. Bir de birçok görüntüleyicinin zayıf ele aldığı daha karmaşık bir dinamik tür (XFA) vardır — bazı formların sadece belirli yazılımlarda çalışmasının nedeni budur.",
    },
    {
      q: "Aynı form iki farklı uygulamada neden farklı görünüyor?",
      a: "Çünkü görüntüleyiciler alan katmanını kendileri çizer. Form görünümü PDF görüntüleyiciler arasında değişebilir, özellikle alan yazı tipleri ve boyutlandırması. Paylaşmadan önce kilitlemek sürprizleri önler.",
    },
  ],
  related: [
    { label: "PDF formu nedir", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Doldurulmuş bir PDF formu nasıl kaydedilir",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "PDF form uyumluluk sorunları",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor — telefonda doldur", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
