import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShellClient } from '@/components/PageShellClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrackedCtaLink, TrackedWhatsAppAnchor } from '@/components/TrackedLinks';
import { getAboutPageSchema, getBreadcrumbSchema } from '@/lib/schema';
import { DEFAULT_SOCIAL_IMAGES, PRIMARY_SERVICES, SITE_LOCATION_LABEL, SITE_NAME, SITE_URL } from '@/lib/site';
import styles from '@/components/SubpageStyles.module.css';

export const metadata: Metadata = {
  title: {
    absolute: `About ${SITE_NAME} | Web & Software Engineers in Sri Lanka`,
  },
  description:
    'Swift Stack Digital builds custom websites, e-commerce online stores, CRM software, technical SEO systems, and AI automation from Kiribathgoda & Colombo for Sri Lankan and international companies.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    title: `About ${SITE_NAME} | Web & Software Engineers in Sri Lanka`,
    description:
      'Meet the engineering-first digital agency helping Sri Lankan and global businesses turn slow websites into scalable lead-generation platforms.',
    images: DEFAULT_SOCIAL_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE_NAME}`,
    description:
      'Custom web development, e-commerce, CRM software, SEO, and AI workflow automation engineered in Sri Lanka.',
    images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getAboutPageSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ])}
      />

      <PageShellClient includeQuoteSection quoteSourcePage="/about">
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
                About Us
              </span>
            </nav>

            <div className={styles.heroEyebrowWrap}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                <span>{SITE_LOCATION_LABEL}</span>
              </div>
            </div>

            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitle}>
                Engineering Websites &amp; Software{' '}
                <span className={styles.heroTitleItalic}>That Grow Businesses</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Most agencies hand over bloated templates that fail Google Core Web Vitals and generate zero enquiries. Swift Stack Digital pairs modern full-stack software engineering with commercial SEO and clear conversion funnels.
              </p>

              <div className={styles.heroCtaRow}>
                <TrackedCtaLink
                  href="#estimate"
                  label="Free Consultation About"
                  location="about_hero"
                  className={styles.primaryBtnWhite}
                >
                  <span>Get a Free Consultation</span>
                  <span aria-hidden="true">→</span>
                </TrackedCtaLink>
                <Link href="/work" className={styles.secondaryBtnGlass}>
                  <span>View Client Work</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <TrackedWhatsAppAnchor
                  location="about_hero"
                  className={styles.whatsappBtn}
                >
                  <span>WhatsApp Us</span>
                  <span aria-hidden="true">↗</span>
                </TrackedWhatsAppAnchor>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PHILOSOPHY & ENGINEERING STANDARD */}
        <section className={styles.lightSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Why We Exist</span>
              <h2 className={styles.sectionTitle}>
                Visibility &amp; Conversion,{' '}
                <span className={styles.heroTitleItalic}>Built Together</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A good-looking site nobody finds on Google—or a high-traffic site with a frustrating enquiry process—leaves money on the table.
              </p>
            </div>

            <div className={styles.twoColGrid}>
              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>What Goes Wrong Elsewhere</span>
                <h3 className={styles.infoCardTitle}>Why Many Agency Sites Disappoint</h3>
                <ul className={styles.checkList}>
                  <li>
                    <span className={styles.checkBadge} aria-hidden="true">!</span>
                    <span>Blocking splash screens, oversized PNGs, and plugin-bloated builders slow down mobile 4G loads.</span>
                  </li>
                  <li>
                    <span className={styles.checkBadge} aria-hidden="true">!</span>
                    <span>One homepage tries to rank for everything instead of creating dedicated commercial service pages.</span>
                  </li>
                  <li>
                    <span className={styles.checkBadge} aria-hidden="true">!</span>
                    <span>Visitors cannot tell what a company costs, why to trust it, or how to message on WhatsApp quickly.</span>
                  </li>
                </ul>
              </div>

              <div className={styles.infoCardTint}>
                <span className={styles.sectionEyebrow}>Our Engineering Approach</span>
                <h3 className={styles.infoCardTitle}>How Swift Stack Builds Differently</h3>
                <ul className={styles.checkList}>
                  <li>
                    <span className={styles.checkBadge} aria-hidden="true">✓</span>
                    <span>Fast server-rendered Next.js &amp; React pages built so Googlebot indexes every core offer reliably.</span>
                  </li>
                  <li>
                    <span className={styles.checkBadge} aria-hidden="true">✓</span>
                    <span>Clear case study storytelling, verified schema markup, and LKR / USD quotation selectors built to convert.</span>
                  </li>
                  <li>
                    <span className={styles.checkBadge} aria-hidden="true">✓</span>
                    <span>Clean source code, direct engineering communication, and practical AI &amp; CRM automation where it saves staff hours.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW WE COLLABORATE */}
        <section className={styles.tintSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Delivery Process</span>
              <h2 className={styles.sectionTitle}>
                How We Work With <span className={styles.heroTitleItalic}>Clients</span>
              </h2>
            </div>

            <div className={styles.threeColGrid}>
              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>Step 01</span>
                <h3 className={styles.infoCardTitle}>Honest Scope &amp; Keyword Alignment</h3>
                <p className={styles.infoCardText}>
                  We start with your business goals, target buyers in Sri Lanka or overseas, and exact features required for Version 1 so you never pay for unnecessary bloat.
                </p>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>Step 02</span>
                <h3 className={styles.infoCardTitle}>Transparent Staging Previews</h3>
                <p className={styles.infoCardText}>
                  You test live mobile and desktop builds during development rather than waiting weeks in the dark for a surprise reveal.
                </p>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.sectionEyebrow}>Step 03</span>
                <h3 className={styles.infoCardTitle}>Launch Hygiene &amp; Ownership</h3>
                <p className={styles.infoCardText}>
                  We ship with verified canonicals, sitemaps, GA4 lead tracking, WhatsApp conversion hooks, and full ownership of your domain, hosting, and code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CAPABILITIES DIRECTORY */}
        <section className={styles.lightSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>What We Build</span>
              <h2 className={styles.sectionTitle}>
                Core Agency <span className={styles.heroTitleItalic}>Services</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Dedicated engineering tracks tailored for websites, online retail, operational software, search visibility, and automation.
              </p>
            </div>

            <div className={styles.threeColGrid}>
              {PRIMARY_SERVICES.map((svc) => (
                <article key={svc.slug} className={styles.articleCard}>
                  <span className={styles.badgeBlue} style={{ alignSelf: 'flex-start' }}>
                    {svc.shortLabel}
                  </span>
                  <h3 className={styles.articleCardTitle} style={{ fontSize: '1.3rem' }}>
                    {svc.label}
                  </h3>
                  <p className={styles.articleCardExcerpt}>{svc.description}</p>
                  <div className={styles.articleCardFooter}>
                    <Link href={svc.href} className={styles.textActionLink}>
                      <span>Explore Service</span>
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
