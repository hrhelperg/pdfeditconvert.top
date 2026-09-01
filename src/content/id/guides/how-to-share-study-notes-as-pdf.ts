import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Cara Membagikan Catatan Belajar sebagai PDF (Grup, Obrolan Grup, Cloud)",
  description:
    "Bagikan catatan dengan kelompok belajar tanpa kehilangan format atau kendali versi. Kebiasaan PDF yang menjaga belajar bersama agar tidak berubah jadi kekacauan tangkapan layar.",
  updated: "2026-05-29",
  intro: [
    "Membagikan catatan dengan kelompok belajar seharusnya mudah, tapi kenyataannya sering berubah jadi utas obrolan berisi tiga puluh tangkapan layar dan tiga versi berbeda dari kuliah yang sama. Menjelang malam sebelum ujian, tidak ada yang bisa menemukan versi dengan contoh soal yang terus dirujuk semua orang, dan ada yang mengirim foto catatan pinggir tulisan tangannya yang tidak bisa dibaca siapa pun.",
    "PDF menyelesaikan sebagian besar masalah ini. PDF mengunci formatnya, berfungsi di perangkat apa pun, muncul di menu bagikan pada semua platform, dan tidak terikat pada satu akun cloud saja. Beberapa kebiasaan berbagi — beri nama file secara konsisten, buat versi dengan sengaja, pilih saluran yang tepat — menjaga belajar bersama tetap teratur tanpa ada yang perlu mengelolanya seperti sebuah proyek.",
    "Panduan ini menjelaskan kebiasaan-kebiasaan itu. Tak satu pun berupa alat; semuanya konvensi yang Anda dan kelompok Anda sepakati sekali saja. Setelah itu, semuanya berjalan dengan sendirinya.",
  ],
  steps: [
    {
      title: "Sepakati dulu saluran berbagi",
      body: "Pilih satu tempat — obrolan grup, folder cloud bersama, Discord khusus — dan konsisten memakainya. Catatan yang tersebar di dua saluran sekaligus jadi sulit ditemukan. Salurannya sendiri tidak sepenting konsistensinya.",
    },
    {
      title: "Selalu bagikan sebagai PDF, jangan pernah sebagai foto dokumen",
      body: "Tangkapan layar dari sebuah PDF lebih buruk dibanding PDF-nya sendiri. Kirim filenya langsung. HP membuat ini mudah — menu bagikan → file, bukan tangkapan layar.",
    },
    {
      title: "Beri nama file untuk kelompok, bukan untuk diri sendiri",
      body: "KodeMataKuliah_Minggu3_Catatan_Kuliah_NamaAnda.pdf. Kelompok bisa melihat siapa membagikan apa dan minggu keberapa. 'Catatan.pdf' tidak berguna di antara lima belas lampiran yang sama-sama bernama Catatan.pdf.",
    },
    {
      title: "Beri watermark pada catatan draf",
      body: "Jika catatan Anda masih tahap awal dan kemungkinan akan direvisi, gunakan Tambah Watermark ke PDF untuk mencap DRAFT atau WIP di setiap halaman. Kelompok jadi tahu untuk menunggu revisinya.",
    },
    {
      title: "Kompres sebelum membagikan",
      body: "Kompres PDF mengecilkan ukuran file untuk platform obrolan dengan batas lampiran. Menghemat waktu unggah di jaringan seluler dan menghindari penolakan 'file terlalu besar'.",
    },
    {
      title: "Lacak versi lewat nama file, bukan lewat obrolan",
      body: "Minggu3_Catatan_Kuliah_v2.pdf jelas tanpa ambigu. 'Aku sudah revisi catatannya, lihat lampiran' di utas obrolan tidak. Nama filenya adalah catatan versinya.",
    },
  ],
  tips: [
    "Jangan membagikan dokumen Word ke kelompok. Tampilannya bisa berbeda di tiap perangkat, hanya bisa diedit satu orang dalam satu waktu, dan langsung terpecah jadi banyak versi. PDF mengunci semuanya.",
    "Gunakan PDF catatan tulisan tangan yang sudah melalui OCR jika memungkinkan — teks yang dapat dicari membantu kelompok menemukan topik tertentu dengan cepat.",
    "Jangan mengirim foto layar laptop. Artefak visualnya (moire, silau, resolusi rendah) justru membuat catatan lebih sulit dibaca, bukan lebih mudah.",
    "Jika kelompok Anda rutin berbagi, siapkan lebih dulu template bersama untuk PDF catatan. Halaman sampul yang konsisten membantu mengenali siapa membagikan yang mana.",
    "Hindari email untuk catatan kelompok. Utas obrolan melacak siapa sudah melihat apa; email justru menyebarkan percakapan yang sama ke banyak kotak masuk.",
  ],
  mobileNote:
    "HP menangani sebagian besar berbagi dalam kelompok — jepretan foto cepat, langsung dibagikan ke obrolan, konfirmasi cepat. Aplikasi PDF Editor menangani seluruh rangkaian pindai-gabung-kompres-ganti nama di HP, sehingga file yang muncul di obrolan grup sudah bersih, bukan sekadar tumpukan mentah dari galeri kamera.",
  faq: [
    {
      q: "Apa cara terburuk untuk membagikan catatan belajar?",
      a: "Tangkapan layar dari dokumen, atau catatan yang hanya ada di obrolan. Keduanya tidak bisa dicari dan mudah hilang begitu percakapan bergeser ke topik lain.",
    },
    {
      q: "Perlukah semua orang membagikan catatannya, atau cukup satu orang saja?",
      a: "Semua orang membagikan dengan pembagian yang jelas: minggu tertentu per orang yang sudah disepakati, atau 'aku minggu ini, kamu minggu depan'. Bergiliran mengurangi beban per orang dan menghasilkan catatan dengan sudut pandang yang lebih beragam.",
    },
    {
      q: "Di mana sebaiknya catatan resmi disimpan?",
      a: "Folder cloud bersama paling cocok untuk penyimpanan jangka panjang. Obrolan grup bagus untuk distribusi cepat; foldernya berfungsi sebagai arsip.",
    },
    {
      q: "Bagaimana cara kami membuat versi catatan?",
      a: "Cukup lewat nama file. v1, v2, v3. Saat kelompok sepakat itu versi FINAL, ganti nama dan pindahkan ke /final/. Jangan melacak versi lewat obrolan.",
    },
    {
      q: "Bagaimana jika catatannya tulisan tangan?",
      a: "Pindai ke PDF terlebih dahulu. Hasil pindaian hitam putih dari catatan tulisan tangan lebih tajam dan lebih kecil dibanding foto. Tambahkan OCR jika alat Anda mendukungnya.",
    },
  ],
  related: [
    { label: "PDF untuk Pelajar — catatan dan panduan belajar", path: "/pdf-for-students" },
    { label: "Kompres PDF — perkecil untuk batas lampiran obrolan", path: "/compress-pdf" },
    { label: "Cara merapikan materi belajar sebagai PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Cara membagikan PDF dari HP Anda", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF untuk Pelajar — catatan, sorotan, panduan belajar", path: "/pdf-for-students" },
};

export default content;
