'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useAppReady } from './AppContext';
import { TextReveal } from './ui/TextReveal';
import { CarouselDots } from './ui/CarouselDots';
import Image from 'next/image';

export function HeroSection({ onOpenMenu, onOpenContact }: { onOpenMenu: () => void, onOpenContact: () => void }) {
  const isReady = useAppReady();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { img: '/images/custom-web-apps.jpg', brand: 'Swift Stack', title: 'Custom Web Apps', cta: 'View cases', alt: 'Swift Stack Digital – web development agency in Sri Lanka' },
    { img: '/images/ui-ux-design.jpg', brand: 'UI/UX', title: 'Kinetic Design', cta: 'See process', alt: 'Swift Stack Digital – UI/UX design portfolio' },
    { img: '/images/performance-optimization.jpg', brand: 'Performance', title: 'Optimization', cta: 'Read more', alt: 'Swift Stack Digital – Web performance optimization in Sri Lanka' }
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
      <motion.div className="hero-img-container" style={{ y }}>
        <Image src="/images/hero-workspace.jpg" alt="Swift Stack Digital – Full-stack web development workspace in Sri Lanka" fill className="hero-img" priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,47,99,0.65), rgba(15,47,99,0.35), rgba(15,47,99,0.75))' }} />
      </motion.div>

      {/* Header */}
      <header style={{ display: 'flex', padding: '1.5rem 1.5rem 0', fontSize: '0.75rem', zIndex: 10 }}>
        <nav style={{ flex: 1, display: 'flex', gap: '2rem' }} className="hidden lg-flex">
          <a href="#programs" style={{ opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity='1'} onMouseLeave={(e) => e.currentTarget.style.opacity='0.9'}>Services</a>
          <a href="#facilities" style={{ opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity='1'} onMouseLeave={(e) => e.currentTarget.style.opacity='0.9'}>Work</a>
          <a href="#trust-title" style={{ opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity='1'} onMouseLeave={(e) => e.currentTarget.style.opacity='0.9'}>About</a>
          <a href="#testimonials" style={{ opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity='1'} onMouseLeave={(e) => e.currentTarget.style.opacity='0.9'}>Testimonials</a>
        </nav>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '1rem', whiteSpace: 'nowrap' }}>
          Swift Stack
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onOpenContact} className="hidden sm-block" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration='underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration='none'}>Get Started</button>
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
          text={['Ship Premium', 'Software']}
          type="lines"
          isReady={isReady}
          stagger={0.14}
          duration={1.1}
          className="hero-main-title"
        />
      </div>

      {/* Bottom Row */}
      <div style={{ marginTop: 'auto', padding: '0 1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 10, gap: '1.5rem' }} className="hero-bottom">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <TextReveal
            as="p"
            text={['Ship Fast,', 'Scale Big']}
            type="lines"
            isReady={isReady}
            baseDelay={0.35}
            stagger={0.11}
            duration={0.9}
            className="hero-sub-title"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.85, maxWidth: '24rem', lineHeight: 1.4 }}
          >
            Full-Stack Web Development & SEO Agency in Sri Lanka
          </motion.h2>
        </div>
        
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
                  <Image src={slides[activeSlide].img} alt={slides[activeSlide].alt} width={56} height={56} style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', objectFit: 'cover' }} />
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
              <div style={{ fontSize: '1.875rem', fontWeight: 500, lineHeight: 1 }}>5+</div>
              <div>
                <div style={{ display: 'flex', marginLeft: '0.25rem' }}>
                  {['#5790e6', '#c2e029', '#0b6e97', '#ffffff'].map((c, i) => (
                    <div key={i} style={{ width: '1.25rem', height: '1.25rem', borderRadius: 'var(--radius-pill)', background: c, border: '1px solid color-mix(in srgb, var(--brand-deep) 40%, transparent)', marginLeft: '-0.5rem' }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.65rem', opacity: 0.8, marginTop: '0.25rem' }}>Projects Delivered</div>
              </div>
            </div>
            <Image src="/images/team-collaboration.jpg" alt="Swift Stack Digital – Web development team in Sri Lanka" width={64} height={85} style={{ width: '4rem', height: 'auto', aspectRatio: '3/4', borderRadius: '0.75rem', objectFit: 'cover' }} />
          </motion.article>
        </div>
      </div>
      <style>{`
        .hidden { display: none !important; }
        .hero-img-container { position: absolute; left: 0; right: 0; top: -16%; height: 132%; width: 100%; z-index: -10; }
        .hero-img { object-position: 40% center; }
        .hero-main-title { flex-direction: column; font-size: 11vw; font-weight: 500; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.04em; white-space: nowrap; }
        .hero-sub-title { font-size: 1.75rem; font-weight: 500; text-transform: uppercase; line-height: 0.95; letter-spacing: -0.02em; color: color-mix(in srgb, white 85%, transparent); display: flex; flex-direction: column; }

        @media (min-width: 640px) { 
          .sm-block { display: block !important; } 
          .hero-title-pad { padding-left: 2.5rem !important; padding-right: 2.5rem !important; }
          .hero-bottom { padding: 0 2.5rem 2.5rem !important; flex-direction: row !important; }
          .membership-card { max-width: 15rem !important; }
          .hero-img { object-position: 15% center; }
          .hero-main-title { font-size: 9.5vw; letter-spacing: -0.03em; }
          .hero-sub-title { font-size: 2.4rem; }
        }
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .lg-flex { display: flex !important; }
        }
        @media (max-width: 639px) {
          .hero-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 2.5rem !important; padding-bottom: 2.5rem !important; }
          .hero-title-pad { padding-top: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
