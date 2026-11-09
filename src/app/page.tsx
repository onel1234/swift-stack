'use client';
import { useState } from 'react';
import { AppProvider } from '@/components/AppContext';
import { Loader } from '@/components/Loader';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';

import { FacilitiesSection } from '@/components/FacilitiesSection';
import { FaqSection } from '@/components/FaqSection';
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
        <ServicesSection onOpenContact={() => setIsContactOpen(true)} />

        <FacilitiesSection />
        <FaqSection onOpenContact={() => setIsContactOpen(true)} />
        <TestimonialsSection onOpenContact={() => setIsContactOpen(true)} />
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpenContact={() => setIsContactOpen(true)} />

      <style>{`
        .main-container { padding: 0; }

        @media (min-width: 640px) {
          .main-container { padding: 0.75rem; }
        }
      `}</style>
    </AppProvider>
  );
}
