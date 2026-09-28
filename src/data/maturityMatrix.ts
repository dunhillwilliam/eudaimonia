import { MaturityIndicator } from '../types';

export const MATURITY_INDICATORS: MaturityIndicator[] = [
  // DOMAIN A: Regulasi Diri (1-6)
  {
    id: 1,
    domain: 'A',
    domainName: 'Regulasi Diri',
    title: 'Faktor Fisiologis (Small Things)',
    originalTerm: 'Accounting for Bodily State',
    operationalManifestation: 'Peka pada pengaruh lapar dan lelah terhadap emosi; menunda debat sensitif saat fisik rentan.',
    immaturityRisk: 'Ledakan emosi impulsif di rapat direksi yang dipicu semata-mata keletihan fisik.',
    rubric: {
      unsatisfactory: 'Marah-marah saat lelah/lapar; menyalahkan tim.',
      developing: 'Sadar lelah setelah konflik meledak; butuh waktu tenang.',
      proficient: 'Menunda keputusan sensitif saat fisik lelah.',
      exemplary: 'Membangun jadwal tim yang menghargai ritme biologis.'
    }
  },
  {
    id: 2,
    domain: 'A',
    domainName: 'Regulasi Diri',
    title: 'Penghentian Otokritik (Self-Forgiveness)',
    originalTerm: 'Relinquishing Self-Flogging',
    operationalManifestation: 'Berhenti mencambuk diri saat salah; memaafkan kekeliruan dengan tenang dan objektif.',
    immaturityRisk: 'Kelumpuhan inisiatif dan depresi fungsional akibat kebencian diri mendalam.',
    rubric: {
      unsatisfactory: 'Terjebak spiral kebencian diri dan putus asa saat gagal.',
      developing: 'Mencoba berhenti mencela diri namun masih dihantui rasa bersalah.',
      proficient: 'Memisahkan kekhilafan teknis dari harga diri pribadi.',
      exemplary: 'Menciptakan ruang belajar dari kesalahan bagi seluruh tim.'
    }
  },
  {
    id: 3,
    domain: 'A',
    domainName: 'Regulasi Diri',
    title: 'Berdamai dengan Inner Child',
    originalTerm: 'Embracing Regressive Self',
    operationalManifestation: 'Sadar potensi kepanikan masa kecil saat krisis dan merangkulnya dengan regulasi tenang.',
    immaturityRisk: 'Penolakan kerapuhan batin sehingga regresi termanifestasi sebagai amukan kekanak-kanakan.',
    rubric: {
      unsatisfactory: 'Meledak jadi tantrum manajerial saat berada di bawah tekanan.',
      developing: 'Sadar panik masa kecil setelah ledakan terjadi.',
      proficient: 'Mengenali sinyal cemas dan segera mengambil jeda tenang.',
      exemplary: 'Menenangkan kepanikan tim dengan kehadiran yang stabil.'
    }
  },
  {
    id: 4,
    domain: 'A',
    domainName: 'Regulasi Diri',
    title: 'Kesadaran Kegilaan Diri (Sane Insanity)',
    originalTerm: 'User Manual to My Neuroses',
    operationalManifestation: 'Jujur mengakui kelemahan kepribadian sendiri dan menerbitkan panduan bagi tim.',
    immaturityRisk: 'Menuntut kesempurnaan mutlak (insufferable perfectionism) dan menyalahkan bawahan.',
    rubric: {
      unsatisfactory: 'Berpura-pura sempurna; menyalahkan orang lain.',
      developing: 'Mengakui kelemahan hanya jika terdesak.',
      proficient: 'Memberi peringatan dini pada tim tentang pemicu stres diri.',
      exemplary: 'Membangun ekosistem keterbukaan yang manusiawi di kantor.'
    }
  },
  {
    id: 5,
    domain: 'A',
    domainName: 'Regulasi Diri',
    title: 'Apresiasi Kemajuan Mikro',
    originalTerm: 'Savoring Micro-Achievements',
    operationalManifestation: 'Menikmati pencapaian harian kecil alih-alih terus cemas pada target jangka panjang.',
    immaturityRisk: 'Ketidakpuasan kronis dan ketidakmampuan menikmati proses dinamika kerja.',
    rubric: {
      unsatisfactory: 'Hanya puas pada target raksasa; menolak progres bertahap.',
      developing: 'Cepat kembali cemas pada beban target besar.',
      proficient: 'Rutin merayakan kemajuan harian tim yang stabil.',
      exemplary: 'Menumbuhkan kepuasan kerja batiniah di seluruh divisi.'
    }
  },
  {
    id: 6,
    domain: 'A',
    domainName: 'Regulasi Diri',
    title: 'Pelepasan Paranoia Reputasi',
    originalTerm: 'Mitigating Status Fixation',
    operationalManifestation: 'Melepaskan harga diri dari opini luar; bertumpu pada integritas nilai batin.',
    immaturityRisk: 'Terjebak job snobbery dan perburuan prestise yang menguras energi.',
    rubric: {
      unsatisfactory: 'Harga diri ditentukan oleh pujian atasan dan gelar jabatan.',
      developing: 'Terganggu oleh komentar sinis namun berusaha memulihkan diri.',
      proficient: 'Tenang karena bertindak sesuai integritas objektif.',
      exemplary: 'Memimpin dengan keteladanan yang rendah hati dan membumi.'
    }
  },

  // DOMAIN B: Empati & Komunikasi (7-12)
  {
    id: 7,
    domain: 'B',
    domainName: 'Empati & Komunikasi',
    title: 'Lepaskan Sikap Merasa Paling Benar',
    originalTerm: 'Loose Hold on Self-Righteousness',
    operationalManifestation: 'Sadar bahwa kinerja buruk orang lain umumnya dipicu ketakutan, bukan niat jahat.',
    immaturityRisk: 'Budaya penghakiman kaku: membagi tim jadi pahlawan vs penjahat.',
    rubric: {
      unsatisfactory: 'Menghakimi kesalahan tim sebagai kejahatan moral.',
      developing: 'Butuh mediator untuk melihat akar kebingungan bawahan.',
      proficient: 'Menerapkan penafsiran paling bijak sebelum menilai.',
      exemplary: 'Mengikis saling curiga dengan pendekatan edukatif yang hangat.'
    }
  },
  {
    id: 8,
    domain: 'B',
    domainName: 'Empati & Komunikasi',
    title: 'Artikulasi Lisan yang Jelas',
    originalTerm: 'Explicit Verbal Articulation',
    operationalManifestation: 'Menjelaskan kebutuhan dan arahan bisnis secara runtut tanpa menuntut orang membaca pikiran.',
    immaturityRisk: 'Miskomunikasi fatal dan asumsi sepihak yang membingungkan operasional.',
    rubric: {
      unsatisfactory: 'Memberi arahan samar lalu marah saat hasil tidak cocok.',
      developing: 'Klarifikasi hanya jika ditanya berkali-kali.',
      proficient: 'Menuliskan brief dan ekspektasi secara terstruktur.',
      exemplary: 'Menegakkan standar komunikasi "Clear is Kind" di divisi.'
    }
  },
  {
    id: 9,
    domain: 'B',
    domainName: 'Empati & Komunikasi',
    title: 'Keberanian Meminta Maaf Terbuka',
    originalTerm: 'Open Apology Without Demise',
    operationalManifestation: 'Jujur mengakui kekeliruan keputusan dan berani meminta maaf tanpa merasa harga diri hancur.',
    immaturityRisk: 'Membela strategi gagal demi menyelamatkan ego; melimpahkan kesalahan ke staf.',
    rubric: {
      unsatisfactory: 'Mencari kambing hitam untuk menutupi kesalahan diri.',
      developing: 'Minta maaf setengah hati dengan banyak pembelaan.',
      proficient: 'Mengakui kekeliruan di forum dan mengarahkan ke solusi.',
      exemplary: 'Menjadikan evaluasi kesalahan sebagai sarana belajar bersama.'
    }
  },
  {
    id: 10,
    domain: 'B',
    domainName: 'Empati & Komunikasi',
    title: 'Tinggalkan Aksi Mogok Bicara (Sulking)',
    originalTerm: 'Abandoning Sulking',
    operationalManifestation: 'Sampaikan kekecewaan kerja secara langsung lewat dialog tertib (SLA 48 Jam).',
    immaturityRisk: 'Kelumpuhan kolaborasi akibat agresi pasif, sikap dingin, dan pengabaian pesan.',
    rubric: {
      unsatisfactory: 'Membisu atau membalas chat secara ketus saat kecewa.',
      developing: 'Menarik diri berhari-hari sebelum mau bicara.',
      proficient: 'Mengartikulasikan kekecewaan dengan tenang dalam 48 jam.',
      exemplary: 'Menjamin ruang aman di mana ketidaksepakatan diselesaikan terbuka.'
    }
  },
  {
    id: 11,
    domain: 'B',
    domainName: 'Empati & Komunikasi',
    title: 'Pengampunan Figur Otoritas Masa Lalu',
    originalTerm: 'Reconciling with Authority',
    operationalManifestation: 'Mengubah dendam pada orang tua/mantan atasan menjadi empati atas beban hidup mereka.',
    immaturityRisk: 'Mengulang siklus transferensi toksik di tempat kerja tanpa sadar.',
    rubric: {
      unsatisfactory: 'Memproyeksikan kebencian masa kecil ke figur atasan kantor.',
      developing: 'Mulai menyadari pemicu luka lama saat ditegur atasan.',
      proficient: 'Memahami bahwa orang lain bertindak dari keterbatasannya.',
      exemplary: 'Memutus transmisi trauma antargenerasi di organisasi.'
    }
  },
  {
    id: 12,
    domain: 'B',
    domainName: 'Empati & Komunikasi',
    title: 'Berbagi Kerentanan Terukur',
    originalTerm: 'Structured Vulnerability',
    operationalManifestation: 'Membangun kepercayaan tim melalui keberanian membuka kesulitan dan keterbatasan manusiawi.',
    immaturityRisk: 'Isolasi kepemimpinan dan ketiadaan rasa aman psikologis dalam tim.',
    rubric: {
      unsatisfactory: 'Memakai topeng wibawa steril; menolak mengaku bingung.',
      developing: 'Bercerita kesulitan hanya setelah sukses tercapai.',
      proficient: 'Berani berkata "Saya belum tahu jawabannya" di ruang rapat.',
      exemplary: 'Menciptakan iklim di mana tim berani melapor risiko sejak dini.'
    }
  },

  // DOMAIN C: Resiliensi Operasional (13-20)
  {
    id: 13,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Kepercayaan Diri yang Realistis',
    originalTerm: 'Realistic Confidence',
    operationalManifestation: 'Percaya diri dari kesadaran bahwa semua orang lain juga membawa keraguan internal.',
    immaturityRisk: 'Sindrom penipu akut atau ditutupi arogansi kekuasaan rapuh.',
    rubric: {
      unsatisfactory: 'Merasa tidak layak atau menutupinya dengan keangkuhan.',
      developing: 'Mudah minder saat berhadapan dengan tokoh dominan.',
      proficient: 'Sadar bahwa semua orang di ruangan sama-sama sedang belajar.',
      exemplary: 'Menularkan rasa percaya diri yang tenang kepada tim muda.'
    }
  },
  {
    id: 14,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Standar "Good Enough"',
    originalTerm: 'Adopting Good Enough Standard',
    operationalManifestation: 'Menghentikan obsesi over-engineering; menetapkan batas mutu kerja yang realistis.',
    immaturityRisk: 'Keterlambatan proyek yang fatal, kejenuhan tim (burnout), dan inersia inovasi.',
    rubric: {
      unsatisfactory: 'Menolak rilis jika belum 100% sempurna; tim burnout.',
      developing: 'Setuju rilis minimal namun mengeluh sepanjang waktu.',
      proficient: 'Menerapkan Definition of Done yang pragmatis dan sehat.',
      exemplary: 'Menyeimbangkan mutu dan kecepatan eksekusi secara elegan.'
    }
  },
  {
    id: 15,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Pesimisme Konstruktif',
    originalTerm: 'Constructive Pessimism',
    operationalManifestation: 'Menerima bahwa hambatan dan kegagalan adalah bagian alami bisnis; tetap tenang saat krisis.',
    immaturityRisk: 'Kepanikan akut dan saling tuduh saat target operasional meleset.',
    rubric: {
      unsatisfactory: 'Histeris saat rencana meleset seolah dunia kiamat.',
      developing: 'Butuh waktu lama memulihkan diri pasca-kegagalan.',
      proficient: 'Mengantisipasi risiko sejak awal dengan kepala dingin.',
      exemplary: 'Menjadi jangkar ketenangan tim saat turbulensi pasar terjadi.'
    }
  },
  {
    id: 16,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Keseimbangan Menilai Bakat Tim',
    originalTerm: 'Symmetric Assessment of Talents',
    operationalManifestation: 'Sadar bahwa kelemahan karakter anggota tim simetris dengan kekuatan utamanya.',
    immaturityRisk: 'Mengharapkan sosok sempurna tanpa kompensasi kelemahan bawaan.',
    rubric: {
      unsatisfactory: 'Menuntut bawahan visioner tapi juga harus super rapi detail.',
      developing: 'Mulai memahami korelasi tapi masih sering frustrasi.',
      proficient: 'Memasangkan anggota tim yang saling melengkapi.',
      exemplary: 'Mengoptimalkan kekuatan unik tim tanpa menuntut kesempurnaan.'
    }
  },
  {
    id: 17,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Mendengar Kritik Tanpa Baju Zirah',
    originalTerm: 'Receiving Feedback Unarmored',
    operationalManifestation: 'Menyerap evaluasi operasional objektif tanpa menganggapnya sebagai serangan harga diri.',
    immaturityRisk: 'Kepemimpinan otoriter dikelilingi bawahan "asal bapak senang" (yes-men).',
    rubric: {
      unsatisfactory: 'Defensif dan membentak setiap ada masukan kritis.',
      developing: 'Mendengar kritik dengan tegang dan gelisah.',
      proficient: 'Menyerap masukan dengan rileks dan membedah substansinya.',
      exemplary: 'Aktif meminta umpan balik kritis balik dari bawahannya.'
    }
  },
  {
    id: 18,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Perspektif Kosmik Makro',
    originalTerm: 'Cosmic Humility',
    operationalManifestation: 'Menggunakan perenungan alam dan sains untuk merelatifkan kegagalan bisnis pribadi.',
    immaturityRisk: 'Membesarkan kendala bisnis kecil menjadi teror eksistensial.',
    rubric: {
      unsatisfactory: 'Menganggap kegagalan proyek sebagai kiamat hidupnya.',
      developing: 'Mencari hiburan sementara namun beban tetap berat.',
      proficient: 'Mengambil jarak psikologis melalui perenungan luasnya semesta.',
      exemplary: 'Memimpin dengan kerendahan hati yang membebaskan orang lain.'
    }
  },
  {
    id: 19,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Kompensasi Distorsi Masa Lalu',
    originalTerm: 'Compensating Historical Triggers',
    operationalManifestation: 'Mengenali titik buta emosi sendiri dan menahan dorongan impulsif saat situasi memanas.',
    immaturityRisk: 'Keputusan reaksioner yang didikte amarah atau ketakutan masa kecil.',
    rubric: {
      unsatisfactory: 'Yakin respon impulsifnya selalu benar dan harus ditaati.',
      developing: 'Sadar terlambat setelah amarah terlanjur meledak.',
      proficient: 'Mengidentifikasi pemicu pribadi dan menunda reaksi.',
      exemplary: 'Membimbing eksekutif lain mengatasi bias trauma masa lalu.'
    }
  },
  {
    id: 20,
    domain: 'C',
    domainName: 'Resiliensi Operasional',
    title: 'Loyalitas Strategis vs Tren Instan',
    originalTerm: 'Strategic Loyalty vs Executive Crushes',
    operationalManifestation: 'Tidak mudah terbuai buzzword atau konsultan instan; setia pada eksekusi teruji.',
    immaturityRisk: 'Perubahan arah bisnis impulsif setiap kuartal yang memboroskan sumber daya.',
    rubric: {
      unsatisfactory: 'Mengganti roadmap bisnis setiap ada tren baru di media.',
      developing: 'Sadar ide baru rapuh setelah banyak waktu terbuang.',
      proficient: 'Mengevaluasi tren dengan skeptis; setia pada tim teruji.',
      exemplary: 'Menjaga konsistensi visi jangka panjang dengan sabar.'
    }
  }
];
