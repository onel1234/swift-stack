'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleScrollLock } from './LenisProvider';
import { getWhatsAppUrl, PRIMARY_SERVICES, SITE_PHONE_DISPLAY } from '@/lib/site';
import { trackWhatsAppClick } from '@/lib/analytics';

const emptySubscribe = () => () => {};

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Work', href: '/work' },
  { label: 'Buyer Guides', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function MenuOverlay({
  isOpen,
  onClose,
  onOpenContact,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleScrollLock(true);
    else toggleScrollLock(false);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation menu"
          style={{ position: 'fixed', inset: 0, zIndex: 70, display: 'flex', flexDirection: 'column', color: 'white' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              <Link
                href="/"
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0',
                  fontSize: '15px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  whiteSpace: 'nowrap',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
                  alt="Swift Stack Digital"
                  width={48}
                  height={48}
                  style={{ width: '48px', height: '48px', flexShrink: 0, objectFit: 'contain', marginRight: '-10px', marginLeft: '-6px' }}
                />
                Swift Stack
              </Link>
              <motion.button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'color-mix(in srgb, white 15%, transparent)',
                  display: 'grid',
                  placeContent: 'center',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                }}
              >
                <motion.svg
                  variants={{ rest: { rotate: 0 }, hover: { rotate: 90 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  style={{ width: '20px', height: '20px' }}
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </motion.svg>
              </motion.button>
            </div>

            {/* Center nav */}
            <nav
              aria-label="Mobile Navigation"
              style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', padding: '16px 0' }}
            >
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, type: 'spring', stiffness: 200, damping: 26 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="menu-link hover-brand-light"
                    style={{
                      fontWeight: 500,
                      lineHeight: 1.05,
                      letterSpacing: '-0.02em',
                      transition: 'color 0.2s',
                      color: pathname === link.href ? 'var(--brand-light)' : 'inherit',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Direct Service Pages Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, type: 'spring', stiffness: 200, damping: 26 }}
                style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
                <span style={{ fontSize: '11.5px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255, 255, 255, 0.58)' }}>
                  Services
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {PRIMARY_SERVICES.map((service) => {
                    const isActive = pathname === service.href;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={onClose}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          minHeight: '42px',
                          fontSize: '13px',
                          fontWeight: 500,
                          padding: '8px 14px',
                          borderRadius: '9999px',
                          backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                          color: isActive ? 'var(--brand-deep)' : '#ffffff',
                          border: isActive ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.18)',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {service.shortLabel}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </nav>

            {/* Bottom row */}
            <div
              className="menu-bottom"
              style={{
                borderTop: '1px solid color-mix(in srgb, white 15%, transparent)',
                paddingTop: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                style={{
                  borderRadius: 'var(--radius-pill)',
                  background: 'white',
                  color: 'var(--brand-deep)',
                  padding: '14px 26px',
                  minHeight: '48px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Get a Free Estimate
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('mobile_menu')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '48px',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(74, 222, 128, 0.45)',
                  color: '#4ade80',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                WhatsApp {SITE_PHONE_DISPLAY} ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
