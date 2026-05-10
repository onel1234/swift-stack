"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="contact-modal-wrapper"
            style={{
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
            className="contact-modal-container"
            style={{
              position: 'relative', width: '100%', maxWidth: '900px',
              backgroundColor: 'var(--surface)', borderRadius: '24px',
              border: '1px solid var(--outline-variant)', overflow: 'hidden',
              display: 'flex', boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
              maxHeight: '90vh'
            }}
          >
            {/* Background Blobs (mimicking Hero) */}
            <div className="blob blob-1 contact-blob-1" style={{ position: 'absolute', top: '-10%', left: '-10%', opacity: 0.5, pointerEvents: 'none' }}></div>
            <div className="blob blob-2 contact-blob-2" style={{ position: 'absolute', bottom: '-10%', right: '-10%', opacity: 0.5, pointerEvents: 'none' }}></div>

            {/* Left side: Form */}
            <div className="contact-modal-form" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
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

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '300px', gap: '16px' }}
                >
                  <div style={{ fontSize: '56px', marginBottom: '8px' }}>✓</div>
                  <h2 className="headline-md" style={{ color: 'var(--on-surface)' }}>Message Sent!</h2>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '360px' }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: '16px', padding: '12px 32px' }}
                    onClick={() => { resetForm(); closeModal(); }}
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: '8px' }}>Let&apos;s build the future.</h2>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
                    Drop us a message and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1, minWidth: '130px' }}>
                        <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>First Name *</label>
                        <input
                          type="text"
                          placeholder="Jane"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          style={{
                            width: '100%', padding: '12px 16px', borderRadius: '8px',
                            backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                            color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s'
                          }} 
                          onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                          onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: '130px' }}>
                        <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          style={{
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
                      <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>Email Address *</label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: '8px',
                          backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                          color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s'
                        }} 
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                      />
                    </div>

                    <div>
                      <label className="label-sm" style={{ color: 'var(--on-surface)', display: 'block', marginBottom: '8px' }}>Project Details *</label>
                      <textarea
                        placeholder="Tell us about your vision..."
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: '8px',
                          backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-variant)',
                          color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit', resize: 'vertical', transition: 'border-color 0.2s'
                        }} 
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--outline-variant)'}
                      />
                    </div>

                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: '#ef4444', fontSize: '14px', margin: 0 }}
                      >
                        {errorMsg}
                      </motion.p>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === 'sending'}
                      style={{
                        marginTop: '12px', width: '100%', padding: '16px',
                        opacity: status === 'sending' ? 0.7 : 1,
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        position: 'relative'
                      }}
                    >
                      {status === 'sending' ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                          />
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Right side: Illustration */}
            <div className="contact-modal-illustration" style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
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
        </motion.div>
      )}
      </AnimatePresence>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-modal-container {
          flex-direction: row;
        }
        .contact-modal-form {
          flex: 1 1 60%;
          padding: 48px;
        }
        .contact-modal-illustration {
          flex: 1 1 40%;
          border-left: 1px solid var(--outline-variant);
          padding: 48px;
        }
        .contact-blob-1 { width: 300px; height: 300px; }
        .contact-blob-2 { width: 300px; height: 300px; }

        @media(max-width: 768px) {
          .contact-modal-container {
            flex-direction: column;
            border-radius: 16px;
          }
          .contact-modal-form {
            flex: none;
            padding: 24px 20px;
          }
          .contact-modal-illustration {
            flex: none;
            padding: 24px;
            border-left: none;
            border-top: 1px solid var(--outline-variant);
            display: none !important; /* Hide illustration on small screens to save space */
          }
          .contact-blob-1 { width: 150px; height: 150px; }
          .contact-blob-2 { width: 150px; height: 150px; }
        }
        `
      }} />
    </>
  );
}
