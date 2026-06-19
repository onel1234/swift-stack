'use client';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TextReveal } from './ui/TextReveal';
import Image from 'next/image';

export function FacilitiesSection() {
  const pText = "Browse our portfolio of high-performance web applications, scalable cloud infrastructures, and data-driven SEO campaigns designed to elevate your brand.";

  const projects = [
    { name: 'Ceylon Naturalist', desc: 'Nature & Wildlife Platform', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop', link: 'https://ceylonnaturalist.com/' },
    { name: 'Chill Co', desc: 'E-Commerce Storefront', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop', link: 'https://chill-co.vercel.app/' },
    { name: 'SaaS Onboarding', desc: 'User activation flow', img: '/agency_onboarding.png' },
    { name: 'Enterprise Cloud', desc: 'Scalable infrastructure', img: '/hero-software.png' },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section id="facilities" className="fac-sec" style={{ background: 'var(--background)', borderRadius: 'var(--radius-card-lg)', marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
      <div className="fac-grid" style={{ display: 'grid', gap: '4rem' }}>
        
        {/* Intro column */}
        <div style={{ maxWidth: '24rem' }}>
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

        {/* Project List */}
        <div 
          style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} 
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              onMouseEnter={() => setHoveredProject(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              className="project-row"
              style={{ 
                padding: '2rem 0', 
                borderBottom: '1px solid color-mix(in srgb, var(--ink) 15%, transparent)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 500, margin: 0, transition: 'color 0.3s', color: hoveredProject === i ? 'var(--brand-deep)' : 'var(--ink)' }}>{proj.name}</h3>
                <p style={{ margin: 0, opacity: 0.6, fontSize: '0.875rem', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{proj.desc}</p>
              </div>
              <a 
                href={proj.link || '#'}
                target={proj.link ? "_blank" : undefined}
                rel={proj.link ? "noopener noreferrer" : undefined}
                style={{ opacity: hoveredProject === i ? 1 : 0, transition: 'opacity 0.3s, transform 0.3s', transform: hoveredProject === i ? 'translateX(0)' : 'translateX(-10px)', fontSize: '1.5rem', color: 'var(--brand-deep)', textDecoration: 'none' }}
              >
                &rarr;
              </a>
            </motion.div>
          ))}

          {/* Floating Preview */}
          <AnimatePresence>
            {hoveredProject !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                className="hidden md-block"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  x: springX,
                  y: springY,
                  translateX: '-50%',
                  translateY: '-50%',
                  pointerEvents: 'none',
                  zIndex: 100,
                  width: '24rem',
                  aspectRatio: '4/3',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px color-mix(in srgb, var(--brand-deep) 30%, transparent)'
                }}
              >
                <Image src={projects[hoveredProject].img} alt={projects[hoveredProject].name} fill style={{ objectFit: 'cover' }} sizes="24rem" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .fac-sec { padding: 4rem 1.5rem 5rem; }
        .fac-grid { grid-template-columns: 1fr; align-items: start; }
        .hidden { display: none !important; }
        @media (min-width: 640px) {
          .fac-sec { padding: 4rem 2.5rem 5rem; }
        }
        @media (min-width: 768px) {
          .fac-grid { grid-template-columns: 1fr 1.5fr; }
          .md-block { display: block !important; }
        }
        .project-row { transition: padding-left 0.3s ease; }
        .project-row:hover { padding-left: 1rem; }
      `}</style>
    </section>
  );
}
