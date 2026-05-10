import React from 'react';
import { ButtonLink } from '../ui/Button';

export function Footer() {
  return (
    <footer className="footer-section" style={{ backgroundColor: 'var(--inverse-surface)', color: 'var(--on-tertiary)' }}>
      <div className="container footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '20px', color: 'var(--on-primary)', letterSpacing: '0.05em' }}>
            <img src="/Gemini_Generated_Image_drx615drx615drx6-removebg-preview.png" alt="Visionary Logo" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p className="body-md" style={{ color: 'var(--on-primary-container)', maxWidth: '300px' }}>
            Architecting the future of web experiences.
          </p>
        </div>

        <nav className="footer-nav" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <a href="/#services" className="label-md" style={{ color: 'var(--on-primary)', textDecoration: 'none' }}>Services</a>
          <a href="/#process" className="label-md" style={{ color: 'var(--on-primary)', textDecoration: 'none' }}>Process</a>
          <a href="/#about" className="label-md" style={{ color: 'var(--on-primary)', textDecoration: 'none' }}>About</a>
          <a href="/work" className="label-md" style={{ color: 'var(--on-primary)', textDecoration: 'none' }}>Work</a>
        </nav>

      </div>

      <div className="container" style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <p className="caption" style={{ color: 'var(--on-primary-container)' }}>
          © {new Date().getFullYear()} Swift Stack. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#" className="caption" style={{ color: 'var(--on-primary-container)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" className="caption" style={{ color: 'var(--on-primary-container)', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer-section {
          padding: 64px 0 32px 0;
        }

        @media(max-width: 768px) {
          .footer-section {
            padding: 48px 0 24px 0;
          }
          .footer-container {
            flex-direction: column;
            align-items: flex-start !important;
          }
          .footer-nav {
            flex-direction: column;
            gap: 16px !important;
          }
        }
        `
      }} />
    </footer>
  );
}
