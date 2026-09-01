import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Cara Membagikan PDF dari HP Anda",
  description:
    "Bagikan PDF dari iPhone atau Android dengan cara yang tepat, lewat email, AirDrop, pesan, atau tautan, dan cara mengatur ukuran serta menyiapkannya agar benar-benar sampai.",
  updated: "2026-05-23",
  intro: [
    "Membagikan PDF dari HP adalah tindakan satu ketukan, sampai suatu saat tidak lagi begitu — file terlalu besar untuk email, penerima tidak bisa membuka tautannya, atau Anda baru sadar terlambat bahwa Anda mengirim versi dengan halaman yang seharusnya tidak ikut terkirim. Melakukannya dengan benar bukan soal tombol bagikan itu sendiri, melainkan soal memilih saluran yang tepat dan menyiapkan file sebelum Anda menekannya.",
    "Panduan ini membahas cara utama membagikan dari iPhone atau HP Android — email, AirDrop atau Nearby Share, aplikasi pesan, dan tautan cloud — dan kapan masing-masing jadi pilihan yang tepat. Panduan ini juga membahas persiapan cepat yang mencegah kiriman ditolak atau membuat Anda malu.",
    "Inti dari sebuah HP adalah mengirim sesuatu dari mana pun Anda berada. Sedikit kehati-hatian mengubahnya dari ketukan penuh harapan menjadi dokumen yang benar-benar sampai, dengan ukuran yang tepat, tanpa embel-embel tambahan apa pun.",
  ],
  steps: [
    {
      title: "Siapkan file sebelum Anda membagikannya",
      body: "Pastikan itu versi yang benar, buang halaman mana pun yang seharusnya tidak ikut terkirim, dan periksa ukurannya masuk akal. Tiga puluh detik di sini mencegah sebagian besar kesalahan berbagi.",
    },
    {
      title: "Buka menu bagikan",
      body: "Ketuk Bagikan pada PDF — dari Files, aplikasi email Anda, atau aplikasi PDF Editor. iOS dan Android sama-sama menampilkan setiap tujuan yang relevan dari sini.",
    },
    {
      title: "Email untuk dokumen resmi",
      body: "Lampirkan ke email saat ada jejak arsip yang perlu disimpan — kontrak, faktur, lamaran. Perhatikan batas ~25 MB; kompres dulu kalau file-nya berat.",
    },
    {
      title: "AirDrop atau Nearby Share untuk seseorang di dekat Anda",
      body: "Mengirim ke perangkat di ruangan yang sama? AirDrop (iPhone) atau Nearby Share (Android) memindahkan file secara langsung, cepat, tanpa batas ukuran dan tanpa perlu internet.",
    },
    {
      title: "Aplikasi pesan untuk kiriman cepat dan santai",
      body: "WhatsApp, Messages, dan sejenisnya cukup baik untuk kiriman santai, tapi beberapa mengompres ulang atau membatasi file. Untuk apa pun yang harus sampai tanpa cacat, lebih baik pakai email atau tautan.",
    },
    {
      title: "Tautan cloud untuk berbagi berukuran besar atau ke banyak penerima",
      body: "Untuk file besar atau audiens luas, bagikan tautan dari penyimpanan cloud yang Anda kendalikan. Cara ini menghindari batas ukuran dan memungkinkan Anda mencabut akses nanti.",
    },
  ],
  tips: [
    "Kompres sebelum membagikan kalau file-nya penuh hasil pindaian — email yang ditolak adalah hasil yang lebih buruk daripada file yang sedikit lebih kecil.",
    "Periksa halamannya sebelum Anda menekan bagikan. Penyesalan paling umum adalah mengirim versi dengan catatan internal atau halaman yang ditujukan untuk orang lain.",
    "AirDrop dan Nearby Share adalah pahlawan tak terlihat untuk berbagi langsung: instan, tanpa batas ukuran, tanpa internet, tidak ada yang diunggah.",
    "Aplikasi pesan bisa diam-diam mengompres ulang dokumen. Untuk file yang kualitas atau kesetiaannya penting, gunakan email atau tautan cloud sebagai gantinya.",
    "Untuk dokumen sensitif lewat tautan, gunakan layanan yang Anda percaya dan matikan aksesnya begitu penerima sudah mendapatkan file-nya.",
  ],
  mobileNote:
    "Aplikasi PDF Editor membagikan langsung dari menu bagikan setelah Anda menyiapkan file — kompres, pangkas halaman, tanda tangani — sehingga dokumen yang keluar dari HP Anda adalah yang memang Anda maksudkan untuk dikirim, dengan ukuran yang bisa sampai. Semua yang terjadi sebelum berbagi dilakukan di perangkat.",
  faq: [
    {
      q: "Apa cara terbaik membagikan PDF dari HP saya?",
      a: "Tergantung penerimanya: email untuk dokumen resmi, AirDrop atau Nearby Share untuk seseorang di dekat Anda, aplikasi pesan untuk kiriman santai cepat, dan tautan cloud untuk file besar atau banyak penerima.",
    },
    {
      q: "Mengapa PDF saya tidak mau terkirim lewat email?",
      a: "Kemungkinan besar melebihi batas lampiran ~25 MB, biasanya karena penuh hasil pindaian. Kompres dulu, atau bagikan tautan cloud sebagai gantinya.",
    },
    {
      q: "Apakah aplikasi pesan mengubah PDF saya?",
      a: "Beberapa mengompres ulang atau membatasi lampiran, yang bisa memengaruhi kualitas. Untuk dokumen yang harus sampai persis seperti saat dikirim, gunakan email atau tautan cloud daripada aplikasi obrolan.",
    },
    {
      q: "Apakah AirDrop atau Nearby Share privat?",
      a: "Ya — file berpindah langsung antarperangkat tanpa melewati server atau internet, yang menjadikannya pilihan baik untuk dokumen sensitif yang dibagikan secara langsung.",
    },
    {
      q: "Bagaimana cara menghindari membagikan halaman yang salah?",
      a: "Tinjau dokumen sebelum menekan bagikan, dan buang halaman mana pun yang seharusnya tidak ikut terkirim. Lihat panduan tentang menyiapkan PDF sebelum berbagi untuk daftar periksa lengkap sebelum mengirim.",
    },
  ],
  related: [
    { label: "PDF Editor — siapkan dan bagikan di mobile", path: "/pdf-editor" },
    { label: "Cara menyiapkan PDF sebelum berbagi", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Cara mengirim file PDF berukuran besar", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Cara memperkecil PDF di Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
