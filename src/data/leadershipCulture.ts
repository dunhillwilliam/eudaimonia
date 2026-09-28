import { CptsdSymptom, StructuralPolicy } from '../types';

export const CPTSD_SYMPTOMS: CptsdSymptom[] = [
  {
    id: 1,
    title: 'Hypervigilance & Takut Jatuh',
    originalTerm: 'Terror of a Sudden Fall from Grace',
    corporateBehavior: 'Cemas konstan reputasi atau jabatannya akan hancur dalam semalam akibat kesalahan kecil.',
    hiddenFear: 'Takut diusir atau ditolak total sebagaimana masa kecil.',
    healthyIntervention: 'Normalisasi bahwa kegagalan eksperimen adalah bagian lumrah bisnis; terapkan sudut pandang Fortuna.'
  },
  {
    id: 2,
    title: 'Ketegangan Fisik & Menolak Rileks',
    originalTerm: 'Physical Rigidity & Anti-Relaxation',
    corporateBehavior: 'Postur kaku, maag kronis, dan mencemooh program well-being kantor sebagai "omong kosong".',
    hiddenFear: 'Bagi individu bertrauma, menurunkan kesiagaan tubuh terasa sangat membahayakan.',
    healthyIntervention: 'Beri ruang hening mikro tanpa memaksa sesi meditasi formal yang memberatkan.'
  },
  {
    id: 3,
    title: 'Cemas Saat Istirahat & Liburan',
    originalTerm: 'High Alarm Sleep Dysregulation',
    corporateBehavior: 'Bangun pagi dalam kepanikan tinggi; menganggap akhir pekan sebagai momen bahaya tanpa tameng kerja.',
    hiddenFear: 'Merasa nilai dirinya lenyap saat sedang tidak berproduksi.',
    healthyIntervention: 'Penegakan kebijakan batas jam kerja (Off-Hours Hard Cap).'
  },
  {
    id: 4,
    title: 'Sindrom Penipu (Impostor Ekstrem)',
    originalTerm: 'Self-Loathing & Impostor Phenomenon',
    corporateBehavior: 'Yakin keberhasilan kariernya hanyalah manipulasi kebetulan yang sebentar lagi akan terbongkar.',
    hiddenFear: 'Membawa keyakinan bawah sadar bahwa dirinya pada dasarnya cacat.',
    healthyIntervention: 'Edukasi bahwa semua pemimpin industri juga sedang mencari jalan (making it up as we go).'
  },
  {
    id: 5,
    title: 'Mengejar Figur Dingin (Unavailable)',
    originalTerm: 'Pursuing Emotionally Cold Leaders',
    corporateBehavior: 'Mencari validasi dari atasan dingin yang sulit dipuaskan, sembari menjauhi rekan kerja yang hangat.',
    hiddenFear: 'Dorongan mengulang dan "memenangkan" pengakuan dari orang tua masa lalu.',
    healthyIntervention: 'Fasilitasi mentoring dengan figur kepemimpinan yang suportif dan konsisten.'
  },
  {
    id: 6,
    title: 'Penolakan Kehangatan Rekan Kerja',
    originalTerm: 'Aversion to Genuine Warmth',
    corporateBehavior: 'Curiga pada kebaikan tulus kolega; mencap kepedulian tim sebagai tindakan menjilat atau cengeng.',
    hiddenFear: 'Takut mempercayai kebaikan karena dulu kebaikan selalu disertai rasa sakit atau syarat.',
    healthyIntervention: 'Pertahankan kesopanan beradab tanpa memaksa keintiman mendadak.'
  },
  {
    id: 7,
    title: 'Kemarahan saat Dikritik (Panik Teror)',
    originalTerm: 'Shouting Because Terrified',
    corporateBehavior: 'Membentak atau mendebat keras umpan balik objektif; jeritan panik dari rasa terancam.',
    hiddenFear: 'Mengartikan kritik kerja sebagai vonis pemusnahan harga diri.',
    healthyIntervention: 'Terapkan pilar The Good Listener: pisahkan penolakan ide dari martabat personal.'
  },
  {
    id: 8,
    title: 'Paranoia Politik Kantor',
    originalTerm: 'Political Hypervigilance',
    corporateBehavior: 'Yakin rekan kerja sedang bersekongkol menjatuhkannya; terobsesi rumor negatif kantor.',
    hiddenFear: 'Asumsi awal bahwa dunia luar pada dasarnya kejam dan tidak aman.',
    healthyIntervention: 'Dokumentasi keputusan secara transparan dan batasi ruang rumor tertutup.'
  },
  {
    id: 9,
    title: 'Dorongan Menarik Diri Total',
    originalTerm: 'Compulsive Social Withdrawal',
    corporateBehavior: 'Merasa paling bahagia saat tidak perlu berinteraksi atau bertatap muka dengan siapa pun di kantor.',
    hiddenFear: 'Kelelahan ekstrem akibat memikul topeng kepatuhan False Self sepanjang hari.',
    healthyIntervention: 'Sediakan kanal komunikasi asinkronus tanpa mengucilkan peran fungsionalnya.'
  },
  {
    id: 10,
    title: 'Kelelahan Eksistensial Tersembunyi',
    originalTerm: 'Implicit Existential Exhaustion',
    corporateBehavior: 'Keletihan batin yang teramat sangat terhadap rutinitas; ingin berhenti bereksistensi.',
    hiddenFear: 'Beban ketidakjujuran hidup selama puluhan tahun melampaui kapasitas adaptif tubuh.',
    healthyIntervention: 'Sediakan konseling psikologis dan alokasikan zona penyangga waktu (SLA Buffer Zone).'
  },
  {
    id: 11,
    title: 'Rigiditas Rutinitas & Perfeksionisme',
    originalTerm: 'Paralyzing Routine Rigidity',
    corporateBehavior: 'Takut melumpuhkan pada perubahan rencana kecil; menganggap revisi setara kehancuran operasional.',
    hiddenFear: 'Kekacauan di luar memicu ancaman kekacauan emosional di dalam diri.',
    healthyIntervention: 'Kriteria Definition of Done (DoD) objektif agar tim memiliki batasan aman yang jelas.'
  },
  {
    id: 12,
    title: 'Kecanduan Kerja (Workaholism)',
    originalTerm: 'Compulsive Overworking as Armour',
    corporateBehavior: 'Menimbun gelar, bonus, dan jam lembur sebagai tameng dari rasa benci diri (self-disgust).',
    hiddenFear: 'Menghadapi keheningan diri yang dipenuhi rasa bersalah.',
    healthyIntervention: 'Penegakan batas komunikasi di luar jam kerja (Off-Hours Hard Cap).'
  }
];

