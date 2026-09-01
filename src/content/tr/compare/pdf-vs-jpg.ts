import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF veya JPG — Hangi Formatı Ne Zaman Kullanmalısın",
  description:
    "PDF mi JPG mi: ne zaman taramalı, ne zaman fotoğraf çekmelisin? Kalite, dosya boyutu, OCR ve belge iş akışına uygunluk açısından karşılaştırma.",
  intro: [
    "JPG bir fotoğraf formatıdır. PDF bir belge formatıdır. Bu basit ayrıma rağmen, insanlar düzenli olarak sözleşmelerin JPG'sini ve tek bir görselin PDF'ini gönderir — ikisi de işe yarayan ama ideal olmayan seçimlerdir.",
    "Bu yanlış kullanım, telefonların aile fotoğraflarından taranan fişlere kadar her şey için varsayılan olarak JPG kullanması, bilgisayarların ise yazdırılabilir her belge için varsayılan olarak PDF kullanmasından kaynaklanır. İnsanlar düşünmeden galerilerinde fiş JPG'leriyle ve İndirilenler'de görsel ağırlıklı PDF'lerle dolar.",
    "Bu karşılaştırma, gerçekten gönderdiğin belgeler için doğru formatı seçmene yardımcı olur: fişler, kimlikler, sözleşmeler, ekran görüntüleri, ürün fotoğrafları ve doğru cevabın belli olmadığı ara durumlar.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Çok sayfa desteği", left: "evet", right: "hayır" },
    { feature: "Aranabilir metin (OCR ile)", left: "evet", right: "hayır" },
    { feature: "Her yakınlaştırma düzeyinde net", left: "evet", right: "hayır" },
    { feature: "Fotoğraflar için küçük dosya boyutu", left: "Sınırlı", right: "evet" },
    { feature: "Her yerde görüntülenebilir", left: "evet", right: "evet" },
    { feature: "Şifre koruması", left: "evet", right: "hayır" },
    { feature: "Sonradan düzenleme", left: "evet", right: "Sınırlı" },
    { feature: "Fiş ve sözleşmeler için en iyisi", left: "evet", right: "hayır" },
    { feature: "Ürün fotoğrafları için en iyisi", left: "hayır", right: "evet" },
  ],
  whenLeft: [
    "İçerik bir belge (fiş, sözleşme, kimlik, form)",
    "Sonuç birden fazla sayfa gerektirebilir",
    "Aranabilir metin (OCR) istiyorsun",
    "Alıcı bir muhasebeci ya da kurumsal bir sistem",
    "Sonradan bir imza eklemen gerekebilir",
  ],
  whenRight: [
    "İçerik bir fotoğraf",
    "Dosya boyutu, doğruluktan daha önemli",
    "Tek görsel, birden fazla sayfaya gerek yok",
    "Görsel tercih eden mesajlaşma uygulamalarında paylaşım",
    "Sosyal medyada paylaşım",
  ],
  faq: [
    {
      q: "Bir JPG'i PDF'e dönüştürebilir miyim?",
      a: "Evet. PDF Editor (ve çoğu PDF aracı) görsel kalitesini koruyarak JPG'leri PDF'e sarar.",
    },
    {
      q: "OCR bir belgenin JPG'sinde çalışır mı?",
      a: "Önce PDF'e dönüştürüp sonra OCR çalıştırmak daha iyidir — sonuç, düzgün bir belge formatının içinde aranabilir metin olur.",
    },
    {
      q: "Muhasebeciler neden PDF'leri tercih eder?",
      a: "Muhasebe araçları PDF'leri dizinler, JPG'leri görmezden gelir. PDF fişler otomatik olarak kategorilendirilir; JPG'ler bir klasörde öylece durur.",
    },
  ],
  related: [
    { label: "PDF Dönüştürücü", path: "/pdf-converter" },
    { label: "PDF Tarama", path: "/scan-to-pdf" },
    { label: "PDF Düzenleyici", path: "/pdf-editor" },
  ],
};

export default content;
