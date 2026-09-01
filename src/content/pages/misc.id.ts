import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_ID: ToolsIndexContent = {
  crumbLabel: "Alat PDF gratis",
  heroEyebrow: "Alat PDF gratis",
  heroH1: "Alat PDF di browser: file Anda tidak pernah meninggalkan perangkat Anda.",
  heroHighlight: "tidak pernah meninggalkan",
  heroLead:
    "Gabungkan, bagi, putar, beri watermark, dan konversi PDF tanpa mengunggah apa pun. Semua proses berjalan secara lokal di browser Anda, gratis, tanpa perlu mendaftar.",
  privacyNote:
    "Setiap alat di halaman ini memproses file Anda secara lokal di browser Anda. Tidak ada yang diunggah ke server kami dan tidak ada yang disimpan.",
  clusterHeading: "{count} panduan tentang bekerja dengan PDF di browser",
  goingFurtherHeading: "Lebih jauh dengan PDF",
  goingFurtherBody:
    "Alat-alat ini cocok untuk tugas sekali pakai di browser. Untuk alur kerja yang lebih lengkap, seperti mengedit, mengonversi, menandatangani, mengamankan, dan memindai, mulai dari sini.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "pdf-converter", label: "Konverter PDF" },
    { id: "pdf-forms", label: "Formulir PDF" },
    { id: "sign-pdf", label: "Tanda Tangan PDF" },
    { id: "pdf-security", label: "Keamanan PDF" },
    { id: "scan-to-pdf", label: "Pindai ke PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "Aplikasi PDF vs alat PDF online",
    },
  ],
  appCtaHeading: "Butuh alat PDF di ponsel?",
  appCtaSub: "Dapatkan aplikasi PDF Editor untuk iPhone dan Android, gratis.",
};

export const GUIDES_INDEX_ID: GuidesIndexContent = {
  h1: "Panduan PDF",
  lead: "{count} tutorial praktis yang dirancang untuk ponsel, mencakup cara mengedit, mengonversi, mengompres, menandatangani, dan melindungi PDF, dikelompokkan berdasarkan alat atau topiknya.",
};

export const CONTACT_ID: ContactContent = {
  h1: "Kontak",
  lead: "Pertanyaan, kerja sama, pers, atau masukan tentang aplikasi PDF Editor. Kami membaca setiap email yang masuk.",
  emailLabel: "Email",
  officeLabel: "Kantor terdaftar",
  sections: [
    {
      heading: "Yang bisa Anda harapkan",
      body: "Email adalah satu-satunya saluran dukungan kami. Tidak ada sistem tiket dan tidak ada chatbot di depannya. Balasan datang langsung dari tim kecil yang sama yang membangun aplikasi ini, biasanya dalam waktu dua hari kerja. Sertakan perangkat dan versi sistem operasi Anda untuk masalah terkait aplikasi; untuk masalah dengan dokumen tertentu, jelaskan apa yang sedang Anda lakukan daripada melampirkan filenya, karena kami tidak ingin dan tidak perlu dokumen Anda.",
    },
    {
      heading: "Yang tidak bisa kami bantu",
      body: "Alat-alat berbasis browser di situs ini berjalan sepenuhnya di perangkat Anda, sehingga tidak ada yang Anda proses yang pernah dikirim kepada kami. Ini juga berarti kami tidak bisa memulihkan file yang sudah Anda konversi, mengirim ulang hasil unduhan, atau memeriksa apa pun atas nama Anda. Tidak ada salinan apa pun di pihak kami untuk diperiksa. Jika sebuah alat gagal memproses PDF tertentu, beri tahu kami jenis filenya (hasil pindaian, dilindungi kata sandi, formulir yang sudah diisi) dan apa yang terjadi saat alat tersebut digunakan.",
    },
    {
      heading: "Privasi dan permintaan hukum",
      body: "Pertanyaan seputar perlindungan data, permintaan penghapusan data, dan pemberitahuan hukum dikirim ke alamat yang sama dan akan diterima oleh hrhelperg s.r.o. di kantor terdaftar di atas.",
    },
  ],
  legalSentence:
    "{privacy} kami menjelaskan apa yang dikumpulkan dan apa yang tidak, sementara {terms} kami mengatur penggunaan situs dan alat-alatnya.",
  privacyLinkLabel: "kebijakan privasi",
  termsLinkLabel: "ketentuan layanan",
  tryAppHeading: "Coba aplikasinya",
};

/**
 * Indonesian privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law. The operator's legal name,
 * registered address and email are reproduced exactly as in the English
 * source — never translated.
 *
 * Indonesia has its own data-protection statute (UU PDP), but that is a
 * different, narrower Indonesian law — the site's operator is
 * EU-established, so GDPR is the regulation that actually applies. This
 * keeps "GDPR" with a one-time Indonesian-language gloss on first mention,
 * the same treatment used for Arabic, Russian, Czech and Japanese, and does
 * not substitute UU PDP in its place.
 */
