'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProvider } from '@/components/AppContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MenuOverlay } from '@/components/MenuOverlay';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Research & User Discovery',
    desc: 'Auditing user behavioral data, conducting competitor benchmark analyses, and establishing concrete user journey personas.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Information Architecture & Wireframes',
    desc: 'Mapping conversion funnels, low-fidelity structural wireframes, navigational hierarchy, and frictionless user checkout journeys.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Kinetic High-Fidelity UI',
    desc: 'Applying bespoke typography, sophisticated color palettes, glassmorphic dimensional surfaces, and modern corporate minimalism.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Interactive Motion Prototyping',
    desc: 'Crafting fluid scroll-driven animations, tactile button states, micro-interactions, and clickable client walkthrough prototypes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Design System & Dev Handoff',
    desc: 'Comprehensive Figma token libraries, responsive auto-layout components, WCAG AA compliance checklists, and frontend implementation supervision.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
  },
];

const ADVANTAGES = [
  {
    title: 'Maximum User Retention',
    desc: 'Intuitive, frictionless experiences eliminate cognitive fatigue, dramatically boosting daily engagement and lowering customer churn.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Authoritative Brand Identity',
    desc: 'A distinct, high-end visual language that commands credibility, conveys technical prowess, and positions you as the premium choice in your sector.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'WCAG 2.1 AA Accessibility',
    desc: 'Rigorous color contrast ratios, screen-reader semantic trees, and keyboard navigable ergonomics ensuring universal compliance and usability.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Conversion-Engineered Funnels',
    desc: 'Strategic microcopy, focal visual paths, and frictionless interactive touchpoints mathematically proven to turn traffic into paying clients.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const TECH_STACK = [
  'Figma Design Systems',
  'Kinetic Motion Design',
  'WCAG 2.1 AA Standards',
  'Design Tokens Architecture',
  'Interactive Component States',
  'Cross-Platform Wireframing',
  'Conversion Rate Optimization',
  'User Persona Mapping',
  'Micro-Interactions Modeling',
  'Responsive 12-Column Grids',
  'Usability Testing Protocols',
  'Pixel-Perfect Code Handoff',
];

const CASE_STUDIES = [
  {
    client: 'Catalyst Digital',
    category: 'Strategy & Tech Consultancy',
    title: 'Bespoke Brand Identity & Kinetic Agency Experience',
    metrics: [
      { lbl: 'Session Duration', val: '3.5x' },
      { lbl: 'Inbound Leads', val: '+180%' },
      { lbl: 'Design System', val: '100% Tokens' },
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    link: '/work/catalyst-digital',
  },
  {
    client: 'Chill Co. Apparel',
    category: 'Streetwear & Digital Retail',
    title: 'Editorial E-Commerce Experience Blending Heritage with Modern Streetwear',
    metrics: [
      { lbl: 'Mobile Checkouts', val: '+85%' },
      { lbl: 'Cart Abandonment', val: '-32%' },
      { lbl: 'UX Rating', val: '4.9 ★' },
    ],
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
    link: '/work/chill-co',
  },
];

const FAQS = [
  {
    q: 'Do you deliver Figma designs or fully functional frontend code?',
    a: 'Both. We create complete production-ready Figma design systems with interactive component states, typography variables, and color tokens, and can seamlessly translate them into pixel-perfect React / Next.js code.',
  },
  {
    q: 'How many design revision rounds are included in a typical project?',
    a: 'We work closely with your stakeholders in continuous weekly iterations rather than presenting a rigid final reveal. Every sprint includes collaborative review sessions until you are 100% satisfied with the architecture and aesthetic.',
  },
  {
    q: 'Can you redesign our existing app while preserving our backend API?',
    a: 'Absolutely. We specialize in decoupling legacy frontends, engineering modern UX/UI layer refreshes, and reconnecting to your existing databases, microservices, and APIs with zero data loss or operational disruption.',
  },
  {
    q: 'How do you ensure the design actually converts users into customers?',
    a: 'Our designs are guided by cognitive psychology and behavioral data, not guesswork. We analyze heatmaps, streamline friction points in form submissions and checkouts, and emphasize clear focal points that drive measurable user action.',
  },
];

export default function UIUXDesignPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <AppProvider>
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#0a0a0a' }}>
        <Header 
          onOpenMenu={() => setIsMenuOpen(true)} 
          onOpenContact={() => setIsContactOpen(true)} 
        />

        <main style={{ flex: 1, width: '100%', overflowX: 'clip' }}>
          {/* ========================================================================= */}
          {/* 1. HERO SECTION (Dark Space & Celestial Atmosphere)                       */}
          {/* ========================================================================= */}
          <section
            style={{
              position: 'relative',
              backgroundColor: '#02040a',
              color: '#ffffff',
              paddingTop: 'clamp(7rem, 12vh, 10rem)',
              paddingBottom: 'clamp(4rem, 8vh, 6rem)',
              overflow: 'hidden',
              isolation: 'isolate',
            }}
          >
            {/* Ambient Cyan / Blue Auroras */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '1200px',
                height: '500px',
                background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56, 189, 248, 0.2) 0%, rgba(37, 99, 201, 0.08) 50%, transparent 80%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
              {/* Eyebrow Tag */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#94a3b8',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
                  Digital Product &amp; Brand Experience
                </motion.div>
              </div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
              >
                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    margin: '0 0 1.25rem 0',
                    color: '#ffffff',
                  }}
                >
                  UI/UX &amp; Product{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600, color: '#ffffff' }}>
                    Design
                  </span>
                </h1>

                <p
                  style={{
                    fontFamily: '"Onest", "Plus Jakarta Sans", sans-serif',
                    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.72)',
                    maxWidth: '720px',
                    margin: '0 auto 2.25rem auto',
                  }}
                >
                  Intuitive, user-centric interfaces engineered with kinetic logic and modern corporate minimalism to maximize customer retention, brand authority, and revenue conversion.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    style={{
                      borderRadius: '9999px',
                      padding: '0.85rem 2rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      backgroundColor: '#ffffff',
                      color: '#02040a',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#38bdf8';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(56, 189, 248, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#02040a';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>Start a Design Project</span>
                    <span style={{ fontSize: '1rem' }}>↗</span>
                  </button>

                  <a
                    href="#design-work"
                    style={{
                      borderRadius: '9999px',
                      padding: '0.85rem 1.85rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                  >
                    <span>Explore Design Portfolio</span>
                    <span>↓</span>
                  </a>
                </div>
              </motion.div>

              {/* Key Value Metrics Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  marginTop: 'clamp(3rem, 6vh, 4.5rem)',
                }}
              >
                {[
                  { val: '3.5x', lbl: 'Average Session Duration' },
                  { val: '+180%', lbl: 'Inbound Lead Velocity' },
                  { val: 'WCAG AA', lbl: 'Universal Accessibility' },
                  { val: 'Figma to Code', lbl: 'Pixel-Perfect Handoff' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '1.25rem',
                      padding: '1.5rem',
                      textAlign: 'center',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <div style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 700, color: '#38bdf8', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
                      {item.val}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {item.lbl}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Featured Visual Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{
                  marginTop: 'clamp(2.5rem, 5vh, 4rem)',
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                  height: 'clamp(260px, 40vw, 480px)',
                }}
              >
                <Image
                  src="/images/ui-ux-design.jpg"
                  alt="Kinetic UI/UX Design System"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(2, 4, 10, 0.85) 0%, rgba(2, 4, 10, 0.2) 60%, transparent 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#38bdf8', fontWeight: 600 }}>
                      Design Philosophy
                    </span>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#ffffff', margin: '0.2rem 0 0 0', fontWeight: 600 }}>
                      Kinetic Logic &amp; Modern Corporate Minimalism
                    </h3>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Figma System', 'Motion Logic', 'Conversion Focus'].map((badge, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '9999px',
                          padding: '0.35rem 0.85rem',
                          color: '#ffffff',
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 2. DESIGN BLUEPRINT (5-Step Process)                                      */}
          {/* ========================================================================= */}
          <section style={{ padding: 'clamp(5rem, 10vh, 7.5rem) 1.5rem', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vh, 4.5rem)' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#2563c9',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Human-Centered Systems
                </span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    fontWeight: 500,
                    lineHeight: 1.18,
                    letterSpacing: '-0.01em',
                    color: '#0f0f11',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  Our Product Design{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    Blueprint
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'rgba(15, 15, 17, 0.65)',
                    maxWidth: '640px',
                    margin: '1rem auto 0 auto',
                  }}
                >
                  We merge psychological intuition with rigorous component architecture to craft digital experiences users love and trust implicitly.
                </p>
              </div>

              {/* 5 Process Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {WORKFLOW_STEPS.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    style={{
                      backgroundColor: '#f8f9ff',
                      borderRadius: '1.5rem',
                      padding: '2rem 1.5rem',
                      border: '1px solid #e5eeff',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#2563c9';
                      e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(37, 99, 201, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e5eeff';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 700,
                          color: '#2563c9',
                          fontVariantNumeric: 'tabular-nums',
                          lineHeight: 1,
                        }}
                      >
                        {step.step}
                      </span>
                      <div
                        style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                          border: '1px solid #e5eeff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2563c9',
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f0f11', margin: '0 0 0.65rem 0', letterSpacing: '-0.01em' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(15, 15, 17, 0.68)', margin: 0 }}>
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 3. VALUE-DRIVEN DESIGN (Advantages)                                       */}
          {/* ========================================================================= */}
          <section style={{ padding: 'clamp(5rem, 10vh, 7.5rem) 1.5rem', backgroundColor: '#f8f9ff', borderTop: '1px solid #e5eeff', borderBottom: '1px solid #e5eeff' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vh, 4.5rem)' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#2563c9',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Intentional Aesthetics
                </span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    fontWeight: 500,
                    lineHeight: 1.18,
                    letterSpacing: '-0.01em',
                    color: '#0f0f11',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  Value-Driven Design{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    Principles
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'rgba(15, 15, 17, 0.65)',
                    maxWidth: '640px',
                    margin: '1rem auto 0 auto',
                  }}
                >
                  Great design is an investment in revenue. We construct visual systems that simplify complexity and compel action.
                </p>
              </div>

              {/* 4 Advantage Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {ADVANTAGES.map((adv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '1.5rem',
                      padding: '2.25rem',
                      border: '1px solid #e6e8ec',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#2563c9';
                      e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(37, 99, 201, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e6e8ec';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
                    }}
                  >
                    <div
                      style={{
                        width: '3.75rem',
                        height: '3.75rem',
                        borderRadius: '1rem',
                        backgroundColor: '#eff4ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {adv.icon}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#0f0f11', margin: '0 0 0.75rem 0', letterSpacing: '-0.015em' }}>
                      {adv.title}
                    </h3>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'rgba(15, 15, 17, 0.68)', margin: 0 }}>
                      {adv.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 4. DESIGN ARSENAL & TOOLING                                               */}
          {/* ========================================================================= */}
          <section style={{ padding: 'clamp(4.5rem, 8vh, 6.5rem) 1.5rem', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#2563c9',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Design System Arsenal
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 500,
                  color: '#0f0f11',
                  textTransform: 'uppercase',
                  margin: '0 0 1rem 0',
                }}
              >
                Our Design{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                  Toolkit
                </span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(15, 15, 17, 0.65)', maxWidth: '580px', margin: '0 auto 2.5rem auto' }}>
                We structure every component with modern auto-layout tokens and kinetic principles for effortless developer implementation.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {TECH_STACK.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      backgroundColor: '#f8f9ff',
                      color: '#0f0f11',
                      border: '1px solid #dce9ff',
                      borderRadius: '9999px',
                      padding: '0.65rem 1.35rem',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0a0a0a';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#0a0a0a';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f9ff';
                      e.currentTarget.style.color = '#0f0f11';
                      e.currentTarget.style.borderColor = '#dce9ff';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 5. FEATURED DESIGN PORTFOLIO                                              */}
          {/* ========================================================================= */}
          <section id="design-work" style={{ padding: 'clamp(5rem, 10vh, 7.5rem) 1.5rem', backgroundColor: '#02040a', color: '#ffffff' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'clamp(2.5rem, 5vh, 4rem)' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#38bdf8',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Selected Design Works
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                      fontWeight: 500,
                      lineHeight: 1.18,
                      letterSpacing: '-0.01em',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    Design &amp; UI{' '}
                    <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                      Portfolio
                    </span>
                  </h2>
                </div>

                <Link
                  href="/work"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    paddingBottom: '0.25rem',
                    borderBottom: '2px solid #38bdf8',
                  }}
                >
                  <span>View All Case Studies</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Case Studies Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '2rem',
                }}
              >
                {CASE_STUDIES.map((study, idx) => (
                  <Link
                    key={idx}
                    href={study.link}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '1.75rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        overflow: 'hidden',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                        e.currentTarget.style.boxShadow = '0 20px 45px -10px rgba(56, 189, 248, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ position: 'relative', height: '260px', width: '100%', overflow: 'hidden' }}>
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(2, 4, 10, 0.9) 0%, transparent 60%)',
                          }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            top: '1.25rem',
                            left: '1.25rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            backdropFilter: 'blur(8px)',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '9999px',
                            color: '#38bdf8',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                          }}
                        >
                          {study.category}
                        </span>
                      </div>

                      <div style={{ padding: '2rem' }}>
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                          {study.client}
                        </span>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#ffffff', margin: '0.4rem 0 1.5rem 0', lineHeight: 1.3 }}>
                          {study.title}
                        </h3>

                        {/* Metrics Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.25rem' }}>
                          {study.metrics.map((m, i) => (
                            <div key={i}>
                              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#38bdf8' }}>{m.val}</div>
                              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '0.2rem' }}>{m.lbl}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 6. SERVICE FAQ ACCORDION                                                  */}
          {/* ========================================================================= */}
          <section style={{ padding: 'clamp(5rem, 10vh, 7.5rem) 1.5rem', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vh, 4rem)' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#2563c9',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Expert Answers
                </span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: '#0f0f11',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  Frequently Asked{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    Questions
                  </span>
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#f8f9ff',
                        borderRadius: '1.25rem',
                        border: '1px solid #e5eeff',
                        overflow: 'hidden',
                        transition: 'border-color 0.2s ease',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '1.5rem 1.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          textAlign: 'left',
                          cursor: 'pointer',
                          background: 'none',
                          border: 'none',
                        }}
                      >
                        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f0f11', lineHeight: 1.4 }}>
                          {faq.q}
                        </span>
                        <div
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#0a0a0a' : '#ffffff',
                            color: isOpen ? '#ffffff' : '#0f0f11',
                            border: '1px solid #dce9ff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.25s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div style={{ padding: '0 1.75rem 1.5rem 1.75rem', fontSize: '0.95rem', lineHeight: 1.65, color: 'rgba(15, 15, 17, 0.72)' }}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 7. PRE-FOOTER CALL TO ACTION                                              */}
          {/* ========================================================================= */}
          <section style={{ padding: 'clamp(5rem, 8vh, 6.5rem) 1.5rem', backgroundColor: '#eff4ff', textAlign: 'center' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#2563c9',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Elevate Your Interface
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: '#0f0f11',
                  margin: '0 0 1.25rem 0',
                }}
              >
                Ready to engineer a world-class{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                  user experience?
                </span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(15, 15, 17, 0.68)', maxWidth: '580px', margin: '0 auto 2.25rem auto' }}>
                Let&apos;s collaborate to design a high-converting digital product that stands out in your market and commands authority.
              </p>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                style={{
                  borderRadius: '9999px',
                  padding: '1rem 2.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  backgroundColor: '#0a0a0a',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563c9';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 99, 201, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a0a0a';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Book Design Consultation</span>
                <span style={{ fontSize: '1.1rem' }}>↗</span>
              </button>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 8. OFFICIAL FOOTER                                                        */}
          {/* ========================================================================= */}
          <Footer onOpenContact={() => setIsContactOpen(true)} />
        </main>

        {/* Global Modals */}
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </AppProvider>
  );
}
