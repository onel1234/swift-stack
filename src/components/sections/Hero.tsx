"use client";

import React, { useState, useEffect } from 'react';
import { ButtonLink } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const FLIP_WORDS = ["Experiences.", "Products.", "Platforms."];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % FLIP_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', paddingTop: '80px', paddingBottom: '120px', minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-stack-lg)' }}>

        <div className="pill-badge">
          <span className="dot"></span>
          Modern Digital Agency
        </div>

        <h1 className="headline-xl" style={{ maxWidth: '800px', color: 'var(--on-surface)', fontFamily: '"Poppins", sans-serif', fontWeight: 900 }}>
          Architecting the <br />
          <span className="hero-gradient-text">Future</span> of Web <br />
          <span style={{ display: 'inline-block', minWidth: '320px', textAlign: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -90 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ display: 'inline-block', transformOrigin: 'center center' }}
              >
                {FLIP_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="body-lg" style={{ maxWidth: '600px', color: 'var(--on-surface-variant)' }}>
          We transform bold visions into high-performance digital realities. Bespoke design meets rigorous engineering to craft products that elevate brands and drive measurable impact.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-stack-md)', marginTop: 'var(--spacing-stack-sm)', width: '100%' }}>
          <ButtonLink href="#work" variant="primary">
            Explore Our Work <span style={{ marginLeft: '8px' }}>→</span>
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary" style={{ borderColor: 'var(--outline-variant)', color: 'var(--on-surface)' }}>
            Start a Conversation
          </ButtonLink>
        </div>



      </div>
    </section>
  );
}
