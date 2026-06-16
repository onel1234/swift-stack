'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from './AppContext';
import { toggleScrollLock } from './LenisProvider';

export function Loader() {
  const [visible, setVisible] = useState(true);
  const { setReady } = useAppContext();
  const [isReadyLocal, setIsReadyLocal] = useState(false);

  useEffect(() => {
    toggleScrollLock(true);
    let startWait = Date.now();
    let minWait = 1400;
    let maxWait = 2600;

    const onReady = () => {
      const elapsed = Date.now() - startWait;
      const remaining = Math.max(0, minWait - elapsed);
      setTimeout(() => {
        setIsReadyLocal(true);
        setReady(true);
        toggleScrollLock(false);
        setTimeout(() => setVisible(false), 850);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      onReady();
    } else {
      window.addEventListener('load', onReady);
      const fallback = setTimeout(onReady, maxWait);
      return () => {
        window.removeEventListener('load', onReady);
        clearTimeout(fallback);
      };
    }
  }, [setReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: isReadyLocal ? '-105%' : '0%' }}
          exit={{ display: 'none' }}
          transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }} // easeInOutCubic approx
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'var(--brand-deep)',
            color: 'white',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '2rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ width: '1.75rem', height: '1.75rem' }}>
              <circle cx="12" cy="12" r="9"/>
              <path d="M4.8 5.6A9 9 0 0 0 4.8 18.4"/>
              <path d="M19.2 5.6a9 9 0 0 1 0 12.8"/>
            </svg>
            Baseline
          </motion.div>
          
          <div style={{ width: '10rem', height: '1px', borderRadius: 'var(--radius-pill)', background: 'color-mix(in srgb, white 20%, transparent)', overflow: 'hidden' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.12, duration: 1.28, ease: [0.65, 0, 0.35, 1] }}
              style={{ width: '100%', height: '100%', background: 'white', transformOrigin: 'left' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
