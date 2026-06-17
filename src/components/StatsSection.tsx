'use client';
import { motion } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { TextReveal } from './ui/TextReveal';
import { useAppReady } from './AppContext';

const STATS = [
  { value: '3x', label: 'Average Traffic Growth' },
  { value: '45%', label: 'Higher Conversion Rates' },
  { value: '60%', label: 'Faster Application Speeds' },
  { value: '99.9%', label: 'System Reliability' }
];

export function StatsSection() {
  const isReady = useAppReady();

  return (
    <section className="stats-sec" style={{ background: 'var(--brand-deep)', color: 'white', borderRadius: 'var(--radius-card-lg)', marginTop: '0.75rem' }}>
      <Eyebrow tone="light">By the numbers</Eyebrow>
      <TextReveal
        as="h2" id="stats-title"
        text={['Metrics that', 'matter most']}
        type="lines"
        isReady={isReady}
        style={{ fontSize: '3rem', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: '1rem' }}
      />

      <dl className="stats-grid" style={{ display: 'grid', columnGap: '2rem', rowGap: '3rem', marginTop: '4rem' }}>
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.11, type: 'spring', stiffness: 180, damping: 24 }}
            style={{ borderTop: '1px solid color-mix(in srgb, white 20%, transparent)', paddingTop: '1.25rem' }}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd style={{ margin: 0 }}>
              <div className="stat-val" style={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '0.875rem', color: 'color-mix(in srgb, white 65%, transparent)', marginTop: '0.75rem' }}>{stat.label}</div>
            </dd>
          </motion.div>
        ))}
      </dl>
      <style>{`
        .stats-sec { padding: 5rem 1.5rem; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .stat-val { font-size: 3.75rem; }
        @media (min-width: 640px) {
          .stats-sec { padding: 5rem 2.5rem; }
          .stat-val { font-size: 4.5rem; }
        }
        @media (min-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
