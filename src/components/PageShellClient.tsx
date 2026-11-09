'use client';

import React, { useState } from 'react';
import type { QuoteServiceOption } from '@/lib/site';
import { AppProvider } from '@/components/AppContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MenuOverlay } from '@/components/MenuOverlay';
import { QuoteSection } from '@/components/QuoteSection';
import styles from './SubpageStyles.module.css';

interface PageShellClientProps {
  children: React.ReactNode;
  defaultService?: QuoteServiceOption;
  includeQuoteSection?: boolean;
  quoteSourcePage?: string;
}

export function PageShellClient({
  children,
  defaultService = 'Business website',
  includeQuoteSection = false,
  quoteSourcePage = 'subpage_estimate_section',
}: PageShellClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <AppProvider>
      <div className={styles.pageShell}>
        <Header
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <main className={styles.main}>
          {children}

          {includeQuoteSection ? (
            <QuoteSection defaultService={defaultService} sourcePage={quoteSourcePage} />
          ) : null}

          <div className={includeQuoteSection ? styles.footerWrapTint : styles.footerWrapLight}>
            <Footer onOpenContact={() => setIsContactOpen(true)} />
          </div>
        </main>

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          defaultService={defaultService}
        />
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>
    </AppProvider>
  );
}
