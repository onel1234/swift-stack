'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenMenu?: () => void;
  onOpenContact?: () => void;
}

export function HeroSection({ onOpenMenu, onOpenContact }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Smooth subtle parallax for the celestial background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.3]);

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
      {/* Background Image Container:
          Locked to 16:9 / 16:10 celestial framing so that on wider/bigger monitors
          the Earth horizon and astronaut stay perfectly anchored at the exact same vertical ratio
      */}
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          className="hero-bg-frame"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '104%',
            top: '4%',
          }}
        >
          <Image
            src="/images/Astronaut Beneath a Glowing Earthlike Horizon.png"
            alt="Astronaut Beneath a Glowing Earthlike Horizon - Swift Stack Digital"
            fill
            priority
            sizes="100vw"
            quality={95}
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }}
          />
        </div>

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
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <img
            src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
            alt="Swift Stack Logo"
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
                fontFamily: 'var(--font-onest, "Plus Jakarta Sans", "Onest", sans-serif)',
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
                fontFamily: 'var(--font-onest, "Plus Jakarta Sans", "Onest", sans-serif)',
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
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hero-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.75rem, 2.2vw, 2.75rem)' }}>
          <a
            href="#"
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
          </a>
          <a
            href="#programs"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.72)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Services
          </a>
          <a
            href="#facilities"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.72)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Our Work
          </a>
          <a
            href="#trust-title"
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.72)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            About
          </a>
          <button
            onClick={onOpenContact}
            className="hero-nav-link"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.72)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA / Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenContact}
            className="hero-consultation-btn"
            style={{
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              background: 'rgba(255, 255, 255, 0.04)',
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
      </motion.header>

      {/* Main Hero Content (Eyebrow, Headline, Subtitle, CTA Buttons)
          Positioned stably in deep space so it never jumps or breaks on wider screens
      */}
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
          padding: 'clamp(4rem, 12vh, 10rem) 1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="hero-content-wrapper"
      >
        {/* Eyebrow / Tagline: single line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-eyebrow"
          style={{
            fontFamily: 'var(--font-onest, "Plus Jakarta Sans", "Onest", sans-serif)',
            fontSize: 'clamp(0.6875rem, 0.8vw, 0.78125rem)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#7dd3fc',
            marginBottom: 'clamp(0.65rem, 1.2vh, 1rem)',
            textShadow: '0 0 18px rgba(56, 189, 248, 0.5)',
            whiteSpace: 'nowrap',
          }}
        >
          WEB DEVELOPMENT &nbsp;/&nbsp; SEO &nbsp;/&nbsp; DIGITAL SOLUTIONS
        </motion.div>

        {/* Main Headline: Two clean lines locked with nowrap to eliminate jumping on wide monitors */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline"
          style={{
            fontFamily: 'var(--font-onest, "Plus Jakarta Sans", "Onest", sans-serif)',
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
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            Build Your Digital Future
          </span>
          <span className="hero-gradient-text" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            With Swift Stack
          </span>
        </motion.h1>

        {/* Subtitle description: fixed 2-line structure */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '44rem',
            margin: '0 auto clamp(1rem, 2vh, 1.75rem)',
            fontSize: 'clamp(0.8125rem, 0.98vw, 0.9875rem)',
            lineHeight: 1.6,
            color: '#94a3b8',
            fontWeight: 400,
          }}
        >
          <span className="hero-sub-text">
            We help ambitious businesses in Sri Lanka and beyond build high-performing websites, powerful applications, and stronger online presence.
          </span>
        </motion.p>

        {/* CTA Buttons - resting cleanly in deep space above the glowing Earth horizon */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cta-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.15rem',
            flexWrap: 'nowrap',
          }}
        >
          {/* Primary CTA: Get Started */}
          <button
            onClick={onOpenContact}
            className="hero-primary-cta"
            style={{
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
              color: '#ffffff',
              padding: 'clamp(0.62rem, 1vh, 0.8rem) clamp(1.6rem, 1.8vw, 2.2rem)',
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
            Get Started
            <span style={{ fontSize: '0.9375rem', transition: 'transform 0.2s ease' }}>&rarr;</span>
          </button>

          {/* Secondary CTA: View Our Work */}
          <a
            href="#facilities"
            className="hero-secondary-cta"
            style={{
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: 'clamp(0.62rem, 1vh, 0.8rem) clamp(1.6rem, 1.8vw, 2.2rem)',
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
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Feature Section: Borderless horizontal row seated directly across the mountain terrain */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          maxWidth: '62rem',
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
          {/* Feature 1: Custom Web Development */}
          <div className="hero-feature-item" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* < / > Code Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="7 8 3 12 7 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
                <polyline points="17 8 21 12 17 16" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="hero-feature-title"
                style={{
                  fontSize: 'clamp(0.8125rem, 0.9vw, 0.9375rem)',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  whiteSpace: 'nowrap',
                }}
              >
                Custom Web Development
              </div>
              <div
                className="hero-feature-desc"
                style={{
                  fontSize: 'clamp(0.7rem, 0.75vw, 0.8125rem)',
                  color: '#94a3b8',
                  marginTop: '0.15rem',
                  lineHeight: 1.35,
                  whiteSpace: 'nowrap',
                }}
              >
                Modern, scalable, and built for growth.
              </div>
            </div>
          </div>

          {/* Thin Vertical Divider */}
          <div className="hero-feature-divider" style={{ width: '1px', height: '2rem', background: 'rgba(255, 255, 255, 0.12)', margin: '0 clamp(1rem, 2vw, 2rem)', flexShrink: 0 }} />

          {/* Feature 2: SEO That Delivers */}
          <div className="hero-feature-item" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Magnifying Glass Search Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="hero-feature-title"
                style={{
                  fontSize: 'clamp(0.8125rem, 0.9vw, 0.9375rem)',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  whiteSpace: 'nowrap',
                }}
              >
                SEO That Delivers
              </div>
              <div
                className="hero-feature-desc"
                style={{
                  fontSize: 'clamp(0.7rem, 0.75vw, 0.8125rem)',
                  color: '#94a3b8',
                  marginTop: '0.15rem',
                  lineHeight: 1.35,
                  whiteSpace: 'nowrap',
                }}
              >
                More visibility. More customers.
              </div>
            </div>
          </div>

          {/* Thin Vertical Divider */}
          <div className="hero-feature-divider" style={{ width: '1px', height: '2rem', background: 'rgba(255, 255, 255, 0.12)', margin: '0 clamp(1rem, 2vw, 2rem)', flexShrink: 0 }} />

          {/* Feature 3: Digital Growth Solutions */}
          <div className="hero-feature-item" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Rising Analytics Growth Chart with Trend Arrow */}
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
                style={{
                  fontSize: 'clamp(0.8125rem, 0.9vw, 0.9375rem)',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  whiteSpace: 'nowrap',
                }}
              >
                Digital Growth Solutions
              </div>
              <div
                className="hero-feature-desc"
                style={{
                  fontSize: 'clamp(0.7rem, 0.75vw, 0.8125rem)',
                  color: '#94a3b8',
                  marginTop: '0.15rem',
                  lineHeight: 1.35,
                  whiteSpace: 'nowrap',
                }}
              >
                Strategy, design, and tech — all in one place.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section-scoped styles */}
      <style>{`
        .hero-root {
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.6);
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
          background: rgba(255, 255, 255, 0.12) !important;
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

        @media (min-aspect-ratio: 16/9) {
          .hero-bg-frame {
            height: 108% !important;
            top: 2% !important;
          }
        }

        @media (max-width: 900px) {
          .hero-root {
            border-radius: 0 !important;
            height: 100svh !important;
            min-height: 700px !important;
          }
          .hero-nav-links {
            display: none !important;
          }
          .hero-consultation-btn {
            display: none !important;
          }
          .hero-mobile-menu-btn {
            display: grid !important;
          }

          /* Content wrapper: fixed px padding so vw root font doesn't inflate it */
          .hero-content-wrapper {
            padding: 24px 24px 0 !important;
          }

          /* Eyebrow: scale down, allow wrapping */
          .hero-eyebrow {
            font-size: 10px !important;
            letter-spacing: 0.18em !important;
            white-space: nowrap !important;
            margin-bottom: 12px !important;
          }

          /* Headline: proper mobile size */
          .hero-headline {
            font-size: 32px !important;
            line-height: 1.15 !important;
            margin-bottom: 12px !important;
          }
          .hero-headline span {
            white-space: normal !important;
          }

          /* Subtitle */
          .hero-sub-text {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }

          /* CTA buttons: stacked, proper sizing */
          .hero-cta-row {
            flex-direction: column !important;
            width: 100% !important;
            max-width: 280px !important;
            gap: 12px !important;
          }
          .hero-primary-cta,
          .hero-secondary-cta {
            width: 100% !important;
            justify-content: center !important;
            padding: 14px 24px !important;
            font-size: 15px !important;
          }

          /* Features bar: horizontal 3-column, centered */
          .hero-features-bar {
            flex-direction: row !important;
            gap: 0 !important;
            align-items: flex-start !important;
            justify-content: center !important;
          }
          .hero-feature-divider {
            display: block !important;
            height: 40px !important;
            margin: 0 6px !important;
            align-self: center !important;
          }
          .hero-feature-item {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            gap: 6px !important;
            flex: 1 !important;
            min-width: 0 !important;
          }
          .hero-feature-title {
            white-space: normal !important;
            font-size: 12px !important;
            line-height: 1.3 !important;
          }
          .hero-feature-desc {
            white-space: normal !important;
            font-size: 11px !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </section>
  );
}
