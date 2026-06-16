import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { LenisProvider } from '@/components/LenisProvider';
import { AdaptiveScale } from '@/components/AdaptiveScale';

export const metadata: Metadata = {
  title: 'Baseline — Tennis Club & Academy',
  description: 'A members\' tennis club and academy where focused coaching meets championship courts.',
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
