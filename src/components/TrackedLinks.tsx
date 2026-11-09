'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, SITE_PHONE_E164 } from '@/lib/site';
import { trackCtaClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export function TrackedWhatsAppAnchor({
  location,
  serviceType,
  message,
  className,
  children,
}: {
  location: string;
  serviceType?: string;
  message?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location, serviceType)}
      className={className}
    >
      {children}
    </a>
  );
}

export function TrackedPhoneAnchor({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`tel:${SITE_PHONE_E164}`}
      onClick={() => trackPhoneClick(location)}
      className={className}
    >
      {children}
    </a>
  );
}

export function TrackedCtaLink({
  href,
  label,
  location,
  className,
  children,
}: {
  href: string;
  label: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackCtaClick(label, location)}
      className={className}
    >
      {children}
    </Link>
  );
}
