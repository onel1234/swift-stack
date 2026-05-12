import React from 'react';
import Link from 'next/link';
import { ButtonLink } from '../ui/Button';

export function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--outline-variant)', backgroundColor: 'transparent', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '20px', color: 'var(--on-surface)', letterSpacing: '0.05em', textDecoration: 'none' }}>
          <img src="/Gemini_Generated_Image_drx615drx615drx6-removebg-preview.png" alt="Swift Stack Logo" style={{ height: '60px', width: 'auto' }} />
        </Link>
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px' }}>
          <a href="/#services" className="label-md" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', textTransform: 'capitalize', letterSpacing: '0' }}>Services</a>
          <a href="/#process" className="label-md" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', textTransform: 'capitalize', letterSpacing: '0' }}>Process</a>
          <a href="/work" className="label-md" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', textTransform: 'capitalize', letterSpacing: '0' }}>Our Work</a>
        </nav>
        <div style={{ flexShrink: 0 }}>
          <ButtonLink href="/#contact" variant="primary" style={{ padding: '8px 24px', fontSize: '14px', width: 'auto' }}>Get Started</ButtonLink>
        </div>
      </div>
    </header>
  );
}
