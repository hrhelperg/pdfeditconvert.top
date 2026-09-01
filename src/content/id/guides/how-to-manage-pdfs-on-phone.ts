import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "Cara Mengelola PDF di HP Anda",
  description:
    "Jaga PDF di HP agar tidak berantakan: ganti nama, rapikan ke dalam folder, sinkron ke cloud, dan bebaskan penyimpanan. Rutinitas perawatan yang praktis.",
  updated: "2026-05-23",
  intro: [
    "PDF menumpuk di HP lebih cepat daripada di tempat lain. Lampiran email, hasil pindaian, unduhan, foto yang dikonversi — semuanya bertumpuk di Downloads atau aplikasi Files dengan nama seperti \"Document(3).pdf\" sampai Anda tidak bisa menemukan file yang Anda butuhkan tepat saat Anda membutuhkannya. Mengelolanya memang tidak menarik, tapi sepuluh menit rutinitas menghemat satu jam pencarian panik nantinya.",
    "Panduan ini adalah rutinitas perawatan praktis untuk PDF di iPhone atau HP Android Anda: memberi nama agar mudah ditemukan, mengelompokkan ke dalam folder yang masuk akal, menyinkronkan yang penting, dan membersihkan yang memakan banyak ruang. Panduan ini mengandalkan aplikasi Files di HP Anda ditambah aplikasi PDF Editor untuk pekerjaan pada dokumennya.",
    "Tujuannya adalah HP di mana Anda bisa menemukan dokumen apa pun dalam hitungan detik, dan penyimpanan Anda tidak diam-diam habis oleh hasil pindaian 40 MB yang terlupakan.",
  ],
  steps: [
    {
      title: "Ganti nama file begitu file itu masuk",
      body: "Begitu Anda menyimpan PDF, beri nama yang jelas — \"Sewa-tertandatangani-2026-05.pdf\", bukan \"scan_0007.pdf\". Nama yang deskriptif itulah yang membuat file bisa ditemukan berminggu-minggu kemudian.",
    },
    {
      title: "Buat beberapa folder yang masuk akal",
      body: "Di aplikasi Files, buat folder yang sesuai dengan cara Anda berpikir — Struk, Kontrak, Formulir, Kerja. Beberapa folder yang jelas lebih baik daripada satu tumpukan raksasa.",
    },
    {
      title: "Sinkronkan yang penting ke cloud",
      body: "Pindahkan dokumen yang tidak boleh hilang ke iCloud Drive, Google Drive, atau OneDrive agar tetap ada meski HP hilang atau diganti — dan terbuka di perangkat lain Anda.",
    },
    {
      title: "Pangkas dan rapikan dokumennya sendiri",
      body: "Gunakan aplikasi PDF Editor untuk menggabungkan file yang berkaitan, membuang halaman kosong, dan memperbaiki hasil pindaian yang miring, sehingga setiap dokumen yang disimpan bersih, bukan tumpukan mentah.",
    },
    {
      title: "Kompres yang memakan banyak penyimpanan",
      body: "Hasil pindaian berukuran besar memakan ruang. Kompres yang Anda simpan tapi tidak butuh resolusi penuh, dan penyimpanan Anda berhenti diam-diam terisi penuh.",
    },
    {
      title: "Bersihkan yang tidak lagi Anda butuhkan",
      body: "Hapus duplikat dan file sekali pakai yang sudah Anda kirim. Kosongkan folder Baru Dihapus secara berkala agar ruang yang dibebaskan benar-benar kembali.",
    },
  ],
  tips: [
    "Ganti nama saat file tiba, bukan 'nanti'. Nanti tidak pernah datang, dan folder berisi \"Document(n).pdf\" adalah hasilnya.",
    "Pilih satu pola penamaan — \"Jenis-Siapa-Tanggal\" bekerja dengan baik — dan file Anda akan mengurutkan dan mencari dirinya sendiri.",
    "Sinkronkan apa pun yang akan membuat Anda kesal kalau sampai hilang. HP jauh lebih mudah hilang daripada akun cloud, dan file yang disinkronkan juga terbuka di laptop Anda.",
    "Mengompres hasil pindaian yang disimpan tapi jarang dibuka membebaskan lebih banyak penyimpanan daripada menghapus file-file kecil.",
    "Rapi-rapi cepat tiap bulan lebih baik daripada penggalian arkeologi tahunan. Sepuluh menit secara rutin menjaga tumpukan itu tidak berubah jadi proyek besar.",
  ],
  mobileNote:
    "Aplikasi PDF Editor adalah sisi dokumen dari pengelolaan PDF di HP: gabungkan, pangkas, putar, kompres, dan ganti nama di satu tempat, secara offline, sebelum menyimpannya. Padukan dengan aplikasi Files Anda untuk folder dan sinkron cloud, dan tumpukan itu tetap terkendali.",
  faq: [
    {
      q: "Di mana PDF tersimpan di HP saya?",
      a: "Di iPhone, di aplikasi Files (sering di Downloads atau iCloud Drive); di Android, biasanya di Downloads lewat aplikasi Files. Membuat folder di keduanya menjaganya tetap rapi.",
    },
    {
      q: "Bagaimana sebaiknya saya memberi nama file PDF saya?",
      a: "Gunakan pola yang konsisten dan deskriptif dengan tanggal, seperti \"Jenis-Siapa-Tanggal.pdf\". Melakukannya saat file tiba adalah yang menjaganya tetap bisa ditemukan nanti.",
    },
    {
      q: "Bagaimana cara menghentikan PDF memakan penyimpanan saya?",
      a: "Kompres hasil pindaian besar yang Anda simpan, hapus duplikat dan file sekali pakai yang sudah dikirim, dan kosongkan folder Baru Dihapus agar ruangnya benar-benar kembali.",
    },
    {
      q: "Sebaiknya saya menyimpan PDF di cloud atau di perangkat?",
      a: "Simpan yang penting di cloud agar tetap ada meski HP hilang dan tersinkron ke perangkat lain Anda. Penyimpanan khusus perangkat baik-baik saja untuk file sementara yang akan segera Anda hapus.",
    },
    {
      q: "Bisakah saya merapikan dokumennya sendiri, bukan cuma file-nya?",
      a: "Bisa. Aplikasi PDF Editor menggabungkan, memangkas, dan memperbaiki dokumen sehingga yang Anda simpan bersih — lihat panduan tentang merapikan file PDF untuk alur kerja lengkapnya.",
    },
  ],
  related: [
    { label: "Semua alat PDF gratis", path: "/pdf-tools" },
    { label: "Cara merapikan file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Cara memperkecil PDF di iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Cara membagikan PDF dari HP Anda", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
