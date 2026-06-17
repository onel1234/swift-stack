'use client';
import { motion } from 'framer-motion';
import { TextReveal } from './ui/TextReveal';

export function FacilitiesSection() {
  const pText = "Browse our portfolio of high-performance web applications, scalable cloud infrastructures, and data-driven SEO campaigns designed to elevate your brand.";

  return (
    <section id="facilities" className="fac-sec" style={{ background: 'var(--background)', borderRadius: 'var(--radius-card-lg)', marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
      <div className="fac-grid" style={{ display: 'grid', gap: '2.5rem' }}>
        
        {/* Intro column */}
        <div style={{ maxWidth: '24rem' }}>
          <motion.img
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop"
            alt="Lead Developer"
            style={{ width: '4rem', height: '4rem', borderRadius: 'var(--radius-card)', objectFit: 'cover' }}
          />
          <TextReveal
            as="h2" id="facilities-title"
            text={['Featured', 'Case', 'Studies']}
            type="lines"
            stagger={0.12}
            style={{ fontSize: '3rem', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: '1.5rem', color: 'var(--ink)' }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.028, delayChildren: 0.25 } },
              hidden: {}
            }}
            style={{ fontSize: '0.875rem', color: 'var(--ink-soft)', maxWidth: '20rem', marginTop: '1.5rem', lineHeight: 1.6, display: 'flex', flexWrap: 'wrap' }}
          >
            {pText.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
                }}
                style={{ marginRight: '0.25em', display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Court cards */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.25rem' }}>
          
          <motion.figure
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0, type: 'spring', stiffness: 180, damping: 26 }}
            whileHover="hover"
            style={{ flex: 1, aspectRatio: '3/4', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--surface)', position: 'relative' }}
          >
            <motion.img 
              variants={{ hover: { scale: 1.03 } }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" 
              alt="Fintech Dashboard" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', left: '0.75rem', right: '0.75rem', bottom: '0.75rem', borderRadius: '0.75rem', background: 'color-mix(in srgb, var(--brand-deep) 40%, transparent)', color: 'white', backdropFilter: 'blur(4px)', padding: '0.75rem 1rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Fintech Dashboard</div>
              <div style={{ fontSize: '0.65rem', opacity: 0.85, marginTop: '0.25rem', lineHeight: 1.4 }}>A real-time financial analytics dashboard built with React and Node.js.</div>
            </div>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.14, type: 'spring', stiffness: 180, damping: 26 }}
            whileHover="hover"
            style={{ flex: 1, aspectRatio: '3/4', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--surface)', position: 'relative', marginBottom: '2rem' }}
          >
            <motion.img 
              variants={{ hover: { scale: 1.03 } }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=400&auto=format&fit=crop" 
              alt="E-Commerce Platform" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', left: '0.75rem', right: '0.75rem', bottom: '0.75rem', borderRadius: '0.75rem', background: 'color-mix(in srgb, var(--accent-teal) 55%, transparent)', color: 'white', backdropFilter: 'blur(4px)', padding: '0.75rem 1rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>E-Commerce Platform</div>
              <div style={{ fontSize: '0.65rem', opacity: 0.85, marginTop: '0.25rem', lineHeight: 1.4 }}>A headless e-commerce solution driving a 40% increase in conversions.</div>
            </div>
          </motion.figure>

        </div>
      </div>
      <style>{`
        .fac-sec { padding: 4rem 1.5rem 5rem; }
        .fac-grid { grid-template-columns: 1fr; align-items: end; }
        @media (min-width: 640px) {
          .fac-sec { padding: 4rem 2.5rem 5rem; }
        }
        @media (min-width: 768px) {
          .fac-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
