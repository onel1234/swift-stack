import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageShellClient } from '@/components/PageShellClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrackedCtaLink, TrackedWhatsAppAnchor } from '@/components/TrackedLinks';
import { PROJECTS } from '@/data/projects';
import { getBreadcrumbSchema } from '@/lib/schema';
import { DEFAULT_SOCIAL_IMAGES, SITE_NAME, SITE_URL } from '@/lib/site';
import styles from '@/components/SubpageStyles.module.css';

export const metadata: Metadata = {
  title: {
    absolute: `Our Work & Case Studies | ${SITE_NAME}`,
  },
  description:
    'Explore websites, e-commerce stores (Ceylon Naturalist, Chill Co. loyalty & affiliate storefront), custom software, and high-speed web builds by Swift Stack Digital.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/work`,
    siteName: SITE_NAME,
    title: `Our Work & Case Studies | ${SITE_NAME}`,
    description:
      'Real commercial case studies showing business problems solved, deliverables, tech stacks, and measurable web growth.',
    images: DEFAULT_SOCIAL_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Work & Case Studies | ${SITE_NAME}`,
    description:
      'Explore client builds by Swift Stack Digital across e-commerce, B2B platforms, wellness, and workflow automation.',
    images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/work' },
        ])}
      />

      <PageShellClient includeQuoteSection quoteSourcePage="/work">
        {/* 1. HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroAurora} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroContent}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <span aria-current="page" className={styles.breadcrumbCurrent}>
                Our Work
              </span>
            </nav>

            <div className={styles.heroEyebrowWrap}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                <span>Client Portfolio • Sri Lanka &amp; Global</span>
              </div>
            </div>

            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitle}>
                Case Studies &amp;{' '}
                <span className={styles.heroTitleItalic}>Client Work</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We don&apos;t ship pretty mockups that sit idle. Explore how we help brands like Ceylon Naturalist, Chill Co., Prana Fuel, and B2B teams turn slow digital experiences into fast websites, loyalty-ready stores, and automated systems.
              </p>

              <div className={styles.heroCtaRow}>
                <TrackedCtaLink
                  href="#estimate"
                  label="Estimate Similar Project"
                  location="work_hero"
                  className={styles.primaryBtnWhite}
                >
                  <span>Estimate Your Project</span>
                  <span aria-hidden="true">→</span>
                </TrackedCtaLink>
                <TrackedWhatsAppAnchor
                  location="work_hero"
                  message="Hi Swift Stack Digital, I reviewed your case studies and would like to discuss a project."
                  className={styles.whatsappBtn}
                >
                  <span>Chat on WhatsApp</span>
                  <span aria-hidden="true">↗</span>
                </TrackedWhatsAppAnchor>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CASE STUDIES LIST */}
        <section className={styles.tintSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Selected Launches</span>
              <h2 className={styles.sectionTitle}>
                Business Problems We <span className={styles.heroTitleItalic}>Solved</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Every case study breaks down the client bottleneck, what we engineered, the production stack, and outcome metrics.
              </p>
            </div>

            <div className={styles.workStack}>
              {PROJECTS.map((project, idx) => (
                <article
                  key={project.id}
                  className={`${styles.workFeatureCard} ${idx % 2 === 1 ? styles.workFeatureReversed : ''}`}
                >
                  <div>
                    <div className={styles.workMetaLine}>
                      <span className={styles.workClientBadge}>{project.client}</span>
                      <span className={styles.workIndustry}>{project.industry}</span>
                    </div>

                    <h2 className={styles.workCardTitle}>{project.title}</h2>
                    <p className={styles.workOverview}>{project.overview}</p>

                    <div className={styles.metricsStrip}>
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className={styles.metricItem}>
                          <div className={styles.metricNum}>{metric.value}</div>
                          <div className={styles.metricLabel}>{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.workProblemBox}>
                      <div className={styles.workMiniNote}>
                        <h3>Client Challenge</h3>
                        <p>{project.challenge}</p>
                      </div>
                      <div className={styles.workMiniNote}>
                        <h3>What We Built</h3>
                        <p>{project.solution}</p>
                      </div>
                    </div>

                    <div className={styles.pillList}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.cardActions}>
                      <Link href={`/work/${project.id}`} className={styles.primaryBtnBlue}>
                        <span>Read Case Study</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.outlineBtnDark}
                      >
                        <span>Visit Live Site</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.workImageCol}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1023px) calc(100vw - 64px), 560px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Private NDA Software & Automation Banner */}
            <div className={styles.darkCalloutBanner}>
              <div style={{ maxWidth: '42rem' }}>
                <span className={styles.channelLabel}>Confidential B2B &amp; Internal Systems</span>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
                    fontWeight: 500,
                    margin: '0.45rem 0 0.75rem',
                    lineHeight: 1.2,
                  }}
                >
                  Need custom software, internal CRMs, or AI automation?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, fontSize: '0.97rem' }}>
                  In addition to our public websites and e-commerce builds, we engineer private internal portals, custom quoting dashboards, loyalty engines, and AI support workflows. Anonymized architecture walkthroughs are available on your consultation call.
                </p>
              </div>
              <div className={styles.cardActions}>
                <Link href="/custom-software" className={styles.primaryBtnWhite}>
                  <span>Custom Software</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/ai-automation" className={styles.secondaryBtnGlass}>
                  <span>AI Automation</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageShellClient>
    </>
  );
}
