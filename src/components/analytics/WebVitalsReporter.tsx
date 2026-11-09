'use client';

import { useReportWebVitals } from 'next/web-vitals';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  });

  return null;
}
