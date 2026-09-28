import React, { useState } from 'react';
import { MATURITY_INDICATORS } from '../data/maturityMatrix';
import { RotateCcw } from 'lucide-react';

export const MaturityMatrixView: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<'ALL' | 'A' | 'B' | 'C'>('ALL');
  const [ratings, setRatings] = useState<Record<number, number>>({});

  const domainTabs = [
    { id: 'ALL', label: 'Semua (20)' },
    { id: 'A', label: 'Domain A: Regulasi Diri (6)' },
    { id: 'B', label: 'Domain B: Empati & Bicara (6)' },
    { id: 'C', label: 'Domain C: Resiliensi Kerja (8)' }
  ];

  const filtered = MATURITY_INDICATORS.filter(
    ind => selectedDomain === 'ALL' || ind.domain === selectedDomain
  );

  const handleRate = (id: number, score: number) => {
    setRatings(prev => ({ ...prev, [id]: score }));
  };

  const calculateDomainScore = (domainCode: 'A' | 'B' | 'C') => {
    const items = MATURITY_INDICATORS.filter(i => i.domain === domainCode);
    const rated = items.filter(i => ratings[i.id] !== undefined);
    if (rated.length === 0) return { avg: 0, count: 0, total: items.length };
    const sum = rated.reduce((acc, curr) => acc + (ratings[curr.id] || 0), 0);
    return {
      avg: Number((sum / rated.length).toFixed(1)),
      count: rated.length,
      total: items.length
    };
  };

  const domainA = calculateDomainScore('A');
  const domainB = calculateDomainScore('B');
  const domainC = calculateDomainScore('C');
  const totalRated = Object.keys(ratings).length;

  return (
    <div className="py-6 sm:py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E7DFD5] pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412] mb-1">
          Instrumen Evaluasi Manajerial
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1917]">
          Matriks 20 Indikator Kematangan Emosional
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#57534E]">
          Ukur tingkat kedewasaan emosional Anda atau tim dengan memilih skor 1 (Unsatisfactory) hingga 4 (Exemplary).
        </p>
      </div>

      {/* Realtime Score Summary (Compact Strip) */}
      <div className="bg-[#1C1917] text-white p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-xs font-mono">
        <div className="grid grid-cols-3 gap-4 flex-1">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">Domain A (Diri)</span>
            <span className="text-xl font-bold text-white tabular-nums">
              {domainA.avg > 0 ? domainA.avg : '—'}
            </span>
            <span className="text-[10px] text-stone-400 ml-1">/4.0 ({domainA.count}/{domainA.total})</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">Domain B (Empati)</span>
            <span className="text-xl font-bold text-white tabular-nums">
              {domainB.avg > 0 ? domainB.avg : '—'}
            </span>
            <span className="text-[10px] text-stone-400 ml-1">/4.0 ({domainB.count}/{domainB.total})</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase">Domain C (Resiliensi)</span>
            <span className="text-xl font-bold text-white tabular-nums">
              {domainC.avg > 0 ? domainC.avg : '—'}
            </span>
            <span className="text-[10px] text-stone-400 ml-1">/4.0 ({domainC.count}/{domainC.total})</span>
          </div>
        </div>

        {totalRated > 0 && (
          <button
            onClick={() => setRatings({})}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer uppercase text-[11px]"
          >
            <RotateCcw className="w-3 h-3" /> Reset ({totalRated}/20)
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 border-b border-[#E7DFD5] pb-3">
        {domainTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedDomain(tab.id as any)}
            className={`px-3 py-1 text-xs font-mono transition-colors cursor-pointer border ${
              selectedDomain === tab.id
                ? 'bg-[#1C1917] text-white border-[#1C1917] font-semibold'
                : 'bg-white text-[#57534E] border-[#D6CEBE] hover:bg-[#F2EDE4]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Compact 20 Indicators Rows */}
      <div className="divide-y divide-[#E7DFD5]">
        {filtered.map((item) => {
          const score = ratings[item.id];

          return (
            <div key={item.id} className="py-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#78716C]">
                    <span className="font-semibold text-[#9A3412]">#{item.id.toString().padStart(2, '0')}</span>
                    <span>· Domain {item.domain} ({item.domainName})</span>
                  </div>
                  <h3 className="font-serif font-semibold text-base text-[#1C1917]">
                    {item.title}
                  </h3>
                </div>

                {/* Score Selector (1-4) */}
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-mono text-[#78716C] mr-1.5">Skor:</span>
                  {[1, 2, 3, 4].map(s => (
                    <button
                      key={s}
                      onClick={() => handleRate(item.id, s)}
                      className={`w-7 h-7 font-mono text-xs font-semibold cursor-pointer border transition-colors ${
                        score === s
                          ? 'bg-[#9A3412] text-white border-[#9A3412]'
                          : 'bg-white text-[#1C1917] border-[#D6CEBE] hover:bg-[#F2EDE4]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#292524] leading-relaxed">
                {item.operationalManifestation}
              </p>

              {/* Rubric mini grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
                <div className={`p-2 border ${score === 1 ? 'border-[#9A3412] bg-[#FFF7ED]' : 'border-[#E7DFD5] bg-white'}`}>
                  <strong className="text-[#B91C1C] block font-mono">1. Unsatisfactory</strong>
                  <span className="text-[#57534E]">{item.rubric.unsatisfactory}</span>
                </div>
                <div className={`p-2 border ${score === 2 ? 'border-[#9A3412] bg-[#FFF7ED]' : 'border-[#E7DFD5] bg-white'}`}>
                  <strong className="text-[#C2410C] block font-mono">2. Developing</strong>
                  <span className="text-[#57534E]">{item.rubric.developing}</span>
                </div>
                <div className={`p-2 border ${score === 3 ? 'border-[#9A3412] bg-[#FFF7ED]' : 'border-[#E7DFD5] bg-white'}`}>
                  <strong className="text-[#0F766E] block font-mono">3. Proficient</strong>
                  <span className="text-[#57534E]">{item.rubric.proficient}</span>
                </div>
                <div className={`p-2 border ${score === 4 ? 'border-[#9A3412] bg-[#FFF7ED]' : 'border-[#E7DFD5] bg-white'}`}>
                  <strong className="text-[#1C1917] block font-mono">4. Exemplary</strong>
                  <span className="text-[#57534E]">{item.rubric.exemplary}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
