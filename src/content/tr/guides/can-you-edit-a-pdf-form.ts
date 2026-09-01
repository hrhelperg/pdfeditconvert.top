import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Bir PDF Formu Düzenlenebilir mi? Neyi Değiştirebilir, Neyi Değiştiremezsin",
  description:
    "Bir PDF formunun sorularını düzenlemek onu doldurmaktan farklıdır. Neyin düzenlenebilir olduğu, neyin kilitli olduğu ve elinde sadece bitmiş bir PDF olarak bulunan bir formu değiştirme yöntemi.",
  updated: "2026-06-01",
  intro: [
    "“Bir PDF formu düzenlenebilir mi?” sorusu genelde iki farklı soruyu gizler. Biri: doldurabilir miyim — cevaplarımı alanlara yazabilir miyim? Neredeyse her zaman evet. Diğeri: formun kendisini değiştirebilir miyim — bir soruyu yeniden ifade edebilir, bir alan ekleyebilir, bir etiketi düzeltebilir miyim? Bu tamamen formun nasıl yapıldığına ve kilitlenip kilitlenmediğine bağlıdır.",
    "Bir formu doldurmak günlük bir durumdur ve nadiren sorun çıkarır. Formun yapısını düzenlemek ise daha zor olanıdır, ve bunu yapıp yapamayacağın üç şeye bağlıdır: dosyanın gerçek, düzenlenebilir metni mi yoksa etkileşimsiz bir tarama mı olduğuna, yazarının değişiklikleri engelleyen bir güvenlik uygulayıp uygulamadığına ve form alanlarını sadece doldurmak değil düzenlemek için yeterli bir aracın olup olmadığına.",
    "Bu kılavuz iki soruyu net şekilde ayırıyor, sonra elinde sadece bitmiş PDF varken gerçekçi olarak neyin mümkün olduğunu anlatıyor — dürüst sınırlar dahil, çünkü bazı formlar bilerek düzenlemeye direnecek şekilde yapılır.",
  ],
  steps: [
    {
      title: "Hangi tür düzenlemeyi kastettiğine karar ver",
      body: "Cevap doldurmak bir şeydir; formun ifadesini, yerleşimini ya da alanlarını değiştirmek başka bir şeydir. Birincisi kolay ve beklenendir; insanların genelde “bir formu düzenlemek” derken kastettiği ikincisidir, ve o daha kısıtlıdır.",
    },
    {
      title: "Düzenlenebilir metni etkileşimsiz taramadan ayır",
      body: "Formun kendi metninden bir satır seçmeyi dene. Seçiliyorsa içerik gerçektir ve potansiyel olarak düzenlenebilirdir. Hiçbir şey seçilmiyorsa, bu bir formun görüntüsü olan etkileşimsiz bir taramadır ve düzenlemek önce OCR ya da yerleşimi yeniden kurmak demektir.",
    },
    {
      title: "Güvenlik kısıtlamalarını kontrol et",
      body: "Bazı formlar doldurmaya izin verip düzenlemeyi engelleyen, hatta şifresiz değişikliği tamamen yasaklayan izinler taşır. Bir PDF düzenleyici düzenleme araçlarını griye çeviriyorsa, dosya muhtemelen bilerek kısıtlanmıştır.",
    },
    {
      title: "Gerçek alanlar için form desteği olan bir düzenleyici kullan",
      body: "Doldurma araçları sadece alanları cevaplamana izin verir. Alan eklemek, taşımak, yeniden adlandırmak ya da silmek, soruları değiştirmek için formun yapısını gösteren bir düzenleyiciye ihtiyacın var — her uygulama bunu yapmaz.",
    },
    {
      title: "Ne zaman kaynağı isteyeceğini bil",
      body: "Kayda değer değişikliklere ihtiyacın varsa, en temiz yol genelde kilitli bir PDF ile boğuşmak yerine onu hazırlayan kişiden orijinal düzenlenebilir belgeyi (bir Word dosyası ya da formun kaynağı) istemektir.",
    },
  ],
  tips: [
    "Sadece formu tamamlaman gerekiyorsa, onu hiç düzenlemene gerek yok — sadece alanları doldur ya da etkileşimsiz bir kopyaya metin ekle.",
    "Taranmış bir formu düzenlemek bir görüntüyle çalışmak demektir: ya metni geri kazanmak için OCR yaparsın ya da eskilerin üzerine yeni metin ve kutular yerleştirirsin.",
    "Form alanlarını yeniden adlandırmak ya da yeniden düzenlemek gerçek bir form düzenlemesidir ve bunun için yapılmış bir araç gerekir — temel görüntüleyiciler bunu yapamaz.",
    "Kilitli formlara saygı göster: düzenlemeyi engelleyen bir güvenlik ayarı genelde yazarının bilerek verdiği bir karardır, aşılacak bir arıza değil.",
    "Cevaplarını sonra gözden geçirmeyi düşünüyorsan kilitlenmemiş bir kopya sakla; bir form kilitlendikten sonra cevaplar sabit sayfa içeriğine dönüşür.",
  ],
  mobileNote:
    "Telefonda, PDF Editor uygulaması dosyanın izin verdiği yerde her formu doldurmana ve belge içeriğini düzenlemene olanak tanır. Etkileşimsiz formlarda alanları düzenlemek yerine doğrudan sayfaya metin eklersin. Doldurma ve hafif düzenlemeler cihazda gerçekleşir, boş orijinal ise yeniden kullanım için sağlam kalır.",
  faq: [
    {
      q: "Bir PDF formundaki soruları değiştirebilir miyim?",
      a: "Bazen. Formda gerçek, düzenlenebilir metin varsa ve kilitli değilse, form desteği olan bir düzenleyici ifadeleri ve alanları değiştirebilir. Etkileşimsiz bir taramaysa ya da güvenlikle kısıtlanmışsa, soruları düzenlemek çok daha zor ya da engellenmiştir.",
    },
    {
      q: "Düzenleyicim neden bir formu değiştirmeme izin vermiyor?",
      a: "Ya dosya düzenlenebilir metni olmayan etkileşimsiz bir görüntüdür ya da doldurmaya izin verip düzenlemeye izin vermeyen izinler taşır. İkisi de yaygındır ve genelde kasıtlıdır.",
    },
    {
      q: "Bir formu doldurduktan sonra cevaplarımı düzenleyebilir miyim?",
      a: "Evet, formu etkileşimli olarak kaydettiysen ve kilitlemediysen. Kilitlendikten sonra cevaplar sayfayla birleşir ve sabitlenir.",
    },
    {
      q: "Alanı olmayan taranmış bir formu nasıl düzenlerim?",
      a: "Onu bir görüntü olarak ele al. Düzenlenebilir metni geri kazanmak için OCR çalıştır ya da sadece üzerine kendi metnini ve işaretlerini yerleştir — doldurmak için genelde ikinci yaklaşım yeterlidir.",
    },
    {
      q: "PDF'i düzenlemek mi yoksa orijinal dosyayı almak mı daha iyi?",
      a: "Büyük değişiklikler için mümkünse yazarından kaynak belgeyi iste. Bitmiş, muhtemelen kilitli bir PDF'i düzenlemek her zaman orijinalle çalışmaktan daha sınırlıdır.",
    },
  ],
  related: [
    { label: "PDF formu nedir", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Düzenlenebilir PDF ile doldurulabilir PDF farkı",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "Doldurulabilir bir PDF nasıl oluşturulur",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    { label: "Bir PDF'i neden düzenleyemiyorum", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
