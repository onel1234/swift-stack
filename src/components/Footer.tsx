'use client';

import React from 'react';

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="contact" className="ref-footer-section">
      {/* Ambient Radial Glowing Auroras matching reference */}
      <div className="ref-footer-glow ref-footer-glow-primary" aria-hidden="true" />
      <div className="ref-footer-glow ref-footer-glow-secondary" aria-hidden="true" />

      <div className="ref-footer-inner">
        {/* Top Eyebrow Tag */}
        <div className="ref-footer-tag">
          <span className="ref-footer-tag-dot" />
          <span>Contact Us</span>
        </div>

        {/* Main Headline - Tailored for Swift Stack Digital */}
        <h2 className="ref-footer-heading">
          Interested in working together, building your next digital project, or simply learning more?
        </h2>

        {/* Middle Row: Agency Contact Details on Left, Real Site Navigation on Right */}
        <div className="ref-footer-middle">
          <div className="ref-footer-contact">
            <span className="ref-footer-contact-lbl">Contact our team:</span>
            <a
              href="mailto:contact@swiftstack.digital"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="ref-footer-email-link"
            >
              contact@swiftstack.digital
              <span className="ref-footer-arrow">↗</span>
            </a>
            <div className="ref-footer-contact-meta">
              <a href="tel:+94758441413" className="ref-footer-meta-item">+94 75 8441413</a>
              <span className="ref-footer-meta-dot">&bull;</span>
              <span className="ref-footer-meta-item">Kiribathgoda, Sri Lanka</span>
            </div>
          </div>

          <nav className="ref-footer-nav" aria-label="Footer Navigation">
            <a href="#services" className="ref-footer-nav-link">Services</a>
            <a href="#facilities" className="ref-footer-nav-link">Process</a>
            <a href="/work" className="ref-footer-nav-link">Work</a>
            <a href="#testimonials" className="ref-footer-nav-link">Testimonials</a>
            <a href="#faq" className="ref-footer-nav-link">FAQ</a>
          </nav>
        </div>

        {/* Giant Logo & Wordmark Showcase */}
        <div className="ref-footer-brand-hero">
          <img
            src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
            alt="Swift Stack Logo"
            className="ref-footer-giant-logo"
          />
          <span className="ref-footer-giant-text">Swift Stack</span>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="ref-footer-bottom">
          <div className="ref-footer-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ref-footer-social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ref-footer-social-link"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ref-footer-social-link"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ref-footer-social-link"
            >
              Instagram
            </a>
          </div>

          <div className="ref-footer-copyright">
            &copy; {new Date().getFullYear()} Swift Stack Digital. All rights reserved.
          </div>
        </div>
      </div>

      <style>{`
        .ref-footer-section {
          position: relative;
          background-color: #07070b;
          border-radius: var(--radius-card-lg, 2rem);
          overflow: hidden;
          color: #ffffff;
          margin-top: 0.75rem;
          padding: clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem) clamp(2rem, 3vw, 2.75rem);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.45);
        }

        /* Ambient glowing background aura */
        .ref-footer-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }
        .ref-footer-glow-primary {
          bottom: -15%;
          right: 14%;
          width: 58vw;
          max-width: 650px;
          height: 58vw;
          max-height: 550px;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.3) 0%,
            rgba(217, 70, 239, 0.18) 32%,
            rgba(99, 102, 241, 0.16) 55%,
            transparent 75%
          );
          filter: blur(85px);
        }
        .ref-footer-glow-secondary {
          bottom: 8%;
          left: 5%;
          width: 42vw;
          max-width: 480px;
          height: 42vw;
          max-height: 420px;
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.14) 0%,
            rgba(99, 102, 241, 0.1) 45%,
            transparent 70%
          );
          filter: blur(75px);
        }

        .ref-footer-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }

        /* Eyebrow tag */
        .ref-footer-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.03em;
        }
        .ref-footer-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #38bdf8;
          box-shadow: 0 0 10px #38bdf8;
          display: inline-block;
        }

        /* Main Heading */
        .ref-footer-heading {
          font-family: var(--font-onest, 'Plus Jakarta Sans', 'Onest', sans-serif);
          font-size: clamp(2rem, 3.8vw, 3.5rem);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
          max-width: 48rem;
          margin-top: 1.25rem;
          margin-bottom: 0;
        }

        /* Middle Row */
        .ref-footer-middle {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: clamp(3rem, 6vw, 5.5rem);
          margin-bottom: clamp(3.5rem, 6vw, 5.5rem);
        }

        .ref-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .ref-footer-contact-lbl {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 400;
        }
        .ref-footer-email-link {
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          font-weight: 500;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: opacity 0.2s ease;
          cursor: pointer;
        }
        .ref-footer-email-link:hover {
          opacity: 0.85;
        }
        .ref-footer-arrow {
          display: inline-block;
          font-size: 1.1em;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ref-footer-email-link:hover .ref-footer-arrow {
          transform: translate(3px, -3px);
        }

        .ref-footer-contact-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 0.25rem;
        }
        .ref-footer-meta-item {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.2s ease;
        }
        a.ref-footer-meta-item:hover {
          color: #ffffff;
        }
        .ref-footer-meta-dot {
          color: rgba(255, 255, 255, 0.25);
        }

        /* Navigation Links */
        .ref-footer-nav {
          display: flex;
          align-items: center;
          gap: clamp(1.25rem, 2.5vw, 2.25rem);
          flex-wrap: wrap;
        }
        .ref-footer-nav-link {
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.65);
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .ref-footer-nav-link:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* Giant Brand Logo & Wordmark */
        .ref-footer-brand-hero {
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 2.2vw, 2.5rem);
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          user-select: none;
          line-height: 0.9;
          width: 100%;
        }
        .ref-footer-giant-logo {
          height: clamp(3.25rem, 9.5vw, 9rem);
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.5));
        }
        .ref-footer-giant-text {
          font-family: var(--font-onest, 'Plus Jakarta Sans', 'Onest', sans-serif);
          font-size: clamp(3.25rem, 10.5vw, 10.5rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #ffffff;
          white-space: nowrap;
        }

        /* Bottom Bar */
        .ref-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.4);
        }
        .ref-footer-copyright {
          letter-spacing: 0.01em;
        }
        .ref-footer-socials {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .ref-footer-social-link {
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.2s ease;
        }
        .ref-footer-social-link:hover {
          color: #ffffff;
        }

        /* Tablet & Mobile Responsiveness */
        @media (max-width: 768px) {
          .ref-footer-section {
            padding: 3rem 1.5rem max(3.5rem, calc(2rem + env(safe-area-inset-bottom, 1.5rem)));
          }
          .ref-footer-heading {
            font-size: clamp(1.6rem, 5.5vw, 2.25rem);
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          .ref-footer-middle {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            margin-top: 2.5rem;
            margin-bottom: 3rem;
          }
          .ref-footer-nav {
            display: grid;
            grid-template-columns: repeat(2, auto);
            justify-content: start;
            gap: 0.85rem 2.5rem;
            width: 100%;
          }
          .ref-footer-nav-link {
            font-size: 0.9375rem;
            padding: 0.2rem 0;
          }
          .ref-footer-brand-hero {
            gap: clamp(0.6rem, 2vw, 1.25rem);
            margin-bottom: 3rem;
          }
          .ref-footer-giant-logo {
            height: clamp(2.25rem, 8vw, 4.25rem);
          }
          .ref-footer-giant-text {
            font-size: clamp(2rem, 8.5vw, 4.25rem);
            letter-spacing: -0.03em;
          }
          .ref-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
            padding-top: 1.5rem;
          }
          .ref-footer-socials {
            gap: 1.5rem;
            flex-wrap: wrap;
          }
        }

        /* Small Phones (iPhone SE, Galaxy, Pixel, etc.) */
        @media (max-width: 480px) {
          .ref-footer-section {
            padding: 2.5rem 1.25rem max(4.25rem, calc(3rem + env(safe-area-inset-bottom, 1.5rem)));
          }
          .ref-footer-heading {
            font-size: clamp(1.4rem, 6.8vw, 1.75rem);
            line-height: 1.22;
          }
          .ref-footer-middle {
            gap: 1.75rem;
            margin-top: 2.25rem;
            margin-bottom: 2.5rem;
          }
          .ref-footer-nav {
            gap: 0.75rem 2rem;
          }
          .ref-footer-brand-hero {
            gap: 0.6rem;
            margin-bottom: 2.5rem;
          }
          .ref-footer-giant-logo {
            height: clamp(1.85rem, 7vw, 2.5rem);
          }
          .ref-footer-giant-text {
            font-size: clamp(1.65rem, 7.5vw, 2.4rem);
          }
          .ref-footer-contact-meta {
            font-size: 0.75rem;
            flex-wrap: wrap;
          }
          .ref-footer-email-link {
            font-size: 1.05rem;
          }
          .ref-footer-socials {
            gap: 1.15rem;
          }
        }
      `}</style>
    </footer>
  );
}
