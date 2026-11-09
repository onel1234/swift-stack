import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Onest, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { LenisProvider } from '@/components/LenisProvider';
import { AdaptiveScale } from '@/components/AdaptiveScale';
import { WebVitalsReporter } from '@/components/analytics/WebVitalsReporter';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { DEFAULT_SOCIAL_IMAGES, SITE_NAME, SITE_URL } from '@/lib/site';

const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-onest',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Web Development Company Sri Lanka | Swift Stack Digital',
    template: '%s | Swift Stack Digital',
  },
  description:
    'Swift Stack Digital is a Sri Lanka web development, e-commerce, custom software, SEO, and AI automation company serving Colombo, Sri Lanka, and global clients.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Web Development Company Sri Lanka | Swift Stack Digital',
    description:
      'Custom websites, e-commerce stores, custom CRM software, SEO services, and AI automation built in Sri Lanka for local and international businesses.',
    images: DEFAULT_SOCIAL_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company Sri Lanka | Swift Stack Digital',
    description:
      'Custom websites, e-commerce stores, custom CRM software, SEO services, and AI automation built for growth.',
    images: DEFAULT_SOCIAL_IMAGES.map((img) => img.url),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${onest.variable} ${playfair.variable} ${jakarta.variable} ${onest.className}`}
    >
      <body style={{ fontFamily: 'var(--font-onest), system-ui, sans-serif' }}>
        <AdaptiveScale />
        <WebVitalsReporter />
        <LenisProvider>{children}</LenisProvider>
        <WhatsAppButton />
        {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
