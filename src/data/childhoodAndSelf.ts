import { ChildhoodElement } from '../types';

export const CHILDHOOD_ELEMENTS: ChildhoodElement[] = [
  {
    number: 1,
    name: 'Penyelarasan Emosional',
    originalTerm: 'Attunement',
    description: 'Pengasuh selaras dengan dunia emosi anak. Anak merasa aman berekspresi apa adanya.',
    adultManifestation: 'Eksekutif mendengarkan tim tanpa rasa terancam saat ada perbedaan pendapat.',
    dysfunctionIfMissing: 'Merasa harus selalu kaku menuruti ekspektasi eksternal demi rasa aman.'
  },
  {
    number: 2,
    name: 'Empati Hal-Hal Kecil',
    originalTerm: 'Small Things',
    description: 'Respon hangat pengasuh pada keluhan sepele anak (mainan rusak, kaos kaki tidak nyaman).',
    adultManifestation: 'Peka pada detail friksi operasional tim sebelum meledak menjadi krisis besar.',
    dysfunctionIfMissing: 'Meremehkan keluhan bawahan dan mencap masalah kecil sebagai kelemahan.'
  },
  {
    number: 3,
    name: 'Pengampunan Penuh Kasih',
    originalTerm: 'Kindest Interpretation',
    description: 'Menafsirkan ulah anak karena lelah atau lapar, bukan karena watak jahat.',
    adultManifestation: 'Mengevaluasi kesalahan tim dengan lensa perbaikan sistemik, bukan penghakiman moral.',
    dysfunctionIfMissing: 'Otokritik kejam pada diri sendiri (self-loathing) dan budaya saling menyalahkan di kantor.'
  },
  {
    number: 4,
    name: 'Toleransi Fase Aneh',
    originalTerm: 'Strange Phases',
    description: 'Sabar menghadapi masa anak meledak-ledak tanpa melabeli secara permanen.',
    adultManifestation: 'Sabar menghadapi masa transisi atau kebuntuan kreatif karyawan dalam eksperimen inovasi.',
    dysfunctionIfMissing: 'Manajer otoriter yang kaku dan panik akut terhadap ketidakpastian bisnis.'
  },
  {
    number: 5,
    name: 'Keterikatan yang Diizinkan',
    originalTerm: 'Allowed Attachment',
    description: 'Anak diizinkan bermanja dan bergantung tanpa dipaksa mandiri terlalu dini.',
    adultManifestation: 'Gaya secure attachment: nyaman meminta bantuan dan mendelegasikan tugas.',
    dysfunctionIfMissing: 'Hiper-independen: menolak kolaborasi dan memaksakan mikromanajemen represif.'
  },
  {
    number: 6,
    name: 'Penerimaan Kemanusiaan Biasa',
    originalTerm: 'Ordinary vs Perfection',
    description: 'Orang tua tidak segan mengakui keterbatasan dan kelelahan manusiawinya.',
    adultManifestation: 'Menerapkan standar "Good Enough" dan berani meminta maaf saat membuat kesalahan.',
    dysfunctionIfMissing: 'Mengejar kesempurnaan toksik (insufferable perfectionism) dan takut gagal.'
  },
  {
    number: 7,
    name: 'Ketenangan Konsisten',
    originalTerm: 'Boringness / Predictability',
    description: 'Pengasuh sebagai sumber stabilitas yang dapat diprediksi, bukan kejutan krisis.',
    adultManifestation: 'Menjadi jangkar ketenangan emosional tim saat pasar atau bisnis bergejolak.',
    dysfunctionIfMissing: 'Pemimpin yang reaktif dan dramatis (mood swings) yang melelahkan saraf tim.'
  },
  {
    number: 8,
    name: 'Cinta Tanpa Pamrih',
    originalTerm: 'Unreciprocated Love',
    description: 'Orang tua memberi perlindungan tanpa menuntut anak memuaskan ego emosionalnya.',
    adultManifestation: 'Membimbing dan memfasilitasi karier bawahan tanpa menuntut loyalitas buta atau sanjungan.',
    dysfunctionIfMissing: 'Haus validasi dari panggung korporasi dan gila pujian dewan komisaris.'
  }
];

