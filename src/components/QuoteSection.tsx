'use client';

import React from 'react';
import { QuoteFunnel } from '@/components/QuoteFunnel';
import {
  getWhatsAppUrl,
  SITE_EMAIL,
  SITE_LOCATION_LABEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  type QuoteServiceOption,
} from '@/lib/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface QuoteSectionProps {
  defaultService?: QuoteServiceOption;
  sourcePage?: string;
}

export function QuoteSection({
  defaultService = 'Business website',
  sourcePage = 'homepage_estimate_section',
}: QuoteSectionProps) {
  return (
    <section id="estimate" className="quote-section-root" aria-labelledby="estimate-heading">
      <div className="quote-section-container">
        <div className="quote-grid">
          {/* Top-Left Pitch & Value Props */}
          <div className="quote-pitch-top">
            <span className="quote-eyebrow">Free Website &amp; Software Consultation</span>
            <h2 id="estimate-heading" className="quote-title">
              Get a Project <span className="quote-title-italic">Estimate</span>
            </h2>
            <p className="quote-lead">
              Tell us what your business is building. We will review your goals and reply within one business day with recommended architecture, realistic timeline, and an itemized LKR or USD estimate.
            </p>

            <ul className="quote-highlights">
              <li>
                <span className="quote-check" aria-hidden="true">✓</span>
                <span>Clear recommendations without jargon or pushy upsells</span>
              </li>
              <li>
                <span className="quote-check" aria-hidden="true">✓</span>
                <span>SEO, speed, and conversion planning built in from day one</span>
              </li>
              <li>
                <span className="quote-check" aria-hidden="true">✓</span>
                <span>Flexible LKR domestic &amp; USD international project scopes</span>
              </li>
            </ul>
          </div>

          {/* Right Column (Desktop) / Immediately Under Intro (Mobile): Interactive Quotation Funnel */}
          <div className="quote-card-wrap">
            <QuoteFunnel defaultService={defaultService} sourcePage={sourcePage} />
          </div>

          {/* Direct Conversation Card (Below Pitch on Desktop / Below Form on Mobile) */}
          <div className="quote-direct-card">
            <span className="quote-direct-label">Prefer direct conversation?</span>
            <div className="quote-direct-actions">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('home_quote_section')}
                className="quote-wa-pill"
              >
                WhatsApp Direct ↗
              </a>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                onClick={() => trackPhoneClick('home_quote_section')}
                className="quote-tel-pill"
              >
                Call {SITE_PHONE_DISPLAY}
              </a>
            </div>
            <div className="quote-direct-meta">
              <a href={`mailto:${SITE_EMAIL}`} className="quote-meta-link">
                {SITE_EMAIL}
              </a>
              <span className="quote-meta-dot" aria-hidden="true">&bull;</span>
              <span>{SITE_LOCATION_LABEL}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quote-section-root {
          background: #f8f9ff;
          border-top: 1px solid #e5eeff;
          border-bottom: 1px solid #e5eeff;
          padding: 5.5rem 1.5rem;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        .quote-section-container {
          max-width: 74rem;
          margin: 0 auto;
          width: 100%;
        }
        .quote-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
          column-gap: 3.5rem;
          row-gap: 1.75rem;
          align-items: start;
        }
        .quote-pitch-top {
          grid-column: 1;
          grid-row: 1;
          min-width: 0;
        }
        .quote-direct-card {
          grid-column: 1;
          grid-row: 2;
          min-width: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 1.25rem;
          padding: 1.35rem;
        }
        .quote-card-wrap {
          grid-column: 2;
          grid-row: 1 / span 2;
          min-width: 0;
          background: #ffffff;
          border: 1px solid #dbe6ff;
          border-radius: 1.75rem;
          padding: 2rem;
          box-shadow: 0 20px 45px -15px rgba(15, 23, 42, 0.08);
        }
        .quote-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #2563c9;
          margin-bottom: 0.65rem;
        }
        .quote-title {
          font-family: var(--font-playfair), Georgia, 'Times New Roman', serif;
          font-size: clamp(2.15rem, 4.2vw, 3.25rem);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.015em;
          text-transform: uppercase;
          color: #0f0f11;
          margin: 0 0 1.25rem;
        }
        .quote-title-italic {
          font-style: italic;
          font-weight: 600;
        }
        .quote-lead {
          font-size: 1rem;
          line-height: 1.68;
          color: rgba(15, 15, 17, 0.72);
          margin: 0 0 1.5rem;
        }
        .quote-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .quote-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9375rem;
          color: #1e293b;
          font-weight: 500;
          line-height: 1.45;
        }
        .quote-check {
          width: 1.35rem;
          height: 1.35rem;
          border-radius: 9999px;
          background: rgba(37, 99, 201, 0.12);
          color: #2563c9;
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .quote-direct-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #64748b;
          margin-bottom: 0.85rem;
        }
        .quote-direct-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .quote-wa-pill {
          background: #16a34a;
          color: #ffffff;
          font-size: 0.84rem;
          font-weight: 600;
          padding: 0.65rem 1.15rem;
          border-radius: 9999px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .quote-wa-pill:hover {
          background: #15803d;
          transform: translateY(-1px);
        }
        .quote-tel-pill {
          background: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          font-size: 0.84rem;
          font-weight: 600;
          padding: 0.65rem 1.15rem;
          border-radius: 9999px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: border-color 0.2s ease;
        }
        .quote-tel-pill:hover {
          border-color: #2563c9;
        }
        .quote-direct-meta {
          margin-top: 0.9rem;
          font-size: 0.8125rem;
          color: #64748b;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          overflow-wrap: anywhere;
        }
        .quote-meta-link {
          color: #334155;
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (max-width: 1023px) {
          .quote-section-root {
            padding: 56px 24px;
          }
          .quote-eyebrow {
            font-size: 11.5px;
            margin-bottom: 8px;
          }
          .quote-title {
            font-size: clamp(32px, 4.6vw, 44px);
            margin-bottom: 14px;
          }
          .quote-lead {
            font-size: 15.5px;
            margin-bottom: 18px;
          }
          .quote-highlights {
            gap: 10px;
          }
          .quote-highlights li {
            font-size: 14.5px;
            gap: 10px;
          }
          .quote-check {
            width: 22px;
            height: 22px;
            font-size: 12px;
          }
          .quote-direct-card {
            padding: 20px;
            border-radius: 18px;
          }
          .quote-direct-label {
            font-size: 11.5px;
            margin-bottom: 12px;
          }
          .quote-wa-pill,
          .quote-tel-pill {
            font-size: 13.5px;
            padding: 10px 18px;
            min-height: 44px;
          }
          .quote-direct-meta {
            font-size: 13px;
            margin-top: 12px;
          }
          .quote-card-wrap {
            padding: 28px 24px;
            border-radius: 22px;
          }
        }
        @media (max-width: 960px) {
          .quote-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .quote-pitch-top,
          .quote-card-wrap,
          .quote-direct-card {
            grid-column: auto;
            grid-row: auto;
          }
          .quote-pitch-top {
            text-align: center;
          }
          .quote-highlights {
            max-width: 560px;
            margin: 0 auto;
            text-align: left;
          }
        }
        @media (max-width: 640px) {
          .quote-section-root {
            padding: 40px 14px;
          }
          .quote-grid {
            gap: 16px;
          }
          .quote-eyebrow {
            font-size: 10.5px;
            letter-spacing: 0.13em;
            margin-bottom: 6px;
          }
          .quote-title {
            font-size: clamp(26px, 7.2vw, 34px);
            margin-bottom: 10px;
          }
          .quote-lead {
            font-size: 14px;
            line-height: 1.55;
            margin-bottom: 14px;
          }
          .quote-highlights {
            gap: 8px;
          }
          .quote-highlights li {
            font-size: 13.5px;
            line-height: 1.4;
          }
          .quote-card-wrap {
            padding: 18px 14px;
            border-radius: 20px;
          }
          .quote-direct-card {
            padding: 16px 14px;
            border-radius: 18px;
            text-align: center;
          }
          .quote-direct-actions {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }
          .quote-wa-pill,
          .quote-tel-pill {
            width: 100%;
            min-height: 46px;
            padding: 10px 12px;
            font-size: 13px;
          }
          .quote-direct-meta {
            flex-direction: column;
            align-items: center;
            gap: 4px;
            font-size: 12.5px;
          }
          .quote-meta-dot {
            display: none;
          }
        }
        @media (max-width: 360px) {
          .quote-direct-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
