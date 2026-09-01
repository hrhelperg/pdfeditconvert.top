import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Cara Mengonversi Catatan Kuliah ke PDF (Word, Foto, Slide)",
  description:
    "Catatan kuliah datang dalam berbagai format: dokumen Word, slide presentasi, tangkapan layar, foto papan tulis. Cara mengubah masing-masing menjadi satu PDF yang terbaca tanpa kehilangan strukturnya.",
  updated: "2026-05-29",
  intro: [
    "Menjelang akhir minggu, catatan kuliah dari satu kelas saja bisa ada dalam lima format berbeda: dokumen Word yang Anda ketik selama kuliah, PowerPoint yang dibagikan dosen, foto papan tulis, tangkapan layar dari rekaman video, dan beberapa halaman tulisan tangan dari saat baterai laptop Anda habis.",
    "Semua itu bisa — dan sebaiknya — berakhir dalam satu PDF per topik atau per minggu. PDF menangani hampir semua format dengan cukup baik, bisa dibaca di perangkat apa pun, dan tidak mudah hilang seperti file yang berserakan. Triknya adalah menghasilkan PDF tanpa kehilangan struktur dari masing-masing sumbernya.",
    "Panduan ini menjelaskan jalur konversi untuk tiap format, lalu strategi penggabungan yang menghasilkan satu file yang koheren. Tujuannya adalah materi belajar yang benar-benar bisa Anda pakai saat ujian.",
  ],
  steps: [
    {
      title: "Konversikan catatan Word dengan Word ke PDF",
      body: "Catatan yang diketik di dokumen Word → Word ke PDF di browser Anda. Mempertahankan judul, format, dan tangkapan layar apa pun yang tersemat. Ekspor pada ukuran penuh dokumen; kompres nanti belakangan.",
    },
    {
      title: "Ekspor dek slide sebagai PDF",
      body: "PowerPoint dan Keynote bisa langsung diekspor ke PDF. Gunakan menu ekspor, bukan tangkapan layar. Versi PDF mempertahankan teks yang bisa dipilih dan tetap tajam di tingkat zoom berapa pun.",
    },
    {
      title: "Konversikan foto dan tangkapan layar dengan Gambar ke PDF",
      body: "Foto papan tulis, tangkapan layar dari rekaman → Gambar ke PDF menggabungkannya menjadi satu PDF. Tentukan urutannya sebelum mengimpor; mengurutkan ulang setelahnya lebih merepotkan.",
    },
    {
      title: "Pindai halaman tulisan tangan",
      body: "Pindai ke PDF di HP Anda dengan skala abu-abu dan deteksi tepi menghasilkan pindaian multihalaman yang bersih. Lebih tajam dan lebih kecil dibanding foto asal jepret.",
    },
    {
      title: "Gabungkan menjadi satu PDF per topik",
      body: "Gabungkan PDF menyatukan semua format menjadi satu file yang tersusun rapi. Urutan itu penting: kronologi hari kuliah, atau struktur logis (slide pembuka → catatan kuliah → foto papan tulis → rangkuman). Pilih satu dan konsisten memakainya.",
    },
    {
      title: "Tambahkan halaman sampul dan daftar isi",
      body: "Sampul yang diketik (mata kuliah, minggu, topik) membuat file itu menjelaskan dirinya sendiri enam bulan kemudian. Untuk PDF gabungan yang panjang (lebih dari 30 halaman), sertakan daftar isi satu halaman.",
    },
  ],
  tips: [
    "Hindari mengambil tangkapan layar dari dek slide. Gunakan fitur ekspor PDF dari dek itu — lebih tajam dan teksnya tetap bisa dipilih untuk pencarian.",
    "Foto papan tulis dari depan lurus, bukan dari sudut miring. Koreksi otomatis bisa memperbaiki kemiringan sedang, tapi foto yang lurus sejak awal selalu lebih bersih.",
    "Jika rekaman punya momen-momen kunci, ambil tangkapan layar dari bingkai spesifik itu, bukan seluruh video. PDF-nya jadi tetap mudah dikelola.",
    "Jangan menggabungkan lintas minggu. Satu PDF per minggu menjaga file tetap mudah dinavigasi; satu PDF untuk satu semester penuh justru sulit dibaca.",
    "Kompres PDF gabungan final hanya setelah semester berakhir. Selama semester berjalan, simpan salinan yang mudah dibaca untuk belajar aktif.",
  ],
  mobileNote:
    "Separuh dari proses konversi catatan kuliah terjadi di HP — memotret papan tulis, memindai halaman tulisan tangan, mengambil tangkapan layar slide. Aplikasi PDF Editor menangani seluruh rangkaian konversi dan penggabungan ini di HP, menghasilkan PDF mingguan yang bersih bahkan sebelum file itu pernah meninggalkan HP.",
  faq: [
    {
      q: "Perlukah saya menyimpan catatan dalam format aslinya atau mengonversinya?",
      a: "Keduanya. Simpan file asli yang bisa diedit untuk revisi; buat salinan PDF per topik untuk belajar. PDF tidak menggantikan sumbernya — PDF adalah materi belajar tersendiri.",
    },
    {
      q: "Apa cara terbaik untuk menggabungkan file?",
      a: "Gabungkan PDF di browser Anda. Tentukan urutannya sebelum digabungkan; mengurutkan ulang setelahnya secara teknis bisa dilakukan, tapi lebih lambat.",
    },
    {
      q: "Perlukah saya menjalankan OCR pada hasil pindaian tulisan tangan?",
      a: "Jika alat Anda menyediakannya, ya — catatan tulisan tangan yang dapat dicari lebih berguna saat ujian. OCR pada tulisan tangan tidak sempurna; anggap teks yang bisa dicari itu sebagai perkiraan saja.",
    },
    {
      q: "Seberapa besar seharusnya PDF catatan mingguan?",
      a: "Sebesar apa pun yang dihasilkan secara alami dari kegiatan satu minggu. Kompres di akhir semester untuk diarsipkan; selama semester berjalan, utamakan keterbacaan dibanding ukuran.",
    },
    {
      q: "Bisakah saya melakukan semua ini dari HP?",
      a: "Bisa. Aplikasi PDF Editor menangani setiap format dan menggabungkannya langsung di perangkat. Berguna saat Anda tidak ingin catatan menunggu waktu di laptop.",
    },
  ],
  related: [
    { label: "PDF Converter — konversi Word, JPG, PNG", path: "/pdf-converter" },
    { label: "Gambar ke PDF — foto papan tulis dan tangkapan layar", path: "/image-to-pdf" },
    { label: "Cara memindai catatan tulisan tangan ke PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Cara merapikan materi belajar sebagai PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG dan sebaliknya", path: "/pdf-converter" },
};

export default content;
