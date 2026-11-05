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
    title: 'Discovery & Architecture',
    desc: 'Deep-dive technical scoping, requirement analysis, database schema modeling, and infrastructure roadmap planning.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'UI/UX & Kinetic Prototyping',
    desc: 'Bespoke design systems, responsive wireframes, interactive high-fidelity prototypes, and kinetic motion design.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Full-Stack Development',
    desc: 'Clean, type-safe Next.js implementation, microservices integration, serverless edge APIs, and database migrations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Rigorous QA & Security',
    desc: 'End-to-end automated testing, penetration checks, cross-device audits, and strict 100/100 Core Web Vitals profiling.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Global Edge Launch',
    desc: 'Zero-downtime CI/CD deployment, global CDN edge caching, DNS routing, and real-time telemetry monitoring.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-1.5 5-1.5" />
        <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 1.5-5 1.5-5" />
      </svg>
    ),
  },
];

const ADVANTAGES = [
  {
    title: 'Infinite Scalability',
    desc: 'Serverless microservice architectures engineered to absorb viral traffic surges and millions of requests seamlessly without degradation.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: 'Enterprise-Grade Security',
    desc: 'Multi-layer protection including zero-trust access, encrypted payload transmission, OWASP compliance, and proactive vulnerability audits.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Sub-Second Performance',
    desc: 'Optimized hydration, asset compression, edge caching, and semantic HTML that ensure 100/100 Google Lighthouse scores and rapid conversions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Clean Maintainability',
    desc: 'Strictly typed TypeScript codebases, modular component design, and comprehensive documentation for effortless long-term feature expansion.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const TECH_STACK = [
  'Next.js 16 (App Router)',
  'TypeScript',
  'React 19',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Prisma ORM',
  'Supabase',
  'GraphQL & REST APIs',
  'Docker & Microservices',
  'AWS Lambda / Edge',
  'Vercel Serverless',
  'Stripe Billing',
  'Framer Motion',
];

const CASE_STUDIES = [
  {
    client: 'Catalyst Digital',
    category: 'Enterprise SaaS & Web App',
    title: 'Dynamic Motion-Rich Platform for Strategic Momentum',
    metrics: [
      { lbl: 'Session Duration', val: '3.5x' },
      { lbl: 'Operations Saved', val: '40 hrs/wk' },
      { lbl: 'Core Web Vitals', val: '100%' },
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    link: '/work/catalyst-digital',
  },
  {
    client: 'Chill Co. Apparel',
    category: 'High-Performance E-Commerce',
    title: 'Drop-Driven Streetwear Platform with Real-Time Cart Architecture',
    metrics: [
      { lbl: 'Production Uptime', val: '99.99%' },
      { lbl: 'Mobile Checkouts', val: '+85%' },
      { lbl: 'Page Load Speed', val: '1.1s' },
    ],
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
    link: '/work/chill-co',
  },
];

const FAQS = [
  {
    q: 'How long does a typical custom web application project take?',
    a: 'Most bespoke web applications and platforms launch in 3 to 6 weeks depending on feature scope. We operate in rapid 1-week iterative sprints with continuous staging access, so you test real working code every week with zero launch-day surprises.',
  },
  {
    q: 'Why do you engineer custom Next.js apps instead of using WordPress or Webflow?',
    a: 'Pre-built templates and bloated plugins carry severe speed penalties, security vulnerabilities, and vendor lock-in that directly damage conversions. A custom Next.js 16 codebase gives you sub-second speeds, absolute brand uniqueness, enterprise security, and the ability to scale to millions of users.',
  },
  {
    q: 'Can our custom web app integrate with our existing CRM, ERP, and payment systems?',
    a: 'Yes, seamlessly. We specialize in building robust API layers connecting to Stripe, Salesforce, HubSpot, Shopify, custom databases, and proprietary internal microservices.',
  },
  {
    q: 'What kind of support and maintenance do you offer after launch?',
    a: 'Every project comes with 30 days of complimentary post-launch hyper-care. Beyond launch, we provide ongoing SLA retainers covering proactive uptime monitoring, security patches, performance audits, and continuous feature sprints.',
  },
];

export default function CustomWebDevelopmentPage() {
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
            {/* Ambient Celestial Auroras */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '1200px',
                height: '500px',
                background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56, 189, 248, 0.18) 0%, rgba(37, 99, 201, 0.08) 50%, transparent 80%)',
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
                  Core Engineering Capability
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
                  Custom Web{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600, color: '#ffffff' }}>
                    Development
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
                  We engineer scalable, secure, and lightning-fast web applications built with Next.js 16 to solve complex business challenges, streamline operations, and drive aggressive digital growth.
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
                    <span>Start a Project</span>
                    <span style={{ fontSize: '1rem' }}>↗</span>
                  </button>

                  <a
                    href="#featured-work"
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
                    <span>Explore Case Studies</span>
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
                  { val: '99.99%', lbl: 'Production SLA & Uptime' },
                  { val: '< 1.0s', lbl: 'First Contentful Paint' },
                  { val: '100%', lbl: 'Core Web Vitals Audit' },
                  { val: 'Next.js 16', lbl: 'Modern Type-Safe Stack' },
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
                  src="/images/custom-web-apps.jpg"
                  alt="Custom Web Development Architecture"
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
                      Architecture Spotlight
                    </span>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#ffffff', margin: '0.2rem 0 0 0', fontWeight: 600 }}>
                      Enterprise Next.js Platform Architecture
                    </h3>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Serverless Edge', 'TypeScript', 'Prisma ORM'].map((badge, i) => (
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
          {/* 2. ENGINEERING WORKFLOW (Structured 5-Step Process)                        */}
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
                  Structured Agile Methodology
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
                  Our Engineering{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    Workflow
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
                  From concept to global edge deployment, our proven five-stage process delivers continuous velocity with rigorous quality assurance at every sprint.
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
          {/* 3. CORE ADVANTAGES (Why Choose Swift Stack)                               */}
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
                  Uncompromising Standards
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
                  Core Architectural{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    Advantages
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
                  We don’t build disposable websites. We engineer durable digital assets built on modern specifications that resist obsolescence.
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
          {/* 4. MODERN TECH STACK SHOWCASE                                             */}
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
                Production Proven
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
                Our Modern Engineering{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                  Stack
                </span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(15, 15, 17, 0.65)', maxWidth: '580px', margin: '0 auto 2.5rem auto' }}>
                We choose bleeding-edge yet battle-tested open source frameworks that offer long-term stability and high developer velocity.
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
          {/* 5. FEATURED WORK / CASE STUDIES                                           */}
          {/* ========================================================================= */}
          <section id="featured-work" style={{ padding: 'clamp(5rem, 10vh, 7.5rem) 1.5rem', backgroundColor: '#02040a', color: '#ffffff' }}>
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
                    Proven Production Deployments
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
                    Featured Web{' '}
                    <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                      Applications
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
                  Clear Answers
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
                Start Your Build
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
                Ready to build something{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                  extraordinary?
                </span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(15, 15, 17, 0.68)', maxWidth: '580px', margin: '0 auto 2.25rem auto' }}>
                Let&apos;s discuss how our engineering team can architect your next web platform for velocity, scale, and uncompromising quality.
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
                <span>Contact Our Engineers</span>
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
