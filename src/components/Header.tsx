import React from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const navItems: { id: SectionId; label: string }[] = [
    { id: 'twenty-five-points', label: '25 Poin Ringkas' },
    { id: 'childhood-self', label: 'True Self & Masa Kecil' },
    { id: 'leadership-culture', label: 'Budaya Kerja & Trauma' },
    { id: 'maturity-matrix', label: 'Matriks Evaluasi 20' },
    { id: 'practical-kit', label: 'Kit Praktis & Manual' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          onClick={() => onSelectSection('twenty-five-points')}
          className="text-left cursor-pointer focus-visible:outline-none flex items-baseline gap-2"
        >
          <span className="text-xl font-serif font-bold tracking-tight text-[#1C1917] hover:text-[#9A3412] transition-colors">
            EUDAIMONIA
          </span>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-[#78716C] font-mono">
            Life School
          </span>
        </button>

        {/* Straightforward Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer border ${
                activeSection === item.id
                  ? 'bg-[#1C1917] text-white border-[#1C1917] font-semibold'
                  : 'bg-transparent text-[#57534E] border-transparent hover:border-[#D6CEBE] hover:text-[#1C1917]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1C1917] hover:bg-[#F2EDE4] transition-colors focus-visible:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#E7DFD5] px-4 py-3 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onSelectSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-[#1C1917] text-white font-bold'
                  : 'text-[#292524] hover:bg-[#F2EDE4]'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && <span>●</span>}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
