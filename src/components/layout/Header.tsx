'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onOpenMenu?: () => void;
  onOpenContact?: () => void;
}

export function Header({ onOpenMenu, onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${onOpenMenu ? 'site-header--has-menu' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease',
        backgroundColor: scrolled ? 'rgba(2, 4, 10, 0.92)' : 'rgba(2, 4, 10, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: scrolled ? '0.75rem 1.5rem' : '1.1rem 1.5rem',
      }}
    >
      <div
        className="site-header-inner"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          width: '100%',
        }}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="site-header-brand"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
            minWidth: 0,
          }}
        >
          <img
            src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
            alt="Swift Stack Logo"
            className="site-header-logo"
            style={{
              width: '2.75rem',
              height: '2.75rem',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span
              className="site-header-title"
              style={{
                fontFamily: '"Onest", "Plus Jakarta Sans", sans-serif',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                whiteSpace: 'nowrap',
              }}
            >
              Swift Stack
            </span>
            <span
              className="site-header-sub"
              style={{
                fontFamily: '"Onest", "Plus Jakarta Sans", sans-serif',
                fontSize: '0.72rem',
                fontWeight: 400,
                color: '#94a3b8',
                lineHeight: 1.15,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              Digital
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="subpage-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem',
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="header-link"
          >
            Home
          </Link>
          <Link
            href="/#services"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="header-link"
          >
            Services
          </Link>
          <Link
            href="/#facilities"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="header-link"
          >
            Process
          </Link>
          <Link
            href="/work"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="header-link"
          >
            Our Work
          </Link>
          <Link
            href="/#testimonials"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="header-link"
          >
            Testimonials
          </Link>
          <Link
            href="/#faq"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="header-link"
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="site-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="header-cta-btn"
            style={{
              borderRadius: '9999px',
              padding: '0.625rem 1.4rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              backgroundColor: '#ffffff',
              color: '#02040a',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Start a Project</span>
            <span style={{ fontSize: '0.85rem' }}>↗</span>
          </button>

          {/* Mobile Hamburger Menu Button */}
          {onOpenMenu && (
            <button
              type="button"
              onClick={onOpenMenu}
              className="header-menu-btn"
              aria-label="Open navigation menu"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .header-link {
          white-space: nowrap;
        }

        @media (hover: hover) and (pointer: fine) {
          .header-link:hover {
            color: #ffffff !important;
          }
          .header-cta-btn:hover {
            background-color: #38bdf8 !important;
            color: #ffffff !important;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.45);
            transform: translateY(-1px);
          }
        }

        @media (max-width: 1023px) {
          .site-header {
            padding: 12px 24px !important;
          }
          .site-header--scrolled {
            padding: 10px 24px !important;
          }
          .site-header-logo {
            width: 40px !important;
            height: 40px !important;
          }
          .site-header-title {
            font-size: 16px !important;
          }
          .site-header-sub {
            font-size: 11px !important;
          }
          .subpage-nav-links {
            display: none !important;
          }
          .header-cta-btn {
            padding: 9px 18px !important;
            font-size: 12px !important;
          }
          .header-menu-btn {
            display: flex !important;
            width: 42px !important;
            height: 42px !important;
          }
        }

        @media (max-width: 640px) {
          .site-header {
            padding: 12px 16px !important;
          }
          .site-header--scrolled {
            padding: 10px 16px !important;
          }
          .site-header-brand {
            gap: 10px !important;
          }
          .site-header-logo {
            width: 38px !important;
            height: 38px !important;
          }
          .site-header-title {
            font-size: 15.5px !important;
          }
          .site-header-sub {
            font-size: 10px !important;
          }
          .site-header--has-menu .header-cta-btn {
            display: none !important;
          }
          .header-cta-btn {
            padding: 8px 14px !important;
            font-size: 11.5px !important;
          }
          .header-menu-btn {
            width: 42px !important;
            height: 42px !important;
          }
        }
      `}</style>
    </header>
  );
}
