import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShellClient } from '@/components/PageShellClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrackedCtaLink } from '@/components/TrackedLinks';
import { BLOG_POSTS } from '@/data/blog';
import { getBreadcrumbSchema } from '@/lib/schema';
import { DEFAULT_SOCIAL_IMAGES, SITE_NAME, SITE_URL } from '@/lib/site';
import styles from '@/components/SubpageStyles.module.css';

export const metadata: Metadata = {
  title: {
    absolute: `Sri Lanka Web, E-Commerce & Software Buyer Guides | ${SITE_NAME}`,
  },
  description:
    'Honest guides on website costs in Sri Lanka (2026), WordPress vs custom React/Next.js, starting an online store, custom CRM ROI, and practical AI business automation.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: `Sri Lanka Web, E-Commerce & Software Buyer Guides | ${SITE_NAME}`,
    description:
      'People-first guides answering real cost, technology, e-commerce, and AI automation questions for business owners.',
    images: DEFAULT_SOCIAL_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Buyer Guides & Insights | ${SITE_NAME}`,
    description:
      'Practical articles on Sri Lanka website pricing, e-commerce setup, WordPress vs custom code, and software automation.',
    images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Buyer Guides', path: '/blog' },
        ])}
      />

      <PageShellClient includeQuoteSection quoteSourcePage="/blog">
        {/* 1. HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroAurora} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroContent}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <span aria-current="page" className={styles.breadcrumbCurrent}>
                Buyer Guides
              </span>
            </nav>

            <div className={styles.heroEyebrowWrap}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                <span>Practical Pricing &amp; Strategy Guides</span>
              </div>
            </div>

            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitle}>
                Digital &amp; Software <span className={styles.heroTitleItalic}>Buyer Guides</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Skip generic AI fluff. Every guide below answers a specific question business owners ask before hiring a web, e-commerce, software, or AI automation partner in Sri Lanka and worldwide.
              </p>

              <div className={styles.heroCtaRow}>
                <TrackedCtaLink
                  href="#estimate"
                  label="Free Consultation Blog"
                  location="blog_index_hero"
                  className={styles.primaryBtnWhite}
                >
                  <span>Request a Free Consultation</span>
                  <span aria-hidden="true">→</span>
                </TrackedCtaLink>
                <Link href="/work" className={styles.secondaryBtnGlass}>
                  <span>Browse Case Studies</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ALL 7 COMMERCIAL GUIDES GRID */}
        <section className={styles.tintSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Read Before You Hire</span>
              <h2 className={styles.sectionTitle}>
                7 Essential Guides for <span className={styles.heroTitleItalic}>2026</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Transparent LKR and USD pricing comparisons, real architecture trade-offs, and practical checklists you can act on immediately.
              </p>
            </div>

            <div className={styles.blogGrid}>
              {BLOG_POSTS.map((post) => (
                <article key={post.slug} className={styles.articleCard}>
                  <div className={styles.articleMetaLine}>
                    <span className={styles.badgeBlue}>{post.category}</span>
                    <span className={styles.readingTime}>{post.readingTime}</span>
                  </div>

                  <h2 className={styles.articleCardTitle}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className={styles.articleCardAudience}>
                    <strong>Ideal for:</strong> {post.targetAudience}
                  </p>

                  <p className={styles.articleCardExcerpt}>{post.excerpt}</p>

                  <div className={styles.articleCardFooter}>
                    <Link href={`/blog/${post.slug}`} className={styles.textActionLink}>
                      <span>Read Full Guide</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href={post.relatedServiceHref}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: '#64748b',
                        textDecoration: 'underline',
                      }}
                    >
                      Related Service
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
