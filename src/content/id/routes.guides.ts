import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Indonesian route manifest for the guide library.
 *
 * Slugs follow natural Indonesian search phrasing under the fixed
 * "panduan/" section prefix (never a literal rendering of the English
 * slug, and never identical to it). Terminology policy:
 * docs/localization/id-terminology.md.
 */
export const ID_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "panduan/cara-mengedit-pdf-di-iphone",
    title: "Cara Mengedit PDF di iPhone (Panduan 2026)",
    description:
      "Perbaiki teks, tambahkan gambar, dan urutkan ulang halaman PDF langsung di iPhone. Panduan langkah demi langkah menggunakan aplikasi PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "panduan/cara-mengedit-pdf-di-android",
    title: "Cara Mengedit PDF di Android (Panduan 2026)",
    description:
      "Edit PDF di Android: ubah teks, sisipkan halaman, dan tanda tangani dokumen. Instruksi langkah demi langkah yang jelas menggunakan aplikasi PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "panduan/cara-mengompres-pdf",
    title: "Cara Mengompres PDF (Tanpa Mengurangi Kualitas)",
    description:
      "Perkecil ukuran file PDF untuk email atau unggahan tanpa mengurangi kualitas. Tutorial ramah HP menggunakan aplikasi PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "panduan/cara-menggabungkan-file-pdf",
    title: "Cara Menggabungkan File PDF di HP atau Komputer",
    description:
      "Gabungkan beberapa PDF menjadi satu dokumen. Alur kerja mobile langkah demi langkah dengan aplikasi PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "panduan/cara-tanda-tangan-pdf-di-hp",
    title: "Cara Tanda Tangan PDF di HP Anda",
    description:
      "Tambahkan tanda tangan elektronik yang sah secara hukum ke PDF dari iPhone atau Android. Panduan praktis menggunakan aplikasi PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "panduan/cara-memindai-dokumen-ke-pdf",
    title: "Cara Memindai Dokumen ke PDF dengan HP",
    description:
      "Gunakan kamera HP untuk memindai dokumen multihalaman menjadi PDF yang rapi. Alur kerja mobile dengan deteksi tepi otomatis dan OCR.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "panduan/aplikasi-pdf-terbaik-untuk-pelajar",
    title: "Aplikasi PDF Terbaik untuk Pelajar (2026)",
    description:
      "Yang benar-benar dibutuhkan pelajar dari aplikasi PDF: catatan, sorotan, tanda tangan, dan konversi gratis. Kriteria penilaian yang jujur.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "panduan/aplikasi-pdf-terbaik-untuk-bisnis",
    title: "Aplikasi PDF Terbaik untuk Bisnis (2026)",
    description:
      "Yang perlu dicari tim kecil dalam aplikasi PDF: tanda tangan, kontrak, keamanan, dan kolaborasi dari HP.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "panduan/pdf-atau-docx",
    title: "PDF atau DOCX — Format Mana yang Sebaiknya Anda Pakai?",
    description:
      "Kapan sebaiknya memilih PDF daripada DOCX, dan sebaliknya. Perbandingan jelas soal kemudahan edit, akurasi tampilan, tanda tangan, dan berbagi file.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "panduan/cara-melindungi-file-pdf-dengan-kata-sandi",
    title: "Cara Melindungi File PDF dengan Kata Sandi",
    description:
      "Tambahkan perlindungan kata sandi dan enkripsi ke PDF di HP atau komputer. Panduan praktis menggunakan aplikasi PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "panduan/cara-mengonversi-pdf-ke-word",
    title: "Cara Mengonversi PDF ke Word, Gratis di Browser",
    description:
      "Keluarkan teks dari PDF menjadi dokumen Word yang dapat diedit di browser. Apa yang terkonversi dengan bersih, apa yang perlu dirapikan, dan kapan hasil pindaian tidak akan berhasil.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "panduan/cara-mengonversi-word-ke-pdf",
    title: "Cara Mengonversi Word ke PDF, Gratis Tanpa Unggah",
    description:
      "Ubah file .docx atau .txt menjadi PDF yang rapi dan siap dibagikan di browser. Alasan PDF adalah format yang tepat untuk dikirim, dan yang perlu diperiksa sebelum mengekspor.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "panduan/cara-mengonversi-jpg-ke-pdf",
    title: "Cara Mengonversi JPG ke PDF, Gratis dari Gambar ke PDF",
    description:
      "Gabungkan satu atau banyak foto JPG menjadi satu PDF di browser. Cocok untuk struk, kartu identitas, dan dokumen hasil foto, lengkap dengan catatan jujur soal kualitas dan HEIC di iPhone.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "panduan/cara-mengonversi-png-ke-pdf",
    title: "Cara Mengonversi PNG ke PDF untuk Tangkapan Layar dan Grafik yang Tajam",
    description:
      "Ubah tangkapan layar, diagram, dan grafik PNG menjadi satu PDF di browser. Alasan PNG membuat teks tetap tajam, dan yang terjadi pada transparansi.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "panduan/cara-mengonversi-webp-ke-pdf",
    title: "Cara Mengonversi WebP ke PDF dari Gambar Web ke Dokumen",
    description:
      "Ubah gambar WebP yang disimpan dari web menjadi satu PDF di browser. Alasan WebP sering ditolak aplikasi lain, dan cara konversi ini memperbaiki kompatibilitasnya.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "panduan/cara-mengonversi-pdf-ke-jpg",
    title: "Cara Mengonversi PDF ke JPG, Ekspor Halaman sebagai Gambar",
    description:
      "Ekspor halaman PDF sebagai gambar JPG di browser. Kapan JPG jadi pilihan tepat dibanding PNG, bagaimana skala memengaruhi kualitas, dan kapan pratinjau gambar lebih unggul dari PDF.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "panduan/cara-mengonversi-pdf-ke-png",
    title: "Cara Mengonversi PDF ke PNG, Gambar Halaman yang Tajam dan Lossless",
    description:
      "Ekspor halaman PDF sebagai gambar PNG berkualitas tinggi di browser. Alasan PNG menjaga teks dan diagram tetap tajam, plus catatan soal skala dan transparansi.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "panduan/cara-mengonversi-foto-ke-pdf-di-iphone",
    title: "Cara Mengonversi Foto ke PDF di iPhone (Mengatasi HEIC)",
    description:
      "Ubah foto iPhone menjadi satu PDF, termasuk mengatasi format HEIC yang sering bikin bingung. Cara lewat browser dan cara yang lebih cepat lewat aplikasi.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "panduan/cara-mengonversi-foto-ke-pdf-di-android",
    title: "Cara Mengonversi Foto ke PDF di Android",
    description:
      "Ubah foto Android menjadi satu PDF memakai alat di browser atau fitur Cetak ke PDF bawaan. Ditambah alur kerja yang lebih cepat lewat aplikasi dengan fitur pindai.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "panduan/cara-mengonversi-dokumen-hasil-pindaian-ke-pdf",
    title: "Cara Mengonversi Dokumen Hasil Pindaian ke PDF",
    description:
      "Sudah punya gambar hasil pindaian atau foto kertas? Gabungkan semuanya jadi satu PDF di browser, plus penjelasan soal OCR dan alasan hasil pindaian butuh OCR agar bisa dicari.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "panduan/cara-membagi-file-pdf",
    title: "Cara Membagi PDF Menjadi File Terpisah (Gratis)",
    description:
      "Pecah satu PDF besar menjadi file-file lebih kecil berdasarkan rentang halaman, di browser. Kapan sebaiknya membagi dan kapan sebaiknya mengekstrak, plus cara menjaga file asli tetap aman.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "panduan/cara-mengekstrak-halaman-dari-pdf",
    title: "Cara Mengekstrak Halaman dari PDF (Gratis, Tanpa Unggah)",
    description:
      "Tarik halaman atau rentang tertentu dari PDF ke file baru, di browser. Cocok untuk mengirim hanya halaman yang dibutuhkan orang lain.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "panduan/cara-mengurutkan-ulang-halaman-pdf",
    title: "Cara Mengurutkan Ulang Halaman PDF (Gratis, di Browser)",
    description:
      "Susun ulang halaman PDF ke urutan yang benar, di browser. Perbaiki hasil pindaian yang terbalik atau file gabungan yang urutannya berantakan.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "panduan/cara-memutar-halaman-pdf",
    title: "Cara Memutar Halaman PDF (Gratis, Tanpa Unggah)",
    description:
      "Putar semua atau halaman pilihan PDF sebesar 90, 180, atau 270 derajat di browser. Perbaiki hasil pindaian mendatar dan halaman terbalik agar dokumen terbaca dengan benar.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "panduan/cara-menambahkan-watermark-ke-pdf",
    title: "Cara Menambahkan Watermark ke PDF (Gratis)",
    description:
      "Bubuhkan teks seperti DRAFT atau RAHASIA di setiap halaman PDF, di browser. Penjelasan jujur soal apa yang dilindungi watermark dan apa yang tidak.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "panduan/cara-menghapus-halaman-yang-tidak-diinginkan-dari-pdf",
    title: "Cara Menghapus Halaman yang Tidak Diinginkan dari PDF",
    description:
      "Buang halaman kosong, halaman sampul, atau bagian yang tidak relevan dari PDF di browser dengan hanya menyimpan halaman yang Anda mau. File bersih, proses tetap privat.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "panduan/cara-merapikan-file-pdf",
    title: "Cara Merapikan File PDF, Alur Kerja yang Praktis",
    description:
      "Bawa keteraturan ke PDF yang berantakan: gabungkan file terkait, urutkan ulang halaman, buang yang tidak perlu, dan beri nama yang benar. Alur kerja yang bisa diulang memakai alat browser gratis.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "panduan/cara-menyiapkan-pdf-sebelum-dibagikan",
    title: "Cara Menyiapkan PDF Sebelum Dibagikan (Daftar Periksa)",
    description:
      "Daftar periksa sebelum mengirim PDF: rapikan halaman nyasar, perbaiki orientasi, perkecil ukuran, dan beri label draf. Kirim dokumen yang bersih, berukuran pas, dan sesuai maksud.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "panduan/cara-memperbaiki-halaman-pdf-yang-miring",
    title: "Cara Memperbaiki Halaman PDF yang Miring atau Terbalik",
    description:
      "Luruskan halaman PDF yang terbuka miring atau terbalik secara permanen, di browser. Alasan memutar layar tidak membantu, dan yang benar-benar memperbaikinya.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "panduan/cara-mengompres-pdf-online-tanpa-mengunggah",
    title: "Cara Mengompres PDF Online Tanpa Mengunggahnya",
    description:
      "Perkecil PDF langsung di browser, tanpa unggah, tanpa akun. Bedanya kompresi di perangkat dengan alat online pada umumnya, dan trade-off kualitasnya.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "panduan/cara-memperkecil-ukuran-file-pdf-untuk-email",
    title: "Cara Memperkecil Ukuran File PDF untuk Email",
    description:
      "Buat PDF muat di bawah batas lampiran Gmail dan Outlook. Batas sebenarnya, alasan hasil pindaian sering melampauinya, dan cara memperkecil file agar berhasil terkirim.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "panduan/cara-memperkecil-pdf-di-iphone",
    title: "Cara Memperkecil PDF di iPhone",
    description:
      "Perkecil PDF di iPhone memakai alat browser atau aplikasi PDF Editor. Alasan hasil pindaian di iPhone jadi besar dan cara membuatnya masuk batas pengiriman.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "panduan/cara-memperkecil-pdf-di-android",
    title: "Cara Memperkecil PDF di Android",
    description:
      "Kompres PDF di HP Android mana pun memakai alat browser tanpa instalasi, atau aplikasi PDF Editor. Buat hasil pindaian masuk batas email dan unggahan.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "panduan/mengapa-file-pdf-saya-besar-sekali",
    title: "Mengapa File PDF Saya Besar Sekali? Penyebab dan Solusinya",
    description:
      "Alasan sebenarnya sebuah PDF membengkak ukurannya, mulai dari hasil pindaian, foto tersemat, hingga font, dan solusi yang tepat untuk masing-masing, memakai alat browser gratis.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "panduan/mengompres-pdf-tanpa-terlalu-banyak-mengurangi-kualitas",
    title: "Mengompres PDF Tanpa Terlalu Banyak Mengurangi Kualitas",
    description:
      "Temukan titik seimbang antara ukuran file dan kualitas. Cara tingkat kompresi menukar detail dengan ukuran, dan cara memilih tingkat paling ringan yang masih bagus hasilnya.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "panduan/cara-mengompres-pdf-hasil-pindaian",
    title: "Cara Mengompres PDF Hasil Pindaian (Hemat Besar)",
    description:
      "PDF hasil pindaian paling mudah diperkecil dan paling sering jadi masalah ukuran. Cara mengompresnya secara drastis, dan yang terjadi pada teks yang dapat dicari.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "panduan/pengaturan-kompresi-pdf-terbaik",
    title: "Pengaturan Kompresi PDF Terbaik, Panduan Mengambil Keputusan",
    description:
      "Tingkat kompresi mana untuk email, cetak, arsip, atau web? Matriks praktis yang mencocokkan pengaturan dengan tujuan, lengkap dengan trade-off yang jujur.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "panduan/cara-mengirim-file-pdf-berukuran-besar",
    title: "Cara Mengirim File PDF Berukuran Besar (5 Cara yang Bisa Diandalkan)",
    description:
      "Lima cara yang bisa diandalkan untuk mengirim PDF yang terlalu besar untuk email, mulai dari kompresi, pembagian file, tautan cloud, dan lainnya, plus cara memilih di antaranya.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "panduan/cara-memperkecil-ukuran-pdf-sebelum-diunggah",
    title: "Cara Memperkecil Ukuran PDF Sebelum Diunggah",
    description:
      "Portal unggahan menolak file besar lebih ketat daripada email. Cara membuat PDF masuk batas portal yang ketat tanpa mengorbankan keterbacaan yang mereka periksa.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "panduan/cara-tanda-tangan-pdf-di-iphone",
    title: "Cara Tanda Tangan PDF di iPhone (Panduan 2026)",
    description:
      "Tanda tangani PDF di iPhone memakai Markup atau aplikasi PDF Editor. Keterbatasan cara bawaan, dan kapan aplikasi khusus jadi alat tanda tangan yang lebih baik.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "panduan/cara-tanda-tangan-pdf-di-android",
    title: "Cara Tanda Tangan PDF di Android (Panduan 2026)",
    description:
      "Tanda tangani PDF di Android, yang tidak punya fitur tanda tangan bawaan universal. Cara lewat aplikasi yang bisa diandalkan, beragam opsi dari merek HP, dan dasar hukumnya.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "panduan/cara-mengisi-formulir-pdf-di-hp",
    title: "Cara Mengisi Formulir PDF di HP Anda",
    description:
      "Isi formulir PDF di iPhone atau Android, baik yang punya kolom formulir asli maupun yang berupa formulir non-interaktif. Ketuk untuk mengetik, tambahkan kotak teks, dan tanda tangani di satu tempat.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "panduan/cara-memberi-anotasi-pdf-di-hp",
    title: "Cara Memberi Anotasi pada PDF di HP",
    description:
      "Beri sorotan, komentar, dan coretan pada PDF dari HP atau tablet Anda. Alat anotasi yang benar-benar penting, dan cara menjaga coretan Anda tetap terbaca.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "panduan/cara-mengelola-pdf-di-hp",
    title: "Cara Mengelola PDF di HP Anda",
    description:
      "Jaga PDF di HP agar tidak berantakan: ganti nama, rapikan ke dalam folder, sinkron ke cloud, dan bebaskan penyimpanan. Rutinitas perawatan yang praktis.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "panduan/cara-membuat-pdf-dari-kamera",
    title: "Cara Membuat PDF dari Kamera Anda",
    description:
      "Ubah hasil jepretan kamera menjadi PDF, dan alasan pindaian yang benar lebih baik daripada foto mentah. Pengambilan cepat untuk struk dan papan tulis, pemindaian untuk dokumen.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "panduan/cara-membagikan-pdf-dari-hp",
    title: "Cara Membagikan PDF dari HP Anda",
    description:
      "Bagikan PDF dari iPhone atau Android dengan cara yang tepat, lewat email, AirDrop, pesan, atau tautan, dan cara mengatur ukuran serta menyiapkannya agar benar-benar sampai.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "panduan/alat-pdf-gratis-terbaik-untuk-pelajar",
    title: "Alat PDF Gratis Terbaik untuk Pelajar (2026)",
    description:
      "Alat PDF gratis tanpa daftar yang mencakup tugas nyata pelajar, mulai dari menggabungkan bahan bacaan, mengompres tugas, mengonversi, hingga memberi anotasi, tanpa dinding pembayaran.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "panduan/alur-kerja-pdf-terbaik-untuk-pekerja-lepas",
    title: "Alur Kerja PDF Terbaik untuk Pekerja Lepas",
    description:
      "Alur kerja PDF yang bisa diulang untuk pekerja lepas: proposal terkirim, kontrak tertanda tangan, faktur terkirim. Alat gratis dan aplikasi mobile yang menjaganya tetap cepat dan privat.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "panduan/alat-pdf-gratis-terbaik-untuk-bisnis-kecil",
    title: "Alat PDF Gratis Terbaik untuk Bisnis Kecil",
    description:
      "Jalankan faktur, kontrak, dan catatan dengan alat PDF gratis dan privat, tanpa langganan per pengguna. Alat mana untuk pekerjaan apa, dan di mana posisi aplikasinya.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "panduan/pdf-atau-jpg-untuk-dokumen",
    title: "PDF atau JPG untuk Dokumen, Berhenti Mengirim Foto",
    description:
      "Alasan foto JPG dari sebuah dokumen adalah pilihan yang salah untuk dikirim, kapan PDF adalah pilihan tepat, dan cara mengonversi foto menjadi dokumen yang benar.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "panduan/kapan-menggunakan-pdf-daripada-docx",
    title: "Kapan Menggunakan PDF Daripada DOCX (Daftar Periksa)",
    description:
      "Anda punya dokumen Word, apakah sebaiknya dikirim sebagai PDF saja? Daftar periksa singkat momen-momen PDF adalah pilihan yang tepat, dan cara mengonversinya.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "panduan/alat-pdf-berbasis-browser-atau-alat-berbasis-unggahan",
    title: "Alat PDF Berbasis Browser atau Alat Berbasis Unggahan",
    description:
      "Tidak semua alat PDF “online” itu sama. Perbedaan antara alat yang berjalan di browser Anda dan yang mengunggah file Anda, serta cara membedakannya.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "panduan/alat-pdf-yang-mengutamakan-privasi",
    title: "Alat PDF yang Mengutamakan Privasi, File Tetap di Perangkat Anda",
    description:
      "PDF menyimpan sebagian data Anda yang paling sensitif. Cara mengolahnya tanpa mengunggah apa pun, dan arti sebenarnya dari “mengutamakan privasi”.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "panduan/kesalahan-pdf-umum-yang-harus-dihindari",
    title: "Kesalahan PDF Umum yang Harus Dihindari",
    description:
      "Kesalahan PDF yang membuang waktu atau membocorkan informasi, seperti kompresi berlebihan, mengirim foto, mengunggah file sensitif, dan lupa halaman, serta cara menghindarinya.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "panduan/mengapa-pdf-saya-tidak-mau-terbuka",
    title: "Mengapa PDF Saya Tidak Mau Terbuka? Penyebab dan Solusi Praktis",
    description:
      "PDF yang menolak terbuka hampir selalu salah satu dari lima hal. Cara mendiagnosis unduhan yang rusak, kunci kata sandi, bug aplikasi pembaca, dan file lama, serta solusi untuk masing-masing.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "panduan/mengapa-pdf-saya-kosong",
    title: "Mengapa PDF Saya Kosong? Penyebab Sebenarnya dan Cara Memulihkannya",
    description:
      "Saat PDF terbuka dengan halaman kosong, isinya biasanya masih ada, hanya tersembunyi karena render gagal, font hilang, atau kesalahan pindaian. Cara mengetahui penyebabnya dan mengembalikan dokumen.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "panduan/mengapa-saya-tidak-bisa-mengedit-pdf",
    title: "Mengapa Saya Tidak Bisa Mengedit PDF? Alasan Sebenarnya dan Solusinya",
    description:
      "PDF memang dirancang untuk sulit diedit, tapi beberapa hal spesifik, seperti hasil pindaian, tanda keamanan, dan keterbatasan aplikasi pembaca, membuat sebagian file lebih sulit dari yang lain. Apa yang menghalangi file Anda, dan apa yang benar-benar berhasil.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "panduan/mengapa-pdf-saya-buram",
    title: "Mengapa PDF Saya Buram? Penyebab Resolusi, Kompresi, dan Pindaian",
    description:
      "PDF yang buram berasal dari hasil pindaian resolusi rendah, kompresi yang terlalu agresif, atau ekspor yang buruk, bukan dari format itu sendiri. Cara mengenali penyebabnya dan mengembalikan ketajamannya.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "panduan/cara-memperbaiki-file-pdf-yang-rusak",
    title: "Cara Memperbaiki File PDF yang Rusak (yang Benar-Benar Berhasil)",
    description:
      "Sebagian besar PDF yang “rusak” sebenarnya bukan rusak, melainkan unduhan terpotong, ketidakcocokan aplikasi pembaca, atau penulisan file yang tidak selesai. Daftar periksa jujur untuk memulihkan file, dan kapan file benar-benar hilang.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "panduan/cara-mengatasi-masalah-mencetak-pdf",
    title: "Cara Mengatasi Masalah Mencetak PDF (Halaman Terpotong, Ukuran Salah, Teks Hilang)",
    description:
      "Saat PDF tercetak terpotong, skalanya salah, atau teksnya hilang, solusinya tergantung gejalanya. Matriks singkat yang mencocokkan tiap masalah cetak dengan pengaturan atau perbaikan yang tepat sebelum mencetak.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "panduan/cara-mengatasi-error-saat-mengunggah-pdf",
    title: "Cara Mengatasi Error Saat Mengunggah PDF (Terlalu Besar, Ditolak, Macet)",
    description:
      "Portal menolak PDF karena beberapa alasan: ukuran file, jumlah halaman, format yang terlalu ketat, atau proses unggah yang tidak stabil. Cara mengenali penyebabnya dan membuat file diterima di percobaan berikutnya.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "panduan/cara-mengatasi-masalah-format-pdf",
    title: "Cara Mengatasi Masalah Format PDF (Perataan Teks, Margin, Spasi)",
    description:
      "Saat tata letak PDF terlihat berantakan, teks mengalir salah, margin bergeser, spasi kacau, solusinya biasanya ada di dokumen sumber, bukan di PDF-nya. Alur kerja paling bersih untuk mendapatkan hasil ekspor yang rapi.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "panduan/cara-memperbaiki-kualitas-pdf-hasil-pindaian",
    title: "Cara Memperbaiki Kualitas PDF Hasil Pindaian (Menajamkan, Meluruskan, Mewarnai Ulang)",
    description:
      "PDF hasil pindaian bermasalah dengan cara yang bisa ditebak: miring, kontras pudar, latar belakang berbintik, file kebesaran. Penyesuaian sebelum memindai dan alat setelah memindai yang benar-benar merapikannya.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "panduan/cara-mengatasi-masalah-font-pdf",
    title: "Cara Mengatasi Masalah Font PDF (Hilang, Tergantikan, Berantakan)",
    description:
      "Saat PDF menampilkan font yang salah, kotak-kotak menggantikan karakter, atau teks tergantikan, biasanya font tersemat-nya hilang. Cara kerja penyematan font dan yang perlu diubah saat mengekspor.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "panduan/alat-pdf-terbaik-untuk-kerja-jarak-jauh",
    title: "Alat PDF Terbaik untuk Kerja Jarak Jauh (Gratis, Berbasis Browser)",
    description:
      "Alat PDF yang tetap andal saat kantor Anda hanya laptop dan HP: tanda tangan, kompres, gabung, pindai, bagikan, semuanya tanpa instalasi atau lisensi per pengguna.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "panduan/alat-pdf-terbaik-untuk-dokumen-kantor",
    title: "Alat PDF Terbaik untuk Dokumen Kantor (Word, Excel, Laporan)",
    description:
      "Perangkat PDF yang benar-benar dibutuhkan pekerjaan kantor: pergantian bolak-balik Word ke PDF yang bersih, penggabungan banyak dokumen, pengurutan ulang halaman, dan kompresi yang andal untuk lampiran email.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "panduan/alur-kerja-pdf-terbaik-untuk-tim",
    title: "Alur Kerja PDF Terbaik untuk Tim (File Bersama, Tinjauan, Persetujuan)",
    description:
      "Cara tim kecil memindahkan dokumen tanpa langganan PDF berbayar: alur serah terima yang bisa diulang untuk draf, tinjauan, dan persetujuan bertanda tangan memakai alat browser gratis.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "panduan/cara-membagikan-pdf-kepada-klien",
    title: "Cara Membagikan PDF kepada Klien (Secara Profesional dan Privat)",
    description:
      "Panduan singkat mengirim PDF ke klien: mengatur ukuran untuk email, pilihan kata sandi, memberi identitas merek pada file, dan memastikan file diterima, tanpa mengunggahnya ke pihak ketiga mana pun.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "panduan/cara-menyiapkan-pdf-untuk-keperluan-bisnis",
    title: "Cara Menyiapkan PDF untuk Keperluan Bisnis (Daftar Periksa Perapian)",
    description:
      "Sebelum PDF keluar dari kantor: rapikan draf, periksa penomoran halaman, perbaiki orientasi, sematkan font, dan perkecil ukuran file. Daftar periksa sebelum mengirim untuk dokumen yang mewakili bisnis Anda.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "panduan/cara-mengirim-kontrak-sebagai-pdf",
    title: "Cara Mengirim Kontrak sebagai PDF (Tanda Tangan, Kunci, Kirim)",
    description:
      "Kontrak menuntut alur kerja PDF yang lebih ketat: mengunci isi, menerapkan tanda tangan, memberi watermark pada draf, dan menghasilkan file akhir yang bisa langsung ditandatangani balik pihak lain tanpa bolak-balik.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "panduan/cara-merapikan-dokumen-kerja-sebagai-pdf",
    title: "Cara Merapikan Dokumen Kerja sebagai PDF (Folder, Nama, Versi)",
    description:
      "Konvensi penamaan dan folder yang praktis untuk PDF kerja, mulai dari penawaran, brief, hasil kerja, hingga arsip, yang menjaga kekacauan versi tetap terkendali dan membuat siapa pun bisa menemukan apa saja dengan cepat.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "panduan/cara-mengelola-faktur-sebagai-pdf",
    title: "Cara Mengelola Faktur sebagai PDF (Terbitkan, Lacak, Arsipkan)",
    description:
      "Alur kerja faktur berbentuk PDF yang tidak butuh software akuntansi: membuat, memberi nomor, mengirim, melacak, dan mengarsipkan, hanya dengan alat browser gratis dan sistem folder yang rapi.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "panduan/cara-membuat-file-pdf-siap-kirim-untuk-klien",
    title: "Cara Membuat File PDF Siap Kirim untuk Klien (Rapi, Sesuai Merek)",
    description:
      "Yang membedakan PDF internal dari PDF yang siap dikirim ke klien: halaman sampul, penomoran halaman, identitas merek, ukuran file, nama file. Sentuhan akhir cepat yang membuat dokumen terasa selesai.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "panduan/alur-kerja-pdf-untuk-bisnis-kecil",
    title: "Alur Kerja PDF untuk Bisnis Kecil (Penawaran, Kontrak, Catatan)",
    description:
      "Cara bisnis kecil menjalankan alur dokumennya lewat PDF, mulai dari penawaran keluar, kontrak kembali, hingga catatan terarsip, tanpa membeli paket langganan untuk itu.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "panduan/alur-kerja-pdf-untuk-konsultan",
    title: "Alur Kerja PDF untuk Konsultan (Proposal, Laporan, Faktur)",
    description:
      "Ritme PDF seorang konsultan: proposal yang berhasil closing, laporan yang tetap terbaca rapi di HP, faktur yang terkirim dalam hitungan detik. Alat berbasis browser yang menjaganya tetap ringkas.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "panduan/alur-kerja-pdf-untuk-agensi",
    title: "Alur Kerja PDF untuk Agensi (Presentasi, Brief, Persetujuan)",
    description:
      "Rantai PDF sebuah agensi, mulai dari dek presentasi, brief kreatif, persetujuan klien, hingga hasil kerja, tetap cepat dan bisa diprediksi dengan alat berbasis browser yang gratis dan privat.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "panduan/cara-mengumpulkan-tugas-sebagai-pdf",
    title: "Cara Mengumpulkan Tugas sebagai PDF (Tanpa Drama Portal)",
    description:
      "Portal sekolah menolak tugas karena alasan yang bisa ditebak: ukuran file, jumlah halaman, format. Jalan paling sederhana dari tugas selesai sampai unggahan PDF yang diterima.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "panduan/cara-memindai-catatan-tulisan-tangan-ke-pdf",
    title: "Cara Memindai Catatan Tulisan Tangan ke PDF (Bersih, Dapat Dicari)",
    description:
      "Ubah halaman catatan kuliah tulisan tangan menjadi PDF multihalaman yang bersih dengan kamera HP. Pengaturan yang menghasilkan hasil pindaian terbaca sejak percobaan pertama.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "panduan/cara-mengompres-pdf-untuk-portal-sekolah",
    title: "Cara Mengompres PDF untuk Portal Sekolah (Batas yang Ketat)",
    description:
      "Portal unggahan sekolah dan kampus membatasi ukuran PDF lebih ketat dibanding email. Cara mengompres tugas agar muat tanpa merusak keterbacaan yang diperiksa penguji.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "panduan/cara-mengonversi-catatan-kuliah-ke-pdf",
    title: "Cara Mengonversi Catatan Kuliah ke PDF (Word, Foto, Slide)",
    description:
      "Catatan kuliah datang dalam berbagai format: dokumen Word, slide presentasi, tangkapan layar, foto papan tulis. Cara mengubah masing-masing menjadi satu PDF yang terbaca tanpa kehilangan strukturnya.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "panduan/cara-merapikan-materi-belajar-sebagai-pdf",
    title: "Cara Merapikan Materi Belajar sebagai PDF (Folder, Penamaan, Indeks)",
    description:
      "PDF mata kuliah cepat menumpuk. Konvensi folder, penamaan, dan penggabungan sederhana yang menjaga materi semester tetap bisa dicari sejak minggu pertama sampai ujian akhir.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "panduan/cara-membagikan-catatan-belajar-sebagai-pdf",
    title: "Cara Membagikan Catatan Belajar sebagai PDF (Grup, Obrolan Grup, Cloud)",
    description:
      "Bagikan catatan dengan kelompok belajar tanpa kehilangan format atau kendali versi. Kebiasaan PDF yang menjaga belajar bersama agar tidak berubah jadi kekacauan tangkapan layar.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "panduan/cara-mengedit-dokumen-kelas-sebagai-pdf",
    title: "Cara Mengedit Dokumen Kelas sebagai PDF (Anotasi, Sorot, Tanda Tangan)",
    description:
      "Materi kelas, soal latihan, dan formulir persetujuan sering datang sebagai PDF. Cara memberi anotasi, mengisinya, dan mengembalikannya tanpa mencetak, semuanya dari HP atau laptop.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "panduan/alur-kerja-pdf-untuk-mahasiswa",
    title: "Alur Kerja PDF untuk Mahasiswa (Catatan, Tugas, Pengumpulan)",
    description:
      "Ritme PDF sepanjang semester yang bertahan sampai minggu ujian: catatan kuliah terpindai, tugas terkumpul, paket belajar terbagikan. Berbasis browser dan gratis.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "panduan/cara-membuat-pdf-belajar-digital",
    title: "Cara Membuat PDF Belajar Digital (Kartu Hafalan, Ringkasan, Paket Belajar)",
    description:
      "Susun PDF belajar Anda sendiri dari catatan, slide, dan sorotan, yang dapat dicari, portabel, dan siap untuk anotasi di tablet. Struktur yang membuatnya benar-benar berguna saat ujian.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "panduan/apakah-alat-pdf-online-aman",
    title: "Apakah Alat PDF Online Aman? Pandangan Jujur soal Risikonya",
    description:
      "Sebagian besar alat PDF “online” mengunggah file Anda ke server. Sebagian tidak. Risiko sebenarnya, kategori alat yang menangani data secara berbeda, dan cara membedakan mana yang mana.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "panduan/cara-melindungi-file-pdf-yang-sensitif",
    title: "Cara Melindungi File PDF yang Sensitif (Penyimpanan, Berbagi, Siklus Hidup)",
    description:
      "PDF sensitif butuh perlindungan di tiga titik: saat disimpan, saat dibagikan, dan setelah penerima selesai menggunakannya. Alur kerja praktis yang mencakup ketiganya.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "panduan/cara-membagikan-file-pdf-secara-privat",
    title: "Cara Membagikan File PDF secara Privat (Tanpa Mengunggah ke Orang Asing)",
    description:
      "Cara privat membagikan PDF tidak melewati situs “alat PDF” publik. Jalur yang menjaga dokumen hanya antara Anda dan penerima, dengan pengaturan default yang masuk akal.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "panduan/alur-kerja-dokumen-yang-mengutamakan-privasi",
    title: "Alur Kerja Dokumen yang Mengutamakan Privasi (Tanpa Unggah dari Awal sampai Akhir)",
    description:
      "Alur kerja dokumen yang utuh, mulai dari menangkap, mengedit, menandatangani, mengirim, hingga mengarsipkan, yang menjaga file tetap di perangkat Anda dan jauh dari server pihak ketiga. Bentuk yang realistis dan alat-alatnya.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "panduan/cara-kerja-pemrosesan-pdf-lokal-di-browser",
    title: "Cara Kerja Pemrosesan PDF Lokal di Browser, Dijelaskan",
    description:
      "Bagaimana alat PDF bisa berjalan di browser tanpa mengirim file Anda ke mana pun. Teknologinya, trade-off-nya, dan cara memverifikasi sebuah alat benar-benar berjalan lokal.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "panduan/apakah-alat-pdf-online-menyimpan-file-anda",
    title: "Apakah Alat PDF Online Menyimpan File Anda? Yang Perlu Diperiksa",
    description:
      "Sebagian alat PDF online menghapus file yang diunggah seketika, sebagian menahannya selama beberapa jam, sebagian menyimpannya tanpa batas waktu. Cara cepat membaca kebijakan privasi dan yang perlu dicari.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "panduan/cara-menghindari-mengunggah-dokumen-sensitif",
    title: "Cara Menghindari Mengunggah Dokumen Sensitif (Alternatif Praktis)",
    description:
      "Saat sebuah alur kerja menggoda Anda untuk mengunggah PDF sensitif, hampir selalu ada alternatif yang berjalan lokal. Kategori tugas dan alat tanpa unggah untuk masing-masing.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "panduan/alur-kerja-pdf-aman-untuk-bisnis",
    title: "Alur Kerja PDF yang Aman untuk Bisnis (Tanpa Tumpukan Sistem Enterprise)",
    description:
      "Bisnis kecil tidak butuh brankas PDF bersertifikasi SOC2 untuk berjalan aman. Standar dasar yang realistis, penyimpanan terenkripsi, transfer bertanda tangan, pemrosesan lokal, yang sepadan dengan risiko sebenarnya.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "panduan/manfaat-pemrosesan-dokumen-berbasis-browser",
    title: "Manfaat Pemrosesan Dokumen Berbasis Browser (Kecepatan, Privasi, Biaya)",
    description:
      "Alasan memproses PDF di browser mengubah perhitungan kecepatan, privasi, dan biaya dibanding alat cloud tradisional, serta di mana sebenarnya batas pemrosesan lokal.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "panduan/pdf-atau-google-docs",
    title: "PDF atau Google Docs, Kapan Menggunakan Masing-Masing (Edit, Berbagi, Kunci)",
    description:
      "Google Docs untuk kolaborasi, PDF untuk pengiriman akhir. Panduan realistis kapan memakai masing-masing, dan cara mengonversi dengan bersih di antara keduanya pada momen yang tepat.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "panduan/pdf-atau-docx-untuk-bisnis",
    title: "PDF atau DOCX untuk Bisnis (Kontrak, Laporan, Distribusi)",
    description:
      "Alasan dokumen bisnis hampir selalu dikirim sebagai PDF tapi hidup sebagai DOCX. Alat yang tepat di setiap tahap perjalanan sebuah kontrak, laporan, atau faktur.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "panduan/pdf-atau-gambar-untuk-membagikan-dokumen",
    title: "PDF atau Gambar untuk Membagikan Dokumen (JPG, PNG, HEIC)",
    description:
      "Kapan JPG, PNG, atau HEIC dari sebuah dokumen adalah pilihan yang salah, dan apa yang membuat PDF format yang tepat untuk lebih dari sekadar tangkapan layar cepat.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "panduan/pdf-atau-png",
    title: "PDF atau PNG, Dokumen Multihalaman dibanding Gambar Tunggal yang Tajam",
    description:
      "PDF unggul untuk dokumen multihalaman, PNG unggul untuk gambar tunggal yang tajam dengan latar belakang transparan. Aturan yang jelas dan cara konversi di antara keduanya.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "panduan/format-terbaik-untuk-membagikan-dokumen",
    title: "Format Terbaik untuk Membagikan Dokumen (PDF, DOCX, Gambar Dibandingkan)",
    description:
      "Kapan PDF adalah format yang tepat untuk dibagikan, kapan bukan, dan cara alternatif realistisnya (DOCX, gambar, HTML, Markdown) benar-benar dibandingkan pada skenario sehari-hari.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "panduan/alasan-pdf-masih-populer",
    title: "Alasan PDF Masih Jadi Format Default Dokumen di 2026",
    description:
      "Bertahun-tahun kemudian, PDF masih mendominasi berbagi dokumen. Alasan-alasan yang membuatnya bertahan, akurasi tampilan, universalitas, kemampuan ditandatangani, keramahan untuk arsip, dan di mana letak kelemahannya.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "panduan/kapan-menggunakan-pdf-hasil-pindaian",
    title: "Kapan Menggunakan PDF Hasil Pindaian (dan Kapan Tidak)",
    description:
      "PDF hasil pindaian menyelesaikan masalah spesifik, dari kertas ke digital. PDF jenis ini juga lebih besar, kurang bisa dicari, dan lebih sulit diedit. Kapan pertukaran itu sepadan.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "panduan/pdf-yang-bisa-diedit-atau-pdf-berupa-gambar",
    title: "PDF yang Bisa Diedit atau PDF Berupa Gambar, Apa Sebenarnya Bedanya",
    description:
      "Sebagian PDF punya teks yang bisa dipilih dan struktur yang bisa diedit sungguhan, sebagian lagi hanyalah gambar halaman tanpa lapisan teks di baliknya. Cara mengetahui jenis file yang Anda punya, dan kapan masing-masing tepat digunakan.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "panduan/alat-pdf-gratis-terbaik",
    title: "Alat PDF Gratis Terbaik di 2026 (Pilihan Jujur, Tanpa Daftar)",
    description:
      "Alat PDF gratis yang layak dipakai, mulai dari kompres, gabung, tanda tangan, konversi, hingga pindai, dipilih karena kualitas dan privasinya yang nyata, bukan karena banyaknya iklan atau lamanya masa uji coba.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "panduan/alat-pdf-gratis-berbasis-browser",
    title: "Alat PDF Gratis Berbasis Browser (Tanpa Instalasi, Tanpa Unggah)",
    description:
      "Alat PDF yang berjalan sepenuhnya di browser Anda, tanpa instalasi, tanpa akun, tanpa unggah. Apa saja yang tersedia, apa saja yang dicakupnya, dan cara memverifikasi alat itu benar-benar berjalan lokal.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "panduan/alat-pdf-terbaik-tanpa-unggah",
    title: "Alat PDF Terbaik Tanpa Mengunggah (File Tetap di Perangkat Anda)",
    description:
      "Saat Anda tidak mau PDF meninggalkan perangkat, inilah alat-alat yang mengerjakannya secara lokal. Kompresi, penggabungan, konversi, semuanya dengan file yang tetap ada di mesin Anda.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "panduan/alat-pdf-privat-terbaik",
    title: "Alat PDF Privat Terbaik (Saat Kerahasiaan Benar-Benar Penting)",
    description:
      "Untuk kontrak, catatan keuangan, dan PDF sensitif lainnya, inilah alat-alat yang menghormati privasi lewat cara kerjanya, bukan sekadar lewat kebijakan yang tertulis.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "panduan/alat-pdf-gratis-untuk-iphone",
    title: "Alat PDF Gratis untuk iPhone (Pilihan Browser dan Aplikasi)",
    description:
      "Alat PDF gratis untuk iPhone yang benar-benar berfungsi tanpa langganan, kompres, tanda tangan, pindai, konversi. Opsi berbasis browser dan aplikasi PDF Editor untuk alur kerja offline.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "panduan/alat-pdf-gratis-untuk-android",
    title: "Alat PDF Gratis untuk Android (Pilihan Browser dan Aplikasi)",
    description:
      "Alat PDF gratis untuk Android yang dipilih untuk tugas sehari-hari, kompres, tanda tangan, pindai, konversi. Jalur browser mobile dan aplikasi PDF Editor untuk pemakaian offline.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "panduan/apa-itu-formulir-pdf",
    title: "Apa Itu Formulir PDF? Formulir Interaktif dan Non-Interaktif Dijelaskan",
    description:
      "Formulir PDF adalah dokumen yang dibuat untuk mengumpulkan jawaban, kadang dengan kolom asli yang bisa Anda ketik, kadang berupa formulir non-interaktif yang Anda tulisi langsung di atasnya. Apa artinya dan cara membedakannya.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "panduan/pdf-yang-bisa-diedit-atau-formulir-pdf-yang-bisa-diisi",
    title: "PDF yang Bisa Diedit atau Formulir PDF yang Bisa Diisi, Apa Bedanya?",
    description:
      "Mengedit PDF mengubah isinya, mengisi formulir PDF berarti memasukkan jawaban ke kolom formulir. Alasan keduanya adalah pekerjaan yang berbeda, dan mana yang benar-benar Anda butuhkan.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "panduan/cara-kerja-formulir-pdf",
    title: "Cara Kerja Formulir PDF, Kolom, AcroForm, dan Pindaian Non-Interaktif",
    description:
      "Di baliknya, formulir PDF adalah salah satu dari dua hal: sekumpulan kolom interaktif yang menumpuk di atas halaman, atau gambar non-interaktif tanpa kolom sama sekali. Cara masing-masing dibuat dan alasannya penting untuk pengisian.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "panduan/apakah-formulir-pdf-bisa-diedit",
    title: "Apakah Formulir PDF Bisa Diedit? Yang Bisa dan Tidak Bisa Diubah",
    description:
      "Mengedit pertanyaan pada formulir PDF berbeda dari mengisinya. Bagian mana yang bisa diedit, bagian mana yang terkunci, dan cara mengubah formulir yang hanya Anda punya dalam bentuk PDF jadi.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "panduan/cara-mengisi-formulir-pdf",
    title: "Cara Mengisi Formulir PDF (Interaktif atau Non-Interaktif)",
    description:
      "Isi formulir PDF apa pun, baik yang punya kolom asli maupun formulir non-interaktif yang Anda tulisi langsung di atasnya. Panduan lengkap untuk komputer dan HP, termasuk menandatangani dan menyimpan.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "panduan/cara-menyimpan-formulir-pdf-yang-sudah-diisi",
    title: "Cara Menyimpan Formulir PDF yang Sudah Diisi agar Jawabannya Tersimpan",
    description:
      "Mengisi formulir lalu melihat jawaban Anda hilang begitu saja? Cara menyimpan data formulir yang sudah diisi secara andal, alasan sebagian aplikasi pembaca tidak bisa melakukannya, dan kapan sebaiknya mengunci sebelum mengirim.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "panduan/mengapa-saya-tidak-bisa-mengetik-di-formulir-pdf",
    title: "Mengapa Saya Tidak Bisa Mengetik di Formulir PDF? Penyebab dan Solusinya",
    description:
      "Anda mengklik sebuah kolom dan tidak terjadi apa-apa. Tiga alasan yang biasa terjadi, formulir non-interaktif, aplikasi pembaca yang salah, atau file yang terkunci, dan apa yang perlu dilakukan untuk masing-masing.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "panduan/cara-membuat-formulir-pdf-yang-bisa-diisi",
    title: "Cara Membuat Formulir PDF yang Bisa Diisi, Opsi dan Batasannya secara Jujur",
    description:
      "Apa yang sebenarnya dibutuhkan untuk membuat PDF yang bisa diisi orang lain, kolom interaktif dibanding template non-interaktif sederhana, dan pendekatan mana yang cocok dengan alat yang Anda punya.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "panduan/cara-membagikan-formulir-pdf",
    title: "Cara Membagikan Formulir PDF agar Bisa Diisi Orang Lain",
    description:
      "Mengirim formulir kosong untuk diisi berbeda dari mengirim dokumen jadi. Cara membagikan formulir agar penerima benar-benar bisa mengisinya, dan cara mengumpulkan hasilnya.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "panduan/cara-mencetak-formulir-pdf-yang-sudah-diisi",
    title: "Cara Mencetak Formulir PDF yang Sudah Diisi dengan Jawaban Tampil",
    description:
      "Mencetak formulir Anda dan kolomnya justru muncul kosong? Alasan nilai yang sudah diisi kadang tidak ikut tercetak, dan cara mendapatkan salinan kertas yang bersih dengan setiap jawaban terlihat.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "panduan/cara-mengisi-formulir-pdf-di-iphone",
    title: "Cara Mengisi Formulir PDF di iPhone (Files, Markup, dan Aplikasi)",
    description:
      "Isi formulir PDF interaktif dan non-interaktif di iPhone, memakai Files dan Markup, atau aplikasi PDF khusus. Langkah-langkah spesifik iOS, jalur menu bagikan, dan di mana Markup kurang memadai.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "panduan/cara-mengisi-formulir-pdf-di-android",
    title: "Cara Mengisi Formulir PDF di Android (HP Apa Pun)",
    description:
      "Isi formulir PDF interaktif dan non-interaktif di Android. Alasan aplikasi pembaca bawaan sering tidak bisa dipakai mengetik, cara lewat aplikasi yang bisa diandalkan, dan bagaimana perbedaan antar merek HP memengaruhi formulir.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "panduan/cara-mengirim-formulir-pdf-yang-sudah-selesai-diisi",
    title: "Cara Mengirim Formulir PDF yang Sudah Selesai Diisi (Kunci dan Kirim)",
    description:
      "Anda sudah mengisi formulirnya, sekarang kirim kembali dengan rapi. Cara mengunci agar jawaban tidak bisa diubah, cara melampirkannya dengan benar, dan cara memastikan formulir sampai tanpa datanya hilang.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "panduan/cara-mengisi-formulir-pdf-pemerintah-di-hp",
    title: "Cara Mengisi Formulir PDF Pemerintah di HP Anda",
    description:
      "Formulir pemerintah sering berupa formulir non-interaktif dengan format yang ketat. Cara melengkapinya di HP, menangani kolom yang merepotkan, dan mengikuti instruksi resmi dari instansinya.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "panduan/alur-kerja-formulir-pdf-di-hp",
    title: "Alur Kerja Formulir PDF di HP (dari Diterima sampai Terkirim)",
    description:
      "Rutinitas berbasis HP yang bisa diulang untuk formulir: terima, buka di aplikasi yang tepat, isi, tanda tangani, kunci, kirim. Alur kerja dari awal sampai akhir yang tidak butuh komputer.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "panduan/aplikasi-formulir-pdf-terbaik-untuk-iphone",
    title: "Aplikasi Formulir PDF Terbaik untuk iPhone (Yang Perlu Diperhatikan)",
    description:
      "Yang sebenarnya penting dari sebuah aplikasi formulir PDF di iPhone: deteksi kolom, teks pada formulir non-interaktif, tanda tangan, privasi di perangkat, dan cara menilainya untuk formulir Anda sendiri.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "panduan/aplikasi-formulir-pdf-terbaik-untuk-android",
    title: "Aplikasi Formulir PDF Terbaik untuk Android (Cara Memilihnya)",
    description:
      "Cara memilih aplikasi formulir PDF di Android: deteksi kolom, teks pada formulir non-interaktif, tanda tangan, dan privasi di perangkat, serta alasan aplikasi khusus lebih unggul dari aplikasi pembaca bawaan untuk urusan formulir.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "panduan/formulir-pdf-untuk-bisnis-kecil",
    title: "Formulir PDF untuk Bisnis Kecil (Intake, Pesanan, HR)",
    description:
      "Formulir sehari-hari yang menjadi tulang punggung bisnis kecil, mulai dari intake, pesanan, pemesanan, hingga HR sederhana, dan cara mengisi, mengumpulkan, serta mengelolanya sebagai PDF tanpa membeli platform formulir.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "panduan/cara-mengirim-formulir-intake-klien",
    title: "Cara Mengirim Formulir Intake Klien (dengan Rapi dan Privat)",
    description:
      "Dapatkan detail klien baru dalam satu proses yang bersih. Cara mengirim formulir intake PDF agar mudah diisi, kembali lengkap, dan menjaga informasi klien tetap privat.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "panduan/cara-menggunakan-formulir-pdf-untuk-kontrak",
    title: "Cara Menggunakan Formulir PDF untuk Kontrak (Kolom dan Tanda Tangan)",
    description:
      "Ubah kontrak menjadi PDF yang bisa diisi: kolom untuk nama, tanggal, dan inisial, area tanda tangan, serta langkah mengunci agar versi yang sudah ditandatangani tidak bisa diubah. Termasuk batasannya secara jujur.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "panduan/cara-mengelola-formulir-pdf-lamaran",
    title: "Cara Mengelola Formulir PDF Lamaran (Kumpulkan dan Tinjau)",
    description:
      "Menerima lamaran dalam bentuk PDF? Cara mengumpulkan, meninjau, membandingkan, dan mengarsipkannya tanpa kehilangan jejak, sistem sederhana untuk menangani tumpukan formulir yang sudah terisi.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "panduan/formulir-pdf-untuk-konsultan",
    title: "Formulir PDF untuk Konsultan (Kuesioner dan Penentuan Ruang Lingkup)",
    description:
      "Kuesioner penggalian kebutuhan, lembar penentuan ruang lingkup kerja sama, dan formulir masukan, sisi formulir dari pekerjaan konsultan, ditangani sebagai PDF yang bisa diisi klien di perangkat apa pun.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "panduan/formulir-pdf-untuk-agensi",
    title: "Formulir PDF untuk Agensi (Onboarding, Brief, Persetujuan)",
    description:
      "Paket onboarding klien, formulir brief kreatif, dan lembar persetujuan sign-off, formulir multi-pihak yang dijalankan agensi, ditangani sebagai PDF yang bisa diisi siapa saja.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "panduan/formulir-pdf-untuk-pekerja-lepas",
    title: "Formulir PDF untuk Pekerja Lepas (Intake, Perjanjian, Uang Muka)",
    description:
      "Intake proyek, perjanjian layanan sederhana, dan otorisasi uang muka, kumpulan formulir PDF ringkas yang dibutuhkan pekerja lepas, tanpa langganan dan tanpa apa pun yang perlu diunggah.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "panduan/alur-kerja-pengumpulan-dokumen-dengan-pdf",
    title: "Alur Kerja Pengumpulan Dokumen dengan PDF",
    description:
      "Mengumpulkan file dan formulir bertanda tangan dari klien? Bangun alur kerja pengumpulan PDF yang bisa diulang, daftar periksa, format yang konsisten, dan cara rapi melacak apa yang masih kurang.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "panduan/praktik-terbaik-formulir-pdf",
    title: "Praktik Terbaik Formulir PDF, Rancang Formulir yang Benar-Benar Diselesaikan Orang",
    description:
      "Rancang formulir yang benar-benar diselesaikan orang: label yang jelas, spasi yang nyaman, kolom yang masuk akal, area tanda tangan yang jelas, dan langkah mengunci. Aturan praktis untuk pembuat dan pengirim formulir.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "panduan/formulir-pdf-tidak-berfungsi",
    title: "Formulir PDF Tidak Berfungsi? Triase dan Solusinya",
    description:
      "Formulir PDF yang bermasalah biasanya punya beberapa penyebab umum. Triase cepat untuk mengenali mana yang Anda alami, kolom hilang, tidak bisa diketik, tidak bisa disimpan, atau hanya-baca, dan di mana perbaikannya.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "panduan/kolom-formulir-pdf-hilang",
    title: "Kolom Formulir PDF Hilang? Alasan dan Cara Mengembalikannya",
    description:
      "Membuka formulir dan kolomnya tidak ada? Alasan kolom interaktif hilang di sebagian aplikasi pembaca, cara mengembalikannya, dan apa yang harus dilakukan saat memang tidak pernah ada kolom sejak awal.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "panduan/mengapa-formulir-pdf-tidak-mau-tersimpan",
    title: "Mengapa Formulir PDF Tidak Mau Tersimpan (dan Cara Memperbaikinya)",
    description:
      "Mengisi formulir lalu jawabannya menghilang saat dibuka lagi? Alasan sebagian aplikasi pembaca hanya bisa mencetak, bukan menyimpan data kolom, dan cara-cara andal agar jawaban Anda benar-benar tersimpan.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "panduan/mengapa-formulir-pdf-hanya-bisa-dibaca",
    title: "Mengapa Formulir PDF Hanya Bisa Dibaca (dan Apa yang Harus Dilakukan)",
    description:
      "Formulir Anda terbuka terkunci dan tampak pudar? Alasan formulir diset hanya-baca, cara membedakan pengamanan yang disengaja dari sekadar keanehan aplikasi pembaca, dan opsi jujur untuk tetap bisa mengisinya.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "panduan/formulir-pdf-tidak-tercetak-dengan-benar",
    title: "Formulir PDF Tidak Tercetak dengan Benar? Perbaiki Kolom yang Kosong",
    description:
      "Formulir tercetak dengan kolom kosong, teks bergeser, atau tepi terpotong? Masalah cetak yang khas untuk formulir, terutama nilai kolom yang hilang, dan pengaturan yang memperbaiki masing-masing.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "panduan/masalah-font-pada-formulir-pdf",
    title: "Masalah Font pada Formulir PDF (Ukuran Otomatis, Terpotong, Tergantikan)",
    description:
      "Teks kolom terlalu besar, terlalu kecil, atau mengecil otomatis saat Anda mengetik? Keanehan font yang khas untuk kolom formulir, ukuran otomatis, penggantian font, pemotongan, dan cara mendapatkan jawaban yang bersih dan terbaca.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "panduan/masalah-format-pada-formulir-pdf",
    title: "Masalah Format pada Formulir PDF (Perataan dan Luapan Teks)",
    description:
      "Kolom tidak sejajar, jawaban meluap keluar, tampilan formulir berbeda di layar orang lain? Masalah tata letak formulir yang berbeda-beda tergantung aplikasi pembaca, dan cara mendapatkan hasil yang konsisten.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "panduan/error-saat-mengirim-formulir-pdf",
    title: "Error saat Mengirim Formulir PDF (Ketika Submit Gagal)",
    description:
      "Tombol Submit formulir gagal atau tidak melakukan apa-apa? Alasan tombol submit bawaan bergantung pada server penerbit formulir, arti dari masing-masing error, dan cara manual yang andal untuk mengirim formulir Anda.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "panduan/masalah-kompatibilitas-formulir-pdf",
    title: "Masalah Kompatibilitas Formulir PDF (XFA dan Formulir Dinamis)",
    description:
      "Formulir yang terbuka baik di satu program tapi rusak di program lain biasanya memakai fitur yang tidak didukung semua aplikasi pembaca. Cara mengenali formulir dinamis, penyebab ketidakcocokannya, dan pilihan yang Anda punya.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "panduan/perbaiki-error-formulir-pdf",
    title: "Perbaiki Error Formulir PDF, Daftar Periksa Pertolongan Pertama yang Cepat",
    description:
      "Langkah pertolongan pertama universal untuk formulir PDF yang bermasalah: ganti aplikasi pembaca, unduh ulang, perbarui aplikasi, tambahkan teks di atasnya, kunci. Jalankan ini dulu sebelum menyelidiki penyebab spesifiknya.",
  },
];
