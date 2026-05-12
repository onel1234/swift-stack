import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';

export default function CustomWebDevelopment() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ backgroundColor: 'var(--surface-container-low)', padding: 'var(--spacing-section-padding) 0', textAlign: 'center' }}>
          <div className="container">
            <h1 className="headline-xl" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-md)' }}>Custom Web Development</h1>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '700px', margin: '0 auto var(--spacing-stack-lg)' }}>
              We build scalable, secure, and performant web applications engineered to solve complex business challenges and drive digital transformation.
            </p>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Start a Project</a>
          </div>
        </section>

        {/* Engineering Workflow */}
        <section className="section">
          <div className="container">
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Engineering Workflow</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-gutter)', textAlign: 'center' }}>
              {[
                { title: 'Discovery', desc: 'Requirement analysis and architecture planning.', icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
                { title: 'Design', desc: 'UX/UI prototyping and system design.', icon: <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                { title: 'Development', desc: 'Agile implementation of core features.', icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
                { title: 'Testing', desc: 'Rigorous QA, security, and performance audits.', icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                { title: 'Launch', desc: 'Deployment and continuous integration.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" /> }
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--surface-container)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {step.icon}
                    </svg>
                  </div>
                  <h3 className="headline-sm" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>{step.title}</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Advantages */}
        <section className="section" style={{ backgroundColor: 'var(--surface-bright)' }}>
          <div className="container">
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Core Advantages</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-gutter)' }}>
              {[
                { title: 'Scalability', desc: 'Architectures built to handle exponential growth and traffic spikes seamlessly.', icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
                { title: 'Security', desc: 'Enterprise-grade protection with robust data encryption and compliance.', icon: <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> },
                { title: 'Performance', desc: 'Optimized codebases ensuring lightning-fast load times and responsiveness.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" /> },
                { title: 'Maintenance', desc: 'Clean, documented code for easy long-term support and feature additions.', icon: <><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> }
              ].map((benefit, idx) => (
                <div key={idx} className="card">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 'var(--spacing-stack-sm)' }}>
                    {benefit.icon}
                  </svg>
                  <h3 className="headline-sm" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>{benefit.title}</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section">
          <div className="container">
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Featured Work</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-gutter)' }}>
              <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-base)', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" alt="FinTech Analytics" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>Enterprise Web Applications</h3>
                  <div className="label-md" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Case Studies <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </a>

              <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-base)', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3" alt="Enterprise Logistics" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>High-Performance E-Commerce</h3>
                  <div className="label-md" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Case Studies <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" style={{ backgroundColor: 'var(--surface-container)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-sm)' }}>Ready to build something extraordinary?</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-stack-lg)' }}>Let's discuss how our engineering team can bring your vision to life.</p>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
