import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShellClient } from '@/components/PageShellClient';
import { QuoteFunnel } from '@/components/QuoteFunnel';
import { SubpageFaqList } from '@/components/SubpageFaqList';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrackedPhoneAnchor, TrackedWhatsAppAnchor } from '@/components/TrackedLinks';
import { getBreadcrumbSchema, getContactPageSchema, getFaqSchema } from '@/lib/schema';
import {
  DEFAULT_SOCIAL_IMAGES,
  SITE_EMAIL,
  SITE_LOCATION_LABEL,
  SITE_NAME,
  SITE_PHONE_DISPLAY,
  SITE_URL,
} from '@/lib/site';
import styles from '@/components/SubpageStyles.module.css';

const CONTACT_FAQS = [
  {
    q: 'How fast will you reply after I submit the project estimator?',
    a: 'We review every quotation request within one business day and respond via WhatsApp, email, or a brief discovery call depending on your preference.',
  },
  {
    q: 'Do I need a full technical specification document before contacting you?',
    a: 'No. Simply select the type of website, store, or software you need, pick a rough LKR or USD budget range, and describe what your business sells or automates in plain language.',
  },
  {
    q: 'Do you quote projects in Sri Lankan Rupees (LKR) and USD?',
    a: 'Yes. Local Sri Lankan clients can choose LKR project estimates and payment schedules, while overseas clients across the UAE, UK, Australia, or North America can select USD quotes.',
  },
  {
    q: 'Can we start with an urgent WhatsApp chat or phone call?',
    a: `Yes—message us directly on WhatsApp or call ${SITE_PHONE_DISPLAY} anytime during business hours for immediate guidance.`,
  },
];

export const metadata: Metadata = {
  title: {
    absolute: `Contact ${SITE_NAME} | Free Website & Software Consultation Sri Lanka`,
  },
  description:
    'Get a free website, e-commerce, CRM software, SEO, or AI automation quotation from Swift Stack Digital. Toggle LKR or USD budgets, message via WhatsApp (+94 75 8441413), or schedule a consultation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    title: `Contact ${SITE_NAME} | Free Website & Software Consultation`,
    description:
      'Request a fast project estimate in LKR or USD, or speak with our engineering team on WhatsApp (+94 75 8441413).',
    images: DEFAULT_SOCIAL_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_NAME}`,
    description: 'Get a free website, e-commerce, or custom software quotation.',
    images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getContactPageSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <JsonLd data={getFaqSchema(CONTACT_FAQS)} />

      <PageShellClient includeQuoteSection={false}>
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
                Contact
              </span>
            </nav>

            <div className={styles.heroEyebrowWrap}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} aria-hidden="true" />
                <span>Free Consultation &bull; {SITE_LOCATION_LABEL}</span>
              </div>
            </div>

            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitle}>
                Get a Free Website <span className={styles.heroTitleItalic}>Consultation</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Tell us what your business needs—website development, e-commerce, custom CRM software, SEO recovery, or AI automation. We will recommend the right solution and an honest estimate in LKR or USD.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE FUNNEL + DIRECT CONTACT DESK */}
        <section className={styles.tintSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Left Direct Desk */}
              <aside className={styles.contactCardDark} aria-label="Direct Contact Information">
                <span className={styles.channelLabel}>Direct Agency Desk</span>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.65rem, 2.8vw, 2.3rem)',
                    fontWeight: 500,
                    margin: '0.4rem 0 0.75rem',
                    lineHeight: 1.2,
                  }}
                >
                  Prefer talking to an engineer directly?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.74)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  Skip agency account managers. Message us directly on WhatsApp or call to talk scope, budgets, and timelines.
                </p>

                <div className={styles.contactChannelList}>
                  <TrackedWhatsAppAnchor
                    location="contact_page_card"
                    className={styles.contactChannelLink}
                  >
                    <span className={styles.channelLabel}>WhatsApp (Fastest Reply)</span>
                    <span className={styles.channelValue}>Chat {SITE_PHONE_DISPLAY} ↗</span>
                  </TrackedWhatsAppAnchor>

                  <TrackedPhoneAnchor
                    location="contact_page_card"
                    className={styles.contactChannelLink}
                  >
                    <span className={styles.channelLabel}>Phone Call</span>
                    <span className={styles.channelValue}>{SITE_PHONE_DISPLAY}</span>
                  </TrackedPhoneAnchor>

                  <a href={`mailto:${SITE_EMAIL}`} className={styles.contactChannelLink}>
                    <span className={styles.channelLabel}>Email Desk</span>
                    <span className={styles.channelValue}>{SITE_EMAIL}</span>
                  </a>

                  <div className={styles.contactChannelLink}>
                    <span className={styles.channelLabel}>Operating Base</span>
                    <span className={styles.channelValue} style={{ fontSize: '0.95rem' }}>
                      {SITE_LOCATION_LABEL}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.12)',
                    paddingTop: '1.25rem',
                    marginTop: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#38bdf8',
                      marginBottom: '0.75rem',
                    }}
                  >
                    What Happens Next
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    <li>1. We review your service pick, goals, and website link (if any).</li>
                    <li>2. Within 1 business day, we share recommended architecture + estimate.</li>
                    <li>3. Zero obligation—decide cleanly if the scope fits your timeline.</li>
                  </ul>
                </div>
              </aside>

              {/* Right Interactive Project Estimator */}
              <div className={styles.contactFormCard}>
                <span className={styles.sectionEyebrow}>1-Minute Estimator</span>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                    fontWeight: 600,
                    color: '#0f172a',
                    margin: '0 0 0.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  Request Your Project Quote
                </h2>
                <p style={{ fontSize: '0.93rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Select the solution you need, toggle LKR or USD currency, and tell us briefly about your business.
                </p>
                <QuoteFunnel sourcePage="/contact" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. PRE-ENQUIRY FAQ */}
        <section className={styles.lightSection}>
          <div className={styles.containerNarrow}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Before You Reach Out</span>
              <h2 className={styles.sectionTitle}>
                Common Enquiry <span className={styles.heroTitleItalic}>Questions</span>
              </h2>
            </div>
            <SubpageFaqList items={CONTACT_FAQS} />
          </div>
        </section>
      </PageShellClient>
    </>
  );
}
