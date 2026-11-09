'use client';

import { sendGAEvent } from '@next/third-parties/google';

type EventParams = Record<string, string | number | boolean | undefined>;

function cleanParams(params: EventParams): Record<string, string | number | boolean> {
  const result: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  try {
    sendGAEvent('event', eventName, cleanParams(params));
  } catch {
    // Ignore telemetry errors so user flows never break
  }
}

export function trackLeadSubmission(params: {
  serviceType: string;
  budgetRange?: string;
  currency?: string;
  sourcePage?: string;
}): void {
  trackEvent('generate_lead', {
    service_type: params.serviceType,
    budget_range: params.budgetRange,
    currency: params.currency,
    source_page: params.sourcePage ?? window.location.pathname,
  });
}

export function trackWhatsAppClick(location: string, serviceType?: string): void {
  trackEvent('whatsapp_click', {
    cta_location: location,
    service_type: serviceType,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

export function trackPhoneClick(location: string): void {
  trackEvent('phone_click', {
    cta_location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

export function trackCtaClick(label: string, location: string): void {
  trackEvent('cta_click', {
    cta_label: label,
    cta_location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}
