'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleScrollLock } from './LenisProvider';

export function MenuOverlay({ isOpen, onClose, onOpenContact }: { isOpen: boolean; onClose: () => void; onOpenContact: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (isOpen) toggleScrollLock(true);
    else toggleScrollLock(false);
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const LINKS = [
    { label: 'Services', href: '#programs' },
    { label: 'Work', href: '#facilities' },
    { label: 'About', href: '#trust-title' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 70, display: 'flex', flexDirection: 'column', color: 'white' }}>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'var(--brand-deep)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            className="menu-panel"
            style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0', fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', whiteSpace: 'nowrap' }}>
                <img src="/website_icon-removebg-preview.png" alt="Swift Stack" style={{ width: '3.125rem', height: '3.125rem', flexShrink: 0, objectFit: 'contain', marginRight: '-0.75rem', marginLeft: '-0.5rem' }} />
                Swift Stack
              </div>
              <motion.button
                onClick={onClose}
                initial="rest" whileHover="hover" animate="rest"
                style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-pill)', background: 'color-mix(in srgb, white 15%, transparent)', display: 'grid', placeContent: 'center', transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'color-mix(in srgb, white 25%, transparent)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'color-mix(in srgb, white 15%, transparent)'}
              >
                <motion.svg
                  variants={{ rest: { rotate: 0 }, hover: { rotate: 90 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ width: '1.25rem', height: '1.25rem' }}
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </motion.svg>
              </motion.button>
            </div>

            {/* Center nav */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem' }}>
              {LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, type: 'spring', stiffness: 200, damping: 26 }}
                  className="menu-link hover-brand-light"
                  style={{ display: 'block', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', transition: 'color 0.2s' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom row */}
            <div className="menu-bottom" style={{ borderTop: '1px solid color-mix(in srgb, white 15%, transparent)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                onClick={() => { onClose(); onOpenContact(); }}
                style={{ borderRadius: 'var(--radius-pill)', background: 'white', color: 'var(--brand-deep)', padding: '0.875rem 1.75rem', fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'background 0.2s, color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--brand-light)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'white'; (e.currentTarget as HTMLElement).style.color = 'var(--brand-deep)'; }}
              >
                Start a Project
              </button>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
