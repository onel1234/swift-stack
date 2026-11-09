'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleScrollLock } from './LenisProvider';
import { Eyebrow } from './ui/Eyebrow';
import { QuoteFunnel } from './QuoteFunnel';
import type { QuoteServiceOption } from '@/lib/site';

const emptySubscribe = () => () => {};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: QuoteServiceOption;
}

export function ContactModal({
  isOpen,
  onClose,
  defaultService = 'Business website',
}: ContactModalProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    if (isOpen) {
      toggleScrollLock(true);
    } else {
      toggleScrollLock(false);
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      toggleScrollLock(false);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0.75rem',
          }}
          className="modal-container"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 30 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'color-mix(in srgb, var(--brand-deep) 48%, transparent)',
              backdropFilter: 'blur(5px)',
            }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Get a project estimate"
            data-lenis-prevent
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '38rem',
              maxHeight: '92svh',
              overflowY: 'auto',
              borderRadius: 'var(--radius-card-lg)',
              background: 'var(--surface-card)',
              color: 'var(--ink)',
              padding: '1.5rem',
              boxShadow: '0 25px 50px -12px rgba(2, 4, 10, 0.35)',
            }}
            className="modal-panel"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <Eyebrow tone="dark">Free Consultation</Eyebrow>
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 4.2vw, 2.25rem)',
                    fontWeight: 600,
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    marginTop: '0.45rem',
                  }}
                >
                  Get a project estimate
                </h2>
                <p style={{ fontSize: 'max(13.5px, 0.875rem)', color: 'var(--ink-soft)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                  Tell us what you are building — we will recommend the right solution and initial budget range.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close quotation dialog"
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  minWidth: '44px',
                  minHeight: '44px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--surface)',
                  display: 'grid',
                  placeContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <QuoteFunnel defaultService={defaultService} compact />
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
