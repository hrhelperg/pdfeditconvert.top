import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Cara Mengatasi Error Saat Mengunggah PDF (Terlalu Besar, Ditolak, Macet)",
  description:
    "Portal menolak PDF karena beberapa alasan: ukuran file, jumlah halaman, format yang terlalu ketat, atau proses unggah yang tidak stabil. Cara mengenali penyebabnya dan membuat file diterima di percobaan berikutnya.",
  updated: "2026-05-29",
  intro: [
    "Portal unggahan lebih ketat daripada email. Banyak yang menolak apa pun di atas 5 MB, sebagian di atas 2 MB, sebagian menolak file multihalaman, dan yang lain diam-diam gagal pada apa pun yang tidak benar-benar sesuai PDF/A. Pesan error yang mereka tampilkan jarang spesifik — 'file terlalu besar', 'format tidak valid', 'unggah gagal' — dan sebagian besar berarti sesuatu yang berbeda dari yang tertulis.",
    "Penyebab sebenarnya biasanya salah satu dari empat hal: file-nya melebihi batas portal, format internal file-nya tidak standar, koneksi Anda gagal di tengah proses unggah, atau portalnya mengharapkan jenis PDF tertentu (PDF/A, satu halaman, versi rendah). Masing-masing punya solusi yang berbeda, dan solusi yang tepat tergantung yang mana itu.",
    "Panduan ini membahas diagnosisnya berdasarkan gejala dan menunjukkan cara memperbaiki masing-masing di browser Anda. Sebagian besar unggahan yang gagal berhasil di percobaan kedua begitu Anda mengatasi penyebab sebenarnya.",
  ],
  steps: [
    {
      title: "Baca pesan error-nya secara harfiah",
      body: "'File melebihi batas ukuran' berarti kompresi. 'File tidak valid' berarti format. 'Unggah gagal' biasanya berarti jaringan. Perlakukan kata-katanya sebagai petunjuk pertama, bahkan saat singkat.",
    },
    {
      title: "Kompres secara agresif kalau ukurannya masalahnya",
      body: "Kompres PDF di browser Anda memperkecil file secara signifikan, terutama yang penuh hasil pindaian. Coba kompresi terkuat dulu; kalau kualitasnya turun terlalu banyak, mundur satu tingkat. Sebagian portal membatasi 2 MB — sebagian besar alat kompresi membuat dokumen biasa jauh di bawah itu.",
    },
    {
      title: "Bagi PDF multihalaman yang besar kalau perlu",
      body: "Kalau portalnya menerima beberapa file kecil tapi menolak satu file besar, Bagi PDF atau Ekstrak Halaman PDF membiarkan Anda memecah file menjadi beberapa bagian. Beri nomor bagian-bagiannya dengan jelas di nama file agar penerima bisa menyatukannya kembali.",
    },
    {
      title: "Ekspor ulang ke PDF standar kalau formatnya ditolak",
      body: "Sebagian portal hanya menerima file yang disimpan sebagai PDF 1.4 atau PDF/A. Solusi paling sederhana adalah membuka file-nya di aplikasi pembaca mana pun dan cetak-ke-PDF — salinan hasilnya polos, standar, dan biasanya diterima.",
    },
    {
      title: "Periksa jumlah halaman dan dimensinya",
      body: "Portal pemerintah dan pendidikan kadang membatasi jumlah halaman atau ukuran kertas. Kalau portalnya mencantumkan persyaratan, cocokkan: hanya Letter atau A4, tidak ada halaman berukuran berlebih, tidak ada latar belakang transparan. Ekstrak Halaman PDF membuang apa pun yang melebihi batas.",
    },
    {
      title: "Coba ulang di koneksi yang stabil",
      body: "Wi-Fi yang putus di tengah unggah terlihat sama seperti penolakan. Ganti jaringan atau coba ulang di koneksi lain sebelum menganggap file itu sendiri yang bermasalah.",
    },
  ],
  tips: [
    "Kompres dulu sebelum membagi. File tunggal yang sudah dikompres sering sudah masuk batas; kalau masih belum, bagi salinan yang sudah dikompres itu.",
    "Hindari enkripsi atau proteksi kata sandi saat mengunggah ke portal — banyak yang memblokir file terproteksi meski mereka menerima kontennya.",
    "Waspadai batas karakter tersembunyi pada nama file. Sebagian portal menolak nama dengan spasi, aksen, atau tanda baca.",
    "Kalau portalnya menerima JPG tapi menolak PDF, Anda bisa mengekspor halaman PDF menjadi gambar dengan PDF ke Gambar dan mengunggahnya — berguna untuk persyaratan khusus gambar seperti pengajuan kartu identitas.",
    "Selalu pastikan unggahan yang berhasil benar-benar selesai (sebagian portal gagal secara diam-diam). Segarkan halaman tanda terima dan cari konfirmasi, bukan sekadar tidak adanya error.",
  ],
  mobileNote:
    "Unggahan dari HP lebih sering gagal daripada dari laptop hanya karena koneksinya lebih sering putus. Aplikasi PDF Editor mengompres dan membagi file secara offline sehingga langkah unggahnya sendiri jadi singkat — file yang lebih kecil terunggah lebih cepat dan bertahan pada jaringan yang tidak stabil.",
  faq: [
    {
      q: "Berapa ukuran batas sebagian besar portal?",
      a: "Batas umum adalah 2 MB, 5 MB, dan 10 MB. Portal pemerintah dan akademik cenderung paling ketat; portal komersial lebih longgar. Periksa bagian bantuan portalnya kalau tidak dinyatakan langsung.",
    },
    {
      q: "Apakah kompresi selalu menyelesaikan penolakan karena ukuran?",
      a: "Biasanya ya, terutama untuk file penuh hasil pindaian. Hasil pindaian 30 MB sering terkompres bersih menjadi di bawah 5 MB. PDF berisi teks saja yang sudah kecil tidak akan mengecil banyak lagi.",
    },
    {
      q: "Mengapa portalnya menolak file saya sebagai 'tidak valid'?",
      a: "Bisa karena file-nya sebenarnya bukan PDF (sebagian unduhan salah diberi nama), atau memakai fitur PDF yang tidak didukung pengurai portalnya. Mengekspor ulang lewat cetak-ke-PDF menghasilkan salinan dasar yang hampir selalu diterima.",
    },
    {
      q: "Bisakah saya melewati batas ukuran dengan menjadikannya ZIP?",
      a: "Hampir tidak pernah. Portal yang membatasi PDF biasanya juga membatasi total ukuran unggahan dan menolak ZIP sama sekali. Mengompres PDF-nya sendiri adalah cara yang tepat.",
    },
    {
      q: "Bagaimana kalau portalnya secara khusus meminta PDF/A?",
      a: "PDF/A adalah jenis untuk arsip. Microsoft Word dan Google Docs bisa mengekspor langsung ke sana. Kalau tidak, buka file-nya, cetak-ke-PDF, dan periksa opsi ekspor untuk pengaturan yang kompatibel dengan A.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil agar masuk batas portal", path: "/compress-pdf" },
    { label: "Bagi PDF — pecah file besar menjadi bagian yang diterima", path: "/split-pdf" },
    { label: "Cara memperkecil ukuran PDF sebelum diunggah", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Cara memperkecil ukuran file PDF untuk email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Kompres PDF — perkecil ukuran di browser Anda", path: "/compress-pdf" },
};

export default content;
