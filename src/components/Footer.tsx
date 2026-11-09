'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  getWhatsAppUrl,
  PRIMARY_SERVICES,
  SITE_EMAIL,
  SITE_LOCATION_LABEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
} from '@/lib/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="contact" className="ref-footer-section">
      {/* Ambient Radial Glowing Auroras */}
      <div className="ref-footer-glow ref-footer-glow-primary" aria-hidden="true" />
      <div className="ref-footer-glow ref-footer-glow-secondary" aria-hidden="true" />

      <div className="ref-footer-inner">
        <div className="ref-footer-tag">
          <span className="ref-footer-tag-dot" />
          <span>Get a Free Website Consultation</span>
        </div>

        <h2 className="ref-footer-heading">
          Ready to build a website, online store, or custom software that brings real enquiries?
        </h2>

        {/* Middle Row: Agency Contact Details on Left, Crawlable Service & Company Links on Right */}
        <div className="ref-footer-middle">
          <div className="ref-footer-contact">
            <span className="ref-footer-contact-lbl">Direct agency desk:</span>
            <a
              href={`mailto:${SITE_EMAIL}`}
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="ref-footer-email-link"
            >
              {SITE_EMAIL}
              <span className="ref-footer-arrow">↗</span>
            </a>
            <div className="ref-footer-contact-meta">
              <a
                href={`tel:${SITE_PHONE_E164}`}
                onClick={() => trackPhoneClick('footer')}
                className="ref-footer-meta-item"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              <span className="ref-footer-meta-dot">&bull;</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="ref-footer-meta-item ref-footer-wa-link"
              >
                WhatsApp Direct ↗
              </a>
              <span className="ref-footer-meta-dot">&bull;</span>
              <span className="ref-footer-meta-item">{SITE_LOCATION_LABEL}</span>
            </div>
          </div>

          <div className="ref-footer-columns">
            <nav className="ref-footer-col" aria-label="Services Navigation">
              <span className="ref-footer-col-title">Services</span>
              <div className="ref-footer-col-links">
                {PRIMARY_SERVICES.map((svc) => (
                  <Link key={svc.href} href={svc.href} className="ref-footer-nav-link">
                    {svc.shortLabel}
                  </Link>
                ))}
              </div>
            </nav>

            <nav className="ref-footer-col" aria-label="Company Navigation">
              <span className="ref-footer-col-title">Company &amp; Guides</span>
              <div className="ref-footer-col-links">
                <Link href="/work" className="ref-footer-nav-link">Our Work</Link>
                <Link href="/blog" className="ref-footer-nav-link">Cost &amp; Buyer Guides</Link>
                <Link href="/about" className="ref-footer-nav-link">About Swift Stack</Link>
                <Link href="/contact" className="ref-footer-nav-link">Get a Quote</Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Giant Logo & Wordmark Showcase */}
        <div className="ref-footer-brand-hero">
          <Image
            src="/Gemini_Generated_Image_p1oekyp1oekyp1oe-removebg-preview.png"
            alt="Swift Stack Digital Logo"
            width={144}
            height={144}
            className="ref-footer-giant-logo"
          />
          <span className="ref-footer-giant-text">Swift Stack</span>
        </div>

        {/* Bottom Bar: Verified Quick Links & Copyright */}
        <div className="ref-footer-bottom">
          <div className="ref-footer-socials">
            <Link href="/blog/website-cost-in-sri-lanka-2026" className="ref-footer-social-link">
              2026 Sri Lanka Website Cost Guide
            </Link>
            <Link href="/work" className="ref-footer-social-link">
              Case Studies
            </Link>
            <Link href="/contact" className="ref-footer-social-link">
              Request Estimate
            </Link>
          </div>

          <div className="ref-footer-copyright">
            &copy; {new Date().getFullYear()} Swift Stack Digital. Built in Sri Lanka for ambitious businesses.
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

        .ref-footer-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.78);
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

        .ref-footer-heading {
          font-family: var(--font-onest), 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.9rem, 3.6vw, 3.25rem);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
          max-width: 50rem;
          margin-top: 1.25rem;
          margin-bottom: 0;
        }

        .ref-footer-middle {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2.5rem 3.5rem;
          margin-top: clamp(2.75rem, 5vw, 4.75rem);
          margin-bottom: clamp(3rem, 5vw, 4.75rem);
        }

        .ref-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 34rem;
        }
        .ref-footer-contact-lbl {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 400;
        }
        .ref-footer-email-link {
          font-size: clamp(1.1rem, 1.5vw, 1.35rem);
          font-weight: 500;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: opacity 0.2s ease;
          cursor: pointer;
          overflow-wrap: anywhere;
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
          flex-wrap: wrap;
          gap: 0.45rem 0.65rem;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.62);
          margin-top: 0.35rem;
        }
        .ref-footer-meta-item {
          color: rgba(255, 255, 255, 0.72);
          transition: color 0.2s ease;
        }
        .ref-footer-wa-link {
          color: #4ade80;
          font-weight: 500;
        }
        a.ref-footer-meta-item:hover {
          color: #ffffff;
        }
        .ref-footer-meta-dot {
          color: rgba(255, 255, 255, 0.28);
        }

        .ref-footer-columns {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem 4rem;
        }
        .ref-footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ref-footer-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #38bdf8;
        }
        .ref-footer-col-links {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .ref-footer-nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.72);
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .ref-footer-nav-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }

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
          font-family: var(--font-onest), 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(3.25rem, 10.5vw, 10.5rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #ffffff;
          white-space: nowrap;
        }

        .ref-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.55);
        }
        .ref-footer-copyright {
          letter-spacing: 0.01em;
        }
        .ref-footer-socials {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .ref-footer-social-link {
          color: rgba(255, 255, 255, 0.65);
          transition: color 0.2s ease;
        }
        .ref-footer-social-link:hover {
          color: #ffffff;
        }

        @media (max-width: 1023px) {
          .ref-footer-section {
            padding: 44px 28px 32px;
            border-radius: 24px;
          }
          .ref-footer-tag {
            font-size: 13px;
          }
          .ref-footer-contact-lbl {
            font-size: 13px;
          }
          .ref-footer-email-link {
            font-size: 20px;
          }
          .ref-footer-contact-meta {
            font-size: 13.5px;
            gap: 8px 10px;
          }
          .ref-footer-col-title {
            font-size: 11.5px;
          }
          .ref-footer-nav-link {
            font-size: 14.5px;
          }
          .ref-footer-bottom {
            font-size: 13px;
            padding-top: 24px;
          }
        }

        @media (max-width: 768px) {
          .ref-footer-section {
            padding: 3rem 1.5rem max(3.5rem, calc(2rem + env(safe-area-inset-bottom, 1.5rem)));
          }
          .ref-footer-heading {
            font-size: clamp(1.55rem, 5.5vw, 2.2rem);
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          .ref-footer-middle {
            flex-direction: column;
            align-items: flex-start;
            gap: 2.25rem;
            margin-top: 2.25rem;
            margin-bottom: 2.75rem;
          }
          .ref-footer-columns {
            gap: 2rem 3rem;
            width: 100%;
          }
          .ref-footer-brand-hero {
            gap: clamp(0.6rem, 2vw, 1.25rem);
            margin-bottom: 2.75rem;
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
            gap: 1rem;
            padding-top: 1.5rem;
          }
          .ref-footer-socials {
            gap: 1rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .ref-footer-section {
            padding: 2.5rem 1.25rem max(4.25rem, calc(3rem + env(safe-area-inset-bottom, 1.5rem)));
          }
          .ref-footer-heading {
            font-size: clamp(1.38rem, 6.4vw, 1.7rem);
            line-height: 1.22;
          }
          .ref-footer-brand-hero {
            gap: 0.6rem;
            margin-bottom: 2.25rem;
          }
          .ref-footer-giant-logo {
            height: clamp(1.85rem, 7vw, 2.5rem);
          }
          .ref-footer-giant-text {
            font-size: clamp(1.65rem, 7.5vw, 2.4rem);
          }
          .ref-footer-contact-meta {
            font-size: 0.78rem;
          }
          .ref-footer-email-link {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </footer>
  );
}
