'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { TextReveal } from './ui/TextReveal';
import { useAppReady } from './AppContext';

const PROGRAMS = [
  { id: '01', name: 'Web Development', desc: 'Custom, high-performance web applications built for scale and speed.', details: 'We build scalable, robust web applications using modern frameworks. Our expertise includes React, Next.js, Node.js, and serverless architectures tailored to your unique business requirements.' },
  { id: '02', name: 'SEO & Growth', desc: 'Data-driven search strategies to dominate rankings and drive organic traffic.', details: 'Our SEO strategies are built on deep technical audits, content optimization, and high-authority link building to ensure you rank #1 for the keywords that matter most to your bottom line.' },
  { id: '03', name: 'AI Integration', desc: 'Intelligent automation and machine learning models tailored to your business.', details: 'Leverage the power of generative AI and machine learning to automate workflows, build custom chatbots, and derive predictive insights from your proprietary data.' },
  { id: '04', name: 'Cloud Services', desc: 'Secure, scalable, and resilient cloud infrastructure deployment.', details: 'We design and manage cloud architectures on AWS, GCP, and Azure. From CI/CD pipelines to containerized microservices, we ensure 99.99% uptime and enterprise-grade security.' }
];

export function ProgramsSection() {
  const isReady = useAppReady();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="programs" className="programs-sec" style={{ background: 'var(--surface)' }}>
      <Eyebrow tone="dark">Core Capabilities</Eyebrow>
      <TextReveal
        as="h2" id="programs-title"
        text={['Built for', 'scale & impact']}
        type="lines"
        isReady={isReady}
        style={{ fontSize: '3rem', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: '1rem', color: 'var(--ink)' }}
      />

      <ul style={{ marginTop: '3.5rem' }}>
        {PROGRAMS.map((prog, i) => (
          <motion.li
            key={prog.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.09, type: 'spring', stiffness: 190, damping: 26 }}
            style={{ 
              borderTop: '1px solid var(--hairline)', 
              borderBottom: i === PROGRAMS.length - 1 ? '1px solid var(--hairline)' : 'none' 
            }}
          >
            <div 
              onClick={() => setExpanded(expanded === prog.id ? null : prog.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.75rem 0',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--background)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '2.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink-soft)' }}>{prog.id}</div>
                <div style={{ flex: 1 }}>
                  <div className="prog-name" style={{ fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{prog.name}</div>
                </div>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--hairline)', display: 'grid', placeContent: 'center', color: 'var(--ink)' }}>
                  <motion.div 
                    animate={{ rotate: expanded === prog.id ? 45 : 0 }} 
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{ display: 'flex' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25rem', height: '1.25rem' }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              <AnimatePresence>
                {expanded === prog.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ paddingLeft: '4rem', paddingTop: '1rem', paddingBottom: '0.5rem', color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: '44rem' }}>
                      <div style={{ fontWeight: 500, marginBottom: '0.5rem', color: 'var(--ink)' }}>{prog.desc}</div>
                      <div style={{ fontSize: '0.875rem' }}>{prog.details}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.li>
        ))}
      </ul>
      <style>{`
        .programs-sec { padding: 6rem 1.5rem; }
        .prog-name { font-size: 1.5rem; }
        @media (min-width: 640px) {
          .programs-sec { padding: 6rem 2.5rem; }
          .prog-name { font-size: 1.875rem; }
        }
      `}</style>
    </section>
  );
}
