import React from 'react';
import { ButtonLink } from '../ui/Button';

export function Works() {
  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--surface-container-low)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div className="pill-badge" style={{ marginBottom: '24px', backgroundColor: 'var(--surface-container-lowest)' }}>
              <span className="dot" style={{ backgroundColor: 'var(--primary)' }}></span>
              Featured Projects
            </div>
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', maxWidth: '500px' }}>
              Work that speaks for itself.
            </h2>
          </div>
          <ButtonLink href="#work" variant="secondary" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
            View All Projects
          </ButtonLink>
        </div>

        <div className="works-grid-2col">
          
          {/* Project 1 */}
          <a href="https://ceylonnaturalist.com/" target="_blank" rel="noopener noreferrer" className="work-item group">
            <div className="work-image-wrapper">
              <iframe src="https://ceylonnaturalist.com/" className="work-iframe" title="Ceylon Naturalist Preview" tabIndex={-1} aria-hidden="true" />
              <div className="work-overlay">
                <div className="view-project-pill">Visit Live Site <span className="arrow">↗</span></div>
              </div>
            </div>
            <div className="work-content">
              <div className="work-meta">
                <span className="label-md">Eco & Wildlife Platform</span>
                <span className="year">2026</span>
              </div>
              <h3 className="headline-md work-title">Ceylon Naturalist</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '100%' }}>
                A digital gateway to Sri Lanka's rich biodiversity, featuring immersive storytelling and a comprehensive nature directory.
              </p>
            </div>
          </a>

          {/* Project 2 */}
          <a href="https://prana-fuel-your-vitality.netlify.app/" target="_blank" rel="noopener noreferrer" className="work-item group">
            <div className="work-image-wrapper">
              <iframe src="https://prana-fuel-your-vitality.netlify.app/" className="work-iframe" title="PRANA Preview" tabIndex={-1} aria-hidden="true" />
              <div className="work-overlay">
                <div className="view-project-pill">Visit Live Site <span className="arrow">↗</span></div>
              </div>
            </div>
            <div className="work-content">
              <div className="work-meta">
                <span className="label-md">Wellness E-Commerce</span>
                <span className="year">2026</span>
              </div>
              <h3 className="headline-md work-title">PRANA - Fuel Your Vitality</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '100%' }}>
                A premium e-commerce experience for holistic wellness products, designed with seamless checkout and a calming, earthy aesthetic.
              </p>
            </div>
          </a>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .works-grid-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        @media (max-width: 992px) {
          .works-grid-2col {
            grid-template-columns: 1fr;
          }
        }

        .work-item {
          display: flex;
          flex-direction: column;
          gap: 24px;
          cursor: pointer;
          text-decoration: none;
        }

        .work-image-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--surface-dim);
          isolation: isolate;
          aspect-ratio: 16 / 10;
        }

        .work-iframe {
          position: absolute;
          inset: 0;
          width: 400%;
          height: 400%;
          transform: scale(0.25);
          transform-origin: top left;
          border: none;
          pointer-events: none;
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          background-color: var(--surface-dim);
        }

        .work-item:hover .work-iframe {
          transform: scale(0.2625);
        }

        .work-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11, 28, 48, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 3;
        }

        .work-item:hover .work-overlay {
          opacity: 1;
        }

        .view-project-pill {
          background-color: rgba(255, 255, 255, 0.95);
          color: #000;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          backdrop-filter: blur(8px);
        }

        .work-item:hover .view-project-pill {
          transform: translateY(0);
          opacity: 1;
        }

        .view-project-pill .arrow {
          transition: transform 0.3s ease;
        }

        .view-project-pill:hover .arrow {
          transform: translate(4px, -4px);
        }

        .work-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .work-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--outline);
          border-bottom: 1px solid var(--outline-variant);
          padding-bottom: 12px;
        }

        .work-meta .year {
          font-family: monospace;
          font-size: 14px;
        }

        .work-title {
          color: var(--on-surface);
          transition: color 0.3s ease;
          display: inline-flex;
          width: fit-content;
        }

        .work-item:hover .work-title {
          color: var(--primary);
        }
      `}} />
    </section>
  );
}
