import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Cara Membuat File PDF Siap Kirim untuk Klien (Rapi, Sesuai Merek)",
  description:
    "Yang membedakan PDF internal dari PDF yang siap dikirim ke klien: halaman sampul, penomoran halaman, identitas merek, ukuran file, nama file. Sentuhan akhir cepat yang membuat dokumen terasa selesai.",
  updated: "2026-05-29",
  intro: [
    "Ada perbedaan antara PDF kerja dan PDF yang siap dikirim ke klien, dan perbedaannya sebagian besar terletak pada detail kecil. Versi internal punya sampul placeholder, tanpa nomor halaman, ukuran file 14 MB, dan nama file seperti 'final-final-v2.pdf'. Versi siap klien punya sampul bersih, tipografi sesuai merek, halaman bernomor, ukuran file 2 MB, dan nama yang terkesan profesional. Keduanya menyampaikan informasi yang sama; hanya satu yang terasa selesai.",
    "Menghasilkan versi siap klien tidak membutuhkan desainer. Ini hanya rangkaian langkah standar yang singkat: rapikan sumbernya, ekspor ulang dengan bersih, poles PDF-nya, beri label yang sesuai, kompres secukupnya, ganti nama dengan sengaja. Dikerjakan berurutan, pemolesan ini hanya butuh beberapa menit per dokumen.",
    "Panduan ini menjelaskan rangkaian langkah tersebut. Tak satu pun langkah ini butuh alat mahal; sebagian besar bisa dikerjakan di tab browser tanpa mengunggah apa pun yang sensitif.",
  ],
  steps: [
    {
      title: "Mulai dari sumber yang dirancang dengan benar",
      body: "Jika dokumen sumber terlihat seperti placeholder, PDF-nya pun akan begitu. Perbaiki margin, pilihan font, dan hierarki judul di Word, Pages, atau Docs sebelum mengekspor. PDF tidak bisa menambahkan kerapian yang tidak ada di sumbernya.",
    },
    {
      title: "Tambahkan halaman sampul yang menyebutkan nama hasil kerja",
      body: "Nama klien, nama proyek, judul dokumen, tanggal, nama bisnis Anda. Satu halaman. Menambahkan konteks sehingga dokumen di dalamnya tidak perlu mengulanginya di setiap header.",
    },
    {
      title: "Sertakan nomor halaman mulai dari halaman kedua",
      body: "Format X dari Y jelas tanpa ambigu dan memastikan kelengkapan — pembaca tahu tidak ada yang hilang. Lewati penomoran pada sampul; mulai dari halaman 2.",
    },
    {
      title: "Terapkan identitas merek yang konsisten (tipografi, warna, logo)",
      body: "Logo kecil dan sistem tipografi yang konsisten menunjukkan kesungguhan. Identitas merek sebaiknya terasa halus, bukan mencolok. Jika klien punya buku panduan merek, ikuti itu.",
    },
    {
      title: "Ekspor ulang dengan font tersemat",
      body: "Font tersemat berarti dokumen terlihat identik bagi klien seperti yang Anda lihat. Ekspor ulang dari sumber dengan opsi 'sematkan semua font' diaktifkan.",
    },
    {
      title: "Kompres, ganti nama, dan periksa sebelum mengirim",
      body: "Kompres PDF agar sesuai batas ukuran email pada umumnya. Ganti nama menjadi NamaKlien_JenisDokumen_YYYY-MM-DD.pdf. Buka file final sekali dan baca halaman pertama serta terakhir sebelum mengirim — kesalahan ketik lebih mudah terlihat saat dibaca ulang.",
    },
  ],
  tips: [
    "Hindari latar belakang stok dan halaman judul yang terlihat seperti tangkapan layar. Sampul bersih berbasis tipografi bertahan lebih baik dibanding sampul yang dirancang berlebihan.",
    "Jangan pasang watermark 'DRAFT' pada versi final. Justru ketiadaan watermark itulah yang menandakan dokumen ini sudah final.",
    "Tabel yang mengalir ke beberapa halaman perlu mengulang baris headernya. Di Word, opsi 'ulangi baris header' hanya satu klik dan mencegah masalah keterbacaan saat dicetak.",
    "Grafik yang diekspor sebagai vektor (PDF) tetap tajam. Grafik yang ditempel sebagai gambar jadi buram saat di-zoom tinggi — perbaiki dari sumbernya.",
    "Jika Anda memakai ulang template yang sama untuk klien berbeda, perbarui metadatanya setiap kali, supaya judul dokumen tidak masih tertulis 'Proposal Acme' padahal dikirim ke Beta Co.",
  ],
  mobileNote:
    "Klien sering membuka hasil kerja lewat HP terlebih dahulu. Aplikasi PDF Editor memungkinkan Anda melihat pratinjau PDF final di HP seperti yang akan dilihat klien, sehingga sampul yang terlihat bagus di monitor 27 inci tapi sesak di HP bisa terdeteksi sebelum dikirim.",
  faq: [
    {
      q: "Apa tanda paling jelas bahwa sebuah PDF belum siap dikirim ke klien?",
      a: "Nama file yang belum diedit. 'final_v3_revised.pdf' memberi tahu klien bahwa ini salah satu dari banyak versi. Nama file yang jelas dan bertanggal menandakan hasil kerja yang sudah selesai.",
    },
    {
      q: "Apakah saya perlu logo di setiap halaman?",
      a: "Tidak. Logo di sampul dan penanda halus di footer sudah cukup. Logo besar di setiap halaman terasa seperti presentasi penjualan, bukan dokumen.",
    },
    {
      q: "Perlukah saya menyertakan daftar isi?",
      a: "Untuk dokumen di atas sepuluh halaman, ya. Ini sentuhan kecil yang membuat dokumen terasa selesai dan membantu pembaca menavigasinya.",
    },
    {
      q: "Format penomoran halaman apa yang terbaik?",
      a: "X dari Y. Angka Y memastikan kelengkapan. X saja cukup untuk dokumen pendek, tapi kehilangan sinyal keutuhan itu.",
    },
    {
      q: "Apakah sepadan merancang sampul khusus?",
      a: "Untuk hasil kerja yang berulang, ya — template bermerek membayar dirinya sendiri lewat banyak dokumen. Untuk dokumen satu kali, sampul tipografi yang bersih sudah cukup.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Word ke PDF — ekspor bersih untuk distribusi", path: "/word-to-pdf" },
    { label: "Cara membagikan PDF dengan klien", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Cara menyiapkan PDF untuk keperluan bisnis", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
