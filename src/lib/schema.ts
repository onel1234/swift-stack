import type {
  AboutPage,
  Article,
  BreadcrumbList,
  ContactPage,
  FAQPage,
  Graph,
  Service,
  WebPage,
  WebSite,
  WithContext,
} from 'schema-dts';
import {
  PRIMARY_SERVICES,
  SERVICE_AREA_NAMES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_E164,
  SITE_URL,
} from '@/lib/site';
import type { ServicePageData } from '@/data/services';
import type { ProjectCaseStudy } from '@/data/projects';

export interface BreadcrumbItemInput {
  name: string;
  path: string;
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const PROFESSIONAL_SERVICE_ID = `${SITE_URL}/#service-provider`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const AREA_SERVED_PLACES = SERVICE_AREA_NAMES.map((name) => ({
  '@type': name === 'Worldwide' ? ('Place' as const) : name === 'Sri Lanka' ? ('Country' as const) : ('City' as const),
  name,
}));

export function getOrganizationAndServiceGraphSchema(): Graph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/icon.png`,
        },
        email: SITE_EMAIL,
        telephone: SITE_PHONE_E164,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: SITE_PHONE_E164,
            email: SITE_EMAIL,
            areaServed: [...SERVICE_AREA_NAMES],
            availableLanguage: ['English', 'Sinhala'],
          },
        ],
        areaServed: AREA_SERVED_PLACES,
      },
      {
        '@type': 'ProfessionalService',
        '@id': PROFESSIONAL_SERVICE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        email: SITE_EMAIL,
        telephone: SITE_PHONE_E164,
        priceRange: 'LKR 50,000 - LKR 250,000+ / USD $500+',
        areaServed: AREA_SERVED_PLACES,
        parentOrganization: {
          '@id': ORGANIZATION_ID,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital & Software Engineering Services',
          itemListElement: PRIMARY_SERVICES.map((svc) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: svc.label,
              description: svc.description,
              url: `${SITE_URL}${svc.href}`,
            },
          })),
        },
      },
    ],
  };
}

export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en',
    publisher: {
      '@id': ORGANIZATION_ID,
    },
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItemInput[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

export function getFaqSchema(items: { q: string; a: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function getServicePageSchema(service: ServicePageData): WithContext<Service> {
  const url = `${SITE_URL}/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.serviceSchemaName,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url,
    provider: {
      '@id': ORGANIZATION_ID,
    },
    areaServed: AREA_SERVED_PLACES,
  };
}

export function getBlogArticleSchema(post: {
  slug: string;
  title: string;
  metaDescription: string;
  publishedDate: string;
  modifiedDate: string;
  category: string;
  authorName: string;
}): WithContext<Article> {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    articleSection: post.category,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Organization',
      name: post.authorName,
      url: SITE_URL,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    image: `${SITE_URL}/opengraph-image`,
  };
}

export function getWorkCaseStudySchema(project: ProjectCaseStudy): WithContext<WebPage> {
  const url = `${SITE_URL}/work/${project.id}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    name: project.metaTitle,
    description: project.metaDescription,
    url,
    about: {
      '@type': 'CreativeWork',
      name: project.title,
      creator: {
        '@id': ORGANIZATION_ID,
      },
      datePublished: project.publishedDate,
    },
    isPartOf: {
      '@id': WEBSITE_ID,
    },
  };
}

export function getAboutPageSchema(): WithContext<AboutPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@id': ORGANIZATION_ID,
    },
    isPartOf: {
      '@id': WEBSITE_ID,
    },
  };
}

export function getContactPageSchema(): WithContext<ContactPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact`,
    name: `Contact ${SITE_NAME} — Get a Free Consultation`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@id': ORGANIZATION_ID,
    },
    isPartOf: {
      '@id': WEBSITE_ID,
    },
  };
}
