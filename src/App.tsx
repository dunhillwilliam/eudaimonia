import React, { useState } from 'react';
import { SectionId } from './types';
import { Header } from './components/Header';
import { TwentyFivePointsView } from './components/TwentyFivePointsView';
import { ChildhoodSelfView } from './components/ChildhoodSelfView';
import { LeadershipCultureView } from './components/LeadershipCultureView';
import { MaturityMatrixView } from './components/MaturityMatrixView';
import { PracticalKitView } from './components/PracticalKitView';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('twenty-five-points');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] font-sans antialiased flex flex-col selection:bg-[#1C1917] selection:text-white">
      {/* Straightforward Single-Level Header Navigation */}
      <Header
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {activeSection === 'twenty-five-points' && <TwentyFivePointsView />}
        {activeSection === 'childhood-self' && <ChildhoodSelfView />}
        {activeSection === 'leadership-culture' && <LeadershipCultureView />}
        {activeSection === 'maturity-matrix' && <MaturityMatrixView />}
        {activeSection === 'practical-kit' && <PracticalKitView />}
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="bg-white border-t border-[#E7DFD5] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716C]">
          <div>
            <strong>EUDAIMONIA</strong> · Sekolah Kehidupan & Kepemimpinan Sadar Diri
          </div>
          <div className="text-center sm:text-right">
            Sintesis D.W. Winnicott · E. Tronick · A. Camus · A. de Botton
          </div>
        </div>
      </footer>
    </div>
  );
}
