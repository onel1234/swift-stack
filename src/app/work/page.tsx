"use client";

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'ceylon-naturalist',
    title: 'Ceylon Naturalist',
    description: 'A bespoke platform crafted for nature enthusiasts, blending seamless e-commerce with rich storytelling. Designed to evoke the pristine beauty of nature while driving conversions.',
    url: 'https://ceylonnaturalist.com/',
    tags: ['E-Commerce', 'Brand Identity', 'UI/UX Design']
  },
  {
    id: 'prana-fuel',
    title: 'Prana Fuel',
    description: 'A high-energy, vibrant digital experience for a wellness brand. Built for maximum performance and engagement, featuring dynamic animations and a modern aesthetic.',
    url: 'https://prana-fuel-your-vitality.netlify.app/',
    tags: ['Web Application', 'Wellness', 'Motion Design']
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
              Our Portfolio
            </div>
            <h1 className="headline-xl" style={{ marginBottom: '24px' }}>
              Crafting <span className="hero-gradient-text">Digital Excellence</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--on-surface-variant)' }}>
              Explore our selected works where visionary design meets robust engineering. We don't just build websites; we create immersive digital experiences that elevate brands.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '48px',
                  alignItems: 'center',
                  backgroundColor: 'var(--surface-container-lowest)',
                  padding: '48px',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--outline-variant)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ 
                        fontSize: '12px', 
                        fontWeight: 600, 
                        padding: '6px 16px', 
                        backgroundColor: 'var(--surface-container)', 
                        color: 'var(--primary)',
                        borderRadius: 'var(--radius-full)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="headline-lg" style={{ marginBottom: '16px' }}>{project.title}</h2>
                  <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
                    {project.description}
                  </p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    Visit Live Site <span style={{ marginLeft: '8px' }}>↗</span>
                  </a>
                </div>
                
                <div style={{ 
                  order: index % 2 === 1 ? 1 : 2,
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--surface-container-high)',
                  border: '1px solid var(--outline-variant)'
                }}>
                  {/* Browser Mockup Header */}
                  <div style={{ 
                    height: '32px', 
                    backgroundColor: 'var(--surface-container-highest)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    gap: '6px',
                    borderBottom: '1px solid var(--outline-variant)'
                  }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>
                  
                  {/* Live Preview Iframe */}
                  <div style={{ width: '100%', height: 'calc(100% - 32px)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ 
                      position: 'absolute',
                      width: '400%',
                      height: '400%',
                      transform: 'scale(0.25)',
                      transformOrigin: 'top left',
                      pointerEvents: 'none' /* Prevent interaction inside preview */
                    }}>
                      <iframe 
                        src={project.url}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        sandbox="allow-scripts allow-same-origin"
                        scrolling="no"
                        title={`${project.title} Preview`}
                      />
                    </div>
                    {/* Overlay to prevent interaction and add a subtle gradient if needed */}
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.05) 100%)',
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
              <h2 className="headline-md" style={{ marginBottom: '16px' }}>Ready to start your next project?</h2>
              <p className="body-lg" style={{ marginBottom: '32px', opacity: 0.9, maxWidth: '500px', margin: '0 auto 32px auto' }}>
                Let's collaborate to build something extraordinary. We're currently accepting new clients.
              </p>
              <a href="/#contact" className="btn btn-secondary work-cta-btn" style={{ backgroundColor: 'var(--on-primary)', color: 'var(--primary)', borderColor: 'var(--on-primary)' }}>
                Get in Touch
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
