'use client';
import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleScrollLock } from './LenisProvider';
import { Eyebrow } from './ui/Eyebrow';
import { TextReveal } from './ui/TextReveal';

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (isOpen) {
      toggleScrollLock(true);
      setTimeout(() => nameRef.current?.focus(), 120);
    } else {
      toggleScrollLock(false);
      setTimeout(() => {
        setStatus('idle');
        setName('');
      }, 350);
    }
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 800);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '0.75rem' }} className="modal-container">
          
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 30 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--brand-deep) 40%, transparent)', backdropFilter: 'blur(4px)' }}
          />

          <motion.div
            role="dialog" aria-modal="true"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            style={{ 
              position: 'relative', width: '100%', maxWidth: '32rem', maxHeight: '92svh', overflowY: 'auto',
              borderRadius: 'var(--radius-card-lg)', background: 'var(--surface-card)', color: 'var(--ink)',
              padding: '1.5rem', boxShadow: '0 25px 50px -12px color-mix(in srgb, var(--brand-deep) 25%, transparent)'
            }}
            className="modal-panel"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <Eyebrow tone="dark">Book a visit</Eyebrow>
                <TextReveal
                  as="h2" text={['Come see', 'the courts']} type="lines" stagger={0.09} duration={0.8}
                  style={{ fontSize: '2.25rem', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: '0.75rem' }}
                  className="modal-title"
                />
              </div>
              <motion.button
                onClick={onClose}
                initial="rest" whileHover="hover" animate="rest"
                style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-pill)', background: 'var(--surface)', display: 'grid', placeContent: 'center', transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--hairline)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface)'}
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

            {status !== 'success' ? (
              <form onSubmit={handleSubmit} noValidate style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-soft)' }}>Full name</label>
                  <input ref={nameRef} required value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Alex Rivera" className="modal-input" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-soft)' }}>Email</label>
                  <input required type="email" placeholder="you@email.com" className="modal-input" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-soft)' }}>What would you like to play?</label>
                  <textarea rows={3} placeholder="I'd love to try a private lesson on the clay courts…" className="modal-input" />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  style={{ marginTop: '0.5rem', borderRadius: 'var(--radius-pill)', background: 'var(--ink)', color: 'white', padding: '0.875rem 1.75rem', fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'background 0.2s', opacity: status === 'sending' ? 0.7 : 1 }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--brand-deep)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--ink)'}
                >
                  {status === 'sending' ? 'Sending...' : 'Request a visit'}
                </button>
              </form>
            ) : (
              <div style={{ marginTop: '2rem', borderRadius: 'var(--radius-card)', background: 'var(--surface)', padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-pill)', background: 'var(--brand)', color: 'white', display: 'grid', placeContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25rem', height: '1.25rem' }}><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 500, marginTop: '1rem' }}>Request received</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--ink-soft)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                  Thanks, {name.split(' ')[0] || 'there'} — our team will be in touch to lock in your visit.
                </div>
                <button onClick={onClose} style={{ marginTop: '1.5rem', borderRadius: 'var(--radius-pill)', background: 'var(--ink)', color: 'white', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Done
                </button>
              </div>
            )}
          </motion.div>

        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
