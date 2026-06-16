'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useAppReady } from './AppContext';
import { TextReveal } from './ui/TextReveal';
import { CarouselDots } from './ui/CarouselDots';

export function HeroSection({ onOpenMenu, onOpenContact }: { onOpenMenu: () => void, onOpenContact: () => void }) {
  const isReady = useAppReady();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { img: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/baseline-88535e4000/2.webp', brand: 'Swift Stack', title: 'Custom Web Apps', cta: 'View cases', alt: 'Player driving a backhand on a hard court' },
    { img: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/baseline-88535e4000/3.webp', brand: 'UI/UX', title: 'Kinetic Design', cta: 'See process', alt: 'Player stretching for a forehand on clay' },
    { img: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/baseline-88535e4000/5.webp', brand: 'Performance', title: 'Optimization', cta: 'Read more', alt: 'Player set in a ready stance on clay' }
  ];

  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      setActiveSlide(s => (s + 1) % slides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isReady, slides.length]);

  return (
    <section ref={ref} style={{
      position: 'relative', isolation: 'isolate', overflow: 'hidden',
      borderRadius: 'var(--radius-card-lg)',
      backgroundColor: 'var(--brand-deep)',
      color: 'white',
      height: 'calc(100svh - 1rem)',
      minHeight: '36rem',
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Background Plate */}
      <motion.div style={{ position: 'absolute', left: 0, right: 0, top: '-16%', height: '132%', width: '100%', zIndex: -10, y }}>
        <img src="https://api.getlayers.ai/storage/v1/object/public/public/assets/baseline-88535e4000/hero/hero-court.webp" alt="Player lunging for a shot on a hard court" style={{ width: '100%', height: '100%', objectFit: 'cover' }} fetchPriority="high" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,47,99,0.65), rgba(15,47,99,0.35), rgba(15,47,99,0.75))' }} />
      </motion.div>

      {/* Header */}
      <header style={{ display: 'flex', padding: '1.5rem 1.5rem 0', fontSize: '0.75rem', zIndex: 10 }}>
        <nav style={{ flex: 1, display: 'flex', gap: '2rem' }} className="hidden lg-flex">
          <a href="#programs" style={{ opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity='1'} onMouseLeave={(e) => e.currentTarget.style.opacity='0.9'}>Programs & Coaches</a>
          <a href="#facilities" style={{ opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity='1'} onMouseLeave={(e) => e.currentTarget.style.opacity='0.9'}>Club & Events</a>
        </nav>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '1rem' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ width: '1.25rem', height: '1.25rem' }}>
            <circle cx="12" cy="12" r="9"/>
            <path d="M4.8 5.6A9 9 0 0 0 4.8 18.4"/>
            <path d="M19.2 5.6a9 9 0 0 1 0 12.8"/>
          </svg>
          Swift Stack
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onOpenContact} className="hidden sm-block" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration='underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration='none'}>Get Started</button>
          <button onClick={onOpenMenu} style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-pill)', background: 'color-mix(in srgb, white 15%, transparent)', backdropFilter: 'blur(4px)', display: 'grid', placeContent: 'center', gap: '5px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background='color-mix(in srgb, white 25%, transparent)'} onMouseLeave={(e) => e.currentTarget.style.background='color-mix(in srgb, white 15%, transparent)'}>
            <div style={{ height: '1px', width: '1rem', background: 'white' }} />
            <div style={{ height: '1px', width: '1rem', background: 'white' }} />
          </button>
        </div>
      </header>

      {/* Giant Title */}
      <div style={{ padding: '1rem 1.5rem 0', zIndex: 10 }} className="hero-title-pad">
        <TextReveal
          as="h1"
          text={['Master', 'The', 'Stack']}
          type="words"
          isReady={isReady}
          stagger={0.14}
          duration={1.1}
          style={{ fontSize: '12.5vw', fontWeight: 500, textTransform: 'uppercase', lineHeight: 0.85, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
        />
      </div>

      {/* Bottom Row */}
      <div style={{ marginTop: 'auto', padding: '0 1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 10, gap: '1.5rem' }} className="hero-bottom">
        <TextReveal
          as="p"
          text={['Ship Fast,', 'Scale Big']}
          type="lines"
          isReady={isReady}
          baseDelay={0.35}
          stagger={0.11}
          duration={0.9}
          style={{ fontSize: '2.4rem', fontWeight: 500, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-0.02em', color: 'color-mix(in srgb, white 85%, transparent)', display: 'flex', flexDirection: 'column' }}
        />
        
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
          {/* Collection Slider */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, type: 'spring', stiffness: 200, damping: 26 }}
            className="hidden md-flex"
            style={{ width: '16rem', flexDirection: 'column', gap: '0.75rem' }}
          >
            <div style={{ position: 'relative', height: '5rem' }}>
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeSlide}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  transition={{ type: 'spring', stiffness: 210, damping: 24 }}
                  style={{ display: 'flex', gap: '0.75rem', borderRadius: '1.5rem', border: '1px solid color-mix(in srgb, white 15%, transparent)', background: 'color-mix(in srgb, white 10%, transparent)', padding: '0.75rem', boxShadow: '0 4px 20px color-mix(in srgb, var(--brand-deep) 20%, transparent)', backdropFilter: 'blur(4px)', position: 'absolute', inset: 0 }}
                >
                  <img src={slides[activeSlide].img} alt={slides[activeSlide].alt} style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', objectFit: 'cover' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{slides[activeSlide].brand}</div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.8 }}>{slides[activeSlide].title}</div>
                    <a href="#" style={{ fontSize: '0.65rem', textDecoration: 'underline', marginTop: 'auto' }}>{slides[activeSlide].cta} &rarr;</a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
            <CarouselDots count={3} activeIndex={activeSlide} tone="light" />
          </motion.div>

          {/* Membership Card */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.78, type: 'spring', stiffness: 200, damping: 26 }}
            style={{ width: '100%', maxWidth: '20rem', display: 'flex', gap: '0.75rem', borderRadius: '1.5rem', border: '1px solid color-mix(in srgb, white 15%, transparent)', background: 'color-mix(in srgb, white 10%, transparent)', padding: '0.75rem', boxShadow: '0 4px 20px color-mix(in srgb, var(--brand-deep) 20%, transparent)', backdropFilter: 'blur(4px)' }}
            className="membership-card"
          >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 500, lineHeight: 1 }}>100+</div>
              <div>
                <div style={{ display: 'flex', marginLeft: '0.25rem' }}>
                  {['#5790e6', '#c2e029', '#0b6e97', '#ffffff'].map((c, i) => (
                    <div key={i} style={{ width: '1.25rem', height: '1.25rem', borderRadius: 'var(--radius-pill)', background: c, border: '1px solid color-mix(in srgb, var(--brand-deep) 40%, transparent)', marginLeft: '-0.5rem' }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.65rem', opacity: 0.8, marginTop: '0.25rem' }}>Projects Delivered</div>
              </div>
            </div>
            <img src="https://api.getlayers.ai/storage/v1/object/public/public/assets/baseline-88535e4000/1.webp" alt="Player waiting to return" style={{ width: '4rem', aspectRatio: '3/4', borderRadius: '0.75rem', objectFit: 'cover' }} />
          </motion.article>
        </div>
      </div>
      <style>{`
        .hidden { display: none !important; }
        @media (min-width: 640px) { 
          .sm-block { display: block !important; } 
          .hero-title-pad { padding-left: 2.5rem !important; padding-right: 2.5rem !important; }
          .hero-bottom { padding: 0 2.5rem 2.5rem !important; flex-direction: row !important; }
          .membership-card { max-width: 15rem !important; }
        }
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .lg-flex { display: flex !important; }
        }
        @media (max-width: 639px) {
          .hero-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
