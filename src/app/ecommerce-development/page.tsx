import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';
import { JsonLd } from '@/components/seo/JsonLd';
import { SERVICES_BY_SLUG } from '@/data/services';
import { getBreadcrumbSchema, getFaqSchema, getServicePageSchema } from '@/lib/schema';
import { DEFAULT_SOCIAL_IMAGES, SITE_NAME, SITE_URL } from '@/lib/site';

const data = SERVICES_BY_SLUG['ecommerce-development'];

export const metadata: Metadata = {
  title: {
    absolute: data.metaTitle,
  },
  description: data.metaDescription,
  alternates: {
    canonical: `/${data.slug}`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/${data.slug}`,
    siteName: SITE_NAME,
    title: data.metaTitle,
    description: data.metaDescription,
    images: DEFAULT_SOCIAL_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: data.metaTitle,
    description: data.metaDescription,
    images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <JsonLd data={getServicePageSchema(data)} />
      <JsonLd data={getFaqSchema(data.faq.items)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/#services' },
          { name: data.breadcrumbLabel, path: `/${data.slug}` },
        ])}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
