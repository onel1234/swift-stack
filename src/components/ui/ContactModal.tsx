"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      } else {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = () => {
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px'
        }}>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(12px)'
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'relative', width: '100%', maxWidth: '900px',
              backgroundColor: 'var(--surface)', borderRadius: '24px',
              border: '1px solid var(--outline-variant)', overflow: 'hidden',
              display: 'flex', flexDirection: 'row', boxShadow: '0 24px 48px rgba(0,0,0,0.5)'
            }}
          >
            {/* Background Blobs (mimicking Hero) */}
            <div className="blob blob-1" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', opacity: 0.5, pointerEvents: 'none' }}></div>
            <div className="blob blob-2" style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '300px', height: '300px', opacity: 0.5, pointerEvents: 'none' }}></div>

            {/* Left side: Form */}
            <div style={{ flex: '1 1 60%', padding: '48px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
              <button 
                onClick={closeModal}
                style={{
                  position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none',
                  color: 'var(--on-surface-variant)', cursor: 'pointer', fontSize: '24px', lineHeight: 1,
                  padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                aria-label="Close modal"
              >
                &times;
              </button>
              
              <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: '8px' }}>Let's build the future.</h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
                Drop us a message and we'll get back to you within 24 hours.
              </p>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '150px' }}>
                    <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>First Name</label>
                    <input type="text" placeholder="Jane" style={{
                      width: '100%', padding: '12px 16px', borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                      color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s'
                    }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: '150px' }}>
                    <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{
                      width: '100%', padding: '12px 16px', borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                      color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s'
                    }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>Email Address</label>
                  <input type="email" placeholder="jane@example.com" style={{
                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                    color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s'
                  }} 
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                  />
                </div>

                <div>
                  <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>Project Details</label>
                  <textarea placeholder="Tell us about your vision..." rows={4} style={{
                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                    color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', resize: 'vertical', transition: 'border-color 0.2s'
                  }} 
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                  />
                </div>

                <button type="button" className="btn btn-primary" style={{ marginTop: '12px', width: '100%', padding: '16px' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side: Illustration */}
            <div style={{
              flex: '1 1 40%', backgroundColor: 'rgba(255,255,255,0.02)', borderLeft: '1px solid var(--outline-variant)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px',
              position: 'relative', overflow: 'hidden'
            }}>
               <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }}></div>
              <img 
                src="/agency_onboarding.png" 
                alt="Web Development Illustration" 
                style={{ width: '100%', height: 'auto', maxWidth: '300px', objectFit: 'contain', borderRadius: '16px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))', position: 'relative', zIndex: 1 }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
