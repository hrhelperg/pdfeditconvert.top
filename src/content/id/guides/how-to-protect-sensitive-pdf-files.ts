import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Cara Melindungi File PDF yang Sensitif (Penyimpanan, Berbagi, Siklus Hidup)",
  description:
    "PDF sensitif butuh perlindungan di tiga titik: saat disimpan, saat dibagikan, dan setelah penerima selesai menggunakannya. Alur kerja praktis yang mencakup ketiganya.",
  updated: "2026-05-29",
  intro: [
    "PDF sensitif — kontrak, catatan keuangan, dokumen identitas, berkas medis — membutuhkan perlindungan di tiga titik berbeda sepanjang siklus hidupnya: saat berada di perangkat atau drive Anda (penyimpanan), saat berpindah antara Anda dan penerima (berbagi), dan setelah penerima selesai memakainya (siklus hidup). Kebanyakan orang hanya fokus pada berbagi dan mengabaikan dua titik lainnya.",
    "Alur kerja yang masuk akal menangani ketiganya. Penyimpanan berarti drive terenkripsi atau file yang dilindungi kata sandi di lokasi yang tidak sepenuhnya bisa dipercaya. Berbagi berarti memilih saluran yang tidak bocor, bukan sekadar mengunggah ke apa pun yang muncul pertama di hasil pencarian. Siklus hidup berarti memikirkan apa yang terjadi pada file itu sesudahnya — baik retensi di sisi Anda maupun di sisi penerima.",
    "Panduan ini menjelaskan ketiganya satu per satu. Tidak satu pun setingkat sistem enterprise; ini adalah standar dasar yang realistis untuk individu atau tim kecil yang sesekali menangani materi sensitif dan tidak ingin membangun sistem bersertifikasi SOC2 hanya untuk itu.",
  ],
  steps: [
    {
      title: "Penyimpanan: simpan PDF sensitif di penyimpanan terenkripsi",
      body: "macOS FileVault, Windows BitLocker, enkripsi disk penuh di HP Linux. Semua itu melindungi drive lokal Anda. Untuk drive eksternal, gunakan format yang terenkripsi. Cadangan juga sebaiknya terenkripsi — sinkronkan ke layanan cloud yang mendukung enkripsi zero-knowledge, atau enkripsi filenya terlebih dahulu.",
    },
    {
      title: "Lindungi PDF sensitif satu per satu dengan kata sandi",
      body: "Perlindungan kata sandi PDF menambahkan lapisan kedua. File tetap aman bahkan jika enkripsi disk gagal atau ada yang mendapatkan salinan file saat sedang berpindah. Gunakan kata sandi yang kuat dan unik; bagikan lewat saluran yang berbeda dari file itu sendiri.",
    },
    {
      title: "Berbagi: pilih saluran yang tepat sesuai tingkat sensitivitas",
      body: "Email biasa cukup untuk file dengan sensitivitas rendah. Pesan terenkripsi ujung ke ujung (Signal, email aman) untuk sensitivitas menengah. Untuk sensitivitas tinggi, gunakan layanan berbayar dengan komitmen penanganan data yang eksplisit. Hindari mengunggah PDF sensitif ke 'alat' gratis milik pihak ketiga.",
    },
    {
      title: "Proses lebih dulu secara lokal sebelum mengirim",
      body: "Jika Anda perlu mengompres, menyensor, atau menyusun ulang PDF sensitif sebelum mengirim, gunakan alat berbasis browser yang memproses secara lokal — file Anda tidak melewati server siapa pun. Kompres PDF, Ekstrak Halaman PDF, Urutkan Ulang Halaman PDF semuanya berjalan di perangkat Anda.",
    },
    {
      title: "Siklus hidup: pikirkan soal retensi dan penghapusan",
      body: "Simpan PDF sensitif hanya selama Anda benar-benar membutuhkannya. Penerima pun sebaiknya begitu. Pertimbangkan untuk meminta penerima mengonfirmasi penghapusan setelah mereka selesai memakai file itu, terutama untuk dokumen identitas yang hanya dipakai sekali.",
    },
    {
      title: "Bersihkan metadata sebelum mengirim",
      body: "PDF sering membawa nama penulis, nama file asli, riwayat penyuntingan. Mengekspor ulang dari sumber yang bersih menghilangkan sebagian besar itu. Aplikasi PDF Editor dan alat lain juga memungkinkan Anda membersihkan metadata secara eksplisit.",
    },
  ],
  tips: [
    "Jangan mengirim kata sandi dalam pesan email yang sama dengan file yang dilindunginya. Kirim filenya lewat satu saluran, kata sandinya lewat saluran yang lain.",
    "Perlakukan hasil pindaian dokumen identitas sebagai hal yang hanya dipakai sekali. Setelah penerima memilikinya, minta mereka menghapusnya kecuali ada alasan regulasi untuk menyimpannya.",
    "Jangan memakai ulang kata sandi yang sama untuk banyak PDF sensitif. Jika satu bocor, yang lain tetap terlindungi.",
    "Hindari Wi-Fi publik saat mengirim file sensitif. Gunakan hotspot atau tunggu sampai ada jaringan yang bisa dipercaya.",
    "Audit PDF sensitif Anda setahun sekali. Sebagian besar sudah tidak diperlukan lagi — hapus secara aman dan kurangi celah risikonya.",
  ],
  mobileNote:
    "HP kini menyimpan dan mengirim banyak PDF sensitif (kontrak bertanda tangan, hasil pindaian identitas). Aplikasi PDF Editor memprosesnya secara lokal di perangkat — kompresi, tanda tangan, perlindungan kata sandi — sehingga materi sensitif tidak pernah perlu meninggalkan HP untuk disiapkan sebelum dikirim.",
  faq: [
    {
      q: "Apakah perlindungan kata sandi PDF benar-benar kuat?",
      a: "Enkripsi AES modern pada PDF memang kuat. Titik lemahnya biasanya ada pada kata sandi itu sendiri — kata sandi yang lemah adalah satu-satunya jalan masuk yang mudah. Gunakan kata sandi yang panjang dan unik.",
    },
    {
      q: "Perlukah saya selalu mengenkripsi PDF sensitif?",
      a: "Ya, baik saat disimpan maupun saat berpindah. Enkripsi disk melindungi saat disimpan; kata sandi PDF atau saluran terenkripsi melindungi saat berpindah.",
    },
    {
      q: "Bagaimana dengan penyimpanan cloud untuk PDF sensitif?",
      a: "Bisa diterima jika memakai enkripsi zero-knowledge (penyedia layanan tidak bisa membaca file Anda) atau enkripsi di sisi klien (Anda mengenkripsi sebelum mengunggah). Penyimpanan cloud biasa cukup untuk file umum, tapi tidak untuk file yang sangat sensitif.",
    },
    {
      q: "Bagaimana cara menyensor bagian sensitif dari sebuah PDF?",
      a: "Penyensoran yang sesungguhnya adalah mengubah teks menjadi gambar dan menggantinya. Aplikasi PDF Editor mendukung ini. Kotak hitam yang hanya ditumpuk di atas teks bukanlah penyensoran sejati — teks di baliknya tetap bisa diekstrak.",
    },
    {
      q: "Bisakah saya menghapus PDF secara aman?",
      a: "Di SSD, penghapusan aman tidak sesederhana di disk piringan. Pindahkan file ke penyimpanan terenkripsi, lalu hapus dan biarkan fungsi TRIM disk membersihkan sektornya. Untuk sensitivitas yang sangat tinggi, enkripsi disk penuh sejak awal adalah pendekatan yang tepat.",
    },
  ],
  related: [
    { label: "PDF Security — lindungi PDF dengan kata sandi", path: "/pdf-security" },
    { label: "Cara melindungi file PDF dengan kata sandi", path: "/guides/how-to-protect-pdf-file" },
    { label: "Cara membagikan file PDF secara privat", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Cara menghindari mengunggah dokumen sensitif", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF Security — lindungi dengan kata sandi dan enkripsi", path: "/pdf-security" },
};

export default content;
