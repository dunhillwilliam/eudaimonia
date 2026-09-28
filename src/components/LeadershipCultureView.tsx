import React, { useState } from 'react';
import { 
  CPTSD_SYMPTOMS, 
  TRANSFERENCE_CASE_STUDY, 
  STRUCTURAL_POLICIES, 
  GOOD_LISTENER_PILLARS 
} from '../data/leadershipCulture';
import { Clock, ShieldCheck } from 'lucide-react';

export const LeadershipCultureView: React.FC = () => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<number>(1);
  const activeSymptom = CPTSD_SYMPTOMS.find(s => s.id === selectedSymptomId) || CPTSD_SYMPTOMS[0];

  return (
    <div className="py-6 sm:py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-[#E7DFD5] pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412] mb-1">
          Tata Kelola Budaya Organisasi
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1917]">
          Kepemimpinan Sadar-Trauma & Kebijakan Kerja
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#57534E]">
          Mencegah burnout dan agresi di tempat kerja dengan memahami trauma C-PTSD dan menegakkan 3 kebijakan struktural.
        </p>
      </div>

      {/* 1. 12 Gejala C-PTSD di Kantor (Concise Selector) */}
      <section className="space-y-4">
        <div className="border-b border-[#E7DFD5] pb-2">
          <h2 className="text-xl font-serif font-semibold text-[#1C1917]">
            12 Gejala Complex PTSD di Lingkungan Kerja
          </h2>
          <p className="text-xs text-[#78716C]">
            Trauma masa kecil bermutasi menjadi kebiasaan kaku dan pertahanan di kantor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Quick list left */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 border border-[#E7DFD5] p-2 bg-white max-h-96 overflow-y-auto">
            {CPTSD_SYMPTOMS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSymptomId(s.id)}
                className={`text-left p-2 transition-colors cursor-pointer text-xs font-mono flex items-center gap-2 ${
                  selectedSymptomId === s.id
                    ? 'bg-[#1C1917] text-white font-semibold'
                    : 'text-[#292524] hover:bg-[#F2EDE4]'
                }`}
              >
                <span className="text-[#9A3412]">{s.id.toString().padStart(2, '0')}.</span>
                <span className="truncate font-sans font-medium">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Quick preview right */}
          <div className="lg:col-span-7 bg-white border border-[#D6CEBE] p-5 space-y-3 text-xs sm:text-sm">
            <div className="border-b border-[#E7DFD5] pb-2">
              <span className="text-xs font-mono uppercase text-[#9A3412] font-semibold">
                Gejala #{activeSymptom.id} · {activeSymptom.originalTerm}
              </span>
              <h3 className="font-serif font-semibold text-lg text-[#1C1917] mt-0.5">
                {activeSymptom.title}
              </h3>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase text-[#78716C] block mb-0.5 font-bold">
                Perilaku di Kantor:
              </span>
              <p className="text-[#292524]">{activeSymptom.corporateBehavior}</p>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase text-[#B91C1C] block mb-0.5 font-bold">
                Akar Ketakutan Masa Kecil:
              </span>
              <p className="text-[#44403C]">{activeSymptom.hiddenFear}</p>
            </div>

            <div className="p-3 bg-[#FBF9F5] border border-[#E7DFD5]">
              <span className="font-mono text-[11px] uppercase text-[#0F766E] font-bold block mb-0.5">
                Solusi Manajerial:
              </span>
              <p className="text-[#1C1917] font-medium">{activeSymptom.healthyIntervention}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Kasus Transferensi Ringkas */}
      <section className="bg-white border border-[#D6CEBE] p-5 sm:p-6 space-y-3">
        <div className="border-b border-[#E7DFD5] pb-2">
          <span className="text-xs font-mono uppercase text-[#9A3412]">Studi Kasus Ringkas</span>
          <h3 className="font-serif font-semibold text-lg text-[#1C1917]">
            Workplace Transference: Anton (SVP) vs Budi (Manager)
          </h3>
        </div>
        <div className="space-y-2 text-xs sm:text-sm">
          <p><strong>Situasi:</strong> {TRANSFERENCE_CASE_STUDY.scenario}</p>
          <div className="p-2.5 bg-[#FEF2F2] border-l-2 border-[#B91C1C] text-[#7F1D1D] italic">
            <strong>Reaksi Panik Budi:</strong> {TRANSFERENCE_CASE_STUDY.reactiveResponse}
          </div>
          <p className="text-[#0F766E] font-medium">
            <strong>Analisis:</strong> {TRANSFERENCE_CASE_STUDY.psychologicalAnalysis}
          </p>
        </div>
      </section>

      {/* 3. Tiga Kebijakan Struktural */}
      <section className="space-y-4">
        <div className="border-b border-[#E7DFD5] pb-2">
          <h2 className="text-xl font-serif font-semibold text-[#1C1917]">
            3 Kebijakan Struktural Korporat
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STRUCTURAL_POLICIES.map((p, i) => (
            <div key={p.id} className="p-4 bg-white border border-[#D6CEBE] space-y-2 text-xs sm:text-sm">
              <span className="font-mono text-xs text-[#9A3412] font-bold">ATURAN 0{i + 1}</span>
              <h4 className="font-serif font-semibold text-base text-[#1C1917]">{p.title}</h4>
              <p className="text-[#57534E]">{p.purpose}</p>
              <div className="pt-2 border-t border-[#E7DFD5] font-mono text-[11px] text-[#0F766E]">
                <strong>Standar:</strong> {p.metricOrRule}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Protokol 48 Jam & 4 Pilar Good Listener */}
      <section className="space-y-4">
        <div className="border-b border-[#E7DFD5] pb-2">
          <h2 className="text-xl font-serif font-semibold text-[#1C1917]">
            Komunikasi "Clear is Kind" & 4 Pilar Pendengar yang Baik
          </h2>
        </div>

        {/* 48 Jam Banner */}
        <div className="p-4 bg-[#1C1917] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div>
            <span className="font-mono uppercase text-[#F97316] text-xs font-bold block">
              Protokol 48 Jam Anti-Sulking
            </span>
            <p className="text-stone-300 mt-0.5">
              Tidak ada hak mendiamkan rekan kerja. Setiap kekecewaan wajib disampaikan secara eksplisit dalam 48 jam melalui memo atau dialog 1-on-1.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {GOOD_LISTENER_PILLARS.map(p => (
            <div key={p.number} className="p-3 bg-white border border-[#D6CEBE] space-y-1 text-xs">
              <span className="font-mono text-[11px] text-[#9A3412] font-bold">{p.number}. {p.name}</span>
              <h5 className="font-semibold text-[#1C1917]">{p.translation}</h5>
              <p className="text-[#57534E] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
