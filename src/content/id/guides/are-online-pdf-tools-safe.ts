import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Apakah Alat PDF Online Aman? Pandangan Jujur soal Risikonya",
  description:
    "Sebagian besar alat PDF “online” mengunggah file Anda ke server. Sebagian tidak. Risiko sebenarnya, kategori alat yang menangani data secara berbeda, dan cara membedakan mana yang mana.",
  updated: "2026-05-29",
  intro: [
    "'Alat PDF online' adalah istilah yang menyembunyikan perbedaan besar. Sebagian alat ini mengunggah file Anda ke server mereka, memprosesnya di sana, lalu mengirim hasilnya kembali. Yang lain berjalan sepenuhnya di browser Anda — file Anda tidak pernah meninggalkan perangkat. Keduanya kadang sama-sama disebut 'online', dan perbedaan itu cukup penting untuk apa pun yang sifatnya sensitif.",
    "Jawaban jujur untuk 'apakah aman' adalah: tergantung jenis mana yang Anda pakai dan apa isi filenya. Rekening koran yang melewati alat yang mengunggah adalah risiko nyata, bahkan dengan kebijakan retensi yang dinyatakan sekalipun. Rekening koran yang sama di alat yang memproses secara lokal tidak pernah menyentuh jaringan mereka, jadi profil risikonya sama sekali berbeda.",
    "Panduan ini memisahkan kategori-kategori tersebut tanpa membesar-besarkan ketakutan. Panduan ini menjelaskan di mana risiko sesungguhnya berada, cara membaca kebijakan privasi dengan cepat, dan cara mengetahui apakah alat yang Anda pertimbangkan mengunggah atau berjalan lokal — tanpa menelan mentah-mentah teks pemasarannya.",
  ],
  steps: [
    {
      title: "Kenali kategori alat itu",
      body: "Ada tiga kategori: (1) unggah penuh — file dikirim ke server, diproses di sana. (2) Berbasis browser dengan sinkronisasi opsional — berjalan lokal tapi menawarkan fitur cloud. (3) Hanya browser — tidak pernah mengunggah. Kategori inilah yang menentukan risiko sesungguhnya.",
    },
    {
      title: "Periksa kebijakan privasi soal masa retensi",
      body: "Cari kata-kata seperti 'menyimpan', 'menahan', 'menghapus setelah'. Kebijakan yang mengatakan 'file dihapus dalam satu jam' menunjukkan itu kategori (1). Kebijakan yang mengatakan 'file tidak pernah meninggalkan perangkat Anda' menunjukkan kategori (3). Kebijakan yang samar-samar adalah tanda peringatan.",
    },
    {
      title: "Amati lalu lintas jaringan untuk memverifikasi",
      body: "Buka developer tools, tab network, seret PDF Anda ke sana. Jika Anda melihat unggahan (permintaan keluar berukuran besar saat menambahkan file), berarti file itu diunggah. Jika tidak, berarti diproses secara lokal. Ini adalah cara verifikasi paling langsung.",
    },
    {
      title: "Sesuaikan alat dengan tingkat sensitivitas filenya",
      body: "File santai (foto liburan yang dijadikan PDF) bisa melewati kategori mana pun. File sensitif (keuangan, hukum, medis, pribadi) sebaiknya memakai kategori (3) atau alat berbayar dengan jaminan penanganan data yang eksplisit.",
    },
    {
      title: "Pertimbangkan apa arti 'aman' untuk situasi Anda",
      body: "Kadang risikonya bersifat korporat (jangan sampai bocor data klien). Kadang bersifat regulasi (HIPAA, GDPR). Kadang bersifat pribadi (menghindari pencurian identitas). Alat yang tepat tergantung pada ancaman yang sebenarnya Anda hadapi.",
    },
    {
      title: "Pilih alat berbasis browser sebagai default jika ragu",
      body: "Alat berbasis browser yang tidak mengunggah aman secara default — file tidak bisa bocor dari server yang bahkan tidak pernah menerimanya. Alat-alat di situs ini termasuk dalam kategori tersebut.",
    },
  ],
  tips: [
    "Gratis + mengunggah + kebijakan privasi tidak jelas = hindari untuk apa pun yang sensitif. Kombinasi ini adalah profil risiko yang paling tinggi.",
    "Bahkan alat yang mengunggah dengan kebijakan privasi yang kuat pun tetap punya celah serangan yang nyata — kebocoran server, kegagalan retensi, akses karyawan. Pemrosesan lokal menghilangkan celah itu sama sekali.",
    "Jangan percaya klaim 'kami tidak menyimpan' tanpa verifikasi. Mengamati lalu lintas jaringan adalah satu-satunya cara untuk benar-benar tahu.",
    "Alat berbasis browser punya batasannya sendiri — operasi berat dan OCR terkadang membutuhkan bantuan server. Kenali batasannya; jangan menjanjikan lebih dari yang bisa dilakukan.",
    "Jika sebuah alur kerja mengharuskan unggahan (jarang terjadi), pilih alat dengan kebijakan retensi yang dinyatakan jelas, dan gunakan file yang sudah dilindungi kata sandi terbaru.",
  ],
  mobileNote:
    "Alat PDF di HP juga terbagi menjadi yang mengunggah dan yang hanya lokal. Aplikasi PDF Editor memproses semuanya langsung di perangkat, di iOS dan Android — tanpa unggahan, tanpa akun, tanpa sinkronisasi kecuali Anda mengaktifkannya. Untuk dokumen sensitif di HP, itulah pengaturan default yang tepat.",
  faq: [
    {
      q: "Apakah mengunggah PDF saya ke alat online benar-benar berisiko?",
      a: "Tergantung filenya. Untuk itinerary liburan, risikonya sangat rendah. Untuk catatan keuangan atau kontrak, risikonya nyata — kebocoran server dan kegagalan retensi memang terjadi. Sesuaikan alatnya dengan filenya.",
    },
    {
      q: "Bagaimana cara mengetahui apakah sebuah alat mengunggah atau memproses secara lokal?",
      a: "Buka devtools browser, tab network, jatuhkan file ke dalamnya. Jika permintaan jaringan keluar berukuran besar muncul saat Anda menambahkan file, berarti itu mengunggah. Jika tidak, berarti diproses secara lokal.",
    },
    {
      q: "Apakah alat berbayar lebih aman dibanding yang gratis?",
      a: "Kadang-kadang. Alat berbayar sering punya komitmen retensi dan penanganan data yang eksplisit. Sebagian alat gratis (seperti yang ada di situs ini) berjalan secara lokal dan tidak membutuhkan komitmen semacam itu karena mereka tidak pernah menerima file Anda sama sekali.",
    },
    {
      q: "Bagaimana dengan enkripsi ujung ke ujung (end-to-end)?",
      a: "Berguna untuk berbagi, tapi tidak membantu saat pemrosesan. Jika sebuah server harus membaca file Anda untuk mengompresnya, enkripsi saat pengiriman tidak mengubah fakta bahwa server tetap melihat isinya.",
    },
    {
      q: "Perlukah saya mengenkripsi PDF sebelum mengunggahnya?",
      a: "Jika Anda memang harus mengunggahnya, ya. PDF yang sudah dilindungi kata sandi sampai ke server dalam keadaan sudah terlindungi. Tapi lebih baik hindari sepenuhnya proses unggah untuk materi yang sensitif.",
    },
  ],
  related: [
    { label: "PDF tools — berbasis browser, tanpa unggah", path: "/pdf-tools" },
    { label: "Alat PDF yang mengutamakan privasi", path: "/guides/privacy-first-pdf-tools" },
    { label: "Alat PDF berbasis browser dibanding alat unggah", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Apakah alat PDF online menyimpan file Anda?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "PDF tools — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