export const PRIVACY_ID: LegalContent = {
  h1: "Kebijakan Privasi",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Tentang kami",
      body: [
        "pdfeditconvert.top dioperasikan oleh hrhelperg s.r.o., perusahaan berbadan hukum terbatas asal Ceko dengan kantor terdaftar di Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic. Anda dapat menghubungi kami di info@hrhelperg.com.",
      ],
    },
    {
      heading: "Apa yang dikumpulkan situs ini",
      body: [
        "Situs ini bersifat informasional. Anda tidak perlu membuat akun, mengunggah dokumen, atau membagikan data pribadi untuk membaca halaman mana pun.",
        "Kami menggunakan alat analitik yang ramah privasi (WebmasterID) untuk memahami halaman mana yang dikunjungi dan bagaimana pembaca menemukan kami. Alat ini mencatat URL halaman yang Anda kunjungi, perkiraan wilayah dan jenis perangkat Anda, serta situs rujukan. Alat ini tidak memasang cookie iklan dan tidak membangun profil Anda di situs-situs lain.",
      ],
    },
    {
      heading: "Apa yang dikumpulkan aplikasi seluler",
      body: [
        "Aplikasi seluler PDF Editor dapat menyimpan data secara lokal di perangkat Anda (file yang Anda buka, pengaturan Anda) dan dapat menyinkronkan file ke layanan cloud pilihan Anda (iCloud, Google Drive, dan lainnya) jika Anda mengaktifkan opsi tersebut. Lihat pernyataan privasi aplikasi di App Store dan Google Play untuk daftar resminya.",
      ],
    },
    {
      heading: "Cookie",
      body: [
        "Kami menggunakan sejumlah kecil cookie dan penyimpanan serupa untuk fungsi dasar situs dan analitik. Kami tidak menggunakan cookie iklan.",
      ],
    },
    {
      heading: "Hak Anda",
      body: [
        "Jika Anda berada di UE/EEA, Anda memiliki hak berdasarkan GDPR, regulasi perlindungan data Uni Eropa, termasuk hak untuk mengakses, mengoreksi, menghapus, membatasi pemrosesan, dan memindahkan data Anda. Kirim email ke info@hrhelperg.com untuk menggunakan hak-hak tersebut.",
      ],
    },
    {
      heading: "Kontak",
      body: [
        "Pertanyaan tentang kebijakan ini dapat dikirim ke info@hrhelperg.com.",
      ],
    },
    {
      heading: "Perubahan",
      body: [
        "Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan penting akan disorot di halaman ini bersama tanggal pembaruan terbaru.",
      ],
    },
  ],
};

/** Ketentuan layanan berbahasa Indonesia — terjemahan dari ketentuan yang sama. */
export const TERMS_ID: LegalContent = {
  h1: "Ketentuan Layanan",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "Tentang ketentuan ini",
      body: [
        "Ketentuan ini mengatur penggunaan Anda atas pdfeditconvert.top, yang dioperasikan oleh hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic).",
      ],
    },
    {
      heading: "Penggunaan situs",
      body: [
        "Anda boleh membaca, menautkan, dan membagikan halaman di situs ini. Anda tidak boleh mengambil sebagian besar konten untuk dipublikasikan ulang, atau menggunakan situs ini dengan cara yang mengganggu pengguna lain.",
      ],
    },
    {
      heading: "Tentang aplikasi seluler PDF Editor",
      body: [
        "PDF Editor adalah aplikasi seluler terpisah yang didistribusikan melalui App Store Apple dan Google Play. Penggunaan aplikasi ini diatur oleh ketentuannya sendiri yang ditampilkan saat instalasi.",
      ],
    },
    {
      heading: "Tanpa jaminan",
      body: [
        "Konten di pdfeditconvert.top disediakan untuk tujuan informasi umum dan bukan merupakan konsultasi hukum, pajak, atau keuangan. Kami berupaya secara wajar menjaga keakuratannya, tetapi tidak memberikan jaminan atas kelengkapan atau kesesuaiannya untuk tujuan tertentu.",
      ],
    },
    {
      heading: "Tanggung jawab",
      body: [
        "Sejauh diizinkan oleh hukum Ceko dan hukum Uni Eropa, hrhelperg s.r.o. tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial yang timbul dari penggunaan situs ini.",
      ],
    },
    {
      heading: "Hukum yang berlaku",
      body: [
        "Ketentuan ini diatur oleh hukum Republik Ceko. Perselisihan akan diselesaikan oleh pengadilan Ceko yang berwenang.",
      ],
    },
    {
      heading: "Kontak",
      body: [
        "Pertanyaan tentang ketentuan ini dapat dikirim ke info@hrhelperg.com.",
      ],
    },
  ],
};