export const FAMILIARITY_PARADOX_TABLE = [
  {
    consciousExpectation: 'Kebaikan, kehangatan, dan penerimaan tulus.',
    unconsciousFamiliarity: 'Terpikat obsesif pada figur yang dingin dan berjarak emosional.'
  },
  {
    consciousExpectation: 'Stabilitas fungsional dan saling pengertian.',
    unconsciousFamiliarity: 'Memilih figur impulsif atau yang perlu "diselamatkan".'
  },
  {
    consciousExpectation: 'Figur pendukung yang memvalidasi potensi diri.',
    unconsciousFamiliarity: 'Tertarik pada figur kritis yang membuat diri merasa tak pernah cukup.'
  },
  {
    consciousExpectation: 'Relasi setara yang berlandaskan kerja sama tim.',
    unconsciousFamiliarity: 'Mengulang siklus harus melayani dan menyenangkan orang lain tanpa henti.'
  }
];

export const DEFENSIVE_PHRASES_DECONSTRUCTION = [
  {
    phraseId: '"Saya tidak suka menyendiri"',
    englishPhrase: '"I\'m not good on my own"',
    deconstruction: 'Menyendiri menuntut keberanian menghadapi emosi sulit (malu, cemas). Orang yang imatur mengisi jadwal tanpa henti untuk melarikan diri dari introspeksi.'
  },
  {
    phraseId: '"Saya tidak ingat masa kecil saya"',
    englishPhrase: '"I don\'t remember childhood"',
    deconstruction: 'Bukan bukti masa lalu bahagia, melainkan tanda trauma/pengabaian terlalu sakit sehingga ditekan (repressed) dari memori sadar.'
  },
  {
    phraseId: '"Saya tidak pernah memikirkan hal itu"',
    englishPhrase: '"Never thought about that"',
    deconstruction: 'Menjalani hidup dan karier secara mekanis berdasarkan naskah orang lain tanpa pernah menghuni batinnya sendiri secara otentik.'
  },
  {
    phraseId: '"Semuanya baik-baik saja, aman..."',
    englishPhrase: '"Everything is fine..."',
    deconstruction: 'Kepositifan kaku (toxic positivity) untuk menyangkal kenyataan buruk karena tidak memiliki kapasitas batin mengolah rasa kecewa.'
  },
  {
    phraseId: '"Itu cuma omong kosong psikobabel"',
    englishPhrase: '"Just psychobabble..."',
    deconstruction: 'Taktik menutup telinga saat percakapan mulai menyentuh area kebenaran emosional yang mengancam harga diri.'
  }
];

export const TRUE_FALSE_SELF_QUESTIONS = [
  {
    id: 1,
    question: 'Saat lelah berlebih di kantor atau keluarga:',
    optionTrue: 'Jujur butuh istirahat dan berani menolak beban tambahan.',
    optionFalse: 'Memaksakan diri tersenyum karena takut mengecewakan orang lain.',
    weight: 'compliance'
  },
  {
    id: 2,
    question: 'Saat menerima kritik atas strategi kerja:',
    optionTrue: 'Memisahkan kritik objektif dari harga diri pribadi.',
    optionFalse: 'Merasa diserang secara personal dan ingin membantah/menyerang balik.',
    weight: 'armour'
  },
  {
    id: 3,
    question: 'Saat akhir pekan atau cuti wajib:',
    optionTrue: 'Menikmati jeda santai tanpa rasa bersalah.',
    optionFalse: 'Gelisah dan cemas jika tidak melakukan aktivitas produktif.',
    weight: 'workaholism'
  },
  {
    id: 4,
    question: 'Saat merasa kecewa pada rekan kerja atau pasangan:',
    optionTrue: 'Menjelaskan rasa kecewa secara verbal, tenang, dan eksplisit.',
    optionFalse: 'Membisu (sulking), bersikap dingin, atau berharap mereka menebak sendiri.',
    weight: 'sulking'
  }
];
