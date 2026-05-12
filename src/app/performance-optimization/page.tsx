import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';

export default function PerformanceOptimization() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ backgroundColor: 'var(--surface-container-low)', padding: 'var(--spacing-section-padding) 0', textAlign: 'center' }}>
          <div className="container">
            <h1 className="headline-xl" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-md)' }}>Performance Optimization</h1>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '700px', margin: '0 auto var(--spacing-stack-lg)' }}>
              Rigorous auditing and tuning to ensure lightning-fast load times and optimal core web vitals, converting visitors into clients.
            </p>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Optimize My Site</a>
          </div>
        </section>

        {/* Optimization Process */}
        <section className="section">
          <div className="container">
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Optimization Process</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-gutter)', textAlign: 'center' }}>
              {[
                { title: 'Audit', desc: 'Comprehensive analysis of existing bottlenecks.', icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /> },
                { title: 'Strategy', desc: 'Planning the architecture improvements.', icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> },
                { title: 'Implementation', desc: 'Executing code and asset optimizations.', icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
                { title: 'Testing', desc: 'Measuring against Core Web Vitals.', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
                { title: 'Monitoring', desc: 'Continuous tracking to maintain speeds.', icon: <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> }
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
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Optimization Benefits</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-gutter)' }}>
              {[
                { title: 'SEO Rankings', desc: 'Better search engine visibility driven by fast Core Web Vitals scores.', icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
                { title: 'Bounce Rate', desc: 'Keep users on your site by eliminating frustrating loading delays.', icon: <path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /> },
                { title: 'Conversions', desc: 'Faster sites directly correlate to higher engagement and sales.', icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                { title: 'Scalability', desc: 'Efficient resources allow your server to handle more simultaneous traffic.', icon: <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /> }
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
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-lg)', textAlign: 'center' }}>Optimization Portfolio</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-gutter)' }}>
              <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-base)', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3" alt="Performance Metrics" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>Global E-Commerce Sites</h3>
                  <div className="label-md" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Case Studies <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </a>

              <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-base)', marginBottom: 'var(--spacing-stack-sm)', border: '1px solid var(--outline-variant)' }}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" alt="Data Analytics" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-unit)', color: 'var(--on-surface)' }}>SaaS Application Tuning</h3>
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
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-stack-sm)' }}>Ready to speed up your site?</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-stack-lg)' }}>Let's discuss how our optimization experts can improve your metrics.</p>
            <a href="/#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
