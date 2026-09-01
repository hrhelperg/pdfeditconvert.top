import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Apakah Alat PDF Online Menyimpan File Anda? Yang Perlu Diperiksa",
  description:
    "Sebagian alat PDF online menghapus file yang diunggah seketika, sebagian menahannya selama beberapa jam, sebagian menyimpannya tanpa batas waktu. Cara cepat membaca kebijakan privasi dan yang perlu dicari.",
  updated: "2026-05-29",
  intro: [
    "Saat sebuah alat PDF gratis meminta Anda mengunggah file, pertanyaan yang jujur untuk ditanyakan adalah: apa yang terjadi pada file itu sesudahnya? Jawabannya sangat bervariasi. Sebagian alat menghapus unggahan begitu proses konversi selesai. Sebagian menahannya selama satu jam 'demi kenyamanan Anda'. Sebagian lagi menyimpannya lebih lama dengan bahasa yang samar-samar soal 'peningkatan layanan'. Sebagian bahkan memakainya untuk melatih model yang tidak Anda ketahui.",
    "Kebijakan privasi memang menjelaskan itu, tapi kebijakan privasi biasanya panjang, sering samar-samar, dan kadang sudah usang. Membacanya secara terarah hanya butuh semenit dan memberi tahu Anda apa yang sebenarnya perlu diketahui. Dan untuk file yang cukup sensitif sehingga penyimpanannya jadi penting, langkah yang lebih aman adalah memilih alat yang sama sekali tidak mengunggah.",
    "Panduan ini menjelaskan cara membaca kebijakan privasi dengan cepat, menjelaskan pola-pola yang perlu dicari, dan menunjukkan alternatif yang lebih aman saat proses unggahnya sendiri yang menjadi masalah.",
  ],
  steps: [
    {
      title: "Temukan kebijakannya dan langsung ke bagian retensi",
      body: "Kebijakan privasi biasanya ditautkan di footer. Cari di halaman (Ctrl-F) kata-kata seperti 'menyimpan', 'menghapus', 'menahan', 'penyimpanan'. Kata-kata itu langsung mengarahkan Anda ke bagian retensi.",
    },
    {
      title: "Baca angka retensi yang sebenarnya",
      body: "'File dihapus dalam satu jam' itu konkret dan meyakinkan. 'Kami menghapus file saat sudah tidak diperlukan lagi' itu samar-samar dan bisa berarti apa saja. Komitmen berbentuk angka itu penting; niat baik saja tidak cukup.",
    },
    {
      title: "Periksa apa yang disimpan selain filenya sendiri",
      body: "Metadata (nama file, ukuran file, tipe, alamat IP) biasanya disimpan lebih lama daripada isi filenya sendiri. Untuk sebagian besar keperluan, penyimpanan metadata masih bisa diterima; untuk pekerjaan yang sangat sensitif, bahkan itu pun jadi tanda peringatan.",
    },
    {
      title: "Cari klausul soal data pelatihan",
      body: "Sebagian alat gratis memberi diri mereka izin memakai file yang diunggah untuk peningkatan layanan atau pelatihan model. Cari kata-kata seperti 'meningkatkan', 'melatih', 'analitik'. Jika ditemukan, anggap itu sebagai tanda peringatan yang lebih kuat untuk konten sensitif.",
    },
    {
      title: "Periksa bagian berbagi dengan pihak ketiga",
      body: "Bahkan jika alat itu tidak menyimpan file Anda, mereka mungkin membagikannya ke penyedia hosting, sub-pemroses, atau vendor analitik. Masing-masing adalah pihak lain yang punya akses. Cari kata-kata seperti 'penyedia layanan', 'sub-pemroses', 'pihak ketiga'.",
    },
    {
      title: "Pilih pemrosesan lokal sebagai default untuk apa pun yang sensitif",
      body: "Jika alat itu berjalan di browser Anda tanpa mengunggah (verifikasi lewat devtools), retensi bukan lagi masalah — tidak ada apa pun yang perlu disimpan. Pakai jalur ini saat penyimpanan file itu menjadi hal yang penting.",
    },
  ],
  tips: [
    "Gratis + retensi samar-samar + pihak ketiga yang tidak jelas = hindari untuk file sensitif. Kombinasi ini adalah risiko yang paling tinggi.",
    "Bahkan kebijakan retensi yang bersih pun bukan jaminan. Kebocoran server memang terjadi. Satu-satunya opsi yang benar-benar bebas risiko adalah tidak mengunggah sama sekali.",
    "Perlakukan file yang diunggah sebagai sudah tidak aman lagi untuk tujuan apa pun yang tidak bisa Anda audit. Jika Anda tidak akan mempostingnya secara publik, pikirkan dua kali sebelum mengunggahnya.",
    "Jika Anda memang harus mengunggah, lindungi file itu dengan kata sandi terlebih dahulu. Alatnya hanya melihat data terenkripsi; enkripsi itu melindungi isinya.",
    "Jangan percaya klaim 'kami tidak menyimpan' tanpa verifikasi — bahasa dalam kebijakan privasi dan perilaku sebenarnya bisa berbeda.",
  ],
  mobileNote:
    "Aplikasi HP sering punya kebijakan privasi terpisah di App Store atau pengaturan. Aplikasi PDF Editor memproses secara lokal dan sama sekali tidak mengunggah file Anda, sehingga retensi tidak lagi relevan. Untuk pekerjaan di HP dengan materi sensitif, hanya-lokal adalah default yang paling bersih.",
  faq: [
    {
      q: "Berapa lama kebanyakan alat PDF online menyimpan file?",
      a: "Sangat bervariasi: dari hitungan menit sampai tanpa batas waktu. Alat komersial besar biasanya menghapus dalam satu jam; alat yang lebih kecil dan gratis tidak konsisten. Baca kebijakan privasi masing-masing secara terpisah.",
    },
    {
      q: "Apakah retensi singkat sudah cukup aman?",
      a: "Tergantung filenya. Untuk dokumen biasa, satu jam sudah cukup. Untuk materi yang benar-benar sensitif, retensi berapa pun tetaplah jendela risiko yang nyata.",
    },
    {
      q: "Bagaimana dengan file yang sudah dihapus — apakah benar-benar hilang?",
      a: "Biasanya ya dari penyimpanan aktifnya, tapi cadangan dan salinannya bisa menyimpan salinan lebih lama. Penghapusan yang benar-benar aman secara teknis lebih sulit daripada kedengarannya.",
    },
    {
      q: "Apakah alat gratis selalu menyimpan lebih lama daripada yang berbayar?",
      a: "Ini kecenderungan, bukan aturan pasti. Sebagian alat gratis punya kebijakan retensi yang bersih; sebagian alat berbayar punya klausul yang mengejutkan. Baca keduanya.",
    },
    {
      q: "Apa jalur paling aman untuk PDF yang sensitif?",
      a: "Alat berbasis browser yang memproses secara lokal (tanpa unggah). Jika Anda memang harus mengunggah, lindungi dengan kata sandi terlebih dahulu dan pilih alat dengan komitmen penghapusan yang eksplisit.",
    },
  ],
  related: [
    { label: "PDF tools — berbasis browser, tanpa unggah", path: "/pdf-tools" },
    { label: "Apakah alat PDF online aman?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Alat PDF berbasis browser dibanding alat unggah", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Cara menghindari mengunggah dokumen sensitif", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF tools — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
