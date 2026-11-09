import type { Metadata } from 'next';
import { HomePageClient } from '@/components/HomePageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { HOME_FAQS } from '@/data/faqs';
import {
  getFaqSchema,
  getOrganizationAndServiceGraphSchema,
  getWebSiteSchema,
} from '@/lib/schema';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Web Development Company Sri Lanka | Swift Stack Digital',
  },
  description:
    'Swift Stack Digital builds fast business websites, e-commerce online stores, custom CRM software, technical SEO, and practical AI automation for companies in Sri Lanka and worldwide.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Web Development Company Sri Lanka | Swift Stack Digital',
    description:
      'Custom websites, e-commerce online stores, custom CRM software, SEO services, and AI automation built for business growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company Sri Lanka | Swift Stack Digital',
    description:
      'Custom websites, e-commerce online stores, custom CRM software, SEO services, and AI automation built for business growth.',
  },
};

export default function HomePage() {
  const faqItems = HOME_FAQS.map((item) => ({
    q: item.question,
    a: item.answer,
  }));

  return (
    <>
      <JsonLd data={getOrganizationAndServiceGraphSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <JsonLd data={getFaqSchema(faqItems)} />
      <HomePageClient />
    </>
  );
}
