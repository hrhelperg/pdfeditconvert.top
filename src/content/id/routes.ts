import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { ID_GUIDE_ROUTES } from "@/content/id/routes.guides";

/**
 * Indonesian route manifest — the localization manifest for id.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Indonesian URL after the `/id` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/id-terminology.md):
 *
 * - ASCII, lowercase, hyphenated, genuine Indonesian phrasing —
 *   "kompres-pdf" for "compress-pdf", never a slug identical to the
 *   English route id (enforced by tests/i18n/routeMap.test.ts's "never
 *   reuses an English slug verbatim" check — every entry below was
 *   written to fail that check by construction, not just pass it by
 *   accident).
 * - Translated section prefixes: panduan/, perbandingan/,
 *   kasus-penggunaan/.
 */
export const ID_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — Edit, Konversi, Tanda Tangani, dan Pindai PDF di HP",
    description:
      "Solusi PDF serba guna untuk kerja, belajar, dan kehidupan sehari-hari. Edit, konversi, kompres, gabungkan, tanda tangani, dan pindai PDF langsung dari HP Anda dengan PDF Editor untuk iOS dan Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "editor-pdf",
    title: "Editor PDF — Edit Teks, Gambar, dan Halaman di HP",
    description:
      "Edit PDF di iPhone atau Android: ubah teks, tambahkan gambar, urutkan ulang halaman, dan tanda tangani dokumen. Lihat betapa mudahnya editing PDF di HP dengan aplikasi PDF Editor.",
  },
  {
    id: "pdf-converter",
    slug: "konverter-pdf",
    title: "Konverter PDF — Konversi ke Word, JPG, PNG, dan Lainnya",
    description:
      "Konversi PDF ke Word, Excel, JPG, PNG, dan sebaliknya. Pelajari cara termudah melakukannya di HP dengan aplikasi PDF Editor untuk iOS dan Android.",
  },
  {
    id: "sign-pdf",
    slug: "tanda-tangan-pdf",
    title: "Tanda Tangan PDF — Tambahkan Tanda Tangan Elektronik di HP",
    description:
      "Tanda tangani PDF dari HP Anda dengan tanda tangan tulisan tangan atau nama yang diketik. Diterima di sebagian besar alur kerja. Coba aplikasi PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "pindai-ke-pdf",
    title: "Pindai ke PDF — Ubah Dokumen Kertas Jadi PDF yang Rapi",
    description:
      "Gunakan kamera HP untuk memindai dokumen, kartu identitas, dan struk menjadi PDF yang rapi dan dapat dicari. Aplikasi PDF Editor mendeteksi tepi halaman secara otomatis.",
  },
  {
    id: "pdf-security",
    slug: "keamanan-pdf",
    title: "Keamanan PDF — Lindungi dengan Kata Sandi dan Enkripsi",
    description:
      "Lindungi PDF yang sensitif dengan kata sandi dan enkripsi. Panduan praktis mengamankan dokumen di iPhone dan Android.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-untuk-bisnis",
    title: "PDF untuk Bisnis — Kontrak, Faktur, dan Alur Kerja",
    description:
      "Bagaimana tim kecil menggunakan PDF untuk kontrak, faktur, dan persetujuan. Alur kerja modern yang mengutamakan HP dengan aplikasi PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-untuk-pelajar",
    title: "PDF untuk Pelajar — Catatan, Sorotan, dan Materi Belajar",
    description:
      "Gunakan PDF untuk catatan kuliah, sorotan, dan materi belajar. Cara cerdas belajar di HP dengan aplikasi PDF Editor untuk iOS dan Android.",
  },
  {
    id: "pdf-forms",
    slug: "formulir-pdf",
    title: "Formulir PDF — Isi, Tanda Tangani, dan Kelola",
    description:
      "Pelajari cara kerja formulir PDF serta cara mengisi, menandatangani, membuat, dan memperbaikinya. Pusat informasi formulir PDF interaktif maupun non-interaktif, di komputer maupun HP.",
  },

  // Guides
  {
    id: "guides",
    slug: "panduan",
    title: "Panduan PDF — Artikel dan Tutorial Cara Pakai",
    description:
      "Tutorial PDF praktis yang mengutamakan HP: cara mengedit, mengonversi, mengompres, menggabungkan, menandatangani, dan melindungi dokumen di iPhone dan Android.",
  },

  // Compare
  {
    id: "compare/pdf-vs-docx",
    slug: "perbandingan/pdf-atau-docx",
    title: "PDF atau DOCX — Perbandingan Fitur demi Fitur",
    description:
      "Bandingkan PDF dan DOCX dari sisi kemudahan edit, akurasi tampilan, tanda tangan, keamanan, dan berbagi. Pilih format yang tepat untuk kebutuhan Anda.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "perbandingan/pdf-atau-jpg",
    title: "PDF atau JPG — Kapan Menggunakan Format Mana",
    description:
      "PDF atau JPG: kapan sebaiknya memindai, kapan sebaiknya memotret. Bandingkan kualitas, ukuran file, OCR, dan kecocokan untuk alur kerja dokumen.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "perbandingan/aplikasi-pdf-atau-alat-online",
    title: "Aplikasi PDF atau Alat PDF Online — Mana yang Lebih Baik?",
    description:
      "Aplikasi PDF native dibandingkan dengan alat berbasis browser: kecepatan, privasi, dan kemudahan akses offline.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "kasus-penggunaan/pekerja-lepas",
    title: "PDF Editor untuk Pekerja Lepas — Proposal dan Dokumen Bertanda Tangan",
    description:
      "Alur kerja favorit para pekerja lepas: proposal, kontrak bertanda tangan, dan faktur — semuanya dari HP.",
  },
  {
    id: "use-cases/remote-work",
    slug: "kasus-penggunaan/kerja-jarak-jauh",
    title: "PDF Editor untuk Kerja Jarak Jauh — Dokumen di Mana Saja",
    description:
      "Kelola dokumen saat bepergian: pindai, tanda tangani, dan bagikan PDF dari perangkat apa pun, di mana pun Anda berada.",
  },

  // Tools (browser-based, free, no upload)
  {
    id: "pdf-tools",
    slug: "alat-pdf",
    title: "Alat PDF Gratis — Berbasis Browser, Tanpa Unggah",
    description:
      "Alat PDF gratis yang berjalan sepenuhnya di browser Anda. Gabungkan, bagi, putar, tambahkan watermark, konversi gambar ke PDF dan PDF ke gambar — file Anda tidak pernah meninggalkan perangkat.",
  },
  {
    id: "compress-pdf",
    slug: "kompres-pdf",
    title: "Kompres PDF — Perkecil Ukuran File di Browser (Gratis, Tanpa Unggah)",
    description:
      "Perkecil ukuran file PDF langsung di browser dengan tingkat kompresi yang dapat disesuaikan. Gratis, tanpa daftar, tanpa unggah — file Anda tidak pernah meninggalkan perangkat.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-ke-word",
    title: "PDF ke Word — Konversi PDF ke DOCX yang Dapat Diedit di Browser",
    description:
      "Ekstrak teks dari PDF menjadi dokumen Word (.docx) yang dapat diedit, langsung di browser. Gratis, tanpa unggah — konversi teks yang jujur, bukan janji tata letak palsu.",
  },
  {
    id: "word-to-pdf",
    slug: "word-ke-pdf",
    title: "Word ke PDF — Konversi DOCX atau TXT ke PDF di Browser",
    description:
      "Ubah file Word .docx atau .txt menjadi PDF yang rapi, langsung di browser. Gratis, tanpa daftar, tanpa unggah — dokumen Anda tidak pernah meninggalkan perangkat.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "urutkan-ulang-halaman-pdf",
    title: "Urutkan Ulang Halaman PDF — di Browser (Gratis, Tanpa Unggah)",
    description:
      "Pratinjau setiap halaman dan urutkan ulang PDF dengan kontrol yang sederhana, lalu unduh file yang sudah diurutkan. Gratis, tanpa daftar, tanpa unggah — file tetap di perangkat Anda.",
  },
  {
    id: "extract-pdf-pages",
    slug: "ekstrak-halaman-pdf",
    title: "Ekstrak Halaman PDF — Simpan Halaman Pilihan sebagai PDF Baru (Gratis, Tanpa Unggah)",
    description:
      "Pilih halaman atau rentang tertentu dan unduh PDF baru yang hanya berisi halaman tersebut, langsung di browser. Gratis, tanpa daftar, tanpa unggah — file tidak pernah meninggalkan perangkat.",
  },
  {
    id: "merge-pdf",
    slug: "gabung-pdf",
    title: "Gabung PDF — Satukan File di Browser (Gratis, Tanpa Unggah)",
    description:
      "Gabungkan beberapa PDF menjadi satu file, langsung di browser. Gratis, tanpa daftar, tanpa unggah — file Anda tidak pernah meninggalkan perangkat.",
  },
  {
    id: "split-pdf",
    slug: "bagi-pdf",
    title: "Bagi PDF — Ekstrak Halaman di Browser (Gratis, Tanpa Unggah)",
    description:
      "Bagi PDF berdasarkan rentang halaman, langsung di browser. Gratis, tanpa daftar, tanpa unggah — file tetap di perangkat Anda.",
  },
  {
    id: "image-to-pdf",
    slug: "gambar-ke-pdf",
    title: "Gambar ke PDF — Konversi JPG, PNG, WebP ke PDF di Browser",
    description:
      "Gabungkan gambar JPG, PNG, dan WebP menjadi satu PDF, langsung di browser. Gratis, tanpa unggah, tanpa daftar — file tetap di perangkat Anda.",
  },
  {
    id: "rotate-pdf",
    slug: "putar-pdf",
    title: "Putar PDF — Perbaiki Orientasi Halaman di Browser",
    description:
      "Putar semua atau halaman pilihan PDF sebesar 90°, 180°, atau 270°, langsung di browser. Gratis dan privat — file tidak pernah meninggalkan perangkat.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-ke-gambar",
    title: "PDF ke Gambar — Ekspor Halaman sebagai PNG atau JPG",
    description:
      "Ubah PDF apa pun menjadi gambar PNG atau JPG, halaman demi halaman, di browser. Gratis, tanpa unggah, tanpa akun — semuanya berjalan di perangkat Anda.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "tambah-watermark-pdf",
    title: "Tambah Watermark ke PDF — Gratis, Privat, di Browser",
    description:
      "Tambahkan watermark teks ke setiap halaman PDF, langsung di browser. Gratis, tanpa unggah, tanpa daftar — file tetap di perangkat Anda.",
  },

  // Legal & meta
  {
    id: "privacy-policy",
    slug: "kebijakan-privasi",
    title: "Kebijakan Privasi",
    description:
      "Cara pdfeditconvert.top dan hrhelperg s.r.o. menangani data Anda.",
  },
  {
    id: "terms",
    slug: "syarat-ketentuan",
    title: "Syarat dan Ketentuan",
    description: "Ketentuan yang mengatur penggunaan pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "kontak",
    title: "Kontak — PDF Editor dari hrhelperg s.r.o.",
    description:
      "Hubungi tim di balik PDF Editor. Email: info@hrhelperg.com.",
  },

  ...ID_GUIDE_ROUTES,
];