export const TRANSFERENCE_CASE_STUDY = {
  scenario: 'Anton (SVP) memberi saran rutin: "Budi, model keuanganmu tajam. Kita hanya perlu mengkalibrasi ulang asumsi risiko di paragraf akhir agar presentasi ke Direksi lebih solid."',
  reactiveResponse: 'Budi berdiri dengan wajah memerah: "Mengapa Anda selalu berusaha menjatuhkan saya di depan tim? Tidak ada pekerjaan saya yang pernah cukup di mata Anda!"',
  psychologicalAnalysis: 'Budi mengalami transferensi. Kritik objektif Anton menyenggol luka masa kecil Budi bersama ayahnya yang keras. Budi bukan merespons Anton, melainkan merespons luka masa lalu.'
};

export const STRUCTURAL_POLICIES: StructuralPolicy[] = [
  {
    id: 'dod',
    title: 'Definition of Done (DoD)',
    englishTerm: 'Batasi Over-Engineering',
    mechanism: 'Kriteria selesai ditetapkan secara terukur sebelum proyek dimulai.',
    purpose: 'Saat kriteria terpenuhi, pekerjaan ditutup (Good Enough) demi mencegah perfeksionisme neurotik.',
    metricOrRule: 'Checklist maks 5 kriteria; penambahan di luar scope harus disetujui formal.'
  },
  {
    id: 'off-hours',
    title: 'Off-Hours Hard Cap',
    englishTerm: 'Batas Komunikasi Luar Jam Kerja',
    mechanism: 'Larangan mengirim pesan kerja, email, atau penugasan di luar jam resmi dan akhir pekan.',
    purpose: 'Menjamin hak pemulihan sistem saraf karyawan tanpa takut dinilai buruk.',
    metricOrRule: 'Bebas chat kerja 18:00 - 08:00 dan akhir pekan, kecuali force majeure.'
  },
  {
    id: 'buffer-zones',
    title: 'SLA Buffer Zones (15-20%)',
    englishTerm: 'Cadangan Waktu Regulasi',
    mechanism: 'Wajib mengalokasikan cadangan waktu 15–20% dari total estimasi proyek.',
    purpose: 'Menyerap friksi teknis tak terduga dan kelelahan mental tim secara aman.',
    metricOrRule: 'Proyek 4 minggu otomatis mendapat tambahan 4 hari cadangan kerja.'
  }
];

export const GOOD_LISTENER_PILLARS = [
  {
    number: '01',
    name: 'Egging On',
    translation: 'Dorongan Emosional Netral',
    description: 'Gunakan frasa singkat seperti "Lanjutkan" atau "Apa yang membuat Anda cemas soal itu?" untuk memandu lawan bicara menemukan akar masalah.'
  },
  {
    number: '02',
    name: 'Urging Clarification',
    translation: 'Klarifikasi Substantif',
    description: 'Ubah ledakan emosi umum ("Saya benci sistem ini") menjadi masalah spesifik ("Alur baru menambah 3 hari kerja pada proses saya").'
  },
  {
    number: '03',
    name: 'Non-Moralizing',
    translation: 'Tanpa Ceramah Moral',
    description: 'Dengarkan pengakuan kesalahan tim dengan nada tenang dan simetris, tanpa menunjukkan ekspresi terkejut atau khotbah menggurui.'
  },
  {
    number: '04',
    name: 'Pisahkan Opini dari Pribadi',
    translation: 'Separating Disagreement',
    description: 'Tegaskan batas jernih: menolak gagasan bisnis tidak sama dengan membenci atau meremehkan martabat pengusulnya.'
  }
];
