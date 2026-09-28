import React, { useState, useEffect } from 'react';
import { UserNeurosisManual } from '../types';
import { 
  FORTUNA_VS_MERITOCRACY, 
  CAMUS_THE_PLAGUE_CASE, 
  BRUEGEL_ICARUS_LESSON,
  THREE_PILLARS_OF_MEANING 
} from '../data/existentialPhilosophy';
import { ShieldAlert, Pause, Play, RotateCcw, Copy, Check, Heart, Feather, Compass } from 'lucide-react';

export const PracticalKitView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'halt' | 'manual' | 'repair' | 'philosophy'>('halt');

  // HALT State
  const [haltStatus, setHaltStatus] = useState({
    hungry: false,
    angry: false,
    lonely: false,
    tired: false
  });
  const [timerSeconds, setTimerSeconds] = useState<number>(60);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  const toggleHalt = (key: 'hungry' | 'angry' | 'lonely' | 'tired') => {
    setHaltStatus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const haltCount = Object.values(haltStatus).filter(Boolean).length;

  // Manual Neurosis State
  const [manual, setManual] = useState<UserNeurosisManual>({
    name: 'Wira Kusuma',
    role: 'Pimpinan Tim / Rekan Kerja',
    coreStressReaction: 'Menarik diri (sulking) dan memaksakan kendali kaku saat merasa cemas.',
    stressTriggers: [
      'Gula darah drop / kelelahan sore hari',
      'Kritik mendadak tanpa pembuka jelas',
      'Perubahan jadwal atau instruksi sepihak'
    ],
    irrationalThoughtsUnderPressure: 'Merasa reputasi akan hancur dan orang lain meragukan saya.',
    howToCommunicateWithMe: 'Gunakan nada tenang. Pisahkan kritik ide dari harga diri personal.',
    whatIAppreciateWhenPanicking: 'Kehadiran yang stabil, secangkir teh, dan fokus pada solusi langkah demi langkah.',
    myDefinitionOfGoodEnough: 'Target fungsional tercapai 85-90% dengan struktur aman.'
  });
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyManual = () => {
    const text = `PANDUAN OPERASIONAL NEUROSIS DIRI
Nama: ${manual.name} (${manual.role})
1. Reaksi Stres: ${manual.coreStressReaction}
2. Pemicu: ${manual.stressTriggers.join(', ')}
3. Pikiran Irasional Bawah Tekanan: "${manual.irrationalThoughtsUnderPressure}"
4. Cara Terbaik Berkomunikasi: ${manual.howToCommunicateWithMe}
5. Definisi Good Enough: ${manual.myDefinitionOfGoodEnough}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-6 sm:py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E7DFD5] pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412] mb-1">
          Toolkit Praktis & Pertolongan Pertama
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1917]">
          Kit Krisis, Panduan Neurosis & Refleksi Batin
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#57534E]">
          Alat interaktif untuk menahan impuls reaktif, mengartikulasikan kelemahan diri, memperbaiki relasi, dan meredakan teror reputasi.
        </p>

        {/* Straightforward Sub-Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#E7DFD5]">
          {[
            { id: 'halt', label: '1. Jeda Epoche & HALT' },
            { id: 'manual', label: '2. Buku Panduan Neurosis Diri' },
            { id: 'repair', label: '3. Navigasi Konflik (Rupture & Repair)' },
            { id: 'philosophy', label: '4. Ringkasan Filsafat & Icarus' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-[#1C1917] text-white border-[#1C1917] font-semibold'
                  : 'bg-white text-[#57534E] border-[#D6CEBE] hover:bg-[#F2EDE4]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: HALT & Epoche */}
      {activeTab === 'halt' && (
        <div className="space-y-6">
          <div className="bg-white border border-[#D6CEBE] p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7DFD5] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#9A3412]">
                  Pemeriksaan Fisiologis
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                  Jangan Ambil Keputusan Saat Tubuh Rentan (HALT)
                </h3>
              </div>

              {/* Timer 60s */}
              <div className="flex items-center gap-2 bg-[#FBF9F5] border border-[#D6CEBE] px-3 py-1.5">
                <span className="text-xs font-mono text-[#78716C]">Jeda 60s:</span>
                <span className="font-mono text-lg font-bold tabular-nums text-[#1C1917]">
                  00:{timerSeconds.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className="p-1 bg-[#1C1917] text-white cursor-pointer hover:bg-[#292524]"
                >
                  {timerActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => { setTimerActive(false); setTimerSeconds(60); }}
                  className="p-1 border border-[#D6CEBE] text-[#78716C] cursor-pointer hover:bg-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#57534E]">
              Pilih kondisi fisik yang Anda rasakan saat ini sebelum membalas chat sensitif atau menegur seseorang:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { key: 'hungry', label: 'Hungry', desc: 'Lapar / gula darah drop' },
                { key: 'angry', label: 'Angry', desc: 'Tersenggol luka lama' },
                { key: 'lonely', label: 'Lonely', desc: 'Merasa terasing sendirian' },
                { key: 'tired', label: 'Tired', desc: 'Kurang tidur / lelah mental' }
              ].map(item => {
                const checked = haltStatus[item.key as keyof typeof haltStatus];
                return (
                  <button
                    key={item.key}
                    onClick={() => toggleHalt(item.key as any)}
                    className={`text-left p-3 border transition-colors cursor-pointer ${
                      checked
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-[#FBF9F5] text-[#292524] border-[#D6CEBE] hover:bg-[#F2EDE4]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold uppercase mb-1">
                      <span>{item.label}</span>
                      {checked && <Check className="w-3.5 h-3.5 text-[#F97316]" />}
                    </div>
                    <div className={`text-[11px] ${checked ? 'text-stone-300' : 'text-[#78716C]'}`}>
                      {item.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {haltCount > 0 && (
              <div className="border-l-2 border-[#9A3412] pl-3 py-2 bg-[#FFF7ED] text-xs text-[#7C2D12]">
                <strong>Peringatan:</strong> {haltCount} faktor fisiologis aktif. Tunda email krusial atau pembicaraan konfrontatif sampai Anda makan dan istirahat 30 menit.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Manual Neurosis Generator */}
      {activeTab === 'manual' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Edit Form */}
          <div className="bg-white border border-[#D6CEBE] p-5 space-y-4 text-xs">
            <div className="border-b border-[#E7DFD5] pb-2">
              <h3 className="font-serif font-semibold text-base text-[#1C1917]">
                Sesuaikan Panduan Neurosis Anda
              </h3>
              <p className="text-[11px] text-[#78716C]">
                Navigasi ramah agar rekan kerja atau pasangan paham cara berinteraksi saat Anda stres.
              </p>
            </div>

            <div>
              <label className="block font-mono uppercase text-[#78716C] mb-1">Nama & Peran</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={manual.name}
                  onChange={(e) => setManual({ ...manual, name: e.target.value })}
                  className="p-2 border border-[#D6CEBE] bg-[#FBF9F5] focus:outline-none"
                  placeholder="Nama"
                />
                <input
                  type="text"
                  value={manual.role}
                  onChange={(e) => setManual({ ...manual, role: e.target.value })}
                  className="p-2 border border-[#D6CEBE] bg-[#FBF9F5] focus:outline-none"
                  placeholder="Peran"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono uppercase text-[#78716C] mb-1">Reaksi Stres Utama</label>
              <input
                type="text"
                value={manual.coreStressReaction}
                onChange={(e) => setManual({ ...manual, coreStressReaction: e.target.value })}
                className="w-full p-2 border border-[#D6CEBE] bg-[#FBF9F5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono uppercase text-[#78716C] mb-1">Pikiran Irasional Pertama Saat Tertekan</label>
              <input
                type="text"
                value={manual.irrationalThoughtsUnderPressure}
                onChange={(e) => setManual({ ...manual, irrationalThoughtsUnderPressure: e.target.value })}
                className="w-full p-2 border border-[#D6CEBE] bg-[#FBF9F5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono uppercase text-[#78716C] mb-1">Cara Terbaik Menegur / Mendekati Saya</label>
              <input
                type="text"
                value={manual.howToCommunicateWithMe}
                onChange={(e) => setManual({ ...manual, howToCommunicateWithMe: e.target.value })}
                className="w-full p-2 border border-[#D6CEBE] bg-[#FBF9F5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono uppercase text-[#78716C] mb-1">Definisi "Good Enough" Saya</label>
              <input
                type="text"
                value={manual.myDefinitionOfGoodEnough}
                onChange={(e) => setManual({ ...manual, myDefinitionOfGoodEnough: e.target.value })}
                className="w-full p-2 border border-[#D6CEBE] bg-[#FBF9F5] focus:outline-none"
              />
            </div>
          </div>

          {/* Live Preview & Copy */}
          <div className="bg-[#1C1917] text-white p-5 space-y-4 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-[#F97316] uppercase">Preview Panduan Neurosis</span>
              <button
                onClick={handleCopyManual}
                className="flex items-center gap-1 px-2.5 py-1 bg-white text-[#1C1917] hover:bg-[#F2EDE4] cursor-pointer text-[11px] font-semibold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#0F766E]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>

            <div className="space-y-3 font-sans text-stone-300">
              <div>
                <span className="text-white font-serif font-bold text-base block">{manual.name}</span>
                <span className="text-xs text-stone-400 font-mono">{manual.role}</span>
              </div>
              <p><strong>Reaksi Stres:</strong> {manual.coreStressReaction}</p>
              <p><strong>Pikiran Irasional:</strong> "{manual.irrationalThoughtsUnderPressure}"</p>
              <p><strong>Cara Menegur Saya:</strong> {manual.howToCommunicateWithMe}</p>
              <p><strong>Definisi Good Enough:</strong> {manual.myDefinitionOfGoodEnough}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Rupture & Repair */}
      {activeTab === 'repair' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="border-t-2 border-[#1C1917] pt-3 space-y-1">
            <span className="font-mono text-xs font-semibold text-[#9A3412]">01. MINTA MAAF DULUAN</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">Tanpa Merasa Harga Diri Hancur</h4>
            <p className="text-[#57534E]">
              Meminta maaf hanya berarti tindakan spesifik Anda baru saja melukai orang lain, bukan bukti Anda manusia cacat.
            </p>
          </div>

          <div className="border-t-2 border-[#1C1917] pt-3 space-y-1">
            <span className="font-mono text-xs font-semibold text-[#9A3412]">02. HINDARI POLARISASI</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">Tolak Dikotomi Baik vs Jahat</h4>
            <p className="text-[#57534E]">
              Pasangan atau rekan kerja bisa sangat menyayangi kita, namun tetap bisa melakukan kesalahan yang menjengkelkan.
            </p>
          </div>

          <div className="border-t-2 border-[#1C1917] pt-3 space-y-1">
            <span className="font-mono text-xs font-semibold text-[#9A3412]">03. 99% HANGAT, 1% KRITIK</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">Mendidik Tanpa Mempermalukan</h4>
            <p className="text-[#57534E]">
              Manusia hanya bisa belajar saat merasa aman. Beri 99% rasa penerimaan sebelum menyampaikan 1% masukan halus.
            </p>
          </div>

          <div className="border-t-2 border-[#1C1917] pt-3 space-y-1">
            <span className="font-mono text-xs font-semibold text-[#9A3412]">04. EVALUASI BERSAMA</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">Langkah Konkret ke Depan</h4>
            <p className="text-[#57534E]">
              Tanyakan dengan tenang: "Apa yang bisa kita lakukan bersama agar kesalahpahaman ini tidak terulang?"
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: Philosophy Takeaways */}
      {activeTab === 'philosophy' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-t-2 border-[#1C1917] pt-3 space-y-2">
            <span className="font-mono text-xs text-[#9A3412] font-semibold">DEWI FORTUNA</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">
              {FORTUNA_VS_MERITOCRACY.title}
            </h4>
            <p className="text-xs text-[#44403C] leading-relaxed">
              {FORTUNA_VS_MERITOCRACY.summary} Fortuna memegang kemudi (tiller) dan kelimpahan (cornucopia): sukses dan gagal selalu dipengaruhi faktor acak luar.
            </p>
          </div>

          <div className="border-t-2 border-[#1C1917] pt-3 space-y-2">
            <span className="font-mono text-xs text-[#0F766E] font-semibold">ALBERT CAMUS</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">
              Common Decency vs Heroisme Palsu
            </h4>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Dr. Bernard Rieux: Hadapi krisis bukan dengan khotbah moral atau heroisme narsistik, melainkan menjalankan tugas operasional harian dengan jujur dan peduli.
            </p>
          </div>

          <div className="border-t-2 border-[#1C1917] pt-3 space-y-2">
            <span className="font-mono text-xs text-[#B91C1C] font-semibold">PIETER BRUEGEL</span>
            <h4 className="font-serif font-semibold text-base text-[#1C1917]">
              The Consoling Genius of Indifference
            </h4>
            <p className="text-xs text-[#44403C] leading-relaxed">
              {BRUEGEL_ICARUS_LESSON.liberation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
