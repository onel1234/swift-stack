import React from 'react';
import Link from 'next/link';

export function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Blob */}
      <div className="blob" style={{
        width: '800px', height: '800px', background: 'rgba(6, 182, 212, 0.05)',
        top: '20%', right: '-300px'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="pill-badge" style={{ marginBottom: '24px', backgroundColor: 'transparent' }}>
            <span className="dot" style={{ backgroundColor: '#06b6d4' }}></span>
            Our Capabilities
          </div>
          <h2 className="headline-lg" style={{ color: 'var(--on-surface)' }}>Engineering Excellence</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--spacing-stack-md) auto 0' }}>
            We bridge the gap between visionary design and robust technical infrastructure.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-stack-lg)'
        }}>

          {/* Card 1 */}
          <Link href="/custom-web-development" className="service-card" style={{ textDecoration: 'none' }}>
            <div className="service-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="service-number">01</div>
            <h3 className="headline-sm service-title">Custom Web Development</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              Scalable, secure, and performant web applications built on modern technology stacks. We engineer solutions that grow with your business.
            </p>
            <div className="service-link">
              Explore Development <span>→</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/ui-ux-design" className="service-card" style={{ textDecoration: 'none' }}>
            <div className="service-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div className="service-number">02</div>
            <h3 className="headline-sm service-title">UI/UX Design</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              Intuitive, user-centric interfaces designed with kinetic logic and modern corporate minimalism to maximize engagement.
            </p>
            <div className="service-link">
              View Design Process <span>→</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/performance-optimization" className="service-card" style={{ textDecoration: 'none' }}>
            <div className="service-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div className="service-number">03</div>
            <h3 className="headline-sm service-title">Performance Optimization</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              Rigorous auditing and tuning to ensure lightning-fast load times and optimal core web vitals, converting visitors into clients.
            </p>
            <div className="service-link">
              Discover Optimization <span>→</span>
            </div>
          </Link>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .service-card {
          position: relative;
          background-color: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          padding: 48px 32px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          gap: 16px;
          cursor: pointer;
          z-index: 1;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(53, 37, 205, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0px 20px 40px rgba(53, 37, 205, 0.08);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background-color: var(--surface-container);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          transition: all 0.4s ease;
        }

        .service-card:hover .service-icon-wrapper {
          background-color: var(--primary);
          color: var(--on-primary);
          transform: scale(1.1);
        }

        .service-number {
          position: absolute;
          top: 24px;
          right: 24px;
          font-family: var(--font-family-primary);
          font-size: 80px;
          font-weight: 800;
          line-height: 1;
          color: var(--surface-container);
          transition: all 0.4s ease;
          z-index: -1;
        }

        .service-card:hover .service-number {
          color: rgba(53, 37, 205, 0.05);
          transform: translateX(-10px) translateY(10px);
        }

        .service-title {
          color: var(--on-surface);
          transition: color 0.3s ease;
        }

        .service-card:hover .service-title {
          color: var(--primary);
        }

        .service-link {
          margin-top: auto;
          padding-top: 24px;
          font-size: 14px;
          font-weight: 700;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
        }

        .service-card:hover .service-link {
          opacity: 1;
          transform: translateY(0);
        }

        .service-link span {
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-link span {
          transform: translateX(4px);
        }
      `}} />
    </section>
  );
}
