'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image, { getImageProps } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { trackCtaClick } from '@/lib/analytics';

interface HeroSectionProps {
  onOpenMenu?: () => void;
  onOpenContact?: () => void;
}

export function HeroSection({ onOpenMenu, onOpenContact }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Smooth subtle parallax for the celestial background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.3]);

  const commonImg = {
    alt: 'Astronaut beneath a glowing Earthlike horizon representing digital growth with Swift Stack Digital',
    sizes: '100vw',
    quality: 85,
  };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...commonImg,
    width: 1660,
    height: 948,
    src: '/images/astronaut-horizon-desktop.webp',
  });

  const {
    props: { alt: mobileAlt, ...mobileImgProps },
  } = getImageProps({
    ...commonImg,
    width: 576,
    height: 1024,
    src: '/images/astronaut-mobile-horizon.webp',
  });

  const handlePrimaryCta = (location: string) => {
    trackCtaClick('Get a Free Consultation', location);
    if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <section
      ref={ref}
      className="hero-root"
      style={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        borderRadius: 'var(--radius-card-lg)',
        backgroundColor: '#02040a',
        color: '#ffffff',
        height: '100svh',
        minHeight: '620px',
        maxHeight: '1440px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Art-directed celestial backdrop: loads only 32KB WebP on mobile or 107KB WebP on desktop */}
      <motion.div
        className="hero-bg-container"
        style={{
          y: bgY,
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <picture className="hero-picture">
          <source media="(min-width: 901px)" srcSet={desktopSrcSet} sizes="100vw" />
          <img
            {...mobileImgProps}
            alt={mobileAlt}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="hero-bg-img"
          />
        </picture>

        {/* Ambient atmospheric vignettes to blend edges seamlessly into space background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, #02040a 0%, rgba(2, 4, 10, 0.65) 10%, rgba(2, 4, 10, 0.1) 24%, transparent 40%, rgba(1, 3, 8, 0.7) 85%, #010308 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 90% 60% at 50% 25%, rgba(56, 189, 248, 0.08) 0%, transparent 65%)',
          }}
        />
      </motion.div>

      {/* Top Header / Navigation Bar */}
      <header
        className="hero-header"
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(1.25rem, 2.5vh, 2rem) clamp(1.5rem, 3.5vw, 4rem) 0',
        }}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Image
            src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
            alt="Swift Stack Digital Logo"
            width={56}
            height={56}
            loading="eager"
            style={{
              width: '3.5rem',
              height: '3.5rem',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-onest), "Plus Jakarta Sans", sans-serif',
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
              style={{
                fontFamily: 'var(--font-onest), "Plus Jakarta Sans", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
                color: '#94a3b8',
                lineHeight: 1.15,
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              Digital
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hero-nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.5rem, 2vw, 2.5rem)' }}
        >
          <Link
            href="/"
            className="hero-nav-link active"
            style={{
              position: 'relative',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#ffffff',
              textDecoration: 'none',
              paddingBottom: '0.35rem',
              whiteSpace: 'nowrap',
            }}
          >
            Home
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                borderRadius: '9999px',
                backgroundColor: '#38bdf8',
                boxShadow: '0 0 10px rgba(56, 189, 248, 0.9), 0 0 16px rgba(56, 189, 248, 0.5)',
              }}
            />
          </Link>
          <Link
            href="/#services"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.78)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Services
          </Link>
          <Link
            href="/work"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.78)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Our Work
          </Link>
          <Link
            href="/blog"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.78)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.78)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.78)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA / Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => handlePrimaryCta('hero_header')}
            className="hero-consultation-btn"
            style={{
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.24)',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '0.52rem 1.35rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#ffffff',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Get a Free Consultation
            <span style={{ fontSize: '0.875rem', transition: 'transform 0.2s ease' }}>&rarr;</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={onOpenMenu}
            className="hero-mobile-menu-btn"
            aria-label="Open menu"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              display: 'none',
              placeContent: 'center',
              gap: '5px',
              cursor: 'pointer',
            }}
          >
            <div style={{ height: '1.5px', width: '1.1rem', background: '#ffffff', borderRadius: '1px' }} />
            <div style={{ height: '1.5px', width: '1.1rem', background: '#ffffff', borderRadius: '1px' }} />
          </button>
        </div>
      </header>

      {/* Main Hero Content (No opacity:0 initial hide so LCP & H1 paint on initial HTML) */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          position: 'relative',
          zIndex: 15,
          width: '100%',
          maxWidth: '64rem',
          margin: '0 auto',
          textAlign: 'center',
          padding: 'clamp(3.25rem, 10vh, 8.5rem) 1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="hero-content-wrapper"
      >
        <div
          className="hero-eyebrow"
          style={{
            fontFamily: 'var(--font-onest), "Plus Jakarta Sans", sans-serif',
            fontSize: 'clamp(0.6875rem, 0.8vw, 0.78125rem)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#7dd3fc',
            marginBottom: 'clamp(0.65rem, 1.2vh, 1rem)',
            textShadow: '0 0 18px rgba(56, 189, 248, 0.5)',
            whiteSpace: 'nowrap',
          }}
        >
          SRI LANKA &amp; GLOBAL &nbsp;&bull;&nbsp; WEB &middot; E-COMMERCE &middot; SOFTWARE &middot; AI
        </div>

        <h1
          className="hero-headline"
          style={{
            fontFamily: 'var(--font-onest), "Plus Jakarta Sans", sans-serif',
            fontSize: 'clamp(2.15rem, 3.4vw, 3.85rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            marginBottom: 'clamp(0.75rem, 1.4vh, 1.25rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span className="hero-hl-desktop" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            Websites, Stores &amp; Software
          </span>
          <span className="hero-hl-mobile-1">Websites, Stores</span>
          <span className="hero-hl-mobile-2">&amp; Custom Software</span>
          <span className="hero-gradient-text hero-hl-gradient" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            Built for Real Growth
          </span>
        </h1>

        <p
          className="hero-subtitle"
          style={{
            maxWidth: '46rem',
            margin: '0 auto clamp(1rem, 2vh, 1.75rem)',
            fontSize: 'clamp(0.84rem, 1vw, 1rem)',
            lineHeight: 1.6,
            color: '#cbd5e1',
            fontWeight: 400,
          }}
        >
          <span className="hero-sub-text">
            We partner with businesses across Sri Lanka and worldwide to engineer fast websites, high-converting e-commerce stores, custom CRM software, SEO, and practical AI automation.
          </span>
        </p>

        <div
          className="hero-cta-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.15rem',
            flexWrap: 'nowrap',
          }}
        >
          <button
            type="button"
            onClick={() => handlePrimaryCta('hero_main')}
            className="hero-primary-cta"
            style={{
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
              color: '#ffffff',
              padding: 'clamp(0.65rem, 1vh, 0.85rem) clamp(1.6rem, 1.8vw, 2.2rem)',
              fontSize: 'clamp(0.8125rem, 0.88vw, 0.9375rem)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              boxShadow:
                '0 4px 20px rgba(59, 130, 246, 0.45), 0 0 28px rgba(99, 102, 241, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              border: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Get a Free Consultation
            <span style={{ fontSize: '0.9375rem', transition: 'transform 0.2s ease' }}>&rarr;</span>
          </button>

          <Link
            href="/work"
            onClick={() => trackCtaClick('View Our Work', 'hero_main')}
            className="hero-secondary-cta"
            style={{
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.24)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: 'clamp(0.65rem, 1vh, 0.85rem) clamp(1.6rem, 1.8vw, 2.2rem)',
              fontSize: 'clamp(0.8125rem, 0.88vw, 0.9375rem)',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              whiteSpace: 'nowrap',
            }}
          >
            View Our Work
          </Link>
        </div>
      </motion.div>

      {/* Bottom Feature Section */}
      <div
        className="hero-features-container"
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          maxWidth: '64rem',
          margin: '0 auto',
          marginTop: 'auto',
          padding: '0 clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 3.5vh, 2.5rem)',
        }}
      >
        <div
          className="hero-features-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Pillar 1 */}
          <Link href="/web-development" className="hero-feature-item" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <div style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="7 8 3 12 7 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
                <polyline points="17 8 21 12 17 16" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="hero-feature-title"
                style={{ fontSize: 'clamp(0.8125rem, 0.9vw, 0.9375rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.25, whiteSpace: 'nowrap' }}
              >
                Web &amp; E-Commerce
              </div>
              <div
                className="hero-feature-desc"
                style={{ fontSize: 'clamp(0.7rem, 0.75vw, 0.8125rem)', color: '#94a3b8', marginTop: '0.15rem', lineHeight: 1.35, whiteSpace: 'nowrap' }}
              >
                Next.js sites &amp; online stores built to convert.
              </div>
            </div>
          </Link>

          <div className="hero-feature-divider" style={{ width: '1px', height: '2rem', background: 'rgba(255, 255, 255, 0.14)', margin: '0 clamp(1rem, 2vw, 2rem)', flexShrink: 0 }} />

          {/* Pillar 2 */}
          <Link href="/seo-services" className="hero-feature-item" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <div style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="hero-feature-title"
                style={{ fontSize: 'clamp(0.8125rem, 0.9vw, 0.9375rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.25, whiteSpace: 'nowrap' }}
              >
                Technical SEO &amp; Speed
              </div>
              <div
                className="hero-feature-desc"
                style={{ fontSize: 'clamp(0.7rem, 0.75vw, 0.8125rem)', color: '#94a3b8', marginTop: '0.15rem', lineHeight: 1.35, whiteSpace: 'nowrap' }}
              >
                Google search visibility &amp; mobile speed.
              </div>
            </div>
          </Link>

          <div className="hero-feature-divider" style={{ width: '1px', height: '2rem', background: 'rgba(255, 255, 255, 0.14)', margin: '0 clamp(1rem, 2vw, 2rem)', flexShrink: 0 }} />

          {/* Pillar 3 */}
          <Link href="/custom-software" className="hero-feature-item" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <div style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
                <path d="M3 13l5-5 4 4 8-8" />
                <path d="M17 4h4v4" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="hero-feature-title"
                style={{ fontSize: 'clamp(0.8125rem, 0.9vw, 0.9375rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.25, whiteSpace: 'nowrap' }}
              >
                Custom Software &amp; AI
              </div>
              <div
                className="hero-feature-desc"
                style={{ fontSize: 'clamp(0.7rem, 0.75vw, 0.8125rem)', color: '#94a3b8', marginTop: '0.15rem', lineHeight: 1.35, whiteSpace: 'nowrap' }}
              >
                CRMs, portals &amp; AI business automation.
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Section-scoped styles */}
      <style>{`
        .hero-root {
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.6);
        }

        .hero-picture {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .hero-bg-img {
          position: absolute;
          left: 0;
          width: 100%;
          height: 104%;
          top: 4%;
          object-fit: cover;
          object-position: center 20%;
        }

        .hero-gradient-text {
          background: linear-gradient(90deg, #38bdf8 0%, #60a5fa 35%, #818cf8 70%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 24px rgba(56, 189, 248, 0.4));
        }

        .hero-nav-link:hover {
          color: #ffffff !important;
        }

        .hero-consultation-btn:hover {
          background: rgba(255, 255, 255, 0.14) !important;
          border-color: rgba(255, 255, 255, 0.45) !important;
        }
        .hero-consultation-btn:hover span {
          transform: translateX(3px);
        }

        .hero-primary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 26px rgba(59, 130, 246, 0.6), 0 0 35px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.35) !important;
        }
        .hero-primary-cta:hover span {
          transform: translateX(3px);
        }

        .hero-secondary-cta:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.45) !important;
        }

        .hero-hl-desktop {
          display: inline-block;
        }
        .hero-hl-mobile-1,
        .hero-hl-mobile-2 {
          display: none;
        }

        @media (min-aspect-ratio: 16/9) and (min-width: 901px) {
          .hero-bg-img {
            height: 108% !important;
            top: 2% !important;
          }
        }

        @media (max-width: 900px) {
          .hero-root {
            border-radius: 0 !important;
            height: 100svh !important;
            min-height: 640px !important;
          }

          .hero-bg-img {
            height: 100% !important;
            top: 0 !important;
            object-position: center top !important;
          }

          /* Header on Mobile */
          .hero-header {
            padding: 18px 20px 0 !important;
          }
          .hero-nav-links {
            display: none !important;
          }
          .hero-consultation-btn {
            display: none !important;
          }
          .hero-mobile-menu-btn {
            display: grid !important;
            width: 2.35rem !important;
            height: 2.35rem !important;
          }

          .hero-content-wrapper {
            padding: clamp(22px, 4.5vh, 40px) 16px 0 !important;
            max-width: 100% !important;
          }

          .hero-eyebrow {
            font-size: 9.5px !important;
            letter-spacing: 0.13em !important;
            white-space: normal !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
            color: #7dd3fc !important;
          }

          .hero-hl-desktop {
            display: none !important;
          }
          .hero-hl-mobile-1,
          .hero-hl-mobile-2 {
            display: block !important;
            white-space: nowrap !important;
          }
          .hero-hl-gradient {
            white-space: nowrap !important;
          }
          .hero-headline {
            font-size: clamp(1.85rem, 7.6vw, 2.3rem) !important;
            line-height: 1.14 !important;
            letter-spacing: -0.025em !important;
            margin-bottom: 12px !important;
          }

          .hero-subtitle {
            max-width: 340px !important;
            margin: 0 auto 18px !important;
          }
          .hero-sub-text {
            font-size: 13px !important;
            line-height: 1.55 !important;
            color: #cbd5e1 !important;
            display: inline-block !important;
          }

          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .hero-primary-cta {
            width: auto !important;
            min-width: 210px !important;
            height: 44px !important;
            padding: 0 22px !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            justify-content: center !important;
            border-radius: 9999px !important;
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #6366f1 100%) !important;
            box-shadow: 0 4px 18px rgba(37, 99, 235, 0.4), 0 0 24px rgba(99, 102, 241, 0.25) !important;
          }
          .hero-secondary-cta {
            width: auto !important;
            min-width: 185px !important;
            height: 42px !important;
            padding: 0 22px !important;
            font-size: 13.5px !important;
            font-weight: 500 !important;
            justify-content: center !important;
            border-radius: 9999px !important;
            background: rgba(15, 23, 42, 0.65) !important;
            border: 1px solid rgba(255, 255, 255, 0.25) !important;
            backdrop-filter: blur(10px) !important;
            WebkitBackdropFilter: blur(10px) !important;
          }

          .hero-features-container {
            padding: 0 10px 18px !important;
            max-width: 100% !important;
          }
          .hero-features-bar {
            flex-direction: row !important;
            gap: 0 !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
            width: 100% !important;
          }
          .hero-feature-divider {
            display: block !important;
            width: 1px !important;
            height: 44px !important;
            background: rgba(255, 255, 255, 0.15) !important;
            margin: 0 4px !important;
            align-self: center !important;
            flex-shrink: 0 !important;
          }
          .hero-feature-item {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            gap: 5px !important;
            flex: 1 !important;
            min-width: 0 !important;
            padding: 0 2px !important;
          }
          .hero-feature-title {
            white-space: normal !important;
            font-size: 11px !important;
            font-weight: 600 !important;
            line-height: 1.25 !important;
          }
          .hero-feature-desc {
            white-space: normal !important;
            font-size: 9.5px !important;
            line-height: 1.35 !important;
            color: #cbd5e1 !important;
            margin-top: 2px !important;
          }
        }
      `}</style>
    </section>
  );
}
