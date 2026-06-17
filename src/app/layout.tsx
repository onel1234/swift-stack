import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { LenisProvider } from '@/components/LenisProvider';
import { AdaptiveScale } from '@/components/AdaptiveScale';

export const metadata: Metadata = {
  title: 'Swift Stack — Digital Agency',
  description: 'A premium digital agency where cutting-edge engineering meets world-class design.',
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
