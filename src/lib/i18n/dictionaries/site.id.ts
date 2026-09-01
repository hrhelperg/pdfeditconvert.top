import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Indonesian site chrome (id-ID).
 *
 * Navigation labels use the short imperative form that matches the tool
 * button itself ("Kompres", "Gabung"), not a literal rendering of the
 * English list. The footer links point at canonical route ids, resolved per
 * locale by the route map, so the whole footer graph stays inside id.
 * Terminology policy: docs/localization/id-terminology.md.
 */
export const SITE_ID: SiteDictionary = {
  skipToContent: "Lompat ke konten",

  header: {
    homeAriaLabel: "Beranda PDF Editor",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Konversi" },
      { id: "compress-pdf", label: "Kompres" },
      { id: "merge-pdf", label: "Gabung" },
      { id: "sign-pdf", label: "Tanda Tangan" },
      { id: "guides", label: "Panduan" },
    ],
    ctaLabel: "Unduh aplikasinya",
    ctaAriaLabel: "Unduh PDF Editor di App Store",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
  },

  switcher: {
    label: "Bahasa",
    ariaLabel: "Ganti bahasa",
    currentLabel: "Bahasa saat ini",
  },

  footer: {
    tagline:
      "Solusi PDF All-in-One untuk Kerja, Belajar & Kehidupan Sehari-hari. Edit, konversi, tanda tangani, dan pindai PDF dari ponsel Anda.",
    appEyebrow: "Aplikasi PDF Editor",
    appHeading: "Bawa PDF Editor ke mana saja.",
    appSub: "Gratis di iPhone dan Android. Tidak perlu akun.",
    columnProduct: "Produk",
    columnLearn: "Pelajari",
    columnCompany: "Perusahaan",
    columnTools: "Alat gratis",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Konverter PDF" },
      { id: "compress-pdf", label: "Kompres PDF" },
      { id: "sign-pdf", label: "Tanda Tangan PDF" },
      { id: "scan-to-pdf", label: "Pindai ke PDF" },
    ],
    learn: [
      { id: "guides", label: "Semua panduan" },
      { id: "pdf-forms", label: "Formulir PDF" },
      { id: "guides/how-to-fill-out-a-pdf-form", label: "Mengisi formulir PDF" },
      { id: "guides/how-to-convert-pdf-to-word", label: "Mengonversi PDF ke Word" },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Mengecilkan ukuran PDF untuk email",
      },
      { id: "guides/how-to-edit-pdf-on-iphone", label: "Mengedit PDF di iPhone" },
      { id: "guides/how-to-merge-pdf-files", label: "Menggabungkan file PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF vs DOCX" },
    ],
    company: [
      { id: "contact", label: "Kontak" },
      { id: "privacy-policy", label: "Privasi" },
      { id: "terms", label: "Ketentuan" },
    ],
    tools: [
      { id: "pdf-tools", label: "Semua alat gratis" },
      { id: "image-to-pdf", label: "Gambar ke PDF" },
      { id: "merge-pdf", label: "Gabungkan PDF" },
      { id: "split-pdf", label: "Bagi PDF" },
      { id: "rotate-pdf", label: "Putar PDF" },
      { id: "pdf-to-images", label: "PDF ke gambar" },
      { id: "add-watermark-to-pdf", label: "Tambah watermark" },
    ],
    sitemapLabel: "Peta situs",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Hak cipta dilindungi.",
  },

  store: {
    appStoreAria: "Unduh PDF Editor di App Store",
    googlePlayAria: "Dapatkan PDF Editor di Google Play",
    availability: "Tersedia di iOS dan Android · Coba gratis",
  },

  breadcrumbs: {
    home: "Beranda",
    guides: "Panduan",
    compare: "Perbandingan",
    useCases: "Kasus penggunaan",
    tools: "Alat",
    ariaLabel: "Navigasi breadcrumb",
  },

  sections: {
    faqHeading: "Pertanyaan yang sering diajukan",
    relatedGuides: "Panduan terkait",
    readTheGuide: "Baca panduannya →",
    seeAllGuides: "Lihat semua panduan",
    browseEveryGuide: "Jelajahi semua panduan PDF",
    allFreeTools: "Semua alat PDF gratis di browser",
    relatedTools: "Alat PDF terkait",
    stepByStep: "Langkah demi langkah",
    tips: "Tips",
    lastUpdated: "Terakhir diperbarui",
    whenToPick: "Kapan memilih {label}",
    workflowsHeading: "Alur kerja yang layak dicoba",
    tryOnPhone: "Coba di ponsel Anda",
    takeWithYou: "Bawa PDF Editor ke mana saja.",
    freeOnBoth: "Gratis di iOS dan Android.",
    appEyebrow: "Aplikasi PDF Editor",
    editOnPhoneHeading: "Edit PDF di ponsel Anda.",
    trust: [
      "File diproses secara lokal di browser Anda",
      "Tanpa unggah, tanpa akun, tanpa watermark",
      "Gratis: berfungsi di ponsel dan desktop",
    ],
    clusterHeading: {
      one: "Satu-satunya panduan dalam kelompok ini",
      other: "Semua {count} panduan dalam kelompok ini",
    },
    toolGuidesHeading: {
      one: "Panduan {label}",
      other: "Panduan {label}",
    },
    goToHub: "Buka {label} →",
    guideTopicsNav: "Topik panduan",
  },
};
