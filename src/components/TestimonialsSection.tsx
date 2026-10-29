'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  rating: number;
  initials: string;
  avatarGradient: string;
  impactMetric: string;
  impactLabel: string;
  quote: string;
  liveUrl?: string;
}

interface TestimonialsSectionProps {
  onOpenContact?: () => void;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ceylon-naturalist',
    name: 'Suneth Bashitha',
    role: 'Founder & Managing Director',
    company: 'Ceylon Naturalist',
    category: 'E-Commerce & Wellness',
    rating: 5,
    initials: 'SB',
    avatarGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
    impactMetric: '+150%',
    impactLabel: 'Conversion Rate',
    quote:
      'Working with Wathila and the Swift Stack team was a stellar experience from start to finish. They built our global platform with immense professionalism, aesthetic elegance, and deep technical precision. Every requirement was accommodated effortlessly, deadlines were strictly respected, and international sales exceeded our quarterly forecasts by 150%.',
    liveUrl: 'https://ceylonnaturalist.com/',
  },
  {
    id: 'prana-fuel',
    name: 'Rehan Ahamed',
    role: 'Founder & Product Lead',
    company: 'Prana Fuel',
    category: 'Health & Fitness Tech',
    rating: 5,
    initials: 'RA',
    avatarGradient: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
    impactMetric: '+210%',
    impactLabel: 'User Engagement',
    quote:
      "Swift Stack didn't just build us a website; they built the engine for our brand growth. The kinetic energy, fluid motion design, and sub-second loading speeds immediately positioned us at the top of our category. Our paid ad ROI multiplied 4.8x within months of launch.",
    liveUrl: 'https://prana-fuel-your-vitality.netlify.app/',
  },
  {
    id: 'chill-co',
    name: 'Kavindu Senanayake',
    role: 'Head of Digital Commerce',
    company: 'Chill Co. Apparel',
    category: 'Modern Streetwear',
    rating: 5,
    initials: 'KS',
    avatarGradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
    impactMetric: '99.99%',
    impactLabel: 'Drop-Day Uptime',
    quote:
      'Our high-traffic drop days used to cause inventory sync issues and checkout abandonment. Swift Stack completely revamped our frontend with instant cart reservation and zero lag. We handled thousands of simultaneous shoppers seamlessly with 100% uptime.',
    liveUrl: 'https://chill-co.vercel.app/',
  },
  {
    id: 'catalyst-digital',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Catalyst Enterprise Solutions',
    category: 'B2B SaaS & Growth',
    rating: 5,
    initials: 'MV',
    avatarGradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    impactMetric: '40 hrs',
    impactLabel: 'Saved Per Week',
    quote:
      'Their mastery of Next.js architecture and custom AI automation is second to none. They took our complex lead qualification workflows and automated them end-to-end, saving our operations team 40 hours every single week. True engineering partners.',
  },
];

const TRUST_STATS = [
  { value: '5.0 ★', label: 'Average Client Rating' },
  { value: '100%', label: 'On-Time Sprint Delivery' },
  { value: '99.99%', label: 'Production SLA & Uptime' },
  { value: '< 1.0s', label: 'First Contentful Paint' },
];

