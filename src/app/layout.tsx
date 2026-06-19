import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { LenisProvider } from '@/components/LenisProvider';
import { AdaptiveScale } from '@/components/AdaptiveScale';

export const metadata: Metadata = {
  title: 'Swift Stack Digital | Web Development & SEO Agency in Sri Lanka',
  description: 'Sri Lanka-based web development agency specializing in full-stack apps, SEO growth, and AI integration. Ship fast, scale big.',
  openGraph: {
    title: 'Swift Stack Digital | Web Development & SEO Agency in Sri Lanka',
    description: 'Sri Lanka-based web development agency specializing in full-stack apps, SEO growth, and AI integration. Ship fast, scale big.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swift Stack Digital | Web Development & SEO Agency in Sri Lanka',
    description: 'Sri Lanka-based web development agency specializing in full-stack apps, SEO growth, and AI integration. Ship fast, scale big.',
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500&display=swap" rel="stylesheet" />
        <AdaptiveScale />
      </head>
      <body style={{ fontFamily: '"Onest", system-ui, sans-serif' }}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
