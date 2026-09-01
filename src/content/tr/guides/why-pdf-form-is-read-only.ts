import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Bir PDF Formu Neden Salt Okunur? (Ve Ne Yapmalısın)",
  description:
    "Formun kilitli ve gri açılıyor mu? Formların neden salt okunur yapıldığı, kasıtlı bir güvenlik önlemini görüntüleyici tuhaflığından ayırt etme yöntemi ve bir formu tamamlamak için dürüst seçenekler.",
  updated: "2026-06-01",
  intro: [
    "Salt okunur bir PDF formu düzgün açılır ama doldurma girişimlerinin hepsini reddeder — alanlar griye çevrilmiş, bir kilit simgesi, belki başlık çubuğunda “korumalı” ya da “güvenli” bir bildirim. Etkileşimsiz bir formdan (basitçe hiç alanı olmayan) ya da bir kaydetme sorunundan (cevapların kalıcı olmadığı) farklı olarak, salt okunur bir formun alanları vardır ama bilerek kapatılmıştır. Bir şey ya da biri onu kilitlemiştir.",
    "Bunun için birkaç dürüst neden var, ve bunlar ne yapman gerektiğini değiştirdiği için önemliler. Formun yazarı onu bilerek güvenli hale getirmiş olabilir. Form sertifikalanmış ya da zaten imzalanmış olabilir, yani değiştirmek bunu bozar. Ya da görüntüleyicin onu kapatabileceğin salt okunur bir modda açıyor olabilir. Kasıtlı korumayı bir görüntüleyici tuhaflığından ayırt etmek kilit ilk adımdır.",
    "Bu kılavuz nedenleri, hangisiyle karşılaştığını nasıl belirleyeceğini ve salt okunur bir formu tamamlamanın meşru yollarını anlatıyor — senin olmayan bir belgenin güvenliğini aşmaya çalışmadan.",
  ],
  steps: [
    {
      title: "Korumalı ya da güvenli bir bildirim ara",
      body: "Başlık çubuğuna ve belge özelliklerine “güvenli”, “korumalı” gibi kelimeler ya da bir kilit simgesi için bak. Bu, yazarının uyguladığı kasıtlı bir güvenliğin işaretidir — salt okunur durum bilerek yapılmıştır.",
    },
    {
      title: "Görüntüleyicinin salt okunur modunu ele",
      body: "Bazı uygulamalar dosyaları varsayılan olarak salt okunur ya da “korumalı görünüm”de açar. Dosyanın kendisinin kilitli olduğunu varsaymadan önce bir “düzenlemeyi etkinleştir” istemi ya da salt okunur anahtarı ara ve özel bir PDF uygulaması dene.",
    },
    {
      title: "Sertifikalanmış ya da imzalanmış olup olmadığını düşün",
      body: "Form zaten dijital olarak imzalanmış ya da sertifikalanmışsa, düzenlemek o imzayı geçersiz kılar, bu yüzden görüntüleyiciler onu kilitler. Bu doğru bir davranıştır — imzalanmış bir formu genelde değiştirmemelisin.",
    },
    {
      title: "Üzerine metin ekleyerek tamamla",
      body: "Alanlar kilitli olsa bile, genelde sanki etkileşimsizmiş gibi kendi metnini ve işaretlerini sayfaya yerleştirebilir, sonra dışa aktarabilirsin — salt okunur bir formu doldurmanın meşru bir yolu.",
    },
    {
      title: "Gönderenden kilidi açılmış bir sürüm iste",
      body: "Gerçekten etkileşimli alanlara ihtiyacın varsa, en temiz yol gönderenden girdiye izin veren bir sürüm istemektir. Senin olmayan bir belgenin güvenliğini aşmaya çalışma.",
    },
  ],
  tips: [
    "Önce karar ver: kasıtlı güvenlik mi yoksa görüntüleyici tuhaflığı mı? Bir “düzenlemeyi etkinleştir” istemine karşı bir kilit simgesi ya da “güvenli” bildirimi ara.",
    "Sayfanın üzerine metin yerleştirmek çoğu salt okunur formda işe yarar ve genelde tamamlamanın en hızlı meşru yoludur.",
    "Senin olmayan bir formdan korumayı sökmeye çalışma — alanların kilidini açılmış istiyorsan, gönderene sor.",
    "Sertifikalanmış ya da imzalanmış bir form iyi bir nedenle kilitlidir; onu değiştirmek taşıdığı imzayı bozar.",
    "Bazı görüntüleyicilerin “korumalı görünümü” sadece bir varsayılandır — tam bir PDF uygulamasına geçmek ya da düzenlemeyi etkinleştirmek ihtiyacın olan tek şey olabilir.",
  ],
  mobileNote:
    "Telefonda, salt okunur bir form genelde PDF Editor uygulamasında sayfanın üzerine metin ve işaret yerleştirerek yine tamamlanabilir, alanları kilitli olsa bile. Cihazda çalışır, yani bilgilerin gizli kalır — ve formun güvenliğine dokunmaz, sadece cevaplarını üzerine serer.",
  faq: [
    {
      q: "PDF formum neden salt okunur?",
      a: "Ya yazarı onu bilerek güvenli hale getirmiştir, ya sertifikalanmış ya da zaten imzalanmıştır (yani düzenlemek bunu bozar), ya da görüntüleyicin onu salt okunur bir modda açmıştır. Kasıtlı korumayı bir görüntüleyici ayarından ayırmak için bir kilit simgesi ya da “güvenli” bildirimi ara.",
    },
    {
      q: "Salt okunur bir PDF formunu nasıl doldururum?",
      a: "Genelde alanlar kilitli olsa bile sanki etkileşimsizmiş gibi sayfanın üzerine kendi metnini ve işaretlerini yerleştirebilir, sonra dışa aktarabilirsin. Etkileşimli alanlara ihtiyacın varsa, gönderenden kilidi açılmış bir kopya iste.",
    },
    {
      q: "Salt okunur, yazamamakla aynı şey mi?",
      a: "Bu, yazamamanın nedenlerinden biridir. Bir form ayrıca etkileşimsiz olduğu ya da yanlış görüntüleyicide açıldığı için de yazmayı reddedebilir. Salt okunur özellikle alanların var olduğu ama bilerek devre dışı bırakıldığı anlamına gelir.",
    },
    {
      q: "Salt okunur korumasını kaldırabilir miyim?",
      a: "Form senindir ve korumayı sen ayarladıysan, yetenekli bir düzenleyicide değiştirebilirsin. Başkasınınsa, güvenliğini aşmaya çalışma — bunun yerine kilidi açılmış bir sürüm iste.",
    },
    {
      q: "İmzalanmış bir formu düzenlemek neden engelleniyor?",
      a: "Düzenlemek, formun taşıdığı dijital imzayı ya da sertifikayı geçersiz kılar, bu yüzden görüntüleyiciler onu kilitler. Bu, imzalanmış belgeleri güvenilir tutmak için amaçlanan bir davranıştır.",
    },
  ],
  related: [
    {
      label: "Bir PDF formuna neden yazamıyorum",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "PDF formu çalışmıyor mu", path: "/guides/pdf-form-not-working" },
    {
      label: "Bir PDF formu neden kaydedilmiyor",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "PDF dosyası şifreyle nasıl korunur",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
