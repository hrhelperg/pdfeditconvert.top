import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "PDF Tarama",
    h1: "Kağıdı temiz, aranabilir PDF'lere dönüştür.",
    highlight: "temiz",
    lead: "Fişleri, kimlikleri, sözleşmeleri ve çok sayfalı belgeleri taramak için telefon kameranı kullan. Otomatik kenar algılama, perspektif düzeltme ve OCR — saniyeler içinde, cihaz üzerinde.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "Belgelerin telefon fotoğrafları neden kötü görünür",
    paragraphs: [
      "Varsayılan kamerayla bir sözleşmenin fotoğrafını çekmek, tavan ışıklarıyla aşırı pozlanmış, telefonu tuttuğun açıyla çarpıtılmış ve sayfanın arkasındaki yüzeyi gösteren bir JPG üretir. Yanlış şekilde, yanlış kontrastta ve aranabilir değil. Gönderdiğin herkes gözlerini kısmak zorunda kalır.",
      "Böyle bir JPG'i bir muhasebeciye e-postayla gönder, kibarca “düzgün bir PDF” isteğiyle karşılaşırsın. Sebebi gerçek: fiş JPG'leri dizinlenemez, muhasebe yazılımlarının OCR'ından geçemez ve çoğu zaman belge yükleme doğrulayıcılarını geçemez.",
      "Bir belge tarama uygulaması fotoğrafı olması gerektiği hale getirir: dikdörtgen, kontrastı düzeltilmiş, eğikliği giderilmiş ve arkasında gizli metinle bir PDF olarak kaydedilmiş. Çok sayfalı belgeler tek bir dosya olur, kamera rulosunda dağınık on iki JPG değil.",
    ],
  },
  features: {
    heading: "Gerçek bir tarayıcı gibi tara",
    items: [
      {
        icon: "ScanLine",
        title: "Otomatik kenar algılama",
        body: "Uygulama belgenin kenarlarını otomatik bulur ve kadraj doğru olduğunda taramayı yakalar.",
      },
      {
        icon: "Maximize",
        title: "Perspektif düzeltme",
        body: "Eğik açılar düzeltilir. Sonuç doğrudan yukarıdan çekilmiş gibi görünür.",
      },
      {
        icon: "Layers",
        title: "Çok sayfalı taramalar",
        body: "Sayfaları sırayla art arda yakala. Uygulama bunları tek bir PDF'te birleştirir.",
      },
      {
        icon: "ScanText",
        title: "OCR (aranabilir metin)",
        body: "Taranan sayfaların içindeki kelimeleri tanı, böylece ortaya çıkan PDF aranabilir ve kopyalanabilir olur.",
      },
      {
        icon: "Sun",
        title: "Akıllı filtreler",
        body: "Işıklandırma sorunlarıyla başa çıkmak için renkli, siyah-beyaz ya da belgeye özel filtreler.",
      },
      {
        icon: "Tag",
        title: "Otomatik adlandırma",
        body: "Uygulama belge içeriğine göre dosya adları önerir — fişler, sözleşmeler, kimlikler.",
      },
    ],
  },
  steps: {
    heading: "Bir belge PDF olarak nasıl taranır",
    items: [
      {
        title: "Tarayıcıyı aç",
        body: "PDF Editor uygulamasının ana ekranındaki Tara kutucuğuna dokun.",
      },
      {
        title: "Belgeyi hedefle",
        body: "Telefonu sayfanın kabaca üzerinde tut. Uygulama kenarları bulur ve hazır olduğunda titreşir.",
      },
      {
        title: "Otomatik yakalamaya bırak",
        body: "Ya da manuel olarak dokun. Yakalama anındadır.",
      },
      {
        title: "Gerekirse köşeleri ayarla",
        body: "Perspektif düzeltilmeden önce algılanan kenarları inceltebilirsin.",
      },
      {
        title: "Daha fazla sayfa ekle",
        body: "Devam etmek için sayfa sayacına dokun. Uygulama bunları sırayla birleştirir.",
      },
      {
        title: "PDF olarak kaydet",
        body: "Bir dosya adı seç (ya da otomatik öneriyi kabul et) ve kaydet. OCR arka planda çalışır.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Bulunduğun yerde tarama",
    body: "Fişler masada, sözleşmeler toplantı odasında, kimlikler havaalanı check-in'inde taranır. Buradaki temel fikir, çantanda bir masaüstü tarayıcı taşımaman. Telefonundaki bir belge tarayıcı buna en yakın alternatif ve günlük iş ihtiyaçları için tamamen yeterli.",
  },
  faq: [
    {
      q: "Tarama kalitesi masaüstü bir tarayıcı kadar iyi mi?",
      a: "Günlük iş belgeleri için — fişler, sözleşmeler, kimlikler, formlar — evet. Arşivlik fotoğraf taraması ya da parlak kağıt üzerindeki ince baskılar için masaüstü bir tarayıcı hâlâ daha iyi.",
    },
    {
      q: "Çok sayfalı tarama ne kadar güvenilir?",
      a: "Çok güvenilir. Uygulama sen durana kadar yakalamaya devam eder ve kaydetmeden önce sayfaları yeniden sıralayabilir ya da silebilirsin.",
    },
    {
      q: "OCR hangi dilleri destekliyor?",
      a: "Tüm başlıca Latin alfabesi dilleri, ayrıca Kiril, Yunanca, Arapça, Çince, Japonca, Korece. Tanıma kalitesi ışıklandırmaya ve sayfa durumuna göre değişir.",
    },
    {
      q: "Kimlik ve pasaport tarayabilir miyim?",
      a: "Evet. Uygulama kaydedebileceğin ya da paylaşabileceğin temiz, eğikliği giderilmiş bir tarama üretir. Güvenlik için kimlik taramalarını korumalı bir klasörde tut ya da ortaya çıkan PDF'e şifre uygula.",
    },
    {
      q: "Çevrimdışı çalışır mı?",
      a: "Tarama ve kenar algılama cihaz üzerinde çalışır. Bazı daha az yaygın diller için OCR, modeli indirmek üzere ilk kullanımda bağlantı gerektirebilir.",
    },
  ],
  related: [
    {
      label: "Adım adım: belgeler PDF'e nasıl taranır",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Taranan PDF'i sonradan düzenle", path: "/pdf-editor" },
    {
      label: "İşletmeler için PDF",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Belgeleri doğrudan kameranla tara.",
    sub: "iOS ve Android'de ücretsiz. Taramalar cihazında kalır.",
  },
};

export default content;
