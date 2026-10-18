/* All site copy and contact data in one place, in Bahasa Indonesia (`id`) and English (`en`).
 * Anything marked TODO is a placeholder. Replace it with the musholla's real details. */

export type Lang = 'id' | 'en';

/* ---------- Shared, non-translated data ---------- */
export const SITE = {
  name: 'Al Jauhar',
  fullName: 'Musholla Al Jauhar',
  // TODO: full street address (only the area is confirmed)
  street: 'Jl. Srengseng Raya (alamat lengkap menyusul)',
  area: 'Srengseng, Kec. Kembangan',
  city: 'Jakarta Barat, DKI Jakarta 11630',
  mapsQuery: 'Srengseng, Kembangan, Jakarta Barat',
  coords: { lat: -6.2133, lng: 106.7614 },
  // TODO: real WhatsApp / phone / email / social
  whatsapp: '6281200000000',
  whatsappLabel: '+62 812-0000-0000',
  email: 'info@aljauhar.id',
  instagram: '@musholla.aljauhar',
  // TODO: real bank account for infaq
  bank: { name: 'Bank Syariah Indonesia (BSI)', number: '0000 0000 00', holder: 'Musholla Al Jauhar' },
} as const;

/* ---------- Arabic text (same in both languages) ---------- */
export const AR = {
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  name: 'مصلى الجوهر',
  prayers: { Fajr: 'الفجر', Sunrise: 'الشروق', Dhuhr: 'الظهر', Asr: 'العصر', Maghrib: 'المغرب', Isha: 'العشاء' },
  kufi: {
    prayer: 'مواقيت الصلاة',
    about: 'عن المصلى',
    programs: 'البرامج',
    schedule: 'الدروس',
    giving: 'الإنفاق',
    location: 'الموقع',
    amanah: 'الأمانة',
  },
  // QS. Al-Baqarah 2:261
  ayah: 'مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ',
  // HR. Bukhari no. 450 & Muslim no. 533
  hadith: 'مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ فِي الْجَنَّةِ مِثْلَهُ',
} as const;

/* TODO: replace with real photos of Musholla Al Jauhar. Both are free under the Unsplash License. */
export const PHOTOS = {
  interior: { src: '/images/masjid-interior.webp', credit: 'Alim', url: 'https://unsplash.com/photos/pXMJRUjI-84' },
  jamaah: { src: '/images/sholat-berjamaah.webp', credit: 'Rumman Amin', url: 'https://unsplash.com/photos/i1bfxi1cFBY' },
} as const;

