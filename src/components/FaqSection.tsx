'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOME_FAQS } from '@/data/faqs';
import { trackCtaClick } from '@/lib/analytics';

interface FaqSectionProps {
  onOpenContact?: () => void;
}

export function FaqSection({ onOpenContact }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="faq-section-root"
      style={{
        background: '#ffffff',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div className="faq-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <motion.h2
            id="faq-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
            className="faq-heading-title"
            style={{
              fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
              fontWeight: 500,
              lineHeight: 1.18,
              letterSpacing: '-0.01em',
              color: '#0f0f11',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            FREQUENTLY ASKED
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 600,
                marginTop: '0.6rem',
                letterSpacing: '0.02em',
              }}
            >
              QUESTIONS
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="faq-heading-sub"
            style={{
              fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
              lineHeight: 1.65,
              color: 'rgba(15, 15, 17, 0.65)',
              maxWidth: '38rem',
              margin: '1.85rem auto 0',
              padding: '0 0.75rem',
            }}
          >
            Clear answers to common questions about pricing, timelines, technical SEO, custom software, and working with our team.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {HOME_FAQS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="faq-trigger"
                >
                  <div className="faq-left">
                    <span className="faq-index">{item.id}</span>
                    <div style={{ textAlign: 'left' }}>
                      {item.category && <span className="faq-cat-pill">{item.category}</span>}
                      <h3 className="faq-q-text">{item.question}</h3>
                    </div>
                  </div>

                  <div className="faq-icon-btn">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer-content">
                        <p className="faq-answer-text">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="faq-bottom-cta"
        >
          <div>
            <h4 className="faq-cta-title">Not sure what your business needs?</h4>
            <p className="faq-cta-sub">
              Get a free consultation with our engineering team—we will recommend the right solution and an initial estimate.
            </p>
          </div>
          {onOpenContact && (
            <button
              type="button"
              onClick={() => {
                trackCtaClick('Talk to Our Team', 'home_faq_cta');
                onOpenContact();
              }}
              className="faq-cta-btn"
            >
              Get a Free Consultation ↗
            </button>
          )}
        </motion.div>
      </div>

      <style>{`
        .faq-section-root {
          padding: 5rem 0 6rem;
        }
        .faq-container {
          max-width: 68rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
        }
        .faq-heading-title {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
        }
        .faq-list {
          margin-top: 3.5rem;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(15, 15, 17, 0.12);
        }
        .faq-item {
          border-bottom: 1px solid rgba(15, 15, 17, 0.12);
          transition: background-color 0.25s ease;
        }
        .faq-item-open {
          background-color: #fafafc;
        }
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 1.25rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1.5rem;
          transition: background-color 0.2s ease;
        }
        .faq-trigger:hover {
          background-color: rgba(15, 15, 17, 0.02);
        }
        .faq-left {
          display: flex;
          align-items: flex-start;
          gap: 1.75rem;
          flex: 1;
        }
        .faq-index {
          font-size: 1.15rem;
          font-weight: 500;
          color: rgba(15, 15, 17, 0.45);
          font-variant-numeric: tabular-nums;
          margin-top: 0.15rem;
          min-width: 2rem;
        }
        .faq-cat-pill {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--brand, #2563c9);
          margin-bottom: 0.4rem;
        }
        .faq-q-text {
          font-size: clamp(1.125rem, 2vw, 1.35rem);
          font-weight: 600;
          color: #0f0f11;
          letter-spacing: -0.01em;
          line-height: 1.35;
          margin: 0;
          transition: color 0.2s ease;
        }
        .faq-item-open .faq-q-text {
          color: #000000;
        }
        .faq-icon-btn {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          border: 1px solid rgba(15, 15, 17, 0.2);
          background-color: #ffffff;
          color: #0f0f11;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .faq-item-open .faq-icon-btn {
          background-color: #0f0f11;
          color: #ffffff;
          border-color: #0f0f11;
        }
        .faq-answer-content {
          padding: 0 1.25rem 2rem 5rem;
        }
        .faq-answer-text {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: rgba(15, 15, 17, 0.72);
          margin: 0;
          max-width: 52rem;
        }

        .faq-bottom-cta {
          margin-top: 3.5rem;
          background-color: #0f0f11;
          color: #ffffff;
          border-radius: 1.5rem;
          padding: 2.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .faq-cta-title {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 0 0 0.35rem;
        }
        .faq-cta-sub {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          max-width: 32rem;
          line-height: 1.5;
        }
        .faq-cta-btn {
          background-color: #ffffff;
          color: #0f0f11;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .faq-cta-btn:hover {
          transform: scale(1.04);
          background-color: #f1f1f4;
        }

        @media (max-width: 768px) {
          .faq-section-root {
            padding: 3.5rem 0 4.5rem;
          }
          .faq-container {
            padding: 0 1.25rem;
          }
          .faq-list {
            margin-top: 2.25rem;
          }
          .faq-trigger {
            padding: 1.5rem 0.5rem;
            gap: 1rem;
          }
          .faq-left {
            gap: 1rem;
          }
          .faq-index {
            font-size: 0.9375rem;
            min-width: 1.5rem;
          }
          .faq-q-text {
            font-size: 1.05rem;
            line-height: 1.35;
          }
          .faq-icon-btn {
            width: 2.25rem;
            height: 2.25rem;
          }
          .faq-answer-content {
            padding: 0 0.5rem 1.5rem 2.5rem;
          }
          .faq-answer-text {
            font-size: 0.875rem;
            line-height: 1.6;
          }
          .faq-bottom-cta {
            padding: 24px 18px;
            border-radius: 20px;
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
            margin-top: 32px;
          }
          .faq-cta-title {
            font-size: 20px;
          }
          .faq-cta-sub {
            font-size: 14px;
          }
          .faq-cta-btn {
            width: 100%;
            min-height: 48px;
            padding: 12px 20px;
            font-size: 14px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
