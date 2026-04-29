import React from 'react';

export function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--surface)', position: 'relative', overflow: 'hidden', paddingBottom: '160px' }}>

      {/* Background ambient glow */}
      <div className="blob" style={{
        width: '600px', height: '600px', background: 'rgba(53, 37, 205, 0.04)',
        bottom: '-100px', left: '-200px'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="pill-badge" style={{ marginBottom: '24px', backgroundColor: 'var(--surface-container-low)' }}>
            <span className="dot" style={{ backgroundColor: '#06b6d4' }}></span>
            Testimonials
          </div>
          <h2 className="headline-lg" style={{ color: 'var(--on-surface)' }}>Client Voices</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '16px auto 0' }}>
            Don't just take our word for it. Here's what industry leaders have to say about our engineering and design capabilities.
          </p>
        </div>

        <div className="testimonial-grid">

          {/* Card 1 */}
          <div className="testimonial-card">
            <div className="quote-watermark">"</div>
            <div className="card-content">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)" opacity="0.8" xmlns="http://www.w3.org/O/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="body-lg quote-text">
                Swift Stack completely overhauled our platform architecture. The rigorous approach to performance optimization resulted in a 40% increase in conversions.
              </p>
              <div className="author-block">
                <div className="avatar avatar-1"></div>
                <div className="author-info">
                  <span className="headline-sm author-name">Rehan Ahamed</span>
                  <span className="label-md author-role">Owner, Prana health</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Offset */}
          <div className="testimonial-card offset">
            <div className="quote-watermark">"</div>
            <div className="card-content">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)" opacity="0.8" xmlns="http://www.w3.org/O/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="body-lg quote-text">
                The team's dedication to modern minimalism perfectly captured our brand identity. A seamless execution from initial design to final deployment.
              </p>
              <div className="author-block">
                <div className="avatar avatar-2"></div>
                <div className="author-info">
                  <span className="headline-sm author-name">Suneth Weerapuli</span>
                  <span className="label-md author-role">Director of Digital, Ceylon Naturalist travels and tours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
          align-items: start;
        }

        @media(min-width: 900px) {
          .testimonial-card.offset {
            margin-top: 80px;
          }
        }

        .testimonial-card {
          position: relative;
          background-color: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          padding: 56px 48px;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 1;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(53, 37, 205, 0.03) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .testimonial-card:hover {
          transform: translateY(-12px);
          border-color: rgba(53, 37, 205, 0.3);
          box-shadow: 0 30px 60px rgba(53, 37, 205, 0.08);
        }

        .testimonial-card:hover::before {
          opacity: 1;
        }

        .quote-watermark {
          position: absolute;
          top: -10px;
          right: 30px;
          font-size: 240px;
          line-height: 1;
          font-family: Georgia, serif;
          color: var(--surface-dim);
          opacity: 0.3;
          z-index: -1;
          transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .testimonial-card:hover .quote-watermark {
          color: var(--primary);
          opacity: 0.08;
          transform: rotate(8deg) scale(1.1) translateX(10px);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
        }

        .stars {
          display: flex;
          gap: 4px;
        }

        .quote-text {
          color: var(--on-surface);
          font-size: 20px;
          line-height: 1.6;
          font-weight: 500;
        }

        .author-block {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 16px;
          padding-top: 32px;
          border-top: 1px solid var(--outline-variant);
        }

        .avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid var(--surface-container-lowest);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Abstract avatar placeholders */
        .avatar-1 {
          background: linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%);
        }

        .avatar-2 {
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          color: var(--on-surface);
          font-size: 18px;
        }

        .author-role {
          color: var(--outline);
          letter-spacing: 0.05em;
        }

        @media(max-width: 768px) {
          .testimonial-card {
            padding: 32px 24px;
          }
          .quote-watermark {
            font-size: 160px;
            right: 10px;
            top: -5px;
          }
          .quote-text {
            font-size: 16px;
          }
          .card-content {
            gap: 20px;
          }
          .author-block {
            padding-top: 20px;
          }
        }
      `}} />
    </section>
  );
}
