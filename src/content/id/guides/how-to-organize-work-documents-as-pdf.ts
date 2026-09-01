import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Cara Merapikan Dokumen Kerja sebagai PDF (Folder, Nama, Versi)",
  description:
    "Konvensi penamaan dan folder yang praktis untuk PDF kerja, mulai dari penawaran, brief, hasil kerja, hingga arsip, yang menjaga kekacauan versi tetap terkendali dan membuat siapa pun bisa menemukan apa saja dengan cepat.",
  updated: "2026-05-29",
  intro: [
    "Masalah dengan PDF kerja biasanya bukan PDF-nya sendiri. Ini soal jejaknya: tiga puluh file dengan nama mirip di folder unduhan, versi yang tidak sinkron, versi 'final' yang ternyata bukan final, draf yang terlihat identik dengan hasil kerja. Formatnya baik-baik saja; konvensi di sekitar formatnya yang berantakan.",
    "Konvensi yang berhasil itu singkat — struktur folder, pola penamaan, dan kebiasaan soal ke mana versi final pergi. Begitu sudah diterapkan, mencari 'kontrak yang kami kirim di bulan Maret' hanya butuh sepuluh detik, bukan sepuluh menit, dan konflik versi sebagian besar berhenti terjadi.",
    "Panduan ini menjelaskan konvensi yang sudah kami lihat diadopsi dan dipertahankan tim kecil. Ini bukan satu-satunya konvensi yang berhasil; ini konvensi yang cukup tangguh untuk bertahan sepanjang kuartal yang sibuk tanpa berantakan.",
  ],
  steps: [
    {
      title: "Tentukan tata letak folder tingkat atas sekali saja",
      body: "Clients/NamaKontrak/, Internal/, Templates/, Archive/. Empat folder sudah mencakup sebagian besarnya. Jangan bersarang lebih dari dua tingkat di awal — kedalaman malah membuat Anda tersesat.",
    },
    {
      title: "Standarkan pola nama file",
      body: "NamaKlien_JenisDokumen_vN_YYYY-MM-DD.pdf terbaca bersih di aplikasi pengelola file mana pun. Tanggal di akhir agar file terurut secara kronologis; versi di tengah agar Anda bisa langsung melihat yang terbaru sekilas.",
    },
    {
      title: "Pisahkan /drafts dan /final di dalam setiap proyek",
      body: "Draf masuk ke subfolder /drafts proyeknya; versi final diganti nama menjadi FINAL dan dipindah ke /final atau /deliverables. Folder /final seharusnya hanya berisi versi yang sudah dikirim.",
    },
    {
      title: "Gunakan Gabung PDF untuk menyatukan saat serah terima",
      body: "Kalau sebuah hasil kerja sebenarnya tiga PDF (proposal + ketentuan + harga), gabungkan menjadi satu untuk dikirim dan simpan file sumbernya di folder proyek. Penerima mendapat satu file yang bersih.",
    },
    {
      title: "Kompres dan ganti nama hanya saat pengiriman",
      body: "Kompres PDF untuk salinan yang keluar; simpan sumber yang belum dikompres. File yang dikirim masuk ke /final/, sumbernya tetap di /drafts/. Keduanya artefak yang berbeda.",
    },
    {
      title: "Arsipkan proyek yang selesai secara berkala",
      body: "Pindahkan proyek yang sudah tutup ke /Archive/ setiap kuartal. Folder aktif tetap mudah dipindai; arsipnya bisa dicari saat Anda butuh menemukan sesuatu nanti.",
    },
  ],
  tips: [
    "Hindari spasi di nama file kalau bisa — garis bawah atau tanda hubung lebih mudah dipakai di URL, teruskan email, dan perintah shell.",
    "Format tanggal YYYY-MM-DD terurut secara kronologis di alat mana pun. 5/29/26 tidak.",
    "Jangan masukkan nomor versi ke nama file FINAL. FINAL ya FINAL. Kalau ada yang berubah setelahnya, itu FINAL-2 — dan itu tanda prosesnya sudah bermasalah.",
    "Jangan takut mengganti nama. Nama file yang jelas sepadan dengan semenit kerja, terutama sebelum dikirim.",
    "Simpan file indeks satu baris (README.txt) di proyek besar yang mencantumkan isi tiap subfolder. Membantu diri Anda di masa depan yang kembali enam bulan kemudian.",
  ],
  mobileNote:
    "Di HP, merapikan jadi lebih sulit karena mengedit nama file itu merepotkan. Aplikasi PDF Editor membiarkan Anda mengganti nama, memberi label, dan menyimpan PDF dari mobile sehingga file yang tiba di HP tidak menumpuk tanpa nama di folder Downloads.",
  faq: [
    {
      q: "Apa format nama file terbaik?",
      a: "NamaKlien_JenisDokumen_vN_YYYY-MM-DD.pdf. Tanggal di akhir terurut secara kronologis; versi di tengah membedakan draf; nama klien dan jenis dokumen membuat file menjelaskan dirinya sendiri.",
    },
    {
      q: "Haruskah saya memakai folder atau tag?",
      a: "Folder. Sistem tag memang ada tapi terpecah-pecah antarperangkat dan aplikasi. Folder bersifat universal.",
    },
    {
      q: "Apa yang harus saya lakukan dengan draf lama?",
      a: "Simpan di /drafts/ di dalam folder proyek sampai proyeknya ditutup, lalu arsipkan semuanya. Jangan dihapus — Anda mungkin perlu memulihkan sebuah angka dari draf sebelumnya.",
    },
    {
      q: "Apakah file FINAL butuh nomor versi?",
      a: "Tidak. Begitu sebuah file jadi FINAL, itulah versi resminya. Kalau ada yang berubah setelahnya, Anda sedang memasuki percakapan baru yang mendapat FINAL-nya sendiri.",
    },
    {
      q: "Bagaimana saya menangani file dari klien dengan penamaan yang tidak konsisten?",
      a: "Ganti nama saat diterima agar cocok dengan konvensi Anda. Semenit yang dihabiskan untuk mengganti nama menghemat waktu yang akan Anda kehilangan saat mencari nanti.",
    },
  ],
  related: [
    { label: "Alat PDF — daftar lengkap alat di browser", path: "/pdf-tools" },
    { label: "Gabung PDF — satukan hasil kerja saat serah terima", path: "/merge-pdf" },
    { label: "Cara merapikan file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Alur kerja PDF untuk bisnis kecil", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Alat PDF — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
