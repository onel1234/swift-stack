import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { ContactModal } from '@/components/ui/ContactModal';

const projectsData: Record<string, { name: string; desc: string; liveUrl: string; details: string; industry: string }> = {
  'ceylon-naturalist': {
    name: 'Ceylon Naturalist',
    desc: 'Nature & Wildlife Platform',
    industry: 'E-Commerce & Wellness',
    liveUrl: 'https://ceylonnaturalist.com/',
    details: 'The client had a fragmented online presence with low conversion rates and an outdated e-commerce flow that failed to capture the premium essence of their brand. We engineered a bespoke, high-performance storefront. By integrating seamless UX with rich, immersive storytelling and optimized checkout flows, we elevated the entire customer journey.'
  },
  'chill-co': {
    name: 'Chill Co',
    desc: 'E-Commerce Storefront',
    industry: 'Retail',
    liveUrl: 'https://chill-co.vercel.app/',
    details: 'A seamless e-commerce experience for a growing retail brand. We focused on lightning-fast load times, beautiful product displays, and a frictionless checkout process to maximize conversions and user retention.'
  },
  'catalyst-digital': {
    name: 'Catalyst Digital',
    desc: 'Digital Agency',
    industry: 'Technology & Services',
    liveUrl: 'https://catalyst-digital-alpha.vercel.app/',
    details: 'Catalyst Digital needed a stunning, high-performance agency website to showcase their work and attract premium clients. We built a dynamic, motion-rich experience that highlights their capabilities and drives client engagement.'
  },
  'prana-fuel': {
    name: 'Prana Fuel',
    desc: 'Health & Fitness',
    industry: 'Health & Fitness',
    liveUrl: 'https://prana-fuel-your-vitality.netlify.app/',
    details: 'Prana Fuel required a high-energy digital experience to launch their new product line. Their previous landing pages were slow and lacked visual impact. We built a vibrant, motion-rich web application focused on maximum performance and engagement to perfectly match their brand\'s kinetic energy.'
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.id];

  if (!project) {
    notFound();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {project.name}
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--outline)' }}></span>
              <span style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
                {project.industry}
              </span>
            </div>
            
            <h1 className="headline-xl" style={{ marginBottom: '32px' }}>
              {project.desc}
            </h1>
            
            <div style={{ 
              backgroundColor: 'var(--surface-container-high)',
              padding: '40px',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'left',
              marginBottom: '48px',
              border: '1px solid var(--outline-variant)'
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: 'var(--on-surface)' }}>About the Project</h2>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8 }}>
                {project.details}
              </p>
            </div>
            
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontSize: '18px' }}
            >
              Visit Live Website <span style={{ marginLeft: '8px' }}>↗</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
