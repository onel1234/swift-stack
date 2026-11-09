'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel, Card, type CardType } from '@/components/ui/apple-cards-carousel';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import styles from './ProjectModal.module.css';

interface ProjectModalContentProps {
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  caseStudyLink?: string;
  quote?: { text: string; author: string };
  image: string;
}

const ProjectModalContent: React.FC<ProjectModalContentProps> = ({
  client,
  industry,
  overview,
  challenge,
  solution,
  metrics,
  liveUrl,
  caseStudyLink,
  quote,
  image,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className={styles.modalHeroBanner}>
        <Image
          src={image}
          alt={client}
          fill
          sizes="(max-width: 768px) 92vw, 760px"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
          }}
        />
        <div className={styles.modalHeroContent}>
          <div>
            <span className={styles.modalHeroIndustry}>{industry}</span>
            <h4 className={styles.modalHeroTitle}>{client}</h4>
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalHeroLiveBtn}
            >
              Visit Live Site ↗
            </a>
          )}
        </div>
      </div>

      {metrics && metrics.length > 0 && (
        <div
          className={styles.modalMetricsGrid}
          style={{ gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))` }}
        >
          {metrics.map((metric, i) => (
            <div key={i} className={styles.modalMetricCard}>
              <div className={styles.modalMetricVal}>{metric.value}</div>
              <div className={styles.modalMetricLbl}>{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <h5 className={styles.modalSectionH5}>Project Overview</h5>
          <p className={styles.modalBodyP}>{overview}</p>
        </div>

        <div className={styles.modalSplitGrid}>
          <div className={styles.modalChallengeBox}>
            <h6 className={styles.modalTagRed}>The Problem</h6>
            <p className={styles.modalSplitP}>{challenge}</p>
          </div>

          <div className={styles.modalSolutionBox}>
            <h6 className={styles.modalTagGreen}>What We Built</h6>
            <p className={styles.modalSplitP}>{solution}</p>
          </div>
        </div>

        {quote && (
          <div className={styles.modalQuoteBox}>
            <p className={styles.modalQuoteText}>&ldquo;{quote.text}&rdquo;</p>
            <div className={styles.modalQuoteAuthor}>&mdash; {quote.author}</div>
          </div>
        )}

        {caseStudyLink && (
          <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <Link href={caseStudyLink} className={styles.modalCaseStudyLink}>
              Read Full Case Study <span>&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const PROJECTS_DATA: CardType[] = [
  ...PROJECTS.map((project) => ({
    category: project.category,
    title: project.tagline,
    src: project.image,
    content: (
      <ProjectModalContent
        client={project.client}
        industry={project.industry}
        image={project.image}
        overview={project.overview}
        challenge={project.challenge}
        solution={project.solution}
        metrics={project.metrics}
        quote={
          project.testimonial
            ? {
                text: project.testimonial.quote,
                author: `${project.testimonial.author}, ${project.testimonial.role}`,
              }
            : undefined
        }
        liveUrl={project.liveUrl}
        caseStudyLink={`/work/${project.id}`}
      />
    ),
  })),
  {
    category: 'Custom Software & AI Systems',
    title: 'Tailored CRMs, Portals & Practical AI Automation',
    src: '/hero-software.png',
    content: (
      <ProjectModalContent
        client="Bespoke Software & AI Workflows"
        industry="SME & Enterprise Operations"
        image="/hero-software.png"
        overview="Beyond public storefronts, we build custom internal web portals, bespoke CRM databases, automated lead triage assistants, and API integrations around exact business workflows."
        challenge="Teams outgrow spreadsheets and spend dozens of manual hours each week copy-pasting quotes, WhatsApp leads, and inventory numbers across disconnected apps."
        solution="We deliver PostgreSQL-backed Next.js applications and grounded LLM/webhook pipelines with role-based permissions and zero per-seat SaaS lock-in."
        metrics={[
          { label: 'Code Ownership', value: '100%' },
          { label: 'Manual Ops Saved', value: '40+ hrs' },
          { label: 'Lead Response', value: '24/7' },
        ]}
        caseStudyLink="/custom-software"
      />
    ),
  },
];

export function FacilitiesSection() {
  const cards = PROJECTS_DATA.map((card, index) => (
    <Card key={card.src + index} card={card} index={index} layout={true} />
  ));

  return (
    <section
      id="facilities"
      className={styles.projectsCarouselRoot}
      style={{
        background: '#ffffff',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div className={styles.projectsHeaderContainer}>
        <div style={{ textAlign: 'center' }}>
          <motion.h2
            id="facilities-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
            className={styles.projectsHeadingTitle}
            style={{
              fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              color: '#0f0f11',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            SELECTED CLIENT
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 600,
                marginTop: '0.6rem',
                letterSpacing: '0.02em',
              }}
            >
              CASE STUDIES
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={styles.projectsHeadingSub}
          >
            Explore how we solve real conversion, loyalty, speed, and automation bottlenecks across live e-commerce stores and custom web platforms.
          </motion.p>

          <div style={{ marginTop: '1.35rem' }}>
            <Link
              href="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#2563c9',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              View All Case Studies &amp; Technical Breakdowns <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Apple Cards Carousel */}
      <div className={styles.projectsCarouselOuter}>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
