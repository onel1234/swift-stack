'use client';
import { motion } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { TextReveal } from './ui/TextReveal';
import { useAppReady } from './AppContext';

const PROGRAMS = [
  { id: '01', name: 'Junior Development', desc: 'Fundamentals, footwork, and match play for ages 6–14.', href: '#junior' },
  { id: '02', name: 'Performance Squad', desc: 'High-volume training for competitive and ranked players.', href: '#performance' },
  { id: '03', name: 'Adult Clinics', desc: 'Small-group sessions to sharpen technique and fitness.', href: '#adult' },
  { id: '04', name: 'Private Coaching', desc: 'One-to-one sessions tailored to your goals and schedule.', href: '#private' }
];

export function ProgramsSection() {
  const isReady = useAppReady();

  return (
    <section id="programs" className="programs-sec" style={{ background: 'var(--surface)' }}>
      <Eyebrow tone="dark">Training programs</Eyebrow>
      <TextReveal
        as="h2" id="programs-title"
        text={['Built for', 'every level']}
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
            <motion.a 
              href={prog.href}
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.75rem 0',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--background)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <div style={{ width: '2.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink-soft)' }}>{prog.id}</div>
              <div style={{ flex: 1 }}>
                <div className="prog-name" style={{ fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{prog.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--ink-soft)' }}>{prog.desc}</div>
              </div>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--hairline)', display: 'grid', placeContent: 'center', color: 'var(--ink)' }}>
                <motion.svg 
                  variants={{ rest: { x: 0, opacity: 0.55 }, hover: { x: 8, opacity: 1 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </motion.svg>
              </div>
            </motion.a>
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
