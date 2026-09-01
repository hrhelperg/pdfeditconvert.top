import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Masalah Font pada Formulir PDF (Ukuran Otomatis, Terpotong, Tergantikan)",
  description:
    "Teks kolom terlalu besar, terlalu kecil, atau mengecil otomatis saat Anda mengetik? Keanehan font yang khas untuk kolom formulir, ukuran otomatis, penggantian font, pemotongan, dan cara mendapatkan jawaban yang bersih dan terbaca.",
  updated: "2026-06-01",
  intro: [
    "Kolom formulir punya perilaku font sendiri, terpisah dari bagian PDF lainnya, dan ini menimbulkan sederet masalah pusing yang spesifik. Teks yang mengecil saat Anda mengetik lebih banyak, jawaban yang terlihat besar di satu kolom dan kecil di kolom berikutnya, karakter yang terpotong di bagian atas atau bawah kolom, atau font yang muncul berbeda dari label formulirnya. Ini adalah keanehan font yang khas untuk kolom formulir, bukan masalah font PDF secara umum, dan sebagian besar berkaitan dengan cara kolomnya disiapkan.",
    "Penyebab terbesarnya adalah ukuran otomatis. Banyak kolom dikonfigurasi untuk mengecilkan teks secara otomatis agar jawaban yang lebih panjang tetap muat, itu sebabnya teks Anda semakin kecil semakin banyak Anda mengetik. Masalah lain muncul karena font kolomnya tidak tersemat, sehingga tergantikan di sebagian aplikasi pembaca, atau kolom yang terlalu pendek untuk ukuran fontnya, memotong karakternya.",
    "Panduan ini membahas masalah font yang khas untuk kolom formulir, cara mengenali masing-masing, dan apa yang perlu diubah untuk mendapatkan jawaban yang bersih dan terbaca secara konsisten. Untuk masalah font di seluruh dokumen, bukan hanya kolomnya, panduan font PDF secara umum membahasnya lebih luas.",
  ],
  steps: [
    {
      title: "Kenali pengecilan ukuran otomatis",
      body: "Jika teks kolom mengecil saat Anda menambahkan karakter, berarti kolomnya memakai ukuran otomatis agar semuanya muat. Ini memang disengaja, tapi bisa membuat jawaban yang panjang jadi sangat kecil. Jaga jawaban tetap ringkas, atau jika Anda mengendalikan formulirnya, tetapkan ukuran yang tetap.",
    },
    {
      title: "Perbaiki ukuran yang tidak konsisten antar kolom",
      body: "Jawaban yang terlihat besar di satu kolom dan kecil di kolom lain biasanya berarti setiap kolom punya ukuran font yang berbeda. Jika itu formulir Anda, standarkan ukuran font kolomnya agar setiap jawaban sama.",
    },
    {
      title: "Atasi karakter yang terpotong",
      body: "Jika huruf terpotong di atas atau bawah, berarti kolomnya terlalu pendek untuk ukuran fontnya. Perbesar kolomnya atau perkecil ukuran fontnya (pada formulir yang Anda kendalikan), atau terima ukuran yang lebih kecil saat mengisi formulir milik orang lain.",
    },
    {
      title: "Tangani font yang tergantikan",
      body: "Jika teks kolom muncul dalam font yang berbeda dari yang diharapkan, berarti font yang dimaksudkan tidak tersemat dan aplikasi pembaca menggantinya. Menyematkan font kolom saat membangun formulirnya menjaga font tetap konsisten di berbagai aplikasi pembaca.",
    },
    {
      title: "Kunci untuk mengunci tampilannya",
      body: "Setelah jawaban Anda terlihat benar, kunci formulirnya. Mengunci mengunci teks kolom ke halaman sehingga ukuran dan fontnya tampil sama di mana saja, apa pun aplikasi pembaca penerimanya.",
    },
  ],
  tips: [
    "Ukuran otomatis biasanya alasan teks kolom mengecil saat Anda mengetik, jawaban yang ringkas tetap terbaca, atau tetapkan ukuran yang tetap pada formulir yang Anda buat.",
    "Jika Anda merancang formulirnya, standarkan ukuran font kolom agar jawabannya tidak keluar campur aduk besar-kecil.",
    "Karakter yang terpotong berarti kolomnya terlalu pendek untuk fontnya; ubah ukuran kolom atau fontnya pada formulir yang Anda kendalikan.",
    "Kunci sebelum mengirim agar font dan ukuran kolom Anda tidak bisa bergeser di layar penerima.",
    "Tampilan kolom bisa berbeda antar aplikasi pembaca, jadi hasil yang tetap, tersemat, dan dikunci adalah yang paling konsisten.",
  ],
  mobileNote:
    "Di HP, aplikasi PDF Editor membiarkan Anda menempatkan teks pada formulir non-interaktif dengan ukuran pilihan Anda sendiri, sama sekali menghindari ukuran otomatis pada kolom, dan mengunci hasilnya sehingga font dan ukurannya terkunci. Untuk kolom interaktif, menjaga jawaban tetap ringkas menghindari pengecilan otomatis yang membuat entri panjang sulit dibaca.",
  faq: [
    {
      q: "Kenapa teks formulir saya mengecil saat saya mengetik?",
      a: "Kolomnya memakai ukuran otomatis, yang mengecilkan teks agar jawaban yang lebih panjang tetap muat. Ini memang perilaku yang disengaja. Jaga jawaban tetap ringkas agar tetap terbaca, atau tetapkan ukuran font yang tetap jika Anda mengendalikan formulirnya.",
    },
    {
      q: "Kenapa jawaban saya muncul dalam ukuran yang berbeda-beda?",
      a: "Setiap kolom kemungkinan punya ukuran fontnya sendiri. Pada formulir yang Anda buat, standarkan ukuran font kolomnya agar setiap jawaban sama. Pada formulir milik orang lain, ukurannya sudah tertanam di kolomnya.",
    },
    {
      q: "Kenapa karakter di kolom formulir saya terpotong?",
      a: "Kolomnya terlalu pendek untuk ukuran fontnya, memotong hurufnya. Perbesar kolomnya atau perkecil ukuran fontnya pada formulir yang Anda kendalikan, atau pakai ukuran yang lebih kecil saat mengisi formulir milik orang lain.",
    },
    {
      q: "Kenapa font kolomnya terlihat berbeda dari labelnya?",
      a: "Font yang dimaksudkan untuk kolomnya tidak tersemat, jadi aplikasi pembaca Anda menggantinya. Menyematkan font kolom saat membuat formulirnya menjaga font tetap konsisten di berbagai aplikasi pembaca.",
    },
    {
      q: "Apa bedanya ini dari masalah font PDF secara umum?",
      a: "Ini membahas font di dalam kolom formulir, ukuran otomatis, ukuran per kolom, pemotongan. Panduan font PDF secara umum membahas font yang hilang atau tergantikan di seluruh dokumen.",
    },
  ],
  related: [
    { label: "Cara mengatasi masalah font PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Masalah format pada formulir PDF", path: "/guides/pdf-form-formatting-issues" },
    { label: "Praktik terbaik formulir PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Perbaiki error formulir PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
