'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TextReveal } from './ui/TextReveal';
import { ArrowButton } from './ui/ArrowButton';
import { CarouselDots } from './ui/CarouselDots';

const SLIDES = [
  { words: ['Modern', 'Web', 'Development', 'Agency'], img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=400&auto=format&fit=crop', name: 'Web Development', role: 'Full-Stack Solutions', alt: 'Web Development' },
  { words: ['Data-', 'Driven', 'SEO', 'Strategy'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop', name: 'SEO', role: 'Search Engine Optimization', alt: 'SEO Analytics' },
  { words: ['Smart', 'Cloud', '& AI', 'Systems'], img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop', name: 'AI & Cloud', role: 'Intelligent Infrastructure', alt: 'AI & Cloud Infrastructure' }
];

export function TrustSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  
  // Parallax for ghost words
  const xTL = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const xTR = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);
  const xBL = useTransform(scrollYProgress, [0, 1], ['-2%', '4%']);
  const xBR = useTransform(scrollYProgress, [0, 1], ['4%', '-3%']);

  const nextSlide = () => setActive(s => (s + 1) % SLIDES.length);
  const prevSlide = () => setActive(s => (s - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section ref={ref} className="trust-sec" style={{ position: 'relative', isolation: 'isolate', overflow: 'hidden', background: 'var(--background)' }}>
      {/* Top badges row */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', gap: '2rem' }} className="trust-badges">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="perc-badge"
          style={{ borderRadius: 'var(--radius-pill)', background: 'var(--surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 500 }}>100%</div>
          <div style={{ fontSize: '0.6rem', color: 'var(--ink-soft)', maxWidth: '7em', lineHeight: 1.2, marginTop: '0.25rem' }}>Tailored to your business needs</div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.12, type: 'spring', stiffness: 200, damping: 26 }}
          className="badge-card"
          style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-card)', background: 'var(--surface)' }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ borderRadius: '0.75rem', background: 'var(--background)', padding: '0.5rem 1rem', fontSize: '1.25rem', fontWeight: 500 }}>#01</div>
            <div>
              <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>Trusted by growing startups</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginTop: '0.5rem' }}>From early-stage ventures to enterprise leaders, companies partner with us because the ROI shows up on the balance sheet.</div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Oversized ghost heading */}
      <h2 id="trust-title" style={{ pointerEvents: 'none', zIndex: 0, userSelect: 'none', maxWidth: '88rem', margin: '3rem auto 0', textAlign: 'center', fontSize: '8.2vw', fontWeight: 500, textTransform: 'uppercase', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--ghost)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <motion.div style={{ x: xTL }}><TextReveal key={`w1-${active}`} text={[SLIDES[active].words[0]]} type="words" duration={0.7} /></motion.div>
          <motion.div style={{ x: xTR }}><TextReveal key={`w2-${active}`} text={[SLIDES[active].words[1]]} type="words" duration={0.7} /></motion.div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <motion.div style={{ x: xBL, color: 'var(--ink)' }}><TextReveal key={`w3-${active}`} text={[SLIDES[active].words[2]]} type="words" duration={0.7} /></motion.div>
          <motion.div style={{ x: xBR }}><TextReveal key={`w4-${active}`} text={[SLIDES[active].words[3]]} type="words" duration={0.7} /></motion.div>
        </div>
      </h2>

      {/* Center coach card */}
      <motion.figure
        initial={{ opacity: 0, y: 60, scale: 0.92, rotate: 6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 6 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 170, damping: 26 }}
        className="coach-card"
        style={{ position: 'relative', zIndex: 10, aspectRatio: '3/4', borderRadius: 'var(--radius-card)', background: 'var(--brand)', overflow: 'hidden' }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={SLIDES[active].img}
            alt={SLIDES[active].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </AnimatePresence>
        <div style={{ position: 'absolute', left: '0.75rem', right: '0.75rem', bottom: '0.75rem', borderRadius: '0.75rem', background: 'color-mix(in srgb, var(--brand-deep) 40%, transparent)', color: 'white', backdropFilter: 'blur(4px)', padding: '0.5rem 0.75rem' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{SLIDES[active].name}</div>
          <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>{SLIDES[active].role}</div>
        </div>
      </motion.figure>

      {/* Controls row */}
      <div className="trust-controls" style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ArrowButton variant="outline" direction="prev" onClick={prevSlide} />
        <CarouselDots count={3} activeIndex={active} onChange={setActive} />
        <ArrowButton variant="outline" direction="next" onClick={nextSlide} />
      </div>

      <style>{`
        .trust-sec { padding: 4rem 1.5rem; }
        .trust-badges { flex-direction: column; }
        .perc-badge { width: 7rem; height: 7rem; }
        .badge-card { padding: 1.25rem; max-width: 28rem; }
        .coach-card { width: 13rem; margin: -10vw auto 0; }
        .trust-controls { margin-top: 3rem; }
        @media (min-width: 640px) {
          .trust-sec { padding: 5rem 2.5rem; }
          .trust-badges { flex-direction: row; }
          .perc-badge { width: 8rem; height: 8rem; }
          .badge-card { padding: 1.5rem; gap: 1.25rem; }
          .coach-card { width: 16rem; position: absolute !important; left: 50% !important; top: 50% !important; margin: -10.6rem 0 0 -8rem !important; }
          .trust-controls { margin-top: 6rem; }
        }
      `}</style>
    </section>
  );
}
