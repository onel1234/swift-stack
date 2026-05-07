import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swift Stack | Web Agency',
  description: 'Architecting the Future of Web Experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
