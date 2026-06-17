'use client';
import { useState } from 'react';
import { AppProvider } from '@/components/AppContext';
import { Loader } from '@/components/Loader';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MenuOverlay } from '@/components/MenuOverlay';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <AppProvider>
      <Loader />
      
      <main className="main-container" style={{ width: '100%', overflowX: 'clip' }}>
        <HeroSection 
          onOpenMenu={() => setIsMenuOpen(true)} 
          onOpenContact={() => setIsContactOpen(true)} 
        />
        <TrustSection />
        <ProgramsSection />
        <FacilitiesSection />
        <StatsSection />
        <TestimonialsSection />
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpenContact={() => setIsContactOpen(true)} />

      <style>{`
        .main-container { padding: 0.5rem; }
        .modal-container { padding: 0.75rem !important; }
        .modal-panel { padding: 1.5rem !important; }
        .modal-title { font-size: 2.25rem !important; }
        .modal-input {
          width: 100%; border-radius: 0.75rem; border: 1px solid var(--hairline);
          background: var(--background); padding: 0.75rem 1rem; font-size: 0.875rem;
          font-family: inherit; color: var(--ink); outline: none; transition: border-color 0.2s;
        }
        .modal-input:focus { border-color: var(--brand-light); box-shadow: 0 0 0 2px var(--brand-light); }
        
        .menu-panel { padding: 0.5rem 1.5rem 1.5rem !important; }
        .menu-link { font-size: 3rem; }
        .menu-bottom { flex-direction: column; gap: 1.5rem; align-items: stretch !important; text-align: center; }
        
        .hover-white { transition: color 0.2s; }
        .hover-white:hover { color: white; }
        .hover-brand-light:hover { color: var(--brand-light); }

        @media (min-width: 640px) {
          .main-container { padding: 0.75rem; }
          .modal-container { padding: 1.5rem !important; align-items: center !important; }
          .modal-panel { padding: 2rem !important; }
          .modal-title { font-size: 3rem !important; }
          .menu-panel { padding: 0.75rem 2.5rem 2.5rem !important; }
          .menu-link { font-size: 4.5rem; }
          .menu-bottom { flex-direction: row; align-items: center !important; text-align: left; }
        }
      `}</style>
    </AppProvider>
  );
}
