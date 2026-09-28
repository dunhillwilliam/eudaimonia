import React, { useState } from 'react';
import { 
  CHILDHOOD_ELEMENTS, 
  FAMILIARITY_PARADOX_TABLE, 
  DEFENSIVE_PHRASES_DECONSTRUCTION,
  TRUE_FALSE_SELF_QUESTIONS 
} from '../data/childhoodAndSelf';
import { RefreshCw } from 'lucide-react';

export const ChildhoodSelfView: React.FC = () => {
  const [selectedElem, setSelectedElem] = useState<number>(1);
  const [testAnswers, setTestAnswers] = useState<Record<number, 'true' | 'false'>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);

  const activeElement = CHILDHOOD_ELEMENTS.find(e => e.number === selectedElem) || CHILDHOOD_ELEMENTS[0];

  const calculateScore = () => {
    const falseCount = Object.values(testAnswers).filter(val => val === 'false').length;
    const total = TRUE_FALSE_SELF_QUESTIONS.length;
    const ratio = Math.round((falseCount / total) * 100);
    return { falseCount, ratio, total };
  };

  return (
    <div className="py-6 sm:py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-[#E7DFD5] pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412] mb-1">
          Psikoanalisis Donald Winnicott & Edward Tronick
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1917]">
          Arkeologi Diri: True Self vs False Self
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#57534E]">
          Masa kecil membentuk cetak biru internal bagaimana kita bereaksi pada stres, memilih pasangan, dan memimpin tim.
        </p>
      </div>

      {/* 1. Still Face Paradigm & Inti Teori */}
      <section className="bg-white border border-[#D6CEBE] p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#78716C]">
          <span>Eksperimen Perkembangan</span>
          <span aria-hidden="true">·</span>
          <span>Still Face (Edward Tronick)</span>
        </div>
        <h3 className="font-serif font-semibold text-lg text-[#1C1917]">
          Sistem Saraf Membutuhkan Ko-Regulasi Afektif
        </h3>
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
          Saat pengasuh membekukan wajah tanpa ekspresi selama 2 menit, bayi mengalami kepanikan biologis (kortisol naik tajam). <strong>Kesimpulan:</strong> Anak tidak bisa menenangkan dirinya sendiri tanpa pengasuh yang responsif. Ketiadaan rasa aman ini memaksa anak menekan perasaannya dan memunculkan False Self.
        </p>
      </section>

      {/* 2. 8 Elemen Pengasuhan Awal */}
      <section className="space-y-4">
        <div className="border-b border-[#E7DFD5] pb-2">
          <h2 className="text-xl font-serif font-semibold text-[#1C1917]">
            8 Elemen Arsitektur Pengasuhan Awal
          </h2>
          <p className="text-xs text-[#78716C]">
            Klik elemen di bawah untuk melihat manifestasi dewasa dan risiko ketiadaannya.
          </p>
        </div>

        {/* 8 Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CHILDHOOD_ELEMENTS.map(elem => (
            <button
              key={elem.number}
              onClick={() => setSelectedElem(elem.number)}
              className={`p-2.5 text-left border text-xs font-mono transition-colors cursor-pointer ${
                selectedElem === elem.number
                  ? 'bg-[#1C1917] text-white border-[#1C1917]'
                  : 'bg-white text-[#57534E] border-[#D6CEBE] hover:bg-[#F2EDE4]'
              }`}
            >
              <div className="text-[10px] text-[#A8A29E]">0{elem.number}</div>
              <div className="font-sans font-semibold truncate text-[#1C1917] mt-0.5">
                {elem.name}
              </div>
            </button>
          ))}
        </div>

        {/* Concise Active Panel */}
        <div className="bg-white border border-[#D6CEBE] p-4 sm:p-5 space-y-3">
          <div className="flex items-baseline justify-between border-b border-[#E7DFD5] pb-2">
            <h3 className="font-serif font-semibold text-base text-[#1C1917]">
              {activeElement.number}. {activeElement.name} ({activeElement.originalTerm})
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div>
              <span className="font-mono text-[11px] uppercase text-[#78716C] block mb-1">Masa Kecil:</span>
              <p className="text-[#292524]">{activeElement.description}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase text-[#0F766E] block mb-1">Manifestasi Dewasa:</span>
              <p className="text-[#292524]">{activeElement.adultManifestation}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase text-[#B91C1C] block mb-1">Jika Hilang:</span>
              <p className="text-[#44403C]">{activeElement.dysfunctionIfMissing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Paradoks Keakraban Relasional */}
      <section className="space-y-4">
        <div className="border-b border-[#E7DFD5] pb-2">
          <h2 className="text-xl font-serif font-semibold text-[#1C1917]">
            Paradoks: Mengapa Kita Memilih yang "Akrab", Bukan yang "Bahagia"
          </h2>
          <p className="text-xs text-[#78716C]">
            Lidah bawah sadar kita mencari rasa luka lama yang sudah dikenalnya sejak kecil.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-t border-[#E7DFD5]">
            <thead>
              <tr className="border-b border-[#E7DFD5] text-[11px] font-mono uppercase text-[#78716C]">
                <th className="py-2.5 pr-3 font-normal w-1/2">Apa yang Kita Pikir Kita Inginkan</th>
                <th className="py-2.5 pl-3 font-normal w-1/2 text-[#9A3412]">Apa yang Terasa "Akrab" bagi Bawah Sadar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7DFD5]">
              {FAMILIARITY_PARADOX_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/60">
                  <td className="py-3 pr-3 text-[#292524]">{row.consciousExpectation}</td>
                  <td className="py-3 pl-3 text-[#44403C] font-medium">{row.unconsciousFamiliarity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. 5 Frasa Defensif Ringkas */}
      <section className="space-y-4">
        <div className="border-b border-[#E7DFD5] pb-2">
          <h2 className="text-xl font-serif font-semibold text-[#1C1917]">
            5 Frasa Penanda Ketidakmatangan Emosional
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DEFENSIVE_PHRASES_DECONSTRUCTION.map((item, idx) => (
            <div key={idx} className="p-3 bg-white border border-[#D6CEBE] space-y-1 text-xs">
              <div className="font-serif font-semibold text-sm text-[#1C1917]">
                {item.phraseId}
              </div>
              <p className="text-[#57534E] leading-relaxed">
                {item.deconstruction}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Quick 4-Question Audit */}
      <section className="bg-white border border-[#D6CEBE] p-5 sm:p-6 space-y-4">
        <div className="border-b border-[#E7DFD5] pb-3">
          <span className="text-xs font-mono uppercase text-[#0F766E] block mb-0.5">
            Refleksi Kilat (4 Pertanyaan)
          </span>
          <h3 className="font-serif font-semibold text-lg text-[#1C1917]">
            Audit Singkat True Self vs False Self
          </h3>
        </div>

        {!testSubmitted ? (
          <div className="space-y-4 text-xs sm:text-sm">
            {TRUE_FALSE_SELF_QUESTIONS.map((q, idx) => (
              <div key={q.id} className="space-y-1.5 border-b border-[#E7DFD5] pb-3">
                <p className="font-medium text-[#1C1917]">
                  0{idx + 1}. {q.question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setTestAnswers(prev => ({ ...prev, [q.id]: 'true' }))}
                    className={`p-2.5 text-left border cursor-pointer transition-colors ${
                      testAnswers[q.id] === 'true'
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-[#FBF9F5] border-[#D6CEBE] hover:bg-[#F2EDE4]'
                    }`}
                  >
                    A. {q.optionTrue}
                  </button>
                  <button
                    onClick={() => setTestAnswers(prev => ({ ...prev, [q.id]: 'false' }))}
                    className={`p-2.5 text-left border cursor-pointer transition-colors ${
                      testAnswers[q.id] === 'false'
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-[#FBF9F5] border-[#D6CEBE] hover:bg-[#F2EDE4]'
                    }`}
                  >
                    B. {q.optionFalse}
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-[#78716C]">
                {Object.keys(testAnswers).length} / 4 Terisi
              </span>
              <button
                disabled={Object.keys(testAnswers).length < 4}
                onClick={() => setTestSubmitted(true)}
                className={`px-4 py-1.5 text-xs font-mono uppercase font-semibold cursor-pointer ${
                  Object.keys(testAnswers).length === 4
                    ? 'bg-[#9A3412] text-white hover:bg-[#7c2d12]'
                    : 'bg-[#E7DFD5] text-[#A8A29E] cursor-not-allowed'
                }`}
              >
                Lihat Hasil
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 text-xs sm:text-sm">
            {(() => {
              const { ratio, falseCount, total } = calculateScore();
              return (
                <div className="space-y-3">
                  <div className="border-l-4 border-[#9A3412] pl-3 py-1">
                    <h4 className="font-serif font-bold text-base text-[#1C1917]">
                      Indeks False Self: {ratio}% ({falseCount} dari {total} respon)
                    </h4>
                  </div>
                  <p className="text-[#44403C] leading-relaxed">
                    {ratio >= 50
                      ? 'Anda cenderung mengoperasikan False Self (kepatuhan semu). Anda terbiasa menekan kebutuhan pribadi demi menjaga keharmonisan orang lain. Latihlah berani menetapkan batas yang sehat.'
                      : 'Anda memiliki akses yang sehat pada True Self. Anda mampu membedakan kritik objektif dari harga diri Anda. Terus pertahankan ruang empati tanpa tergelincir ke dalam perfeksionisme.'}
                  </p>
                  <button
                    onClick={() => { setTestAnswers({}); setTestSubmitted(false); }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase bg-[#1C1917] text-white cursor-pointer hover:bg-[#292524]"
                  >
                    <RefreshCw className="w-3 h-3" /> Ulangi
                  </button>
                </div>
              );
            })()}
          </div>
        )}
      </section>
    </div>
  );
};
