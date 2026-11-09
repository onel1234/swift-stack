'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { trackCtaClick } from '@/lib/analytics';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenMenu?: () => void;
  onOpenContact?: () => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header({ onOpenMenu, onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.siteHeader} ${scrolled ? styles.siteHeaderScrolled : ''} ${onOpenMenu ? styles.siteHeaderHasMenu : ''}`}
    >
      <div className={styles.siteHeaderInner}>
        {/* Brand Logo & Name */}
        <Link href="/" className={styles.siteHeaderBrand}>
          <Image
            src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
            alt="Swift Stack Digital Logo"
            width={44}
            height={44}
            loading="eager"
            className={styles.siteHeaderLogo}
          />
          <div className={styles.siteHeaderBrandText}>
            <span className={styles.siteHeaderTitle}>Swift Stack</span>
            <span className={styles.siteHeaderSub}>Digital</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Primary Header Navigation" className={styles.subpageNavLinks}>
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : link.href !== '/#services' && pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.headerLink} ${isActive ? styles.headerLinkActive : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className={styles.siteHeaderActions}>
          {onOpenContact ? (
            <button
              type="button"
              onClick={() => {
                trackCtaClick('Free Consultation', 'subpage_header');
                onOpenContact();
              }}
              className={styles.headerCtaBtn}
            >
              <span>Free Quote</span>
              <span style={{ fontSize: '0.85rem' }}>↗</span>
            </button>
          ) : (
            <Link
              href="/contact"
              onClick={() => trackCtaClick('Free Quote Link', 'subpage_header')}
              className={styles.headerCtaBtn}
            >
              <span>Free Quote</span>
              <span style={{ fontSize: '0.85rem' }}>↗</span>
            </Link>
          )}

          {/* Mobile Hamburger Menu Button */}
          {onOpenMenu && (
            <button
              type="button"
              onClick={onOpenMenu}
              className={styles.headerMenuBtn}
              aria-label="Open navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
