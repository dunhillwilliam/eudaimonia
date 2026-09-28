import React, { useState, useMemo } from 'react';
import { TWENTY_FIVE_POINTS } from '../data/twentyFivePoints';
import { Search, ChevronDown, ChevronUp, Check, BookOpen } from 'lucide-react';

export const TwentyFivePointsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [contemplatedIds, setContemplatedIds] = useState<number[]>([]);

  const categories = ['Semua', 'Diri & Emosi', 'Hubungan & Cinta', 'Filsafat & Krisis', 'Karier & Makna'];

  const filteredPoints = useMemo(() => {
    return TWENTY_FIVE_POINTS.filter(point => {
      const matchesCategory = selectedCategory === 'Semua' || point.category === selectedCategory;
      const matchesSearch = 
        point.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        point.essence.toLowerCase().includes(searchQuery.toLowerCase()) ||
        point.detailedReflection.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleContemplated = (id: number) => {
    setContemplatedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-6 sm:py-10 space-y-6">
      {/* Editorial Header */}
      <div className="border-b border-[#E7DFD5] pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412] mb-1">
          Ringkasan 25 Doktrin Kehidupan
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1917]">
          25 Poin Penting Kecerdasan Emosional & Filsafat
        </h1>
        <p className="mt-1 text-sm sm:text-base text-[#57534E]">
          Prinsip ringkas untuk mengelola emosi, memahami diri, dan membangun kedewasaan relasi.
        </p>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-2 border-b border-[#E7DFD5]">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#78716C]" />
          <input
            type="text"
            placeholder="Cari prinsip..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-white text-xs text-[#1C1917] border border-[#D6CEBE] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#1C1917] text-white border-[#1C1917] font-semibold'
                  : 'bg-white text-[#57534E] border-[#D6CEBE] hover:bg-[#F2EDE4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* List Rows - Concise & Readable */}
      <div className="divide-y divide-[#E7DFD5]">
        {filteredPoints.map((point) => {
          const isExpanded = expandedId === point.id;
          const isDone = contemplatedIds.includes(point.id);

          return (
            <article
              key={point.id}
              className={`py-4 transition-colors cursor-pointer ${
                isExpanded ? 'bg-[#F4EFEA]/40 -mx-3 px-3 sm:-mx-4 sm:px-4' : ''
              }`}
              onClick={() => setExpandedId(isExpanded ? null : point.id)}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-[#9A3412] w-6 shrink-0">
                  {point.id.toString().padStart(2, '0')}.
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#78716C] mb-0.5">
                    <span>{point.category}</span>
                    {isDone && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#0F766E] font-semibold flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Direnungkan
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] leading-snug">
                    {point.title}
                  </h2>

                  <p className="mt-1 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                    {point.essence}
                  </p>
                </div>

                <div className="shrink-0 self-center text-[#78716C]">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* Concise Expansion */}
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-[#E7DFD5] pl-9 space-y-3 text-xs sm:text-sm">
                  <p className="text-[#292524] leading-relaxed">
                    {point.detailedReflection}
                  </p>

                  <div className="border-l-2 border-[#1C1917] pl-3 py-1 bg-white">
                    <p className="font-serif italic text-xs sm:text-sm text-[#1C1917]">
                      "{point.keyQuote}"
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                    <p className="text-[#9A3412] font-medium text-xs">
                      <strong>Aksi:</strong> {point.practicalAction}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleContemplated(point.id);
                      }}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono uppercase transition-colors cursor-pointer border self-start sm:self-auto ${
                        isDone
                          ? 'bg-[#0F766E] text-white border-[#0F766E]'
                          : 'bg-white text-[#1C1917] border-[#D6CEBE] hover:bg-[#F2EDE4]'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      <span>{isDone ? 'Selesai' : 'Tandai Selesai'}</span>
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
