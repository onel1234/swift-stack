import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';

export default function UIUXDesign() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ backgroundColor: 'var(--surface-container-low)', padding: 'var(--spacing-section-padding) 0', textAlign: 'center' }}>
          <div className="container">
            <h1 className="headline-xl" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-md)' }}>UI/UX Design</h1>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '700px', margin: '0 auto var(--spacing-stack-lg)' }}>
              Intuitive, user-centric interfaces designed with kinetic logic and modern corporate minimalism to maximize engagement and conversion.
            </p>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Start a Design Project</a>
          </div>
        </section>

        {/* Design Process */}
        <section className="section">
          <div className="container">
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Design Process</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-gutter)', textAlign: 'center' }}>
              {[
                { title: 'Research', desc: 'Understanding your users and business goals.', icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
                { title: 'Wireframing', desc: 'Structuring layout and user journey.', icon: <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /> },
                { title: 'Prototyping', desc: 'Creating interactive design models.', icon: <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /> },
                { title: 'Visual Design', desc: 'Applying brand identity and aesthetics.', icon: <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /> },
                { title: 'Validation', desc: 'Testing with real users to ensure usability.', icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> }
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
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Value Driven Design</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-gutter)' }}>
              {[
                { title: 'User Retention', desc: 'Engaging interfaces that keep users coming back, reducing churn.', icon: <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /> },
                { title: 'Brand Identity', desc: 'Consistent visual language that elevates your market presence.', icon: <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
                { title: 'Accessibility', desc: 'Inclusive design practices ensuring usability for all audiences.', icon: <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
                { title: 'Conversion Rate', desc: 'Strategic layouts built to drive user action and increase ROI.', icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> }
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
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Design Portfolio</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-gutter)' }}>
              <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-base)', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3" alt="Brand Identity" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>Brand Identity Systems</h3>
                  <div className="label-md" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Case Studies <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </a>

              <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-base)', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3" alt="UX Interface" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>Digital Product Interfaces</h3>
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
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-sm)' }}>Let's create something beautiful</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-stack-lg)' }}>Transform your ideas into engaging user experiences with our design team.</p>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
