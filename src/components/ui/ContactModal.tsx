'use client';

import React, { useEffect, useState } from 'react';
import { ContactModal as UnifiedContactModal } from '@/components/ContactModal';

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      setIsOpen(window.location.hash === '#contact');
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const handleClose = () => {
    if (window.location.hash === '#contact') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setIsOpen(false);
  };

  return <UnifiedContactModal isOpen={isOpen} onClose={handleClose} />;
}
