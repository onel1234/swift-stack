import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShellClient } from '@/components/PageShellClient';
import { QuoteFunnel } from '@/components/QuoteFunnel';
import { SubpageFaqList } from '@/components/SubpageFaqList';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrackedWhatsAppAnchor } from '@/components/TrackedLinks';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';
import { getBlogArticleSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/schema';
import { DEFAULT_SOCIAL_IMAGES, SITE_NAME, SITE_URL } from '@/lib/site';
import styles from '@/components/SubpageStyles.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: {
      absolute: `${post.metaTitle} | ${SITE_NAME}`,
    },
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      title: `${post.metaTitle} | ${SITE_NAME}`,
      description: post.metaDescription,
      publishedTime: `${post.publishedDate}T00:00:00.000Z`,
      modifiedTime: `${post.modifiedDate}T00:00:00.000Z`,
      images: DEFAULT_SOCIAL_IMAGES,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.metaTitle} | ${SITE_NAME}`,
      description: post.metaDescription,
      images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherGuides = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={getBlogArticleSchema(post)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Buyer Guides', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      {post.faqItems.length > 0 ? <JsonLd data={getFaqSchema(post.faqItems)} /> : null}

      <PageShellClient defaultService={post.quoteServiceDefault} includeQuoteSection={false}>
        {/* 1. ARTICLE HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroAurora} aria-hidden="true" />
          <div className={`${styles.containerNarrow} ${styles.heroContent}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <Link href="/blog" className={styles.breadcrumbLink}>
                Buyer Guides
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <span aria-current="page" className={styles.breadcrumbCurrent}>
                {post.category}
              </span>
            </nav>

            <div className={styles.heroEyebrowWrap}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                <span>{post.category}</span>
              </div>
            </div>

            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitleArticle}>{post.title}</h1>
              <p className={styles.heroSubtitle}>{post.excerpt}</p>

              <div className={styles.heroMetaRow}>
                <span>By {post.authorName}</span>
                <span aria-hidden="true">&bull;</span>
                <span>Updated {post.modifiedDate}</span>
                <span aria-hidden="true">&bull;</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ARTICLE CONTENT BODY */}
        <article className={styles.lightSection}>
          <div className={styles.containerNarrow}>
            {/* Key Takeaways Summary Box */}
            <div className={styles.takeawaysBox}>
              <p className={styles.takeawaysHeading}>Key Takeaways &amp; Quick Summary</p>
              <ul className={styles.checkList}>
                {post.keyTakeaways.map((point) => (
                  <li key={point}>
                    <span className={styles.checkBadge} aria-hidden="true">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured Sections */}
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.articleSectionBlock}>
                <h2 className={styles.articleH2}>{section.heading}</h2>

                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className={styles.articleP}>
                    {paragraph}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 ? (
                  <ul className={styles.articleBullets}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {section.table ? (
                  <div className={styles.tableScrollWrap}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIdx) => (
                          <tr key={rowIdx}>
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                style={cellIdx === 0 ? { fontWeight: 600, color: '#0f172a' } : undefined}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {section.callout ? (
                  <div className={styles.calloutWarning}>
                    <p className={styles.calloutTitle}>{section.callout.title}</p>
                    <p className={styles.calloutBody}>{section.callout.body}</p>
                  </div>
                ) : null}
              </section>
            ))}

            {/* Related Commercial Service Cross-Link */}
            <div className={styles.infoCardTint} style={{ marginTop: '2rem' }}>
              <span className={styles.sectionEyebrow}>Recommended Service Path</span>
              <h2 className={styles.infoCardTitle} style={{ fontSize: '1.35rem' }}>
                Ready to put this into practice?
              </h2>
              <p className={styles.infoCardText} style={{ marginBottom: '1.25rem' }}>
                Explore how Swift Stack Digital architects, prices, and delivers this capability for businesses across Sri Lanka and overseas.
              </p>
              <div className={styles.cardActions}>
                <Link href={post.relatedServiceHref} className={styles.primaryBtnBlue}>
                  <span>{post.relatedServiceLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/work" className={styles.outlineBtnDark}>
                  <span>See Client Case Studies</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Inline High-Converting Enquiry Funnel */}
            <div className={styles.inlineCtaBox} id="estimate">
              <div className={styles.inlineCtaGrid}>
                <div>
                  <span className={styles.channelLabel}>Free Website &amp; Software Consultation</span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                      fontWeight: 600,
                      margin: '0.5rem 0 0.85rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {post.ctaHeading}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, fontSize: '0.96rem', marginBottom: '1.5rem' }}>
                    {post.ctaBody}
                  </p>
                  <TrackedWhatsAppAnchor
                    location={`blog_cta_${post.slug}`}
                    serviceType={post.quoteServiceDefault}
                    message={`Hi Swift Stack Digital, I read "${post.title}" and would like a free consultation.`}
                    className={styles.whatsappBtn}
                  >
                    <span>Message on WhatsApp</span>
                    <span aria-hidden="true">↗</span>
                  </TrackedWhatsAppAnchor>
                </div>

                <div>
                  <QuoteFunnel
                    defaultService={post.quoteServiceDefault}
                    sourcePage={`/blog/${post.slug}`}
                    theme="dark"
                    compact
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 3. ARTICLE FAQ */}
        {post.faqItems.length > 0 ? (
          <section className={styles.tintSection}>
            <div className={styles.containerNarrow}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>Quick Answers</span>
                <h2 className={styles.sectionTitle}>
                  Frequently Asked <span className={styles.heroTitleItalic}>Questions</span>
                </h2>
              </div>
              <SubpageFaqList items={post.faqItems} />
            </div>
          </section>
        ) : null}

        {/* 4. MORE GUIDES */}
        <section className={styles.lightSection} style={{ paddingTop: '3.75rem', paddingBottom: '3.75rem' }}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Keep Researching</span>
              <h2 className={styles.sectionTitle}>
                More Buyer <span className={styles.heroTitleItalic}>Guides</span>
              </h2>
            </div>

            <div className={styles.threeColGrid}>
              {otherGuides.map((guide) => (
                <article key={guide.slug} className={styles.articleCard}>
                  <div className={styles.articleMetaLine}>
                    <span className={styles.badgeBlue}>{guide.category}</span>
                    <span className={styles.readingTime}>{guide.readingTime}</span>
                  </div>
                  <h3 className={styles.articleCardTitle} style={{ fontSize: '1.22rem' }}>
                    <Link
                      href={`/blog/${guide.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {guide.title}
                    </Link>
                  </h3>
                  <p className={styles.articleCardExcerpt}>{guide.excerpt}</p>
                  <div className={styles.articleCardFooter}>
                    <Link href={`/blog/${guide.slug}`} className={styles.textActionLink}>
                      <span>Read Guide</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
              <Link href="/blog" className={styles.outlineBtnDark}>
                <span>View All 7 Buyer Guides</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </PageShellClient>
    </>
  );
}
