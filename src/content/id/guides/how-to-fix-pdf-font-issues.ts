import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Cara Mengatasi Masalah Font PDF (Hilang, Tergantikan, Berantakan)",
  description:
    "Saat PDF menampilkan font yang salah, kotak-kotak menggantikan karakter, atau teks tergantikan, biasanya font tersemat-nya hilang. Cara kerja penyematan font dan yang perlu diubah saat mengekspor.",
  updated: "2026-05-29",
  intro: [
    "Saat sebuah PDF menampilkan kotak-kotak alih-alih karakter, atau font yang salah di mana-mana, atau spasi aneh yang tidak ada di aslinya, itu masalah font. PDF merujuk font berdasarkan namanya; aplikasi pembacanya perlu menemukan font itu di sistem atau memiliki font itu tersemat di dalam file-nya. Kalau tidak satu pun benar, Anda melihat penggantian — paling baik kecocokan yang mendekati, paling buruk kotak-kotak.",
    "Solusi yang tepat hampir selalu adalah mengekspor ulang dengan font tersemat. Begitu sebuah font tersemat, file-nya membawa data glyph-nya sendiri dan terlihat benar di mana saja. Pertukarannya adalah file yang sedikit lebih besar, tapi untuk sebagian besar font, perbedaannya kecil sekali dibanding ukuran dokumennya.",
    "Panduan ini menjelaskan cara kerja penyematan font sebenarnya, membahas gejala yang paling umum, dan menunjukkan solusinya — termasuk saat ekspor ulang tidak memungkinkan dan Anda harus meratakan file-nya menjadi gambar.",
  ],
  steps: [
    {
      title: "Pastikan file-nya memang merender font pengganti",
      body: "Buka file-nya di dua aplikasi pembaca yang berbeda. Kalau keduanya menampilkan font yang sama-sama salah, font-nya memang tidak tersemat. Kalau salah satu benar dan yang lain tidak, aplikasi pembaca yang salah itu kehilangan font-nya dan menggantikannya.",
    },
    {
      title: "Ekspor ulang dengan semua font tersemat",
      body: "Di Word, Pages, Docs, dan sebagian besar alat desain, pengaturan ekspor PDF-nya menyertakan 'sematkan semua font'. Mengaktifkannya menambahkan data font ke dalam file-nya dan membuatnya merender secara konsisten di mana saja.",
    },
    {
      title: "Gunakan cetak-ke-PDF sebagai cadangan",
      body: "Kalau Anda tidak bisa mengaktifkan penyematan font di aplikasi sumbernya, buka dokumennya di aplikasi pembaca mana pun yang menampilkannya dengan benar lalu cetak-ke-PDF. Salinan barunya menanamkan glyph yang sudah dirender sebagai raster — lebih besar dan tidak bisa dicari, tapi bisa diandalkan.",
    },
    {
      title: "Periksa font berlisensi yang tidak bisa disematkan",
      body: "Sebagian font komersial punya pembatasan penyematan. Aplikasi sumbernya akan memperingatkan Anda. Solusi realistisnya adalah mengganti dengan font serupa yang mengizinkan penyematan, atau meratakan teks yang terpengaruh menjadi gambar.",
    },
    {
      title: "Konversi ke Word, perbaiki teksnya, ekspor ulang",
      body: "Kalau penggantiannya sudah mengacaukan teksnya dan Anda hanya punya PDF-nya, PDF ke Word menarik keluar apa yang masih bisa dipulihkan. Rapikan, atur font yang Anda punya, ekspor ulang ke PDF baru.",
    },
    {
      title: "Ratakan menjadi gambar kalau tidak ada cara lain yang berhasil",
      body: "PDF ke Gambar mengekspor tiap halaman sebagai PNG beresolusi tinggi. Kalau Anda menyusunnya kembali dengan Gambar ke PDF, hasilnya tidak punya teks hidup — hanya gambar — tapi render font-nya terkunci untuk setiap aplikasi pembaca.",
    },
  ],
  tips: [
    "Jangan gunakan font yang tidak bisa disematkan untuk dokumen penting — file-nya akan selalu rentan terhadap penggantian.",
    "Font web dan font tampilan yang diunduh adalah pelaku penyematan yang paling umum bermasalah. Font sistem (Arial, Times, Helvetica, Calibri) tersemat dengan bersih.",
    "Menyematkan font 'subset' (hanya karakter yang dipakai) menjaga file-nya tetap kecil. Sebagian besar alat ekspor secara default melakukan subsetting dan itu pilihan yang tepat.",
    "Kalau hanya satu karakter yang salah (seperti pecahan atau simbol khusus), font-nya kekurangan glyph itu. Ganti karakter sumbernya dengan padanan Unicode.",
    "Setelah diratakan menjadi gambar, harapkan kehilangan salin-tempel dan OCR. Gunakan cara itu hanya saat kesetiaan render lebih penting daripada kemampuan pencarian.",
  ],
  mobileNote:
    "Aplikasi pembaca di HP sering punya lebih sedikit font terinstal daripada di desktop, jadi file tanpa font tersemat terlihat paling buruk di mobile. Aplikasi PDF Editor menampilkan peringatan font pengganti dan membiarkan Anda mengekspor ulang dokumen dengan font tertanam, yang menjaganya tetap konsisten secara visual di iOS, Android, dan aplikasi pembaca desktop.",
  faq: [
    {
      q: "Apa sebenarnya yang dilakukan 'sematkan font'?",
      a: "Ini membundel data glyph font tersebut ke dalam PDF-nya sendiri, sehingga aplikasi pembaca mana pun bisa merender teksnya dengan benar tanpa perlu font itu terinstal secara lokal.",
    },
    {
      q: "Mengapa saya melihat kotak-kotak alih-alih huruf?",
      a: "Font-nya tidak terinstal di sistem dan tidak tersemat. Aplikasi pembacanya tidak bisa menggantikannya karena tidak tahu glyph mana yang harus digambar, jadi ia menampilkan kotak karakter-hilang.",
    },
    {
      q: "Bisakah saya menambahkan font ke PDF setelah diekspor?",
      a: "Tidak dengan bersih. Mengekspor ulang dari sumbernya adalah cara yang tepat. Ada alat yang mengklaim bisa menyematkan setelahnya, tapi kebanyakan menghasilkan file yang bermasalah.",
    },
    {
      q: "Mengapa PDF hasil ekspor saya jadi lebih besar saat saya menyematkan font?",
      a: "Karena data font-nya sekarang ada di dalam file-nya. Kenaikannya biasanya kecil kecuali Anda menyematkan banyak keluarga font. Subsetting (hanya menyertakan karakter yang dipakai) menjaga ukurannya tetap kecil.",
    },
    {
      q: "Apakah kompresi akan menghapus font tersemat?",
      a: "Tidak. Kompresi PDF menyasar gambar, bukan teks atau font. Mengompres PDF dengan font tersemat tidak merusaknya.",
    },
  ],
  related: [
    { label: "PDF ke Word — pulihkan teks dari font yang tergantikan", path: "/pdf-to-word" },
    { label: "PDF ke Gambar — ratakan sebagai upaya terakhir", path: "/pdf-to-images" },
    { label: "Cara mengatasi masalah format PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Cara mengatasi masalah mencetak PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Konverter PDF — Word, JPG, PNG, dan sebaliknya", path: "/pdf-converter" },
};

export default content;
