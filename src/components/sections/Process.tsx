import React from 'react';
import { ButtonLink } from '../ui/Button';

export function Process() {
  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--surface-container-low)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div className="pill-badge" style={{ marginBottom: '24px', backgroundColor: 'var(--surface-container-lowest)' }}>
              <span className="dot" style={{ backgroundColor: 'var(--primary)' }}></span>
              Our Methodology
            </div>
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', maxWidth: '500px' }}>
              How we build the future.
            </h2>
          </div>
          <ButtonLink href="#contact" variant="secondary" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
            Start Your Project
          </ButtonLink>
        </div>

        <div className="process-grid">
          
          {/* Step 1 */}
          <div className="process-card">
            <div className="process-step-number">01</div>
            <div className="process-content">
              <h3 className="headline-md process-title">Discovery & Strategy</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                We dive deep into your business objectives, target audience, and market landscape. This foundational phase ensures every technical and design decision aligns with your goals.
              </p>
            </div>
            <div className="process-line"></div>
          </div>

          {/* Step 2 */}
          <div className="process-card">
            <div className="process-step-number">02</div>
            <div className="process-content">
              <h3 className="headline-md process-title">UI/UX Design</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Our design team crafts high-fidelity wireframes and interactive prototypes. We focus on kinetic interactions, premium typography, and conversion-optimized user flows.
              </p>
            </div>
            <div className="process-line"></div>
          </div>

          {/* Step 3 */}
          <div className="process-card">
            <div className="process-step-number">03</div>
            <div className="process-content">
              <h3 className="headline-md process-title">Engineering</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Using modern stacks like React and Next.js, our developers build scalable, secure, and lightning-fast architectures. We write clean, maintainable code for the long term.
              </p>
            </div>
            <div className="process-line"></div>
          </div>

          {/* Step 4 */}
          <div className="process-card">
            <div className="process-step-number">04</div>
            <div className="process-content">
              <h3 className="headline-md process-title">Launch & Scale</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                After rigorous QA testing and performance audits, we deploy your project. We don't just hand over the keys; we ensure your platform is primed for growth.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px 24px;
          }
          .process-card:nth-child(2) .process-line {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .process-line {
            display: none;
          }
        }

        .process-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .process-step-number {
          font-family: var(--font-family-primary);
          font-size: 48px;
          font-weight: 800;
          line-height: 1;
          color: var(--surface-container-highest);
          transition: color 0.4s ease, transform 0.4s ease;
        }

        .process-card:hover .process-step-number {
          color: var(--primary);
          transform: translateY(-8px);
        }

        .process-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .process-title {
          color: var(--on-surface);
        }

        .process-line {
          position: absolute;
          top: 24px;
          left: 60px;
          right: -24px;
          height: 1px;
          background: linear-gradient(90deg, var(--outline-variant) 0%, transparent 100%);
          z-index: 1;
        }

        .process-card:hover .process-line {
          background: linear-gradient(90deg, var(--primary) 0%, transparent 100%);
        }
      `}} />
    </section>
  );
}
