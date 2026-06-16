'use client';
import { motion } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { TextReveal } from './ui/TextReveal';
import { useAppReady } from './AppContext';

const TESTIMONIALS = [
  { quote: 'I added a level to my serve in one season. The coaching is detailed and it actually sticks.', name: 'Priya Anand', role: 'Performance Squad' },
  { quote: 'Best courts in the city and a team that treats every member like a competitor.', name: 'Lukas Brenner', role: 'Adult Clinics' },
  { quote: 'My daughter went from shy beginner to club champion. Worth every minute.', name: 'Dana Okafor', role: 'Parent, Junior Development' }
];

export function TestimonialsSection() {
  const isReady = useAppReady();

  return (
    <section id="testimonials" className="test-sec" style={{ background: 'var(--background)' }}>
      <Eyebrow tone="dark">What players say</Eyebrow>
      <TextReveal
        as="h2" id="testimonials-title"
        text={['Loved by', 'the locker room']}
        type="lines"
        isReady={isReady}
        style={{ fontSize: '3rem', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: '1rem', color: 'var(--ink)' }}
      />

      <ul className="test-grid" style={{ display: 'grid', gap: '1.25rem', marginTop: '3.5rem' }}>
        {TESTIMONIALS.map((test, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 180, damping: 26 }}
            whileHover={{ y: -8 }}
            style={{ 
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', 
              borderRadius: 'var(--radius-card)', background: 'var(--surface)', padding: '1.75rem' 
            }}
          >
            <div>
              <div style={{ fontSize: '2.25rem', color: 'var(--brand)', lineHeight: 1, fontWeight: 500 }}>&ldquo;</div>
              <blockquote style={{ fontSize: '1.125rem', lineHeight: 1.625, color: 'var(--ink)', marginTop: '1rem' }}>
                {test.quote}
              </blockquote>
            </div>
            <figcaption style={{ borderTop: '1px solid var(--hairline)', paddingTop: '1rem', marginTop: '1.5rem' }}>
              <div style={{ fontWeight: 500, color: 'var(--ink)' }}>{test.name}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--ink-soft)', marginTop: '0.25rem' }}>{test.role}</div>
            </figcaption>
          </motion.li>
        ))}
      </ul>
      <style>{`
        .test-sec { padding: 5rem 1.5rem; }
        .test-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) {
          .test-sec { padding: 6rem 2.5rem; }
        }
        @media (min-width: 768px) {
          .test-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