export function TestimonialsSection({ onOpenContact }: TestimonialsSectionProps) {
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Monitor scroll track state on mobile
  const checkScrollState = () => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollTrackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active card index based on card width + gap
    const card = scrollTrackRef.current.querySelector<HTMLElement>('.testimonial-card');
    if (card) {
      const cardWidthWithGap = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidthWithGap);
      setActiveIndex(Math.min(TESTIMONIALS.length - 1, Math.max(0, index)));
    }
  };

  useEffect(() => {
    setIsMounted(true);
    checkScrollState();
  }, []);

  const scrollNext = () => {
    if (!scrollTrackRef.current) return;
    const card = scrollTrackRef.current.querySelector<HTMLElement>('.testimonial-card');
    const scrollAmount = card ? card.offsetWidth + 16 : 300;
    scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    if (!scrollTrackRef.current) return;
    const card = scrollTrackRef.current.querySelector<HTMLElement>('.testimonial-card');
    const scrollAmount = card ? card.offsetWidth + 16 : 300;
    scrollTrackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollToCard = (index: number) => {
    if (!scrollTrackRef.current) return;
    const card = scrollTrackRef.current.querySelector<HTMLElement>('.testimonial-card');
    const cardWidthWithGap = card ? card.offsetWidth + 16 : 300;
    scrollTrackRef.current.scrollTo({
      left: cardWidthWithGap * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section-root"
      style={{
        background: '#ffffff',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div className="testimonials-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <motion.h2
            id="testimonials-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
            className="testimonials-heading-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 500,
              lineHeight: 1.18,
              letterSpacing: '-0.01em',
              color: '#0f0f11',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            WHAT OUR CLIENTS
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 600,
                marginTop: '0.6rem',
                letterSpacing: '0.02em',
              }}
            >
              SAY ABOUT US
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="testimonials-heading-sub"
            style={{
              fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
              lineHeight: 1.65,
              color: 'rgba(15, 15, 17, 0.65)',
              maxWidth: '38rem',
              margin: '1.85rem auto 0',
              padding: '0 0.75rem',
            }}
          >
            Real stories and verified feedback from founders and engineering leaders who partner with Swift Stack to build, launch, and scale high-performance products.
          </motion.p>
        </div>

        {/* Testimonials Container (Grid on Desktop, Horizontal Swipe Track on Mobile) */}
        <div
          ref={scrollTrackRef}
          onScroll={checkScrollState}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: 'easeOut',
              }}
              whileHover={{ y: -5 }}
              className="testimonial-card"
            >
              {/* Card Top: Stars + Verified Badge + Category */}
              <div className="card-top-row">
                <div className="stars-and-badge">
                  <div className="stars-row">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="#f59e0b"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="verified-badge">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified Client
                  </span>
                </div>

                <span className="category-pill">{item.category}</span>
              </div>

              {/* Impact Metric Badge */}
              <div className="impact-badge-container">
                <div className="impact-badge">
                  <span className="impact-metric">{item.impactMetric}</span>
                  <span className="impact-label">{item.impactLabel}</span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="quote-container">
                <span className="quote-mark">“</span>
                <p className="quote-text">{item.quote}</p>
              </div>

              {/* Card Footer: Author Info & Live Link */}
              <div className="card-footer-row">
                <div className="author-info-group">
                  <div
                    className="author-avatar"
                    style={{ background: item.avatarGradient }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="author-name">{item.name}</h3>
                    <p className="author-role">
                      {item.role} · <span className="author-company">{item.company}</span>
                    </p>
                  </div>
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-project-btn"
                  >
                    Visit Site ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Navigation Controls (Arrows + Dots) */}
        <div className="mobile-carousel-controls">
          {/* Dots Indicator */}
          <div className="mobile-carousel-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`mobile-dot ${activeIndex === i ? 'mobile-dot-active' : ''}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="mobile-carousel-arrows">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={isMounted ? !canScrollLeft : undefined}
              suppressHydrationWarning
              aria-label="Previous testimonial"
              className="mobile-arrow-btn"
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
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              type="button"
              onClick={scrollNext}
              disabled={isMounted ? !canScrollRight : undefined}
              suppressHydrationWarning
              aria-label="Next testimonial"
              className="mobile-arrow-btn"
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="trust-stats-ribbon"
        >
          {TRUST_STATS.map((stat, i) => (
            <div key={i} className="trust-stat-item">
              <div className="trust-stat-val">{stat.value}</div>
              <div className="trust-stat-lbl">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="testimonials-bottom-cta"
        >
          <div>
            <h4 className="testimonials-cta-title">Ready to build your next milestone?</h4>
            <p className="testimonials-cta-sub">
              Join forward-thinking founders and scale your digital presence with our engineering team.
            </p>
          </div>
          {onOpenContact && (
            <button onClick={onOpenContact} className="testimonials-cta-btn">
              Start Your Project ↗
            </button>
          )}
        </motion.div>
      </div>

      <style>{`
        .testimonials-section-root {
          padding: 5.5rem 0 6.5rem;
        }
        .testimonials-container {
          max-width: 74rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
        }
        .testimonials-heading-title {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
        }

        /* Testimonials Desktop Grid */
        .testimonials-grid {
          margin-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.75rem;
        }

        .testimonial-card {
          background-color: #fafafc;
          border: 1px solid rgba(15, 15, 17, 0.08);
          border-radius: 1.75rem;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .testimonial-card:hover {
          background-color: #ffffff;
          border-color: rgba(15, 15, 17, 0.18);
          box-shadow: 0 20px 40px -12px rgba(15, 15, 17, 0.08);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .stars-and-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .stars-row {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.6875rem;
          font-weight: 600;
          color: #059669;
          background-color: rgba(16, 185, 129, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
        }
        .category-pill {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(15, 15, 17, 0.55);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Impact Badge */
        .impact-badge-container {
          margin-top: 1.35rem;
        }
        .impact-badge {
          display: inline-flex;
          align-items: baseline;
          gap: 0.4rem;
          background: #ffffff;
          border: 1px solid rgba(15, 15, 17, 0.08);
          padding: 0.4rem 0.85rem;
          border-radius: 0.75rem;
        }
        .impact-metric {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0f0f11;
          letter-spacing: -0.02em;
        }
        .impact-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(15, 15, 17, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Quote */
        .quote-container {
          position: relative;
          margin: 1.5rem 0 2rem;
          flex-grow: 1;
        }
        .quote-mark {
          position: absolute;
          top: -1.75rem;
          left: -0.5rem;
          font-size: 4rem;
          font-family: Georgia, serif;
          line-height: 1;
          color: rgba(15, 15, 17, 0.08);
          pointer-events: none;
          user-select: none;
        }
        .quote-text {
          font-size: 0.985rem;
          line-height: 1.7;
          color: #1f2024;
          position: relative;
          z-index: 1;
          margin: 0;
        }

        /* Card Footer */
        .card-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(15, 15, 17, 0.08);
          gap: 1rem;
          flex-wrap: wrap;
        }
        .author-info-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .author-avatar {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
        }
        .author-name {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #0f0f11;
          margin: 0 0 0.2rem;
        }
        .author-role {
          font-size: 0.8125rem;
          color: rgba(15, 15, 17, 0.6);
          margin: 0;
        }
        .author-company {
          font-weight: 500;
          color: #0f0f11;
        }
        .visit-project-btn {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #0f0f11;
          text-decoration: none;
          background: #ffffff;
          border: 1px solid rgba(15, 15, 17, 0.15);
          padding: 0.45rem 0.9rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.2s ease;
        }
        .visit-project-btn:hover {
          background-color: #0f0f11;
          color: #ffffff;
          border-color: #0f0f11;
          transform: scale(1.04);
        }

        /* Mobile Controls (hidden by default on desktop) */
        .mobile-carousel-controls {
          display: none;
        }

        /* Trust Stats Ribbon */
        .trust-stats-ribbon {
          margin-top: 3.5rem;
          background-color: #f7f7fa;
          border: 1px solid rgba(15, 15, 17, 0.08);
          border-radius: 1.5rem;
          padding: 2rem 2.5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          text-align: center;
        }
        .trust-stat-val {
          font-size: clamp(1.5rem, 2.5vw, 2.15rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #0f0f11;
        }
        .trust-stat-lbl {
          font-size: 0.8125rem;
          font-weight: 500;
          color: rgba(15, 15, 17, 0.65);
          margin-top: 0.35rem;
        }

        /* Bottom CTA */
        .testimonials-bottom-cta {
          margin-top: 2rem;
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
        .testimonials-cta-title {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 0 0 0.35rem;
        }
        .testimonials-cta-sub {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          max-width: 32rem;
          line-height: 1.5;
        }
        .testimonials-cta-btn {
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
        .testimonials-cta-btn:hover {
          transform: scale(1.04);
          background-color: #f1f1f4;
        }

        /* Tablet Breakpoint (769px - 1024px) */
        @media (max-width: 1024px) and (min-width: 769px) {
          .testimonials-grid {
            gap: 1.25rem;
          }
          .testimonial-card {
            padding: 1.75rem 1.5rem;
          }
          .trust-stats-ribbon {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem 1rem;
            padding: 1.75rem 1.5rem;
          }
        }

        /* Mobile Breakpoint (< 768px): Horizontal Carousel with Arrow Navigation */
        @media (max-width: 768px) {
          .testimonials-section-root {
            padding: 3.5rem 0 4.5rem;
          }
          .testimonials-container {
            padding: 0 1.25rem;
          }

          /* Turn grid into horizontal swipe track */
          .testimonials-grid {
            margin-top: 2rem;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            gap: 1rem;
            padding: 0.5rem 0.25rem 1rem;
            scrollbar-width: none;
          }
          .testimonials-grid::-webkit-scrollbar {
            display: none;
          }

          .testimonial-card {
            flex: 0 0 86vw;
            max-width: 22rem;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            padding: 1.65rem 1.35rem;
            border-radius: 1.35rem;
          }
          .quote-text {
            font-size: 0.9375rem;
            line-height: 1.62;
          }
          .card-footer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .visit-project-btn {
            width: 100%;
            justify-content: center;
          }

          /* Show mobile carousel arrows + dots bar */
          .mobile-carousel-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 0.5rem;
            padding: 0 0.25rem;
          }
          .mobile-carousel-dots {
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }
          .mobile-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 9999px;
            background-color: rgba(15, 15, 17, 0.2);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: all 0.25s ease;
          }
          .mobile-dot-active {
            width: 1.75rem;
            background-color: #0f0f11;
          }

          .mobile-carousel-arrows {
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }
          .mobile-arrow-btn {
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 50%;
            border: 1px solid rgba(15, 15, 17, 0.18);
            background-color: #ffffff;
            color: #0f0f11;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          }
          .mobile-arrow-btn:active {
            background-color: #0f0f11;
            color: #ffffff;
            border-color: #0f0f11;
            transform: scale(0.96);
          }
          .mobile-arrow-btn:disabled {
            opacity: 0.35;
            cursor: not-allowed;
            pointer-events: none;
          }

          /* Trust Ribbon & CTA on Mobile */
          .trust-stats-ribbon {
            margin-top: 2.5rem;
            grid-template-columns: 1fr 1fr;
            padding: 1.5rem 1rem;
            border-radius: 1.25rem;
            gap: 1.25rem 0.75rem;
          }
          .trust-stat-val {
            font-size: 1.5rem;
          }
          .trust-stat-lbl {
            font-size: 0.75rem;
          }

          .testimonials-bottom-cta {
            padding: 1.75rem 1.25rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
            margin-top: 1.5rem;
          }
          .testimonials-cta-title {
            font-size: 1.25rem;
          }
          .testimonials-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
