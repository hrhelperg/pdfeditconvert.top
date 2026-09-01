import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Alur Kerja PDF untuk Konsultan (Proposal, Laporan, Faktur)",
  description:
    "Ritme PDF seorang konsultan: proposal yang berhasil closing, laporan yang tetap terbaca rapi di HP, faktur yang terkirim dalam hitungan detik. Alat berbasis browser yang menjaganya tetap ringkas.",
  updated: "2026-05-29",
  intro: [
    "Pekerjaan konsultan berjalan di atas tiga dokumen: proposal yang memenangkan proyek, laporan yang menyampaikan hasilnya, dan faktur yang menutup siklusnya. Semua yang lain — dek pembukaan, catatan wawancara, update status — adalah draf dari salah satu ketiganya atau sekadar materi kerja yang tidak pernah keluar dari proyek itu sendiri.",
    "Masing-masing dari ketiganya punya kebiasaan PDF tersendiri. Proposal perlu terasa substansial tanpa terkesan berat; laporan perlu terbaca rapi di HP, tempat sebagian besar klien membukanya untuk pertama kali; faktur perlu terkirim pada hari pekerjaan selesai. Alat untuk mengerjakan ketiganya dengan baik sebagian besar gratis, dan alur kerjanya tidak berubah dari satu proyek klien ke proyek berikutnya.",
    "Panduan ini menjelaskan ritme itu — apa yang dibutuhkan setiap dokumen, apa yang dilakukan setiap alat, dan ke mana waktu itu terpakai. Merapikan ritme ini sepanjang setahun proyek benar-benar menghemat banyak jam kerja.",
  ],
  steps: [
    {
      title: "Proposal: ringkas, sesuai merek, cepat",
      body: "Susun di Word dari template Anda. Batasi di bawah 12 halaman — klien membacanya sekilas, bukan mempelajarinya. Gunakan Word ke PDF untuk mengekspor. Halaman sampul, pernyataan masalah, pendekatan, hasil kerja, linimasa, harga, ketentuan. Kompres di bawah 5 MB. Kirim di hari yang sama.",
    },
    {
      title: "Surat perjanjian kerja: PDF bertanda tangan, terkunci",
      body: "Setelah proposal disetujui, kirim surat perjanjian kerja yang sudah ditandatangani dengan Tanda Tangan PDF. Klien menandatangani balik dan mengembalikannya. Simpan kedua salinan bertanda tangan di /Klien/[Nama]/kontrak/.",
    },
    {
      title: "Update sela: laporan status PDF mingguan",
      body: "PDF singkat (satu halaman) dikirim setiap minggu. Status, kendala, keputusan yang dibutuhkan. Perlakukan ini sebagai pemicu untuk berpikir jernih, bukan sebagai hasil kerja tersendiri.",
    },
    {
      title: "Laporan akhir: disusun untuk dibaca sekilas",
      body: "Ringkasan eksekutif di halaman pertama. Metodologi dan detail di bagian belakang. Nomori setiap halaman. Sematkan font. Ukuran teks yang terbaca di HP. Sebagian besar klien membaca lewat HP sebelum membacanya di laptop.",
    },
    {
      title: "Faktur: hari yang sama setelah proyek selesai",
      body: "Faktur dari template, nomor berurutan, Word ke PDF, dikirim dalam 24 jam setelah proyek ditutup. Faktur yang terlambat cenderung berujung pada pembayaran yang terlambat pula.",
    },
    {
      title: "Arsipkan proyek",
      body: "Pindahkan seluruh folder klien ke /Arsip/[Tahun]/[Klien]/ setelah dibayar. Folder aktif tetap ramping; arsip tetap bisa dicari untuk keperluan studi kasus dan referensi.",
    },
  ],
  tips: [
    "Jangan sesuaikan template untuk setiap proposal. Sesuaikan isinya, jaga strukturnya tetap konsisten — klien akan mengenali gaya Anda di setiap proyek.",
    "Lacak setiap proposal yang dikirim dalam sebuah spreadsheet berisi tanggal, klien, nominal, hasil. Tingkat konversinya memberi tahu Anda apakah penawaran perlu disempurnakan.",
    "Laporan yang terbaca baik di HP memakai ukuran teks lebih besar dan paragraf lebih pendek dibanding laporan yang dirancang untuk dicetak. Optimalkan untuk perangkat yang lebih dulu dipakai klien.",
    "Beri watermark DRAFT pada draf selama proyek berjalan, jangan pernah pada versi final. Versi final terasa final justru karena ketiadaan watermark itu.",
    "Simpan folder /studi-kasus/ berisi contoh yang sudah dianonimkan dari proyek-proyek sebelumnya. Ini adalah bukti paling kuat dalam proposal-proposal berikutnya.",
  ],
  mobileNote:
    "Konsultan banyak menghabiskan waktu dalam perjalanan. Aplikasi PDF Editor menangani kompresi proposal di menit-menit terakhir, tanda tangan surat perjanjian kerja, dan pengiriman faktur langsung dari HP — berguna saat proyek ditutup dari dalam kereta dan faktur harus terkirim sebelum hari itu berakhir.",
  faq: [
    {
      q: "Seberapa panjang seharusnya sebuah proposal?",
      a: "Di bawah 12 halaman untuk sebagian besar proyek. Klien membacanya sekilas. Semakin pendek proposalnya, semakin besar kemungkinan benar-benar dibaca.",
    },
    {
      q: "Apakah saya perlu surat perjanjian kerja bertanda tangan?",
      a: "Ya. Proposal adalah dokumen penjualan; surat perjanjian kerja adalah kontraknya. Jangan mulai bekerja tanpa itu.",
    },
    {
      q: "Seberapa sering saya harus mengirim update sela?",
      a: "Mingguan adalah standarnya. Harian untuk proyek singkat dan intensif. Bulanan untuk proyek panjang dan berjalan lambat. Konsistensi ritmenya lebih penting daripada formatnya.",
    },
    {
      q: "Perlukah laporan dirancang secara visual?",
      a: "Dirancang cukup untuk terlihat profesional, tapi jangan sampai memperlambat Anda. Template tipografi yang bersih bertahan lebih baik dibanding yang dirancang berlebihan.",
    },
    {
      q: "Kapan faktur sebaiknya dikirim?",
      a: "Pada hari yang sama saat proyek ditutup. Setiap hari keterlambatan cenderung menggeser tanggal pembayaran lebih dari sehari di sisi klien.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Word ke PDF — ekspor proposal dan laporan", path: "/word-to-pdf" },
    { label: "Alur kerja PDF terbaik untuk freelancer", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Cara mengirim kontrak sebagai PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
