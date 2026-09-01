import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Cara Mengatasi Masalah Format PDF (Perataan Teks, Margin, Spasi)",
  description:
    "Saat tata letak PDF terlihat berantakan, teks mengalir salah, margin bergeser, spasi kacau, solusinya biasanya ada di dokumen sumber, bukan di PDF-nya. Alur kerja paling bersih untuk mendapatkan hasil ekspor yang rapi.",
  updated: "2026-05-29",
  intro: [
    "Format PDF yang buruk hampir selalu bisa ditelusuri kembali ke momen ekspornya. PDF itu sendiri tidak mengalirkan ulang apa pun — file ini mengunci halamannya persis seperti saat disimpan. Jadi kalau spasinya salah, marginnya bergeser, atau tabelnya patah di antara halaman, dokumen sumbernya memang sudah menghasilkan hasil itu sejak awal.",
    "Solusinya, hampir selalu, adalah kembali ke sumbernya — Word, Pages, Google Docs, alat desain — sesuaikan tata letaknya, dan ekspor ulang. Ini memang menjengkelkan kalau sumbernya bukan milik Anda, tapi itulah jalan paling bersih. Alternatif lainnya — mengonversi ke Word, mengedit PDF-nya langsung, atau 'memperbaiki' dengan aplikasi pembaca yang berbeda — masing-masing kehilangan sesuatu yang dimiliki aslinya.",
    "Panduan ini membahas gejala format yang umum dan solusi realistis untuk masing-masing, termasuk alur kerja yang menghasilkan PDF bersih sejak percobaan pertama.",
  ],
  steps: [
    {
      title: "Kenali apakah itu masalah konten atau render",
      body: "Buka PDF-nya di dua aplikasi pembaca yang berbeda. Kalau keduanya menampilkan tata letak yang sama-sama berantakan, file-nya-lah sumber masalahnya. Kalau salah satunya menampilkan dengan benar, itu masalah aplikasi pembaca, bukan masalah format.",
    },
    {
      title: "Perbaiki tata letak di dokumen sumber, bukan di PDF-nya",
      body: "Buka file Word, Pages, atau Docs-nya, perbaiki margin, spasi, atau tabelnya, lalu ekspor ulang ke PDF. Sumber yang sudah diperbaiki menghasilkan PDF yang langsung diperbaiki juga. Mengedit PDF untuk menambal tata letak justru melawan formatnya.",
    },
    {
      title: "Ekspor ulang dengan ukuran kertas yang eksplisit",
      body: "Pengaturan sesuai-otomatis sering menghasilkan kejutan. Atur ukuran kertas (Letter atau A4), margin (1 inci atau 25 mm), dan orientasi secara eksplisit di aplikasi sumbernya sebelum mengekspor.",
    },
    {
      title: "Konversi ke Word hanya untuk penulisan ulang teks yang berat",
      body: "PDF ke Word di browser Anda menarik keluar teksnya untuk diedit ulang. Konversinya kehilangan sebagian tata letak — terima itu sebagai pertukaran untuk mendapatkan kembali pengeditan teks. Setelah dirapikan, ekspor ulang ke PDF untuk dibagikan.",
    },
    {
      title: "Gunakan alat tingkat halaman untuk perbaikan struktural",
      body: "Kalau hanya sebagian halaman yang salah — hasil pindaian yang urutannya keliru, sampul ganda, sisipan yang menyamping — Urutkan Ulang Halaman PDF, Ekstrak Halaman PDF, dan Putar PDF memperbaiki strukturnya tanpa menyentuh format teksnya.",
    },
    {
      title: "Ekspor ulang ke PDF sebelum membagikan",
      body: "Setelah tata letaknya diperbaiki di sumbernya, ekspor baru daripada menyimpan ulang PDF yang sudah ada. Ekspor paling bersih datang langsung dari aplikasi yang membuat dokumennya.",
    },
  ],
  tips: [
    "Pratinjau cetak di Word atau Pages menunjukkan perilaku pemisahan halaman yang sama seperti yang akan dihasilkan PDF-nya. Perbaiki pemisahan yang buruk sebelum mengekspor, bukan sesudahnya.",
    "Tabel yang terpisah dengan canggung adalah masalah format paragraf di sumbernya, bukan masalah PDF. Gunakan 'satukan dengan berikutnya' untuk mengikat baris header ke isinya.",
    "Jangan buka PDF di Word untuk mengeditnya — Word mengonversinya, sering kali dengan buruk. Gunakan sumber aslinya kalau Anda punya, atau PDF ke Word hanya kalau tidak punya.",
    "Konten yang ditempel dari web sering membawa format latar belakangnya. Hapus dulu sebelum mengekspor (tempel-sebagai-teks-biasa) untuk menghindari batas dan warna yang tak terduga di PDF-nya.",
    "Kalau Anda hanya punya PDF-nya dan tidak bisa kembali ke sumbernya, terimalah bahwa perapian tata letaknya akan bersifat sebagian saja. Prioritaskan perubahan yang akan langsung disadari pembaca.",
  ],
  mobileNote:
    "Masalah format PDF di mobile sering berasal dari dokumen yang dibuat di desktop dan diekspor dengan target kertas yang salah. Aplikasi PDF Editor memungkinkan Anda memutar, mengurutkan ulang, dan memangkas halaman di HP — berguna untuk merapikan masalah struktural bahkan saat Anda tidak bisa memperbaiki sumbernya.",
  faq: [
    {
      q: "Mengapa PDF saya terlihat berbeda dari versi Word-nya?",
      a: "Biasanya karena font, ukuran kertas, atau pengaturan area cetak saat ekspor. Mengekspor ulang dengan ukuran kertas eksplisit dan font tersemat menghasilkan PDF yang cocok dengan sumbernya.",
    },
    {
      q: "Bisakah saya mengedit teks di PDF untuk memperbaiki spasinya?",
      a: "Anda bisa mengedit karakter dan kata satu per satu, tapi mengalirkan ulang paragraf itu sulit karena PDF memperlakukan teks sebagai blok yang diposisikan. Perbaiki di sumbernya kalau memungkinkan.",
    },
    {
      q: "Mengapa hasil konversi PDF ke Word saya terlihat berantakan?",
      a: "PDF menyandikan tata letak, bukan alur. Konversi mengubahnya kembali menjadi alur tapi petunjuk strukturalnya sudah hilang. Harapkan perlu merapikan sungguhan pada file hasil konversi.",
    },
    {
      q: "Mengapa tabel saya terpisah dengan canggung antarhalaman?",
      a: "Hampir selalu masalah format paragraf di sumbernya. Pengaturan 'satukan dengan berikutnya' dan 'jangan dipisah antarhalaman' di Word memperbaiki sebagian besar pemisahan sebelum ekspor.",
    },
    {
      q: "Apakah mengompres memengaruhi format?",
      a: "Tidak. Kompresi menyentuh gambar, bukan tata letak. PDF yang sudah dikompres punya format yang sama dengan aslinya — hanya gambar tersematnya yang lebih kecil.",
    },
  ],
  related: [
    { label: "PDF ke Word — konversi untuk perbaikan teks yang berat", path: "/pdf-to-word" },
    { label: "Word ke PDF — ekspor ulang dengan bersih", path: "/word-to-pdf" },
    { label: "Cara mengatasi masalah font PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Cara mengatasi masalah mencetak PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Konverter PDF — Word, JPG, PNG, dan sebaliknya", path: "/pdf-converter" },
};

export default content;
