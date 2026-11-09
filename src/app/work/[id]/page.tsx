import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageShellClient } from '@/components/PageShellClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrackedCtaLink } from '@/components/TrackedLinks';
import { getProjectBySlug, PROJECTS } from '@/data/projects';
import { getBreadcrumbSchema, getWorkCaseStudySchema } from '@/lib/schema';
import { DEFAULT_SOCIAL_IMAGES, SITE_NAME, SITE_URL, type QuoteServiceOption } from '@/lib/site';
import styles from '@/components/SubpageStyles.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

function getDefaultServiceForProject(projectId: string): QuoteServiceOption {
  switch (projectId) {
    case 'chill-co':
      return 'E-commerce website';
    case 'catalyst-digital':
      return 'Custom software / CRM';
    default:
      return 'Business website';
  }
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: {
      absolute: `${project.metaTitle} | ${SITE_NAME}`,
    },
    description: project.metaDescription,
    alternates: {
      canonical: `/work/${project.id}`,
    },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/work/${project.id}`,
      siteName: SITE_NAME,
      title: `${project.metaTitle} | ${SITE_NAME}`,
      description: project.metaDescription,
      images: DEFAULT_SOCIAL_IMAGES,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.metaTitle} | ${SITE_NAME}`,
      description: project.metaDescription,
      images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  const defaultService = getDefaultServiceForProject(project.id);
  const otherProjects = PROJECTS.filter((item) => item.id !== project.id);

  return (
    <>
      <JsonLd data={getWorkCaseStudySchema(project)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/work' },
          { name: project.client, path: `/work/${project.id}` },
        ])}
      />

      <PageShellClient
        defaultService={defaultService}
        includeQuoteSection
        quoteSourcePage={`/work/${project.id}`}
      >
        {/* 1. CASE STUDY HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroAurora} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroContent}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <Link href="/work" className={styles.breadcrumbLink}>
                Our Work
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <span aria-current="page" className={styles.breadcrumbCurrent}>
                {project.client}
              </span>
            </nav>

            <div className={styles.heroEyebrowWrap}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                <span>{project.category} &bull; {project.industry}</span>
              </div>
            </div>

            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitleArticle}>{project.title}</h1>
              <p className={styles.heroSubtitle}>{project.tagline}</p>

              <div className={styles.heroCtaRow}>
                <TrackedCtaLink
                  href="#estimate"
                  label="Estimate Similar Build"
                  location={`work_detail_${project.id}`}
                  className={styles.primaryBtnWhite}
                >
                  <span>Build Something Similar</span>
                  <span aria-hidden="true">→</span>
                </TrackedCtaLink>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtnGlass}
                >
                  <span>Visit Live Website</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className={styles.caseHeroMetrics}>
              {project.metrics.map((metric) => (
                <div key={metric.label} className={styles.caseHeroMetricCard}>
                  <div className={styles.caseHeroMetricVal}>{metric.value}</div>
                  <div className={styles.caseHeroMetricLbl}>{metric.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.caseHeroMedia}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                preload
                sizes="(max-width: 768px) calc(100vw - 32px), 1240px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* 2. CHALLENGE, SOLUTION, DELIVERABLES & TESTIMONIAL */}
        <section className={styles.lightSection}>
          <div className={styles.container}>
            <div className={styles.infoCardTint} style={{ marginBottom: '1.75rem' }}>
              <span className={styles.sectionEyebrow}>Project Overview</span>
              <h2 className={styles.infoCardTitle} style={{ fontSize: '1.5rem' }}>
                About {project.client}
              </h2>
              <p className={styles.infoCardText}>{project.overview}</p>
            </div>

            <div className={styles.twoColGrid} style={{ marginBottom: '1.75rem' }}>
              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>01 / The Bottleneck</span>
                <h2 className={styles.infoCardTitle}>Client Challenge</h2>
                <p className={styles.infoCardText}>{project.challenge}</p>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>02 / The Architecture</span>
                <h2 className={styles.infoCardTitle}>What Swift Stack Developed</h2>
                <p className={styles.infoCardText}>{project.solution}</p>
              </div>
            </div>

            <div className={styles.twoColGrid}>
              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>03 / Scope Delivered</span>
                <h2 className={styles.infoCardTitle}>Key Deliverables</h2>
                <ul className={styles.checkList}>
                  {project.deliverables.map((item) => (
                    <li key={item}>
                      <span className={styles.checkBadge} aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>04 / Stack &amp; Related Capabilities</span>
                <h2 className={styles.infoCardTitle}>Technologies Used</h2>
                <div className={styles.pillList}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#64748b',
                    margin: '1.25rem 0 0.65rem',
                  }}
                >
                  Matching Agency Services
                </h3>
                <div className={styles.cardActions}>
                  {project.relatedServices.map((svc) => (
                    <Link key={svc.href} href={svc.href} className={styles.outlineBtnDark}>
                      <span>{svc.label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {project.testimonial ? (
              <blockquote className={styles.quoteBlock}>
                <p className={styles.quoteBlockText}>&ldquo;{project.testimonial.quote}&rdquo;</p>
                <footer className={styles.quoteBlockAuthor}>
                  — {project.testimonial.author}, {project.testimonial.role}
                </footer>
              </blockquote>
            ) : null}
          </div>
        </section>

        {/* 3. MORE CASE STUDIES */}
        <section className={styles.tintSection} style={{ paddingBottom: '3.5rem' }}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Keep Exploring</span>
              <h2 className={styles.sectionTitle}>
                More Client <span className={styles.heroTitleItalic}>Case Studies</span>
              </h2>
            </div>

            <div className={styles.threeColGrid}>
              {otherProjects.map((other) => (
                <article key={other.id} className={styles.articleCard}>
                  <div className={styles.articleMetaLine}>
                    <span className={styles.badgeBlue}>{other.client}</span>
                    <span className={styles.readingTime}>{other.category}</span>
                  </div>
                  <h3 className={styles.articleCardTitle} style={{ fontSize: '1.25rem' }}>
                    {other.title}
                  </h3>
                  <p className={styles.articleCardExcerpt}>{other.tagline}</p>
                  <div className={styles.articleCardFooter}>
                    <Link href={`/work/${other.id}`} className={styles.textActionLink}>
                      <span>Read Case Study</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShellClient>
    </>
  );
}