export const waLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=15&output=embed`;

/* ---------- Bahasa Indonesia ---------- */
const id = {
  meta: { title: 'Musholla Al Jauhar | Srengseng, Jakarta Barat' },
  skip: 'Langsung ke konten utama',
  nav: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Program', href: '#program' },
    { label: 'Jadwal Sholat', href: '#sholat' },
    { label: 'Kajian', href: '#kajian' },
    { label: 'Infaq', href: '#infaq' },
    { label: 'Lokasi', href: '#lokasi' },
  ],
  navCta: 'Infaq Sekarang',
  menu: 'Buka menu',
  status: { live: 'Berjalan', soon: 'Segera hadir' },

  hero: {
    badge: 'Baru dibuka · Srengseng',
    pre: 'Rumah ibadah,',
    highlight: 'rumah warga',
    post: 'Srengseng',
    bismillahTr: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang',
    leadStrong: 'Musholla Al Jauhar.',
    lead: 'Musholla kecil yang baru dimulai di Srengseng, Jakarta Barat. Tempat sholat berjamaah dan pengajian warga, tumbuh bersama jamaah. Setiap infaq dicatat dan dilaporkan secara terbuka.',
    cta1: 'Jadwal Sholat',
    cta2: 'Salurkan Infaq',
    art: {
      aria: 'Ilustrasi: mihrab di waktu senja dengan bulan sabit, bintang, lentera, dan siluet musholla.',
    },
  },

  prayer: {
    kick: 'Jadwal sholat hari ini',
    title: 'Mari sholat berjamaah',
    desc: 'Waktu sholat untuk wilayah Srengseng, Jakarta Barat, dihitung dengan metode Kemenag RI.',
    names: { Fajr: 'Subuh', Sunrise: 'Terbit', Dhuhr: 'Dzuhur', Asr: 'Ashar', Maghrib: 'Maghrib', Isha: 'Isya' },
    next: 'Berikutnya',
    in: 'dalam',
    hours: 'j',
    minutes: 'm',
    approx: 'Perkiraan waktu (gagal memuat jadwal langsung)',
    source: 'Sumber: Aladhan API · Metode Kemenag RI',
    friday: 'Sholat Jumat tidak diselenggarakan di musholla. Silakan menuju masjid terdekat.', // TODO: confirm
    hijriMonths: ['Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 'Jumadil Awal', 'Jumadil Akhir', 'Rajab', 'Sya’ban', 'Ramadhan', 'Syawal', 'Dzulqa’dah', 'Dzulhijjah'],
    locale: 'id-ID',
  },

  mission: {
    eyebrow: 'Tentang Al Jauhar',
    photoAlt: 'Jamaah duduk di dalam masjid dengan mihrab berhias kaligrafi',
    title: 'Permata kecil di tengah kampung',
    desc: '“Al Jauhar” berarti permata. Musholla ini baru saja dimulai, masih kecil, dan tumbuh bersama warga. Kami ingin menjadikannya tempat yang menenangkan, tempat ibadah terjaga, ilmu diajarkan, dan kepedulian antar warga tumbuh.',
    items: [
      { title: 'Infaq', desc: 'Infaq dan sedekah jamaah lewat kotak amal maupun transfer, dicatat rapi dan dilaporkan kepada jamaah.', status: 'live' },
      { title: 'Wakaf Pembangunan', desc: 'Musholla baru saja dibuka dan masih dilengkapi: karpet, sound system, tempat wudhu, dan penataan ruang.', status: 'live' },
      { title: 'Sedekah', desc: 'Jumat berkah, santunan yatim dan dhuafa, serta bantuan warga sekitar. InsyaAllah segera dimulai.', status: 'soon' },
    ],
    fourth: { title: 'Pendidikan Al-Qur’an', desc: 'TPA/TPQ untuk anak-anak sedang dipersiapkan. Kami mencari ustadz/ustadzah dan relawan pengajar yang ingin ikut membersamai.' },
    chainTitle: 'Amanah jamaah. Setiap rupiah tercatat dan dilaporkan.',
    chain: [['infaq.diterima', 'INF-0412'], ['kas.dicatat', 'KAS-0413'], ['program.disalurkan', 'PRG-0414'], ['laporan.terbit', 'LAP-0415']],
  },

  programs: {
    kick: 'Program musholla',
    title: 'Satu musholla. Banyak jalan kebaikan.',
    desc: 'Dimulai dari yang sudah berjalan, lalu bertahap insyaAllah. Terbuka untuk seluruh warga Srengseng dan sekitarnya.',
    rail: 'Kegiatan Al Jauhar, tumbuh bersama jamaah.',
    visit: 'Tanya lewat WhatsApp',
    list: [
      {
        ctag: 'infaq', label: 'Infaq', host: 'aljauhar.id/infaq', title: 'Infaq & Sedekah Terbuka', status: 'live',
        desc: 'Infaq lewat kotak amal maupun transfer dicatat oleh bendahara, lalu laporannya diumumkan kepada jamaah.',
        tags: [['Amanah', true], ['Laporan Berkala', false]],
      },
      {
        ctag: 'wakaf', label: 'Wakaf', host: 'aljauhar.id/wakaf', title: 'Wakaf Pembangunan', status: 'live',
        desc: 'Musholla baru dibuka dan masih dilengkapi: karpet, sound system, tempat wudhu, dan penataan ruang. Setiap wakaf menjadi amal jariyah.',
        tags: [['Amal Jariyah', true], ['Progres Terbuka', false]],
      },
      {
        ctag: 'tpa', label: 'TPA', host: 'aljauhar.id/tpa', title: 'TPA / TPQ Anak', status: 'soon',
        desc: 'Sedang dipersiapkan: belajar mengaji, doa harian, dan adab Islami untuk anak-anak. Kami mencari ustadz/ustadzah dan relawan pengajar.',
        tags: [['Gratis', true], ['Cari Pengajar', false]],
      },
      {
        ctag: 'qurban', label: 'Qurban', host: 'aljauhar.id/qurban', title: 'Qurban Bersama Warga', status: 'soon',
        desc: 'Rencana qurban pertama di Idul Adha mendatang: pendaftaran shohibul qurban, penyembelihan, dan distribusi daging untuk warga.',
        tags: [['Sesuai Syariat', true], ['Rencana 1448 H', false]],
      },
    ],
    visuals: {
      ledger: { title: 'Buku kas infaq', badge: 'Kas awal', rows: [['infaq.kotak_amal', 'Jumat'], ['infaq.transfer', 'BSI'], ['kas.dicatat', 'Bendahara']], receipt: 'Bukti setor', receiptNo: '#0001' },
      wakaf: { title: 'Wakaf pembangunan', badge: 'Sedang berjalan', legendBase: 'Pokok wakaf', legendYield: 'Manfaat', cards: [['Kebutuhan', 'Karpet, sound, wudhu'], ['Manfaat', 'Untuk seluruh jamaah']] },
      tpa: { title: 'Persiapan TPA', badge: 'Segera hadir', steps: [['Tempat belajar', 'Ruang musholla siap dipakai', true], ['Pengajar', 'Mencari ustadz/ustadzah & relawan', false], ['Kurikulum', 'Iqro, doa harian, adab', false], ['Pendaftaran', 'Dibuka segera, insyaAllah', false]] },
      qurban: { title: 'Rencana qurban', badge: 'Rencana 1448 H', steps: [['Pendaftaran', 'Shohibul qurban (dibuka nanti)', false], ['Penyembelihan', 'Sesuai syariat', false], ['Distribusi', 'Daging untuk warga sekitar', false], ['Laporan', 'Diumumkan ke jamaah', false]] },
    },
  },

  schedule: {
    kick: 'Kajian & kegiatan',
    title: 'Kegiatan musholla',
    desc: 'Yang sudah berjalan dan yang sedang dipersiapkan. Pantau pengumuman terbaru di grup WhatsApp jamaah.',
    cols: ['Hari', 'Waktu', 'Kegiatan', 'Pengisi', 'Status'],
    // TODO: real days/times for the kajian
    rows: [
      ['Setiap hari', '5 waktu', 'Sholat berjamaah', 'Imam: pengurus', 'live'],
      ['Menyusul', 'Ba’da Maghrib', 'Kajian / pengajian warga', 'Ustadz (menyusul)', 'live'],
      ['Senin–Jumat', 'Ba’da Ashar', 'TPA / TPQ anak-anak', 'Pengajar dicari', 'soon'],
      ['Jumat', 'Pagi', 'Jumat Berkah: berbagi sarapan', 'Jamaah', 'soon'],
      ['Sabtu', 'Ba’da Subuh', 'Kajian kitab', 'Ustadz (menyusul)', 'soon'],
    ],
    note: 'Musholla baru berjalan. Jadwal akan bertambah, insyaAllah.',
  },

  giving: {
    kick: 'Cara berinfaq',
    title: 'Empat langkah menyalurkan kebaikan',
    desc: 'Infaq, sedekah, dan wakaf Anda dikelola dengan amanah dan dilaporkan kepada jamaah.',
    steps: [
      ['01', 'Pilih niat', 'Infaq operasional, wakaf pembangunan, atau sedekah. Zakat fitrah insyaAllah dibuka saat Ramadhan.'],
      ['02', 'Transfer atau kotak amal', 'Transfer ke rekening musholla, pindai QRIS, atau masukkan ke kotak amal.'],
      ['03', 'Konfirmasi', 'Kirim bukti transfer ke bendahara lewat WhatsApp agar tercatat sesuai niat.'],
      ['04', 'Pantau laporan', 'Laporan kas diumumkan secara berkala kepada jamaah dan bisa diminta kapan saja.'],
    ],
    bankLabel: 'Rekening infaq',
    holderLabel: 'a.n.',
    copy: 'Salin nomor',
    copied: 'Tersalin',
    qris: 'QRIS menyusul',
    qrisNote: 'Kode QRIS resmi akan ditampilkan di sini.',
    confirm: 'Konfirmasi via WhatsApp',
    confirmText: 'Assalamu’alaikum, saya ingin konfirmasi infaq untuk Musholla Al Jauhar.',
  },

  location: {
    kick: 'Lokasi',
    title: 'Kunjungi Al Jauhar',
    desc: 'Pintu musholla terbuka untuk siapa saja yang ingin sholat, belajar, atau sekadar singgah.',
    address: 'Alamat',
    contact: 'Kontak pengurus',
    open: 'Buka di Google Maps',
    mapTitle: 'Peta lokasi Musholla Al Jauhar di Srengseng, Jakarta Barat',
  },

  verified: {
    kick: 'Amanah & transparan',
    title1: 'Infaq yang terbuka,',
    title2: 'kebaikan yang tumbuh',
    desc: 'Setiap infaq dicatat dari kotak amal hingga tersalurkan ke program. Jamaah bisa melihat ke mana kebaikannya mengalir.',
    stages: ['Jamaah', 'Kas Musholla', 'Program'],
    pillTag: 'infaq',
    cta1: 'Salurkan Infaq',
    cta2: 'Hubungi Pengurus',
    foot: 'Dikelola oleh pengurus & jamaah Musholla Al Jauhar',
    ayahTr: '“Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji.”',
    ayahRef: 'QS. Al-Baqarah: 261',
  },

  night: {
    kick: 'Makmurkan rumah Allah',
    title: 'Mari makmurkan musholla bersama',
    hadithTr: '“Barang siapa membangun masjid karena Allah, maka Allah akan membangunkan untuknya yang semisal di surga.”',
    hadithRef: 'HR. Bukhari & Muslim',
    cta1: 'Wakaf Pembangunan',
    cta2: 'Gabung Grup Jamaah',
    joinText: 'Assalamu’alaikum, saya ingin bergabung dengan grup jamaah Musholla Al Jauhar.',
    photoAlt: 'Jamaah sholat berjamaah di dalam masjid',
  },

  footer: {
    tagline: 'Rumah ibadah dan pusat kegiatan warga Srengseng, Jakarta Barat.',
    explore: 'Jelajahi',
    contact: 'Kontak',
    rights: 'Hak cipta dilindungi.',
    photos: 'Foto',
    builtWith: 'Dibangun bersama',
  },
};

export type SiteContent = typeof id;

/* ---------- English ---------- */
const en: SiteContent = {
  meta: { title: 'Al Jauhar Musholla | Srengseng, West Jakarta' },
  skip: 'Skip to main content',
  nav: [
    { label: 'About', href: '#tentang' },
    { label: 'Programs', href: '#program' },
    { label: 'Prayer Times', href: '#sholat' },
    { label: 'Classes', href: '#kajian' },
    { label: 'Give', href: '#infaq' },
    { label: 'Location', href: '#lokasi' },
  ],
  navCta: 'Give Now',
  menu: 'Toggle menu',
  status: { live: 'Running', soon: 'Coming soon' },

  hero: {
    badge: 'Newly opened · Srengseng',
    pre: 'A house of prayer,',
    highlight: 'a home',
    post: 'for Srengseng',
    bismillahTr: 'In the name of Allah, the Most Gracious, the Most Merciful',
    leadStrong: 'Al Jauhar Musholla.',
    lead: 'A small musholla that has just started in Srengseng, West Jakarta. A place for congregational prayer and community study, growing together with its congregation. Every donation is recorded and reported openly.',
    cta1: 'Prayer Times',
    cta2: 'Give Infaq',
    art: {
      aria: 'Illustration: a mihrab arch at dusk with a crescent moon, stars, lanterns and the musholla silhouette.',
    },
  },

  prayer: {
    kick: 'Today’s prayer times',
    title: 'Pray with the congregation',
    desc: 'Prayer times for Srengseng, West Jakarta, calculated with the Indonesian Ministry of Religious Affairs (Kemenag) method.',
    names: { Fajr: 'Fajr', Sunrise: 'Sunrise', Dhuhr: 'Dhuhr', Asr: 'Asr', Maghrib: 'Maghrib', Isha: 'Isha' },
    next: 'Next',
    in: 'in',
    hours: 'h',
    minutes: 'm',
    approx: 'Approximate times (live schedule failed to load)',
    source: 'Source: Aladhan API · Kemenag method',
    friday: 'Jumu’ah is not held at the musholla. Please attend the nearest masjid.',
    hijriMonths: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Ula', 'Jumada al-Akhirah', 'Rajab', 'Sha’ban', 'Ramadan', 'Shawwal', 'Dhu al-Qa’dah', 'Dhu al-Hijjah'],
    locale: 'en-GB',
  },

  mission: {
    eyebrow: 'About Al Jauhar',
    photoAlt: 'Congregation seated inside a mosque before a mihrab decorated with calligraphy',
    title: 'A small jewel in the heart of the kampung',
    desc: '“Al Jauhar” means the jewel. This musholla has only just begun. It is still small and growing with its neighbours. We want it to be a place of calm, where worship is kept, knowledge is taught, and care between neighbours grows.',
    items: [
      { title: 'Infaq', desc: 'Infaq and sadaqah through the charity box or transfer, carefully recorded and reported to the congregation.', status: 'live' },
      { title: 'Building Waqf', desc: 'The musholla has just opened and is still being furnished: carpets, sound system, wudu area and room layout.', status: 'live' },
      { title: 'Sadaqah', desc: 'Friday giving, support for orphans and the poor, and help for neighbours in need. Starting soon, insyaAllah.', status: 'soon' },
    ],
    fourth: { title: 'Qur’an Education', desc: 'A Qur’an school for children is being prepared. We are looking for ustadz/ustadzah and volunteer teachers who would like to help.' },
    chainTitle: 'A trust from the congregation. Every rupiah recorded and reported.',
    chain: [['infaq.received', 'INF-0412'], ['cash.recorded', 'KAS-0413'], ['program.funded', 'PRG-0414'], ['report.published', 'LAP-0415']],
  },

  programs: {
    kick: 'Musholla programs',
    title: 'One musholla. Many paths to good.',
    desc: 'Starting with what is already running, then growing step by step, insyaAllah. Open to everyone in Srengseng and the surrounding area.',
    rail: 'Al Jauhar activities, growing with the congregation.',
    visit: 'Ask on WhatsApp',
    list: [
      {
        ctag: 'infaq', label: 'Infaq', host: 'aljauhar.id/infaq', title: 'Open Infaq & Sadaqah', status: 'live',
        desc: 'Charity box and transfer donations are recorded by the treasurer and the report is announced to the congregation.',
        tags: [['Trustworthy', true], ['Regular Reports', false]],
      },
      {
        ctag: 'wakaf', label: 'Waqf', host: 'aljauhar.id/wakaf', title: 'Building Waqf', status: 'live',
        desc: 'The musholla has just opened and is still being furnished: carpets, sound system, wudu area and room layout. Every endowment is ongoing charity.',
        tags: [['Ongoing Charity', true], ['Open Progress', false]],
      },
      {
        ctag: 'tpa', label: 'TPA', host: 'aljauhar.id/tpa', title: 'Children’s Qur’an School', status: 'soon',
        desc: 'Being prepared: Qur’an reading, daily duas and Islamic manners for children. We are looking for ustadz/ustadzah and volunteer teachers.',
        tags: [['Free', true], ['Teachers Wanted', false]],
      },
      {
        ctag: 'qurban', label: 'Qurban', host: 'aljauhar.id/qurban', title: 'Community Qurban', status: 'soon',
        desc: 'Planned first qurban at the coming Eid al-Adha: registration, slaughter and distribution of meat to the neighbourhood.',
        tags: [['Sharia Compliant', true], ['Planned 1448 AH', false]],
      },
    ],
    visuals: {
      ledger: { title: 'Infaq cash book', badge: 'Opening balance', rows: [['infaq.charity_box', 'Friday'], ['infaq.transfer', 'BSI'], ['cash.recorded', 'Treasurer']], receipt: 'Deposit slip', receiptNo: '#0001' },
      wakaf: { title: 'Building waqf', badge: 'In progress', legendBase: 'Waqf principal', legendYield: 'Benefit', cards: [['Needs', 'Carpets, sound, wudu'], ['Benefit', 'For the whole congregation']] },
      tpa: { title: 'Qur’an school prep', badge: 'Coming soon', steps: [['Learning space', 'Musholla room ready to use', true], ['Teachers', 'Looking for ustadz/ustadzah & volunteers', false], ['Curriculum', 'Iqro, daily duas, manners', false], ['Registration', 'Opening soon, insyaAllah', false]] },
      qurban: { title: 'Qurban plan', badge: 'Planned 1448 AH', steps: [['Registration', 'Participants (opens later)', false], ['Slaughter', 'According to sharia', false], ['Distribution', 'Meat for neighbours', false], ['Report', 'Announced to congregation', false]] },
    },
  },

  schedule: {
    kick: 'Classes & activities',
    title: 'Musholla activities',
    desc: 'What is already running and what is being prepared. Follow the latest announcements in the congregation WhatsApp group.',
    cols: ['Day', 'Time', 'Activity', 'Led by', 'Status'],
    rows: [
      ['Every day', '5 prayers', 'Congregational prayer', 'Imam: committee', 'live'],
      ['TBA', 'After Maghrib', 'Community study circle', 'Ustadz (TBA)', 'live'],
      ['Mon–Fri', 'After Asr', 'Children’s Qur’an school', 'Teachers wanted', 'soon'],
      ['Friday', 'Morning', 'Friday giving: shared breakfast', 'Congregation', 'soon'],
      ['Saturday', 'After Fajr', 'Classical text study', 'Ustadz (TBA)', 'soon'],
    ],
    note: 'The musholla has just started. More activities will be added, insyaAllah.',
  },

  giving: {
    kick: 'How to give',
    title: 'Four steps to give',
    desc: 'Your infaq, sadaqah and waqf are managed with trust and reported to the congregation.',
    steps: [
      ['01', 'Set your intention', 'Operational infaq, building waqf, or sadaqah. Zakat al-fitr will open in Ramadan, insyaAllah.'],
      ['02', 'Transfer or charity box', 'Transfer to the musholla account, scan QRIS, or use the charity box.'],
      ['03', 'Confirm', 'Send the transfer receipt to the treasurer on WhatsApp so it is recorded as intended.'],
      ['04', 'Follow the report', 'The cash report is announced to the congregation regularly and is available on request.'],
    ],
    bankLabel: 'Infaq account',
    holderLabel: 'Account name:',
    copy: 'Copy number',
    copied: 'Copied',
    qris: 'QRIS coming soon',
    qrisNote: 'The official QRIS code will be shown here.',
    confirm: 'Confirm via WhatsApp',
    confirmText: 'Assalamu’alaikum, I would like to confirm an infaq for Al Jauhar Musholla.',
  },

  location: {
    kick: 'Location',
    title: 'Visit Al Jauhar',
    desc: 'Our doors are open to anyone who wants to pray, learn, or simply stop by.',
    address: 'Address',
    contact: 'Committee contact',
    open: 'Open in Google Maps',
    mapTitle: 'Map of Al Jauhar Musholla in Srengseng, West Jakarta',
  },

  verified: {
    kick: 'Trust & transparency',
    title1: 'Open giving,',
    title2: 'growing goodness',
    desc: 'Every donation is recorded from the charity box until it reaches a program. The congregation can see where their giving flows.',
    stages: ['Congregation', 'Musholla Cash', 'Program'],
    pillTag: 'infaq',
    cta1: 'Give Infaq',
    cta2: 'Contact the Committee',
    foot: 'Run by the committee & congregation of Al Jauhar Musholla',
    ayahTr: '“The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes; in each spike is a hundred grains.”',
    ayahRef: 'Qur’an, Al-Baqarah 2:261',
  },

  night: {
    kick: 'Bring the house of Allah to life',
    title: 'Let’s bring our musholla to life, together',
    hadithTr: '“Whoever builds a mosque for the sake of Allah, Allah will build for him its like in Paradise.”',
    hadithRef: 'Bukhari & Muslim',
    cta1: 'Building Waqf',
    cta2: 'Join the Congregation Group',
    joinText: 'Assalamu’alaikum, I would like to join the Al Jauhar Musholla congregation group.',
    photoAlt: 'Congregation praying together inside a mosque',
  },

  footer: {
    tagline: 'A house of prayer and community hub for Srengseng, West Jakarta.',
    explore: 'Explore',
    contact: 'Contact',
    rights: 'All rights reserved.',
    photos: 'Photos',
    builtWith: 'Built with',
  },
};

export const content: Record<Lang, SiteContent> = { id, en };
