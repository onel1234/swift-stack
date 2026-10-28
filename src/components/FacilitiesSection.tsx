'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, Card, CardType } from '@/components/ui/apple-cards-carousel';
import Link from 'next/link';

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
      {/* Hero Preview Card inside modal */}
      <div className="modal-hero-banner">
        <img
          src={image}
          alt={client}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
          }}
        />
        <div className="modal-hero-content">
          <div>
            <span className="modal-hero-industry">{industry}</span>
            <h4 className="modal-hero-title">{client}</h4>
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-hero-live-btn"
            >
              Visit Live Site ↗
            </a>
          )}
        </div>
      </div>

      {/* Metrics Row */}
      {metrics && metrics.length > 0 && (
        <div className="modal-metrics-grid">
          {metrics.map((metric, i) => (
            <div key={i} className="modal-metric-card">
              <div className="modal-metric-val">{metric.value}</div>
              <div className="modal-metric-lbl">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Narrative Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <h5 className="modal-section-h5">Project Overview</h5>
          <p className="modal-body-p">{overview}</p>
        </div>

        <div className="modal-split-grid">
          <div className="modal-challenge-box">
            <h6 className="modal-tag-red">The Challenge</h6>
            <p className="modal-split-p">{challenge}</p>
          </div>

          <div className="modal-solution-box">
            <h6 className="modal-tag-green">The Solution</h6>
            <p className="modal-split-p">{solution}</p>
          </div>
        </div>

        {/* Client Quote if available */}
        {quote && (
          <div className="modal-quote-box">
            <p className="modal-quote-text">&ldquo;{quote.text}&rdquo;</p>
            <div className="modal-quote-author">&mdash; {quote.author}</div>
          </div>
        )}

        {/* Action Link to Case Study Page */}
        {caseStudyLink && (
          <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            <Link href={caseStudyLink} className="modal-casestudy-link">
              Read Full Case Study Documentation <span>&rarr;</span>
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-hero-banner {
          position: relative;
          width: 100%;
          height: 18rem;
          border-radius: 1.5rem;
          overflow: hidden;
          background-color: #111216;
        }
        .modal-hero-content {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .modal-hero-industry {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.75);
          display: block;
        }
        .modal-hero-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0.25rem 0 0;
        }
        .modal-hero-live-btn {
          background-color: #ffffff;
          color: #0a0a0a;
          padding: 0.625rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }
        .modal-metrics-grid {
          display: grid;
          grid-template-columns: repeat(${metrics.length}, minmax(0, 1fr));
          gap: 1rem;
        }
        .modal-metric-card {
          background-color: #f6f6f8;
          border-radius: 1.25rem;
          padding: 1.25rem 1rem;
          text-align: center;
        }
        .modal-metric-val {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700;
          color: #0f0f11;
          letter-spacing: -0.02em;
        }
        .modal-metric-lbl {
          font-size: 0.8125rem;
          font-weight: 500;
          color: rgba(15, 15, 17, 0.65);
          margin-top: 0.25rem;
        }
        .modal-section-h5 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f0f11;
          margin-bottom: 0.5rem;
        }
        .modal-body-p {
          font-size: 0.9375rem;
          line-height: 1.65;
          color: rgba(15, 15, 17, 0.75);
          margin: 0;
        }
        .modal-split-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
        }
        .modal-challenge-box,
        .modal-solution-box {
          background-color: #fbfbfd;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 1.25rem;
          padding: 1.25rem;
        }
        .modal-tag-red {
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #dc2626;
          margin: 0 0 0.5rem;
        }
        .modal-tag-green {
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #16a34a;
          margin: 0 0 0.5rem;
        }
        .modal-split-p {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(15, 15, 17, 0.7);
          margin: 0;
        }
        .modal-quote-box {
          background-color: #0a0a0a;
          color: #ffffff;
          border-radius: 1.25rem;
          padding: 1.5rem 1.75rem;
        }
        .modal-quote-text {
          font-size: 0.9375rem;
          font-style: italic;
          line-height: 1.6;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }
        .modal-quote-author {
          font-size: 0.8125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 0.6rem;
        }
        .modal-casestudy-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #0f0f11;
          text-decoration: none;
          border-bottom: 2px solid #0f0f11;
          padding-bottom: 0.2rem;
        }

        /* Mobile Adjustments for Modal Content */
        @media (max-width: 640px) {
          .modal-hero-banner {
            height: 12rem;
            border-radius: 1.25rem;
          }
          .modal-hero-content {
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            gap: 0.75rem;
          }
          .modal-hero-title {
            font-size: 1.35rem;
          }
          .modal-hero-live-btn {
            font-size: 0.8125rem;
            padding: 0.5rem 1rem;
          }
          .modal-metrics-grid {
            gap: 0.5rem;
          }
          .modal-metric-card {
            padding: 0.85rem 0.5rem;
            border-radius: 1rem;
          }
          .modal-metric-val {
            font-size: 1.25rem;
          }
          .modal-metric-lbl {
            font-size: 0.6875rem;
            line-height: 1.25;
          }
          .modal-split-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .modal-challenge-box,
          .modal-solution-box {
            padding: 1rem;
            border-radius: 1rem;
          }
          .modal-quote-box {
            padding: 1.25rem;
            border-radius: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

const PROJECTS_DATA: CardType[] = [
  {
    category: 'E-Commerce & Wellness',
    title: 'Scaling a Boutique Nature Brand to Global Markets',
    src: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
    content: (
      <ProjectModalContent
        client="Ceylon Naturalist"
        industry="Nature & Wildlife E-Commerce"
        image="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop"
        overview="Ceylon Naturalist connects global nature lovers with authentic Sri Lankan wilderness experiences and ethical products. We partnered to redesign their entire digital storefront from ground up."
        challenge="The client had a fragmented online presence with sluggish page loads and an outdated checkout flow that resulted in cart abandonment and low international conversion."
        solution="We engineered a bespoke, high-performance storefront with immersive visual storytelling, ultra-fast headless architecture, and localized multi-currency checkout."
        metrics={[
          { label: 'Conversion Rate', value: '+150%' },
          { label: 'Bounce Rate', value: '-40%' },
          { label: 'Avg Order Value', value: '2.5x' },
        ]}
        quote={{
          text: "The new platform completely transformed our business. We're seeing sales numbers we didn't think were possible this early on.",
          author: 'Founder, Ceylon Naturalist',
        }}
        liveUrl="https://ceylonnaturalist.com/"
        caseStudyLink="/work/ceylon-naturalist"
      />
    ),
  },
  {
    category: 'Streetwear & Apparel',
    title: 'High-Converting Storefront for Modern Streetwear',
    src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
    content: (
      <ProjectModalContent
        client="Chill Co."
        industry="Fashion & Apparel"
        image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
        overview="Chill Co is a contemporary apparel brand blending ancient Sri Lankan heritage aesthetics with high-end streetwear. We engineered an editorial, drop-driven digital experience."
        challenge="High drop traffic surges were causing friction in cart drawer interactions, and customer sizing questions were slowing down impulse purchases."
        solution="We engineered an interactive CartDrawer with real-time stock reservations, instant custom printing preview, and seamless mobile-first checkout architecture."
        metrics={[
          { label: 'System Uptime', value: '99.9%' },
          { label: 'Mobile Checkouts', value: '+85%' },
          { label: 'Page Load Speed', value: '1.1s' },
        ]}
        liveUrl="https://chill-co.vercel.app/"
        caseStudyLink="/work/chill-co"
      />
    ),
  },
  {
    category: 'Digital Agency & Tech',
    title: 'Dynamic Motion-Rich Platform for Strategic Momentum',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    content: (
      <ProjectModalContent
        client="Catalyst Digital"
        industry="Strategy & Technology Consultancy"
        image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
        overview="Catalyst Digital wanted an authoritative, visually arresting digital agency platform that commands attention from Fortune 500 decision makers."
        challenge="Their previous web presence felt static, generic, and failed to communicate the caliber of their high-value strategic momentum and digital execution."
        solution="We developed a fluid, kinetic web experience with bespoke shader interactions, frosted glass dimensional cards, and rapid-response lead capture workflows."
        metrics={[
          { label: 'Session Duration', value: '3.5x' },
          { label: 'Inbound Leads', value: '+180%' },
          { label: 'Core Web Vitals', value: '100%' },
        ]}
        liveUrl="https://catalyst-digital-alpha.vercel.app/"
        caseStudyLink="/work/catalyst-digital"
      />
    ),
  },
  {
    category: 'Health & Fitness',
    title: 'Igniting Digital Engagement for a Wellness Startup',
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    content: (
      <ProjectModalContent
        client="Prana Fuel"
        industry="Vitality & Functional Nutrition"
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
        overview="Prana Fuel is an ambitious wellness startup bringing clean energy and holistic vitality formulas to health-conscious professionals across the globe."
        challenge="Prana Fuel needed a high-energy digital experience to launch their new product line, but existing landing pages were slow and lacked visual impact."
        solution="We built a vibrant, motion-rich web application focused on maximum performance and kinetic design, with sub-second page loads and clear social proof."
        metrics={[
          { label: 'Page Load Time', value: '< 1s' },
          { label: 'User Engagement', value: '+210%' },
          { label: 'ROI on Ad Spend', value: '4.8x' },
        ]}
        quote={{
          text: "Their team didn't just build a website; they built an engine for our growth. The kinetic energy of the site perfectly matches our brand.",
          author: 'Marketing Director, Prana Fuel',
        }}
        liveUrl="https://prana-fuel-your-vitality.netlify.app/"
        caseStudyLink="/work/prana-fuel"
      />
    ),
  },
  {
    category: 'Cloud Infrastructure & AI',
    title: 'Intelligent Systems & Microservices Built for Scale',
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    content: (
      <ProjectModalContent
        client="Cloud & AI Infrastructure"
        industry="Enterprise Systems"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
        overview="We design and manage resilient cloud architectures on AWS, GCP, and Azure, integrating custom generative AI workflows and low-latency microservices."
        challenge="Growing companies face escalating cloud bills, security vulnerabilities, and unpredictable downtime during unexpected traffic surges."
        solution="We deployed automated CI/CD pipelines, containerized Kubernetes clusters, and AI-driven monitoring that maintains 99.99% uptime with zero manual overhead."
        metrics={[
          { label: 'SLA Reliability', value: '99.99%' },
          { label: 'Cloud Cost Cut', value: '60%' },
          { label: 'Latency Drop', value: '-75%' },
        ]}
        caseStudyLink="/work"
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
      className="projects-carousel-root"
      style={{
        background: '#ffffff',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div className="projects-header-container">
        {/* Section Header with exact Playfair Display font from Services */}
        <div style={{ textAlign: 'center' }}>
          <motion.h2
            id="facilities-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
            className="projects-heading-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              color: '#0f0f11',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            THE PROJECTS WE HAVE
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 600,
                marginTop: '0.6rem',
                letterSpacing: '0.02em',
              }}
            >
              DONE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="projects-heading-sub"
            style={{
              fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
              lineHeight: 1.65,
              color: 'rgba(15, 15, 17, 0.65)',
              maxWidth: '38rem',
              margin: '2rem auto 0',
              padding: '0 0.75rem',
            }}
          >
            Browse our portfolio of high-performance web applications, scalable platforms, and data-driven digital experiences designed to elevate your brand.
          </motion.p>
        </div>
      </div>

      {/* Apple Cards Carousel */}
      <div className="projects-carousel-outer">
        <Carousel items={cards} />
      </div>

      <style>{`
        .projects-carousel-root {
          padding: 5rem 0 6.5rem;
        }
        .projects-header-container {
          max-width: 78rem;
          margin: 0 auto 3.5rem;
          padding: 0 1.5rem;
          width: 100%;
        }
        .projects-heading-title {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
        }
        .projects-heading-sub {
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(15, 15, 17, 0.65);
          max-width: 38rem;
          margin: 2rem auto 0 !important;
        }
        .projects-carousel-outer {
          width: 100%;
          max-width: 90rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (max-width: 768px) {
          .projects-carousel-root {
            padding: 3.5rem 0 4.5rem;
          }
          .projects-header-container {
            margin-bottom: 2.25rem;
            padding: 0 1.25rem;
          }
          .projects-heading-title {
            font-size: clamp(1.85rem, 7.5vw, 2.75rem);
          }
          .projects-heading-sub {
            font-size: 0.9375rem;
            line-height: 1.6;
            margin-top: 1.85rem !important;
            padding: 0 0.5rem;
          }
          .projects-carousel-outer {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}
