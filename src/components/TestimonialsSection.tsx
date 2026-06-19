'use client';
import { motion } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { TextReveal } from './ui/TextReveal';
import { useAppReady } from './AppContext';

const TESTIMONIALS = [
  { quote: 'Working with Wathila and the team was a great experience from start to finish. He developed the website for Ceylon Naturalist with professionalism, creativity, and a strong understanding of our vision. His attention to detail, technical expertise, and willingness to accommodate our requirements resulted in a website that perfectly represents our brand and services.\n\nThroughout the project, communication was smooth, deadlines were met, and every challenge was handled efficiently. I highly recommend Wathila and his team to anyone looking for reliable, high-quality software and web development services.', name: 'Suneth Bashitha', role: 'Ceylon Naturalist' }
];

export function TestimonialsSection() {
  const isReady = useAppReady();

  return (
    <section id="testimonials" className="test-sec" style={{ background: 'var(--background)' }}>
      <Eyebrow tone="dark">Client feedback</Eyebrow>
      <TextReveal
        as="h2" id="testimonials-title"
        text={['Loved by ', 'our partners']}
        type="lines"
        isReady={isReady}
        style={{ fontSize: '3rem', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: '1rem', color: 'var(--ink)' }}
      />

      <ul className="test-grid" style={{ display: 'grid', gap: '1.25rem', marginTop: '3.5rem', maxWidth: '54rem', marginLeft: 'auto', marginRight: 'auto' }}>
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
              <blockquote style={{ fontSize: '1.125rem', lineHeight: 1.625, color: 'var(--ink)', marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
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
      `}</style>
    </section>
  );
}
