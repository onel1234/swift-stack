"use client";

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 'ceylon-naturalist',
    client: 'Ceylon Naturalist',
    industry: 'E-Commerce & Wellness',
    title: 'Scaling a Boutique Nature Brand to Global Markets',
    challenge: 'The client had a fragmented online presence with low conversion rates and an outdated e-commerce flow that failed to capture the premium essence of their brand.',
    solution: 'We engineered a bespoke, high-performance storefront. By integrating seamless UX with rich, immersive storytelling and optimized checkout flows, we elevated the entire customer journey.',
    results: [
      { metric: '+150%', label: 'Conversion Rate' },
      { metric: '-40%', label: 'Bounce Rate' },
      { metric: '2.5x', label: 'Avg Order Value' }
    ],
    testimonial: {
      quote: "The new platform completely transformed our business. We're seeing sales numbers we didn't think were possible this early on.",
      author: "Founder, Ceylon Naturalist"
    },
    url: 'https://ceylonnaturalist.com/',
    tags: ['E-Commerce', 'Brand Identity', 'Conversion Optimization']
  },
  {
    id: 'prana-fuel',
    client: 'Prana Fuel',
    industry: 'Health & Fitness',
    title: 'Igniting Digital Engagement for a Wellness Startup',
    challenge: 'Prana Fuel needed a high-energy digital experience to launch their new product line, but their existing landing pages were slow and lacked visual impact, leading to high bounce rates.',
    solution: 'We built a vibrant, motion-rich web application focused on maximum performance and engagement. Leveraging modern animations and an aggressive optimization strategy, we delivered a lightning-fast experience.',
    results: [
      { metric: '< 1s', label: 'Page Load Time' },
      { metric: '+210%', label: 'User Engagement' },
      { metric: '4.8x', label: 'ROI on Ad Spend' }
    ],
    testimonial: {
      quote: "Their team didn't just build a website; they built an engine for our growth. The kinetic energy of the site perfectly matches our brand.",
      author: "Marketing Director, Prana Fuel"
    },
    url: 'https://prana-fuel-your-vitality.netlify.app/',
    tags: ['Web Application', 'Motion Design', 'Performance Tuning']
  }
];

export default function WorkPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="pill-badge" style={{ marginBottom: '24px' }}>
              <span className="dot"></span>
              Client Success Stories
            </div>
            <h1 className="headline-xl" style={{ marginBottom: '24px' }}>
              We don't just build websites.<br />
              <span className="hero-gradient-text">We build businesses.</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--on-surface-variant)' }}>
              Beautiful design is only half the equation. Explore how we combine visionary aesthetics with rigorous engineering to drive measurable growth, increase conversions, and deliver exceptional ROI for our partners.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '64px',
                  alignItems: 'center',
                }}
              >
                <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {study.client}
                    </span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--outline)' }}></span>
                    <span style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="headline-lg" style={{ marginBottom: '24px' }}>{study.title}</h2>
                  
                  {/* Metrics Grid */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '16px', 
                    marginBottom: '32px',
                    padding: '24px',
                    backgroundColor: 'var(--surface-container-lowest)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--outline-variant)'
                  }}>
                    {study.results.map((result, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary)', marginBottom: '4px', fontFamily: 'var(--font-family-primary)' }}>
                          {result.metric}
                        </div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--on-surface)' }}>The Challenge</h4>
                    <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{study.challenge}</p>
                  </div>
                  
                  <div style={{ marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--on-surface)' }}>The Solution</h4>
                    <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{study.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div style={{ 
                    borderLeft: '4px solid var(--primary)', 
                    paddingLeft: '20px', 
                    marginBottom: '32px',
                    fontStyle: 'italic' 
                  }}>
                    <p className="body-lg" style={{ color: 'var(--on-surface)', marginBottom: '12px' }}>"{study.testimonial.quote}"</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--on-surface-variant)' }}>— {study.testimonial.author}</p>
                  </div>

                  <a 
                    href={study.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    View Live Project <span style={{ marginLeft: '8px' }}>↗</span>
                  </a>
                </div>
                
                <div style={{ 
                  order: index % 2 === 1 ? 1 : 2,
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--surface-container-high)',
                  border: '1px solid var(--outline-variant)',
                  boxShadow: 'var(--shadow-elevated)'
                }}>
                  {/* Browser Mockup Header */}
                  <div style={{ 
                    height: '40px', 
                    backgroundColor: 'var(--surface-container-highest)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 20px',
                    gap: '8px',
                    borderBottom: '1px solid var(--outline-variant)'
                  }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>
                  
                  {/* Live Preview Iframe */}
                  <div style={{ width: '100%', height: 'calc(100% - 40px)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ 
                      position: 'absolute',
                      width: '400%',
                      height: '400%',
                      transform: 'scale(0.25)',
                      transformOrigin: 'top left',
                      pointerEvents: 'none' /* Prevent interaction inside preview */
                    }}>
                      <iframe 
                        src={study.url}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        sandbox="allow-scripts allow-same-origin"
                        scrolling="no"
                        title={`${study.title} Preview`}
                      />
                    </div>
                    {/* Overlay */}
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.1) 100%)',
                      pointerEvents: 'none' 
                    }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="work-cta-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              textAlign: 'center', 
              marginTop: '120px',
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-xl)',
              color: 'var(--on-primary)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background design element */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
              borderRadius: '50%',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="headline-md" style={{ marginBottom: '16px' }}>Want these kinds of results?</h2>
              <p className="body-lg" style={{ marginBottom: '32px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 32px auto' }}>
                Stop losing customers to slow, poorly designed websites. Let's engineer a solution that drives real revenue for your business.
              </p>
              <a href="/#contact" className="btn btn-secondary work-cta-btn" style={{ backgroundColor: 'var(--on-primary)', color: 'var(--primary)', borderColor: 'var(--on-primary)' }}>
                Start Your Transformation
              </a>
            </div>
          </motion.div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .work-cta-block {
            padding: 64px;
          }
          @media(max-width: 768px) {
            .work-cta-block {
              padding: 32px 16px;
              margin-top: 64px !important;
            }
            .work-cta-btn {
              width: 100%;
            }
          }
          `
        }} />
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
