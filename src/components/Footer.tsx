'use client';
import { motion } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { PillButton } from './ui/PillButton';
import { TextReveal } from './ui/TextReveal';

export function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer id="contact" className="footer-sec" style={{ background: 'var(--brand-deep)', color: 'white', borderRadius: 'var(--radius-card-lg)', marginTop: '0.75rem' }}>
      {/* CTA Band */}
      <div className="cta-band" style={{ borderBottom: '1px solid color-mix(in srgb, white 15%, transparent)', paddingBottom: '3.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Eyebrow tone="light">Get started</Eyebrow>
          <TextReveal
            as="p"
            text={['Ready to', 'play?']}
            type="lines"
            style={{ fontSize: '3.75rem', fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.02em', marginTop: '1rem' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 24 }}
        >
          <PillButton variant="light" onClick={onOpenContact}>Book a Visit</PillButton>
        </motion.div>
      </div>

      {/* Columns Grid */}
      <div className="footer-grid" style={{ padding: '3.5rem 0', display: 'grid', gap: '2.5rem' }}>
        <div style={{ maxWidth: '20rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ width: '1.5rem', height: '1.5rem' }}>
              <circle cx="12" cy="12" r="9"/>
              <path d="M4.8 5.6A9 9 0 0 0 4.8 18.4"/>
              <path d="M19.2 5.6a9 9 0 0 1 0 12.8"/>
            </svg>
            Baseline
          </div>
          <div style={{ fontSize: '0.875rem', color: 'color-mix(in srgb, white 65%, transparent)', marginTop: '1rem', lineHeight: 1.6 }}>
            A members&apos; tennis club and academy where focused coaching meets championship courts.
          </div>
          <address style={{ fontStyle: 'normal', marginTop: '1.5rem', color: 'color-mix(in srgb, white 80%, transparent)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="mailto:play@baseline.club" className="hover-link">play@baseline.club</a>
            <a href="tel:+12125550148" className="hover-link">+1 (212) 555-0148</a>
            <span style={{ color: 'color-mix(in srgb, white 55%, transparent)' }}>120 Court Lane, New York</span>
          </address>
        </div>

        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'color-mix(in srgb, white 50%, transparent)', marginBottom: '1rem' }}>Programs</h3>
          <ul style={{ fontSize: '0.875rem', color: 'color-mix(in srgb, white 80%, transparent)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#junior" className="hover-link">Junior Development</a></li>
            <li><a href="#performance" className="hover-link">Performance Squad</a></li>
            <li><a href="#adult" className="hover-link">Adult Clinics</a></li>
            <li><a href="#private" className="hover-link">Private Coaching</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'color-mix(in srgb, white 50%, transparent)', marginBottom: '1rem' }}>Club</h3>
          <ul style={{ fontSize: '0.875rem', color: 'color-mix(in srgb, white 80%, transparent)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#membership" className="hover-link">Membership</a></li>
            <li><a href="#facilities" className="hover-link">Facilities</a></li>
            <li><a href="#club" className="hover-link">Events</a></li>
            <li><a href="#shop" className="hover-link">Pro Shop</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'color-mix(in srgb, white 50%, transparent)', marginBottom: '1rem' }}>Company</h3>
          <ul style={{ fontSize: '0.875rem', color: 'color-mix(in srgb, white 80%, transparent)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#about" className="hover-link">About</a></li>
            <li><a href="#programs" className="hover-link">Coaches</a></li>
            <li><a href="#careers" className="hover-link">Careers</a></li>
            <li><a href="#contact" className="hover-link">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar" style={{ borderTop: '1px solid color-mix(in srgb, white 15%, transparent)', paddingTop: '2rem', fontSize: '0.875rem', color: 'color-mix(in srgb, white 60%, transparent)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>&copy; 2026 Baseline Tennis Club. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href="#instagram" className="hover-link">Instagram</a>
          <a href="#x" className="hover-link">X</a>
          <a href="#youtube" className="hover-link">YouTube</a>
          <a href="#linkedin" className="hover-link">LinkedIn</a>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href="#privacy" className="hover-link">Privacy</a>
          <a href="#terms" className="hover-link">Terms</a>
        </div>
      </div>

      <style>{`
        .footer-sec { padding: 3.5rem 1.5rem; }
        .cta-band { flex-direction: column; align-items: flex-start; gap: 2rem; }
        .footer-grid { grid-template-columns: 1fr; }
        .bottom-bar { flex-direction: column; gap: 1.5rem; text-align: center; }
        .hover-link { transition: color 0.2s; }
        .hover-link:hover { color: white; }
        @media (min-width: 640px) {
          .footer-sec { padding: 4rem 2.5rem; }
          .cta-band { flex-direction: row; align-items: flex-end; gap: 0; }
          .bottom-bar { flex-direction: row; text-align: left; gap: 0; }
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr; }
        }
      `}</style>
    </footer>
  );
}
