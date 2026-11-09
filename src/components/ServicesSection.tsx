'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PRIMARY_SERVICES } from '@/lib/site';
import { trackCtaClick } from '@/lib/analytics';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [activeId, setActiveId] = useState<string>('01');

  const services = PRIMARY_SERVICES.map((svc, idx) => ({
    id: String(idx + 1).padStart(2, '0'),
    title: svc.label,
    desc: svc.description,
    link: svc.href,
  }));

  return (
    <section
      id="services"
      className="services-section-root"
      style={{
        background: '#ffffff',
        position: 'relative',
        zIndex: 5,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Anchor for backward compatibility with old link */}
      <span id="programs" style={{ position: 'absolute', top: '-100px', opacity: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '78rem', margin: '0 auto', width: '100%' }}>
        {/* Editorial Heading */}
        <div className="services-header-box" style={{ textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
            className="services-heading-title"
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
            OUR AGENCY PROVIDES THESE
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 600,
                marginTop: '0.25rem',
                letterSpacing: '0.02em',
              }}
            >
              SERVICES
            </span>
          </motion.h2>
          <p
            style={{
              marginTop: '1.35rem',
              fontSize: '0.98rem',
              lineHeight: 1.65,
              color: 'rgba(15, 15, 17, 0.65)',
              maxWidth: '40rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Dedicated commercial web engineering, online stores, custom software, SEO, and AI automation tailored for Sri Lankan and international businesses.
          </p>
        </div>

        {/* Services List */}
        <div
          className="services-list-container"
          onMouseLeave={() => setActiveId('01')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
          }}
        >
          {services.map((service, index) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 24 }}
                style={{ width: '100%' }}
              >
                <Link
                  href={service.link}
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  className={`service-row ${isActive ? 'service-row-active' : ''}`}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    borderRadius: '1.25rem',
                    transition:
                      'background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive ? '#0a0a0a' : 'transparent',
                    boxShadow: isActive ? '0 20px 40px -15px rgba(0, 0, 0, 0.28)' : 'none',
                    borderBottom: isActive ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.12)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <div className="service-row-inner">
                    {/* Left: Number & Title */}
                    <div className="service-left-col">
                      <span
                        className="service-number"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 500,
                          minWidth: '2.5rem',
                          color: isActive ? '#ffffff' : '#0f0f11',
                          transition: 'color 0.3s ease',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {service.id}
                      </span>
                      <h3
                        className="service-title-text"
                        style={{
                          fontSize: 'clamp(1.35rem, 2.3vw, 2.05rem)',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          color: isActive ? '#ffffff' : '#0f0f11',
                          margin: 0,
                          transition: 'color 0.3s ease',
                          lineHeight: 1.2,
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Middle: Description */}
                    <div className="service-mid-col">
                      <p
                        className="service-desc-text"
                        style={{
                          margin: 0,
                          fontSize: '0.9375rem',
                          lineHeight: 1.6,
                          color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 15, 17, 0.68)',
                          transition: 'color 0.3s ease',
                          maxWidth: '450px',
                        }}
                      >
                        {service.desc}
                      </p>
                    </div>

                    {/* Right: Circle Button with Diagonal Arrow */}
                    <div className="service-right-col">
                      <div
                        className="service-circle-btn"
                        style={{
                          width: '3.5rem',
                          height: '3.5rem',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition:
                            'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          backgroundColor: isActive ? '#ffffff' : 'transparent',
                          border: isActive ? '1px solid #ffffff' : '1px solid rgba(15, 15, 17, 0.3)',
                          color: isActive ? '#0a0a0a' : '#0f0f11',
                          transform: isActive ? 'scale(1.04)' : 'scale(1)',
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: isActive ? 'translate(1px, -1px)' : 'translate(0, 0)',
                          }}
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        {/* Bottom Quick Consultation Prompt */}
        <div className="services-consult-strip">
          <p className="services-consult-copy">
            Not sure which package fits your goals? Get tailored architecture advice and an initial estimate.
          </p>
          {onOpenContact ? (
            <button
              type="button"
              onClick={() => {
                trackCtaClick('Get a Free Consultation', 'services_strip');
                onOpenContact();
              }}
              className="services-consult-btn"
            >
              Get a Free Consultation ↗
            </button>
          ) : (
            <Link href="/contact" className="services-consult-btn">
              Get a Free Consultation ↗
            </Link>
          )}
        </div>
      </div>

      <style>{`
        .services-section-root {
          padding: 6rem 1.5rem;
        }

        .services-header-box {
          margin-bottom: 4rem;
        }

        .services-heading-title {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
        }

        .services-consult-strip {
          margin-top: 2.25rem;
          padding: 1.5rem 2rem;
          border-radius: 1.25rem;
          background: #f8fafc;
          border: 1px solid rgba(15, 15, 17, 0.09);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
        }

        .services-consult-copy {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.55;
          color: rgba(15, 15, 17, 0.72);
        }

        .services-consult-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0.7rem 1.35rem;
          border-radius: 9999px;
          background: #0f0f11;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .services-consult-btn:hover {
          transform: translateY(-1px);
          background: #2563c9;
        }

        .service-row-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2rem;
          gap: 2rem;
        }

        .service-left-col {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          min-width: 340px;
          flex-shrink: 0;
        }

        .service-mid-col {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 1rem;
        }

        .service-right-col {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .service-row-inner {
            padding: 1.65rem 1.5rem;
            gap: 1.5rem;
          }
          .service-left-col {
            min-width: 260px;
            gap: 1.25rem;
          }
          .service-circle-btn {
            width: 3rem !important;
            height: 3rem !important;
          }
        }

        @media (max-width: 860px) {
          .services-consult-strip {
            margin-top: 24px !important;
            padding: 18px 16px !important;
            border-radius: 16px !important;
            gap: 12px !important;
          }
          .services-consult-copy {
            font-size: 14px !important;
          }
          .services-consult-btn {
            width: 100%;
            font-size: 13.5px !important;
            padding: 10px 18px !important;
          }
          .services-section-root {
            padding: 3.5rem 1.25rem 4rem !important;
          }
          .services-header-box {
            margin-bottom: 2.25rem !important;
          }
          .services-heading-title {
            font-size: clamp(1.75rem, 6.8vw, 2.35rem) !important;
          }
          .service-row-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem 1.15rem !important;
            gap: 0.75rem !important;
          }
          .service-left-col {
            width: 100%;
            justify-content: flex-start;
            min-width: 0;
            padding-right: 3rem !important;
            gap: 0.85rem !important;
          }
          .service-number {
            font-size: 1rem !important;
            min-width: 1.75rem !important;
          }
          .service-title-text {
            font-size: 1.2rem !important;
          }
          .service-mid-col {
            padding: 0;
            width: 100%;
          }
          .service-desc-text {
            font-size: 0.875rem !important;
            line-height: 1.55 !important;
          }
          .service-right-col {
            position: absolute;
            top: 1.15rem !important;
            right: 1.15rem !important;
          }
          .service-circle-btn {
            width: 2.35rem !important;
            height: 2.35rem !important;
          }
          .service-circle-btn svg {
            width: 16px !important;
            height: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .services-section-root {
            padding: 3rem 1rem 3.5rem !important;
          }
          .services-header-box {
            margin-bottom: 1.85rem !important;
          }
          .services-heading-title {
            font-size: clamp(1.55rem, 6.5vw, 1.95rem) !important;
          }
          .service-row-inner {
            padding: 1.15rem 1rem !important;
            gap: 0.65rem !important;
          }
          .service-left-col {
            padding-right: 2.75rem !important;
            gap: 0.75rem !important;
          }
          .service-number {
            font-size: 0.9rem !important;
            min-width: 1.5rem !important;
          }
          .service-title-text {
            font-size: 1.1rem !important;
          }
          .service-desc-text {
            font-size: 0.8125rem !important;
            line-height: 1.5 !important;
          }
          .service-right-col {
            top: 1rem !important;
            right: 1rem !important;
          }
          .service-circle-btn {
            width: 2.15rem !important;
            height: 2.15rem !important;
          }
          .service-circle-btn svg {
            width: 15px !important;
            height: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
