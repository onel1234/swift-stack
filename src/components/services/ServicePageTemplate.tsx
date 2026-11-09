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
import type {
  AdvantageIconKey,
  ServicePageData,
  WorkflowIconKey,
} from '@/data/services';
import { getWhatsAppUrl } from '@/lib/site';
import { trackCtaClick, trackWhatsAppClick } from '@/lib/analytics';
import styles from './ServicePage.module.css';

function renderWorkflowIcon(key: WorkflowIconKey) {
  switch (key) {
    case 'search':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'layoutGrid':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
    case 'code':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'shieldCheck':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'rocket':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-1.5 5-1.5" />
          <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 1.5-5 1.5-5" />
        </svg>
      );
    case 'fileText':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'layers':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'globe':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'activity':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'starOutline':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case 'play':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
  }
}

function renderAdvantageIcon(key: AdvantageIconKey) {
  switch (key) {
    case 'trendUp':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case 'lock':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'zap':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'settings':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'search':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'chevronsRight':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      );
    case 'trendUpAlt':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'server':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
        </svg>
      );
    case 'heart':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'star':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'alertCircle':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
  }
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openQuoteModal = (source: string) => {
    trackCtaClick(data.hero.primaryCtaLabel, source);
    setIsContactOpen(true);
  };

  return (
    <AppProvider>
      <div className={styles.pageShell}>
        <Header
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenContact={() => openQuoteModal(`service_${data.slug}_header`)}
        />

        <main className={styles.main}>
          {/* 1. HERO SECTION */}
          <section className={styles.heroSection}>
            <div className={styles.heroAurora} aria-hidden="true" />

            <div className={`${styles.container} ${styles.heroContent}`}>
              <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
                <Link href="/#services" className={styles.breadcrumbLink}>
                  Services
                </Link>
                <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
                <span aria-current="page" className={styles.breadcrumbCurrent}>
                  {data.breadcrumbLabel}
                </span>
              </nav>

              <div className={styles.heroEyebrowWrap}>
                <div className={styles.heroEyebrow}>
                  <span className={styles.heroEyebrowDot} aria-hidden="true" />
                  <span>{data.hero.eyebrow}</span>
                </div>
              </div>

              <div className={styles.heroTitleBlock}>
                <h1 className={styles.heroTitle}>
                  {data.hero.titlePrefix}{' '}
                  <span className={styles.heroTitleItalic}>{data.hero.titleItalic}</span>
                </h1>

                <p className={styles.heroSubtitle}>{data.hero.subtitle}</p>

                <div className={styles.heroCtaRow}>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(`service_${data.slug}_hero`)}
                    className={styles.primaryCta}
                  >
                    <span>{data.hero.primaryCtaLabel}</span>
                    <span aria-hidden="true" style={{ fontSize: '1rem' }}>↗</span>
                  </button>

                  <a href={data.hero.secondaryCtaHref} className={styles.secondaryCta}>
                    <span>{data.hero.secondaryCtaLabel}</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              {/* Key Value Metrics Grid */}
              <div className={styles.metricsGrid}>
                {data.hero.metrics.map((item, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <div className={styles.metricVal}>{item.val}</div>
                    <div className={styles.metricLbl}>{item.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Featured Visual Banner */}
              <div className={styles.bannerCard}>
                <Image
                  src={data.hero.banner.image}
                  alt={data.hero.banner.alt}
                  fill
                  preload
                  sizes="(max-width: 768px) calc(100vw - 32px), 1280px"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.bannerOverlay} />
                <div className={styles.bannerContent}>
                  <div>
                    <span className={styles.bannerEyebrow}>{data.hero.banner.eyebrow}</span>
                    <h3 className={styles.bannerTitle}>{data.hero.banner.title}</h3>
                  </div>
                  <div className={styles.bannerBadges}>
                    {data.hero.banner.badges.map((badge, i) => (
                      <span key={i} className={styles.bannerBadge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PROCESS WORKFLOW */}
          <section className={styles.lightSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>{data.workflow.eyebrow}</span>
                <h2 className={styles.sectionTitle}>
                  {data.workflow.titlePrefix}{' '}
                  <span className={styles.sectionTitleItalic}>{data.workflow.titleItalic}</span>
                </h2>
                <p className={styles.sectionSubtitle}>{data.workflow.subtitle}</p>
              </div>

              <div className={styles.workflowGrid}>
                {data.workflow.steps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={styles.workflowCard}
                  >
                    <div className={styles.workflowTop}>
                      <span className={styles.workflowStepNum}>{step.step}</span>
                      <div className={styles.workflowIconCircle} aria-hidden="true">
                        {renderWorkflowIcon(step.icon)}
                      </div>
                    </div>

                    <h3 className={styles.workflowTitle}>{step.title}</h3>
                    <p className={styles.workflowDesc}>{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. CORE ADVANTAGES */}
          <section className={styles.tintSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>{data.advantages.eyebrow}</span>
                <h2 className={styles.sectionTitle}>
                  {data.advantages.titlePrefix}{' '}
                  <span className={styles.sectionTitleItalic}>{data.advantages.titleItalic}</span>
                </h2>
                <p className={styles.sectionSubtitle}>{data.advantages.subtitle}</p>
              </div>

              <div className={styles.advantagesGrid}>
                {data.advantages.items.map((adv, idx) => (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={styles.advantageCard}
                  >
                    <div className={styles.advantageHeader}>
                      <div className={styles.advantageIconBox} aria-hidden="true">
                        {renderAdvantageIcon(adv.icon)}
                      </div>
                      <h3 className={styles.advantageTitle}>{adv.title}</h3>
                    </div>
                    <p className={styles.advantageDesc}>{adv.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. TECH STACK / TOOLKIT */}
          <section className={styles.stackSection}>
            <div className={styles.containerStack}>
              <span className={styles.sectionEyebrow}>{data.techStack.eyebrow}</span>
              <h2 className={styles.stackTitle}>
                {data.techStack.titlePrefix}{' '}
                <span className={styles.sectionTitleItalic}>{data.techStack.titleItalic}</span>
              </h2>
              <p className={styles.stackSubtitle}>{data.techStack.subtitle}</p>

              <div className={styles.stackPills}>
                {data.techStack.items.map((tech) => (
                  <span key={tech} className={styles.stackPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 5. FEATURED WORK / CASE STUDIES */}
          <section id={data.featuredWork.sectionId} className={styles.workSection}>
            <div className={styles.container}>
              <div className={styles.workHeaderRow}>
                <div>
                  <span className={styles.workEyebrow}>{data.featuredWork.eyebrow}</span>
                  <h2 className={styles.workTitle}>
                    {data.featuredWork.titlePrefix}{' '}
                    <span className={styles.sectionTitleItalic}>{data.featuredWork.titleItalic}</span>
                  </h2>
                </div>

                <Link href="/work" className={styles.workAllLink}>
                  <span>View All Case Studies</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={styles.caseGrid}>
                {data.featuredWork.studies.map((study) => (
                  <Link key={study.link} href={study.link} className={styles.caseLink}>
                    <div className={styles.caseCard}>
                      <div className={styles.caseImageWrap}>
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          sizes="(max-width: 768px) calc(100vw - 32px), 620px"
                          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        />
                        <div className={styles.caseImageOverlay} />
                        <span className={styles.caseCategory}>{study.category}</span>
                      </div>

                      <div className={styles.caseBody}>
                        <span className={styles.caseClient}>{study.client}</span>
                        <h3 className={styles.caseTitle}>{study.title}</h3>

                        <div className={styles.caseMetricsGrid}>
                          {study.metrics.map((m) => (
                            <div key={m.lbl}>
                              <div className={styles.caseMetricVal}>{m.val}</div>
                              <div className={styles.caseMetricLbl}>{m.lbl}</div>
                            </div>
                          ))}
                        </div>

                        <span className={styles.caseReadCue}>
                          View Case Study <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 6. HELPFUL BUYER GUIDES CROSS-LINK */}
          {data.relatedGuides && data.relatedGuides.length > 0 && (
            <section className={styles.guidesSection}>
              <div className={styles.container}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionEyebrow}>Research &amp; Pricing Resources</span>
                  <h2 className={styles.sectionTitle}>
                    Helpful Buyer <span className={styles.sectionTitleItalic}>Guides</span>
                  </h2>
                  <p className={styles.sectionSubtitle}>
                    Compare options, realistic Sri Lankan LKR / USD budgets, and timelines before kicking off your build.
                  </p>
                </div>

                <div className={styles.guidesGrid}>
                  {data.relatedGuides.map((guide) => (
                    <Link key={guide.href} href={guide.href} className={styles.guideCard}>
                      <span className={styles.guideTag}>{guide.tag}</span>
                      <h3 className={styles.guideTitle}>{guide.title}</h3>
                      <p className={styles.guideDesc}>{guide.description}</p>
                      <span className={styles.guideLink}>
                        Read Full Guide <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 7. SERVICE FAQ ACCORDION */}
          <section className={styles.lightSection}>
            <div className={styles.containerNarrow}>
              <div className={styles.faqHeader}>
                <span className={styles.sectionEyebrow}>{data.faq.eyebrow}</span>
                <h2 className={styles.faqTitle}>
                  Frequently Asked{' '}
                  <span className={styles.sectionTitleItalic}>Questions</span>
                </h2>
              </div>

              <div className={styles.faqList}>
                {data.faq.items.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={faq.q} className={styles.faqItem}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className={styles.faqTrigger}
                      >
                        <span className={styles.faqQuestion}>{faq.q}</span>
                        <div className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`} aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className={styles.faqAnswer}>{faq.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 8. PRE-FOOTER CALL TO ACTION */}
          <section className={styles.ctaSection}>
            <div className={styles.containerCta}>
              <span className={styles.sectionEyebrow}>{data.cta.eyebrow}</span>
              <h2 className={styles.ctaTitle}>
                {data.cta.titlePrefix}{' '}
                <span className={styles.sectionTitleItalic}>{data.cta.titleItalic}</span>
              </h2>
              <p className={styles.ctaSubtitle}>{data.cta.subtitle}</p>

              <div className={styles.ctaActions}>
                <button
                  type="button"
                  onClick={() => openQuoteModal(`service_${data.slug}_prefooter`)}
                  className={styles.ctaButton}
                >
                  <span>{data.cta.buttonLabel}</span>
                  <span aria-hidden="true" style={{ fontSize: '1.1rem' }}>↗</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Swift Stack Digital, I'm interested in ${data.breadcrumbLabel} and would like a free consultation.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`service_${data.slug}_prefooter`, data.slug)}
                  className={styles.ctaWhatsAppLink}
                >
                  <span>WhatsApp Us Directly</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* 9. OFFICIAL FOOTER */}
          <div className={styles.footerWrap}>
            <Footer onOpenContact={() => openQuoteModal(`service_${data.slug}_footer`)} />
          </div>
        </main>

        {/* Global Modals */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          defaultService={data.quoteServiceDefault}
        />
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onOpenContact={() => openQuoteModal(`service_${data.slug}_menu`)}
        />
      </div>
    </AppProvider>
  );
}
