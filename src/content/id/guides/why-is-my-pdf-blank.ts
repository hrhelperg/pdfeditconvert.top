import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Mengapa PDF Saya Kosong? Penyebab Sebenarnya dan Cara Memulihkannya",
  description:
    "Saat PDF terbuka dengan halaman kosong, isinya biasanya masih ada, hanya tersembunyi karena render gagal, font hilang, atau kesalahan pindaian. Cara mengetahui penyebabnya dan mengembalikan dokumen.",
  updated: "2026-05-29",
  intro: [
    "Membuka PDF dan mendapati halaman kosong itu bikin was-was. Anda mengharapkan teks, grafik, kontrak yang sudah ditandatangani — dan yang Anda dapat tidak ada apa-apa. Kabar baiknya, isinya hampir selalu masih ada di dalam file. Kabar buruknya, penyebabnya bisa salah satu dari beberapa hal, dan Anda harus mengenali yang mana dulu sebelum bisa memperbaikinya.",
    "PDF kosong biasanya berasal dari kegagalan render (aplikasi pembaca Anda tersendat pada sesuatu yang spesifik), kegagalan font (teksnya secara teknis ada tapi menunjuk ke glyph yang tidak bisa digambar siapa pun), kegagalan pindaian atau tangkapan (sumbernya menghasilkan halaman kosong), atau masalah konten berlapis/tersembunyi. Dalam kasus yang jarang, file-nya memang benar-benar kosong.",
    "Panduan ini membahas diagnosisnya dalam urutan yang paling murah untuk diperiksa, lalu mengarahkan Anda ke solusi yang tepat. Sebagian besar PDF kosong bisa terbaca lagi dengan ekspor ulang atau berganti aplikasi pembaca.",
  ],
  steps: [
    {
      title: "Buka file-nya dulu di aplikasi pembaca yang berbeda",
      body: "Coba aplikasi pembaca bawaan Chrome, Preview di macOS, atau aplikasi pembaca mobile. Kalau salah satunya menampilkan isinya, Anda sudah mengisolasi masalahnya ke aplikasi pembaca asli Anda — dan file-nya baik-baik saja.",
    },
    {
      title: "Periksa ukuran file dibanding perkiraan",
      body: "PDF yang benar-benar kosong ukurannya kecil — hanya beberapa KB. PDF yang terlihat kosong tapi berukuran beberapa megabyte hampir pasti punya isi di dalamnya yang hanya tidak ter-render untuk Anda.",
    },
    {
      title: "Cari tanda keamanan atau izin",
      body: "Sebagian PDF diekspor dengan tanda 'tampilan terproteksi' atau penandatanganan yang membuat aplikasi pembaca tertentu menyembunyikan isinya sampai izin diberikan. Menyimpan salinan tanpa proteksi dari aplikasi pembaca yang lebih permisif biasanya membersihkan ini.",
    },
    {
      title: "Ekspor ulang file-nya lewat cetak-ke-PDF",
      body: "Buka file-nya di aplikasi pembaca mana pun yang menampilkan isinya dan gunakan 'Cetak → Simpan sebagai PDF' (atau Microsoft Print to PDF di Windows). Ini membangun ulang render halamannya dan memperbaiki sebagian besar kekosongan yang terkait font.",
    },
    {
      title: "Kalau itu hasil pindaian, pindai ulang dengan pengaturan berbeda",
      body: "Halaman hasil pindaian yang kosong biasanya berasal dari feeder yang menarik dua lembar sekaligus, pengaturan kontras yang terlalu terang, atau pindaian HP yang fokus ke bidang yang salah. Alur Pindai ke PDF dengan deteksi tepi menghindari sebagian besar masalah ini.",
    },
    {
      title: "Ekstrak halaman satu per satu sebagai gambar untuk memastikan",
      body: "PDF ke Gambar bisa mengekspor tiap halaman sebagai PNG di browser Anda. Kalau PNG hasil ekspor menampilkan isinya, aplikasi pembaca Anda-lah masalahnya. Kalau memang benar-benar kosong, halaman di file itu memang kosong.",
    },
  ],
  tips: [
    "PDF kosong yang berukuran beberapa megabyte punya isi di suatu tempat — terus coba aplikasi pembaca lain dan ekspor ulang sebelum menganggapnya hilang.",
    "Teks abu-abu muda di atas putih bisa ter-render seperti 'kosong' di layar HP saat kena sinar matahari langsung. Naikkan kecerahan atau balik warnanya sebelum menganggap halamannya kosong.",
    "File yang diekspor dari aplikasi dengan batasan aksesibilitas kadang menanam semuanya dalam satu lapisan tunggal yang diabaikan aplikasi pembaca yang lebih baru. Cetak-ke-PDF meratakannya.",
    "Kalau Anda menerima kembali kontrak dengan halaman tanda tangan yang kosong, kemungkinan penandatangannya memakai alat tanda tangan yang menimpa kolom asli dengan anotasi kosong — minta salinan yang ditandatangani ulang dari penandatangan yang berbeda.",
    "Jangan terus mengedit atau menggabungkan file yang render-nya kosong sebelum Anda tahu penyebabnya. Membangun di atas render yang rusak menghasilkan file yang lebih rusak lagi.",
  ],
  mobileNote:
    "Aplikasi pembaca di HP kadang lebih ketat daripada di desktop. Aplikasi PDF Editor memakai renderer yang lebih permisif yang cenderung menampilkan isi bahkan saat aplikasi pembaca mobile lain menampilkan kosong, dan membiarkan Anda menyimpan kembali dokumennya sebagai salinan yang lebih bersih.",
  faq: [
    {
      q: "Apakah PDF kosong hilang selamanya?",
      a: "Jarang. Kalau ukuran file-nya lebih dari beberapa KB, isinya hampir pasti masih ada di dalamnya — coba aplikasi pembaca lain, ekspor ulang lewat cetak-ke-PDF, atau ekstraksi gambar untuk memastikan.",
    },
    {
      q: "Mengapa pemindai saya kadang menghasilkan PDF kosong?",
      a: "Paling sering karena feeder menarik dua lembar yang menempel dan hanya mendaftarkan yang kedua, atau kontrasnya diatur terlalu rendah. Memindai ulang dengan kontras otomatis biasanya memperbaikinya.",
    },
    {
      q: "Bisakah ini masalah font?",
      a: "Bisa. Saat sebuah PDF merujuk ke font yang tidak tersemat dan aplikasi pembaca Anda tidak bisa menggantikannya, teksnya menghilang meski masih ada di dalam file. Mengekspor ulang menyematkan font yang bisa dipakai.",
    },
    {
      q: "Apakah mengompres atau menggabungkan PDF kosong bisa menghilangkan isinya?",
      a: "Bisa — kedua operasi itu bekerja pada apa yang bisa dilihat aplikasi pembaca Anda. Jangan proses file yang render-nya kosong sampai Anda bisa memastikan isinya memang ada.",
    },
    {
      q: "Mengapa terlihat kosong di Acrobat tapi baik-baik saja di Chrome?",
      a: "Cara mengurainya berbeda. Aplikasi pembaca Chrome sering paling toleran; versi Acrobat yang lebih lama lebih ketat. File-nya tidak rusak — aplikasi pembaca Anda yang bermasalah.",
    },
  ],
  related: [
    { label: "PDF ke Gambar — pastikan halaman tidak benar-benar kosong", path: "/pdf-to-images" },
    { label: "Pindai ke PDF — hasil pindaian ulang yang bersih tanpa kekosongan", path: "/scan-to-pdf" },
    { label: "Mengapa PDF saya tidak mau terbuka?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Cara memperbaiki file PDF yang rusak", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Alat PDF — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
